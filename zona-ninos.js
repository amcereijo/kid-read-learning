const storageKeys = {
  logs: "krl-session-logs",
};

const labTestType = document.getElementById("labTestType");
const layout = document.querySelector(".layout");
const setupPanel = document.querySelector(".setup-panel");
const labDifficulty = document.getElementById("labDifficulty");
const labItemCount = document.getElementById("labItemCount");
const labCountWrap = document.getElementById("labCountWrap");
const patternPicker = document.getElementById("patternPicker");
const generateLabDataBtn = document.getElementById("generateLabData");
const startLabSessionBtn = document.getElementById("startLabSession");
const selectBasicPatternsBtn = document.getElementById("selectBasicPatterns");
const selectAllPatternsBtn = document.getElementById("selectAllPatterns");
const clearPatternsBtn = document.getElementById("clearPatterns");

const labPreview = document.getElementById("labPreview");
const labPreviewNote = document.getElementById("labPreviewNote");

const toggleKidViewBtn = document.getElementById("toggleKidView");
const backToAdultPanelBtn = document.getElementById("backToAdultPanel");
const labProgress = document.getElementById("labProgress");
const labTimer = document.getElementById("labTimer");
const labReadingText = document.getElementById("labReadingText");
const labStimulus = document.getElementById("labStimulus");
const labMainControls = document.getElementById("labMainControls");
const speedControls = document.getElementById("speedControls");
const speedResultForm = document.getElementById("speedResultForm");
const speedWordsRead = document.getElementById("speedWordsRead");
const labCorrectBtn = document.getElementById("labCorrect");
const labIncorrectBtn = document.getElementById("labIncorrect");
const labSkipBtn = document.getElementById("labSkip");
const finishSpeedNowBtn = document.getElementById("finishSpeedNow");
const starRow = document.getElementById("starRow");

const labStatus = document.getElementById("labStatus");
const labStats = document.getElementById("labStats");
const labAdvice = document.getElementById("labAdvice");
const saveLabToLogBtn = document.getElementById("saveLabToLog");
const exportLabPdfBtn = document.getElementById("exportLabPdf");

