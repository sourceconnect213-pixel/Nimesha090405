/* HEXORA — mobile app packages as a "ladder": a list of the packages on one side and the chosen package's
   details on the other (home page + the Mobile Apps service page). Prices come from config.js → packages.
   Approved price list = FIXED LKR (config.js packagesFixedLkr): the price is written as it is and never
   rescaled by the dollar rate ("≈ USD" is only a guide at the fallback rate). An old-style list (LKR at
   packageBaseRate) is shown at the fallback rate and main.js then updates every [data-price-usd]. */
(function (root) {
  "use strict";
  const esc = s => String(s == null ? "" : s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const weeks = p => { if (p.time) return p.time; if (!p.weeks) return ""; const lo = Math.max(1, Math.round(p.weeks)); return "සති " + lo + " – " + Math.max(lo + 1, Math.round(p.weeks * 1.3)); };   // same range as the estimate (pricing.js)

  // cat: "app" (default) or "web"; only: optional list of package keys to show
  function html(C, P, cat, only) {
    const fixed = !!C.packagesFixedLkr, list = P.packagesOf(C, cat || "app", only), keys = Object.keys(list);
    if (!keys.length) return "";
    const first = keys.find(k => C.packages[k].badge) || keys[0];   // the most popular package is open to begin with
    let rungs = "", panels = "";
    keys.forEach(k => {
      const p = C.packages[k], usd = P.packageUSD(C, p.lkr, C.fallbackRate), hot = !!p.badge, on = k === first, from = !!p.from, mo = !!p.monthly;
      const per = mo ? '<small class="price-per"> / මාසයට</small>' : "";
      const amt = P.formatLKR(P.packageLKR(C, p.lkr, C.fallbackRate)), href = "start-project.html?package=" + encodeURIComponent(k);
      const priceAttr = fixed ? "" : ' data-price-usd="' + usd.toFixed(4) + '"';   // a fixed price is never rescaled
      const meta = [p.platform, p.screens].filter(Boolean);
      rungs += '<button type="button" class="rung' + (hot ? " hot" : "") + '" role="tab" id="rung-' + esc(k) + '" aria-controls="pk-' + esc(k) + '" aria-selected="' + on + '" tabindex="' + (on ? 0 : -1) + '">' +
        '<span class="rung-name">' + esc(p.label) + "</span>" +
        '<span class="rung-price"' + priceAttr + '>' + (from ? '<small class="rung-from">From</small> ' : "") + amt + (from ? "+" : "") + (mo ? '<small class="rung-per">/මාසයට</small>' : "") + "</span>" +
        '<span class="rung-meta">' + esc([p.platform, weeks(p)].filter(Boolean).join(" · ")) + "</span>" +
        (hot ? '<span class="rung-badge">' + esc(p.badge) + '</span><svg class="rung-star" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.5l2.9 6.1 6.6.8-4.9 4.6 1.3 6.6L12 17.3l-5.9 3.3 1.3-6.6-4.9-4.6 6.6-.8z"/></svg>' : "") + "</button>";
      panels += '<div class="pk-panel pkg-card' + (hot ? " hot" : "") + (on ? " on" : "") + '" role="tabpanel" id="pk-' + esc(k) + '" aria-labelledby="rung-' + esc(k) + '" data-card>' +
        '<div class="pk-head"><h3>' + esc(p.label) + '</h3><span class="price-from">' + (mo ? (from ? "මාසික fee · පටන් ගන්නේ · quote එකට" : "මාසික maintenance fee · fixed") : (from ? "පටන් ගන්නේ · quote එකට" : "Package · fixed price")) + "</span>" +
        (hot ? '<a class="pk-badge" href="' + href + '">' + esc(p.badge) + " →</a>" : "") + "</div>" +
        (p.blurb ? '<p class="pk-blurb">' + esc(p.blurb) + "</p>" : "") +
        '<div class="pk-price"><div class="price-amt' + (hot ? " grad-text" : "") + '"' + priceAttr + '>' + (from ? '<small class="price-pre">From</small> ' : "") + amt + (from ? "+" : "") + per + "</div>" +
        '<div class="price-usd">≈ USD ' + Math.round(usd) + (mo ? " / මාසයට" : "") + (weeks(p) && !mo ? " · " + esc(weeks(p)) : "") + (p.revisions ? " · revisions " + p.revisions : "") + "</div></div>" +
        (meta.length ? '<div class="pk-tags">' + meta.map(m => "<span>" + esc(m) + "</span>").join("") + "</div>" : "") +
        '<ul class="pk-list">' + (p.includes || []).map(x => "<li>" + esc(x) + "</li>").join("") + "</ul>" +
        ((p.excludes || []).length ? '<div class="pk-ex"><b>Include නෑ</b><ul>' + p.excludes.map(x => "<li>" + esc(x) + "</li>").join("") + "</ul></div>" : "") +
        (p.infra ? '<div class="pk-ex pk-infra"><b>වෙනම ගෙවන fees</b><p>' + esc(p.infra) + "</p></div>" : "") +
        '<a class="btn btn-primary" href="' + href + '">' + (from ? "Quote එකක් ගන්න" : "මේක තෝරගන්න") + "</a></div>";
      // (the project form opens the right track from ?package=)
    });
    const monthlyCat = cat === "maint";
    const terms = monthlyCat ? (C.packageTermsMonthly || []) : (C.packageTerms || []);
    const note = monthlyCat ? "මේවා Hexora ගේ මාසික maintenance service fees විතරයි — hosting, VPS, cloud usage, backups, domain, plugins, gateway fees ඔයාගේ accounts වලින් වෙනම. Business-hours support; 24/7 staffed support, uptime guarantee එකක් නෑ." : (C.packageNote || "");
    const foot = terms.length || note
      ? '<p class="ladder-note">' + terms.map(esc).join(" · ") + (terms.length && note ? "<br>" : "") + esc(note) + "</p>" : "";
    // what the customer pays third parties (store accounts, Firebase, PayHere, domain, hosting...) + the quote wording (one-time packages)
    const feeList = (cat === "web" ? C.packageFeesWeb : cat === "backend" ? C.packageFeesBackend : cat === "ai" ? C.packageFeesAI : cat === "maint" ? C.packageFeesMaint : C.packageFees) || [];
    const feeSub = { web: "Domain, hosting, database, email, PayHere", backend: "Firebase quotas, Blaze billing, hosting, Supabase", ai: "AI tokens, File Search, Make / n8n, hosting", maint: "Hosting, VPS, backups, domain, plugins, gateway" }[cat] || "Google / Apple accounts, Firebase, PayHere, domain";
    const fees = feeList.length || C.packageQuote
      ? '<details class="pk-fees"><summary><span>මොනවද වෙනම ගෙවන්නේ? <small>' + esc(feeSub) + '</small></span></summary><div class="pk-fees-body">' +
        (feeList.length ? "<dl>" + feeList.map(f => "<dt>" + esc(f.t) + "</dt><dd>" + esc(f.d) + "</dd>").join("") + "</dl>" : "") +
        (C.packageQuote && !monthlyCat ? '<p class="pk-quote"><b>Quote එකේ ලියන්නේ:</b> ' + esc(C.packageQuote) + "</p>" : "") + "</div></details>" : "";
    return '<div class="ladder" data-ladder><div class="ladder-list" tabindex="0" role="tablist" aria-label="' + ({ web: "Website packages", backend: "Backend & admin packages", ai: "AI packages", maint: "Maintenance plans" }[cat] || "App packages") + '" aria-orientation="vertical">' + rungs + '</div><div class="ladder-panel">' + panels + "</div></div>" + foot + fees;
  }
  root.HXPkg = { html: html };
})(window);
