/* HEXORA — package cards ("package studio"). One card per package of a category, the most popular one lit,
   a compare table for the same category, and what is paid to others. Used by the Packages page, the home page
   (popular packages) and the service pages. Prices come from config.js → packages (fixed LKR, never rescaled)
   and config.js → creative for Design & Video (USD at today's rate, main.js keeps them current).
   HXPkg.html(C, P, cat, only) → markup · HXPkg.card(C, P, key, i) → one card · HXPkg.wire(root) → compare + count-up. */
(function (root) {
  "use strict";
  const esc = s => String(s == null ? "" : s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const CATS = {
    app: { t: "Mobile Apps", short: "App", track: "pkg", fees: "packageFees", feeSub: "Google / Apple accounts, Firebase, PayHere, domain" },
    web: { t: "Websites", short: "Website", track: "web", fees: "packageFeesWeb", feeSub: "Domain, hosting, database, email, PayHere" },
    backend: { t: "Backend & Admin", short: "Backend", track: "backend", fees: "packageFeesBackend", feeSub: "Firebase quotas, Blaze billing, hosting, Supabase" },
    ai: { t: "AI & Automation", short: "AI", track: "ai", fees: "packageFeesAI", feeSub: "AI tokens, File Search, Make / n8n, hosting" },
    maint: { t: "Maintenance", short: "Maintenance", track: "maint", fees: "packageFeesMaint", feeSub: "Hosting, VPS, backups, domain, plugins, gateway" },
    design: { t: "Design & Video", short: "Design", track: "creative" }
  };
  const SHOW = 3;   // features shown on a card before "see all" (short cards: less to scroll)
  const ICON = {
    app: '<rect x="6" y="2" width="12" height="20" rx="2.5"/><path d="M11 18h2"/>',
    web: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M7 6.5h.01M10 6.5h.01"/>',
    backend: '<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/>',
    ai: '<path d="M12 3l1.8 4.6L18.5 9l-4.7 1.6L12 15l-1.8-4.4L5.5 9l4.7-1.4z"/><path d="M19 15l.8 2 2 .8-2 .8-.8 2-.8-2-2-.8 2-.8z"/>',
    maint: '<path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.4-.6-.6-2.4z"/>',
    design: '<path d="M12 2l8.7 5v10L12 22l-8.7-5V7z"/><path d="M12 22V12M12 12l8.7-5M12 12L3.3 7"/>'
  };
  const icon = k => '<svg viewBox="0 0 24 24" aria-hidden="true">' + (ICON[k] || "") + "</svg>";
  const weeks = p => { if (p.time) return p.time; if (!p.weeks) return ""; const lo = Math.max(1, Math.round(p.weeks)); return "සති " + lo + " – " + Math.max(lo + 1, Math.round(p.weeks * 1.3)); };
  const check = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.2 4.2L19 7"/></svg>';

  // one package card
  function card(C, P, k, i) {
    const p = C.packages[k]; if (!p) return "";
    const hot = !!p.badge, from = !!p.from, mo = !!p.monthly, lkr = P.packageLKR(C, p.lkr, C.fallbackRate);
    const inc = p.includes || [], rest = inc.slice(SHOW), href = "start-project.html?package=" + encodeURIComponent(k);
    const meta = [p.platform, mo ? "" : weeks(p), p.revisions ? "Revisions " + p.revisions : ""].filter(Boolean);
    return '<article class="pkc' + (hot ? " hot" : "") + '" id="pkg-' + esc(k) + '" data-pk="' + esc(k) + '" data-lkr="' + lkr + '" style="--i:' + (i || 0) + '">' +
      (hot ? '<span class="pkc-badge">' + esc(p.badge) + "</span>" : "") +
      '<h3 class="pkc-name">' + esc(p.label) + "</h3>" +
      (p.blurb ? '<p class="pkc-blurb">' + esc(p.blurb) + "</p>" : "") +
      '<div class="pkc-price">' + (from ? "<small>From</small>" : "") + '<b data-count="' + lkr + '">' + P.formatLKR(lkr) + "</b>" + (from ? "<i>+</i>" : "") + (mo ? "<span>/ මාසයට</span>" : "") + "</div>" +
      (meta.length ? '<ul class="pkc-meta">' + meta.map(m => "<li>" + esc(m) + "</li>").join("") + "</ul>" : "") +
      '<ul class="pkc-inc">' + inc.slice(0, SHOW).map(x => "<li>" + check + "<span>" + esc(x) + "</span></li>").join("") + "</ul>" +
      (rest.length || (p.excludes || []).length || p.infra ? '<details class="pkc-more"><summary>' + (rest.length ? "තව " + rest.length + " ක් සහ විස්තර" : "විස්තර") + "</summary>" +
        (rest.length ? '<ul class="pkc-inc">' + rest.map(x => "<li>" + check + "<span>" + esc(x) + "</span></li>").join("") + "</ul>" : "") +
        ((p.excludes || []).length ? '<div class="pkc-ex"><b>Include නෑ</b><ul>' + p.excludes.map(x => "<li>" + esc(x) + "</li>").join("") + "</ul></div>" : "") +
        (p.infra ? '<div class="pkc-ex"><b>වෙනම ගෙවන fees</b><p>' + esc(p.infra) + "</p></div>" : "") + "</details>" : "") +
      '<a class="btn' + (hot ? " btn-primary" : "") + ' pkc-go" href="' + href + '">' + (from ? "Quote එකක් ගන්න" : mo ? "මේ plan එක ගන්න" : "මේක තෝරගන්න") + "</a></article>";
  }

  // Design & Video: one card per item, USD at today's rate (main.js updates [data-price-usd] when the rate arrives)
  function creativeCard(C, P, k, i) {
    const it = (C.creative || {})[k]; if (!it) return "";
    const lkr = P.smartRound(it.usd * (C.fallbackRate || 0), C), hot = k === "brand";
    return '<article class="pkc' + (hot ? " hot" : "") + '" data-pk="' + esc(k) + '" style="--i:' + (i || 0) + '">' +
      (hot ? '<span class="pkc-badge">Business වලට හොඳයි</span>' : "") +
      '<h3 class="pkc-name">' + esc(it.label) + "</h3>" + '<p class="pkc-blurb">' + esc(it.note) + "</p>" +
      '<div class="pkc-price"><small>From</small><b data-price-usd="' + it.usd + '">' + P.formatLKR(lkr) + "</b><span>/ " + esc(it.unit) + "</span></div>" +
      '<ul class="pkc-meta"><li>≈ USD ' + it.usd + "</li><li>දවස් " + it.days + " ඉඳන්</li></ul>" +
      '<a class="btn' + (hot ? " btn-primary" : "") + ' pkc-go" href="start-project.html?track=creative&amp;item=' + encodeURIComponent(k) + '">Estimate ගන්න</a></article>';
  }

  function keysOf(C, P, cat, only) { return cat === "design" ? Object.keys(C.creative || {}) : Object.keys(P.packagesOf(C, cat, only)); }

  // the compare table: every package of the category side by side
  function compare(C, P, cat, keys) {
    if (cat === "design" || keys.length < 2) return "";
    const ps = keys.map(k => C.packages[k]);
    const row = (t, f) => "<tr><th scope=\"row\">" + t + "</th>" + ps.map(p => "<td>" + f(p) + "</td>").join("") + "</tr>";
    return '<div class="pk-compare" hidden><div class="pk-table-wrap" tabindex="0" role="region" aria-label="Packages compare table"><table class="pk-table"><thead><tr><th scope="col"><span class="sr-only">Package</span></th>' +
      ps.map((p, i) => '<th scope="col"' + (p.badge ? ' class="hot"' : "") + ">" + esc(p.label) + '<a href="start-project.html?package=' + encodeURIComponent(keys[i]) + '">තෝරන්න →</a></th>').join("") + "</tr></thead><tbody>" +
      row("Price", p => (p.from ? "From " : "") + P.formatLKR(P.packageLKR(C, p.lkr, C.fallbackRate)) + (p.monthly ? " / මාසයට" : "")) +
      row("කාලය", p => esc(weeks(p) || "—")) +
      row("Platform", p => esc(p.platform || "—")) +
      row("Screens / pages", p => esc(p.screens || "—")) +
      row("Revisions", p => esc(p.revisions || "—")) +
      row("Features", p => (p.includes || []).length + " ක්") +
      "</tbody></table></div></div>";
  }

  function html(C, P, cat, only) {
    cat = cat || "app";
    const keys = keysOf(C, P, cat, only);
    if (!keys.length) return "";
    const monthly = cat === "maint";
    const cards = keys.map((k, i) => (cat === "design" ? creativeCard(C, P, k, i) : card(C, P, k, i))).join("");
    const terms = cat === "design" ? [] : monthly ? (C.packageTermsMonthly || []) : (C.packageTerms || []);
    const note = cat === "design" ? "Design සහ video prices USD වලින් ගණන් බලලා අද dollar rate එකෙන් LKR වලට හරවනවා." :
      monthly ? "මේවා Hexora ගේ මාසික maintenance service fees විතරයි — hosting, VPS, cloud usage, backups, domain, plugins, gateway fees ඔයාගේ accounts වලින් වෙනම. Business-hours support; 24/7 staffed support, uptime guarantee එකක් නෑ." : (C.packageNote || "");
    const info = CATS[cat] || {}, feeList = (info.fees && C[info.fees]) || [];
    const fees = feeList.length || (C.packageQuote && !monthly && cat !== "design")
      ? '<details class="pk-fees"><summary><span>මොනවද වෙනම ගෙවන්නේ? <small>' + esc(info.feeSub || "") + '</small></span></summary><div class="pk-fees-body">' +
        (feeList.length ? "<dl>" + feeList.map(f => "<dt>" + esc(f.t) + "</dt><dd>" + esc(f.d) + "</dd>").join("") + "</dl>" : "") +
        (C.packageQuote && !monthly && cat !== "design" ? '<p class="pk-quote"><b>Quote එකේ ලියන්නේ:</b> ' + esc(C.packageQuote) + "</p>" : "") + "</div></details>" : "";
    const tools = keys.length > 1 && cat !== "design" ? '<div class="pk-tools"><button type="button" class="pk-view" data-pk-view="compare" aria-pressed="false">' +
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5h16M4 12h16M4 19h16M9 3v18"/></svg><span>Table එකෙන් compare කරන්න</span></button></div>' : "";
    return '<div class="pk-studio" data-pk-studio data-cat="' + esc(cat) + '">' + tools +
      '<div class="pk-grid">' + cards + "</div>" + compare(C, P, cat, keys) +
      ((terms.length || note) ? '<p class="pk-note">' + terms.map(esc).join(" · ") + (terms.length && note ? "<br>" : "") + esc(note) + "</p>" : "") + fees + "</div>";
  }

  // the numbers run up to the price once, when the card comes into view (or right away without motion)
  const reduce = root.matchMedia && root.matchMedia("(prefers-reduced-motion: reduce)").matches;
  function countUp(b) {
    const to = Number(b.getAttribute("data-count")); if (!to || reduce) return;
    const fmt = n => "LKR " + Math.round(n).toLocaleString("en-US"), t0 = performance.now(), dur = 900;
    const step = now => { const k = Math.min(1, (now - t0) / dur), e = 1 - Math.pow(1 - k, 4); b.textContent = fmt(to * e); if (k < 1) requestAnimationFrame(step); else b.textContent = fmt(to); };
    requestAnimationFrame(step);
  }
  function wire(el) {
    (el || document).querySelectorAll("[data-pk-studio]").forEach(st => {
      if (st.dataset.wired) return; st.dataset.wired = "1";
      const btn = st.querySelector("[data-pk-view]"), table = st.querySelector(".pk-compare"), grid = st.querySelector(".pk-grid");
      if (btn && table) btn.addEventListener("click", () => {
        const on = btn.getAttribute("aria-pressed") !== "true";
        btn.setAttribute("aria-pressed", String(on)); table.hidden = !on; grid.hidden = on;
        btn.querySelector("span").textContent = on ? "Cards වලින් බලන්න" : "Table එකෙන් compare කරන්න";
      });
      const nums = Array.from(st.querySelectorAll("[data-count]"));
      if (!("IntersectionObserver" in root)) return;
      const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { io.unobserve(e.target); countUp(e.target); } }), { threshold: 0.6 });
      nums.forEach(n => io.observe(n));
    });
  }
  root.HXPkg = { html: html, card: card, wire: wire, cats: CATS, icon: icon, keysOf: keysOf };
})(window);