const patternWordPools = {
  al: ["sal", "mal", "cal", "tal", "dal", "ral", "pal", "gal", "fal", "val"],
  el: ["mel", "tel", "del", "nel", "sel", "vel", "bel", "gel", "hel", "pel"],
  il: ["mil", "fil", "til", "sil", "vil", "ril", "gil", "nil", "pil", "cil"],
  ol: ["sol", "col", "rol", "mol", "pol", "vol", "dol", "fol", "bol", "tol"],
  ul: ["tul", "pul", "zul", "mul", "ful", "sul", "rul", "kul", "hul", "gul"],
  ar: ["mar", "barco", "carta", "tarde", "arco", "caracol", "jardin", "armario", "par", "bar"],
  er: ["ver", "pera", "verde", "cero", "tener", "hermano", "viernes", "merienda", "ser", "leer"],
  ir: ["ir", "mirar", "sirena", "pirata", "tirar", "girar", "jirafa", "iniciar", "viruta", "circular"],
  or: ["flor", "color", "motor", "doctor", "corona", "oruga", "dormir", "corto", "tesoro", "amor"],
  ur: ["sur", "burro", "puro", "curar", "urgente", "turbina", "murcielago", "turista", "curioso", "muro"],
  an: ["pan", "cantar", "manta", "banana", "santa", "campana", "pantano", "andar", "ancla", "mancha"],
  en: ["tren", "lente", "ventana", "tener", "encender", "centro", "diente", "lengua", "mensaje", "enano"],
  in: ["fin", "pintar", "tinta", "invierno", "camino", "rincon", "cinta", "pirinola", "brinco", "intento"],
  on: ["boton", "raton", "montana", "sonido", "corazon", "tronco", "onda", "horizonte", "poncho", "sombra"],
  un: ["uno", "junta", "mundo", "punto", "lunes", "cuna", "uniforme", "murmullo", "tunel", "nunca"],
  as: ["casa", "masa", "vaso", "paso", "raspa", "gafas", "tasas", "islas", "asado", "basura"],
  es: ["mesa", "peso", "queso", "beso", "estrella", "escoba", "escuela", "espejo", "tesoro", "esquina"],
  is: ["isla", "lista", "pista", "historia", "misterio", "visita", "camisa", "artista", "isidro", "fisica"],
  os: ["oso", "coso", "rosa", "nosotros", "cosa", "bosque", "poste", "costura", "fosforo", "hostal"],
  us: ["musica", "bus", "gusano", "susto", "justo", "ruso", "pulso", "lustre", "custodia", "susurro"],
  br: ["brazo", "brisa", "brocha", "brillo", "bravo", "bruja", "brinco", "abrigo", "sombrero", "bronce"],
  tr: ["tren", "trapo", "trigo", "trueno", "estrella", "trenza", "trofeo", "triste", "tractor", "tramo"],
  pl: ["plato", "pluma", "planeta", "playa", "plaza", "pliego", "explorar", "cumple", "pliego", "soplar"],
  cl: ["clase", "clavo", "clima", "clown", "tecla", "claro", "inclinar", "bicicleta", "ancla", "clorofila"],
  gr: ["grano", "grifo", "gruta", "grande", "grillo", "gracia", "alegria", "tigre", "granja", "grueso"],
  ch: ["chico", "chicle", "chocolate", "leche", "noche", "mochila", "charco", "chispa", "choza", "hecho"],
  ll: ["llave", "lluvia", "caballo", "silla", "calle", "botella", "llegar", "llama", "amarillo", "rodilla"],
  rr: ["perro", "carro", "torre", "barrio", "tierra", "cerrar", "guitarra", "ferrocarril", "correr", "arroz"],
  que: ["queso", "queja", "quemar", "quedarse", "pequeno", "raqueta", "bosque", "quebrar", "paquete", "esquema"],
  qui: ["quinto", "quitar", "quince", "quimica", "maquina", "equipo", "esquina", "tranquilo", "quijote", "liquido"],
  ia: ["dia", "piano", "diario", "familia", "magia", "sandia", "bicicleta", "historia", "viaje", "tierra"],
  ie: ["pie", "siete", "hielo", "diente", "cielo", "viento", "siembra", "tierra", "hierba", "fiebre"],
  ua: ["agua", "cuadro", "guante", "cuatro", "igual", "lengua", "cuando", "suave", "guardian", "cuaderno"],
  ue: ["huevo", "fuego", "juego", "escuela", "puerta", "cueva", "trueno", "hueso", "nueve", "fuerte"],
  ai: ["aire", "baile", "caiman", "traigo", "paisaje", "maiz", "raiz", "caido", "paico", "vainilla"],
  au: ["auto", "causa", "pausa", "aula", "aurora", "jaula", "laurel", "taurino", "audaz", "sauna"],
  ui: ["ruido", "cuidar", "muy", "cuidado", "pinguino", "circuito", "construir", "fluido", "intuir", "guiar"],
};

const pseudoConsonants = ["b", "c", "d", "f", "g", "j", "k", "m", "n", "p", "r", "t", "v", "z"];
const pseudoPatterns = ["al", "el", "il", "ol", "ul", "ar", "er", "ir", "or", "ur", "an", "en", "in", "on", "un"];

function makeDifficultyMap(wordPools, maxWordsPerPattern) {
  const map = {};
  Object.entries(wordPools).forEach(([pattern, words]) => {
    map[pattern] = words.slice(0, Math.min(maxWordsPerPattern, words.length));
  });
  return map;
}

const patternDifficultyByLevel = {
  easy: makeDifficultyMap(patternWordPools, 5),
  medium: makeDifficultyMap(patternWordPools, 8),
  hard: patternWordPools,
};

const pseudoConsonantsByLevel = {
  easy: ["m", "p", "l", "s", "t"],
  medium: ["b", "c", "d", "f", "g", "m", "n", "p", "r", "t", "v"],
  hard: pseudoConsonants,
};

const pseudoPatternsByLevel = {
  easy: ["al", "ol"],
  medium: ["al", "el", "ol", "ul", "ar", "er", "or", "an", "en", "on"],
  hard: pseudoPatterns,
};

const basicPatternSet = new Set(["al", "el", "il", "ol", "ul"]);

const phonologyPrompts = [
  "Rima: Que rima con SOL? Opciones: col, pan, mesa.",
  "Rima: Di una palabra que rime con MAL.",
  "Segmentacion: Cuantas silabas tiene PE-LO-TA?",
  "Segmentacion: Cual es la primera silaba de CA-SA?",
  "Omitir silaba: Si a PE-LO-TA le quitamos PE, que queda?",
  "Identifica sonido: Que palabra empieza igual que SOL: sopa o mesa?",
  "Fusiona sonidos: /s/ + /o/ + /l/ = ?",
  "Detecta silaba final: Que termina igual que MAL: sol o sal?",
  "Rima inversa: Cual NO rima con COL: sol, rol, pan?",
  "Segmentacion: Divide en silabas PA-TO y di cuantas son.",
];

