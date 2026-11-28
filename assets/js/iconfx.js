/* HEXORA — icon motion
   Every icon gets a small animation that matches what it is: the house hops, the bag swings, the cart rolls,
   the chat icon rings, the AI sparkles twinkle, the wrench turns, the clock hand goes round, and so on.
   • It plays once when the pointer comes onto (or a finger taps, or the keyboard focuses) the link,
     button or card the icon is in.
   • Line icons draw themselves in once, the first time they scroll into view.
   • The showcase icons (service categories, shop tiles, features) also play by themselves: as they come
     into view, then one at a time in a slow wave while they are on screen (phones have no hover).
   • Icons are recognised by their shape, so icons drawn later by other scripts are picked up too.
   • Nothing moves for people who ask their system for reduced motion. */
(function () {
  "use strict";
  if (!window.requestAnimationFrame || !document.querySelectorAll) return;
  const still = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;

  // shape signature → motion. A signature is each shape's tag letter + the start of its path data.
  const MAP = [
    ["p:M3 11l9-7 9 7", "home"], ["p:M12 3l9 5-9 5", "layers"], ["p:M12 2l8.7 5v10", "cube"],
    ["p:M6 7h12l-1 13", "swing"], ["r|p:M8 7V5", "lift"], ["p:M3 4h2l2.4 11", "cart"],
    ["c|p:M4 21a8 8", "nod"], ["c|p:M4 21c0-4", "nod"], ["p:M21 11.5a8.4", "ring"], ["p:M12 3C6.5 3 2", "ring"], ["p:M21 15a2 2 0 0", "ring"],
    ["c|p:M20 20l-3.5", "search"], ["p:M6 6l12 12", "spin"], ["p:M12 5v14M5 12h", "spin"],
    ["p:M5 12h14M13 6l", "right"], ["p:M9 6l6 6-6 6", "right"], ["p:M15 6l-6 6 6 6", "left"], ["p:M12 19V5", "up"], ["p:M6 9l6 6 6-6", "down"],
    ["p:M5 12.5l4", "check"],
    ["p:M12 3l1.8 4", "twinkle"], ["p:M14.7 6.3a4", "wrench"], ["e|p:M4 5.5v6c0", "stack"], ["e|p:M4 5v6c0", "stack"],
    ["r|p:M11 18h2", "buzz"], ["r|p:M3 9h18M7 6.5", "browser"], ["r|r|r|r", "grid"], ["r|p:M17 10l5-3v10", "play"],
    ["r|p:M3 15l5-5 4 4", "pop"], ["p:M3 7h3l2-3h8l2", "flash"], ["c|p:M10 8.5v7l6", "spin360"], ["p:M12 20h9|p:M16.5 3.5", "write"],
    ["c|p:M12 7v5l3 3", "clock"], ["p:M12 2l7 4v6c0", "shield"], ["p:M16 18l6-6-6-6", "code"], ["r|p:M3 10h18M7 15", "flip"],
    ["p:M4 4h16v12H4z", "pop"], ["r|p:M8 11V8a4", "shake"], ["p:M2 12s3.6-7", "blink"], ["r|p:M3 7l9 6 9-6", "mail"],
    ["p:M4 5h16M4 12h1", "pop"], ["r|p:M5 15V5a2", "pop"], ["p:M50 4 89 27v46", "hex"]
  ];
  const SHAPES = "path,rect,circle,polygon,polyline,line,ellipse";
  function sig(svg) {
    return Array.from(svg.querySelectorAll(SHAPES)).map(x => {
      const d = x.getAttribute("d") || x.getAttribute("points") || "";
      return x.tagName[0].toLowerCase() + (d ? ":" + d.trim() : "");
    }).join("|");
  }
  function kindOf(svg) {
    const s = sig(svg);
    if (!s) return "";
    for (const [k, fx] of MAP) {
      // each part of the key must start the matching part of the signature
      const kp = k.split("|"), sp = s.split("|");
      if (kp.length > sp.length) continue;
      if (kp.every((p, i) => sp[i].indexOf(p) === 0)) return fx;
    }
    return "pop";   // any other icon still gets a gentle pop
  }
  // icons that already have their own animation or are not icons at all
  const SKIP = ".mk-up, .sum-check, .success-hex, .hxl, .hxl-hex, .hx3d-canvas, .acc-steps, [data-fx-off]";
  const HOST = "a, button, label, summary, [role='tab'], .sp-card, .sp-cat, .pk-tab, .shop-trust > div, .nsp-col li";

  const io = !still && "IntersectionObserver" in window ? new IntersectionObserver(es => {
    es.forEach(e => {
      if (!e.isIntersecting) return;
      io.unobserve(e.target);
      const s = e.target;
      s.classList.add("fx-draw");
      setTimeout(() => s.classList.remove("fx-draw"), 1400);
    });
  }, { rootMargin: "0px 0px -6% 0px" }) : null;

  function tag(svg) {
    if (svg.hasAttribute("data-fx") || svg.closest(SKIP)) return;
    const w = svg.viewBox && svg.viewBox.baseVal ? svg.viewBox.baseVal.width : 0;
    if (w && w > 120) return;   // a picture, not an icon
    svg.setAttribute("data-fx", kindOf(svg));
    if (!io) return;
    // line icons draw in: only when nothing else styles their dashes
    const cs = getComputedStyle(svg);
    if (cs.stroke === "none" || (cs.strokeDasharray && cs.strokeDasharray !== "none")) return;
    svg.querySelectorAll(SHAPES).forEach(x => { if (!x.hasAttribute("pathLength")) x.setAttribute("pathLength", "1"); });
    io.observe(svg);
  }

  let queued = false;
  function scan() {
    queued = false;
    document.querySelectorAll("svg:not([data-fx])").forEach(tag);
    watchShow();
  }
  const later = () => { if (!queued) { queued = true; requestAnimationFrame(scan); } };

  // play: once per enter / tap / focus; a new run restarts cleanly
  function play(s) {
    if (still || !s || s.closest(SKIP)) return;
    clearTimeout(s._fxT);
    s.classList.remove("fx-run"); void s.getBoundingClientRect(); s.classList.add("fx-run");
    s._fxT = setTimeout(() => s.classList.remove("fx-run"), 1100);   // every motion is shorter than this
  }
  function run(host) {
    if (still || !host) return;
    host.querySelectorAll("svg[data-fx]").forEach(play);
  }

  /* ---------- the showcase icons (service categories, shop tiles, features) play by themselves ----------
     • each one plays its motion as it comes into view (one after another down a grid)
     • then, while they are on screen, a slow wave plays them one at a time, so the page always feels alive
     • tiles that are on screen get .fx-on, which runs their light sweep (iconfx.css); off screen nothing runs */
  const SHOW = ".sp-cat-ic svg, .sp-tile .sp-ico, .hex-icon svg, .pk-ic svg, .shop-trust svg, .ic svg, .sb-art svg, .nsp-col svg";
  const TILES = ".sp-cat-ic, .sp-tile, .hex-icon, .pk-ic";
  const onScreen = new Set();
  let entering = [], enterT = 0;
  const showIo = !still && "IntersectionObserver" in window ? new IntersectionObserver(es => {
    es.forEach(e => {
      const el = e.target;
      if (el.tagName.toLowerCase() !== "svg") { el.classList.toggle("fx-on", e.isIntersecting); return; }
      if (e.isIntersecting) {
        onScreen.add(el);
        if (!el._fxSeen) { el._fxSeen = true; entering.push(el); }
      } else onScreen.delete(el);
    });
    if (entering.length && !enterT) enterT = setTimeout(() => {
      // after the draw-in, top to bottom, left to right
      const list = entering.sort((a, b) => { const r = a.getBoundingClientRect(), q = b.getBoundingClientRect(); return (r.top - q.top) || (r.left - q.left); });
      entering = []; enterT = 0;
      list.forEach((s, i) => setTimeout(() => play(s), 650 + i * 110));
    }, 60);
  }, { threshold: .6 }) : null;
  function watchShow() {
    if (!showIo) return;
    document.querySelectorAll(SHOW).forEach(s => { if (!s._fxShow && s.hasAttribute("data-fx")) { s._fxShow = true; showIo.observe(s); } });
    document.querySelectorAll(TILES).forEach(t => { if (!t._fxShow) { t._fxShow = true; showIo.observe(t); } });
  }
  let waveI = 0, lastTouch = 0;
  if (showIo) setInterval(() => {
    if (document.hidden || Date.now() - lastTouch < 2500 || !onScreen.size) return;
    const list = Array.from(onScreen).filter(s => s.isConnected && s.getBoundingClientRect().width > 0);
    if (!list.length) return;
    list.sort((a, b) => (a.compareDocumentPosition(b) & 4) ? -1 : 1);
    play(list[waveI++ % list.length]);
  }, 1400);
  let last = null;
  document.addEventListener("pointerover", e => {
    if (e.pointerType !== "mouse") return;
    const h = e.target.closest && e.target.closest(HOST);
    if (h === last) return;
    last = h;
    run(h);
  }, { passive: true });
  document.addEventListener("pointerdown", () => { lastTouch = Date.now(); }, { passive: true, capture: true });
  document.addEventListener("pointerdown", e => {
    if (e.pointerType === "mouse") return;
    run(e.target.closest && e.target.closest(HOST));
  }, { passive: true });
  document.addEventListener("focusin", e => { if (e.target.matches && e.target.matches(":focus-visible")) run(e.target.closest(HOST)); });

  scan();
  if (window.MutationObserver) new MutationObserver(later).observe(document.body, { childList: true, subtree: true });
  window.addEventListener("load", later);
})();
