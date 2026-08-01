const storageKeys = {
  checklist: "krl-checklist-state",
  logs: "krl-session-logs",
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

function setupChecklist() {
  const checklistForm = document.getElementById("alertChecklist");
  if (!checklistForm) return;

  const checklistLevel = document.getElementById("checklistLevel");
  const checklistScore = document.getElementById("checklistScore");
  const checklistMeter = document.getElementById("checklistMeter");
  const checklistMessage = document.getElementById("checklistMessage");
  const clearChecklistBtn = document.getElementById("clearChecklist");

  function getChecklistScore() {
    const selected = checklistForm.querySelectorAll("input[type='checkbox']:checked");
    return Array.from(selected).reduce((acc, input) => acc + Number(input.value), 0);
  }

  function applyChecklistResult(score) {
    checklistScore.textContent = String(score);
    checklistMeter.style.width = `${Math.min((score / 8) * 100, 100)}%`;

    if (score <= 2) {
      checklistLevel.textContent = "Bajo";
      checklistMessage.textContent =
        "Continua con actividades ludicas, lectura compartida y observacion quincenal.";
      return;
    }

    if (score <= 5) {
      checklistLevel.textContent = "Moderado";
      checklistMessage.textContent =
        "Conviene aplicar pruebas en casa esta semana y coordinar observaciones con el colegio.";
      return;
    }

    checklistLevel.textContent = "Alto";
    checklistMessage.textContent =
      "Hay varias senales de alerta: prioriza evaluacion profesional y lleva un registro de resultados.";
  }

  function saveChecklistState() {
    const values = Array.from(
      checklistForm.querySelectorAll("input[type='checkbox']"),
      (input) => input.checked
    );
    localStorage.setItem(storageKeys.checklist, JSON.stringify(values));
  }

  function loadChecklistState() {
    const raw = localStorage.getItem(storageKeys.checklist);
    if (!raw) {
      applyChecklistResult(0);
      return;
    }

    try {
      const saved = JSON.parse(raw);
      const boxes = checklistForm.querySelectorAll("input[type='checkbox']");
      boxes.forEach((box, idx) => {
        box.checked = Boolean(saved[idx]);
      });
      applyChecklistResult(getChecklistScore());
    } catch {
      applyChecklistResult(0);
    }
  }

  checklistForm.addEventListener("change", () => {
    const score = getChecklistScore();
    applyChecklistResult(score);
    saveChecklistState();
  });

  clearChecklistBtn.addEventListener("click", () => {
    checklistForm
      .querySelectorAll("input[type='checkbox']")
      .forEach((box) => (box.checked = false));
    applyChecklistResult(0);
    saveChecklistState();
  });

  loadChecklistState();
}

function setupQuickEvaluator() {
  const quickEvalForm = document.getElementById("quickEval");
  if (!quickEvalForm) return;

  const evalLevel = document.getElementById("evalLevel");
  const evalScore = document.getElementById("evalScore");
  const evalMessage = document.getElementById("evalMessage");
  const resetEvalBtn = document.getElementById("resetEval");

  function evaluateQuickForm(data) {
    let score = 0;

    if (data.errors >= 5) score += 2;
    else if (data.errors >= 3) score += 1;

    if (data.time > 60) score += 2;
    else if (data.time > 45) score += 1;

    if (data.ppm < 50) score += 2;
    else if (data.ppm < 60) score += 1;

    if (data.pseudo === "block") score += 2;
    else if (data.pseudo === "partial") score += 1;

    if (data.fono === "block") score += 2;
    else if (data.fono === "partial") score += 1;

    if (data.comprension === "low") score += 2;
    else if (data.comprension === "partial") score += 1;

    return score;
  }

  function paintEval(score) {
    evalScore.textContent = `Puntaje orientativo: ${score} / 12`;

    if (score <= 3) {
      evalLevel.textContent = "Seguimiento activo";
      evalMessage.textContent =
        "Continua refuerzo en casa y repite en 2-3 semanas para confirmar avance.";
      return;
    }

    if (score <= 7) {
      evalLevel.textContent = "Requiere accion";
      evalMessage.textContent =
        "Comparte resultados con tutor y prepara consulta profesional en el corto plazo.";
      return;
    }

    evalLevel.textContent = "Prioridad alta";
    evalMessage.textContent =
      "Recomendacion: evaluacion profesional prioritaria (pediatra y especialista en aprendizaje).";
  }

  quickEvalForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const itemCountField = document.getElementById("errPatrones");
    const expectedItems = Number(itemCountField.max) || 15;

    const payload = {
      errors: Number(document.getElementById("errPatrones").value),
      time: Number(document.getElementById("timePatrones").value),
      ppm: Number(document.getElementById("ppm").value),
      pseudo: document.getElementById("pseudo").value,
      fono: document.getElementById("fono").value,
      comprension: document.getElementById("comprension").value,
    };

    if (payload.errors > expectedItems) {
      itemCountField.setCustomValidity(`El maximo de errores debe ser ${expectedItems}.`);
      itemCountField.reportValidity();
      return;
    }

    itemCountField.setCustomValidity("");

    const score = evaluateQuickForm(payload);
    paintEval(score);
  });

  resetEvalBtn.addEventListener("click", () => {
    quickEvalForm.reset();
    evalLevel.textContent = "Sin datos";
    evalScore.textContent = "Completa el formulario";
    evalMessage.textContent =
      "Usa este resultado para preparar la consulta con el especialista y compartir observaciones con el colegio.";
  });
}

function setupLogs() {
  const logForm = document.getElementById("logForm");
  const logBody = document.getElementById("logTableBody");
  const clearLogsBtn = document.getElementById("clearLogs");
  if (!logForm || !logBody || !clearLogsBtn) return;

  function makeCell(text) {
    const td = document.createElement("td");
    td.textContent = text || "-";
    return td;
  }

  function renderLogs() {
    const logs = readLogs();
    logBody.innerHTML = "";

    logs.forEach((row) => {
      const tr = document.createElement("tr");
      tr.appendChild(makeCell(row.date));
      tr.appendChild(makeCell(row.test));
      tr.appendChild(makeCell(row.errors));
      tr.appendChild(makeCell(row.time));
      tr.appendChild(makeCell(row.notes));
      logBody.appendChild(tr);
    });

    if (logs.length === 0) {
      const tr = document.createElement("tr");
      const td = document.createElement("td");
      td.colSpan = 5;
      td.textContent = "Aun no hay registros. Agrega tu primera sesion.";
      tr.appendChild(td);
      logBody.appendChild(tr);
    }
  }

  logForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const entry = {
      date: document.getElementById("logDate").value,
      test: document.getElementById("logTest").value,
      errors: document.getElementById("logErrors").value,
      time: document.getElementById("logTime").value,
      notes: document.getElementById("logNotes").value,
    };

    appendLogEntry(entry);
    renderLogs();
    logForm.reset();
  });

  clearLogsBtn.addEventListener("click", () => {
    localStorage.removeItem(storageKeys.logs);
    renderLogs();
  });

  renderLogs();
}

function setupRevealAnimations() {
  const nodes = document.querySelectorAll(".reveal");
  if (nodes.length === 0) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.13 }
  );

  nodes.forEach((node) => observer.observe(node));
}

setupChecklist();
setupQuickEvaluator();
setupLogs();
setupRevealAnimations();
