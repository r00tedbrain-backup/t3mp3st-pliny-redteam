/* =============================================================================
 * T3MP3ST — Spanish UI overlay (VISUAL ONLY)
 * -----------------------------------------------------------------------------
 * Translates ONLY visible UI chrome to Spanish at render time. It never touches
 * the agent/operator PROMPTS, the LLM logic, API paths, model/provider names,
 * challenge names, CWE/OWASP/MITRE taxonomy, slash-commands or code samples —
 * those stay in English on purpose.
 *
 * Safe by construction: it only replaces text that EXACTLY matches a curated
 * dictionary key, so dynamic API data is never mistranslated.
 *
 * Reversible: remove the <script src="i18n-es.js"> line in index.html, or run
 *   localStorage.setItem('t3mp3st_lang','en'); location.reload();
 * (a small ES/EN toggle is added bottom-left).
 * ========================================================================== */
(function () {
  'use strict';

  if (localStorage.getItem('t3mp3st_lang') === 'en') { addToggle('en'); return; }

  // --- Curated EN -> ES dictionary (visible chrome only) ----------------------
  var DICT = {
    // ── Sidebar sections ──
    "Main": "Principal", "Ranges": "Rangos", "Toolkit": "Herramientas",
    "Command": "Mando", "System": "Sistema",
    // ── Sidebar items ──
    "War Room": "Sala de Guerra", "Operatives": "Operativos",
    "Evidence Vault": "Bóveda de Evidencias", "CTF Range": "Rango CTF",
    "Config Library": "Biblioteca de Config", "Self-Improvement": "Autoaprendizaje",
    "Settings": "Ajustes", "About": "Acerca de",
    // ── Header ──
    "⚔️ War Room": "⚔️ Sala de Guerra", "⌘ Actions": "⌘ Acciones",
    "Take the guided tour": "Hacer el tour guiado", "Guided tour": "Tour guiado",
    "▶ Take the guided tour": "▶ Hacer el tour guiado",
    // ── Command header (War Room) ──
    "Mission": "Misión", "Status": "Estado", "Elapsed": "Transcurrido",
    "Findings": "Hallazgos", "Quality": "Calidad", "Backend": "Backend",
    "AI Backbone": "Motor IA", "Local Agents": "Agentes Locales",
    "▶ ENGAGE": "▶ LANZAR", "Launch mission (Enter / Ctrl+Enter)": "Lanzar misión (Enter / Ctrl+Enter)",
    "Pause mission": "Pausar misión", "Abort mission (Esc)": "Abortar misión (Esc)",
    "Manage in Settings": "Gestionar en Ajustes",
    "Client-side LLM call count — backend/keyless missions run server-side (see System Events for live activity)":
      "Contador de llamadas LLM en cliente — las misiones backend/keyless corren en el servidor (mira Eventos del Sistema para actividad en vivo)",
    "Client-side quality-review score — backend/keyless missions gate quality server-side":
      "Puntuación de revisión de calidad en cliente — las misiones backend/keyless controlan la calidad en el servidor",
    // ── SITREP / Ops ──
    "⚓ SITREP": "⚓ PARTE", "SITREP": "PARTE", "Request SITREP": "Pedir PARTE",
    "▌ SYSTEM EVENTS": "▌ EVENTOS DEL SISTEMA",
    "— system events stream (live from the backend) —": "— flujo de eventos del sistema (en vivo del backend) —",
    "Awaiting first situation report...": "Esperando el primer parte de situación...",
    "Situation Reports": "Partes de Situación", "watching the agent work": "observando trabajar al agente",
    "Pause/resume stream": "Pausar/reanudar flujo",
    // ── Keyless / connect callouts ──
    "🔌 Connect in Settings →": "🔌 Conectar en Ajustes →",
    "🔌 Connect Local Agents": "🔌 Conectar Agentes Locales",
    "🔌 Local Agents": "🔌 Agentes Locales",
    "⚡ Connect Selected": "⚡ Conectar seleccionados",
    "Connect an already-authed CLI (Claude Code · Codex · Hermes) or add an API key to start hunting.":
      "Conecta un CLI ya autenticado (Claude Code · Codex · Hermes) o añade una API key para empezar a cazar.",
    "No agent or API backend connected": "Ningún agente o backend de API conectado",
    "Detecting local agents…": "Detectando agentes locales…",
    "no API keys needed": "sin API keys",
    "live-ping on connect": "ping en vivo al conectar",
    "On connect, send a real one-shot prompt to confirm the agent actually responds (spends a little of that agent's quota).":
      "Al conectar, envía un prompt real de una sola vez para confirmar que el agente responde (gasta un poco de la cuota de ese agente).",
    "Enlist agents you've already authed on this machine —": "Enlista agentes que ya has autenticado en esta máquina —",
    "Set up in Settings →": "Configúralo en Ajustes →",
    "Run keyless —": "Corre sin key —",
    "connect Claude Code, Codex, or Hermes": "conecta Claude Code, Codex o Hermes",
    "and T3MP3ST drives missions through your agent's own login (no API key). To run, connect a local agent":
      "y T3MP3ST conduce las misiones con el propio login de tu agente (sin API key). Para ejecutar, conecta un agente local",
    "add a key.": "añade una key.",
    "connect a local agent in": "conecta un agente local en",
    "To start (keyless):": "Para empezar (sin key):",
    ". T3MP3ST detects each CLI and can drive it as an operator. Tick several and connect them all at once.":
      ". T3MP3ST detecta cada CLI y puede manejarlo como operador. Marca varios y conéctalos de una vez.",
    // ── Settings ──
    "🔑 API Keys": "🔑 API Keys", "🤖 Model Selection": "🤖 Selección de Modelo",
    "Select your preferred AI model for agent operations": "Elige tu modelo de IA preferido para las operaciones de los agentes",
    "OpenRouter API Key": "API Key de OpenRouter", "Anthropic API Key": "API Key de Anthropic",
    "OpenAI API Key": "API Key de OpenAI", "Venice API Key": "API Key de Venice",
    "Get key from": "Obtén la key en", "Configure API Keys →": "Configurar API Keys →",
    "Configure your API keys and launch your first mission.": "Configura tus API keys y lanza tu primera misión.",
    "URL of your running T3MP3ST API server (start with": "URL de tu servidor API T3MP3ST en marcha (empieza con",
    "— change if your server runs on a different host/port": "— cámbialo si tu servidor corre en otro host/puerto",
    "Stored, but direct-LLM currently routes via": "Guardada, pero el LLM directo enruta actualmente vía",
    "or a connected agent — not wired to this key yet.": "o un agente conectado — aún no cableado a esta key.",
    "Reset to Defaults": "Restablecer valores", "↺ Reset to Defaults": "↺ Restablecer valores",
    "Clear All Data": "Borrar todos los datos", "Clear Cache": "Vaciar caché",
    // ── Op Admiral (page-general) ──
    "Op Admiral": "Op Admiral", "Mission Contract": "Contrato de Misión",
    "Directive": "Directiva", "Constraints (Optional)": "Restricciones (Opcional)",
    "Scope Hints (Optional)": "Pistas de Alcance (Opcional)", "Rules of Engagement": "Reglas de Enganche",
    "Mission family": "Familia de misión", "Mission Control": "Control de Misión",
    "Op Codename": "Nombre en clave", "Objectives": "Objetivos", "Directive": "Directiva",
    "PLAN OPERATION": "PLANIFICAR OPERACIÓN", "Auto-route from directive": "Auto-enrutar desde la directiva",
    "Admiral's Intent": "Intención del Admiral", "Admiral's Strategic Rationale": "Razonamiento estratégico del Admiral",
    "Give the Admiral a high-level directive and it will autonomously plan the entire operation — identifying targets, allocating operators, setting OPSEC levels, and executing the full kill chain. No manual configuration needed.":
      "Dale al Admiral una directiva de alto nivel y planificará de forma autónoma toda la operación — identificando objetivos, asignando operadores, fijando niveles de OPSEC y ejecutando la kill chain completa. Sin configuración manual.",
    "Describe the authorized operation in normal language. Example: We own this staging API. Find the highest-impact risks, preserve evidence, and give engineering a fix plan.":
      "Describe la operación autorizada en lenguaje normal. Ejemplo: Somos dueños de esta API de staging. Encuentra los riesgos de mayor impacto, preserva la evidencia y da a ingeniería un plan de corrección.",
    "Let Op Admiral guide the setup — a few quick questions to scope your hunt":
      "Deja que Op Admiral guíe la configuración — unas pocas preguntas rápidas para acotar tu caza",
    // ── OPSEC / cognitive / options ──
    "OPSEC Level": "Nivel OPSEC", "OPSEC Control": "Control OPSEC", "Mode": "Modo",
    "Model": "Modelo", "Role": "Rol", "Type": "Tipo", "Severity": "Severidad", "Urgency": "Urgencia",
    "Stealth": "Sigilo", "Aggressive": "Agresivo", "Normal": "Normal", "Adaptive": "Adaptativo",
    "Sequential": "Secuencial", "Parallel": "Paralelo", "Balanced speed and noise level": "Velocidad y ruido equilibrados",
    "Minimize detection risk — slower, quieter scans": "Minimiza el riesgo de detección — escaneos más lentos y silenciosos",
    "Maximum speed, no stealth — may trigger IDS/WAF": "Velocidad máxima, sin sigilo — puede disparar IDS/WAF",
    "Silent (Passive Only)": "Silencioso (solo pasivo)", "Covert (Default)": "Encubierto (por defecto)",
    "Loud (Max Coverage)": "Ruidoso (cobertura máxima)", "Low (Thorough)": "Bajo (minucioso)",
    "High (Fast)": "Alto (rápido)", "Custom Deployment": "Despliegue personalizado",
    // ── Common buttons / labels ──
    "Save": "Guardar", "Test": "Probar", "Reset": "Restablecer", "Clear": "Limpiar",
    "Refresh": "Actualizar", "🔄 Refresh": "🔄 Actualizar", "Search": "Buscar",
    "Export": "Exportar", "Export Report": "Exportar informe", "Export Results": "Exportar resultados",
    "📥 Export Results": "📥 Exportar resultados", "📥 Download Report": "📥 Descargar informe",
    "Import from file": "Importar desde archivo", "From File": "Desde archivo", "Bulk Import": "Importación masiva",
    "Run": "Ejecutar", "Reconnect": "Reconectar", "Recall": "Retirar", "Reset": "Restablecer",
    "Deploy All": "Desplegar todo", "Show": "Mostrar", "All": "Todos", "None": "Ninguno",
    "Abort": "Abortar", "⏹️ Stop": "⏹️ Parar", "⏹️ Stop All": "⏹️ Parar todo", "▶️ Start All": "▶️ Iniciar todo",
    "Copy All": "Copiar todo", "Copy Snapshot": "Copiar instantánea", "Copy a plain-English mission snapshot.": "Copia una instantánea de la misión en lenguaje llano.",
    "Enter command...": "Escribe un comando...", "Type 'help' for commands": "Escribe 'help' para ver comandos",
    "🔎 Search tools...": "🔎 Buscar herramientas...", "Search tools...": "Buscar herramientas...",
    "Loading models...": "Cargando modelos...", "Loading self-improvement loops…": "Cargando bucles de autoaprendizaje…",
    "Initializing...": "Inicializando...", "Checking...": "Comprobando...",
    "Analyzing performance data...": "Analizando datos de rendimiento...",
    "History": "Historial", "🗑️ Clear History": "🗑️ Borrar historial", "Mission history": "Historial de misiones",
    // ── Empty states ──
    "No targets": "Sin objetivos", "No operator": "Sin operador",
    "No tools approved yet.": "Aún no hay herramientas aprobadas.",
    "No tools assigned - click tools below to add to the loadout": "Sin herramientas asignadas - haz clic abajo para añadirlas al equipo",
    "No saved configurations yet": "Aún no hay configuraciones guardadas",
    "No findings yet. Engage a mission to discover vulnerabilities.": "Aún no hay hallazgos. Lanza una misión para descubrir vulnerabilidades.",
    "No findings yet. Start a mission to collect evidence.": "Aún no hay hallazgos. Inicia una misión para recopilar evidencia.",
    "No execution results yet. Run the benchmark to see agent performance.": "Aún no hay resultados de ejecución. Corre el benchmark para ver el rendimiento del agente.",
    // ── Settings / Arsenal / Evidence panels ──
    "Tool Arsenal": "Arsenal de Herramientas", "ARSENAL CONTROL": "CONTROL DEL ARSENAL",
    "Tools": "Herramientas", "Tools Ready": "Herramientas listas", "All tools": "Todas las herramientas",
    "Categories": "Categorías", "All Categories": "Todas las categorías", "Category": "Categoría",
    "Evidence": "Evidencia", "Evidence Ledger": "Libro de Evidencias", "Evidence Workbench": "Banco de Evidencias",
    "Findings & Loot": "Hallazgos y Botín", "Hunt Queue": "Cola de Caza", "Work Order Board": "Tablero de Órdenes",
    "Target": "Objetivo", "Targets": "Objetivos", "Target Intake": "Recepción de Objetivos",
    "Host": "Host", "Scope": "Alcance", "Access": "Acceso", "Coverage": "Cobertura",
    "Autonomous Operatives": "Operativos Autónomos", "Autonomous Operations": "Operaciones Autónomas",
    "Model Selection": "Selección de Modelo", "Orchestration": "Orquestación",
    "Reporting": "Informes", "Assessment will be generated after operation completes or on demand.": "La evaluación se generará al terminar la operación o bajo demanda.",
    // ── About page ──
    "🌩️ Coverage by domain": "🌩️ Cobertura por dominio", "LLM Backbone": "Motor LLM",
    "Turn the AI coding agent you already run into a red team.": "Convierte el agente de código IA que ya usas en un red team.",
    "Multiple AI providers: OpenRouter, Anthropic, OpenAI, or local models via Ollama.":
      "Múltiples proveedores de IA: OpenRouter, Anthropic, OpenAI, o modelos locales vía Ollama.",
    "Secure storage for findings, credentials, and attack paths.": "Almacenamiento seguro de hallazgos, credenciales y rutas de ataque.",
    "Extensible tool registry with automatic capability discovery.": "Registro de herramientas extensible con descubrimiento automático de capacidades.",
    "Coordinate complex operations with intelligent task delegation.": "Coordina operaciones complejas con delegación inteligente de tareas.",
    "Configurable stealth levels from quiet recon to aggressive exploitation.": "Niveles de sigilo configurables, del recon silencioso a la explotación agresiva.",
    "A domain lights up only when there's a benchmark behind it. Greyed tiles are in development.":
      "Un dominio se ilumina solo cuando hay un benchmark detrás. Las casillas grises están en desarrollo.",
    "Getting started": "Primeros pasos", "Installation": "Instalación", "Team Preview": "Vista previa para equipos",
    "Quick Start": "Inicio rápido", "🚀 Quick Start": "🚀 Inicio rápido", "🚀 Quick Setup": "🚀 Config rápida",
    // ── Guided / demos ──
    "Guided Starts": "Inicios guiados", "⚓ Guided": "⚓ Guiado", "▶ ONE-CLICK DEMO": "▶ DEMO DE UN CLIC",
    "Quick Demo": "Demo rápida", "Quick Launch": "Lanzamiento rápido", "Quick Recon": "Recon rápido",
    "Auto-deploys operators, adds a test target, and launches. No API key needed if a local agent is connected.":
      "Auto-despliega operadores, añade un objetivo de prueba y lanza. No hace falta API key si hay un agente local conectado.",
    "🎯 START A ZERO-DAY HUNT": "🎯 INICIAR UNA CAZA ZERO-DAY", "🎯 HUNT": "🎯 CAZAR", "HUNT": "CAZAR",
    "Ready to Start?": "¿Listo para empezar?", "Getting started": "Primeros pasos",
    // ── Welcome / tour ──
    "👋 Welcome to T3MP3ST": "👋 Bienvenido a T3MP3ST",
    "Got it — I'll explore on my own": "Entendido — exploraré por mi cuenta",
    "T3MP3ST is an AI-driven offensive-security workbench — you point operators at a target and it hunts, validates, and reports findings.":
      "T3MP3ST es un banco de trabajo de seguridad ofensiva con IA — apuntas los operadores a un objetivo y caza, valida e informa hallazgos.",
    // ── Status words (safe, static usages) ──
    "Offline": "Sin conexión", "Unknown": "Desconocido", "installed": "instalado", "not run": "sin ejecutar",
    "Pause": "Pausar", "Resume": "Reanudar", "Stop": "Parar", "Start": "Iniciar", "Cancel": "Cancelar",
    "Close": "Cerrar", "Apply": "Aplicar", "OK": "OK", "Yes": "Sí", "No": "No",

    // ══════════ DEEP PANELS (operator board) ══════════
    "Operator Clarity Layer": "Capa de Claridad del Operador",
    "Current truth, next move, and proof pressure for the active hunt.": "Verdad actual, siguiente paso y presión de pruebas para la caza activa.",
    "Toggle compact density for the clarity layer.": "Alternar densidad compacta de la capa de claridad.",
    "Compact": "Compacta", "First Blocker": "Primer bloqueo",
    "Jump to the first blocker or priority action.": "Salta al primer bloqueo o acción prioritaria.",
    "Operator Inbox": "Bandeja del Operador", "Set target": "Fijar objetivo",
    "Choose the authorized surface before interpreting hunt status.": "Elige la superficie autorizada antes de interpretar el estado de la caza.",
    "Stage route": "Preparar ruta", "Stage": "Preparar",
    "Split the mission into lanes, tools, gates, and evidence expectations.": "Divide la misión en carriles, herramientas, puertas y expectativas de evidencia.",
    "Close tool gaps": "Cerrar huecos de herramientas",
    "Run a close-to-action stale-state and gate sanity pass.": "Ejecuta una pasada de estado obsoleto y sanidad de puertas cercana a la acción.",
    "Gate Snapshot": "Instantánea de Puerta", "Target unclear": "Objetivo poco claro",
    "Pick an owned app, repo, package, range, model, or keep the local lab.": "Elige una app, repo, paquete, rango o modelo propio, o mantén el laboratorio local.",
    "Proof State": "Estado de Prueba", "Hypothesis": "Hipótesis", "Work Order": "Orden de Trabajo",
    "Finding": "Hallazgo", "Retest": "Reverificación", "Retests": "Reverificaciones", "retest": "reverificación",
    "Memory": "Memoria", "Mission Spine": "Columna de la Misión",
    "Recorder, proof, tasks, target intake, and training range folded into one operator surface.": "Grabadora, pruebas, tareas, recepción de objetivos y rango de entrenamiento en una sola superficie de operador.",
    "▸ Expand": "▸ Expandir", "Expand": "Expandir",
    "Slash grammar, route preview, agent lanes, memory, computer-use, and evidence gates folded into the original T3MP3ST war room.": "Gramática de slash, vista previa de ruta, carriles de agente, memoria, uso de ordenador y puertas de evidencia integrados en la sala de guerra original de T3MP3ST.",
    "catalog tools": "herramientas de catálogo", "wired": "cableado", "agent memory": "memoria del agente",
    "egress gated": "egreso controlado", "Zero-Day Hunt Pulse": "Pulso de Caza Zero-Day",
    "Specialist Swarm": "Enjambre de Especialistas",
    "Primary squad for this hunt. It should turn the mission into concrete hypotheses and proof tasks around deps, secrets, release trust.": "Escuadrón principal de esta caza. Debe convertir la misión en hipótesis concretas y tareas de prueba sobre dependencias, secretos y confianza de releases.",
    "No proof attached yet": "Aún no hay pruebas adjuntas",
    "Confirm the real authorized target or keep using the local lab.": "Confirma el objetivo real autorizado o sigue usando el laboratorio local.",
    "Swarm Cognition Loop": "Bucle de Cognición del Enjambre", "Mission Brain": "Cerebro de la Misión",
    "Task Splitter": "Divisor de Tareas", "Tool Planner": "Planificador de Herramientas", "Proof Engine": "Motor de Pruebas",
    "No tool plan staged yet.": "Aún no hay plan de herramientas preparado.",
    "No swarm tool plan staged yet.": "Aún no hay plan de herramientas del enjambre preparado.",
    "Reasoning Bus": "Bus de Razonamiento", "Human": "Humano", "Specialists": "Especialistas", "Skeptic": "Escéptico",
    "Knowledge Atlas": "Atlas de Conocimiento", "Agent Prompt Packs": "Packs de Prompt de Agente",
    "Forefront Radar": "Radar de Vanguardia", "review kit": "kit de revisión",
    "Capability Preflight": "Preverificación de Capacidad", "Tool Adapter Forge": "Fábrica de Adaptadores",
    "API server": "Servidor API", "State storage": "Almacenamiento de estado", "LLM provider": "Proveedor LLM",
    "Core tools": "Herramientas base", "Recon tools": "Herramientas de recon", "Tool adapter catalog": "Catálogo de adaptadores",
    "Installed now": "Instaladas ahora", "Missing high-value tools": "Faltan herramientas de alto valor",
    "Held behind gates": "Retenidas tras puertas",
    "log evidence": "registrar evidencia", "log finding": "registrar hallazgo", "View evidence chain": "Ver cadena de evidencia",
    "no evidence yet": "aún no hay evidencia", "No evidence yet": "Aún no hay evidencia",
    "Hypothesis Graph": "Grafo de Hipótesis", "claim map": "mapa de afirmaciones",
    "seed a hypothesis from evidence": "siembra una hipótesis desde la evidencia", "hunt queue": "cola de caza",
    "decompose a hypothesis": "descompón una hipótesis", "Watch Loop": "Bucle de Vigilancia",
    "No active hypothesis": "Sin hipótesis activa", "Seed a hypothesis from the mission contract.": "Siembra una hipótesis desde el contrato de misión.",
    "The Fixer": "El Reparador", "Watch Loop missing pulse": "Al Bucle de Vigilancia le falta pulso",
    "Pulse the Watch Loop so the operator sees current gaps.": "Pulsa el Bucle de Vigilancia para que el operador vea los huecos actuales.",
    "Arsenal gap detected": "Hueco en el arsenal detectado",
    "Use installed fallbacks for this run and install missing tools before deeper coverage.": "Usa los respaldos instalados para esta ejecución e instala las herramientas que faltan antes de una cobertura más profunda.",
    "Findings / Retest": "Hallazgos / Reverificación", "no findings yet": "aún no hay hallazgos", "No findings yet": "Aún no hay hallazgos",
    "Repro Packs": "Packs de Reproducción", "no packs": "sin packs",
    "promote findings, then build": "promueve hallazgos, luego construye", "Pressure Paths": "Rutas de Presión",
    "no pressure paths": "sin rutas de presión", "build repro packs, then plan": "construye packs de reproducción, luego planifica",
    "Next Moves": "Siguientes Movimientos", "Repository Trust": "Confianza del Repositorio", "Repo scope": "Alcance del repo",
    "Name the repository/path, branches, package ecosystems, and CI/CD systems in scope.": "Nombra el repositorio/ruta, ramas, ecosistemas de paquetes y sistemas CI/CD en alcance.",
    "Trust map": "Mapa de confianza",
    "Review dependency health, workflow permissions, provenance, and release controls.": "Revisa la salud de dependencias, permisos de workflows, procedencia y controles de release.",
    "Patch plan": "Plan de parches", "Turn the trust map into owner actions and retests.": "Convierte el mapa de confianza en acciones de responsables y reverificaciones.",
    "Apply the repo guided start": "Aplicar el inicio guiado de repo", "Run field drill": "Ejecutar simulacro de campo",
    "launch gate": "puerta de lanzamiento", "Learning Capsule": "Cápsula de Aprendizaje", "silent learning": "aprendizaje silencioso",
    "review -> accept": "revisar -> aceptar", "run review after evidence/retest": "ejecuta revisión tras evidencia/reverificación", "capsule": "cápsula",
    "plain text -> route": "texto plano -> ruta", "Agent Lanes": "Carriles de Agente", "bounded delegation": "delegación acotada",
    "receipts": "recibos", "summary": "resumen", "artifacts": "artefactos", "screens": "capturas",
    "Evidence Gates": "Puertas de Evidencia", "before claims harden": "antes de que las afirmaciones se consoliden",
    "owned target, allowed actions": "objetivo propio, acciones permitidas", "artifact, log, screenshot, diff": "artefacto, log, captura, diff",
    "false-positive and impact review": "revisión de falsos positivos e impacto", "active tools require approval": "las herramientas activas requieren aprobación",
    "optional replay when needed": "reproducción opcional cuando haga falta", "Judge": "Juez", "Proof": "Prueba", "Receipt": "Recibo", "Range": "Rango",
    "Route Preview": "Vista previa de ruta", "Tool Plan": "Plan de herramientas", "Proof Chain": "Cadena de pruebas",
    "Specialist Work Orders": "Órdenes de Trabajo de Especialistas", "Hunt Lanes": "Carriles de Caza",

    // ══════════ Op Admiral page ══════════
    "★ THE ADMIRAL — Autonomous Op Orchestrator": "★ EL ADMIRAL — Orquestador Autónomo de Ops",
    "Give the Admiral a high-level directive and it will autonomously plan the entire operation — identifying targets, allocating operators, setting OPSEC levels, and executing the full kill chain. No manual configuration needed.": "Dale al Admiral una directiva de alto nivel y planificará de forma autónoma toda la operación — identificando objetivos, asignando operadores, fijando niveles de OPSEC y ejecutando la kill chain completa. Sin configuración manual.",
    "Operation Plan": "Plan de Operación", "Route Preview": "Vista previa de ruta",

    // ══════════ Operators page ══════════
    "🤖 Operator Archetypes": "🤖 Arquetipos de Operador", "🤖 Specialist Roster": "🤖 Plantilla de Especialistas",
    "Active Formation": "Formación Activa", "No operators configured": "Sin operadores configurados",
    "Click any operative to view + edit its prompt · tools · sampling params": "Haz clic en cualquier operativo para ver + editar su prompt · herramientas · parámetros de muestreo",
    "Click to edit prompt · tools · params": "Clic para editar prompt · herramientas · parámetros",
    "Edit prompt · tools · params": "Editar prompt · herramientas · parámetros", "⚙ Edit": "⚙ Editar", "🤖 Run Agent": "🤖 Ejecutar Agente",
    "Specialized in OSINT, network discovery, and asset enumeration": "Especializado en OSINT, descubrimiento de red y enumeración de activos",
    "Identifies vulnerabilities and security misconfigurations": "Identifica vulnerabilidades y configuraciones inseguras",
    "Executes exploits and achieves initial access": "Ejecuta exploits y consigue acceso inicial",
    "Moves through networks and escalates privileges": "Se mueve por las redes y escala privilegios",
    "Collects and extracts sensitive data": "Recoge y extrae datos sensibles",
    "Establishes persistence and covers tracks": "Establece persistencia y borra rastros",
    "Orchestrates operations and manages agents": "Orquesta operaciones y gestiona agentes",
    "Analyzes findings and generates reports": "Analiza hallazgos y genera informes",
    "Reconnaissance Operator": "Operador de Reconocimiento", "Security Analyst": "Analista de Seguridad",
    "Exploitation Specialist": "Especialista en Explotación", "Lateral Movement Specialist": "Especialista en Movimiento Lateral",
    "Data Exfiltration Specialist": "Especialista en Exfiltración de Datos", "Persistence Specialist": "Especialista en Persistencia",
    "Mission Coordinator": "Coordinador de Misión",
    "Reconnaissance": "Reconocimiento", "Lateral movement": "Movimiento lateral", "Vulnerability exploitation": "Explotación de vulnerabilidades",
    "Data extraction": "Extracción de datos", "Network scanning": "Escaneo de red",
    "Recon Squad": "Escuadrón de Recon", "Strike Team": "Equipo de Asalto", "Stealth Ops": "Ops Sigilosas",
    "APT Simulation": "Simulación APT", "Web Assault": "Asalto Web", "AD Attack": "Ataque AD",
    "Balanced offensive team with full attack capability": "Equipo ofensivo equilibrado con capacidad de ataque completa",
    "Intelligence gathering focus - passive reconnaissance only": "Enfoque en recopilación de inteligencia - solo reconocimiento pasivo",
    "Exploitation-focused team for rapid initial access": "Equipo centrado en explotación para acceso inicial rápido",
    "Low-noise operations with evasion focus": "Operaciones de bajo ruido con foco en evasión",
    "Advanced persistent threat emulation with full coordination": "Emulación de amenaza persistente avanzada con coordinación completa",
    "Web application testing specialists": "Especialistas en pruebas de aplicaciones web",
    "Active Directory focused attack team": "Equipo de ataque centrado en Active Directory",
    "Complete MITRE ATT&CK coverage with all operators": "Cobertura completa de MITRE ATT&CK con todos los operadores",

    // ══════════ Guided starts ══════════
    "I own a web app": "Tengo una app web",
    "Check an owned site or staging app for common high-impact web and API risks, then return a fix plan.": "Revisa un sitio propio o app de staging en busca de riesgos web y de API comunes de alto impacto, y devuelve un plan de corrección.",
    "I need to test an AI agent": "Necesito probar un agente de IA",
    "Map prompt, tool, memory, and autonomy boundaries for an AI system without confusing refusal behavior for real security.": "Mapea las fronteras de prompt, herramientas, memoria y autonomía de un sistema de IA sin confundir el rechazo con seguridad real.",
    "I have a repo to harden": "Tengo un repo que endurecer",
    "Review a repository for dependency, CI/CD, secret, release, and provenance risk.": "Revisa un repositorio en busca de riesgo de dependencias, CI/CD, secretos, releases y procedencia.",
    "I have a list of CVEs": "Tengo una lista de CVEs",
    "Turn vulnerability noise into a ranked patch queue using exploitation and business context.": "Convierte el ruido de vulnerabilidades en una cola de parches priorizada usando explotación y contexto de negocio.",
    "Explain this to leadership": "Explica esto a dirección",
    "Translate technical evidence into plain-English risk, decisions, owners, and next actions.": "Traduce la evidencia técnica a riesgo en lenguaje llano, decisiones, responsables y siguientes acciones.",

    // ══════════ Knowledge Atlas descriptions ══════════
    "You need attacker pattern context, abuse cases, or threat-modeling ideas.": "Necesitas contexto de patrones de atacante, casos de abuso o ideas de modelado de amenazas.",
    "You need to know whether a CVE is known to be exploited in the wild.": "Necesitas saber si un CVE es explotado activamente en la práctica.",
    "You need root-cause language for software weaknesses and engineering remediation.": "Necesitas lenguaje de causa raíz para debilidades de software y remediación de ingeniería.",
    "You need exploit-likelihood scoring for vulnerability prioritization.": "Necesitas puntuación de probabilidad de explotación para priorizar vulnerabilidades.",
    "You are testing AI/ML systems, agentic workflows, model boundaries, or AI supply chains.": "Estás probando sistemas de IA/ML, flujos agénticos, fronteras de modelo o cadenas de suministro de IA.",
    "You need adversary tactics, technique names, or defensive coverage language for enterprise operations.": "Necesitas tácticas de adversario, nombres de técnicas o lenguaje de cobertura defensiva para operaciones empresariales.",
    "You need governance, risk management, or stakeholder reporting structure for AI systems.": "Necesitas gobernanza, gestión de riesgos o estructura de informes para sistemas de IA.",
    "You need CVSS, CPE, CWE, references, or vulnerability metadata for CVEs.": "Necesitas CVSS, CPE, CWE, referencias o metadatos de vulnerabilidad para CVEs.",

    // ══════════ Forefront Radar ══════════
    "Can hostile or low-trust content steer the agent toward a tool, permission, memory write, or delegation it should not perform?": "¿Puede contenido hostil o de baja confianza dirigir al agente hacia una herramienta, permiso, escritura en memoria o delegación que no debería hacer?",
    "Can a page, file, extension, or session state cause an agent to confuse observation with instruction or user intent?": "¿Puede una página, archivo, extensión o estado de sesión hacer que un agente confunda observación con instrucción o intención del usuario?",
    "Can a small repo, dependency, workflow, or release metadata change move from suggestion to production without the right provenance checks?": "¿Puede un pequeño cambio en repo, dependencia, workflow o metadatos de release pasar de sugerencia a producción sin las comprobaciones de procedencia adecuadas?",
    "Can an attacker make the agent act as the wrong person, overtrust a message, or leak account context across roles?": "¿Puede un atacante hacer que el agente actúe como la persona equivocada, confíe de más en un mensaje o filtre contexto de cuenta entre roles?",

    // ══════════ Benchmarks / CTF ══════════
    "🎯 Challenge Browser": "🎯 Explorador de Retos", "Range Status": "Estado del Rango", "📊 Range Status": "📊 Estado del Rango",
    "Challenges Solved": "Retos Resueltos", "Tests Passed": "Tests Superados", "Total Points": "Puntos Totales",
    "Overall Score": "Puntuación Global", "📊 Overall Results": "📊 Resultados Globales", "📈 Results & History": "📈 Resultados e Historial",
    "Time Limit (per challenge)": "Límite de tiempo (por reto)", "Load Cybench (40 tasks)": "Cargar Cybench (40 tareas)",
    "Load NYU CTF (50 tasks)": "Cargar NYU CTF (50 tareas)", "🚀 Run Full Benchmark": "🚀 Ejecutar Benchmark Completo",
    "Industry Benchmarks": "Benchmarks del Sector", "🧠 AI Performance Analysis": "🧠 Análisis de Rendimiento IA",
    "Generate Analysis": "Generar Análisis", "Generate Assessment": "Generar Evaluación", "Strategic Assessment": "Evaluación Estratégica",
    "🔴 Attack Plan Generation": "🔴 Generación de Plan de Ataque", "🔴 Live Test": "🔴 Prueba en Vivo",
    "🔴 Multi-Agent Coordination": "🔴 Coordinación Multi-Agente", "🔴 Real-Time Adaptation": "🔴 Adaptación en Tiempo Real",
    "🤖 Agent Execution": "🤖 Ejecución de Agente", "⚙️ Multi-Agent Swarm": "⚙️ Enjambre Multi-Agente",
    "⚙️ Kill Chain Coverage": "⚙️ Cobertura de Kill Chain", "⚙️ LLM API Operational": "⚙️ API LLM Operativa",
    "⚙️ Config Check": "⚙️ Chequeo de Config", "Avg Time (ms)": "Tiempo medio (ms)", "Agent Success Rate": "Tasa de Éxito del Agente",
    "Accuracy": "Precisión", "All Tests (48+)": "Todos los tests (48+)", "Challenge": "Reto",
    "Get started with execution-based CTF benchmarks in minutes. Requires Docker installed locally.": "Empieza con benchmarks CTF basados en ejecución en minutos. Requiere Docker instalado localmente.",
    "Build Docker images for CTF challenges.": "Construye imágenes Docker para los retos CTF.",
    "Start all challenge containers.": "Inicia todos los contenedores de retos.",
    "Verify Docker daemon is running and accessible.": "Verifica que el daemon de Docker esté en marcha y accesible.",
    "🔍 Check Docker": "🔍 Comprobar Docker", "🔨 Build All Images": "🔨 Construir todas las imágenes",
    "Containers Running": "Contenedores en marcha", "📋 Manual Commands (run in terminal)": "📋 Comandos manuales (ejecutar en terminal)",
    "🚀 Launch Range": "🚀 Lanzar Rango", "Real CTF challenges from Cybench & NYU CTF Bench": "Retos CTF reales de Cybench y NYU CTF Bench",
    "Fetches real challenge descriptions, source code & flags from GitHub. Scores are comparable to published results. Cached for 24h.": "Obtiene descripciones de retos, código fuente y flags reales desde GitHub. Las puntuaciones son comparables con los resultados publicados. En caché 24h.",

    // ══════════ Self-Improvement ══════════
    "📈 OBSIDIVM": "📈 OBSIDIVM", "OBSIDIVM Evolution": "Evolución OBSIDIVM",
    "📈 Evolution Timeline — recent self-improvement": "📈 Línea de tiempo de evolución — autoaprendizaje reciente",
    "🔧 Recommended Improvements": "🔧 Mejoras recomendadas", "🔄 Run Improvement Loop Only": "🔄 Ejecutar solo el bucle de mejora",
    "🔄 Auto-Improve After": "🔄 Auto-mejorar después de",
    "Manage how the harness improves itself — cadence, how each loop thinks, what it may change, and whether changes need your approval.": "Gestiona cómo se mejora a sí mismo el harness — cadencia, cómo piensa cada bucle, qué puede cambiar y si los cambios necesitan tu aprobación.",
    "Desired cadence": "Cadencia deseada", "hourly": "cada hora", "daily": "diaria", "weekly": "semanal",
    "Autonomy — how changes land": "Autonomía — cómo aterrizan los cambios",
    "Loops surface changes; you accept/reject. (Default.)": "Los bucles proponen cambios; tú aceptas/rechazas. (Por defecto.)",
    "Propose for approval": "Proponer para aprobación", "Auto-apply": "Auto-aplicar", "🤖 Auto-Apply": "🤖 Auto-aplicar",
    "Accept threshold (0–1)": "Umbral de aceptación (0–1)", "❄ Freeze all self-improvement": "❄ Congelar todo el autoaprendizaje",
    "Safety Rail": "Barrera de Seguridad", "Only the OBSIDIVM confidence gate. Never memory, never source.": "Solo la puerta de confianza de OBSIDIVM. Nunca la memoria, nunca la fuente.",
    "No pending proposals. Run a review pass to distill facts from recent runs.": "Sin propuestas pendientes. Ejecuta una pasada de revisión para destilar hechos de ejecuciones recientes.",
    "↻ Run a review pass": "↻ Ejecutar una pasada de revisión", "⤢ Re-show last summary": "⤢ Volver a mostrar el último resumen",
    "Distills facts from runs into proposals you accept — persistent knowledge across missions. Human-gated by design.": "Destila hechos de las ejecuciones en propuestas que tú aceptas — conocimiento persistente entre misiones. Con control humano por diseño.",
    "Core cross-mission telemetry.": "Telemetría central entre misiones.", "Self-Reflection Loops": "Bucles de Autorreflexión",
    "🧠 Cognitive Architecture Settings": "🧠 Ajustes de Arquitectura Cognitiva",

    // ══════════ Config Library ══════════
    "💾 Save Current Config": "💾 Guardar config actual", "💾 Saved Configurations": "💾 Configuraciones guardadas",
    "📊 Current Configuration": "📊 Configuración actual", "Optimized Configuration": "Configuración optimizada",
    "✓ Apply Configuration": "✓ Aplicar configuración", "✨ Applied Configuration Changes": "✨ Cambios de configuración aplicados",
    "⚙️ Suggested Config Changes": "⚙️ Cambios de config sugeridos", "⭐ Load Default": "⭐ Cargar por defecto",
    "Sort by Date": "Ordenar por fecha", "Sort by Name": "Ordenar por nombre", "Sort by Score": "Ordenar por puntuación",
    "Run a benchmark to see current config performance": "Ejecuta un benchmark para ver el rendimiento de la config actual",
    "Run benchmarks and save your best performing configs": "Ejecuta benchmarks y guarda tus configs de mejor rendimiento",

    // ══════════ Settings extras ══════════
    "🔄 Fallback Model": "🔄 Modelo de respaldo", "Disable Fallback": "Desactivar respaldo",
    "Auto-retries with this model if the primary fails (refusal, timeout, error)": "Reintenta con este modelo si el principal falla (rechazo, timeout, error)",
    "Judge model": "Modelo juez", "🧠 LLM-as-Judge": "🧠 LLM-como-Juez", "Elite arbiter reviews all outputs": "Un árbitro de élite revisa todas las salidas",
    "Cognitive Mode: How operators coordinate their reasoning.": "Modo Cognitivo: cómo coordinan su razonamiento los operadores.",
    "OPSEC Level: Controls how aggressive operators are. Stealth = slow & quiet, Aggressive = fast & noisy.": "Nivel OPSEC: controla lo agresivos que son los operadores. Sigilo = lento y silencioso, Agresivo = rápido y ruidoso.",

    // ══════════ Common controls / states ══════════
    "Next": "Siguiente", "Next →": "Siguiente →", "← Back": "← Atrás", "Skip tour": "Saltar tour", "Done": "Hecho",
    "Open": "Abrir", "Connect": "Conectar", "Detected": "Detectado", "Not installed": "No instalado", "Not Built": "No construido",
    "Running": "En marcha", "stopped": "parado", "▶ Deploy": "▶ Desplegar", "⬡ Deploy all": "⬡ Desplegar todo",
    "⧉ Copy": "⧉ Copiar", "Force Allocation": "Forzar asignación", "Hide Setup": "Ocultar configuración",
    "Max Attempts": "Máx. intentos", "Retry on rejection (max 2)": "Reintentar al rechazar (máx 2)",
    "Assign to operator...": "Asignar a operador...", "Pick an operator before assignment.": "Elige un operador antes de asignar.",
    "No targets defined": "Sin objetivos definidos", "Authorized targets": "Objetivos autorizados",
    "Examples:": "Ejemplos:", "🤖 AUTONOMOUS MODE": "🤖 MODO AUTÓNOMO", "🤖 Autonomous Operations": "🤖 Operaciones Autónomas",
    "🤖 Autonomous Ops": "🤖 Ops Autónomas", "Auto Ops": "Ops Automáticas", "Force Allocation": "Forzar asignación",
    ", or paste an API key there.": ", o pega ahí una API key.", "Then:": "Luego:", "type a target and hit": "escribe un objetivo y pulsa",
    "or": "o", "run": "ejecuta",
    "Point T3MP3ST at any authorized target and watch it work: live recon with real tools (nmap, DNS, HTTP probes), every finding provenance-gated to the command that produced it — no phantom flags. An LLM reasons over that ground truth in the open. Kill-chain phases past recon are labeled for what they are — no fake pwns, no vibes. Don't take our word for it:": "Apunta T3MP3ST a cualquier objetivo autorizado y míralo trabajar: recon en vivo con herramientas reales (nmap, DNS, sondas HTTP), cada hallazgo ligado por procedencia al comando que lo produjo — sin flags fantasma. Un LLM razona sobre esa verdad de base a la vista. Las fases de la kill chain más allá del recon están etiquetadas por lo que son — sin pwns falsos, sin humo. No te fíes de nuestra palabra:",
    " and re-derive every number yourself. Only test what you own or have written permission to assess.": " y vuelve a derivar cada número tú mismo. Prueba solo lo que es tuyo o para lo que tienes permiso escrito.",
    "routes, auth, data flow": "rutas, auth, flujo de datos", "tools, memory, prompts": "herramientas, memoria, prompts",
    "identity, services, exposure": "identidad, servicios, exposición", "keys, contracts, protocols": "claves, contratos, protocolos",
    "binaries, firmware, formats": "binarios, firmware, formatos", "people, assets, public signals": "personas, activos, señales públicas",
    "impact, fixes, retests": "impacto, correcciones, reverificaciones"
  };

  // Elements whose live text is managed by JS state logic — never rewrite their VALUE.
  // (labels around them are still translated; only these value holders are skipped.)
  var SKIP_IDS = {
    cmdMissionName:1, cmdMissionStatus:1, cmdElapsed:1, cmdApiCalls:1, statFindings:1,
    cmdQualityPct:1, cmdThreatLevel:1, sysBackend:1, sysLLM:1, sysAgents:1,
    sitrepStatus:1, sitrepHeadline:1, connectionText:1, connectionStatus:1
  };
  var SKIP_TAGS = { SCRIPT:1, STYLE:1, TEXTAREA:1, CODE:1, PRE:1, INPUT:1, NOSCRIPT:1 };

  function isSkipped(el) {
    for (var n = el; n && n.nodeType === 1; n = n.parentNode) {
      if (n.id && SKIP_IDS[n.id]) return true;
      if (n.getAttribute && n.getAttribute('data-noi18n') !== null) return true;
    }
    return false;
  }

  function translateTextNode(node) {
    var raw = node.nodeValue;
    if (!raw) return;
    var key = raw.replace(/\s+/g, ' ').trim();
    if (!key) return;
    var es = DICT[key];
    if (es === undefined || es === key) return;
    var p = node.parentNode;
    if (p && (SKIP_TAGS[p.nodeName] || isSkipped(p))) return;
    var lead = (raw.match(/^\s*/) || [''])[0];
    var trail = (raw.match(/\s*$/) || [''])[0];
    node.nodeValue = lead + es + trail;
  }

  var ATTRS = ['placeholder', 'title', 'aria-label'];
  function translateAttrs(el) {
    if (!el.getAttribute || SKIP_TAGS[el.nodeName]) return;
    for (var i = 0; i < ATTRS.length; i++) {
      var v = el.getAttribute(ATTRS[i]);
      if (!v) continue;
      var es = DICT[v.replace(/\s+/g, ' ').trim()];
      if (es !== undefined) el.setAttribute(ATTRS[i], es);
    }
  }

  function walk(root) {
    if (!root) return;
    if (root.nodeType === 3) { translateTextNode(root); return; }
    if (root.nodeType !== 1 || SKIP_TAGS[root.nodeName]) return;
    translateAttrs(root);
    var tw = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null);
    var batch = [], n;
    while ((n = tw.nextNode())) batch.push(n);
    for (var i = 0; i < batch.length; i++) translateTextNode(batch[i]);
    var els = root.querySelectorAll ? root.querySelectorAll('[placeholder],[title],[aria-label]') : [];
    for (var j = 0; j < els.length; j++) translateAttrs(els[j]);
  }

  var observer = null;
  function translateAll() {
    if (observer) observer.disconnect();
    try { walk(document.body); } catch (e) { /* noop */ }
    if (observer) observer.observe(document.body, obsCfg);
  }

  var obsCfg = { childList: true, subtree: true, characterData: true };
  function start() {
    translateAll();
    observer = new MutationObserver(function (muts) {
      if (observer) observer.disconnect();
      try {
        for (var i = 0; i < muts.length; i++) {
          var m = muts[i];
          if (m.type === 'characterData') { translateTextNode(m.target); }
          else {
            for (var j = 0; j < m.addedNodes.length; j++) walk(m.addedNodes[j]);
            if (m.type === 'attributes' && m.target) translateAttrs(m.target);
          }
        }
      } catch (e) { /* noop */ }
      observer.observe(document.body, obsCfg);
    });
    observer.observe(document.body, obsCfg);
    addToggle('es');
  }

  // Small unobtrusive ES/EN toggle (bottom-left). Switching reloads to re-apply cleanly.
  function addToggle(lang) {
    if (document.getElementById('t3mpLangToggle')) return;
    var mk = function () {
      var b = document.createElement('button');
      b.id = 't3mpLangToggle';
      b.textContent = lang === 'es' ? 'ES · ver en EN' : 'EN · ver en ES';
      b.title = 'Cambiar idioma de la interfaz / Switch UI language';
      b.style.cssText = 'position:fixed;left:10px;bottom:10px;z-index:2147483647;' +
        'font:600 11px/1 system-ui,sans-serif;padding:6px 10px;border-radius:6px;cursor:pointer;' +
        'background:rgba(0,20,30,.85);color:#2fd6ff;border:1px solid rgba(47,214,255,.4);opacity:.55;';
      b.onmouseenter = function () { b.style.opacity = '1'; };
      b.onmouseleave = function () { b.style.opacity = '.55'; };
      b.onclick = function () {
        localStorage.setItem('t3mp3st_lang', lang === 'es' ? 'en' : 'es');
        location.reload();
      };
      document.body.appendChild(b);
    };
    if (document.body) mk(); else document.addEventListener('DOMContentLoaded', mk);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();
})();
