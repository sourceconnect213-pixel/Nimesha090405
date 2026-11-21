/* HEXORA — launch countdown ("coming soon" screen).
   Until LAUNCH, every public page shows only a countdown. At LAUNCH the page reloads itself and the site opens.
   • The time is checked against the web server's clock (the Date header), so a phone with a wrong clock still opens on time.
   • Preview the real site before launch: open any page with ?preview=hexora (remembered in this browser).
     ?preview=off turns the countdown back on in this browser.
   • After launch this file does nothing; it can be removed from the pages (and this file deleted) any time after. */
(function () {
  "use strict";
  var LAUNCH = Date.parse("2026-11-22T12:00:00+05:30");   // 2026 නොවැම්බර් 22, දවල් 12:00 (ලංකාවේ වෙලාව)
  var KEY = "hx_preview";
  var root = document.documentElement;

  try {
    var q = new URLSearchParams(location.search).get("preview");
    if (q === "hexora") localStorage.setItem(KEY, "1");
    else if (q === "off") localStorage.removeItem(KEY);
    if (localStorage.getItem(KEY) === "1") return;
  } catch (e) { /* storage blocked: no preview */ }

  var skew = 0;   // server time − this device's time
  var now = function () { return Date.now() + skew; };
  if (now() >= LAUNCH) return;

  root.classList.add("hx-soon");
  var css = document.createElement("style");
  css.textContent =
    "html.hx-soon,html.hx-soon body{overflow:hidden!important;height:100%}" +
    "html.hx-soon body>*:not(#hx-soon){display:none!important}" +
    "#hx-soon{position:fixed;inset:0;z-index:2147483000;display:flex;flex-direction:column;align-items:center;justify-content:flex-start;gap:28px;" +
    "padding:32px 20px calc(32px + env(safe-area-inset-bottom));text-align:center;color:#ECEEF4;overflow:auto;" +
    "background:radial-gradient(1200px 600px at 50% -10%,rgba(47,107,255,.22),transparent 60%),radial-gradient(800px 500px at 50% 120%,rgba(140,80,255,.16),transparent 60%),#08090D;" +
    "font-family:Manrope,'Noto Sans Sinhala',system-ui,sans-serif}" +
    "#hx-soon>:first-child{margin-top:auto}#hx-soon>:last-child{margin-bottom:auto}" +
    "#hx-soon .s-mark{--s:.2}" +
    "#hx-soon .s-word{--s:.3;margin-top:-6px}" +
    "#hx-soon .s-kick{font-size:13px;letter-spacing:.18em;text-transform:uppercase;color:#8CB2FF;margin:0}" +
    "#hx-soon h1{font-size:clamp(24px,5vw,40px);line-height:1.3;margin:0;font-weight:700;max-width:22ch}" +
    "#hx-soon .s-sub{color:#A4AABB;font-size:clamp(15px,2.4vw,17px);line-height:1.7;margin:0;max-width:44ch}" +
    "#hx-soon .s-cd{display:flex;gap:clamp(8px,2vw,16px)}" +
    "#hx-soon .s-u{min-width:clamp(66px,17vw,104px);padding:16px 8px 12px;border:1px solid #2B3142;border-radius:14px;background:rgba(20,23,33,.7)}" +
    "#hx-soon .s-n{display:block;font-size:clamp(30px,7vw,52px);font-weight:700;font-variant-numeric:tabular-nums;line-height:1}" +
    "#hx-soon .s-l{display:block;margin-top:8px;font-size:13px;color:#A4AABB}" +
    "#hx-soon .s-when{color:#7D8497;font-size:14px;margin:0}" +
    "#hx-soon .s-cta{display:flex;flex-wrap:wrap;gap:12px;justify-content:center}" +
    "#hx-soon .s-cta a{display:inline-flex;align-items:center;min-height:46px;padding:0 20px;border-radius:10px;font-weight:600;text-decoration:none;color:#ECEEF4;border:1px solid #2B3142;background:#141721}" +
    "#hx-soon .s-cta a.s-pri{background:#2F6BFF;border-color:#2F6BFF;color:#fff}" +
    "#hx-soon .s-cta a:focus-visible{outline:2px solid #8CB2FF;outline-offset:3px}" +
    "@media (max-width:520px),(max-height:760px){#hx-soon{gap:18px}#hx-soon .s-mark{--s:.13}#hx-soon .s-word{--s:.2}#hx-soon .s-u{padding:12px 6px 10px}}" +
    "@media (hover:hover){#hx-soon .s-cta a:hover{border-color:#4A80FF}#hx-soon .s-cta a.s-pri:hover{background:#4A80FF}}";
  (document.head || root).appendChild(css);

  // "අද" on launch day, "හෙට" the day before, the date otherwise (days counted in Sri Lanka time, UTC+5:30)
  function dayWord() {
    var day = function (t) { return Math.floor((t + 19800000) / 86400000); };
    var diff = day(LAUNCH) - day(now());
    return diff <= 0 ? "අද" : diff === 1 ? "හෙට" : "නොවැම්බර් 22";
  }

  var units = [["d", "දවස්"], ["h", "පැය"], ["m", "මිනිත්තු"], ["s", "තත්පර"]];
  var box = null, cells = {};

  function build() {
    if (box || !document.body) return;
    box = document.createElement("main");
    box.id = "hx-soon";
    box.setAttribute("aria-labelledby", "hx-soon-h");
    box.innerHTML =
      '<div aria-hidden="true"><span class="logo-part lp-mark s-mark"></span><br><span class="logo-part lp-word s-word"></span></div>' +
      '<p class="s-kick">hexoraworks.com</p>' +
      '<h1 id="hx-soon-h">Hexora site එක ' + dayWord() + ' දවල් 12ට open වෙනවා</h1>' +
      '<p class="s-sub">Apps, websites, logo design, video editing. ඔයාට ඕන දේ, ඒකට යන වියදමත් එක්කම, මෙතනින්ම බලාගන්න පුළුවන් වෙනවා.</p>' +
      '<div class="s-cd" role="timer" aria-live="off">' +
      units.map(function (u) { return '<div class="s-u"><span class="s-n" data-u="' + u[0] + '">00</span><span class="s-l">' + u[1] + "</span></div>"; }).join("") +
      "</div>" +
      '<p class="s-when">2026 නොවැම්බර් 22, ඉරිදා · දවල් 12:00 (ලංකාවේ වෙලාව)</p>' +
      '<div class="s-cta"><a class="s-pri" href="https://wa.me/94706305377" rel="noopener">WhatsApp එකෙන් කතා කරන්න</a><a href="tel:+94706305377">Call: 070 630 5377</a></div>';
    document.body.appendChild(box);
    box.querySelectorAll("[data-u]").forEach(function (el) { cells[el.getAttribute("data-u")] = el; });
    tick();
  }

  var pad = function (n) { return (n < 10 ? "0" : "") + n; };
  var timer = 0;
  function tick() {
    var left = LAUNCH - now();
    if (left <= 0) { clearInterval(timer); location.reload(); return; }
    var s = Math.floor(left / 1000);
    var v = { d: Math.floor(s / 86400), h: Math.floor(s / 3600) % 24, m: Math.floor(s / 60) % 60, s: s % 60 };
    for (var k in cells) if (cells[k].textContent !== pad(v[k])) cells[k].textContent = pad(v[k]);
    if (cells.d) cells.d.parentNode.hidden = v.d === 0;   // under a day left: hours, minutes, seconds only
  }

  if (document.body) build(); else document.addEventListener("DOMContentLoaded", build);
  timer = setInterval(tick, 1000);
  // a tab that slept (phone locked) catches up as soon as it is seen again
  document.addEventListener("visibilitychange", function () { if (!document.hidden) tick(); });

  // correct this device's clock with the server's
  if (window.fetch) {
    var t0 = Date.now();
    fetch(location.pathname + "?hx_t=" + t0, { method: "HEAD", cache: "no-store" }).then(function (r) {
      var d = Date.parse(r.headers.get("date") || "");
      if (!isNaN(d)) { skew = d - (t0 + Date.now()) / 2; tick(); }
    }).catch(function () { /* offline: this device's clock is used */ });
  }
})();