const readingPassages = [
  {
    title: "El gato y la maleta",
    text:
      "Lola encontro una maleta azul en el salon. Al abrirla, vio un libro, un mapita y una bufanda. Su gato Sol salto dentro y se quedo dormido. Lola rio y leyo el libro en voz alta.",
    questions: [
      "Quien encontro la maleta?",
      "Que habia dentro de la maleta?",
      "Que hizo el gato Sol?",
    ],
  },
  {
    title: "Paseo al parque",
    text:
      "Elena salio al parque con su papa. Llevo una pelota y una botella de agua. Primero corrio, luego salto y al final descanso en un banco. Antes de volver, recogio una hoja amarilla para su cuaderno.",
    questions: [
      "Con quien fue Elena al parque?",
      "Que llevo Elena al parque?",
      "Que recogio antes de volver a casa?",
    ],
  },
  {
    title: "La escuela de Mila",
    text:
      "Mila llego temprano a la escuela. En clase de lectura, su grupo formo palabras con tarjetas. Despues, escribieron una frase en la pizarra. Mila eligio la palabra sol y la leyo con calma.",
    questions: [
      "A donde llego Mila temprano?",
      "Que hicieron con tarjetas en clase?",
      "Que palabra eligio Mila?",
    ],
  },
];

const speedTexts = [
  "Sara sale al parque con su hermana. Llevan una pelota roja y una botella de agua. Corren por el camino, saltan tres veces y despues descansan en un banco. Un perro pequeno pasa rapido y mueve la cola. Sara sonrie, toma aire y vuelve a leer el cartel del parque con calma.",
  "Leo prepara su mochila para la escuela. Guarda un cuaderno, un lapiz, una regla y una fruta. En el aula, la maestra escribe una frase corta en la pizarra. Leo la lee despacio, repite dos palabras y al final la entiende. Luego dibuja un sol y una casa en su hoja.",
  "Alma visita la biblioteca con su clase. El bibliotecario muestra libros de animales y de planetas. Alma elige uno de gatos y otro de estrellas. Se sienta, abre el primero y lee en voz alta una linea. Cuando termina, marca la pagina con una cinta azul y sonrie.",
];

const readingPassagesByLevel = {
  easy: readingPassages,
  medium: readingPassages,
  hard: [
    ...readingPassages,
    {
      title: "Noche de estrellas",
      text:
        "Nora observo el cielo desde el patio de su casa. Anoto en una libreta tres estrellas que brillaban cerca de la luna. Luego explico a su hermano como encontro cada una. Al final guardo la libreta y prometio volver a mirar la proxima noche.",
      questions: [
        "Desde donde observo el cielo Nora?",
        "Que anoto en su libreta?",
        "Que prometio hacer al final?",
      ],
    },
  ],
};

const speedTextsByLevel = {
  easy: speedTexts.slice(0, 2),
  medium: speedTexts,
  hard: [
    ...speedTexts,
    "Martin prepara una maqueta para ciencias. Corta cartulina, pega etiquetas y revisa un esquema con su madre. Cuando termina, practica una explicacion corta frente al espejo. Repite dos veces, corrige una palabra y respira profundo antes de guardar todo en su mochila para la presentacion de manana.",
  ],
};

const labState = {
  prepared: null,
  active: null,
  lastLogEntry: null,
  lastSessionSummary: null,
  timerId: null,
  elapsedSeconds: 0,
  speedRemaining: 60,
  speedPaused: false,
  kidFocus: false,
};

