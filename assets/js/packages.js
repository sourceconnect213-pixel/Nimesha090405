/* HEXORA — mobile app packages as a "ladder": a list of the packages on one side and the chosen package's
   details on the other (home page + the Mobile Apps service page). Prices come from config.js → packages.
   Approved price list = FIXED LKR (config.js packagesFixedLkr): the price is written as it is and never
   rescaled by the dollar rate ("≈ USD" is only a guide at the fallback rate). An old-style list (LKR at
   packageBaseRate) is shown at the fallback rate and main.js then updates every [data-price-usd]. */
(function (root) {
  "use strict";
  const esc = s => String(s == null ? "" : s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const weeks = p => { if (p.time) return p.time; if (!p.weeks) return ""; const lo = Math.max(1, Math.round(p.weeks)); return "සති " + lo + " – " + Math.max(lo + 1, Math.round(p.weeks * 1.3)); };   // same range as the estimate (pricing.js)

  function html(C, P) {
    const fixed = !!C.packagesFixedLkr, keys = Object.keys(C.packages || {});
    if (!keys.length) return "";
    const first = keys.find(k => C.packages[k].badge) || keys[0];   // the most popular package is open to begin with
    let rungs = "", panels = "";
    keys.forEach(k => {
      const p = C.packages[k], usd = P.packageUSD(C, p.lkr, C.fallbackRate), hot = !!p.badge, on = k === first, from = !!p.from;
      const amt = P.formatLKR(P.packageLKR(C, p.lkr, C.fallbackRate)), href = "start-project.html?package=" + encodeURIComponent(k);
      const priceAttr = fixed ? "" : ' data-price-usd="' + usd.toFixed(4) + '"';   // a fixed price is never rescaled
      const meta = [p.platform, p.screens].filter(Boolean);
      rungs += '<button type="button" class="rung' + (hot ? " hot" : "") + '" role="tab" id="rung-' + esc(k) + '" aria-controls="pk-' + esc(k) + '" aria-selected="' + on + '" tabindex="' + (on ? 0 : -1) + '">' +
        '<span class="rung-name">' + esc(p.label) + "</span>" +
        '<span class="rung-price"' + priceAttr + '>' + (from ? '<small class="rung-from">From</small> ' : "") + amt + (from ? "+" : "") + "</span>" +
        '<span class="rung-meta">' + esc([p.platform, weeks(p)].filter(Boolean).join(" · ")) + "</span>" +
        (hot ? '<span class="rung-badge">' + esc(p.badge) + '</span><svg class="rung-star" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.5l2.9 6.1 6.6.8-4.9 4.6 1.3 6.6L12 17.3l-5.9 3.3 1.3-6.6-4.9-4.6 6.6-.8z"/></svg>' : "") + "</button>";
      panels += '<div class="pk-panel pkg-card' + (hot ? " hot" : "") + (on ? " on" : "") + '" role="tabpanel" id="pk-' + esc(k) + '" aria-labelledby="rung-' + esc(k) + '" data-card>' +
        '<div class="pk-head"><h3>' + esc(p.label) + '</h3><span class="price-from">' + (from ? "පටන් ගන්නේ · quote එකට" : "Package · fixed price") + "</span>" +
        (hot ? '<a class="pk-badge" href="' + href + '">' + esc(p.badge) + " →</a>" : "") + "</div>" +
        '<div class="pk-price"><div class="price-amt' + (hot ? " grad-text" : "") + '"' + priceAttr + '>' + (from ? '<small class="price-pre">From</small> ' : "") + amt + (from ? "+" : "") + "</div>" +
        '<div class="price-usd">≈ USD ' + Math.round(usd) + (weeks(p) ? " · " + esc(weeks(p)) : "") + (p.revisions ? " · revisions " + p.revisions : "") + "</div></div>" +
        (meta.length ? '<div class="pk-tags">' + meta.map(m => "<span>" + esc(m) + "</span>").join("") + "</div>" : "") +
        '<ul class="pk-list">' + (p.includes || []).map(x => "<li>" + esc(x) + "</li>").join("") + "</ul>" +
        ((p.excludes || []).length ? '<div class="pk-ex"><b>Include නෑ</b><ul>' + p.excludes.map(x => "<li>" + esc(x) + "</li>").join("") + "</ul></div>" : "") +
        '<a class="btn btn-primary" href="' + href + '">' + (from ? "Quote එකක් ගන්න" : "මේක තෝරගන්න") + "</a></div>";
    });
    const foot = (C.packageTerms || []).length || C.packageNote
      ? '<p class="ladder-note">' + (C.packageTerms || []).map(esc).join(" · ") + ((C.packageTerms || []).length && C.packageNote ? "<br>" : "") + esc(C.packageNote || "") + "</p>" : "";
    return '<div class="ladder" data-ladder><div class="ladder-list" tabindex="0" role="tablist" aria-label="App packages" aria-orientation="vertical">' + rungs + '</div><div class="ladder-panel">' + panels + "</div></div>" + foot;
  }
  root.HXPkg = { html: html };
})(window);
