// data/module-6.js
// Module 6: Error Handling — 3 topics

window.MODULES = window.MODULES || {};

window.MODULES["module-6"] = {
  id: "module-6",
  number: 6,
  slug: "error-handling",
  title: { ur: "Error Handling", en: "Error Handling" },
  description: {
    ur: "try/except, common exceptions, raise",
    en: "try/except, common exceptions, raise"
  },
  duration: "8 minutes",
  level: "Intermediate",
  locked: true,

  topics: [

    /* ═══════════════════════════════════════════════════════
       TOPIC 1: try / except / finally
       ═══════════════════════════════════════════════════════ */
    {
      id: "try-except",
      title: { ur: "try / except / finally", en: "try / except / finally" },
      icon: "🛡️",
      code: {
        ur: `# try / except / finally
try:
    number = int(input("Number likho: "))
    print(100 / number)
except:
    print("Kuch ghalat ho gaya!")
finally:
    print("Yeh hamesha chalega")`,
        en: `# try / except / finally
try:
    number = int(input("Enter a number: "))
    print(100 / number)
except:
    print("Something went wrong!")
finally:
    print("This always runs")`
      },
      learn: {
        ur: `<h2 style="font-size:1.15rem;font-weight:800;margin-bottom:14px;">🛡️ try / except / finally</h2>
<p style="color:var(--text-soft);font-size:.93rem;margin-bottom:14px;">Jab code mein error aane ka chance ho, <code>try/except</code> use karte hain taake program <strong>crash</strong> na ho, balke error handle kar liya jaye.</p>

<div style="background:var(--code-bg);border:1px solid var(--code-border);border-radius:10px;overflow:hidden;margin-bottom:16px;font-family:var(--mono);font-size:.82rem;">
  <div style="display:grid;grid-template-columns:120px 1fr;padding:9px 14px;background:var(--code-bg-2);color:var(--py-blue-glow);font-weight:700;font-size:.68rem;text-transform:uppercase;">Block · Kaam</div>
  <div style="display:grid;grid-template-columns:120px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">try</span><span style="color:var(--text-soft);">Wo code jo chalana hai (error possible)</span></div>
  <div style="display:grid;grid-template-columns:120px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">except</span><span style="color:var(--text-soft);">Agar error aaye to yeh chale</span></div>
  <div style="display:grid;grid-template-columns:120px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">finally</span><span style="color:var(--text-soft);">Hamesha chalega</span></div>
</div>

<div style="background:linear-gradient(135deg,rgba(75,139,190,.1),rgba(75,139,190,.03));border:1px solid rgba(75,139,190,.25);border-left:3px solid var(--py-blue);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--text);display:block;margin-bottom:3px;">💡 Kyun zaroori</strong>
Bina <code>try/except</code> ke, ek chhoti si galti se <strong>poora program crash</strong> ho jata hai.
</div>

<div style="background:linear-gradient(135deg,rgba(16,185,129,.1),rgba(16,185,129,.02));border:1px solid rgba(16,185,129,.25);border-left:3px solid var(--py-green);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--py-green-glow);display:block;margin-bottom:5px;font-family:var(--mono);font-size:.7rem;text-transform:uppercase;">⚠️ Common Mistake</strong>
Risky code pe (user input, file reading) <code>try/except</code> na lagana.
</div>`,
        en: `<h2 style="font-size:1.15rem;font-weight:800;margin-bottom:14px;">🛡️ try / except / finally</h2>
<p style="color:var(--text-soft);font-size:.93rem;margin-bottom:14px;">When code might error, use <code>try/except</code> so the program doesn't <strong>crash</strong> — it handles the error instead.</p>

<div style="background:var(--code-bg);border:1px solid var(--code-border);border-radius:10px;overflow:hidden;margin-bottom:16px;font-family:var(--mono);font-size:.82rem;">
  <div style="display:grid;grid-template-columns:120px 1fr;padding:9px 14px;background:var(--code-bg-2);color:var(--py-blue-glow);font-weight:700;font-size:.68rem;text-transform:uppercase;">Block · Does</div>
  <div style="display:grid;grid-template-columns:120px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">try</span><span style="color:var(--text-soft);">Code that might error</span></div>
  <div style="display:grid;grid-template-columns:120px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">except</span><span style="color:var(--text-soft);">Runs if error occurs</span></div>
  <div style="display:grid;grid-template-columns:120px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">finally</span><span style="color:var(--text-soft);">Always runs</span></div>
</div>

<div style="background:linear-gradient(135deg,rgba(75,139,190,.1),rgba(75,139,190,.03));border:1px solid rgba(75,139,190,.25);border-left:3px solid var(--py-blue);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--text);display:block;margin-bottom:3px;">💡 Why</strong>
Without <code>try/except</code>, one small mistake <strong>crashes the whole program</strong>.
</div>

<div style="background:linear-gradient(135deg,rgba(16,185,129,.1),rgba(16,185,129,.02));border:1px solid rgba(16,185,129,.25);border-left:3px solid var(--py-green);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--py-green-glow);display:block;margin-bottom:5px;font-family:var(--mono);font-size:.7rem;text-transform:uppercase;">⚠️ Common Mistake</strong>
Not wrapping risky code (user input, file reading) in <code>try/except</code>.
</div>`
      },
      theory: {
        ur: `<h3>Yeh kya hai?</h3>
<p>Error handling ka matlab hai <strong>galti se bachna</strong>. Jab tumhein pata ho ke code mein kuch ghalat ho sakta hai, tum <code>try/except</code> se usay handle karte ho — jaise car mein airbag.</p>

<h3>Kaise kaam karta hai?</h3>
<div class="steps">
<ol>
<li><strong>Step 1:</strong> Python <code>try</code> block chalata hai</li>
<li><strong>Step 2:</strong> Sab theek → <code>except</code> skip, <code>finally</code> chalta hai</li>
<li><strong>Step 3:</strong> Koi error aaya → <code>try</code> turant rukta hai</li>
<li><strong>Step 4:</strong> Python matching <code>except</code> dhundta hai</li>
<li><strong>Step 5:</strong> <code>except</code> ka code chalta hai</li>
<li><strong>Step 6:</strong> <code>finally</code> hamesha chalta hai (error ho ya na ho)</li>
</ol>
</div>

<h3>Basic example</h3>
<pre><span class="kw">try</span>:
    number = <span class="fn">int</span>(<span class="fn">input</span>(<span class="str">"Number likho: "</span>))
    <span class="fn">print</span>(<span class="num">100</span> / number)
<span class="kw">except</span>:
    <span class="fn">print</span>(<span class="str">"Kuch ghalat ho gaya!"</span>)</pre>

<h3>Specific exception</h3>
<pre><span class="kw">try</span>:
    x = <span class="fn">int</span>(<span class="str">"hello"</span>)
<span class="kw">except</span> ValueError:
    <span class="fn">print</span>(<span class="str">"Yeh number nahi hai!"</span>)
<span class="kw">except</span> ZeroDivisionError:
    <span class="fn">print</span>(<span class="str">"Zero se divide nahi!"</span>)</pre>

<h3>Multiple exceptions ek saath</h3>
<pre><span class="kw">try</span>:
    num = <span class="fn">int</span>(<span class="fn">input</span>())
    result = <span class="num">100</span> / num
<span class="kw">except</span> (ValueError, ZeroDivisionError) <span class="kw">as</span> e:
    <span class="fn">print</span>(<span class="str">"Error:"</span>, e)</pre>

<h3>finally — hamesha chalega</h3>
<pre><span class="kw">try</span>:
    file = <span class="fn">open</span>(<span class="str">"data.txt"</span>)
    data = file.read()
<span class="kw">except</span> FileNotFoundError:
    <span class="fn">print</span>(<span class="str">"File nahi mili"</span>)
<span class="kw">finally</span>:
    <span class="fn">print</span>(<span class="str">"Cleanup ho gaya"</span>)   <span class="cm"># hamesha</span></pre>

<div class="real-life">
<div class="head">🌍 Real Life Example</div>
<p><strong>Scenario:</strong> ATM se paisa nikalna — balance check zaroori.</p>
<pre style="margin-top:10px;margin-bottom:0;">balance = <span class="num">5000</span>

<span class="kw">try</span>:
    amount = <span class="fn">int</span>(<span class="fn">input</span>(<span class="str">"Amount: "</span>))
    <span class="kw">if</span> amount > balance:
        <span class="kw">raise</span> ValueError(<span class="str">"Balance kam hai"</span>)
    balance -= amount
    <span class="fn">print</span>(<span class="str">f"Remaining: {balance}"</span>)
<span class="kw">except</span> ValueError <span class="kw">as</span> e:
    <span class="fn">print</span>(<span class="str">"Error:"</span>, e)
<span class="kw">finally</span>:
    <span class="fn">print</span>(<span class="str">"Card nikal lo"</span>)</pre>
</div>

<div class="warn-box">
<div class="head">⚠️ Common Mistakes</div>
<ul>
<li>Generic <code>except:</code> — kya error tha pata nahi chalta</li>
<li>Bohat bara try block — multiple errors ek saath</li>
<li><code>finally</code> mein <code>return</code> — try ke result ko override kar deta hai</li>
</ul>
</div>

<div class="pro-tip">
<div class="head">✨ Pro Tip</div>
<p>Specific exception catch karo — <code>except ValueError</code>, na ke <code>except:</code>. Debugging asaan, code clear.</p>
</div>`,
        en: `<h3>What is it?</h3>
<p>Error handling means <strong>catching mistakes safely</strong>. When you know code might error, <code>try/except</code> handles it — like an airbag in a car.</p>

<h3>How does it work?</h3>
<div class="steps">
<ol>
<li><strong>Step 1:</strong> Python runs <code>try</code></li>
<li><strong>Step 2:</strong> All fine → skip <code>except</code>, run <code>finally</code></li>
<li><strong>Step 3:</strong> Error → <code>try</code> stops immediately</li>
<li><strong>Step 4:</strong> Python finds matching <code>except</code></li>
<li><strong>Step 5:</strong> <code>except</code> code runs</li>
<li><strong>Step 6:</strong> <code>finally</code> runs always</li>
</ol>
</div>

<h3>Basic example</h3>
<pre><span class="kw">try</span>:
    number = <span class="fn">int</span>(<span class="fn">input</span>(<span class="str">"Number: "</span>))
    <span class="fn">print</span>(<span class="num">100</span> / number)
<span class="kw">except</span>:
    <span class="fn">print</span>(<span class="str">"Something went wrong!"</span>)</pre>

<h3>Specific exception</h3>
<pre><span class="kw">try</span>:
    x = <span class="fn">int</span>(<span class="str">"hello"</span>)
<span class="kw">except</span> ValueError:
    <span class="fn">print</span>(<span class="str">"Not a number!"</span>)</pre>

<h3>Multiple exceptions</h3>
<pre><span class="kw">try</span>:
    num = <span class="fn">int</span>(<span class="fn">input</span>())
    result = <span class="num">100</span> / num
<span class="kw">except</span> (ValueError, ZeroDivisionError) <span class="kw">as</span> e:
    <span class="fn">print</span>(<span class="str">"Error:"</span>, e)</pre>

<h3>finally — always runs</h3>
<pre><span class="kw">try</span>:
    file = <span class="fn">open</span>(<span class="str">"data.txt"</span>)
<span class="kw">except</span> FileNotFoundError:
    <span class="fn">print</span>(<span class="str">"File not found"</span>)
<span class="kw">finally</span>:
    <span class="fn">print</span>(<span class="str">"Cleanup done"</span>)</pre>

<div class="real-life">
<div class="head">🌍 Real Life Example</div>
<p><strong>Scenario:</strong> ATM withdrawal — need balance check.</p>
<pre style="margin-top:10px;margin-bottom:0;">balance = <span class="num">5000</span>

<span class="kw">try</span>:
    amount = <span class="fn">int</span>(<span class="fn">input</span>(<span class="str">"Amount: "</span>))
    <span class="kw">if</span> amount > balance:
        <span class="kw">raise</span> ValueError(<span class="str">"Insufficient balance"</span>)
    balance -= amount
    <span class="fn">print</span>(<span class="str">f"Remaining: {balance}"</span>)
<span class="kw">except</span> ValueError <span class="kw">as</span> e:
    <span class="fn">print</span>(<span class="str">"Error:"</span>, e)
<span class="kw">finally</span>:
    <span class="fn">print</span>(<span class="str">"Take your card"</span>)</pre>
</div>

<div class="warn-box">
<div class="head">⚠️ Common Mistakes</div>
<ul>
<li>Generic <code>except:</code> — you don't know what errored</li>
<li>Too-big try block — multiple errors together</li>
<li><code>return</code> inside <code>finally</code> — overrides try's result</li>
</ul>
</div>

<div class="pro-tip">
<div class="head">✨ Pro Tip</div>
<p>Catch specific exceptions — <code>except ValueError</code>, not <code>except:</code>.</p>
</div>`
      },
      quiz: [
        { q: { ur: "try block mein kya likhte?", en: "What goes in try?" }, options: ["Error message", "Code that might error", "Comments", "Functions"], answer: 1 },
        { q: { ur: "except block kab chalta?", en: "When does except run?" }, options: ["Always", "Only if error in try", "Never", "On start"], answer: 1 },
        { q: { ur: "finally block kab chalta?", en: "When does finally run?" }, options: ["Only on error", "Only if no error", "Always", "Never"], answer: 2 },
        { q: { ur: "try/except ka faida?", en: "Benefit of try/except?" }, options: ["Faster", "Handles errors, no crash", "No errors ever", "No benefit"], answer: 1 },
        { q: { ur: "Bina try/except error aaye to?", en: "Without try/except on error?" }, options: ["Nothing", "Program crashes", "Warning only", "Auto-fix"], answer: 1 }
      ]
    },

    /* ═══════════════════════════════════════════════════════
       TOPIC 2: Common Exceptions
       ═══════════════════════════════════════════════════════ */
    {
      id: "common-exceptions",
      title: { ur: "Common Exceptions", en: "Common Exceptions" },
      icon: "⚠️",
      code: {
        ur: `# Common exceptions demo
try:
    x = int("hello")   # ValueError
except ValueError:
    print("Yeh number nahi hai!")

try:
    print(10 / 0)       # ZeroDivisionError
except ZeroDivisionError:
    print("Zero se divide nahi!")

try:
    nums = [1, 2, 3]
    print(nums[10])     # IndexError
except IndexError:
    print("Yeh index list mein nahi!")`,
        en: `# Common exceptions demo
try:
    x = int("hello")   # ValueError
except ValueError:
    print("Not a number!")

try:
    print(10 / 0)       # ZeroDivisionError
except ZeroDivisionError:
    print("Can't divide by zero!")

try:
    nums = [1, 2, 3]
    print(nums[10])     # IndexError
except IndexError:
    print("Index not in list!")`
      },
      learn: {
        ur: `<h2 style="font-size:1.15rem;font-weight:800;margin-bottom:14px;">⚠️ Common Exceptions</h2>
<p style="color:var(--text-soft);font-size:.93rem;margin-bottom:14px;">Python mein alag-alag <strong>types of errors</strong> hote hain, har ek ka apna naam — inhe pehchan'na debugging mein madad karta hai.</p>

<div style="background:var(--code-bg);border:1px solid var(--code-border);border-radius:10px;overflow:hidden;margin-bottom:16px;font-family:var(--mono);font-size:.82rem;">
  <div style="display:grid;grid-template-columns:180px 1fr;padding:9px 14px;background:var(--code-bg-2);color:var(--py-blue-glow);font-weight:700;font-size:.68rem;text-transform:uppercase;">Exception · Kab aata</div>
  <div style="display:grid;grid-template-columns:180px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">ValueError</span><span style="color:var(--text-soft);">Galat value (jaise "hello" ko int banana)</span></div>
  <div style="display:grid;grid-template-columns:180px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">TypeError</span><span style="color:var(--text-soft);">Galat data type (string + number)</span></div>
  <div style="display:grid;grid-template-columns:180px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">ZeroDivisionError</span><span style="color:var(--text-soft);">0 se divide</span></div>
  <div style="display:grid;grid-template-columns:180px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">IndexError</span><span style="color:var(--text-soft);">List mein index nahi</span></div>
  <div style="display:grid;grid-template-columns:180px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">KeyError</span><span style="color:var(--text-soft);">Dictionary mein key nahi</span></div>
  <div style="display:grid;grid-template-columns:180px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">NameError</span><span style="color:var(--text-soft);">Variable define nahi kiya</span></div>
  <div style="display:grid;grid-template-columns:180px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">FileNotFoundError</span><span style="color:var(--text-soft);">File exist nahi karti</span></div>
</div>

<div style="background:linear-gradient(135deg,rgba(16,185,129,.1),rgba(16,185,129,.02));border:1px solid rgba(16,185,129,.25);border-left:3px solid var(--py-green);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--py-green-glow);display:block;margin-bottom:5px;font-family:var(--mono);font-size:.7rem;text-transform:uppercase;">⚠️ Common Mistake</strong>
Generic <code>except:</code> use karna — behtar hai specific exception naam (<code>except ValueError:</code>).
</div>`,
        en: `<h2 style="font-size:1.15rem;font-weight:800;margin-bottom:14px;">⚠️ Common Exceptions</h2>
<p style="color:var(--text-soft);font-size:.93rem;margin-bottom:14px;">Python has different <strong>error types</strong>, each with a name — recognizing them helps with debugging.</p>

<div style="background:var(--code-bg);border:1px solid var(--code-border);border-radius:10px;overflow:hidden;margin-bottom:16px;font-family:var(--mono);font-size:.82rem;">
  <div style="display:grid;grid-template-columns:180px 1fr;padding:9px 14px;background:var(--code-bg-2);color:var(--py-blue-glow);font-weight:700;font-size:.68rem;text-transform:uppercase;">Exception · When</div>
  <div style="display:grid;grid-template-columns:180px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">ValueError</span><span style="color:var(--text-soft);">Bad value (like "hello" to int)</span></div>
  <div style="display:grid;grid-template-columns:180px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">TypeError</span><span style="color:var(--text-soft);">Wrong type (string + number)</span></div>
  <div style="display:grid;grid-template-columns:180px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">ZeroDivisionError</span><span style="color:var(--text-soft);">Division by 0</span></div>
  <div style="display:grid;grid-template-columns:180px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">IndexError</span><span style="color:var(--text-soft);">Index not in list</span></div>
  <div style="display:grid;grid-template-columns:180px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">KeyError</span><span style="color:var(--text-soft);">Key not in dict</span></div>
  <div style="display:grid;grid-template-columns:180px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">NameError</span><span style="color:var(--text-soft);">Variable not defined</span></div>
  <div style="display:grid;grid-template-columns:180px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">FileNotFoundError</span><span style="color:var(--text-soft);">File doesn't exist</span></div>
</div>

<div style="background:linear-gradient(135deg,rgba(16,185,129,.1),rgba(16,185,129,.02));border:1px solid rgba(16,185,129,.25);border-left:3px solid var(--py-green);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--py-green-glow);display:block;margin-bottom:5px;font-family:var(--mono);font-size:.7rem;text-transform:uppercase;">⚠️ Common Mistake</strong>
Using generic <code>except:</code> — prefer specific like <code>except ValueError:</code>.
</div>`
      },
      theory: {
        ur: `<h3>Yeh kya hai?</h3>
<p>Python mein kai tarah ke errors hote hain. Har error ka apna <strong>naam</strong> hai — aur woh naam <strong>exact wajah</strong> batata hai ke kya ghalat hua.</p>

<h3>Common exceptions detail</h3>

<h4>1. <code>ValueError</code> — Galat value</h4>
<p>Jab value ka type theek ho, lekin value khud galat ho.</p>
<pre><span class="fn">int</span>(<span class="str">"hello"</span>)   <span class="cm"># ValueError</span>
<span class="fn">int</span>(<span class="str">"3.5"</span>)     <span class="cm"># ValueError (int nahi leta)</span></pre>

<h4>2. <code>TypeError</code> — Galat type</h4>
<p>Jab galat data type use karo.</p>
<pre><span class="str">"hello"</span> + <span class="num">5</span>       <span class="cm"># TypeError</span>
<span class="fn">len</span>(<span class="num">5</span>)              <span class="cm"># TypeError</span></pre>

<h4>3. <code>ZeroDivisionError</code> — 0 se divide</h4>
<pre><span class="num">10</span> / <span class="num">0</span>              <span class="cm"># ZeroDivisionError</span>
<span class="num">10</span> % <span class="num">0</span>              <span class="cm"># same</span></pre>

<h4>4. <code>IndexError</code> — List mein index nahi</h4>
<pre>nums = [<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>]
nums[<span class="num">10</span>]              <span class="cm"># IndexError</span></pre>

<h4>5. <code>KeyError</code> — Dict mein key nahi</h4>
<pre>student = {<span class="str">"name"</span>: <span class="str">"Ali"</span>}
student[<span class="str">"age"</span>]          <span class="cm"># KeyError</span>
student.get(<span class="str">"age"</span>)      <span class="cm"># None (safe)</span></pre>

<h4>6. <code>NameError</code> — Variable nahi mila</h4>
<pre><span class="fn">print</span>(unknown_var)     <span class="cm"># NameError</span></pre>

<h4>7. <code>FileNotFoundError</code> — File nahi mili</h4>
<pre><span class="fn">open</span>(<span class="str">"ghost.txt"</span>)      <span class="cm"># FileNotFoundError</span></pre>

<h4>8. <code>AttributeError</code> — Method/property nahi</h4>
<pre><span class="str">"hello"</span>.push(<span class="str">"x"</span>)      <span class="cm"># AttributeError</span></pre>

<div class="real-life">
<div class="head">🌍 Real Life Example</div>
<p><strong>Scenario:</strong> User input safe handle karna.</p>
<pre style="margin-top:10px;margin-bottom:0;"><span class="kw">def</span> <span class="fn">get_number</span>(prompt):
    <span class="kw">while</span> <span class="kw">True</span>:
        <span class="kw">try</span>:
            <span class="kw">return</span> <span class="fn">int</span>(<span class="fn">input</span>(prompt))
        <span class="kw">except</span> ValueError:
            <span class="fn">print</span>(<span class="str">"Number likho, dobara koshish!"</span>)

age = <span class="fn">get_number</span>(<span class="str">"Age: "</span>)</pre>
</div>

<div class="warn-box">
<div class="head">⚠️ Common Mistakes</div>
<ul>
<li>Specific exception ke bajaye generic <code>except:</code> use karna</li>
<li>Exceptions ko ignore karna (silent fail)</li>
<li>Bahut zyada exceptions catch karna — asal bug chhup jata hai</li>
</ul>
</div>

<div class="pro-tip">
<div class="head">✨ Pro Tip</div>
<p>Har exception ka apna <strong>parent</strong> hota hai (jaise <code>ValueError</code> → <code>Exception</code>). <code>except Exception as e:</code> se sab pakdo, aur <code>print(e)</code> se exact message dekho.</p>
</div>`,
        en: `<h3>What is it?</h3>
<p>Python has many error types. Each has a <strong>name</strong> that tells you <strong>exactly</strong> what went wrong.</p>

<h3>Common exceptions</h3>

<h4>1. <code>ValueError</code></h4>
<pre><span class="fn">int</span>(<span class="str">"hello"</span>)   <span class="cm"># ValueError</span></pre>

<h4>2. <code>TypeError</code></h4>
<pre><span class="str">"hello"</span> + <span class="num">5</span>       <span class="cm"># TypeError</span></pre>

<h4>3. <code>ZeroDivisionError</code></h4>
<pre><span class="num">10</span> / <span class="num">0</span>              <span class="cm"># ZeroDivisionError</span></pre>

<h4>4. <code>IndexError</code></h4>
<pre>nums = [<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>]
nums[<span class="num">10</span>]              <span class="cm"># IndexError</span></pre>

<h4>5. <code>KeyError</code></h4>
<pre>student = {<span class="str">"name"</span>: <span class="str">"Ali"</span>}
student[<span class="str">"age"</span>]          <span class="cm"># KeyError</span>
student.get(<span class="str">"age"</span>)      <span class="cm"># None (safe)</span></pre>

<h4>6. <code>NameError</code></h4>
<pre><span class="fn">print</span>(unknown_var)     <span class="cm"># NameError</span></pre>

<h4>7. <code>FileNotFoundError</code></h4>
<pre><span class="fn">open</span>(<span class="str">"ghost.txt"</span>)      <span class="cm"># FileNotFoundError</span></pre>

<h4>8. <code>AttributeError</code></h4>
<pre><span class="str">"hello"</span>.push(<span class="str">"x"</span>)      <span class="cm"># AttributeError</span></pre>

<div class="real-life">
<div class="head">🌍 Real Life Example</div>
<p><strong>Scenario:</strong> Safe user input.</p>
<pre style="margin-top:10px;margin-bottom:0;"><span class="kw">def</span> <span class="fn">get_number</span>(prompt):
    <span class="kw">while</span> <span class="kw">True</span>:
        <span class="kw">try</span>:
            <span class="kw">return</span> <span class="fn">int</span>(<span class="fn">input</span>(prompt))
        <span class="kw">except</span> ValueError:
            <span class="fn">print</span>(<span class="str">"Enter a number, try again!"</span>)

age = <span class="fn">get_number</span>(<span class="str">"Age: "</span>)</pre>
</div>

<div class="warn-box">
<div class="head">⚠️ Common Mistakes</div>
<ul>
<li>Generic <code>except:</code> instead of specific</li>
<li>Silent failures (ignoring errors)</li>
<li>Catching too much — hiding real bugs</li>
</ul>
</div>

<div class="pro-tip">
<div class="head">✨ Pro Tip</div>
<p>Every exception has a <strong>parent</strong>. Use <code>except Exception as e:</code> to catch all, <code>print(e)</code> to see the message.</p>
</div>`
      },
      quiz: [
        { q: { ur: 'int("hello") se kaunsa error?', en: 'int("hello") → which error?' }, options: ["TypeError", "ValueError", "IndexError", "KeyError"], answer: 1 },
        { q: { ur: "10 / 0 se kaunsa error?", en: "10 / 0 → which error?" }, options: ["ValueError", "ZeroDivisionError", "TypeError", "KeyError"], answer: 1 },
        { q: { ur: "List mein galat index se?", en: "Bad index in list → ?" }, options: ["ValueError", "KeyError", "IndexError", "TypeError"], answer: 2 },
        { q: { ur: "Dict mein galat key se?", en: "Bad key in dict → ?" }, options: ["IndexError", "KeyError", "ValueError", "TypeError"], answer: 1 },
        { q: { ur: "Specific exception behtar kyun?", en: "Why specific exception better?" }, options: ["Faster", "Knows exactly what failed", "No difference", "Less code"], answer: 1 }
      ]
    },

    /* ═══════════════════════════════════════════════════════
       TOPIC 3: Raising Custom Exceptions
       ═══════════════════════════════════════════════════════ */
    {
      id: "raise-exceptions",
      title: { ur: "Raising Custom Exceptions", en: "Raising Custom Exceptions" },
      icon: "🚨",
      code: {
        ur: `# Apna error banana
def check_age(age):
    if age < 0:
        raise ValueError("Age negative nahi ho sakti!")
    print("Age theek hai:", age)

try:
    check_age(-5)
except ValueError as e:
    print("Error:", e)`,
        en: `# Creating your own error
def check_age(age):
    if age < 0:
        raise ValueError("Age can't be negative!")
    print("Age is fine:", age)

try:
    check_age(-5)
except ValueError as e:
    print("Error:", e)`
      },
      learn: {
        ur: `<h2 style="font-size:1.15rem;font-weight:800;margin-bottom:14px;">🚨 Raising Custom Exceptions</h2>
<p style="color:var(--text-soft);font-size:.93rem;margin-bottom:14px;">Kabhi kabhi hum khud <strong>error create</strong> karna chahte hain, jab koi condition sahi na ho — iske liye <code>raise</code> use karte hain.</p>

<div style="background:var(--code-bg);border:1px solid var(--code-border);border-radius:10px;overflow:hidden;margin-bottom:16px;font-family:var(--mono);font-size:.82rem;">
  <div style="display:grid;grid-template-columns:120px 1fr;padding:9px 14px;background:var(--code-bg-2);color:var(--py-blue-glow);font-weight:700;font-size:.68rem;text-transform:uppercase;">Keyword · Kaam</div>
  <div style="display:grid;grid-template-columns:120px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">raise</span><span style="color:var(--text-soft);">Error create karo</span></div>
  <div style="display:grid;grid-template-columns:120px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">as e</span><span style="color:var(--text-soft);">Error message store</span></div>
</div>

<div style="background:linear-gradient(135deg,rgba(75,139,190,.1),rgba(75,139,190,.03));border:1px solid rgba(75,139,190,.25);border-left:3px solid var(--py-blue);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--text);display:block;margin-bottom:3px;">💡 Kyun zaroori</strong>
Jab apna function bana rahe ho, aur chahte ho ke koi <strong>galat data</strong> use na kare — <code>raise</code> se aap khud decide karte ho error kab aaye.
</div>

<div style="background:linear-gradient(135deg,rgba(16,185,129,.1),rgba(16,185,129,.02));border:1px solid rgba(16,185,129,.25);border-left:3px solid var(--py-green);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--py-green-glow);display:block;margin-bottom:5px;font-family:var(--mono);font-size:.7rem;text-transform:uppercase;">⚠️ Common Mistake</strong>
Sirf <code>print("Error")</code> likhna <code>raise</code> ke bajaye — program aage chal jata hai galat data ke saath.
</div>`,
        en: `<h2 style="font-size:1.15rem;font-weight:800;margin-bottom:14px;">🚨 Raising Custom Exceptions</h2>
<p style="color:var(--text-soft);font-size:.93rem;margin-bottom:14px;">Sometimes you want to <strong>create an error yourself</strong> when a condition is invalid — that's <code>raise</code>.</p>

<div style="background:var(--code-bg);border:1px solid var(--code-border);border-radius:10px;overflow:hidden;margin-bottom:16px;font-family:var(--mono);font-size:.82rem;">
  <div style="display:grid;grid-template-columns:120px 1fr;padding:9px 14px;background:var(--code-bg-2);color:var(--py-blue-glow);font-weight:700;font-size:.68rem;text-transform:uppercase;">Keyword · Does</div>
  <div style="display:grid;grid-template-columns:120px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">raise</span><span style="color:var(--text-soft);">Create error</span></div>
  <div style="display:grid;grid-template-columns:120px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">as e</span><span style="color:var(--text-soft);">Store error message</span></div>
</div>

<div style="background:linear-gradient(135deg,rgba(75,139,190,.1),rgba(75,139,190,.03));border:1px solid rgba(75,139,190,.25);border-left:3px solid var(--py-blue);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--text);display:block;margin-bottom:3px;">💡 Why</strong>
When building functions, you may want to <strong>reject bad data</strong> — <code>raise</code> lets you control when the error occurs.
</div>

<div style="background:linear-gradient(135deg,rgba(16,185,129,.1),rgba(16,185,129,.02));border:1px solid rgba(16,185,129,.25);border-left:3px solid var(--py-green);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--py-green-glow);display:block;margin-bottom:5px;font-family:var(--mono);font-size:.7rem;text-transform:uppercase;">⚠️ Common Mistake</strong>
Just <code>print("Error")</code> instead of <code>raise</code> — program continues with bad data.
</div>`
      },
      theory: {
        ur: `<h3>Yeh kya hai?</h3>
<p><code>raise</code> keyword Python mein <strong>error create</strong> karne ke liye. Python apne aap errors create karta hai (jaise 10/0 pe ZeroDivisionError), lekin tum bhi apne <strong>custom errors</strong> bana sakte ho.</p>

<h3>Kaise kaam karta hai?</h3>
<pre><span class="kw">def</span> <span class="fn">check_age</span>(age):
    <span class="kw">if</span> age < <span class="num">0</span>:
        <span class="kw">raise</span> ValueError(<span class="str">"Age negative nahi ho sakti!"</span>)
    <span class="fn">print</span>(<span class="str">"Age theek hai:"</span>, age)

<span class="kw">try</span>:
    <span class="fn">check_age</span>(-<span class="num">5</span>)
<span class="kw">except</span> ValueError <span class="kw">as</span> e:
    <span class="fn">print</span>(<span class="str">"Error:"</span>, e)</pre>

<h3>Kaunsa exception raise karo?</h3>
<table class="theory-table">
<div class="row head"><div>Situation</div><div>Exception</div></div>
<div class="row"><div class="label">Galat value</div><div class="value"><code>ValueError</code></div></div>
<div class="row"><div class="label">Galat type</div><div class="value"><code>TypeError</code></div></div>
<div class="row"><div class="label">Access issue</div><div class="value"><code>PermissionError</code></div></div>
<div class="row"><div class="label">Custom rule</div><div class="value"><code>Exception("message")</code></div></div>
</table>

<h3>Custom error message</h3>
<pre><span class="kw">def</span> <span class="fn">withdraw</span>(amount, balance):
    <span class="kw">if</span> amount <= <span class="num">0</span>:
        <span class="kw">raise</span> ValueError(<span class="str">"Amount 0 se bara hona chahiye"</span>)
    <span class="kw">if</span> amount > balance:
        <span class="kw">raise</span> ValueError(<span class="str">f"Balance kam hai (available: {balance})"</span>)
    <span class="kw">return</span> balance - amount

<span class="kw">try</span>:
    <span class="fn">withdraw</span>(<span class="num">10000</span>, <span class="num">5000</span>)
<span class="kw">except</span> ValueError <span class="kw">as</span> e:
    <span class="fn">print</span>(e)   <span class="cm"># Balance kam hai (available: 5000)</span></pre>

<h3>Custom exception class (advanced)</h3>
<pre><span class="kw">class</span> <span class="fn">AgeError</span>(Exception):
    <span class="kw">pass</span>

<span class="kw">def</span> <span class="fn">check</span>(age):
    <span class="kw">if</span> age < <span class="num">0</span>:
        <span class="kw">raise</span> AgeError(<span class="str">"Age negative!"</span>)

<span class="kw">try</span>:
    <span class="fn">check</span>(-<span class="num">5</span>)
<span class="kw">except</span> AgeError <span class="kw">as</span> e:
    <span class="fn">print</span>(e)</pre>

<div class="real-life">
<div class="head">🌍 Real Life Example</div>
<p><strong>Scenario:</strong> Login validation.</p>
<pre style="margin-top:10px;margin-bottom:0;"><span class="kw">def</span> <span class="fn">login</span>(user, password):
    <span class="kw">if</span> <span class="fn">len</span>(password) < <span class="num">8</span>:
        <span class="kw">raise</span> ValueError(<span class="str">"Password 8 characters se chhota hai"</span>)
    <span class="kw">if</span> user != <span class="str">"admin"</span>:
        <span class="kw">raise</span> ValueError(<span class="str">"User galat hai"</span>)
    <span class="kw">return</span> <span class="str">"Welcome!"</span>

<span class="kw">try</span>:
    <span class="fn">print</span>(<span class="fn">login</span>(<span class="str">"admin"</span>, <span class="str">"short"</span>))
<span class="kw">except</span> ValueError <span class="kw">as</span> e:
    <span class="fn">print</span>(<span class="str">"Error:"</span>, e)</pre>
</div>

<div class="warn-box">
<div class="head">⚠️ Common Mistakes</div>
<ul>
<li><code>raise</code> ke bajaye <code>print</code> — program aage chalta rehta hai</li>
<li>Error message vague — debugging mushkil</li>
<li>Har chhoti cheez pe raise — over-engineering</li>
</ul>
</div>

<div class="pro-tip">
<div class="head">✨ Pro Tip</div>
<p>Error message <strong>helpful</strong> rakho — kya galat hua, kaise fix karo. <code>"Invalid input"</code> se behtar hai <code>"Age must be a positive number, got -5"</code>.</p>
</div>`,
        en: `<h3>What is it?</h3>
<p><code>raise</code> creates an error in Python. Python auto-creates errors (like 10/0 → ZeroDivisionError), but you can also make your own.</p>

<h3>How does it work?</h3>
<pre><span class="kw">def</span> <span class="fn">check_age</span>(age):
    <span class="kw">if</span> age < <span class="num">0</span>:
        <span class="kw">raise</span> ValueError(<span class="str">"Age can't be negative!"</span>)
    <span class="fn">print</span>(<span class="str">"Age OK:"</span>, age)

<span class="kw">try</span>:
    <span class="fn">check_age</span>(-<span class="num">5</span>)
<span class="kw">except</span> ValueError <span class="kw">as</span> e:
    <span class="fn">print</span>(<span class="str">"Error:"</span>, e)</pre>

<h3>Which exception to raise?</h3>
<table class="theory-table">
<div class="row head"><div>Situation</div><div>Exception</div></div>
<div class="row"><div class="label">Bad value</div><div class="value"><code>ValueError</code></div></div>
<div class="row"><div class="label">Bad type</div><div class="value"><code>TypeError</code></div></div>
<div class="row"><div class="label">Access issue</div><div class="value"><code>PermissionError</code></div></div>
<div class="row"><div class="label">Custom rule</div><div class="value"><code>Exception("message")</code></div></div>
</table>

<h3>Custom error message</h3>
<pre><span class="kw">def</span> <span class="fn">withdraw</span>(amount, balance):
    <span class="kw">if</span> amount <= <span class="num">0</span>:
        <span class="kw">raise</span> ValueError(<span class="str">"Amount must be positive"</span>)
    <span class="kw">if</span> amount > balance:
        <span class="kw">raise</span> ValueError(<span class="str">f"Insufficient balance (available: {balance})"</span>)
    <span class="kw">return</span> balance - amount</pre>

<h3>Custom exception class</h3>
<pre><span class="kw">class</span> <span class="fn">AgeError</span>(Exception):
    <span class="kw">pass</span>

<span class="kw">def</span> <span class="fn">check</span>(age):
    <span class="kw">if</span> age < <span class="num">0</span>:
        <span class="kw">raise</span> AgeError(<span class="str">"Age negative!"</span>)</pre>

<div class="real-life">
<div class="head">🌍 Real Life Example</div>
<p><strong>Scenario:</strong> Login validation.</p>
<pre style="margin-top:10px;margin-bottom:0;"><span class="kw">def</span> <span class="fn">login</span>(user, password):
    <span class="kw">if</span> <span class="fn">len</span>(password) < <span class="num">8</span>:
        <span class="kw">raise</span> ValueError(<span class="str">"Password shorter than 8"</span>)
    <span class="kw">if</span> user != <span class="str">"admin"</span>:
        <span class="kw">raise</span> ValueError(<span class="str">"Wrong user"</span>)
    <span class="kw">return</span> <span class="str">"Welcome!"</span></pre>
</div>

<div class="warn-box">
<div class="head">⚠️ Common Mistakes</div>
<ul>
<li><code>print</code> instead of <code>raise</code> — program keeps running</li>
<li>Vague error messages</li>
<li>Over-raising for trivial cases</li>
</ul>
</div>

<div class="pro-tip">
<div class="head">✨ Pro Tip</div>
<p>Make error messages <strong>helpful</strong>: <code>"Age must be positive, got -5"</code> better than <code>"Invalid"</code>.</p>
</div>`
      },
      quiz: [
        { q: { ur: "raise ka kaam?", en: "What does raise do?" }, options: ["Hide error", "Create error yourself", "Speed up", "Stop loop"], answer: 1 },
        { q: { ur: 'raise ValueError("msg") — kya hota?', en: 'raise ValueError("msg") — effect?' }, options: ["Nothing", "Creates ValueError with msg", "Hangs", "Warning"], answer: 1 },
        { q: { ur: "except ValueError as e: — e kya hai?", en: "except ValueError as e: — what is e?" }, options: ["Function name", "Error message store", "Exception type", "Nothing"], answer: 1 },
        { q: { ur: "raise kab use karo?", en: "When to use raise?" }, options: ["Function perfect", "When a condition is invalid", "Always in loops", "Never"], answer: 1 },
        { q: { ur: "raise ke bajaye sirf print ka masla?", en: "Problem with print instead of raise?" }, options: ["No issue", "Program continues with bad data", "Crashes", "Slower"], answer: 1 }
      ]
    }

  ]
};