function readLogs() {
  const raw = localStorage.getItem(storageKeys.logs);
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveLogs(logs) {
  localStorage.setItem(storageKeys.logs, JSON.stringify(logs));
}

function appendLogEntry(entry) {
  const logs = readLogs();
  logs.unshift(entry);
  saveLogs(logs.slice(0, 30));
}

function formatTimer(totalSeconds) {
  const safe = Math.max(0, totalSeconds);
  const mins = String(Math.floor(safe / 60)).padStart(2, "0");
  const secs = String(safe % 60).padStart(2, "0");
  return `${mins}:${secs}`;
}

function shuffle(items) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function nowIsoDate() {
  return new Date().toISOString().slice(0, 10);
}

function labelTestType(type) {
  if (type === "patterns") return "Patrones";
  if (type === "pseudo") return "Pseudopalabras";
  if (type === "phonology") return "Conciencia fonologica";
  if (type === "reading") return "Comprension";
  return "Velocidad";
}

function labelLevel(level) {
  if (level === "easy") return "Nivel facil";
  if (level === "hard") return "Nivel avanzado";
  return "Nivel medio";
}

function setLabStatus(level, stats, advice) {
  labStatus.textContent = level;
  labStats.textContent = stats;
  labAdvice.textContent = advice;
}

function setSessionView(active) {
  if (!layout) return;
  const hasLiveSession = Boolean(labState.active && !labState.active.done);

  if (active) {
    layout.classList.add("session-active");
    if (setupPanel) setupPanel.setAttribute("aria-hidden", "true");
    if (backToAdultPanelBtn) {
      backToAdultPanelBtn.hidden = !hasLiveSession;
      backToAdultPanelBtn.textContent = "Panel adulto";
    }
    return;
  }

  layout.classList.remove("session-active");
  if (setupPanel) setupPanel.removeAttribute("aria-hidden");
  if (backToAdultPanelBtn) {
    backToAdultPanelBtn.hidden = !hasLiveSession;
    backToAdultPanelBtn.textContent = "Solo niño";
  }
}

function setMainControlsEnabled(enabled) {
  labCorrectBtn.disabled = !enabled;
  labIncorrectBtn.disabled = !enabled;
  labSkipBtn.disabled = !enabled;
}

function clearLabTimer() {
  if (labState.timerId) {
    clearInterval(labState.timerId);
    labState.timerId = null;
  }
}

function sanitizeSelectedPatterns() {
  const selected = Array.from(patternPicker.querySelectorAll("input[name='pattern']:checked"), (n) => n.value);
  return selected.length > 0 ? selected : ["al"];
}

function setPatternSelection(mode) {
  const boxes = patternPicker.querySelectorAll("input[name='pattern']");
  boxes.forEach((box) => {
    if (mode === "all") {
      box.checked = true;
      return;
    }

    if (mode === "basic") {
      box.checked = basicPatternSet.has(box.value);
      return;
    }

    box.checked = false;
  });
}

function buildPatternsDataset(count, selectedPatterns) {
  const level = labDifficulty.value;
  const source = patternDifficultyByLevel[level] || patternWordPools;
  const bag = selectedPatterns.flatMap((pattern) => (source[pattern] || []).map((word) => ({ prompt: word, meta: pattern })));
  const pool = bag.length > 0 ? bag : [{ prompt: "sal", meta: "al" }];
  const repeated = [];
  while (repeated.length < count) {
    repeated.push(...shuffle(pool));
  }
  return repeated.slice(0, count);
}

function buildPseudoDataset(count) {
  const level = labDifficulty.value;
  const consonants = pseudoConsonantsByLevel[level] || pseudoConsonants;
  const endings = pseudoPatternsByLevel[level] || pseudoPatterns;
  const words = [];
  const seen = new Set();

  while (words.length < count) {
    const c = consonants[Math.floor(Math.random() * consonants.length)];
    const ending = endings[Math.floor(Math.random() * endings.length)];
    const candidate = `${c}${ending}`;
    if (!seen.has(candidate)) {
      words.push({ prompt: candidate });
      seen.add(candidate);
    }
    if (seen.size > 120) break;
  }
  return words;
}

function buildPhonologyDataset(count) {
  const level = labDifficulty.value;
  const source =
    level === "easy"
      ? phonologyPrompts.slice(0, 6)
      : level === "hard"
      ? [...phonologyPrompts, "Invierte sonidos: si digo L-O-S, que palabra forma?", "Sustituye silaba: cambia MA en MALO por SO."]
      : phonologyPrompts;
  const repeated = [];
  while (repeated.length < count) {
    repeated.push(...shuffle(source).map((prompt) => ({ prompt })));
  }
  return repeated.slice(0, count);
}

function buildReadingDataset() {
  const level = labDifficulty.value;
  const pool = readingPassagesByLevel[level] || readingPassages;
  const selectedPassage = pool[Math.floor(Math.random() * pool.length)];
  return {
    readingText: `${selectedPassage.title}. ${selectedPassage.text}`,
    items: selectedPassage.questions.map((q) => ({ prompt: q })),
  };
}

function buildSpeedDataset() {
  const level = labDifficulty.value;
  const pool = speedTextsByLevel[level] || speedTexts;
  const readingText = pool[Math.floor(Math.random() * pool.length)];
  return {
    readingText,
    items: [{ prompt: "Lee el texto durante 1 minuto en voz alta." }],
  };
}

function formatPreviewLabel(type, item) {
  if (type === "patterns") return `${item.prompt} (${item.meta})`;
  return item.prompt;
}

function renderLabPreview() {
  labPreview.innerHTML = "";
  if (!labState.prepared) {
    const li = document.createElement("li");
    li.textContent = "Sin datos preparados.";
    labPreview.appendChild(li);
    return;
  }

  labPreviewNote.textContent = `Lista preparada: ${labState.prepared.items.length} items.`;
  const maxPreview = 18;
  labState.prepared.items.slice(0, maxPreview).forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = `${index + 1}. ${formatPreviewLabel(labState.prepared.type, item)}`;
    labPreview.appendChild(li);
  });
}

