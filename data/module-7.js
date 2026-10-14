// data/module-7.js
// Module 7: File Handling — 3 topics

window.MODULES = window.MODULES || {};

window.MODULES["module-7"] = {
  id: "module-7",
  number: 7,
  slug: "file-handling",
  title: { ur: "File Handling", en: "File Handling" },
  description: {
    ur: "Files padhna, likhna, aur CSV/JSON handle karna",
    en: "Reading, writing files, and handling CSV/JSON"
  },
  duration: "10 minutes",
  level: "Intermediate",
  locked: true,

  topics: [

    /* ═══════════════════════════════════════════════════════
       TOPIC 1: Reading Files
       ═══════════════════════════════════════════════════════ */
    {
      id: "reading-files",
      title: { ur: "Reading Files", en: "Reading Files" },
      icon: "📖",
      code: {
        ur: `# File read karna — behtar tareeqa
with open("data.txt", "r") as file:
    content = file.read()
    print(content)

# "with" khud file close kar deta hai
# Modes: "r" read, "w" write, "a" append`,
        en: `# Reading a file — better way
with open("data.txt", "r") as file:
    content = file.read()
    print(content)

# "with" auto-closes the file
# Modes: "r" read, "w" write, "a" append`
      },
      learn: {
        ur: `<h2 style="font-size:1.15rem;font-weight:800;margin-bottom:14px;">📖 Reading Files</h2>

<div style="background:linear-gradient(135deg,rgba(245,158,11,.1),rgba(245,158,11,.02));border:1px solid rgba(245,158,11,.3);border-left:3px solid var(--py-amber);border-radius:10px;padding:13px 15px;margin-bottom:16px;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--py-amber-glow);display:block;margin-bottom:5px;font-family:var(--mono);font-size:.7rem;text-transform:uppercase;">⚠️ Zaroori Note (Pyodide)</strong>
Browser Python mein files <strong>virtual</strong> hoti hain — asal computer ki files touch nahi hotin. Demo mein file operations browser ke andar kaam karte hain.
</div>

<p style="color:var(--text-soft);font-size:.93rem;margin-bottom:14px;">Python files ko <strong>kholkar unka data padh</strong> sakta hai — text files, logs, ya koi bhi document.</p>

<div style="background:var(--code-bg);border:1px solid var(--code-border);border-radius:10px;overflow:hidden;margin-bottom:16px;font-family:var(--mono);font-size:.82rem;">
  <div style="display:grid;grid-template-columns:100px 1fr;padding:9px 14px;background:var(--code-bg-2);color:var(--py-blue-glow);font-weight:700;font-size:.68rem;text-transform:uppercase;">Mode · Kaam</div>
  <div style="display:grid;grid-template-columns:100px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">"r"</span><span style="color:var(--text-soft);">Read (padhna)</span></div>
  <div style="display:grid;grid-template-columns:100px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">"w"</span><span style="color:var(--text-soft);">Write (purana data mit jata)</span></div>
  <div style="display:grid;grid-template-columns:100px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">"a"</span><span style="color:var(--text-soft);">Append (end mein add)</span></div>
</div>

<div style="background:linear-gradient(135deg,rgba(75,139,190,.1),rgba(75,139,190,.03));border:1px solid rgba(75,139,190,.25);border-left:3px solid var(--py-blue);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--text);display:block;margin-bottom:3px;">💡 with kyun behtar</strong>
<code>with</code> use karne se file <strong>automatically close</strong> ho jati hai — <code>close()</code> bhool jane ka masla nahi.
</div>`,
        en: `<h2 style="font-size:1.15rem;font-weight:800;margin-bottom:14px;">📖 Reading Files</h2>

<div style="background:linear-gradient(135deg,rgba(245,158,11,.1),rgba(245,158,11,.02));border:1px solid rgba(245,158,11,.3);border-left:3px solid var(--py-amber);border-radius:10px;padding:13px 15px;margin-bottom:16px;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--py-amber-glow);display:block;margin-bottom:5px;font-family:var(--mono);font-size:.7rem;text-transform:uppercase;">⚠️ Important Note (Pyodide)</strong>
In browser Python, files are <strong>virtual</strong> — they don't touch real files. File operations work inside the browser session only.
</div>

<p style="color:var(--text-soft);font-size:.93rem;margin-bottom:14px;">Python can <strong>open and read</strong> files — text files, logs, documents.</p>

<div style="background:var(--code-bg);border:1px solid var(--code-border);border-radius:10px;overflow:hidden;margin-bottom:16px;font-family:var(--mono);font-size:.82rem;">
  <div style="display:grid;grid-template-columns:100px 1fr;padding:9px 14px;background:var(--code-bg-2);color:var(--py-blue-glow);font-weight:700;font-size:.68rem;text-transform:uppercase;">Mode · Does</div>
  <div style="display:grid;grid-template-columns:100px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">"r"</span><span style="color:var(--text-soft);">Read</span></div>
  <div style="display:grid;grid-template-columns:100px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">"w"</span><span style="color:var(--text-soft);">Write (overwrites)</span></div>
  <div style="display:grid;grid-template-columns:100px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">"a"</span><span style="color:var(--text-soft);">Append</span></div>
</div>

<div style="background:linear-gradient(135deg,rgba(75,139,190,.1),rgba(75,139,190,.03));border:1px solid rgba(75,139,190,.25);border-left:3px solid var(--py-blue);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--text);display:block;margin-bottom:3px;">💡 Why with is better</strong>
<code>with</code> auto-closes the file — no forgotten <code>close()</code>.
</div>`
      },
      theory: {
        ur: `<h3>Yeh kya hai?</h3>
<p>File handling ka matlab hai <strong>files se data padhna aur likhna</strong>. Jaise tum computer pe Notepad se file kholte ho, waise hi Python se.</p>

<h3>Kaise kaam karta hai?</h3>
<div class="steps">
<ol>
<li><strong>Step 1:</strong> <code>open()</code> se file kholo</li>
<li><strong>Step 2:</strong> Kuch karo — read, write, append</li>
<li><strong>Step 3:</strong> <code>close()</code> se file band karo</li>
<li><strong>Step 4:</strong> <code>with</code> use karo to auto-close</li>
</ol>
</div>

<h3>Do tareeqe</h3>
<pre><span class="cm"># Manual close</span>
file = <span class="fn">open</span>(<span class="str">"data.txt"</span>, <span class="str">"r"</span>)
content = file.read()
<span class="fn">print</span>(content)
file.close()

<span class="cm"># with (behtar)</span>
<span class="kw">with</span> <span class="fn">open</span>(<span class="str">"data.txt"</span>, <span class="str">"r"</span>) <span class="kw">as</span> file:
    content = file.read()
    <span class="fn">print</span>(content)</pre>

<h3>Reading methods</h3>
<pre><span class="kw">with</span> <span class="fn">open</span>(<span class="str">"data.txt"</span>, <span class="str">"r"</span>) <span class="kw">as</span> file:
    <span class="cm"># Poora file ek string mein</span>
    content = file.read()

    <span class="cm"># Ek line</span>
    line = file.readline()

    <span class="cm"># Saari lines list mein</span>
    lines = file.readlines()

    <span class="cm"># Line by line loop</span>
    <span class="kw">for</span> line <span class="kw">in</span> file:
        <span class="fn">print</span>(line)</pre>

<div class="real-life">
<div class="head">🌍 Real Life Example</div>
<p><strong>Scenario:</strong> Log file padhna.</p>
<pre style="margin-top:10px;margin-bottom:0;"><span class="kw">with</span> <span class="fn">open</span>(<span class="str">"server.log"</span>, <span class="str">"r"</span>) <span class="kw">as</span> f:
    <span class="kw">for</span> line <span class="kw">in</span> f:
        <span class="kw">if</span> <span class="str">"ERROR"</span> <span class="kw">in</span> line:
            <span class="fn">print</span>(line.strip())</pre>
</div>

<div class="warn-box">
<div class="head">⚠️ Common Mistakes</div>
<ul>
<li><code>close()</code> bhool jana jab <code>with</code> use na karo</li>
<li>File exist na kare to <code>FileNotFoundError</code></li>
<li>Binary files ke liye <code>"rb"</code> mode chahiye</li>
</ul>
</div>

<div class="pro-tip">
<div class="head">✨ Pro Tip</div>
<p>Hamesha <code>with</code> use karo. Woh error pe bhi file close kar deta hai.</p>
</div>`,
        en: `<h3>What is it?</h3>
<p>File handling means <strong>reading from and writing to files</strong>. Like Notepad, but from Python.</p>

<h3>How does it work?</h3>
<div class="steps">
<ol>
<li><strong>Step 1:</strong> <code>open()</code> the file</li>
<li><strong>Step 2:</strong> Do something — read, write, append</li>
<li><strong>Step 3:</strong> <code>close()</code> the file</li>
<li><strong>Step 4:</strong> Use <code>with</code> for auto-close</li>
</ol>
</div>

<h3>Two ways</h3>
<pre><span class="cm"># Manual close</span>
file = <span class="fn">open</span>(<span class="str">"data.txt"</span>, <span class="str">"r"</span>)
content = file.read()
file.close()

<span class="cm"># with (better)</span>
<span class="kw">with</span> <span class="fn">open</span>(<span class="str">"data.txt"</span>, <span class="str">"r"</span>) <span class="kw">as</span> file:
    content = file.read()</pre>

<h3>Reading methods</h3>
<pre><span class="kw">with</span> <span class="fn">open</span>(<span class="str">"data.txt"</span>, <span class="str">"r"</span>) <span class="kw">as</span> f:
    content = f.read()       <span class="cm"># all</span>
    line = f.readline()      <span class="cm"># one line</span>
    lines = f.readlines()    <span class="cm"># list of lines</span>

    <span class="kw">for</span> line <span class="kw">in</span> f:           <span class="cm"># loop</span>
        <span class="fn">print</span>(line)</pre>

<div class="real-life">
<div class="head">🌍 Real Life Example</div>
<p><strong>Scenario:</strong> Read a log file.</p>
<pre style="margin-top:10px;margin-bottom:0;"><span class="kw">with</span> <span class="fn">open</span>(<span class="str">"server.log"</span>, <span class="str">"r"</span>) <span class="kw">as</span> f:
    <span class="kw">for</span> line <span class="kw">in</span> f:
        <span class="kw">if</span> <span class="str">"ERROR"</span> <span class="kw">in</span> line:
            <span class="fn">print</span>(line.strip())</pre>
</div>

<div class="warn-box">
<div class="head">⚠️ Common Mistakes</div>
<ul>
<li>Forgetting <code>close()</code> without <code>with</code></li>
<li><code>FileNotFoundError</code> if missing</li>
<li>Binary files need <code>"rb"</code></li>
</ul>
</div>

<div class="pro-tip">
<div class="head">✨ Pro Tip</div>
<p>Always use <code>with</code> — closes even on error.</p>
</div>`
      },
      quiz: [
        { q: { ur: "File read karne ka mode?", en: "Mode for reading?" }, options: ["w", "r", "a", "x"], answer: 1 },
        { q: { ur: "with open() ka faida?", en: "Benefit of with open()?" }, options: ["Faster", "Auto-close file", "More data", "No benefit"], answer: 1 },
        { q: { ur: "file.read() kya karta?", en: "What does file.read() do?" }, options: ["Deletes", "Reads entire content", "Writes", "Closes"], answer: 1 },
        { q: { ur: "File close kyun zaroori?", en: "Why close file?" }, options: ["Not needed", "Memory leak/locked", "Speed", "Only errors"], answer: 1 },
        { q: { ur: '"a" mode ka matlab?', en: 'Mode "a" means?' }, options: ["Read", "Write overwrite", "Append", "Delete"], answer: 2 }
      ]
    },

    /* ═══════════════════════════════════════════════════════
       TOPIC 2: Writing & Appending Files
       ═══════════════════════════════════════════════════════ */
    {
      id: "writing-files",
      title: { ur: "Writing & Appending Files", en: "Writing & Appending Files" },
      icon: "✍️",
      code: {
        ur: `# "w" mode — naya likhna (purana data mit jata)
with open("notes.txt", "w") as file:
    file.write("Yeh pehli line hai\n")

# "a" mode — end mein add karna
with open("notes.txt", "a") as file:
    file.write("Yeh nayi line hai\n")

# Check karo
with open("notes.txt", "r") as file:
    print(file.read())`,
        en: `# "w" mode — overwrites
with open("notes.txt", "w") as file:
    file.write("This is line 1\n")

# "a" mode — append
with open("notes.txt", "a") as file:
    file.write("This is line 2\n")

# Check
with open("notes.txt", "r") as file:
    print(file.read())`
      },
      learn: {
        ur: `<h2 style="font-size:1.15rem;font-weight:800;margin-bottom:14px;">✍️ Writing & Appending Files</h2>
<p style="color:var(--text-soft);font-size:.93rem;margin-bottom:14px;">Files mein data <strong>save</strong> karne ke liye write ya append mode use karte hain.</p>

<div style="background:var(--code-bg);border:1px solid var(--code-border);border-radius:10px;overflow:hidden;margin-bottom:16px;font-family:var(--mono);font-size:.82rem;">
  <div style="display:grid;grid-template-columns:80px 1fr 1fr;padding:9px 14px;background:var(--code-bg-2);color:var(--py-blue-glow);font-weight:700;font-size:.68rem;text-transform:uppercase;">Mode · Purana · Naya</div>
  <div style="display:grid;grid-template-columns:80px 1fr 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">"w"</span><span style="color:var(--text-soft);">Mit jata</span><span style="color:var(--code-string);">Likhta</span></div>
  <div style="display:grid;grid-template-columns:80px 1fr 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">"a"</span><span style="color:var(--text-soft);">Safe rehta</span><span style="color:var(--code-string);">Add hota</span></div>
</div>

<div style="background:linear-gradient(135deg,rgba(16,185,129,.1),rgba(16,185,129,.02));border:1px solid rgba(16,185,129,.25);border-left:3px solid var(--py-green);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--py-green-glow);display:block;margin-bottom:5px;font-family:var(--mono);font-size:.7rem;text-transform:uppercase;">⚠️ Common Mistake</strong>
<code>"w"</code> mode use karna jab data add karna tha — purana data <strong>hamesha ke liye mit jata hai</strong>.
</div>`,
        en: `<h2 style="font-size:1.15rem;font-weight:800;margin-bottom:14px;">✍️ Writing & Appending Files</h2>
<p style="color:var(--text-soft);font-size:.93rem;margin-bottom:14px;">Use write or append to <strong>save</strong> data to files.</p>

<div style="background:var(--code-bg);border:1px solid var(--code-border);border-radius:10px;overflow:hidden;margin-bottom:16px;font-family:var(--mono);font-size:.82rem;">
  <div style="display:grid;grid-template-columns:80px 1fr 1fr;padding:9px 14px;background:var(--code-bg-2);color:var(--py-blue-glow);font-weight:700;font-size:.68rem;text-transform:uppercase;">Mode · Old · New</div>
  <div style="display:grid;grid-template-columns:80px 1fr 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">"w"</span><span style="color:var(--text-soft);">Deleted</span><span style="color:var(--code-string);">Written</span></div>
  <div style="display:grid;grid-template-columns:80px 1fr 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">"a"</span><span style="color:var(--text-soft);">Kept</span><span style="color:var(--code-string);">Added</span></div>
</div>

<div style="background:linear-gradient(135deg,rgba(16,185,129,.1),rgba(16,185,129,.02));border:1px solid rgba(16,185,129,.25);border-left:3px solid var(--py-green);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--py-green-glow);display:block;margin-bottom:5px;font-family:var(--mono);font-size:.7rem;text-transform:uppercase;">⚠️ Common Mistake</strong>
Using <code>"w"</code> when you meant to append — old data is <strong>gone forever</strong>.
</div>`
      },
      theory: {
        ur: `<h3>Yeh kya hai?</h3>
<p>Writing ka matlab hai file mein <strong>data save karna</strong>. Do modes:
<br>• <code>"w"</code> — overwrite (purana data mitata hai)
<br>• <code>"a"</code> — append (end mein add karta hai)</p>

<h3>Kaise kaam karta hai?</h3>
<pre><span class="cm"># "w" — naya likho, purana mitao</span>
<span class="kw">with</span> <span class="fn">open</span>(<span class="str">"notes.txt"</span>, <span class="str">"w"</span>) <span class="kw">as</span> f:
    f.write(<span class="str">"Line 1\n"</span>)
    f.write(<span class="str">"Line 2\n"</span>)

<span class="cm"># "a" — end mein add karo</span>
<span class="kw">with</span> <span class="fn">open</span>(<span class="str">"notes.txt"</span>, <span class="str">"a"</span>) <span class="kw">as</span> f:
    f.write(<span class="str">"Line 3\n"</span>)</pre>

<h3>Multiple lines likhna</h3>
<pre><span class="kw">with</span> <span class="fn">open</span>(<span class="str">"data.txt"</span>, <span class="str">"w"</span>) <span class="kw">as</span> f:
    lines = [<span class="str">"Line 1\n"</span>, <span class="str">"Line 2\n"</span>, <span class="str">"Line 3\n"</span>]
    f.writelines(lines)</pre>

<h3>\n — new line character</h3>
<pre><span class="cm"># \n ke bina sab kuch ek line mein aa jayega</span>
f.write(<span class="str">"A"</span>)       <span class="cm"># file: A</span>
f.write(<span class="str">"B"</span>)       <span class="cm"># file: AB</span>

f.write(<span class="str">"A\n"</span>)     <span class="cm"># file: A</span>
f.write(<span class="str">"B\n"</span>)     <span class="cm"># file: A</span>
                     <span class="cm">#       B</span></pre>

<div class="real-life">
<div class="head">🌍 Real Life Example</div>
<p><strong>Scenario:</strong> Diary app — har entry add karo.</p>
<pre style="margin-top:10px;margin-bottom:0;"><span class="kw">def</span> <span class="fn">add_entry</span>(text):
    <span class="kw">with</span> <span class="fn">open</span>(<span class="str">"diary.txt"</span>, <span class="str">"a"</span>) <span class="kw">as</span> f:
        f.write(text + <span class="str">"\n"</span>)

<span class="fn">add_entry</span>(<span class="str">"Aaj bohat acha din tha"</span>)
<span class="fn">add_entry</span>(<span class="str">"Python seekhi"</span>)</pre>
</div>

<div class="warn-box">
<div class="head">⚠️ Common Mistakes</div>
<ul>
<li><code>"w"</code> aur <code>"a"</code> confuse karna — data loss</li>
<li><code>\n</code> bhool jana — sab lines ek saath aayengi</li>
<li>Read karte waqt likhna (<code>"w"</code>) — overwrite</li>
</ul>
</div>

<div class="pro-tip">
<div class="head">✨ Pro Tip</div>
<p>Numbers ko likhne ke liye <code>str()</code> karo: <code>f.write(str(age) + "\n")</code>. String hi likhi ja sakti hai.</p>
</div>`,
        en: `<h3>What is it?</h3>
<p>Writing = <strong>saving data</strong> to a file. Two modes:
<br>• <code>"w"</code> — overwrite
<br>• <code>"a"</code> — append</p>

<h3>How does it work?</h3>
<pre><span class="cm"># "w" — new, overwrites</span>
<span class="kw">with</span> <span class="fn">open</span>(<span class="str">"notes.txt"</span>, <span class="str">"w"</span>) <span class="kw">as</span> f:
    f.write(<span class="str">"Line 1\n"</span>)

<span class="cm"># "a" — append</span>
<span class="kw">with</span> <span class="fn">open</span>(<span class="str">"notes.txt"</span>, <span class="str">"a"</span>) <span class="kw">as</span> f:
    f.write(<span class="str">"Line 2\n"</span>)</pre>

<h3>Multiple lines</h3>
<pre><span class="kw">with</span> <span class="fn">open</span>(<span class="str">"data.txt"</span>, <span class="str">"w"</span>) <span class="kw">as</span> f:
    lines = [<span class="str">"L1\n"</span>, <span class="str">"L2\n"</span>]
    f.writelines(lines)</pre>

<h3>\n — new line</h3>
<pre>f.write(<span class="str">"A"</span>)       <span class="cm"># "A"</span>
f.write(<span class="str">"B"</span>)       <span class="cm"># "AB"</span>

f.write(<span class="str">"A\n"</span>)     <span class="cm"># "A\n"</span>
f.write(<span class="str">"B\n"</span>)     <span class="cm"># "A\nB\n"</span></pre>

<div class="real-life">
<div class="head">🌍 Real Life Example</div>
<p><strong>Scenario:</strong> Diary app.</p>
<pre style="margin-top:10px;margin-bottom:0;"><span class="kw">def</span> <span class="fn">add_entry</span>(text):
    <span class="kw">with</span> <span class="fn">open</span>(<span class="str">"diary.txt"</span>, <span class="str">"a"</span>) <span class="kw">as</span> f:
        f.write(text + <span class="str">"\n"</span>)

<span class="fn">add_entry</span>(<span class="str">"Good day"</span>)
<span class="fn">add_entry</span>(<span class="str">"Learned Python"</span>)</pre>
</div>

<div class="warn-box">
<div class="head">⚠️ Common Mistakes</div>
<ul>
<li>Confusing <code>"w"</code> and <code>"a"</code> → data loss</li>
<li>Forgetting <code>\n</code> → lines join</li>
<li>Using <code>"w"</code> when reading</li>
</ul>
</div>

<div class="pro-tip">
<div class="head">✨ Pro Tip</div>
<p>For numbers: <code>f.write(str(age) + "\n")</code>. Only strings can be written.</p>
</div>`
      },
      quiz: [
        { q: { ur: '"w" mode se purana data?', en: '"w" mode → old data?' }, options: ["Safe", "Deleted", "Backed up", "Untouched"], answer: 1 },
        { q: { ur: '"a" mode se purana data?', en: '"a" mode → old data?' }, options: ["Safe, new added", "Deleted", "Copied", "Error"], answer: 0 },
        { q: { ur: "File likhne ka function?", en: "Function to write file?" }, options: ["put()", "write()", "add()", "insert()"], answer: 1 },
        { q: { ur: '"w" galat use kiya — kya hoga?', en: 'Used "w" wrongly — result?' }, options: ["No issue", "Old data lost forever", "Error", "Corrupt"], answer: 1 },
        { q: { ur: "\\n kya hai?", en: "What is \\n?" }, options: ["Error", "New line character", "Space", "Tab"], answer: 1 }
      ]
    },

    /* ═══════════════════════════════════════════════════════
       TOPIC 3: Working with CSV/JSON Files
       ═══════════════════════════════════════════════════════ */
    {
      id: "csv-json",
      title: { ur: "Working with CSV/JSON Files", en: "Working with CSV/JSON Files" },
      icon: "📊",
      code: {
        ur: `import json

# JSON likhna
data = {"name": "Ali", "age": 21}
with open("data.json", "w") as f:
    json.dump(data, f)

# JSON padhna
with open("data.json", "r") as f:
    loaded = json.load(f)
    print(loaded["name"])   # Ali

import csv

# CSV likhna
with open("students.csv", "w") as f:
    writer = csv.writer(f)
    writer.writerow(["name", "age"])
    writer.writerow(["Ali", 21])`,
        en: `import json

# Write JSON
data = {"name": "Ali", "age": 21}
with open("data.json", "w") as f:
    json.dump(data, f)

# Read JSON
with open("data.json", "r") as f:
    loaded = json.load(f)
    print(loaded["name"])   # Ali

import csv

# Write CSV
with open("students.csv", "w") as f:
    writer = csv.writer(f)
    writer.writerow(["name", "age"])
    writer.writerow(["Ali", 21])`
      },
      learn: {
        ur: `<h2 style="font-size:1.15rem;font-weight:800;margin-bottom:14px;">📊 Working with CSV/JSON Files</h2>
<p style="color:var(--text-soft);font-size:.93rem;margin-bottom:14px;">CSV aur JSON data store karne ke common formats hain — Python mein inhe handle karna special modules se aasan hota hai.</p>

<div style="background:var(--code-bg);border:1px solid var(--code-border);border-radius:10px;overflow:hidden;margin-bottom:16px;font-family:var(--mono);font-size:.82rem;">
  <div style="display:grid;grid-template-columns:180px 1fr;padding:9px 14px;background:var(--code-bg-2);color:var(--py-blue-glow);font-weight:700;font-size:.68rem;text-transform:uppercase;">Function · Kaam</div>
  <div style="display:grid;grid-template-columns:180px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">json.dump(data, f)</span><span style="color:var(--text-soft);">File mein likho</span></div>
  <div style="display:grid;grid-template-columns:180px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">json.load(f)</span><span style="color:var(--text-soft);">File se padho</span></div>
  <div style="display:grid;grid-template-columns:180px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">csv.writer(f)</span><span style="color:var(--text-soft);">CSV likho</span></div>
  <div style="display:grid;grid-template-columns:180px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">csv.reader(f)</span><span style="color:var(--text-soft);">CSV padho</span></div>
</div>

<div style="background:linear-gradient(135deg,rgba(75,139,190,.1),rgba(75,139,190,.03));border:1px solid rgba(75,139,190,.25);border-left:3px solid var(--py-blue);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--text);display:block;margin-bottom:3px;">💡 Kab kaunsa</strong>
<strong>JSON:</strong> key-value data (APIs).<br>
<strong>CSV:</strong> table data (Excel jaisa).
</div>

<div style="background:linear-gradient(135deg,rgba(16,185,129,.1),rgba(16,185,129,.02));border:1px solid rgba(16,185,129,.25);border-left:3px solid var(--py-green);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--py-green-glow);display:block;margin-bottom:5px;font-family:var(--mono);font-size:.7rem;text-transform:uppercase;">⚠️ Common Mistake</strong>
<code>json.dump()</code> aur <code>json.dumps()</code> confuse karna — <code>dump()</code> file mein, <code>dumps()</code> sirf string banata hai.
</div>`,
        en: `<h2 style="font-size:1.15rem;font-weight:800;margin-bottom:14px;">📊 Working with CSV/JSON Files</h2>
<p style="color:var(--text-soft);font-size:.93rem;margin-bottom:14px;">CSV and JSON are common formats. Python handles them easily with built-in modules.</p>

<div style="background:var(--code-bg);border:1px solid var(--code-border);border-radius:10px;overflow:hidden;margin-bottom:16px;font-family:var(--mono);font-size:.82rem;">
  <div style="display:grid;grid-template-columns:180px 1fr;padding:9px 14px;background:var(--code-bg-2);color:var(--py-blue-glow);font-weight:700;font-size:.68rem;text-transform:uppercase;">Function · Does</div>
  <div style="display:grid;grid-template-columns:180px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">json.dump(data, f)</span><span style="color:var(--text-soft);">Write to file</span></div>
  <div style="display:grid;grid-template-columns:180px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">json.load(f)</span><span style="color:var(--text-soft);">Read from file</span></div>
  <div style="display:grid;grid-template-columns:180px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">csv.writer(f)</span><span style="color:var(--text-soft);">Write CSV</span></div>
  <div style="display:grid;grid-template-columns:180px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">csv.reader(f)</span><span style="color:var(--text-soft);">Read CSV</span></div>
</div>

<div style="background:linear-gradient(135deg,rgba(75,139,190,.1),rgba(75,139,190,.03));border:1px solid rgba(75,139,190,.25);border-left:3px solid var(--py-blue);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--text);display:block;margin-bottom:3px;">💡 Which one</strong>
<strong>JSON:</strong> key-value (APIs).<br>
<strong>CSV:</strong> table (Excel-like).
</div>

<div style="background:linear-gradient(135deg,rgba(16,185,129,.1),rgba(16,185,129,.02));border:1px solid rgba(16,185,129,.25);border-left:3px solid var(--py-green);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--py-green-glow);display:block;margin-bottom:5px;font-family:var(--mono);font-size:.7rem;text-transform:uppercase;">⚠️ Common Mistake</strong>
Confusing <code>json.dump()</code> (file) with <code>json.dumps()</code> (string).
</div>`
      },
      theory: {
        ur: `<h3>Yeh kya hai?</h3>
<p>JSON aur CSV data storage ke 2 popular formats hain.
<br>• <strong>JSON</strong> — key-value pairs, curly braces <code>{ }</code>
<br>• <strong>CSV</strong> — table, comma-separated</p>

<h3>JSON — dict/list ko save karna</h3>
<pre><span class="kw">import</span> json

data = {<span class="str">"name"</span>: <span class="str">"Ali"</span>, <span class="str">"age"</span>: <span class="num">21</span>}

<span class="cm"># File mein likho</span>
<span class="kw">with</span> <span class="fn">open</span>(<span class="str">"data.json"</span>, <span class="str">"w"</span>) <span class="kw">as</span> f:
    json.dump(data, f, indent=<span class="num">2</span>)

<span class="cm"># File se padho</span>
<span class="kw">with</span> <span class="fn">open</span>(<span class="str">"data.json"</span>, <span class="str">"r"</span>) <span class="kw">as</span> f:
    loaded = json.load(f)
    <span class="fn">print</span>(loaded[<span class="str">"name"</span>])   <span class="cm"># Ali</span></pre>

<h3>JSON functions cheat sheet</h3>
<table class="theory-table">
<div class="row head"><div>Function</div><div>Kaam</div></div>
<div class="row"><div class="label">json.dump(d, f)</div><div class="value">Dict → file</div></div>
<div class="row"><div class="label">json.load(f)</div><div class="value">File → dict</div></div>
<div class="row"><div class="label">json.dumps(d)</div><div class="value">Dict → string</div></div>
<div class="row"><div class="label">json.loads(s)</div><div class="value">String → dict</div></div>
</table>

<h3>CSV — table data save karna</h3>
<pre><span class="kw">import</span> csv

<span class="cm"># CSV likho</span>
<span class="kw">with</span> <span class="fn">open</span>(<span class="str">"students.csv"</span>, <span class="str">"w"</span>, newline=<span class="str">""</span>) <span class="kw">as</span> f:
    writer = csv.writer(f)
    writer.writerow([<span class="str">"name"</span>, <span class="str">"age"</span>])
    writer.writerow([<span class="str">"Ali"</span>, <span class="num">21</span>])
    writer.writerow([<span class="str">"Sara"</span>, <span class="num">22</span>])

<span class="cm"># CSV padho</span>
<span class="kw">with</span> <span class="fn">open</span>(<span class="str">"students.csv"</span>, <span class="str">"r"</span>) <span class="kw">as</span> f:
    reader = csv.reader(f)
    <span class="kw">for</span> row <span class="kw">in</span> reader:
        <span class="fn">print</span>(row)   <span class="cm"># ['name', 'age'], ['Ali', '21'], ...</span></pre>

<h3>DictReader — column names ke saath</h3>
<pre><span class="kw">with</span> <span class="fn">open</span>(<span class="str">"students.csv"</span>) <span class="kw">as</span> f:
    reader = csv.DictReader(f)
    <span class="kw">for</span> row <span class="kw">in</span> reader:
        <span class="fn">print</span>(row[<span class="str">"name"</span>], row[<span class="str">"age"</span>])</pre>

<div class="real-life">
<div class="head">🌍 Real Life Example</div>
<p><strong>Scenario:</strong> Student data JSON mein save karna.</p>
<pre style="margin-top:10px;margin-bottom:0;"><span class="kw">import</span> json

students = [
    {<span class="str">"name"</span>: <span class="str">"Ali"</span>, <span class="str">"marks"</span>: <span class="num">85</span>},
    {<span class="str">"name"</span>: <span class="str">"Sara"</span>, <span class="str">"marks"</span>: <span class="num">92</span>}
]

<span class="kw">with</span> <span class="fn">open</span>(<span class="str">"students.json"</span>, <span class="str">"w"</span>) <span class="kw">as</span> f:
    json.dump(students, f, indent=<span class="num">2</span>)</pre>
</div>

<div class="warn-box">
<div class="head">⚠️ Common Mistakes</div>
<ul>
<li><code>dump</code> aur <code>dumps</code> confuse karna</li>
<li>CSV mein <code>newline=""</code> na lagana — extra blank lines</li>
<li>CSV reader se aayi values string hoti hain, int nahi</li>
</ul>
</div>

<div class="pro-tip">
<div class="head">✨ Pro Tip</div>
<p>JSON mein <code>indent=2</code> use karo — file readable banti hai. <code>ensure_ascii=False</code> se Urdu/Arabic characters theek dikhte hain.</p>
</div>`,
        en: `<h3>What is it?</h3>
<p>JSON and CSV are 2 popular data formats.
<br>• <strong>JSON</strong> — key-value, curly braces <code>{ }</code>
<br>• <strong>CSV</strong> — table, comma-separated</p>

<h3>JSON — save dict/list</h3>
<pre><span class="kw">import</span> json

data = {<span class="str">"name"</span>: <span class="str">"Ali"</span>, <span class="str">"age"</span>: <span class="num">21</span>}

<span class="kw">with</span> <span class="fn">open</span>(<span class="str">"data.json"</span>, <span class="str">"w"</span>) <span class="kw">as</span> f:
    json.dump(data, f, indent=<span class="num">2</span>)

<span class="kw">with</span> <span class="fn">open</span>(<span class="str">"data.json"</span>) <span class="kw">as</span> f:
    loaded = json.load(f)
    <span class="fn">print</span>(loaded[<span class="str">"name"</span>])</pre>

<h3>JSON cheat sheet</h3>
<table class="theory-table">
<div class="row head"><div>Function</div><div>Does</div></div>
<div class="row"><div class="label">json.dump(d, f)</div><div class="value">Dict → file</div></div>
<div class="row"><div class="label">json.load(f)</div><div class="value">File → dict</div></div>
<div class="row"><div class="label">json.dumps(d)</div><div class="value">Dict → string</div></div>
<div class="row"><div class="label">json.loads(s)</div><div class="value">String → dict</div></div>
</table>

<h3>CSV — save table data</h3>
<pre><span class="kw">import</span> csv

<span class="kw">with</span> <span class="fn">open</span>(<span class="str">"students.csv"</span>, <span class="str">"w"</span>, newline=<span class="str">""</span>) <span class="kw">as</span> f:
    writer = csv.writer(f)
    writer.writerow([<span class="str">"name"</span>, <span class="str">"age"</span>])
    writer.writerow([<span class="str">"Ali"</span>, <span class="num">21</span>])

<span class="kw">with</span> <span class="fn">open</span>(<span class="str">"students.csv"</span>) <span class="kw">as</span> f:
    reader = csv.reader(f)
    <span class="kw">for</span> row <span class="kw">in</span> reader:
        <span class="fn">print</span>(row)</pre>

<h3>DictReader — with column names</h3>
<pre><span class="kw">with</span> <span class="fn">open</span>(<span class="str">"students.csv"</span>) <span class="kw">as</span> f:
    reader = csv.DictReader(f)
    <span class="kw">for</span> row <span class="kw">in</span> reader:
        <span class="fn">print</span>(row[<span class="str">"name"</span>], row[<span class="str">"age"</span>])</pre>

<div class="real-life">
<div class="head">🌍 Real Life Example</div>
<p><strong>Scenario:</strong> Save student data in JSON.</p>
<pre style="margin-top:10px;margin-bottom:0;"><span class="kw">import</span> json

students = [
    {<span class="str">"name"</span>: <span class="str">"Ali"</span>, <span class="str">"marks"</span>: <span class="num">85</span>},
    {<span class="str">"name"</span>: <span class="str">"Sara"</span>, <span class="str">"marks"</span>: <span class="num">92</span>}
]

<span class="kw">with</span> <span class="fn">open</span>(<span class="str">"students.json"</span>, <span class="str">"w"</span>) <span class="kw">as</span> f:
    json.dump(students, f, indent=<span class="num">2</span>)</pre>
</div>

<div class="warn-box">
<div class="head">⚠️ Common Mistakes</div>
<ul>
<li>Confusing <code>dump</code> and <code>dumps</code></li>
<li>Missing <code>newline=""</code> in CSV → blank lines</li>
<li>CSV values are strings, not ints</li>
</ul>
</div>

<div class="pro-tip">
<div class="head">✨ Pro Tip</div>
<p>Use <code>indent=2</code> for readable JSON. <code>ensure_ascii=False</code> for Unicode.</p>
</div>`
      },
      quiz: [
        { q: { ur: "JSON file mein likhne ka function?", en: "Function to write JSON?" }, options: ["json.write()", "json.dump()", "json.save()", "json.put()"], answer: 1 },
        { q: { ur: "JSON file se padhne ka function?", en: "Function to read JSON?" }, options: ["json.read()", "json.load()", "json.get()", "json.open()"], answer: 1 },
        { q: { ur: "CSV data kaisa hota?", en: "CSV data format?" }, options: ["Key-value", "Table (rows/columns)", "Only numbers", "Only text"], answer: 1 },
        { q: { ur: "json.dump() vs dumps() farak?", en: "dump vs dumps?" }, options: ["Same", "dump file, dumps string", "dumps file", "No difference"], answer: 1 },
        { q: { ur: "CSV ke liye kaunsa module?", en: "Module for CSV?" }, options: ["json", "csv", "file", "data"], answer: 1 }
      ]
    }

  ]
};