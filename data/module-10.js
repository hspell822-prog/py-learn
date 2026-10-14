// data/module-10.js
// Module 10: Intermediate Concepts — 4 topics

window.MODULES = window.MODULES || {};

window.MODULES["module-10"] = {
  id: "module-10",
  number: 10,
  slug: "intermediate-concepts",
  title: { ur: "Intermediate Concepts", en: "Intermediate Concepts" },
  description: {
    ur: "Comprehensions, Generators, Decorators, Context Managers",
    en: "Comprehensions, Generators, Decorators, Context Managers"
  },
  duration: "20 minutes",
  level: "Advanced",
  locked: true,

  topics: [

    /* ═══════════════════════════════════════════════════════
       TOPIC 1: Comprehensions
       ═══════════════════════════════════════════════════════ */
    {
      id: "comprehensions",
      title: { ur: "Comprehensions", en: "Comprehensions" },
      icon: "⚡",
      code: {
        ur: `# List comprehension
squares = [x**2 for x in range(5)]
print(squares)   # [0, 1, 4, 9, 16]

# Condition ke saath
evens = [x for x in range(10) if x % 2 == 0]
print(evens)     # [0, 2, 4, 6, 8]

# Dict comprehension
square_dict = {x: x**2 for x in range(4)}
print(square_dict)   # {0: 0, 1: 1, 2: 4, 3: 9}

# Set comprehension
unique_lengths = {len(w) for w in ["hi", "hello", "hey"]}
print(unique_lengths)   # {2, 5, 3}

# Nested
matrix = [[i*j for j in range(3)] for i in range(3)]`,
        en: `# List comprehension
squares = [x**2 for x in range(5)]
print(squares)   # [0, 1, 4, 9, 16]

# With condition
evens = [x for x in range(10) if x % 2 == 0]
print(evens)     # [0, 2, 4, 6, 8]

# Dict comprehension
square_dict = {x: x**2 for x in range(4)}
print(square_dict)   # {0: 0, 1: 1, 2: 4, 3: 9}

# Set comprehension
unique_lengths = {len(w) for w in ["hi", "hello", "hey"]}
print(unique_lengths)   # {2, 5, 3}

# Nested
matrix = [[i*j for j in range(3)] for i in range(3)]`
      },
      learn: {
        ur: `<h2 style="font-size:1.15rem;font-weight:800;margin-bottom:14px;">⚡ Comprehensions</h2>
<p style="color:var(--text-soft);font-size:.93rem;margin-bottom:14px;">Comprehension ek <strong>chhota, tez tareeqa</strong> hai list/dict/set banane ka — loop aur condition ek line mein.</p>

<div style="background:var(--code-bg);border:1px solid var(--code-border);border-radius:10px;overflow:hidden;margin-bottom:16px;font-family:var(--mono);font-size:.82rem;">
  <div style="display:grid;grid-template-columns:160px 1fr;padding:9px 14px;background:var(--code-bg-2);color:var(--py-blue-glow);font-weight:700;font-size:.68rem;text-transform:uppercase;">Type · Syntax</div>
  <div style="display:grid;grid-template-columns:160px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">List</span><span style="color:var(--text-soft);">[expr for x in iter]</span></div>
  <div style="display:grid;grid-template-columns:160px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">Dict</span><span style="color:var(--text-soft);">{k: v for x in iter}</span></div>
  <div style="display:grid;grid-template-columns:160px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">Set</span><span style="color:var(--text-soft);">{expr for x in iter}</span></div>
</div>

<div style="background:linear-gradient(135deg,rgba(75,139,190,.1),rgba(75,139,190,.03));border:1px solid rgba(75,139,190,.25);border-left:3px solid var(--py-blue);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--text);display:block;margin-bottom:3px;">💡 Kyun</strong>
4-5 lines ka loop <strong>1 line</strong> mein — aur tez bhi.
</div>

<div style="background:linear-gradient(135deg,rgba(16,185,129,.1),rgba(16,185,129,.02));border:1px solid rgba(16,185,129,.25);border-left:3px solid var(--py-green);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--py-green-glow);display:block;margin-bottom:5px;font-family:var(--mono);font-size:.7rem;text-transform:uppercase;">⚠️ Common Mistake</strong>
Comprehension ko <strong>bohat complex</strong> bana dena — readability kharab. Simple rakho.
</div>`,
        en: `<h2 style="font-size:1.15rem;font-weight:800;margin-bottom:14px;">⚡ Comprehensions</h2>
<p style="color:var(--text-soft);font-size:.93rem;margin-bottom:14px;">A comprehension is a <strong>short, fast way</strong> to build list/dict/set — loop and condition in one line.</p>

<div style="background:var(--code-bg);border:1px solid var(--code-border);border-radius:10px;overflow:hidden;margin-bottom:16px;font-family:var(--mono);font-size:.82rem;">
  <div style="display:grid;grid-template-columns:160px 1fr;padding:9px 14px;background:var(--code-bg-2);color:var(--py-blue-glow);font-weight:700;font-size:.68rem;text-transform:uppercase;">Type · Syntax</div>
  <div style="display:grid;grid-template-columns:160px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">List</span><span style="color:var(--text-soft);">[expr for x in iter]</span></div>
  <div style="display:grid;grid-template-columns:160px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">Dict</span><span style="color:var(--text-soft);">{k: v for x in iter}</span></div>
  <div style="display:grid;grid-template-columns:160px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">Set</span><span style="color:var(--text-soft);">{expr for x in iter}</span></div>
</div>

<div style="background:linear-gradient(135deg,rgba(75,139,190,.1),rgba(75,139,190,.03));border:1px solid rgba(75,139,190,.25);border-left:3px solid var(--py-blue);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--text);display:block;margin-bottom:3px;">💡 Why</strong>
4-5 line loop → <strong>1 line</strong>, and faster.
</div>

<div style="background:linear-gradient(135deg,rgba(16,185,129,.1),rgba(16,185,129,.02));border:1px solid rgba(16,185,129,.25);border-left:3px solid var(--py-green);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--py-green-glow);display:block;margin-bottom:5px;font-family:var(--mono);font-size:.7rem;text-transform:uppercase;">⚠️ Common Mistake</strong>
Making comprehension <strong>too complex</strong> — hurts readability.
</div>`
      },
      theory: {
        ur: `<h3>Yeh kya hai?</h3>
<p>Comprehension ek <strong>shorthand</strong> hai list/dict/set banane ka — loop aur condition ko ek compact syntax mein.</p>

<h3>Kaise kaam karta hai?</h3>
<div class="steps">
<ol>
<li><strong>Step 1:</strong> <code>[expr for item in iterable]</code> likho</li>
<li><strong>Step 2:</strong> Har item pe expr calculate hota</li>
<li><strong>Step 3:</strong> Result naye list mein collect hota</li>
<li><strong>Step 4:</strong> <code>if condition</code> se filter lagao</li>
<li><strong>Step 5:</strong> Nested loops bhi ho sakte hain</li>
</ol>
</div>

<h3>Loop vs Comprehension</h3>
<pre><span class="cm"># Purana tareeqa</span>
squares = []
<span class="kw">for</span> x <span class="kw">in</span> <span class="fn">range</span>(<span class="num">5</span>):
    squares.append(x**<span class="num">2</span>)

<span class="cm"># Comprehension</span>
squares = [x**<span class="num">2</span> <span class="kw">for</span> x <span class="kw">in</span> <span class="fn">range</span>(<span class="num">5</span>)]</pre>

<h3>List comprehension</h3>
<pre>[x**<span class="num">2</span> <span class="kw">for</span> x <span class="kw">in</span> <span class="fn">range</span>(<span class="num">5</span>)]           <span class="cm"># [0, 1, 4, 9, 16]</span>
[x <span class="kw">for</span> x <span class="kw">in</span> <span class="fn">range</span>(<span class="num">10</span>) <span class="kw">if</span> x % <span class="num">2</span> == <span class="num">0</span>]  <span class="cm"># [0, 2, 4, 6, 8]</span>
[x.upper() <span class="kw">for</span> x <span class="kw">in</span> [<span class="str">"a"</span>, <span class="str">"b"</span>]]       <span class="cm"># ['A', 'B']</span></pre>

<h3>Condition — if/else</h3>
<pre>[<span class="str">"Even"</span> <span class="kw">if</span> x % <span class="num">2</span> == <span class="num">0</span> <span class="kw">else</span> <span class="str">"Odd"</span> <span class="kw">for</span> x <span class="kw">in</span> <span class="fn">range</span>(<span class="num">5</span>)]
<span class="cm"># ['Even', 'Odd', 'Even', 'Odd', 'Even']</span></pre>

<h3>Dict comprehension</h3>
<pre>{x: x**<span class="num">2</span> <span class="kw">for</span> x <span class="kw">in</span> <span class="fn">range</span>(<span class="num">4</span>)}
<span class="cm"># {0: 0, 1: 1, 2: 4, 3: 9}</span>

<span class="cm"># Existing dict se</span>
prices = {<span class="str">"apple"</span>: <span class="num">100</span>, <span class="str">"banana"</span>: <span class="num">50</span>}
doubled = {k: v*<span class="num">2</span> <span class="kw">for</span> k, v <span class="kw">in</span> prices.items()}
<span class="cm"># {'apple': 200, 'banana': 100}</span></pre>

<h3>Set comprehension</h3>
<pre>{len(w) <span class="kw">for</span> w <span class="kw">in</span> [<span class="str">"hi"</span>, <span class="str">"hello"</span>, <span class="str">"hey"</span>]}
<span class="cm"># {2, 5, 3}</span></pre>

<h3>Nested comprehension</h3>
<pre>matrix = [[i*j <span class="kw">for</span> j <span class="kw">in</span> <span class="fn">range</span>(<span class="num">3</span>)] <span class="kw">for</span> i <span class="kw">in</span> <span class="fn">range</span>(<span class="num">3</span>)]
<span class="cm"># [[0,0,0], [0,1,2], [0,2,4]]</span>

<span class="cm"># Flatten nested list</span>
flat = [x <span class="kw">for</span> row <span class="kw">in</span> matrix <span class="kw">for</span> x <span class="kw">in</span> row]</pre>

<div class="real-life">
<div class="head">🌍 Real Life Example</div>
<p><strong>Scenario:</strong> Students ke marks filter karna.</p>
<pre style="margin-top:10px;margin-bottom:0;">students = [
    {<span class="str">"name"</span>: <span class="str">"Ali"</span>, <span class="str">"marks"</span>: <span class="num">85</span>},
    {<span class="str">"name"</span>: <span class="str">"Sara"</span>, <span class="str">"marks"</span>: <span class="num">92</span>},
    {<span class="str">"name"</span>: <span class="str">"Ahmed"</span>, <span class="str">"marks"</span>: <span class="num">45</span>}
]

top = [s[<span class="str">"name"</span>] <span class="kw">for</span> s <span class="kw">in</span> students <span class="kw">if</span> s[<span class="str">"marks"</span>] >= <span class="num">80</span>]
<span class="fn">print</span>(top)   <span class="cm"># ['Ali', 'Sara']</span></pre>
</div>

<div class="warn-box">
<div class="head">⚠️ Common Mistakes</div>
<ul>
<li>Bohat complex comprehension — loop behtar</li>
<li>Side effects (print) comprehension mein — avoid</li>
<li>Bari lists mein memory issue — generator use karo</li>
</ul>
</div>

<div class="pro-tip">
<div class="head">✨ Pro Tip</div>
<p>Rule of thumb: agar comprehension <strong>2 se zyada for</strong> ya <strong>2 se zyada if</strong> rakhne parhe — normal loop likho.</p>
</div>`,
        en: `<h3>What is it?</h3>
<p>A <strong>shorthand</strong> to build list/dict/set — loop and condition in compact syntax.</p>

<h3>How does it work?</h3>
<div class="steps">
<ol>
<li><strong>Step 1:</strong> Write <code>[expr for item in iterable]</code></li>
<li><strong>Step 2:</strong> Compute expr per item</li>
<li><strong>Step 3:</strong> Collect into new list</li>
<li><strong>Step 4:</strong> Add <code>if condition</code> to filter</li>
<li><strong>Step 5:</strong> Nested loops allowed</li>
</ol>
</div>

<h3>Loop vs Comprehension</h3>
<pre><span class="cm"># Old</span>
squares = []
<span class="kw">for</span> x <span class="kw">in</span> <span class="fn">range</span>(<span class="num">5</span>):
    squares.append(x**<span class="num">2</span>)

<span class="cm"># Comprehension</span>
squares = [x**<span class="num">2</span> <span class="kw">for</span> x <span class="kw">in</span> <span class="fn">range</span>(<span class="num">5</span>)]</pre>

<h3>List comprehension</h3>
<pre>[x**<span class="num">2</span> <span class="kw">for</span> x <span class="kw">in</span> <span class="fn">range</span>(<span class="num">5</span>)]           <span class="cm"># [0, 1, 4, 9, 16]</span>
[x <span class="kw">for</span> x <span class="kw">in</span> <span class="fn">range</span>(<span class="num">10</span>) <span class="kw">if</span> x % <span class="num">2</span> == <span class="num">0</span>]  <span class="cm"># [0, 2, 4, 6, 8]</span></pre>

<h3>if/else</h3>
<pre>[<span class="str">"Even"</span> <span class="kw">if</span> x % <span class="num">2</span> == <span class="num">0</span> <span class="kw">else</span> <span class="str">"Odd"</span> <span class="kw">for</span> x <span class="kw">in</span> <span class="fn">range</span>(<span class="num">5</span>)]</pre>

<h3>Dict comprehension</h3>
<pre>{x: x**<span class="num">2</span> <span class="kw">for</span> x <span class="kw">in</span> <span class="fn">range</span>(<span class="num">4</span>)}
<span class="cm"># {0: 0, 1: 1, 2: 4, 3: 9}</span></pre>

<h3>Set comprehension</h3>
<pre>{len(w) <span class="kw">for</span> w <span class="kw">in</span> [<span class="str">"hi"</span>, <span class="str">"hello"</span>]}
<span class="cm"># {2, 5}</span></pre>

<h3>Nested</h3>
<pre>matrix = [[i*j <span class="kw">for</span> j <span class="kw">in</span> <span class="fn">range</span>(<span class="num">3</span>)] <span class="kw">for</span> i <span class="kw">in</span> <span class="fn">range</span>(<span class="num">3</span>)]</pre>

<div class="real-life">
<div class="head">🌍 Real Life Example</div>
<pre style="margin-top:10px;margin-bottom:0;">top = [s[<span class="str">"name"</span>] <span class="kw">for</span> s <span class="kw">in</span> students <span class="kw">if</span> s[<span class="str">"marks"</span>] >= <span class="num">80</span>]</pre>
</div>

<div class="warn-box">
<div class="head">⚠️ Common Mistakes</div>
<ul>
<li>Overly complex comprehension</li>
<li>Side effects (print) inside</li>
<li>Large lists — memory issue, use generators</li>
</ul>
</div>

<div class="pro-tip">
<div class="head">✨ Pro Tip</div>
<p>Rule: if you need <strong>>2 for</strong> or <strong>>2 if</strong> — write a normal loop.</p>
</div>`
      },
      quiz: [
        { q: { ur: "List comprehension syntax?", en: "List comprehension syntax?" }, options: ["(x for x)", "[x for x in iter]", "{x for x}", "for x: x"], answer: 1 },
        { q: { ur: "[x*2 for x in range(3)]?", en: "[x*2 for x in range(3)]?" }, options: ["[0,1,2]", "[0,2,4]", "[2,4,6]", "[1,2,3]"], answer: 1 },
        { q: { ur: "Filter kaise?", en: "How to filter?" }, options: ["where x", "if x", "filter x", "when x"], answer: 1 },
        { q: { ur: "Dict comprehension syntax?", en: "Dict comprehension syntax?" }, options: ["[k: v]", "{k: v for}", "(k: v)", "{k, v}"], answer: 1 },
        { q: { ur: "Comprehension ka faida?", en: "Benefit of comprehension?" }, options: ["Lamba", "Chhota aur tez", "Slow", "No benefit"], answer: 1 }
      ]
    },

    /* ═══════════════════════════════════════════════════════
       TOPIC 2: Generators
       ═══════════════════════════════════════════════════════ */
    {
      id: "generators",
      title: { ur: "Generators", en: "Generators" },
      icon: "🔄",
      code: {
        ur: `# Generator function — yield use karta
def count_up(n):
    for i in range(n):
        yield i

gen = count_up(5)
print(next(gen))   # 0
print(next(gen))   # 1

# Loop mein
for num in count_up(3):
    print(num)     # 0 1 2

# Generator expression (like list comp, but lazy)
squares = (x**2 for x in range(5))
print(next(squares))   # 0`,
        en: `# Generator function — uses yield
def count_up(n):
    for i in range(n):
        yield i

gen = count_up(5)
print(next(gen))   # 0
print(next(gen))   # 1

# In loop
for num in count_up(3):
    print(num)     # 0 1 2

# Generator expression (like list comp, but lazy)
squares = (x**2 for x in range(5))
print(next(squares))   # 0`
      },
      learn: {
        ur: `<h2 style="font-size:1.15rem;font-weight:800;margin-bottom:14px;">🔄 Generators</h2>
<p style="color:var(--text-soft);font-size:.93rem;margin-bottom:14px;">Generator ek <strong>lazy iterator</strong> hai — values ek ek karke <strong>on-demand</strong> deta hai, sab kuch memory mein nahi rakhta.</p>

<div style="background:var(--code-bg);border:1px solid var(--code-border);border-radius:10px;overflow:hidden;margin-bottom:16px;font-family:var(--mono);font-size:.82rem;">
  <div style="display:grid;grid-template-columns:160px 1fr;padding:9px 14px;background:var(--code-bg-2);color:var(--py-blue-glow);font-weight:700;font-size:.68rem;text-transform:uppercase;">Keyword · Kaam</div>
  <div style="display:grid;grid-template-columns:160px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">yield</span><span style="color:var(--text-soft);">Value return karo, pause ho jao</span></div>
  <div style="display:grid;grid-template-columns:160px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">next()</span><span style="color:var(--text-soft);">Agli value lo</span></div>
  <div style="display:grid;grid-template-columns:160px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">(...)</span><span style="color:var(--text-soft);">Generator expression</span></div>
</div>

<div style="background:linear-gradient(135deg,rgba(75,139,190,.1),rgba(75,139,190,.03));border:1px solid rgba(75,139,190,.25);border-left:3px solid var(--py-blue);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--text);display:block;margin-bottom:3px;">💡 Kyun</strong>
<strong>1 crore numbers</strong> ka list = memory full. Generator = sirf ek value ek waqt.
</div>

<div style="background:linear-gradient(135deg,rgba(16,185,129,.1),rgba(16,185,129,.02));border:1px solid rgba(16,185,129,.25);border-left:3px solid var(--py-green);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--py-green-glow);display:block;margin-bottom:5px;font-family:var(--mono);font-size:.7rem;text-transform:uppercase;">⚠️ Common Mistake</strong>
Generator ko dobara iterate karna — ek dafa chal jata hai, phir khatam.
</div>`,
        en: `<h2 style="font-size:1.15rem;font-weight:800;margin-bottom:14px;">🔄 Generators</h2>
<p style="color:var(--text-soft);font-size:.93rem;margin-bottom:14px;">A generator is a <strong>lazy iterator</strong> — gives values one by one <strong>on-demand</strong>, doesn't hold everything in memory.</p>

<div style="background:var(--code-bg);border:1px solid var(--code-border);border-radius:10px;overflow:hidden;margin-bottom:16px;font-family:var(--mono);font-size:.82rem;">
  <div style="display:grid;grid-template-columns:160px 1fr;padding:9px 14px;background:var(--code-bg-2);color:var(--py-blue-glow);font-weight:700;font-size:.68rem;text-transform:uppercase;">Keyword · Does</div>
  <div style="display:grid;grid-template-columns:160px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">yield</span><span style="color:var(--text-soft);">Return value, pause</span></div>
  <div style="display:grid;grid-template-columns:160px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">next()</span><span style="color:var(--text-soft);">Get next value</span></div>
  <div style="display:grid;grid-template-columns:160px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">(...)</span><span style="color:var(--text-soft);">Generator expression</span></div>
</div>

<div style="background:linear-gradient(135deg,rgba(75,139,190,.1),rgba(75,139,190,.03));border:1px solid rgba(75,139,190,.25);border-left:3px solid var(--py-blue);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--text);display:block;margin-bottom:3px;">💡 Why</strong>
<strong>10 million numbers</strong> as list = memory full. Generator = one value at a time.
</div>

<div style="background:linear-gradient(135deg,rgba(16,185,129,.1),rgba(16,185,129,.02));border:1px solid rgba(16,185,129,.25);border-left:3px solid var(--py-green);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--py-green-glow);display:block;margin-bottom:5px;font-family:var(--mono);font-size:.7rem;text-transform:uppercase;">⚠️ Common Mistake</strong>
Iterating a generator twice — runs once, then exhausted.
</div>`
      },
      theory: {
        ur: `<h3>Yeh kya hai?</h3>
<p>Generator ek aisa function hai jo <code>yield</code> use karta hai. Har <code>yield</code> pe function <strong>pause</strong> ho jata hai, agli dafa wahi se chalta hai. Sab values ek saath memory mein nahi.</p>

<h3>Kaise kaam karta hai?</h3>
<div class="steps">
<ol>
<li><strong>Step 1:</strong> <code>yield</code> wala function normal lagta hai</li>
<li><strong>Step 2:</strong> Call karne pe <strong>turant nahi chalta</strong> — generator object milta</li>
<li><strong>Step 3:</strong> <code>next()</code> pe pehla value deta hai, phir pause</li>
<li><strong>Step 4:</strong> Dobara <code>next()</code> pe wahi se resume</li>
<li><strong>Step 5:</strong> End pe <code>StopIteration</code></li>
</ol>
</div>

<h3>Basic generator</h3>
<pre><span class="kw">def</span> <span class="fn">count_up</span>(n):
    <span class="kw">for</span> i <span class="kw">in</span> <span class="fn">range</span>(n):
        <span class="kw">yield</span> i

gen = <span class="fn">count_up</span>(<span class="num">3</span>)
<span class="fn">print</span>(<span class="fn">next</span>(gen))   <span class="cm"># 0</span>
<span class="fn">print</span>(<span class="fn">next</span>(gen))   <span class="cm"># 1</span>
<span class="fn">print</span>(<span class="fn">next</span>(gen))   <span class="cm"># 2</span>
<span class="cm"># next(gen)  → StopIteration</span></pre>

<h3>For loop mein</h3>
<pre><span class="kw">for</span> num <span class="kw">in</span> <span class="fn">count_up</span>(<span class="num">3</span>):
    <span class="fn">print</span>(num)   <span class="cm"># 0 1 2</span></pre>

<h3>Generator vs List</h3>
<pre><span class="cm"># List — sab memory mein</span>
nums = [x**<span class="num">2</span> <span class="kw">for</span> x <span class="kw">in</span> <span class="fn">range</span>(<span class="num">1000000</span>)]   <span class="cm"># bhari</span>

<span class="cm"># Generator — ek ek value</span>
nums = (x**<span class="num">2</span> <span class="kw">for</span> x <span class="kw">in</span> <span class="fn">range</span>(<span class="num">1000000</span>))   <span class="cm"># halka</span></pre>

<h3>Infinite generator</h3>
<pre><span class="kw">def</span> <span class="fn">infinite</span>():
    n = <span class="num">0</span>
    <span class="kw">while</span> <span class="kw">True</span>:
        <span class="kw">yield</span> n
        n += <span class="num">1</span>

gen = <span class="fn">infinite</span>()
<span class="kw">for</span> _ <span class="kw">in</span> <span class="fn">range</span>(<span class="num">5</span>):
    <span class="fn">print</span>(<span class="fn">next</span>(gen))   <span class="cm"># 0 1 2 3 4</span></pre>

<h3>Generator expression</h3>
<pre><span class="cm"># List comp — [...]</span>
squares_list = [x**<span class="num">2</span> <span class="kw">for</span> x <span class="kw">in</span> <span class="fn">range</span>(<span class="num">5</span>)]

<span class="cm"># Generator — (...)</span>
squares_gen = (x**<span class="num">2</span> <span class="kw">for</span> x <span class="kw">in</span> <span class="fn">range</span>(<span class="num">5</span>))

<span class="fn">print</span>(<span class="fn">sum</span>(squares_gen))   <span class="cm"># 30 — memory efficient</span></pre>

<div class="real-life">
<div class="head">🌍 Real Life Example</div>
<p><strong>Scenario:</strong> Bari file line-by-line padhna.</p>
<pre style="margin-top:10px;margin-bottom:0;"><span class="kw">def</span> <span class="fn">read_lines</span>(path):
    <span class="kw">with</span> <span class="fn">open</span>(path) <span class="kw">as</span> f:
        <span class="kw">for</span> line <span class="kw">in</span> f:
            <span class="kw">yield</span> line.strip()

<span class="kw">for</span> line <span class="kw">in</span> <span class="fn">read_lines</span>(<span class="str">"huge.log"</span>):
    <span class="kw">if</span> <span class="str">"ERROR"</span> <span class="kw">in</span> line:
        <span class="fn">print</span>(line)
<span class="cm"># Poori file memory mein nahi aayi!</span></pre>
</div>

<div class="warn-box">
<div class="head">⚠️ Common Mistakes</div>
<ul>
<li>Generator ko list ki tarah index karna — <code>gen[0]</code> error</li>
<li><code>len(gen)</code> — error, generators ka length nahi</li>
<li>Do dafa iterate karna — doosri dafa khali</li>
</ul>
</div>

<div class="pro-tip">
<div class="head">✨ Pro Tip</div>
<p>Bari data ke liye <strong>hamesha generator</strong> prefer karo. Chhoti lists ke liye comprehension theek hai.</p>
</div>`,
        en: `<h3>What is it?</h3>
<p>A generator is a function using <code>yield</code>. On each <code>yield</code>, the function <strong>pauses</strong>, resumes next time. Values aren't all in memory.</p>

<h3>How does it work?</h3>
<div class="steps">
<ol>
<li><strong>Step 1:</strong> Function with <code>yield</code> looks normal</li>
<li><strong>Step 2:</strong> Calling it <strong>doesn't run</strong> — returns generator object</li>
<li><strong>Step 3:</strong> <code>next()</code> gives first value, then pauses</li>
<li><strong>Step 4:</strong> Next <code>next()</code> resumes</li>
<li><strong>Step 5:</strong> Ends with <code>StopIteration</code></li>
</ol>
</div>

<h3>Basic generator</h3>
<pre><span class="kw">def</span> <span class="fn">count_up</span>(n):
    <span class="kw">for</span> i <span class="kw">in</span> <span class="fn">range</span>(n):
        <span class="kw">yield</span> i

gen = <span class="fn">count_up</span>(<span class="num">3</span>)
<span class="fn">next</span>(gen)   <span class="cm"># 0</span>
<span class="fn">next</span>(gen)   <span class="cm"># 1</span></pre>

<h3>In for loop</h3>
<pre><span class="kw">for</span> num <span class="kw">in</span> <span class="fn">count_up</span>(<span class="num">3</span>):
    <span class="fn">print</span>(num)</pre>

<h3>Generator vs List</h3>
<pre>[x**<span class="num">2</span> <span class="kw">for</span> x <span class="kw">in</span> <span class="fn">range</span>(<span class="num">1000000</span>)]   <span class="cm"># heavy</span>
(x**<span class="num">2</span> <span class="kw">for</span> x <span class="kw">in</span> <span class="fn">range</span>(<span class="num">1000000</span>))   <span class="cm"># light</span></pre>

<h3>Infinite generator</h3>
<pre><span class="kw">def</span> <span class="fn">infinite</span>():
    n = <span class="num">0</span>
    <span class="kw">while</span> <span class="kw">True</span>:
        <span class="kw">yield</span> n
        n += <span class="num">1</span></pre>

<h3>Generator expression</h3>
<pre>squares_gen = (x**<span class="num">2</span> <span class="kw">for</span> x <span class="kw">in</span> <span class="fn">range</span>(<span class="num">5</span>))
<span class="fn">sum</span>(squares_gen)   <span class="cm"># 30 — memory efficient</span></pre>

<div class="real-life">
<div class="head">🌍 Real Life Example</div>
<pre style="margin-top:10px;margin-bottom:0;"><span class="kw">def</span> <span class="fn">read_lines</span>(path):
    <span class="kw">with</span> <span class="fn">open</span>(path) <span class="kw">as</span> f:
        <span class="kw">for</span> line <span class="kw">in</span> f:
            <span class="kw">yield</span> line.strip()</pre>
</div>

<div class="warn-box">
<div class="head">⚠️ Common Mistakes</div>
<ul>
<li>Indexing a generator — <code>gen[0]</code> errors</li>
<li><code>len(gen)</code> — errors</li>
<li>Iterating twice — empty second time</li>
</ul>
</div>

<div class="pro-tip">
<div class="head">✨ Pro Tip</div>
<p>For big data — prefer <strong>generators</strong>. Small lists — comprehension is fine.</p>
</div>`
      },
      quiz: [
        { q: { ur: "Generator kaunsa keyword?", en: "Generator keyword?" }, options: ["return", "yield", "emit", "give"], answer: 1 },
        { q: { ur: "Generator ka faida?", en: "Generator benefit?" }, options: ["Faster", "Memory efficient", "Less code", "No benefit"], answer: 1 },
        { q: { ur: "next() ka kaam?", en: "What does next() do?" }, options: ["Reset", "Next value", "Delete", "Skip"], answer: 1 },
        { q: { ur: "Generator dobara iterate?", en: "Iterate generator twice?" }, options: ["Works", "Empty second time", "Error", "Doubles"], answer: 1 },
        { q: { ur: "Generator expression syntax?", en: "Generator expression syntax?" }, options: ["[x for x]", "{x for x}", "(x for x)", "<x for x>"], answer: 2 }
      ]
    },

    /* ═══════════════════════════════════════════════════════
       TOPIC 3: Decorators
       ═══════════════════════════════════════════════════════ */
    {
      id: "decorators",
      title: { ur: "Decorators", en: "Decorators" },
      icon: "🎁",
      code: {
        ur: `# Decorator — function ko wrap karta hai
def logger(func):
    def wrapper(*args, **kwargs):
        print(f"Calling {func.__name__}...")
        result = func(*args, **kwargs)
        print(f"Done: {result}")
        return result
    return wrapper

@logger
def add(a, b):
    return a + b

add(2, 3)
# Calling add...
# Done: 5

# @timer, @login_required, @cache — sab decorators`,
        en: `# Decorator — wraps a function
def logger(func):
    def wrapper(*args, **kwargs):
        print(f"Calling {func.__name__}...")
        result = func(*args, **kwargs)
        print(f"Done: {result}")
        return result
    return wrapper

@logger
def add(a, b):
    return a + b

add(2, 3)
# Calling add...
# Done: 5

# @timer, @login_required, @cache — all decorators`
      },
      learn: {
        ur: `<h2 style="font-size:1.15rem;font-weight:800;margin-bottom:14px;">🎁 Decorators</h2>
<p style="color:var(--text-soft);font-size:.93rem;margin-bottom:14px;">Decorator ek function hai jo <strong>doosre function ko wrap</strong> karta hai — bina uska code badle extra kaam add karta hai.</p>

<div style="background:var(--code-bg);border:1px solid var(--code-border);border-radius:10px;overflow:hidden;margin-bottom:16px;font-family:var(--mono);font-size:.82rem;">
  <div style="display:grid;grid-template-columns:160px 1fr;padding:9px 14px;background:var(--code-bg-2);color:var(--py-blue-glow);font-weight:700;font-size:.68rem;text-transform:uppercase;">Part · Kaam</div>
  <div style="display:grid;grid-template-columns:160px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">@decorator</span><span style="color:var(--text-soft);">Syntax shortcut</span></div>
  <div style="display:grid;grid-template-columns:160px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">wrapper</span><span style="color:var(--text-soft);">Andar ka function</span></div>
  <div style="display:grid;grid-template-columns:160px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">*args/**kwargs</span><span style="color:var(--text-soft);">Koi bhi arguments</span></div>
</div>

<div style="background:linear-gradient(135deg,rgba(75,139,190,.1),rgba(75,139,190,.03));border:1px solid rgba(75,139,190,.25);border-left:3px solid var(--py-blue);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--text);display:block;margin-bottom:3px;">💡 Kyun</strong>
Logging, timing, authentication, caching — sab functions ko <strong>baar baar nahi likhna</strong>.
</div>

<div style="background:linear-gradient(135deg,rgba(16,185,129,.1),rgba(16,185,129,.02));border:1px solid rgba(16,185,129,.25);border-left:3px solid var(--py-green);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--py-green-glow);display:block;margin-bottom:5px;font-family:var(--mono);font-size:.7rem;text-transform:uppercase;">⚠️ Common Mistake</strong>
<code>@functools.wraps(func)</code> bhoolna — wrapper function ka naam/metadata kho jata.
</div>`,
        en: `<h2 style="font-size:1.15rem;font-weight:800;margin-bottom:14px;">🎁 Decorators</h2>
<p style="color:var(--text-soft);font-size:.93rem;margin-bottom:14px;">A decorator is a function that <strong>wraps another function</strong> — adds extra work without changing its code.</p>

<div style="background:var(--code-bg);border:1px solid var(--code-border);border-radius:10px;overflow:hidden;margin-bottom:16px;font-family:var(--mono);font-size:.82rem;">
  <div style="display:grid;grid-template-columns:160px 1fr;padding:9px 14px;background:var(--code-bg-2);color:var(--py-blue-glow);font-weight:700;font-size:.68rem;text-transform:uppercase;">Part · Does</div>
  <div style="display:grid;grid-template-columns:160px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">@decorator</span><span style="color:var(--text-soft);">Syntax shortcut</span></div>
  <div style="display:grid;grid-template-columns:160px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">wrapper</span><span style="color:var(--text-soft);">Inner function</span></div>
  <div style="display:grid;grid-template-columns:160px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">*args/**kwargs</span><span style="color:var(--text-soft);">Any arguments</span></div>
</div>

<div style="background:linear-gradient(135deg,rgba(75,139,190,.1),rgba(75,139,190,.03));border:1px solid rgba(75,139,190,.25);border-left:3px solid var(--py-blue);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--text);display:block;margin-bottom:3px;">💡 Why</strong>
Logging, timing, auth, caching — no need to repeat in every function.
</div>

<div style="background:linear-gradient(135deg,rgba(16,185,129,.1),rgba(16,185,129,.02));border:1px solid rgba(16,185,129,.25);border-left:3px solid var(--py-green);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--py-green-glow);display:block;margin-bottom:5px;font-family:var(--mono);font-size:.7rem;text-transform:uppercase;">⚠️ Common Mistake</strong>
Forgetting <code>@functools.wraps(func)</code> — loses name/metadata.
</div>`
      },
      theory: {
        ur: `<h3>Yeh kya hai?</h3>
<p>Decorator ek <strong>higher-order function</strong> hai jo kisi function ko leta hai, uska behaviour modify karta hai, aur naya function return karta hai. <code>@decorator</code> syntax shortcut hai.</p>

<h3>Kaise kaam karta hai?</h3>
<div class="steps">
<ol>
<li><strong>Step 1:</strong> <code>def my_decorator(func):</code> banao</li>
<li><strong>Step 2:</strong> Andar <code>def wrapper(*args, **kwargs):</code> likho</li>
<li><strong>Step 3:</strong> Wrapper mein extra kaam + <code>func(*args)</code> call</li>
<li><strong>Step 4:</strong> <code>return wrapper</code></li>
<li><strong>Step 5:</strong> Function ke upar <code>@my_decorator</code> likho</li>
</ol>
</div>

<h3>Basic decorator</h3>
<pre><span class="kw">def</span> <span class="fn">logger</span>(func):
    <span class="kw">def</span> <span class="fn">wrapper</span>(*args, **kwargs):
        <span class="fn">print</span>(<span class="str">f"Calling {func.__name__}"</span>)
        result = <span class="fn">func</span>(*args, **kwargs)
        <span class="fn">print</span>(<span class="str">f"Done: {result}"</span>)
        <span class="kw">return</span> result
    <span class="kw">return</span> wrapper

<span class="nd">@logger</span>
<span class="kw">def</span> <span class="fn">add</span>(a, b):
    <span class="kw">return</span> a + b

<span class="fn">add</span>(<span class="num">2</span>, <span class="num">3</span>)
<span class="cm"># Calling add</span>
<span class="cm"># Done: 5</span></pre>

<h3>functools.wraps — best practice</h3>
<pre><span class="kw">import</span> functools

<span class="kw">def</span> <span class="fn">logger</span>(func):
    <span class="nd">@functools.wraps(func)</span>
    <span class="kw">def</span> <span class="fn">wrapper</span>(*args, **kwargs):
        <span class="fn">print</span>(<span class="str">f"Calling {func.__name__}"</span>)
        <span class="kw">return</span> <span class="fn">func</span>(*args, **kwargs)
    <span class="kw">return</span> wrapper</pre>

<h3>Timer decorator</h3>
<pre><span class="kw">import</span> time

<span class="kw">def</span> <span class="fn">timer</span>(func):
    <span class="nd">@functools.wraps(func)</span>
    <span class="kw">def</span> <span class="fn">wrapper</span>(*args, **kwargs):
        start = time.time()
        result = <span class="fn">func</span>(*args, **kwargs)
        elapsed = time.time() - start
        <span class="fn">print</span>(<span class="str">f"{func.__name__}: {elapsed:.4f}s"</span>)
        <span class="kw">return</span> result
    <span class="kw">return</span> wrapper

<span class="nd">@timer</span>
<span class="kw">def</span> <span class="fn">slow</span>():
    time.sleep(<span class="num">1</span>)

<span class="fn">slow</span>()   <span class="cm"># slow: 1.0002s</span></pre>

<h3>Arguments wale decorator</h3>
<pre><span class="kw">def</span> <span class="fn">repeat</span>(times):
    <span class="kw">def</span> <span class="fn">decorator</span>(func):
        <span class="kw">def</span> <span class="fn">wrapper</span>(*args, **kwargs):
            <span class="kw">for</span> _ <span class="kw">in</span> <span class="fn">range</span>(times):
                result = <span class="fn">func</span>(*args, **kwargs)
            <span class="kw">return</span> result
        <span class="kw">return</span> wrapper
    <span class="kw">return</span> decorator

<span class="nd">@repeat(3)</span>
<span class="kw">def</span> <span class="fn">hello</span>():
    <span class="fn">print</span>(<span class="str">"Hi!"</span>)

<span class="fn">hello</span>()   <span class="cm"># Hi! Hi! Hi!</span></pre>

<h3>Multiple decorators</h3>
<pre><span class="nd">@logger</span>
<span class="nd">@timer</span>
<span class="kw">def</span> <span class="fn">process</span>():
    <span class="kw">pass</span>

<span class="cm"># Process: logger(timer(process))</span></pre>

<div class="real-life">
<div class="head">🌍 Real Life Example</div>
<p><strong>Scenario:</strong> Login required check.</p>
<pre style="margin-top:10px;margin-bottom:0;"><span class="kw">def</span> <span class="fn">login_required</span>(func):
    <span class="nd">@functools.wraps(func)</span>
    <span class="kw">def</span> <span class="fn">wrapper</span>(user, *args, **kwargs):
        <span class="kw">if</span> <span class="kw">not</span> user.get(<span class="str">"logged_in"</span>):
            <span class="fn">print</span>(<span class="str">"Pehle login karo!"</span>)
            <span class="kw">return</span>
        <span class="kw">return</span> <span class="fn">func</span>(user, *args, **kwargs)
    <span class="kw">return</span> wrapper

<span class="nd">@login_required</span>
<span class="kw">def</span> <span class="fn">dashboard</span>(user):
    <span class="fn">print</span>(<span class="str">f"Welcome {user['name']}!"</span>)

dashboard({<span class="str">"name"</span>: <span class="str">"Ali"</span>, <span class="str">"logged_in"</span>: <span class="kw">False</span>})   <span class="cm"># Pehle login karo!</span></pre>
</div>

<div class="warn-box">
<div class="head">⚠️ Common Mistakes</div>
<ul>
<li><code>*args, **kwargs</code> bhoolna — function args ke saath fail</li>
<li><code>@functools.wraps</code> na lagana</li>
<li>Wrapper mein <code>func</code> call na karna — original kabhi nahi chalta</li>
</ul>
</div>

<div class="pro-tip">
<div class="head">✨ Pro Tip</div>
<p>Built-in decorators yaad rakho: <code>@staticmethod</code>, <code>@classmethod</code>, <code>@property</code> — yeh bhi decorators hain!</p>
</div>`,
        en: `<h3>What is it?</h3>
<p>A decorator is a <strong>higher-order function</strong> that takes a function, modifies behavior, returns new function. <code>@decorator</code> is syntax sugar.</p>

<h3>How does it work?</h3>
<div class="steps">
<ol>
<li><strong>Step 1:</strong> Create <code>def my_decorator(func):</code></li>
<li><strong>Step 2:</strong> Inside, write <code>def wrapper(*args, **kwargs):</code></li>
<li><strong>Step 3:</strong> Extra work + <code>func(*args)</code> call</li>
<li><strong>Step 4:</strong> <code>return wrapper</code></li>
<li><strong>Step 5:</strong> Add <code>@my_decorator</code> above function</li>
</ol>
</div>

<h3>Basic decorator</h3>
<pre><span class="kw">def</span> <span class="fn">logger</span>(func):
    <span class="kw">def</span> <span class="fn">wrapper</span>(*args, **kwargs):
        <span class="fn">print</span>(<span class="str">f"Calling {func.__name__}"</span>)
        result = <span class="fn">func</span>(*args, **kwargs)
        <span class="kw">return</span> result
    <span class="kw">return</span> wrapper

<span class="nd">@logger</span>
<span class="kw">def</span> <span class="fn">add</span>(a, b):
    <span class="kw">return</span> a + b</pre>

<h3>functools.wraps</h3>
<pre><span class="kw">import</span> functools

<span class="kw">def</span> <span class="fn">logger</span>(func):
    <span class="nd">@functools.wraps(func)</span>
    <span class="kw">def</span> <span class="fn">wrapper</span>(*args, **kwargs):
        <span class="kw">return</span> <span class="fn">func</span>(*args, **kwargs)
    <span class="kw">return</span> wrapper</pre>

<h3>Timer decorator</h3>
<pre><span class="kw">import</span> time

<span class="kw">def</span> <span class="fn">timer</span>(func):
    <span class="kw">def</span> <span class="fn">wrapper</span>(*args, **kwargs):
        start = time.time()
        result = <span class="fn">func</span>(*args, **kwargs)
        <span class="fn">print</span>(<span class="str">f"{time.time() - start:.4f}s"</span>)
        <span class="kw">return</span> result
    <span class="kw">return</span> wrapper</pre>

<h3>Arguments decorator</h3>
<pre><span class="kw">def</span> <span class="fn">repeat</span>(times):
    <span class="kw">def</span> <span class="fn">decorator</span>(func):
        <span class="kw">def</span> <span class="fn">wrapper</span>(*args, **kwargs):
            <span class="kw">for</span> _ <span class="kw">in</span> <span class="fn">range</span>(times):
                <span class="fn">func</span>(*args, **kwargs)
        <span class="kw">return</span> wrapper
    <span class="kw">return</span> decorator</pre>

<div class="real-life">
<div class="head">🌍 Real Life Example</div>
<pre style="margin-top:10px;margin-bottom:0;"><span class="kw">def</span> <span class="fn">login_required</span>(func):
    <span class="kw">def</span> <span class="fn">wrapper</span>(user, *args, **kwargs):
        <span class="kw">if</span> <span class="kw">not</span> user.get(<span class="str">"logged_in"</span>):
            <span class="fn">print</span>(<span class="str">"Login first!"</span>)
            <span class="kw">return</span>
        <span class="kw">return</span> <span class="fn">func</span>(user, *args, **kwargs)
    <span class="kw">return</span> wrapper</pre>
</div>

<div class="warn-box">
<div class="head">⚠️ Common Mistakes</div>
<ul>
<li>Forgetting <code>*args, **kwargs</code></li>
<li>Missing <code>@functools.wraps</code></li>
<li>Not calling <code>func</code> inside wrapper</li>
</ul>
</div>

<div class="pro-tip">
<div class="head">✨ Pro Tip</div>
<p>Built-in decorators: <code>@staticmethod</code>, <code>@classmethod</code>, <code>@property</code> — all decorators!</p>
</div>`
      },
      quiz: [
        { q: { ur: "Decorator kya hai?", en: "What is a decorator?" }, options: ["Class", "Function wrapping function", "Variable", "Module"], answer: 1 },
        { q: { ur: "@ symbol ka matlab?", en: "@ symbol means?" }, options: ["Comment", "Decorator apply", "Error", "Import"], answer: 1 },
        { q: { ur: "functools.wraps kyun?", en: "Why functools.wraps?" }, options: ["Faster", "Preserve func metadata", "Security", "No reason"], answer: 1 },
        { q: { ur: "*args/**kwargs kyun?", en: "Why *args/**kwargs?" }, options: ["Speed", "Any arguments pass", "No args", "Types"], answer: 1 },
        { q: { ur: "@staticmethod kaunsa hai?", en: "@staticmethod is?" }, options: ["Class", "Function", "Decorator", "Module"], answer: 2 }
      ]
    },

    /* ═══════════════════════════════════════════════════════
       TOPIC 4: Context Managers
       ═══════════════════════════════════════════════════════ */
    {
      id: "context-managers",
      title: { ur: "Context Managers", en: "Context Managers" },
      icon: "🔑",
      code: {
        ur: `# with statement — file handling ka best tareeqa
with open("data.txt", "w") as f:
    f.write("Hello")

# Custom context manager
class Timer:
    def __enter__(self):
        import time
        self.start = time.time()
        return self

    def __exit__(self, exc_type, exc_val, tb):
        import time
        print(f"Elapsed: {time.time() - self.start:.2f}s")

with Timer():
    sum(range(1000000))`,
        en: `# with statement — best for file handling
with open("data.txt", "w") as f:
    f.write("Hello")

# Custom context manager
class Timer:
    def __enter__(self):
        import time
        self.start = time.time()
        return self

    def __exit__(self, exc_type, exc_val, tb):
        import time
        print(f"Elapsed: {time.time() - self.start:.2f}s")

with Timer():
    sum(range(1000000))`
      },
      learn: {
        ur: `<h2 style="font-size:1.15rem;font-weight:800;margin-bottom:14px;">🔑 Context Managers</h2>
<p style="color:var(--text-soft);font-size:.93rem;margin-bottom:14px;">Context manager <code>with</code> block ke saath kaam karta hai — <strong>setup</strong> aur <strong>cleanup</strong> automatically.</p>

<div style="background:var(--code-bg);border:1px solid var(--code-border);border-radius:10px;overflow:hidden;margin-bottom:16px;font-family:var(--mono);font-size:.82rem;">
  <div style="display:grid;grid-template-columns:180px 1fr;padding:9px 14px;background:var(--code-bg-2);color:var(--py-blue-glow);font-weight:700;font-size:.68rem;text-transform:uppercase;">Method · Kab chalta</div>
  <div style="display:grid;grid-template-columns:180px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">__enter__</span><span style="color:var(--text-soft);">with ke shuru mein</span></div>
  <div style="display:grid;grid-template-columns:180px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">__exit__</span><span style="color:var(--text-soft);">with ke end pe (error bhi)</span></div>
  <div style="display:grid;grid-template-columns:180px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">with</span><span style="color:var(--text-soft);">Statement</span></div>
</div>

<div style="background:linear-gradient(135deg,rgba(75,139,190,.1),rgba(75,139,190,.03));border:1px solid rgba(75,139,190,.25);border-left:3px solid var(--py-blue);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--text);display:block;margin-bottom:3px;">💡 Kyun</strong>
File close, lock release, connection band — <strong>cleanup guaranteed</strong>, error pe bhi.
</div>

<div style="background:linear-gradient(135deg,rgba(16,185,129,.1),rgba(16,185,129,.02));border:1px solid rgba(16,185,129,.25);border-left:3px solid var(--py-green);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--py-green-glow);display:block;margin-bottom:5px;font-family:var(--mono);font-size:.7rem;text-transform:uppercase;">⚠️ Common Mistake</strong>
<code>__exit__</code> mein exception suppress karna — bugs chhupe rehte hain.
</div>`,
        en: `<h2 style="font-size:1.15rem;font-weight:800;margin-bottom:14px;">🔑 Context Managers</h2>
<p style="color:var(--text-soft);font-size:.93rem;margin-bottom:14px;">A context manager works with the <code>with</code> block — <strong>setup</strong> and <strong>cleanup</strong> automatically.</p>

<div style="background:var(--code-bg);border:1px solid var(--code-border);border-radius:10px;overflow:hidden;margin-bottom:16px;font-family:var(--mono);font-size:.82rem;">
  <div style="display:grid;grid-template-columns:180px 1fr;padding:9px 14px;background:var(--code-bg-2);color:var(--py-blue-glow);font-weight:700;font-size:.68rem;text-transform:uppercase;">Method · When</div>
  <div style="display:grid;grid-template-columns:180px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">__enter__</span><span style="color:var(--text-soft);">Start of with</span></div>
  <div style="display:grid;grid-template-columns:180px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">__exit__</span><span style="color:var(--text-soft);">End (even on error)</span></div>
  <div style="display:grid;grid-template-columns:180px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">with</span><span style="color:var(--text-soft);">Statement</span></div>
</div>

<div style="background:linear-gradient(135deg,rgba(75,139,190,.1),rgba(75,139,190,.03));border:1px solid rgba(75,139,190,.25);border-left:3px solid var(--py-blue);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--text);display:block;margin-bottom:3px;">💡 Why</strong>
Close file, release lock, close connection — <strong>cleanup guaranteed</strong>.
</div>

<div style="background:linear-gradient(135deg,rgba(16,185,129,.1),rgba(16,185,129,.02));border:1px solid rgba(16,185,129,.25);border-left:3px solid var(--py-green);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--py-green-glow);display:block;margin-bottom:5px;font-family:var(--mono);font-size:.7rem;text-transform:uppercase;">⚠️ Common Mistake</strong>
Suppressing exceptions in <code>__exit__</code> — bugs hidden.
</div>`
      },
      theory: {
        ur: `<h3>Yeh kya hai?</h3>
<p>Context manager ek protocol hai: <code>__enter__</code> (setup) aur <code>__exit__</code> (cleanup). <code>with</code> statement dono ko automatically handle karta hai.</p>

<h3>Kaise kaam karta hai?</h3>
<div class="steps">
<ol>
<li><strong>Step 1:</strong> <code>with Manager() as m:</code> likho</li>
<li><strong>Step 2:</strong> Python <code>__enter__()</code> call karta hai</li>
<li><strong>Step 3:</strong> <code>__enter__</code> ka return <code>m</code> mein store hota</li>
<li><strong>Step 4:</strong> Block chalta hai</li>
<li><strong>Step 5:</strong> Block ke baad <code>__exit__</code> chalta (error pe bhi)</li>
</ol>
</div>

<h3>Built-in — file handling</h3>
<pre><span class="kw">with</span> <span class="fn">open</span>(<span class="str">"data.txt"</span>) <span class="kw">as</span> f:
    content = f.read()
<span class="cm"># File automatically close</span></pre>

<h3>Custom context manager class</h3>
<pre><span class="kw">class</span> <span class="fn">Timer</span>:
    <span class="kw">def</span> <span class="fn">__enter__</span>(self):
        <span class="kw">import</span> time
        self.start = time.time()
        <span class="kw">return</span> self

    <span class="kw">def</span> <span class="fn">__exit__</span>(self, exc_type, exc_val, tb):
        <span class="kw">import</span> time
        elapsed = time.time() - self.start
        <span class="fn">print</span>(<span class="str">f"Elapsed: {elapsed:.2f}s"</span>)

<span class="kw">with</span> <span class="fn">Timer</span>():
    <span class="fn">sum</span>(<span class="fn">range</span>(<span class="num">1000000</span>))
<span class="cm"># Elapsed: 0.02s</span></pre>

<h3>@contextmanager — decorator tareeqa</h3>
<pre><span class="kw">from</span> contextlib <span class="kw">import</span> contextmanager

<span class="nd">@contextmanager</span>
<span class="kw">def</span> <span class="fn">timer</span>():
    <span class="kw">import</span> time
    start = time.time()
    <span class="kw">yield</span>               <span class="cm"># ← with block yahan chalta</span>
    <span class="fn">print</span>(<span class="str">f"Elapsed: {time.time()-start:.2f}s"</span>)

<span class="kw">with</span> <span class="fn">timer</span>():
    <span class="fn">sum</span>(<span class="fn">range</span>(<span class="num">1000000</span>))</pre>

<h3>Database connection example</h3>
<pre><span class="kw">class</span> <span class="fn">DBConnection</span>:
    <span class="kw">def</span> <span class="fn">__enter__</span>(self):
        <span class="fn">print</span>(<span class="str">"Connecting..."</span>)
        <span class="kw">return</span> self

    <span class="kw">def</span> <span class="fn">query</span>(self, sql):
        <span class="fn">print</span>(<span class="str">f"Running: {sql}"</span>)

    <span class="kw">def</span> <span class="fn">__exit__</span>(self, *args):
        <span class="fn">print</span>(<span class="str">"Closing connection"</span>)

<span class="kw">with</span> <span class="fn">DBConnection</span>() <span class="kw">as</span> db:
    db.query(<span class="str">"SELECT * FROM users"</span>)
<span class="cm"># Connecting...</span>
<span class="cm"># Running: SELECT * FROM users</span>
<span class="cm"># Closing connection</span></pre>

<h3>__exit__ ke parameters</h3>
<pre><span class="kw">def</span> <span class="fn">__exit__</span>(self, exc_type, exc_val, tb):
    <span class="cm"># exc_type: error type (ya None)</span>
    <span class="cm"># exc_val: error value</span>
    <span class="cm"># tb: traceback</span>
    <span class="kw">if</span> exc_type:
        <span class="fn">print</span>(<span class="str">"Error hua!"</span>)
    <span class="kw">return</span> <span class="kw">False</span>   <span class="cm"># False = error propagate karo</span></pre>

<div class="real-life">
<div class="head">🌍 Real Life Example</div>
<p><strong>Scenario:</strong> File operation with backup.</p>
<pre style="margin-top:10px;margin-bottom:0;"><span class="nd">@contextmanager</span>
<span class="kw">def</span> <span class="fn">safe_write</span>(path):
    <span class="kw">try</span>:
        f = <span class="fn">open</span>(path, <span class="str">"w"</span>)
        <span class="kw">yield</span> f
    <span class="kw">finally</span>:
        f.close()
        <span class="fn">print</span>(<span class="str">"File closed"</span>)

<span class="kw">with</span> <span class="fn">safe_write</span>(<span class="str">"notes.txt"</span>) <span class="kw">as</span> f:
    f.write(<span class="str">"Hello"</span>)</pre>
</div>

<div class="warn-box">
<div class="head">⚠️ Common Mistakes</div>
<ul>
<li><code>__exit__</code> mein galat return — <code>True</code> exception suppress, <code>False</code> propagate</li>
<li><code>with</code> block se bahar resource use karna</li>
<li>Context manager banate waqt cleanup bhoolna</li>
</ul>
</div>

<div class="pro-tip">
<div class="head">✨ Pro Tip</div>
<p>Simple cases ke liye <code>@contextmanager</code> decorator use karo — class banane se aasan. Complex state wale cases ke liye class behtar.</p>
</div>`,
        en: `<h3>What is it?</h3>
<p>A context manager is a protocol: <code>__enter__</code> (setup) and <code>__exit__</code> (cleanup). <code>with</code> handles both automatically.</p>

<h3>How does it work?</h3>
<div class="steps">
<ol>
<li><strong>Step 1:</strong> <code>with Manager() as m:</code></li>
<li><strong>Step 2:</strong> Python calls <code>__enter__()</code></li>
<li><strong>Step 3:</strong> Return value stored in <code>m</code></li>
<li><strong>Step 4:</strong> Block runs</li>
<li><strong>Step 5:</strong> <code>__exit__</code> runs (even on error)</li>
</ol>
</div>

<h3>Built-in — file handling</h3>
<pre><span class="kw">with</span> <span class="fn">open</span>(<span class="str">"data.txt"</span>) <span class="kw">as</span> f:
    content = f.read()
<span class="cm"># Auto close</span></pre>

<h3>Custom class</h3>
<pre><span class="kw">class</span> <span class="fn">Timer</span>:
    <span class="kw">def</span> <span class="fn">__enter__</span>(self):
        <span class="kw">import</span> time
        self.start = time.time()
        <span class="kw">return</span> self

    <span class="kw">def</span> <span class="fn">__exit__</span>(self, *args):
        <span class="kw">import</span> time
        <span class="fn">print</span>(<span class="str">f"{time.time() - self.start:.2f}s"</span>)</pre>

<h3>@contextmanager decorator</h3>
<pre><span class="kw">from</span> contextlib <span class="kw">import</span> contextmanager

<span class="nd">@contextmanager</span>
<span class="kw">def</span> <span class="fn">timer</span>():
    <span class="kw">import</span> time
    start = time.time()
    <span class="kw">yield</span>
    <span class="fn">print</span>(<span class="str">f"Elapsed: {time.time()-start:.2f}s"</span>)</pre>

<h3>DB connection</h3>
<pre><span class="kw">with</span> <span class="fn">DBConnection</span>() <span class="kw">as</span> db:
    db.query(<span class="str">"SELECT * FROM users"</span>)
<span class="cm"># Auto close</span></pre>

<div class="real-life">
<div class="head">🌍 Real Life Example</div>
<pre style="margin-top:10px;margin-bottom:0;"><span class="nd">@contextmanager</span>
<span class="kw">def</span> <span class="fn">safe_write</span>(path):
    <span class="kw">try</span>:
        f = <span class="fn">open</span>(path, <span class="str">"w"</span>)
        <span class="kw">yield</span> f
    <span class="kw">finally</span>:
        f.close()</pre>
</div>

<div class="warn-box">
<div class="head">⚠️ Common Mistakes</div>
<ul>
<li>Wrong return in <code>__exit__</code></li>
<li>Using resource after <code>with</code> block</li>
<li>Forgetting cleanup</li>
</ul>
</div>

<div class="pro-tip">
<div class="head">✨ Pro Tip</div>
<p>Simple cases → <code>@contextmanager</code>. Complex → class.</p>
</div>`
      },
      quiz: [
        { q: { ur: "Context manager setup ke liye?", en: "Setup method?" }, options: ["__init__", "__enter__", "__setup__", "__start__"], answer: 1 },
        { q: { ur: "Cleanup method?", en: "Cleanup method?" }, options: ["__close__", "__exit__", "__end__", "__del__"], answer: 1 },
        { q: { ur: "with ka faida?", en: "Benefit of with?" }, options: ["Faster", "Auto cleanup", "Less code", "Security"], answer: 1 },
        { q: { ur: "@contextmanager kahan se?", en: "@contextmanager from?" }, options: ["contextlib", "functools", "os", "sys"], answer: 0 },
        { q: { ur: "__exit__ error pe kab chalta?", en: "__exit__ runs on error?" }, options: ["Nahi", "Haan, hamesha", "Sirf error pe", "Kabhi nahi"], answer: 1 }
      ]
    }

  ]
};