function applyLabTypeUI() {
  const type = labTestType.value;
  const hidePattern = type !== "patterns";
  const hideCount = type === "reading" || type === "speed";

  patternPicker.hidden = hidePattern;
  labCountWrap.hidden = hideCount;
  if (hideCount) {
    labItemCount.value = type === "speed" ? "1" : "3";
  }
}

function prepareLabData() {
  const type = labTestType.value;
  const level = labDifficulty.value;
  const requestedCount = Number(labItemCount.value) || 15;
  let prepared;

  if (type === "patterns") {
    const selectedPatterns = sanitizeSelectedPatterns();
    prepared = {
      type,
      level,
      items: buildPatternsDataset(requestedCount, selectedPatterns),
      readingText: "",
      selectedPatterns,
    };
  } else if (type === "pseudo") {
    prepared = {
      type,
      level,
      items: buildPseudoDataset(requestedCount),
      readingText: "",
    };
  } else if (type === "phonology") {
    prepared = {
      type,
      level,
      items: buildPhonologyDataset(requestedCount),
      readingText: "",
    };
  } else if (type === "reading") {
    const reading = buildReadingDataset();
    prepared = {
      type,
      level,
      items: reading.items,
      readingText: reading.readingText,
    };
  } else {
    const speed = buildSpeedDataset();
    prepared = {
      type,
      level,
      items: speed.items,
      readingText: speed.readingText,
    };
  }

  labState.prepared = prepared;
  labState.lastLogEntry = null;
  labState.lastSessionSummary = null;
  startLabSessionBtn.disabled = false;
  saveLabToLogBtn.disabled = true;
  exportLabPdfBtn.disabled = true;
  renderLabPreview();

  setLabStatus(
    "Datos listos",
    `${prepared.items.length} items para ${labelTestType(prepared.type)} (${labelLevel(prepared.level)}).`,
    "Pulsa Iniciar sesion para comenzar el juego de lectura."
  );

  setSessionView(false);
}

function updateStars() {
  if (!labState.active || labState.active.items.length === 0) {
    starRow.textContent = "☆☆☆☆☆";
    return;
  }

  const progress = Math.min(
    1,
    (labState.active.correct + labState.active.incorrect + labState.active.skipped) / labState.active.items.length
  );
  const stars = Math.max(1, Math.round(progress * 5));
  starRow.textContent = `${"★".repeat(stars)}${"☆".repeat(5 - stars)}`;
}

function displayCurrentLabItem() {
  if (!labState.active) return;
  const current = labState.active.items[labState.active.index];
  labProgress.textContent = `Item ${labState.active.index + 1} de ${labState.active.items.length}`;
  labStimulus.textContent = current?.prompt || "Fin de sesion";
  updateStars();
}

function beginSpeedTimer() {
  clearLabTimer();
  if (!Number.isFinite(labState.speedRemaining) || labState.speedRemaining <= 0) {
    labState.speedRemaining = 60;
  }

  labState.elapsedSeconds = 60 - labState.speedRemaining;
  labState.speedPaused = false;
  labTimer.textContent = formatTimer(labState.speedRemaining);
  finishSpeedNowBtn.disabled = false;
  finishSpeedNowBtn.textContent = "Finalizar minuto";

  labState.timerId = setInterval(() => {
    labState.elapsedSeconds += 1;
    labState.speedRemaining = Math.max(0, 60 - labState.elapsedSeconds);
    labTimer.textContent = formatTimer(labState.speedRemaining);
    if (labState.speedRemaining <= 0) finishSpeedSession();
  }, 1000);
}

