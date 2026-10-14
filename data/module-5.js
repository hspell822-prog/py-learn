// data/module-5.js
// Module 5: Functions — 7 topics

window.MODULES = window.MODULES || {};

window.MODULES["module-5"] = {
  id: "module-5",
  number: 5,
  slug: "functions",
  title: { ur: "Functions", en: "Functions" },
  description: {
    ur: "def, parameters, return, default args, *args/**kwargs, lambda, scope",
    en: "def, parameters, return, default args, *args/**kwargs, lambda, scope"
  },
  duration: "14 minutes",
  level: "Beginner",
  locked: true,

  topics: [

    /* ═══════════════════════════════════════════════════════
       TOPIC 1: Defining Functions (def)
       ═══════════════════════════════════════════════════════ */
    {
      id: "def-functions",
      title: { ur: "Defining Functions", en: "Defining Functions" },
      icon: "🔧",
      code: {
        ur: `# Function define karna
def greet():
    print("Hello!")

# Call karna
greet()
greet()   # dobara call

def welcome(name):
    print("Welcome,", name)

welcome("Ali")
welcome("Sara")`,
        en: `# Defining a function
def greet():
    print("Hello!")

# Calling it
greet()
greet()   # call again

def welcome(name):
    print("Welcome,", name)

welcome("Ali")
welcome("Sara")`
      },
      learn: {
        ur: `<h2 style="font-size:1.15rem;font-weight:800;margin-bottom:14px;">🔧 Defining Functions (def)</h2>
<p style="color:var(--text-soft);font-size:.93rem;margin-bottom:14px;">Function ek <strong>reusable block of code</strong> hai — ek baar likho, jitni baar chaho use karo, bina dobara likhe.</p>

<div style="background:var(--code-bg);border:1px solid var(--code-border);border-radius:10px;overflow:hidden;margin-bottom:16px;font-family:var(--mono);font-size:.82rem;">
  <div style="display:grid;grid-template-columns:120px 1fr;padding:9px 14px;background:var(--code-bg-2);color:var(--py-blue-glow);font-weight:700;font-size:.68rem;text-transform:uppercase;">Part · Kaam</div>
  <div style="display:grid;grid-template-columns:120px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">def</span><span style="color:var(--text-soft);">Function banane ka keyword</span></div>
  <div style="display:grid;grid-template-columns:120px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">name</span><span style="color:var(--text-soft);">Function ka naam</span></div>
  <div style="display:grid;grid-template-columns:120px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">()</span><span style="color:var(--text-soft);">Parameters (khali bhi ho sakta hai)</span></div>
  <div style="display:grid;grid-template-columns:120px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">:</span><span style="color:var(--text-soft);">Colon</span></div>
  <div style="display:grid;grid-template-columns:120px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">Indented body</span><span style="color:var(--text-soft);">4 spaces, function ka code</span></div>
</div>

<div style="background:linear-gradient(135deg,rgba(75,139,190,.1),rgba(75,139,190,.03));border:1px solid rgba(75,139,190,.25);border-left:3px solid var(--py-blue);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--text);display:block;margin-bottom:3px;">💡 Kyun zaroori</strong>
Agar ek kaam baar baar karna ho (jaise welcome message), function banane se code <strong>repeat nahi</strong> karna parta.
</div>

<div style="background:linear-gradient(135deg,rgba(16,185,129,.1),rgba(16,185,129,.02));border:1px solid rgba(16,185,129,.25);border-left:3px solid var(--py-green);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--py-green-glow);display:block;margin-bottom:5px;font-family:var(--mono);font-size:.7rem;text-transform:uppercase;">⚠️ Common Mistake</strong>
Function <strong>define</strong> karna lekin <strong>call</strong> karna bhool jana — sirf <code>def greet():</code> likhne se kuch nahi hota jab tak <code>greet()</code> na likho.
</div>`,
        en: `<h2 style="font-size:1.15rem;font-weight:800;margin-bottom:14px;">🔧 Defining Functions (def)</h2>
<p style="color:var(--text-soft);font-size:.93rem;margin-bottom:14px;">A function is a <strong>reusable block of code</strong> — write once, use many times, without repeating.</p>

<div style="background:var(--code-bg);border:1px solid var(--code-border);border-radius:10px;overflow:hidden;margin-bottom:16px;font-family:var(--mono);font-size:.82rem;">
  <div style="display:grid;grid-template-columns:120px 1fr;padding:9px 14px;background:var(--code-bg-2);color:var(--py-blue-glow);font-weight:700;font-size:.68rem;text-transform:uppercase;">Part · Does</div>
  <div style="display:grid;grid-template-columns:120px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">def</span><span style="color:var(--text-soft);">Keyword to define</span></div>
  <div style="display:grid;grid-template-columns:120px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">name</span><span style="color:var(--text-soft);">Function name</span></div>
  <div style="display:grid;grid-template-columns:120px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">()</span><span style="color:var(--text-soft);">Parameters (can be empty)</span></div>
  <div style="display:grid;grid-template-columns:120px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">:</span><span style="color:var(--text-soft);">Colon</span></div>
  <div style="display:grid;grid-template-columns:120px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">Indented body</span><span style="color:var(--text-soft);">4 spaces, function's code</span></div>
</div>

<div style="background:linear-gradient(135deg,rgba(75,139,190,.1),rgba(75,139,190,.03));border:1px solid rgba(75,139,190,.25);border-left:3px solid var(--py-blue);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--text);display:block;margin-bottom:3px;">💡 Why</strong>
If you repeat a task (like a welcome message), functions help avoid rewriting.
</div>

<div style="background:linear-gradient(135deg,rgba(16,185,129,.1),rgba(16,185,129,.02));border:1px solid rgba(16,185,129,.25);border-left:3px solid var(--py-green);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--py-green-glow);display:block;margin-bottom:5px;font-family:var(--mono);font-size:.7rem;text-transform:uppercase;">⚠️ Common Mistake</strong>
Defining but not calling — <code>def greet():</code> does nothing until you write <code>greet()</code>.
</div>`
      },
      theory: {
        ur: `<h3>Yeh kya hai?</h3>
<p>Function ek <strong>mini-program</strong> hai jo tumhare bade program ke andar chalta hai. Ek baar likho, baar baar bulao. Jaise TV remote ka button — ek baar set karo, phir har baar press.</p>

<h3>Kaise kaam karta hai?</h3>
<div class="steps">
<ol>
<li><strong>Step 1:</strong> Python <code>def</code> dekhta hai — function bana raha hai</li>
<li><strong>Step 2:</strong> Function ka <strong>naam</strong> aur body yaad rakhta hai (chalata nahi)</li>
<li><strong>Step 3:</strong> Jab tum <code>greet()</code> likhte ho, Python function chalata hai</li>
<li><strong>Step 4:</strong> Andar ka code chalta hai, output milta hai</li>
<li><strong>Step 5:</strong> Function khatam → wapas line ke baad continue</li>
</ol>
</div>

<h3>Simple example</h3>
<pre><span class="kw">def</span> <span class="fn">greet</span>():
    <span class="fn">print</span>(<span class="str">"Hello!"</span>)

<span class="fn">greet</span>()   <span class="cm"># Hello!</span>
<span class="fn">greet</span>()   <span class="cm"># Hello! (dobara)</span></pre>

<h3>Parameter ke saath</h3>
<pre><span class="kw">def</span> <span class="fn">welcome</span>(name):
    <span class="fn">print</span>(<span class="str">"Welcome,"</span>, name)

<span class="fn">welcome</span>(<span class="str">"Ali"</span>)     <span class="cm"># Welcome, Ali</span>
<span class="fn">welcome</span>(<span class="str">"Sara"</span>)    <span class="cm"># Welcome, Sara</span></pre>

<h3>Multiple parameters</h3>
<pre><span class="kw">def</span> <span class="fn">add</span>(a, b):
    <span class="fn">print</span>(a + b)

<span class="fn">add</span>(<span class="num">5</span>, <span class="num">3</span>)       <span class="cm"># 8</span>
<span class="fn">add</span>(<span class="num">10</span>, <span class="num">20</span>)     <span class="cm"># 30</span></pre>

<div class="real-life">
<div class="head">🌍 Real Life Example</div>
<p><strong>Scenario:</strong> Restaurant bill print karna.</p>
<pre style="margin-top:10px;margin-bottom:0;"><span class="kw">def</span> <span class="fn">print_bill</span>(item, price, qty):
    total = price * qty
    <span class="fn">print</span>(<span class="str">f"{item} x {qty} = {total}"</span>)

<span class="fn">print_bill</span>(<span class="str">"Pizza"</span>, <span class="num">500</span>, <span class="num">2</span>)    <span class="cm"># Pizza x 2 = 1000</span>
<span class="fn">print_bill</span>(<span class="str">"Burger"</span>, <span class="num">300</span>, <span class="num">3</span>)   <span class="cm"># Burger x 3 = 900</span></pre>
</div>

<div class="warn-box">
<div class="head">⚠️ Common Mistakes</div>
<ul>
<li>Function call karna bhool jana</li>
<li><code>()</code> bhool jana call karte waqt — <code>greet</code> vs <code>greet()</code></li>
<li>Body indented nahi karna — IndentationError</li>
</ul>
</div>

<div class="pro-tip">
<div class="head">✨ Pro Tip</div>
<p>Function ka naam <strong>verb</strong> rakho — <code>add</code>, <code>print_bill</code>, <code>calculate_tax</code>. Yeh code ka maksad batata hai.</p>
</div>`,
        en: `<h3>What is it?</h3>
<p>A function is a <strong>mini-program</strong> inside your bigger program. Write once, call many times. Like a TV remote button — set once, press repeatedly.</p>

<h3>How does it work?</h3>
<div class="steps">
<ol>
<li><strong>Step 1:</strong> Python sees <code>def</code> — defining a function</li>
<li><strong>Step 2:</strong> Remembers name + body (doesn't run it)</li>
<li><strong>Step 3:</strong> When you write <code>greet()</code>, Python runs it</li>
<li><strong>Step 4:</strong> Inner code runs, output appears</li>
<li><strong>Step 5:</strong> Function ends → continue after call</li>
</ol>
</div>

<h3>Simple example</h3>
<pre><span class="kw">def</span> <span class="fn">greet</span>():
    <span class="fn">print</span>(<span class="str">"Hello!"</span>)

<span class="fn">greet</span>()   <span class="cm"># Hello!</span>
<span class="fn">greet</span>()   <span class="cm"># Hello!</span></pre>

<h3>With parameter</h3>
<pre><span class="kw">def</span> <span class="fn">welcome</span>(name):
    <span class="fn">print</span>(<span class="str">"Welcome,"</span>, name)

<span class="fn">welcome</span>(<span class="str">"Ali"</span>)     <span class="cm"># Welcome, Ali</span>
<span class="fn">welcome</span>(<span class="str">"Sara"</span>)    <span class="cm"># Welcome, Sara</span></pre>

<h3>Multiple parameters</h3>
<pre><span class="kw">def</span> <span class="fn">add</span>(a, b):
    <span class="fn">print</span>(a + b)

<span class="fn">add</span>(<span class="num">5</span>, <span class="num">3</span>)       <span class="cm"># 8</span>
<span class="fn">add</span>(<span class="num">10</span>, <span class="num">20</span>)     <span class="cm"># 30</span></pre>

<div class="real-life">
<div class="head">🌍 Real Life Example</div>
<p><strong>Scenario:</strong> Print restaurant bill.</p>
<pre style="margin-top:10px;margin-bottom:0;"><span class="kw">def</span> <span class="fn">print_bill</span>(item, price, qty):
    total = price * qty
    <span class="fn">print</span>(<span class="str">f"{item} x {qty} = {total}"</span>)

<span class="fn">print_bill</span>(<span class="str">"Pizza"</span>, <span class="num">500</span>, <span class="num">2</span>)
<span class="fn">print_bill</span>(<span class="str">"Burger"</span>, <span class="num">300</span>, <span class="num">3</span>)</pre>
</div>

<div class="warn-box">
<div class="head">⚠️ Common Mistakes</div>
<ul>
<li>Forgetting to call</li>
<li>Forgetting <code>()</code> — <code>greet</code> vs <code>greet()</code></li>
<li>Not indenting body — IndentationError</li>
</ul>
</div>

<div class="pro-tip">
<div class="head">✨ Pro Tip</div>
<p>Name functions as <strong>verbs</strong> — <code>add</code>, <code>print_bill</code>, <code>calculate_tax</code>.</p>
</div>`
      },
      quiz: [
        { q: { ur: "Function define karne ka keyword?", en: "Keyword to define function?" }, options: ["function", "def", "func", "define"], answer: 1 },
        { q: { ur: "Function call karne ke liye?", en: "To call a function?" }, options: ["def greet", "greet()", "call greet", "run greet"], answer: 1 },
        { q: { ur: "Function banane ka faida?", en: "Benefit of functions?" }, options: ["Slower", "Reusable code", "Fewer errors auto", "No benefit"], answer: 1 },
        { q: { ur: 'def greet(): print("Hi") — call nahi kiya to?', en: 'def greet(): print("Hi") — no call?' }, options: ["Prints Hi", "Nothing prints", "Error", "Deletes"], answer: 1 },
        { q: { ur: "Function body kaisi honi chahiye?", en: "Function body should be?" }, options: ["No spacing", "Indented", "CAPS", "One line"], answer: 1 }
      ]
    },

    /* ═══════════════════════════════════════════════════════
       TOPIC 2: Parameters & Arguments
       ═══════════════════════════════════════════════════════ */
    {
      id: "parameters",
      title: { ur: "Parameters & Arguments", en: "Parameters & Arguments" },
      icon: "📥",
      code: {
        ur: `# Parameters (definition) vs Arguments (call)
def greet(name):
    print("Hello,", name)

greet("Ali")    # "Ali" argument hai
greet("Sara")

def add(a, b):
    print(a + b)

add(5, 3)   # 8`,
        en: `# Parameters (definition) vs Arguments (call)
def greet(name):
    print("Hello,", name)

greet("Ali")    # "Ali" is argument
greet("Sara")

def add(a, b):
    print(a + b)

add(5, 3)   # 8`
      },
      learn: {
        ur: `<h2 style="font-size:1.15rem;font-weight:800;margin-bottom:14px;">📥 Parameters & Arguments</h2>
<p style="color:var(--text-soft);font-size:.93rem;margin-bottom:14px;">Parameters function ko <strong>input</strong> dene ka tareeqa hain — taake function alag-alag values ke saath kaam kar sake.</p>

<div style="background:var(--code-bg);border:1px solid var(--code-border);border-radius:10px;overflow:hidden;margin-bottom:16px;font-family:var(--mono);font-size:.82rem;">
  <div style="display:grid;grid-template-columns:120px 1fr;padding:9px 14px;background:var(--code-bg-2);color:var(--py-blue-glow);font-weight:700;font-size:.68rem;text-transform:uppercase;">Term · Kahan</div>
  <div style="display:grid;grid-template-columns:120px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">Parameter</span><span style="color:var(--text-soft);">Function definition mein</span></div>
  <div style="display:grid;grid-template-columns:120px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">Argument</span><span style="color:var(--text-soft);">Function call ke waqt</span></div>
</div>

<div style="background:linear-gradient(135deg,rgba(75,139,190,.1),rgba(75,139,190,.03));border:1px solid rgba(75,139,190,.25);border-left:3px solid var(--py-blue);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--text);display:block;margin-bottom:3px;">💡 Yaad rakho</strong>
<strong>Parameter</strong> = "khaali dabba" (definition mein). <strong>Argument</strong> = "cheez jo daali" (call mein).
</div>`,
        en: `<h2 style="font-size:1.15rem;font-weight:800;margin-bottom:14px;">📥 Parameters & Arguments</h2>
<p style="color:var(--text-soft);font-size:.93rem;margin-bottom:14px;">Parameters are how you give <strong>input</strong> to a function — so it works with different values.</p>

<div style="background:var(--code-bg);border:1px solid var(--code-border);border-radius:10px;overflow:hidden;margin-bottom:16px;font-family:var(--mono);font-size:.82rem;">
  <div style="display:grid;grid-template-columns:120px 1fr;padding:9px 14px;background:var(--code-bg-2);color:var(--py-blue-glow);font-weight:700;font-size:.68rem;text-transform:uppercase;">Term · Where</div>
  <div style="display:grid;grid-template-columns:120px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">Parameter</span><span style="color:var(--text-soft);">In definition</span></div>
  <div style="display:grid;grid-template-columns:120px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">Argument</span><span style="color:var(--text-soft);">At call time</span></div>
</div>

<div style="background:linear-gradient(135deg,rgba(75,139,190,.1),rgba(75,139,190,.03));border:1px solid rgba(75,139,190,.25);border-left:3px solid var(--py-blue);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--text);display:block;margin-bottom:3px;">💡 Remember</strong>
<strong>Parameter</strong> = "empty box" (in definition). <strong>Argument</strong> = "thing put in" (at call).
</div>`
      },
      theory: {
        ur: `<h3>Yeh kya hai?</h3>
<p>Parameter ek <strong>placeholder</strong> hai jo function ke andar data lene ke liye hota hai. Argument wo <strong>actual value</strong> hai jo call karte waqt di jati hai.</p>

<h3>Kaise kaam karta hai?</h3>
<div class="steps">
<ol>
<li><strong>Step 1:</strong> Tum function define karte ho <code>def greet(name):</code> — <code>name</code> parameter hai</li>
<li><strong>Step 2:</strong> Jab call karte ho <code>greet("Ali")</code> — <code>"Ali"</code> argument hai</li>
<li><strong>Step 3:</strong> Python <code>name = "Ali"</code> set karta hai</li>
<li><strong>Step 4:</strong> Function body chalti hai us value ke saath</li>
</ol>
</div>

<h3>Examples</h3>
<pre><span class="kw">def</span> <span class="fn">greet</span>(name):
    <span class="fn">print</span>(<span class="str">"Hello,"</span>, name)

<span class="fn">greet</span>(<span class="str">"Ali"</span>)    <span class="cm"># Hello, Ali</span>
<span class="fn">greet</span>(<span class="str">"Sara"</span>)   <span class="cm"># Hello, Sara</span></pre>

<h3>Multiple parameters</h3>
<pre><span class="kw">def</span> <span class="fn">add</span>(a, b):
    <span class="fn">print</span>(a + b)

<span class="fn">add</span>(<span class="num">5</span>, <span class="num">3</span>)     <span class="cm"># 8</span>
<span class="fn">add</span>(<span class="num">10</span>, <span class="num">7</span>)    <span class="cm"># 17</span></pre>

<div class="real-life">
<div class="head">🌍 Real Life Example</div>
<p><strong>Scenario:</strong> Tax calculator.</p>
<pre style="margin-top:10px;margin-bottom:0;"><span class="kw">def</span> <span class="fn">calculate_tax</span>(price, rate):
    tax = price * rate
    <span class="fn">print</span>(<span class="str">f"Tax: {tax}"</span>)

<span class="fn">calculate_tax</span>(<span class="num">1000</span>, <span class="num">0.17</span>)   <span class="cm"># Tax: 170.0</span>
<span class="fn">calculate_tax</span>(<span class="num">5000</span>, <span class="num">0.20</span>)   <span class="cm"># Tax: 1000.0</span></pre>
</div>

<div class="warn-box">
<div class="head">⚠️ Common Mistake</div>
<p><strong>Argument missing.</strong> <code>def add(a, b):</code> hai to <code>add(5)</code> error dega — kyunki <code>b</code> diya nahi.</p>
<pre style="margin-top:8px;margin-bottom:0;"><span class="fn">add</span>(<span class="num">5</span>)       <span class="cm"># ❌ Error</span>
<span class="fn">add</span>(<span class="num">5</span>, <span class="num">3</span>)    <span class="cm"># ✅ 8</span></pre>
</div>

<div class="pro-tip">
<div class="head">✨ Pro Tip</div>
<p>Parameter ka naam <strong>meaningful</strong> rakho — <code>name</code>, <code>price</code>, <code>age</code>. <code>x</code>, <code>y</code> se behtar hai.</p>
</div>`,
        en: `<h3>What is it?</h3>
<p>A parameter is a <strong>placeholder</strong> inside a function for receiving data. An argument is the <strong>actual value</strong> passed at call time.</p>

<h3>How does it work?</h3>
<div class="steps">
<ol>
<li><strong>Step 1:</strong> Define: <code>def greet(name):</code> — <code>name</code> is parameter</li>
<li><strong>Step 2:</strong> Call: <code>greet("Ali")</code> — <code>"Ali"</code> is argument</li>
<li><strong>Step 3:</strong> Python sets <code>name = "Ali"</code></li>
<li><strong>Step 4:</strong> Body runs with that value</li>
</ol>
</div>

<h3>Examples</h3>
<pre><span class="kw">def</span> <span class="fn">greet</span>(name):
    <span class="fn">print</span>(<span class="str">"Hello,"</span>, name)

<span class="fn">greet</span>(<span class="str">"Ali"</span>)    <span class="cm"># Hello, Ali</span></pre>

<h3>Multiple parameters</h3>
<pre><span class="kw">def</span> <span class="fn">add</span>(a, b):
    <span class="fn">print</span>(a + b)

<span class="fn">add</span>(<span class="num">5</span>, <span class="num">3</span>)     <span class="cm"># 8</span></pre>

<div class="real-life">
<div class="head">🌍 Real Life Example</div>
<p><strong>Scenario:</strong> Tax calculator.</p>
<pre style="margin-top:10px;margin-bottom:0;"><span class="kw">def</span> <span class="fn">calculate_tax</span>(price, rate):
    tax = price * rate
    <span class="fn">print</span>(<span class="str">f"Tax: {tax}"</span>)

<span class="fn">calculate_tax</span>(<span class="num">1000</span>, <span class="num">0.17</span>)   <span class="cm"># Tax: 170.0</span></pre>
</div>

<div class="warn-box">
<div class="head">⚠️ Common Mistake</div>
<p><strong>Missing argument.</strong> <code>add(5)</code> when <code>add(a, b)</code> defined → error.</p>
<pre style="margin-top:8px;margin-bottom:0;"><span class="fn">add</span>(<span class="num">5</span>)       <span class="cm"># ❌ Error</span>
<span class="fn">add</span>(<span class="num">5</span>, <span class="num">3</span>)    <span class="cm"># ✅ 8</span></pre>
</div>

<div class="pro-tip">
<div class="head">✨ Pro Tip</div>
<p>Use <strong>meaningful</strong> names — <code>name</code>, <code>price</code>, <code>age</code>. Better than <code>x</code>, <code>y</code>.</p>
</div>`
      },
      quiz: [
        { q: { ur: "Parameter aur Argument mein farak?", en: "Difference parameter vs argument?" }, options: ["No difference", "Parameter definition mein, argument call mein", "Only numbers", "Argument inside"], answer: 1 },
        { q: { ur: "def add(a, b): — add(5) call se?", en: "def add(a, b): — add(5)?" }, options: ["Prints 5", "Error (b missing)", "Prints 0", "Prints None"], answer: 1 },
        { q: { ur: 'def greet(name): — greet("Ali")?', en: 'def greet(name): — greet("Ali")?' }, options: ["name", "Ali", "Error", "Nothing"], answer: 1 },
        { q: { ur: "Multiple parameters kaise separate?", en: "Separate multiple parameters?" }, options: ["Semicolon", "Comma", "Space", "Colon"], answer: 1 },
        { q: { ur: "Parameters function ko kya dete?", en: "Parameters give function?" }, options: ["Speed", "Input/data", "Name", "Errors"], answer: 1 }
      ]
    },

    /* ═══════════════════════════════════════════════════════
       TOPIC 3: Return Values
       ═══════════════════════════════════════════════════════ */
    {
      id: "return",
      title: { ur: "Return Values", en: "Return Values" },
      icon: "↩️",
      code: {
        ur: `# return — value wapas bhejo
def add(a, b):
    return a + b

result = add(5, 3)
print(result)         # 8
print(result * 2)     # 16

# Function bina return → None
def greet():
    print("Hi")

x = greet()
print(x)   # None`,
        en: `# return — send value back
def add(a, b):
    return a + b

result = add(5, 3)
print(result)         # 8
print(result * 2)     # 16

# Function without return → None
def greet():
    print("Hi")

x = greet()
print(x)   # None`
      },
      learn: {
        ur: `<h2 style="font-size:1.15rem;font-weight:800;margin-bottom:14px;">↩️ Return Values</h2>
<p style="color:var(--text-soft);font-size:.93rem;margin-bottom:14px;"><code>return</code> function se <strong>value wapas bhejta hai</strong>, taake usay aage use kiya ja sake.</p>

<div style="background:var(--code-bg);border:1px solid var(--code-border);border-radius:10px;overflow:hidden;margin-bottom:16px;font-family:var(--mono);font-size:.82rem;">
  <div style="display:grid;grid-template-columns:120px 1fr;padding:9px 14px;background:var(--code-bg-2);color:var(--py-blue-glow);font-weight:700;font-size:.68rem;text-transform:uppercase;">Term · Kaam</div>
  <div style="display:grid;grid-template-columns:120px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">print()</span><span style="color:var(--text-soft);">Screen pe dikhao</span></div>
  <div style="display:grid;grid-template-columns:120px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">return</span><span style="color:var(--text-soft);">Value wapas bhejo</span></div>
</div>

<div style="background:linear-gradient(135deg,rgba(75,139,190,.1),rgba(75,139,190,.03));border:1px solid rgba(75,139,190,.25);border-left:3px solid var(--py-blue);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--text);display:block;margin-bottom:3px;">💡 Bara farak</strong>
<code>print()</code> sirf dikhata hai — value <strong>store nahi</strong> hoti. <code>return</code> value wapas deta hai — variable mein rakh sakte ho, aage use kar sakte ho.
</div>

<div style="background:linear-gradient(135deg,rgba(16,185,129,.1),rgba(16,185,129,.02));border:1px solid rgba(16,185,129,.25);border-left:3px solid var(--py-green);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--py-green-glow);display:block;margin-bottom:5px;font-family:var(--mono);font-size:.7rem;text-transform:uppercase;">⚠️ Common Mistake</strong>
<code>return</code> ke bajaye <code>print()</code> use karna jab value aage use karni ho — variable mein store nahi hogi.
</div>`,
        en: `<h2 style="font-size:1.15rem;font-weight:800;margin-bottom:14px;">↩️ Return Values</h2>
<p style="color:var(--text-soft);font-size:.93rem;margin-bottom:14px;"><code>return</code> sends a <strong>value back</strong> from a function, so it can be used further.</p>

<div style="background:var(--code-bg);border:1px solid var(--code-border);border-radius:10px;overflow:hidden;margin-bottom:16px;font-family:var(--mono);font-size:.82rem;">
  <div style="display:grid;grid-template-columns:120px 1fr;padding:9px 14px;background:var(--code-bg-2);color:var(--py-blue-glow);font-weight:700;font-size:.68rem;text-transform:uppercase;">Term · Does</div>
  <div style="display:grid;grid-template-columns:120px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">print()</span><span style="color:var(--text-soft);">Show on screen</span></div>
  <div style="display:grid;grid-template-columns:120px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">return</span><span style="color:var(--text-soft);">Send value back</span></div>
</div>

<div style="background:linear-gradient(135deg,rgba(75,139,190,.1),rgba(75,139,190,.03));border:1px solid rgba(75,139,190,.25);border-left:3px solid var(--py-blue);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--text);display:block;margin-bottom:3px;">💡 Big difference</strong>
<code>print()</code> only shows — value <strong>not stored</strong>. <code>return</code> sends it back — can be stored and reused.
</div>

<div style="background:linear-gradient(135deg,rgba(16,185,129,.1),rgba(16,185,129,.02));border:1px solid rgba(16,185,129,.25);border-left:3px solid var(--py-green);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--py-green-glow);display:block;margin-bottom:5px;font-family:var(--mono);font-size:.7rem;text-transform:uppercase;">⚠️ Common Mistake</strong>
Using <code>print()</code> instead of <code>return</code> when you want to reuse the value.
</div>`
      },
      theory: {
        ur: `<h3>Yeh kya hai?</h3>
<p><code>return</code> function ka <strong>output</strong> hai. Jab function kaam khatam karta hai, <code>return</code> value deta hai — jaise ek machine input leti hai aur output deti hai.</p>

<h3>Kaise kaam karta hai?</h3>
<div class="steps">
<ol>
<li><strong>Step 1:</strong> Function call hota hai</li>
<li><strong>Step 2:</strong> Code chalta hai</li>
<li><strong>Step 3:</strong> <code>return</code> milta hai → value bhejta hai</li>
<li><strong>Step 4:</strong> Function <strong>turant rukta hai</strong> — baaki code skip</li>
<li><strong>Step 5:</strong> Value call wali jagah pahunchti hai</li>
</ol>
</div>

<h3>Live example</h3>
<pre><span class="kw">def</span> <span class="fn">add</span>(a, b):
    <span class="kw">return</span> a + b

result = <span class="fn">add</span>(<span class="num">5</span>, <span class="num">3</span>)   <span class="cm"># 8</span>
<span class="fn">print</span>(result)         <span class="cm"># 8</span>
<span class="fn">print</span>(result * <span class="num">2</span>)     <span class="cm"># 16 (reuse)</span></pre>

<h3>print vs return</h3>
<pre><span class="cm"># print — sirf dikhata hai</span>
<span class="kw">def</span> <span class="fn">bad</span>():
    <span class="fn">print</span>(<span class="num">5</span> + <span class="num">3</span>)

x = <span class="fn">bad</span>()    <span class="cm"># 8 screen pe, lekin x = None</span>

<span class="cm"># return — value deta hai</span>
<span class="kw">def</span> <span class="fn">good</span>():
    <span class="kw">return</span> <span class="num">5</span> + <span class="num">3</span>

y = <span class="fn">good</span>()    <span class="cm"># kuch screen pe nahi, lekin y = 8</span></pre>

<h3>Multiple returns</h3>
<pre><span class="kw">def</span> <span class="fn">min_max</span>(numbers):
    <span class="kw">return</span> <span class="fn">min</span>(numbers), <span class="fn">max</span>(numbers)

low, high = <span class="fn">min_max</span>([<span class="num">3</span>, <span class="num">1</span>, <span class="num">4</span>, <span class="num">1</span>, <span class="num">5</span>])
<span class="fn">print</span>(low, high)   <span class="cm"># 1 5</span></pre>

<div class="real-life">
<div class="head">🌍 Real Life Example</div>
<p><strong>Scenario:</strong> Bill calculate karke return karna.</p>
<pre style="margin-top:10px;margin-bottom:0;"><span class="kw">def</span> <span class="fn">total_bill</span>(price, qty):
    <span class="kw">return</span> price * qty

bill = <span class="fn">total_bill</span>(<span class="num">500</span>, <span class="num">3</span>)   <span class="cm"># 1500</span>
<span class="fn">print</span>(<span class="str">f"Pay {bill} rupees"</span>)</pre>
</div>

<div class="warn-box">
<div class="head">⚠️ Common Mistakes</div>
<ul>
<li><code>return</code> ke baad code likhna — woh nahi chalta</li>
<li>Sirf <code>print()</code> use karna jab value chahiye</li>
<li><code>return</code> na likhna — function by default <code>None</code> return karta hai</li>
</ul>
</div>

<div class="pro-tip">
<div class="head">✨ Pro Tip</div>
<p>Functions jo <strong>return</strong> karte hain, woh <strong>composable</strong> hote hain — ek ka result doosre mein daal sakte ho: <code>double(add(2, 3))</code>.</p>
</div>`,
        en: `<h3>What is it?</h3>
<p><code>return</code> is a function's <strong>output</strong>. When a function finishes, <code>return</code> gives a value — like a machine takes input and gives output.</p>

<h3>How does it work?</h3>
<div class="steps">
<ol>
<li><strong>Step 1:</strong> Function is called</li>
<li><strong>Step 2:</strong> Code runs</li>
<li><strong>Step 3:</strong> <code>return</code> → sends value</li>
<li><strong>Step 4:</strong> Function <strong>stops immediately</strong> — rest is skipped</li>
<li><strong>Step 5:</strong> Value lands at the call site</li>
</ol>
</div>

<h3>Live example</h3>
<pre><span class="kw">def</span> <span class="fn">add</span>(a, b):
    <span class="kw">return</span> a + b

result = <span class="fn">add</span>(<span class="num">5</span>, <span class="num">3</span>)
<span class="fn">print</span>(result)         <span class="cm"># 8</span>
<span class="fn">print</span>(result * <span class="num">2</span>)     <span class="cm"># 16</span></pre>

<h3>print vs return</h3>
<pre><span class="kw">def</span> <span class="fn">bad</span>():
    <span class="fn">print</span>(<span class="num">5</span> + <span class="num">3</span>)

x = <span class="fn">bad</span>()    <span class="cm"># 8 on screen, x = None</span>

<span class="kw">def</span> <span class="fn">good</span>():
    <span class="kw">return</span> <span class="num">5</span> + <span class="num">3</span>

y = <span class="fn">good</span>()    <span class="cm"># nothing on screen, y = 8</span></pre>

<h3>Multiple returns</h3>
<pre><span class="kw">def</span> <span class="fn">min_max</span>(numbers):
    <span class="kw">return</span> <span class="fn">min</span>(numbers), <span class="fn">max</span>(numbers)

low, high = <span class="fn">min_max</span>([<span class="num">3</span>, <span class="num">1</span>, <span class="num">4</span>, <span class="num">1</span>, <span class="num">5</span>])
<span class="fn">print</span>(low, high)   <span class="cm"># 1 5</span></pre>

<div class="real-life">
<div class="head">🌍 Real Life Example</div>
<p><strong>Scenario:</strong> Return calculated bill.</p>
<pre style="margin-top:10px;margin-bottom:0;"><span class="kw">def</span> <span class="fn">total_bill</span>(price, qty):
    <span class="kw">return</span> price * qty

bill = <span class="fn">total_bill</span>(<span class="num">500</span>, <span class="num">3</span>)
<span class="fn">print</span>(<span class="str">f"Pay {bill} rupees"</span>)</pre>
</div>

<div class="warn-box">
<div class="head">⚠️ Common Mistakes</div>
<ul>
<li>Code after <code>return</code> — never runs</li>
<li>Using <code>print()</code> only when value is needed</li>
<li>No <code>return</code> → function defaults to <code>None</code></li>
</ul>
</div>

<div class="pro-tip">
<div class="head">✨ Pro Tip</div>
<p>Functions that <strong>return</strong> are <strong>composable</strong> — <code>double(add(2, 3))</code>.</p>
</div>`
      },
      quiz: [
        { q: { ur: "return ka kaam kya hai?", en: "What does return do?" }, options: ["Show on screen", "Send value back", "Stop function", "Error"], answer: 1 },
        { q: { ur: "result = add(5,3) — result mein kya?", en: "result = add(5,3) — result?" }, options: ["Nothing", "8", '"5+3"', "Error"], answer: 1 },
        { q: { ur: "print vs return mein farak?", en: "print vs return difference?" }, options: ["Same", "print shows, return gives back", "return only numbers", "print faster"], answer: 1 },
        { q: { ur: "return na ho to function kya deta?", en: "No return → function gives?" }, options: ["0", "None", "Error", "Empty"], answer: 1 },
        { q: { ur: "return ke baad code chalta hai?", en: "Code after return runs?" }, options: ["Yes", "No", "Sometimes", "Only in loops"], answer: 1 }
      ]
    },

    /* ═══════════════════════════════════════════════════════
       TOPIC 4: Default & Keyword Arguments
       ═══════════════════════════════════════════════════════ */
    {
      id: "default-keyword-args",
      title: { ur: "Default & Keyword Arguments", en: "Default & Keyword Arguments" },
      icon: "🎛️",
      code: {
        ur: `# Default arguments
def greet(name, greeting="Hello"):
    print(greeting, name)

greet("Ali")                    # Hello Ali
greet("Ali", "Hi")               # Hi Ali

# Keyword arguments — order matter nahi
greet(name="Sara", greeting="Hey")   # Hey Sara`,
        en: `# Default arguments
def greet(name, greeting="Hello"):
    print(greeting, name)

greet("Ali")                    # Hello Ali
greet("Ali", "Hi")               # Hi Ali

# Keyword arguments — order doesn't matter
greet(name="Sara", greeting="Hey")   # Hey Sara`
      },
      learn: {
        ur: `<h2 style="font-size:1.15rem;font-weight:800;margin-bottom:14px;">🎛️ Default & Keyword Arguments</h2>
<p style="color:var(--text-soft);font-size:.93rem;margin-bottom:14px;"><strong>Default arguments</strong> ek default value dete hain parameter ko, agar call karte waqt value na di jaye. <strong>Keyword arguments</strong> naam se value dete hain — order matter nahi.</p>

<div style="background:var(--code-bg);border:1px solid var(--code-border);border-radius:10px;overflow:hidden;margin-bottom:16px;font-family:var(--mono);font-size:.82rem;">
  <div style="display:grid;grid-template-columns:140px 1fr;padding:9px 14px;background:var(--code-bg-2);color:var(--py-blue-glow);font-weight:700;font-size:.68rem;text-transform:uppercase;">Type · Example</div>
  <div style="display:grid;grid-template-columns:140px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">Default</span><span style="color:var(--text-soft);"><code>greeting="Hello"</code></span></div>
  <div style="display:grid;grid-template-columns:140px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">Keyword</span><span style="color:var(--text-soft);"><code>greet(name="Ali")</code></span></div>
</div>

<div style="background:linear-gradient(135deg,rgba(16,185,129,.1),rgba(16,185,129,.02));border:1px solid rgba(16,185,129,.25);border-left:3px solid var(--py-green);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--py-green-glow);display:block;margin-bottom:5px;font-family:var(--mono);font-size:.7rem;text-transform:uppercase;">⚠️ Rule</strong>
Default parameters <strong>hamesha aakhir mein</strong> hone chahiye. <code>def f(a=1, b)</code> error dega.
</div>`,
        en: `<h2 style="font-size:1.15rem;font-weight:800;margin-bottom:14px;">🎛️ Default & Keyword Arguments</h2>
<p style="color:var(--text-soft);font-size:.93rem;margin-bottom:14px;"><strong>Default arguments</strong> give a fallback value if not provided. <strong>Keyword arguments</strong> pass by name — order doesn't matter.</p>

<div style="background:var(--code-bg);border:1px solid var(--code-border);border-radius:10px;overflow:hidden;margin-bottom:16px;font-family:var(--mono);font-size:.82rem;">
  <div style="display:grid;grid-template-columns:140px 1fr;padding:9px 14px;background:var(--code-bg-2);color:var(--py-blue-glow);font-weight:700;font-size:.68rem;text-transform:uppercase;">Type · Example</div>
  <div style="display:grid;grid-template-columns:140px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">Default</span><span style="color:var(--text-soft);"><code>greeting="Hello"</code></span></div>
  <div style="display:grid;grid-template-columns:140px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">Keyword</span><span style="color:var(--text-soft);"><code>greet(name="Ali")</code></span></div>
</div>

<div style="background:linear-gradient(135deg,rgba(16,185,129,.1),rgba(16,185,129,.02));border:1px solid rgba(16,185,129,.25);border-left:3px solid var(--py-green);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--py-green-glow);display:block;margin-bottom:5px;font-family:var(--mono);font-size:.7rem;text-transform:uppercase;">⚠️ Rule</strong>
Default parameters must come <strong>last</strong>. <code>def f(a=1, b)</code> errors.
</div>`
      },
      theory: {
        ur: `<h3>Yeh kya hai?</h3>
<p><strong>Default arguments</strong> — agar argument na do to ek default value use ho jati hai. <strong>Keyword arguments</strong> — argument ka naam likh ke do, order ki tension khatam.</p>

<h3>Default arguments</h3>
<pre><span class="kw">def</span> <span class="fn">greet</span>(name, greeting=<span class="str">"Hello"</span>):
    <span class="fn">print</span>(greeting, name)

<span class="fn">greet</span>(<span class="str">"Ali"</span>)               <span class="cm"># Hello Ali (default)</span>
<span class="fn">greet</span>(<span class="str">"Ali"</span>, <span class="str">"Hi"</span>)         <span class="cm"># Hi Ali (overwrite)</span></pre>

<h3>Keyword arguments</h3>
<pre><span class="kw">def</span> <span class="fn">student</span>(name, age, city):
    <span class="fn">print</span>(name, age, city)

<span class="cm"># Positional (order zaroori)</span>
<span class="fn">student</span>(<span class="str">"Ali"</span>, <span class="num">21</span>, <span class="str">"Lahore"</span>)

<span class="cm"># Keyword (order matter nahi)</span>
<span class="fn">student</span>(age=<span class="num">21</span>, city=<span class="str">"Lahore"</span>, name=<span class="str">"Ali"</span>)</pre>

<h3>Mixed</h3>
<pre><span class="fn">student</span>(<span class="str">"Ali"</span>, city=<span class="str">"Lahore"</span>, age=<span class="num">21</span>)   <span class="cm"># ✅</span>
<span class="fn">student</span>(name=<span class="str">"Ali"</span>, <span class="num">21</span>, <span class="str">"Lahore"</span>)         <span class="cm"># ❌ positional after keyword</span></pre>

<div class="real-life">
<div class="head">🌍 Real Life Example</div>
<p><strong>Scenario:</strong> Coffee order karna — default size "Medium".</p>
<pre style="margin-top:10px;margin-bottom:0;"><span class="kw">def</span> <span class="fn">order_coffee</span>(type, size=<span class="str">"Medium"</span>, sugar=<span class="num">1</span>):
    <span class="fn">print</span>(<span class="str">f"{size} {type} with {sugar} sugar"</span>)

<span class="fn">order_coffee</span>(<span class="str">"Latte"</span>)                        <span class="cm"># Medium Latte with 1 sugar</span>
<span class="fn">order_coffee</span>(<span class="str">"Mocha"</span>, size=<span class="str">"Large"</span>)         <span class="cm"># Large Mocha with 1 sugar</span>
<span class="fn">order_coffee</span>(<span class="str">"Espresso"</span>, sugar=<span class="num">0</span>)            <span class="cm"># Medium Espresso with 0 sugar</span></pre>
</div>

<div class="warn-box">
<div class="head">⚠️ Common Mistake</div>
<p><strong>Default parameters ka order.</strong> Default wale hamesha aakhir mein:</p>
<pre style="margin-top:8px;margin-bottom:0;"><span class="kw">def</span> <span class="fn">f</span>(a=<span class="num">1</span>, b):    <span class="cm"># ❌ SyntaxError</span>
<span class="kw">def</span> <span class="fn">f</span>(b, a=<span class="num">1</span>):    <span class="cm"># ✅</span></pre>
</div>

<div class="pro-tip">
<div class="head">✨ Pro Tip</div>
<p>Bohat parameters wale functions mein <strong>keyword arguments</strong> use karo — code readable ho jata hai: <code>create_user(name="Ali", age=21)</code>.</p>
</div>`,
        en: `<h3>What is it?</h3>
<p><strong>Default arguments</strong> — if you don't pass an argument, a default is used. <strong>Keyword arguments</strong> — pass by name, no order tension.</p>

<h3>Default arguments</h3>
<pre><span class="kw">def</span> <span class="fn">greet</span>(name, greeting=<span class="str">"Hello"</span>):
    <span class="fn">print</span>(greeting, name)

<span class="fn">greet</span>(<span class="str">"Ali"</span>)               <span class="cm"># Hello Ali</span>
<span class="fn">greet</span>(<span class="str">"Ali"</span>, <span class="str">"Hi"</span>)         <span class="cm"># Hi Ali</span></pre>

<h3>Keyword arguments</h3>
<pre><span class="kw">def</span> <span class="fn">student</span>(name, age, city):
    <span class="fn">print</span>(name, age, city)

<span class="cm"># Positional (order matters)</span>
<span class="fn">student</span>(<span class="str">"Ali"</span>, <span class="num">21</span>, <span class="str">"Lahore"</span>)

<span class="cm"># Keyword (no order)</span>
<span class="fn">student</span>(age=<span class="num">21</span>, city=<span class="str">"Lahore"</span>, name=<span class="str">"Ali"</span>)</pre>

<h3>Mixed</h3>
<pre><span class="fn">student</span>(<span class="str">"Ali"</span>, city=<span class="str">"Lahore"</span>, age=<span class="num">21</span>)   <span class="cm"># ✅</span>
<span class="fn">student</span>(name=<span class="str">"Ali"</span>, <span class="num">21</span>, <span class="str">"Lahore"</span>)         <span class="cm"># ❌</span></pre>

<div class="real-life">
<div class="head">🌍 Real Life Example</div>
<p><strong>Scenario:</strong> Coffee order — default size "Medium".</p>
<pre style="margin-top:10px;margin-bottom:0;"><span class="kw">def</span> <span class="fn">order_coffee</span>(type, size=<span class="str">"Medium"</span>, sugar=<span class="num">1</span>):
    <span class="fn">print</span>(<span class="str">f"{size} {type} with {sugar} sugar"</span>)

<span class="fn">order_coffee</span>(<span class="str">"Latte"</span>)                        <span class="cm"># Medium Latte with 1 sugar</span>
<span class="fn">order_coffee</span>(<span class="str">"Mocha"</span>, size=<span class="str">"Large"</span>)         <span class="cm"># Large Mocha with 1 sugar</span>
<span class="fn">order_coffee</span>(<span class="str">"Espresso"</span>, sugar=<span class="num">0</span>)            <span class="cm"># Medium Espresso with 0 sugar</span></pre>
</div>

<div class="warn-box">
<div class="head">⚠️ Common Mistake</div>
<p><strong>Default parameter order.</strong> Defaults must come last:</p>
<pre style="margin-top:8px;margin-bottom:0;"><span class="kw">def</span> <span class="fn">f</span>(a=<span class="num">1</span>, b):    <span class="cm"># ❌ SyntaxError</span>
<span class="kw">def</span> <span class="fn">f</span>(b, a=<span class="num">1</span>):    <span class="cm"># ✅</span></pre>
</div>

<div class="pro-tip">
<div class="head">✨ Pro Tip</div>
<p>Use <strong>keyword arguments</strong> for many parameters — more readable: <code>create_user(name="Ali", age=21)</code>.</p>
</div>`
      },
      quiz: [
        { q: { ur: 'def greet(name, greeting="Hello") — greet("Ali") se greeting?', en: 'def greet(name, greeting="Hello") — greet("Ali") → greeting?' }, options: ["Empty", "Hello", "Error", "None"], answer: 1 },
        { q: { ur: "Keyword arguments mein kya matter nahi?", en: "What doesn't matter in keyword args?" }, options: ["Value", "Order", "Name", "Type"], answer: 1 },
        { q: { ur: "Default argument kab kaam aata?", en: "When default arg used?" }, options: ["Always", "When value not given", "Never", "Only in loops"], answer: 1 },
        { q: { ur: "def f(a=1, b) — kyun galat?", en: "def f(a=1, b) — why wrong?" }, options: ["No error", "Defaults must be last", "Two params not allowed", "Wrong name"], answer: 1 },
        { q: { ur: 'greet(name="Sara", greeting="Hey")?', en: 'greet(name="Sara", greeting="Hey")?' }, options: ["Positional", "Keyword", "Default", "Required"], answer: 1 }
      ]
    },

    /* ═══════════════════════════════════════════════════════
       TOPIC 5: *args and **kwargs
       ═══════════════════════════════════════════════════════ */
    {
      id: "args-kwargs",
      title: { ur: "*args and **kwargs", en: "*args and **kwargs" },
      icon: "🎁",
      code: {
        ur: `# *args — jitni chaho values
def add_all(*args):
    total = 0
    for num in args:
        total += num
    return total

print(add_all(1, 2, 3))         # 6
print(add_all(1, 2, 3, 4, 5))   # 15

# **kwargs — jitne chaho key-value pairs
def show_info(**kwargs):
    for key, value in kwargs.items():
        print(key, ":", value)

show_info(name="Ali", age=21)`,
        en: `# *args — as many values as you like
def add_all(*args):
    total = 0
    for num in args:
        total += num
    return total

print(add_all(1, 2, 3))         # 6
print(add_all(1, 2, 3, 4, 5))   # 15

# **kwargs — as many key-value pairs
def show_info(**kwargs):
    for key, value in kwargs.items():
        print(key, ":", value)

show_info(name="Ali", age=21)`
      },
      learn: {
        ur: `<h2 style="font-size:1.15rem;font-weight:800;margin-bottom:14px;">🎁 *args and **kwargs</h2>
<p style="color:var(--text-soft);font-size:.93rem;margin-bottom:14px;">Kabhi function ko pata nahi hota <strong>kitne arguments</strong> milenge — <code>*args</code> aur <code>**kwargs</code> isi masle ka hal hain.</p>

<div style="background:var(--code-bg);border:1px solid var(--code-border);border-radius:10px;overflow:hidden;margin-bottom:16px;font-family:var(--mono);font-size:.82rem;">
  <div style="display:grid;grid-template-columns:120px 1fr;padding:9px 14px;background:var(--code-bg-2);color:var(--py-blue-glow);font-weight:700;font-size:.68rem;text-transform:uppercase;">Syntax · Kaam</div>
  <div style="display:grid;grid-template-columns:120px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">*args</span><span style="color:var(--text-soft);">Multiple values (tuple)</span></div>
  <div style="display:grid;grid-template-columns:120px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">**kwargs</span><span style="color:var(--text-soft);">Multiple key-values (dict)</span></div>
</div>

<div style="background:linear-gradient(135deg,rgba(75,139,190,.1),rgba(75,139,190,.03));border:1px solid rgba(75,139,190,.25);border-left:3px solid var(--py-blue);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--text);display:block;margin-bottom:3px;">💡 Yaad rakho</strong>
<code>*args</code> — <strong>star</strong> wala, values ke liye. <code>**kwargs</code> — <strong>double star</strong>, key-value pairs ke liye.
</div>`,
        en: `<h2 style="font-size:1.15rem;font-weight:800;margin-bottom:14px;">🎁 *args and **kwargs</h2>
<p style="color:var(--text-soft);font-size:.93rem;margin-bottom:14px;">Sometimes a function doesn't know <strong>how many arguments</strong> will come — <code>*args</code> and <code>**kwargs</code> solve this.</p>

<div style="background:var(--code-bg);border:1px solid var(--code-border);border-radius:10px;overflow:hidden;margin-bottom:16px;font-family:var(--mono);font-size:.82rem;">
  <div style="display:grid;grid-template-columns:120px 1fr;padding:9px 14px;background:var(--code-bg-2);color:var(--py-blue-glow);font-weight:700;font-size:.68rem;text-transform:uppercase;">Syntax · Does</div>
  <div style="display:grid;grid-template-columns:120px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">*args</span><span style="color:var(--text-soft);">Multiple values (tuple)</span></div>
  <div style="display:grid;grid-template-columns:120px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">**kwargs</span><span style="color:var(--text-soft);">Multiple key-values (dict)</span></div>
</div>

<div style="background:linear-gradient(135deg,rgba(75,139,190,.1),rgba(75,139,190,.03));border:1px solid rgba(75,139,190,.25);border-left:3px solid var(--py-blue);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--text);display:block;margin-bottom:3px;">💡 Remember</strong>
<code>*args</code> — <strong>star</strong> for values. <code>**kwargs</code> — <strong>double star</strong> for key-value pairs.
</div>`
      },
      theory: {
        ur: `<h3>Yeh kya hai?</h3>
<p><code>*args</code> aur <code>**kwargs</code> special syntax hain jo function ko <strong>flexible</strong> banati hain — kitne bhi arguments accept kar sakta hai.</p>

<h3>*args — Multiple values</h3>
<pre><span class="kw">def</span> <span class="fn">add_all</span>(*args):
    <span class="fn">print</span>(<span class="fn">type</span>(args))   <span class="cm"># &lt;class 'tuple'&gt;</span>
    <span class="kw">return</span> <span class="fn">sum</span>(args)

<span class="fn">print</span>(<span class="fn">add_all</span>(<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>))         <span class="cm"># 6</span>
<span class="fn">print</span>(<span class="fn">add_all</span>(<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>, <span class="num">4</span>, <span class="num">5</span>))   <span class="cm"># 15</span></pre>

<h3>**kwargs — Multiple key-values</h3>
<pre><span class="kw">def</span> <span class="fn">show_info</span>(**kwargs):
    <span class="fn">print</span>(<span class="fn">type</span>(kwargs))   <span class="cm"># &lt;class 'dict'&gt;</span>
    <span class="kw">for</span> key, value <span class="kw">in</span> kwargs.items():
        <span class="fn">print</span>(key, <span class="str">":"</span>, value)

<span class="fn">show_info</span>(name=<span class="str">"Ali"</span>, age=<span class="num">21</span>, city=<span class="str">"Lahore"</span>)
<span class="cm"># name : Ali</span>
<span class="cm"># age : 21</span>
<span class="cm"># city : Lahore</span></pre>

<h3>Dono ek saath</h3>
<pre><span class="kw">def</span> <span class="fn">order</span>(item, *extras, **details):
    <span class="fn">print</span>(<span class="str">"Item:"</span>, item)
    <span class="fn">print</span>(<span class="str">"Extras:"</span>, extras)
    <span class="fn">print</span>(<span class="str">"Details:"</span>, details)

<span class="fn">order</span>(<span class="str">"Pizza"</span>, <span class="str">"Cheese"</span>, <span class="str">"Olives"</span>, size=<span class="str">"Large"</span>, spicy=<span class="kw">True</span>)
<span class="cm"># Item: Pizza</span>
<span class="cm"># Extras: ('Cheese', 'Olives')</span>
<span class="cm"># Details: {'size': 'Large', 'spicy': True}</span></pre>

<div class="real-life">
<div class="head">🌍 Real Life Example</div>
<p><strong>Scenario:</strong> Logging function jo kuch bhi accept kare.</p>
<pre style="margin-top:10px;margin-bottom:0;"><span class="kw">def</span> <span class="fn">log</span>(*messages, **info):
    <span class="fn">print</span>(<span class="str">"[LOG]"</span>, <span class="str">" "</span>.join(messages))
    <span class="kw">for</span> k, v <span class="kw">in</span> info.items():
        <span class="fn">print</span>(<span class="str">f"  {k}: {v}"</span>)

<span class="fn">log</span>(<span class="str">"User login"</span>, <span class="str">"success"</span>, user=<span class="str">"ali"</span>, ip=<span class="str">"192.168.1.1"</span>)</pre>
</div>

<div class="warn-box">
<div class="head">⚠️ Common Mistake</div>
<p><strong><code>*args</code> aur <code>**kwargs</code> confuse karna.</strong> Yaad rakho — <code>*</code> = values (tuple), <code>**</code> = key-value (dict).</p>
</div>

<div class="pro-tip">
<div class="head">✨ Pro Tip</div>
<p>Naam zaroori nahi — <code>*nums</code>, <code>**info</code> bhi chalta hai. Lekin <code>args</code>/<code>kwargs</code> convention hai.</p>
</div>`,
        en: `<h3>What is it?</h3>
<p><code>*args</code> and <code>**kwargs</code> are special syntax that make functions <strong>flexible</strong> — accept any number of arguments.</p>

<h3>*args — Multiple values</h3>
<pre><span class="kw">def</span> <span class="fn">add_all</span>(*args):
    <span class="fn">print</span>(<span class="fn">type</span>(args))   <span class="cm"># &lt;class 'tuple'&gt;</span>
    <span class="kw">return</span> <span class="fn">sum</span>(args)

<span class="fn">print</span>(<span class="fn">add_all</span>(<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>))         <span class="cm"># 6</span>
<span class="fn">print</span>(<span class="fn">add_all</span>(<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>, <span class="num">4</span>, <span class="num">5</span>))   <span class="cm"># 15</span></pre>

<h3>**kwargs — Multiple key-values</h3>
<pre><span class="kw">def</span> <span class="fn">show_info</span>(**kwargs):
    <span class="fn">print</span>(<span class="fn">type</span>(kwargs))   <span class="cm"># &lt;class 'dict'&gt;</span>
    <span class="kw">for</span> key, value <span class="kw">in</span> kwargs.items():
        <span class="fn">print</span>(key, <span class="str">":"</span>, value)

<span class="fn">show_info</span>(name=<span class="str">"Ali"</span>, age=<span class="num">21</span>, city=<span class="str">"Lahore"</span>)</pre>

<h3>Both together</h3>
<pre><span class="kw">def</span> <span class="fn">order</span>(item, *extras, **details):
    <span class="fn">print</span>(<span class="str">"Item:"</span>, item)
    <span class="fn">print</span>(<span class="str">"Extras:"</span>, extras)
    <span class="fn">print</span>(<span class="str">"Details:"</span>, details)

<span class="fn">order</span>(<span class="str">"Pizza"</span>, <span class="str">"Cheese"</span>, size=<span class="str">"Large"</span>)</pre>

<div class="real-life">
<div class="head">🌍 Real Life Example</div>
<p><strong>Scenario:</strong> Logging function that accepts anything.</p>
<pre style="margin-top:10px;margin-bottom:0;"><span class="kw">def</span> <span class="fn">log</span>(*messages, **info):
    <span class="fn">print</span>(<span class="str">"[LOG]"</span>, <span class="str">" "</span>.join(messages))
    <span class="kw">for</span> k, v <span class="kw">in</span> info.items():
        <span class="fn">print</span>(<span class="str">f"  {k}: {v}"</span>)

<span class="fn">log</span>(<span class="str">"User login"</span>, user=<span class="str">"ali"</span>, ip=<span class="str">"192.168.1.1"</span>)</pre>
</div>

<div class="warn-box">
<div class="head">⚠️ Common Mistake</div>
<p><strong>Confusing <code>*args</code> and <code>**kwargs</code>.</strong> <code>*</code> = values (tuple), <code>**</code> = key-value (dict).</p>
</div>

<div class="pro-tip">
<div class="head">✨ Pro Tip</div>
<p>Name doesn't matter — <code>*nums</code>, <code>**info</code> also work. <code>args</code>/<code>kwargs</code> is just convention.</p>
</div>`
      },
      quiz: [
        { q: { ur: "*args kis kaam aata hai?", en: "What does *args do?" }, options: ["One value", "Multiple values (tuple)", "Only strings", "Stop function"], answer: 1 },
        { q: { ur: "**kwargs kis kaam aata hai?", en: "What does **kwargs do?" }, options: ["Values like args", "Key-value pairs", "Only numbers", "Loop"], answer: 1 },
        { q: { ur: "add_all(1,2,3) — args kya banega?", en: "add_all(1,2,3) — args becomes?" }, options: ["List", "Tuple", "Dict", "Error"], answer: 1 },
        { q: { ur: 'show_info(name="Ali") — kaunsa concept?', en: 'show_info(name="Ali") — which concept?' }, options: ["*args", "**kwargs", "Default", "Return"], answer: 1 },
        { q: { ur: "*args aur **kwargs kab use?", en: "When *args/**kwargs?" }, options: ["Exact args known", "Unknown arg count", "Only loops", "Never"], answer: 1 }
      ]
    },

    /* ═══════════════════════════════════════════════════════
       TOPIC 6: Lambda Functions
       ═══════════════════════════════════════════════════════ */
    {
      id: "lambda",
      title: { ur: "Lambda Functions", en: "Lambda Functions" },
      icon: "⚡",
      code: {
        ur: `# Lambda — chhota one-line function
square = lambda x: x * x
print(square(5))   # 25

add = lambda a, b: a + b
print(add(3, 4))   # 7

# Sorting ke saath
students = [("Ali", 85), ("Sara", 92), ("Ahmed", 78)]
students.sort(key=lambda s: s[1], reverse=True)
print(students)`,
        en: `# Lambda — small one-line function
square = lambda x: x * x
print(square(5))   # 25

add = lambda a, b: a + b
print(add(3, 4))   # 7

# With sorting
students = [("Ali", 85), ("Sara", 92), ("Ahmed", 78)]
students.sort(key=lambda s: s[1], reverse=True)
print(students)`
      },
      learn: {
        ur: `<h2 style="font-size:1.15rem;font-weight:800;margin-bottom:14px;">⚡ Lambda Functions</h2>
<p style="color:var(--text-soft);font-size:.93rem;margin-bottom:14px;">Lambda ek <strong>chhota, one-line function</strong> hota hai — bina <code>def</code> aur naam ke, jaldi kaam ke liye.</p>

<div style="background:var(--code-bg);border:1px solid var(--code-border);border-radius:10px;overflow:hidden;margin-bottom:16px;font-family:var(--mono);font-size:.82rem;">
  <div style="display:grid;grid-template-columns:180px 1fr;padding:9px 14px;background:var(--code-bg-2);color:var(--py-blue-glow);font-weight:700;font-size:.68rem;text-transform:uppercase;">Style · Example</div>
  <div style="display:grid;grid-template-columns:180px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">Normal def</span><span style="color:var(--text-soft);">3 lines</span></div>
  <div style="display:grid;grid-template-columns:180px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">Lambda</span><span style="color:var(--text-soft);">1 line — <code>lambda x: x*x</code></span></div>
</div>

<div style="background:linear-gradient(135deg,rgba(75,139,190,.1),rgba(75,139,190,.03));border:1px solid rgba(75,139,190,.25);border-left:3px solid var(--py-blue);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--text);display:block;margin-bottom:3px;">💡 Kab use karo</strong>
Jab function bohat chhota ho aur baar baar use nahi karna — jaise <code>sort()</code> ke andar custom logic.
</div>

<div style="background:linear-gradient(135deg,rgba(16,185,129,.1),rgba(16,185,129,.02));border:1px solid rgba(16,185,129,.25);border-left:3px solid var(--py-green);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--py-green-glow);display:block;margin-bottom:5px;font-family:var(--mono);font-size:.7rem;text-transform:uppercase;">⚠️ Limitation</strong>
Lambda sirf <strong>ek expression</strong> tak limited — <code>if/else</code> blocks ya loops andar nahi likh sakte.
</div>`,
        en: `<h2 style="font-size:1.15rem;font-weight:800;margin-bottom:14px;">⚡ Lambda Functions</h2>
<p style="color:var(--text-soft);font-size:.93rem;margin-bottom:14px;">A lambda is a <strong>short, one-line function</strong> — no <code>def</code>, no name — for quick tasks.</p>

<div style="background:var(--code-bg);border:1px solid var(--code-border);border-radius:10px;overflow:hidden;margin-bottom:16px;font-family:var(--mono);font-size:.82rem;">
  <div style="display:grid;grid-template-columns:180px 1fr;padding:9px 14px;background:var(--code-bg-2);color:var(--py-blue-glow);font-weight:700;font-size:.68rem;text-transform:uppercase;">Style · Example</div>
  <div style="display:grid;grid-template-columns:180px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">Normal def</span><span style="color:var(--text-soft);">3 lines</span></div>
  <div style="display:grid;grid-template-columns:180px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">Lambda</span><span style="color:var(--text-soft);">1 line — <code>lambda x: x*x</code></span></div>
</div>

<div style="background:linear-gradient(135deg,rgba(75,139,190,.1),rgba(75,139,190,.03));border:1px solid rgba(75,139,190,.25);border-left:3px solid var(--py-blue);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--text);display:block;margin-bottom:3px;">💡 When to use</strong>
When the function is tiny and not reused — like custom logic inside <code>sort()</code>.
</div>

<div style="background:linear-gradient(135deg,rgba(16,185,129,.1),rgba(16,185,129,.02));border:1px solid rgba(16,185,129,.25);border-left:3px solid var(--py-green);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--py-green-glow);display:block;margin-bottom:5px;font-family:var(--mono);font-size:.7rem;text-transform:uppercase;">⚠️ Limitation</strong>
Lambda only allows <strong>one expression</strong> — no <code>if/else</code> blocks or loops inside.
</div>`
      },
      theory: {
        ur: `<h3>Yeh kya hai?</h3>
<p>Lambda ek <strong>anonymous function</strong> hai — jiska koi naam nahi hota. Ek line mein chhota function banane ke liye use hota hai.</p>

<h3>Kaise kaam karta hai?</h3>
<p>Structure: <code>lambda parameters: expression</code>. Yani "lambda" keyword, phir parameters, phir colon, phir expression. Result automatically return hota hai (return likhna nahi parta).</p>

<pre>square = <span class="kw">lambda</span> x: x * x
<span class="cm"># square = function (x) { return x*x }</span>

<span class="fn">print</span>(square(<span class="num">5</span>))   <span class="cm"># 25</span></pre>

<h3>Multiple parameters</h3>
<pre>add = <span class="kw">lambda</span> a, b: a + b
<span class="fn">print</span>(add(<span class="num">3</span>, <span class="num">4</span>))   <span class="cm"># 7</span>

full_name = <span class="kw">lambda</span> first, last: first + <span class="str">" "</span> + last
<span class="fn">print</span>(full_name(<span class="str">"Ali"</span>, <span class="str">"Khan"</span>))   <span class="cm"># Ali Khan</span></pre>

<h3>Real use: sorting</h3>
<pre>students = [
    (<span class="str">"Ali"</span>, <span class="num">85</span>),
    (<span class="str">"Sara"</span>, <span class="num">92</span>),
    (<span class="str">"Ahmed"</span>, <span class="num">78</span>)
]

<span class="cm"># Marks ke hisaab se sort (descending)</span>
students.sort(key=<span class="kw">lambda</span> s: s[<span class="num">1</span>], reverse=<span class="kw">True</span>)
<span class="fn">print</span>(students)

<span class="cm"># Output: [('Sara', 92), ('Ali', 85), ('Ahmed', 78)]</span></pre>

<h3>Lambda with map/filter</h3>
<pre>numbers = [<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>, <span class="num">4</span>, <span class="num">5</span>]

<span class="cm"># Har number ka square</span>
squares = <span class="fn">list</span>(<span class="fn">map</span>(<span class="kw">lambda</span> x: x*x, numbers))
<span class="fn">print</span>(squares)   <span class="cm"># [1, 4, 9, 16, 25]</span>

<span class="cm"># Sirf even numbers</span>
evens = <span class="fn">list</span>(<span class="fn">filter</span>(<span class="kw">lambda</span> x: x % <span class="num">2</span> == <span class="num">0</span>, numbers))
<span class="fn">print</span>(evens)     <span class="cm"># [2, 4]</span></pre>

<h3>Normal def vs Lambda</h3>
<pre><span class="cm"># Normal</span>
<span class="kw">def</span> <span class="fn">square</span>(x):
    <span class="kw">return</span> x * x

<span class="cm"># Lambda — same kaam, 1 line</span>
square = <span class="kw">lambda</span> x: x * x</pre>

<div class="real-life">
<div class="head">🌍 Real Life Example</div>
<p><strong>Scenario:</strong> Products ko price ke hisaab se sort karna.</p>
<pre style="margin-top:10px;margin-bottom:0;">products = [
    {<span class="str">"name"</span>: <span class="str">"Laptop"</span>, <span class="str">"price"</span>: <span class="num">80000</span>},
    {<span class="str">"name"</span>: <span class="str">"Phone"</span>, <span class="str">"price"</span>: <span class="num">30000</span>},
    {<span class="str">"name"</span>: <span class="str">"Tablet"</span>, <span class="str">"price"</span>: <span class="num">50000</span>}
]

sorted_products = <span class="fn">sorted</span>(products, key=<span class="kw">lambda</span> p: p[<span class="str">"price"</span>])
<span class="kw">for</span> p <span class="kw">in</span> sorted_products:
    <span class="fn">print</span>(p[<span class="str">"name"</span>], p[<span class="str">"price"</span>])</pre>
</div>

<div class="warn-box">
<div class="head">⚠️ Common Mistake</div>
<p><strong>Lambda mein multiple lines.</strong> Nahi ho sakta — sirf ek expression. Complicated logic ke liye normal <code>def</code> use karo.</p>
</div>

<div class="pro-tip">
<div class="head">✨ Pro Tip</div>
<p>Lambda ko <strong>naam na do</strong> — seedha use karo: <code>sorted(data, key=lambda x: x[0])</code>. Agar naam dena hai to normal function behtar hai.</p>
</div>`,
        en: `<h3>What is it?</h3>
<p>Lambda is an <strong>anonymous function</strong> — no name. Used for tiny one-line functions.</p>

<h3>How does it work?</h3>
<p>Structure: <code>lambda parameters: expression</code>. Result automatically returned.</p>

<pre>square = <span class="kw">lambda</span> x: x * x
<span class="fn">print</span>(square(<span class="num">5</span>))   <span class="cm"># 25</span></pre>

<h3>Multiple parameters</h3>
<pre>add = <span class="kw">lambda</span> a, b: a + b
<span class="fn">print</span>(add(<span class="num">3</span>, <span class="num">4</span>))   <span class="cm"># 7</span>

full_name = <span class="kw">lambda</span> first, last: first + <span class="str">" "</span> + last
<span class="fn">print</span>(full_name(<span class="str">"Ali"</span>, <span class="str">"Khan"</span>))   <span class="cm"># Ali Khan</span></pre>

<h3>Real use: sorting</h3>
<pre>students = [
    (<span class="str">"Ali"</span>, <span class="num">85</span>),
    (<span class="str">"Sara"</span>, <span class="num">92</span>),
    (<span class="str">"Ahmed"</span>, <span class="num">78</span>)
]

students.sort(key=<span class="kw">lambda</span> s: s[<span class="num">1</span>], reverse=<span class="kw">True</span>)
<span class="fn">print</span>(students)
<span class="cm"># [('Sara', 92), ('Ali', 85), ('Ahmed', 78)]</span></pre>

<h3>Lambda with map/filter</h3>
<pre>numbers = [<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>, <span class="num">4</span>, <span class="num">5</span>]

squares = <span class="fn">list</span>(<span class="fn">map</span>(<span class="kw">lambda</span> x: x*x, numbers))
<span class="fn">print</span>(squares)   <span class="cm"># [1, 4, 9, 16, 25]</span>

evens = <span class="fn">list</span>(<span class="fn">filter</span>(<span class="kw">lambda</span> x: x % <span class="num">2</span> == <span class="num">0</span>, numbers))
<span class="fn">print</span>(evens)     <span class="cm"># [2, 4]</span></pre>

<div class="real-life">
<div class="head">🌍 Real Life Example</div>
<p><strong>Scenario:</strong> Sort products by price.</p>
<pre style="margin-top:10px;margin-bottom:0;">products = [
    {<span class="str">"name"</span>: <span class="str">"Laptop"</span>, <span class="str">"price"</span>: <span class="num">80000</span>},
    {<span class="str">"name"</span>: <span class="str">"Phone"</span>, <span class="str">"price"</span>: <span class="num">30000</span>},
    {<span class="str">"name"</span>: <span class="str">"Tablet"</span>, <span class="str">"price"</span>: <span class="num">50000</span>}
]

sorted_products = <span class="fn">sorted</span>(products, key=<span class="kw">lambda</span> p: p[<span class="str">"price"</span>])
<span class="kw">for</span> p <span class="kw">in</span> sorted_products:
    <span class="fn">print</span>(p[<span class="str">"name"</span>], p[<span class="str">"price"</span>])</pre>
</div>

<div class="warn-box">
<div class="head">⚠️ Common Mistake</div>
<p><strong>Multiple lines in lambda.</strong> Not allowed — only one expression. Use <code>def</code> for complex logic.</p>
</div>

<div class="pro-tip">
<div class="head">✨ Pro Tip</div>
<p>Don't name lambdas — use inline: <code>sorted(data, key=lambda x: x[0])</code>. If naming, use def.</p>
</div>`
      },
      quiz: [
        { q: { ur: "Lambda function kaisa hota hai?", en: "Lambda function is?" }, options: ["Big complex", "Small one-line", "Only loops", "Only classes"], answer: 1 },
        { q: { ur: "square = lambda x: x*x — square(5)?", en: "square = lambda x: x*x — square(5)?" }, options: ["5", "25", "10", "Error"], answer: 1 },
        { q: { ur: "Lambda banane ka keyword?", en: "Keyword to create lambda?" }, options: ["def", "function", "lambda", "func"], answer: 2 },
        { q: { ur: "Lambda mein kitni expressions?", en: "Lambda allows how many expressions?" }, options: ["Any", "Only one", "Two", "Zero (none)"], answer: 1 },
        { q: { ur: "Lambda kab use karo?", en: "When to use lambda?" }, options: ["Big complex functions", "Small one-time use", "Never", "Only classes"], answer: 1 }
      ]
    },

    /* ═══════════════════════════════════════════════════════
       TOPIC 7: Scope (Local vs Global)
       ═══════════════════════════════════════════════════════ */
    {
      id: "scope",
      title: { ur: "Scope (Local vs Global)", en: "Scope (Local vs Global)" },
      icon: "🌐",
      code: {
        ur: `# Global variable
x = 10

def show():
    y = 5   # local
    print(x)   # global access kar sakte
    print(y)

show()
print(x)     # kaam karega
# print(y)   # ERROR — y sirf function ke andar hai`,
        en: `# Global variable
x = 10

def show():
    y = 5   # local
    print(x)   # can access global
    print(y)

show()
print(x)     # works
# print(y)   # ERROR — y only inside function`
      },
      learn: {
        ur: `<h2 style="font-size:1.15rem;font-weight:800;margin-bottom:14px;">🌐 Scope (Local vs Global)</h2>
<p style="color:var(--text-soft);font-size:.93rem;margin-bottom:14px;">Scope decide karta hai ke ek variable <strong>kahan use ho sakta hai</strong> — function ke andar ya poore program mein.</p>

<div style="background:var(--code-bg);border:1px solid var(--code-border);border-radius:10px;overflow:hidden;margin-bottom:16px;font-family:var(--mono);font-size:.82rem;">
  <div style="display:grid;grid-template-columns:120px 1fr;padding:9px 14px;background:var(--code-bg-2);color:var(--py-blue-glow);font-weight:700;font-size:.68rem;text-transform:uppercase;">Type · Kahan</div>
  <div style="display:grid;grid-template-columns:120px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">Global</span><span style="color:var(--text-soft);">Poora program</span></div>
  <div style="display:grid;grid-template-columns:120px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">Local</span><span style="color:var(--text-soft);">Sirf function ke andar</span></div>
</div>

<div style="background:linear-gradient(135deg,rgba(16,185,129,.1),rgba(16,185,129,.02));border:1px solid rgba(16,185,129,.25);border-left:3px solid var(--py-green);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--py-green-glow);display:block;margin-bottom:5px;font-family:var(--mono);font-size:.7rem;text-transform:uppercase;">⚠️ Common Mistake</strong>
Function ke andar ki local variable ko bahar use karne ki koshish — <code>NameError</code> aayega.
</div>`,
        en: `<h2 style="font-size:1.15rem;font-weight:800;margin-bottom:14px;">🌐 Scope (Local vs Global)</h2>
<p style="color:var(--text-soft);font-size:.93rem;margin-bottom:14px;">Scope decides <strong>where a variable can be used</strong> — inside a function or across the program.</p>

<div style="background:var(--code-bg);border:1px solid var(--code-border);border-radius:10px;overflow:hidden;margin-bottom:16px;font-family:var(--mono);font-size:.82rem;">
  <div style="display:grid;grid-template-columns:120px 1fr;padding:9px 14px;background:var(--code-bg-2);color:var(--py-blue-glow);font-weight:700;font-size:.68rem;text-transform:uppercase;">Type · Where</div>
  <div style="display:grid;grid-template-columns:120px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">Global</span><span style="color:var(--text-soft);">Whole program</span></div>
  <div style="display:grid;grid-template-columns:120px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">Local</span><span style="color:var(--text-soft);">Only inside function</span></div>
</div>

<div style="background:linear-gradient(135deg,rgba(16,185,129,.1),rgba(16,185,129,.02));border:1px solid rgba(16,185,129,.25);border-left:3px solid var(--py-green);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--py-green-glow);display:block;margin-bottom:5px;font-family:var(--mono);font-size:.7rem;text-transform:uppercase;">⚠️ Common Mistake</strong>
Accessing a local variable outside → <code>NameError</code>.
</div>`
      },
      theory: {
        ur: `<h3>Yeh kya hai?</h3>
<p>Scope ek <strong>area</strong> hai jahan variable accessible hota hai. Do main types:
<br>• <strong>Global</strong> — poore program mein accessible
<br>• <strong>Local</strong> — sirf function ke andar</p>

<h3>Kaise kaam karta hai?</h3>
<p>Jab function chalta hai, Python ek <strong>naya scope</strong> banata hai. Function ke andar jo variables banti hain woh <strong>local</strong> hoti hain — function khatam hote hi gayab ho jati hain.</p>

<h3>Global variable</h3>
<pre>x = <span class="num">10</span>   <span class="cm"># global — poore program mein</span>

<span class="kw">def</span> <span class="fn">show</span>():
    <span class="fn">print</span>(x)   <span class="cm"># global access</span>

<span class="fn">show</span>()
<span class="fn">print</span>(x)   <span class="cm"># 10</span></pre>

<h3>Local variable</h3>
<pre><span class="kw">def</span> <span class="fn">show</span>():
    y = <span class="num">5</span>   <span class="cm"># local — sirf yahan</span>
    <span class="fn">print</span>(y)

<span class="fn">show</span>()
<span class="cm"># print(y)   # ❌ NameError</span></pre>

<h3>global keyword</h3>
<pre>count = <span class="num">0</span>

<span class="kw">def</span> <span class="fn">increment</span>():
    <span class="kw">global</span> count   <span class="cm"># global declare karo</span>
    count += <span class="num">1</span>

<span class="fn">increment</span>()
<span class="fn">increment</span>()
<span class="fn">print</span>(count)   <span class="cm"># 2</span></pre>

<div class="real-life">
<div class="head">🌍 Real Life Example</div>
<p><strong>Scenario:</strong> Game ka score track karna — global variable.</p>
<pre style="margin-top:10px;margin-bottom:0;">score = <span class="num">0</span>

<span class="kw">def</span> <span class="fn">add_points</span>(points):
    <span class="kw">global</span> score
    score += points

<span class="fn">add_points</span>(<span class="num">10</span>)
<span class="fn">add_points</span>(<span class="num">25</span>)
<span class="fn">print</span>(<span class="str">"Total:"</span>, score)   <span class="cm"># 35</span></pre>
</div>

<div class="warn-box">
<div class="head">⚠️ Common Mistakes</div>
<ul>
<li>Local variable bahar access karna — <code>NameError</code></li>
<li>Global variable modify karna bina <code>global</code> keyword ke</li>
<li>Global variables bohat zyada use karna — code messy ho jata hai</li>
</ul>
</div>

<div class="pro-tip">
<div class="head">✨ Pro Tip</div>
<p>Global variables kam use karo. <strong>Pass karo arguments ke through</strong> aur <strong>return karo</strong> result. Yeh cleaner hai.</p>
</div>`,
        en: `<h3>What is it?</h3>
<p>Scope is the <strong>area</strong> where a variable is accessible. Two types:
<br>• <strong>Global</strong> — accessible everywhere
<br>• <strong>Local</strong> — only inside function</p>

<h3>How does it work?</h3>
<p>When a function runs, Python creates a <strong>new scope</strong>. Variables inside are <strong>local</strong> — they vanish when function ends.</p>

<h3>Global variable</h3>
<pre>x = <span class="num">10</span>

<span class="kw">def</span> <span class="fn">show</span>():
    <span class="fn">print</span>(x)

<span class="fn">show</span>()
<span class="fn">print</span>(x)   <span class="cm"># 10</span></pre>

<h3>Local variable</h3>
<pre><span class="kw">def</span> <span class="fn">show</span>():
    y = <span class="num">5</span>
    <span class="fn">print</span>(y)

<span class="fn">show</span>()
<span class="cm"># print(y)   # ❌ NameError</span></pre>

<h3>global keyword</h3>
<pre>count = <span class="num">0</span>

<span class="kw">def</span> <span class="fn">increment</span>():
    <span class="kw">global</span> count
    count += <span class="num">1</span>

<span class="fn">increment</span>()
<span class="fn">print</span>(count)   <span class="cm"># 1</span></pre>

<div class="real-life">
<div class="head">🌍 Real Life Example</div>
<p><strong>Scenario:</strong> Game score tracking.</p>
<pre style="margin-top:10px;margin-bottom:0;">score = <span class="num">0</span>

<span class="kw">def</span> <span class="fn">add_points</span>(points):
    <span class="kw">global</span> score
    score += points

<span class="fn">add_points</span>(<span class="num">10</span>)
<span class="fn">print</span>(<span class="str">"Total:"</span>, score)   <span class="cm"># 10</span></pre>
</div>

<div class="warn-box">
<div class="head">⚠️ Common Mistakes</div>
<ul>
<li>Accessing local variable outside → <code>NameError</code></li>
<li>Modifying global without <code>global</code> keyword</li>
<li>Overusing globals — code gets messy</li>
</ul>
</div>

<div class="pro-tip">
<div class="head">✨ Pro Tip</div>
<p>Use globals sparingly. <strong>Pass as arguments</strong> and <strong>return</strong> results. Cleaner.</p>
</div>`
      },
      quiz: [
        { q: { ur: "Global variable kahan accessible?", en: "Global variable accessible?" }, options: ["Only one function", "Whole program", "Nowhere", "Only loops"], answer: 1 },
        { q: { ur: "Local variable kahan accessible?", en: "Local variable accessible?" }, options: ["Whole program", "Only inside function", "All functions", "Nowhere"], answer: 1 },
        { q: { ur: "Local variable bahar use karne se?", en: "Accessing local outside?" }, options: ["Works", "NameError", "Returns 0", "Returns None"], answer: 1 },
        { q: { ur: "x = 10 (bahar) — kaisa variable?", en: "x = 10 (outside) — which type?" }, options: ["Local", "Global", "Temporary", "Private"], answer: 1 },
        { q: { ur: "Global variable function ke andar use kar sakte?", en: "Can use global inside function?" }, options: ["Yes (read)", "Never", "Only if empty", "Only loops"], answer: 0 }
      ]
    }

  ]
};