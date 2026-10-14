// data/module-4.js
// Module 4: Data Structures — 6 topics

window.MODULES = window.MODULES || {};

window.MODULES["module-4"] = {
  id: "module-4",
  number: 4,
  slug: "data-structures",
  title: { ur: "Data Structures", en: "Data Structures" },
  description: {
    ur: "Strings, Lists, Tuples, Sets, Dictionaries, Nested",
    en: "Strings, Lists, Tuples, Sets, Dictionaries, Nested"
  },
  duration: "12 minutes",
  level: "Beginner",
  locked: true,

  topics: [

    /* ═══════════════════════════════════════════════════════
       TOPIC 1: Strings
       ═══════════════════════════════════════════════════════ */
    {
      id: "strings",
      title: { ur: "Strings", en: "Strings" },
      icon: "🔤",
      code: {
        ur: `# String operations
name = "Python"

print(name[0])       # P (pehla character)
print(name[-1])      # n (aakhri character)
print(name[0:3])     # Pyt (slicing)
print(name.upper())  # PYTHON
print(name.lower())  # python
print(len(name))     # 6`,
        en: `# String operations
name = "Python"

print(name[0])       # P (first)
print(name[-1])      # n (last)
print(name[0:3])     # Pyt (slicing)
print(name.upper())  # PYTHON
print(name.lower())  # python
print(len(name))     # 6`
      },
      learn: {
        ur: `<h2 style="font-size:1.15rem;font-weight:800;margin-bottom:14px;">🔤 Strings</h2>
<p style="color:var(--text-soft);font-size:.93rem;margin-bottom:14px;">String <strong>text</strong> hoti hai — quotes ke andar likha kuch bhi. Strings ke andar individual characters ko <strong>index</strong> se access kar sakte hain.</p>

<div style="background:var(--code-bg);border:1px solid var(--code-border);border-radius:10px;overflow:hidden;margin-bottom:16px;font-family:var(--mono);font-size:.82rem;">
  <div style="display:grid;grid-template-columns:140px 1fr;padding:9px 14px;background:var(--code-bg-2);color:var(--py-blue-glow);font-weight:700;font-size:.68rem;text-transform:uppercase;">Method · Kaam</div>
  <div style="display:grid;grid-template-columns:140px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">.upper()</span><span style="color:var(--text-soft);">CAPITAL</span></div>
  <div style="display:grid;grid-template-columns:140px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">.lower()</span><span style="color:var(--text-soft);">small</span></div>
  <div style="display:grid;grid-template-columns:140px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">.strip()</span><span style="color:var(--text-soft);">Extra spaces hataye</span></div>
  <div style="display:grid;grid-template-columns:140px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">.replace(a, b)</span><span style="color:var(--text-soft);">a ko b se badle</span></div>
  <div style="display:grid;grid-template-columns:140px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">.split()</span><span style="color:var(--text-soft);">List mein todo</span></div>
  <div style="display:grid;grid-template-columns:140px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">len(s)</span><span style="color:var(--text-soft);">Kitne characters</span></div>
</div>

<div style="background:linear-gradient(135deg,rgba(75,139,190,.1),rgba(75,139,190,.03));border:1px solid rgba(75,139,190,.25);border-left:3px solid var(--py-blue);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--text);display:block;margin-bottom:3px;">💡 Zaroori baat</strong>
Python mein indexing <strong>0 se shuru</strong> hoti hai. <code>name[0]</code> pehla character hai. Negative indexing ulta chalti hai — <code>name[-1]</code> aakhri character.
</div>

<div style="background:linear-gradient(135deg,rgba(16,185,129,.1),rgba(16,185,129,.02));border:1px solid rgba(16,185,129,.25);border-left:3px solid var(--py-green);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--py-green-glow);display:block;margin-bottom:5px;font-family:var(--mono);font-size:.7rem;text-transform:uppercase;">⚠️ Common Mistake</strong>
String <strong>immutable</strong> hai — <code>name[0] = "J"</code> likhne se error aayega. Change karni ho to naya string banao.
</div>`,
        en: `<h2 style="font-size:1.15rem;font-weight:800;margin-bottom:14px;">🔤 Strings</h2>
<p style="color:var(--text-soft);font-size:.93rem;margin-bottom:14px;">A string is <strong>text</strong> — anything inside quotes. Individual characters can be accessed via <strong>index</strong>.</p>

<div style="background:var(--code-bg);border:1px solid var(--code-border);border-radius:10px;overflow:hidden;margin-bottom:16px;font-family:var(--mono);font-size:.82rem;">
  <div style="display:grid;grid-template-columns:140px 1fr;padding:9px 14px;background:var(--code-bg-2);color:var(--py-blue-glow);font-weight:700;font-size:.68rem;text-transform:uppercase;">Method · Does</div>
  <div style="display:grid;grid-template-columns:140px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">.upper()</span><span style="color:var(--text-soft);">CAPITAL</span></div>
  <div style="display:grid;grid-template-columns:140px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">.lower()</span><span style="color:var(--text-soft);">lowercase</span></div>
  <div style="display:grid;grid-template-columns:140px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">.strip()</span><span style="color:var(--text-soft);">Remove extra spaces</span></div>
  <div style="display:grid;grid-template-columns:140px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">.replace(a, b)</span><span style="color:var(--text-soft);">Replace a with b</span></div>
  <div style="display:grid;grid-template-columns:140px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">.split()</span><span style="color:var(--text-soft);">Split into list</span></div>
  <div style="display:grid;grid-template-columns:140px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">len(s)</span><span style="color:var(--text-soft);">Character count</span></div>
</div>

<div style="background:linear-gradient(135deg,rgba(75,139,190,.1),rgba(75,139,190,.03));border:1px solid rgba(75,139,190,.25);border-left:3px solid var(--py-blue);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--text);display:block;margin-bottom:3px;">💡 Important</strong>
Indexing starts at <strong>0</strong>. <code>name[0]</code> is first. Negative indexing goes backward — <code>name[-1]</code> is last.
</div>

<div style="background:linear-gradient(135deg,rgba(16,185,129,.1),rgba(16,185,129,.02));border:1px solid rgba(16,185,129,.25);border-left:3px solid var(--py-green);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--py-green-glow);display:block;margin-bottom:5px;font-family:var(--mono);font-size:.7rem;text-transform:uppercase;">⚠️ Common Mistake</strong>
Strings are <strong>immutable</strong> — <code>name[0] = "J"</code> will error. Create a new string instead.
</div>`
      },
      theory: {
        ur: `<h3>Yeh kya hai?</h3>
<p>String ek <strong>sequence of characters</strong> hai. Jaise "Hello", "Python", "Ali" — sab strings hain. Quotes ke andar likhi koi bhi cheez string hoti hai.</p>

<h3>Kaise kaam karta hai?</h3>
<p>Python string ko <strong>characters ki list</strong> ki tarah dekhta hai. Har character ka apna <strong>index</strong> hota hai — 0 se shuru. Isi liye <code>name[0]</code> pehla character, <code>name[1]</code> doosra, waghera.</p>

<pre>name = <span class="str">"Python"</span>
<span class="cm"># Index:  P  y  t  h  o  n</span>
<span class="cm">#         0  1  2  3  4  5</span>
<span class="cm">#        -6 -5 -4 -3 -2 -1</span></pre>

<h3>Indexing & Slicing</h3>
<pre>name = <span class="str">"Python"</span>

<span class="fn">print</span>(name[<span class="num">0</span>])      <span class="cm"># P</span>
<span class="fn">print</span>(name[<span class="num">2</span>])      <span class="cm"># t</span>
<span class="fn">print</span>(name[-<span class="num">1</span>])     <span class="cm"># n (aakhri)</span>

<span class="fn">print</span>(name[<span class="num">0</span>:<span class="num">3</span>])    <span class="cm"># Pyt (0 se 2 tak, 3 nahi)</span>
<span class="fn">print</span>(name[:<span class="num">3</span>])     <span class="cm"># Pyt</span>
<span class="fn">print</span>(name[<span class="num">3</span>:])     <span class="cm"># hon</span>
<span class="fn">print</span>(name[::<span class="num">2</span>])    <span class="cm"># Pto (har doosra)</span>
<span class="fn">print</span>(name[::-<span class="num">1</span>])   <span class="cm"># nohtyP (reverse!)</span></pre>

<h3>String Methods</h3>
<pre>text = <span class="str">"  Hello World  "</span>

<span class="fn">print</span>(text.upper())        <span class="cm"># "  HELLO WORLD  "</span>
<span class="fn">print</span>(text.lower())        <span class="cm"># "  hello world  "</span>
<span class="fn">print</span>(text.strip())        <span class="cm"># "Hello World"</span>
<span class="fn">print</span>(text.replace(<span class="str">"World"</span>, <span class="str">"Python"</span>))  <span class="cm"># "  Hello Python  "</span>

sentence = <span class="str">"apple,banana,cherry"</span>
<span class="fn">print</span>(sentence.split(<span class="str">","</span>))  <span class="cm"># ['apple', 'banana', 'cherry']</span></pre>

<div class="real-life">
<div class="head">🌍 Real Life Example</div>
<p><strong>Scenario:</strong> Email address validate karna.</p>
<pre style="margin-top:10px;margin-bottom:0;">email = <span class="str">"  ali@example.com  "</span>
email = email.strip().lower()
<span class="fn">print</span>(email)              <span class="cm"># ali@example.com</span>

<span class="kw">if</span> <span class="str">"@"</span> <span class="kw">in</span> email:
    <span class="fn">print</span>(<span class="str">"Valid email"</span>)</pre>
</div>

<div class="warn-box">
<div class="head">⚠️ Common Mistakes</div>
<ul>
<li><code>name[0]</code> ko <code>name[1]</code> samajhna — indexing 0 se hai</li>
<li>String change karne ki koshish — immutable hai</li>
<li><code>len()</code> mein brackets bhool jana</li>
</ul>
</div>

<div class="pro-tip">
<div class="head">✨ Pro Tip</div>
<p>F-strings sabse best hain string formatting ke liye: <code>f"Hello {name}, age {age}"</code>. Concatenation se behtar.</p>
</div>`,
        en: `<h3>What is it?</h3>
<p>A string is a <strong>sequence of characters</strong>. Like "Hello", "Python", "Ali" — all strings. Anything inside quotes is a string.</p>

<h3>How does it work?</h3>
<p>Python sees strings as <strong>lists of characters</strong>. Each character has an <strong>index</strong> — starting from 0.</p>

<pre>name = <span class="str">"Python"</span>
<span class="cm"># Index:  P  y  t  h  o  n</span>
<span class="cm">#         0  1  2  3  4  5</span>
<span class="cm">#        -6 -5 -4 -3 -2 -1</span></pre>

<h3>Indexing & Slicing</h3>
<pre>name = <span class="str">"Python"</span>

<span class="fn">print</span>(name[<span class="num">0</span>])      <span class="cm"># P</span>
<span class="fn">print</span>(name[<span class="num">2</span>])      <span class="cm"># t</span>
<span class="fn">print</span>(name[-<span class="num">1</span>])     <span class="cm"># n</span>

<span class="fn">print</span>(name[<span class="num">0</span>:<span class="num">3</span>])    <span class="cm"># Pyt</span>
<span class="fn">print</span>(name[:<span class="num">3</span>])     <span class="cm"># Pyt</span>
<span class="fn">print</span>(name[<span class="num">3</span>:])     <span class="cm"># hon</span>
<span class="fn">print</span>(name[::<span class="num">2</span>])    <span class="cm"># Pto</span>
<span class="fn">print</span>(name[::-<span class="num">1</span>])   <span class="cm"># nohtyP (reverse)</span></pre>

<h3>String Methods</h3>
<pre>text = <span class="str">"  Hello World  "</span>

<span class="fn">print</span>(text.upper())        <span class="cm"># "  HELLO WORLD  "</span>
<span class="fn">print</span>(text.lower())        <span class="cm"># "  hello world  "</span>
<span class="fn">print</span>(text.strip())        <span class="cm"># "Hello World"</span>
<span class="fn">print</span>(text.replace(<span class="str">"World"</span>, <span class="str">"Python"</span>))

sentence = <span class="str">"apple,banana,cherry"</span>
<span class="fn">print</span>(sentence.split(<span class="str">","</span>))  <span class="cm"># ['apple', 'banana', 'cherry']</span></pre>

<div class="real-life">
<div class="head">🌍 Real Life Example</div>
<p><strong>Scenario:</strong> Validate email.</p>
<pre style="margin-top:10px;margin-bottom:0;">email = <span class="str">"  ali@example.com  "</span>
email = email.strip().lower()
<span class="fn">print</span>(email)              <span class="cm"># ali@example.com</span>

<span class="kw">if</span> <span class="str">"@"</span> <span class="kw">in</span> email:
    <span class="fn">print</span>(<span class="str">"Valid email"</span>)</pre>
</div>

<div class="warn-box">
<div class="head">⚠️ Common Mistakes</div>
<ul>
<li>Thinking <code>name[0]</code> is <code>name[1]</code> — indexing starts at 0</li>
<li>Trying to modify a string — immutable</li>
<li>Forgetting brackets in <code>len()</code></li>
</ul>
</div>

<div class="pro-tip">
<div class="head">✨ Pro Tip</div>
<p>F-strings are best for formatting: <code>f"Hello {name}, age {age}"</code>. Better than concatenation.</p>
</div>`
      },
      quiz: [
        { q: { ur: 'name = "Python" — name[0]?', en: 'name = "Python" — name[0]?' }, options: ["y", "P", "n", "Error"], answer: 1 },
        { q: { ur: "Indexing kahan se shuru?", en: "Indexing starts at?" }, options: ["1", "0", "-1", "2"], answer: 1 },
        { q: { ur: 'len("Python")?', en: 'len("Python")?' }, options: ["5", "6", "7", "0"], answer: 1 },
        { q: { ur: '"Python".upper()?', en: '"Python".upper()?' }, options: ["python", "PYTHON", "Python", "Error"], answer: 1 },
        { q: { ur: "name[-1] kya deta?", en: "name[-1] gives?" }, options: ["First", "Last", "Error", "Whole"], answer: 1 }
      ]
    },

    /* ═══════════════════════════════════════════════════════
       TOPIC 2: Lists
       ═══════════════════════════════════════════════════════ */
    {
      id: "lists",
      title: { ur: "Lists", en: "Lists" },
      icon: "📋",
      code: {
        ur: `# Lists
fruits = ["apple", "banana", "cherry"]

print(fruits[0])       # apple
fruits.append("mango") # end pe add
fruits[1] = "orange"   # change
fruits.remove("apple") # remove
print(len(fruits))     # kitne items
print(fruits)`,
        en: `# Lists
fruits = ["apple", "banana", "cherry"]

print(fruits[0])       # apple
fruits.append("mango") # add at end
fruits[1] = "orange"   # change
fruits.remove("apple") # remove
print(len(fruits))     # item count
print(fruits)`
      },
      learn: {
        ur: `<h2 style="font-size:1.15rem;font-weight:800;margin-bottom:14px;">📋 Lists</h2>
<p style="color:var(--text-soft);font-size:.93rem;margin-bottom:14px;">List multiple values ko <strong>ek jagah</strong> rakhne ke liye — order mein, aur <strong>change</strong> ki ja sakti hai (mutable).</p>

<div style="background:var(--code-bg);border:1px solid var(--code-border);border-radius:10px;overflow:hidden;margin-bottom:16px;font-family:var(--mono);font-size:.82rem;">
  <div style="display:grid;grid-template-columns:160px 1fr;padding:9px 14px;background:var(--code-bg-2);color:var(--py-blue-glow);font-weight:700;font-size:.68rem;text-transform:uppercase;">Method · Kaam</div>
  <div style="display:grid;grid-template-columns:160px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">.append(x)</span><span style="color:var(--text-soft);">End pe add</span></div>
  <div style="display:grid;grid-template-columns:160px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">.remove(x)</span><span style="color:var(--text-soft);">Item hataye</span></div>
  <div style="display:grid;grid-template-columns:160px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">.sort()</span><span style="color:var(--text-soft);">Sort karo</span></div>
  <div style="display:grid;grid-template-columns:160px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">.pop()</span><span style="color:var(--text-soft);">Aakhri hataye</span></div>
  <div style="display:grid;grid-template-columns:160px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">.insert(i, x)</span><span style="color:var(--text-soft);">Index pe daale</span></div>
</div>

<div style="background:linear-gradient(135deg,rgba(75,139,190,.1),rgba(75,139,190,.03));border:1px solid rgba(75,139,190,.25);border-left:3px solid var(--py-blue);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--text);display:block;margin-bottom:3px;">💡 List vs Tuple</strong>
List <strong>change</strong> ho sakti hai (mutable) — <code>[ ]</code>. Tuple <strong>change nahi</strong> ho sakti (immutable) — <code>( )</code>.
</div>`,
        en: `<h2 style="font-size:1.15rem;font-weight:800;margin-bottom:14px;">📋 Lists</h2>
<p style="color:var(--text-soft);font-size:.93rem;margin-bottom:14px;">A list holds multiple values <strong>in one place</strong> — in order, and <strong>changeable</strong> (mutable).</p>

<div style="background:var(--code-bg);border:1px solid var(--code-border);border-radius:10px;overflow:hidden;margin-bottom:16px;font-family:var(--mono);font-size:.82rem;">
  <div style="display:grid;grid-template-columns:160px 1fr;padding:9px 14px;background:var(--code-bg-2);color:var(--py-blue-glow);font-weight:700;font-size:.68rem;text-transform:uppercase;">Method · Does</div>
  <div style="display:grid;grid-template-columns:160px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">.append(x)</span><span style="color:var(--text-soft);">Add at end</span></div>
  <div style="display:grid;grid-template-columns:160px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">.remove(x)</span><span style="color:var(--text-soft);">Remove item</span></div>
  <div style="display:grid;grid-template-columns:160px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">.sort()</span><span style="color:var(--text-soft);">Sort</span></div>
  <div style="display:grid;grid-template-columns:160px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">.pop()</span><span style="color:var(--text-soft);">Remove last</span></div>
  <div style="display:grid;grid-template-columns:160px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">.insert(i, x)</span><span style="color:var(--text-soft);">Insert at index</span></div>
</div>

<div style="background:linear-gradient(135deg,rgba(75,139,190,.1),rgba(75,139,190,.03));border:1px solid rgba(75,139,190,.25);border-left:3px solid var(--py-blue);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--text);display:block;margin-bottom:3px;">💡 List vs Tuple</strong>
List is <strong>changeable</strong> (mutable) — <code>[ ]</code>. Tuple is <strong>not changeable</strong> (immutable) — <code>( )</code>.
</div>`
      },
      theory: {
        ur: `<h3>Yeh kya hai?</h3>
<p>List ek <strong>ordered collection</strong> hai jisme tum kai items rakh sakte ho — ek hi variable mein. Jaise shopping list, students ki list, prices ki list.</p>

<h3>Kaise kaam karta hai?</h3>
<p>List bhi string ki tarah index se access hoti hai (0 se shuru). Lekin string se alag — list <strong>change ho sakti hai</strong> (mutable).</p>

<pre>fruits = [<span class="str">"apple"</span>, <span class="str">"banana"</span>, <span class="str">"cherry"</span>]
<span class="cm"># Index:  0        1         2</span>

<span class="fn">print</span>(fruits[<span class="num">0</span>])   <span class="cm"># apple</span>
<span class="fn">print</span>(fruits[-<span class="num">1</span>])  <span class="cm"># cherry (aakhri)</span></pre>

<h3>List methods</h3>
<pre>fruits = [<span class="str">"apple"</span>, <span class="str">"banana"</span>]

fruits.append(<span class="str">"mango"</span>)     <span class="cm"># end pe add</span>
fruits.insert(<span class="num">0</span>, <span class="str">"kiwi"</span>)   <span class="cm"># index 0 pe</span>
fruits.remove(<span class="str">"banana"</span>)     <span class="cm"># item hataye</span>
last = fruits.pop()          <span class="cm"># aakhri uthaye</span>

fruits.sort()                <span class="cm"># alphabetically</span>
fruits.reverse()             <span class="cm"># ulta</span>

<span class="fn">print</span>(<span class="fn">len</span>(fruits))          <span class="cm"># count</span></pre>

<h3>Loop on list</h3>
<pre>marks = [<span class="num">85</span>, <span class="num">92</span>, <span class="num">78</span>]
<span class="kw">for</span> m <span class="kw">in</span> marks:
    <span class="fn">print</span>(m)

<span class="cm"># Index ke saath:</span>
<span class="kw">for</span> i, m <span class="kw">in</span> <span class="fn">enumerate</span>(marks):
    <span class="fn">print</span>(i, m)</pre>

<h3>List operations</h3>
<pre>a = [<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>]
b = [<span class="num">4</span>, <span class="num">5</span>]

<span class="fn">print</span>(a + b)        <span class="cm"># [1, 2, 3, 4, 5]</span>
<span class="fn">print</span>(a * <span class="num">2</span>)        <span class="cm"># [1, 2, 3, 1, 2, 3]</span>
<span class="fn">print</span>(<span class="num">2</span> <span class="kw">in</span> a)         <span class="cm"># True</span></pre>

<div class="real-life">
<div class="head">🌍 Real Life Example</div>
<p><strong>Scenario:</strong> Student ke marks ka average nikalna.</p>
<pre style="margin-top:10px;margin-bottom:0;">marks = [<span class="num">85</span>, <span class="num">92</span>, <span class="num">78</span>, <span class="num">90</span>, <span class="num">65</span>]

total = <span class="fn">sum</span>(marks)
average = total / <span class="fn">len</span>(marks)
highest = <span class="fn">max</span>(marks)
lowest = <span class="fn">min</span>(marks)

<span class="fn">print</span>(<span class="str">"Average:"</span>, average)   <span class="cm"># 82.0</span>
<span class="fn">print</span>(<span class="str">"Highest:"</span>, highest)   <span class="cm"># 92</span></pre>
</div>

<div class="warn-box">
<div class="head">⚠️ Common Mistakes</div>
<ul>
<li><code>.append()</code> aur <code>.remove()</code> mein brackets bhool jana</li>
<li>List index range se bahar access karna → IndexError</li>
<li>List ko tuple samajhna — dono alag hain</li>
</ul>
</div>

<div class="pro-tip">
<div class="head">✨ Pro Tip</div>
<p>List comprehension se chhoti lists ek line mein bana sakte ho: <code>[x*x for x in range(5)]</code>. Detailed explanation Module 10 mein.</p>
</div>`,
        en: `<h3>What is it?</h3>
<p>A list is an <strong>ordered collection</strong> where you can keep multiple items — in one variable. Like a shopping list, student list, price list.</p>

<h3>How does it work?</h3>
<p>Lists use index-based access like strings (starting at 0). But unlike strings, lists are <strong>mutable</strong>.</p>

<pre>fruits = [<span class="str">"apple"</span>, <span class="str">"banana"</span>, <span class="str">"cherry"</span>]
<span class="cm"># Index:  0        1         2</span>

<span class="fn">print</span>(fruits[<span class="num">0</span>])   <span class="cm"># apple</span>
<span class="fn">print</span>(fruits[-<span class="num">1</span>])  <span class="cm"># cherry</span></pre>

<h3>List methods</h3>
<pre>fruits = [<span class="str">"apple"</span>, <span class="str">"banana"</span>]

fruits.append(<span class="str">"mango"</span>)     <span class="cm"># add at end</span>
fruits.insert(<span class="num">0</span>, <span class="str">"kiwi"</span>)   <span class="cm"># insert at 0</span>
fruits.remove(<span class="str">"banana"</span>)     <span class="cm"># remove item</span>
last = fruits.pop()          <span class="cm"># pop last</span>

fruits.sort()                <span class="cm"># sort</span>
fruits.reverse()             <span class="cm"># reverse</span>

<span class="fn">print</span>(<span class="fn">len</span>(fruits))</pre>

<h3>Loop on list</h3>
<pre>marks = [<span class="num">85</span>, <span class="num">92</span>, <span class="num">78</span>]
<span class="kw">for</span> m <span class="kw">in</span> marks:
    <span class="fn">print</span>(m)

<span class="cm"># With index:</span>
<span class="kw">for</span> i, m <span class="kw">in</span> <span class="fn">enumerate</span>(marks):
    <span class="fn">print</span>(i, m)</pre>

<h3>List operations</h3>
<pre>a = [<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>]
b = [<span class="num">4</span>, <span class="num">5</span>]

<span class="fn">print</span>(a + b)        <span class="cm"># [1, 2, 3, 4, 5]</span>
<span class="fn">print</span>(a * <span class="num">2</span>)        <span class="cm"># [1, 2, 3, 1, 2, 3]</span>
<span class="fn">print</span>(<span class="num">2</span> <span class="kw">in</span> a)         <span class="cm"># True</span></pre>

<div class="real-life">
<div class="head">🌍 Real Life Example</div>
<p><strong>Scenario:</strong> Calculate average of student marks.</p>
<pre style="margin-top:10px;margin-bottom:0;">marks = [<span class="num">85</span>, <span class="num">92</span>, <span class="num">78</span>, <span class="num">90</span>, <span class="num">65</span>]

total = <span class="fn">sum</span>(marks)
average = total / <span class="fn">len</span>(marks)
highest = <span class="fn">max</span>(marks)

<span class="fn">print</span>(<span class="str">"Average:"</span>, average)   <span class="cm"># 82.0</span>
<span class="fn">print</span>(<span class="str">"Highest:"</span>, highest)   <span class="cm"># 92</span></pre>
</div>

<div class="warn-box">
<div class="head">⚠️ Common Mistakes</div>
<ul>
<li>Forgetting brackets in <code>.append()</code> and <code>.remove()</code></li>
<li>Index out of range → IndexError</li>
<li>Confusing list and tuple — different</li>
</ul>
</div>

<div class="pro-tip">
<div class="head">✨ Pro Tip</div>
<p>List comprehension makes short lists in one line: <code>[x*x for x in range(5)]</code>. Covered in Module 10.</p>
</div>`
      },
      quiz: [
        { q: { ur: 'fruits = ["apple", "banana"] — fruits[0]?', en: 'fruits = ["apple", "banana"] — fruits[0]?' }, options: ["banana", "apple", "Error", "0"], answer: 1 },
        { q: { ur: "List mein end pe add karne ka function?", en: "Function to add at end?" }, options: ["add()", "append()", "insert()", "push()"], answer: 1 },
        { q: { ur: "List ko kis bracket se banate?", en: "Which brackets for lists?" }, options: ["( )", "{ }", "[ ]", "< >"], answer: 2 },
        { q: { ur: "List mutable hoti hai matlab?", en: "List is mutable means?" }, options: ["Unchangeable", "Changeable", "Only numbers", "Only one item"], answer: 1 },
        { q: { ur: ".remove() kya karta hai?", en: ".remove() does?" }, options: ["Sort", "Remove specific item", "Add item", "Empty list"], answer: 1 }
      ]
    },

    /* ═══════════════════════════════════════════════════════
       TOPIC 3: Tuples
       ═══════════════════════════════════════════════════════ */
    {
      id: "tuples",
      title: { ur: "Tuples", en: "Tuples" },
      icon: "🔒",
      code: {
        ur: `# Tuples — immutable
coordinates = (10, 20)
print(coordinates[0])   # 10

# coordinates[0] = 5   # ERROR — tuple change nahi hoti

# Multiple values unpack
x, y = coordinates
print(x, y)   # 10 20`,
        en: `# Tuples — immutable
coordinates = (10, 20)
print(coordinates[0])   # 10

# coordinates[0] = 5   # ERROR

# Unpack
x, y = coordinates
print(x, y)   # 10 20`
      },
      learn: {
        ur: `<h2 style="font-size:1.15rem;font-weight:800;margin-bottom:14px;">🔒 Tuples</h2>
<p style="color:var(--text-soft);font-size:.93rem;margin-bottom:14px;">Tuple List jaisi hi hoti hai, lekin ek bara farak — Tuple ek baar ban'ne ke baad <strong>change nahi ho sakti</strong> (immutable).</p>

<div style="background:var(--code-bg);border:1px solid var(--code-border);border-radius:10px;overflow:hidden;margin-bottom:16px;font-family:var(--mono);font-size:.82rem;">
  <div style="display:grid;grid-template-columns:100px 1fr;padding:9px 14px;background:var(--code-bg-2);color:var(--py-blue-glow);font-weight:700;font-size:.68rem;text-transform:uppercase;">Type · Bracket</div>
  <div style="display:grid;grid-template-columns:100px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">List</span><span style="color:var(--text-soft);"><code>[ ]</code> — mutable</span></div>
  <div style="display:grid;grid-template-columns:100px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">Tuple</span><span style="color:var(--text-soft);"><code>( )</code> — immutable</span></div>
</div>

<div style="background:linear-gradient(135deg,rgba(75,139,190,.1),rgba(75,139,190,.03));border:1px solid rgba(75,139,190,.25);border-left:3px solid var(--py-blue);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--text);display:block;margin-bottom:3px;">💡 Kab use karo</strong>
Jab data <strong>fix</strong> rehna chahiye — jaise coordinates, RGB colors, settings jo change nahi honi chahiye.
</div>

<div style="background:linear-gradient(135deg,rgba(16,185,129,.1),rgba(16,185,129,.02));border:1px solid rgba(16,185,129,.25);border-left:3px solid var(--py-green);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--py-green-glow);display:block;margin-bottom:5px;font-family:var(--mono);font-size:.7rem;text-transform:uppercase;">⚠️ Common Mistake</strong>
Tuple ko change karne ki koshish — <code>tuple[0] = 5</code> hamesha error dega, kyunki tuple immutable hai.
</div>`,
        en: `<h2 style="font-size:1.15rem;font-weight:800;margin-bottom:14px;">🔒 Tuples</h2>
<p style="color:var(--text-soft);font-size:.93rem;margin-bottom:14px;">Tuple is like a List, but one big difference — once created, a Tuple <strong>cannot be changed</strong> (immutable).</p>

<div style="background:var(--code-bg);border:1px solid var(--code-border);border-radius:10px;overflow:hidden;margin-bottom:16px;font-family:var(--mono);font-size:.82rem;">
  <div style="display:grid;grid-template-columns:100px 1fr;padding:9px 14px;background:var(--code-bg-2);color:var(--py-blue-glow);font-weight:700;font-size:.68rem;text-transform:uppercase;">Type · Bracket</div>
  <div style="display:grid;grid-template-columns:100px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">List</span><span style="color:var(--text-soft);"><code>[ ]</code> — mutable</span></div>
  <div style="display:grid;grid-template-columns:100px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">Tuple</span><span style="color:var(--text-soft);"><code>( )</code> — immutable</span></div>
</div>

<div style="background:linear-gradient(135deg,rgba(75,139,190,.1),rgba(75,139,190,.03));border:1px solid rgba(75,139,190,.25);border-left:3px solid var(--py-blue);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--text);display:block;margin-bottom:3px;">💡 When to use</strong>
When data should <strong>stay fixed</strong> — like coordinates, RGB colors, settings.
</div>

<div style="background:linear-gradient(135deg,rgba(16,185,129,.1),rgba(16,185,129,.02));border:1px solid rgba(16,185,129,.25);border-left:3px solid var(--py-green);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--py-green-glow);display:block;margin-bottom:5px;font-family:var(--mono);font-size:.7rem;text-transform:uppercase;">⚠️ Common Mistake</strong>
Trying to modify a tuple — <code>tuple[0] = 5</code> always errors, since tuples are immutable.
</div>`
      },
      theory: {
        ur: `<h3>Yeh kya hai?</h3>
<p>Tuple ek <strong>immutable list</strong> hai. Values fix rehti hain — ek baar ban gayi, badal nahi sakti. Yeh safety deti hai — koi galti se data change nahi kar sakta.</p>

<h3>Kaise kaam karta hai?</h3>
<p>Tuple bhi list ki tarah ordered hoti hai, index se access hoti hai. Lekin <strong>change</strong>, <strong>add</strong>, <strong>remove</strong> — kuch nahi kar sakte.</p>

<pre>coordinates = (<span class="num">10</span>, <span class="num">20</span>)
<span class="fn">print</span>(coordinates[<span class="num">0</span>])   <span class="cm"># 10</span>
<span class="fn">print</span>(coordinates[<span class="num">1</span>])   <span class="cm"># 20</span>

<span class="cm"># coordinates[0] = 5   # ❌ TypeError</span></pre>

<h3>Tuple unpacking</h3>
<pre>point = (<span class="num">3</span>, <span class="num">5</span>)
x, y = point
<span class="fn">print</span>(x)   <span class="cm"># 3</span>
<span class="fn">print</span>(y)   <span class="cm"># 5</span>

<span class="cm"># Swap bhi asaan</span>
a, b = <span class="num">1</span>, <span class="num">2</span>
a, b = b, a
<span class="fn">print</span>(a, b)   <span class="cm"># 2 1</span></pre>

<h3>Single element tuple</h3>
<pre>not_tuple = (<span class="num">5</span>)       <span class="cm"># yeh int hai, tuple nahi!</span>
real_tuple = (<span class="num">5</span>,)     <span class="cm"># yeh tuple hai (comma zaroori)</span>

<span class="fn">print</span>(<span class="fn">type</span>(not_tuple))    <span class="cm"># &lt;class 'int'&gt;</span>
<span class="fn">print</span>(<span class="fn">type</span>(real_tuple))   <span class="cm"># &lt;class 'tuple'&gt;</span></pre>

<h3>Tuple methods (2 sirf)</h3>
<pre>t = (<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>, <span class="num">2</span>, <span class="num">4</span>)
<span class="fn">print</span>(t.count(<span class="num">2</span>))   <span class="cm"># 2 (kitni baar)</span>
<span class="fn">print</span>(t.index(<span class="num">2</span>))   <span class="cm"># 1 (pehla index)</span></pre>

<div class="real-life">
<div class="head">🌍 Real Life Example</div>
<p><strong>Scenario:</strong> Din ke 7 days — yeh fix hain, change nahi hote.</p>
<pre style="margin-top:10px;margin-bottom:0;">days = (<span class="str">"Mon"</span>, <span class="str">"Tue"</span>, <span class="str">"Wed"</span>, <span class="str">"Thu"</span>, <span class="str">"Fri"</span>, <span class="str">"Sat"</span>, <span class="str">"Sun"</span>)

<span class="kw">for</span> day <span class="kw">in</span> days:
    <span class="fn">print</span>(day)</pre>

<p style="margin-top:14px;"><strong>Scenario 2:</strong> GPS coordinates — fix rehte hain.</p>
<pre style="margin-top:10px;margin-bottom:0;">lahore = (<span class="num">31.5204</span>, <span class="num">74.3587</span>)
<span class="fn">print</span>(<span class="str">"Lat:"</span>, lahore[<span class="num">0</span>])
<span class="fn">print</span>(<span class="str">"Lng:"</span>, lahore[<span class="num">1</span>])</pre>
</div>

<div class="warn-box">
<div class="head">⚠️ Common Mistakes</div>
<ul>
<li>Tuple change karne ki koshish — error</li>
<li>Single element tuple banate waqt comma bhool jana — <code>(5)</code> int hai, <code>(5,)</code> tuple hai</li>
<li>Tuple vs List confuse karna</li>
</ul>
</div>

<div class="pro-tip">
<div class="head">✨ Pro Tip</div>
<p>Tuple list se <strong>fast</strong> hoti hai (chhota size). Jab data fix ho, tuple use karo — performance behtar. Aur return multiple values bhi tuple se hota hai.</p>
</div>`,
        en: `<h3>What is it?</h3>
<p>A tuple is an <strong>immutable list</strong>. Values are fixed — once created, can't change. This gives safety — no accidental modification.</p>

<h3>How does it work?</h3>
<p>Tuples are ordered and indexed like lists. But you <strong>cannot</strong> change, add, or remove.</p>

<pre>coordinates = (<span class="num">10</span>, <span class="num">20</span>)
<span class="fn">print</span>(coordinates[<span class="num">0</span>])   <span class="cm"># 10</span>

<span class="cm"># coordinates[0] = 5   # ❌ TypeError</span></pre>

<h3>Tuple unpacking</h3>
<pre>point = (<span class="num">3</span>, <span class="num">5</span>)
x, y = point
<span class="fn">print</span>(x, y)   <span class="cm"># 3 5</span>

<span class="cm"># Swap</span>
a, b = <span class="num">1</span>, <span class="num">2</span>
a, b = b, a
<span class="fn">print</span>(a, b)   <span class="cm"># 2 1</span></pre>

<h3>Single element tuple</h3>
<pre>not_tuple = (<span class="num">5</span>)       <span class="cm"># this is int, not tuple!</span>
real_tuple = (<span class="num">5</span>,)     <span class="cm"># this is tuple (comma needed)</span>

<span class="fn">print</span>(<span class="fn">type</span>(not_tuple))    <span class="cm"># &lt;class 'int'&gt;</span>
<span class="fn">print</span>(<span class="fn">type</span>(real_tuple))   <span class="cm"># &lt;class 'tuple'&gt;</span></pre>

<h3>Tuple methods (only 2)</h3>
<pre>t = (<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>, <span class="num">2</span>, <span class="num">4</span>)
<span class="fn">print</span>(t.count(<span class="num">2</span>))   <span class="cm"># 2</span>
<span class="fn">print</span>(t.index(<span class="num">2</span>))   <span class="cm"># 1</span></pre>

<div class="real-life">
<div class="head">🌍 Real Life Example</div>
<p><strong>Scenario:</strong> 7 days — fixed, never change.</p>
<pre style="margin-top:10px;margin-bottom:0;">days = (<span class="str">"Mon"</span>, <span class="str">"Tue"</span>, <span class="str">"Wed"</span>, <span class="str">"Thu"</span>, <span class="str">"Fri"</span>, <span class="str">"Sat"</span>, <span class="str">"Sun"</span>)

<span class="kw">for</span> day <span class="kw">in</span> days:
    <span class="fn">print</span>(day)</pre>

<p style="margin-top:14px;"><strong>Scenario 2:</strong> GPS coordinates.</p>
<pre style="margin-top:10px;margin-bottom:0;">lahore = (<span class="num">31.5204</span>, <span class="num">74.3587</span>)
<span class="fn">print</span>(<span class="str">"Lat:"</span>, lahore[<span class="num">0</span>])</pre>
</div>

<div class="warn-box">
<div class="head">⚠️ Common Mistakes</div>
<ul>
<li>Trying to modify a tuple</li>
<li>Single-element tuple: <code>(5)</code> is int, <code>(5,)</code> is tuple</li>
<li>Confusing tuple and list</li>
</ul>
</div>

<div class="pro-tip">
<div class="head">✨ Pro Tip</div>
<p>Tuples are <strong>faster</strong> than lists. Use them when data is fixed. Also used to return multiple values from functions.</p>
</div>`
      },
      quiz: [
        { q: { ur: "Tuple ko kis bracket se?", en: "Tuple uses which brackets?" }, options: ["[ ]", "( )", "{ }", "< >"], answer: 1 },
        { q: { ur: "Tuple vs List mein bara farak?", en: "Big difference tuple vs list?" }, options: ["Same", "Tuple immutable, list mutable", "Tuple only numbers", "List slow"], answer: 1 },
        { q: { ur: "coordinates = (10, 20) — coordinates[0] = 5?", en: "coordinates[0] = 5 will?" }, options: ["Work", "Error", "Becomes 5", "Nothing"], answer: 1 },
        { q: { ur: "Tuple kab use karo?", en: "When to use tuple?" }, options: ["Data changes often", "Data stays fixed", "Only strings", "Never"], answer: 1 },
        { q: { ur: "immutable ka matlab?", en: "Immutable means?" }, options: ["Changeable", "Not changeable", "Read once", "Errors"], answer: 1 }
      ]
    },

    /* ═══════════════════════════════════════════════════════
       TOPIC 4: Sets
       ═══════════════════════════════════════════════════════ */
    {
      id: "sets",
      title: { ur: "Sets", en: "Sets" },
      icon: "🎯",
      code: {
        ur: `# Sets — unique values only
numbers = {1, 2, 3, 3, 2}
print(numbers)   # {1, 2, 3}

numbers.add(4)
print(numbers)   # {1, 2, 3, 4}

numbers.remove(2)
print(numbers)   # {1, 3, 4}`,
        en: `# Sets — unique values only
numbers = {1, 2, 3, 3, 2}
print(numbers)   # {1, 2, 3}

numbers.add(4)
print(numbers)   # {1, 2, 3, 4}

numbers.remove(2)
print(numbers)   # {1, 3, 4}`
      },
      learn: {
        ur: `<h2 style="font-size:1.15rem;font-weight:800;margin-bottom:14px;">🎯 Sets</h2>
<p style="color:var(--text-soft);font-size:.93rem;margin-bottom:14px;">Set ek aisi collection hai jisme <strong>duplicate values allowed nahi</strong> hoti, aur order fix nahi hota.</p>

<div style="background:var(--code-bg);border:1px solid var(--code-border);border-radius:10px;overflow:hidden;margin-bottom:16px;font-family:var(--mono);font-size:.82rem;">
  <div style="display:grid;grid-template-columns:140px 1fr;padding:9px 14px;background:var(--code-bg-2);color:var(--py-blue-glow);font-weight:700;font-size:.68rem;text-transform:uppercase;">Method · Kaam</div>
  <div style="display:grid;grid-template-columns:140px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">.add(x)</span><span style="color:var(--text-soft);">Item add</span></div>
  <div style="display:grid;grid-template-columns:140px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">.remove(x)</span><span style="color:var(--text-soft);">Item hataye</span></div>
  <div style="display:grid;grid-template-columns:140px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">.union()</span><span style="color:var(--text-soft);">Do sets jodo</span></div>
  <div style="display:grid;grid-template-columns:140px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">.intersection()</span><span style="color:var(--text-soft);">Common items</span></div>
</div>

<div style="background:linear-gradient(135deg,rgba(75,139,190,.1),rgba(75,139,190,.03));border:1px solid rgba(75,139,190,.25);border-left:3px solid var(--py-blue);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--text);display:block;margin-bottom:3px;">💡 Kab use karo</strong>
Jab <strong>duplicates hatane</strong> hon, ya jab <strong>fast check</strong> karna ho ke koi value list mein hai ya nahi.
</div>

<div style="background:linear-gradient(135deg,rgba(16,185,129,.1),rgba(16,185,129,.02));border:1px solid rgba(16,185,129,.25);border-left:3px solid var(--py-green);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--py-green-glow);display:block;margin-bottom:5px;font-family:var(--mono);font-size:.7rem;text-transform:uppercase;">⚠️ Common Mistake</strong>
Set mein order pe depend karna — <code>set[0]</code> likhna galat hai. Set mein indexing <strong>kaam nahi karti</strong>.
</div>`,
        en: `<h2 style="font-size:1.15rem;font-weight:800;margin-bottom:14px;">🎯 Sets</h2>
<p style="color:var(--text-soft);font-size:.93rem;margin-bottom:14px;">A set is a collection where <strong>duplicates are not allowed</strong> and order is not fixed.</p>

<div style="background:var(--code-bg);border:1px solid var(--code-border);border-radius:10px;overflow:hidden;margin-bottom:16px;font-family:var(--mono);font-size:.82rem;">
  <div style="display:grid;grid-template-columns:140px 1fr;padding:9px 14px;background:var(--code-bg-2);color:var(--py-blue-glow);font-weight:700;font-size:.68rem;text-transform:uppercase;">Method · Does</div>
  <div style="display:grid;grid-template-columns:140px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">.add(x)</span><span style="color:var(--text-soft);">Add item</span></div>
  <div style="display:grid;grid-template-columns:140px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">.remove(x)</span><span style="color:var(--text-soft);">Remove item</span></div>
  <div style="display:grid;grid-template-columns:140px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">.union()</span><span style="color:var(--text-soft);">Combine sets</span></div>
  <div style="display:grid;grid-template-columns:140px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">.intersection()</span><span style="color:var(--text-soft);">Common items</span></div>
</div>

<div style="background:linear-gradient(135deg,rgba(75,139,190,.1),rgba(75,139,190,.03));border:1px solid rgba(75,139,190,.25);border-left:3px solid var(--py-blue);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--text);display:block;margin-bottom:3px;">💡 When to use</strong>
To <strong>remove duplicates</strong>, or for <strong>fast lookup</strong> (is this value present?).
</div>

<div style="background:linear-gradient(135deg,rgba(16,185,129,.1),rgba(16,185,129,.02));border:1px solid rgba(16,185,129,.25);border-left:3px solid var(--py-green);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--py-green-glow);display:block;margin-bottom:5px;font-family:var(--mono);font-size:.7rem;text-transform:uppercase;">⚠️ Common Mistake</strong>
Relying on set order — <code>set[0]</code> is invalid. Indexing <strong>does not work</strong> on sets.
</div>`
      },
      theory: {
        ur: `<h3>Yeh kya hai?</h3>
<p>Set ek <strong>unique collection</strong> hai. Har value sirf ek baar aati hai — duplicates apne aap hat jate hain. Order guaranteed nahi.</p>

<h3>Kaise kaam karta hai?</h3>
<p>Jab tum set banate ho, Python har value ka ek <strong>unique key</strong> banata hai. Agar same value dobara aaye, woh ignore ho jati hai.</p>

<pre>numbers = {<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>, <span class="num">3</span>, <span class="num">2</span>, <span class="num">1</span>}
<span class="fn">print</span>(numbers)   <span class="cm"># {1, 2, 3}</span></pre>

<h3>Set operations</h3>
<pre>a = {<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>}
b = {<span class="num">3</span>, <span class="num">4</span>, <span class="num">5</span>}

<span class="cm"># Union — sab values</span>
<span class="fn">print</span>(a | b)                <span class="cm"># {1, 2, 3, 4, 5}</span>
<span class="fn">print</span>(a.union(b))          <span class="cm"># same</span>

<span class="cm"># Intersection — common</span>
<span class="fn">print</span>(a & b)                <span class="cm"># {3}</span>
<span class="fn">print</span>(a.intersection(b))   <span class="cm"># same</span>

<span class="cm"># Difference — a mein hai, b mein nahi</span>
<span class="fn">print</span>(a - b)                <span class="cm"># {1, 2}</span>

<span class="cm"># Symmetric difference — ek mein hai, dono mein nahi</span>
<span class="fn">print</span>(a ^ b)                <span class="cm"># {1, 2, 4, 5}</span></pre>

<h3>Common methods</h3>
<pre>s = {<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>}

s.add(<span class="num">4</span>)                <span class="cm"># add</span>
s.remove(<span class="num">2</span>)             <span class="cm"># remove (error agar nahi mila)</span>
s.discard(<span class="num">99</span>)           <span class="cm"># remove (no error)</span>
<span class="fn">print</span>(<span class="fn">len</span>(s))            <span class="cm"># count</span>
<span class="fn">print</span>(<span class="num">3</span> <span class="kw">in</span> s)            <span class="cm"># True</span></pre>

<div class="real-life">
<div class="head">🌍 Real Life Example</div>
<p><strong>Scenario:</strong> Duplicate emails hatana.</p>
<pre style="margin-top:10px;margin-bottom:0;">emails = [<span class="str">"a@x.com"</span>, <span class="str">"b@x.com"</span>, <span class="str">"a@x.com"</span>, <span class="str">"c@x.com"</span>]
unique = <span class="fn">set</span>(emails)

<span class="fn">print</span>(unique)   <span class="cm"># 3 unique emails</span>
<span class="fn">print</span>(<span class="fn">len</span>(unique))  <span class="cm"># 3</span></pre>

<p style="margin-top:14px;"><strong>Scenario 2:</strong> Do classes ke common students.</p>
<pre style="margin-top:10px;margin-bottom:0;">class_a = {<span class="str">"Ali"</span>, <span class="str">"Sara"</span>, <span class="str">"Ahmed"</span>}
class_b = {<span class="str">"Sara"</span>, <span class="str">"Bilal"</span>}

common = class_a & class_b
<span class="fn">print</span>(common)   <span class="cm"># {'Sara'}</span></pre>
</div>

<div class="warn-box">
<div class="head">⚠️ Common Mistakes</div>
<ul>
<li>Set index karna — <code>set[0]</code> kaam nahi karta</li>
<li>Empty set banane ke liye <code>{}</code> likhna — woh dict hai, set nahi. Use <code>set()</code></li>
<li>Set order pe depend karna</li>
</ul>
</div>

<div class="pro-tip">
<div class="head">✨ Pro Tip</div>
<p>Membership check (<code>x in set</code>) list se <strong>bohat fast</strong> hai — O(1) vs O(n). Bare data mein set use karo.</p>
</div>`,
        en: `<h3>What is it?</h3>
<p>A set is a <strong>unique collection</strong>. Each value appears once — duplicates auto-removed. Order not guaranteed.</p>

<h3>How does it work?</h3>
<p>When you create a set, Python assigns a <strong>unique key</strong> to each value. If duplicate arrives, it's ignored.</p>

<pre>numbers = {<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>, <span class="num">3</span>, <span class="num">2</span>, <span class="num">1</span>}
<span class="fn">print</span>(numbers)   <span class="cm"># {1, 2, 3}</span></pre>

<h3>Set operations</h3>
<pre>a = {<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>}
b = {<span class="num">3</span>, <span class="num">4</span>, <span class="num">5</span>}

<span class="cm"># Union</span>
<span class="fn">print</span>(a | b)                <span class="cm"># {1, 2, 3, 4, 5}</span>

<span class="cm"># Intersection</span>
<span class="fn">print</span>(a & b)                <span class="cm"># {3}</span>

<span class="cm"># Difference</span>
<span class="fn">print</span>(a - b)                <span class="cm"># {1, 2}</span>

<span class="cm"># Symmetric difference</span>
<span class="fn">print</span>(a ^ b)                <span class="cm"># {1, 2, 4, 5}</span></pre>

<h3>Common methods</h3>
<pre>s = {<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>}

s.add(<span class="num">4</span>)
s.remove(<span class="num">2</span>)             <span class="cm"># error if not found</span>
s.discard(<span class="num">99</span>)           <span class="cm"># no error</span>
<span class="fn">print</span>(<span class="fn">len</span>(s))
<span class="fn">print</span>(<span class="num">3</span> <span class="kw">in</span> s)            <span class="cm"># True</span></pre>

<div class="real-life">
<div class="head">🌍 Real Life Example</div>
<p><strong>Scenario:</strong> Remove duplicate emails.</p>
<pre style="margin-top:10px;margin-bottom:0;">emails = [<span class="str">"a@x.com"</span>, <span class="str">"b@x.com"</span>, <span class="str">"a@x.com"</span>, <span class="str">"c@x.com"</span>]
unique = <span class="fn">set</span>(emails)
<span class="fn">print</span>(<span class="fn">len</span>(unique))   <span class="cm"># 3</span></pre>

<p style="margin-top:14px;"><strong>Scenario 2:</strong> Common students between two classes.</p>
<pre style="margin-top:10px;margin-bottom:0;">class_a = {<span class="str">"Ali"</span>, <span class="str">"Sara"</span>, <span class="str">"Ahmed"</span>}
class_b = {<span class="str">"Sara"</span>, <span class="str">"Bilal"</span>}

<span class="fn">print</span>(class_a & class_b)   <span class="cm"># {'Sara'}</span></pre>
</div>

<div class="warn-box">
<div class="head">⚠️ Common Mistakes</div>
<ul>
<li>Indexing a set — <code>set[0]</code> fails</li>
<li>Using <code>{}</code> for empty set — that's a dict. Use <code>set()</code></li>
<li>Relying on set order</li>
</ul>
</div>

<div class="pro-tip">
<div class="head">✨ Pro Tip</div>
<p>Membership check (<code>x in set</code>) is <strong>much faster</strong> than list — O(1) vs O(n). Use sets for large data.</p>
</div>`
      },
      quiz: [
        { q: { ur: "Set ko kis bracket se?", en: "Set uses which brackets?" }, options: ["[ ]", "( )", "{ }", "< >"], answer: 2 },
        { q: { ur: "{1, 2, 3, 3, 2} ka result?", en: "{1, 2, 3, 3, 2} results in?" }, options: ["{1,2,3,3,2}", "{1, 2, 3}", "Error", "[1,2,3]"], answer: 1 },
        { q: { ur: "Set mein duplicates allowed?", en: "Duplicates allowed in set?" }, options: ["No", "Yes", "Only numbers", "Only strings"], answer: 0 },
        { q: { ur: "Set mein add karne ka function?", en: "Function to add to set?" }, options: ["append()", "add()", "insert()", "push()"], answer: 1 },
        { q: { ur: "set[0] kaam karta hai?", en: "Does set[0] work?" }, options: ["Always", "No, order not fixed", "If 1 item", "Only strings"], answer: 1 }
      ]
    },

    /* ═══════════════════════════════════════════════════════
       TOPIC 5: Dictionaries
       ═══════════════════════════════════════════════════════ */
    {
      id: "dictionaries",
      title: { ur: "Dictionaries", en: "Dictionaries" },
      icon: "📖",
      code: {
        ur: `# Dictionary — key-value pairs
student = {
    "name": "Ali",
    "age": 21,
    "city": "Lahore"
}

print(student["name"])   # Ali
student["age"] = 22      # update
student["grade"] = "A"   # add
print(student.keys())
print(student.values())`,
        en: `# Dictionary — key-value pairs
student = {
    "name": "Ali",
    "age": 21,
    "city": "Lahore"
}

print(student["name"])   # Ali
student["age"] = 22      # update
student["grade"] = "A"   # add
print(student.keys())
print(student.values())`
      },
      learn: {
        ur: `<h2 style="font-size:1.15rem;font-weight:800;margin-bottom:14px;">📖 Dictionaries</h2>
<p style="color:var(--text-soft);font-size:.93rem;margin-bottom:14px;">Dictionary data ko <strong>key-value pairs</strong> mein store karti hai — har value ka apna naam (key) hota hai, index number ki jagah.</p>

<div style="background:var(--code-bg);border:1px solid var(--code-border);border-radius:10px;overflow:hidden;margin-bottom:16px;font-family:var(--mono);font-size:.82rem;">
  <div style="display:grid;grid-template-columns:160px 1fr;padding:9px 14px;background:var(--code-bg-2);color:var(--py-blue-glow);font-weight:700;font-size:.68rem;text-transform:uppercase;">Method · Kaam</div>
  <div style="display:grid;grid-template-columns:160px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">.keys()</span><span style="color:var(--text-soft);">Sab keys</span></div>
  <div style="display:grid;grid-template-columns:160px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">.values()</span><span style="color:var(--text-soft);">Sab values</span></div>
  <div style="display:grid;grid-template-columns:160px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">.items()</span><span style="color:var(--text-soft);">Key-value pairs</span></div>
  <div style="display:grid;grid-template-columns:160px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">.get(k)</span><span style="color:var(--text-soft);">Safe access</span></div>
  <div style="display:grid;grid-template-columns:160px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">.update(d)</span><span style="color:var(--text-soft);">Merge</span></div>
</div>

<div style="background:linear-gradient(135deg,rgba(75,139,190,.1),rgba(75,139,190,.03));border:1px solid rgba(75,139,190,.25);border-left:3px solid var(--py-blue);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--text);display:block;margin-bottom:3px;">💡 Zaroori baat</strong>
Value access karne ke liye <strong>index number nahi, key</strong> use hoti hai — <code>student["name"]</code>, na ke <code>student[0]</code>.
</div>

<div style="background:linear-gradient(135deg,rgba(16,185,129,.1),rgba(16,185,129,.02));border:1px solid rgba(16,185,129,.25);border-left:3px solid var(--py-green);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--py-green-glow);display:block;margin-bottom:5px;font-family:var(--mono);font-size:.7rem;text-transform:uppercase;">⚠️ Common Mistake</strong>
<code>student[0]</code> likhna — error dega (<code>KeyError</code>). Dictionary keys se access hoti hai.
</div>`,
        en: `<h2 style="font-size:1.15rem;font-weight:800;margin-bottom:14px;">📖 Dictionaries</h2>
<p style="color:var(--text-soft);font-size:.93rem;margin-bottom:14px;">Dictionary stores data as <strong>key-value pairs</strong> — each value has a name (key) instead of an index.</p>

<div style="background:var(--code-bg);border:1px solid var(--code-border);border-radius:10px;overflow:hidden;margin-bottom:16px;font-family:var(--mono);font-size:.82rem;">
  <div style="display:grid;grid-template-columns:160px 1fr;padding:9px 14px;background:var(--code-bg-2);color:var(--py-blue-glow);font-weight:700;font-size:.68rem;text-transform:uppercase;">Method · Does</div>
  <div style="display:grid;grid-template-columns:160px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">.keys()</span><span style="color:var(--text-soft);">All keys</span></div>
  <div style="display:grid;grid-template-columns:160px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">.values()</span><span style="color:var(--text-soft);">All values</span></div>
  <div style="display:grid;grid-template-columns:160px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">.items()</span><span style="color:var(--text-soft);">Key-value pairs</span></div>
  <div style="display:grid;grid-template-columns:160px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">.get(k)</span><span style="color:var(--text-soft);">Safe access</span></div>
  <div style="display:grid;grid-template-columns:160px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">.update(d)</span><span style="color:var(--text-soft);">Merge</span></div>
</div>

<div style="background:linear-gradient(135deg,rgba(75,139,190,.1),rgba(75,139,190,.03));border:1px solid rgba(75,139,190,.25);border-left:3px solid var(--py-blue);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--text);display:block;margin-bottom:3px;">💡 Important</strong>
Access values by <strong>key</strong>, not index — <code>student["name"]</code>, not <code>student[0]</code>.
</div>

<div style="background:linear-gradient(135deg,rgba(16,185,129,.1),rgba(16,185,129,.02));border:1px solid rgba(16,185,129,.25);border-left:3px solid var(--py-green);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--py-green-glow);display:block;margin-bottom:5px;font-family:var(--mono);font-size:.7rem;text-transform:uppercase;">⚠️ Common Mistake</strong>
Writing <code>student[0]</code> — will raise <code>KeyError</code>. Dicts access via keys.
</div>`
      },
      theory: {
        ur: `<h3>Yeh kya hai?</h3>
<p>Dictionary ek <strong>key-value store</strong> hai. Har value ka ek naam hota hai (key), jisse tum usay access karte ho. Jaise phonebook — naam (key) se number (value) milta hai.</p>

<h3>Kaise kaam karta hai?</h3>
<p>Dictionary bhi <code>{ }</code> use karti hai, lekin <strong>key: value</strong> format mein. Har key unique hoti hai — same key dobara nahi.</p>

<pre>student = {
    <span class="str">"name"</span>: <span class="str">"Ali"</span>,
    <span class="str">"age"</span>: <span class="num">21</span>,
    <span class="str">"city"</span>: <span class="str">"Lahore"</span>
}

<span class="fn">print</span>(student[<span class="str">"name"</span>])   <span class="cm"># Ali</span>
<span class="fn">print</span>(student[<span class="str">"age"</span>])    <span class="cm"># 21</span></pre>

<h3>Update / Add</h3>
<pre>student[<span class="str">"age"</span>] = <span class="num">22</span>          <span class="cm"># update</span>
student[<span class="str">"grade"</span>] = <span class="str">"A"</span>       <span class="cm"># add new</span>

student.update({<span class="str">"age"</span>: <span class="num">23</span>, <span class="str">"country"</span>: <span class="str">"PK"</span>})   <span class="cm"># multiple</span>

<span class="kw">del</span> student[<span class="str">"city"</span>]         <span class="cm"># remove key</span></pre>

<h3>Safe access — .get()</h3>
<pre>student = {<span class="str">"name"</span>: <span class="str">"Ali"</span>}

<span class="cm"># print(student["age"])   # ❌ KeyError</span>
<span class="fn">print</span>(student.get(<span class="str">"age"</span>))       <span class="cm"># None (no error)</span>
<span class="fn">print</span>(student.get(<span class="str">"age"</span>, <span class="num">0</span>))    <span class="cm"># 0 (default)</span></pre>

<h3>Loop on dict</h3>
<pre>student = {<span class="str">"name"</span>: <span class="str">"Ali"</span>, <span class="str">"age"</span>: <span class="num">21</span>}

<span class="kw">for</span> key <span class="kw">in</span> student:
    <span class="fn">print</span>(key)   <span class="cm"># name, age</span>

<span class="kw">for</span> key, value <span class="kw">in</span> student.items():
    <span class="fn">print</span>(key, <span class="str">"="</span>, value)   <span class="cm"># name = Ali, age = 21</span></pre>

<div class="real-life">
<div class="head">🌍 Real Life Example</div>
<p><strong>Scenario:</strong> Student ka poora record rakhna.</p>
<pre style="margin-top:10px;margin-bottom:0;">students = {
    <span class="str">"ali"</span>: {<span class="str">"age"</span>: <span class="num">21</span>, <span class="str">"marks"</span>: <span class="num">85</span>},
    <span class="str">"sara"</span>: {<span class="str">"age"</span>: <span class="num">22</span>, <span class="str">"marks"</span>: <span class="num">92</span>}
}

<span class="fn">print</span>(students[<span class="str">"ali"</span>][<span class="str">"marks"</span>])   <span class="cm"># 85</span>
<span class="fn">print</span>(students.get(<span class="str">"ahmed"</span>, <span class="str">"Nahi mila"</span>))   <span class="cm"># Nahi mila</span></pre>
</div>

<div class="warn-box">
<div class="head">⚠️ Common Mistakes</div>
<ul>
<li><code>student[0]</code> — index kaam nahi karta, keys chahiye</li>
<li>Missing key access → KeyError (use <code>.get()</code>)</li>
<li>Keys duplicate — same key dobara likhi to purani value replace ho jati hai</li>
</ul>
</div>

<div class="pro-tip">
<div class="head">✨ Pro Tip</div>
<p>Real-world data (JSON, APIs) dictionaries mein aata hai. Isliye dictionaries <strong>sabse important</strong> data structure hai Python mein.</p>
</div>`,
        en: `<h3>What is it?</h3>
<p>A dictionary is a <strong>key-value store</strong>. Each value has a name (key) to access it. Like a phonebook — name (key) → number (value).</p>

<h3>How does it work?</h3>
<p>Dictionaries use <code>{ }</code>, but in <strong>key: value</strong> format. Each key is unique — no duplicates.</p>

<pre>student = {
    <span class="str">"name"</span>: <span class="str">"Ali"</span>,
    <span class="str">"age"</span>: <span class="num">21</span>,
    <span class="str">"city"</span>: <span class="str">"Lahore"</span>
}

<span class="fn">print</span>(student[<span class="str">"name"</span>])   <span class="cm"># Ali</span></pre>

<h3>Update / Add</h3>
<pre>student[<span class="str">"age"</span>] = <span class="num">22</span>          <span class="cm"># update</span>
student[<span class="str">"grade"</span>] = <span class="str">"A"</span>       <span class="cm"># add</span>

student.update({<span class="str">"age"</span>: <span class="num">23</span>, <span class="str">"country"</span>: <span class="str">"PK"</span>})

<span class="kw">del</span> student[<span class="str">"city"</span>]         <span class="cm"># remove key</span></pre>

<h3>Safe access — .get()</h3>
<pre>student = {<span class="str">"name"</span>: <span class="str">"Ali"</span>}

<span class="fn">print</span>(student.get(<span class="str">"age"</span>))       <span class="cm"># None</span>
<span class="fn">print</span>(student.get(<span class="str">"age"</span>, <span class="num">0</span>))    <span class="cm"># 0</span></pre>

<h3>Loop on dict</h3>
<pre><span class="kw">for</span> key, value <span class="kw">in</span> student.items():
    <span class="fn">print</span>(key, <span class="str">"="</span>, value)</pre>

<div class="real-life">
<div class="head">🌍 Real Life Example</div>
<p><strong>Scenario:</strong> Student records.</p>
<pre style="margin-top:10px;margin-bottom:0;">students = {
    <span class="str">"ali"</span>: {<span class="str">"age"</span>: <span class="num">21</span>, <span class="str">"marks"</span>: <span class="num">85</span>},
    <span class="str">"sara"</span>: {<span class="str">"age"</span>: <span class="num">22</span>, <span class="str">"marks"</span>: <span class="num">92</span>}
}

<span class="fn">print</span>(students[<span class="str">"ali"</span>][<span class="str">"marks"</span>])   <span class="cm"># 85</span></pre>
</div>

<div class="warn-box">
<div class="head">⚠️ Common Mistakes</div>
<ul>
<li><code>student[0]</code> — indexes don't work, keys do</li>
<li>Missing key access → KeyError (use <code>.get()</code>)</li>
<li>Duplicate keys — later value overwrites earlier</li>
</ul>
</div>

<div class="pro-tip">
<div class="head">✨ Pro Tip</div>
<p>Real-world data (JSON, APIs) comes as dictionaries. Dicts are the <strong>most important</strong> data structure in Python.</p>
</div>`
      },
      quiz: [
        { q: { ur: "Dictionary ko kis bracket se?", en: "Dictionary uses which brackets?" }, options: ["[ ]", "( )", "{ } with key:value", "< >"], answer: 2 },
        { q: { ur: 'student = {"name": "Ali"} — value kaise?', en: 'student = {"name": "Ali"} — access value?' }, options: ["student[0]", 'student["name"]', "student.name", "student(name)"], answer: 1 },
        { q: { ur: "Dictionary data kis format mein?", en: "Dictionary data format?" }, options: ["Only values", "Key-value pairs", "Only numbers", "Only strings"], answer: 1 },
        { q: { ur: "Sab keys dekhne ka function?", en: "Function for all keys?" }, options: ["values()", "keys()", "items()", "list()"], answer: 1 },
        { q: { ur: "student[0] likhne se (agar 0 key nahi)?", en: "student[0] (if 0 not a key)?" }, options: ["First value", "KeyError", "None", "Empty dict"], answer: 1 }
      ]
    },

    /* ═══════════════════════════════════════════════════════
       TOPIC 6: Nested Data Structures
       ═══════════════════════════════════════════════════════ */
    {
      id: "nested",
      title: { ur: "Nested Data Structures", en: "Nested Data Structures" },
      icon: "🪆",
      code: {
        ur: `# Nested — list of dicts
students = [
    {"name": "Ali", "age": 21},
    {"name": "Sara", "age": 22}
]

print(students[0]["name"])   # Ali
print(students[1]["age"])    # 22

for s in students:
    print(s["name"], "-", s["age"])`,
        en: `# Nested — list of dicts
students = [
    {"name": "Ali", "age": 21},
    {"name": "Sara", "age": 22}
]

print(students[0]["name"])   # Ali
print(students[1]["age"])    # 22

for s in students:
    print(s["name"], "-", s["age"])`
      },
      learn: {
        ur: `<h2 style="font-size:1.15rem;font-weight:800;margin-bottom:14px;">🪆 Nested Data Structures</h2>
<p style="color:var(--text-soft);font-size:.93rem;margin-bottom:14px;">Nested ka matlab hai ek data structure ke <strong>andar doosri</strong> data structure — jaise list ke andar dictionary, ya dictionary ke andar list.</p>

<div style="background:var(--code-bg);border:1px solid var(--code-border);border-radius:10px;overflow:hidden;margin-bottom:16px;font-family:var(--mono);font-size:.82rem;">
  <div style="display:grid;grid-template-columns:180px 1fr;padding:9px 14px;background:var(--code-bg-2);color:var(--py-blue-glow);font-weight:700;font-size:.68rem;text-transform:uppercase;">Structure · Use</div>
  <div style="display:grid;grid-template-columns:180px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">List of dicts</span><span style="color:var(--text-soft);">Multiple records</span></div>
  <div style="display:grid;grid-template-columns:180px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">Dict of lists</span><span style="color:var(--text-soft);">Categories</span></div>
  <div style="display:grid;grid-template-columns:180px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">Dict of dicts</span><span style="color:var(--text-soft);">Complex records</span></div>
</div>

<div style="background:linear-gradient(135deg,rgba(75,139,190,.1),rgba(75,139,190,.03));border:1px solid rgba(75,139,190,.25);border-left:3px solid var(--py-blue);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--text);display:block;margin-bottom:3px;">💡 Zaroori baat</strong>
Access karte waqt <strong>order</strong> yaad rakho — pehle list ka index, phir dict ki key: <code>students[0]["name"]</code>.
</div>`,
        en: `<h2 style="font-size:1.15rem;font-weight:800;margin-bottom:14px;">🪆 Nested Data Structures</h2>
<p style="color:var(--text-soft);font-size:.93rem;margin-bottom:14px;">Nested means one data structure <strong>inside another</strong> — like a list of dicts, or a dict of lists.</p>

<div style="background:var(--code-bg);border:1px solid var(--code-border);border-radius:10px;overflow:hidden;margin-bottom:16px;font-family:var(--mono);font-size:.82rem;">
  <div style="display:grid;grid-template-columns:180px 1fr;padding:9px 14px;background:var(--code-bg-2);color:var(--py-blue-glow);font-weight:700;font-size:.68rem;text-transform:uppercase;">Structure · Use</div>
  <div style="display:grid;grid-template-columns:180px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">List of dicts</span><span style="color:var(--text-soft);">Multiple records</span></div>
  <div style="display:grid;grid-template-columns:180px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">Dict of lists</span><span style="color:var(--text-soft);">Categories</span></div>
  <div style="display:grid;grid-template-columns:180px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">Dict of dicts</span><span style="color:var(--text-soft);">Complex records</span></div>
</div>

<div style="background:linear-gradient(135deg,rgba(75,139,190,.1),rgba(75,139,190,.03));border:1px solid rgba(75,139,190,.25);border-left:3px solid var(--py-blue);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--text);display:block;margin-bottom:3px;">💡 Important</strong>
Remember the <strong>order</strong> — first list index, then dict key: <code>students[0]["name"]</code>.
</div>`
      },
      theory: {
        ur: `<h3>Yeh kya hai?</h3>
<p>Nested data structure ka matlab hai <strong>structures ke andar structures</strong>. Yeh real-world data ke liye bohat common hai — jaise ek course ke students (list), har student khud ek record (dict).</p>

<h3>Common patterns</h3>

<h4>1. List of Dictionaries (sabse common)</h4>
<pre>students = [
    {<span class="str">"name"</span>: <span class="str">"Ali"</span>, <span class="str">"age"</span>: <span class="num">21</span>},
    {<span class="str">"name"</span>: <span class="str">"Sara"</span>, <span class="str">"age"</span>: <span class="num">22</span>}
]

<span class="fn">print</span>(students[<span class="num">0</span>][<span class="str">"name"</span>])   <span class="cm"># Ali</span>
<span class="fn">print</span>(students[<span class="num">1</span>][<span class="str">"age"</span>])    <span class="cm"># 22</span>

<span class="kw">for</span> s <span class="kw">in</span> students:
    <span class="fn">print</span>(s[<span class="str">"name"</span>])</pre>

<h4>2. Dictionary of Lists</h4>
<pre>categories = {
    <span class="str">"fruits"</span>: [<span class="str">"apple"</span>, <span class="str">"banana"</span>],
    <span class="str">"veggies"</span>: [<span class="str">"carrot"</span>, <span class="str">"potato"</span>]
}

<span class="fn">print</span>(categories[<span class="str">"fruits"</span>][<span class="num">0</span>])   <span class="cm"># apple</span>

<span class="kw">for</span> cat, items <span class="kw">in</span> categories.items():
    <span class="fn">print</span>(cat, <span class="str">":"</span>, items)</pre>

<h4>3. Dictionary of Dictionaries</h4>
<pre>students = {
    <span class="str">"ali"</span>: {<span class="str">"age"</span>: <span class="num">21</span>, <span class="str">"marks"</span>: <span class="num">85</span>},
    <span class="str">"sara"</span>: {<span class="str">"age"</span>: <span class="num">22</span>, <span class="str">"marks"</span>: <span class="num">92</span>}
}

<span class="fn">print</span>(students[<span class="str">"ali"</span>][<span class="str">"marks"</span>])   <span class="cm"># 85</span></pre>

<div class="real-life">
<div class="head">🌍 Real Life Example</div>
<p><strong>Scenario:</strong> Online store ka inventory.</p>
<pre style="margin-top:10px;margin-bottom:0;">products = [
    {<span class="str">"name"</span>: <span class="str">"Laptop"</span>, <span class="str">"price"</span>: <span class="num">80000</span>, <span class="str">"stock"</span>: <span class="num">5</span>},
    {<span class="str">"name"</span>: <span class="str">"Phone"</span>, <span class="str">"price"</span>: <span class="num">30000</span>, <span class="str">"stock"</span>: <span class="num">10</span>}
]

<span class="cm"># Sirf expensive products</span>
<span class="kw">for</span> p <span class="kw">in</span> products:
    <span class="kw">if</span> p[<span class="str">"price"</span>] > <span class="num">50000</span>:
        <span class="fn">print</span>(p[<span class="str">"name"</span>], <span class="str">"-"</span>, p[<span class="str">"price"</span>])</pre>
</div>

<div class="warn-box">
<div class="head">⚠️ Common Mistakes</div>
<ul>
<li>Access order bhool jana — pehle list index, phir dict key</li>
<li><code>students["name"][0]</code> likhna — galat</li>
<li>Nested structure ko print karna — sahi format nahi milega</li>
</ul>
</div>

<div class="pro-tip">
<div class="head">✨ Pro Tip</div>
<p>APIs se data <strong>nested structures</strong> mein aata hai — jaise list of dicts of lists. Isliye yeh concept real projects ke liye bohat zaroori hai.</p>
</div>`,
        en: `<h3>What is it?</h3>
<p>Nested data structures means <strong>structures inside structures</strong>. Very common for real-world data — like a list of students, each student being a dict.</p>

<h3>Common patterns</h3>

<h4>1. List of Dictionaries (most common)</h4>
<pre>students = [
    {<span class="str">"name"</span>: <span class="str">"Ali"</span>, <span class="str">"age"</span>: <span class="num">21</span>},
    {<span class="str">"name"</span>: <span class="str">"Sara"</span>, <span class="str">"age"</span>: <span class="num">22</span>}
]

<span class="fn">print</span>(students[<span class="num">0</span>][<span class="str">"name"</span>])   <span class="cm"># Ali</span>

<span class="kw">for</span> s <span class="kw">in</span> students:
    <span class="fn">print</span>(s[<span class="str">"name"</span>])</pre>

<h4>2. Dictionary of Lists</h4>
<pre>categories = {
    <span class="str">"fruits"</span>: [<span class="str">"apple"</span>, <span class="str">"banana"</span>],
    <span class="str">"veggies"</span>: [<span class="str">"carrot"</span>, <span class="str">"potato"</span>]
}

<span class="fn">print</span>(categories[<span class="str">"fruits"</span>][<span class="num">0</span>])   <span class="cm"># apple</span></pre>

<h4>3. Dictionary of Dictionaries</h4>
<pre>students = {
    <span class="str">"ali"</span>: {<span class="str">"age"</span>: <span class="num">21</span>, <span class="str">"marks"</span>: <span class="num">85</span>},
    <span class="str">"sara"</span>: {<span class="str">"age"</span>: <span class="num">22</span>, <span class="str">"marks"</span>: <span class="num">92</span>}
}

<span class="fn">print</span>(students[<span class="str">"ali"</span>][<span class="str">"marks"</span>])   <span class="cm"># 85</span></pre>

<div class="real-life">
<div class="head">🌍 Real Life Example</div>
<p><strong>Scenario:</strong> Online store inventory.</p>
<pre style="margin-top:10px;margin-bottom:0;">products = [
    {<span class="str">"name"</span>: <span class="str">"Laptop"</span>, <span class="str">"price"</span>: <span class="num">80000</span>, <span class="str">"stock"</span>: <span class="num">5</span>},
    {<span class="str">"name"</span>: <span class="str">"Phone"</span>, <span class="str">"price"</span>: <span class="num">30000</span>, <span class="str">"stock"</span>: <span class="num">10</span>}
]

<span class="kw">for</span> p <span class="kw">in</span> products:
    <span class="kw">if</span> p[<span class="str">"price"</span>] > <span class="num">50000</span>:
        <span class="fn">print</span>(p[<span class="str">"name"</span>])</pre>
</div>

<div class="warn-box">
<div class="head">⚠️ Common Mistakes</div>
<ul>
<li>Forgetting access order — list index first, then dict key</li>
<li>Writing <code>students["name"][0]</code> — wrong</li>
<li>Printing nested structure directly — ugly output</li>
</ul>
</div>

<div class="pro-tip">
<div class="head">✨ Pro Tip</div>
<p>APIs return data as <strong>nested structures</strong> — like list of dicts of lists. So this concept is crucial for real projects.</p>
</div>`
      },
      quiz: [
        { q: { ur: 'students[0]["name"] — pehle kya?', en: 'students[0]["name"] — what first?' }, options: ["Dict key", "List index", "Same", "Error"], answer: 1 },
        { q: { ur: "Nested structure ka matlab?", en: "Nested means?" }, options: ["Two variables", "One structure inside another", "Only lists", "Error type"], answer: 1 },
        { q: { ur: "List of dicts kis kaam aata hai?", en: "List of dicts used for?" }, options: ["Nothing", "Multiple records", "Only numbers", "Speed"], answer: 1 },
        { q: { ur: 'students[1]["age"] kya?', en: 'students[1]["age"] gives?' }, options: ["First age", "Second age", "Error", "All ages"], answer: 1 },
        { q: { ur: "Nested mein loop lagane ka faida?", en: "Why loop nested?" }, options: ["No benefit", "Process each record", "Check errors", "Shrink list"], answer: 1 }
      ]
    }

  ]
};