function pauseSpeedForAdultPanel() {
  if (!labState.active || labState.active.type !== "speed" || labState.active.done) return;
  if (!labState.timerId) return;

  clearLabTimer();
  labState.speedPaused = true;
  finishSpeedNowBtn.disabled = false;
  finishSpeedNowBtn.textContent = "Reanudar minuto";
  setLabStatus(
    "Sesion en pausa",
    `Tiempo restante: ${formatTimer(labState.speedRemaining)}.`,
    "Pulsa Solo niño y luego Reanudar minuto para continuar."
  );
}

function resumeSpeedFromPause() {
  if (!labState.active || labState.active.type !== "speed" || !labState.speedPaused) return;

  setSessionView(true);
  setLabStatus(
    "Sesion activa",
    "Prueba de velocidad en curso (1 minuto).",
    "Pulsa Finalizar minuto cuando termine el tiempo."
  );
  beginSpeedTimer();
}

function startLabSession() {
  if (!labState.prepared) return;

  clearLabTimer();
  speedResultForm.hidden = true;
  speedWordsRead.value = "";
  saveLabToLogBtn.disabled = true;
  exportLabPdfBtn.disabled = true;
  labState.lastLogEntry = null;
  labState.lastSessionSummary = null;
  labState.speedRemaining = 60;
  labState.speedPaused = false;

  labState.active = {
    type: labState.prepared.type,
    items: [...labState.prepared.items],
    index: 0,
    correct: 0,
    incorrect: 0,
    skipped: 0,
    startedAt: Date.now(),
    readingText: labState.prepared.readingText || "",
    done: false,
    level: labState.prepared.level,
  };

  const isSpeed = labState.active.type === "speed";
  const hasReadingText = Boolean(labState.active.readingText);

  labReadingText.hidden = !hasReadingText;
  labReadingText.textContent = hasReadingText ? labState.active.readingText : "";

  speedControls.hidden = !isSpeed;
  labMainControls.hidden = isSpeed;
  setMainControlsEnabled(!isSpeed);

  labTimer.textContent = isSpeed ? formatTimer(60) : formatTimer(0);
  displayCurrentLabItem();
  setLabStatus(
    "Sesion activa",
    `Prueba: ${labelTestType(labState.active.type)} (${labelLevel(labState.active.level)}).`,
    "Marca cada intento para avanzar en la mision."
  );

  setSessionView(true);

  if (isSpeed) {
    setLabStatus(
      "Sesion activa",
      "Prueba de velocidad en curso (1 minuto).",
      "Pulsa Finalizar minuto cuando termine el tiempo."
    );
    beginSpeedTimer();
  }
}

function finishLabSession(summary) {
  clearLabTimer();
  setMainControlsEnabled(false);
  finishSpeedNowBtn.disabled = true;
  speedControls.hidden = true;
  labMainControls.hidden = false;

  if (!labState.active) return;

  labState.active.done = true;
  const durationSec = Math.max(1, Math.round((Date.now() - labState.active.startedAt) / 1000));
  const stats =
    summary ||
    `${labState.active.correct} correctos, ${labState.active.incorrect} errores, ${labState.active.skipped} omitidos en ${durationSec}s.`;

  labState.lastSessionSummary = {
    test: labelTestType(labState.active.type),
    level: labelLevel(labState.active.level),
    startedAt: new Date(labState.active.startedAt),
    durationSec,
    stats,
    advice: "Si te sirve, guarda este resultado en el registro de seguimiento.",
  };

  setLabStatus(
    "Sesion completada",
    stats,
    "Si te sirve, guarda este resultado en el registro de seguimiento."
  );

  labStimulus.textContent = "Gran trabajo! Prueba completada.";
  updateStars();
  saveLabToLogBtn.disabled = false;
  exportLabPdfBtn.disabled = false;
  labState.speedPaused = false;
  labState.speedRemaining = 0;
  setSessionView(false);
}

