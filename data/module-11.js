// data/module-11.js
// Module 11: Working with Data — 3 topics

window.MODULES = window.MODULES || {};

window.MODULES["module-11"] = {
  id: "module-11",
  number: 11,
  slug: "working-with-data",
  title: { ur: "Working with Data", en: "Working with Data" },
  description: {
    ur: "APIs, data analysis basics, CSV processing",
    en: "APIs, data analysis basics, CSV processing"
  },
  duration: "15 minutes",
  level: "Advanced",
  locked: true,

  topics: [

    /* ═══════════════════════════════════════════════════════
       TOPIC 1: APIs — Data Fetching
       ═══════════════════════════════════════════════════════ */
    {
      id: "apis",
      title: { ur: "APIs — Data Fetching", en: "APIs — Data Fetching" },
      icon: "🌐",
      code: {
        ur: `import json
from urllib.request import urlopen

# Public API se data lana
url = "https://api.github.com/users/torvalds"
response = urlopen(url)
data = json.loads(response.read())

print(data["name"])       # Linus Torvalds
print(data["public_repos"])  # e.g. 250

# requests library (pip install requests)
import requests

r = requests.get("https://api.github.com/users/torvalds")
user = r.json()
print(user["name"])`,
        en: `import json
from urllib.request import urlopen

# Fetch data from public API
url = "https://api.github.com/users/torvalds"
response = urlopen(url)
data = json.loads(response.read())

print(data["name"])       # Linus Torvalds
print(data["public_repos"])  # e.g. 250

# requests library (pip install requests)
import requests

r = requests.get("https://api.github.com/users/torvalds")
user = r.json()
print(user["name"])`
      },
      learn: {
        ur: `<h2 style="font-size:1.15rem;font-weight:800;margin-bottom:14px;">🌐 APIs — Data Fetching</h2>
<p style="color:var(--text-soft);font-size:.93rem;margin-bottom:14px;">API ek <strong>darvaza</strong> hai jisse do programs baat karte hain. Python se data <strong>fetch</strong> karke JSON mein le aate hain.</p>

<div style="background:var(--code-bg);border:1px solid var(--code-border);border-radius:10px;overflow:hidden;margin-bottom:16px;font-family:var(--mono);font-size:.82rem;">
  <div style="display:grid;grid-template-columns:140px 1fr;padding:9px 14px;background:var(--code-bg-2);color:var(--py-blue-glow);font-weight:700;font-size:.68rem;text-transform:uppercase;">Term · Matlab</div>
  <div style="display:grid;grid-template-columns:140px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">API</span><span style="color:var(--text-soft);">Application Programming Interface</span></div>
  <div style="display:grid;grid-template-columns:140px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">REST</span><span style="color:var(--text-soft);">HTTP-based API style</span></div>
  <div style="display:grid;grid-template-columns:140px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">GET</span><span style="color:var(--text-soft);">Data maangna</span></div>
  <div style="display:grid;grid-template-columns:140px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">JSON</span><span style="color:var(--text-soft);">Data format</span></div>
</div>

<div style="background:linear-gradient(135deg,rgba(75,139,190,.1),rgba(75,139,190,.03));border:1px solid rgba(75,139,190,.25);border-left:3px solid var(--py-blue);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--text);display:block;margin-bottom:3px;">💡 Kyun</strong>
Twitter, GitHub, weather, WhatsApp — sab APIs dete hain. Data ko <strong>automatically</strong> lao.
</div>

<div style="background:linear-gradient(135deg,rgba(16,185,129,.1),rgba(16,185,129,.02));border:1px solid rgba(16,185,129,.25);border-left:3px solid var(--py-green);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--py-green-glow);display:block;margin-bottom:5px;font-family:var(--mono);font-size:.7rem;text-transform:uppercase;">⚠️ Common Mistake</strong>
Error checking na karna — <code>response.status_code</code> pehle dekho.
</div>`,
        en: `<h2 style="font-size:1.15rem;font-weight:800;margin-bottom:14px;">🌐 APIs — Data Fetching</h2>
<p style="color:var(--text-soft);font-size:.93rem;margin-bottom:14px;">An API is a <strong>door</strong> for two programs to talk. Python <strong>fetches</strong> data as JSON.</p>

<div style="background:var(--code-bg);border:1px solid var(--code-border);border-radius:10px;overflow:hidden;margin-bottom:16px;font-family:var(--mono);font-size:.82rem;">
  <div style="display:grid;grid-template-columns:140px 1fr;padding:9px 14px;background:var(--code-bg-2);color:var(--py-blue-glow);font-weight:700;font-size:.68rem;text-transform:uppercase;">Term · Meaning</div>
  <div style="display:grid;grid-template-columns:140px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">API</span><span style="color:var(--text-soft);">Application Programming Interface</span></div>
  <div style="display:grid;grid-template-columns:140px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">REST</span><span style="color:var(--text-soft);">HTTP-based API</span></div>
  <div style="display:grid;grid-template-columns:140px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">GET</span><span style="color:var(--text-soft);">Fetch data</span></div>
  <div style="display:grid;grid-template-columns:140px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">JSON</span><span style="color:var(--text-soft);">Data format</span></div>
</div>

<div style="background:linear-gradient(135deg,rgba(75,139,190,.1),rgba(75,139,190,.03));border:1px solid rgba(75,139,190,.25);border-left:3px solid var(--py-blue);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--text);display:block;margin-bottom:3px;">💡 Why</strong>
Twitter, GitHub, weather — all expose APIs. Get data <strong>automatically</strong>.
</div>

<div style="background:linear-gradient(135deg,rgba(16,185,129,.1),rgba(16,185,129,.02));border:1px solid rgba(16,185,129,.25);border-left:3px solid var(--py-green);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--py-green-glow);display:block;margin-bottom:5px;font-family:var(--mono);font-size:.7rem;text-transform:uppercase;">⚠️ Common Mistake</strong>
Not checking errors — always check <code>response.status_code</code>.
</div>`
      },
      theory: {
        ur: `<h3>Yeh kya hai?</h3>
<p>API ek <strong>URL</strong> hota hai jahan request bhejo, response (usually JSON) mein data milta hai. Python se dono ways: built-in <code>urllib</code> ya popular <code>requests</code>.</p>

<h3>Kaise kaam karta hai?</h3>
<div class="steps">
<ol>
<li><strong>Step 1:</strong> API URL pata karo</li>
<li><strong>Step 2:</strong> GET request bhejo</li>
<li><strong>Step 3:</strong> Response (JSON) receive karo</li>
<li><strong>Step 4:</strong> JSON ko dict mein parse karo</li>
<li><strong>Step 5:</strong> Keys se data nikalo</li>
</ol>
</div>

<h3>Built-in — urllib</h3>
<pre><span class="kw">import</span> json
<span class="kw">from</span> urllib.request <span class="kw">import</span> urlopen

url = <span class="str">"https://api.github.com/users/torvalds"</span>
response = <span class="fn">urlopen</span>(url)
data = json.loads(response.read())

<span class="fn">print</span>(data[<span class="str">"name"</span>])
<span class="fn">print</span>(data[<span class="str">"public_repos"</span>])</pre>

<h3>requests library (behtar)</h3>
<pre><span class="cm"># pip install requests</span>
<span class="kw">import</span> requests

r = requests.get(<span class="str">"https://api.github.com/users/torvalds"</span>)
user = r.json()

<span class="fn">print</span>(user[<span class="str">"name"</span>])
<span class="fn">print</span>(user[<span class="str">"followers"</span>])</pre>

<h3>Status code check</h3>
<pre>r = requests.get(url)

<span class="kw">if</span> r.status_code == <span class="num">200</span>:
    data = r.json()
<span class="kw">else</span>:
    <span class="fn">print</span>(<span class="str">f"Error: {r.status_code}"</span>)

<span class="cm"># 200 OK, 404 Not Found, 401 Unauthorized, 500 Server Error</span></pre>

<h3>Query parameters</h3>
<pre>params = {
    <span class="str">"latitude"</span>: <span class="num">24.86</span>,
    <span class="str">"longitude"</span>: <span class="num">67.01</span>,
    <span class="str">"current_weather"</span>: <span class="kw">True</span>
}

r = requests.get(<span class="str">"https://api.open-meteo.com/v1/forecast"</span>, params=params)
<span class="fn">print</span>(r.json())</pre>

<h3>Headers &amp; API keys</h3>
<pre>headers = {
    <span class="str">"Authorization"</span>: <span class="str">"Bearer YOUR_API_KEY"</span>
}

r = requests.get(<span class="str">"https://api.example.com/data"</span>, headers=headers)</pre>

<h3>POST request (data bhejna)</h3>
<pre>data = {<span class="str">"name"</span>: <span class="str">"Ali"</span>, <span class="str">"age"</span>: <span class="num">21</span>}
r = requests.post(<span class="str">"https://api.example.com/users"</span>, json=data)</pre>

<div class="real-life">
<div class="head">🌍 Real Life Example</div>
<p><strong>Scenario:</strong> Karachi ka mausam.</p>
<pre style="margin-top:10px;margin-bottom:0;"><span class="kw">import</span> requests

url = <span class="str">"https://api.open-meteo.com/v1/forecast"</span>
params = {
    <span class="str">"latitude"</span>: <span class="num">24.86</span>,
    <span class="str">"longitude"</span>: <span class="num">67.01</span>,
    <span class="str">"current_weather"</span>: <span class="kw">True</span>
}

r = requests.get(url, params=params)
weather = r.json()[<span class="str">"current_weather"</span>]
<span class="fn">print</span>(<span class="str">f"Temp: {weather['temperature']}°C"</span>)
<span class="fn">print</span>(<span class="str">f"Wind: {weather['windspeed']} km/h"</span>)</pre>
</div>

<div class="warn-box">
<div class="head">⚠️ Common Mistakes</div>
<ul>
<li><code>r.json()</code> call karna bina status check ke</li>
<li>Rate limit cross karna — API block kar deti</li>
<li>API key code mein hardcode karna — env variable use karo</li>
</ul>
</div>

<div class="pro-tip">
<div class="head">✨ Pro Tip</div>
<p>Real projects mein <code>requests.Session()</code> use karo — connection reuse hota, faster. Aur <code>timeout=10</code> zaroor lagao.</p>
</div>`,
        en: `<h3>What is it?</h3>
<p>An API is a <strong>URL</strong> — send a request, get a response (usually JSON). Use built-in <code>urllib</code> or popular <code>requests</code>.</p>

<h3>How does it work?</h3>
<div class="steps">
<ol>
<li><strong>Step 1:</strong> Find API URL</li>
<li><strong>Step 2:</strong> Send GET request</li>
<li><strong>Step 3:</strong> Receive JSON response</li>
<li><strong>Step 4:</strong> Parse JSON to dict</li>
<li><strong>Step 5:</strong> Extract data by key</li>
</ol>
</div>

<h3>Built-in — urllib</h3>
<pre><span class="kw">import</span> json
<span class="kw">from</span> urllib.request <span class="kw">import</span> urlopen

url = <span class="str">"https://api.github.com/users/torvalds"</span>
response = <span class="fn">urlopen</span>(url)
data = json.loads(response.read())</pre>

<h3>requests library</h3>
<pre><span class="kw">import</span> requests

r = requests.get(<span class="str">"https://api.github.com/users/torvalds"</span>)
user = r.json()</pre>

<h3>Status check</h3>
<pre><span class="kw">if</span> r.status_code == <span class="num">200</span>:
    data = r.json()
<span class="cm"># 200 OK, 404 Not Found, 401 Unauthorized</span></pre>

<h3>Query parameters</h3>
<pre>params = {<span class="str">"lat"</span>: <span class="num">24.86</span>, <span class="str">"lon"</span>: <span class="num">67.01</span>}
r = requests.get(<span class="str">"https://api..."</span>, params=params)</pre>

<h3>Headers &amp; API keys</h3>
<pre>headers = {<span class="str">"Authorization"</span>: <span class="str">"Bearer KEY"</span>}
r = requests.get(url, headers=headers)</pre>

<div class="real-life">
<div class="head">🌍 Real Life Example</div>
<pre style="margin-top:10px;margin-bottom:0;"><span class="kw">import</span> requests

url = <span class="str">"https://api.open-meteo.com/v1/forecast"</span>
params = {<span class="str">"latitude"</span>: <span class="num">24.86</span>, <span class="str">"longitude"</span>: <span class="num">67.01</span>, <span class="str">"current_weather"</span>: <span class="kw">True</span>}
r = requests.get(url, params=params)
weather = r.json()[<span class="str">"current_weather"</span>]
<span class="fn">print</span>(weather[<span class="str">"temperature"</span>])</pre>
</div>

<div class="warn-box">
<div class="head">⚠️ Common Mistakes</div>
<ul>
<li>Calling <code>r.json()</code> without status check</li>
<li>Hitting rate limit</li>
<li>Hardcoding API keys</li>
</ul>
</div>

<div class="pro-tip">
<div class="head">✨ Pro Tip</div>
<p>Use <code>requests.Session()</code> and always pass <code>timeout=10</code>.</p>
</div>`
      },
      quiz: [
        { q: { ur: "API request bhejne ka method?", en: "Method to send request?" }, options: ["GET", "SET", "PUT only", "OPEN"], answer: 0 },
        { q: { ur: "API response ka format?", en: "API response format?" }, options: ["CSV", "JSON", "XML only", "TXT"], answer: 1 },
        { q: { ur: "Success status code?", en: "Success status code?" }, options: ["100", "200", "404", "500"], answer: 1 },
        { q: { ur: "requests.get() ke baad data?", en: "After requests.get(), get data?" }, options: ["r.text()", "r.json()", "r.data()", "r.read()"], answer: 1 },
        { q: { ur: "404 matlab?", en: "404 means?" }, options: ["Success", "Not Found", "Server error", "Auth"], answer: 1 }
      ]
    },

    /* ═══════════════════════════════════════════════════════
       TOPIC 2: Analyzing Data
       ═══════════════════════════════════════════════════════ */
    {
      id: "analyzing-data",
      title: { ur: "Analyzing Data", en: "Analyzing Data" },
      icon: "📊",
      code: {
        ur: `# Basic data analysis — pure Python
data = [85, 92, 78, 95, 88, 72, 90]

# Statistics
total = sum(data)
count = len(data)
average = total / count
minimum = min(data)
maximum = max(data)

print(f"Total: {total}")
print(f"Average: {average:.2f}")   # 85.71
print(f"Min/Max: {minimum}/{maximum}")

# Sorted
sorted_data = sorted(data)
print(sorted_data)

# Filtering
passed = [x for x in data if x >= 80]
print(f"Passed: {len(passed)}/{count}")`,
        en: `# Basic data analysis — pure Python
data = [85, 92, 78, 95, 88, 72, 90]

# Statistics
total = sum(data)
count = len(data)
average = total / count
minimum = min(data)
maximum = max(data)

print(f"Total: {total}")
print(f"Average: {average:.2f}")   # 85.71
print(f"Min/Max: {minimum}/{maximum}")

# Sorted
sorted_data = sorted(data)
print(sorted_data)

# Filtering
passed = [x for x in data if x >= 80]
print(f"Passed: {len(passed)}/{count}")`
      },
      learn: {
        ur: `<h2 style="font-size:1.15rem;font-weight:800;margin-bottom:14px;">📊 Analyzing Data</h2>
<p style="color:var(--text-soft);font-size:.93rem;margin-bottom:14px;">Data analysis ka matlab hai <strong>numbers se kahani</strong> nikalna — average, total, top, bottom, patterns.</p>

<div style="background:var(--code-bg);border:1px solid var(--code-border);border-radius:10px;overflow:hidden;margin-bottom:16px;font-family:var(--mono);font-size:.82rem;">
  <div style="display:grid;grid-template-columns:160px 1fr;padding:9px 14px;background:var(--code-bg-2);color:var(--py-blue-glow);font-weight:700;font-size:.68rem;text-transform:uppercase;">Function · Kaam</div>
  <div style="display:grid;grid-template-columns:160px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">sum(), len()</span><span style="color:var(--text-soft);">Total, count</span></div>
  <div style="display:grid;grid-template-columns:160px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">min(), max()</span><span style="color:var(--text-soft);">Sabse chhota/bara</span></div>
  <div style="display:grid;grid-template-columns:160px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">sorted()</span><span style="color:var(--text-soft);">Order laga do</span></div>
  <div style="display:grid;grid-template-columns:160px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">Counter</span><span style="color:var(--text-soft);">Frequency count</span></div>
  <div style="display:grid;grid-template-columns:160px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">statistics</span><span style="color:var(--text-soft);">mean, median, mode</span></div>
</div>

<div style="background:linear-gradient(135deg,rgba(75,139,190,.1),rgba(75,139,190,.03));border:1px solid rgba(75,139,190,.25);border-left:3px solid var(--py-blue);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--text);display:block;margin-bottom:3px;">💡 Kyun</strong>
Business decisions — sales report, student performance, survey results. Numbers se insight nikalna.
</div>

<div style="background:linear-gradient(135deg,rgba(16,185,129,.1),rgba(16,185,129,.02));border:1px solid rgba(16,185,129,.25);border-left:3px solid var(--py-green);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--py-green-glow);display:block;margin-bottom:5px;font-family:var(--mono);font-size:.7rem;text-transform:uppercase;">⚠️ Common Mistake</strong>
Empty list pe <code>sum()/len()</code> — <code>ZeroDivisionError</code>. Check karo pehle.
</div>`,
        en: `<h2 style="font-size:1.15rem;font-weight:800;margin-bottom:14px;">📊 Analyzing Data</h2>
<p style="color:var(--text-soft);font-size:.93rem;margin-bottom:14px;">Data analysis means finding <strong>the story in numbers</strong> — average, total, top, bottom, patterns.</p>

<div style="background:var(--code-bg);border:1px solid var(--code-border);border-radius:10px;overflow:hidden;margin-bottom:16px;font-family:var(--mono);font-size:.82rem;">
  <div style="display:grid;grid-template-columns:160px 1fr;padding:9px 14px;background:var(--code-bg-2);color:var(--py-blue-glow);font-weight:700;font-size:.68rem;text-transform:uppercase;">Function · Does</div>
  <div style="display:grid;grid-template-columns:160px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">sum(), len()</span><span style="color:var(--text-soft);">Total, count</span></div>
  <div style="display:grid;grid-template-columns:160px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">min(), max()</span><span style="color:var(--text-soft);">Smallest/largest</span></div>
  <div style="display:grid;grid-template-columns:160px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">sorted()</span><span style="color:var(--text-soft);">Order</span></div>
  <div style="display:grid;grid-template-columns:160px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">Counter</span><span style="color:var(--text-soft);">Frequency</span></div>
  <div style="display:grid;grid-template-columns:160px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">statistics</span><span style="color:var(--text-soft);">mean, median, mode</span></div>
</div>

<div style="background:linear-gradient(135deg,rgba(75,139,190,.1),rgba(75,139,190,.03));border:1px solid rgba(75,139,190,.25);border-left:3px solid var(--py-blue);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--text);display:block;margin-bottom:3px;">💡 Why</strong>
Business decisions, sales reports, surveys. Turn numbers into insight.
</div>

<div style="background:linear-gradient(135deg,rgba(16,185,129,.1),rgba(16,185,129,.02));border:1px solid rgba(16,185,129,.25);border-left:3px solid var(--py-green);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--py-green-glow);display:block;margin-bottom:5px;font-family:var(--mono);font-size:.7rem;text-transform:uppercase;">⚠️ Common Mistake</strong>
<code>sum()/len()</code> on empty list — <code>ZeroDivisionError</code>. Check first.
</div>`
      },
      theory: {
        ur: `<h3>Yeh kya hai?</h3>
<p>Data analysis ka matlab hai numbers se <strong>meaningful information</strong> nikalna. Python mein built-in functions + <code>statistics</code> module se kaam ho jata.</p>

<h3>Basic statistics</h3>
<pre>data = [<span class="num">85</span>, <span class="num">92</span>, <span class="num">78</span>, <span class="num">95</span>, <span class="num">88</span>]

<span class="fn">sum</span>(data)        <span class="cm"># 438</span>
<span class="fn">len</span>(data)        <span class="cm"># 5</span>
<span class="fn">sum</span>(data)/<span class="fn">len</span>(data)  <span class="cm"># 87.6 (average)</span>
<span class="fn">min</span>(data)        <span class="cm"># 78</span>
<span class="fn">max</span>(data)        <span class="cm"># 95</span>
<span class="fn">sorted</span>(data)     <span class="cm"># [78, 85, 88, 92, 95]</span>
<span class="fn">sorted</span>(data, reverse=<span class="kw">True</span>)  <span class="cm"># [95, 92, 88, 85, 78]</span></pre>

<h3>statistics module</h3>
<pre><span class="kw">import</span> statistics

statistics.mean(data)      <span class="cm"># 87.6</span>
statistics.median(data)    <span class="cm"># 88 (beech wala)</span>
statistics.mode([<span class="num">1</span>,<span class="num">2</span>,<span class="num">2</span>,<span class="num">3</span>])  <span class="cm"># 2 (sabse zyada)</span>
statistics.stdev(data)     <span class="cm"># standard deviation</span>
statistics.variance(data)  <span class="cm"># variance</span></pre>

<h3>Filter &amp; transform</h3>
<pre>marks = [<span class="num">85</span>, <span class="num">92</span>, <span class="num">45</span>, <span class="num">78</span>, <span class="num">95</span>]

<span class="cm"># Passed</span>
passed = [m <span class="kw">for</span> m <span class="kw">in</span> marks <span class="kw">if</span> m >= <span class="num">50</span>]     <span class="cm"># [85, 92, 78, 95]</span>

<span class="cm"># Top 3</span>
top3 = <span class="fn">sorted</span>(marks, reverse=<span class="kw">True</span>)[:<span class="num">3</span>]         <span class="cm"># [95, 92, 85]</span>

<span class="cm"># Grade</span>
grades = [<span class="str">"A"</span> <span class="kw">if</span> m >= <span class="num">90</span> <span class="kw">else</span> <span class="str">"B"</span> <span class="kw">if</span> m >= <span class="num">80</span> <span class="kw">else</span> <span class="str">"C"</span>
          <span class="kw">for</span> m <span class="kw">in</span> marks]</pre>

<h3>Counter — frequency</h3>
<pre><span class="kw">from</span> collections <span class="kw">import</span> Counter

votes = [<span class="str">"Ali"</span>, <span class="str">"Sara"</span>, <span class="str">"Ali"</span>, <span class="str">"Ahmed"</span>, <span class="str">"Ali"</span>, <span class="str">"Sara"</span>]
count = <span class="fn">Counter</span>(votes)

<span class="fn">print</span>(count)             <span class="cm"># Counter({'Ali': 3, 'Sara': 2, 'Ahmed': 1})</span>
<span class="fn">print</span>(count.most_common(<span class="num">2</span>))   <span class="cm"># [('Ali', 3), ('Sara', 2)]</span></pre>

<h3>Grouping data</h3>
<pre>students = [
    {<span class="str">"name"</span>: <span class="str">"Ali"</span>, <span class="str">"marks"</span>: <span class="num">85</span>, <span class="str">"class"</span>: <span class="str">"A"</span>},
    {<span class="str">"name"</span>: <span class="str">"Sara"</span>, <span class="str">"marks"</span>: <span class="num">92</span>, <span class="str">"class"</span>: <span class="str">"B"</span>},
    {<span class="str">"name"</span>: <span class="str">"Ahmed"</span>, <span class="str">"marks"</span>: <span class="num">78</span>, <span class="str">"class"</span>: <span class="str">"A"</span>}
]

<span class="cm"># Class A ke students</span>
class_a = [s <span class="kw">for</span> s <span class="kw">in</span> students <span class="kw">if</span> s[<span class="str">"class"</span>] == <span class="str">"A"</span>]

<span class="cm"># Average marks</span>
avg = <span class="fn">sum</span>(s[<span class="str">"marks"</span>] <span class="kw">for</span> s <span class="kw">in</span> students) / <span class="fn">len</span>(students)

<span class="cm"># Top student</span>
top = <span class="fn">max</span>(students, key=<span class="kw">lambda</span> s: s[<span class="str">"marks"</span>])
<span class="fn">print</span>(top[<span class="str">"name"</span>])   <span class="cm"># Sara</span></pre>

<h3>Nested data summarize</h3>
<pre>sales = [
    {<span class="str">"product"</span>: <span class="str">"A"</span>, <span class="str">"qty"</span>: <span class="num">10</span>},
    {<span class="str">"product"</span>: <span class="str">"B"</span>, <span class="str">"qty"</span>: <span class="num">5</span>},
    {<span class="str">"product"</span>: <span class="str">"A"</span>, <span class="str">"qty"</span>: <span class="num">7</span>}
]

total_qty = <span class="fn">sum</span>(s[<span class="str">"qty"</span>] <span class="kw">for</span> s <span class="kw">in</span> sales)
by_product = {}
<span class="kw">for</span> s <span class="kw">in</span> sales:
    by_product[s[<span class="str">"product"</span>]] = by_product.get(s[<span class="str">"product"</span>], <span class="num">0</span>) + s[<span class="str">"qty"</span>]

<span class="fn">print</span>(by_product)   <span class="cm"># {'A': 17, 'B': 5}</span></pre>

<div class="real-life">
<div class="head">🌍 Real Life Example</div>
<p><strong>Scenario:</strong> Exam result analysis.</p>
<pre style="margin-top:10px;margin-bottom:0;"><span class="kw">import</span> statistics

marks = [<span class="num">85</span>, <span class="num">92</span>, <span class="num">45</span>, <span class="num">78</span>, <span class="num">95</span>, <span class="num">60</span>, <span class="num">88</span>]

<span class="fn">print</span>(<span class="str">f"Average: {statistics.mean(marks):.2f}"</span>)
<span class="fn">print</span>(<span class="str">f"Median: {statistics.median(marks)}"</span>)
<span class="fn">print</span>(<span class="str">f"Highest: {max(marks)}"</span>)
<span class="fn">print</span>(<span class="str">f"Lowest: {min(marks)}"</span>)
<span class="fn">print</span>(<span class="str">f"Pass %: {sum(1 for m in marks if m >= 50) / len(marks) * 100}"</span>)</pre>
</div>

<div class="warn-box">
<div class="head">⚠️ Common Mistakes</div>
<ul>
<li>Empty data pe divide karna</li>
<li>Median vs mean confuse karna — data skewed ho to median behtar</li>
<li>Strings ko sort karna jab numbers ki zaroorat ho</li>
</ul>
</div>

<div class="pro-tip">
<div class="head">✨ Pro Tip</div>
<p>Bara data (1000+ rows) ho to <strong>pandas</strong> library use karo — <code>pip install pandas</code>. SQL jaisa kaam karta hai DataFrames pe.</p>
</div>`,
        en: `<h3>What is it?</h3>
<p>Data analysis = extracting <strong>meaningful info</strong> from numbers. Python's built-ins + <code>statistics</code> do the job.</p>

<h3>Basic statistics</h3>
<pre>data = [<span class="num">85</span>, <span class="num">92</span>, <span class="num">78</span>]

<span class="fn">sum</span>(data)         <span class="cm"># 255</span>
<span class="fn">sum</span>(data)/<span class="fn">len</span>(data)  <span class="cm"># 85.0</span>
<span class="fn">min</span>(data), <span class="fn">max</span>(data)
<span class="fn">sorted</span>(data, reverse=<span class="kw">True</span>)</pre>

<h3>statistics module</h3>
<pre><span class="kw">import</span> statistics

statistics.mean(data)
statistics.median(data)
statistics.mode([<span class="num">1</span>,<span class="num">2</span>,<span class="num">2</span>,<span class="num">3</span>])   <span class="cm"># 2</span>
statistics.stdev(data)</pre>

<h3>Filter &amp; transform</h3>
<pre>passed = [m <span class="kw">for</span> m <span class="kw">in</span> marks <span class="kw">if</span> m >= <span class="num">50</span>]
top3 = <span class="fn">sorted</span>(marks, reverse=<span class="kw">True</span>)[:<span class="num">3</span>]</pre>

<h3>Counter</h3>
<pre><span class="kw">from</span> collections <span class="kw">import</span> Counter

count = <span class="fn">Counter</span>([<span class="str">"a"</span>, <span class="str">"b"</span>, <span class="str">"a"</span>])
count.most_common(<span class="num">2</span>)   <span class="cm"># [('a', 2), ('b', 1)]</span></pre>

<h3>Grouping</h3>
<pre>top = <span class="fn">max</span>(students, key=<span class="kw">lambda</span> s: s[<span class="str">"marks"</span>])
<span class="fn">print</span>(top[<span class="str">"name"</span>])</pre>

<h3>Summarize</h3>
<pre>by_product = {}
<span class="kw">for</span> s <span class="kw">in</span> sales:
    by_product[s[<span class="str">"product"</span>]] = by_product.get(s[<span class="str">"product"</span>], <span class="num">0</span>) + s[<span class="str">"qty"</span>]</pre>

<div class="real-life">
<div class="head">🌍 Real Life Example</div>
<pre style="margin-top:10px;margin-bottom:0;"><span class="kw">import</span> statistics

marks = [<span class="num">85</span>, <span class="num">92</span>, <span class="num">45</span>, <span class="num">78</span>, <span class="num">95</span>]

<span class="fn">print</span>(<span class="str">f"Average: {statistics.mean(marks):.2f}"</span>)
<span class="fn">print</span>(<span class="str">f"Highest: {max(marks)}"</span>)</pre>
</div>

<div class="warn-box">
<div class="head">⚠️ Common Mistakes</div>
<ul>
<li>Dividing empty data</li>
<li>Mean vs median confusion</li>
<li>Sorting strings instead of numbers</li>
</ul>
</div>

<div class="pro-tip">
<div class="head">✨ Pro Tip</div>
<p>Big data (1000+ rows) → use <strong>pandas</strong>: <code>pip install pandas</code>.</p>
</div>`
      },
      quiz: [
        { q: { ur: "Average kaise nikalte?", en: "How to calculate average?" }, options: ["sum/len", "sum*len", "max-min", "len/sum"], answer: 0 },
        { q: { ur: "Beech wali value?", en: "Middle value?" }, options: ["mean", "median", "mode", "range"], answer: 1 },
        { q: { ur: "Sabse zyada baar aane wali?", en: "Most frequent value?" }, options: ["mean", "median", "mode", "max"], answer: 2 },
        { q: { ur: "Frequency count ke liye?", en: "For frequency count?" }, options: ["dict", "Counter", "list", "set"], answer: 1 },
        { q: { ur: "Top student nikalne ke liye?", en: "Get top student?" }, options: ["max()", "min()", "sum()", "sort()"], answer: 0 }
      ]
    },

    /* ═══════════════════════════════════════════════════════
       TOPIC 3: CSV Processing
       ═══════════════════════════════════════════════════════ */
    {
      id: "csv-processing",
      title: { ur: "CSV Processing", en: "CSV Processing" },
      icon: "📋",
      code: {
        ur: `import csv

# CSV likhna
with open("students.csv", "w", newline="") as f:
    writer = csv.writer(f)
    writer.writerow(["name", "marks", "class"])
    writer.writerow(["Ali", 85, "A"])
    writer.writerow(["Sara", 92, "B"])

# CSV padhna
with open("students.csv") as f:
    reader = csv.reader(f)
    for row in reader:
        print(row)
# ['name', 'marks', 'class']
# ['Ali', '85', 'A']

# DictReader — column names ke saath
with open("students.csv") as f:
    reader = csv.DictReader(f)
    for row in reader:
        print(row["name"], row["marks"])`,
        en: `import csv

# Write CSV
with open("students.csv", "w", newline="") as f:
    writer = csv.writer(f)
    writer.writerow(["name", "marks", "class"])
    writer.writerow(["Ali", 85, "A"])
    writer.writerow(["Sara", 92, "B"])

# Read CSV
with open("students.csv") as f:
    reader = csv.reader(f)
    for row in reader:
        print(row)
# ['name', 'marks', 'class']
# ['Ali', '85', 'A']

# DictReader — with column names
with open("students.csv") as f:
    reader = csv.DictReader(f)
    for row in reader:
        print(row["name"], row["marks"])`
      },
      learn: {
        ur: `<h2 style="font-size:1.15rem;font-weight:800;margin-bottom:14px;">📋 CSV Processing</h2>
<p style="color:var(--text-soft);font-size:.93rem;margin-bottom:14px;">CSV (Comma Separated Values) — Excel jaisa table data. Python ke <code>csv</code> module se aasani se handle hota hai.</p>

<div style="background:var(--code-bg);border:1px solid var(--code-border);border-radius:10px;overflow:hidden;margin-bottom:16px;font-family:var(--mono);font-size:.82rem;">
  <div style="display:grid;grid-template-columns:200px 1fr;padding:9px 14px;background:var(--code-bg-2);color:var(--py-blue-glow);font-weight:700;font-size:.68rem;text-transform:uppercase;">Function · Kaam</div>
  <div style="display:grid;grid-template-columns:200px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">csv.reader(f)</span><span style="color:var(--text-soft);">Rows ko list ki tarah padho</span></div>
  <div style="display:grid;grid-template-columns:200px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">csv.writer(f)</span><span style="color:var(--text-soft);">Rows likho</span></div>
  <div style="display:grid;grid-template-columns:200px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">csv.DictReader(f)</span><span style="color:var(--text-soft);">Header ke saath dict</span></div>
  <div style="display:grid;grid-template-columns:200px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">csv.DictWriter(f, ...)</span><span style="color:var(--text-soft);">Dict se CSV</span></div>
</div>

<div style="background:linear-gradient(135deg,rgba(75,139,190,.1),rgba(75,139,190,.03));border:1px solid rgba(75,139,190,.25);border-left:3px solid var(--py-blue);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--text);display:block;margin-bottom:3px;">💡 Kyun</strong>
Excel files, database exports, survey data — sab CSV mein aate hain.
</div>

<div style="background:linear-gradient(135deg,rgba(16,185,129,.1),rgba(16,185,129,.02));border:1px solid rgba(16,185,129,.25);border-left:3px solid var(--py-green);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--py-green-glow);display:block;margin-bottom:5px;font-family:var(--mono);font-size:.7rem;text-transform:uppercase;">⚠️ Common Mistake</strong>
CSV values <strong>strings</strong> hoti hain — numbers ke liye <code>int()</code> ya <code>float()</code> lagao.
</div>`,
        en: `<h2 style="font-size:1.15rem;font-weight:800;margin-bottom:14px;">📋 CSV Processing</h2>
<p style="color:var(--text-soft);font-size:.93rem;margin-bottom:14px;">CSV (Comma Separated Values) — Excel-like table data. The <code>csv</code> module handles it.</p>

<div style="background:var(--code-bg);border:1px solid var(--code-border);border-radius:10px;overflow:hidden;margin-bottom:16px;font-family:var(--mono);font-size:.82rem;">
  <div style="display:grid;grid-template-columns:200px 1fr;padding:9px 14px;background:var(--code-bg-2);color:var(--py-blue-glow);font-weight:700;font-size:.68rem;text-transform:uppercase;">Function · Does</div>
  <div style="display:grid;grid-template-columns:200px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">csv.reader(f)</span><span style="color:var(--text-soft);">Read rows as lists</span></div>
  <div style="display:grid;grid-template-columns:200px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">csv.writer(f)</span><span style="color:var(--text-soft);">Write rows</span></div>
  <div style="display:grid;grid-template-columns:200px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">csv.DictReader(f)</span><span style="color:var(--text-soft);">Rows as dicts with header</span></div>
  <div style="display:grid;grid-template-columns:200px 1fr;padding:9px 14px;border-top:1px solid var(--code-border);"><span style="color:var(--py-green-glow);font-weight:700;">csv.DictWriter</span><span style="color:var(--text-soft);">Dict → CSV</span></div>
</div>

<div style="background:linear-gradient(135deg,rgba(75,139,190,.1),rgba(75,139,190,.03));border:1px solid rgba(75,139,190,.25);border-left:3px solid var(--py-blue);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--text);display:block;margin-bottom:3px;">💡 Why</strong>
Excel files, DB exports, surveys — all come as CSV.
</div>

<div style="background:linear-gradient(135deg,rgba(16,185,129,.1),rgba(16,185,129,.02));border:1px solid rgba(16,185,129,.25);border-left:3px solid var(--py-green);border-radius:10px;padding:13px 15px;margin:16px 0;font-size:.87rem;color:var(--text-soft);">
<strong style="color:var(--py-green-glow);display:block;margin-bottom:5px;font-family:var(--mono);font-size:.7rem;text-transform:uppercase;">⚠️ Common Mistake</strong>
CSV values are <strong>strings</strong> — convert with <code>int()</code> or <code>float()</code>.
</div>`
      },
      theory: {
        ur: `<h3>Yeh kya hai?</h3>
<p>CSV file mein har line ek row hoti hai, comma se columns alag. Python ka <code>csv</code> module ise correctly handle karta hai (quotes, commas ke andar, etc.).</p>

<h3>Kaise kaam karta hai?</h3>
<div class="steps">
<ol>
<li><strong>Step 1:</strong> <code>open()</code> se file kholo</li>
<li><strong>Step 2:</strong> <code>csv.reader()</code> ya <code>csv.writer()</code> banao</li>
<li><strong>Step 3:</strong> Rows pe loop ya write karo</li>
<li><strong>Step 4:</strong> Numbers ko convert karo</li>
<li><strong>Step 5:</strong> <code>with</code> block — auto-close</li>
</ol>
</div>

<h3>CSV padhna</h3>
<pre><span class="kw">import</span> csv

<span class="kw">with</span> <span class="fn">open</span>(<span class="str">"data.csv"</span>) <span class="kw">as</span> f:
    reader = csv.reader(f)
    <span class="kw">for</span> row <span class="kw">in</span> reader:
        <span class="fn">print</span>(row)
<span class="cm"># ['name', 'marks']</span>
<span class="cm"># ['Ali', '85']</span></pre>

<h3>DictReader — columns ke naam se</h3>
<pre><span class="kw">with</span> <span class="fn">open</span>(<span class="str">"data.csv"</span>) <span class="kw">as</span> f:
    reader = csv.DictReader(f)
    <span class="kw">for</span> row <span class="kw">in</span> reader:
        <span class="fn">print</span>(row[<span class="str">"name"</span>], row[<span class="str">"marks"</span>])
<span class="cm"># Ali 85</span>
<span class="cm"># Sara 92</span></pre>

<h3>CSV likhna</h3>
<pre><span class="kw">with</span> <span class="fn">open</span>(<span class="str">"out.csv"</span>, <span class="str">"w"</span>, newline=<span class="str">""</span>) <span class="kw">as</span> f:
    writer = csv.writer(f)
    writer.writerow([<span class="str">"name"</span>, <span class="str">"marks"</span>])       <span class="cm"># header</span>
    writer.writerow([<span class="str">"Ali"</span>, <span class="num">85</span>])
    writer.writerows([                             <span class="cm"># bulk</span>
        [<span class="str">"Sara"</span>, <span class="num">92</span>],
        [<span class="str">"Ahmed"</span>, <span class="num">78</span>]
    ])</pre>

<h3>DictWriter — dict se</h3>
<pre><span class="kw">with</span> <span class="fn">open</span>(<span class="str">"out.csv"</span>, <span class="str">"w"</span>, newline=<span class="str">""</span>) <span class="kw">as</span> f:
    fields = [<span class="str">"name"</span>, <span class="str">"marks"</span>]
    writer = csv.DictWriter(f, fieldnames=fields)
    writer.writeheader()
    writer.writerow({<span class="str">"name"</span>: <span class="str">"Ali"</span>, <span class="str">"marks"</span>: <span class="num">85</span>})</pre>

<h3>Data analyze karna CSV se</h3>
<pre><span class="kw">import</span> csv

total = <span class="num">0</span>
count = <span class="num">0</span>

<span class="kw">with</span> <span class="fn">open</span>(<span class="str">"marks.csv"</span>) <span class="kw">as</span> f:
    reader = csv.DictReader(f)
    <span class="kw">for</span> row <span class="kw">in</span> reader:
        total += <span class="fn">int</span>(row[<span class="str">"marks"</span>])   <span class="cm"># string → int</span>
        count += <span class="num">1</span>

<span class="fn">print</span>(<span class="str">f"Average: {total/count:.2f}"</span>)</pre>

<h3>CSV filter karna</h3>
<pre><span class="kw">with</span> <span class="fn">open</span>(<span class="str">"students.csv"</span>) <span class="kw">as</span> f:
    reader = csv.DictReader(f)
    top = [r <span class="kw">for</span> r <span class="kw">in</span> reader <span class="kw">if</span> <span class="fn">int</span>(r[<span class="str">"marks"</span>]) >= <span class="num">90</span>]

<span class="kw">for</span> s <span class="kw">in</span> top:
    <span class="fn">print</span>(s[<span class="str">"name"</span>], s[<span class="str">"marks"</span>])</pre>

<h3>Dialect — ; ya tab separator</h3>
<pre>reader = csv.reader(f, delimiter=<span class="str">";"</span>)
writer = csv.writer(f, delimiter=<span class="str">"\t"</span>)</pre>

<div class="real-life">
<div class="head">🌍 Real Life Example</div>
<p><strong>Scenario:</strong> Sales CSV se report banana.</p>
<pre style="margin-top:10px;margin-bottom:0;"><span class="kw">import</span> csv

<span class="kw">with</span> <span class="fn">open</span>(<span class="str">"sales.csv"</span>) <span class="kw">as</span> f:
    reader = csv.DictReader(f)
    total = <span class="fn">sum</span>(<span class="fn">float</span>(row[<span class="str">"amount"</span>]) <span class="kw">for</span> row <span class="kw">in</span> reader)

<span class="fn">print</span>(<span class="str">f"Total sales: Rs {total:,.2f}"</span>)</pre>
</div>

<div class="warn-box">
<div class="head">⚠️ Common Mistakes</div>
<ul>
<li><code>newline=""</code> bhoolna — extra blank lines</li>
<li>String ko int samajhna — <code>row["marks"] + 5</code> fail</li>
<li>File pehle close na karna — data incomplete</li>
</ul>
</div>

<div class="pro-tip">
<div class="head">✨ Pro Tip</div>
<p>Bara CSV (10,000+ rows) → <strong>pandas</strong> use karo: <code>pd.read_csv("file.csv")</code>. Aur bhi tez aur asaan.</p>
</div>`,
        en: `<h3>What is it?</h3>
<p>CSV has one row per line, columns split by commas. Python's <code>csv</code> module handles quotes/commas correctly.</p>

<h3>How does it work?</h3>
<div class="steps">
<ol>
<li><strong>Step 1:</strong> <code>open()</code> the file</li>
<li><strong>Step 2:</strong> Create <code>csv.reader()</code> or <code>csv.writer()</code></li>
<li><strong>Step 3:</strong> Loop rows or write</li>
<li><strong>Step 4:</strong> Convert numbers</li>
<li><strong>Step 5:</strong> <code>with</code> block — auto-close</li>
</ol>
</div>

<h3>Read CSV</h3>
<pre><span class="kw">import</span> csv

<span class="kw">with</span> <span class="fn">open</span>(<span class="str">"data.csv"</span>) <span class="kw">as</span> f:
    reader = csv.reader(f)
    <span class="kw">for</span> row <span class="kw">in</span> reader:
        <span class="fn">print</span>(row)</pre>

<h3>DictReader</h3>
<pre><span class="kw">with</span> <span class="fn">open</span>(<span class="str">"data.csv"</span>) <span class="kw">as</span> f:
    reader = csv.DictReader(f)
    <span class="kw">for</span> row <span class="kw">in</span> reader:
        <span class="fn">print</span>(row[<span class="str">"name"</span>], row[<span class="str">"marks"</span>])</pre>

<h3>Write CSV</h3>
<pre><span class="kw">with</span> <span class="fn">open</span>(<span class="str">"out.csv"</span>, <span class="str">"w"</span>, newline=<span class="str">""</span>) <span class="kw">as</span> f:
    writer = csv.writer(f)
    writer.writerow([<span class="str">"name"</span>, <span class="str">"marks"</span>])
    writer.writerows([[<span class="str">"Sara"</span>, <span class="num">92</span>], [<span class="str">"Ahmed"</span>, <span class="num">78</span>]])</pre>

<h3>DictWriter</h3>
<pre><span class="kw">with</span> <span class="fn">open</span>(<span class="str">"out.csv"</span>, <span class="str">"w"</span>, newline=<span class="str">""</span>) <span class="kw">as</span> f:
    writer = csv.DictWriter(f, fieldnames=[<span class="str">"name"</span>, <span class="str">"marks"</span>])
    writer.writeheader()
    writer.writerow({<span class="str">"name"</span>: <span class="str">"Ali"</span>, <span class="str">"marks"</span>: <span class="num">85</span>})</pre>

<h3>Analyze CSV</h3>
<pre>total = count = <span class="num">0</span>
<span class="kw">with</span> <span class="fn">open</span>(<span class="str">"marks.csv"</span>) <span class="kw">as</span> f:
    reader = csv.DictReader(f)
    <span class="kw">for</span> row <span class="kw">in</span> reader:
        total += <span class="fn">int</span>(row[<span class="str">"marks"</span>])
        count += <span class="num">1</span>
<span class="fn">print</span>(total/count)</pre>

<div class="real-life">
<div class="head">🌍 Real Life Example</div>
<pre style="margin-top:10px;margin-bottom:0;"><span class="kw">with</span> <span class="fn">open</span>(<span class="str">"sales.csv"</span>) <span class="kw">as</span> f:
    reader = csv.DictReader(f)
    total = <span class="fn">sum</span>(<span class="fn">float</span>(row[<span class="str">"amount"</span>]) <span class="kw">for</span> row <span class="kw">in</span> reader)
<span class="fn">print</span>(<span class="str">f"Total: Rs {total:,.2f}"</span>)</pre>
</div>

<div class="warn-box">
<div class="head">⚠️ Common Mistakes</div>
<ul>
<li>Forgetting <code>newline=""</code></li>
<li>Treating string as int</li>
<li>Not closing file — incomplete data</li>
</ul>
</div>

<div class="pro-tip">
<div class="head">✨ Pro Tip</div>
<p>Big CSV (10,000+ rows) → <strong>pandas</strong>: <code>pd.read_csv("file.csv")</code>.</p>
</div>`
      },
      quiz: [
        { q: { ur: "CSV padhne ka module?", en: "Module to read CSV?" }, options: ["json", "csv", "file", "data"], answer: 1 },
        { q: { ur: "Column names ke saath padhne ke liye?", en: "Read with column names?" }, options: ["csv.reader", "csv.DictReader", "csv.Header", "csv.Named"], answer: 1 },
        { q: { ur: "CSV likhne ka method?", en: "Write CSV method?" }, options: ["csv.write()", "csv.writer().writerow()", "csv.put()", "csv.save()"], answer: 1 },
        { q: { ur: "CSV values ka type?", en: "Type of CSV values?" }, options: ["int", "float", "string", "list"], answer: 2 },
        { q: { ur: "newline='' kyun?", en: "Why newline=''?" }, options: ["Faster", "Extra blank lines avoid", "Error fix", "No reason"], answer: 1 }
      ]
    }

  ]
};