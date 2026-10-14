// data/module-2.js
// Module 2: Operators — 4 topics

window.MODULES = window.MODULES || {};

window.MODULES["module-2"] = {
  id: "module-2",
  number: 2,
  slug: "operators",
  title: { ur: "Operators", en: "Operators" },
  description: {
    ur: "Python ke arithmetic, comparison, logical, aur assignment operators",
    en: "Python's arithmetic, comparison, logical, and assignment operators"
  },
  duration: "8 minutes",
  level: "Beginner",
  locked: false,

  topics: [

    /* ═══════════════════════════════════════════════════════
       TOPIC 1: Arithmetic Operators
       ═══════════════════════════════════════════════════════ */
    {
      id: "arithmetic",
      title: { ur: "Arithmetic Operators", en: "Arithmetic Operators" },
      icon: "➕",
      code: {
        ur: `# Arithmetic operators
a = 10
b = 3

print("a + b =", a + b)     # jama
print("a - b =", a - b)     # tafreeq
print("a * b =", a * b)     # zarb
print("a / b =", a / b)     # taqseem (decimal)
print("a // b =", a // b)   # floor division
print("a % b =", a % b)     # baqi (remainder)
print("2 ** 3 =", 2 ** 3)   # power`,
        en: `# Arithmetic operators
a = 10
b = 3

print("a + b =", a + b)     # add
print("a - b =", a - b)     # subtract
print("a * b =", a * b)     # multiply
print("a / b =", a / b)     # divide (decimal)
print("a // b =", a // b)   # floor division
print("a % b =", a % b)     # remainder
print("2 ** 3 =", 2 ** 3)   # power`
      },
      learn: {
        ur: `<h2 style="font-size:1.15rem;font-weight:800;margin-bottom:14px;">➕ Arithmetic Operators</h2>
<p style="color:var(--text-soft);font-size:.93rem;margin-bottom:14px;">Yeh <strong>math</strong> ke liye use hote hain. Jaise calculator mein <code>+ - × ÷</code>, waise hi Python mein.</p>

<div style="background:var(--code-bg);border:1px solid var(--code-border);border-radius:10px;overflow:hidden;margin-bottom:16px;font-family:var(--mono);font-size:.82rem;">
  <div style="display:grid;grid-template-columns:60px 1fr 1fr;padding:9px 14px;background:var(--code-bg-2);color:var(--py-blue-glow);font-weight:700;font-size:.68rem;text-transform:uppercase;">Op · Kaam · Example</div>
  <div style="display:grid;grid-template-columns:60px 1fr 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">+</span><span style="color:var(--text-soft);">Jama</span><span style="color:var(--code-string);">5 + 3 = 8</span></div>
  <div style="display:grid;grid-template-columns:60px 1fr 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">-</span><span style="color:var(--text-soft);">Tafreeq</span><span style="color:var(--code-string);">5 - 3 = 2</span></div>
  <div style="display:grid;grid-template-columns:60px 1fr 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">*</span><span style="color:var(--text-soft);">Zarb</span><span style="color:var(--code-string);">5 * 3 = 15</span></div>
  <div style="display:grid;grid-template-columns:60px 1fr 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">/</span><span style="color:var(--text-soft);">Taqseem</span><span style="color:var(--code-string);">10 / 3 = 3.33</span></div>
  <div style="display:grid;grid-template-columns:60px 1fr 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">//</span><span style="color:var(--text-soft);">Floor</span><span style="color:var(--code-string);">10 // 3 = 3</span></div>
  <div style="display:grid;grid-template-columns:60px 1fr 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">%</span><span style="color:var(--text-soft);">Baqi</span><span style="color:var(--code-string);">10 % 3 = 1</span></div>
  <div style="display:grid;grid-template-columns:60px 1fr 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">**</span><span style="color:var(--text-soft);">Power</span><span style="color:var(--code-string);">2 ** 3 = 8</span></div>
</div>

<div style="background:linear-gradient(135deg,rgba(75,139,190,.1),rgba(75,139,190,.03));border:1px solid rgba(75,139,190,.25);border-left:3px solid var(--py-blue);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--text);display:block;margin-bottom:3px;">💡 Fark samjho</strong>
<code>/</code> decimal deta hai (10/3 = 3.33), lekin <code>//</code> poora number deta hai (10//3 = 3).
</div>

<div style="background:linear-gradient(135deg,rgba(16,185,129,.1),rgba(16,185,129,.02));border:1px solid rgba(16,185,129,.25);border-left:3px solid var(--py-green);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--py-green-glow);display:block;margin-bottom:5px;font-family:var(--mono);font-size:.7rem;text-transform:uppercase;">🤔 Socho Zara</strong>
17 toffee, 5 dost — har dost ko kitni, aur kitni bachegi? Python mein kaise likhoge?
</div>`,
        en: `<h2 style="font-size:1.15rem;font-weight:800;margin-bottom:14px;">➕ Arithmetic Operators</h2>
<p style="color:var(--text-soft);font-size:.93rem;margin-bottom:14px;">Used for <strong>math</strong>. Just like a calculator's <code>+ - × ÷</code>.</p>

<div style="background:var(--code-bg);border:1px solid var(--code-border);border-radius:10px;overflow:hidden;margin-bottom:16px;font-family:var(--mono);font-size:.82rem;">
  <div style="display:grid;grid-template-columns:60px 1fr 1fr;padding:9px 14px;background:var(--code-bg-2);color:var(--py-blue-glow);font-weight:700;font-size:.68rem;text-transform:uppercase;">Op · Does · Example</div>
  <div style="display:grid;grid-template-columns:60px 1fr 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">+</span><span style="color:var(--text-soft);">Add</span><span style="color:var(--code-string);">5 + 3 = 8</span></div>
  <div style="display:grid;grid-template-columns:60px 1fr 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">-</span><span style="color:var(--text-soft);">Subtract</span><span style="color:var(--code-string);">5 - 3 = 2</span></div>
  <div style="display:grid;grid-template-columns:60px 1fr 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">*</span><span style="color:var(--text-soft);">Multiply</span><span style="color:var(--code-string);">5 * 3 = 15</span></div>
  <div style="display:grid;grid-template-columns:60px 1fr 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">/</span><span style="color:var(--text-soft);">Divide</span><span style="color:var(--code-string);">10 / 3 = 3.33</span></div>
  <div style="display:grid;grid-template-columns:60px 1fr 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">//</span><span style="color:var(--text-soft);">Floor</span><span style="color:var(--code-string);">10 // 3 = 3</span></div>
  <div style="display:grid;grid-template-columns:60px 1fr 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">%</span><span style="color:var(--text-soft);">Remainder</span><span style="color:var(--code-string);">10 % 3 = 1</span></div>
  <div style="display:grid;grid-template-columns:60px 1fr 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">**</span><span style="color:var(--text-soft);">Power</span><span style="color:var(--code-string);">2 ** 3 = 8</span></div>
</div>

<div style="background:linear-gradient(135deg,rgba(75,139,190,.1),rgba(75,139,190,.03));border:1px solid rgba(75,139,190,.25);border-left:3px solid var(--py-blue);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--text);display:block;margin-bottom:3px;">💡 Notice</strong>
<code>/</code> gives decimal (10/3 = 3.33), but <code>//</code> gives whole number (10//3 = 3).
</div>

<div style="background:linear-gradient(135deg,rgba(16,185,129,.1),rgba(16,185,129,.02));border:1px solid rgba(16,185,129,.25);border-left:3px solid var(--py-green);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--py-green-glow);display:block;margin-bottom:5px;font-family:var(--mono);font-size:.7rem;text-transform:uppercase;">🤔 Think</strong>
17 candies, 5 friends — how many each, and how many left?
</div>`
      },
      theory: {
        ur: `<h3>Yeh kya hai?</h3>
<p>Arithmetic operators Python ke wo symbols hain jo <strong>mathematical calculations</strong> ke liye use hote hain. Jaise calculator mein tum <code>+</code>, <code>-</code>, <code>×</code>, <code>÷</code> use karte ho — bilkul waise hi Python mein, bas <code>×</code> ki jagah <code>*</code> aur <code>÷</code> ki jagah <code>/</code> likhte hain.</p>

<h3>Kaise kaam karta hai?</h3>
<div class="steps">
<ol>
<li><strong>Step 1:</strong> Python pehle left value leta hai (jaise <code>10</code>)</li>
<li><strong>Step 2:</strong> Operator dekhta hai (jaise <code>+</code>)</li>
<li><strong>Step 3:</strong> Right value leta hai (jaise <code>3</code>)</li>
<li><strong>Step 4:</strong> Operation apply karta hai (<code>10 + 3 = 13</code>)</li>
<li><strong>Step 5:</strong> Result return karta hai</li>
</ol>
</div>

<h3>Har operator detail</h3>

<h4>1. <code>+</code> — Jama (Addition)</h4>
<p>Do numbers ko <strong>jodta</strong> hai. String ke saath bhi kaam karta hai — concatenation.</p>
<pre><span class="fn">print</span>(<span class="num">5</span> + <span class="num">3</span>)              <span class="cm"># 8</span>
<span class="fn">print</span>(<span class="num">5</span> + <span class="num">3.5</span>)            <span class="cm"># 8.5</span>
<span class="fn">print</span>(<span class="str">"Hello"</span> + <span class="str">" World"</span>)   <span class="cm"># "Hello World"</span></pre>

<h4>2. <code>-</code> — Tafreeq (Subtraction)</h4>
<pre><span class="fn">print</span>(<span class="num">10</span> - <span class="num">3</span>)    <span class="cm"># 7</span>
<span class="fn">print</span>(<span class="num">3</span> - <span class="num">10</span>)    <span class="cm"># -7</span></pre>

<h4>3. <code>*</code> — Zarb (Multiplication)</h4>
<pre><span class="fn">print</span>(<span class="num">5</span> * <span class="num">3</span>)      <span class="cm"># 15</span>
<span class="fn">print</span>(<span class="str">"Hi"</span> * <span class="num">3</span>)   <span class="cm"># "HiHiHi"</span></pre>

<h4>4. <code>/</code> — Taqseem (Division)</h4>
<p>Result <strong>hamesha float</strong> hota hai.</p>
<pre><span class="fn">print</span>(<span class="num">10</span> / <span class="num">3</span>)    <span class="cm"># 3.333...</span>
<span class="fn">print</span>(<span class="num">10</span> / <span class="num">2</span>)    <span class="cm"># 5.0 (float)</span></pre>

<h4>5. <code>//</code> — Floor Division</h4>
<p>Decimal hata deta hai, <strong>round nahi</strong> karta.</p>
<pre><span class="fn">print</span>(<span class="num">10</span> // <span class="num">3</span>)   <span class="cm"># 3</span>
<span class="fn">print</span>(<span class="num">7</span> // <span class="num">2</span>)    <span class="cm"># 3 (4 nahi)</span></pre>

<h4>6. <code>%</code> — Modulus (Baqi)</h4>
<pre><span class="fn">print</span>(<span class="num">10</span> % <span class="num">3</span>)    <span class="cm"># 1</span>
<span class="fn">print</span>(<span class="num">8</span> % <span class="num">2</span>)     <span class="cm"># 0 (even)</span></pre>

<h4>7. <code>**</code> — Power</h4>
<pre><span class="fn">print</span>(<span class="num">2</span> ** <span class="num">3</span>)    <span class="cm"># 8</span>
<span class="fn">print</span>(<span class="num">2</span> ** <span class="num">0.5</span>)  <span class="cm"># 1.414 (square root)</span></pre>

<div class="real-life">
<div class="head">🌍 Real Life Example</div>
<p><strong>Scenario:</strong> Dukaan ka bill banana.</p>
<pre style="margin-top:10px;margin-bottom:0;">price = <span class="num">30</span>
qty = <span class="num">5</span>
total = price * qty           <span class="cm"># 150</span>
discount = total * <span class="num">0.1</span>      <span class="cm"># 15</span>
final = total - discount      <span class="cm"># 135</span>
<span class="fn">print</span>(<span class="str">"Bill:"</span>, final)</pre>
</div>

<div class="warn-box">
<div class="head">⚠️ Common Mistakes</div>
<ul>
<li><code>/</code> aur <code>//</code> confuse karna — alag hain</li>
<li><code>7 // 2</code> ka result 4 nahi, 3 hai</li>
<li><code>10 / 0</code> → <code>ZeroDivisionError</code></li>
</ul>
</div>

<div class="pro-tip">
<div class="head">✨ Pro Tip</div>
<p>Even/odd check: <code>num % 2 == 0</code>. Percentage: <code>(obtained / total) * 100</code>. Square root: <code>x ** 0.5</code>.</p>
</div>`,
        en: `<h3>What is it?</h3>
<p>Arithmetic operators are symbols for <strong>mathematical calculations</strong>. Just like a calculator's <code>+</code>, <code>-</code>, <code>×</code>, <code>÷</code> — Python uses <code>*</code> for <code>×</code> and <code>/</code> for <code>÷</code>.</p>

<h3>How does it work?</h3>
<div class="steps">
<ol>
<li><strong>Step 1:</strong> Python takes the left value (e.g., <code>10</code>)</li>
<li><strong>Step 2:</strong> Sees the operator (e.g., <code>+</code>)</li>
<li><strong>Step 3:</strong> Takes the right value (e.g., <code>3</code>)</li>
<li><strong>Step 4:</strong> Applies the operation (<code>10 + 3 = 13</code>)</li>
<li><strong>Step 5:</strong> Returns the result</li>
</ol>
</div>

<h3>Each operator in detail</h3>

<h4>1. <code>+</code> — Addition</h4>
<pre><span class="fn">print</span>(<span class="num">5</span> + <span class="num">3</span>)              <span class="cm"># 8</span>
<span class="fn">print</span>(<span class="num">5</span> + <span class="num">3.5</span>)            <span class="cm"># 8.5</span>
<span class="fn">print</span>(<span class="str">"Hello"</span> + <span class="str">" World"</span>)   <span class="cm"># "Hello World"</span></pre>

<h4>2. <code>-</code> — Subtraction</h4>
<pre><span class="fn">print</span>(<span class="num">10</span> - <span class="num">3</span>)    <span class="cm"># 7</span>
<span class="fn">print</span>(<span class="num">3</span> - <span class="num">10</span>)    <span class="cm"># -7</span></pre>

<h4>3. <code>*</code> — Multiplication</h4>
<pre><span class="fn">print</span>(<span class="num">5</span> * <span class="num">3</span>)      <span class="cm"># 15</span>
<span class="fn">print</span>(<span class="str">"Hi"</span> * <span class="num">3</span>)   <span class="cm"># "HiHiHi"</span></pre>

<h4>4. <code>/</code> — Division</h4>
<p>Result is <strong>always float</strong>.</p>
<pre><span class="fn">print</span>(<span class="num">10</span> / <span class="num">3</span>)    <span class="cm"># 3.333...</span>
<span class="fn">print</span>(<span class="num">10</span> / <span class="num">2</span>)    <span class="cm"># 5.0</span></pre>

<h4>5. <code>//</code> — Floor Division</h4>
<p>Drops the decimal, does <strong>NOT round</strong>.</p>
<pre><span class="fn">print</span>(<span class="num">10</span> // <span class="num">3</span>)   <span class="cm"># 3</span>
<span class="fn">print</span>(<span class="num">7</span> // <span class="num">2</span>)    <span class="cm"># 3 (not 4)</span></pre>

<h4>6. <code>%</code> — Modulus (Remainder)</h4>
<pre><span class="fn">print</span>(<span class="num">10</span> % <span class="num">3</span>)    <span class="cm"># 1</span>
<span class="fn">print</span>(<span class="num">8</span> % <span class="num">2</span>)     <span class="cm"># 0</span></pre>

<h4>7. <code>**</code> — Power</h4>
<pre><span class="fn">print</span>(<span class="num">2</span> ** <span class="num">3</span>)    <span class="cm"># 8</span>
<span class="fn">print</span>(<span class="num">2</span> ** <span class="num">0.5</span>)  <span class="cm"># 1.414</span></pre>

<div class="real-life">
<div class="head">🌍 Real Life Example</div>
<p><strong>Scenario:</strong> Shop bill.</p>
<pre style="margin-top:10px;margin-bottom:0;">price = <span class="num">30</span>
qty = <span class="num">5</span>
total = price * qty           <span class="cm"># 150</span>
discount = total * <span class="num">0.1</span>      <span class="cm"># 15</span>
final = total - discount      <span class="cm"># 135</span></pre>
</div>

<div class="warn-box">
<div class="head">⚠️ Common Mistakes</div>
<ul>
<li>Confusing <code>/</code> and <code>//</code></li>
<li><code>7 // 2</code> is 3, not 4</li>
<li><code>10 / 0</code> → <code>ZeroDivisionError</code></li>
</ul>
</div>

<div class="pro-tip">
<div class="head">✨ Pro Tip</div>
<p>Even/odd: <code>num % 2 == 0</code>. Percentage: <code>(obtained / total) * 100</code>. Square root: <code>x ** 0.5</code>.</p>
</div>`
      },
      quiz: [
        { q: { ur: "10 // 3 ka result?", en: "10 // 3 = ?" }, options: ["3.333", "3", "1", "30"], answer: 1 },
        { q: { ur: "7 % 3 ka result?", en: "7 % 3 = ?" }, options: ["2.33", "2", "1", "4"], answer: 2 },
        { q: { ur: "2 ** 4 kitna?", en: "2 ** 4 = ?" }, options: ["8", "16", "6", "24"], answer: 1 },
        { q: { ur: "10 / 3 ka result?", en: "10 / 3 = ?" }, options: ["3", "3.333...", "1", "10"], answer: 1 },
        { q: { ur: "Kaunsa operator baqi nikalta hai?", en: "Which gives remainder?" }, options: ["/", "//", "%", "**"], answer: 2 }
      ]
    },

    /* ═══════════════════════════════════════════════════════
       TOPIC 2: Comparison Operators
       ═══════════════════════════════════════════════════════ */
    {
      id: "comparison",
      title: { ur: "Comparison Operators", en: "Comparison Operators" },
      icon: "⚖️",
      code: {
        ur: `# Comparison operators
a = 10
b = 5

print("a == b :", a == b)   # barabar?
print("a != b :", a != b)   # nahi barabar?
print("a > b  :", a > b)    # bara?
print("a < b  :", a < b)    # chhota?
print("a >= b :", a >= b)   # bara ya barabar?
print("a <= b :", a <= b)   # chhota ya barabar?`,
        en: `# Comparison operators
a = 10
b = 5

print("a == b :", a == b)   # equal?
print("a != b :", a != b)   # not equal?
print("a > b  :", a > b)    # greater?
print("a < b  :", a < b)    # less?
print("a >= b :", a >= b)   # greater or equal?
print("a <= b :", a <= b)   # less or equal?`
      },
      learn: {
        ur: `<h2 style="font-size:1.15rem;font-weight:800;margin-bottom:14px;">⚖️ Comparison Operators</h2>
<p style="color:var(--text-soft);font-size:.93rem;margin-bottom:14px;">Yeh do values ko <strong>compare</strong> karne ke liye. Result hamesha <code>True</code> ya <code>False</code> hota hai.</p>

<div style="background:var(--code-bg);border:1px solid var(--code-border);border-radius:10px;overflow:hidden;margin-bottom:16px;font-family:var(--mono);font-size:.82rem;">
  <div style="display:grid;grid-template-columns:60px 1fr 1fr;padding:9px 14px;background:var(--code-bg-2);color:var(--py-blue-glow);font-weight:700;font-size:.68rem;text-transform:uppercase;">Op · Kaam · Example</div>
  <div style="display:grid;grid-template-columns:60px 1fr 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">==</span><span style="color:var(--text-soft);">Barabar?</span><span style="color:var(--code-string);">5 == 5 → True</span></div>
  <div style="display:grid;grid-template-columns:60px 1fr 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">!=</span><span style="color:var(--text-soft);">Barabar nahi?</span><span style="color:var(--code-string);">5 != 3 → True</span></div>
  <div style="display:grid;grid-template-columns:60px 1fr 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">&gt;</span><span style="color:var(--text-soft);">Bara?</span><span style="color:var(--code-string);">5 &gt; 3 → True</span></div>
  <div style="display:grid;grid-template-columns:60px 1fr 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">&lt;</span><span style="color:var(--text-soft);">Chhota?</span><span style="color:var(--code-string);">5 &lt; 3 → False</span></div>
  <div style="display:grid;grid-template-columns:60px 1fr 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">&gt;=</span><span style="color:var(--text-soft);">Bara/barabar?</span><span style="color:var(--code-string);">5 &gt;= 5 → True</span></div>
  <div style="display:grid;grid-template-columns:60px 1fr 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">&lt;=</span><span style="color:var(--text-soft);">Chhota/barabar?</span><span style="color:var(--code-string);">5 &lt;= 3 → False</span></div>
</div>

<div style="background:linear-gradient(135deg,rgba(75,139,190,.1),rgba(75,139,190,.03));border:1px solid rgba(75,139,190,.25);border-left:3px solid var(--py-blue);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--text);display:block;margin-bottom:3px;">⚠️ Dhyan rakho</strong>
<code>=</code> assignment hai (value dena), <code>==</code> comparison hai (check karna). <code>x = 5</code> alag hai, <code>x == 5</code> alag.
</div>`,
        en: `<h2 style="font-size:1.15rem;font-weight:800;margin-bottom:14px;">⚖️ Comparison Operators</h2>
<p style="color:var(--text-soft);font-size:.93rem;margin-bottom:14px;">These <strong>compare</strong> two values. Result is always <code>True</code> or <code>False</code>.</p>

<div style="background:var(--code-bg);border:1px solid var(--code-border);border-radius:10px;overflow:hidden;margin-bottom:16px;font-family:var(--mono);font-size:.82rem;">
  <div style="display:grid;grid-template-columns:60px 1fr 1fr;padding:9px 14px;background:var(--code-bg-2);color:var(--py-blue-glow);font-weight:700;font-size:.68rem;text-transform:uppercase;">Op · Does · Example</div>
  <div style="display:grid;grid-template-columns:60px 1fr 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">==</span><span style="color:var(--text-soft);">Equal?</span><span style="color:var(--code-string);">5 == 5 → True</span></div>
  <div style="display:grid;grid-template-columns:60px 1fr 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">!=</span><span style="color:var(--text-soft);">Not equal?</span><span style="color:var(--code-string);">5 != 3 → True</span></div>
  <div style="display:grid;grid-template-columns:60px 1fr 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">&gt;</span><span style="color:var(--text-soft);">Greater?</span><span style="color:var(--code-string);">5 &gt; 3 → True</span></div>
  <div style="display:grid;grid-template-columns:60px 1fr 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">&lt;</span><span style="color:var(--text-soft);">Less?</span><span style="color:var(--code-string);">5 &lt; 3 → False</span></div>
  <div style="display:grid;grid-template-columns:60px 1fr 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">&gt;=</span><span style="color:var(--text-soft);">Greater/equal?</span><span style="color:var(--code-string);">5 &gt;= 5 → True</span></div>
  <div style="display:grid;grid-template-columns:60px 1fr 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">&lt;=</span><span style="color:var(--text-soft);">Less/equal?</span><span style="color:var(--code-string);">5 &lt;= 3 → False</span></div>
</div>

<div style="background:linear-gradient(135deg,rgba(75,139,190,.1),rgba(75,139,190,.03));border:1px solid rgba(75,139,190,.25);border-left:3px solid var(--py-blue);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--text);display:block;margin-bottom:3px;">⚠️ Careful</strong>
<code>=</code> is assignment (put value), <code>==</code> is comparison (check). <code>x = 5</code> is different from <code>x == 5</code>.
</div>`
      },
      theory: {
        ur: `<h3>Yeh kya hai?</h3>
<p>Comparison operators do values ko <strong>compare</strong> karte hain aur batate hain ke pehli value doosri se <em>bari</em>, <em>chhoti</em>, ya <em>barabar</em> hai. Result hamesha <code>True</code> ya <code>False</code>.</p>

<h3>Kaise kaam karta hai?</h3>
<div class="steps">
<ol>
<li><strong>Step 1:</strong> Python left value uthata hai</li>
<li><strong>Step 2:</strong> Right value uthata hai</li>
<li><strong>Step 3:</strong> Comparison operator apply karta hai</li>
<li><strong>Step 4:</strong> <code>True</code> ya <code>False</code> return karta hai</li>
</ol>
</div>

<h3>Har operator</h3>
<table class="theory-table">
<div class="row head"><div>Operator</div><div>Kaam</div></div>
<div class="row"><div class="label">==</div><div class="value">Barabar? — <code>5 == 5 → True</code></div></div>
<div class="row"><div class="label">!=</div><div class="value">Nahi barabar? — <code>5 != 3 → True</code></div></div>
<div class="row"><div class="label">&gt;</div><div class="value">Bara? — <code>5 &gt; 3 → True</code></div></div>
<div class="row"><div class="label">&lt;</div><div class="value">Chhota? — <code>5 &lt; 3 → False</code></div></div>
<div class="row"><div class="label">&gt;=</div><div class="value">Bara/barabar? — <code>5 &gt;= 5 → True</code></div></div>
<div class="row"><div class="label">&lt;=</div><div class="value">Chhota/barabar? — <code>5 &lt;= 3 → False</code></div></div>
</table>

<h3>Real example: Pass/Fail check</h3>
<pre>marks = <span class="num">75</span>
<span class="fn">print</span>(marks >= <span class="num">40</span>)    <span class="cm"># True (pass)</span>
<span class="fn">print</span>(marks == <span class="num">100</span>)   <span class="cm"># False</span></pre>

<div class="real-life">
<div class="head">🌍 Real Life Example</div>
<p><strong>Scenario:</strong> ATM mein balance check.</p>
<pre style="margin-top:10px;margin-bottom:0;">balance = <span class="num">5000</span>
withdraw = <span class="num">3000</span>

<span class="fn">print</span>(withdraw <= balance)   <span class="cm"># True — nikal sakte ho</span>

<span class="cm"># Agar withdraw > balance hota:</span>
<span class="cm"># False — "Insufficient balance"</span></pre>
</div>

<div class="warn-box">
<div class="head">⚠️ Bara Confusion</div>
<p><strong><code>=</code> aur <code>==</code> bilkul alag hain!</strong><br>
<code>x = 5</code> → "x mein 5 rakho"<br>
<code>x == 5</code> → "check karo x 5 hai?"<br>
<code>5 = 5</code> → <strong>SyntaxError</strong></p>
</div>

<div class="pro-tip">
<div class="head">✨ Pro Tip</div>
<p>Comparisons <strong>chain</strong> kar sakte ho: <code>1 < x < 10</code> — check karta hai x 1 se bara aur 10 se chhota. <code>and</code> ki zaroorat nahi.</p>
</div>`,
        en: `<h3>What is it?</h3>
<p>Comparison operators <strong>compare</strong> two values and tell whether the first is <em>greater</em>, <em>smaller</em>, or <em>equal</em>. Result is always <code>True</code> or <code>False</code>.</p>

<h3>How does it work?</h3>
<div class="steps">
<ol>
<li><strong>Step 1:</strong> Python takes the left value</li>
<li><strong>Step 2:</strong> Takes the right value</li>
<li><strong>Step 3:</strong> Applies the comparison</li>
<li><strong>Step 4:</strong> Returns <code>True</code> or <code>False</code></li>
</ol>
</div>

<h3>Each operator</h3>
<table class="theory-table">
<div class="row head"><div>Operator</div><div>Does</div></div>
<div class="row"><div class="label">==</div><div class="value">Equal? — <code>5 == 5 → True</code></div></div>
<div class="row"><div class="label">!=</div><div class="value">Not equal? — <code>5 != 3 → True</code></div></div>
<div class="row"><div class="label">&gt;</div><div class="value">Greater? — <code>5 &gt; 3 → True</code></div></div>
<div class="row"><div class="label">&lt;</div><div class="value">Less? — <code>5 &lt; 3 → False</code></div></div>
<div class="row"><div class="label">&gt;=</div><div class="value">Greater/equal? — <code>5 &gt;= 5 → True</code></div></div>
<div class="row"><div class="label">&lt;=</div><div class="value">Less/equal? — <code>5 &lt;= 3 → False</code></div></div>
</table>

<h3>Real example: Pass/Fail check</h3>
<pre>marks = <span class="num">75</span>
<span class="fn">print</span>(marks >= <span class="num">40</span>)    <span class="cm"># True (pass)</span>
<span class="fn">print</span>(marks == <span class="num">100</span>)   <span class="cm"># False</span></pre>

<div class="real-life">
<div class="head">🌍 Real Life Example</div>
<p><strong>Scenario:</strong> ATM balance check.</p>
<pre style="margin-top:10px;margin-bottom:0;">balance = <span class="num">5000</span>
withdraw = <span class="num">3000</span>

<span class="fn">print</span>(withdraw <= balance)   <span class="cm"># True</span></pre>
</div>

<div class="warn-box">
<div class="head">⚠️ Big Confusion</div>
<p><strong><code>=</code> and <code>==</code> are different!</strong><br>
<code>x = 5</code> → "put 5 in x"<br>
<code>x == 5</code> → "check x equals 5"<br>
<code>5 = 5</code> → <strong>SyntaxError</strong></p>
</div>

<div class="pro-tip">
<div class="head">✨ Pro Tip</div>
<p>Chain comparisons: <code>1 < x < 10</code> — checks x is between 1 and 10. No <code>and</code> needed.</p>
</div>`
      },
      quiz: [
        { q: { ur: "5 == 5 kya return karega?", en: "5 == 5 returns?" }, options: ["True", "False", "5", "Error"], answer: 0 },
        { q: { ur: "10 != 5 ka result?", en: "10 != 5?" }, options: ["True", "False", "10", "None"], answer: 0 },
        { q: { ur: "5 = 5 likhne se?", en: "5 = 5 will?" }, options: ["True", "False", "Error", "Nothing"], answer: 2 },
        { q: { ur: "8 >= 8 ka result?", en: "8 >= 8?" }, options: ["False", "True", "8", "Error"], answer: 1 },
        { q: { ur: "3 < 5 ka result?", en: "3 < 5?" }, options: ["False", "True", "3", "5"], answer: 1 }
      ]
    },

    /* ═══════════════════════════════════════════════════════
       TOPIC 3: Logical Operators
       ═══════════════════════════════════════════════════════ */
    {
      id: "logical",
      title: { ur: "Logical Operators", en: "Logical Operators" },
      icon: "🧠",
      code: {
        ur: `# Logical operators
print("True and True  :", True and True)
print("True and False :", True and False)

print("True or False  :", True or False)
print("False or False :", False or False)

print("not True       :", not True)
print("not False      :", not False)`,
        en: `# Logical operators
print("True and True  :", True and True)
print("True and False :", True and False)

print("True or False  :", True or False)
print("False or False :", False or False)

print("not True       :", not True)
print("not False      :", not False)`
      },
      learn: {
        ur: `<h2 style="font-size:1.15rem;font-weight:800;margin-bottom:14px;">🧠 Logical Operators</h2>
<p style="color:var(--text-soft);font-size:.93rem;margin-bottom:14px;">Yeh <strong>multiple conditions</strong> jodne ke liye use hote hain. 3 operators hain: <code>and</code>, <code>or</code>, <code>not</code>.</p>

<div style="background:var(--code-bg);border:1px solid var(--code-border);border-radius:10px;overflow:hidden;margin-bottom:16px;font-family:var(--mono);font-size:.82rem;">
  <div style="display:grid;grid-template-columns:60px 1fr 1fr;padding:9px 14px;background:var(--code-bg-2);color:var(--py-blue-glow);font-weight:700;font-size:.68rem;text-transform:uppercase;">Op · Kaam · Example</div>
  <div style="display:grid;grid-template-columns:60px 1fr 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">and</span><span style="color:var(--text-soft);">Dono True</span><span style="color:var(--code-string);">T and F → False</span></div>
  <div style="display:grid;grid-template-columns:60px 1fr 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">or</span><span style="color:var(--text-soft);">Ek bhi True</span><span style="color:var(--code-string);">T or F → True</span></div>
  <div style="display:grid;grid-template-columns:60px 1fr 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">not</span><span style="color:var(--text-soft);">Ulta karo</span><span style="color:var(--code-string);">not T → False</span></div>
</div>

<div style="background:linear-gradient(135deg,rgba(16,185,129,.1),rgba(16,185,129,.02));border:1px solid rgba(16,185,129,.25);border-left:3px solid var(--py-green);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--py-green-glow);display:block;margin-bottom:5px;font-family:var(--mono);font-size:.7rem;text-transform:uppercase;">🤔 Socho Zara</strong>
"Main bahar jaunga agar dhoop ho AND kaam na ho." — Python mein kaise likhoge?
</div>`,
        en: `<h2 style="font-size:1.15rem;font-weight:800;margin-bottom:14px;">🧠 Logical Operators</h2>
<p style="color:var(--text-soft);font-size:.93rem;margin-bottom:14px;">These join <strong>multiple conditions</strong>. 3 operators: <code>and</code>, <code>or</code>, <code>not</code>.</p>

<div style="background:var(--code-bg);border:1px solid var(--code-border);border-radius:10px;overflow:hidden;margin-bottom:16px;font-family:var(--mono);font-size:.82rem;">
  <div style="display:grid;grid-template-columns:60px 1fr 1fr;padding:9px 14px;background:var(--code-bg-2);color:var(--py-blue-glow);font-weight:700;font-size:.68rem;text-transform:uppercase;">Op · Does · Example</div>
  <div style="display:grid;grid-template-columns:60px 1fr 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">and</span><span style="color:var(--text-soft);">Both True</span><span style="color:var(--code-string);">T and F → False</span></div>
  <div style="display:grid;grid-template-columns:60px 1fr 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">or</span><span style="color:var(--text-soft);">Either True</span><span style="color:var(--code-string);">T or F → True</span></div>
  <div style="display:grid;grid-template-columns:60px 1fr 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">not</span><span style="color:var(--text-soft);">Reverse</span><span style="color:var(--code-string);">not T → False</span></div>
</div>

<div style="background:linear-gradient(135deg,rgba(16,185,129,.1),rgba(16,185,129,.02));border:1px solid rgba(16,185,129,.25);border-left:3px solid var(--py-green);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--py-green-glow);display:block;margin-bottom:5px;font-family:var(--mono);font-size:.7rem;text-transform:uppercase;">🤔 Think</strong>
"I'll go out if it's sunny AND I have no work." — how would you write this?
</div>`
      },
      theory: {
        ur: `<h3>Yeh kya hai?</h3>
<p>Logical operators <strong>multiple conditions ko jodte</strong> hain. 3 hain: <code>and</code>, <code>or</code>, <code>not</code>.</p>

<h3>Truth Table</h3>
<pre><span class="cm"># AND — dono True chahiye</span>
<span class="kw">True</span> <span class="kw">and</span> <span class="kw">True</span>   → <span class="num">True</span>
<span class="kw">True</span> <span class="kw">and</span> <span class="kw">False</span>  → <span class="num">False</span>
<span class="kw">False</span> <span class="kw">and</span> <span class="kw">True</span>  → <span class="num">False</span>
<span class="kw">False</span> <span class="kw">and</span> <span class="kw">False</span> → <span class="num">False</span>

<span class="cm"># OR — ek bhi True kaafi</span>
<span class="kw">True</span> <span class="kw">or</span> <span class="kw">True</span>    → <span class="num">True</span>
<span class="kw">True</span> <span class="kw">or</span> <span class="kw">False</span>   → <span class="num">True</span>
<span class="kw">False</span> <span class="kw">or</span> <span class="kw">True</span>   → <span class="num">True</span>
<span class="kw">False</span> <span class="kw">or</span> <span class="kw">False</span>  → <span class="num">False</span>

<span class="cm"># NOT — ulta</span>
<span class="kw">not</span> <span class="kw">True</span>   → <span class="num">False</span>
<span class="kw">not</span> <span class="kw">False</span>  → <span class="num">True</span></pre>

<div class="real-life">
<div class="head">🌍 Real Life Example</div>
<p><strong>Scenario 1 (AND):</strong> "Bahar jaunga agar dhoop AND kaam na ho."</p>
<pre style="margin-top:10px;">sunny = <span class="kw">True</span>
no_work = <span class="kw">False</span>
<span class="fn">print</span>(sunny <span class="kw">and</span> no_work)   <span class="cm"># False</span></pre>

<p style="margin-top:14px;"><strong>Scenario 2 (OR):</strong> "Bahar jaunga agar dost aayein OR movie ho."</p>
<pre style="margin-top:10px;">friend = <span class="kw">True</span>
movie = <span class="kw">False</span>
<span class="fn">print</span>(friend <span class="kw">or</span> movie)   <span class="cm"># True</span></pre>

<p style="margin-top:14px;"><strong>Scenario 3 (NOT):</strong> "Agar baarish NA ho."</p>
<pre style="margin-top:10px;">raining = <span class="kw">True</span>
<span class="fn">print</span>(<span class="kw">not</span> raining)   <span class="cm"># False</span></pre>
</div>

<div class="warn-box">
<div class="head">⚠️ Common Mistake</div>
<p><strong><code>and</code> aur <code>or</code> confuse karna.</strong> Yaad rakho: <code>and</code> = <strong>dono</strong> chahiye, <code>or</code> = <strong>ek</strong> kaafi hai.</p>
</div>

<div class="pro-tip">
<div class="head">✨ Pro Tip</div>
<p><code>and</code>/<code>or</code> <strong>short-circuit</strong> karte hain — <code>False and X</code> mein X evaluate nahi hota. Isse performance aur safety milti hai.</p>
</div>`,
        en: `<h3>What is it?</h3>
<p>Logical operators <strong>combine multiple conditions</strong>. 3 types: <code>and</code>, <code>or</code>, <code>not</code>.</p>

<h3>Truth Table</h3>
<pre><span class="cm"># AND — both True</span>
<span class="kw">True</span> <span class="kw">and</span> <span class="kw">True</span>   → <span class="num">True</span>
<span class="kw">True</span> <span class="kw">and</span> <span class="kw">False</span>  → <span class="num">False</span>
<span class="kw">False</span> <span class="kw">and</span> <span class="kw">True</span>  → <span class="num">False</span>
<span class="kw">False</span> <span class="kw">and</span> <span class="kw">False</span> → <span class="num">False</span>

<span class="cm"># OR — either True</span>
<span class="kw">True</span> <span class="kw">or</span> <span class="kw">True</span>    → <span class="num">True</span>
<span class="kw">True</span> <span class="kw">or</span> <span class="kw">False</span>   → <span class="num">True</span>
<span class="kw">False</span> <span class="kw">or</span> <span class="kw">True</span>   → <span class="num">True</span>
<span class="kw">False</span> <span class="kw">or</span> <span class="kw">False</span>  → <span class="num">False</span>

<span class="cm"># NOT — reverse</span>
<span class="kw">not</span> <span class="kw">True</span>   → <span class="num">False</span>
<span class="kw">not</span> <span class="kw">False</span>  → <span class="num">True</span></pre>

<div class="real-life">
<div class="head">🌍 Real Life Example</div>
<p><strong>Scenario 1 (AND):</strong> "I'll go out if sunny AND no work."</p>
<pre style="margin-top:10px;">sunny = <span class="kw">True</span>
no_work = <span class="kw">False</span>
<span class="fn">print</span>(sunny <span class="kw">and</span> no_work)   <span class="cm"># False</span></pre>

<p style="margin-top:14px;"><strong>Scenario 2 (OR):</strong> "I'll go if friend comes OR movie."</p>
<pre style="margin-top:10px;">friend = <span class="kw">True</span>
movie = <span class="kw">False</span>
<span class="fn">print</span>(friend <span class="kw">or</span> movie)   <span class="cm"># True</span></pre>

<p style="margin-top:14px;"><strong>Scenario 3 (NOT):</strong> "If NOT raining."</p>
<pre style="margin-top:10px;">raining = <span class="kw">True</span>
<span class="fn">print</span>(<span class="kw">not</span> raining)   <span class="cm"># False</span></pre>
</div>

<div class="warn-box">
<div class="head">⚠️ Common Mistake</div>
<p><strong>Confusing <code>and</code> and <code>or</code>.</strong> Remember: <code>and</code> = <strong>both</strong> needed, <code>or</code> = <strong>one</strong> is enough.</p>
</div>

<div class="pro-tip">
<div class="head">✨ Pro Tip</div>
<p><code>and</code>/<code>or</code> <strong>short-circuit</strong> — in <code>False and X</code>, X is not evaluated.</p>
</div>`
      },
      quiz: [
        { q: { ur: "True and False ka result?", en: "True and False?" }, options: ["True", "False", "Error", "None"], answer: 1 },
        { q: { ur: "True or False ka result?", en: "True or False?" }, options: ["True", "False", "Error", "None"], answer: 0 },
        { q: { ur: "not True ka result?", en: "not True?" }, options: ["True", "False", "None", "Error"], answer: 1 },
        { q: { ur: "False and False ka result?", en: "False and False?" }, options: ["True", "False", "Error", "None"], answer: 1 },
        { q: { ur: "False or True ka result?", en: "False or True?" }, options: ["True", "False", "Error", "None"], answer: 0 }
      ]
    },

    /* ═══════════════════════════════════════════════════════
       TOPIC 4: Assignment Operators
       ═══════════════════════════════════════════════════════ */
    {
      id: "assignment",
      title: { ur: "Assignment Operators", en: "Assignment Operators" },
      icon: "📝",
      code: {
        ur: `# Assignment operators
x = 10
print("x shuru mein:", x)

x += 5
print("x += 5 →", x)    # 15

x -= 3
print("x -= 3 →", x)    # 12

x *= 2
print("x *= 2 →", x)    # 24

x /= 4
print("x /= 4 →", x)    # 6.0`,
        en: `# Assignment operators
x = 10
print("x starts at:", x)

x += 5
print("x += 5 →", x)    # 15

x -= 3
print("x -= 3 →", x)    # 12

x *= 2
print("x *= 2 →", x)    # 24

x /= 4
print("x /= 4 →", x)    # 6.0`
      },
      learn: {
        ur: `<h2 style="font-size:1.15rem;font-weight:800;margin-bottom:14px;">📝 Assignment Operators</h2>
<p style="color:var(--text-soft);font-size:.93rem;margin-bottom:14px;">Variable ko <strong>value dena</strong> ya <strong>update karna</strong> asaan banate hain.</p>

<div style="background:var(--code-bg);border:1px solid var(--code-border);border-radius:10px;overflow:hidden;margin-bottom:16px;font-family:var(--mono);font-size:.82rem;">
  <div style="display:grid;grid-template-columns:60px 1fr 1fr;padding:9px 14px;background:var(--code-bg-2);color:var(--py-blue-glow);font-weight:700;font-size:.68rem;text-transform:uppercase;">Op · Kaam · Matlab</div>
  <div style="display:grid;grid-template-columns:60px 1fr 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">=</span><span style="color:var(--text-soft);">Value do</span><span style="color:var(--code-string);">x = 5</span></div>
  <div style="display:grid;grid-template-columns:60px 1fr 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">+=</span><span style="color:var(--text-soft);">Add karo</span><span style="color:var(--code-string);">x = x + 3</span></div>
  <div style="display:grid;grid-template-columns:60px 1fr 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">-=</span><span style="color:var(--text-soft);">Minus karo</span><span style="color:var(--code-string);">x = x - 3</span></div>
  <div style="display:grid;grid-template-columns:60px 1fr 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">*=</span><span style="color:var(--text-soft);">Multiply karo</span><span style="color:var(--code-string);">x = x * 3</span></div>
  <div style="display:grid;grid-template-columns:60px 1fr 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">/=</span><span style="color:var(--text-soft);">Divide karo</span><span style="color:var(--code-string);">x = x / 3</span></div>
</div>

<div style="background:linear-gradient(135deg,rgba(75,139,190,.1),rgba(75,139,190,.03));border:1px solid rgba(75,139,190,.25);border-left:3px solid var(--py-blue);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--text);display:block;margin-bottom:3px;">💡 Shortcut</strong>
<code>x = x + 5</code> aur <code>x += 5</code> same hain — bas chhota tareeqa.
</div>

<div style="background:linear-gradient(135deg,rgba(16,185,129,.1),rgba(16,185,129,.02));border:1px solid rgba(16,185,129,.25);border-left:3px solid var(--py-green);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--py-green-glow);display:block;margin-bottom:5px;font-family:var(--mono);font-size:.7rem;text-transform:uppercase;">⚠️ Common Mistake</strong>
<code>x =+ 5</code> likhna (galat order) — <code>x += 5</code> likhna tha. <code>=+</code> koi operator nahi hai.
</div>`,
        en: `<h2 style="font-size:1.15rem;font-weight:800;margin-bottom:14px;">📝 Assignment Operators</h2>
<p style="color:var(--text-soft);font-size:.93rem;margin-bottom:14px;">These make it easier to <strong>assign</strong> or <strong>update</strong> a variable.</p>

<div style="background:var(--code-bg);border:1px solid var(--code-border);border-radius:10px;overflow:hidden;margin-bottom:16px;font-family:var(--mono);font-size:.82rem;">
  <div style="display:grid;grid-template-columns:60px 1fr 1fr;padding:9px 14px;background:var(--code-bg-2);color:var(--py-blue-glow);font-weight:700;font-size:.68rem;text-transform:uppercase;">Op · Does · Meaning</div>
  <div style="display:grid;grid-template-columns:60px 1fr 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">=</span><span style="color:var(--text-soft);">Assign</span><span style="color:var(--code-string);">x = 5</span></div>
  <div style="display:grid;grid-template-columns:60px 1fr 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">+=</span><span style="color:var(--text-soft);">Add to</span><span style="color:var(--code-string);">x = x + 3</span></div>
  <div style="display:grid;grid-template-columns:60px 1fr 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">-=</span><span style="color:var(--text-soft);">Subtract</span><span style="color:var(--code-string);">x = x - 3</span></div>
  <div style="display:grid;grid-template-columns:60px 1fr 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">*=</span><span style="color:var(--text-soft);">Multiply</span><span style="color:var(--code-string);">x = x * 3</span></div>
  <div style="display:grid;grid-template-columns:60px 1fr 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">/=</span><span style="color:var(--text-soft);">Divide</span><span style="color:var(--code-string);">x = x / 3</span></div>
</div>

<div style="background:linear-gradient(135deg,rgba(75,139,190,.1),rgba(75,139,190,.03));border:1px solid rgba(75,139,190,.25);border-left:3px solid var(--py-blue);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--text);display:block;margin-bottom:3px;">💡 Shortcut</strong>
<code>x = x + 5</code> and <code>x += 5</code> are same.
</div>

<div style="background:linear-gradient(135deg,rgba(16,185,129,.1),rgba(16,185,129,.02));border:1px solid rgba(16,185,129,.25);border-left:3px solid var(--py-green);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--py-green-glow);display:block;margin-bottom:5px;font-family:var(--mono);font-size:.7rem;text-transform:uppercase;">⚠️ Common Mistake</strong>
Writing <code>x =+ 5</code> (wrong order) — should be <code>x += 5</code>. <code>=+</code> is not an operator.
</div>`
      },
      theory: {
        ur: `<h3>Yeh kya hai?</h3>
<p>Assignment operators variable ki <strong>value set</strong> ya <strong>update</strong> karne ke liye. Sirf <code>=</code> hi nahi, kuch <strong>shortcut</strong> bhi hain jo code chhota karte hain.</p>

<h3>Kaise kaam karta hai?</h3>
<p><code>x += 5</code> ka matlab hai <code>x = x + 5</code> — yani x mein 5 add karke wapas x mein store karo.</p>

<h3>Saare operators</h3>
<table class="theory-table">
<div class="row head"><div>Operator</div><div>Kaam</div></div>
<div class="row"><div class="label">=</div><div class="value">Value assign — <code>x = 5</code></div></div>
<div class="row"><div class="label">+=</div><div class="value"><code>x = x + 3</code></div></div>
<div class="row"><div class="label">-=</div><div class="value"><code>x = x - 3</code></div></div>
<div class="row"><div class="label">*=</div><div class="value"><code>x = x * 3</code></div></div>
<div class="row"><div class="label">/=</div><div class="value"><code>x = x / 3</code></div></div>
<div class="row"><div class="label">//=</div><div class="value"><code>x = x // 3</code></div></div>
<div class="row"><div class="label">%=</div><div class="value"><code>x = x % 3</code></div></div>
<div class="row"><div class="label">**=</div><div class="value"><code>x = x ** 3</code></div></div>
</table>

<div class="real-life">
<div class="head">🌍 Real Life Example</div>
<p><strong>Scenario:</strong> Game mein score track karna.</p>
<pre style="margin-top:10px;margin-bottom:0;">score = <span class="num">0</span>
score += <span class="num">10</span>   <span class="cm"># level 1</span>
score += <span class="num">25</span>   <span class="cm"># level 2</span>
score += <span class="num">15</span>   <span class="cm"># bonus</span>
<span class="fn">print</span>(<span class="str">"Final:"</span>, score)   <span class="cm"># 50</span></pre>
</div>

<div class="warn-box">
<div class="head">⚠️ Bara Confusion</div>
<p><strong><code>x += 5</code> aur <code>x =+ 5</code> alag hain!</strong><br>
<code>x += 5</code> → x mein 5 jama (sahi)<br>
<code>x =+ 5</code> → x ko +5 assign (galat)</p>
</div>

<div class="pro-tip">
<div class="head">✨ Pro Tip</div>
<p>Strings pe bhi: <code>name = "Hello"; name += " World"</code> → <code>"Hello World"</code>. Lists: <code>nums += [3,4]</code>.</p>
</div>`,
        en: `<h3>What is it?</h3>
<p>Assignment operators <strong>set or update</strong> a variable. Not just <code>=</code>, but <strong>shortcuts</strong> that shorten code.</p>

<h3>How does it work?</h3>
<p><code>x += 5</code> means <code>x = x + 5</code> — add 5 to x, store back.</p>

<h3>All operators</h3>
<table class="theory-table">
<div class="row head"><div>Operator</div><div>Does</div></div>
<div class="row"><div class="label">=</div><div class="value">Assign — <code>x = 5</code></div></div>
<div class="row"><div class="label">+=</div><div class="value"><code>x = x + 3</code></div></div>
<div class="row"><div class="label">-=</div><div class="value"><code>x = x - 3</code></div></div>
<div class="row"><div class="label">*=</div><div class="value"><code>x = x * 3</code></div></div>
<div class="row"><div class="label">/=</div><div class="value"><code>x = x / 3</code></div></div>
<div class="row"><div class="label">//=</div><div class="value"><code>x = x // 3</code></div></div>
<div class="row"><div class="label">%=</div><div class="value"><code>x = x % 3</code></div></div>
<div class="row"><div class="label">**=</div><div class="value"><code>x = x ** 3</code></div></div>
</table>

<div class="real-life">
<div class="head">🌍 Real Life Example</div>
<p><strong>Scenario:</strong> Tracking game score.</p>
<pre style="margin-top:10px;margin-bottom:0;">score = <span class="num">0</span>
score += <span class="num">10</span>
score += <span class="num">25</span>
score += <span class="num">15</span>
<span class="fn">print</span>(<span class="str">"Final:"</span>, score)   <span class="cm"># 50</span></pre>
</div>

<div class="warn-box">
<div class="head">⚠️ Big Confusion</div>
<p><strong><code>x += 5</code> vs <code>x =+ 5</code>:</strong><br>
<code>x += 5</code> → add 5 (correct)<br>
<code>x =+ 5</code> → assign +5 (wrong)</p>
</div>

<div class="pro-tip">
<div class="head">✨ Pro Tip</div>
<p>Also works on strings: <code>name += " World"</code>. On lists: <code>nums += [3,4]</code>.</p>
</div>`
      },
      quiz: [
        { q: { ur: "x = 10, x += 5 → x kitna?", en: "x = 10, x += 5 → x?" }, options: ["5", "10", "15", "105"], answer: 2 },
        { q: { ur: "x = x + 5 ka shortcut?", en: "Shortcut for x = x + 5?" }, options: ["x == 5", "x += 5", "x =+ 5", "x - 5"], answer: 1 },
        { q: { ur: "x = 20, x -= 5 → x?", en: "x = 20, x -= 5 → x?" }, options: ["25", "15", "5", "-5"], answer: 1 },
        { q: { ur: "x = 4, x *= 3 → x?", en: "x = 4, x *= 3 → x?" }, options: ["7", "12", "4", "3"], answer: 1 },
        { q: { ur: "x =+ 5 ka matlab?", en: "What does x =+ 5 mean?" }, options: ["Same as x += 5", "Just x = +5, no add", "Error", "Same as x -= 5"], answer: 1 }
      ]
    }

  ]
};