/* HEXORA — the Packages page: the category switch (with a sliding highlight), the cards of the chosen category
   (they deal in one after another), a budget finder that lights the package that fits, and shareable addresses:
   packages.html#web (a category) · packages.html#pkg-firebase (one package, lit and brought into view). */
(function () {
  "use strict";
  const C = window.HEXORA || {}, P = window.HXPrice, K = window.HXPkg;
  const sw = document.getElementById("pk-switch"), panel = document.getElementById("pk-panel"), finder = document.getElementById("pk-finder");
  if (!sw || !panel || !P || !K || !C.packages) return;
  const esc = s => String(s == null ? "" : s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const cats = Object.keys(K.cats).filter(c => K.keysOf(C, P, c).length);
  const fromLkr = c => {
    if (c === "design") { const u = Math.min.apply(null, Object.values(C.creative || {}).map(x => x.usd)); return P.smartRound(u * (C.fallbackRate || 0), C); }
    const v = Object.values(P.packagesOf(C, c)).map(p => P.packageLKR(C, p.lkr, C.fallbackRate)); return Math.min.apply(null, v);
  };

  sw.innerHTML = '<span class="pk-ind" aria-hidden="true"></span>' + cats.map(c =>
    '<button type="button" role="tab" id="pkt-' + c + '" aria-controls="pk-panel" aria-selected="false" tabindex="-1" data-cat="' + c + '">' +
    '<span class="pk-ic">' + K.icon(c) + '</span><span class="pk-t"><b>' + esc(K.cats[c].t) + "</b><small>" + P.formatLKR(fromLkr(c)) + (c === "maint" ? " / මාසයට" : "") + " ඉඳන්</small></span></button>").join("");
  const tabs = Array.from(sw.querySelectorAll("[role=tab]")), ind = sw.querySelector(".pk-ind");
  function moveInd() {
    const t = tabs.find(x => x.getAttribute("aria-selected") === "true"); if (!t) return;
    ind.style.width = t.offsetWidth + "px"; ind.style.height = t.offsetHeight + "px";
    ind.style.transform = "translate(" + t.offsetLeft + "px," + t.offsetTop + "px)";
  }

  // budget finder (not for design): lights the dearest package that fits the budget
  const BUDGETS = [["LKR 30,000 ට අඩු", 0, 30000], ["30,000 – 100,000", 30000, 100000], ["100,000 – 300,000", 100000, 300000], ["300,000 ට වැඩි", 300000, Infinity]];
  function paintFinder(cat) {
    if (cat === "design") { finder.innerHTML = ""; finder.hidden = true; return; }
    finder.hidden = false;
    finder.innerHTML = '<span class="pk-f-q">Budget එක කීයද?</span><div class="pk-f-opts" role="group" aria-label="Budget">' +
      BUDGETS.map((b, i) => '<button type="button" data-b="' + i + '" aria-pressed="false">' + esc(b[0]) + (cat === "maint" ? " / මාසෙ" : "") + "</button>").join("") + '</div><span class="pk-f-out" aria-live="polite"></span>';
  }
  finder.addEventListener("click", e => {
    const b = e.target.closest("[data-b]"); if (!b) return;
    const [, lo, hi] = BUDGETS[Number(b.dataset.b)];
    finder.querySelectorAll("[data-b]").forEach(x => x.setAttribute("aria-pressed", String(x === b)));
    const cards = Array.from(panel.querySelectorAll(".pkc[data-lkr]"));
    cards.forEach(c => c.classList.remove("fit"));
    const fits = cards.filter(c => { const v = Number(c.dataset.lkr); return v >= lo && v < hi; });
    const out = finder.querySelector(".pk-f-out");
    if (!fits.length) { out.textContent = "මේ budget එකට package එකක් නෑ — chat කරලා custom quote එකක් ගන්න."; return; }
    const best = fits[fits.length - 1];
    fits.forEach(c => c.classList.add("fit"));
    out.innerHTML = "හරියන්නේ: <b>" + esc(best.querySelector(".pkc-name").textContent) + "</b>" + (fits.length > 1 ? " (තව " + (fits.length - 1) + " ක්)" : "");
    best.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "center", inline: "center" });
  });

  let cur = "";
  function show(cat, focusKey) {
    if (cats.indexOf(cat) < 0) cat = cats[0];
    const changed = cat !== cur; cur = cat;
    tabs.forEach(t => { const on = t.dataset.cat === cat; t.setAttribute("aria-selected", String(on)); t.tabIndex = on ? 0 : -1; });
    sw.setAttribute("data-cur", cat);
    moveInd();
    if (changed) {
      panel.setAttribute("aria-labelledby", "pkt-" + cat);
      panel.innerHTML = K.html(C, P, cat);
      panel.classList.remove("deal"); void panel.offsetWidth; panel.classList.add("deal");
      K.wire(panel);
      paintFinder(cat);
      document.dispatchEvent(new CustomEvent("hx:prices"));   // main.js puts today's rate on the design prices
    }
    if (focusKey) {
      const el = document.getElementById("pkg-" + focusKey);
      if (el) { el.classList.add("lit"); setTimeout(() => el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "center" }), 250); }
    }
  }
  const fromHash = () => {
    const h = decodeURIComponent((location.hash || "").slice(1));
    const m = h.match(/^pkg-([\w-]+)$/);
    if (m && C.packages[m[1]]) return [C.packages[m[1]].cat || "app", m[1]];
    if (m && C.creative && C.creative[m[1]]) return ["design", ""];
    return [cats.indexOf(h) >= 0 ? h : cats[0], ""];
  };
  tabs.forEach((t, i) => {
    t.addEventListener("click", () => { show(t.dataset.cat); try { history.replaceState(null, "", "#" + t.dataset.cat); } catch (e) { /* file:// */ } });
    t.addEventListener("keydown", e => {
      const n = tabs.length, go = e.key === "ArrowRight" ? (i + 1) % n : e.key === "ArrowLeft" ? (i + n - 1) % n : e.key === "Home" ? 0 : e.key === "End" ? n - 1 : -1;
      if (go < 0) return; e.preventDefault(); tabs[go].click(); tabs[go].focus();
    });
  });
  window.addEventListener("hashchange", () => { const [c, k] = fromHash(); show(c, k); });
  window.addEventListener("resize", moveInd);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(moveInd);
  const [c0, k0] = fromHash();
  show(c0, k0);
})();
