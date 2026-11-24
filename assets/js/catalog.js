/* HEXORA — the shop catalogue and the cart.
   Products are not written twice: they come from the price list the site already has.
     • every package in config.js (apps, websites, backend, AI, maintenance)  → id "p-<key>"
     • every design / video item in config.js → creative                       → id "c-<key>"
   Prices: packages are fixed LKR; design / video items are USD × today's rate (pricing.js).
   "From" packages (Custom …) cannot go in the cart: they open the quote form instead.
   The cart is kept in this browser (localStorage hx_cart_v1: [{ id, qty }]). The header badge listens to "hx:cart". */
(function (root) {
  "use strict";
  const C = root.HEXORA || {}, S = root.HX_SERVICES || { list: [] }, P = root.HXPrice;
  if (!P) return;
  const KEY = "hx_cart_v1";
  const esc = s => String(s == null ? "" : s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  /* ---------- categories: the service pages, in shop order ---------- */
  const CAT_ORDER = ["mobile-apps", "websites", "business-systems", "backend-admin", "ai-features", "maintenance-hosting",
    "logo-branding", "social-print", "photo-editing", "video-editing", "motion-graphics", "ui-ux-design"];
  const CAT_SHORT = { "mobile-apps": "Mobile Apps", websites: "Websites", "business-systems": "Business Systems", "backend-admin": "Backend & Admin",
    "ai-features": "AI & Automation", "maintenance-hosting": "Maintenance", "logo-branding": "Logo & Branding", "social-print": "Social & Print",
    "photo-editing": "Photo Editing", "video-editing": "Video Editing", "motion-graphics": "Motion Graphics", "ui-ux-design": "UI/UX Design" };
  // colours of the picture tile of each category (two stops of a gradient, all from the logo's blue – violet range)
  const CAT_TINT = { "mobile-apps": ["#2563EB", "#00B4E6"], websites: ["#1D4ED8", "#7C3AED"], "business-systems": ["#0E7490", "#2563EB"], "backend-admin": ["#3730A3", "#0EA5E9"],
    "ai-features": ["#7C3AED", "#DB2777"], "maintenance-hosting": ["#0F766E", "#22C55E"], "logo-branding": ["#9333EA", "#2563EB"], "social-print": ["#DB2777", "#F59E0B"],
    "photo-editing": ["#EA580C", "#DB2777"], "video-editing": ["#DC2626", "#7C3AED"], "motion-graphics": ["#0891B2", "#7C3AED"], "ui-ux-design": ["#4F46E5", "#06B6D4"] };
  const svc = slug => (S.list || []).find(s => s.slug === slug) || null;
  const cats = CAT_ORDER.map(slug => { const s = svc(slug); return s ? { slug: slug, name: CAT_SHORT[slug] || s.name, full: s.name, icon: s.icon, short: s.short || s.summary || "", tint: CAT_TINT[slug] || ["#2563EB", "#7C3AED"] } : null; }).filter(Boolean);
  const catOf = slug => cats.find(c => c.slug === slug) || null;

  const PKG_CAT = k => {
    const p = (C.packages || {})[k]; if (!p) return "";
    const c = p.cat || "app";
    if (c === "app") return "mobile-apps";
    if (c === "web") return k === "web-advanced" || k === "web-custom" ? "business-systems" : "websites";
    return { backend: "backend-admin", ai: "ai-features", maint: "maintenance-hosting" }[c] || "";
  };
  const CR_CAT = { logo: "logo-branding", brand: "logo-branding", social: "social-print", poster: "social-print", thumb: "social-print", photo: "photo-editing",
    reel: "video-editing", youtube: "video-editing", motion: "motion-graphics", promo: "motion-graphics" };
  // a few words for each design / video item (the price list only has a label and a short note)
  const CR_TEXT = {
    logo: "ඔයාගේ business එකට ගැළපෙන, මතක හිටින logo එකක්. මුලින් concepts 3ක් පෙන්නනවා, ඔයා තෝරන එකට වෙනස්කම් 3ක් දක්වා free. PNG, JPG, SVG, PDF ඔක්කොම ලැබෙනවා.",
    brand: "Logo එක, ඔයාගේ brand colours, fonts, business card design එක, Facebook / Instagram designs. හැම තැනම එක වගේ පේන්න ඕන ඔක්කොම එක kit එකක.",
    social: "Offers, අලුත් products, දවසේ විශේෂ වගේ දේවල් වලට Facebook / Instagram post designs. ඔයාගේ brand colours එක්ක, සිංහලෙන් හරි English වලින් හරි.",
    poster: "කඩේට poster එකක්, event එකකට flyer එකක්, banner එකක්. Print කරන්න ගැළපෙන high quality file එකයි online දාන්න file එකයි දෙකම දෙනවා.",
    thumb: "YouTube video එකට click කරන්න හිතෙන thumbnail එකක්. Video එකේ නම, ඔයාගේ face / product එක්ක.",
    photo: "Background එක අයින් කරලා, colours, light හදලා, පොඩි අඩුපාඩු අයින් කරලා. Daraz, online shop, Facebook වලට දාන්න ගැළපෙන product photos.",
    reel: "තත්පර 60 දක්වා Reel / TikTok / Short එකක්. Cuts, subtitles, music, colours හදලා post කරන්න ready කරලා දෙනවා.",
    youtube: "විනාඩි 10 දක්වා YouTube video එකක් edit කරලා දෙනවා: අනවශ්‍ය කොටස් කපලා, subtitles, music, colours එක්ක.",
    motion: "ඔයාගේ logo එක animate කරලා video වල මුලට දාන්න ගැළපෙන තත්පර කීපයක intro එකක්.",
    promo: "ඔයාගේ product එකට හරි business එකට හරි තත්පර 30 – 60ක video ad එකක්. Facebook, Instagram, YouTube වලට."
  };
  const CR_INC = {
    logo: ["Concepts 3ක්", "තෝරන එකට වෙනස්කම් 3ක් දක්වා free", "PNG, JPG, SVG, PDF files"],
    brand: ["Logo එක (concepts 3ක්)", "Brand colours, fonts", "Business card design එක", "Social media designs"],
    social: ["Post design එකක්", "ඔයාගේ logo, colours එක්ක", "Facebook / Instagram size වලට"],
    poster: ["Design එකක්", "Print කරන්න file එක", "Online දාන්න file එක"],
    thumb: ["Thumbnail එකක් (1280 × 720)", "Video එකේ නම, ඔයාගේ photo එක්ක"],
    photo: ["Photo එකක්", "Background අයින් කරලා / සුදු කරලා", "Colours, light හදලා"],
    reel: ["Video එකක් (තත්පර 60 දක්වා)", "Cuts, subtitles, music", "Colours හදලා"],
    youtube: ["Video එකක් (විනාඩි 10 දක්වා)", "Cuts, subtitles, music", "Colours හදලා"],
    motion: ["Logo animation / intro එකක්", "Music එක්ක", "Video වලට දාන්න ගැළපෙන file එක"],
    promo: ["තත්පර 30 – 60ක video ad එකක්", "Text, music, ඔයාගේ logo එක්ක", "Facebook / Instagram / YouTube size වලට"]
  };

  /* ---------- the products ---------- */
  let rate = C.fallbackRate || 369;
  const crLKR = it => P.smartRound(it.usd * rate, C);
  const dayText = (d, x) => { const lo = Math.max(1, Math.round(d)); return "දවස් " + lo + (x ? " – " + Math.max(lo + 1, Math.ceil(d * 1.4)) : ""); };
  function build() {
    const out = [];
    Object.keys(C.packages || {}).forEach(k => {
      const p = C.packages[k], cat = PKG_CAT(k); if (!cat) return;
      out.push({ id: "p-" + k, key: k, kind: "pkg", cat: cat, name: p.label, blurb: p.blurb || "", price: P.packageLKR(C, p.lkr, rate), from: !!p.from, monthly: !!p.monthly,
        time: p.time || "", badge: p.badge || "", includes: p.includes || [], excludes: p.excludes || [], infra: p.infra || "", screens: p.screens || "", platform: p.platform || "", revisions: p.revisions || 0, max: 1 });
    });
    Object.keys(C.creative || {}).forEach(k => {
      const it = C.creative[k], cat = CR_CAT[k] || "logo-branding";
      out.push({ id: "c-" + k, key: k, kind: "cr", cat: cat, name: it.label, blurb: CR_TEXT[k] || it.note || "", note: it.note || "", price: crLKR(it), from: false, monthly: false,
        time: dayText(it.days, true), unit: it.unit || "", badge: k === "logo" ? "ගොඩක් අය ගන්නේ" : "", includes: CR_INC[k] || [], excludes: [], infra: "", max: 100 });
    });
    return out;
  }
  let products = build();
  const byId = id => products.find(p => p.id === id) || null;
  // today's dollar rate changes only the design / video prices
  const ready = P.getRate(C).then(r => { if (r && r.rate) { rate = r.rate; products = build(); } return api; });

  /* ---------- search: every word must appear in the name, the category or the description ---------- */
  const norm = s => String(s || "").toLowerCase();
  // best first: words in the name, then in the category, then only in the description
  function search(q, cat) {
    const words = norm(q).split(/\s+/).filter(Boolean);
    const found = [];
    products.forEach((p, i) => {
      if (cat && p.cat !== cat) return;
      if (!words.length) return found.push({ p: p, s: 0, i: i });
      const c = catOf(p.cat), name = norm(p.name), cn = norm(c ? c.name + " " + c.full : ""), hay = norm([p.name, cn, p.blurb, p.platform, p.includes.join(" ")].join(" "));
      if (!words.every(w => hay.indexOf(w) !== -1)) return;
      found.push({ p: p, s: words.reduce((n, w) => n + (name.indexOf(w) !== -1 ? 4 : cn.indexOf(w) !== -1 ? 2 : 0), 0), i: i });
    });
    return found.sort((a, b) => b.s - a.s || a.i - b.i).map(x => x.p);
  }

  /* ---------- the cart ---------- */
  const readCart = () => { try { const c = JSON.parse(localStorage.getItem(KEY)); return Array.isArray(c) ? c.filter(x => x && typeof x.id === "string" && x.qty > 0) : []; } catch (e) { return []; } };
  function writeCart(c) {
    try { localStorage.setItem(KEY, JSON.stringify(c)); } catch (e) { /* storage blocked */ }
    try { root.dispatchEvent(new Event("hx:cart")); } catch (e) { /* old browser */ }
  }
  const lines = () => readCart().map(x => { const p = byId(x.id); return p && !p.from ? { p: p, qty: Math.min(p.max, Math.max(1, Math.floor(x.qty))) } : null; }).filter(Boolean);
  const count = () => lines().reduce((n, l) => n + l.qty, 0);
  function add(id, qty) {
    const p = byId(id); if (!p || p.from) return false;
    const c = readCart(), have = c.find(x => x.id === id);
    if (have) have.qty = Math.min(p.max, have.qty + (qty || 1)); else c.push({ id: id, qty: Math.min(p.max, qty || 1) });
    writeCart(c); return true;
  }
  function setQty(id, qty) {
    const p = byId(id), c = readCart().filter(x => x.id !== id || (qty > 0));
    const have = c.find(x => x.id === id); if (have && p) have.qty = Math.min(p.max, Math.max(1, Math.floor(qty)));
    writeCart(c);
  }
  const remove = id => writeCart(readCart().filter(x => x.id !== id));
  const clear = () => writeCart([]);
  const has = id => readCart().some(x => x.id === id);
  // what the order costs and what is paid now: a one-time job pays the advance %, a monthly plan pays its first month in full
  function totals() {
    const ls = lines(), adv = C.advancePercent || 50;
    const once = ls.filter(l => !l.p.monthly).reduce((s, l) => s + l.p.price * l.qty, 0);
    const monthly = ls.filter(l => l.p.monthly).reduce((s, l) => s + l.p.price * l.qty, 0);
    const advance = once ? P.smartRound(once * adv / 100, C) : 0;
    return { lines: ls, once: once, monthly: monthly, advance: advance, advancePercent: adv, dueNow: advance + monthly, later: once - advance, items: ls.reduce((n, l) => n + l.qty, 0) };
  }

  /* ---------- small pieces of HTML shared by the shop pages ---------- */
  const money = n => P.formatLKR(n);
  const priceHtml = p => (p.from ? '<small>ඉඳන්</small> ' : "") + "<b>" + money(p.price) + "</b>" + (p.monthly ? "<small> / මාසෙට</small>" : p.kind === "cr" && p.unit ? "<small> / " + esc(p.unit) + "</small>" : "");
  // the picture of a product: its category's colours, the service icon and the name; no stock photos, nothing made up
  function tile(p, big) {
    const c = catOf(p.cat) || { tint: ["#2563EB", "#7C3AED"], icon: "", name: "" };
    return '<span class="sp-tile' + (big ? " big" : "") + '" style="--t1:' + c.tint[0] + ";--t2:" + c.tint[1] + '" aria-hidden="true">' +
      '<svg class="sp-hex" viewBox="0 0 100 100"><path d="M50 4 89 27v46L50 96 11 73V27z"/></svg>' +
      '<svg class="sp-ico" viewBox="0 0 24 24">' + c.icon + "</svg>" +
      '<span class="sp-tcat">' + esc(c.name) + "</span></span>";
  }
  function card(p) {
    return '<a class="sp-card" href="product.html?id=' + encodeURIComponent(p.id) + '">' + tile(p) +
      (p.badge ? '<span class="sp-badge">' + esc(p.badge) + "</span>" : "") +
      '<span class="sp-body"><span class="sp-name">' + esc(p.name) + '</span><span class="sp-price">' + priceHtml(p) + "</span>" +
      '<span class="sp-meta">' + esc(p.time || "") + (p.monthly ? " · මාසික plan" : p.from ? " · Quote එකට" : "") + "</span></span></a>";
  }
  function catTile(c) {
    return '<a class="sp-cat" href="shop.html?c=' + encodeURIComponent(c.slug) + '"><span class="sp-cat-ic" style="--t1:' + c.tint[0] + ";--t2:" + c.tint[1] + '"><svg viewBox="0 0 24 24" aria-hidden="true">' + c.icon + "</svg></span><span>" + esc(c.name) + "</span></a>";
  }

  /* ---------- the header: cart badge ---------- */
  function badge() {
    const n = count();
    document.querySelectorAll("[data-cart-count]").forEach(el => { el.textContent = n > 99 ? "99+" : String(n); el.hidden = !n; });
  }
  root.addEventListener("hx:cart", badge);
  root.addEventListener("storage", e => { if (e.key === KEY) badge(); });   // another tab changed the cart
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", badge); else badge();

  const api = {
    cats: cats, catOf: catOf, products: () => products, byId: byId, search: search, ready: ready, rate: () => rate,
    cart: { lines: lines, count: count, add: add, setQty: setQty, remove: remove, clear: clear, has: has, totals: totals },
    html: { card: card, catTile: catTile, tile: tile, price: priceHtml, money: money, esc: esc }
  };
  root.HXShop = api;
})(window);
