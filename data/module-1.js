// data.js — PyLearn Course Data
// Module 1: Python Basics — SAARA CONTENT

window.COURSE_DATA = {
  title: "Python Basics",
  language: "Python 3.12",
  version: "1.0",
  modules: [
    {
      id: "module-1",
      number: 1,
      slug: "python-basics",
      title: { ur: "Python Basics", en: "Python Basics" },
      locked: false,
      topics: [

        /* ═══════════════════════════════════════════════════════
           TOPIC 1: Introduction to Python
           ═══════════════════════════════════════════════════════ */
        {
          id: "intro",
          title: { ur: "Introduction to Python", en: "Introduction to Python" },
          code: {
            ur: `print("Hello, World!")`,
            en: `print("Hello, World!")`
          },
          learn: {
            ur: `<h2 style="font-size:1.15rem;font-weight:800;margin-bottom:14px;">🐍 Introduction to Python</h2>
<p style="color:var(--text-soft);font-size:.93rem;margin-bottom:14px;">Python ek <strong>programming language</strong> hai jo <strong>1991</strong> mein <strong>Guido van Rossum</strong> ne banai. Yeh sabse aasan languages mein se ek hai seekhne ke liye — iska syntax English jaisa lagta hai, bohat zyada symbols ya complicated rules nahi.</p>
<p style="color:var(--text-soft);font-size:.93rem;margin-bottom:14px;">Python har jagah use hoti hai — websites (Instagram, YouTube backend), AI/Machine Learning (ChatGPT), data analysis, aur automation scripts mein.</p>
<div style="background:linear-gradient(135deg,rgba(75,139,190,.1),rgba(75,139,190,.03));border:1px solid rgba(75,139,190,.25);border-left:3px solid var(--py-blue);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--text);display:block;margin-bottom:3px;">💡 Zaroori baat</strong>
Python code <strong>line by line</strong> chalta hai, upar se neeche. Kisi compiler ki zaroorat nahi — seedha "Run" karo aur result mil jata hai.
</div>
<div style="background:linear-gradient(135deg,rgba(16,185,129,.1),rgba(16,185,129,.02));border:1px solid rgba(16,185,129,.25);border-left:3px solid var(--py-green);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--py-green-glow);display:block;margin-bottom:5px;font-family:var(--mono);font-size:.7rem;text-transform:uppercase;">⚠️ Common Mistake</strong>
Quotes lagana mat bhoolna — <code>print(Hello)</code> galat hai, <code>print("Hello")</code> sahi hai.
</div>`,
            en: `<h2 style="font-size:1.15rem;font-weight:800;margin-bottom:14px;">🐍 Introduction to Python</h2>
<p style="color:var(--text-soft);font-size:.93rem;margin-bottom:14px;">Python is a <strong>programming language</strong> created by <strong>Guido van Rossum</strong> in <strong>1991</strong>. It's one of the easiest languages to learn — its syntax reads like English, without too many symbols or complicated rules.</p>
<p style="color:var(--text-soft);font-size:.93rem;margin-bottom:14px;">Python is used everywhere — websites (Instagram, YouTube backend), AI/Machine Learning (ChatGPT), data analysis, and automation scripts.</p>
<div style="background:linear-gradient(135deg,rgba(75,139,190,.1),rgba(75,139,190,.03));border:1px solid rgba(75,139,190,.25);border-left:3px solid var(--py-blue);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--text);display:block;margin-bottom:3px;">💡 Important</strong>
Python code runs <strong>line by line</strong>, top to bottom. No compiler needed — just "Run" and you get the result.
</div>
<div style="background:linear-gradient(135deg,rgba(16,185,129,.1),rgba(16,185,129,.02));border:1px solid rgba(16,185,129,.25);border-left:3px solid var(--py-green);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--py-green-glow);display:block;margin-bottom:5px;font-family:var(--mono);font-size:.7rem;text-transform:uppercase;">⚠️ Common Mistake</strong>
Don't forget quotes — <code>print(Hello)</code> is wrong, <code>print("Hello")</code> is right.
</div>`
          },
          theory: {
            ur: `<h3>Yeh kya hai?</h3>
<p>Python ek <strong>high-level, interpreted</strong> programming language hai. "High-level" ka matlab hai ke yeh insaan ki language ke qareeb hai, computer ki nahi. "Interpreted" ka matlab hai ke code line-by-line chalta hai — pehle poora compile nahi karna parta.</p>

<h3>Kaise kaam karta hai?</h3>
<div class="steps">
<ol>
<li><strong>Step 1:</strong> Tum code likhte ho (.py file mein)</li>
<li><strong>Step 2:</strong> Python interpreter file padhta hai</li>
<li><strong>Step 3:</strong> Line-by-line chalta hai, upar se neeche</li>
<li><strong>Step 4:</strong> Har line ka result turant dikhta hai</li>
</ol>
</div>

<h3>Kyun Python?</h3>
<ul>
<li><strong>Asaan:</strong> English jaisa syntax — <code>print("Hello")</code> padh ke samajh aa jata hai</li>
<li><strong>Versatile:</strong> Websites, AI, data science, automation — sab kuch</li>
<li><strong>Community:</strong> Duniya ki sabse bari community — har sawal ka jawab milta hai</li>
<li><strong>Jobs:</strong> AI boom ki wajah se demand bohat zyada hai</li>
</ul>

<div class="real-life">
<div class="head">🌍 Real Life Example</div>
<p>Socho tum ek <strong>restaurant</strong> chalate ho. Python ek <strong>smart waiter</strong> jaisa hai jo:</p>
<ul style="margin-top:8px;">
<li>Tumhari baat sunta hai (code padhta hai)</li>
<li>Order samajhta hai (interpret karta hai)</li>
<li>Ek-ek karke serve karta hai (line-by-line chalata hai)</li>
<li>Customer ko khush karta hai (output deta hai)</li>
</ul>
</div>

<div class="pro-tip">
<div class="head">✨ Pro Tip</div>
<p>Python seekhne ka <strong>sabse behtar tareeqa</strong> hai — roz 15-20 minute code karna. Bade projects se pehle chhote programs likho — jaise "Hello World", calculator, guess game. Jo humne is course mein kiya hai.</p>
</div>`,
            en: `<h3>What is it?</h3>
<p>Python is a <strong>high-level, interpreted</strong> programming language. "High-level" means it's closer to human language than machine language. "Interpreted" means it runs line-by-line — no need to compile the whole thing first.</p>

<h3>How does it work?</h3>
<div class="steps">
<ol>
<li><strong>Step 1:</strong> You write code (in a .py file)</li>
<li><strong>Step 2:</strong> Python interpreter reads the file</li>
<li><strong>Step 3:</strong> Runs line-by-line, top to bottom</li>
<li><strong>Step 4:</strong> Each line's result appears instantly</li>
</ol>
</div>

<h3>Why Python?</h3>
<ul>
<li><strong>Easy:</strong> English-like syntax — <code>print("Hello")</code> reads naturally</li>
<li><strong>Versatile:</strong> Websites, AI, data science, automation — everything</li>
<li><strong>Community:</strong> The largest community — every question gets an answer</li>
<li><strong>Jobs:</strong> Huge demand thanks to the AI boom</li>
</ul>

<div class="real-life">
<div class="head">🌍 Real Life Example</div>
<p>Imagine you run a <strong>restaurant</strong>. Python is like a <strong>smart waiter</strong> who:</p>
<ul style="margin-top:8px;">
<li>Listens to you (reads code)</li>
<li>Understands the order (interprets it)</li>
<li>Serves one by one (runs line-by-line)</li>
<li>Keeps the customer happy (gives output)</li>
</ul>
</div>

<div class="pro-tip">
<div class="head">✨ Pro Tip</div>
<p>The <strong>best way to learn</strong> Python is — 15-20 minutes of coding daily. Before big projects, write small programs — like "Hello World", a calculator, a guessing game. Exactly what we did in this course.</p>
</div>`
          },
          quiz: [
            { q: { ur: "Python kis saal banayi gayi?", en: "When was Python created?" }, options: ["1989", "1991", "2000", "1995"], answer: 1 },
            { q: { ur: "Screen pe kuch likhne ke liye kaunsa function?", en: "Which function prints to screen?" }, options: ["show()", "write()", "print()", "display()"], answer: 2 },
            { q: { ur: "Python ka creator kaun hai?", en: "Who created Python?" }, options: ["James Gosling", "Guido van Rossum", "Dennis Ritchie", "Bjarne Stroustrup"], answer: 1 },
            { q: { ur: "Python code kaise chalta hai?", en: "How does Python code run?" }, options: ["Random order", "Line by line, top to bottom", "Bottom to top", "Only inside functions"], answer: 1 },
            { q: { ur: "Python kaunse field mein use hoti hai?", en: "Where is Python used?" }, options: ["Only websites", "Only AI", "Only data analysis", "All of these"], answer: 3 }
          ]
        },

        /* ═══════════════════════════════════════════════════════
           TOPIC 2: Variables & Data Types
           ═══════════════════════════════════════════════════════ */
        {
          id: "variables",
          title: { ur: "Variables & Data Types", en: "Variables & Data Types" },
          code: {
            ur: `name = "Ali"       # string
age = 21           # integer
height = 5.9       # float
is_student = True  # boolean

print(name, age, height, is_student)
print(type(age))`,
            en: `name = "Ali"       # string
age = 21           # integer
height = 5.9       # float
is_student = True  # boolean

print(name, age, height, is_student)
print(type(age))`
          },
          learn: {
            ur: `<h2 style="font-size:1.15rem;font-weight:800;margin-bottom:14px;">📦 Variables & Data Types</h2>
<p style="color:var(--text-soft);font-size:.93rem;margin-bottom:14px;">Variable ek <strong>container</strong> hai jisme hum data store karte hain. Python mein variable banane ke liye kisi keyword ki zaroorat nahi — bas naam do, <code>=</code> lagao, value do.</p>
<div style="background:var(--code-bg);border:1px solid var(--code-border);border-radius:10px;overflow:hidden;margin-bottom:16px;font-family:var(--mono);font-size:.82rem;">
<div style="display:grid;grid-template-columns:80px 1fr 1fr;padding:9px 14px;background:var(--code-bg-2);color:var(--py-blue-glow);font-weight:700;font-size:.68rem;text-transform:uppercase;">Type · Example · Matlab</div>
<div style="display:grid;grid-template-columns:80px 1fr 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">str</span><span style="color:var(--code-string);">"Ali"</span><span style="color:var(--text-soft);">Text</span></div>
<div style="display:grid;grid-template-columns:80px 1fr 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">int</span><span style="color:var(--code-string);">21</span><span style="color:var(--text-soft);">Poora number</span></div>
<div style="display:grid;grid-template-columns:80px 1fr 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">float</span><span style="color:var(--code-string);">5.9</span><span style="color:var(--text-soft);">Decimal</span></div>
<div style="display:grid;grid-template-columns:80px 1fr 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">bool</span><span style="color:var(--code-string);">True</span><span style="color:var(--text-soft);">True/False</span></div>
</div>
<div style="background:linear-gradient(135deg,rgba(75,139,190,.1),rgba(75,139,190,.03));border:1px solid rgba(75,139,190,.25);border-left:3px solid var(--py-blue);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--text);display:block;margin-bottom:3px;">💡 Dynamic Typing</strong>
Python khud pehchan leta hai kaunsi value kis type ki hai. Type check karne ke liye <code>type()</code> use karo.
</div>
<div style="background:linear-gradient(135deg,rgba(16,185,129,.1),rgba(16,185,129,.02));border:1px solid rgba(16,185,129,.25);border-left:3px solid var(--py-green);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--py-green-glow);display:block;margin-bottom:5px;font-family:var(--mono);font-size:.7rem;text-transform:uppercase;">⚠️ Common Mistake</strong>
Variable naam number se shuru nahi ho sakta (<code>1name</code> galat). Spaces allowed nahi (<code>my name</code> galat, <code>my_name</code> sahi).
</div>`,
            en: `<h2 style="font-size:1.15rem;font-weight:800;margin-bottom:14px;">📦 Variables & Data Types</h2>
<p style="color:var(--text-soft);font-size:.93rem;margin-bottom:14px;">A variable is a <strong>container</strong> for storing data. No keyword needed in Python — just name it, use <code>=</code>, give value.</p>
<div style="background:var(--code-bg);border:1px solid var(--code-border);border-radius:10px;overflow:hidden;margin-bottom:16px;font-family:var(--mono);font-size:.82rem;">
<div style="display:grid;grid-template-columns:80px 1fr 1fr;padding:9px 14px;background:var(--code-bg-2);color:var(--py-blue-glow);font-weight:700;font-size:.68rem;text-transform:uppercase;">Type · Example · Meaning</div>
<div style="display:grid;grid-template-columns:80px 1fr 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">str</span><span style="color:var(--code-string);">"Ali"</span><span style="color:var(--text-soft);">Text</span></div>
<div style="display:grid;grid-template-columns:80px 1fr 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">int</span><span style="color:var(--code-string);">21</span><span style="color:var(--text-soft);">Whole number</span></div>
<div style="display:grid;grid-template-columns:80px 1fr 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">float</span><span style="color:var(--code-string);">5.9</span><span style="color:var(--text-soft);">Decimal</span></div>
<div style="display:grid;grid-template-columns:80px 1fr 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">bool</span><span style="color:var(--code-string);">True</span><span style="color:var(--text-soft);">True/False</span></div>
</div>
<div style="background:linear-gradient(135deg,rgba(75,139,190,.1),rgba(75,139,190,.03));border:1px solid rgba(75,139,190,.25);border-left:3px solid var(--py-blue);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--text);display:block;margin-bottom:3px;">💡 Dynamic Typing</strong>
Python figures out the type on its own. Use <code>type()</code> to check.
</div>
<div style="background:linear-gradient(135deg,rgba(16,185,129,.1),rgba(16,185,129,.02));border:1px solid rgba(16,185,129,.25);border-left:3px solid var(--py-green);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--py-green-glow);display:block;margin-bottom:5px;font-family:var(--mono);font-size:.7rem;text-transform:uppercase;">⚠️ Common Mistake</strong>
Variable name can't start with a number (<code>1name</code> wrong). No spaces (<code>my name</code> wrong, <code>my_name</code> right).
</div>`
          },
          theory: {
            ur: `<h3>Yeh kya hai?</h3>
<p>Variable ek <strong>naam wala dabba</strong> hai jisme tum kuch bhi rakh sakte ho — number, text, list, kuch bhi. Python mein variable banane ke liye koi special keyword nahi — bas naam likho, <code>=</code> lagao, value do.</p>

<h3>Kaise kaam karta hai?</h3>
<div class="steps">
<ol>
<li><strong>Step 1:</strong> Python naam dekhta hai (jaise <code>age</code>)</li>
<li><strong>Step 2:</strong> <code>=</code> dekhta hai — "assign" samajhta hai</li>
<li><strong>Step 3:</strong> Right side ki value uthata hai (jaise <code>21</code>)</li>
<li><strong>Step 4:</strong> Value ko naam se jodta hai (memory mein store karta hai)</li>
<li><strong>Step 5:</strong> Jab bhi <code>age</code> likho, woh value milti hai</li>
</ol>
</div>

<h3>4 Basic Data Types</h3>

<h4>1. <code>str</code> — String (Text)</h4>
<p>Quotes ke andar likha kuch bhi. Single (<code>'...'</code>) ya double (<code>"..."</code>) — dono chalti hain.</p>
<pre>name = <span class="str">"Ali"</span>
city = <span class="str">'Lahore'</span>
message = <span class="str">"Hello, World!"</span></pre>

<h4>2. <code>int</code> — Integer (Poora Number)</h4>
<p>Bina decimal ke numbers — positive, negative, ya zero.</p>
<pre>age = <span class="num">21</span>
score = <span class="num">-5</span>
count = <span class="num">0</span></pre>

<h4>3. <code>float</code> — Decimal Number</h4>
<p>Decimal wale numbers.</p>
<pre>height = <span class="num">5.9</span>
price = <span class="num">99.99</span>
pi = <span class="num">3.14159</span></pre>

<h4>4. <code>bool</code> — Boolean</h4>
<p>Sirf 2 values: <code>True</code> ya <code>False</code>. Capital letter se shuru hote hain.</p>
<pre>is_student = <span class="kw">True</span>
has_passed = <span class="kw">False</span></pre>

<h3>Type check karna</h3>
<pre><span class="fn">print</span>(<span class="fn">type</span>(<span class="num">21</span>))         <span class="cm"># &lt;class 'int'&gt;</span>
<span class="fn">print</span>(<span class="fn">type</span>(<span class="str">"Ali"</span>))      <span class="cm"># &lt;class 'str'&gt;</span>
<span class="fn">print</span>(<span class="fn">type</span>(<span class="num">5.9</span>))        <span class="cm"># &lt;class 'float'&gt;</span>
<span class="fn">print</span>(<span class="fn">type</span>(<span class="kw">True</span>))       <span class="cm"># &lt;class 'bool'&gt;</span></pre>

<div class="real-life">
<div class="head">🌍 Real Life Example</div>
<p><strong>Scenario:</strong> Student ka record rakhna.</p>
<pre style="margin-top:10px;margin-bottom:0;">name = <span class="str">"Ahmed"</span>       <span class="cm"># str — naam</span>
age = <span class="num">18</span>              <span class="cm"># int — umar</span>
marks = <span class="num">85.5</span>          <span class="cm"># float — marks</span>
passed = <span class="kw">True</span>         <span class="cm"># bool — pass hua?</span>

<span class="fn">print</span>(name, <span class="str">"ki age"</span>, age, <span class="str">"hai"</span>)</pre>
</div>

<div class="warn-box">
<div class="head">⚠️ Common Mistake</div>
<p><strong>Variable naam ke rules:</strong></p>
<ul style="margin-top:6px;">
<li>❌ <code>1name</code> — number se shuru nahi ho sakta</li>
<li>❌ <code>my name</code> — space nahi ho sakti</li>
<li>❌ <code>my-name</code> — hyphen allowed nahi</li>
<li>✅ <code>my_name</code>, <code>myName</code>, <code>name1</code> — sab sahi hain</li>
</ul>
</div>

<div class="pro-tip">
<div class="head">✨ Pro Tip</div>
<p>Variable ka naam <strong>meaningful</strong> rakho. <code>x = 21</code> se behtar hai <code>age = 21</code>. Jab code bara ho jaye, meaningful naam samajhne mein madad karte hain.</p>
</div>`,
            en: `<h3>What is it?</h3>
<p>A variable is a <strong>named box</strong> where you can store anything — numbers, text, lists, whatever. No special keyword in Python — just name it, use <code>=</code>, give value.</p>

<h3>How does it work?</h3>
<div class="steps">
<ol>
<li><strong>Step 1:</strong> Python sees a name (like <code>age</code>)</li>
<li><strong>Step 2:</strong> Sees <code>=</code> — understands "assign"</li>
<li><strong>Step 3:</strong> Takes the right-side value (like <code>21</code>)</li>
<li><strong>Step 4:</strong> Links value to the name (stores in memory)</li>
<li><strong>Step 5:</strong> Whenever <code>age</code> is used, that value returns</li>
</ol>
</div>

<h3>4 Basic Data Types</h3>

<h4>1. <code>str</code> — String (Text)</h4>
<p>Anything inside quotes. Single (<code>'...'</code>) or double (<code>"..."</code>) — both work.</p>
<pre>name = <span class="str">"Ali"</span>
city = <span class="str">'Lahore'</span>
message = <span class="str">"Hello, World!"</span></pre>

<h4>2. <code>int</code> — Integer (Whole Number)</h4>
<p>Numbers without decimals — positive, negative, or zero.</p>
<pre>age = <span class="num">21</span>
score = <span class="num">-5</span>
count = <span class="num">0</span></pre>

<h4>3. <code>float</code> — Decimal Number</h4>
<p>Numbers with decimals.</p>
<pre>height = <span class="num">5.9</span>
price = <span class="num">99.99</span>
pi = <span class="num">3.14159</span></pre>

<h4>4. <code>bool</code> — Boolean</h4>
<p>Only 2 values: <code>True</code> or <code>False</code>. Start with capital letter.</p>
<pre>is_student = <span class="kw">True</span>
has_passed = <span class="kw">False</span></pre>

<h3>Checking the type</h3>
<pre><span class="fn">print</span>(<span class="fn">type</span>(<span class="num">21</span>))         <span class="cm"># &lt;class 'int'&gt;</span>
<span class="fn">print</span>(<span class="fn">type</span>(<span class="str">"Ali"</span>))      <span class="cm"># &lt;class 'str'&gt;</span>
<span class="fn">print</span>(<span class="fn">type</span>(<span class="num">5.9</span>))        <span class="cm"># &lt;class 'float'&gt;</span>
<span class="fn">print</span>(<span class="fn">type</span>(<span class="kw">True</span>))       <span class="cm"># &lt;class 'bool'&gt;</span></pre>

<div class="real-life">
<div class="head">🌍 Real Life Example</div>
<p><strong>Scenario:</strong> Tracking a student's record.</p>
<pre style="margin-top:10px;margin-bottom:0;">name = <span class="str">"Ahmed"</span>       <span class="cm"># str — name</span>
age = <span class="num">18</span>              <span class="cm"># int — age</span>
marks = <span class="num">85.5</span>          <span class="cm"># float — marks</span>
passed = <span class="kw">True</span>         <span class="cm"># bool — passed?</span>

<span class="fn">print</span>(name, <span class="str">"ki age"</span>, age, <span class="str">"hai"</span>)</pre>
</div>

<div class="warn-box">
<div class="head">⚠️ Common Mistake</div>
<p><strong>Variable naming rules:</strong></p>
<ul style="margin-top:6px;">
<li>❌ <code>1name</code> — can't start with a number</li>
<li>❌ <code>my name</code> — no spaces</li>
<li>❌ <code>my-name</code> — no hyphens</li>
<li>✅ <code>my_name</code>, <code>myName</code>, <code>name1</code> — all valid</li>
</ul>
</div>

<div class="pro-tip">
<div class="head">✨ Pro Tip</div>
<p>Use <strong>meaningful</strong> names. <code>x = 21</code> is worse than <code>age = 21</code>. When the code grows, meaningful names help a lot.</p>
</div>`
          },
          quiz: [
            { q: { ur: "age = 21 — yeh kaunsa type hai?", en: "age = 21 — which type?" }, options: ["str", "int", "float", "bool"], answer: 1 },
            { q: { ur: "Type check karne ka function?", en: "Function to check type?" }, options: ["check()", "type()", "kind()", "datatype()"], answer: 1 },
            { q: { ur: "is_student = True — kaunsa type?", en: "is_student = True — which type?" }, options: ["str", "int", "float", "bool"], answer: 3 },
            { q: { ur: "Kaunsa variable naam SAHI hai?", en: "Which variable name is VALID?" }, options: ["1name", "my name", "my_name", "my-name"], answer: 2 },
            { q: { ur: "height = 5.9 — kaunsa type?", en: "height = 5.9 — which type?" }, options: ["int", "float", "str", "bool"], answer: 1 }
          ]
        },

        /* ═══════════════════════════════════════════════════════
           TOPIC 3: Type Casting
           ═══════════════════════════════════════════════════════ */
        {
          id: "type-casting",
          title: { ur: "Type Casting", en: "Type Casting" },
          code: {
            ur: `age_text = "21"
age_number = int(age_text)

print(age_number + 5)   # 26
print(type(age_number))`,
            en: `age_text = "21"
age_number = int(age_text)

print(age_number + 5)   # 26
print(type(age_number))`
          },
          learn: {
            ur: `<h2 style="font-size:1.15rem;font-weight:800;margin-bottom:14px;">🔄 Type Casting</h2>
<p style="color:var(--text-soft);font-size:.93rem;margin-bottom:14px;">Kabhi kabhi hume ek data type ko doosre type mein badalna parta hai — jaise user input hamesha <strong>string</strong> hoti hai, agar usay number ki tarah use karna ho to convert karna parega.</p>
<div style="background:var(--code-bg);border:1px solid var(--code-border);border-radius:10px;overflow:hidden;margin-bottom:16px;font-family:var(--mono);font-size:.82rem;">
<div style="display:grid;grid-template-columns:100px 1fr;padding:9px 14px;background:var(--code-bg-2);color:var(--py-blue-glow);font-weight:700;font-size:.68rem;text-transform:uppercase;">Function · Result</div>
<div style="display:grid;grid-template-columns:100px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">int(x)</span><span style="color:var(--text-soft);">Integer banao</span></div>
<div style="display:grid;grid-template-columns:100px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">float(x)</span><span style="color:var(--text-soft);">Decimal banao</span></div>
<div style="display:grid;grid-template-columns:100px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">str(x)</span><span style="color:var(--text-soft);">Text banao</span></div>
<div style="display:grid;grid-template-columns:100px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">bool(x)</span><span style="color:var(--text-soft);">True/False banao</span></div>
</div>
<div style="background:linear-gradient(135deg,rgba(16,185,129,.1),rgba(16,185,129,.02));border:1px solid rgba(16,185,129,.25);border-left:3px solid var(--py-green);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--py-green-glow);display:block;margin-bottom:5px;font-family:var(--mono);font-size:.7rem;text-transform:uppercase;">⚠️ Common Mistake</strong>
<code>int("hello")</code> — yeh error dega, kyun ke "hello" ek number nahi hai. Sirf number-jaisi strings hi convert ho sakti hain.
</div>`,
            en: `<h2 style="font-size:1.15rem;font-weight:800;margin-bottom:14px;">🔄 Type Casting</h2>
<p style="color:var(--text-soft);font-size:.93rem;margin-bottom:14px;">Sometimes you need to convert one data type to another — e.g., user input is always a <strong>string</strong>, so to use it as a number you must convert it.</p>
<div style="background:var(--code-bg);border:1px solid var(--code-border);border-radius:10px;overflow:hidden;margin-bottom:16px;font-family:var(--mono);font-size:.82rem;">
<div style="display:grid;grid-template-columns:100px 1fr;padding:9px 14px;background:var(--code-bg-2);color:var(--py-blue-glow);font-weight:700;font-size:.68rem;text-transform:uppercase;">Function · Result</div>
<div style="display:grid;grid-template-columns:100px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">int(x)</span><span style="color:var(--text-soft);">Make integer</span></div>
<div style="display:grid;grid-template-columns:100px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">float(x)</span><span style="color:var(--text-soft);">Make decimal</span></div>
<div style="display:grid;grid-template-columns:100px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">str(x)</span><span style="color:var(--text-soft);">Make text</span></div>
<div style="display:grid;grid-template-columns:100px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">bool(x)</span><span style="color:var(--text-soft);">Make True/False</span></div>
</div>
<div style="background:linear-gradient(135deg,rgba(16,185,129,.1),rgba(16,185,129,.02));border:1px solid rgba(16,185,129,.25);border-left:3px solid var(--py-green);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--py-green-glow);display:block;margin-bottom:5px;font-family:var(--mono);font-size:.7rem;text-transform:uppercase;">⚠️ Common Mistake</strong>
<code>int("hello")</code> — will error, because "hello" is not a number. Only number-like strings can be converted.
</div>`
          },
          theory: {
            ur: `<h3>Yeh kya hai?</h3>
<p>Type casting ka matlab hai <strong>ek data type ko doosre mein badalna</strong>. Jaise <code>"21"</code> (string) ko <code>21</code> (int) banana. Yeh bohat zaroori hai jab user se input lete ho — kyunki <code>input()</code> <strong>hamesha string</strong> deta hai.</p>

<h3>Kaise kaam karta hai?</h3>
<div class="steps">
<ol>
<li><strong>Step 1:</strong> Original value lo (jaise <code>"21"</code>)</li>
<li><strong>Step 2:</strong> Conversion function apply karo (<code>int()</code>)</li>
<li><strong>Step 3:</strong> Python value ko parse karta hai</li>
<li><strong>Step 4:</strong> Naya type return karta hai (<code>21</code>)</li>
</ol>
</div>

<h3>Conversion functions</h3>

<h4><code>int()</code> — Integer banao</h4>
<pre><span class="fn">int</span>(<span class="str">"21"</span>)        <span class="cm"># 21</span>
<span class="fn">int</span>(<span class="num">5.9</span>)          <span class="cm"># 5 (decimal hata deta hai)</span>
<span class="fn">int</span>(<span class="kw">True</span>)          <span class="cm"># 1</span>
<span class="fn">int</span>(<span class="str">"hello"</span>)      <span class="cm"># ❌ Error — "hello" number nahi hai</span></pre>

<h4><code>float()</code> — Decimal banao</h4>
<pre><span class="fn">float</span>(<span class="str">"3.5"</span>)      <span class="cm"># 3.5</span>
<span class="fn">float</span>(<span class="num">21</span>)          <span class="cm"># 21.0</span>
<span class="fn">float</span>(<span class="str">"21"</span>)        <span class="cm"># 21.0</span></pre>

<h4><code>str()</code> — String banao</h4>
<pre><span class="fn">str</span>(<span class="num">100</span>)          <span class="cm"># "100"</span>
<span class="fn">str</span>(<span class="num">3.14</span>)         <span class="cm"># "3.14"</span>
<span class="fn">str</span>(<span class="kw">True</span>)         <span class="cm"># "True"</span></pre>

<h4><code>bool()</code> — Boolean banao</h4>
<pre><span class="fn">bool</span>(<span class="num">1</span>)            <span class="cm"># True</span>
<span class="fn">bool</span>(<span class="num">0</span>)            <span class="cm"># False</span>
<span class="fn">bool</span>(<span class="str">""</span>)           <span class="cm"># False (empty string)</span>
<span class="fn">bool</span>(<span class="str">"hello"</span>)      <span class="cm"># True (non-empty)</span></pre>

<h3>Sabse common use: User input</h3>
<pre>age = <span class="fn">input</span>(<span class="str">"Age likho: "</span>)   <span class="cm"># "21" (string)</span>
age = <span class="fn">int</span>(age)                 <span class="cm"># 21 (int)</span>
<span class="fn">print</span>(age + <span class="num">1</span>)                <span class="cm"># 22</span></pre>

<div class="real-life">
<div class="head">🌍 Real Life Example</div>
<p><strong>Scenario:</strong> Pizza shop pe order lena. Customer se pizza ki tadaad poochi, phir price calculate karna.</p>
<pre style="margin-top:10px;margin-bottom:0;">qty = <span class="fn">input</span>(<span class="str">"Kitne pizza? "</span>)   <span class="cm"># "3"</span>
qty = <span class="fn">int</span>(qty)                     <span class="cm"># 3</span>
price_per = <span class="num">500</span>
total = qty * price_per             <span class="cm"># 1500</span>
<span class="fn">print</span>(<span class="str">"Total:"</span>, total, <span class="str">"rupees"</span>)</pre>
</div>

<div class="warn-box">
<div class="head">⚠️ Common Mistake</div>
<p><strong><code>int("hello")</code> ya <code>int("3.5")</code>.</strong> <code>int()</code> sirf number-jaisi strings leta hai. <code>"3.5"</code> ko int nahi, pehle <code>float()</code> karo phir <code>int()</code>.</p>
<pre style="margin-top:8px;margin-bottom:0;"><span class="fn">int</span>(<span class="str">"3.5"</span>)       <span class="cm"># ❌ Error</span>
<span class="fn">int</span>(<span class="fn">float</span>(<span class="str">"3.5"</span>)) <span class="cm"># ✅ 3</span></pre>
</div>

<div class="pro-tip">
<div class="head">✨ Pro Tip</div>
<p>User input hamesha string hota hai — <code>int()</code> ya <code>float()</code> se convert karna zaroori hai. Yeh <strong>sabse common beginner galti</strong> hai.</p>
</div>`,
            en: `<h3>What is it?</h3>
<p>Type casting means <strong>converting one data type to another</strong>. E.g., <code>"21"</code> (string) to <code>21</code> (int). Very important when getting user input — because <code>input()</code> <strong>always returns a string</strong>.</p>

<h3>How does it work?</h3>
<div class="steps">
<ol>
<li><strong>Step 1:</strong> Take original value (like <code>"21"</code>)</li>
<li><strong>Step 2:</strong> Apply conversion function (<code>int()</code>)</li>
<li><strong>Step 3:</strong> Python parses the value</li>
<li><strong>Step 4:</strong> Returns new type (<code>21</code>)</li>
</ol>
</div>

<h3>Conversion functions</h3>

<h4><code>int()</code> — Make integer</h4>
<pre><span class="fn">int</span>(<span class="str">"21"</span>)        <span class="cm"># 21</span>
<span class="fn">int</span>(<span class="num">5.9</span>)          <span class="cm"># 5 (removes decimal)</span>
<span class="fn">int</span>(<span class="kw">True</span>)          <span class="cm"># 1</span>
<span class="fn">int</span>(<span class="str">"hello"</span>)      <span class="cm"># ❌ Error — not a number</span></pre>

<h4><code>float()</code> — Make decimal</h4>
<pre><span class="fn">float</span>(<span class="str">"3.5"</span>)      <span class="cm"># 3.5</span>
<span class="fn">float</span>(<span class="num">21</span>)          <span class="cm"># 21.0</span>
<span class="fn">float</span>(<span class="str">"21"</span>)        <span class="cm"># 21.0</span></pre>

<h4><code>str()</code> — Make string</h4>
<pre><span class="fn">str</span>(<span class="num">100</span>)          <span class="cm"># "100"</span>
<span class="fn">str</span>(<span class="num">3.14</span>)         <span class="cm"># "3.14"</span>
<span class="fn">str</span>(<span class="kw">True</span>)         <span class="cm"># "True"</span></pre>

<h4><code>bool()</code> — Make boolean</h4>
<pre><span class="fn">bool</span>(<span class="num">1</span>)            <span class="cm"># True</span>
<span class="fn">bool</span>(<span class="num">0</span>)            <span class="cm"># False</span>
<span class="fn">bool</span>(<span class="str">""</span>)           <span class="cm"># False (empty)</span>
<span class="fn">bool</span>(<span class="str">"hello"</span>)      <span class="cm"># True (non-empty)</span></pre>

<h3>Most common use: User input</h3>
<pre>age = <span class="fn">input</span>(<span class="str">"Enter age: "</span>)   <span class="cm"># "21" (string)</span>
age = <span class="fn">int</span>(age)                 <span class="cm"># 21 (int)</span>
<span class="fn">print</span>(age + <span class="num">1</span>)                <span class="cm"># 22</span></pre>

<div class="real-life">
<div class="head">🌍 Real Life Example</div>
<p><strong>Scenario:</strong> Taking orders at a pizza shop. Ask quantity, then calculate price.</p>
<pre style="margin-top:10px;margin-bottom:0;">qty = <span class="fn">input</span>(<span class="str">"How many pizzas? "</span>)   <span class="cm"># "3"</span>
qty = <span class="fn">int</span>(qty)                        <span class="cm"># 3</span>
price_per = <span class="num">500</span>
total = qty * price_per                <span class="cm"># 1500</span>
<span class="fn">print</span>(<span class="str">"Total:"</span>, total, <span class="str">"rupees"</span>)</pre>
</div>

<div class="warn-box">
<div class="head">⚠️ Common Mistake</div>
<p><strong><code>int("hello")</code> or <code>int("3.5")</code>.</strong> <code>int()</code> only takes number-like strings. For <code>"3.5"</code>, use <code>float()</code> first, then <code>int()</code>.</p>
<pre style="margin-top:8px;margin-bottom:0;"><span class="fn">int</span>(<span class="str">"3.5"</span>)       <span class="cm"># ❌ Error</span>
<span class="fn">int</span>(<span class="fn">float</span>(<span class="str">"3.5"</span>)) <span class="cm"># ✅ 3</span></pre>
</div>

<div class="pro-tip">
<div class="head">✨ Pro Tip</div>
<p>User input is always a string — must convert with <code>int()</code> or <code>float()</code>. This is the <strong>most common beginner mistake</strong>.</p>
</div>`
          },
          quiz: [
            { q: { ur: 'int("21") + 5 ka result?', en: 'int("21") + 5 = ?' }, options: ["215", "26", "Error", "21+5"], answer: 1 },
            { q: { ur: "String ko integer banane ka function?", en: "Function to make string into integer?" }, options: ["str()", "int()", "convert()", "num()"], answer: 1 },
            { q: { ur: 'int("hello") chalane pe kya hoga?', en: 'int("hello") will...' }, options: ["Return 0", "Error", "Stay as hello", "Return None"], answer: 1 },
            { q: { ur: "str(100) ka result?", en: "str(100) = ?" }, options: ["100", '"100"', "Error", "100.0"], answer: 1 },
            { q: { ur: 'float("3.5") ka result?', en: 'float("3.5") = ?' }, options: ['"3.5"', "3.5", "3", "Error"], answer: 1 }
          ]
        },

        /* ═══════════════════════════════════════════════════════
           TOPIC 4: Basic Input/Output
           ═══════════════════════════════════════════════════════ */
        {
          id: "input-output",
          title: { ur: "Basic Input/Output", en: "Basic Input/Output" },
          code: {
            ur: `name = input("Aapka naam kya hai? ")
print("Hello,", name)

age = input("Aapki age kya hai? ")
age = int(age)
print("Agle saal aap", age + 1, "saal ke honge")`,
            en: `name = input("What is your name? ")
print("Hello,", name)

age = input("What is your age? ")
age = int(age)
print("Next year you will be", age + 1)`
          },
          learn: {
            ur: `<h2 style="font-size:1.15rem;font-weight:800;margin-bottom:14px;">💬 Basic Input/Output</h2>
<p style="color:var(--text-soft);font-size:.93rem;margin-bottom:14px;"><code>input()</code> function user se kuch poochta hai, aur jo bhi wo type kare wo <strong>hamesha string</strong> ke roop mein milta hai — chahe user number hi kyun na likhe.</p>
<p style="color:var(--text-soft);font-size:.93rem;margin-bottom:14px;"><code>print()</code> mein multiple values ko comma se separate karke ek saath dikha sakte ho — Python beech mein khud space laga deta hai.</p>
<div style="background:linear-gradient(135deg,rgba(75,139,190,.1),rgba(75,139,190,.03));border:1px solid rgba(75,139,190,.25);border-left:3px solid var(--py-blue);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--text);display:block;margin-bottom:3px;">💡 Zaroori</strong>
<code>input()</code> se aayi value <strong>hamesha string</strong> hoti hai. Number ki tarah use karne ke liye <code>int()</code> ya <code>float()</code> se convert karo.
</div>
<div style="background:linear-gradient(135deg,rgba(16,185,129,.1),rgba(16,185,129,.02));border:1px solid rgba(16,185,129,.25);border-left:3px solid var(--py-green);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--py-green-glow);display:block;margin-bottom:5px;font-family:var(--mono);font-size:.7rem;text-transform:uppercase;">⚠️ Common Mistake</strong>
<code>input()</code> se aayi value ko seedha number ki tarah use karna (<code>age + 1</code> bina convert kiye) — yeh error dega.
</div>`,
            en: `<h2 style="font-size:1.15rem;font-weight:800;margin-bottom:14px;">💬 Basic Input/Output</h2>
<p style="color:var(--text-soft);font-size:.93rem;margin-bottom:14px;"><code>input()</code> asks the user something, and whatever they type comes back as a <strong>string</strong> — even if they type a number.</p>
<p style="color:var(--text-soft);font-size:.93rem;margin-bottom:14px;">With <code>print()</code>, separate multiple values with commas — Python adds spaces automatically.</p>
<div style="background:linear-gradient(135deg,rgba(75,139,190,.1),rgba(75,139,190,.03));border:1px solid rgba(75,139,190,.25);border-left:3px solid var(--py-blue);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--text);display:block;margin-bottom:3px;">💡 Important</strong>
<code>input()</code> always returns a <strong>string</strong>. To use as a number, convert with <code>int()</code> or <code>float()</code>.
</div>
<div style="background:linear-gradient(135deg,rgba(16,185,129,.1),rgba(16,185,129,.02));border:1px solid rgba(16,185,129,.25);border-left:3px solid var(--py-green);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--py-green-glow);display:block;margin-bottom:5px;font-family:var(--mono);font-size:.7rem;text-transform:uppercase;">⚠️ Common Mistake</strong>
Using <code>input()</code> value directly as a number (<code>age + 1</code> without converting) — will error.
</div>`
          },
          theory: {
            ur: `<h3>Yeh kya hai?</h3>
<p><strong>Input</strong> ka matlab hai user se data lena. <strong>Output</strong> ka matlab hai user ko kuch dikhana. Python mein yeh do functions se hota hai — <code>input()</code> aur <code>print()</code>.</p>

<h3><code>print()</code> — Output dikhana</h3>
<pre><span class="fn">print</span>(<span class="str">"Hello"</span>)                    <span class="cm"># Hello</span>
<span class="fn">print</span>(<span class="str">"A"</span>, <span class="str">"B"</span>, <span class="str">"C"</span>)                 <span class="cm"># A B C</span>
<span class="fn">print</span>(<span class="str">"Sum:"</span>, <span class="num">5</span> + <span class="num">3</span>)              <span class="cm"># Sum: 8</span>
<span class="fn">print</span>(<span class="str">"Age:"</span>, <span class="num">21</span>, <span class="str">"years"</span>)         <span class="cm"># Age: 21 years</span></pre>

<h3><code>input()</code> — User se poochna</h3>
<pre>name = <span class="fn">input</span>(<span class="str">"Naam likho: "</span>)
<span class="fn">print</span>(<span class="str">"Hello,"</span>, name)</pre>

<h3>Kaise kaam karta hai?</h3>
<div class="steps">
<ol>
<li><strong>Step 1:</strong> <code>input()</code> screen pe prompt dikhata hai</li>
<li><strong>Step 2:</strong> User type karta hai, Enter dabata hai</li>
<li><strong>Step 3:</strong> Python <strong>hamesha string</strong> return karta hai</li>
<li><strong>Step 4:</strong> Tum variable mein store karte ho</li>
<li><strong>Step 5:</strong> <code>print()</code> se output dikhate ho</li>
</ol>
</div>

<h3>User input ko number banana</h3>
<pre>age = <span class="fn">input</span>(<span class="str">"Age: "</span>)     <span class="cm"># "21" (string)</span>
age = <span class="fn">int</span>(age)               <span class="cm"># 21 (int)</span>
<span class="fn">print</span>(age + <span class="num">1</span>)              <span class="cm"># 22</span></pre>

<div class="real-life">
<div class="head">🌍 Real Life Example</div>
<p><strong>Scenario:</strong> Ek simple "Greeting Bot".</p>
<pre style="margin-top:10px;margin-bottom:0;">name = <span class="fn">input</span>(<span class="str">"Aapka naam? "</span>)
age = <span class="fn">input</span>(<span class="str">"Aapki age? "</span>)
age = <span class="fn">int</span>(age)

<span class="fn">print</span>(<span class="str">"Assalam-o-Alaikum,"</span>, name, <span class="str">"!"</span>)
<span class="fn">print</span>(<span class="str">"Aap"</span>, age, <span class="str">"saal ke hain."</span>)</pre>
</div>

<div class="warn-box">
<div class="head">⚠️ Common Mistake</div>
<p><strong>Bina convert kiye number ki tarah use karna:</strong></p>
<pre style="margin-top:8px;margin-bottom:0;">age = <span class="fn">input</span>(<span class="str">"Age: "</span>)   <span class="cm"># "21"</span>
<span class="fn">print</span>(age + <span class="num">1</span>)          <span class="cm"># ❌ Error</span>

<span class="cm"># Sahi:</span>
age = <span class="fn">int</span>(<span class="fn">input</span>(<span class="str">"Age: "</span>))
<span class="fn">print</span>(age + <span class="num">1</span>)          <span class="cm"># ✅ 22</span></pre>
</div>

<div class="pro-tip">
<div class="head">✨ Pro Tip</div>
<p>Input ko ek line mein convert karo: <code>age = int(input("Age: "))</code>. Do lines se behtar hai.</p>
</div>`,
            en: `<h3>What is it?</h3>
<p><strong>Input</strong> means getting data from the user. <strong>Output</strong> means showing something to the user. In Python, two functions — <code>input()</code> and <code>print()</code>.</p>

<h3><code>print()</code> — Show output</h3>
<pre><span class="fn">print</span>(<span class="str">"Hello"</span>)                    <span class="cm"># Hello</span>
<span class="fn">print</span>(<span class="str">"A"</span>, <span class="str">"B"</span>, <span class="str">"C"</span>)                 <span class="cm"># A B C</span>
<span class="fn">print</span>(<span class="str">"Sum:"</span>, <span class="num">5</span> + <span class="num">3</span>)              <span class="cm"># Sum: 8</span></pre>

<h3><code>input()</code> — Ask the user</h3>
<pre>name = <span class="fn">input</span>(<span class="str">"Enter name: "</span>)
<span class="fn">print</span>(<span class="str">"Hello,"</span>, name)</pre>

<h3>How does it work?</h3>
<div class="steps">
<ol>
<li><strong>Step 1:</strong> <code>input()</code> shows a prompt</li>
<li><strong>Step 2:</strong> User types, hits Enter</li>
<li><strong>Step 3:</strong> Python <strong>always returns a string</strong></li>
<li><strong>Step 4:</strong> You store it in a variable</li>
<li><strong>Step 5:</strong> <code>print()</code> shows output</li>
</ol>
</div>

<h3>Converting input to number</h3>
<pre>age = <span class="fn">input</span>(<span class="str">"Age: "</span>)     <span class="cm"># "21" (string)</span>
age = <span class="fn">int</span>(age)               <span class="cm"># 21 (int)</span>
<span class="fn">print</span>(age + <span class="num">1</span>)              <span class="cm"># 22</span></pre>

<div class="real-life">
<div class="head">🌍 Real Life Example</div>
<p><strong>Scenario:</strong> A simple "Greeting Bot".</p>
<pre style="margin-top:10px;margin-bottom:0;">name = <span class="fn">input</span>(<span class="str">"Your name? "</span>)
age = <span class="fn">input</span>(<span class="str">"Your age? "</span>)
age = <span class="fn">int</span>(age)

<span class="fn">print</span>(<span class="str">"Hello,"</span>, name, <span class="str">"!"</span>)
<span class="fn">print</span>(<span class="str">"You are"</span>, age, <span class="str">"years old."</span>)</pre>
</div>

<div class="warn-box">
<div class="head">⚠️ Common Mistake</div>
<p><strong>Using without converting:</strong></p>
<pre style="margin-top:8px;margin-bottom:0;">age = <span class="fn">input</span>(<span class="str">"Age: "</span>)   <span class="cm"># "21"</span>
<span class="fn">print</span>(age + <span class="num">1</span>)          <span class="cm"># ❌ Error</span>

<span class="cm"># Correct:</span>
age = <span class="fn">int</span>(<span class="fn">input</span>(<span class="str">"Age: "</span>))
<span class="fn">print</span>(age + <span class="num">1</span>)          <span class="cm"># ✅ 22</span></pre>
</div>

<div class="pro-tip">
<div class="head">✨ Pro Tip</div>
<p>Convert in one line: <code>age = int(input("Age: "))</code>. Better than two lines.</p>
</div>`
          },
          quiz: [
            { q: { ur: "input() se hamesha kaunsi value?", en: "input() always returns?" }, options: ["int", "string", "float", "bool"], answer: 1 },
            { q: { ur: "age = input() ke baad age + 1 karne se?", en: "After age = input(), age + 1 will?" }, options: ["Work", "Error", "Return 0", "Nothing"], answer: 1 },
            { q: { ur: 'print("A", "B", "C") ka output?', en: 'print("A", "B", "C") outputs?' }, options: ["ABC", "A B C", "A,B,C", "Error"], answer: 1 },
            { q: { ur: "input() ke andar text ka kaam?", en: "Text inside input() does what?" }, options: ["Store value", "Show prompt to user", "Check error", "Nothing"], answer: 1 },
            { q: { ur: "User age ko number ki tarah use karne ke liye?", en: "To use user age as number?" }, options: ["Nothing", "int() se convert", "str() se convert", "print()"], answer: 1 }
          ]
        },

        /* ═══════════════════════════════════════════════════════
           TOPIC 5: Comments
           ═══════════════════════════════════════════════════════ */
        {
          id: "comments",
          title: { ur: "Comments", en: "Comments" },
          code: {
            ur: `# Yeh ek single-line comment hai
print("Hello")  # yeh bhi comment hai

"""
Yeh multi-line comment hai,
jab lambi note likhni ho
"""
print("Done!")`,
            en: `# This is a single-line comment
print("Hello")  # this is also a comment

"""
This is a multi-line comment,
for longer notes
"""
print("Done!")`
          },
          learn: {
            ur: `<h2 style="font-size:1.15rem;font-weight:800;margin-bottom:14px;">💭 Comments</h2>
<p style="color:var(--text-soft);font-size:.93rem;margin-bottom:14px;">Comments wo lines hain jo Python <strong>ignore</strong> kar deta hai — yeh sirf code padhne walon ke liye hote hain, taake samjha ja sake code kya kar raha hai.</p>
<div style="background:var(--code-bg);border:1px solid var(--code-border);border-radius:10px;overflow:hidden;margin-bottom:16px;font-family:var(--mono);font-size:.82rem;">
<div style="display:grid;grid-template-columns:120px 1fr;padding:9px 14px;background:var(--code-bg-2);color:var(--py-blue-glow);font-weight:700;font-size:.68rem;text-transform:uppercase;">Type · Symbol</div>
<div style="display:grid;grid-template-columns:120px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">Single-line</span><span style="color:var(--text-soft);"><code># comment</code></span></div>
<div style="display:grid;grid-template-columns:120px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">Multi-line</span><span style="color:var(--text-soft);"><code>""" ... """</code> ya <code>''' ... '''</code></span></div>
</div>
<div style="background:linear-gradient(135deg,rgba(75,139,190,.1),rgba(75,139,190,.03));border:1px solid rgba(75,139,190,.25);border-left:3px solid var(--py-blue);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--text);display:block;margin-bottom:3px;">💡 Kyun zaroori</strong>
Jab code bara ho jaye ya kuch mahino baad wapas dekho, comments yaad dilate hain "yeh line kyun likhi thi".
</div>`,
            en: `<h2 style="font-size:1.15rem;font-weight:800;margin-bottom:14px;">💭 Comments</h2>
<p style="color:var(--text-soft);font-size:.93rem;margin-bottom:14px;">Comments are lines that Python <strong>ignores</strong> — they're only for code readers, to help understand what the code does.</p>
<div style="background:var(--code-bg);border:1px solid var(--code-border);border-radius:10px;overflow:hidden;margin-bottom:16px;font-family:var(--mono);font-size:.82rem;">
<div style="display:grid;grid-template-columns:120px 1fr;padding:9px 14px;background:var(--code-bg-2);color:var(--py-blue-glow);font-weight:700;font-size:.68rem;text-transform:uppercase;">Type · Symbol</div>
<div style="display:grid;grid-template-columns:120px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">Single-line</span><span style="color:var(--text-soft);"><code># comment</code></span></div>
<div style="display:grid;grid-template-columns:120px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">Multi-line</span><span style="color:var(--text-soft);"><code>""" ... """</code> or <code>''' ... '''</code></span></div>
</div>
<div style="background:linear-gradient(135deg,rgba(75,139,190,.1),rgba(75,139,190,.03));border:1px solid rgba(75,139,190,.25);border-left:3px solid var(--py-blue);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--text);display:block;margin-bottom:3px;">💡 Why important</strong>
When code grows or you return months later, comments remind you "why this line was written".
</div>`
          },
          theory: {
            ur: `<h3>Yeh kya hai?</h3>
<p>Comment ek <strong>note</strong> hai jo tum code mein likhte ho — Python usay <strong>ignore</strong> kar deta hai. Yeh sirf insaan ke liye hai (tum, ya tumhara team), computer ke liye nahi.</p>

<h3>Kaise kaam karta hai?</h3>
<p>Jab Python interpreter kisi line pe <code>#</code> dekhta hai, woh us line ke baaki hissay ko <strong>skip</strong> kar deta hai. Jaise tum ek kitaab mein pencil se note likhte ho — padhne wale ke liye, printer ke liye nahi.</p>

<h3>2 Types</h3>

<h4>1. Single-line Comment</h4>
<p><code>#</code> se shuru hota hai, us line ke aakhir tak.</p>
<pre><span class="cm"># Yeh ek comment hai</span>
<span class="fn">print</span>(<span class="str">"Hello"</span>)    <span class="cm"># yeh bhi comment hai</span>
<span class="cm"># Poori line comment hai</span></pre>

<h4>2. Multi-line Comment</h4>
<p>Teen quotes se — <code>"""..."""</code> ya <code>'''...'''</code>. Lambe notes ke liye.</p>
<pre><span class="cm">"""
Yeh multi-line comment hai
jo kai lines tak chalta hai.
Code ke upar documentation ke liye.
"""</span>
<span class="fn">print</span>(<span class="str">"Hello"</span>)</pre>

<div class="real-life">
<div class="head">🌍 Real Life Example</div>
<p><strong>Scenario:</strong> Ek function jo tax calculate karta hai. Comment se samajh aata hai kya ho raha hai.</p>
<pre style="margin-top:10px;margin-bottom:0;"><span class="cm"># Tax calculate karo 17% ke hisaab se</span>
<span class="cm"># Pakistan ka standard GST rate hai</span>
price = <span class="num">1000</span>
tax = price * <span class="num">0.17</span>       <span class="cm"># 170</span>
total = price + tax        <span class="cm"># 1170</span>
<span class="fn">print</span>(total)</pre>
</div>

<div class="warn-box">
<div class="head">⚠️ Common Mistake</div>
<p><strong>Comment ko zaroori samajhna.</strong> Comment sirf <strong>help</strong> ke liye hai — Python usay chala nahi sakta. Agar tum chahte ho ke kuch chale, comment mein nahi, actual code mein likho.</p>
</div>

<div class="pro-tip">
<div class="head">✨ Pro Tip</div>
<p>Comments <strong>kyun</strong> batane chahiye, <strong>kya</strong> nahi. <code># x ko 5 badhao</code> useless hai — <code># counter ko 1 se badhao har iteration pe</code> useful hai.</p>
</div>`,
            en: `<h3>What is it?</h3>
<p>A comment is a <strong>note</strong> you write in code — Python <strong>ignores</strong> it. It's only for humans (you, or your team), not for the computer.</p>

<h3>How does it work?</h3>
<p>When the Python interpreter sees <code>#</code> on a line, it <strong>skips</strong> the rest. Like writing pencil notes in a book — for the reader, not for the printer.</p>

<h3>2 Types</h3>

<h4>1. Single-line Comment</h4>
<p>Starts with <code>#</code>, goes to the end of the line.</p>
<pre><span class="cm"># This is a comment</span>
<span class="fn">print</span>(<span class="str">"Hello"</span>)    <span class="cm"># also a comment</span>
<span class="cm"># Whole line is a comment</span></pre>

<h4>2. Multi-line Comment</h4>
<p>Three quotes — <code>"""..."""</code> or <code>'''...'''</code>. For longer notes.</p>
<pre><span class="cm">"""
This is a multi-line comment
spanning many lines.
For documentation above code.
"""</span>
<span class="fn">print</span>(<span class="str">"Hello"</span>)</pre>

<div class="real-life">
<div class="head">🌍 Real Life Example</div>
<p><strong>Scenario:</strong> A function that calculates tax. Comment helps understand.</p>
<pre style="margin-top:10px;margin-bottom:0;"><span class="cm"># Calculate tax at 17%</span>
<span class="cm"># Pakistan's standard GST rate</span>
price = <span class="num">1000</span>
tax = price * <span class="num">0.17</span>       <span class="cm"># 170</span>
total = price + tax        <span class="cm"># 1170</span>
<span class="fn">print</span>(total)</pre>
</div>

<div class="warn-box">
<div class="head">⚠️ Common Mistake</div>
<p><strong>Thinking comments are required.</strong> Comments are just <strong>help</strong> — Python can't run them. If you want something to run, write it as code.</p>
</div>

<div class="pro-tip">
<div class="head">✨ Pro Tip</div>
<p>Comments should explain <strong>why</strong>, not <strong>what</strong>. <code># increment x by 5</code> is useless — <code># increment counter per iteration</code> is useful.</p>
</div>`
          },
          quiz: [
            { q: { ur: "Single-line comment kis symbol se?", en: "Single-line comment starts with?" }, options: ["//", "#", "--", "/*"], answer: 1 },
            { q: { ur: "Comments Python ke liye kya karte hain?", en: "What do comments do for Python?" }, options: ["Speed up code", "Are ignored, only for reading", "Cause errors", "Required to run"], answer: 1 },
            { q: { ur: "Multi-line comment kis se banta hai?", en: "Multi-line comment uses?" }, options: ['Two quotes ("")', 'Three quotes (""" ya \'\'\')', "#", "//"], answer: 1 },
            { q: { ur: "Comments kyun zaroori hain?", en: "Why are comments important?" }, options: ["Speed", "Help understand code", "Prevent errors", "Shorter file"], answer: 1 },
            { q: { ur: 'print("Hi")  # note — comment kahan?', en: 'print("Hi")  # note — comment where?' }, options: ["Whole line", "After #", "Inside print", "None"], answer: 1 }
          ]
        }

      ]
    }
    // ═══ BAQI 11 MODULES YAHAN AAYENGE ═══
  ]
};