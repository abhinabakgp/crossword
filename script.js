/* ================================================================ */
    const LEVELS = [
      {
        title: "Does Life End Here?",
        difficulty: "Hard",
        description: "A dense 13 × 11 grid with 50 Across and Down entries.",
        entries: [
          // ------------------------------ DOWN ------------------------------
          { word: "UPS",        clue: "Life is full of ___ and downs", row: 0, col: 0, dir: "down" },
          { word: "NA",        clue: "Sodium", row: 0, col: 1, dir: "down" },
          { word: "ON",        clue: "Operating; switched to the active position", row: 0, col: 2, dir: "down" },
          { word: "DA",        clue: "Extra amount recieved with salary", row: 1, col: 3, dir: "down" },
          { word: "HARP",      clue: "A large stringed instrument played by plucking", row: 0, col: 4, dir: "down" },
          { word: "NO",        clue: "A negative answer", row: 0, col: 6, dir: "down" },
          { word: "CHARLIE",   clue: "The NATO phonetic-alphabet code word for C", row: 0, col: 7, dir: "down" },
          { word: "EMU",       clue: "A large flightless bird native to Australia", row: 0, col: 8, dir: "down" },
          { word: "UNTIED",    clue: "No longer fastened or knotted", row: 0, col: 10, dir: "down" },
          { word: "CHORUS",    clue: "A repeated song section, or a group of singers", row: 2, col: 5, dir: "down" },
          { word: "GR",        clue: "Einstein's Theory of Spacetime", row: 4, col: 0, dir: "down" },
          { word: "PAINKILLER",clue: "A medicine that relieves pain", row: 3, col: 1, dir: "down" },
          { word: "ARM",       clue: "A limb extending from the shoulder to the hand", row: 10, col: 0, dir: "down" },
          { word: "APPEAR",    clue: "To come into view; to become visible", row: 3, col: 2, dir: "down" },
          { word: "LN",        clue: "Natural logarithm", row: 10, col: 2, dir: "down" },
          { word: "SEPTIC",    clue: "Infected with bacteria; relating to infection", row: 4, col: 3, dir: "down" },
          { word: "TG",        clue: "Text-message abbreviation for ‘thank God’", row: 11, col: 3, dir: "down" },
          { word: "TESLA",     clue: "Trending Car Company", row: 6, col: 4, dir: "down" },
          { word: "EPAD",      clue: "An electronic writing pad or digital notepad", row: 9, col: 5, dir: "down" },
          { word: "NUN",       clue: "A woman who belongs to a religious order", row: 4, col: 6, dir: "down" },
          { word: "AVOID",     clue: "To keep away from deliberately", row: 8, col: 6, dir: "down" },
          { word: "GEL",       clue: "A jelly-like substance; also a hair-styling product", row: 8, col: 7, dir: "down" },
          { word: "IN",        clue: "Inside; or currently fashionable", row: 4, col: 8, dir: "down" },
          { word: "ERRORS",    clue: "Mistakes or incorrect results", row: 7, col: 8, dir: "down" },
          { word: "NERVE",     clue: "A fibre bundle carrying signals through the body", row: 4, col: 9, dir: "down" },
          { word: "SEXY",      clue: "Sexually attractive", row: 7, col: 10, dir: "down" },

          // ----------------------------- ACROSS ----------------------------
          { word: "UNO",       clue: "A classic card game", row: 0, col: 0, dir: "across" },
          { word: "PANDA",     clue: "A Chinese black-and-white bear", row: 1, col: 0, dir: "across" },
          { word: "HENCE",     clue: "For that reason; therefore", row: 0, col: 4, dir: "across" },
          { word: "OHM",       clue: "The unit of electrical resistance", row: 1, col: 6, dir: "across" },
          { word: "ARC",       clue: "A curved part of a circle or curve", row: 2, col: 3, dir: "across" },
          { word: "AUNT",      clue: "May to Spiderman", row: 2, col: 7, dir: "across" },
          { word: "PA",        clue: "An informal word for father", row: 3, col: 1, dir: "across" },
          { word: "PH",        clue: "The scale used to measure acidity", row: 3, col: 4, dir: "across" },
          { word: "GAPS",      clue: "Empty spaces or breaks between things", row: 4, col: 0, dir: "across" },
          { word: "ONLINE",    clue: "Connected to or available through the internet", row: 4, col: 5, dir: "across" },
          { word: "RIPE",      clue: "Fully grown and ready to eat, as fruit", row: 5, col: 0, dir: "across" },
          { word: "RUINED",    clue: "Damaged or spoiled completely", row: 5, col: 5, dir: "across" },
          { word: "NEPTUNE",   clue: "The eighth planet from the Sun", row: 6, col: 1, dir: "across" },
          { word: "SKATES",    clue: "Footwear with blades or wheels for gliding", row: 7, col: 0, dir: "across" },
          { word: "EVS",       clue: "Electric Vehicles", row: 7, col: 8, dir: "across" },
          { word: "IRIS",      clue: "The coloured ring of the eye", row: 8, col: 1, dir: "across" },
          { word: "AGREE",     clue: "To have the same opinion", row: 8, col: 6, dir: "across" },
          { word: "CLEVER",    clue: "Quick to understand or learn; Intelligent", row: 9, col: 3, dir: "across" },
          { word: "ALL",       clue: "Everyone or everything; the whole amount", row: 10, col: 0, dir: "across" },
          { word: "APOLOGY",   clue: "An expression of regret for a mistake", row: 10, col: 4, dir: "across" },
          { word: "RENT",      clue: "Payment made for the use of property", row: 11, col: 0, dir: "across" },
          { word: "AI",        clue: "Artificial Intelligence", row: 11, col: 5, dir: "across" },
          { word: "MR",        clue: "A title placed before a man's surname", row: 12, col: 0, dir: "across" },
          { word: "GODDESS",   clue: "Female deity", row: 12, col: 3, dir: "across" }
        ]
      }
    ];
    /* ======================= END OF EDITABLE PUZZLES ====================== */

    const STORAGE_KEY = "crosswordHardestPartProgress_v1";
    const $ = (id) => document.getElementById(id);
    const homeScreen = $("homeScreen");
    const gameScreen = $("gameScreen");
    let progress = loadProgress();
    let currentLevelIndex = 0;
    let puzzle = null;
    let activeWordId = null;
    let selectedCellKey = null;
    let elapsedSeconds = 0;
    let wrongCells = new Set();
    let isCompletedThisRun = false;

    function loadProgress() {
      try {
        const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
        return {
          completed: Array.isArray(saved.completed) ? saved.completed : [],
          bestTimes: saved.bestTimes && typeof saved.bestTimes === "object" ? saved.bestTimes : {},
          levelStates: saved.levelStates && typeof saved.levelStates === "object" ? saved.levelStates : {},
          lastLevel: Number.isInteger(saved.lastLevel) ? saved.lastLevel : 0
        };
      } catch (_) {
        return { completed: [], bestTimes: {}, levelStates: {}, lastLevel: 0 };
      }
    }
    function saveProgress() {
      try { localStorage.setItem(STORAGE_KEY, JSON.stringify(progress)); } catch (_) { /* local storage may be disabled */ }
    }
    function escapeHTML(value) {
      return String(value).replace(/[&<>"']/g, ch => ({ "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;" })[ch]);
    }
    function formatTime(total) {
      const m = Math.floor(total / 60).toString().padStart(2, "0");
      const s = (total % 60).toString().padStart(2, "0");
      return `${m}:${s}`;
    }

    function renderHome() {
      const grid = $("levelGrid");
      grid.innerHTML = "";

      LEVELS.forEach((level, index) => {
        const unlocked = isUnlocked(index);
        const solved = progress.completed.includes(index);
        const best = progress.bestTimes[index]
          ? `Best ${formatTime(progress.bestTimes[index])}`
          : level.difficulty;

        const card = document.createElement("button");
        card.type = "button";
        card.className = `level-card${solved ? " completed" : ""}`;
        card.disabled = !unlocked;
        card.innerHTML = `
          <span class="level-number">LEVEL ${String(index + 1).padStart(2, "0")}</span>
          <strong class="level-title">${escapeHTML(level.title)}</strong>
          <span class="level-meta">${solved ? "Completed" : unlocked ? escapeHTML(level.difficulty) : "Locked"}</span>
          <span class="level-best">${best}</span>`;
        card.addEventListener("click", () => startLevel(index));
        grid.appendChild(card);
      });
    }
    function isUnlocked(index) {
      return index === 0 || progress.completed.includes(index - 1);
    }

    function buildPuzzle(level) {
      const entries = level.entries.map((raw, i) => {
        const word = String(raw.word || "").toUpperCase().replace(/[^A-Z]/g, "");
        const dir = raw.dir === "down" ? "down" : "across";
        const row = Number(raw.row), col = Number(raw.col);
        if (!word || !Number.isInteger(row) || !Number.isInteger(col) || row < 0 || col < 0) {
          throw new Error(`Invalid entry #${i + 1} in "${level.title}". Check its word, row and col.`);
        }
        return { ...raw, id: `word-${i}`, word, dir, row, col, cells: [], number: 0 };
      });
      let minRow = Infinity, minCol = Infinity, maxRow = -1, maxCol = -1;
      entries.forEach(entry => {
        const endRow = entry.row + (entry.dir === "down" ? entry.word.length - 1 : 0);
        const endCol = entry.col + (entry.dir === "across" ? entry.word.length - 1 : 0);
        minRow = Math.min(minRow, entry.row); minCol = Math.min(minCol, entry.col);
        maxRow = Math.max(maxRow, endRow); maxCol = Math.max(maxCol, endCol);
      });
      entries.forEach(entry => { entry.row -= minRow; entry.col -= minCol; });
      const cells = new Map();
      entries.forEach(entry => {
        [...entry.word].forEach((letter, index) => {
          const row = entry.row + (entry.dir === "down" ? index : 0);
          const col = entry.col + (entry.dir === "across" ? index : 0);
          const key = `${row},${col}`;
          if (!cells.has(key)) cells.set(key, { row, col, solution: letter, value: "", entries: [], number: null, revealed: false });
          const cell = cells.get(key);
          if (cell.solution !== letter) {
            throw new Error(`Crossing mismatch in "${level.title}" at row ${row}, column ${col}: ${cell.solution} does not match ${letter}.`);
          }
          cell.entries.push(entry.id);
          entry.cells.push(key);
        });
      });
      const starts = new Map();
      entries.forEach(entry => {
        const key = `${entry.row},${entry.col}`;
        if (!starts.has(key)) starts.set(key, []);
        starts.get(key).push(entry);
      });
      let number = 0;
      [...cells.values()].sort((a,b) => a.row - b.row || a.col - b.col).forEach(cell => {
        const key = `${cell.row},${cell.col}`;
        if (starts.has(key)) {
          number++;
          cell.number = number;
          starts.get(key).forEach(entry => entry.number = number);
        }
      });
      entries.sort((a,b) => a.number - b.number || (a.dir === "across" ? -1 : 1));
      return { entries, cells, rows: maxRow - minRow + 1, cols: maxCol - minCol + 1 };
    }

    function startLevel(index) {
      if (!isUnlocked(index)) return;
      try {
        currentLevelIndex = index;
        puzzle = buildPuzzle(LEVELS[index]);
      } catch (error) {
        alert(`This level has a layout problem:\n${error.message}`);
        return;
      }
      progress.lastLevel = index;
      isCompletedThisRun = false;
      wrongCells = new Set();
      const savedState = progress.levelStates?.[index];
      elapsedSeconds = Number.isFinite(savedState?.elapsedSeconds) ? savedState.elapsedSeconds : 0;
      if (savedState?.values && typeof savedState.values === "object") {
        Object.entries(savedState.values).forEach(([key, value]) => {
          if (puzzle.cells.has(key) && /^[A-Z]$/.test(value)) puzzle.cells.get(key).value = value;
        });
      }
      if (Array.isArray(savedState?.revealed)) {
        savedState.revealed.forEach(key => { if (puzzle.cells.has(key)) puzzle.cells.get(key).revealed = true; });
      }
      activeWordId = puzzle.entries.find(entry => entry.dir === "across")?.id || puzzle.entries[0]?.id || null;
      const firstWord = getActiveWord();
      selectedCellKey = firstWord?.cells.find(key => !getCell(key).value) || firstWord?.cells[0] || puzzle.cells.keys().next().value;
      saveProgress();
      homeScreen.classList.remove("active");
      gameScreen.classList.add("active");
      $("gameTitle").textContent = LEVELS[index].title;
      $("gameLevelLabel").textContent = `Level ${String(index + 1).padStart(2, "0")} · ${LEVELS[index].difficulty}`;
      $("messageLine").textContent = "Choose a square to see its clue.";
      $("messageLine").className = "message-line";
      $("completeModal").classList.remove("show");
      renderGame();
      updateTimer();
      checkSolved();
    }
    function backToHome() {
      saveCurrentLevelState();
      $("deviceInput").blur();
      gameScreen.classList.remove("active");
      homeScreen.classList.add("active");
      $("completeModal").classList.remove("show");
      renderHome();
    }
    function getActiveWord() { return puzzle?.entries.find(entry => entry.id === activeWordId) || null; }
    function getCell(key) { return puzzle?.cells.get(key) || null; }
    function currentCell() { return getCell(selectedCellKey); }
    function focusDeviceInput() {
      const input = $("deviceInput");
      if (input && gameScreen.classList.contains("active")) input.focus({ preventScroll: true });
    }

    function renderGame() {
      renderGrid();
      renderClues();
      updateProgress();
      updateTimer();
    }
    function renderGrid() {
      const grid = $("crosswordGrid");
      const viewport = grid.parentElement;
      const availableWidth = Math.max(120, viewport.clientWidth - 8);
      const availableHeight = Math.max(120, viewport.clientHeight - 8);
      const widthSize = availableWidth / puzzle.cols;
      const heightSize = availableHeight / puzzle.rows;
      const cellSize = Math.max(16, Math.min(46, Math.floor(widthSize), Math.floor(heightSize)));

      grid.style.setProperty("--cell-size", `${cellSize}px`);
      grid.style.gridTemplateColumns = `repeat(${puzzle.cols}, var(--cell-size))`;
      grid.innerHTML = "";
      const activeWord = getActiveWord();
      const activeSet = new Set(activeWord?.cells || []);

      for (let row = 0; row < puzzle.rows; row++) {
        for (let col = 0; col < puzzle.cols; col++) {
          const key = `${row},${col}`;
          const cellData = puzzle.cells.get(key);
          if (!cellData) {
            const block = document.createElement("div");
            block.className = "block";
            block.setAttribute("aria-hidden", "true");
            grid.appendChild(block);
            continue;
          }

          const button = document.createElement("button");
          button.type = "button";
          button.className = "cell";
          if (activeSet.has(key)) button.classList.add("highlighted");
          if (key === selectedCellKey) button.classList.add("selected");
          if (wrongCells.has(key)) button.classList.add("wrong");
          if (cellData.revealed) button.classList.add("revealed");
          button.setAttribute("aria-label", `Row ${row + 1}, column ${col + 1}, ${cellData.value || "blank"}`);
          button.innerHTML = `${cellData.number ? `<span class="cell-number">${cellData.number}</span>` : ""}<span class="cell-letter">${cellData.value || ""}</span>`;
          button.addEventListener("click", () => selectCell(key));
          grid.appendChild(button);
        }
      }
    }
    function renderClues() {
      const active = getActiveWord();
      $("acrossClues").innerHTML = "";
      $("downClues").innerHTML = "";
      ["across", "down"].forEach(dir => {
        const container = dir === "across" ? $("acrossClues") : $("downClues");
        puzzle.entries.filter(entry => entry.dir === dir).forEach(entry => {
          const button = document.createElement("button");
          button.type = "button";
          button.className = `clue-item${entry.id === activeWordId ? " active" : ""}`;
          button.innerHTML = `<span class="clue-num">${entry.number}.</span><span>${escapeHTML(entry.clue)}</span>`;
          button.addEventListener("click", () => activateWord(entry.id));
          container.appendChild(button);
        });
      });
      $("clueCount").textContent = `${puzzle.entries.length} words`;
      const activeButton = document.querySelector(".clue-item.active");
      activeButton?.scrollIntoView({ block: "nearest", inline: "nearest" });
      if (active) {
        $("activeClueLabel").textContent = `${active.dir} · ${active.number} · ${active.word.length} letters`;
        $("activeClueText").textContent = active.clue;
        $("directionLabel").textContent = active.dir[0].toUpperCase() + active.dir.slice(1);
      }
    }
    function saveCurrentLevelState() {
      if (!puzzle || isCompletedThisRun) return;
      if (!progress.levelStates) progress.levelStates = {};
      const values = {};
      const revealed = [];
      puzzle.cells.forEach((cell, key) => {
        if (cell.value) values[key] = cell.value;
        if (cell.revealed) revealed.push(key);
      });
      progress.levelStates[currentLevelIndex] = { values, revealed, elapsedSeconds };
      progress.lastLevel = currentLevelIndex;
      saveProgress();
    }
    function updateProgress() {
      let filled = 0;
      puzzle.cells.forEach(cell => { if (cell.value) filled++; });
      const total = puzzle.cells.size;
      const percent = Math.round(filled / total * 100);
      $("fillLabel").textContent = `${percent}% filled`;
      $("progressFill").style.width = `${percent}%`;
    }
    function selectCell(key) {
      const cell = getCell(key);
      if (!cell) return;
      const choices = cell.entries.map(id => puzzle.entries.find(entry => entry.id === id)).filter(Boolean);
      if (selectedCellKey === key && choices.length > 1) {
        const other = choices.find(entry => entry.id !== activeWordId);
        if (other) activeWordId = other.id;
      } else {
        const currentStillFits = choices.some(entry => entry.id === activeWordId);
        if (!currentStillFits) activeWordId = choices[0]?.id || activeWordId;
      }
      selectedCellKey = key;
      renderGame();
      focusDeviceInput();
    }
    function activateWord(id) {
      const entry = puzzle.entries.find(item => item.id === id);
      if (!entry) return;
      activeWordId = id;
      selectedCellKey = entry.cells.find(key => !getCell(key).value) || entry.cells[0];
      renderGame();
      focusDeviceInput();
    }
    function moveInWord(step) {
      const word = getActiveWord();
      if (!word) return;
      const index = word.cells.indexOf(selectedCellKey);
      const next = Math.max(0, Math.min(word.cells.length - 1, index + step));
      selectedCellKey = word.cells[next];
      renderGame();
    }
    function enterLetter(letter) {
      if (!puzzle || !selectedCellKey || isCompletedThisRun) return;
      const cell = currentCell();
      if (!cell) return;
      cell.value = letter.toUpperCase();
      wrongCells.delete(selectedCellKey);
      moveInWord(1);
      $("messageLine").textContent = "";
      $("messageLine").className = "message-line";
      renderGame();
      saveCurrentLevelState();
      checkSolved();
    }
    function clearCurrentLetter() {
      if (!puzzle || !selectedCellKey || isCompletedThisRun) return;
      const cell = currentCell();
      if (!cell) return;
      if (!cell.value) moveInWord(-1);
      const target = currentCell();
      if (target) { target.value = ""; target.revealed = false; wrongCells.delete(selectedCellKey); }
      renderGame();
      saveCurrentLevelState();
    }
    function checkWord() {
      const word = getActiveWord();
      if (!word) return;
      const wrong = word.cells.filter(key => getCell(key).value && getCell(key).value !== getCell(key).solution);
      const blanks = word.cells.filter(key => !getCell(key).value);
      wrong.forEach(key => wrongCells.add(key));
      if (wrong.length) setMessage(`${wrong.length} letter${wrong.length > 1 ? "s" : ""} ${wrong.length > 1 ? "are" : "is"} incorrect in this word.`, "error");
      else if (blanks.length) setMessage(`This word still has ${blanks.length} blank square${blanks.length > 1 ? "s" : ""}.`, "");
      else setMessage("This word is correct!", "success");
      renderGrid();
    }
    function revealLetter() {
      const word = getActiveWord();
      if (!word) return;
      const targetKey = word.cells.find(key => getCell(key).value !== getCell(key).solution);
      if (!targetKey) { setMessage("This word is already correct.", "success"); return; }
      const cell = getCell(targetKey);
      cell.value = cell.solution;
      cell.revealed = true;
      wrongCells.delete(targetKey);
      selectedCellKey = targetKey;
      setMessage("One letter revealed.", "");
      renderGame();
      saveCurrentLevelState();
      checkSolved();
    }
    function revealWord() {
      const word = getActiveWord();
      if (!word) return;
      word.cells.forEach(key => {
        const cell = getCell(key);
        cell.value = cell.solution;
        cell.revealed = true;
        wrongCells.delete(key);
      });
      setMessage("The selected word has been revealed.", "");
      renderGame();
      saveCurrentLevelState();
      checkSolved();
    }
    function clearLevel() {
      puzzle.cells.forEach(cell => { cell.value = ""; cell.revealed = false; });
      wrongCells.clear();
      elapsedSeconds = 0;
      isCompletedThisRun = false;
      setMessage("The grid has been cleared. Start again!", "");
      renderGame();
      saveCurrentLevelState();
    }
    function setMessage(message, kind) {
      $("messageLine").textContent = message;
      $("messageLine").className = `message-line${kind ? ` ${kind}` : ""}`;
    }
    function checkSolved() {
      if (isCompletedThisRun) return;
      const solved = [...puzzle.cells.values()].every(cell => cell.value === cell.solution);
      if (!solved) return;
      isCompletedThisRun = true;
      const previousBest = progress.bestTimes[currentLevelIndex];
      if (!previousBest || elapsedSeconds < previousBest) progress.bestTimes[currentLevelIndex] = elapsedSeconds;
      if (!progress.completed.includes(currentLevelIndex)) progress.completed.push(currentLevelIndex);
      progress.completed.sort((a,b) => a-b);
      if (!progress.levelStates) progress.levelStates = {};
      delete progress.levelStates[currentLevelIndex];
      saveProgress();
      const nextExists = currentLevelIndex < LEVELS.length - 1;
      $("completeText").textContent = `You solved ${LEVELS[currentLevelIndex].title} in ${formatTime(elapsedSeconds)}. ${nextExists ? "The next level is now unlocked." : "You have completed every available level."}`;
      $("nextLevelBtn").style.display = nextExists ? "inline-flex" : "none";
      $("nextLevelBtn").onclick = () => startLevel(Math.min(currentLevelIndex + 1, LEVELS.length - 1));
      $("completeModal").classList.add("show");
      renderHome();
    }
    function updateTimer() {
      $("timer").textContent = formatTime(elapsedSeconds);
    }

    // Native device keyboard support: physical keyboards use keydown; mobile
    // soft keyboards can send input events to this tiny, visually hidden field.
    $("deviceInput").addEventListener("input", event => {
      const input = event.currentTarget;
      const letters = input.value.toUpperCase().replace(/[^A-Z]/g, "");
      input.value = "";
      for (const letter of letters) enterLetter(letter);
    });

    // Physical keyboard support: letters, backspace, arrows and Tab.
    document.addEventListener("keydown", event => {
      if (!gameScreen.classList.contains("active") || $("completeModal").classList.contains("show")) return;
      if (/^[a-z]$/i.test(event.key)) {
        event.preventDefault();
        enterLetter(event.key);
      } else if (event.key === "Backspace" || event.key === "Delete") {
        event.preventDefault();
        clearCurrentLetter();
      } else if (["ArrowRight", "ArrowDown"].includes(event.key)) {
        event.preventDefault();
        moveInWord(1);
      } else if (["ArrowLeft", "ArrowUp"].includes(event.key)) {
        event.preventDefault();
        moveInWord(-1);
      } else if (event.key === "Tab") {
        event.preventDefault();
        const index = puzzle.entries.findIndex(entry => entry.id === activeWordId);
        activateWord(puzzle.entries[(index + 1) % puzzle.entries.length].id);
      }
    });

    $("backBtn").addEventListener("click", backToHome);
    $("modalHomeBtn").addEventListener("click", backToHome);
    $("checkWordBtn").addEventListener("click", checkWord);
    $("revealLetterBtn").addEventListener("click", revealLetter);
    $("revealWordBtn").addEventListener("click", revealWord);
    $("clearBtn").addEventListener("click", () => {
      if (confirm("Clear every letter in this level?")) clearLevel();
    });
    $("restartBtn").addEventListener("click", () => { elapsedSeconds = 0; updateTimer(); saveCurrentLevelState(); setMessage("Timer restarted.", ""); });
    window.addEventListener("resize", () => { if (puzzle && gameScreen.classList.contains("active")) renderGrid(); });

    setInterval(() => {
      if (gameScreen.classList.contains("active") && !isCompletedThisRun) {
        elapsedSeconds++;
        updateTimer();
        if (elapsedSeconds % 5 === 0) saveCurrentLevelState();
      }
    }, 1000);

    renderHome();
