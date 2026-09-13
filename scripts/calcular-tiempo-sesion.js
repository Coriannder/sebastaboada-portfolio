/**
 * Herramienta de Cálculo Determinista de Tiempos de Sesión (PORTFOLIO)
 *
 * Lee directamente el archivo transcript.jsonl de la sesión activa en el brain del IDE
 * para extraer el timestamp exacto del primer mensaje (incluso tras compactaciones de memoria)
 * y calcular la duración real sin desfasajes.
 *
 * Uso:
 *   node scripts/calcular-tiempo-sesion.js
 *   node scripts/calcular-tiempo-sesion.js --json
 *   node scripts/calcular-tiempo-sesion.js --sync-calendar --title "Mi Sesión" --description "Resumen..."
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const POSSIBLE_BRAIN_DIRS = [
  'C:\\Users\\sebas\\.gemini\\antigravity\\brain',
  'C:\\Users\\sebas\\.gemini\\antigravity-ide\\brain',
];

function findActiveTranscript() {
  const existingBrainDirs = POSSIBLE_BRAIN_DIRS.filter(d => fs.existsSync(d));
  if (existingBrainDirs.length === 0) {
    throw new Error(`No se encontró ningún directorio de brain.`);
  }

  const allTranscripts = [];
  for (const brainDir of existingBrainDirs) {
    const dirs = fs.readdirSync(brainDir, { withFileTypes: true })
      .filter(d => d.isDirectory())
      .map(d => {
        const p = path.join(brainDir, d.name, '.system_generated', 'logs', 'transcript.jsonl');
        const stat = fs.existsSync(p) ? fs.statSync(p) : null;
        return { id: d.name, path: p, mtime: stat ? stat.mtimeMs : 0 };
      })
      .filter(d => d.mtime > 0);
    allTranscripts.push(...dirs);
  }

  allTranscripts.sort((a, b) => b.mtime - a.mtime);

  if (allTranscripts.length === 0) {
    throw new Error('No se encontraron transcripciones de sesiones activas.');
  }

  return allTranscripts[0];
}

function parseTranscript(transcriptPath) {
  const fileContent = fs.readFileSync(transcriptPath, 'utf8');
  const lines = fileContent.split('\n').filter(l => l.trim().length > 0);

  if (lines.length === 0) {
    throw new Error('El archivo de transcripción está vacío.');
  }

  // Primer mensaje absoluto (step_index: 0)
  const firstEntry = JSON.parse(lines[0]);
  let startTime = null;
  let startLocalIso = null;

  if (firstEntry.content) {
    const match = firstEntry.content.match(/The current local time is:\s*([0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}[+\-0-9:]*)/);
    if (match) {
      startLocalIso = match[1];
      startTime = new Date(startLocalIso);
    }
  }

  if (!startTime || isNaN(startTime.getTime())) {
    startTime = new Date(firstEntry.created_at);
    startLocalIso = startTime.toISOString();
  }

  // Último mensaje o tiempo actual
  const lastEntry = JSON.parse(lines[lines.length - 1]);
  let endTime = new Date();
  let endLocalIso = null;

  if (lastEntry.content) {
    const match = lastEntry.content.match(/The current local time is:\s*([0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}[+\-0-9:]*)/);
    if (match) {
      endLocalIso = match[1];
      endTime = new Date(endLocalIso);
    }
  }

  if (!endLocalIso) {
    // Si no tiene local time en el último, ajustamos al timezone local de Buenos Aires (-03:00)
    const now = new Date();
    const tzOffsetMs = 3 * 60 * 60 * 1000;
    const localNow = new Date(now.getTime() - tzOffsetMs);
    endLocalIso = localNow.toISOString().replace('Z', '-03:00');
    endTime = now;
  }

  const durationMs = Math.max(0, endTime.getTime() - startTime.getTime());
  const totalMinutes = Math.round(durationMs / (1000 * 60));
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  let durationFormatted = '';
  if (hours > 0) {
    durationFormatted = `${hours}h ${minutes.toString().padStart(2, '0')}m`;
  } else {
    durationFormatted = `${minutes}m`;
  }

  return {
    conversationId: path.basename(path.dirname(path.dirname(path.dirname(transcriptPath)))),
    startTime,
    endTime,
    startIso: startLocalIso,
    endIso: endLocalIso,
    totalMinutes,
    hours,
    minutes,
    durationFormatted
  };
}

function parseArgs() {
  const args = process.argv.slice(2);
  const params = {};
  for (let i = 0; i < args.length; i++) {
    if (args[i].startsWith('--')) {
      const key = args[i].replace(/^--/, '');
      const value = args[i + 1] && !args[i + 1].startsWith('--') ? args[i + 1] : true;
      params[key] = value;
      if (value !== true) i++;
    }
  }
  return params;
}

function main() {
  const args = parseArgs();
  const activeTranscript = findActiveTranscript();
  const sessionMetrics = parseTranscript(activeTranscript.path);

  if (args.json) {
    console.log(JSON.stringify(sessionMetrics, null, 2));
    return;
  }

  console.log('\n======================================================');
  console.log('⏱️  PORTFOLIO - MÉTRICAS DE TIEMPO REAL DE SESIÓN');
  console.log('======================================================');
  console.log(`🆔 Conversación:     ${sessionMetrics.conversationId}`);
  console.log(`🟢 Inicio Real:      ${sessionMetrics.startIso}`);
  console.log(`🔴 Cierre Real:      ${sessionMetrics.endIso}`);
  console.log(`⏳ Duración Total:   ${sessionMetrics.durationFormatted} (${sessionMetrics.totalMinutes} minutos)`);
  console.log('------------------------------------------------------');

  if (args['sync-calendar']) {
    const title = args.title || 'Portfolio - Modernización y Bento Grid';
    const description = args.description || 'Sesión de desarrollo y refactor en sebastaboada-portfolio';
    const syncScript = path.join(__dirname, 'sync-gcalendar.js');

    console.log('📅 Sincronizando automáticamente con Google Calendar...');
    const cmd = `node "${syncScript}" --title "${title}" --start "${sessionMetrics.startIso}" --end "${sessionMetrics.endIso}" --project "PORTFOLIO" --description "${description.replace(/"/g, '\\"')}"`;
    try {
      const res = execSync(cmd, { encoding: 'utf8' });
      console.log(res);
    } catch (err) {
      console.error('❌ Error al ejecutar sync-gcalendar:', err.message);
    }
  } else {
    console.log('💡 Para sincronizar con Calendar ejecuta:');
    console.log(`node .\\scripts\\calcular-tiempo-sesion.js --sync-calendar --title "Titulo" --description "Resumen"`);
  }
  console.log('======================================================\n');
}

main();
