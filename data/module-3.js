// data/module-3.js
// Module 3: Control Flow — 4 topics

window.MODULES = window.MODULES || {};

window.MODULES["module-3"] = {
  id: "module-3",
  number: 3,
  slug: "control-flow",
  title: { ur: "Control Flow", en: "Control Flow" },
  description: {
    ur: "if/else, for loops, while loops, break/continue/pass",
    en: "if/else, for loops, while loops, break/continue/pass"
  },
  duration: "10 minutes",
  level: "Beginner",
  locked: true,

  topics: [

    /* ═══════════════════════════════════════════════════════
       TOPIC 1: if / elif / else
       ═══════════════════════════════════════════════════════ */
    {
      id: "if-else",
      title: { ur: "if / elif / else", en: "if / elif / else" },
      icon: "🔀",
      code: {
        ur: `# if / elif / else
age = 18

if age >= 18:
    print("Aap vote de sakte hain")
elif age >= 13:
    print("Aap teenager hain")
else:
    print("Aap bachche hain")`,
        en: `# if / elif / else
age = 18

if age >= 18:
    print("You can vote")
elif age >= 13:
    print("You are a teenager")
else:
    print("You are a child")`
      },
      learn: {
        ur: `<h2 style="font-size:1.15rem;font-weight:800;margin-bottom:14px;">🔀 if / elif / else</h2>
<p style="color:var(--text-soft);font-size:.93rem;margin-bottom:14px;"><code>if</code> statement code ko <strong>condition</strong> ke hisaab se chalata hai — agar condition True ho to wo hissa chalega, warna nahi.</p>

<div style="background:var(--code-bg);border:1px solid var(--code-border);border-radius:10px;overflow:hidden;margin-bottom:16px;font-family:var(--mono);font-size:.82rem;">
  <div style="display:grid;grid-template-columns:100px 1fr;padding:9px 14px;background:var(--code-bg-2);color:var(--py-blue-glow);font-weight:700;font-size:.68rem;text-transform:uppercase;">Keyword · Kaam</div>
  <div style="display:grid;grid-template-columns:100px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">if</span><span style="color:var(--text-soft);">Pehli condition check</span></div>
  <div style="display:grid;grid-template-columns:100px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">elif</span><span style="color:var(--text-soft);">Agar pehli False ho</span></div>
  <div style="display:grid;grid-template-columns:100px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">else</span><span style="color:var(--text-soft);">Agar koi bhi True na ho</span></div>
</div>

<div style="background:linear-gradient(135deg,rgba(75,139,190,.1),rgba(75,139,190,.03));border:1px solid rgba(75,139,190,.25);border-left:3px solid var(--py-blue);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--text);display:block;margin-bottom:3px;">💡 Zaroori baat</strong>
Python mein <strong>indentation</strong> (spacing) bohat zaroori hai — <code>if</code> ke andar wali lines <strong>4 spaces</strong> se shuru honi chahiye, warna error aayega.
</div>

<div style="background:linear-gradient(135deg,rgba(16,185,129,.1),rgba(16,185,129,.02));border:1px solid rgba(16,185,129,.25);border-left:3px solid var(--py-green);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--py-green-glow);display:block;margin-bottom:5px;font-family:var(--mono);font-size:.7rem;text-transform:uppercase;">⚠️ Common Mistake</strong>
Colon (<code>:</code>) lagana bhool jana — <code>if age >= 18</code> galat hai, <code>if age >= 18:</code> sahi hai.
</div>`,
        en: `<h2 style="font-size:1.15rem;font-weight:800;margin-bottom:14px;">🔀 if / elif / else</h2>
<p style="color:var(--text-soft);font-size:.93rem;margin-bottom:14px;">The <code>if</code> statement runs code based on a <strong>condition</strong> — if True, that block runs; otherwise not.</p>

<div style="background:var(--code-bg);border:1px solid var(--code-border);border-radius:10px;overflow:hidden;margin-bottom:16px;font-family:var(--mono);font-size:.82rem;">
  <div style="display:grid;grid-template-columns:100px 1fr;padding:9px 14px;background:var(--code-bg-2);color:var(--py-blue-glow);font-weight:700;font-size:.68rem;text-transform:uppercase;">Keyword · Does</div>
  <div style="display:grid;grid-template-columns:100px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">if</span><span style="color:var(--text-soft);">First condition</span></div>
  <div style="display:grid;grid-template-columns:100px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">elif</span><span style="color:var(--text-soft);">If first was False</span></div>
  <div style="display:grid;grid-template-columns:100px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">else</span><span style="color:var(--text-soft);">If none were True</span></div>
</div>

<div style="background:linear-gradient(135deg,rgba(75,139,190,.1),rgba(75,139,190,.03));border:1px solid rgba(75,139,190,.25);border-left:3px solid var(--py-blue);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--text);display:block;margin-bottom:3px;">💡 Important</strong>
<strong>Indentation</strong> is critical — lines inside <code>if</code> must start with <strong>4 spaces</strong>.
</div>

<div style="background:linear-gradient(135deg,rgba(16,185,129,.1),rgba(16,185,129,.02));border:1px solid rgba(16,185,129,.25);border-left:3px solid var(--py-green);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--py-green-glow);display:block;margin-bottom:5px;font-family:var(--mono);font-size:.7rem;text-transform:uppercase;">⚠️ Common Mistake</strong>
Forgetting the colon (<code>:</code>) — <code>if age >= 18</code> is wrong, <code>if age >= 18:</code> is right.
</div>`
      },
      theory: {
        ur: `<h3>Yeh kya hai?</h3>
<p><code>if</code> statement Python ka <strong>decision maker</strong> hai. Yeh check karta hai ke koi condition True hai ya False, aur uske hisaab se code chalata hai.</p>

<h3>Kaise kaam karta hai?</h3>
<div class="steps">
<ol>
<li><strong>Step 1:</strong> Python <code>if</code> dekhta hai, condition check karta hai</li>
<li><strong>Step 2:</strong> Agar <strong>True</strong> → andar wala code chalta hai</li>
<li><strong>Step 3:</strong> Agar <strong>False</strong> → <code>elif</code> pe jata hai (agar ho)</li>
<li><strong>Step 4:</strong> Sab False hain → <code>else</code> chalta hai</li>
<li><strong>Step 5:</strong> Ek block chala, baaki skip</li>
</ol>
</div>

<h3>Live example</h3>
<pre>marks = <span class="num">75</span>

<span class="kw">if</span> marks >= <span class="num">90</span>:
    <span class="fn">print</span>(<span class="str">"Grade A"</span>)
<span class="kw">elif</span> marks >= <span class="num">80</span>:
    <span class="fn">print</span>(<span class="str">"Grade B"</span>)
<span class="kw">elif</span> marks >= <span class="num">70</span>:
    <span class="fn">print</span>(<span class="str">"Grade C"</span>)
<span class="kw">else</span>:
    <span class="fn">print</span>(<span class="str">"Fail"</span>)

<span class="cm"># Output: Grade C (75 >= 70)</span></pre>

<h3>Nested if (if ke andar if)</h3>
<pre>age = <span class="num">20</span>
has_id = <span class="kw">True</span>

<span class="kw">if</span> age >= <span class="num">18</span>:
    <span class="kw">if</span> has_id:
        <span class="fn">print</span>(<span class="str">"Entry allowed"</span>)
    <span class="kw">else</span>:
        <span class="fn">print</span>(<span class="str">"ID chahiye"</span>)
<span class="kw">else</span>:
    <span class="fn">print</span>(<span class="str">"18 se kam hai"</span>)</pre>

<div class="real-life">
<div class="head">🌍 Real Life Example</div>
<p><strong>Scenario:</strong> Restaurant mein bill pe discount.</p>
<pre style="margin-top:10px;margin-bottom:0;">bill = <span class="num">2500</span>

<span class="kw">if</span> bill >= <span class="num">5000</span>:
    discount = bill * <span class="num">0.20</span>      <span class="cm"># 20%</span>
<span class="kw">elif</span> bill >= <span class="num">2000</span>:
    discount = bill * <span class="num">0.10</span>      <span class="cm"># 10%</span>
<span class="kw">else</span>:
    discount = <span class="num">0</span>

final = bill - discount
<span class="fn">print</span>(<span class="str">"Final bill:"</span>, final)</pre>
</div>

<div class="warn-box">
<div class="head">⚠️ Common Mistakes</div>
<ul>
<li>Colon (<code>:</code>) bhool jana</li>
<li>Indentation galat (4 spaces zaroori)</li>
<li><code>=</code> aur <code>==</code> confuse karna</li>
<li>Condition ke baad <code>elif</code> ki jagah <code>else if</code> likhna (Python mein <code>elif</code>)</li>
</ul>
</div>

<div class="pro-tip">
<div class="head">✨ Pro Tip</div>
<p>Conditions chhoti rakho. Agar condition bohat lambi ho rahi hai, usay <strong>break</strong> karo — <code>and</code>/<code>or</code> se jodo, ya alag function banao.</p>
</div>`,
        en: `<h3>What is it?</h3>
<p>The <code>if</code> statement is Python's <strong>decision maker</strong>. It checks if a condition is True or False, and runs code accordingly.</p>

<h3>How does it work?</h3>
<div class="steps">
<ol>
<li><strong>Step 1:</strong> Python sees <code>if</code>, checks condition</li>
<li><strong>Step 2:</strong> If <strong>True</strong> → block runs</li>
<li><strong>Step 3:</strong> If <strong>False</strong> → goes to <code>elif</code> (if any)</li>
<li><strong>Step 4:</strong> All False → <code>else</code> runs</li>
<li><strong>Step 5:</strong> One block runs, rest skip</li>
</ol>
</div>

<h3>Live example</h3>
<pre>marks = <span class="num">75</span>

<span class="kw">if</span> marks >= <span class="num">90</span>:
    <span class="fn">print</span>(<span class="str">"Grade A"</span>)
<span class="kw">elif</span> marks >= <span class="num">80</span>:
    <span class="fn">print</span>(<span class="str">"Grade B"</span>)
<span class="kw">elif</span> marks >= <span class="num">70</span>:
    <span class="fn">print</span>(<span class="str">"Grade C"</span>)
<span class="kw">else</span>:
    <span class="fn">print</span>(<span class="str">"Fail"</span>)

<span class="cm"># Output: Grade C</span></pre>

<h3>Nested if (if inside if)</h3>
<pre>age = <span class="num">20</span>
has_id = <span class="kw">True</span>

<span class="kw">if</span> age >= <span class="num">18</span>:
    <span class="kw">if</span> has_id:
        <span class="fn">print</span>(<span class="str">"Entry allowed"</span>)
    <span class="kw">else</span>:
        <span class="fn">print</span>(<span class="str">"Need ID"</span>)
<span class="kw">else</span>:
    <span class="fn">print</span>(<span class="str">"Under 18"</span>)</pre>

<div class="real-life">
<div class="head">🌍 Real Life Example</div>
<p><strong>Scenario:</strong> Restaurant bill discount.</p>
<pre style="margin-top:10px;margin-bottom:0;">bill = <span class="num">2500</span>

<span class="kw">if</span> bill >= <span class="num">5000</span>:
    discount = bill * <span class="num">0.20</span>
<span class="kw">elif</span> bill >= <span class="num">2000</span>:
    discount = bill * <span class="num">0.10</span>
<span class="kw">else</span>:
    discount = <span class="num">0</span>

final = bill - discount
<span class="fn">print</span>(<span class="str">"Final bill:"</span>, final)</pre>
</div>

<div class="warn-box">
<div class="head">⚠️ Common Mistakes</div>
<ul>
<li>Forgetting the colon (<code>:</code>)</li>
<li>Wrong indentation (4 spaces)</li>
<li>Confusing <code>=</code> and <code>==</code></li>
<li>Writing <code>else if</code> instead of <code>elif</code></li>
</ul>
</div>

<div class="pro-tip">
<div class="head">✨ Pro Tip</div>
<p>Keep conditions short. If it grows, <strong>break</strong> it into smaller parts with <code>and</code>/<code>or</code>.</p>
</div>`
      },
      quiz: [
        { q: { ur: "if ke baad kya zaroori hai?", en: "What's required after if?" }, options: ["Semicolon", "Colon (:)", "Comma", "Nothing"], answer: 1 },
        { q: { ur: "elif ka poora naam?", en: "elif stands for?" }, options: ["else if", "end if", "exit if", "elseif"], answer: 0 },
        { q: { ur: "Koi condition True na ho to?", en: "If no condition is True?" }, options: ["if", "elif", "else", "None"], answer: 2 },
        { q: { ur: "Python mein blocks kaise define?", en: "How are blocks defined in Python?" }, options: ["{}", "Indentation", "[]", "Semicolons"], answer: 1 },
        { q: { ur: "if age >= 18 (bina colon) se?", en: "if age >= 18 (no colon) will?" }, options: ["Work", "Error", "Warning", "Nothing"], answer: 1 }
      ]
    },

    /* ═══════════════════════════════════════════════════════
       TOPIC 2: for Loops
       ═══════════════════════════════════════════════════════ */
    {
      id: "for-loop",
      title: { ur: "for Loops", en: "for Loops" },
      icon: "🔁",
      code: {
        ur: `# for loop
for i in range(5):
    print(i)   # 0, 1, 2, 3, 4

fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(fruit)`,
        en: `# for loop
for i in range(5):
    print(i)   # 0, 1, 2, 3, 4

fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(fruit)`
      },
      learn: {
        ur: `<h2 style="font-size:1.15rem;font-weight:800;margin-bottom:14px;">🔁 for Loops</h2>
<p style="color:var(--text-soft);font-size:.93rem;margin-bottom:14px;"><code>for</code> loop kisi cheez ko <strong>baar baar</strong> chalane ke liye — jitni baar list/range mein items hon.</p>

<div style="background:var(--code-bg);border:1px solid var(--code-border);border-radius:10px;overflow:hidden;margin-bottom:16px;font-family:var(--mono);font-size:.82rem;">
  <div style="display:grid;grid-template-columns:130px 1fr;padding:9px 14px;background:var(--code-bg-2);color:var(--py-blue-glow);font-weight:700;font-size:.68rem;text-transform:uppercase;">range() · Result</div>
  <div style="display:grid;grid-template-columns:130px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">range(5)</span><span style="color:var(--text-soft);">0, 1, 2, 3, 4</span></div>
  <div style="display:grid;grid-template-columns:130px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">range(1, 6)</span><span style="color:var(--text-soft);">1, 2, 3, 4, 5</span></div>
  <div style="display:grid;grid-template-columns:130px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">range(0, 10, 2)</span><span style="color:var(--text-soft);">0, 2, 4, 6, 8</span></div>
</div>

<div style="background:linear-gradient(135deg,rgba(16,185,129,.1),rgba(16,185,129,.02));border:1px solid rgba(16,185,129,.25);border-left:3px solid var(--py-green);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--py-green-glow);display:block;margin-bottom:5px;font-family:var(--mono);font-size:.7rem;text-transform:uppercase;">⚠️ Common Mistake</strong>
<code>range(5)</code> sochna ke 1 se 5 hai — asal mein <strong>0 se 4</strong> hai.
</div>`,
        en: `<h2 style="font-size:1.15rem;font-weight:800;margin-bottom:14px;">🔁 for Loops</h2>
<p style="color:var(--text-soft);font-size:.93rem;margin-bottom:14px;">Use <code>for</code> loop to <strong>repeat</strong> something — as many times as items in a list/range.</p>

<div style="background:var(--code-bg);border:1px solid var(--code-border);border-radius:10px;overflow:hidden;margin-bottom:16px;font-family:var(--mono);font-size:.82rem;">
  <div style="display:grid;grid-template-columns:130px 1fr;padding:9px 14px;background:var(--code-bg-2);color:var(--py-blue-glow);font-weight:700;font-size:.68rem;text-transform:uppercase;">range() · Result</div>
  <div style="display:grid;grid-template-columns:130px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">range(5)</span><span style="color:var(--text-soft);">0, 1, 2, 3, 4</span></div>
  <div style="display:grid;grid-template-columns:130px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">range(1, 6)</span><span style="color:var(--text-soft);">1, 2, 3, 4, 5</span></div>
  <div style="display:grid;grid-template-columns:130px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">range(0, 10, 2)</span><span style="color:var(--text-soft);">0, 2, 4, 6, 8</span></div>
</div>

<div style="background:linear-gradient(135deg,rgba(16,185,129,.1),rgba(16,185,129,.02));border:1px solid rgba(16,185,129,.25);border-left:3px solid var(--py-green);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--py-green-glow);display:block;margin-bottom:5px;font-family:var(--mono);font-size:.7rem;text-transform:uppercase;">⚠️ Common Mistake</strong>
Thinking <code>range(5)</code> is 1 to 5 — it's actually <strong>0 to 4</strong>.
</div>`
      },
      theory: {
        ur: `<h3>Yeh kya hai?</h3>
<p><code>for</code> loop ek <strong>repetition tool</strong> hai. Jab tumhein koi kaam baar baar karna ho, <code>for</code> loop use karo.</p>

<h3>Kaise kaam karta hai?</h3>
<div class="steps">
<ol>
<li><strong>Step 1:</strong> Python iterable (list, range, string) uthata hai</li>
<li><strong>Step 2:</strong> Pehla item nikalta hai, variable mein rakhta hai</li>
<li><strong>Step 3:</strong> Andar wala code chalata hai</li>
<li><strong>Step 4:</strong> Agla item uthata hai, repeat karta hai</li>
<li><strong>Step 5:</strong> Saare items khatam → loop ruk jata hai</li>
</ol>
</div>

<h3>range() — 3 tareeqe</h3>
<pre><span class="cm"># 1. range(stop) — 0 se stop-1 tak</span>
<span class="kw">for</span> i <span class="kw">in</span> <span class="fn">range</span>(<span class="num">5</span>):    <span class="cm"># 0, 1, 2, 3, 4</span>
    <span class="fn">print</span>(i)

<span class="cm"># 2. range(start, stop) — start se stop-1 tak</span>
<span class="kw">for</span> i <span class="kw">in</span> <span class="fn">range</span>(<span class="num">1</span>, <span class="num">6</span>):  <span class="cm"># 1, 2, 3, 4, 5</span>
    <span class="fn">print</span>(i)

<span class="cm"># 3. range(start, stop, step) — step se badhta hua</span>
<span class="kw">for</span> i <span class="kw">in</span> <span class="fn">range</span>(<span class="num">0</span>, <span class="num">10</span>, <span class="num">2</span>):  <span class="cm"># 0, 2, 4, 6, 8</span>
    <span class="fn">print</span>(i)</pre>

<h3>List pe loop</h3>
<pre>fruits = [<span class="str">"apple"</span>, <span class="str">"banana"</span>, <span class="str">"cherry"</span>]
<span class="kw">for</span> fruit <span class="kw">in</span> fruits:
    <span class="fn">print</span>(fruit)
<span class="cm"># apple, banana, cherry</span></pre>

<div class="real-life">
<div class="head">🌍 Real Life Example</div>
<p><strong>Scenario:</strong> Class ke saare students ke marks print karna.</p>
<pre style="margin-top:10px;margin-bottom:0;">marks = [<span class="num">85</span>, <span class="num">92</span>, <span class="num">78</span>, <span class="num">90</span>, <span class="num">65</span>]

<span class="kw">for</span> mark <span class="kw">in</span> marks:
    <span class="kw">if</span> mark >= <span class="num">80</span>:
        <span class="fn">print</span>(mark, <span class="str">"- A grade"</span>)
    <span class="kw">else</span>:
        <span class="fn">print</span>(mark, <span class="str">"- B grade"</span>)</pre>
</div>

<div class="pro-tip">
<div class="head">✨ Pro Tip</div>
<p>Agar index bhi chahiye, <code>enumerate()</code> use karo:</p>
<pre style="margin-top:8px;margin-bottom:0;"><span class="kw">for</span> i, fruit <span class="kw">in</span> <span class="fn">enumerate</span>(fruits, <span class="num">1</span>):
    <span class="fn">print</span>(i, fruit)   <span class="cm"># 1 apple, 2 banana, ...</span></pre>
</div>`,
        en: `<h3>What is it?</h3>
<p><code>for</code> is a <strong>repetition tool</strong>. When you need to do something repeatedly, use <code>for</code>.</p>

<h3>How does it work?</h3>
<div class="steps">
<ol>
<li><strong>Step 1:</strong> Python takes the iterable (list, range, string)</li>
<li><strong>Step 2:</strong> Picks first item, stores in variable</li>
<li><strong>Step 3:</strong> Runs inner code</li>
<li><strong>Step 4:</strong> Picks next item, repeats</li>
<li><strong>Step 5:</strong> No items left → loop ends</li>
</ol>
</div>

<h3>range() — 3 ways</h3>
<pre><span class="cm"># 1. range(stop) — 0 to stop-1</span>
<span class="kw">for</span> i <span class="kw">in</span> <span class="fn">range</span>(<span class="num">5</span>):
    <span class="fn">print</span>(i)   <span class="cm"># 0-4</span>

<span class="cm"># 2. range(start, stop)</span>
<span class="kw">for</span> i <span class="kw">in</span> <span class="fn">range</span>(<span class="num">1</span>, <span class="num">6</span>):
    <span class="fn">print</span>(i)   <span class="cm"># 1-5</span>

<span class="cm"># 3. range(start, stop, step)</span>
<span class="kw">for</span> i <span class="kw">in</span> <span class="fn">range</span>(<span class="num">0</span>, <span class="num">10</span>, <span class="num">2</span>):
    <span class="fn">print</span>(i)   <span class="cm"># 0, 2, 4, 6, 8</span></pre>

<h3>Looping over a list</h3>
<pre>fruits = [<span class="str">"apple"</span>, <span class="str">"banana"</span>, <span class="str">"cherry"</span>]
<span class="kw">for</span> fruit <span class="kw">in</span> fruits:
    <span class="fn">print</span>(fruit)</pre>

<div class="real-life">
<div class="head">🌍 Real Life Example</div>
<p><strong>Scenario:</strong> Print all students' marks.</p>
<pre style="margin-top:10px;margin-bottom:0;">marks = [<span class="num">85</span>, <span class="num">92</span>, <span class="num">78</span>, <span class="num">90</span>, <span class="num">65</span>]

<span class="kw">for</span> mark <span class="kw">in</span> marks:
    <span class="kw">if</span> mark >= <span class="num">80</span>:
        <span class="fn">print</span>(mark, <span class="str">"- A grade"</span>)
    <span class="kw">else</span>:
        <span class="fn">print</span>(mark, <span class="str">"- B grade"</span>)</pre>
</div>

<div class="pro-tip">
<div class="head">✨ Pro Tip</div>
<p>If you need the index too, use <code>enumerate()</code>:</p>
<pre style="margin-top:8px;margin-bottom:0;"><span class="kw">for</span> i, fruit <span class="kw">in</span> <span class="fn">enumerate</span>(fruits, <span class="num">1</span>):
    <span class="fn">print</span>(i, fruit)</pre>
</div>`
      },
      quiz: [
        { q: { ur: "range(5) kitne numbers?", en: "range(5) gives?" }, options: ["1-5", "0-4", "0-5", "1-4"], answer: 1 },
        { q: { ur: "for fruit in fruits: mein fruit?", en: "fruit in for fruit in fruits is?" }, options: ["List name", "Each item", "Function", "Error"], answer: 1 },
        { q: { ur: "range(1, 6) kya deta?", en: "range(1, 6) gives?" }, options: ["1-6", "1-5", "0-6", "0-5"], answer: 1 },
        { q: { ur: "for loop kis kaam?", en: "for loop is for?" }, options: ["Condition", "Repeat", "Function", "Variable"], answer: 1 },
        { q: { ur: "for i in range(3): kitni baar?", en: "for i in range(3): runs how many times?" }, options: ["2", "3", "4", "1"], answer: 1 }
      ]
    },

    /* ═══════════════════════════════════════════════════════
       TOPIC 3: while Loops
       ═══════════════════════════════════════════════════════ */
    {
      id: "while-loop",
      title: { ur: "while Loops", en: "while Loops" },
      icon: "♻️",
      code: {
        ur: `# while loop
count = 0

while count < 5:
    print(count)
    count += 1   # yeh zaroori hai!

print("Loop khatam!")`,
        en: `# while loop
count = 0

while count < 5:
    print(count)
    count += 1   # this is important!

print("Loop done!")`
      },
      learn: {
        ur: `<h2 style="font-size:1.15rem;font-weight:800;margin-bottom:14px;">♻️ while Loops</h2>
<p style="color:var(--text-soft);font-size:.93rem;margin-bottom:14px;"><code>while</code> loop tab tak chalta hai <strong>jab tak condition True rahe</strong>.</p>

<div style="background:var(--code-bg);border:1px solid var(--code-border);border-radius:10px;overflow:hidden;margin-bottom:16px;font-family:var(--mono);font-size:.82rem;">
  <div style="display:grid;grid-template-columns:130px 1fr;padding:9px 14px;background:var(--code-bg-2);color:var(--py-blue-glow);font-weight:700;font-size:.68rem;text-transform:uppercase;">Loop · Kab use karo</div>
  <div style="display:grid;grid-template-columns:130px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">for</span><span style="color:var(--text-soft);">Jab pata ho kitni baar</span></div>
  <div style="display:grid;grid-template-columns:130px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">while</span><span style="color:var(--text-soft);">Jab condition pe depend ho</span></div>
</div>

<div style="background:linear-gradient(135deg,rgba(248,113,113,.1),rgba(248,113,113,.02));border:1px solid rgba(248,113,113,.3);border-left:3px solid var(--red);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--red);display:block;margin-bottom:5px;font-family:var(--mono);font-size:.7rem;text-transform:uppercase;">⚠️ Danger: Infinite Loop</strong>
Loop ke andar variable update karna mat bhoolna (<code>count += 1</code>), warna loop <strong>kabhi nahi rukega</strong>.
</div>`,
        en: `<h2 style="font-size:1.15rem;font-weight:800;margin-bottom:14px;">♻️ while Loops</h2>
<p style="color:var(--text-soft);font-size:.93rem;margin-bottom:14px;"><code>while</code> loop runs <strong>as long as the condition is True</strong>.</p>

<div style="background:var(--code-bg);border:1px solid var(--code-border);border-radius:10px;overflow:hidden;margin-bottom:16px;font-family:var(--mono);font-size:.82rem;">
  <div style="display:grid;grid-template-columns:130px 1fr;padding:9px 14px;background:var(--code-bg-2);color:var(--py-blue-glow);font-weight:700;font-size:.68rem;text-transform:uppercase;">Loop · When to use</div>
  <div style="display:grid;grid-template-columns:130px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">for</span><span style="color:var(--text-soft);">When count is known</span></div>
  <div style="display:grid;grid-template-columns:130px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">while</span><span style="color:var(--text-soft);">When condition-based</span></div>
</div>

<div style="background:linear-gradient(135deg,rgba(248,113,113,.1),rgba(248,113,113,.02));border:1px solid rgba(248,113,113,.3);border-left:3px solid var(--red);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--red);display:block;margin-bottom:5px;font-family:var(--mono);font-size:.7rem;text-transform:uppercase;">⚠️ Danger: Infinite Loop</strong>
Don't forget to update the variable inside (<code>count += 1</code>), or it'll <strong>never stop</strong>.
</div>`
      },
      theory: {
        ur: `<h3>Yeh kya hai?</h3>
<p><code>while</code> loop ek <strong>condition-based</strong> loop hai. Yeh tab tak chalta rehta hai jab tak condition True rahe. Jaise "jab tak bhookh lage, khao" — condition based.</p>

<h3>Kaise kaam karta hai?</h3>
<div class="steps">
<ol>
<li><strong>Step 1:</strong> Python condition check karta hai</li>
<li><strong>Step 2:</strong> Agar True → andar wala code chalata hai</li>
<li><strong>Step 3:</strong> Wapas condition check karta hai</li>
<li><strong>Step 4:</strong> Agar False → loop ruk jata hai</li>
</ol>
</div>

<h3>Example</h3>
<pre>count = <span class="num">0</span>

<span class="kw">while</span> count < <span class="num">5</span>:
    <span class="fn">print</span>(count)
    count += <span class="num">1</span>    <span class="cm"># yeh na likho to infinite loop!</span>

<span class="cm"># Output: 0, 1, 2, 3, 4</span></pre>

<h3>while True + break</h3>
<pre><span class="kw">while</span> <span class="kw">True</span>:
    user = <span class="fn">input</span>(<span class="str">"Exit likho: "</span>)
    <span class="kw">if</span> user == <span class="str">"exit"</span>:
        <span class="kw">break</span>
    <span class="fn">print</span>(<span class="str">"Aapne likha:"</span>, user)</pre>

<div class="real-life">
<div class="head">🌍 Real Life Example</div>
<p><strong>Scenario:</strong> ATM PIN check — jab tak sahi PIN na dale, poochta raho.</p>
<pre style="margin-top:10px;margin-bottom:0;">correct_pin = <span class="str">"1234"</span>
attempts = <span class="num">0</span>

<span class="kw">while</span> attempts < <span class="num">3</span>:
    pin = <span class="fn">input</span>(<span class="str">"PIN dalein: "</span>)
    <span class="kw">if</span> pin == correct_pin:
        <span class="fn">print</span>(<span class="str">"Welcome!"</span>)
        <span class="kw">break</span>
    attempts += <span class="num">1</span>
    <span class="fn">print</span>(<span class="str">"Ghalat PIN"</span>)</pre>
</div>

<div class="warn-box">
<div class="head">⚠️ Common Mistakes</div>
<ul>
<li>Variable update bhool jana → infinite loop</li>
<li><code>while</code> use karna jab <code>for</code> behtar ho</li>
<li>Condition hamesha True rakhna (unless <code>break</code> use karo)</li>
</ul>
</div>

<div class="pro-tip">
<div class="head">✨ Pro Tip</div>
<p>Infinite loop se bachne ke liye <strong>condition eventually False</strong> honi chahiye. Ya phir <code>break</code> use karo. Ctrl+C se bhi stop kar sakte ho.</p>
</div>`,
        en: `<h3>What is it?</h3>
<p><code>while</code> is a <strong>condition-based</strong> loop. It runs as long as the condition is True. Like "while hungry, eat" — condition-based.</p>

<h3>How does it work?</h3>
<div class="steps">
<ol>
<li><strong>Step 1:</strong> Python checks the condition</li>
<li><strong>Step 2:</strong> If True → runs inner code</li>
<li><strong>Step 3:</strong> Checks condition again</li>
<li><strong>Step 4:</strong> If False → loop ends</li>
</ol>
</div>

<h3>Example</h3>
<pre>count = <span class="num">0</span>

<span class="kw">while</span> count < <span class="num">5</span>:
    <span class="fn">print</span>(count)
    count += <span class="num">1</span>    <span class="cm"># without this: infinite loop!</span></pre>

<h3>while True + break</h3>
<pre><span class="kw">while</span> <span class="kw">True</span>:
    user = <span class="fn">input</span>(<span class="str">"Type exit: "</span>)
    <span class="kw">if</span> user == <span class="str">"exit"</span>:
        <span class="kw">break</span>
    <span class="fn">print</span>(<span class="str">"You typed:"</span>, user)</pre>

<div class="real-life">
<div class="head">🌍 Real Life Example</div>
<p><strong>Scenario:</strong> ATM PIN check — keep asking until correct.</p>
<pre style="margin-top:10px;margin-bottom:0;">correct_pin = <span class="str">"1234"</span>
attempts = <span class="num">0</span>

<span class="kw">while</span> attempts < <span class="num">3</span>:
    pin = <span class="fn">input</span>(<span class="str">"Enter PIN: "</span>)
    <span class="kw">if</span> pin == correct_pin:
        <span class="fn">print</span>(<span class="str">"Welcome!"</span>)
        <span class="kw">break</span>
    attempts += <span class="num">1</span>
    <span class="fn">print</span>(<span class="str">"Wrong PIN"</span>)</pre>
</div>

<div class="warn-box">
<div class="head">⚠️ Common Mistakes</div>
<ul>
<li>Forgetting to update the variable → infinite loop</li>
<li>Using <code>while</code> when <code>for</code> is better</li>
<li>Condition stays True forever (unless <code>break</code>)</li>
</ul>
</div>

<div class="pro-tip">
<div class="head">✨ Pro Tip</div>
<p>To avoid infinite loops, make sure the condition becomes False eventually, or use <code>break</code>. Ctrl+C to stop.</p>
</div>`
      },
      quiz: [
        { q: { ur: "while loop kab tak chalta hai?", en: "while loop runs until?" }, options: ["Once", "While condition True", "10 times", "Never"], answer: 1 },
        { q: { ur: "Variable update na karne se?", en: "Forgetting to update variable?" }, options: ["1 time", "Infinite loop", "Error", "Nothing"], answer: 1 },
        { q: { ur: "for vs while mein farak?", en: "for vs while difference?" }, options: ["Same", "for for known count, while for condition", "while faster", "for only numbers"], answer: 1 },
        { q: { ur: "count += 1 kyun zaroori?", en: "Why count += 1?" }, options: ["Style", "To make condition False eventually", "Not needed", "Prevent errors"], answer: 1 },
        { q: { ur: "Infinite loop kya?", en: "What is infinite loop?" }, options: ["100 times", "Never stops", "Errors", "0 times"], answer: 1 }
      ]
    },

    /* ═══════════════════════════════════════════════════════
       TOPIC 4: break, continue, pass
       ═══════════════════════════════════════════════════════ */
    {
      id: "break-continue-pass",
      title: { ur: "break, continue, pass", en: "break, continue, pass" },
      icon: "🚦",
      code: {
        ur: `# break - loop turant rok do
for i in range(10):
    if i == 5:
        break
    print(i)   # 0, 1, 2, 3, 4

# continue - yeh iteration skip
for i in range(5):
    if i == 2:
        continue
    print(i)   # 0, 1, 3, 4

# pass - kuch nahi karta
for i in range(3):
    pass`,
        en: `# break - stop the loop
for i in range(10):
    if i == 5:
        break
    print(i)   # 0, 1, 2, 3, 4

# continue - skip this iteration
for i in range(5):
    if i == 2:
        continue
    print(i)   # 0, 1, 3, 4

# pass - does nothing
for i in range(3):
    pass`
      },
      learn: {
        ur: `<h2 style="font-size:1.15rem;font-weight:800;margin-bottom:14px;">🚦 break, continue, pass</h2>
<p style="color:var(--text-soft);font-size:.93rem;margin-bottom:14px;">Yeh teeno loops ko <strong>control</strong> karne ke liye use hote hain.</p>

<div style="background:var(--code-bg);border:1px solid var(--code-border);border-radius:10px;overflow:hidden;margin-bottom:16px;font-family:var(--mono);font-size:.82rem;">
  <div style="display:grid;grid-template-columns:100px 1fr;padding:9px 14px;background:var(--code-bg-2);color:var(--py-blue-glow);font-weight:700;font-size:.68rem;text-transform:uppercase;">Keyword · Kaam</div>
  <div style="display:grid;grid-template-columns:100px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">break</span><span style="color:var(--text-soft);">Poora loop rok do</span></div>
  <div style="display:grid;grid-template-columns:100px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">continue</span><span style="color:var(--text-soft);">Sirf yeh iteration skip</span></div>
  <div style="display:grid;grid-template-columns:100px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">pass</span><span style="color:var(--text-soft);">Kuch nahi karta (placeholder)</span></div>
</div>

<div style="background:linear-gradient(135deg,rgba(16,185,129,.1),rgba(16,185,129,.02));border:1px solid rgba(16,185,129,.25);border-left:3px solid var(--py-green);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--py-green-glow);display:block;margin-bottom:5px;font-family:var(--mono);font-size:.7rem;text-transform:uppercase;">⚠️ Common Mistake</strong>
<code>break</code> aur <code>continue</code> confuse karna — <code>break</code> poora loop rok deta hai, <code>continue</code> sirf current iteration skip karta hai.
</div>`,
        en: `<h2 style="font-size:1.15rem;font-weight:800;margin-bottom:14px;">🚦 break, continue, pass</h2>
<p style="color:var(--text-soft);font-size:.93rem;margin-bottom:14px;">These three control loops.</p>

<div style="background:var(--code-bg);border:1px solid var(--code-border);border-radius:10px;overflow:hidden;margin-bottom:16px;font-family:var(--mono);font-size:.82rem;">
  <div style="display:grid;grid-template-columns:100px 1fr;padding:9px 14px;background:var(--code-bg-2);color:var(--py-blue-glow);font-weight:700;font-size:.68rem;text-transform:uppercase;">Keyword · Does</div>
  <div style="display:grid;grid-template-columns:100px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">break</span><span style="color:var(--text-soft);">Stop entire loop</span></div>
  <div style="display:grid;grid-template-columns:100px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">continue</span><span style="color:var(--text-soft);">Skip this iteration</span></div>
  <div style="display:grid;grid-template-columns:100px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">pass</span><span style="color:var(--text-soft);">Does nothing (placeholder)</span></div>
</div>

<div style="background:linear-gradient(135deg,rgba(16,185,129,.1),rgba(16,185,129,.02));border:1px solid rgba(16,185,129,.25);border-left:3px solid var(--py-green);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--py-green-glow);display:block;margin-bottom:5px;font-family:var(--mono);font-size:.7rem;text-transform:uppercase;">⚠️ Common Mistake</strong>
Confusing <code>break</code> and <code>continue</code> — <code>break</code> stops the loop, <code>continue</code> skips only current iteration.
</div>`
      },
      theory: {
        ur: `<h3>Yeh kya hai?</h3>
<p>Yeh 3 keywords loops ke andar <strong>control</strong> ke liye use hote hain. Loop ke flow ko badal dete hain.</p>

<h3>break — Loop rok do</h3>
<pre><span class="kw">for</span> i <span class="kw">in</span> <span class="fn">range</span>(<span class="num">10</span>):
    <span class="kw">if</span> i == <span class="num">5</span>:
        <span class="kw">break</span>
    <span class="fn">print</span>(i)

<span class="cm"># Output: 0, 1, 2, 3, 4 (5 pe ruk gaya)</span></pre>

<h3>continue — Yeh iteration skip</h3>
<pre><span class="kw">for</span> i <span class="kw">in</span> <span class="fn">range</span>(<span class="num">5</span>):
    <span class="kw">if</span> i == <span class="num">2</span>:
        <span class="kw">continue</span>
    <span class="fn">print</span>(i)

<span class="cm"># Output: 0, 1, 3, 4 (2 skip)</span></pre>

<h3>pass — Kuch nahi</h3>
<pre><span class="kw">for</span> i <span class="kw">in</span> <span class="fn">range</span>(<span class="num">3</span>):
    <span class="kw">pass</span>   <span class="cm"># placeholder — baad mein code likhna hai</span>

<span class="cm"># Python mein empty block allowed nahi, isliye pass zaroori</span></pre>

<div class="real-life">
<div class="head">🌍 Real Life Example</div>
<p><strong>Scenario 1 (break):</strong> Number dhundna — mil gaya to ruk jao.</p>
<pre style="margin-top:10px;">numbers = [<span class="num">3</span>, <span class="num">7</span>, <span class="num">12</span>, <span class="num">15</span>, <span class="num">8</span>]
target = <span class="num">12</span>

<span class="kw">for</span> n <span class="kw">in</span> numbers:
    <span class="kw">if</span> n == target:
        <span class="fn">print</span>(<span class="str">"Mil gaya!"</span>)
        <span class="kw">break</span></pre>

<p style="margin-top:14px;"><strong>Scenario 2 (continue):</strong> Sirf even numbers print karo.</p>
<pre style="margin-top:10px;">numbers = [<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>, <span class="num">4</span>, <span class="num">5</span>, <span class="num">6</span>]

<span class="kw">for</span> n <span class="kw">in</span> numbers:
    <span class="kw">if</span> n % <span class="num">2</span> != <span class="num">0</span>:
        <span class="kw">continue</span>   <span class="cm"># odd skip</span>
    <span class="fn">print</span>(n)   <span class="cm"># 2, 4, 6</span></pre>
</div>

<div class="warn-box">
<div class="head">⚠️ Common Mistakes</div>
<ul>
<li><code>break</code> aur <code>continue</code> confuse karna</li>
<li><code>pass</code> ko real kaam samajhna</li>
<li><code>break</code> ke baad code likhna (woh chalta nahi)</li>
</ul>
</div>

<div class="pro-tip">
<div class="head">✨ Pro Tip</div>
<p><code>break</code> akela use karo <code>while True</code> ke saath — condition check andar karo. Infinite loop se bachne ka safe tareeqa.</p>
</div>`,
        en: `<h3>What is it?</h3>
<p>These 3 keywords control the flow <strong>inside loops</strong>.</p>

<h3>break — Stop the loop</h3>
<pre><span class="kw">for</span> i <span class="kw">in</span> <span class="fn">range</span>(<span class="num">10</span>):
    <span class="kw">if</span> i == <span class="num">5</span>:
        <span class="kw">break</span>
    <span class="fn">print</span>(i)

<span class="cm"># Output: 0, 1, 2, 3, 4</span></pre>

<h3>continue — Skip this iteration</h3>
<pre><span class="kw">for</span> i <span class="kw">in</span> <span class="fn">range</span>(<span class="num">5</span>):
    <span class="kw">if</span> i == <span class="num">2</span>:
        <span class="kw">continue</span>
    <span class="fn">print</span>(i)

<span class="cm"># Output: 0, 1, 3, 4</span></pre>

<h3>pass — Does nothing</h3>
<pre><span class="kw">for</span> i <span class="kw">in</span> <span class="fn">range</span>(<span class="num">3</span>):
    <span class="kw">pass</span>   <span class="cm"># placeholder</span></pre>

<div class="real-life">
<div class="head">🌍 Real Life Example</div>
<p><strong>Scenario 1 (break):</strong> Find a number — stop when found.</p>
<pre style="margin-top:10px;">numbers = [<span class="num">3</span>, <span class="num">7</span>, <span class="num">12</span>, <span class="num">15</span>, <span class="num">8</span>]
target = <span class="num">12</span>

<span class="kw">for</span> n <span class="kw">in</span> numbers:
    <span class="kw">if</span> n == target:
        <span class="fn">print</span>(<span class="str">"Found!"</span>)
        <span class="kw">break</span></pre>

<p style="margin-top:14px;"><strong>Scenario 2 (continue):</strong> Print only even numbers.</p>
<pre style="margin-top:10px;">numbers = [<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>, <span class="num">4</span>, <span class="num">5</span>, <span class="num">6</span>]

<span class="kw">for</span> n <span class="kw">in</span> numbers:
    <span class="kw">if</span> n % <span class="num">2</span> != <span class="num">0</span>:
        <span class="kw">continue</span>
    <span class="fn">print</span>(n)   <span class="cm"># 2, 4, 6</span></pre>
</div>

<div class="warn-box">
<div class="head">⚠️ Common Mistakes</div>
<ul>
<li>Confusing <code>break</code> and <code>continue</code></li>
<li>Thinking <code>pass</code> does real work</li>
<li>Writing code after <code>break</code> (never runs)</li>
</ul>
</div>

<div class="pro-tip">
<div class="head">✨ Pro Tip</div>
<p>Use <code>break</code> alone with <code>while True</code> — check condition inside. Safe way to avoid infinite loops.</p>
</div>`
      },
      quiz: [
        { q: { ur: "break kya karta hai?", en: "What does break do?" }, options: ["Skip 1", "Stop entire loop", "Restart", "Nothing"], answer: 1 },
        { q: { ur: "continue kya karta hai?", en: "What does continue do?" }, options: ["Skip current, next", "Stop all", "End program", "Error"], answer: 0 },
        { q: { ur: "pass ka kaam?", en: "What does pass do?" }, options: ["Stop loop", "Nothing (placeholder)", "Skip", "Error"], answer: 1 },
        { q: { ur: "for i in range(10): if i==5: break — kitni baar?", en: "for i in range(10): if i==5: break — how many?" }, options: ["10", "5", "4", "6"], answer: 1 },
        { q: { ur: "pass kab use hota hai?", en: "When to use pass?" }, options: ["Stop loop", "Placeholder for future code", "Skip iteration", "Check condition"], answer: 1 }
      ]
    }

  ]
};