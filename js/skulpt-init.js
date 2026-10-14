/* ═══════════════════════════════════════════════════════
   Skulpt Python Engine — Setup
   ═══════════════════════════════════════════════════════ */

window.PyEngine = (function(){
  let ready = false;
  let running = false;
  let activeBody = null;

  function builtinRead(x){
    if (Sk.builtinFiles === undefined || Sk.builtinFiles["files"][x] === undefined){
      throw "File not found: '" + x + "'";
    }
    return Sk.builtinFiles["files"][x];
  }

  function init(){
    try{
      if (typeof Sk === 'undefined') throw new Error('Skulpt not loaded');
      Sk.configure({
        output: (text) => {
          if (activeBody) appendLine(activeBody, text, '');
        },
        read: builtinRead,
        inputfun: (prompt) => window.prompt(prompt || 'Input:') || '',
        inputfunTakesPrompt: true,
        __future__: Sk.python3,
        execLimit: 8000
      });
      ready = true;
      return true;
    }catch(e){
      console.error(e);
      return false;
    }
  }

  function appendLine(body, text, cls=''){
    const span = document.createElement('span');
    span.style.display = 'block';
    if (cls) span.className = cls;
    span.textContent = text;
    body.appendChild(span);
    body.scrollTop = body.scrollHeight;
  }

  async function run(code, terminalBody){
    if (!ready || running) return {ok:false, reason:'not-ready'};
    running = true;
    activeBody = terminalBody;

    const start = performance.now();
    try{
      await Sk.misceval.asyncToPromise(() =>
        Sk.importMainWithBody('<stdin>', false, code, true)
      );
      const ms = Math.round(performance.now() - start);
      appendLine(terminalBody, '✓ Program khatam ho gaya', 'success');
      return {ok:true, ms};
    }catch(err){
      const msg = (typeof err === 'string') ? err : String(err);
      appendLine(terminalBody, '❌ ' + friendlyError(msg), 'err');
      return {ok:false, error: msg};
    }finally{
      running = false;
      activeBody = null;
    }
  }

  function friendlyError(raw){
    if (!raw || !raw.trim()) return 'Kuch ghalat hua lekin error clear nahi.';
    const last = raw.trim().split('\n').pop();
    if (last.includes('IndentationError')) return 'Indentation: 4 spaces zaroori.';
    if (last.includes('SyntaxError')) return 'SyntaxError: Colon, brackets, quotes check karo.';
    if (last.includes('NameError')) return 'NameError: Variable nahi mila.';
    if (last.includes('TypeError')) return 'TypeError: Type mismatch.';
    if (last.includes('ZeroDivisionError')) return 'ZeroDivisionError: Zero se divide nahi.';
    if (last.includes('ValueError')) return 'ValueError: Value theek nahi.';
    if (last.includes('IndexError')) return 'IndexError: Index list mein nahi.';
    if (last.includes('KeyError')) return 'KeyError: Dict mein key nahi.';
    if (last.includes('FileNotFoundError')) return 'FileNotFoundError: File nahi mili.';
    return last;
  }

  return {
    init,
    run,
    isReady: () => ready,
    isRunning: () => running,
    appendLine
  };
})();