function completeRegularFlow() {
  if (!labState.active) return;

  const total = labState.active.items.length;
  const errors = labState.active.incorrect + labState.active.skipped;
  const durationSec = Math.max(1, Math.round((Date.now() - labState.active.startedAt) / 1000));
  const errorRate = Math.round((errors / Math.max(total, 1)) * 100);
  const kind = labelTestType(labState.active.type);
  const levelTag = labelLevel(labState.active.level);

  labState.lastLogEntry = {
    date: nowIsoDate(),
    test: `${kind} (${levelTag})`,
    errors: `${errors}/${total}`,
    time: formatTimer(durationSec),
    notes: `${labState.active.correct} correctos. Error estimado ${errorRate}%.`,
  };

  const advice =
    errorRate > 30
      ? "Alerta: error >30%. Repite con apoyo y considera consulta profesional."
      : "Buen avance. Mantener practica regular y seguimiento.";

  finishLabSession(
    `${labState.active.correct} correctos, ${labState.active.incorrect} errores, ${labState.active.skipped} omitidos. Error ${errorRate}%.`
  );
  labAdvice.textContent = advice;
  if (labState.lastSessionSummary) labState.lastSessionSummary.advice = advice;
}

function markLabItem(mode) {
  if (!labState.active || labState.active.done) return;
  if (mode === "correct") labState.active.correct += 1;
  if (mode === "incorrect") labState.active.incorrect += 1;
  if (mode === "skip") labState.active.skipped += 1;

  labState.active.index += 1;
  if (labState.active.index >= labState.active.items.length) {
    completeRegularFlow();
    return;
  }
  displayCurrentLabItem();
}

function finishSpeedSession() {
  if (!labState.active || labState.active.type !== "speed") return;

  clearLabTimer();
  labState.speedPaused = false;
  labState.speedRemaining = 0;
  finishSpeedNowBtn.disabled = true;
  finishSpeedNowBtn.textContent = "Finalizar minuto";
  speedResultForm.hidden = false;
  speedWordsRead.focus();

  labStimulus.textContent = "Tiempo finalizado. Escribe las palabras correctas.";
  setLabStatus(
    "Capturando resultado",
    "Introduce palabras correctas leidas en 1 minuto.",
    "Busca consistencia entre sesiones, no perfeccion total."
  );
}

function saveSpeedResult(event) {
  event.preventDefault();
  if (!labState.active || labState.active.type !== "speed") return;

  const ppm = Number(speedWordsRead.value);
  if (Number.isNaN(ppm)) return;

  let level = "Buen ritmo";
  let note = "Ritmo adecuado para inicio lector. Mantener practica y comprension.";
  if (ppm < 45) {
    level = "Alerta de velocidad";
    note = "Por debajo de 45 ppm. Conviene evaluacion y apoyo especifico.";
  } else if (ppm < 55) {
    level = "Ritmo intermedio";
    note = "Cerca del umbral. Repetir prueba en 2 semanas y comparar.";
  }

  labState.lastLogEntry = {
    date: nowIsoDate(),
    test: `Velocidad (${labelLevel(labState.active.level)})`,
    errors: `ppm ${ppm}`,
    time: "1:00",
    notes: note,
  };

  speedResultForm.hidden = true;
  labProgress.textContent = "Item 1 de 1";
  labTimer.textContent = formatTimer(60);
  labStimulus.textContent = `Resultado guardado: ${ppm} palabras/minuto.`;
  finishLabSession(`Velocidad registrada: ${ppm} ppm.`);
  labStatus.textContent = level;
  if (labState.lastSessionSummary) {
    labState.lastSessionSummary.advice = note;
    labState.lastSessionSummary.stats = `Velocidad registrada: ${ppm} ppm.`;
  }
}

function saveLabResultToLog() {
  if (!labState.lastLogEntry) return;
  appendLogEntry(labState.lastLogEntry);
  saveLabToLogBtn.disabled = true;
  labAdvice.textContent = "Resultado guardado. Ya se vera en la guia principal.";
}

