// data/module-9.js
// Module 9: Modules & Libraries — 4 topics

window.MODULES = window.MODULES || {};

window.MODULES["module-9"] = {
  id: "module-9",
  number: 9,
  slug: "modules-libraries",
  title: { ur: "Modules & Libraries", en: "Modules & Libraries" },
  description: {
    ur: "Importing, built-in modules, apne modules, pip",
    en: "Importing, built-in modules, custom modules, pip"
  },
  duration: "12 minutes",
  level: "Intermediate",
  locked: true,

  topics: [

    /* ═══════════════════════════════════════════════════════
       TOPIC 1: Importing Modules
       ═══════════════════════════════════════════════════════ */
    {
      id: "importing",
      title: { ur: "Importing Modules", en: "Importing Modules" },
      icon: "📦",
      code: {
        ur: `# Poora module import
import math
print(math.sqrt(16))    # 4.0

# Specific cheez import
from math import sqrt, pi
print(sqrt(25))         # 5.0
print(pi)               # 3.14159...

# Alias ke saath
import math as m
print(m.floor(3.7))     # 3

# Sab kuch import (avoid karo)
from math import *
print(ceil(4.2))        # 5`,
        en: `# Import whole module
import math
print(math.sqrt(16))    # 4.0

# Import specific items
from math import sqrt, pi
print(sqrt(25))         # 5.0
print(pi)               # 3.14159...

# With alias
import math as m
print(m.floor(3.7))     # 3

# Import everything (avoid)
from math import *
print(ceil(4.2))        # 5`
      },
      learn: {
        ur: `<h2 style="font-size:1.15rem;font-weight:800;margin-bottom:14px;">📦 Importing Modules</h2>
<p style="color:var(--text-soft);font-size:.93rem;margin-bottom:14px;">Module ek <strong>ready-made code ki file</strong> hai. <code>import</code> se usay apne program mein use karte hain — dobara likhne ki zaroorat nahi.</p>

<div style="background:var(--code-bg);border:1px solid var(--code-border);border-radius:10px;overflow:hidden;margin-bottom:16px;font-family:var(--mono);font-size:.82rem;">
  <div style="display:grid;grid-template-columns:200px 1fr;padding:9px 14px;background:var(--code-bg-2);color:var(--py-blue-glow);font-weight:700;font-size:.68rem;text-transform:uppercase;">Tareeqa · Istemaal</div>
  <div style="display:grid;grid-template-columns:200px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">import math</span><span style="color:var(--text-soft);">math.sqrt() — poora naam</span></div>
  <div style="display:grid;grid-template-columns:200px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">from math import sqrt</span><span style="color:var(--text-soft);">sqrt() — seedha</span></div>
  <div style="display:grid;grid-template-columns:200px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">import math as m</span><span style="color:var(--text-soft);">m.sqrt() — chhota naam</span></div>
</div>

<div style="background:linear-gradient(135deg,rgba(75,139,190,.1),rgba(75,139,190,.03));border:1px solid rgba(75,139,190,.25);border-left:3px solid var(--py-blue);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--text);display:block;margin-bottom:3px;">💡 Kyun</strong>
Code reuse — koi aur pehle se likh chuka hai, tum sirf use karo.
</div>

<div style="background:linear-gradient(135deg,rgba(16,185,129,.1),rgba(16,185,129,.02));border:1px solid rgba(16,185,129,.25);border-left:3px solid var(--py-green);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--py-green-glow);display:block;margin-bottom:5px;font-family:var(--mono);font-size:.7rem;text-transform:uppercase;">⚠️ Common Mistake</strong>
<code>from math import *</code> use karna — naam clash ho sakte hain. Specific import behtar.
</div>`,
        en: `<h2 style="font-size:1.15rem;font-weight:800;margin-bottom:14px;">📦 Importing Modules</h2>
<p style="color:var(--text-soft);font-size:.93rem;margin-bottom:14px;">A module is a <strong>file of ready-made code</strong>. Use <code>import</code> to bring it into your program — no need to rewrite.</p>

<div style="background:var(--code-bg);border:1px solid var(--code-border);border-radius:10px;overflow:hidden;margin-bottom:16px;font-family:var(--mono);font-size:.82rem;">
  <div style="display:grid;grid-template-columns:200px 1fr;padding:9px 14px;background:var(--code-bg-2);color:var(--py-blue-glow);font-weight:700;font-size:.68rem;text-transform:uppercase;">Way · Usage</div>
  <div style="display:grid;grid-template-columns:200px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">import math</span><span style="color:var(--text-soft);">math.sqrt() — full name</span></div>
  <div style="display:grid;grid-template-columns:200px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">from math import sqrt</span><span style="color:var(--text-soft);">sqrt() — direct</span></div>
  <div style="display:grid;grid-template-columns:200px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">import math as m</span><span style="color:var(--text-soft);">m.sqrt() — short name</span></div>
</div>

<div style="background:linear-gradient(135deg,rgba(75,139,190,.1),rgba(75,139,190,.03));border:1px solid rgba(75,139,190,.25);border-left:3px solid var(--py-blue);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--text);display:block;margin-bottom:3px;">💡 Why</strong>
Code reuse — someone already wrote it, just use it.
</div>

<div style="background:linear-gradient(135deg,rgba(16,185,129,.1),rgba(16,185,129,.02));border:1px solid rgba(16,185,129,.25);border-left:3px solid var(--py-green);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--py-green-glow);display:block;margin-bottom:5px;font-family:var(--mono);font-size:.7rem;text-transform:uppercase;">⚠️ Common Mistake</strong>
Using <code>from math import *</code> — name clashes possible. Prefer specific.
</div>`
      },
      theory: {
        ur: `<h3>Yeh kya hai?</h3>
<p>Module ek <code>.py</code> file hai jismein functions, classes, variables hote hain. <code>import</code> se tum doosri file ka code apne program mein le aate ho.</p>

<h3>Kaise kaam karta hai?</h3>
<div class="steps">
<ol>
<li><strong>Step 1:</strong> <code>import module_name</code> likho</li>
<li><strong>Step 2:</strong> Python module file dhundta hai</li>
<li><strong>Step 3:</strong> Module ka code chalta hai (ek dafa)</li>
<li><strong>Step 4:</strong> <code>module.function()</code> se use karo</li>
</ol>
</div>

<h3>4 tareeqe import ke</h3>
<pre><span class="cm"># 1. Poora module</span>
<span class="kw">import</span> math
<span class="fn">print</span>(math.sqrt(<span class="num">16</span>))     <span class="cm"># 4.0</span>

<span class="cm"># 2. Specific items</span>
<span class="kw">from</span> math <span class="kw">import</span> sqrt, pi
<span class="fn">print</span>(sqrt(<span class="num">25</span>))          <span class="cm"># 5.0</span>

<span class="cm"># 3. Alias ke saath</span>
<span class="kw">import</span> math <span class="kw">as</span> m
<span class="fn">print</span>(m.floor(<span class="num">3.7</span>))      <span class="cm"># 3</span>

<span class="cm"># 4. Sab kuch (avoid)</span>
<span class="kw">from</span> math <span class="kw">import</span> *
<span class="fn">print</span>(ceil(<span class="num">4.2</span>))         <span class="cm"># 5</span></pre>

<h3>Kaunsa kab use karo</h3>
<table class="theory-table">
<div class="row head"><div>Tareeqa</div><div>Kab</div></div>
<div class="row"><div class="label">import math</div><div class="value">Default — clear, safe</div></div>
<div class="row"><div class="label">from math import sqrt</div><div class="value">Sirf 1-2 cheezein chahiye</div></div>
<div class="row"><div class="label">import numpy as np</div><div class="value">Lamba naam — common</div></div>
<div class="row"><div class="label">from math import *</div><div class="value">Avoid — naam clash</div></div>
</table>

<h3>Common built-in modules</h3>
<pre><span class="kw">import</span> math      <span class="cm"># sqrt, pi, floor</span>
<span class="kw">import</span> random    <span class="cm"># randint, choice, shuffle</span>
<span class="kw">import</span> datetime  <span class="cm"># date, time, timedelta</span>
<span class="kw">import</span> os        <span class="cm"># file paths, folders</span>
<span class="kw">import</span> json      <span class="cm"># JSON read/write</span>
<span class="kw">import</span> csv       <span class="cm"># CSV read/write</span></pre>

<div class="real-life">
<div class="head">🌍 Real Life Example</div>
<p><strong>Scenario:</strong> Random password generator.</p>
<pre style="margin-top:10px;margin-bottom:0;"><span class="kw">import</span> random
<span class="kw">import</span> string

<span class="kw">def</span> <span class="fn">gen_password</span>(length=<span class="num">12</span>):
    chars = string.ascii_letters + string.digits
    <span class="kw">return</span> <span class="str">""</span>.join(random.choice(chars) <span class="kw">for</span> _ <span class="kw">in</span> <span class="fn">range</span>(length))

<span class="fn">print</span>(<span class="fn">gen_password</span>())</pre>
</div>

<div class="warn-box">
<div class="head">⚠️ Common Mistakes</div>
<ul>
<li><code>import *</code> — kaunsi cheez kahan se aayi pata nahi</li>
<li>Module ka naam file ke naam se match na kare</li>
<li><code>math.py</code> apni file bana lena — Python ka math module shadow ho jata</li>
</ul>
</div>

<div class="pro-tip">
<div class="head">✨ Pro Tip</div>
<p>Common aliases yaad rakho: <code>import numpy as np</code>, <code>import pandas as pd</code>, <code>import matplotlib.pyplot as plt</code>. Industry standard.</p>
</div>`,
        en: `<h3>What is it?</h3>
<p>A module is a <code>.py</code> file with functions, classes, variables. <code>import</code> brings another file's code into yours.</p>

<h3>How does it work?</h3>
<div class="steps">
<ol>
<li><strong>Step 1:</strong> Write <code>import module_name</code></li>
<li><strong>Step 2:</strong> Python finds the file</li>
<li><strong>Step 3:</strong> Module code runs (once)</li>
<li><strong>Step 4:</strong> Use via <code>module.function()</code></li>
</ol>
</div>

<h3>4 import styles</h3>
<pre><span class="kw">import</span> math
<span class="fn">print</span>(math.sqrt(<span class="num">16</span>))     <span class="cm"># 4.0</span>

<span class="kw">from</span> math <span class="kw">import</span> sqrt
<span class="fn">print</span>(sqrt(<span class="num">25</span>))          <span class="cm"># 5.0</span>

<span class="kw">import</span> math <span class="kw">as</span> m
<span class="fn">print</span>(m.floor(<span class="num">3.7</span>))      <span class="cm"># 3</span>

<span class="kw">from</span> math <span class="kw">import</span> *        <span class="cm"># avoid</span></pre>

<h3>Common built-in modules</h3>
<pre><span class="kw">import</span> math      <span class="cm"># sqrt, pi, floor</span>
<span class="kw">import</span> random    <span class="cm"># randint, choice</span>
<span class="kw">import</span> datetime  <span class="cm"># date, time</span>
<span class="kw">import</span> os        <span class="cm"># paths, folders</span>
<span class="kw">import</span> json      <span class="cm"># JSON</span></pre>

<div class="real-life">
<div class="head">🌍 Real Life Example</div>
<pre style="margin-top:10px;margin-bottom:0;"><span class="kw">import</span> random
<span class="kw">import</span> string

<span class="kw">def</span> <span class="fn">gen_password</span>(length=<span class="num">12</span>):
    chars = string.ascii_letters + string.digits
    <span class="kw">return</span> <span class="str">""</span>.join(random.choice(chars) <span class="kw">for</span> _ <span class="kw">in</span> <span class="fn">range</span>(length))</pre>
</div>

<div class="warn-box">
<div class="head">⚠️ Common Mistakes</div>
<ul>
<li><code>import *</code> — unclear origins</li>
<li>Module name ≠ file name</li>
<li>Naming your file <code>math.py</code> — shadows builtin</li>
</ul>
</div>

<div class="pro-tip">
<div class="head">✨ Pro Tip</div>
<p>Remember aliases: <code>np</code>, <code>pd</code>, <code>plt</code>. Industry standard.</p>
</div>`
      },
      quiz: [
        { q: { ur: "Specific item import kaise?", en: "Import specific item?" }, options: ["import math.sqrt", "from math import sqrt", "import sqrt from math", "math.import sqrt"], answer: 1 },
        { q: { ur: "Alias ke liye keyword?", en: "Keyword for alias?" }, options: ["as", "alias", "name", "with"], answer: 0 },
        { q: { ur: "import * kyun avoid?", en: "Why avoid import *?" }, options: ["Slow", "Naam clash", "Error", "Deprecated"], answer: 1 },
        { q: { ur: "math.sqrt(16) ka result?", en: "math.sqrt(16) result?" }, options: ["4", "4.0", "8", "2"], answer: 1 },
        { q: { ur: "Import kitni dafa chalta?", en: "Import runs how many times?" }, options: ["Har call pe", "Ek dafa", "Kabhi nahi", "2 dafa"], answer: 1 }
      ]
    },

    /* ═══════════════════════════════════════════════════════
       TOPIC 2: Built-in Modules (math, random, datetime)
       ═══════════════════════════════════════════════════════ */
    {
      id: "builtin-modules",
      title: { ur: "Built-in Modules", en: "Built-in Modules" },
      icon: "🧰",
      code: {
        ur: `# math — mathematical functions
import math
print(math.sqrt(16))      # 4.0
print(math.pi)            # 3.14159...
print(math.floor(3.7))    # 3
print(math.ceil(3.2))     # 4

# random — random numbers
import random
print(random.randint(1, 10))       # 1-10
print(random.choice(["a","b","c"])) # koi ek
random.shuffle([1,2,3])            # shuffle

# datetime — date/time
import datetime
now = datetime.datetime.now()
print(now.year, now.month, now.day)`,
        en: `# math — mathematical functions
import math
print(math.sqrt(16))      # 4.0
print(math.pi)            # 3.14159...
print(math.floor(3.7))    # 3
print(math.ceil(3.2))     # 4

# random — random numbers
import random
print(random.randint(1, 10))       # 1-10
print(random.choice(["a","b","c"])) # one of them
random.shuffle([1,2,3])            # shuffle

# datetime — date/time
import datetime
now = datetime.datetime.now()
print(now.year, now.month, now.day)`
      },
      learn: {
        ur: `<h2 style="font-size:1.15rem;font-weight:800;margin-bottom:14px;">🧰 Built-in Modules</h2>
<p style="color:var(--text-soft);font-size:.93rem;margin-bottom:14px;">Python ke saath <strong>bohat se modules</strong> aate hain — koi install nahi karna padta. Yeh sabse zyada use hone wale hain.</p>

<div style="background:var(--code-bg);border:1px solid var(--code-border);border-radius:10px;overflow:hidden;margin-bottom:16px;font-family:var(--mono);font-size:.82rem;">
  <div style="display:grid;grid-template-columns:140px 1fr;padding:9px 14px;background:var(--code-bg-2);color:var(--py-blue-glow);font-weight:700;font-size:.68rem;text-transform:uppercase;">Module · Kaam</div>
  <div style="display:grid;grid-template-columns:140px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">math</span><span style="color:var(--text-soft);">sqrt, pi, floor, ceil, sin, cos</span></div>
  <div style="display:grid;grid-template-columns:140px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">random</span><span style="color:var(--text-soft);">randint, choice, shuffle, sample</span></div>
  <div style="display:grid;grid-template-columns:140px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">datetime</span><span style="color:var(--text-soft);">date, time, now, timedelta</span></div>
  <div style="display:grid;grid-template-columns:140px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">os</span><span style="color:var(--text-soft);">path, listdir, mkdir, getcwd</span></div>
  <div style="display:grid;grid-template-columns:140px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">sys</span><span style="color:var(--text-soft);">argv, exit, version</span></div>
</div>

<div style="background:linear-gradient(135deg,rgba(75,139,190,.1),rgba(75,139,190,.03));border:1px solid rgba(75,139,190,.25);border-left:3px solid var(--py-blue);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--text);display:block;margin-bottom:3px;">💡 Fayda</strong>
Built-in modules C mein likhe hote hain — <strong>tez aur reliable</strong>.
</div>

<div style="background:linear-gradient(135deg,rgba(16,185,129,.1),rgba(16,185,129,.02));border:1px solid rgba(16,185,129,.25);border-left:3px solid var(--py-green);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--py-green-glow);display:block;margin-bottom:5px;font-family:var(--mono);font-size:.7rem;text-transform:uppercase;">⚠️ Common Mistake</strong>
<code>math</code> module kaam nahi karta complex numbers pe — <code>cmath</code> use karo.
</div>`,
        en: `<h2 style="font-size:1.15rem;font-weight:800;margin-bottom:14px;">🧰 Built-in Modules</h2>
<p style="color:var(--text-soft);font-size:.93rem;margin-bottom:14px;">Python ships with <strong>many modules</strong> — no install needed. Here are the most used.</p>

<div style="background:var(--code-bg);border:1px solid var(--code-border);border-radius:10px;overflow:hidden;margin-bottom:16px;font-family:var(--mono);font-size:.82rem;">
  <div style="display:grid;grid-template-columns:140px 1fr;padding:9px 14px;background:var(--code-bg-2);color:var(--py-blue-glow);font-weight:700;font-size:.68rem;text-transform:uppercase;">Module · Does</div>
  <div style="display:grid;grid-template-columns:140px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">math</span><span style="color:var(--text-soft);">sqrt, pi, floor, ceil, sin</span></div>
  <div style="display:grid;grid-template-columns:140px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">random</span><span style="color:var(--text-soft);">randint, choice, shuffle</span></div>
  <div style="display:grid;grid-template-columns:140px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">datetime</span><span style="color:var(--text-soft);">date, time, now</span></div>
  <div style="display:grid;grid-template-columns:140px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">os</span><span style="color:var(--text-soft);">path, listdir, mkdir</span></div>
</div>

<div style="background:linear-gradient(135deg,rgba(75,139,190,.1),rgba(75,139,190,.03));border:1px solid rgba(75,139,190,.25);border-left:3px solid var(--py-blue);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--text);display:block;margin-bottom:3px;">💡 Benefit</strong>
Built-in modules are written in C — <strong>fast and reliable</strong>.
</div>

<div style="background:linear-gradient(135deg,rgba(16,185,129,.1),rgba(16,185,129,.02));border:1px solid rgba(16,185,129,.25);border-left:3px solid var(--py-green);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--py-green-glow);display:block;margin-bottom:5px;font-family:var(--mono);font-size:.7rem;text-transform:uppercase;">⚠️ Common Mistake</strong>
<code>math</code> fails on complex numbers — use <code>cmath</code>.
</div>`
      },
      theory: {
        ur: `<h3>Yeh kya hai?</h3>
<p>Python ke saath <strong>200+ built-in modules</strong> aate hain. Install nahi karna padta — sirf <code>import</code> karo.</p>

<h3>math module</h3>
<pre><span class="kw">import</span> math

math.sqrt(<span class="num">16</span>)        <span class="cm"># 4.0</span>
math.pi               <span class="cm"># 3.14159...</span>
math.floor(<span class="num">3.7</span>)       <span class="cm"># 3</span>
math.ceil(<span class="num">3.2</span>)        <span class="cm"># 4</span>
math.pow(<span class="num">2</span>, <span class="num">3</span>)        <span class="cm"># 8.0</span>
math.factorial(<span class="num">5</span>)    <span class="cm"># 120</span>
math.sin(<span class="num">0</span>)           <span class="cm"># 0.0</span></pre>

<h3>random module</h3>
<pre><span class="kw">import</span> random

random.randint(<span class="num">1</span>, <span class="num">10</span>)          <span class="cm"># 1-10</span>
random.random()                <span class="cm"># 0.0 to 1.0</span>
random.choice([<span class="str">"a"</span>, <span class="str">"b"</span>, <span class="str">"c"</span>])  <span class="cm"># koi ek</span>
random.choices([<span class="num">1</span>,<span class="num">2</span>,<span class="num">3</span>], k=<span class="num">2</span>)   <span class="cm"># 2 items with replacement</span>
random.sample([<span class="num">1</span>,<span class="num">2</span>,<span class="num">3</span>,<span class="num">4</span>], k=<span class="num">2</span>)  <span class="cm"># 2 unique</span>

nums = [<span class="num">1</span>,<span class="num">2</span>,<span class="num">3</span>,<span class="num">4</span>,<span class="num">5</span>]
random.shuffle(nums)           <span class="cm"># in-place shuffle</span></pre>

<h3>datetime module</h3>
<pre><span class="kw">import</span> datetime

now = datetime.datetime.now()
<span class="fn">print</span>(now)                <span class="cm"># 2024-01-15 14:30:45.123456</span>
<span class="fn">print</span>(now.year)           <span class="cm"># 2024</span>
<span class="fn">print</span>(now.strftime(<span class="str">"%d-%m-%Y"</span>))   <span class="cm"># 15-01-2024</span>

<span class="cm"># Specific date</span>
d = datetime.date(<span class="num">2024</span>, <span class="num">1</span>, <span class="num">15</span>)

<span class="cm"># Difference</span>
delta = datetime.timedelta(days=<span class="num">7</span>)
<span class="fn">print</span>(d + delta)          <span class="cm"># 2024-01-22</span></pre>

<h3>os module</h3>
<pre><span class="kw">import</span> os

os.getcwd()                          <span class="cm"># current dir</span>
os.listdir(<span class="str">"."</span>)                    <span class="cm"># files list</span>
os.path.exists(<span class="str">"data.txt"</span>)          <span class="cm"># True/False</span>
os.path.join(<span class="str">"folder"</span>, <span class="str">"file.txt"</span>)  <span class="cm"># folder/file.txt</span>
os.mkdir(<span class="str">"new_folder"</span>)            <span class="cm"># create dir</span></pre>

<h3>sys module</h3>
<pre><span class="kw">import</span> sys

<span class="fn">print</span>(sys.version)     <span class="cm"># Python version</span>
<span class="fn">print</span>(sys.argv)        <span class="cm"># command line args</span>
sys.exit(<span class="num">0</span>)           <span class="cm"># exit program</span></pre>

<div class="real-life">
<div class="head">🌍 Real Life Example</div>
<p><strong>Scenario:</strong> Age calculator.</p>
<pre style="margin-top:10px;margin-bottom:0;"><span class="kw">import</span> datetime

<span class="kw">def</span> <span class="fn">age</span>(birth_year):
    <span class="kw">return</span> datetime.datetime.now().year - birth_year

<span class="fn">print</span>(<span class="str">f"Tumhari age: {age(2000)}"</span>)</pre>
</div>

<div class="warn-box">
<div class="head">⚠️ Common Mistakes</div>
<ul>
<li><code>math.sqrt(-1)</code> — ValueError (cmath chahiye)</li>
<li><code>random.randint(1, 10)</code> vs <code>random.randrange(1, 10)</code> — randint inclusive hai</li>
<li><code>datetime.datetime.now()</code> — <code>datetime.now()</code> nahi</li>
</ul>
</div>

<div class="pro-tip">
<div class="head">✨ Pro Tip</div>
<p><code>random.seed(42)</code> lagao — har baar same random numbers milenge. Testing ke liye useful.</p>
</div>`,
        en: `<h3>What is it?</h3>
<p>Python ships with <strong>200+ built-in modules</strong>. No install — just <code>import</code>.</p>

<h3>math module</h3>
<pre><span class="kw">import</span> math

math.sqrt(<span class="num">16</span>)        <span class="cm"># 4.0</span>
math.pi               <span class="cm"># 3.14159</span>
math.floor(<span class="num">3.7</span>)       <span class="cm"># 3</span>
math.ceil(<span class="num">3.2</span>)        <span class="cm"># 4</span>
math.factorial(<span class="num">5</span>)    <span class="cm"># 120</span></pre>

<h3>random module</h3>
<pre><span class="kw">import</span> random

random.randint(<span class="num">1</span>, <span class="num">10</span>)          <span class="cm"># 1-10</span>
random.random()                <span class="cm"># 0.0-1.0</span>
random.choice([<span class="str">"a"</span>, <span class="str">"b"</span>])       <span class="cm"># one</span>
random.sample([<span class="num">1</span>,<span class="num">2</span>,<span class="num">3</span>,<span class="num">4</span>], k=<span class="num">2</span>)  <span class="cm"># unique</span>
random.shuffle(nums)</pre>

<h3>datetime module</h3>
<pre><span class="kw">import</span> datetime

now = datetime.datetime.now()
<span class="fn">print</span>(now.year)
now.strftime(<span class="str">"%d-%m-%Y"</span>)

delta = datetime.timedelta(days=<span class="num">7</span>)
<span class="fn">print</span>(d + delta)</pre>

<h3>os module</h3>
<pre>os.getcwd()
os.listdir(<span class="str">"."</span>)
os.path.exists(<span class="str">"data.txt"</span>)
os.path.join(<span class="str">"folder"</span>, <span class="str">"file.txt"</span>)</pre>

<h3>sys module</h3>
<pre><span class="kw">import</span> sys
<span class="fn">print</span>(sys.version)
<span class="fn">print</span>(sys.argv)</pre>

<div class="real-life">
<div class="head">🌍 Real Life Example</div>
<pre style="margin-top:10px;margin-bottom:0;"><span class="kw">import</span> datetime

<span class="kw">def</span> <span class="fn">age</span>(birth_year):
    <span class="kw">return</span> datetime.datetime.now().year - birth_year</pre>
</div>

<div class="warn-box">
<div class="head">⚠️ Common Mistakes</div>
<ul>
<li><code>math.sqrt(-1)</code> — ValueError (use cmath)</li>
<li><code>randint</code> inclusive, <code>randrange</code> exclusive</li>
<li><code>datetime.now()</code> instead of <code>datetime.datetime.now()</code></li>
</ul>
</div>

<div class="pro-tip">
<div class="head">✨ Pro Tip</div>
<p>Use <code>random.seed(42)</code> — same random numbers each run. Great for testing.</p>
</div>`
      },
      quiz: [
        { q: { ur: "math.sqrt(16) ka result?", en: "math.sqrt(16)?" }, options: ["4", "4.0", "8", "2"], answer: 1 },
        { q: { ur: "random 1-10 inclusive?", en: "random 1-10 inclusive?" }, options: ["random.randint(1,10)", "random.randrange(1,10)", "random.choice(10)", "random.random(10)"], answer: 0 },
        { q: { ur: "List shuffle kaise?", en: "How to shuffle list?" }, options: ["random.sort()", "random.shuffle()", "random.mix()", "random.move()"], answer: 1 },
        { q: { ur: "Aaj ka date?", en: "Today's date?" }, options: ["date.today()", "datetime.now()", "datetime.datetime.now()", "datetime.today()"], answer: 2 },
        { q: { ur: "File exist check kaise?", en: "Check if file exists?" }, options: ["os.exists()", "os.path.exists()", "os.file()", "os.check()"], answer: 1 }
      ]
    },

    /* ═══════════════════════════════════════════════════════
       TOPIC 3: Custom Modules
       ═══════════════════════════════════════════════════════ */
    {
      id: "custom-modules",
      title: { ur: "Custom Modules", en: "Custom Modules" },
      icon: "🛠️",
      code: {
        ur: `# File: mymath.py
def add(a, b):
    return a + b

def multiply(a, b):
    return a * b

PI = 3.14159

# File: main.py
import mymath

print(mymath.add(2, 3))        # 5
print(mymath.multiply(4, 5))   # 20
print(mymath.PI)               # 3.14159

# Specific import
from mymath import add
print(add(10, 20))             # 30`,
        en: `# File: mymath.py
def add(a, b):
    return a + b

def multiply(a, b):
    return a * b

PI = 3.14159

# File: main.py
import mymath

print(mymath.add(2, 3))        # 5
print(mymath.multiply(4, 5))   # 20
print(mymath.PI)               # 3.14159

# Specific import
from mymath import add
print(add(10, 20))             # 30`
      },
      learn: {
        ur: `<h2 style="font-size:1.15rem;font-weight:800;margin-bottom:14px;">🛠️ Custom Modules</h2>
<p style="color:var(--text-soft);font-size:.93rem;margin-bottom:14px;">Apne functions ek <code>.py</code> file mein likho — aur kisi bhi doosri file se <code>import</code> karo. Code reuse ka asli faida.</p>

<div style="background:var(--code-bg);border:1px solid var(--code-border);border-radius:10px;overflow:hidden;margin-bottom:16px;font-family:var(--mono);font-size:.82rem;">
  <div style="display:grid;grid-template-columns:180px 1fr;padding:9px 14px;background:var(--code-bg-2);color:var(--py-blue-glow);font-weight:700;font-size:.68rem;text-transform:uppercase;">File · Kya rakho</div>
  <div style="display:grid;grid-template-columns:180px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">mymodule.py</span><span style="color:var(--text-soft);">Functions, classes, variables</span></div>
  <div style="display:grid;grid-template-columns:180px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">main.py</span><span style="color:var(--text-soft);">import mymodule — use karo</span></div>
</div>

<div style="background:linear-gradient(135deg,rgba(75,139,190,.1),rgba(75,139,190,.03));border:1px solid rgba(75,139,190,.25);border-left:3px solid var(--py-blue);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--text);display:block;margin-bottom:3px;">💡 Kyun</strong>
Bara project — sab kuch ek file mein nahi. Har module ka apna kaam.
</div>

<div style="background:linear-gradient(135deg,rgba(16,185,129,.1),rgba(16,185,129,.02));border:1px solid rgba(16,185,129,.25);border-left:3px solid var(--py-green);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--py-green-glow);display:block;margin-bottom:5px;font-family:var(--mono);font-size:.7rem;text-transform:uppercase;">⚠️ Common Mistake</strong>
File ka naam <code>math.py</code> ya <code>random.py</code> rakhna — Python ka built-in shadow ho jata hai.
</div>`,
        en: `<h2 style="font-size:1.15rem;font-weight:800;margin-bottom:14px;">🛠️ Custom Modules</h2>
<p style="color:var(--text-soft);font-size:.93rem;margin-bottom:14px;">Write your functions in a <code>.py</code> file — then <code>import</code> from any other file. Real code reuse.</p>

<div style="background:var(--code-bg);border:1px solid var(--code-border);border-radius:10px;overflow:hidden;margin-bottom:16px;font-family:var(--mono);font-size:.82rem;">
  <div style="display:grid;grid-template-columns:180px 1fr;padding:9px 14px;background:var(--code-bg-2);color:var(--py-blue-glow);font-weight:700;font-size:.68rem;text-transform:uppercase;">File · Contains</div>
  <div style="display:grid;grid-template-columns:180px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">mymodule.py</span><span style="color:var(--text-soft);">Functions, classes, vars</span></div>
  <div style="display:grid;grid-template-columns:180px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">main.py</span><span style="color:var(--text-soft);">import mymodule — use</span></div>
</div>

<div style="background:linear-gradient(135deg,rgba(75,139,190,.1),rgba(75,139,190,.03));border:1px solid rgba(75,139,190,.25);border-left:3px solid var(--py-blue);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--text);display:block;margin-bottom:3px;">💡 Why</strong>
Big project — not everything in one file. Each module has one job.
</div>

<div style="background:linear-gradient(135deg,rgba(16,185,129,.1),rgba(16,185,129,.02));border:1px solid rgba(16,185,129,.25);border-left:3px solid var(--py-green);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--py-green-glow);display:block;margin-bottom:5px;font-family:var(--mono);font-size:.7rem;text-transform:uppercase;">⚠️ Common Mistake</strong>
Naming file <code>math.py</code> or <code>random.py</code> — shadows built-ins.
</div>`
      },
      theory: {
        ur: `<h3>Yeh kya hai?</h3>
<p>Koi bhi <code>.py</code> file apne aap ek module hai. Doosri file se <code>import</code> kar sakte ho.</p>

<h3>Step-by-step</h3>
<div class="steps">
<ol>
<li><strong>Step 1:</strong> <code>mymath.py</code> file banao</li>
<li><strong>Step 2:</strong> Functions/classes likho</li>
<li><strong>Step 3:</strong> <code>main.py</code> same folder mein banao</li>
<li><strong>Step 4:</strong> <code>import mymath</code> likho</li>
<li><strong>Step 5:</strong> <code>mymath.add(2, 3)</code> use karo</li>
</ol>
</div>

<h3>mymath.py</h3>
<pre><span class="kw">def</span> <span class="fn">add</span>(a, b):
    <span class="kw">return</span> a + b

<span class="kw">def</span> <span class="fn">multiply</span>(a, b):
    <span class="kw">return</span> a * b

PI = <span class="num">3.14159</span></pre>

<h3>main.py — 3 tareeqe</h3>
<pre><span class="cm"># 1. Poora module</span>
<span class="kw">import</span> mymath
<span class="fn">print</span>(mymath.add(<span class="num">2</span>, <span class="num">3</span>))

<span class="cm"># 2. Specific</span>
<span class="kw">from</span> mymath <span class="kw">import</span> add, multiply
<span class="fn">print</span>(add(<span class="num">2</span>, <span class="num">3</span>))

<span class="cm"># 3. Alias</span>
<span class="kw">import</span> mymath <span class="kw">as</span> mm
<span class="fn">print</span>(mm.PI)</pre>

<h3>__name__ == "__main__"</h3>
<p>Test code likho jo sirf tab chale jab file directly run ho, import pe nahi.</p>
<pre><span class="cm"># calculator.py</span>
<span class="kw">def</span> <span class="fn">add</span>(a, b):
    <span class="kw">return</span> a + b

<span class="kw">if</span> __name__ == <span class="str">"__main__"</span>:
    <span class="cm"># Yeh sirf direct run pe chalega</span>
    <span class="fn">print</span>(<span class="str">"Testing:"</span>, add(<span class="num">2</span>, <span class="num">3</span>))</pre>

<pre><span class="cm"># main.py</span>
<span class="kw">import</span> calculator
<span class="fn">print</span>(calculator.add(<span class="num">10</span>, <span class="num">20</span>))
<span class="cm"># "Testing: 5" print NAHI hoga</span></pre>

<div class="real-life">
<div class="head">🌍 Real Life Example</div>
<p><strong>Scenario:</strong> Todo app ke liye 2 modules.</p>
<pre style="margin-top:10px;margin-bottom:0;"><span class="cm"># storage.py</span>
<span class="kw">def</span> <span class="fn">save</span>(tasks):
    <span class="kw">with</span> <span class="fn">open</span>(<span class="str">"tasks.txt"</span>, <span class="str">"w"</span>) <span class="kw">as</span> f:
        f.write(<span class="str">"\n"</span>.join(tasks))

<span class="kw">def</span> <span class="fn">load</span>():
    <span class="kw">try</span>:
        <span class="kw">with</span> <span class="fn">open</span>(<span class="str">"tasks.txt"</span>) <span class="kw">as</span> f:
            <span class="kw">return</span> f.read().splitlines()
    <span class="kw">except</span> FileNotFoundError:
        <span class="kw">return</span> []

<span class="cm"># app.py</span>
<span class="kw">from</span> storage <span class="kw">import</span> save, load
tasks = load()
tasks.append(<span class="str">"Buy milk"</span>)
save(tasks)</pre>
</div>

<div class="warn-box">
<div class="head">⚠️ Common Mistakes</div>
<ul>
<li>File ka naam built-in module ke naam pe rakhna</li>
<li>Dono files alag folders mein — import fail</li>
<li><code>__name__ == "__main__"</code> bhoolna — import pe bhi test chalta hai</li>
</ul>
</div>

<div class="pro-tip">
<div class="head">✨ Pro Tip</div>
<p>Har module ko ek kaam do: <code>storage.py</code> sirf save/load, <code>ui.py</code> sirf display. Clean structure.</p>
</div>`,
        en: `<h3>What is it?</h3>
<p>Any <code>.py</code> file is itself a module. Import from another file.</p>

<h3>Step-by-step</h3>
<div class="steps">
<ol>
<li><strong>Step 1:</strong> Create <code>mymath.py</code></li>
<li><strong>Step 2:</strong> Write functions</li>
<li><strong>Step 3:</strong> Create <code>main.py</code> in same folder</li>
<li><strong>Step 4:</strong> <code>import mymath</code></li>
<li><strong>Step 5:</strong> Use <code>mymath.add(2, 3)</code></li>
</ol>
</div>

<h3>mymath.py</h3>
<pre><span class="kw">def</span> <span class="fn">add</span>(a, b):
    <span class="kw">return</span> a + b

PI = <span class="num">3.14159</span></pre>

<h3>main.py — 3 ways</h3>
<pre><span class="kw">import</span> mymath
<span class="fn">print</span>(mymath.add(<span class="num">2</span>, <span class="num">3</span>))

<span class="kw">from</span> mymath <span class="kw">import</span> add
<span class="fn">print</span>(add(<span class="num">2</span>, <span class="num">3</span>))

<span class="kw">import</span> mymath <span class="kw">as</span> mm
<span class="fn">print</span>(mm.PI)</pre>

<h3>__name__ == "__main__"</h3>
<pre><span class="cm"># calculator.py</span>
<span class="kw">def</span> <span class="fn">add</span>(a, b):
    <span class="kw">return</span> a + b

<span class="kw">if</span> __name__ == <span class="str">"__main__"</span>:
    <span class="fn">print</span>(<span class="str">"Testing:"</span>, add(<span class="num">2</span>, <span class="num">3</span>))</pre>

<div class="real-life">
<div class="head">🌍 Real Life Example</div>
<pre style="margin-top:10px;margin-bottom:0;"><span class="cm"># storage.py</span>
<span class="kw">def</span> <span class="fn">save</span>(tasks):
    <span class="kw">with</span> <span class="fn">open</span>(<span class="str">"tasks.txt"</span>, <span class="str">"w"</span>) <span class="kw">as</span> f:
        f.write(<span class="str">"\n"</span>.join(tasks))

<span class="cm"># app.py</span>
<span class="kw">from</span> storage <span class="kw">import</span> save, load</pre>
</div>

<div class="warn-box">
<div class="head">⚠️ Common Mistakes</div>
<ul>
<li>Naming file same as built-in</li>
<li>Files in different folders — import fails</li>
<li>Forgetting <code>__name__ == "__main__"</code></li>
</ul>
</div>

<div class="pro-tip">
<div class="head">✨ Pro Tip</div>
<p>One module = one responsibility.</p>
</div>`
      },
      quiz: [
        { q: { ur: "Custom module kya hota?", en: "What is a custom module?" }, options: ["Built-in", "Apni .py file", "Class", "Function"], answer: 1 },
        { q: { ur: "__name__ == '__main__' ka faida?", en: "Benefit of __name__ == '__main__'?" }, options: ["Speed", "Import pe test na chale", "Error fix", "No benefit"], answer: 1 },
        { q: { ur: "File ka naam math.py kyun na rakhein?", en: "Why not name file math.py?" }, options: ["Slow", "Built-in shadow", "Error", "Deprecated"], answer: 1 },
        { q: { ur: "Module import kaise?", en: "How to import module?" }, options: ["include mymath", "import mymath", "use mymath", "load mymath"], answer: 1 },
        { q: { ur: "Dono files kahan honi chahiye?", en: "Where must both files be?" }, options: ["Alag folders", "Same folder", "Root", "Desktop"], answer: 1 }
      ]
    },

    /* ═══════════════════════════════════════════════════════
       TOPIC 4: pip & External Packages
       ═══════════════════════════════════════════════════════ */
    {
      id: "pip-packages",
      title: { ur: "pip & External Packages", en: "pip & External Packages" },
      icon: "📥",
      code: {
        ur: `# Terminal mein install karo (Python code nahi)
# pip install requests

# Phir use karo
import requests

response = requests.get("https://api.github.com")
print(response.status_code)    # 200
print(response.json()["current_user_url"])

# aur examples:
# pip install numpy pandas matplotlib
# pip install flask django
# pip install pillow openpyxl`,
        en: `# Install in terminal (not Python code)
# pip install requests

# Then use
import requests

response = requests.get("https://api.github.com")
print(response.status_code)    # 200
print(response.json()["current_user_url"])

# more:
# pip install numpy pandas matplotlib
# pip install flask django
# pip install pillow openpyxl`
      },
      learn: {
        ur: `<h2 style="font-size:1.15rem;font-weight:800;margin-bottom:14px;">📥 pip & External Packages</h2>
<p style="color:var(--text-soft);font-size:.93rem;margin-bottom:14px;">Built-in modules ke ilawa <strong>lakho external packages</strong> hain — <code>pip</code> se install karo.</p>

<div style="background:var(--code-bg);border:1px solid var(--code-border);border-radius:10px;overflow:hidden;margin-bottom:16px;font-family:var(--mono);font-size:.82rem;">
  <div style="display:grid;grid-template-columns:220px 1fr;padding:9px 14px;background:var(--code-bg-2);color:var(--py-blue-glow);font-weight:700;font-size:.68rem;text-transform:uppercase;">Command · Kaam</div>
  <div style="display:grid;grid-template-columns:220px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">pip install requests</span><span style="color:var(--text-soft);">Package install</span></div>
  <div style="display:grid;grid-template-columns:220px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">pip uninstall requests</span><span style="color:var(--text-soft);">Remove</span></div>
  <div style="display:grid;grid-template-columns:220px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">pip list</span><span style="color:var(--text-soft);">Installed packages</span></div>
  <div style="display:grid;grid-template-columns:220px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">pip freeze > req.txt</span><span style="color:var(--text-soft);">Requirements save</span></div>
  <div style="display:grid;grid-template-columns:220px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">pip install -r req.txt</span><span style="color:var(--text-soft);">Bulk install</span></div>
</div>

<div style="background:linear-gradient(135deg,rgba(75,139,190,.1),rgba(75,139,190,.03));border:1px solid rgba(75,139,190,.25);border-left:3px solid var(--py-blue);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--text);display:block;margin-bottom:3px;">💡 pip kya hai</strong>
Python ka <strong>package manager</strong> — apps dhundhta hai, download karta hai, install karta hai.
</div>

<div style="background:linear-gradient(135deg,rgba(16,185,129,.1),rgba(16,185,129,.02));border:1px solid rgba(16,185,129,.25);border-left:3px solid var(--py-green);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--py-green-glow);display:block;margin-bottom:5px;font-family:var(--mono);font-size:.7rem;text-transform:uppercase;">⚠️ Common Mistake</strong>
<code>pip install</code> ko Python code mein likhna — woh terminal command hai, Python statement nahi.
</div>`,
        en: `<h2 style="font-size:1.15rem;font-weight:800;margin-bottom:14px;">📥 pip & External Packages</h2>
<p style="color:var(--text-soft);font-size:.93rem;margin-bottom:14px;">Beyond built-in modules are <strong>millions of external packages</strong> — install with <code>pip</code>.</p>

<div style="background:var(--code-bg);border:1px solid var(--code-border);border-radius:10px;overflow:hidden;margin-bottom:16px;font-family:var(--mono);font-size:.82rem;">
  <div style="display:grid;grid-template-columns:220px 1fr;padding:9px 14px;background:var(--code-bg-2);color:var(--py-blue-glow);font-weight:700;font-size:.68rem;text-transform:uppercase;">Command · Does</div>
  <div style="display:grid;grid-template-columns:220px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">pip install requests</span><span style="color:var(--text-soft);">Install</span></div>
  <div style="display:grid;grid-template-columns:220px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">pip uninstall requests</span><span style="color:var(--text-soft);">Remove</span></div>
  <div style="display:grid;grid-template-columns:220px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">pip list</span><span style="color:var(--text-soft);">Show installed</span></div>
  <div style="display:grid;grid-template-columns:220px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">pip freeze > req.txt</span><span style="color:var(--text-soft);">Save list</span></div>
</div>

<div style="background:linear-gradient(135deg,rgba(75,139,190,.1),rgba(75,139,190,.03));border:1px solid rgba(75,139,190,.25);border-left:3px solid var(--py-blue);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--text);display:block;margin-bottom:3px;">💡 What is pip</strong>
Python's <strong>package manager</strong> — finds, downloads, installs apps.
</div>

<div style="background:linear-gradient(135deg,rgba(16,185,129,.1),rgba(16,185,129,.02));border:1px solid rgba(16,185,129,.25);border-left:3px solid var(--py-green);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--py-green-glow);display:block;margin-bottom:5px;font-family:var(--mono);font-size:.7rem;text-transform:uppercase;">⚠️ Common Mistake</strong>
Writing <code>pip install</code> inside Python code — that's a terminal command.
</div>`
      },
      theory: {
        ur: `<h3>Yeh kya hai?</h3>
<p><code>pip</code> Python ka package manager hai. <strong>PyPI</strong> (Python Package Index) se packages download karta hai — 500,000+ packages hain.</p>

<h3>Kaise kaam karta hai?</h3>
<div class="steps">
<ol>
<li><strong>Step 1:</strong> Terminal kholo (CMD / Terminal)</li>
<li><strong>Step 2:</strong> <code>pip install package_name</code> likho</li>
<li><strong>Step 3:</strong> pip package dhundta hai PyPI pe</li>
<li><strong>Step 4:</strong> Download aur install karta hai</li>
<li><strong>Step 5:</strong> Python mein <code>import</code> karo</li>
</ol>
</div>

<h3>Basic commands</h3>
<pre><span class="cm"># Install</span>
pip install requests

<span class="cm"># Specific version</span>
pip install requests==2.28.0

<span class="cm"># Upgrade</span>
pip install --upgrade requests

<span class="cm"># Uninstall</span>
pip uninstall requests

<span class="cm"># List all installed</span>
pip list

<span class="cm"># Show info</span>
pip show requests

<span class="cm"># Save all versions</span>
pip freeze > requirements.txt

<span class="cm"># Install from file</span>
pip install -r requirements.txt</pre>

<h3>Popular packages</h3>
<table class="theory-table">
<div class="row head"><div>Package</div><div>Kaam</div></div>
<div class="row"><div class="label">requests</div><div class="value">HTTP / APIs</div></div>
<div class="row"><div class="label">numpy</div><div class="value">Math, arrays</div></div>
<div class="row"><div class="label">pandas</div><div class="value">Data analysis</div></div>
<div class="row"><div class="label">matplotlib</div><div class="value">Charts / plots</div></div>
<div class="row"><div class="label">flask</div><div class="value">Web apps (small)</div></div>
<div class="row"><div class="label">django</div><div class="value">Web apps (big)</div></div>
<div class="row"><div class="label">pillow</div><div class="value">Image processing</div></div>
<div class="row"><div class="label">beautifulsoup4</div><div class="value">Web scraping</div></div>
</table>

<h3>Example — requests</h3>
<pre><span class="cm"># Terminal: pip install requests</span>

<span class="kw">import</span> requests

response = requests.get(<span class="str">"https://api.github.com"</span>)
<span class="fn">print</span>(response.status_code)   <span class="cm"># 200</span>
data = response.json()
<span class="fn">print</span>(data[<span class="str">"current_user_url"</span>])</pre>

<h3>Virtual environment (best practice)</h3>
<pre><span class="cm"># Project ke liye alag environment</span>
python -m venv myenv

<span class="cm"># Activate (Windows)</span>
myenv\Scripts\activate

<span class="cm"># Activate (Mac/Linux)</span>
<span class="kw">source</span> myenv/bin/activate

<span class="cm"># Ab pip install karo — sirf is project mein</span>
pip install requests

<span class="cm"># Deactivate</span>
deactivate</pre>

<div class="real-life">
<div class="head">🌍 Real Life Example</div>
<p><strong>Scenario:</strong> Weather app — API se data lana.</p>
<pre style="margin-top:10px;margin-bottom:0;"><span class="cm"># Terminal: pip install requests</span>

<span class="kw">import</span> requests

url = <span class="str">"https://api.open-meteo.com/v1/forecast?latitude=24.86&longitude=67.01&current_weather=true"</span>
r = requests.get(url)
data = r.json()
<span class="fn">print</span>(data[<span class="str">"current_weather"</span>][<span class="str">"temperature"</span>], <span class="str">"°C"</span>)</pre>
</div>

<div class="warn-box">
<div class="head">⚠️ Common Mistakes</div>
<ul>
<li><code>pip install</code> Python code mein likhna — terminal command hai</li>
<li>Har project mein global install — version clash</li>
<li><code>requirements.txt</code> na rakhna — team ke liye mushkil</li>
</ul>
</div>

<div class="pro-tip">
<div class="head">✨ Pro Tip</div>
<p>Har project ke liye <strong>virtual environment</strong> banao. <code>python -m venv venv</code> — saaf aur isolated.</p>
</div>`,
        en: `<h3>What is it?</h3>
<p><code>pip</code> is Python's package manager. It downloads from <strong>PyPI</strong> — 500,000+ packages.</p>

<h3>How does it work?</h3>
<div class="steps">
<ol>
<li><strong>Step 1:</strong> Open terminal</li>
<li><strong>Step 2:</strong> Write <code>pip install package_name</code></li>
<li><strong>Step 3:</strong> pip finds it on PyPI</li>
<li><strong>Step 4:</strong> Downloads and installs</li>
<li><strong>Step 5:</strong> <code>import</code> in Python</li>
</ol>
</div>

<h3>Basic commands</h3>
<pre>pip install requests
pip install requests==<span class="num">2.28</span>.<span class="num">0</span>
pip install --upgrade requests
pip uninstall requests
pip list
pip show requests
pip freeze > requirements.txt
pip install -r requirements.txt</pre>

<h3>Popular packages</h3>
<table class="theory-table">
<div class="row head"><div>Package</div><div>Does</div></div>
<div class="row"><div class="label">requests</div><div class="value">HTTP / APIs</div></div>
<div class="row"><div class="label">numpy</div><div class="value">Math, arrays</div></div>
<div class="row"><div class="label">pandas</div><div class="value">Data analysis</div></div>
<div class="row"><div class="label">matplotlib</div><div class="value">Charts</div></div>
<div class="row"><div class="label">flask</div><div class="value">Web apps</div></div>
</table>

<h3>Example — requests</h3>
<pre><span class="kw">import</span> requests
response = requests.get(<span class="str">"https://api.github.com"</span>)
<span class="fn">print</span>(response.status_code)   <span class="cm"># 200</span></pre>

<h3>Virtual environment</h3>
<pre>python -m venv myenv
myenv\Scripts\activate    <span class="cm"># Windows</span>
<span class="kw">source</span> myenv/bin/activate  <span class="cm"># Mac/Linux</span>
pip install requests
deactivate</pre>

<div class="real-life">
<div class="head">🌍 Real Life Example</div>
<pre style="margin-top:10px;margin-bottom:0;"><span class="kw">import</span> requests

url = <span class="str">"https://api.open-meteo.com/v1/forecast?..."</span>
r = requests.get(url)
<span class="fn">print</span>(r.json()[<span class="str">"current_weather"</span>])</pre>
</div>

<div class="warn-box">
<div class="head">⚠️ Common Mistakes</div>
<ul>
<li><code>pip install</code> inside Python code</li>
<li>Global installs per project — version clash</li>
<li>No <code>requirements.txt</code></li>
</ul>
</div>

<div class="pro-tip">
<div class="head">✨ Pro Tip</div>
<p>Use <strong>virtual environment</strong> per project: <code>python -m venv venv</code>.</p>
</div>`
      },
      quiz: [
        { q: { ur: "pip kya hai?", en: "What is pip?" }, options: ["Module", "Package manager", "IDE", "Function"], answer: 1 },
        { q: { ur: "Package install kaise?", en: "How to install package?" }, options: ["import requests", "pip install requests", "python requests", "get requests"], answer: 1 },
        { q: { ur: "pip install kahan likhte?", en: "Where to run pip install?" }, options: ["Python code", "Terminal", "HTML", "JSON"], answer: 1 },
        { q: { ur: "Installed packages list?", en: "List installed packages?" }, options: ["pip show", "pip list", "pip all", "pip ls"], answer: 1 },
        { q: { ur: "Virtual environment kyun?", en: "Why virtual environment?" }, options: ["Faster", "Isolated deps per project", "Less code", "No reason"], answer: 1 }
      ]
    }

  ]
};