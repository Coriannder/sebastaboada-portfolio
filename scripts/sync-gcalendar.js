/**
 * Sincronizador de Sesiones con Google Calendar
 * Script para PORTFOLIO que invoca la herramienta global de dev-calendar.
 */

const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const GLOBAL_SYNC_SCRIPT = 'C:\\Users\\sebas\\.config\\dev-calendar\\sync.js';

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
  const rawTitle = args.title || 'Sesión Portfolio';
  const start = args.start;
  const end = args.end;
  const project = args.project || 'PORTFOLIO';
  const rawDescription = args.description || '';

  if (!fs.existsSync(GLOBAL_SYNC_SCRIPT)) {
    console.error(`❌ No se encontró el script global en: ${GLOBAL_SYNC_SCRIPT}`);
    process.exit(1);
  }

  if (!start || !end) {
    console.error('Uso: node scripts/sync-gcalendar.js --title "Titulo" --start "ISO_START" --end "ISO_END" [--project "PORTFOLIO"] [--description "Texto"]');
    process.exit(1);
  }

  // Calcular duración total
  let durationFormatted = '';
  const sDate = new Date(start);
  const eDate = new Date(end);
  if (!isNaN(sDate.getTime()) && !isNaN(eDate.getTime())) {
    const diffMs = Math.max(0, eDate.getTime() - sDate.getTime());
    const totalMinutes = Math.round(diffMs / 60000);
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    durationFormatted = hours > 0 ? `${hours}h ${minutes}m` : `${minutes}m`;
  }

  // Formatear título con duración si no la tiene ya
  let title = rawTitle;
  if (durationFormatted && !rawTitle.includes(durationFormatted)) {
    title = `${rawTitle} (${durationFormatted})`;
  }

  // Formatear descripción con duración explícita
  let description = rawDescription;
  if (durationFormatted) {
    description = `⏱️ Tiempo Total de la Tarea: ${durationFormatted}\n\n${rawDescription}`.trim();
  }

  try {
    const cmd = `node "${GLOBAL_SYNC_SCRIPT}" --title "${title}" --start "${start}" --end "${end}" --project "${project}" --description "${description.replace(/"/g, '\\"')}"`;
    const output = execSync(cmd, { encoding: 'utf8' });
    console.log(output);
  } catch (error) {
    console.error('❌ Error al sincronizar con Google Calendar:', error.message);
    process.exit(1);
  }
}

main();