function exportLabSessionPdf() {
  if (!labState.lastSessionSummary) return;

  const summary = labState.lastSessionSummary;
  const row = labState.lastLogEntry;
  const printWindow = window.open("", "_blank", "width=900,height=700");
  if (!printWindow) {
    alert("No se pudo abrir la ventana de impresion. Revisa el bloqueador de popups.");
    return;
  }

  const startedAt = `${summary.startedAt.toLocaleDateString()} ${summary.startedAt.toLocaleTimeString()}`;
  const safe = (value) =>
    String(value || "-")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;");

  const html = `<!doctype html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <title>Reporte de sesion - Zona niños</title>
    <style>
      body { font-family: Arial, sans-serif; margin: 28px; color: #102b2a; }
      h1 { margin: 0 0 6px; color: #0f76ff; }
      h2 { margin: 22px 0 8px; color: #124a46; }
      p { margin: 6px 0; }
      .meta { background: #f4fbfa; border: 1px solid #cfe5df; border-radius: 10px; padding: 12px; }
      table { width: 100%; border-collapse: collapse; margin-top: 8px; }
      th, td { border: 1px solid #d8e2df; padding: 8px; text-align: left; }
      th { background: #f1f6f5; }
      .note { margin-top: 12px; background: #fff9ef; border: 1px solid #efd8ac; border-radius: 10px; padding: 10px; }
    </style>
  </head>
  <body>
    <h1>Kid Read Learning - Zona niños</h1>
    <p>Reporte de sesion</p>

    <div class="meta">
      <p><strong>Prueba:</strong> ${safe(summary.test)}</p>
      <p><strong>Nivel:</strong> ${safe(summary.level)}</p>
      <p><strong>Inicio:</strong> ${safe(startedAt)}</p>
      <p><strong>Duracion:</strong> ${safe(formatTimer(summary.durationSec))}</p>
      <p><strong>Resumen:</strong> ${safe(summary.stats)}</p>
    </div>

    <h2>Registro para seguimiento</h2>
    <table>
      <thead>
        <tr>
          <th>Fecha</th>
          <th>Prueba</th>
          <th>Errores</th>
          <th>Tiempo</th>
          <th>Observaciones</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>${safe(row?.date)}</td>
          <td>${safe(row?.test)}</td>
          <td>${safe(row?.errors)}</td>
          <td>${safe(row?.time)}</td>
          <td>${safe(row?.notes)}</td>
        </tr>
      </tbody>
    </table>

    <div class="note"><strong>Recomendacion:</strong> ${safe(summary.advice)}</div>
  </body>
</html>`;

  printWindow.document.open();
  printWindow.document.write(html);
  printWindow.document.close();
  printWindow.focus();
  setTimeout(() => printWindow.print(), 250);
}

labTestType.addEventListener("change", applyLabTypeUI);
generateLabDataBtn.addEventListener("click", prepareLabData);
startLabSessionBtn.addEventListener("click", startLabSession);
labCorrectBtn.addEventListener("click", () => markLabItem("correct"));
labIncorrectBtn.addEventListener("click", () => markLabItem("incorrect"));
labSkipBtn.addEventListener("click", () => markLabItem("skip"));
finishSpeedNowBtn.addEventListener("click", () => {
  if (labState.speedPaused) {
    resumeSpeedFromPause();
    return;
  }

  finishSpeedSession();
});
speedResultForm.addEventListener("submit", saveSpeedResult);
saveLabToLogBtn.addEventListener("click", saveLabResultToLog);
exportLabPdfBtn.addEventListener("click", exportLabSessionPdf);

toggleKidViewBtn.addEventListener("click", () => {
  labState.kidFocus = !labState.kidFocus;
  document.body.classList.toggle("kid-focus", labState.kidFocus);
  toggleKidViewBtn.textContent = labState.kidFocus ? "Vista normal" : "Modo grande";
});

if (backToAdultPanelBtn) {
  backToAdultPanelBtn.addEventListener("click", () => {
    if (layout && layout.classList.contains("session-active")) {
      pauseSpeedForAdultPanel();
      setSessionView(false);
      const firstField = document.getElementById("labTestType");
      if (firstField) firstField.focus();
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    setSessionView(true);
    if (labState.active && labState.active.type === "speed" && labState.speedPaused) {
      resumeSpeedFromPause();
    }
  });
}

if (selectBasicPatternsBtn) {
  selectBasicPatternsBtn.addEventListener("click", () => {
    setPatternSelection("basic");
  });
}

if (selectAllPatternsBtn) {
  selectAllPatternsBtn.addEventListener("click", () => {
    setPatternSelection("all");
  });
}

if (clearPatternsBtn) {
  clearPatternsBtn.addEventListener("click", () => {
    setPatternSelection("none");
  });
}

window.addEventListener("beforeunload", clearLabTimer);

applyLabTypeUI();
renderLabPreview();
setSessionView(false);
