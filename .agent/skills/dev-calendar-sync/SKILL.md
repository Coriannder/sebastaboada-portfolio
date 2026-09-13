---
name: dev-calendar-sync
description: Estándar y comando para sincronizar sesiones y bloques de tiempo de desarrollo en Google Calendar.
---

# Dev Calendar Sync Skill

Permite a los agentes registrar automáticamente los bloques de tiempo trabajados en Google Calendar al finalizar una sesión de desarrollo en el portfolio.

## 📍 Herramienta
- Wrapper local: `scripts/sync-gcalendar.js`
- Cálculo determinista de sesión: `scripts/calcular-tiempo-sesion.js`
- Script global: `C:\Users\sebas\.config\dev-calendar\sync.js`

## ⏱️ Sincronización Automática de Sesión

```bash
node .\scripts\calcular-tiempo-sesion.js --sync-calendar --title "<Nombre de la Sesión>" --description "<Resumen Breve>"
```

## 🚀 Invocación Manual

```bash
node .\scripts\sync-gcalendar.js --title "<Nombre de la Sesión>" --start "<ISO_START>" --end "<ISO_END>" --project "PORTFOLIO" --description "<Resumen Breve>"
```
