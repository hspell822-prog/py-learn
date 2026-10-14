/* ═══════════════════════════════════════════════════════
   PyLearn — Main App (Complete)
   ═══════════════════════════════════════════════════════ */

(function(){
  const $ = (id) => document.getElementById(id);
  const MODULES = window.MODULES || {};

  const state = {
    lang: localStorage.getItem('pylearn.lang') || 'ur',
    currentModule: null,
    currentTopic: 0,
    userCode: {},
    progress: safeParse(localStorage.getItem('pylearn.progress'), {}),
    quizProgress: safeParse(localStorage.getItem('pylearn.quiz'), {})
  };

  function safeParse(str, fallback){
    try { return str ? JSON.parse(str) : fallback; }
    catch(e){ return fallback; }
  }

  console.log('🚀 PyLearn loaded');

  /* ═══ UNLOCK LOGIC ═══ */
  function isModuleUnlocked(modId){
    const mod = MODULES[modId];
    if (!mod) return false;
    if (mod.number === 1) return true;
    const prevMod = Object.values(MODULES).find(m => m.number === mod.number - 1);
    if (!prevMod) return true;
    return state.progress[prevMod.id] === true;
  }

  /* ═══ SAVE ═══ */
  function saveProgress(){
    localStorage.setItem('pylearn.progress', JSON.stringify(state.progress));
    localStorage.setItem('pylearn.quiz', JSON.stringify(state.quizProgress));
  }

  /* ═══ GET MODULE PROGRESS ═══ */
  function getModuleProgress(mod){
    if (!mod) return { correct: 0, total: 0, percentage: 0 };
    let correct = 0, total = 0;
    mod.topics.forEach(topic => {
      const key = `${mod.id}:${topic.id}`;
      const answers = state.quizProgress[key] || {};
      topic.quiz.forEach((q, i) => {
        total++;
        if (answers[i] === q.answer) correct++;
      });
    });
    return {
      correct, total,
      percentage: total > 0 ? Math.round((correct / total) * 100) : 0
    };
  }

  function isModuleComplete(mod){
    const prog = getModuleProgress(mod);
    return prog.correct === prog.total && prog.total > 0;
  }

  /* ═══ UPDATE PROGRESS UI ═══ */
  function updateModuleProgressUI(){
    const mod = MODULES[state.currentModule];
    if (!mod) return;

    const prog = getModuleProgress(mod);
    const box = $('moduleProgressBox');
    const text = $('moduleProgressText');
    const fill = $('moduleProgressFill');
    const btn = $('completeModuleBtn');
    const banner = $('moduleCompleteBanner');
    const hint = $('progressHint');

    if (!box) return;

    box.style.display = 'block';
    text.textContent = `${prog.correct} / ${prog.total} correct`;
    fill.style.width = prog.percentage + '%';

    // Update hint
    if (hint){
      if (prog.correct === prog.total && prog.total > 0){
        hint.classList.add('done');
        hint.innerHTML = state.lang === 'ur' 
          ? '✅ Sab sahi! Module complete ho gaya!' 
          : '✅ All correct! Module complete!';
      } else {
        hint.classList.remove('done');
        hint.innerHTML = state.lang === 'ur'
          ? `💡 ${prog.total - prog.correct} quiz baqi hain — sab sahi karo`
          : `💡 ${prog.total - prog.correct} quizzes left — answer all correctly`;
      }
    }

    if (state.progress[mod.id]){
      btn.style.display = 'none';
      banner.style.display = 'flex';
      
      const nextMod = Object.values(MODULES).find(m => m.number === mod.number + 1);
      const nextBtn = $('nextModuleBtn');
      if (nextMod && nextBtn){
        nextBtn.onclick = () => openModule(nextMod.id);
        nextBtn.innerHTML = state.lang === 'ur' 
          ? `Agla Module (${nextMod.number}) →` 
          : `Next Module (${nextMod.number}) →`;
      }
      return;
    }

    banner.style.display = 'none';

    if (prog.correct === prog.total && prog.total > 0){
      btn.style.display = 'block';
      btn.onclick = () => completeCurrentModule();
    } else {
      btn.style.display = 'none';
    }
  }

  /* ═══ COMPLETE CURRENT MODULE ═══ */
  function completeCurrentModule(){
    const mod = MODULES[state.currentModule];
    if (!mod) return;

    const prog = getModuleProgress(mod);
    if (prog.correct !== prog.total){
      alert(state.lang === 'ur' 
        ? `Abhi ${prog.total - prog.correct} quiz baqi hain!`
        : `${prog.total - prog.correct} quizzes remaining!`);
      return;
    }

    state.progress[mod.id] = true;
    saveProgress();
    
    updateModuleProgressUI();
    renderHome();
    updateHeaderProgress();
    
    const banner = $('moduleCompleteBanner');
    if (banner) banner.scrollIntoView({behavior:'smooth', block:'nearest'});
  }

  /* ═══ QUIZ CALLBACK ═══ */
  window.onQuizAnswered = function(topicKey, answers){
    state.quizProgress[topicKey] = answers;
    saveProgress();
    updateModuleProgressUI();

    const mod = MODULES[state.currentModule];
    if (mod && !state.progress[mod.id] && isModuleComplete(mod)){
      state.progress[mod.id] = true;
      saveProgress();
      updateModuleProgressUI();
      renderHome();
      updateHeaderProgress();
    }
  };

  /* ═══ VIEWS ═══ */
  function showView(name){
    document.querySelectorAll('.view').forEach(v => {
      v.classList.toggle('active', v.id === 'view-' + name);
    });
    window.scrollTo({top:0, behavior:'smooth'});
  }

  /* ═══ HOME ═══ */
  function renderHome(){
    const grid = $('modulesGrid');
    if (!grid) return;
    grid.innerHTML = '';

    const list = Object.values(MODULES).sort((a,b) => a.number - b.number);

    list.forEach(mod => {
      const unlocked = isModuleUnlocked(mod.id);
      const completed = state.progress[mod.id] === true;
      const prog = getModuleProgress(mod);

      const card = document.createElement('div');
      card.className = 'module-card';
      if (!unlocked) card.classList.add('locked');
      if (completed) card.classList.add('completed');

      card.innerHTML = `
        ${completed ? '' : !unlocked ? '<div class="lock-badge">🔒</div>' : ''}
        <div class="module-num">${mod.number}</div>
        <h3>${mod.title[state.lang]}</h3>
        <p>${mod.description[state.lang]}</p>
        <div class="module-meta">
          <span>⏱ ${mod.duration}</span>
          <span>📚 ${mod.topics.length} topics</span>
          ${completed 
            ? '<span style="margin-left:auto;color:var(--py-green-glow);font-weight:800;">✓ Done</span>'
            : prog.correct > 0
              ? `<span style="margin-left:auto;color:var(--py-blue-glow);font-weight:700;font-family:var(--mono);font-size:.7rem;">${prog.percentage}%</span>`
              : ''
          }
        </div>
      `;

      card.addEventListener('click', () => {
        if (!unlocked){
          showLockedToast(mod.number);
          return;
        }
        openModule(mod.id);
      });

      grid.appendChild(card);
    });

    updateHeaderProgress();
  }

  /* ═══ LOCKED TOAST ═══ */
  function showLockedToast(num){
    const toast = document.createElement('div');
    toast.style.cssText = `
      position:fixed;bottom:28px;left:50%;transform:translateX(-50%);
      background:linear-gradient(135deg,rgba(245,158,11,.95),rgba(245,158,11,.85));
      color:#fff;padding:12px 22px;border-radius:99px;
      font-weight:700;font-size:.85rem;font-family:Inter,sans-serif;
      box-shadow:0 8px 30px rgba(245,158,11,.4);z-index:1000;
      animation:toastIn .3s ease;
    `;
    toast.textContent = state.lang === 'ur'
      ? `🔒 Pehle Module ${num - 1} complete karo!`
      : `🔒 Complete Module ${num - 1} first!`;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 2200);
  }

  /* ═══ MODULE OPEN ═══ */
  function openModule(modId){
    const mod = MODULES[modId];
    if (!mod) return;

    state.currentModule = modId;
    state.currentTopic = 0;

    $('moduleTag').textContent = `🐍 MODULE ${mod.number} · ${mod.slug.toUpperCase()}`;
    $('moduleTitle').textContent = mod.title[state.lang];
    $('moduleDesc').textContent = mod.description[state.lang];
    $('moduleBadges').innerHTML = `
      <span class="badge">⏱ ${mod.duration}</span>
      <span class="badge">🎓 ${mod.level}</span>
      <span class="badge">📚 ${mod.topics.length} topics</span>
    `;

    switchTab('learn');
    renderTopic();
    showView('module');
  }

  /* ═══ TOPIC ═══ */
  function renderTopic(){
    const mod = MODULES[state.currentModule];
    if (!mod) return;
    const topic = mod.topics[state.currentTopic];

    $('topicBody').innerHTML = topic.learn[state.lang] || topic.learn.en;

    const code = state.userCode[topic.id] !== undefined
      ? state.userCode[topic.id]
      : (topic.code[state.lang] || topic.code.en);
    $('codeInput').value = code;

    $('prevTopicBtn').disabled = state.currentTopic === 0;
    $('nextTopicBtn').disabled = state.currentTopic === mod.topics.length - 1;

    renderTheoryNav();
    renderTheoryContent();
    renderPractice();
    loadQuiz();
  }

  $('prevTopicBtn').addEventListener('click', () => {
    if (state.currentTopic > 0){ state.currentTopic--; renderTopic(); }
  });
  $('nextTopicBtn').addEventListener('click', () => {
    const mod = MODULES[state.currentModule];
    if (state.currentTopic < mod.topics.length - 1){ state.currentTopic++; renderTopic(); }
  });

  /* ═══ THEORY ═══ */
  function renderTheoryNav(){
    const mod = MODULES[state.currentModule];
    if (!mod) return;
    const nav = $('theoryNav');
    nav.innerHTML = '';
    mod.topics.forEach((t, i) => {
      const btn = document.createElement('button');
      btn.className = 'theory-nav-btn' + (i === state.currentTopic ? ' active' : '');
      btn.textContent = t.icon + ' ' + (t.title[state.lang] || t.title.en);
      btn.addEventListener('click', () => {
        state.currentTopic = i;
        renderTopic();
      });
      nav.appendChild(btn);
    });
  }

  function renderTheoryContent(){
    const mod = MODULES[state.currentModule];
    if (!mod) return;
    const topic = mod.topics[state.currentTopic];
    $('theoryContent').innerHTML = `
      <h2><span class="icon">${topic.icon}</span>${topic.title[state.lang]}</h2>
      <div class="subtitle">${topic.title.en}</div>
      ${topic.theory[state.lang] || topic.theory.en}
    `;
  }

  /* ═══ PRACTICE ═══ */
  function renderPractice(){
    const mod = MODULES[state.currentModule];
    if (!mod) return;
    const topic = mod.topics[state.currentTopic];
    $('practiceContent').innerHTML = `
      <div class="practice-hint">
        <strong style="color:var(--text);display:block;margin-bottom:6px;" data-lang="ur">Tumhara kaam:</strong>
        <strong style="color:var(--text);display:block;margin-bottom:6px;" data-lang="en">Your task:</strong>
        <span data-lang="ur">Topic <strong>${topic.title.ur}</strong> ke concepts practice karo.</span>
        <span data-lang="en">Practice <strong>${topic.title.en}</strong>.</span>
      </div>
    `;
    document.body.className = 'lang-' + state.lang;
  }

  /* ═══ QUIZ LOAD ═══ */
  function loadQuiz(){
    const mod = MODULES[state.currentModule];
    if (!mod) return;
    const topic = mod.topics[state.currentTopic];

    const topicKey = `${mod.id}:${topic.id}`;
    const saved = state.quizProgress[topicKey] || {};

    PyQuiz.currentTopicKey = topicKey;
    PyQuiz.setLang(state.lang);
    PyQuiz.load(topic.quiz, saved);
    PyQuiz.render($('quizContainer'));

    updateModuleProgressUI();
  }

  /* ═══ QUIZ RESET BUTTONS ═══ */
  function initQuizResetButtons(){
    const resetWrongBtn = $('resetWrongBtn');
    const resetQuizBtn = $('resetQuizBtn');

    if (resetWrongBtn){
      resetWrongBtn.onclick = () => {
        if (PyQuiz.resetWrong){
          PyQuiz.resetWrong();
          updateModuleProgressUI();
        }
      };
    }

    if (resetQuizBtn){
      resetQuizBtn.onclick = () => {
        const msg = state.lang === 'ur'
          ? 'Is topic ka poora quiz reset karna hai?'
          : 'Reset the entire quiz for this topic?';
        if (confirm(msg)){
          if (PyQuiz.resetCurrent){
            PyQuiz.resetCurrent();
            updateModuleProgressUI();
          }
        }
      };
    }
  }

  /* ═══ TABS ═══ */
  function switchTab(name){
    document.querySelectorAll('.tab').forEach(t => t.classList.toggle('active', t.dataset.tab === name));
    document.querySelectorAll('.tab-content').forEach(c => c.classList.toggle('active', c.id === 'tab-' + name));
  }
  document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => switchTab(tab.dataset.tab));
  });

  /* ═══ BACK / HOME ═══ */
  $('backHomeBtn').addEventListener('click', () => {
    state.currentModule = null;
    showView('home');
    renderHome();
  });

  const homeBtn = $('homeBtn');
  if (homeBtn){
    homeBtn.addEventListener('click', () => {
      state.currentModule = null;
      showView('home');
      renderHome();
    });
  }

  /* ═══ HEADER PROGRESS ═══ */
  function updateHeaderProgress(){
    const dots = $('headerDots');
    const text = $('headerProgressText');
    if (!dots) return;
    dots.innerHTML = '';
    const allMods = Object.values(MODULES).sort((a,b) => a.number - b.number);
    const total = allMods.length || 12;
    let done = 0;
    allMods.forEach(m => { if (state.progress[m.id]) done++; });

    for (let i = 0; i < total; i++){
      const s = document.createElement('span');
      if (i < done) s.classList.add('done');
      else if (i === done) s.classList.add('current');
      dots.appendChild(s);
    }
    text.textContent = `${done}/${total}`;
  }

  /* ═══ LANGUAGE ═══ */
  function setLanguage(lang){
    state.lang = lang;
    localStorage.setItem('pylearn.lang', lang);
    document.body.className = 'lang-' + lang;
    document.documentElement.lang = lang;
    document.querySelectorAll('.lang-btn').forEach(b => {
      b.classList.toggle('active', b.dataset.lang === lang);
    });

    if (state.currentModule){
      const mod = MODULES[state.currentModule];
      $('moduleTitle').textContent = mod.title[state.lang];
      $('moduleDesc').textContent = mod.description[state.lang];
      renderTopic();
    }
    renderHome();
  }

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
  });

  /* ═══ EDITOR ═══ */
  function initEditor(){
    const inp = $('codeInput');
    if (!inp) return;
    inp.addEventListener('input', () => {
      const mod = MODULES[state.currentModule];
      if (!mod) return;
      const topic = mod.topics[state.currentTopic];
      state.userCode[topic.id] = inp.value;
    });
    inp.addEventListener('keydown', (e) => {
      if (e.key === 'Tab'){
        e.preventDefault();
        const s = inp.selectionStart;
        inp.value = inp.value.substring(0, s) + '    ' + inp.value.substring(inp.selectionEnd);
        inp.selectionStart = inp.selectionEnd = s + 4;
      }
    });
    $('runBtn').addEventListener('click', runCode);
    $('resetBtn').addEventListener('click', resetCode);
  }

  function resetCode(){
    const mod = MODULES[state.currentModule];
    if (!mod) return;
    const topic = mod.topics[state.currentTopic];
    delete state.userCode[topic.id];
    $('codeInput').value = topic.code[state.lang] || topic.code.en;
    $('terminalBody').innerHTML = '<span class="terminal-muted">&gt;&gt;&gt; Reset.</span>';
    setStatus('Ready', '');
  }

  function setStatus(text, cls){
    const el = $('termStatus');
    if (!el) return;
    el.textContent = text;
    el.className = 'terminal-status' + (cls ? ' ' + cls : '');
  }

  async function runCode(){
    if (!PyEngine.isReady() || PyEngine.isRunning()) return;
    const code = $('codeInput').value;
    const body = $('terminalBody');
    $('runBtn').disabled = true;
    setStatus('Running…', 'running');
    body.innerHTML = '';
    const result = await PyEngine.run(code, body);
    setStatus(result.ok ? `Done · ${result.ms}ms` : 'Error', result.ok ? 'success' : 'error');
    $('runBtn').disabled = false;
  }

  /* ═══ DEBUG HELPERS ═══ */
  window.PyDebug = {
    status(){
      console.table(Object.values(MODULES).sort((a,b)=>a.number-b.number).map(m => ({
        num: m.number,
        module: m.id,
        unlocked: isModuleUnlocked(m.id),
        completed: !!state.progress[m.id],
        progress: getModuleProgress(m).percentage + '%'
      })));
    },
    reset(){
      localStorage.removeItem('pylearn.progress');
      localStorage.removeItem('pylearn.quiz');
      location.reload();
    },
    unlockAll(){
      Object.values(MODULES).forEach(m => { state.progress[m.id] = true; });
      saveProgress();
      renderHome();
      console.log('🔓 All unlocked');
    },
    unlock(moduleNumber){
      const mod = Object.values(MODULES).find(m => m.number === moduleNumber);
      if (!mod) return console.error('Module not found');
      for (let i = 1; i < moduleNumber; i++){
        const prev = Object.values(MODULES).find(m => m.number === i);
        if (prev) state.progress[prev.id] = true;
      }
      saveProgress();
      renderHome();
      console.log(`🔓 Unlocked up to Module ${moduleNumber}`);
    }
  };

  /* ═══ INIT ═══ */
  function init(){
    document.body.className = 'lang-' + state.lang;
    document.documentElement.lang = state.lang;
    document.querySelectorAll('.lang-btn').forEach(b => {
      b.classList.toggle('active', b.dataset.lang === state.lang);
    });

    renderHome();
    initEditor();
    initQuizResetButtons();

    if (window.PyQuiz){
      PyQuiz.onAnswer = window.onQuizAnswered;
    }

    const ok = PyEngine.init();
    const runBtn = $('runBtn');
    if (ok){
      runBtn.disabled = false;
      runBtn.textContent = '▶ Run';
      setStatus('Ready', '');
      $('terminalBody').innerHTML = '<span class="terminal-muted">&gt;&gt;&gt; Ready.</span>';
    } else {
      setStatus('Engine unavailable', 'error');
    }

    console.log('✅ PyLearn ready');
    console.log('💡 Emergency: PyDebug.unlock(5)');
  }

  if (document.readyState === 'loading'){
    window.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();