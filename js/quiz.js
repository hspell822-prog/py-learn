/* ═══════════════════════════════════════════════════════
   Quiz Renderer — with Reset Support
   ═══════════════════════════════════════════════════════ */

window.PyQuiz = (function(){
  let state = { answers: {} };
  let currentQuiz = [];
  let currentLang = 'ur';
  let container = null;

  const api = {
    onAnswer: null,
    currentTopicKey: null
  };

  function reset(){
    state = { answers: {} };
  }

  function setLang(lang){
    currentLang = lang;
  }

  function load(quiz, savedAnswers){
    currentQuiz = quiz || [];
    state.answers = savedAnswers ? { ...savedAnswers } : {};
  }

  function render(el){
    if (!el) return;
    container = el;
    el.innerHTML = '';

    currentQuiz.forEach((item, qi) => {
      const qDiv = document.createElement('div');
      qDiv.className = 'quiz-item';
      const answered = state.answers[qi] !== undefined;
      if (answered){
        qDiv.classList.add(state.answers[qi] === item.answer ? 'correct' : 'wrong');
      }
      qDiv.innerHTML = `
        <div class="quiz-q">${qi + 1}. ${item.q[currentLang]}</div>
        <div class="quiz-opts">
          ${item.options.map((opt, oi) => `
            <button class="quiz-opt" data-q="${qi}" data-o="${oi}">
              <span class="letter">${String.fromCharCode(65 + oi)}</span>
              <span>${opt}</span>
            </button>
          `).join('')}
        </div>
      `;
      el.appendChild(qDiv);
    });

    el.querySelectorAll('.quiz-opt').forEach(btn => {
      const qi = parseInt(btn.dataset.q);
      const oi = parseInt(btn.dataset.o);
      const item = currentQuiz[qi];
      const answered = state.answers[qi] !== undefined;

      if (answered){
        btn.disabled = true;
        const selected = state.answers[qi];
        if (oi === item.answer){
          btn.classList.add(oi === selected ? 'correct' : 'show-correct');
        } else if (oi === selected){
          btn.classList.add('wrong');
        }
      } else {
        btn.addEventListener('click', () => answer(qi, oi));
      }
    });
  }

  function answer(qi, oi){
    if (state.answers[qi] !== undefined) return;
    state.answers[qi] = oi;

    if (typeof api.onAnswer === 'function'){
      api.onAnswer(api.currentTopicKey, { ...state.answers });
    }

    render(container);
  }

  // Reset current quiz (all answers)
  function resetCurrent(){
    state.answers = {};
    if (typeof api.onAnswer === 'function'){
      api.onAnswer(api.currentTopicKey, {});
    }
    render(container);
    console.log('🔄 Quiz reset for:', api.currentTopicKey);
  }

  // Reset only wrong answers (keep correct ones)
  function resetWrong(){
    const newAnswers = {};
    currentQuiz.forEach((item, qi) => {
      if (state.answers[qi] === item.answer){
        newAnswers[qi] = state.answers[qi];
      }
    });
    state.answers = newAnswers;
    if (typeof api.onAnswer === 'function'){
      api.onAnswer(api.currentTopicKey, { ...newAnswers });
    }
    render(container);
    console.log('🔄 Wrong answers cleared for:', api.currentTopicKey);
  }

  return {
    load,
    render,
    reset,
    setLang,
    resetCurrent,
    resetWrong,
    getAnswers: () => ({ ...state.answers }),
    get onAnswer(){ return api.onAnswer; },
    set onAnswer(fn){ api.onAnswer = fn; },
    get currentTopicKey(){ return api.currentTopicKey; },
    set currentTopicKey(key){ api.currentTopicKey = key; }
  };
})();