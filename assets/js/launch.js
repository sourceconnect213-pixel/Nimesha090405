/* HEXORA — launch screen: countdown → intro motion → "We are live".  Styles: assets/css/launch.css.
   • Settings come from the admin panel (Website → Launch), saved in Firestore site/launch:
       enabled  countdown page on / off
       at       launch time, ISO with the Sri Lanka offset ("2026-11-22T12:00:00+05:30")
       intro    play the Hexora intro animation at launch (and once for each visitor in the first week)
     Until that document exists the built-in DEFAULT below is used. The last copy is kept in the browser,
     so a page decides at once and checks Firestore in the background (and again every few minutes while the countdown is on).
   • The countdown runs on the web server's clock (the Date header), so a phone with a wrong clock still opens on time.
   • At zero: the settings are checked once more (an extension saved in the last minutes is honoured), then the intro plays
     and "We are live" offers "Explore HEXORA", which opens the site (no redirect loop: after the launch time no countdown is drawn).
   • ?preview=hexora shows the real site before launch in this browser, ?preview=off ends that. ?intro=1 plays the intro now (to look at it). */
(function () {
  "use strict";
  var DEFAULT = { enabled: true, at: "2026-11-22T12:00:00+05:30", intro: true };
  var CACHE = "hx_launch_v1", PREVIEW = "hx_preview", SEEN = "hx_intro_seen";
  var WA = "https://wa.me/94706305377", TEL = "tel:+94706305377";
  var root = document.documentElement;
  var ls = {
    get: function (k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set: function (k, v) { try { localStorage.setItem(k, v); } catch (e) { /* storage blocked */ } },
    del: function (k) { try { localStorage.removeItem(k); } catch (e) { /* storage blocked */ } }
  };
  var q = (function () { try { return new URLSearchParams(location.search); } catch (e) { return { get: function () { return null; } }; } })();
  if (q.get("preview") === "hexora") ls.set(PREVIEW, "1"); else if (q.get("preview") === "off") ls.del(PREVIEW);
  var preview = ls.get(PREVIEW) === "1", forceIntro = q.get("intro") === "1";

  var cfg = clean((function () { try { return JSON.parse(ls.get(CACHE)); } catch (e) { return null; } })());
  function clean(c) {
    var o = { enabled: DEFAULT.enabled, at: DEFAULT.at, intro: DEFAULT.intro };
    if (c && typeof c === "object") {
      if (typeof c.enabled === "boolean") o.enabled = c.enabled;
      if (typeof c.intro === "boolean") o.intro = c.intro;
      if (typeof c.at === "string" && !isNaN(Date.parse(c.at))) o.at = c.at;
    }
    return o;
  }
  var skew = 0;   // server time − this device's time
  var now = function () { return Date.now() + skew; };
  var target = function () { return Date.parse(cfg.at); };
  var gateWanted = function () { return !preview && cfg.enabled && now() < target(); };
  var introWanted = function () {
    if (forceIntro) return true;
    if (preview || !cfg.enabled || !cfg.intro) return false;
    var since = now() - target();
    return since >= 0 && since < 7 * 864e5 && ls.get(SEEN) !== cfg.at;   // once per visitor (per launch time), in the first week
  };
  var reduce = function () { return !!(window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches); };

  /* ---------- small builders ---------- */
  var esc = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); };
  var ICON_WA = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 11.5a8.4 8.4 0 0 1-12.4 7.4L3 21l2.1-5.6A8.4 8.4 0 1 1 21 11.5z"/></svg>';
  var ICON_CALL = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z"/></svg>';
  var ICON_GO = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';
  function background() {
    var dots = "", cols = ["#00D4FF", "#2563EB", "#7C3AED", "#93C5FD"];
    if (!reduce()) for (var i = 0; i < 18; i++) {
      dots += '<span class="hxl-dot" style="--x:' + (4 + Math.random() * 92).toFixed(1) + "%;--y:" + (20 + Math.random() * 75).toFixed(1) + "%;--s:" + (1.5 + Math.random() * 2.5).toFixed(1) +
        "px;--c:" + cols[i % 4] + ";--d:" + (7 + Math.random() * 8).toFixed(1) + "s;--w:" + (-Math.random() * 12).toFixed(1) + "s;--dx:" + (Math.random() * 60 - 30).toFixed(0) + 'px"></span>';
    }
    return '<div class="hxl-bg" aria-hidden="true"><span class="hxl-glow g1"></span><span class="hxl-glow g2"></span><span class="hxl-glow g3"></span><span class="hxl-grid"></span>' + dots + "</div>";
  }
  function when() {
    var d = new Date(target()), z = { timeZone: "Asia/Colombo" };
    try {
      var day = d.toLocaleDateString("en-US", Object.assign({ weekday: "long" }, z)).toUpperCase();
      var date = d.toLocaleDateString("en-US", Object.assign({ month: "long", day: "numeric", year: "numeric" }, z)).toUpperCase();
      var time = d.toLocaleTimeString("en-US", Object.assign({ hour: "numeric", minute: "2-digit" }, z)).toUpperCase();
      return [day + " • " + date, time + " — SRI LANKA TIME"];
    } catch (e) { return [cfg.at, "SRI LANKA TIME"]; }
  }
  var UNITS = [["d", "DAYS"], ["h", "HOURS"], ["m", "MINUTES"], ["s", "SECONDS"]];

  /* ---------- the screen ---------- */
  var box = null, mode = "", cells = {}, timer = 0, refetchT = 0, lastShown = {};
  function mount(cls) {
    if (!document.body) return false;
    if (!box) { box = document.createElement("div"); box.className = "hxl"; document.body.appendChild(box); }
    root.classList.remove("hx-soon", "hx-intro"); root.classList.add(cls);
    return true;
  }
  function unmount() {
    clearInterval(timer); timer = 0; mode = "";
    root.classList.remove("hx-soon", "hx-intro");
    if (box) { box.remove(); box = null; }
  }

  function showCountdown() {
    mode = "gate";
    root.classList.add("hx-soon");   // hides the page at once (launch.css), even before <body> exists
    if (!mount("hx-soon")) return void document.addEventListener("DOMContentLoaded", showCountdown, { once: true });
    var w = when();
    box.setAttribute("role", "main");
    box.innerHTML = background() +
      '<div class="hxl-in">' +
        '<div class="hxl-logo" style="--i:0" role="img" aria-label="HEXORA"><span class="logo-part lp-mark hxl-mark"></span><span class="logo-part lp-word hxl-word"></span></div>' +
        '<p class="hxl-kick" style="--i:1">HEXORA • OFFICIAL WEBSITE LAUNCH</p>' +
        '<h1 style="--i:2">Something <span class="hxl-grad">Powerful</span> Is Coming.</h1>' +
        '<p class="hxl-si" lang="si" style="--i:3">නව ඩිජිටල් අත්දැකීමකට සූදානම් වන්න.</p>' +
        '<p class="hxl-sub" style="--i:4">Building the future through technology, creativity, and innovation.</p>' +
        '<p class="hxl-svc" style="--i:5"><span>Web Development</span><b aria-hidden="true"> • </b><span>Mobile Applications</span><b aria-hidden="true"> • </b><span>Branding</span><b aria-hidden="true"> • </b><span>Creative Solutions</span></p>' +
        '<div class="hxl-cd" role="timer" aria-label="Time left until launch" style="--i:6">' +
          UNITS.map(function (u) { return '<div class="hxl-u"><span class="hxl-n" data-u="' + u[0] + '"><span>00</span></span><span class="hxl-l">' + u[1] + "</span></div>"; }).join("") +
        "</div>" +
        '<p class="hxl-when" style="--i:7"><span data-when="0">' + esc(w[0]) + '</span><span data-when="1">' + esc(w[1]) + "</span></p>" +
        '<div class="hxl-cta" style="--i:8"><a class="hxl-btn pri" href="' + WA + '" target="_blank" rel="noopener">' + ICON_WA + "Contact Us on WhatsApp</a>" +
          '<a class="hxl-btn" href="' + TEL + '">' + ICON_CALL + "Call HEXORA</a></div>" +
      "</div>";
    cells = {}; lastShown = {};
    Array.prototype.forEach.call(box.querySelectorAll("[data-u]"), function (el) { cells[el.getAttribute("data-u")] = el; });
    tick();
    clearInterval(timer); timer = setInterval(tick, 1000);
  }
  function refreshWhen() {
    if (mode !== "gate" || !box) return;
    var w = when(), a = box.querySelector('[data-when="0"]'), b = box.querySelector('[data-when="1"]');
    if (a) a.textContent = w[0]; if (b) b.textContent = w[1];
  }
  var pad = function (n) { return (n < 10 ? "0" : "") + n; };
  var zeroing = false;
  function tick() {
    if (mode !== "gate") return;
    var left = Math.max(0, target() - now());
    var s = Math.floor(left / 1000);
    var v = { d: Math.floor(s / 86400), h: Math.floor(s / 3600) % 24, m: Math.floor(s / 60) % 60, s: s % 60 };
    for (var k in cells) {
      var txt = pad(v[k]);
      if (lastShown[k] === txt) continue;
      var first = lastShown[k] === undefined;
      lastShown[k] = txt;
      var el = cells[k];
      el.innerHTML = "<span>" + txt + "</span>";
      if (!first && !reduce()) { el.classList.remove("tick"); void el.offsetWidth; el.classList.add("tick"); }
    }
    if (left <= 0 && !zeroing) {
      zeroing = true;
      // one last look at the settings: the launch may have been moved in the last minutes
      fetchCfg(2500).then(function (c) { if (c) apply(c, true); }).then(function () {
        zeroing = false;
        if (mode === "gate" && !gateWanted()) { if (cfg.intro) goLive(); else { unmount(); location.reload(); } }   // intro switched off: straight to the site
      });
    }
  }

  function introMarkup(live) {
    return '<div class="hxl-stage">' +
      '<div class="hxl-emblem" aria-hidden="true">' +
        '<svg class="hxl-hex" viewBox="0 0 100 100"><defs><linearGradient id="hxl-gr" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#00D4FF"/><stop offset=".5" stop-color="#2563EB"/><stop offset="1" stop-color="#7C3AED"/></linearGradient></defs>' +
          '<path class="h1" pathLength="1" d="M50 3 L91 26.5 L91 73.5 L50 97 L9 73.5 L9 26.5 Z"/><path class="h2" pathLength="1" d="M50 13 L82 31.5 L82 68.5 L50 87 L18 68.5 L18 31.5 Z"/></svg>' +
        '<span class="hxl-flash"></span><span class="logo-part lp-mark hxl-mark"></span></div>' +
      '<div class="hxl-name" role="img" aria-label="HEXORA"><span class="logo-part lp-word hxl-word"></span></div>' +
      '<p class="hxl-tag" aria-hidden="true">BUILD · CODE · INNOVATE</p>' +
      (live ? '<div class="hxl-live"><p class="hxl-badge">WE ARE LIVE!</p><h1>Welcome to <span class="hxl-grad">HEXORA.</span></h1>' +
        '<div class="hxl-cta"><button type="button" class="hxl-btn pri" data-go>' + "Explore HEXORA" + ICON_GO + "</button>" +
        '<a class="hxl-btn" href="' + WA + '" target="_blank" rel="noopener">' + ICON_WA + "WhatsApp</a></div></div>" : "") +
      "</div>";
  }

  // the countdown reached zero on this screen: intro, then "We are live" with "Explore HEXORA" (the page under it was never drawn, so Explore reloads it)
  function goLive() {
    clearInterval(timer); timer = 0;
    mode = "live";
    ls.set(SEEN, cfg.at);
    if (!box) return location.reload();
    box.setAttribute("role", "main");
    box.innerHTML = background() + introMarkup(true);
    var go = box.querySelector("[data-go]");
    var open = function () {
      if (go) go.disabled = true;
      box.classList.add("is-leaving");
      setTimeout(function () { location.reload(); }, reduce() ? 0 : 450);
    };
    if (go) { go.addEventListener("click", open); setTimeout(function () { try { go.focus({ preventScroll: true }); } catch (e) { /* old browser */ } }, 3600); }
    setTimeout(function () { if (mode === "live" && document.visibilityState === "visible") open(); }, 15000);   // nobody tapped: open the site anyway
  }

  // the first visit after launch: the intro plays over the page (which loads underneath), then lifts
  function showIntro() {
    mode = "intro";
    if (!mount("hx-intro")) return void document.addEventListener("DOMContentLoaded", showIntro, { once: true });
    if (!forceIntro) ls.set(SEEN, cfg.at);
    box.innerHTML = background() + introMarkup(false) + '<button type="button" class="hxl-skip" data-skip>Skip intro</button>';
    var done = false;
    var lift = function () {
      if (done) return; done = true;
      box.classList.add("is-leaving");
      setTimeout(function () { unmount(); try { window.dispatchEvent(new Event("resize")); } catch (e) { /* old browser */ } }, reduce() ? 0 : 700);
    };
    box.querySelector("[data-skip]").addEventListener("click", lift);
    setTimeout(lift, reduce() ? 900 : 3700);
  }

  /* ---------- settings from Firestore (admin panel → Launch) ---------- */
  function fetchCfg(timeout) {
    var F = window.HX_FIREBASE || {};
    if (!F.projectId || !window.fetch) return Promise.resolve(null);
    var url = "https://firestore.googleapis.com/v1/projects/" + encodeURIComponent(F.projectId) + "/databases/(default)/documents/site/launch" + (F.apiKey ? "?key=" + encodeURIComponent(F.apiKey) : "");
    var ctrl = window.AbortController ? new AbortController() : null;
    var t = ctrl && timeout ? setTimeout(function () { ctrl.abort(); }, timeout) : 0;
    return fetch(url, { cache: "no-store", signal: ctrl ? ctrl.signal : undefined }).then(function (r) {
      clearTimeout(t);
      if (r.status === 404) return {};   // never saved: the built-in default
      return r.ok ? r.json().then(function (d) {
        var f = (d && d.fields) || {}, o = {};
        if (f.enabled && "booleanValue" in f.enabled) o.enabled = f.enabled.booleanValue;
        if (f.intro && "booleanValue" in f.intro) o.intro = f.intro.booleanValue;
        if (f.at && f.at.stringValue) o.at = f.at.stringValue;
        return o;
      }) : null;
    }).catch(function () { clearTimeout(t); return null; });
  }
  function apply(raw, quiet) {
    var c = clean(raw);
    ls.set(CACHE, JSON.stringify(c));
    var changed = c.enabled !== cfg.enabled || c.at !== cfg.at || c.intro !== cfg.intro;
    cfg = c;
    if (!changed || quiet && mode === "gate" && gateWanted()) { refreshWhen(); return; }
    if (mode === "gate") {
      if (gateWanted()) { refreshWhen(); lastShown = {}; tick(); }
      else if (cfg.enabled && cfg.intro) goLive();   // the launch was moved to now / earlier
      else { unmount(); location.reload(); }   // the countdown page was switched off: show the site
    } else if (mode !== "live" && gateWanted()) {
      if (mode === "intro") unmount();
      showCountdown();   // the countdown page was switched on (or the launch moved later)
    }
  }
  function refetchSoon() {
    clearTimeout(refetchT);
    if (mode !== "gate") return;
    var left = target() - now();
    refetchT = setTimeout(function () { fetchCfg(8000).then(function (c) { if (c) apply(c); refetchSoon(); }); },
      left > 15 * 60000 ? 5 * 60000 : left > 90000 ? 60000 : Math.max(5000, left - 30000));
  }

  /* ---------- start ---------- */
  if (gateWanted()) showCountdown();
  else if (introWanted()) showIntro();

  function start() {
    fetchCfg(8000).then(function (c) {
      if (c) apply(c);
      if (!mode && introWanted()) showIntro();
      refetchSoon();
    });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start, { once: true }); else start();   // after the deferred firebase-config.js

  // correct this device's clock with the server's
  if (window.fetch) {
    var t0 = Date.now();
    fetch(location.pathname + "?hx_t=" + t0, { method: "HEAD", cache: "no-store" }).then(function (r) {
      var d = Date.parse(r.headers.get("date") || "");
      if (!isNaN(d)) { skew = d - (t0 + Date.now()) / 2; if (mode === "gate") tick(); }
    }).catch(function () { /* offline: this device's clock is used */ });
  }
  // a tab that slept (phone locked) catches up and re-reads the settings when it is seen again
  var lastVis = 0;
  document.addEventListener("visibilitychange", function () {
    if (document.hidden) return;
    if (mode === "gate") tick();
    if (Date.now() - lastVis > 60000) { lastVis = Date.now(); fetchCfg(8000).then(function (c) { if (c) apply(c); refetchSoon(); }); }
  });
})();
