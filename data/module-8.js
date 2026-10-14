// data/module-8.js
// Module 8: OOP — 8 topics

window.MODULES = window.MODULES || {};

window.MODULES["module-8"] = {
  id: "module-8",
  number: 8,
  slug: "oop",
  title: { ur: "OOP", en: "OOP" },
  description: {
    ur: "Classes, objects, inheritance, polymorphism, encapsulation, magic methods",
    en: "Classes, objects, inheritance, polymorphism, encapsulation, magic methods"
  },
  duration: "25 minutes",
  level: "Intermediate",
  locked: true,

  topics: [

    /* ═══════════════════════════════════════════════════════
       TOPIC 1: Classes & Objects
       ═══════════════════════════════════════════════════════ */
    {
      id: "classes-objects",
      title: { ur: "Classes & Objects", en: "Classes & Objects" },
      icon: "🏗️",
      code: {
        ur: `# Class banana
class Student:
    pass

# Object banana
ali = Student()
sara = Student()

print(ali)   # <__main__.Student object>
print(type(ali))  # <class '__main__.Student'>`,
        en: `# Create a class
class Student:
    pass

# Create objects
ali = Student()
sara = Student()

print(ali)   # <__main__.Student object>
print(type(ali))  # <class '__main__.Student'>`
      },
      learn: {
        ur: `<h2 style="font-size:1.15rem;font-weight:800;margin-bottom:14px;">🏗️ Classes & Objects</h2>
<p style="color:var(--text-soft);font-size:.93rem;margin-bottom:14px;">Class ek <strong>blueprint</strong> hai, object us blueprint se bani <strong>cheez</strong>. Jaise "Car" ek class hai, aur tumhari Honda Civic ek object.</p>

<div style="background:var(--code-bg);border:1px solid var(--code-border);border-radius:10px;overflow:hidden;margin-bottom:16px;font-family:var(--mono);font-size:.82rem;">
  <div style="display:grid;grid-template-columns:140px 1fr;padding:9px 14px;background:var(--code-bg-2);color:var(--py-blue-glow);font-weight:700;font-size:.68rem;text-transform:uppercase;">Term · Matlab</div>
  <div style="display:grid;grid-template-columns:140px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">Class</span><span style="color:var(--text-soft);">Blueprint / design</span></div>
  <div style="display:grid;grid-template-columns:140px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">Object</span><span style="color:var(--text-soft);">Class se bani cheez (instance)</span></div>
  <div style="display:grid;grid-template-columns:140px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">Instance</span><span style="color:var(--text-soft);">Object ka doosra naam</span></div>
</div>

<div style="background:linear-gradient(135deg,rgba(75,139,190,.1),rgba(75,139,190,.03));border:1px solid rgba(75,139,190,.25);border-left:3px solid var(--py-blue);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--text);display:block;margin-bottom:3px;">💡 Kyun OOP</strong>
Bara code organize karna asaan — data + kaam ek jagah.
</div>

<div style="background:linear-gradient(135deg,rgba(16,185,129,.1),rgba(16,185,129,.02));border:1px solid rgba(16,185,129,.25);border-left:3px solid var(--py-green);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--py-green-glow);display:block;margin-bottom:5px;font-family:var(--mono);font-size:.7rem;text-transform:uppercase;">⚠️ Common Mistake</strong>
Class name <code>lowercase</code> likhna — Python convention <code>PascalCase</code> hai (Student, BankAccount).
</div>`,
        en: `<h2 style="font-size:1.15rem;font-weight:800;margin-bottom:14px;">🏗️ Classes & Objects</h2>
<p style="color:var(--text-soft);font-size:.93rem;margin-bottom:14px;">A class is a <strong>blueprint</strong>, an object is a <strong>thing built from it</strong>. Like "Car" is a class, your Honda Civic is an object.</p>

<div style="background:var(--code-bg);border:1px solid var(--code-border);border-radius:10px;overflow:hidden;margin-bottom:16px;font-family:var(--mono);font-size:.82rem;">
  <div style="display:grid;grid-template-columns:140px 1fr;padding:9px 14px;background:var(--code-bg-2);color:var(--py-blue-glow);font-weight:700;font-size:.68rem;text-transform:uppercase;">Term · Meaning</div>
  <div style="display:grid;grid-template-columns:140px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">Class</span><span style="color:var(--text-soft);">Blueprint / design</span></div>
  <div style="display:grid;grid-template-columns:140px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">Object</span><span style="color:var(--text-soft);">Thing made from class</span></div>
  <div style="display:grid;grid-template-columns:140px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">Instance</span><span style="color:var(--text-soft);">Another word for object</span></div>
</div>

<div style="background:linear-gradient(135deg,rgba(75,139,190,.1),rgba(75,139,190,.03));border:1px solid rgba(75,139,190,.25);border-left:3px solid var(--py-blue);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--text);display:block;margin-bottom:3px;">💡 Why OOP</strong>
Organize large code — data + behavior in one place.
</div>

<div style="background:linear-gradient(135deg,rgba(16,185,129,.1),rgba(16,185,129,.02));border:1px solid rgba(16,185,129,.25);border-left:3px solid var(--py-green);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--py-green-glow);display:block;margin-bottom:5px;font-family:var(--mono);font-size:.7rem;text-transform:uppercase;">⚠️ Common Mistake</strong>
Naming class <code>lowercase</code> — Python convention is <code>PascalCase</code> (Student, BankAccount).
</div>`
      },
      theory: {
        ur: `<h3>Yeh kya hai?</h3>
<p><strong>Class</strong> ek blueprint hai — jaise ghar ka naqsha. <strong>Object</strong> us naqshe se bana asli ghar. Ek class se kai objects ban sakte hain.</p>

<h3>Kaise kaam karta hai?</h3>
<div class="steps">
<ol>
<li><strong>Step 1:</strong> <code>class</code> keyword se class banao</li>
<li><strong>Step 2:</strong> Class ka naam PascalCase mein rakho</li>
<li><strong>Step 3:</strong> <code>ClassName()</code> se object banao</li>
<li><strong>Step 4:</strong> Object ko variable mein store karo</li>
<li><strong>Step 5:</strong> <code>obj.attribute</code> se data access karo</li>
</ol>
</div>

<h3>Basic class</h3>
<pre><span class="kw">class</span> <span class="fn">Student</span>:
    <span class="kw">pass</span>

ali = <span class="fn">Student</span>()
sara = <span class="fn">Student</span>()

<span class="fn">print</span>(ali)        <span class="cm"># <__main__.Student object at 0x...></span>
<span class="fn">print</span>(<span class="fn">type</span>(ali))   <span class="cm"># <class '__main__.Student'></span></pre>

<h3>Attributes add karna</h3>
<pre><span class="kw">class</span> <span class="fn">Student</span>:
    <span class="kw">pass</span>

ali = <span class="fn">Student</span>()
ali.name = <span class="str">"Ali"</span>
ali.age = <span class="num">21</span>

<span class="fn">print</span>(ali.name)   <span class="cm"># Ali</span>
<span class="fn">print</span>(ali.age)    <span class="cm"># 21</span></pre>

<h3>Class vs Object</h3>
<pre><span class="cm"># Class — blueprint</span>
<span class="kw">class</span> <span class="fn">Car</span>:
    <span class="kw">pass</span>

<span class="cm"># Objects — real cars</span>
car1 = <span class="fn">Car</span>()
car2 = <span class="fn">Car</span>()
car3 = <span class="fn">Car</span>

<span class="fn">print</span>(<span class="fn">type</span>(car1))  <span class="cm"># <class '__main__.Car'></span></pre>

<div class="real-life">
<div class="head">🌍 Real Life Example</div>
<p><strong>Scenario:</strong> School system — har student ka record.</p>
<pre style="margin-top:10px;margin-bottom:0;"><span class="kw">class</span> <span class="fn">Student</span>:
    <span class="kw">pass</span>

ali = <span class="fn">Student</span>()
ali.name = <span class="str">"Ali"</span>
ali.marks = <span class="num">85</span>

sara = <span class="fn">Student</span>()
sara.name = <span class="str">"Sara"</span>
sara.marks = <span class="num">92</span>

<span class="fn">print</span>(<span class="str">f"{ali.name}: {ali.marks}"</span>)
<span class="fn">print</span>(<span class="str">f"{sara.name}: {sara.marks}"</span>)</pre>
</div>

<div class="warn-box">
<div class="head">⚠️ Common Mistakes</div>
<ul>
<li>Class name lowercase — convention PascalCase</li>
<li><code>class</code> ke baad colon <code>:</code> bhool jana</li>
<li>Object banane mein <code>()</code> bhool jana</li>
</ul>
</div>

<div class="pro-tip">
<div class="head">✨ Pro Tip</div>
<p>Har class ka kaam ek hona chahiye — "Student" class student ko represent kare, na ke school, na ke teacher.</p>
</div>`,
        en: `<h3>What is it?</h3>
<p>A <strong>class</strong> is a blueprint — like a house plan. An <strong>object</strong> is the actual house built from it. One class → many objects.</p>

<h3>How does it work?</h3>
<div class="steps">
<ol>
<li><strong>Step 1:</strong> Create class with <code>class</code> keyword</li>
<li><strong>Step 2:</strong> Use PascalCase for name</li>
<li><strong>Step 3:</strong> Create object with <code>ClassName()</code></li>
<li><strong>Step 4:</strong> Store in variable</li>
<li><strong>Step 5:</strong> Access with <code>obj.attribute</code></li>
</ol>
</div>

<h3>Basic class</h3>
<pre><span class="kw">class</span> <span class="fn">Student</span>:
    <span class="kw">pass</span>

ali = <span class="fn">Student</span>()
sara = <span class="fn">Student</span>()</pre>

<h3>Adding attributes</h3>
<pre><span class="kw">class</span> <span class="fn">Student</span>:
    <span class="kw">pass</span>

ali = <span class="fn">Student</span>()
ali.name = <span class="str">"Ali"</span>
ali.age = <span class="num">21</span>

<span class="fn">print</span>(ali.name)   <span class="cm"># Ali</span></pre>

<div class="real-life">
<div class="head">🌍 Real Life Example</div>
<p><strong>Scenario:</strong> School records.</p>
<pre style="margin-top:10px;margin-bottom:0;"><span class="kw">class</span> <span class="fn">Student</span>:
    <span class="kw">pass</span>

ali = <span class="fn">Student</span>()
ali.name = <span class="str">"Ali"</span>
ali.marks = <span class="num">85</span>

<span class="fn">print</span>(<span class="str">f"{ali.name}: {ali.marks}"</span>)</pre>
</div>

<div class="warn-box">
<div class="head">⚠️ Common Mistakes</div>
<ul>
<li>Lowercase class name</li>
<li>Missing colon after <code>class</code></li>
<li>Forgetting <code>()</code> when creating object</li>
</ul>
</div>

<div class="pro-tip">
<div class="head">✨ Pro Tip</div>
<p>Each class should have one responsibility.</p>
</div>`
      },
      quiz: [
        { q: { ur: "Class kya hai?", en: "What is a class?" }, options: ["Object", "Blueprint", "Variable", "Function"], answer: 1 },
        { q: { ur: "Object ka doosra naam?", en: "Another name for object?" }, options: ["Class", "Instance", "Method", "Module"], answer: 1 },
        { q: { ur: "Class ka naam kaise likhna?", en: "Class naming convention?" }, options: ["lowercase", "UPPERCASE", "PascalCase", "snake_case"], answer: 2 },
        { q: { ur: "Object banane ka tareeqa?", en: "How to create object?" }, options: ["obj = Class", "obj = Class()", "obj = new Class", "obj = class()"], answer: 1 },
        { q: { ur: "Ek class se kitne objects?", en: "How many objects from one class?" }, options: ["1", "2", "Unlimited", "0"], answer: 2 }
      ]
    },

    /* ═══════════════════════════════════════════════════════
       TOPIC 2: __init__ Constructor
       ═══════════════════════════════════════════════════════ */
    {
      id: "init-constructor",
      title: { ur: "__init__ Constructor", en: "__init__ Constructor" },
      icon: "🎬",
      code: {
        ur: `class Student:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def show(self):
        print(f"{self.name}, {self.age} saal")

ali = Student("Ali", 21)
ali.show()   # Ali, 21 saal

sara = Student("Sara", 22)
sara.show()  # Sara, 22 saal`,
        en: `class Student:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def show(self):
        print(f"{self.name}, {self.age} years")

ali = Student("Ali", 21)
ali.show()   # Ali, 21 years

sara = Student("Sara", 22)
sara.show()  # Sara, 22 years`
      },
      learn: {
        ur: `<h2 style="font-size:1.15rem;font-weight:800;margin-bottom:14px;">🎬 __init__ Constructor</h2>
<p style="color:var(--text-soft);font-size:.93rem;margin-bottom:14px;"><code>__init__</code> ek special method hai jo object banate waqt <strong>automatically chalta hai</strong> — data set karne ke liye.</p>

<div style="background:var(--code-bg);border:1px solid var(--code-border);border-radius:10px;overflow:hidden;margin-bottom:16px;font-family:var(--mono);font-size:.82rem;">
  <div style="display:grid;grid-template-columns:140px 1fr;padding:9px 14px;background:var(--code-bg-2);color:var(--py-blue-glow);font-weight:700;font-size:.68rem;text-transform:uppercase;">Part · Kaam</div>
  <div style="display:grid;grid-template-columns:140px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">__init__</span><span style="color:var(--text-soft);">Object bante hi chalta hai</span></div>
  <div style="display:grid;grid-template-columns:140px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">self</span><span style="color:var(--text-soft);">Object khud (first parameter)</span></div>
  <div style="display:grid;grid-template-columns:140px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">self.name</span><span style="color:var(--text-soft);">Object ka attribute</span></div>
</div>

<div style="background:linear-gradient(135deg,rgba(75,139,190,.1),rgba(75,139,190,.03));border:1px solid rgba(75,139,190,.25);border-left:3px solid var(--py-blue);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--text);display:block;margin-bottom:3px;">💡 self kya hai</strong>
<code>self</code> means "yeh wala object". Python khud bhejta hai, tum nahi.
</div>

<div style="background:linear-gradient(135deg,rgba(16,185,129,.1),rgba(16,185,129,.02));border:1px solid rgba(16,185,129,.25);border-left:3px solid var(--py-green);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--py-green-glow);display:block;margin-bottom:5px;font-family:var(--mono);font-size:.7rem;text-transform:uppercase;">⚠️ Common Mistake</strong>
<code>self</code> ko parameter mein bhool jana — phir har method mein error.
</div>`,
        en: `<h2 style="font-size:1.15rem;font-weight:800;margin-bottom:14px;">🎬 __init__ Constructor</h2>
<p style="color:var(--text-soft);font-size:.93rem;margin-bottom:14px;"><code>__init__</code> is a special method that runs <strong>automatically when an object is created</strong> — used to set data.</p>

<div style="background:var(--code-bg);border:1px solid var(--code-border);border-radius:10px;overflow:hidden;margin-bottom:16px;font-family:var(--mono);font-size:.82rem;">
  <div style="display:grid;grid-template-columns:140px 1fr;padding:9px 14px;background:var(--code-bg-2);color:var(--py-blue-glow);font-weight:700;font-size:.68rem;text-transform:uppercase;">Part · Does</div>
  <div style="display:grid;grid-template-columns:140px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">__init__</span><span style="color:var(--text-soft);">Runs on object creation</span></div>
  <div style="display:grid;grid-template-columns:140px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">self</span><span style="color:var(--text-soft);">The object itself (first param)</span></div>
  <div style="display:grid;grid-template-columns:140px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">self.name</span><span style="color:var(--text-soft);">Object's attribute</span></div>
</div>

<div style="background:linear-gradient(135deg,rgba(75,139,190,.1),rgba(75,139,190,.03));border:1px solid rgba(75,139,190,.25);border-left:3px solid var(--py-blue);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--text);display:block;margin-bottom:3px;">💡 What is self</strong>
<code>self</code> means "this object". Python passes it automatically.
</div>

<div style="background:linear-gradient(135deg,rgba(16,185,129,.1),rgba(16,185,129,.02));border:1px solid rgba(16,185,129,.25);border-left:3px solid var(--py-green);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--py-green-glow);display:block;margin-bottom:5px;font-family:var(--mono);font-size:.7rem;text-transform:uppercase;">⚠️ Common Mistake</strong>
Forgetting <code>self</code> as first parameter — every method errors.
</div>`
      },
      theory: {
        ur: `<h3>Yeh kya hai?</h3>
<p><code>__init__</code> ek <strong>special method</strong> hai jo object banate hi automatically call hota hai. Isse tum object ke attributes set karte ho — jaise naye student ka naam, age.</p>

<h3>Kaise kaam karta hai?</h3>
<div class="steps">
<ol>
<li><strong>Step 1:</strong> <code>Student("Ali", 21)</code> likho</li>
<li><strong>Step 2:</strong> Python naya object banata hai</li>
<li><strong>Step 3:</strong> <code>__init__(self, "Ali", 21)</code> khud call karta hai</li>
<li><strong>Step 4:</strong> <code>self.name = "Ali"</code>, <code>self.age = 21</code> set hota</li>
<li><strong>Step 5:</strong> Object ready</li>
</ol>
</div>

<h3>Basic example</h3>
<pre><span class="kw">class</span> <span class="fn">Student</span>:
    <span class="kw">def</span> <span class="fn">__init__</span>(self, name, age):
        self.name = name
        self.age = age

ali = <span class="fn">Student</span>(<span class="str">"Ali"</span>, <span class="num">21</span>)
<span class="fn">print</span>(ali.name)   <span class="cm"># Ali</span>
<span class="fn">print</span>(ali.age)    <span class="cm"># 21</span></pre>

<h3>Default values</h3>
<pre><span class="kw">class</span> <span class="fn">Student</span>:
    <span class="kw">def</span> <span class="fn">__init__</span>(self, name, age=<span class="num">18</span>):
        self.name = name
        self.age = age

ali = <span class="fn">Student</span>(<span class="str">"Ali"</span>)         <span class="cm"># age = 18</span>
sara = <span class="fn">Student</span>(<span class="str">"Sara"</span>, <span class="num">22</span>)   <span class="cm"># age = 22</span></pre>

<h3>Methods — object ke andar function</h3>
<pre><span class="kw">class</span> <span class="fn">Student</span>:
    <span class="kw">def</span> <span class="fn">__init__</span>(self, name, age):
        self.name = name
        self.age = age

    <span class="kw">def</span> <span class="fn">intro</span>(self):
        <span class="fn">print</span>(<span class="str">f"Main {self.name}, {self.age} saal"</span>)

ali = <span class="fn">Student</span>(<span class="str">"Ali"</span>, <span class="num">21</span>)
ali.intro()   <span class="cm"># Main Ali, 21 saal</span></pre>

<div class="real-life">
<div class="head">🌍 Real Life Example</div>
<p><strong>Scenario:</strong> Bank Account class.</p>
<pre style="margin-top:10px;margin-bottom:0;"><span class="kw">class</span> <span class="fn">BankAccount</span>:
    <span class="kw">def</span> <span class="fn">__init__</span>(self, owner, balance=<span class="num">0</span>):
        self.owner = owner
        self.balance = balance

    <span class="kw">def</span> <span class="fn">show</span>(self):
        <span class="fn">print</span>(<span class="str">f"{self.owner}: Rs {self.balance}"</span>)

acc1 = <span class="fn">BankAccount</span>(<span class="str">"Ali"</span>, <span class="num">5000</span>)
acc2 = <span class="fn">BankAccount</span>(<span class="str">"Sara"</span>)
acc1.show()   <span class="cm"># Ali: Rs 5000</span>
acc2.show()   <span class="cm"># Sara: Rs 0</span></pre>
</div>

<div class="warn-box">
<div class="head">⚠️ Common Mistakes</div>
<ul>
<li><code>self</code> parameter bhool jana</li>
<li><code>__init__</code> mein double underscore bhool jana</li>
<li>Method ke andar <code>self.attr</code> ki jagah <code>attr</code> likhna</li>
</ul>
</div>

<div class="pro-tip">
<div class="head">✨ Pro Tip</div>
<p><code>__init__</code> ko <strong>constructor</strong> kehte hain. Yeh object banate hi chal jata hai — arguments do aur kaam ho gaya.</p>
</div>`,
        en: `<h3>What is it?</h3>
<p><code>__init__</code> is a <strong>special method</strong> that runs automatically when an object is created. Use it to set object attributes.</p>

<h3>How does it work?</h3>
<div class="steps">
<ol>
<li><strong>Step 1:</strong> Write <code>Student("Ali", 21)</code></li>
<li><strong>Step 2:</strong> Python creates new object</li>
<li><strong>Step 3:</strong> Calls <code>__init__(self, "Ali", 21)</code></li>
<li><strong>Step 4:</strong> Sets <code>self.name = "Ali"</code>, <code>self.age = 21</code></li>
<li><strong>Step 5:</strong> Object ready</li>
</ol>
</div>

<h3>Basic example</h3>
<pre><span class="kw">class</span> <span class="fn">Student</span>:
    <span class="kw">def</span> <span class="fn">__init__</span>(self, name, age):
        self.name = name
        self.age = age

ali = <span class="fn">Student</span>(<span class="str">"Ali"</span>, <span class="num">21</span>)</pre>

<h3>Default values</h3>
<pre><span class="kw">def</span> <span class="fn">__init__</span>(self, name, age=<span class="num">18</span>):
    self.name = name
    self.age = age</pre>

<h3>Methods</h3>
<pre><span class="kw">class</span> <span class="fn">Student</span>:
    <span class="kw">def</span> <span class="fn">__init__</span>(self, name, age):
        self.name = name
        self.age = age

    <span class="kw">def</span> <span class="fn">intro</span>(self):
        <span class="fn">print</span>(<span class="str">f"I'm {self.name}, {self.age}"</span>)

ali = <span class="fn">Student</span>(<span class="str">"Ali"</span>, <span class="num">21</span>)
ali.intro()</pre>

<div class="real-life">
<div class="head">🌍 Real Life Example</div>
<pre style="margin-top:10px;margin-bottom:0;"><span class="kw">class</span> <span class="fn">BankAccount</span>:
    <span class="kw">def</span> <span class="fn">__init__</span>(self, owner, balance=<span class="num">0</span>):
        self.owner = owner
        self.balance = balance

acc = <span class="fn">BankAccount</span>(<span class="str">"Ali"</span>, <span class="num">5000</span>)
<span class="fn">print</span>(acc.balance)   <span class="cm"># 5000</span></pre>
</div>

<div class="warn-box">
<div class="head">⚠️ Common Mistakes</div>
<ul>
<li>Forgetting <code>self</code></li>
<li>Single underscore <code>_init_</code></li>
<li>Using <code>attr</code> instead of <code>self.attr</code></li>
</ul>
</div>

<div class="pro-tip">
<div class="head">✨ Pro Tip</div>
<p><code>__init__</code> is the <strong>constructor</strong> — runs at object creation.</p>
</div>`
      },
      quiz: [
        { q: { ur: "__init__ kab chalta?", en: "When does __init__ run?" }, options: ["Manual call", "Object banate waqt", "Delete pe", "Class banate waqt"], answer: 1 },
        { q: { ur: "self kya hai?", en: "What is self?" }, options: ["Keyword", "Object reference", "Class", "Function"], answer: 1 },
        { q: { ur: "self.name = name kya karta?", en: "What does self.name = name do?" }, options: ["Local var", "Object attribute set", "Nothing", "Error"], answer: 1 },
        { q: { ur: "__init__ mein default value?", en: "Default value in __init__?" }, options: ["Not possible", "def __init__(self, age=18)", "Only strings", "Only numbers"], answer: 1 },
        { q: { ur: "self bhool jaye to?", en: "If self is missing?" }, options: ["Works fine", "Error in every method", "Auto-added", "Warning only"], answer: 1 }
      ]
    },

    /* ═══════════════════════════════════════════════════════
       TOPIC 3: Instance vs Class Variables
       ═══════════════════════════════════════════════════════ */
    {
      id: "instance-class-vars",
      title: { ur: "Instance vs Class Variables", en: "Instance vs Class Variables" },
      icon: "📦",
      code: {
        ur: `class Student:
    school = "Govt School"   # class variable

    def __init__(self, name):
        self.name = name     # instance variable

a = Student("Ali")
b = Student("Sara")

print(a.school)   # Govt School (sab ke liye same)
print(a.name)     # Ali
print(b.name)     # Sara

Student.school = "City School"
print(a.school)   # City School (sab ke liye badla)`,
        en: `class Student:
    school = "Govt School"   # class variable

    def __init__(self, name):
        self.name = name     # instance variable

a = Student("Ali")
b = Student("Sara")

print(a.school)   # Govt School (shared)
print(a.name)     # Ali
print(b.name)     # Sara

Student.school = "City School"
print(a.school)   # City School (changed for all)`
      },
      learn: {
        ur: `<h2 style="font-size:1.15rem;font-weight:800;margin-bottom:14px;">📦 Instance vs Class Variables</h2>
<p style="color:var(--text-soft);font-size:.93rem;margin-bottom:14px;">Do tarah ke variables hote hain — <strong>instance</strong> (har object ka apna) aur <strong>class</strong> (sab objects ke liye same).</p>

<div style="background:var(--code-bg);border:1px solid var(--code-border);border-radius:10px;overflow:hidden;margin-bottom:16px;font-family:var(--mono);font-size:.82rem;">
  <div style="display:grid;grid-template-columns:160px 1fr;padding:9px 14px;background:var(--code-bg-2);color:var(--py-blue-glow);font-weight:700;font-size:.68rem;text-transform:uppercase;">Type · Kahan · Kis ke liye</div>
  <div style="display:grid;grid-template-columns:160px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">Instance</span><span style="color:var(--text-soft);">self.name — har object ka apna</span></div>
  <div style="display:grid;grid-template-columns:160px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">Class</span><span style="color:var(--text-soft);">school — sab ke liye shared</span></div>
</div>

<div style="background:linear-gradient(135deg,rgba(75,139,190,.1),rgba(75,139,190,.03));border:1px solid rgba(75,139,190,.25);border-left:3px solid var(--py-blue);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--text);display:block;margin-bottom:3px;">💡 Kab kaunsa</strong>
<strong>Class var:</strong> jo sab ke liye same (school ka naam).<br>
<strong>Instance var:</strong> jo har object ka apna (student ka naam).
</div>

<div style="background:linear-gradient(135deg,rgba(16,185,129,.1),rgba(16,185,129,.02));border:1px solid rgba(16,185,129,.25);border-left:3px solid var(--py-green);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--py-green-glow);display:block;margin-bottom:5px;font-family:var(--mono);font-size:.7rem;text-transform:uppercase;">⚠️ Common Mistake</strong>
Instance var ko class ke bahar define karna — phir woh sab ke liye shared ho jata hai.
</div>`,
        en: `<h2 style="font-size:1.15rem;font-weight:800;margin-bottom:14px;">📦 Instance vs Class Variables</h2>
<p style="color:var(--text-soft);font-size:.93rem;margin-bottom:14px;">Two kinds of variables — <strong>instance</strong> (each object's own) and <strong>class</strong> (shared by all).</p>

<div style="background:var(--code-bg);border:1px solid var(--code-border);border-radius:10px;overflow:hidden;margin-bottom:16px;font-family:var(--mono);font-size:.82rem;">
  <div style="display:grid;grid-template-columns:160px 1fr;padding:9px 14px;background:var(--code-bg-2);color:var(--py-blue-glow);font-weight:700;font-size:.68rem;text-transform:uppercase;">Type · Where · For whom</div>
  <div style="display:grid;grid-template-columns:160px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">Instance</span><span style="color:var(--text-soft);">self.name — each object's own</span></div>
  <div style="display:grid;grid-template-columns:160px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">Class</span><span style="color:var(--text-soft);">school — shared by all</span></div>
</div>

<div style="background:linear-gradient(135deg,rgba(75,139,190,.1),rgba(75,139,190,.03));border:1px solid rgba(75,139,190,.25);border-left:3px solid var(--py-blue);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--text);display:block;margin-bottom:3px;">💡 Which to use</strong>
<strong>Class var:</strong> same for all (school name).<br>
<strong>Instance var:</strong> unique per object (student name).
</div>

<div style="background:linear-gradient(135deg,rgba(16,185,129,.1),rgba(16,185,129,.02));border:1px solid rgba(16,185,129,.25);border-left:3px solid var(--py-green);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--py-green-glow);display:block;margin-bottom:5px;font-family:var(--mono);font-size:.7rem;text-transform:uppercase;">⚠️ Common Mistake</strong>
Defining an instance var outside class body — it becomes shared.
</div>`
      },
      theory: {
        ur: `<h3>Yeh kya hai?</h3>
<p>Har object ke apne <strong>instance variables</strong> hote hain (jaise name). Lekin <strong>class variables</strong> sab objects ke beech shared hote hain (jaise school ka naam).</p>

<h3>Kaise kaam karta hai?</h3>
<div class="steps">
<ol>
<li><strong>Step 1:</strong> Class body mein variable → class variable</li>
<li><strong>Step 2:</strong> <code>self.x</code> → instance variable</li>
<li><strong>Step 3:</strong> Instance var class var ko <strong>chhupa</strong> deta hai</li>
<li><strong>Step 4:</strong> Class var change → sab objects pe asar</li>
</ol>
</div>

<h3>Example</h3>
<pre><span class="kw">class</span> <span class="fn">Student</span>:
    school = <span class="str">"Govt School"</span>   <span class="cm"># class var</span>

    <span class="kw">def</span> <span class="fn">__init__</span>(self, name):
        self.name = name       <span class="cm"># instance var</span>

a = <span class="fn">Student</span>(<span class="str">"Ali"</span>)
b = <span class="fn">Student</span>(<span class="str">"Sara"</span>)

<span class="fn">print</span>(a.name)     <span class="cm"># Ali</span>
<span class="fn">print</span>(b.name)     <span class="cm"># Sara</span>
<span class="fn">print</span>(a.school)   <span class="cm"># Govt School</span>
<span class="fn">print</span>(b.school)   <span class="cm"># Govt School</span></pre>

<h3>Class var change</h3>
<pre>Student.school = <span class="str">"City School"</span>
<span class="fn">print</span>(a.school)   <span class="cm"># City School</span>
<span class="fn">print</span>(b.school)   <span class="cm"># City School</span></pre>

<h3>Instance var override</h3>
<pre>a.school = <span class="str">"Elite School"</span>   <span class="cm"># sirf a ke liye</span>
<span class="fn">print</span>(a.school)   <span class="cm"># Elite School</span>
<span class="fn">print</span>(b.school)   <span class="cm"># City School</span></pre>

<h3>Naam badalne ka asar</h3>
<pre><span class="cm"># Sirf a ka naam badla</span>
a.name = <span class="str">"Ahmad"</span>
<span class="fn">print</span>(a.name)   <span class="cm"># Ahmad</span>
<span class="fn">print</span>(b.name)   <span class="cm"># Sara</span></pre>

<div class="real-life">
<div class="head">🌍 Real Life Example</div>
<p><strong>Scenario:</strong> Bank — har account ka balance alag, lekin bank ka naam same.</p>
<pre style="margin-top:10px;margin-bottom:0;"><span class="kw">class</span> <span class="fn">BankAccount</span>:
    bank_name = <span class="str">"Meezan Bank"</span>   <span class="cm"># class var</span>

    <span class="kw">def</span> <span class="fn">__init__</span>(self, owner, balance):
        self.owner = owner         <span class="cm"># instance var</span>
        self.balance = balance     <span class="cm"># instance var</span>

a = <span class="fn">BankAccount</span>(<span class="str">"Ali"</span>, <span class="num">5000</span>)
b = <span class="fn">BankAccount</span>(<span class="str">"Sara"</span>, <span class="num">9000</span>)
<span class="fn">print</span>(a.bank_name, a.balance)   <span class="cm"># Meezan Bank 5000</span>
<span class="fn">print</span>(b.bank_name, b.balance)   <span class="cm"># Meezan Bank 9000</span></pre>
</div>

<div class="warn-box">
<div class="head">⚠️ Common Mistakes</div>
<ul>
<li>Class var ko <code>self.</code> se change karna — naya instance var ban jata hai</li>
<li>Mutable class var (list) — sab objects share karte hain, bug!</li>
<li>Instance var <code>__init__</code> ke bahar set karna</li>
</ul>
</div>

<div class="pro-tip">
<div class="head">✨ Pro Tip</div>
<p>Class var sirf constants ke liye — jaise <code>pi = 3.14</code>, ya <code>bank_name = "HBL"</code>. Baqi sab instance var.</p>
</div>`,
        en: `<h3>What is it?</h3>
<p>Each object has its own <strong>instance variables</strong> (like name). But <strong>class variables</strong> are shared across all objects (like school name).</p>

<h3>How does it work?</h3>
<div class="steps">
<ol>
<li><strong>Step 1:</strong> Variable in class body → class var</li>
<li><strong>Step 2:</strong> <code>self.x</code> → instance var</li>
<li><strong>Step 3:</strong> Instance var <strong>shadows</strong> class var</li>
<li><strong>Step 4:</strong> Changing class var affects all objects</li>
</ol>
</div>

<h3>Example</h3>
<pre><span class="kw">class</span> <span class="fn">Student</span>:
    school = <span class="str">"Govt School"</span>   <span class="cm"># class var</span>

    <span class="kw">def</span> <span class="fn">__init__</span>(self, name):
        self.name = name       <span class="cm"># instance var</span>

a = <span class="fn">Student</span>(<span class="str">"Ali"</span>)
b = <span class="fn">Student</span>(<span class="str">"Sara"</span>)

<span class="fn">print</span>(a.school)   <span class="cm"># Govt School</span>
<span class="fn">print</span>(b.school)   <span class="cm"># Govt School</span></pre>

<h3>Changing class var</h3>
<pre>Student.school = <span class="str">"City School"</span>
<span class="fn">print</span>(a.school)   <span class="cm"># City School</span></pre>

<h3>Instance override</h3>
<pre>a.school = <span class="str">"Elite School"</span>
<span class="fn">print</span>(b.school)   <span class="cm"># City School</span></pre>

<div class="real-life">
<div class="head">🌍 Real Life Example</div>
<p><strong>Scenario:</strong> Bank — same bank name, different balances.</p>
<pre style="margin-top:10px;margin-bottom:0;"><span class="kw">class</span> <span class="fn">BankAccount</span>:
    bank_name = <span class="str">"Meezan Bank"</span>

    <span class="kw">def</span> <span class="fn">__init__</span>(self, owner, balance):
        self.owner = owner
        self.balance = balance</pre>
</div>

<div class="warn-box">
<div class="head">⚠️ Common Mistakes</div>
<ul>
<li>Changing class var via <code>self.</code> — creates new instance var</li>
<li>Mutable class var (list) — shared across all, bug!</li>
<li>Setting instance var outside <code>__init__</code></li>
</ul>
</div>

<div class="pro-tip">
<div class="head">✨ Pro Tip</div>
<p>Use class var only for constants. Everything else → instance var.</p>
</div>`
      },
      quiz: [
        { q: { ur: "Class variable kab use karo?", en: "When to use class variable?" }, options: ["Har object ka alag", "Shared by all objects", "Never", "Only in __init__"], answer: 1 },
        { q: { ur: "Instance variable kitne objects share karte?", en: "Instance var shared by how many objects?" }, options: ["1", "2", "All", "None"], answer: 0 },
        { q: { ur: "Class var change karne se?", en: "Changing class var affects?" }, options: ["Sirf ek", "Sab objects", "Koi nahi", "Sirf naye"], answer: 1 },
        { q: { ur: "a.school = 'X' se kya?", en: "a.school = 'X' does what?" }, options: ["Class var badla", "Sirf a ke liye naya instance var", "Error", "Sab ke liye"], answer: 1 },
        { q: { ur: "Mutable class var se masla?", en: "Problem with mutable class var?" }, options: ["Slow", "Sab objects share karte hain", "Error", "No problem"], answer: 1 }
      ]
    },

    /* ═══════════════════════════════════════════════════════
       TOPIC 4: Methods — Instance, Class, Static
       ═══════════════════════════════════════════════════════ */
    {
      id: "methods",
      title: { ur: "Methods — Instance, Class, Static", en: "Methods — Instance, Class, Static" },
      icon: "⚙️",
      code: {
        ur: `class Student:
    school = "Govt School"

    def __init__(self, name):
        self.name = name

    # Instance method — self
    def intro(self):
        print(f"Main {self.name}")

    # Class method — cls
    @classmethod
    def change_school(cls, name):
        cls.school = name

    # Static method — na self na cls
    @staticmethod
    def is_pass(marks):
        return marks >= 40

a = Student("Ali")
a.intro()                         # Ali
Student.change_school("City")     # sab ke liye
print(Student.school)             # City
print(Student.is_pass(85))        # True`,
        en: `class Student:
    school = "Govt School"

    def __init__(self, name):
        self.name = name

    # Instance method — self
    def intro(self):
        print(f"I'm {self.name}")

    # Class method — cls
    @classmethod
    def change_school(cls, name):
        cls.school = name

    # Static method — no self, no cls
    @staticmethod
    def is_pass(marks):
        return marks >= 40

a = Student("Ali")
a.intro()
Student.change_school("City")
print(Student.school)             # City
print(Student.is_pass(85))        # True`
      },
      learn: {
        ur: `<h2 style="font-size:1.15rem;font-weight:800;margin-bottom:14px;">⚙️ Methods — Instance, Class, Static</h2>
<p style="color:var(--text-soft);font-size:.93rem;margin-bottom:14px;">Class ke andar teen tarah ke methods hote hain — har ek ka apna kaam aur pehla parameter.</p>

<div style="background:var(--code-bg);border:1px solid var(--code-border);border-radius:10px;overflow:hidden;margin-bottom:16px;font-family:var(--mono);font-size:.82rem;">
  <div style="display:grid;grid-template-columns:140px 100px 1fr;padding:9px 14px;background:var(--code-bg-2);color:var(--py-blue-glow);font-weight:700;font-size:.68rem;text-transform:uppercase;">Type · 1st param · Access</div>
  <div style="display:grid;grid-template-columns:140px 100px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">Instance</span><span style="color:var(--py-amber);">self</span><span style="color:var(--text-soft);">Object + class data</span></div>
  <div style="display:grid;grid-template-columns:140px 100px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">Class</span><span style="color:var(--py-amber);">cls</span><span style="color:var(--text-soft);">Sirf class data</span></div>
  <div style="display:grid;grid-template-columns:140px 100px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">Static</span><span style="color:var(--py-amber);">—</span><span style="color:var(--text-soft);">Na self, na cls</span></div>
</div>

<div style="background:linear-gradient(135deg,rgba(75,139,190,.1),rgba(75,139,190,.03));border:1px solid rgba(75,139,190,.25);border-left:3px solid var(--py-blue);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--text);display:block;margin-bottom:3px;">💡 Farak yaad rakho</strong>
<strong>self</strong> = is object ka data.<br>
<strong>cls</strong> = poori class ka data.<br>
<strong>none</strong> = na object, na class — sirf utility.
</div>

<div style="background:linear-gradient(135deg,rgba(16,185,129,.1),rgba(16,185,129,.02));border:1px solid rgba(16,185,129,.25);border-left:3px solid var(--py-green);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--py-green-glow);display:block;margin-bottom:5px;font-family:var(--mono);font-size:.7rem;text-transform:uppercase;">⚠️ Common Mistake</strong>
<code>@classmethod</code> bhoolna — phir method instance ban jata hai.
</div>`,
        en: `<h2 style="font-size:1.15rem;font-weight:800;margin-bottom:14px;">⚙️ Methods — Instance, Class, Static</h2>
<p style="color:var(--text-soft);font-size:.93rem;margin-bottom:14px;">Three kinds of methods — each with a purpose and first parameter.</p>

<div style="background:var(--code-bg);border:1px solid var(--code-border);border-radius:10px;overflow:hidden;margin-bottom:16px;font-family:var(--mono);font-size:.82rem;">
  <div style="display:grid;grid-template-columns:140px 100px 1fr;padding:9px 14px;background:var(--code-bg-2);color:var(--py-blue-glow);font-weight:700;font-size:.68rem;text-transform:uppercase;">Type · 1st param · Access</div>
  <div style="display:grid;grid-template-columns:140px 100px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">Instance</span><span style="color:var(--py-amber);">self</span><span style="color:var(--text-soft);">Object + class data</span></div>
  <div style="display:grid;grid-template-columns:140px 100px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">Class</span><span style="color:var(--py-amber);">cls</span><span style="color:var(--text-soft);">Class data only</span></div>
  <div style="display:grid;grid-template-columns:140px 100px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">Static</span><span style="color:var(--py-amber);">—</span><span style="color:var(--text-soft);">Neither self nor cls</span></div>
</div>

<div style="background:linear-gradient(135deg,rgba(75,139,190,.1),rgba(75,139,190,.03));border:1px solid rgba(75,139,190,.25);border-left:3px solid var(--py-blue);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--text);display:block;margin-bottom:3px;">💡 Remember</strong>
<strong>self</strong> = this object.<br>
<strong>cls</strong> = the class.<br>
<strong>none</strong> = utility only.
</div>

<div style="background:linear-gradient(135deg,rgba(16,185,129,.1),rgba(16,185,129,.02));border:1px solid rgba(16,185,129,.25);border-left:3px solid var(--py-green);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--py-green-glow);display:block;margin-bottom:5px;font-family:var(--mono);font-size:.7rem;text-transform:uppercase;">⚠️ Common Mistake</strong>
Forgetting <code>@classmethod</code> — becomes instance method.
</div>`
      },
      theory: {
        ur: `<h3>Yeh kya hai?</h3>
<p>Class ke andar <strong>methods</strong> functions hote hain. Teen types:</p>

<h3>1. Instance Method</h3>
<p>Sabse aam — <code>self</code> se object ka data use karta hai.</p>
<pre><span class="kw">class</span> <span class="fn">Student</span>:
    <span class="kw">def</span> <span class="fn">__init__</span>(self, name):
        self.name = name

    <span class="kw">def</span> <span class="fn">intro</span>(self):                <span class="cm"># instance method</span>
        <span class="fn">print</span>(<span class="str">f"Main {self.name}"</span>)

a = <span class="fn">Student</span>(<span class="str">"Ali"</span>)
a.intro()</pre>

<h3>2. Class Method</h3>
<p><code>@classmethod</code> decorator + <code>cls</code> parameter. Class var access/change ke liye.</p>
<pre><span class="kw">class</span> <span class="fn">Student</span>:
    school = <span class="str">"Govt School"</span>

    <span class="kw">@classmethod</span>
    <span class="kw">def</span> <span class="fn">change_school</span>(cls, name):
        cls.school = name

<span class="fn">Student</span>.change_school(<span class="str">"City School"</span>)
<span class="fn">print</span>(<span class="fn">Student</span>.school)   <span class="cm"># City School</span></pre>

<h3>3. Static Method</h3>
<p><code>@staticmethod</code> — na <code>self</code>, na <code>cls</code>. Sirf utility function jo class se related hai.</p>
<pre><span class="kw">class</span> <span class="fn">MathHelper</span>:
    <span class="kw">@staticmethod</span>
    <span class="kw">def</span> <span class="fn">is_even</span>(n):
        <span class="kw">return</span> n % <span class="num">2</span> == <span class="num">0</span>

<span class="fn">print</span>(<span class="fn">MathHelper</span>.is_even(<span class="num">4</span>))   <span class="cm"># True</span></pre>

<h3>Comparison</h3>
<table class="theory-table">
<div class="row head"><div>Type</div><div>Param</div><div>Access</div></div>
<div class="row"><div class="label">Instance</div><div class="value">self</div><div class="value">Object + Class</div></div>
<div class="row"><div class="label">Class</div><div class="value">cls</div><div class="value">Class only</div></div>
<div class="row"><div class="label">Static</div><div class="value">—</div><div class="value">Utility</div></div>
</table>

<h3>Kaunsa kab use karo</h3>
<pre><span class="kw">class</span> <span class="fn">Circle</span>:
    pi = <span class="num">3.14</span>

    <span class="kw">def</span> <span class="fn">__init__</span>(self, r):
        self.r = r

    <span class="kw">def</span> <span class="fn">area</span>(self):                <span class="cm"># instance</span>
        <span class="kw">return</span> <span class="fn">Circle</span>.pi * self.r ** <span class="num">2</span>

    <span class="kw">@classmethod</span>
    <span class="kw">def</span> <span class="fn">from_diameter</span>(cls, d):     <span class="cm"># alternative constructor</span>
        <span class="kw">return</span> <span class="fn">cls</span>(d / <span class="num">2</span>)

    <span class="kw">@staticmethod</span>
    <span class="kw">def</span> <span class="fn">is_valid_radius</span>(r):        <span class="cm"># utility</span>
        <span class="kw">return</span> r > <span class="num">0</span></pre>

<div class="real-life">
<div class="head">🌍 Real Life Example</div>
<pre style="margin-top:10px;margin-bottom:0;"><span class="kw">class</span> <span class="fn">Date</span>:
    <span class="kw">def</span> <span class="fn">__init__</span>(self, d, m, y):
        self.d, self.m, self.y = d, m, y

    <span class="kw">@classmethod</span>
    <span class="kw">def</span> <span class="fn">from_string</span>(cls, s):
        d, m, y = <span class="fn">map</span>(<span class="fn">int</span>, s.split(<span class="str">"-"</span>))
        <span class="kw">return</span> <span class="fn">cls</span>(d, m, y)

    <span class="kw">@staticmethod</span>
    <span class="kw">def</span> <span class="fn">is_leap</span>(y):
        <span class="kw">return</span> y % <span class="num">4</span> == <span class="num">0</span>

d = <span class="fn">Date</span>.from_string(<span class="str">"15-08-2024"</span>)
<span class="fn">print</span>(d.d, d.m, d.y)   <span class="cm"># 15 8 2024</span></pre>
</div>

<div class="warn-box">
<div class="head">⚠️ Common Mistakes</div>
<ul>
<li>Static method mein <code>self</code> use karna — error</li>
<li><code>@classmethod</code> ke bina class var change karna</li>
<li>Instance method ko class pe call karna — <code>Student.intro()</code> fail</li>
</ul>
</div>

<div class="pro-tip">
<div class="head">✨ Pro Tip</div>
<p>Alternative constructor ke liye <code>@classmethod</code> use karo — jaise <code>Date.from_string("15-08-2024")</code>. Yeh common pattern hai.</p>
</div>`,
        en: `<h3>What is it?</h3>
<p><strong>Methods</strong> are functions inside a class. Three types:</p>

<h3>1. Instance Method</h3>
<p>Most common — uses <code>self</code> to access object data.</p>
<pre><span class="kw">class</span> <span class="fn">Student</span>:
    <span class="kw">def</span> <span class="fn">intro</span>(self):                <span class="cm"># instance method</span>
        <span class="fn">print</span>(<span class="str">f"I'm {self.name}"</span>)

a = <span class="fn">Student</span>()
a.intro()</pre>

<h3>2. Class Method</h3>
<p><code>@classmethod</code> + <code>cls</code>. For class var access/change.</p>
<pre><span class="kw">class</span> <span class="fn">Student</span>:
    school = <span class="str">"Govt School"</span>

    <span class="kw">@classmethod</span>
    <span class="kw">def</span> <span class="fn">change_school</span>(cls, name):
        cls.school = name

<span class="fn">Student</span>.change_school(<span class="str">"City School"</span>)</pre>

<h3>3. Static Method</h3>
<p><code>@staticmethod</code> — no <code>self</code>, no <code>cls</code>. Utility function.</p>
<pre><span class="kw">class</span> <span class="fn">MathHelper</span>:
    <span class="kw">@staticmethod</span>
    <span class="kw">def</span> <span class="fn">is_even</span>(n):
        <span class="kw">return</span> n % <span class="num">2</span> == <span class="num">0</span></pre>

<h3>Comparison</h3>
<table class="theory-table">
<div class="row head"><div>Type</div><div>Param</div><div>Access</div></div>
<div class="row"><div class="label">Instance</div><div class="value">self</div><div class="value">Object + Class</div></div>
<div class="row"><div class="label">Class</div><div class="value">cls</div><div class="value">Class only</div></div>
<div class="row"><div class="label">Static</div><div class="value">—</div><div class="value">Utility</div></div>
</table>

<div class="real-life">
<div class="head">🌍 Real Life Example</div>
<pre style="margin-top:10px;margin-bottom:0;"><span class="kw">class</span> <span class="fn">Date</span>:
    <span class="kw">@classmethod</span>
    <span class="kw">def</span> <span class="fn">from_string</span>(cls, s):
        d, m, y = <span class="fn">map</span>(<span class="fn">int</span>, s.split(<span class="str">"-"</span>))
        <span class="kw">return</span> <span class="fn">cls</span>(d, m, y)

d = <span class="fn">Date</span>.from_string(<span class="str">"15-08-2024"</span>)</pre>
</div>

<div class="warn-box">
<div class="head">⚠️ Common Mistakes</div>
<ul>
<li>Using <code>self</code> in static method</li>
<li>Changing class var without <code>@classmethod</code></li>
<li>Calling instance method on class</li>
</ul>
</div>

<div class="pro-tip">
<div class="head">✨ Pro Tip</div>
<p>Use <code>@classmethod</code> for alternative constructors.</p>
</div>`
      },
      quiz: [
        { q: { ur: "Instance method ka first param?", en: "First param of instance method?" }, options: ["cls", "self", "obj", "None"], answer: 1 },
        { q: { ur: "Class method ka decorator?", en: "Decorator for class method?" }, options: ["@staticmethod", "@classmethod", "@method", "None"], answer: 1 },
        { q: { ur: "Static method ka first param?", en: "First param of static method?" }, options: ["self", "cls", "Kuch nahi", "obj"], answer: 2 },
        { q: { ur: "Class var change kaunsa method?", en: "Which method for class var change?" }, options: ["Instance", "Class", "Static", "Any"], answer: 1 },
        { q: { ur: "Alternative constructor ke liye?", en: "For alternative constructor?" }, options: ["@staticmethod", "@classmethod", "Instance", "None"], answer: 1 }
      ]
    },

    /* ═══════════════════════════════════════════════════════
       TOPIC 5: Inheritance
       ═══════════════════════════════════════════════════════ */
    {
      id: "inheritance",
      title: { ur: "Inheritance", en: "Inheritance" },
      icon: "👪",
      code: {
        ur: `# Parent class
class Animal:
    def __init__(self, name):
        self.name = name

    def speak(self):
        print(f"{self.name} awaz karta hai")

# Child class
class Dog(Animal):
    def speak(self):
        print(f"{self.name} bhow bhow!")

class Cat(Animal):
    def speak(self):
        print(f"{self.name} meow meow!")

d = Dog("Tommy")
c = Cat("Whiskers")

d.speak()   # Tommy bhow bhow!
c.speak()   # Whiskers meow meow!`,
        en: `# Parent class
class Animal:
    def __init__(self, name):
        self.name = name

    def speak(self):
        print(f"{self.name} makes a sound")

# Child class
class Dog(Animal):
    def speak(self):
        print(f"{self.name} woof woof!")

class Cat(Animal):
    def speak(self):
        print(f"{self.name} meow meow!")

d = Dog("Tommy")
c = Cat("Whiskers")

d.speak()   # Tommy woof woof!
c.speak()   # Whiskers meow meow!`
      },
      learn: {
        ur: `<h2 style="font-size:1.15rem;font-weight:800;margin-bottom:14px;">👪 Inheritance</h2>
<p style="color:var(--text-soft);font-size:.93rem;margin-bottom:14px;">Inheritance ka matlab hai <strong>parent class ki properties child class</strong> ko milna — code reuse ka sabse bara faida.</p>

<div style="background:var(--code-bg);border:1px solid var(--code-border);border-radius:10px;overflow:hidden;margin-bottom:16px;font-family:var(--mono);font-size:.82rem;">
  <div style="display:grid;grid-template-columns:140px 1fr;padding:9px 14px;background:var(--code-bg-2);color:var(--py-blue-glow);font-weight:700;font-size:.68rem;text-transform:uppercase;">Term · Matlab</div>
  <div style="display:grid;grid-template-columns:140px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">Parent</span><span style="color:var(--text-soft);">Base class — jisse inherit karo</span></div>
  <div style="display:grid;grid-template-columns:140px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">Child</span><span style="color:var(--text-soft);">Derived class — jo inherit kare</span></div>
  <div style="display:grid;grid-template-columns:140px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">super()</span><span style="color:var(--text-soft);">Parent ke method call</span></div>
</div>

<div style="background:linear-gradient(135deg,rgba(75,139,190,.1),rgba(75,139,190,.03));border:1px solid rgba(75,139,190,.25);border-left:3px solid var(--py-blue);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--text);display:block;margin-bottom:3px;">💡 Kyun</strong>
Common code parent mein likho — child classes apni khaas cheez add karein.
</div>

<div style="background:linear-gradient(135deg,rgba(16,185,129,.1),rgba(16,185,129,.02));border:1px solid rgba(16,185,129,.25);border-left:3px solid var(--py-green);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--py-green-glow);display:block;margin-bottom:5px;font-family:var(--mono);font-size:.7rem;text-transform:uppercase;">⚠️ Common Mistake</strong>
<code>super().__init__()</code> call na karna — parent ke attributes set nahi honge.
</div>`,
        en: `<h2 style="font-size:1.15rem;font-weight:800;margin-bottom:14px;">👪 Inheritance</h2>
<p style="color:var(--text-soft);font-size:.93rem;margin-bottom:14px;">Inheritance means a <strong>child class gets the parent's properties</strong> — the biggest benefit of code reuse.</p>

<div style="background:var(--code-bg);border:1px solid var(--code-border);border-radius:10px;overflow:hidden;margin-bottom:16px;font-family:var(--mono);font-size:.82rem;">
  <div style="display:grid;grid-template-columns:140px 1fr;padding:9px 14px;background:var(--code-bg-2);color:var(--py-blue-glow);font-weight:700;font-size:.68rem;text-transform:uppercase;">Term · Meaning</div>
  <div style="display:grid;grid-template-columns:140px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">Parent</span><span style="color:var(--text-soft);">Base class — inherits from</span></div>
  <div style="display:grid;grid-template-columns:140px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">Child</span><span style="color:var(--text-soft);">Derived class — inherits</span></div>
  <div style="display:grid;grid-template-columns:140px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">super()</span><span style="color:var(--text-soft);">Call parent method</span></div>
</div>

<div style="background:linear-gradient(135deg,rgba(75,139,190,.1),rgba(75,139,190,.03));border:1px solid rgba(75,139,190,.25);border-left:3px solid var(--py-blue);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--text);display:block;margin-bottom:3px;">💡 Why</strong>
Put common code in parent — children add their unique parts.
</div>

<div style="background:linear-gradient(135deg,rgba(16,185,129,.1),rgba(16,185,129,.02));border:1px solid rgba(16,185,129,.25);border-left:3px solid var(--py-green);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--py-green-glow);display:block;margin-bottom:5px;font-family:var(--mono);font-size:.7rem;text-transform:uppercase;">⚠️ Common Mistake</strong>
Not calling <code>super().__init__()</code> — parent's attributes won't set.
</div>`
      },
      theory: {
        ur: `<h3>Yeh kya hai?</h3>
<p>Inheritance mein ek <strong>child class</strong> parent class ke saare methods aur attributes <strong>free mein</strong> le leti hai — phir apni cheezein add karti hai ya badalti hai.</p>

<h3>Kaise kaam karta hai?</h3>
<div class="steps">
<ol>
<li><strong>Step 1:</strong> <code>class Child(Parent):</code> likho</li>
<li><strong>Step 2:</strong> Child ke paas parent ke sab methods aa gaye</li>
<li><strong>Step 3:</strong> Child apna method add kar sakti</li>
<li><strong>Step 4:</strong> Child parent ka method <strong>override</strong> kar sakti</li>
<li><strong>Step 5:</strong> <code>super()</code> se parent ka method call karo</li>
</ol>
</div>

<h3>Basic inheritance</h3>
<pre><span class="kw">class</span> <span class="fn">Animal</span>:
    <span class="kw">def</span> <span class="fn">__init__</span>(self, name):
        self.name = name

    <span class="kw">def</span> <span class="fn">eat</span>(self):
        <span class="fn">print</span>(<span class="str">f"{self.name} khana kha raha hai"</span>)

<span class="kw">class</span> <span class="fn">Dog</span>(<span class="fn">Animal</span>):     <span class="cm"># inheritance</span>
    <span class="kw">def</span> <span class="fn">bark</span>(self):
        <span class="fn">print</span>(<span class="str">f"{self.name} bhow bhow"</span>)

d = <span class="fn">Dog</span>(<span class="str">"Tommy"</span>)
d.eat()    <span class="cm"># Tommy khana kha raha hai (parent se)</span>
d.bark()   <span class="cm"># Tommy bhow bhow (apna)</span></pre>

<h3>super() — parent ka method call</h3>
<pre><span class="kw">class</span> <span class="fn">Animal</span>:
    <span class="kw">def</span> <span class="fn">__init__</span>(self, name):
        self.name = name

<span class="kw">class</span> <span class="fn">Dog</span>(<span class="fn">Animal</span>):
    <span class="kw">def</span> <span class="fn">__init__</span>(self, name, breed):
        <span class="fn">super</span>().__init__(name)   <span class="cm"># parent init call</span>
        self.breed = breed

d = <span class="fn">Dog</span>(<span class="str">"Tommy"</span>, <span class="str">"Labrador"</span>)
<span class="fn">print</span>(d.name, d.breed)   <span class="cm"># Tommy Labrador</span></pre>

<h3>Method override</h3>
<pre><span class="kw">class</span> <span class="fn">Animal</span>:
    <span class="kw">def</span> <span class="fn">speak</span>(self):
        <span class="fn">print</span>(<span class="str">"Koi awaz"</span>)

<span class="kw">class</span> <span class="fn">Dog</span>(<span class="fn">Animal</span>):
    <span class="kw">def</span> <span class="fn">speak</span>(self):              <span class="cm"># override</span>
        <span class="fn">print</span>(<span class="str">"Bhow bhow"</span>)

<span class="fn">Dog</span>().speak()   <span class="cm"># Bhow bhow</span></pre>

<h3>Multiple inheritance</h3>
<pre><span class="kw">class</span> <span class="fn">A</span>:
    <span class="kw">def</span> <span class="fn">hello</span>(self):
        <span class="fn">print</span>(<span class="str">"A"</span>)

<span class="kw">class</span> <span class="fn">B</span>:
    <span class="kw">def</span> <span class="fn">bye</span>(self):
        <span class="fn">print</span>(<span class="str">"B"</span>)

<span class="kw">class</span> <span class="fn">C</span>(<span class="fn">A</span>, <span class="fn">B</span>):    <span class="cm"># dono se</span>
    <span class="kw">pass</span>

c = <span class="fn">C</span>()
c.hello()   <span class="cm"># A</span>
c.bye()     <span class="cm"># B</span></pre>

<div class="real-life">
<div class="head">🌍 Real Life Example</div>
<pre style="margin-top:10px;margin-bottom:0;"><span class="kw">class</span> <span class="fn">Employee</span>:
    <span class="kw">def</span> <span class="fn">__init__</span>(self, name, salary):
        self.name = name
        self.salary = salary

    <span class="kw">def</span> <span class="fn">show</span>(self):
        <span class="fn">print</span>(<span class="str">f"{self.name}: Rs {self.salary}"</span>)

<span class="kw">class</span> <span class="fn">Manager</span>(<span class="fn">Employee</span>):
    <span class="kw">def</span> <span class="fn">__init__</span>(self, name, salary, team_size):
        <span class="fn">super</span>().__init__(name, salary)
        self.team_size = team_size

m = <span class="fn">Manager</span>(<span class="str">"Ali"</span>, <span class="num">100000</span>, <span class="num">5</span>)
m.show()   <span class="cm"># Ali: Rs 100000</span></pre>
</div>

<div class="warn-box">
<div class="head">⚠️ Common Mistakes</div>
<ul>
<li><code>super().__init__()</code> bhoolna</li>
<li>Parent ko child ke baad define karna</li>
<li>Deep inheritance chain — complex ho jata hai</li>
</ul>
</div>

<div class="pro-tip">
<div class="head">✨ Pro Tip</div>
<p><code>isinstance(obj, Class)</code> se check karo ke object kis class ka hai — inheritance chain bhi check karta hai.</p>
</div>`,
        en: `<h3>What is it?</h3>
<p>Inheritance lets a <strong>child class</strong> get all methods and attributes from a <strong>parent class</strong> — then add or override.</p>

<h3>How does it work?</h3>
<div class="steps">
<ol>
<li><strong>Step 1:</strong> Write <code>class Child(Parent):</code></li>
<li><strong>Step 2:</strong> Child gets all parent methods</li>
<li><strong>Step 3:</strong> Child can add new methods</li>
<li><strong>Step 4:</strong> Child can <strong>override</strong> parent methods</li>
<li><strong>Step 5:</strong> <code>super()</code> calls parent's method</li>
</ol>
</div>

<h3>Basic inheritance</h3>
<pre><span class="kw">class</span> <span class="fn">Animal</span>:
    <span class="kw">def</span> <span class="fn">eat</span>(self):
        <span class="fn">print</span>(<span class="str">f"{self.name} is eating"</span>)

<span class="kw">class</span> <span class="fn">Dog</span>(<span class="fn">Animal</span>):
    <span class="kw">def</span> <span class="fn">bark</span>(self):
        <span class="fn">print</span>(<span class="str">"Woof!"</span>)

d = <span class="fn">Dog</span>()
d.eat()    <span class="cm"># from parent</span>
d.bark()   <span class="cm"># own</span></pre>

<h3>super()</h3>
<pre><span class="kw">class</span> <span class="fn">Dog</span>(<span class="fn">Animal</span>):
    <span class="kw">def</span> <span class="fn">__init__</span>(self, name, breed):
        <span class="fn">super</span>().__init__(name)
        self.breed = breed</pre>

<h3>Overriding</h3>
<pre><span class="kw">class</span> <span class="fn">Dog</span>(<span class="fn">Animal</span>):
    <span class="kw">def</span> <span class="fn">speak</span>(self):       <span class="cm"># override</span>
        <span class="fn">print</span>(<span class="str">"Woof!"</span>)</pre>

<h3>Multiple inheritance</h3>
<pre><span class="kw">class</span> <span class="fn">C</span>(<span class="fn">A</span>, <span class="fn">B</span>):
    <span class="kw">pass</span></pre>

<div class="real-life">
<div class="head">🌍 Real Life Example</div>
<pre style="margin-top:10px;margin-bottom:0;"><span class="kw">class</span> <span class="fn">Employee</span>:
    <span class="kw">def</span> <span class="fn">__init__</span>(self, name, salary):
        self.name = name
        self.salary = salary

<span class="kw">class</span> <span class="fn">Manager</span>(<span class="fn">Employee</span>):
    <span class="kw">def</span> <span class="fn">__init__</span>(self, name, salary, team_size):
        <span class="fn">super</span>().__init__(name, salary)
        self.team_size = team_size</pre>
</div>

<div class="warn-box">
<div class="head">⚠️ Common Mistakes</div>
<ul>
<li>Forgetting <code>super().__init__()</code></li>
<li>Defining parent after child</li>
<li>Deep inheritance chains</li>
</ul>
</div>

<div class="pro-tip">
<div class="head">✨ Pro Tip</div>
<p><code>isinstance(obj, Class)</code> checks inheritance chain too.</p>
</div>`
      },
      quiz: [
        { q: { ur: "Inheritance mein child kya leta?", en: "What does child get?" }, options: ["Kuch nahi", "Parent ke methods/attributes", "Sirf variables", "Sirf functions"], answer: 1 },
        { q: { ur: "Parent class ka doosra naam?", en: "Another name for parent class?" }, options: ["Child", "Base class", "Sub class", "Derived"], answer: 1 },
        { q: { ur: "super() ka kaam?", en: "Purpose of super()?" }, options: ["Child call", "Parent ka method call", "Delete", "Create"], answer: 1 },
        { q: { ur: "Method override kya hai?", en: "What is method override?" }, options: ["Parent method delete", "Child apna same naam ka method", "Copy", "Error"], answer: 1 },
        { q: { ur: "Multiple inheritance?", en: "Multiple inheritance?" }, options: ["Not possible", "class C(A, B)", "class C: A, B", "class A(B, C)"], answer: 1 }
      ]
    },

    /* ═══════════════════════════════════════════════════════
       TOPIC 6: Polymorphism
       ═══════════════════════════════════════════════════════ */
    {
      id: "polymorphism",
      title: { ur: "Polymorphism", en: "Polymorphism" },
      icon: "🎭",
      code: {
        ur: `# Ek naam, kai forms
class Dog:
    def speak(self):
        return "Bhow bhow"

class Cat:
    def speak(self):
        return "Meow meow"

class Cow:
    def speak(self):
        return "Moo moo"

# Ek function — sab ke liye
def animal_sound(animal):
    print(animal.speak())

for a in [Dog(), Cat(), Cow()]:
    animal_sound(a)`,
        en: `# One name, many forms
class Dog:
    def speak(self):
        return "Woof woof"

class Cat:
    def speak(self):
        return "Meow meow"

class Cow:
    def speak(self):
        return "Moo moo"

# One function — for all
def animal_sound(animal):
    print(animal.speak())

for a in [Dog(), Cat(), Cow()]:
    animal_sound(a)`
      },
      learn: {
        ur: `<h2 style="font-size:1.15rem;font-weight:800;margin-bottom:14px;">🎭 Polymorphism</h2>
<p style="color:var(--text-soft);font-size:.93rem;margin-bottom:14px;">Polymorphism ka matlab hai <strong>"ek naam, kai forms"</strong> — same method alag-alag classes mein alag tarah kaam kare.</p>

<div style="background:var(--code-bg);border:1px solid var(--code-border);border-radius:10px;overflow:hidden;margin-bottom:16px;font-family:var(--mono);font-size:.82rem;">
  <div style="display:grid;grid-template-columns:160px 1fr;padding:9px 14px;background:var(--code-bg-2);color:var(--py-blue-glow);font-weight:700;font-size:.68rem;text-transform:uppercase;">Type · Matlab</div>
  <div style="display:grid;grid-template-columns:160px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">Method Override</span><span style="color:var(--text-soft);">Child same naam ka method</span></div>
  <div style="display:grid;grid-template-columns:160px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">Duck Typing</span><span style="color:var(--text-soft);">Kaam dikhaye, type na dekho</span></div>
</div>

<div style="background:linear-gradient(135deg,rgba(75,139,190,.1),rgba(75,139,190,.03));border:1px solid rgba(75,139,190,.25);border-left:3px solid var(--py-blue);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--text);display:block;margin-bottom:3px;">💡 Kyun</strong>
Ek function likho — <code>animal.speak()</code> — aur woh har type ke animal ke saath kaam kare.
</div>

<div style="background:linear-gradient(135deg,rgba(16,185,129,.1),rgba(16,185,129,.02));border:1px solid rgba(16,185,129,.25);border-left:3px solid var(--py-green);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--py-green-glow);display:block;margin-bottom:5px;font-family:var(--mono);font-size:.7rem;text-transform:uppercase;">⚠️ Common Mistake</strong>
Har class mein alag method naam rakhna — polymorphism ka faida nahi milta.
</div>`,
        en: `<h2 style="font-size:1.15rem;font-weight:800;margin-bottom:14px;">🎭 Polymorphism</h2>
<p style="color:var(--text-soft);font-size:.93rem;margin-bottom:14px;">Polymorphism means <strong>"one name, many forms"</strong> — same method name behaves differently in different classes.</p>

<div style="background:var(--code-bg);border:1px solid var(--code-border);border-radius:10px;overflow:hidden;margin-bottom:16px;font-family:var(--mono);font-size:.82rem;">
  <div style="display:grid;grid-template-columns:160px 1fr;padding:9px 14px;background:var(--code-bg-2);color:var(--py-blue-glow);font-weight:700;font-size:.68rem;text-transform:uppercase;">Type · Meaning</div>
  <div style="display:grid;grid-template-columns:160px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">Override</span><span style="color:var(--text-soft);">Child same-name method</span></div>
  <div style="display:grid;grid-template-columns:160px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">Duck Typing</span><span style="color:var(--text-soft);">Behavior over type</span></div>
</div>

<div style="background:linear-gradient(135deg,rgba(75,139,190,.1),rgba(75,139,190,.03));border:1px solid rgba(75,139,190,.25);border-left:3px solid var(--py-blue);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--text);display:block;margin-bottom:3px;">💡 Why</strong>
Write one function — <code>animal.speak()</code> — works for every type.
</div>

<div style="background:linear-gradient(135deg,rgba(16,185,129,.1),rgba(16,185,129,.02));border:1px solid rgba(16,185,129,.25);border-left:3px solid var(--py-green);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--py-green-glow);display:block;margin-bottom:5px;font-family:var(--mono);font-size:.7rem;text-transform:uppercase;">⚠️ Common Mistake</strong>
Different method names in each class — no polymorphism benefit.
</div>`
      },
      theory: {
        ur: `<h3>Yeh kya hai?</h3>
<p>Polymorphism = "bahu roop". Python mein <strong>same method naam</strong> alag classes mein alag kaam kare. Ek function sab types ke saath chal jaye.</p>

<h3>Example — method override se</h3>
<pre><span class="kw">class</span> <span class="fn">Dog</span>:
    <span class="kw">def</span> <span class="fn">speak</span>(self):
        <span class="kw">return</span> <span class="str">"Bhow bhow"</span>

<span class="kw">class</span> <span class="fn">Cat</span>:
    <span class="kw">def</span> <span class="fn">speak</span>(self):
        <span class="kw">return</span> <span class="str">"Meow meow"</span>

<span class="kw">class</span> <span class="fn">Cow</span>:
    <span class="kw">def</span> <span class="fn">speak</span>(self):
        <span class="kw">return</span> <span class="str">"Moo moo"</span>

<span class="kw">for</span> a <span class="kw">in</span> [<span class="fn">Dog</span>(), <span class="fn">Cat</span>(), <span class="fn">Cow</span>()]:
    <span class="fn">print</span>(a.speak())</pre>

<h3>Duck typing</h3>
<p>Python type nahi dekhta — sirf yeh dekhta hai ke method kaam karta hai ya nahi.</p>
<pre><span class="kw">def</span> <span class="fn">animal_sound</span>(animal):
    <span class="fn">print</span>(animal.speak())

<span class="fn">animal_sound</span>(<span class="fn">Dog</span>())   <span class="cm"># Bhow bhow</span>
<span class="fn">animal_sound</span>(<span class="fn">Cat</span>())   <span class="cm"># Meow meow</span></pre>

<h3>Built-in polymorphism</h3>
<pre><span class="fn">print</span>(<span class="fn">len</span>(<span class="str">"hello"</span>))     <span class="cm"># 5 — string pe</span>
<span class="fn">print</span>(<span class="fn">len</span>([<span class="num">1</span>,<span class="num">2</span>,<span class="num">3</span>]))   <span class="cm"># 3 — list pe</span>

<span class="fn">print</span>(<span class="num">2</span> + <span class="num">3</span>)            <span class="cm"># 5 — numbers</span>
<span class="fn">print</span>(<span class="str">"a"</span> + <span class="str">"b"</span>)        <span class="cm"># ab — strings</span></pre>

<h3>Operator overloading (polymorphism)</h3>
<pre><span class="kw">class</span> <span class="fn">Point</span>:
    <span class="kw">def</span> <span class="fn">__init__</span>(self, x, y):
        self.x, self.y = x, y

    <span class="kw">def</span> <span class="fn">__add__</span>(self, other):
        <span class="kw">return</span> <span class="fn">Point</span>(self.x + other.x, self.y + other.y)

p1 = <span class="fn">Point</span>(<span class="num">1</span>, <span class="num">2</span>)
p2 = <span class="fn">Point</span>(<span class="num">3</span>, <span class="num">4</span>)
p3 = p1 + p2
<span class="fn">print</span>(p3.x, p3.y)   <span class="cm"># 4 6</span></pre>

<div class="real-life">
<div class="head">🌍 Real Life Example</div>
<pre style="margin-top:10px;margin-bottom:0;"><span class="kw">class</span> <span class="fn">Payment</span>:
    <span class="kw">def</span> <span class="fn">pay</span>(self, amount):
        <span class="kw">pass</span>

<span class="kw">class</span> <span class="fn">CardPayment</span>(<span class="fn">Payment</span>):
    <span class="kw">def</span> <span class="fn">pay</span>(self, amount):
        <span class="fn">print</span>(<span class="str">f"Card se {amount} ada kiya"</span>)

<span class="kw">class</span> <span class="fn">CashPayment</span>(<span class="fn">Payment</span>):
    <span class="kw">def</span> <span class="fn">pay</span>(self, amount):
        <span class="fn">print</span>(<span class="str">f"Cash {amount} diya"</span>)

<span class="kw">for</span> method <span class="kw">in</span> [<span class="fn">CardPayment</span>(), <span class="fn">CashPayment</span>()]:
    method.pay(<span class="num">1000</span>)</pre>
</div>

<div class="warn-box">
<div class="head">⚠️ Common Mistakes</div>
<ul>
<li>Method naam alag rakhna — polymorphism toot jata</li>
<li>Type check karna — duck typing ka faida nahi</li>
<li>Override mein <code>super()</code> bhoolna agar parent ka kaam bhi chahiye</li>
</ul>
</div>

<div class="pro-tip">
<div class="head">✨ Pro Tip</div>
<p>Python <strong>duck typing</strong> follow karta hai: "Agar woh batakh ki tarah chalta hai aur quack karta hai, to woh batakh hai." Type se matlab nahi — method se matlab hai.</p>
</div>`,
        en: `<h3>What is it?</h3>
<p>Polymorphism = "many forms". In Python, the <strong>same method name</strong> works differently across classes. One function works for all types.</p>

<h3>Example — method override</h3>
<pre><span class="kw">class</span> <span class="fn">Dog</span>:
    <span class="kw">def</span> <span class="fn">speak</span>(self):
        <span class="kw">return</span> <span class="str">"Woof"</span>

<span class="kw">class</span> <span class="fn">Cat</span>:
    <span class="kw">def</span> <span class="fn">speak</span>(self):
        <span class="kw">return</span> <span class="str">"Meow"</span>

<span class="kw">for</span> a <span class="kw">in</span> [<span class="fn">Dog</span>(), <span class="fn">Cat</span>()]:
    <span class="fn">print</span>(a.speak())</pre>

<h3>Duck typing</h3>
<pre><span class="kw">def</span> <span class="fn">animal_sound</span>(animal):
    <span class="fn">print</span>(animal.speak())

<span class="fn">animal_sound</span>(<span class="fn">Dog</span>())
<span class="fn">animal_sound</span>(<span class="fn">Cat</span>())</pre>

<h3>Built-in polymorphism</h3>
<pre><span class="fn">len</span>(<span class="str">"hello"</span>)     <span class="cm"># 5</span>
<span class="fn">len</span>([<span class="num">1</span>,<span class="num">2</span>,<span class="num">3</span>])   <span class="cm"># 3</span></pre>

<div class="real-life">
<div class="head">🌍 Real Life Example</div>
<pre style="margin-top:10px;margin-bottom:0;"><span class="kw">class</span> <span class="fn">Payment</span>:
    <span class="kw">def</span> <span class="fn">pay</span>(self, amount):
        <span class="kw">pass</span>

<span class="kw">class</span> <span class="fn">CardPayment</span>(<span class="fn">Payment</span>):
    <span class="kw">def</span> <span class="fn">pay</span>(self, amount):
        <span class="fn">print</span>(<span class="str">f"Paid {amount} via Card"</span>)

<span class="kw">class</span> <span class="fn">CashPayment</span>(<span class="fn">Payment</span>):
    <span class="kw">def</span> <span class="fn">pay</span>(self, amount):
        <span class="fn">print</span>(<span class="str">f"Paid {amount} in Cash"</span>)</pre>
</div>

<div class="warn-box">
<div class="head">⚠️ Common Mistakes</div>
<ul>
<li>Different method names — breaks polymorphism</li>
<li>Type checking — loses duck typing benefit</li>
</ul>
</div>

<div class="pro-tip">
<div class="head">✨ Pro Tip</div>
<p>Duck typing: "If it walks like a duck and quacks like a duck, it's a duck." Type doesn't matter — method does.</p>
</div>`
      },
      quiz: [
        { q: { ur: "Polymorphism ka matlab?", en: "Meaning of polymorphism?" }, options: ["Ek roop", "Kai roop", "No roop", "Do roop"], answer: 1 },
        { q: { ur: "Duck typing kya kehta?", en: "What does duck typing say?" }, options: ["Type important", "Method important, type nahi", "Only ducks", "No classes"], answer: 1 },
        { q: { ur: "len() polymorphism ka example?", en: "len() is an example of?" }, options: ["Inheritance", "Polymorphism", "Encapsulation", "Abstraction"], answer: 1 },
        { q: { ur: "Override se polymorphism kaise?", en: "How does override create polymorphism?" }, options: ["Same method, different behavior", "Different method", "No relation", "Only variables"], answer: 0 },
        { q: { ur: "Polymorphism ka faida?", en: "Benefit of polymorphism?" }, options: ["More code", "Ek function, kai types", "Slower", "Fewer classes"], answer: 1 }
      ]
    },

    /* ═══════════════════════════════════════════════════════
       TOPIC 7: Encapsulation
       ═══════════════════════════════════════════════════════ */
    {
      id: "encapsulation",
      title: { ur: "Encapsulation", en: "Encapsulation" },
      icon: "🔒",
      code: {
        ur: `class BankAccount:
    def __init__(self, owner, balance):
        self.owner = owner
        self.__balance = balance   # private

    def deposit(self, amount):
        if amount > 0:
            self.__balance += amount

    def get_balance(self):
        return self.__balance

acc = BankAccount("Ali", 5000)
acc.deposit(2000)
print(acc.get_balance())   # 7000

# acc.__balance  # AttributeError (private)`,
        en: `class BankAccount:
    def __init__(self, owner, balance):
        self.owner = owner
        self.__balance = balance   # private

    def deposit(self, amount):
        if amount > 0:
            self.__balance += amount

    def get_balance(self):
        return self.__balance

acc = BankAccount("Ali", 5000)
acc.deposit(2000)
print(acc.get_balance())   # 7000

# acc.__balance  # AttributeError (private)`
      },
      learn: {
        ur: `<h2 style="font-size:1.15rem;font-weight:800;margin-bottom:14px;">🔒 Encapsulation</h2>
<p style="color:var(--text-soft);font-size:.93rem;margin-bottom:14px;">Encapsulation ka matlab hai data ko <strong>chhupa kar</strong> sirf zaroori methods se access dena — data safe rahe.</p>

<div style="background:var(--code-bg);border:1px solid var(--code-border);border-radius:10px;overflow:hidden;margin-bottom:16px;font-family:var(--mono);font-size:.82rem;">
  <div style="display:grid;grid-template-columns:160px 1fr;padding:9px 14px;background:var(--code-bg-2);color:var(--py-blue-glow);font-weight:700;font-size:.68rem;text-transform:uppercase;">Prefix · Access</div>
  <div style="display:grid;grid-template-columns:160px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">name</span><span style="color:var(--text-soft);">Public — koi bhi</span></div>
  <div style="display:grid;grid-template-columns:160px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">_name</span><span style="color:var(--text-soft);">Protected — convention</span></div>
  <div style="display:grid;grid-template-columns:160px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">__name</span><span style="color:var(--text-soft);">Private — name mangling</span></div>
</div>

<div style="background:linear-gradient(135deg,rgba(75,139,190,.1),rgba(75,139,190,.03));border:1px solid rgba(75,139,190,.25);border-left:3px solid var(--py-blue);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--text);display:block;margin-bottom:3px;">💡 Kyun</strong>
Bank balance ko koi direct change na kar sake — sirf <code>deposit()</code> se ho.
</div>

<div style="background:linear-gradient(135deg,rgba(16,185,129,.1),rgba(16,185,129,.02));border:1px solid rgba(16,185,129,.25);border-left:3px solid var(--py-green);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--py-green-glow);display:block;margin-bottom:5px;font-family:var(--mono);font-size:.7rem;text-transform:uppercase;">⚠️ Common Mistake</strong>
<code>__balance</code> ko bahar se access karna — <code>AttributeError</code> aata hai.
</div>`,
        en: `<h2 style="font-size:1.15rem;font-weight:800;margin-bottom:14px;">🔒 Encapsulation</h2>
<p style="color:var(--text-soft);font-size:.93rem;margin-bottom:14px;">Encapsulation means <strong>hiding data</strong> and allowing access only through specific methods — keeping data safe.</p>

<div style="background:var(--code-bg);border:1px solid var(--code-border);border-radius:10px;overflow:hidden;margin-bottom:16px;font-family:var(--mono);font-size:.82rem;">
  <div style="display:grid;grid-template-columns:160px 1fr;padding:9px 14px;background:var(--code-bg-2);color:var(--py-blue-glow);font-weight:700;font-size:.68rem;text-transform:uppercase;">Prefix · Access</div>
  <div style="display:grid;grid-template-columns:160px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">name</span><span style="color:var(--text-soft);">Public</span></div>
  <div style="display:grid;grid-template-columns:160px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">_name</span><span style="color:var(--text-soft);">Protected — convention</span></div>
  <div style="display:grid;grid-template-columns:160px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">__name</span><span style="color:var(--text-soft);">Private — name mangling</span></div>
</div>

<div style="background:linear-gradient(135deg,rgba(75,139,190,.1),rgba(75,139,190,.03));border:1px solid rgba(75,139,190,.25);border-left:3px solid var(--py-blue);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--text);display:block;margin-bottom:3px;">💡 Why</strong>
Nobody should change bank balance directly — only via <code>deposit()</code>.
</div>

<div style="background:linear-gradient(135deg,rgba(16,185,129,.1),rgba(16,185,129,.02));border:1px solid rgba(16,185,129,.25);border-left:3px solid var(--py-green);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--py-green-glow);display:block;margin-bottom:5px;font-family:var(--mono);font-size:.7rem;text-transform:uppercase;">⚠️ Common Mistake</strong>
Accessing <code>__balance</code> from outside — <code>AttributeError</code>.
</div>`
      },
      theory: {
        ur: `<h3>Yeh kya hai?</h3>
<p>Encapsulation data aur methods ko ek <strong>capsule</strong> mein daalta hai, aur data ko bahar se <strong>chhupa</strong> deta hai. Public, protected, private — teen levels.</p>

<h3>Python mein 3 levels</h3>
<table class="theory-table">
<div class="row head"><div>Prefix</div><div>Level</div><div>Access</div></div>
<div class="row"><div class="label">name</div><div class="value">Public</div><div class="value">Koi bhi</div></div>
<div class="row"><div class="label">_name</div><div class="value">Protected</div><div class="value">Convention: class andar</div></div>
<div class="row"><div class="label">__name</div><div class="value">Private</div><div class="value">Sirf class ke andar</div></div>
</table>

<h3>Private attribute</h3>
<pre><span class="kw">class</span> <span class="fn">BankAccount</span>:
    <span class="kw">def</span> <span class="fn">__init__</span>(self, owner, balance):
        self.owner = owner
        self.__balance = balance   <span class="cm"># private</span>

    <span class="kw">def</span> <span class="fn">deposit</span>(self, amount):
        <span class="kw">if</span> amount > <span class="num">0</span>:
            self.__balance += amount

    <span class="kw">def</span> <span class="fn">get_balance</span>(self):
        <span class="kw">return</span> self.__balance

acc = <span class="fn">BankAccount</span>(<span class="str">"Ali"</span>, <span class="num">5000</span>)
acc.deposit(<span class="num">2000</span>)
<span class="fn">print</span>(acc.get_balance())   <span class="cm"># 7000</span>

<span class="cm"># acc.__balance = 99999999   # yeh kaam nahi karega</span></pre>

<h3>Name mangling</h3>
<pre><span class="kw">class</span> <span class="fn">Test</span>:
    <span class="kw">def</span> <span class="fn">__init__</span>(self):
        self.__secret = <span class="num">42</span>

t = <span class="fn">Test</span>()
<span class="fn">print</span>(t._Test__secret)   <span class="cm"># 42 (workaround)</span></pre>

<h3>Getters & Setters</h3>
<pre><span class="kw">class</span> <span class="fn">Person</span>:
    <span class="kw">def</span> <span class="fn">__init__</span>(self, age):
        self._age = age

    <span class="kw">def</span> <span class="fn">get_age</span>(self):
        <span class="kw">return</span> self._age

    <span class="kw">def</span> <span class="fn">set_age</span>(self, age):
        <span class="kw">if</span> age > <span class="num">0</span>:
            self._age = age
        <span class="kw">else</span>:
            <span class="fn">print</span>(<span class="str">"Age positive honi chahiye"</span>)</pre>

<h3>@property decorator</h3>
<pre><span class="kw">class</span> <span class="fn">Person</span>:
    <span class="kw">def</span> <span class="fn">__init__</span>(self, age):
        self._age = age

    <span class="kw">@property</span>
    <span class="kw">def</span> <span class="fn">age</span>(self):
        <span class="kw">return</span> self._age

    <span class="kw">@age.setter</span>
    <span class="kw">def</span> <span class="fn">age</span>(self, value):
        <span class="kw">if</span> value > <span class="num">0</span>:
            self._age = value

p = <span class="fn">Person</span>(<span class="num">21</span>)
<span class="fn">print</span>(p.age)     <span class="cm"># 21</span>
p.age = <span class="num">25</span>
<span class="fn">print</span>(p.age)     <span class="cm"># 25</span></pre>

<div class="real-life">
<div class="head">🌍 Real Life Example</div>
<pre style="margin-top:10px;margin-bottom:0;"><span class="kw">class</span> <span class="fn">Student</span>:
    <span class="kw">def</span> <span class="fn">__init__</span>(self, name):
        self.name = name
        self.__marks = <span class="num">0</span>

    <span class="kw">def</span> <span class="fn">set_marks</span>(self, m):
        <span class="kw">if</span> <span class="num">0</span> <= m <= <span class="num">100</span>:
            self.__marks = m
        <span class="kw">else</span>:
            <span class="fn">print</span>(<span class="str">"Marks 0-100 ke darmiyan!"</span>)

    <span class="kw">def</span> <span class="fn">get_marks</span>(self):
        <span class="kw">return</span> self.__marks

s = <span class="fn">Student</span>(<span class="str">"Ali"</span>)
s.set_marks(<span class="num">95</span>)
<span class="fn">print</span>(s.get_marks())   <span class="cm"># 95</span>
s.set_marks(<span class="num">150</span>)        <span class="cm"># Error message</span></pre>
</div>

<div class="warn-box">
<div class="head">⚠️ Common Mistakes</div>
<ul>
<li>Private attribute ko bahar se access karna</li>
<li>Har cheez private banana — sab kuch accessor se</li>
<li>Name mangling bhool jana — <code>_Class__name</code></li>
</ul>
</div>

<div class="pro-tip">
<div class="head">✨ Pro Tip</div>
<p><code>@property</code> use karo — getter/setter clean, aur <code>obj.attr</code> jaise access karo bina () ke.</p>
</div>`,
        en: `<h3>What is it?</h3>
<p>Encapsulation wraps data and methods into a <strong>capsule</strong>, <strong>hiding</strong> data from outside. Three levels: public, protected, private.</p>

<h3>3 levels in Python</h3>
<table class="theory-table">
<div class="row head"><div>Prefix</div><div>Level</div><div>Access</div></div>
<div class="row"><div class="label">name</div><div class="value">Public</div><div class="value">Anyone</div></div>
<div class="row"><div class="label">_name</div><div class="value">Protected</div><div class="value">Convention: inside</div></div>
<div class="row"><div class="label">__name</div><div class="value">Private</div><div class="value">Inside class only</div></div>
</table>

<h3>Private attribute</h3>
<pre><span class="kw">class</span> <span class="fn">BankAccount</span>:
    <span class="kw">def</span> <span class="fn">__init__</span>(self, owner, balance):
        self.owner = owner
        self.__balance = balance

    <span class="kw">def</span> <span class="fn">get_balance</span>(self):
        <span class="kw">return</span> self.__balance

acc = <span class="fn">BankAccount</span>(<span class="str">"Ali"</span>, <span class="num">5000</span>)
<span class="fn">print</span>(acc.get_balance())   <span class="cm"># 5000</span></pre>

<h3>Name mangling</h3>
<pre>t._Test__secret   <span class="cm"># workaround</span></pre>

<h3>@property decorator</h3>
<pre><span class="kw">class</span> <span class="fn">Person</span>:
    <span class="kw">def</span> <span class="fn">__init__</span>(self, age):
        self._age = age

    <span class="kw">@property</span>
    <span class="kw">def</span> <span class="fn">age</span>(self):
        <span class="kw">return</span> self._age

    <span class="kw">@age.setter</span>
    <span class="kw">def</span> <span class="fn">age</span>(self, value):
        <span class="kw">if</span> value > <span class="num">0</span>:
            self._age = value

p = <span class="fn">Person</span>(<span class="num">21</span>)
<span class="fn">print</span>(p.age)     <span class="cm"># 21</span>
p.age = <span class="num">25</span></pre>

<div class="real-life">
<div class="head">🌍 Real Life Example</div>
<pre style="margin-top:10px;margin-bottom:0;"><span class="kw">class</span> <span class="fn">Student</span>:
    <span class="kw">def</span> <span class="fn">__init__</span>(self):
        self.__marks = <span class="num">0</span>

    <span class="kw">def</span> <span class="fn">set_marks</span>(self, m):
        <span class="kw">if</span> <span class="num">0</span> <= m <= <span class="num">100</span>:
            self.__marks = m</pre>
</div>

<div class="warn-box">
<div class="head">⚠️ Common Mistakes</div>
<ul>
<li>Accessing private from outside</li>
<li>Making everything private</li>
<li>Forgetting name mangling</li>
</ul>
</div>

<div class="pro-tip">
<div class="head">✨ Pro Tip</div>
<p>Use <code>@property</code> — clean getter/setter with <code>obj.attr</code> syntax.</p>
</div>`
      },
      quiz: [
        { q: { ur: "Encapsulation ka maqsad?", en: "Purpose of encapsulation?" }, options: ["Speed", "Data hide + protect", "More code", "No purpose"], answer: 1 },
        { q: { ur: "__balance kaisa attribute?", en: "What is __balance?" }, options: ["Public", "Protected", "Private", "Static"], answer: 2 },
        { q: { ur: "Private attribute bahar se access?", en: "Private access from outside?" }, options: ["Works", "AttributeError", "Warning", "Auto-create"], answer: 1 },
        { q: { ur: "_name kya hai?", en: "What is _name?" }, options: ["Private", "Protected (convention)", "Public", "Static"], answer: 1 },
        { q: { ur: "@property ka faida?", en: "Benefit of @property?" }, options: ["Slower", "Method ko attribute jaise access", "Private", "No benefit"], answer: 1 }
      ]
    },

    /* ═══════════════════════════════════════════════════════
       TOPIC 8: Magic Methods
       ═══════════════════════════════════════════════════════ */
    {
      id: "magic-methods",
      title: { ur: "Magic Methods", en: "Magic Methods" },
      icon: "✨",
      code: {
        ur: `class Book:
    def __init__(self, title, pages):
        self.title = title
        self.pages = pages

    def __str__(self):
        return f"Book: {self.title}"

    def __len__(self):
        return self.pages

    def __eq__(self, other):
        return self.pages == other.pages

b1 = Book("Python", 300)
b2 = Book("Java", 300)

print(b1)              # Book: Python
print(len(b1))         # 300
print(b1 == b2)        # True (same pages)`,
        en: `class Book:
    def __init__(self, title, pages):
        self.title = title
        self.pages = pages

    def __str__(self):
        return f"Book: {self.title}"

    def __len__(self):
        return self.pages

    def __eq__(self, other):
        return self.pages == other.pages

b1 = Book("Python", 300)
b2 = Book("Java", 300)

print(b1)              # Book: Python
print(len(b1))         # 300
print(b1 == b2)        # True`
      },
      learn: {
        ur: `<h2 style="font-size:1.15rem;font-weight:800;margin-bottom:14px;">✨ Magic Methods</h2>
<p style="color:var(--text-soft);font-size:.93rem;margin-bottom:14px;">Magic methods (dunder methods) <code>__str__</code>, <code>__len__</code> jaise special methods hote hain jo Python ke built-in operations se juda hote hain.</p>

<div style="background:var(--code-bg);border:1px solid var(--code-border);border-radius:10px;overflow:hidden;margin-bottom:16px;font-family:var(--mono);font-size:.82rem;">
  <div style="display:grid;grid-template-columns:180px 1fr;padding:9px 14px;background:var(--code-bg-2);color:var(--py-blue-glow);font-weight:700;font-size:.68rem;text-transform:uppercase;">Method · Kab chalta</div>
  <div style="display:grid;grid-template-columns:180px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">__init__</span><span style="color:var(--text-soft);">Object bante waqt</span></div>
  <div style="display:grid;grid-template-columns:180px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">__str__</span><span style="color:var(--text-soft);">print() / str()</span></div>
  <div style="display:grid;grid-template-columns:180px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">__len__</span><span style="color:var(--text-soft);">len()</span></div>
  <div style="display:grid;grid-template-columns:180px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">__eq__</span><span style="color:var(--text-soft);">==</span></div>
  <div style="display:grid;grid-template-columns:180px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">__add__</span><span style="color:var(--text-soft);">+</span></div>
</div>

<div style="background:linear-gradient(135deg,rgba(75,139,190,.1),rgba(75,139,190,.03));border:1px solid rgba(75,139,190,.25);border-left:3px solid var(--py-blue);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--text);display:block;margin-bottom:3px;">💡 Kyun</strong>
Apni class ke objects built-in types jaise behave karein — <code>print()</code>, <code>len()</code>, <code>+</code>, <code>==</code>.
</div>

<div style="background:linear-gradient(135deg,rgba(16,185,129,.1),rgba(16,185,129,.02));border:1px solid rgba(16,185,129,.25);border-left:3px solid var(--py-green);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--py-green-glow);display:block;margin-bottom:5px;font-family:var(--mono);font-size:.7rem;text-transform:uppercase;">⚠️ Common Mistake</strong>
<code>__str__</code> bhoolna — print() pe <code><__main__.Book object></code> aata hai.
</div>`,
        en: `<h2 style="font-size:1.15rem;font-weight:800;margin-bottom:14px;">✨ Magic Methods</h2>
<p style="color:var(--text-soft);font-size:.93rem;margin-bottom:14px;">Magic methods (dunder methods) like <code>__str__</code>, <code>__len__</code> connect Python's built-in operations to your classes.</p>

<div style="background:var(--code-bg);border:1px solid var(--code-border);border-radius:10px;overflow:hidden;margin-bottom:16px;font-family:var(--mono);font-size:.82rem;">
  <div style="display:grid;grid-template-columns:180px 1fr;padding:9px 14px;background:var(--code-bg-2);color:var(--py-blue-glow);font-weight:700;font-size:.68rem;text-transform:uppercase;">Method · Triggers on</div>
  <div style="display:grid;grid-template-columns:180px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">__init__</span><span style="color:var(--text-soft);">Object creation</span></div>
  <div style="display:grid;grid-template-columns:180px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">__str__</span><span style="color:var(--text-soft);">print() / str()</span></div>
  <div style="display:grid;grid-template-columns:180px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">__len__</span><span style="color:var(--text-soft);">len()</span></div>
  <div style="display:grid;grid-template-columns:180px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">__eq__</span><span style="color:var(--text-soft);">==</span></div>
  <div style="display:grid;grid-template-columns:180px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">__add__</span><span style="color:var(--text-soft);">+</span></div>
</div>

<div style="background:linear-gradient(135deg,rgba(75,139,190,.1),rgba(75,139,190,.03));border:1px solid rgba(75,139,190,.25);border-left:3px solid var(--py-blue);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--text);display:block;margin-bottom:3px;">💡 Why</strong>
Make your objects behave like built-in types — <code>print()</code>, <code>len()</code>, <code>+</code>, <code>==</code>.
</div>

<div style="background:linear-gradient(135deg,rgba(16,185,129,.1),rgba(16,185,129,.02));border:1px solid rgba(16,185,129,.25);border-left:3px solid var(--py-green);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--py-green-glow);display:block;margin-bottom:5px;font-family:var(--mono);font-size:.7rem;text-transform:uppercase;">⚠️ Common Mistake</strong>
Forgetting <code>__str__</code> — print() shows <code><__main__.Book object></code>.
</div>`
      },
      theory: {
        ur: `<h3>Yeh kya hai?</h3>
<p>Magic methods <code>__method__</code> format mein hote hain. Yeh Python ke built-in operations (<code>print</code>, <code>len</code>, <code>+</code>, <code>==</code>) ke saath apni class ko jodte hain.</p>

<h3>Common magic methods</h3>
<table class="theory-table">
<div class="row head"><div>Method</div><div>Kaam</div><div>Trigger</div></div>
<div class="row"><div class="label">__init__</div><div class="value">Constructor</div><div class="value">Object creation</div></div>
<div class="row"><div class="label">__str__</div><div class="value">Readable string</div><div class="value">print(), str()</div></div>
<div class="row"><div class="label">__repr__</div><div class="value">Debug string</div><div class="value">repr()</div></div>
<div class="row"><div class="label">__len__</div><div class="value">Length</div><div class="value">len()</div></div>
<div class="row"><div class="label">__eq__</div><div class="value">Equality</div><div class="value">==</div></div>
<div class="row"><div class="label">__lt__</div><div class="value">Less than</div><div class="value"><</div></div>
<div class="row"><div class="label">__add__</div><div class="value">Addition</div><div class="value">+</div></div>
<div class="row"><div class="label">__getitem__</div><div class="value">Indexing</div><div class="value">obj[key]</div></div>
</table>

<h3>__str__ vs __repr__</h3>
<pre><span class="kw">class</span> <span class="fn">Book</span>:
    <span class="kw">def</span> <span class="fn">__init__</span>(self, title):
        self.title = title

    <span class="kw">def</span> <span class="fn">__str__</span>(self):
        <span class="kw">return</span> <span class="str">f"Book: {self.title}"</span>     <span class="cm"># user ke liye</span>

    <span class="kw">def</span> <span class="fn">__repr__</span>(self):
        <span class="kw">return</span> <span class="str">f"Book('{self.title}')"</span>   <span class="cm"># debug ke liye</span>

b = <span class="fn">Book</span>(<span class="str">"Python"</span>)
<span class="fn">print</span>(b)         <span class="cm"># Book: Python</span>
<span class="fn">print</span>(<span class="fn">repr</span>(b))  <span class="cm"># Book('Python')</span></pre>

<h3>Comparison methods</h3>
<pre><span class="kw">class</span> <span class="fn">Money</span>:
    <span class="kw">def</span> <span class="fn">__init__</span>(self, amount):
        self.amount = amount

    <span class="kw">def</span> <span class="fn">__eq__</span>(self, other):
        <span class="kw">return</span> self.amount == other.amount

    <span class="kw">def</span> <span class="fn">__lt__</span>(self, other):
        <span class="kw">return</span> self.amount < other.amount

m1 = <span class="fn">Money</span>(<span class="num">100</span>)
m2 = <span class="fn">Money</span>(<span class="num">200</span>)

<span class="fn">print</span>(m1 == m2)   <span class="cm"># False</span>
<span class="fn">print</span>(m1 < m2)    <span class="cm"># True</span></pre>

<h3>Arithmetic methods</h3>
<pre><span class="kw">class</span> <span class="fn">Vector</span>:
    <span class="kw">def</span> <span class="fn">__init__</span>(self, x, y):
        self.x, self.y = x, y

    <span class="kw">def</span> <span class="fn">__add__</span>(self, other):
        <span class="kw">return</span> <span class="fn">Vector</span>(self.x + other.x, self.y + other.y)

    <span class="kw">def</span> <span class="fn">__str__</span>(self):
        <span class="kw">return</span> <span class="str">f"({self.x}, {self.y})"</span>

v1 = <span class="fn">Vector</span>(<span class="num">1</span>, <span class="num">2</span>)
v2 = <span class="fn">Vector</span>(<span class="num">3</span>, <span class="num">4</span>)
<span class="fn">print</span>(v1 + v2)   <span class="cm"># (4, 6)</span></pre>

<h3>__getitem__ — indexing</h3>
<pre><span class="kw">class</span> <span class="fn">MyList</span>:
    <span class="kw">def</span> <span class="fn">__init__</span>(self, items):
        self.items = items

    <span class="kw">def</span> <span class="fn">__getitem__</span>(self, i):
        <span class="kw">return</span> self.items[i]

ml = <span class="fn">MyList</span>([<span class="num">10</span>, <span class="num">20</span>, <span class="num">30</span>])
<span class="fn">print</span>(ml[<span class="num">0</span>])   <span class="cm"># 10</span></pre>

<div class="real-life">
<div class="head">🌍 Real Life Example</div>
<pre style="margin-top:10px;margin-bottom:0;"><span class="kw">class</span> <span class="fn">ShoppingCart</span>:
    <span class="kw">def</span> <span class="fn">__init__</span>(self):
        self.items = []

    <span class="kw">def</span> <span class="fn">__len__</span>(self):
        <span class="kw">return</span> <span class="fn">len</span>(self.items)

    <span class="kw">def</span> <span class="fn">__str__</span>(self):
        <span class="kw">return</span> <span class="str">f"Cart: {len(self.items)} items"</span>

    <span class="kw">def</span> <span class="fn">__add__</span>(self, item):
        self.items.append(item)
        <span class="kw">return</span> self

cart = <span class="fn">ShoppingCart</span>()
cart + <span class="str">"Apple"</span> + <span class="str">"Milk"</span>
<span class="fn">print</span>(cart)   <span class="cm"># Cart: 2 items</span></pre>
</div>

<div class="warn-box">
<div class="head">⚠️ Common Mistakes</div>
<ul>
<li><code>__str__</code> mein non-string return karna — TypeError</li>
<li><code>__eq__</code> define karke <code>__hash__</code> na karna</li>
<li>Sirf <code>__repr__</code> define karna — print() pe woh use hoga</li>
</ul>
</div>

<div class="pro-tip">
<div class="head">✨ Pro Tip</div>
<p>Hamesha <code>__repr__</code> define karo — debugging mein kaam aata hai. <code>__str__</code> optional hai (na ho to <code>__repr__</code> use hota hai).</p>
</div>`,
        en: `<h3>What is it?</h3>
<p>Magic methods have <code>__method__</code> format. They connect your classes to Python's built-in operations (<code>print</code>, <code>len</code>, <code>+</code>, <code>==</code>).</p>

<h3>Common magic methods</h3>
<table class="theory-table">
<div class="row head"><div>Method</div><div>Does</div><div>Trigger</div></div>
<div class="row"><div class="label">__init__</div><div class="value">Constructor</div><div class="value">Object creation</div></div>
<div class="row"><div class="label">__str__</div><div class="value">Readable string</div><div class="value">print(), str()</div></div>
<div class="row"><div class="label">__repr__</div><div class="value">Debug string</div><div class="value">repr()</div></div>
<div class="row"><div class="label">__len__</div><div class="value">Length</div><div class="value">len()</div></div>
<div class="row"><div class="label">__eq__</div><div class="value">Equality</div><div class="value">==</div></div>
<div class="row"><div class="label">__add__</div><div class="value">Addition</div><div class="value">+</div></div>
</table>

<h3>__str__ vs __repr__</h3>
<pre><span class="kw">def</span> <span class="fn">__str__</span>(self):       <span class="cm"># user</span>
    <span class="kw">return</span> <span class="str">f"Book: {self.title}"</span>

<span class="kw">def</span> <span class="fn">__repr__</span>(self):      <span class="cm"># debug</span>
    <span class="kw">return</span> <span class="str">f"Book('{self.title}')"</span></pre>

<h3>Arithmetic methods</h3>
<pre><span class="kw">class</span> <span class="fn">Vector</span>:
    <span class="kw">def</span> <span class="fn">__add__</span>(self, other):
        <span class="kw">return</span> <span class="fn">Vector</span>(self.x + other.x, self.y + other.y)

v3 = v1 + v2</pre>

<div class="real-life">
<div class="head">🌍 Real Life Example</div>
<pre style="margin-top:10px;margin-bottom:0;"><span class="kw">class</span> <span class="fn">Cart</span>:
    <span class="kw">def</span> <span class="fn">__len__</span>(self):
        <span class="kw">return</span> <span class="fn">len</span>(self.items)

    <span class="kw">def</span> <span class="fn">__add__</span>(self, item):
        self.items.append(item)
        <span class="kw">return</span> self

cart + <span class="str">"Apple"</span> + <span class="str">"Milk"</span></pre>
</div>

<div class="warn-box">
<div class="head">⚠️ Common Mistakes</div>
<ul>
<li><code>__str__</code> returning non-string</li>
<li>Defining <code>__eq__</code> without <code>__hash__</code></li>
<li>Only <code>__repr__</code> — print() uses it</li>
</ul>
</div>

<div class="pro-tip">
<div class="head">✨ Pro Tip</div>
<p>Always define <code>__repr__</code> — helps debugging.</p>
</div>`
      },
      quiz: [
        { q: { ur: "print(obj) pe kaunsa method?", en: "print(obj) calls which?" }, options: ["__init__", "__str__", "__len__", "__add__"], answer: 1 },
        { q: { ur: "len(obj) ke liye kaunsa?", en: "len(obj) needs which?" }, options: ["__str__", "__len__", "__eq__", "__add__"], answer: 1 },
        { q: { ur: "obj1 == obj2 ke liye?", en: "obj1 == obj2 needs which?" }, options: ["__cmp__", "__eq__", "__equal__", "__compare__"], answer: 1 },
        { q: { ur: "obj1 + obj2 ke liye?", en: "obj1 + obj2 needs which?" }, options: ["__sum__", "__plus__", "__add__", "__concat__"], answer: 2 },
        { q: { ur: "__str__ return kya kare?", en: "__str__ must return?" }, options: ["Number", "String", "List", "Any"], answer: 1 }
      ]
    }

  ]
};