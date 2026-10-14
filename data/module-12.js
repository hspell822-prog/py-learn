// data/module-12.js
// Module 12: Mini Projects — 5 topics

window.MODULES = window.MODULES || {};

window.MODULES["module-12"] = {
  id: "module-12",
  number: 12,
  slug: "mini-projects",
  title: { ur: "Mini Projects", en: "Mini Projects" },
  description: {
    ur: "Calculator, To-Do, Guessing Game, Quiz App, Weather App",
    en: "Calculator, To-Do, Guessing Game, Quiz App, Weather App"
  },
  duration: "30 minutes",
  level: "Advanced",
  locked: true,

  topics: [

    /* ═══════════════════════════════════════════════════════
       TOPIC 1: Calculator
       ═══════════════════════════════════════════════════════ */
    {
      id: "calculator",
      title: { ur: "Calculator", en: "Calculator" },
      icon: "🧮",
      code: {
        ur: `# Simple Calculator
def add(a, b):
    return a + b

def subtract(a, b):
    return a - b

def multiply(a, b):
    return a * b

def divide(a, b):
    if b == 0:
        return "Zero se divide nahi!"
    return a / b

print("1. Add  2. Sub  3. Mul  4. Div")
choice = input("Choice: ")
a = float(input("Pehla number: "))
b = float(input("Doosra number: "))

if choice == "1":
    print("Result:", add(a, b))
elif choice == "2":
    print("Result:", subtract(a, b))
elif choice == "3":
    print("Result:", multiply(a, b))
elif choice == "4":
    print("Result:", divide(a, b))
else:
    print("Ghalat choice!")`,
        en: `# Simple Calculator
def add(a, b):
    return a + b

def subtract(a, b):
    return a - b

def multiply(a, b):
    return a * b

def divide(a, b):
    if b == 0:
        return "Can't divide by zero!"
    return a / b

print("1. Add  2. Sub  3. Mul  4. Div")
choice = input("Choice: ")
a = float(input("First number: "))
b = float(input("Second number: "))

if choice == "1":
    print("Result:", add(a, b))
elif choice == "2":
    print("Result:", subtract(a, b))
elif choice == "3":
    print("Result:", multiply(a, b))
elif choice == "4":
    print("Result:", divide(a, b))
else:
    print("Wrong choice!")`
      },
      learn: {
        ur: `<h2 style="font-size:1.15rem;font-weight:800;margin-bottom:14px;">🧮 Calculator</h2>
<p style="color:var(--text-soft);font-size:.93rem;margin-bottom:14px;">Pehla project — ek <strong>simple calculator</strong>. Functions, input, if/else — sab practice hoga.</p>

<div style="background:var(--code-bg);border:1px solid var(--code-border);border-radius:10px;overflow:hidden;margin-bottom:16px;font-family:var(--mono);font-size:.82rem;">
  <div style="display:grid;grid-template-columns:160px 1fr;padding:9px 14px;background:var(--code-bg-2);color:var(--py-blue-glow);font-weight:700;font-size:.68rem;text-transform:uppercase;">Concept · Use</div>
  <div style="display:grid;grid-template-columns:160px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">Functions</span><span style="color:var(--text-soft);">add, sub, mul, div</span></div>
  <div style="display:grid;grid-template-columns:160px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">Input</span><span style="color:var(--text-soft);">User se numbers</span></div>
  <div style="display:grid;grid-template-columns:160px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">if/elif</span><span style="color:var(--text-soft);">Choice handle</span></div>
  <div style="display:grid;grid-template-columns:160px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">try/except</span><span style="color:var(--text-soft);">Ghalat input</span></div>
</div>

<div style="background:linear-gradient(135deg,rgba(75,139,190,.1),rgba(75,139,190,.03));border:1px solid rgba(75,139,190,.25);border-left:3px solid var(--py-blue);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--text);display:block;margin-bottom:3px;">💡 Kyun yeh project</strong>
Basic building blocks — <strong>functions + input + condition</strong>. Bara project banane se pehle yeh zaroori.
</div>

<div style="background:linear-gradient(135deg,rgba(16,185,129,.1),rgba(16,185,129,.02));border:1px solid rgba(16,185,129,.25);border-left:3px solid var(--py-green);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--py-green-glow);display:block;margin-bottom:5px;font-family:var(--mono);font-size:.7rem;text-transform:uppercase;">⚠️ Common Mistake</strong>
<code>input()</code> hamesha string deta hai — number ke liye <code>int()</code> ya <code>float()</code> lagao.
</div>`,
        en: `<h2 style="font-size:1.15rem;font-weight:800;margin-bottom:14px;">🧮 Calculator</h2>
<p style="color:var(--text-soft);font-size:.93rem;margin-bottom:14px;">First project — a <strong>simple calculator</strong>. Practice functions, input, if/else.</p>

<div style="background:var(--code-bg);border:1px solid var(--code-border);border-radius:10px;overflow:hidden;margin-bottom:16px;font-family:var(--mono);font-size:.82rem;">
  <div style="display:grid;grid-template-columns:160px 1fr;padding:9px 14px;background:var(--code-bg-2);color:var(--py-blue-glow);font-weight:700;font-size:.68rem;text-transform:uppercase;">Concept · Use</div>
  <div style="display:grid;grid-template-columns:160px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">Functions</span><span style="color:var(--text-soft);">add, sub, mul, div</span></div>
  <div style="display:grid;grid-template-columns:160px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">Input</span><span style="color:var(--text-soft);">User numbers</span></div>
  <div style="display:grid;grid-template-columns:160px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">if/elif</span><span style="color:var(--text-soft);">Handle choice</span></div>
  <div style="display:grid;grid-template-columns:160px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">try/except</span><span style="color:var(--text-soft);">Bad input</span></div>
</div>

<div style="background:linear-gradient(135deg,rgba(75,139,190,.1),rgba(75,139,190,.03));border:1px solid rgba(75,139,190,.25);border-left:3px solid var(--py-blue);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--text);display:block;margin-bottom:3px;">💡 Why this project</strong>
Basic building blocks — <strong>functions + input + condition</strong>.
</div>

<div style="background:linear-gradient(135deg,rgba(16,185,129,.1),rgba(16,185,129,.02));border:1px solid rgba(16,185,129,.25);border-left:3px solid var(--py-green);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--py-green-glow);display:block;margin-bottom:5px;font-family:var(--mono);font-size:.7rem;text-transform:uppercase;">⚠️ Common Mistake</strong>
<code>input()</code> always returns string — wrap with <code>int()</code> or <code>float()</code>.
</div>`
      },
      theory: {
        ur: `<h3>Project ka maqsad</h3>
<p>Ek calculator banao jo user se 2 numbers aur operation le, result print kare. Basic concepts sab practice honge.</p>

<h3>Kaise banayein?</h3>
<div class="steps">
<ol>
<li><strong>Step 1:</strong> Har operation ke liye function banao</li>
<li><strong>Step 2:</strong> User se choice puche</li>
<li><strong>Step 3:</strong> 2 numbers input karo (float)</li>
<li><strong>Step 4:</strong> if/elif se operation select karo</li>
<li><strong>Step 5:</strong> Result print karo</li>
</ol>
</div>

<h3>Version 1 — Basic</h3>
<pre><span class="kw">def</span> <span class="fn">add</span>(a, b): <span class="kw">return</span> a + b
<span class="kw">def</span> <span class="fn">sub</span>(a, b): <span class="kw">return</span> a - b
<span class="kw">def</span> <span class="fn">mul</span>(a, b): <span class="kw">return</span> a * b
<span class="kw">def</span> <span class="fn">div</span>(a, b):
    <span class="kw">if</span> b == <span class="num">0</span>: <span class="kw">return</span> <span class="str">"Zero se divide nahi!"</span>
    <span class="kw">return</span> a / b

<span class="fn">print</span>(<span class="str">"1. Add  2. Sub  3. Mul  4. Div"</span>)
choice = <span class="fn">input</span>(<span class="str">"Choice: "</span>)
a = <span class="fn">float</span>(<span class="fn">input</span>(<span class="str">"Pehla: "</span>))
b = <span class="fn">float</span>(<span class="fn">input</span>(<span class="str">"Doosra: "</span>))</pre>

<h3>Version 2 — Loop + error handling</h3>
<pre><span class="kw">while</span> <span class="kw">True</span>:
    <span class="fn">print</span>(<span class="str">"\n1. Add  2. Sub  3. Mul  4. Div  5. Exit"</span>)
    choice = <span class="fn">input</span>(<span class="str">"Choice: "</span>)

    <span class="kw">if</span> choice == <span class="str">"5"</span>:
        <span class="fn">print</span>(<span class="str">"Bye!"</span>)
        <span class="kw">break</span>

    <span class="kw">try</span>:
        a = <span class="fn">float</span>(<span class="fn">input</span>(<span class="str">"Pehla: "</span>))
        b = <span class="fn">float</span>(<span class="fn">input</span>(<span class="str">"Doosra: "</span>))
    <span class="kw">except</span> ValueError:
        <span class="fn">print</span>(<span class="str">"Numbers likho!"</span>)
        <span class="kw">continue</span>

    <span class="kw">if</span> choice == <span class="str">"1"</span>:
        <span class="fn">print</span>(<span class="str">f"= {add(a, b)}"</span>)
    <span class="kw">elif</span> choice == <span class="str">"2"</span>:
        <span class="fn">print</span>(<span class="str">f"= {sub(a, b)}"</span>)
    <span class="kw">elif</span> choice == <span class="str">"3"</span>:
        <span class="fn">print</span>(<span class="str">f"= {mul(a, b)}"</span>)
    <span class="kw">elif</span> choice == <span class="str">"4"</span>:
        <span class="fn">print</span>(<span class="str">f"= {div(a, b)}"</span>)
    <span class="kw">else</span>:
        <span class="fn">print</span>(<span class="str">"Ghalat choice!"</span>)</pre>

<h3>Version 3 — Dict se cleaner</h3>
<pre>ops = {
    <span class="str">"1"</span>: (<span class="str">"+"</span>, <span class="kw">lambda</span> a, b: a + b),
    <span class="str">"2"</span>: (<span class="str">"-"</span>, <span class="kw">lambda</span> a, b: a - b),
    <span class="str">"3"</span>: (<span class="str">"*"</span>, <span class="kw">lambda</span> a, b: a * b),
    <span class="str">"4"</span>: (<span class="str">"/"</span>, <span class="kw">lambda</span> a, b: a/b <span class="kw">if</span> b != <span class="num">0</span> <span class="kw">else</span> <span class="str">"Div by 0"</span>)
}

sym, func = ops[choice]
<span class="fn">print</span>(<span class="str">f"{a} {sym} {b} = {func(a, b)}"</span>)</pre>

<div class="real-life">
<div class="head">🌍 Skills Practiced</div>
<ul>
<li>Functions — har operation alag</li>
<li>Input/Output — user se baat</li>
<li>if/elif — branching</li>
<li>while loop — dobara chalna</li>
<li>try/except — galat input handle</li>
<li>dict — clean structure</li>
</ul>
</div>

<div class="warn-box">
<div class="head">⚠️ Common Mistakes</div>
<ul>
<li><code>float()</code> na lagana — string concatenation ho jati</li>
<li>Zero se divide check na karna</li>
<li>Loop exit ka option na rakhna</li>
</ul>
</div>

<div class="pro-tip">
<div class="head">✨ Pro Tip</div>
<p>Version 3 (dict of lambdas) — <strong>clean aur extensible</strong>. Naya operation add karna sirf ek line. Real projects mein yeh pattern.</p>
</div>`,
        en: `<h3>Project goal</h3>
<p>Build a calculator: user enters 2 numbers and an operation, prints result. Practices basics.</p>

<h3>How to build?</h3>
<div class="steps">
<ol>
<li><strong>Step 1:</strong> One function per operation</li>
<li><strong>Step 2:</strong> Ask user for choice</li>
<li><strong>Step 3:</strong> Input 2 numbers as float</li>
<li><strong>Step 4:</strong> if/elif to pick operation</li>
<li><strong>Step 5:</strong> Print result</li>
</ol>
</div>

<h3>Version 1 — Basic</h3>
<pre><span class="kw">def</span> <span class="fn">add</span>(a, b): <span class="kw">return</span> a + b
<span class="kw">def</span> <span class="fn">sub</span>(a, b): <span class="kw">return</span> a - b
<span class="kw">def</span> <span class="fn">div</span>(a, b):
    <span class="kw">if</span> b == <span class="num">0</span>: <span class="kw">return</span> <span class="str">"Can't divide by 0"</span>
    <span class="kw">return</span> a / b</pre>

<h3>Version 2 — Loop + error handling</h3>
<pre><span class="kw">while</span> <span class="kw">True</span>:
    choice = <span class="fn">input</span>(<span class="str">"Choice: "</span>)
    <span class="kw">if</span> choice == <span class="str">"5"</span>: <span class="kw">break</span>
    <span class="kw">try</span>:
        a = <span class="fn">float</span>(<span class="fn">input</span>(<span class="str">"First: "</span>))
        b = <span class="fn">float</span>(<span class="fn">input</span>(<span class="str">"Second: "</span>))
    <span class="kw">except</span> ValueError:
        <span class="fn">print</span>(<span class="str">"Numbers only!"</span>)
        <span class="kw">continue</span></pre>

<h3>Version 3 — Dict of functions</h3>
<pre>ops = {
    <span class="str">"1"</span>: (<span class="str">"+"</span>, <span class="kw">lambda</span> a, b: a + b),
    <span class="str">"2"</span>: (<span class="str">"-"</span>, <span class="kw">lambda</span> a, b: a - b),
}

sym, func = ops[choice]
<span class="fn">print</span>(<span class="str">f"{a} {sym} {b} = {func(a, b)}"</span>)</pre>

<div class="real-life">
<div class="head">🌍 Skills Practiced</div>
<ul>
<li>Functions</li>
<li>Input/Output</li>
<li>if/elif</li>
<li>While loop</li>
<li>try/except</li>
<li>Dict dispatch</li>
</ul>
</div>

<div class="warn-box">
<div class="head">⚠️ Common Mistakes</div>
<ul>
<li>Missing <code>float()</code> — string concat</li>
<li>No zero-division check</li>
<li>No exit option</li>
</ul>
</div>

<div class="pro-tip">
<div class="head">✨ Pro Tip</div>
<p>Version 3 (dict of lambdas) is <strong>clean & extensible</strong>. Real-world pattern.</p>
</div>`
      },
      quiz: [
        { q: { ur: "Calculator mein input ka type?", en: "Input type in calculator?" }, options: ["int auto", "string (convert karo)", "float auto", "number"], answer: 1 },
        { q: { ur: "Divide by zero?", en: "Divide by zero?" }, options: ["Result 0", "Error check lagao", "Ignore", "Auto-fix"], answer: 1 },
        { q: { ur: "Loop exit ka option kyun?", en: "Why exit option?" }, options: ["Fast", "User quit kar sake", "No reason", "Error"], answer: 1 },
        { q: { ur: "Clean structure ke liye?", en: "Clean structure?" }, options: ["Many ifs", "Dict of lambdas", "Global vars", "Nested loops"], answer: 1 },
        { q: { ur: "try/except kab?", en: "When try/except?" }, options: ["Always", "Galat input ke liye", "Never", "Only files"], answer: 1 }
      ]
    },

    /* ═══════════════════════════════════════════════════════
       TOPIC 2: To-Do List App
       ═══════════════════════════════════════════════════════ */
    {
      id: "todo-app",
      title: { ur: "To-Do List App", en: "To-Do List App" },
      icon: "📝",
      code: {
        ur: `import json

FILE = "tasks.json"

def load():
    try:
        with open(FILE) as f:
            return json.load(f)
    except FileNotFoundError:
        return []

def save(tasks):
    with open(FILE, "w") as f:
        json.dump(tasks, f, indent=2)

def add(task):
    tasks = load()
    tasks.append({"task": task, "done": False})
    save(tasks)
    print(f"Added: {task}")

def show():
    tasks = load()
    for i, t in enumerate(tasks, 1):
        mark = "✓" if t["done"] else " "
        print(f"{i}. [{mark}] {t['task']}")

def complete(i):
    tasks = load()
    if 0 < i <= len(tasks):
        tasks[i-1]["done"] = True
        save(tasks)
        print("Done!")

# Use
add("Python seekhna")
add("Project banana")
show()
complete(1)
show()`,
        en: `import json

FILE = "tasks.json"

def load():
    try:
        with open(FILE) as f:
            return json.load(f)
    except FileNotFoundError:
        return []

def save(tasks):
    with open(FILE, "w") as f:
        json.dump(tasks, f, indent=2)

def add(task):
    tasks = load()
    tasks.append({"task": task, "done": False})
    save(tasks)
    print(f"Added: {task}")

def show():
    tasks = load()
    for i, t in enumerate(tasks, 1):
        mark = "✓" if t["done"] else " "
        print(f"{i}. [{mark}] {t['task']}")

def complete(i):
    tasks = load()
    if 0 < i <= len(tasks):
        tasks[i-1]["done"] = True
        save(tasks)
        print("Done!")

# Use
add("Learn Python")
add("Build project")
show()
complete(1)
show()`
      },
      learn: {
        ur: `<h2 style="font-size:1.15rem;font-weight:800;margin-bottom:14px;">📝 To-Do List App</h2>
<p style="color:var(--text-soft);font-size:.93rem;margin-bottom:14px;">Doosra project — <strong>persistent To-Do list</strong>. JSON files se data save aur load hoga — band karne pe bhi bacha rahe.</p>

<div style="background:var(--code-bg);border:1px solid var(--code-border);border-radius:10px;overflow:hidden;margin-bottom:16px;font-family:var(--mono);font-size:.82rem;">
  <div style="display:grid;grid-template-columns:160px 1fr;padding:9px 14px;background:var(--code-bg-2);color:var(--py-blue-glow);font-weight:700;font-size:.68rem;text-transform:uppercase;">Concept · Use</div>
  <div style="display:grid;grid-template-columns:160px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">JSON</span><span style="color:var(--text-soft);">Save/load tasks</span></div>
  <div style="display:grid;grid-template-columns:160px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">Functions</span><span style="color:var(--text-soft);">CRUD operations</span></div>
  <div style="display:grid;grid-template-columns:160px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">List of dicts</span><span style="color:var(--text-soft);">Data model</span></div>
  <div style="display:grid;grid-template-columns:160px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">try/except</span><span style="color:var(--text-soft);">File missing handle</span></div>
</div>

<div style="background:linear-gradient(135deg,rgba(75,139,190,.1),rgba(75,139,190,.03));border:1px solid rgba(75,139,190,.25);border-left:3px solid var(--py-blue);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--text);display:block;margin-bottom:3px;">💡 Kyun yeh project</strong>
<strong>Real-world app</strong> — data save karna, load karna, update karna. Poora CRUD pattern.
</div>

<div style="background:linear-gradient(135deg,rgba(16,185,129,.1),rgba(16,185,129,.02));border:1px solid rgba(16,185,129,.25);border-left:3px solid var(--py-green);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--py-green-glow);display:block;margin-bottom:5px;font-family:var(--mono);font-size:.7rem;text-transform:uppercase;">⚠️ Common Mistake</strong>
Har operation pe save bhoolna — data kho jata hai.
</div>`,
        en: `<h2 style="font-size:1.15rem;font-weight:800;margin-bottom:14px;">📝 To-Do List App</h2>
<p style="color:var(--text-soft);font-size:.93rem;margin-bottom:14px;">Second project — <strong>persistent To-Do list</strong>. Saves to JSON, survives restarts.</p>

<div style="background:var(--code-bg);border:1px solid var(--code-border);border-radius:10px;overflow:hidden;margin-bottom:16px;font-family:var(--mono);font-size:.82rem;">
  <div style="display:grid;grid-template-columns:160px 1fr;padding:9px 14px;background:var(--code-bg-2);color:var(--py-blue-glow);font-weight:700;font-size:.68rem;text-transform:uppercase;">Concept · Use</div>
  <div style="display:grid;grid-template-columns:160px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">JSON</span><span style="color:var(--text-soft);">Save/load tasks</span></div>
  <div style="display:grid;grid-template-columns:160px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">Functions</span><span style="color:var(--text-soft);">CRUD ops</span></div>
  <div style="display:grid;grid-template-columns:160px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">List of dicts</span><span style="color:var(--text-soft);">Data model</span></div>
</div>

<div style="background:linear-gradient(135deg,rgba(75,139,190,.1),rgba(75,139,190,.03));border:1px solid rgba(75,139,190,.25);border-left:3px solid var(--py-blue);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--text);display:block;margin-bottom:3px;">💡 Why this project</strong>
<strong>Real app</strong> — save, load, update. Full CRUD pattern.
</div>

<div style="background:linear-gradient(135deg,rgba(16,185,129,.1),rgba(16,185,129,.02));border:1px solid rgba(16,185,129,.25);border-left:3px solid var(--py-green);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--py-green-glow);display:block;margin-bottom:5px;font-family:var(--mono);font-size:.7rem;text-transform:uppercase;">⚠️ Common Mistake</strong>
Forgetting to save after each change — data lost.
</div>`
      },
      theory: {
        ur: `<h3>Project ka maqsad</h3>
<p>Ek To-Do app jo tasks ko JSON mein save kare. Add, show, complete, delete — sab functions ke saath.</p>

<h3>Kaise banayein?</h3>
<div class="steps">
<ol>
<li><strong>Step 1:</strong> Data model: <code>{"task": "...", "done": false}</code></li>
<li><strong>Step 2:</strong> <code>load()</code> — JSON se padho</li>
<li><strong>Step 3:</strong> <code>save(tasks)</code> — JSON mein likho</li>
<li><strong>Step 4:</strong> CRUD functions: add, show, complete, delete</li>
<li><strong>Step 5:</strong> Main loop — menu dikhao, choice handle</li>
</ol>
</div>

<h3>Data model</h3>
<pre>tasks = [
    {<span class="str">"task"</span>: <span class="str">"Python seekhna"</span>, <span class="str">"done"</span>: <span class="kw">False</span>},
    {<span class="str">"task"</span>: <span class="str">"Project banana"</span>, <span class="str">"done"</span>: <span class="kw">True</span>}
]</pre>

<h3>Load &amp; Save</h3>
<pre><span class="kw">import</span> json

FILE = <span class="str">"tasks.json"</span>

<span class="kw">def</span> <span class="fn">load</span>():
    <span class="kw">try</span>:
        <span class="kw">with</span> <span class="fn">open</span>(FILE) <span class="kw">as</span> f:
            <span class="kw">return</span> json.load(f)
    <span class="kw">except</span> FileNotFoundError:
        <span class="kw">return</span> []

<span class="kw">def</span> <span class="fn">save</span>(tasks):
    <span class="kw">with</span> <span class="fn">open</span>(FILE, <span class="str">"w"</span>) <span class="kw">as</span> f:
        json.dump(tasks, f, indent=<span class="num">2</span>)</pre>

<h3>CRUD operations</h3>
<pre><span class="kw">def</span> <span class="fn">add</span>(task):
    tasks = <span class="fn">load</span>()
    tasks.append({<span class="str">"task"</span>: task, <span class="str">"done"</span>: <span class="kw">False</span>})
    <span class="fn">save</span>(tasks)

<span class="kw">def</span> <span class="fn">show</span>():
    tasks = <span class="fn">load</span>()
    <span class="kw">for</span> i, t <span class="kw">in</span> <span class="fn">enumerate</span>(tasks, <span class="num">1</span>):
        mark = <span class="str">"✓"</span> <span class="kw">if</span> t[<span class="str">"done"</span>] <span class="kw">else</span> <span class="str">" "</span>
        <span class="fn">print</span>(<span class="str">f"{i}. [{mark}] {t['task']}"</span>)

<span class="kw">def</span> <span class="fn">complete</span>(i):
    tasks = <span class="fn">load</span>()
    <span class="kw">if</span> <span class="num">0</span> < i <= <span class="fn">len</span>(tasks):
        tasks[i-<span class="num">1</span>][<span class="str">"done"</span>] = <span class="kw">True</span>
        <span class="fn">save</span>(tasks)

<span class="kw">def</span> <span class="fn">delete</span>(i):
    tasks = <span class="fn">load</span>()
    <span class="kw">if</span> <span class="num">0</span> < i <= <span class="fn">len</span>(tasks):
        tasks.pop(i-<span class="num">1</span>)
        <span class="fn">save</span>(tasks)</pre>

<h3>Main menu loop</h3>
<pre><span class="kw">while</span> <span class="kw">True</span>:
    <span class="fn">print</span>(<span class="str">"\n1. Show  2. Add  3. Complete  4. Delete  5. Exit"</span>)
    choice = <span class="fn">input</span>(<span class="str">"Choice: "</span>)

    <span class="kw">if</span> choice == <span class="str">"1"</span>:
        <span class="fn">show</span>()
    <span class="kw">elif</span> choice == <span class="str">"2"</span>:
        task = <span class="fn">input</span>(<span class="str">"Task: "</span>)
        <span class="fn">add</span>(task)
    <span class="kw">elif</span> choice == <span class="str">"3"</span>:
        <span class="fn">show</span>()
        i = <span class="fn">int</span>(<span class="fn">input</span>(<span class="str">"Number: "</span>))
        <span class="fn">complete</span>(i)
    <span class="kw">elif</span> choice == <span class="str">"4"</span>:
        <span class="fn">show</span>()
        i = <span class="fn">int</span>(<span class="fn">input</span>(<span class="str">"Number: "</span>))
        <span class="fn">delete</span>(i)
    <span class="kw">elif</span> choice == <span class="str">"5"</span>:
        <span class="kw">break</span></pre>

<h3>Bonus — filter by status</h3>
<pre><span class="kw">def</span> <span class="fn">show_pending</span>():
    tasks = <span class="fn">load</span>()
    pending = [t <span class="kw">for</span> t <span class="kw">in</span> tasks <span class="kw">if</span> <span class="kw">not</span> t[<span class="str">"done"</span>]]
    <span class="kw">for</span> t <span class="kw">in</span> pending:
        <span class="fn">print</span>(<span class="str">f"- {t['task']}"</span>)</pre>

<div class="real-life">
<div class="head">🌍 Skills Practiced</div>
<ul>
<li>File I/O — JSON save/load</li>
<li>Data model — list of dicts</li>
<li>Functions — CRUD pattern</li>
<li>Loops — menu system</li>
<li>Exception handling — missing file</li>
</ul>
</div>

<div class="warn-box">
<div class="head">⚠️ Common Mistakes</div>
<ul>
<li>Har change pe save na karna</li>
<li>Index out of range — <code>if 0 < i <= len(tasks)</code> check</li>
<li><code>tasks.json</code> ko git mein commit karna — user data hai</li>
</ul>
</div>

<div class="pro-tip">
<div class="head">✨ Pro Tip</div>
<p>Agli step: <strong>class-based</strong> banai — <code>class ToDoApp:</code> saare functions methods ban jayen. OOP ka practice.</p>
</div>`,
        en: `<h3>Project goal</h3>
<p>A To-Do app saving to JSON. Add, show, complete, delete functions.</p>

<h3>How to build?</h3>
<div class="steps">
<ol>
<li><strong>Step 1:</strong> Data model: <code>{"task": "...", "done": false}</code></li>
<li><strong>Step 2:</strong> <code>load()</code> from JSON</li>
<li><strong>Step 3:</strong> <code>save(tasks)</code> to JSON</li>
<li><strong>Step 4:</strong> CRUD functions</li>
<li><strong>Step 5:</strong> Main loop with menu</li>
</ol>
</div>

<h3>Data model</h3>
<pre>tasks = [
    {<span class="str">"task"</span>: <span class="str">"Learn Python"</span>, <span class="str">"done"</span>: <span class="kw">False</span>}
]</pre>

<h3>Load &amp; Save</h3>
<pre><span class="kw">import</span> json

FILE = <span class="str">"tasks.json"</span>

<span class="kw">def</span> <span class="fn">load</span>():
    <span class="kw">try</span>:
        <span class="kw">with</span> <span class="fn">open</span>(FILE) <span class="kw">as</span> f:
            <span class="kw">return</span> json.load(f)
    <span class="kw">except</span> FileNotFoundError:
        <span class="kw">return</span> []

<span class="kw">def</span> <span class="fn">save</span>(tasks):
    <span class="kw">with</span> <span class="fn">open</span>(FILE, <span class="str">"w"</span>) <span class="kw">as</span> f:
        json.dump(tasks, f, indent=<span class="num">2</span>)</pre>

<h3>CRUD</h3>
<pre><span class="kw">def</span> <span class="fn">add</span>(task):
    tasks = <span class="fn">load</span>()
    tasks.append({<span class="str">"task"</span>: task, <span class="str">"done"</span>: <span class="kw">False</span>})
    <span class="fn">save</span>(tasks)

<span class="kw">def</span> <span class="fn">complete</span>(i):
    tasks = <span class="fn">load</span>()
    <span class="kw">if</span> <span class="num">0</span> < i <= <span class="fn">len</span>(tasks):
        tasks[i-<span class="num">1</span>][<span class="str">"done"</span>] = <span class="kw">True</span>
        <span class="fn">save</span>(tasks)</pre>

<h3>Main loop</h3>
<pre><span class="kw">while</span> <span class="kw">True</span>:
    <span class="fn">print</span>(<span class="str">"1. Show 2. Add 3. Complete 4. Delete 5. Exit"</span>)
    choice = <span class="fn">input</span>(<span class="str">"Choice: "</span>)
    <span class="kw">if</span> choice == <span class="str">"1"</span>: <span class="fn">show</span>()
    <span class="kw">elif</span> choice == <span class="str">"5"</span>: <span class="kw">break</span></pre>

<div class="real-life">
<div class="head">🌍 Skills Practiced</div>
<ul>
<li>File I/O — JSON</li>
<li>Data model — list of dicts</li>
<li>CRUD functions</li>
<li>Menu loop</li>
<li>Exception handling</li>
</ul>
</div>

<div class="warn-box">
<div class="head">⚠️ Common Mistakes</div>
<ul>
<li>Not saving after each change</li>
<li>Index out of range</li>
<li>Committing user data to git</li>
</ul>
</div>

<div class="pro-tip">
<div class="head">✨ Pro Tip</div>
<p>Next step: make it <strong>class-based</strong> — <code>class ToDoApp:</code>.</p>
</div>`
      },
      quiz: [
        { q: { ur: "Tasks save karne ke liye?", en: "Save tasks using?" }, options: ["CSV", "JSON", "TXT", "XML"], answer: 1 },
        { q: { ur: "File na ho to?", en: "If file missing?" }, options: ["Crash", "Empty list return", "Ignore", "Delete"], answer: 1 },
        { q: { ur: "Task ka data model?", en: "Task data model?" }, options: ["String", "Dict {'task', 'done'}", "List", "Set"], answer: 1 },
        { q: { ur: "Enumerate kyun?", en: "Why enumerate?" }, options: ["Speed", "Index + value dono", "Sort", "Filter"], answer: 1 },
        { q: { ur: "Har operation ke baad?", en: "After each op?" }, options: ["Print", "save() call", "Nothing", "Exit"], answer: 1 }
      ]
    },

    /* ═══════════════════════════════════════════════════════
       TOPIC 3: Guessing Game
       ═══════════════════════════════════════════════════════ */
    {
      id: "guessing-game",
      title: { ur: "Guessing Game", en: "Guessing Game" },
      icon: "🎯",
      code: {
        ur: `import random

number = random.randint(1, 100)
attempts = 0

print("1-100 ke darmiyan number guess karo!")

while True:
    try:
        guess = int(input("Guess: "))
    except ValueError:
        print("Number likho!")
        continue

    attempts += 1

    if guess < number:
        print("Bara number! ⬆️")
    elif guess > number:
        print("Chhota number! ⬇️")
    else:
        print(f"Sahi! {attempts} attempts mein.")
        break

# Bonus: difficulty levels
# level = input("Easy/Medium/Hard: ")
# max_num = {"Easy": 10, "Medium": 50, "Hard": 100}[level]
# max_tries = {"Easy": 5, "Medium": 7, "Hard": 10}[level]`,
        en: `import random

number = random.randint(1, 100)
attempts = 0

print("Guess a number between 1-100!")

while True:
    try:
        guess = int(input("Guess: "))
    except ValueError:
        print("Enter a number!")
        continue

    attempts += 1

    if guess < number:
        print("Bigger! ⬆️")
    elif guess > number:
        print("Smaller! ⬇️")
    else:
        print(f"Correct! In {attempts} attempts.")
        break

# Bonus: difficulty levels
# level = input("Easy/Medium/Hard: ")
# max_num = {"Easy": 10, "Medium": 50, "Hard": 100}[level]
# max_tries = {"Easy": 5, "Medium": 7, "Hard": 10}[level]`
      },
      learn: {
        ur: `<h2 style="font-size:1.15rem;font-weight:800;margin-bottom:14px;">🎯 Guessing Game</h2>
<p style="color:var(--text-soft);font-size:.93rem;margin-bottom:14px;">Teesra project — <strong>number guessing game</strong>. Random module, loop, condition — interactive game.</p>

<div style="background:var(--code-bg);border:1px solid var(--code-border);border-radius:10px;overflow:hidden;margin-bottom:16px;font-family:var(--mono);font-size:.82rem;">
  <div style="display:grid;grid-template-columns:160px 1fr;padding:9px 14px;background:var(--code-bg-2);color:var(--py-blue-glow);font-weight:700;font-size:.68rem;text-transform:uppercase;">Concept · Use</div>
  <div style="display:grid;grid-template-columns:160px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">random</span><span style="color:var(--text-soft);">Secret number</span></div>
  <div style="display:grid;grid-template-columns:160px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">while</span><span style="color:var(--text-soft);">Jab tak guess sahi na ho</span></div>
  <div style="display:grid;grid-template-columns:160px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">if/elif</span><span style="color:var(--text-soft);">Hints do</span></div>
  <div style="display:grid;grid-template-columns:160px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">try/except</span><span style="color:var(--text-soft);">Galat input handle</span></div>
</div>

<div style="background:linear-gradient(135deg,rgba(75,139,190,.1),rgba(75,139,190,.03));border:1px solid rgba(75,139,190,.25);border-left:3px solid var(--py-blue);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--text);display:block;margin-bottom:3px;">💡 Kyun yeh project</strong>
<strong>Interactive game</strong> — random, loops, conditions. User engagement ke saath Python.
</div>

<div style="background:linear-gradient(135deg,rgba(16,185,129,.1),rgba(16,185,129,.02));border:1px solid rgba(16,185,129,.25);border-left:3px solid var(--py-green);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--py-green-glow);display:block;margin-bottom:5px;font-family:var(--mono);font-size:.7rem;text-transform:uppercase;">⚠️ Common Mistake</strong>
Infinite loop bina exit ke — limit ya quit option rakho.
</div>`,
        en: `<h2 style="font-size:1.15rem;font-weight:800;margin-bottom:14px;">🎯 Guessing Game</h2>
<p style="color:var(--text-soft);font-size:.93rem;margin-bottom:14px;">Third project — <strong>number guessing game</strong>. Random, loop, condition — interactive.</p>

<div style="background:var(--code-bg);border:1px solid var(--code-border);border-radius:10px;overflow:hidden;margin-bottom:16px;font-family:var(--mono);font-size:.82rem;">
  <div style="display:grid;grid-template-columns:160px 1fr;padding:9px 14px;background:var(--code-bg-2);color:var(--py-blue-glow);font-weight:700;font-size:.68rem;text-transform:uppercase;">Concept · Use</div>
  <div style="display:grid;grid-template-columns:160px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">random</span><span style="color:var(--text-soft);">Secret number</span></div>
  <div style="display:grid;grid-template-columns:160px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">while</span><span style="color:var(--text-soft);">Until correct</span></div>
  <div style="display:grid;grid-template-columns:160px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">if/elif</span><span style="color:var(--text-soft);">Hints</span></div>
</div>

<div style="background:linear-gradient(135deg,rgba(75,139,190,.1),rgba(75,139,190,.03));border:1px solid rgba(75,139,190,.25);border-left:3px solid var(--py-blue);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--text);display:block;margin-bottom:3px;">💡 Why this project</strong>
<strong>Interactive game</strong> — random, loops, conditions.
</div>

<div style="background:linear-gradient(135deg,rgba(16,185,129,.1),rgba(16,185,129,.02));border:1px solid rgba(16,185,129,.25);border-left:3px solid var(--py-green);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--py-green-glow);display:block;margin-bottom:5px;font-family:var(--mono);font-size:.7rem;text-transform:uppercase;">⚠️ Common Mistake</strong>
Infinite loop with no exit — add limit or quit.
</div>`
      },
      theory: {
        ur: `<h3>Project ka maqsad</h3>
<p>Computer ek random number chunta hai — user guess karta hai. Har galat guess pe hint milta hai.</p>

<h3>Kaise banayein?</h3>
<div class="steps">
<ol>
<li><strong>Step 1:</strong> <code>random.randint()</code> se number chuno</li>
<li><strong>Step 2:</strong> User se guess puche</li>
<li><strong>Step 3:</strong> Compare karo — bara ya chhota</li>
<li><strong>Step 4:</strong> Hint do aur loop continue</li>
<li><strong>Step 5:</strong> Sahi guess pe attempts batao</li>
</ol>
</div>

<h3>Version 1 — Basic</h3>
<pre><span class="kw">import</span> random

number = random.randint(<span class="num">1</span>, <span class="num">100</span>)
attempts = <span class="num">0</span>

<span class="kw">while</span> <span class="kw">True</span>:
    guess = <span class="fn">int</span>(<span class="fn">input</span>(<span class="str">"Guess: "</span>))
    attempts += <span class="num">1</span>

    <span class="kw">if</span> guess < number:
        <span class="fn">print</span>(<span class="str">"Bara! ⬆️"</span>)
    <span class="kw">elif</span> guess > number:
        <span class="fn">print</span>(<span class="str">"Chhota! ⬇️"</span>)
    <span class="kw">else</span>:
        <span class="fn">print</span>(<span class="str">f"Sahi! {attempts} attempts"</span>)
        <span class="kw">break</span></pre>

<h3>Version 2 — Error handling</h3>
<pre><span class="kw">while</span> <span class="kw">True</span>:
    <span class="kw">try</span>:
        guess = <span class="fn">int</span>(<span class="fn">input</span>(<span class="str">"Guess: "</span>))
    <span class="kw">except</span> ValueError:
        <span class="fn">print</span>(<span class="str">"Number likho!"</span>)
        <span class="kw">continue</span>
    <span class="cm"># ...</span></pre>

<h3>Version 3 — Difficulty + limit</h3>
<pre>levels = {
    <span class="str">"easy"</span>: (<span class="num">10</span>, <span class="num">5</span>),
    <span class="str">"medium"</span>: (<span class="num">50</span>, <span class="num">7</span>),
    <span class="str">"hard"</span>: (<span class="num">100</span>, <span class="num">10</span>)
}

level = <span class="fn">input</span>(<span class="str">"Level (easy/medium/hard): "</span>).lower()
max_num, max_tries = levels[level]

number = random.randint(<span class="num">1</span>, max_num)
attempts = <span class="num">0</span>

<span class="kw">while</span> attempts < max_tries:
    guess = <span class="fn">int</span>(<span class="fn">input</span>(<span class="str">f"Guess 1-{max_num}: "</span>))
    attempts += <span class="num">1</span>

    <span class="kw">if</span> guess < number:
        <span class="fn">print</span>(<span class="str">f"Bara! {max_tries - attempts} tries left"</span>)
    <span class="kw">elif</span> guess > number:
        <span class="fn">print</span>(<span class="str">f"Chhota! {max_tries - attempts} tries left"</span>)
    <span class="kw">else</span>:
        <span class="fn">print</span>(<span class="str">f"Jeet gaye! {attempts} tries"</span>)
        <span class="kw">break</span>
<span class="kw">else</span>:
    <span class="fn">print</span>(<span class="str">f"Haar gaye! Number tha: {number}"</span>)</pre>

<h3>Version 4 — Score system (binary search)</h3>
<pre><span class="cm"># Best possible strategy: 1-100 → 7 guesses max</span>
<span class="cm"># Hint: agar user 50 pe "bara" bole, next 75 try karo</span>
<span class="cm"># Iska optimal score 7 attempts hai</span>

<span class="kw">def</span> <span class="fn">score</span>(attempts, max_possible=<span class="num">7</span>):
    <span class="kw">if</span> attempts <= max_possible:
        <span class="kw">return</span> <span class="str">"⭐⭐⭐ Perfect!"</span>
    <span class="kw">elif</span> attempts <= max_possible + <span class="num">3</span>:
        <span class="kw">return</span> <span class="str">"⭐⭐ Good"</span>
    <span class="kw">return</span> <span class="str">"⭐ Try again"</span></pre>

<div class="real-life">
<div class="head">🌍 Skills Practiced</div>
<ul>
<li><code>random</code> module — randint</li>
<li>While loop — repeat until correct</li>
<li>if/elif — compare &amp; hint</li>
<li>try/except — bad input</li>
<li>while/else — lose condition</li>
</ul>
</div>

<div class="warn-box">
<div class="head">⚠️ Common Mistakes</div>
<ul>
<li>Number ko loop ke andar dobara randomize karna — guess change ho jaye</li>
<li>Limit na rakhna — kabhi end nahi</li>
<li>String compare karna int ki jagah</li>
</ul>
</div>

<div class="pro-tip">
<div class="head">✨ Pro Tip</div>
<p>1-100 ke liye best strategy hai <strong>binary search</strong> — 7 guesses max. Game ka difficulty isi se judge karo.</p>
</div>`,
        en: `<h3>Project goal</h3>
<p>Computer picks a random number — user guesses. Each wrong guess gets a hint.</p>

<h3>How to build?</h3>
<div class="steps">
<ol>
<li><strong>Step 1:</strong> <code>random.randint()</code> for secret</li>
<li><strong>Step 2:</strong> Ask for guess</li>
<li><strong>Step 3:</strong> Compare — bigger or smaller</li>
<li><strong>Step 4:</strong> Give hint, continue loop</li>
<li><strong>Step 5:</strong> On correct, show attempts</li>
</ol>
</div>

<h3>Version 1 — Basic</h3>
<pre><span class="kw">import</span> random

number = random.randint(<span class="num">1</span>, <span class="num">100</span>)
attempts = <span class="num">0</span>

<span class="kw">while</span> <span class="kw">True</span>:
    guess = <span class="fn">int</span>(<span class="fn">input</span>(<span class="str">"Guess: "</span>))
    attempts += <span class="num">1</span>
    <span class="kw">if</span> guess < number:
        <span class="fn">print</span>(<span class="str">"Bigger!"</span>)
    <span class="kw">elif</span> guess > number:
        <span class="fn">print</span>(<span class="str">"Smaller!"</span>)
    <span class="kw">else</span>:
        <span class="fn">print</span>(<span class="str">f"Correct! {attempts} attempts"</span>)
        <span class="kw">break</span></pre>

<h3>Version 2 — Error handling</h3>
<pre><span class="kw">try</span>:
    guess = <span class="fn">int</span>(<span class="fn">input</span>(<span class="str">"Guess: "</span>))
<span class="kw">except</span> ValueError:
    <span class="fn">print</span>(<span class="str">"Enter a number!"</span>)
    <span class="kw">continue</span></pre>

<h3>Version 3 — Difficulty + limit</h3>
<pre>levels = {
    <span class="str">"easy"</span>: (<span class="num">10</span>, <span class="num">5</span>),
    <span class="str">"medium"</span>: (<span class="num">50</span>, <span class="num">7</span>),
    <span class="str">"hard"</span>: (<span class="num">100</span>, <span class="num">10</span>)
}

level = <span class="fn">input</span>(<span class="str">"Level: "</span>)
max_num, max_tries = levels[level]</pre>

<h3>while/else — lose case</h3>
<pre><span class="kw">while</span> attempts < max_tries:
    <span class="cm"># guess logic</span>
<span class="kw">else</span>:
    <span class="fn">print</span>(<span class="str">f"Lost! Number was: {number}"</span>)</pre>

<div class="real-life">
<div class="head">🌍 Skills Practiced</div>
<ul>
<li><code>random</code> module</li>
<li>While loop</li>
<li>if/elif</li>
<li>try/except</li>
<li>while/else</li>
</ul>
</div>

<div class="warn-box">
<div class="head">⚠️ Common Mistakes</div>
<ul>
<li>Re-randomizing inside loop</li>
<li>No try limit</li>
<li>String vs int comparison</li>
</ul>
</div>

<div class="pro-tip">
<div class="head">✨ Pro Tip</div>
<p>Best strategy for 1-100 is <strong>binary search</strong> — 7 max guesses.</p>
</div>`
      },
      quiz: [
        { q: { ur: "Random number generate?", en: "Generate random number?" }, options: ["random.random()", "random.randint(1, 100)", "random.pick()", "random.num()"], answer: 1 },
        { q: { ur: "Loop kab tak chalega?", en: "Loop until?" }, options: ["10 baar", "Jab tak sahi guess", "Forever", "0"], answer: 1 },
        { q: { ur: "Galat number pe kya?", en: "On wrong guess?" }, options: ["Restart", "Hint do", "Exit", "Ignore"], answer: 1 },
        { q: { ur: "Attempts count kaise?", en: "Count attempts how?" }, options: ["+1 har guess", "Fixed", "Skip", "Random"], answer: 0 },
        { q: { ur: "Number loop ke bahar kyun?", en: "Number outside loop why?" }, options: ["Faster", "Same rahe", "No reason", "Random"], answer: 1 }
      ]
    },

    /* ═══════════════════════════════════════════════════════
       TOPIC 4: Quiz App
       ═══════════════════════════════════════════════════════ */
    {
      id: "quiz-app",
      title: { ur: "Quiz App", en: "Quiz App" },
      icon: "❓",
      code: {
        ur: `# Quiz App — MCQ style
questions = [
    {
        "q": "Python ka creator kaun?",
        "options": ["Linus", "Guido van Rossum", "Dennis", "James"],
        "answer": 1
    },
    {
        "q": "Python ka extension?",
        "options": [".py", ".pyt", ".pt", ".pn"],
        "answer": 0
    },
    {
        "q": "List banane ka syntax?",
        "options": ["{}", "[]", "()", "<>"],
        "answer": 1
    }
]

score = 0

for i, q in enumerate(questions, 1):
    print(f"\\nQ{i}: {q['q']}")
    for j, opt in enumerate(q["options"], 1):
        print(f"  {j}. {opt}")

    try:
        ans = int(input("Answer: ")) - 1
        if ans == q["answer"]:
            print("Sahi! ✅")
            score += 1
        else:
            correct = q["options"][q["answer"]]
            print(f"Ghalat! Sahi: {correct}")
    except (ValueError, IndexError):
        print("Ghalat input!")

print(f"\\nScore: {score}/{len(questions)}")`,
        en: `# Quiz App — MCQ style
questions = [
    {
        "q": "Who created Python?",
        "options": ["Linus", "Guido van Rossum", "Dennis", "James"],
        "answer": 1
    },
    {
        "q": "Python file extension?",
        "options": [".py", ".pyt", ".pt", ".pn"],
        "answer": 0
    },
    {
        "q": "List syntax?",
        "options": ["{}", "[]", "()", "<>"],
        "answer": 1
    }
]

score = 0

for i, q in enumerate(questions, 1):
    print(f"\\nQ{i}: {q['q']}")
    for j, opt in enumerate(q["options"], 1):
        print(f"  {j}. {opt}")

    try:
        ans = int(input("Answer: ")) - 1
        if ans == q["answer"]:
            print("Correct! ✅")
            score += 1
        else:
            correct = q["options"][q["answer"]]
            print(f"Wrong! Correct: {correct}")
    except (ValueError, IndexError):
        print("Invalid input!")

print(f"\\nScore: {score}/{len(questions)}")`
      },
      learn: {
        ur: `<h2 style="font-size:1.15rem;font-weight:800;margin-bottom:14px;">❓ Quiz App</h2>
<p style="color:var(--text-soft);font-size:.93rem;margin-bottom:14px;">Chautha project — <strong>MCQ quiz app</strong>. Data structures, loops, scoring — sab ek saath.</p>

<div style="background:var(--code-bg);border:1px solid var(--code-border);border-radius:10px;overflow:hidden;margin-bottom:16px;font-family:var(--mono);font-size:.82rem;">
  <div style="display:grid;grid-template-columns:160px 1fr;padding:9px 14px;background:var(--code-bg-2);color:var(--py-blue-glow);font-weight:700;font-size:.68rem;text-transform:uppercase;">Concept · Use</div>
  <div style="display:grid;grid-template-columns:160px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">List of dicts</span><span style="color:var(--text-soft);">Questions store</span></div>
  <div style="display:grid;grid-template-columns:160px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">enumerate</span><span style="color:var(--text-soft);">Numbering</span></div>
  <div style="display:grid;grid-template-columns:160px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">Loop</span><span style="color:var(--text-soft);">Har question</span></div>
  <div style="display:grid;grid-template-columns:160px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">Score</span><span style="color:var(--text-soft);">Track correct</span></div>
</div>

<div style="background:linear-gradient(135deg,rgba(75,139,190,.1),rgba(75,139,190,.03));border:1px solid rgba(75,139,190,.25);border-left:3px solid var(--py-blue);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--text);display:block;margin-bottom:3px;">💡 Kyun yeh project</strong>
<strong>Data + interactivity</strong> — list of dicts se real app. Schools mein quiz apps aise hi bante hain.
</div>

<div style="background:linear-gradient(135deg,rgba(16,185,129,.1),rgba(16,185,129,.02));border:1px solid rgba(16,185,129,.25);border-left:3px solid var(--py-green);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--py-green-glow);display:block;margin-bottom:5px;font-family:var(--mono);font-size:.7rem;text-transform:uppercase;">⚠️ Common Mistake</strong>
Question ka index galat — 0-based vs 1-based. <code>-1</code> lagao user input pe.
</div>`,
        en: `<h2 style="font-size:1.15rem;font-weight:800;margin-bottom:14px;">❓ Quiz App</h2>
<p style="color:var(--text-soft);font-size:.93rem;margin-bottom:14px;">Fourth project — <strong>MCQ quiz app</strong>. Data structures, loops, scoring together.</p>

<div style="background:var(--code-bg);border:1px solid var(--code-border);border-radius:10px;overflow:hidden;margin-bottom:16px;font-family:var(--mono);font-size:.82rem;">
  <div style="display:grid;grid-template-columns:160px 1fr;padding:9px 14px;background:var(--code-bg-2);color:var(--py-blue-glow);font-weight:700;font-size:.68rem;text-transform:uppercase;">Concept · Use</div>
  <div style="display:grid;grid-template-columns:160px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">List of dicts</span><span style="color:var(--text-soft);">Store questions</span></div>
  <div style="display:grid;grid-template-columns:160px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">enumerate</span><span style="color:var(--text-soft);">Numbering</span></div>
  <div style="display:grid;grid-template-columns:160px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">Loop</span><span style="color:var(--text-soft);">Per question</span></div>
</div>

<div style="background:linear-gradient(135deg,rgba(75,139,190,.1),rgba(75,139,190,.03));border:1px solid rgba(75,139,190,.25);border-left:3px solid var(--py-blue);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--text);display:block;margin-bottom:3px;">💡 Why this project</strong>
<strong>Data + interactivity</strong> — list of dicts into real app.
</div>

<div style="background:linear-gradient(135deg,rgba(16,185,129,.1),rgba(16,185,129,.02));border:1px solid rgba(16,185,129,.25);border-left:3px solid var(--py-green);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--py-green-glow);display:block;margin-bottom:5px;font-family:var(--mono);font-size:.7rem;text-transform:uppercase;">⚠️ Common Mistake</strong>
Wrong index — 0-based vs 1-based. Subtract <code>1</code> from user input.
</div>`
      },
      theory: {
        ur: `<h3>Project ka maqsad</h3>
<p>MCQ quiz app jo questions dikhaye, user se answer le, score track kare.</p>

<h3>Kaise banayein?</h3>
<div class="steps">
<ol>
<li><strong>Step 1:</strong> Questions ko list of dicts mein rakho</li>
<li><strong>Step 2:</strong> Har question pe loop chalao</li>
<li><strong>Step 3:</strong> Options number ke saath dikhao</li>
<li><strong>Step 4:</strong> User answer check karo</li>
<li><strong>Step 5:</strong> Score track karo, end pe summary</li>
</ol>
</div>

<h3>Data structure</h3>
<pre>questions = [
    {
        <span class="str">"q"</span>: <span class="str">"Python creator?"</span>,
        <span class="str">"options"</span>: [<span class="str">"Linus"</span>, <span class="str">"Guido"</span>, <span class="str">"Dennis"</span>, <span class="str">"James"</span>],
        <span class="str">"answer"</span>: <span class="num">1</span>   <span class="cm"># index of correct</span>
    }
]</pre>

<h3>Basic loop</h3>
<pre>score = <span class="num">0</span>

<span class="kw">for</span> i, q <span class="kw">in</span> <span class="fn">enumerate</span>(questions, <span class="num">1</span>):
    <span class="fn">print</span>(<span class="str">f"\nQ{i}: {q['q']}"</span>)
    <span class="kw">for</span> j, opt <span class="kw">in</span> <span class="fn">enumerate</span>(q[<span class="str">"options"</span>], <span class="num">1</span>):
        <span class="fn">print</span>(<span class="str">f"  {j}. {opt}"</span>)

    ans = <span class="fn">int</span>(<span class="fn">input</span>(<span class="str">"Answer: "</span>)) - <span class="num">1</span>
    <span class="kw">if</span> ans == q[<span class="str">"answer"</span>]:
        score += <span class="num">1</span>
        <span class="fn">print</span>(<span class="str">"Sahi! ✅"</span>)
    <span class="kw">else</span>:
        correct = q[<span class="str">"options"</span>][q[<span class="str">"answer"</span>]]
        <span class="fn">print</span>(<span class="str">f"Ghalat! Sahi: {correct}"</span>)</pre>

<h3>Score with percentage</h3>
<pre>percent = score / <span class="fn">len</span>(questions) * <span class="num">100</span>

<span class="kw">if</span> percent >= <span class="num">80</span>:
    grade = <span class="str">"A"</span>
<span class="kw">elif</span> percent >= <span class="num">60</span>:
    grade = <span class="str">"B"</span>
<span class="kw">elif</span> percent >= <span class="num">40</span>:
    grade = <span class="str">"C"</span>
<span class="kw">else</span>:
    grade = <span class="str">"F"</span>

<span class="fn">print</span>(<span class="str">f"Score: {score}/{len(questions)} ({percent:.1f}%) Grade: {grade}"</span>)</pre>

<h3>Timer (with time module)</h3>
<pre><span class="kw">import</span> time

start = time.time()

<span class="cm"># ... quiz loop</span>

elapsed = time.time() - start
<span class="fn">print</span>(<span class="str">f"Time: {elapsed:.1f}s"</span>)</pre>

<h3>Shuffle questions</h3>
<pre><span class="kw">import</span> random

random.shuffle(questions)

<span class="cm"># Har attempt alag order</span></pre>

<h3>Save high score</h3>
<pre><span class="kw">import</span> json

<span class="kw">def</span> <span class="fn">get_high_score</span>():
    <span class="kw">try</span>:
        <span class="kw">with</span> <span class="fn">open</span>(<span class="str">"highscore.json"</span>) <span class="kw">as</span> f:
            <span class="kw">return</span> json.load(f)
    <span class="kw">except</span> FileNotFoundError:
        <span class="kw">return</span> {<span class="str">"best"</span>: <span class="num">0</span>}

<span class="kw">def</span> <span class="fn">save_high_score</span>(score):
    data = <span class="fn">get_high_score</span>()
    <span class="kw">if</span> score > data[<span class="str">"best"</span>]:
        data[<span class="str">"best"</span>] = score
        <span class="kw">with</span> <span class="fn">open</span>(<span class="str">"highscore.json"</span>, <span class="str">"w"</span>) <span class="kw">as</span> f:
            json.dump(data, f)
        <span class="fn">print</span>(<span class="str">"Naya high score!"</span>)</pre>

<div class="real-life">
<div class="head">🌍 Skills Practiced</div>
<ul>
<li>List of dicts — structured data</li>
<li>enumerate — numbering</li>
<li>Nested loops — outer questions, inner options</li>
<li>Score tracking — business logic</li>
<li>JSON — high scores save</li>
</ul>
</div>

<div class="warn-box">
<div class="head">⚠️ Common Mistakes</div>
<ul>
<li>User input (1-based) vs list index (0-based) — <code>-1</code> lagao</li>
<li>Score reset na karna — multiple runs mein galat</li>
<li>Range check na karna — IndexError</li>
</ul>
</div>

<div class="pro-tip">
<div class="head">✨ Pro Tip</div>
<p>Questions ko <strong>JSON file</strong> mein rakho — code change nahi karna, sirf data file edit karo. Yeh real apps mein common pattern hai.</p>
</div>`,
        en: `<h3>Project goal</h3>
<p>An MCQ quiz app: shows questions, takes answers, tracks score.</p>

<h3>How to build?</h3>
<div class="steps">
<ol>
<li><strong>Step 1:</strong> Questions as list of dicts</li>
<li><strong>Step 2:</strong> Loop per question</li>
<li><strong>Step 3:</strong> Show options with numbers</li>
<li><strong>Step 4:</strong> Check answer</li>
<li><strong>Step 5:</strong> Track score, end summary</li>
</ol>
</div>

<h3>Data structure</h3>
<pre>questions = [
    {
        <span class="str">"q"</span>: <span class="str">"Python creator?"</span>,
        <span class="str">"options"</span>: [<span class="str">"Linus"</span>, <span class="str">"Guido"</span>],
        <span class="str">"answer"</span>: <span class="num">1</span>
    }
]</pre>

<h3>Basic loop</h3>
<pre>score = <span class="num">0</span>

<span class="kw">for</span> i, q <span class="kw">in</span> <span class="fn">enumerate</span>(questions, <span class="num">1</span>):
    <span class="fn">print</span>(<span class="str">f"Q{i}: {q['q']}"</span>)
    <span class="kw">for</span> j, opt <span class="kw">in</span> <span class="fn">enumerate</span>(q[<span class="str">"options"</span>], <span class="num">1</span>):
        <span class="fn">print</span>(<span class="str">f"  {j}. {opt}"</span>)

    ans = <span class="fn">int</span>(<span class="fn">input</span>(<span class="str">"Answer: "</span>)) - <span class="num">1</span>
    <span class="kw">if</span> ans == q[<span class="str">"answer"</span>]:
        score += <span class="num">1</span></pre>

<h3>Score &amp; grade</h3>
<pre>percent = score / <span class="fn">len</span>(questions) * <span class="num">100</span>
<span class="kw">if</span> percent >= <span class="num">80</span>: grade = <span class="str">"A"</span>
<span class="kw">elif</span> percent >= <span class="num">60</span>: grade = <span class="str">"B"</span>
<span class="kw">else</span>: grade = <span class="str">"F"</span></pre>

<h3>Shuffle</h3>
<pre><span class="kw">import</span> random
random.shuffle(questions)</pre>

<h3>Save high score</h3>
<pre><span class="kw">import</span> json

<span class="kw">def</span> <span class="fn">get_high_score</span>():
    <span class="kw">try</span>:
        <span class="kw">with</span> <span class="fn">open</span>(<span class="str">"highscore.json"</span>) <span class="kw">as</span> f:
            <span class="kw">return</span> json.load(f)
    <span class="kw">except</span> FileNotFoundError:
        <span class="kw">return</span> {<span class="str">"best"</span>: <span class="num">0</span>}</pre>

<div class="real-life">
<div class="head">🌍 Skills Practiced</div>
<ul>
<li>List of dicts</li>
<li>enumerate</li>
<li>Nested loops</li>
<li>Score tracking</li>
<li>JSON save</li>
</ul>
</div>

<div class="warn-box">
<div class="head">⚠️ Common Mistakes</div>
<ul>
<li>1-based vs 0-based index</li>
<li>Score not reset</li>
<li>No range check</li>
</ul>
</div>

<div class="pro-tip">
<div class="head">✨ Pro Tip</div>
<p>Put questions in a <strong>JSON file</strong> — edit data, not code.</p>
</div>`
      },
      quiz: [
        { q: { ur: "Questions kaise store?", en: "Store questions how?" }, options: ["String", "List of dicts", "Tuple", "Set"], answer: 1 },
        { q: { ur: "enumerate kya deta?", en: "enumerate returns?" }, options: ["Only value", "Index + value", "Only index", "Length"], answer: 1 },
        { q: { ur: "User input 1 se shuru to index?", en: "User input 1-based, index?" }, options: ["Same", "Subtract 1", "Add 1", "Multiply"], answer: 1 },
        { q: { ur: "Score kaise track?", en: "Track score how?" }, options: ["Global only", "Counter variable", "Print", "None"], answer: 1 },
        { q: { ur: "Shuffle kyun?", en: "Why shuffle?" }, options: ["Speed", "Different order", "Less memory", "Error"], answer: 1 }
      ]
    },

    /* ═══════════════════════════════════════════════════════
       TOPIC 5: Weather App
       ═══════════════════════════════════════════════════════ */
    {
      id: "weather-app",
      title: { ur: "Weather App", en: "Weather App" },
      icon: "🌤️",
      code: {
        ur: `# Weather App — public API
# pip install requests
import requests

CITIES = {
    "karachi": (24.86, 67.01),
    "lahore": (31.55, 74.34),
    "islamabad": (33.69, 73.04),
    "peshawar": (34.01, 71.58)
}

def get_weather(city):
    lat, lon = CITIES[city]
    url = "https://api.open-meteo.com/v1/forecast"
    params = {
        "latitude": lat,
        "longitude": lon,
        "current_weather": True
    }
    r = requests.get(url, params=params, timeout=10)
    if r.status_code != 200:
        return None
    return r.json()["current_weather"]

city = input("City (karachi/lahore/...): ").lower()

if city in CITIES:
    weather = get_weather(city)
    if weather:
        print(f"{city.title()} ka mausam:")
        print(f"  Temp: {weather['temperature']}°C")
        print(f"  Wind: {weather['windspeed']} km/h")
    else:
        print("API error!")
else:
    print("City nahi mili!")`,
        en: `# Weather App — public API
# pip install requests
import requests

CITIES = {
    "karachi": (24.86, 67.01),
    "lahore": (31.55, 74.34),
    "islamabad": (33.69, 73.04),
    "peshawar": (34.01, 71.58)
}

def get_weather(city):
    lat, lon = CITIES[city]
    url = "https://api.open-meteo.com/v1/forecast"
    params = {
        "latitude": lat,
        "longitude": lon,
        "current_weather": True
    }
    r = requests.get(url, params=params, timeout=10)
    if r.status_code != 200:
        return None
    return r.json()["current_weather"]

city = input("City (karachi/lahore/...): ").lower()

if city in CITIES:
    weather = get_weather(city)
    if weather:
        print(f"Weather in {city.title()}:")
        print(f"  Temp: {weather['temperature']}°C")
        print(f"  Wind: {weather['windspeed']} km/h")
    else:
        print("API error!")
else:
    print("City not found!")`
      },
      learn: {
        ur: `<h2 style="font-size:1.15rem;font-weight:800;margin-bottom:14px;">🌤️ Weather App</h2>
<p style="color:var(--text-soft);font-size:.93rem;margin-bottom:14px;">Paanchwa project — <strong>real API se weather</strong>. HTTP requests, JSON parsing, error handling — sab ek saath.</p>

<div style="background:var(--code-bg);border:1px solid var(--code-border);border-radius:10px;overflow:hidden;margin-bottom:16px;font-family:var(--mono);font-size:.82rem;">
  <div style="display:grid;grid-template-columns:160px 1fr;padding:9px 14px;background:var(--code-bg-2);color:var(--py-blue-glow);font-weight:700;font-size:.68rem;text-transform:uppercase;">Concept · Use</div>
  <div style="display:grid;grid-template-columns:160px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">requests</span><span style="color:var(--text-soft);">API call</span></div>
  <div style="display:grid;grid-template-columns:160px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">JSON</span><span style="color:var(--text-soft);">Response parse</span></div>
  <div style="display:grid;grid-template-columns:160px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">Dict</span><span style="color:var(--text-soft);">Cities coords</span></div>
  <div style="display:grid;grid-template-columns:160px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">try/except</span><span style="color:var(--text-soft);">Network errors</span></div>
</div>

<div style="background:linear-gradient(135deg,rgba(75,139,190,.1),rgba(75,139,190,.03));border:1px solid rgba(75,139,190,.25);border-left:3px solid var(--py-blue);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--text);display:block;margin-bottom:3px;">💡 Kyun yeh project</strong>
<strong>Real-world API</strong> — asal data live. Sau projects mein se 90 yahi karte hain.
</div>

<div style="background:linear-gradient(135deg,rgba(16,185,129,.1),rgba(16,185,129,.02));border:1px solid rgba(16,185,129,.25);border-left:3px solid var(--py-green);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--py-green-glow);display:block;margin-bottom:5px;font-family:var(--mono);font-size:.7rem;text-transform:uppercase;">⚠️ Common Mistake</strong>
<code>timeout</code> na lagana — request kabhi hang ho jati. Hamesha <code>timeout=10</code>.
</div>`,
        en: `<h2 style="font-size:1.15rem;font-weight:800;margin-bottom:14px;">🌤️ Weather App</h2>
<p style="color:var(--text-soft);font-size:.93rem;margin-bottom:14px;">Fifth project — <strong>real API weather</strong>. HTTP, JSON, error handling together.</p>

<div style="background:var(--code-bg);border:1px solid var(--code-border);border-radius:10px;overflow:hidden;margin-bottom:16px;font-family:var(--mono);font-size:.82rem;">
  <div style="display:grid;grid-template-columns:160px 1fr;padding:9px 14px;background:var(--code-bg-2);color:var(--py-blue-glow);font-weight:700;font-size:.68rem;text-transform:uppercase;">Concept · Use</div>
  <div style="display:grid;grid-template-columns:160px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">requests</span><span style="color:var(--text-soft);">API call</span></div>
  <div style="display:grid;grid-template-columns:160px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">JSON</span><span style="color:var(--text-soft);">Parse response</span></div>
  <div style="display:grid;grid-template-columns:160px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">Dict</span><span style="color:var(--text-soft);">City coords</span></div>
</div>

<div style="background:linear-gradient(135deg,rgba(75,139,190,.1),rgba(75,139,190,.03));border:1px solid rgba(75,139,190,.25);border-left:3px solid var(--py-blue);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--text);display:block;margin-bottom:3px;">💡 Why this project</strong>
<strong>Real-world API</strong> — live data.
</div>

<div style="background:linear-gradient(135deg,rgba(16,185,129,.1),rgba(16,185,129,.02));border:1px solid rgba(16,185,129,.25);border-left:3px solid var(--py-green);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--py-green-glow);display:block;margin-bottom:5px;font-family:var(--mono);font-size:.7rem;text-transform:uppercase;">⚠️ Common Mistake</strong>
No <code>timeout</code> — request hangs. Always <code>timeout=10</code>.
</div>`
      },
      theory: {
        ur: `<h3>Project ka maqsad</h3>
<p>User city bataye — app live weather dikhaye. Free API se, bina API key ke.</p>

<h3>Kaise banayein?</h3>
<div class="steps">
<ol>
<li><strong>Step 1:</strong> Cities ke coordinates dict mein rakho</li>
<li><strong>Step 2:</strong> User se city puche</li>
<li><strong>Step 3:</strong> API ko request bhejo</li>
<li><strong>Step 4:</strong> JSON parse karo</li>
<li><strong>Step 5:</strong> Temp/wind display karo</li>
</ol>
</div>

<h3>Free API — Open-Meteo</h3>
<pre><span class="cm"># No API key needed!</span>
<span class="cm"># https://api.open-meteo.com/v1/forecast</span>

url = <span class="str">"https://api.open-meteo.com/v1/forecast"</span>
params = {
    <span class="str">"latitude"</span>: <span class="num">24.86</span>,
    <span class="str">"longitude"</span>: <span class="num">67.01</span>,
    <span class="str">"current_weather"</span>: <span class="kw">True</span>
}</pre>

<h3>Cities dictionary</h3>
<pre>CITIES = {
    <span class="str">"karachi"</span>: (<span class="num">24.86</span>, <span class="num">67.01</span>),
    <span class="str">"lahore"</span>: (<span class="num">31.55</span>, <span class="num">74.34</span>),
    <span class="str">"islamabad"</span>: (<span class="num">33.69</span>, <span class="num">73.04</span>),
    <span class="str">"peshawar"</span>: (<span class="num">34.01</span>, <span class="num">71.58</span>),
    <span class="str">"quetta"</span>: (<span class="num">30.18</span>, <span class="num">66.99</span>)
}</pre>

<h3>Complete function</h3>
<pre><span class="kw">import</span> requests

<span class="kw">def</span> <span class="fn">get_weather</span>(city):
    <span class="kw">if</span> city <span class="kw">not</span> <span class="kw">in</span> CITIES:
        <span class="kw">return</span> <span class="kw">None</span>

    lat, lon = CITIES[city]
    url = <span class="str">"https://api.open-meteo.com/v1/forecast"</span>
    params = {
        <span class="str">"latitude"</span>: lat,
        <span class="str">"longitude"</span>: lon,
        <span class="str">"current_weather"</span>: <span class="kw">True</span>
    }

    <span class="kw">try</span>:
        r = requests.get(url, params=params, timeout=<span class="num">10</span>)
        <span class="kw">if</span> r.status_code != <span class="num">200</span>:
            <span class="kw">return</span> <span class="kw">None</span>
        <span class="kw">return</span> r.json()[<span class="str">"current_weather"</span>]
    <span class="kw">except</span> requests.RequestException <span class="kw">as</span> e:
        <span class="fn">print</span>(<span class="str">f"Error: {e}"</span>)
        <span class="kw">return</span> <span class="kw">None</span></pre>

<h3>Display nicely</h3>
<pre><span class="kw">def</span> <span class="fn">display</span>(city, weather):
    temp = weather[<span class="str">"temperature"</span>]
    wind = weather[<span class="str">"windspeed"</span>]

    <span class="fn">print</span>(<span class="str">f"\n📍 {city.title()}"</span>)
    <span class="fn">print</span>(<span class="str">f"   🌡️  {temp}°C"</span>)
    <span class="fn">print</span>(<span class="str">f"   💨  {wind} km/h"</span>)

    <span class="cm"># Emoji hint</span>
    <span class="kw">if</span> temp > <span class="num">35</span>:
        <span class="fn">print</span>(<span class="str">"   🔥 Bohat garmi!"</span>)
    <span class="kw">elif</span> temp > <span class="num">25</span>:
        <span class="fn">print</span>(<span class="str">"   ☀️  Garam"</span>)
    <span class="kw">elif</span> temp > <span class="num">15</span>:
        <span class="fn">print</span>(<span class="str">"   🌤️  Theek hai"</span>)
    <span class="kw">else</span>:
        <span class="fn">print</span>(<span class="str">"   ❄️  Thanda!"</span>)</pre>

<h3>Extended — forecast ke saath</h3>
<pre>params = {
    <span class="str">"latitude"</span>: lat,
    <span class="str">"longitude"</span>: lon,
    <span class="str">"hourly"</span>: <span class="str">"temperature_2m"</span>,
    <span class="str">"forecast_days"</span>: <span class="num">3</span>
}

r = requests.get(url, params=params)
hourly = r.json()[<span class="str">"hourly"</span>]

<span class="cm"># Agle 24 ghante ke temps</span>
<span class="kw">for</span> t, temp <span class="kw">in</span> <span class="fn">zip</span>(hourly[<span class="str">"time"</span>][:<span class="num">24</span>], hourly[<span class="str">"temperature_2m"</span>][:<span class="num">24</span>]):
    <span class="fn">print</span>(<span class="str">f"{t}: {temp}°C"</span>)</pre>

<div class="real-life">
<div class="head">🌍 Skills Practiced</div>
<ul>
<li>requests — HTTP calls</li>
<li>JSON parsing — nested access</li>
<li>try/except — network errors</li>
<li>Dict — city database</li>
<li>Real API — practical experience</li>
</ul>
</div>

<div class="warn-box">
<div class="head">⚠️ Common Mistakes</div>
<ul>
<li><code>timeout</code> na lagana — hang</li>
<li>Status code check na karna</li>
<li>Network exception catch na karna — <code>requests.RequestException</code></li>
</ul>
</div>

<div class="pro-tip">
<div class="head">✨ Pro Tip</div>
<p>Yeh project extend karo: <strong>multiple cities loop</strong>, <strong>7-day forecast</strong>, ya <strong>CSV mein save</strong> karke history maintain karo.</p>
</div>`,
        en: `<h3>Project goal</h3>
<p>User enters city — app shows live weather. Free API, no key needed.</p>

<h3>How to build?</h3>
<div class="steps">
<ol>
<li><strong>Step 1:</strong> Cities coords in dict</li>
<li><strong>Step 2:</strong> Ask city</li>
<li><strong>Step 3:</strong> Send API request</li>
<li><strong>Step 4:</strong> Parse JSON</li>
<li><strong>Step 5:</strong> Display temp/wind</li>
</ol>
</div>

<h3>Free API — Open-Meteo</h3>
<pre><span class="cm"># No API key!</span>
url = <span class="str">"https://api.open-meteo.com/v1/forecast"</span>
params = {
    <span class="str">"latitude"</span>: <span class="num">24.86</span>,
    <span class="str">"longitude"</span>: <span class="num">67.01</span>,
    <span class="str">"current_weather"</span>: <span class="kw">True</span>
}</pre>

<h3>Cities dict</h3>
<pre>CITIES = {
    <span class="str">"karachi"</span>: (<span class="num">24.86</span>, <span class="num">67.01</span>),
    <span class="str">"lahore"</span>: (<span class="num">31.55</span>, <span class="num">74.34</span>)
}</pre>

<h3>Complete function</h3>
<pre><span class="kw">import</span> requests

<span class="kw">def</span> <span class="fn">get_weather</span>(city):
    <span class="kw">if</span> city <span class="kw">not</span> <span class="kw">in</span> CITIES:
        <span class="kw">return</span> <span class="kw">None</span>

    lat, lon = CITIES[city]
    params = {<span class="str">"latitude"</span>: lat, <span class="str">"longitude"</span>: lon, <span class="str">"current_weather"</span>: <span class="kw">True</span>}

    <span class="kw">try</span>:
        r = requests.get(url, params=params, timeout=<span class="num">10</span>)
        <span class="kw">if</span> r.status_code != <span class="num">200</span>:
            <span class="kw">return</span> <span class="kw">None</span>
        <span class="kw">return</span> r.json()[<span class="str">"current_weather"</span>]
    <span class="kw">except</span> requests.RequestException <span class="kw">as</span> e:
        <span class="fn">print</span>(<span class="str">f"Error: {e}"</span>)
        <span class="kw">return</span> <span class="kw">None</span></pre>

<h3>Display</h3>
<pre><span class="kw">def</span> <span class="fn">display</span>(city, weather):
    temp = weather[<span class="str">"temperature"</span>]
    <span class="fn">print</span>(<span class="str">f"{city}: {temp}°C"</span>)

    <span class="kw">if</span> temp > <span class="num">35</span>:
        <span class="fn">print</span>(<span class="str">"🔥 Very hot!"</span>)
    <span class="kw">elif</span> temp > <span class="num">15</span>:
        <span class="fn">print</span>(<span class="str">"🌤️ Nice"</span>)
    <span class="kw">else</span>:
        <span class="fn">print</span>(<span class="str">"❄️ Cold!"</span>)</pre>

<div class="real-life">
<div class="head">🌍 Skills Practiced</div>
<ul>
<li>requests — HTTP</li>
<li>JSON parsing</li>
<li>try/except</li>
<li>Dict</li>
<li>Real API</li>
</ul>
</div>

<div class="warn-box">
<div class="head">⚠️ Common Mistakes</div>
<ul>
<li>No <code>timeout</code></li>
<li>No status check</li>
<li>Not catching <code>requests.RequestException</code></li>
</ul>
</div>

<div class="pro-tip">
<div class="head">✨ Pro Tip</div>
<p>Extend it: <strong>multiple cities</strong>, <strong>7-day forecast</strong>, or <strong>save to CSV</strong>.</p>
</div>`
      },
      quiz: [
        { q: { ur: "Weather API ka package?", en: "Package for weather API?" }, options: ["json", "requests", "csv", "math"], answer: 1 },
        { q: { ur: "timeout kyun?", en: "Why timeout?" }, options: ["Faster", "Hang na ho", "Security", "No reason"], answer: 1 },
        { q: { ur: "Cities coords kis mein?", en: "Cities coords in?" }, options: ["List", "Dict", "Set", "Tuple only"], answer: 1 },
        { q: { ur: "Response parse kaise?", en: "Parse response?" }, options: ["r.text", "r.json()", "r.data", "r.read"], answer: 1 },
        { q: { ur: "Network error ka exception?", en: "Network error exception?" }, options: ["NetworkError", "requests.RequestException", "IOError", "APIError"], answer: 1 }
      ]
    }

  ]
};