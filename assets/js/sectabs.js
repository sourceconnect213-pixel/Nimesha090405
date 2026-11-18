/* HEXORA — long pages as tabs. Every <section data-tab="Title"> under a [data-sectabs] holder becomes one tab of a
   sticky tab bar placed before the first of them; only the chosen one is shown, so the page stays short.
   Links to a section (#faq, #process, #svc-pricing, or an element inside one) open its tab, from this page or another.
   A section that is hidden because it is empty (our work, reviews) gets no tab.
   HXSecTabs.init(holder) — the home page calls it from home.js, the service pages from service.js. */
(function (root) {
  "use strict";
  const reduce = root.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const esc = s => String(s == null ? "" : s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  function init(holder) {
    if (!holder || holder.dataset.sxDone) return;
    const secs = Array.from(holder.querySelectorAll("section[data-tab]")).filter(s => !s.hidden);
    if (secs.length < 2) return;
    holder.dataset.sxDone = "1";
    secs.forEach((s, i) => { if (!s.id) s.id = "sx-" + i; });
    const bar = document.createElement("div");
    bar.className = "sx-bar";
    bar.innerHTML = '<div class="wrap"><div class="sx-tabs" role="tablist" aria-label="මේ පිටුවේ කොටස්"><span class="sx-ind" aria-hidden="true"></span>' +
      secs.map(s => '<button type="button" role="tab" id="sxt-' + esc(s.id) + '" aria-controls="' + esc(s.id) + '" aria-selected="false" tabindex="-1">' + esc(s.dataset.tab) + "</button>").join("") + "</div></div>";
    secs[0].parentNode.insertBefore(bar, secs[0]);
    const tabs = Array.from(bar.querySelectorAll("[role=tab]")), list = bar.querySelector(".sx-tabs"), ind = bar.querySelector(".sx-ind");
    secs.forEach(s => { s.setAttribute("role", "tabpanel"); s.setAttribute("aria-labelledby", "sxt-" + s.id); });

    function moveInd() {
      const t = tabs.find(x => x.getAttribute("aria-selected") === "true"); if (!t) return;
      ind.style.width = t.offsetWidth + "px"; ind.style.transform = "translateX(" + t.offsetLeft + "px)";
      const left = t.offsetLeft - (list.clientWidth - t.offsetWidth) / 2;   // the chosen tab stays in view on a phone
      list.scrollTo({ left: Math.max(0, left), behavior: reduce ? "auto" : "smooth" });
    }
    let cur = null;
    function show(sec, scroll) {
      if (!sec) return;
      if (sec !== cur) {
        secs.forEach(s => s.classList.toggle("sx-off", s !== sec));
        tabs.forEach(t => { const on = t.getAttribute("aria-controls") === sec.id; t.setAttribute("aria-selected", String(on)); t.tabIndex = on ? 0 : -1; });
        sec.classList.remove("sx-in"); void sec.offsetWidth; sec.classList.add("sx-in");
        cur = sec; moveInd();
        root.dispatchEvent(new Event("resize"));   // timelines and sliders inside measure themselves again
      }
      if (scroll) {
        const hh = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--hh")) || 64;
        const top = bar.getBoundingClientRect().top + root.scrollY - hh;
        if (Math.abs(root.scrollY - top) > 4) root.scrollTo({ top: Math.max(0, top), behavior: reduce ? "auto" : "smooth" });
      }
    }
    const secOf = id => { if (!id) return null; const el = document.getElementById(id); return el ? secs.find(s => s === el || s.contains(el)) || null : null; };
    const idOfHash = () => { try { return decodeURIComponent((location.hash || "").slice(1)); } catch (e) { return ""; } };

    tabs.forEach((t, i) => {
      t.addEventListener("click", () => {
        show(document.getElementById(t.getAttribute("aria-controls")), true);
        try { history.replaceState(null, "", location.pathname + location.search + "#" + cur.id); } catch (e) { /* file:// */ }
      });
      t.addEventListener("keydown", e => {
        const n = tabs.length, go = e.key === "ArrowRight" ? (i + 1) % n : e.key === "ArrowLeft" ? (i + n - 1) % n : e.key === "Home" ? 0 : e.key === "End" ? n - 1 : -1;
        if (go < 0) return; e.preventDefault(); tabs[go].click(); tabs[go].focus();
      });
    });
    // a link to a section on this page opens its tab (the same link clicked twice gives no hashchange, so clicks are watched too)
    document.addEventListener("click", e => {
      const a = e.target.closest('a[href*="#"]'); if (!a || e.defaultPrevented) return;
      let u; try { u = new URL(a.getAttribute("href"), location.href); } catch (err) { return; }
      if (u.pathname !== location.pathname || u.search !== location.search) return;
      const s = secOf(decodeURIComponent(u.hash.slice(1))); if (!s) return;
      e.preventDefault(); show(s, true);
      try { history.replaceState(null, "", location.pathname + location.search + "#" + s.id); } catch (err) { /* file:// */ }
    });
    root.addEventListener("hashchange", () => { const s = secOf(idOfHash()); if (s) show(s, true); });
    root.addEventListener("resize", () => { if (cur) { ind.style.width = ""; requestAnimationFrame(() => { const t = tabs.find(x => x.getAttribute("aria-selected") === "true"); if (t) { ind.style.width = t.offsetWidth + "px"; ind.style.transform = "translateX(" + t.offsetLeft + "px)"; } }); } });
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(moveInd);
    const start = secOf(idOfHash());
    show(start || secs[0], false);
    if (start) setTimeout(() => show(start, true), 60);
  }
  root.HXSecTabs = { init: init };
})(window);
