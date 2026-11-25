/* HEXORA — the shop pages, drawn from catalog.js:
   index.html  [data-shop="home"]     banners, categories, popular, everything
   shop.html   [data-shop="list"]     search results / one category, sort
   product.html[data-shop="product"]  one product: price, time, what is in it, add to cart / buy now
   cart.html   [data-shop="cart"]     the cart, then checkout (login needed) → the order is saved as a request (track "shop")
   An order is paid by bank transfer: 50% advance for a one-time job, the first month in full for a monthly plan.
   Card payment (PayHere) shows only when config.js → payhere.enabled is on (it needs a merchant account and a server). */
(function () {
  "use strict";
  const X = window.HXShop, C = window.HEXORA || {}, FB = window.HXFB, P = window.HXPrice;
  const root = document.querySelector("[data-shop]");
  if (!X || !root) return;
  const H = X.html, esc = H.esc, money = H.money;
  const $ = (s, r) => (r || document).querySelector(s);
  const q = new URLSearchParams(location.search);
  const ICON = {
    cart: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 4h2l2.4 11.2a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.5L21 8H6.2"/><circle cx="10" cy="20" r="1.4"/><circle cx="17" cy="20" r="1.4"/></svg>',
    shield: '<svg viewBox="0 0 24 24"><path d="M12 2l7 4v6c0 5-3 8-7 10-4-2-7-5-7-10V6z"/><path d="M9 12l2 2 4-4"/></svg>',
    code: '<svg viewBox="0 0 24 24"><path d="M16 18l6-6-6-6M8 6l-6 6 6 6"/></svg>',
    clock: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg>',
    card: '<svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 10h18M7 15h4"/></svg>'
  };
  const wa = text => (window.hxWhatsAppLink ? window.hxWhatsAppLink(text) : "https://wa.me/" + (C.whatsapp || "") + "?text=" + encodeURIComponent(text));
  const sortBy = (list, how) => how === "low" ? list.slice().sort((a, b) => a.price - b.price) : how === "high" ? list.slice().sort((a, b) => b.price - a.price) : list;
  const toast = text => {
    let t = $(".shop-toast");
    if (!t) { t = document.createElement("div"); t.className = "toast shop-toast"; t.setAttribute("role", "status"); document.body.appendChild(t); }
    t.textContent = text; t.classList.add("show"); clearTimeout(t._h); t._h = setTimeout(() => t.classList.remove("show"), 2600);
  };

  /* ================= index.html: the store front ================= */
  function home() {
    const all = X.products(), pick = id => X.byId(id);
    // banners: real products and their real prices (the lowest of each line)
    const lowest = cat => all.filter(p => p.cat === cat && !p.from).sort((a, b) => a.price - b.price)[0];
    const slides = [
      { p: lowest("mobile-apps"), k: "MOBILE APPS", h: "ඔයාගේ business එකට Android app එකක්", d: "Orders, bookings, delivery, class. Packages 5ක් අතරින් ගැළපෙන එක තෝරන්න." },
      { p: lowest("websites"), k: "WEBSITES", h: "Phone එකේ ලස්සනට පේන website එකක්", d: "Landing page එකක ඉඳන් online shop එකක් දක්වා. Google එකේ හොයාගන්නත් පුළුවන්." },
      { p: pick("c-logo"), k: "LOGO & DESIGN", h: "මතක හිටින logo එකක්", d: "Concepts 3ක් පෙන්නනවා, ඔයා තෝරන එකට වෙනස්කම් 3ක් දක්වා free." },
      { p: lowest("ai-features"), k: "AI & AUTOMATION", h: "Customers ලට 24 පැයම උත්තර දෙන chatbot එකක්", d: "ඔයා දෙන ප්‍රශ්න උත්තර වලින් site එකේම reply කරනවා." }
    ].filter(s => s.p);
    const cat = slug => X.catOf(slug) || { tint: ["#2563EB", "#7C3AED"], icon: "" };
    const slideHtml = (s, i) => { const c = cat(s.p.cat);
      return '<a class="sb-slide" style="--t1:' + c.tint[0] + ";--t2:" + c.tint[1] + '" href="product.html?id=' + encodeURIComponent(s.p.id) + '"' + (i ? ' tabindex="-1" aria-hidden="true"' : "") + ">" +
        '<span class="sb-k">' + esc(s.k) + "</span><h3>" + esc(s.h) + "</h3><p>" + esc(s.d) + '</p><span class="sb-price">' + (s.p.kind === "cr" ? "" : "") + "<b>" + money(s.p.price) + "</b> ඉඳන්</span>" +
        '<span class="sb-go">බලන්න →</span><span class="sb-art"><svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round">' + c.icon + "</svg></span></a>"; };
    const minis = [
      { href: "shop.html?c=maintenance-hosting", c: cat("maintenance-hosting"), b: "Site එක අපි බලාගන්නම්", s: "Updates, backups, පොඩි වෙනස්කම්. මාසෙකට " + money((lowest("maintenance-hosting") || { price: 0 }).price) + " ඉඳන්." },
      { href: "shop.html?c=video-editing", c: cat("video-editing"), b: "Reels, YouTube edit", s: "Footage එක එවන්න, post කරන්න ready කරලා දෙනවා. " + money((pick("c-reel") || { price: 0 }).price) + " ඉඳන්." }
    ];
    const popular = all.filter(p => p.badge && !p.from).concat(["c-social", "c-photo", "c-reel", "p-web-standard", "p-ai-chatbot"].map(pick).filter(p => p && !p.badge)).slice(0, 10);
    const forYou = all.filter(p => !p.from);
    root.innerHTML =
      '<div class="wrap shop-main">' +
        '<div class="shop-top">' +
          '<div class="sb" aria-roledescription="carousel" aria-label="Offers"><div class="sb-track">' + slides.map(slideHtml).join("") + "</div>" +
            '<div class="sb-dots" role="group" aria-label="Banners">' + slides.map((s, i) => '<button type="button" aria-label="Banner ' + (i + 1) + '"' + (i ? "" : ' aria-current="true"') + ' data-i="' + i + '"></button>').join("") + "</div></div>" +
          '<div class="sb-side">' + minis.map(m => '<a class="sb-mini" style="--t1:' + m.c.tint[0] + ";--t2:" + m.c.tint[1] + '" href="' + m.href + '"><b>' + esc(m.b) + "</b><span>" + esc(m.s) + "</span></a>").join("") + "</div>" +
        "</div>" +
        '<div class="shop-trust">' +
          "<div>" + ICON.card + "<span><b>" + (C.advancePercent || 50) + "% advance විතරයි</b>ඉතුරු ටික වැඩේ බාර දෙද්දී</span></div>" +
          "<div>" + ICON.code + "<span><b>Code, files ඔයාට</b>අන්තිම payment එකෙන් පස්සේ</span></div>" +
          "<div>" + ICON.clock + "<span><b>දවස් 30ක් free fixes</b>අපි හදපු දේවල වැරදි</span></div>" +
          "<div>" + ICON.shield + "<span><b>මිල කලින්ම</b>Hidden ගාස්තු නෑ</span></div>" +
        "</div>" +
        '<section class="shop-sec" aria-labelledby="sh-cats"><div class="shop-h"><h2 id="sh-cats">Categories</h2><a href="shop.html">ඔක්කොම බලන්න →</a></div>' +
          '<div class="sp-cats">' + X.cats.map(H.catTile).join("") + "</div></section>" +
        '<section class="shop-sec" aria-labelledby="sh-pop"><div class="shop-h"><div><h2 id="sh-pop">ගොඩක් අය ගන්න ඒවා</h2><p>අපේ customers වැඩියෙන්ම තෝරන packages, services</p></div><a href="shop.html">ඔක්කොම →</a></div>' +
          '<div class="sp-row">' + popular.map(H.card).join("") + "</div></section>" +
        '<section class="shop-sec" aria-labelledby="sh-all"><div class="shop-h"><div><h2 id="sh-all">ඔයාට ගැළපෙන දේවල්</h2><p>Apps, websites, design, video. Cart එකට දාලා එකපාර order කරන්න.</p></div></div>' +
          '<div class="sp-grid" id="sh-grid">' + forYou.slice(0, 18).map(H.card).join("") + "</div>" +
          (forYou.length > 18 ? '<p style="text-align:center;margin-top:16px"><a class="btn" href="shop.html">තව ' + (forYou.length - 18) + 'ක් බලන්න</a></p>' : "") + "</section>" +
        '<section class="shop-sec"><div class="shop-empty"><b>ඔයාට ඕන දේ මෙතන නැද්ද?</b><br>ලොකු project එකක් නම්, නැත්නම් වෙනස් දෙයක් නම් කියන්න. ගැළපෙන මිලක් කියන්නම්.<br>' +
          '<a class="btn btn-primary" href="start-project.html">Quote එකක් ඉල්ලන්න</a> <a class="btn" href="' + esc(wa("Hi Hexora! මට project එකක් ගැන කතා කරන්න ඕන.")) + '" target="_blank" rel="noopener">WhatsApp කරන්න</a></div></section>' +
      "</div>";
    slider($(".sb", root));
  }
  let slideTimer = 0;
  // the banner slider: changes every 5 s, stops while a pointer or focus is on it, and under reduced motion
  function slider(sb) {
    if (!sb) return;
    const track = $(".sb-track", sb), dots = Array.from(sb.querySelectorAll(".sb-dots button")), n = dots.length; let i = 0, hold = false;
    const go = k => { i = (k + n) % n; track.style.transform = "translateX(" + (-100 * i) + "%)";
      dots.forEach((d, j) => d.setAttribute("aria-current", String(j === i)));
      track.querySelectorAll(".sb-slide").forEach((s, j) => { s.tabIndex = j === i ? 0 : -1; s.setAttribute("aria-hidden", String(j !== i)); }); };
    dots.forEach((d, j) => d.addEventListener("click", () => go(j)));
    ["mouseenter", "focusin"].forEach(ev => sb.addEventListener(ev, () => { hold = true; }));
    ["mouseleave", "focusout"].forEach(ev => sb.addEventListener(ev, () => { hold = false; }));
    let x0 = null; sb.addEventListener("touchstart", e => { x0 = e.touches[0].clientX; }, { passive: true });
    sb.addEventListener("touchend", e => { if (x0 == null) return; const dx = e.changedTouches[0].clientX - x0; if (Math.abs(dx) > 40) go(i + (dx < 0 ? 1 : -1)); x0 = null; });
    clearInterval(slideTimer);
    if (n > 1 && !matchMedia("(prefers-reduced-motion: reduce)").matches) slideTimer = setInterval(() => { if (!hold && !document.hidden) go(i + 1); }, 5000);
  }

  /* ================= shop.html: search / category ================= */
  function list() {
    const term = (q.get("q") || "").trim().slice(0, 80), cat = q.get("c") || "", how = q.get("sort") || "";
    const c = X.catOf(cat);
    let found = X.search(term, c ? cat : "");
    found = sortBy(found, how);
    const link = (over) => { const u = new URLSearchParams(); const v = Object.assign({ q: term, c: c ? cat : "", sort: how }, over); Object.keys(v).forEach(k => { if (v[k]) u.set(k, v[k]); }); const s = u.toString(); return "shop.html" + (s ? "?" + s : ""); };
    const count = slug => X.search(term, slug).length;
    const title = term ? "“" + term + "” සඳහා" : c ? c.full : "සියලුම services";
    document.title = (term ? term + " · " : c ? c.full + " · " : "Shop · ") + "Hexora";
    const inp = document.querySelector(".hx-search input"); if (inp && term) inp.value = term;
    root.innerHTML =
      '<div class="wrap shop-main"><div class="shop-layout">' +
        '<nav class="shop-side" aria-label="Categories"><h2>Categories</h2><a href="' + esc(link({ c: "" })) + '"' + (c ? "" : ' aria-current="true"') + ">ඔක්කොම <small>" + X.search(term, "").length + "</small></a>" +
          X.cats.map(k => '<a href="' + esc(link({ c: k.slug })) + '"' + (c && c.slug === k.slug ? ' aria-current="true"' : "") + ">" + esc(k.name) + " <small>" + count(k.slug) + "</small></a>").join("") + "</nav>" +
        "<div>" +
          '<div class="shop-chips">' + '<a href="' + esc(link({ c: "" })) + '"' + (c ? "" : ' aria-current="true"') + ">ඔක්කොම</a>" + X.cats.map(k => '<a href="' + esc(link({ c: k.slug })) + '"' + (c && c.slug === k.slug ? ' aria-current="true"' : "") + ">" + esc(k.name) + "</a>").join("") + "</div>" +
          '<div class="shop-bar"><div><h1>' + esc(title) + '</h1><p class="muted">' + found.length + " ක් හම්බුණා" + (c && c.short ? " · " + esc(c.short) : "") + "</p></div>" +
            '<label class="shop-sort">පිළිවෙළ <select id="sh-sort"><option value="">ගැළපෙන විදියට</option><option value="low"' + (how === "low" ? " selected" : "") + '>අඩු මිල මුලින්</option><option value="high"' + (how === "high" ? " selected" : "") + ">වැඩි මිල මුලින්</option></select></label></div>" +
          (found.length ? '<div class="sp-grid">' + found.map(H.card).join("") + "</div>"
            : '<div class="shop-empty">' + (term ? "“" + esc(term) + "” කියලා දෙයක් හම්බුණේ නෑ." : "මේ category එකේ දැනට items නෑ.") + "<br>වෙන වචනයකින් හොයලා බලන්න, නැත්නම් ඔයාට ඕන දේ අපිට කියන්න.<br>" +
              '<a class="btn btn-primary" href="start-project.html">Quote එකක් ඉල්ලන්න</a></div>') +
          (c && c.slug === "ui-ux-design" ? '<p class="pd-note" style="margin-top:14px">UI/UX design එකේ මිල app එකේ, website එකේ මිලට % එකක් විදියට එකතු වෙනවා. <a href="service.html?s=ui-ux-design">විස්තර බලන්න</a>, නැත්නම් <a href="start-project.html">quote එකක් ඉල්ලන්න</a>.</p>' : "") +
        "</div>" +
      "</div></div>";
    $("#sh-sort").addEventListener("change", e => { location.href = link({ sort: e.target.value }); });
  }

  /* ================= product.html ================= */
  function product() {
    const p = X.byId(q.get("id") || "");
    if (!p) {
      root.innerHTML = '<div class="wrap shop-main"><div class="shop-empty"><b>මේ item එක හම්බුණේ නෑ.</b><br>Link එක වෙනස් වෙලා වෙන්න පුළුවන්.<br><a class="btn btn-primary" href="shop.html">Shop එකට යන්න</a></div></div>';
      return;
    }
    const c = X.catOf(p.cat) || { name: "", full: "", slug: "" }, adv = C.advancePercent || 50;
    document.title = p.name + " | Hexora";
    const md = document.querySelector('meta[name="description"]'); if (md) md.setAttribute("content", (p.name + ": " + p.blurb).slice(0, 160));
    const facts = [["කාලය", p.time], p.platform && ["කොහෙටද", p.platform], p.screens && ["Package එකේ", p.screens], p.revisions && ["Revisions", String(p.revisions)], p.kind === "cr" && p.unit && ["මිල", money(p.price) + " / " + p.unit]].filter(Boolean);
    const payNote = p.from ? "මේ පටන් ගන්න මිල. ඔයාට ඕන දේවල් අහලා අවසාන මිල quote එකක් විදියට එවනවා."
      : p.monthly ? "මාසික plan එකක්. Order එක confirm වුණාම පළවෙනි මාසෙට ගෙවන්න." : "Order එක confirm වුණාම " + adv + "% advance එකක් (" + money(P.smartRound(p.price * adv / 100, C)) + "), ඉතුරු ටික වැඩේ බාර දෙද්දී.";
    root.innerHTML =
      '<div class="wrap shop-main">' +
        '<nav aria-label="Breadcrumb"><ol class="crumbs"><li><a href="index.html">Home</a></li><li><a href="shop.html?c=' + encodeURIComponent(c.slug) + '">' + esc(c.name) + "</a></li><li>" + esc(p.name) + "</li></ol></nav>" +
        '<div class="pd">' +
          '<div class="pd-media">' + H.tile(p, true) + "</div>" +
          '<div class="pd-info">' +
            '<a class="pd-cat" href="shop.html?c=' + encodeURIComponent(c.slug) + '">' + esc(c.full) + "</a>" +
            "<h1>" + esc(p.name) + "</h1>" + (p.badge ? '<span class="pd-badge">' + esc(p.badge) + "</span>" : "") +
            '<div class="pd-price"><span class="sp-price">' + H.price(p) + "</span><p>" + esc(payNote) + "</p></div>" +
            '<p class="pd-blurb">' + esc(p.blurb) + "</p>" +
            (facts.length ? '<dl class="pd-facts">' + facts.map(f => "<div><dt>" + esc(f[0]) + "</dt><dd>" + esc(f[1]) + "</dd></div>").join("") + "</dl>" : "") +
            (p.from
              ? '<div class="pd-buy"><a class="btn btn-primary btn-lg" href="start-project.html?package=' + encodeURIComponent(p.key) + '">Quote එකක් ඉල්ලන්න</a><a class="btn btn-lg" href="' + esc(wa("Hi Hexora! " + p.name + " ගැන කතා කරන්න ඕන.")) + '" target="_blank" rel="noopener">WhatsApp</a></div>'
              : '<div class="pd-buy">' + (p.max > 1 ? '<span class="pd-qty"><button type="button" data-q="-1" aria-label="අඩු කරන්න">−</button><input id="pd-n" type="number" inputmode="numeric" min="1" max="' + p.max + '" value="1" aria-label="ගාණ"><button type="button" data-q="1" aria-label="වැඩි කරන්න">+</button></span>' : "") +
                '<button type="button" class="btn btn-lg" data-add>' + ICON.cart + " Cart එකට දාන්න</button>" +
                '<button type="button" class="btn btn-primary btn-lg btn-buy" data-buy>දැන්ම Order කරන්න</button></div>') +
            '<div class="pd-lists">' +
              (p.includes.length ? '<div class="pd-box"><h2>ඇතුළත් දේවල්</h2><ul>' + p.includes.map(x => "<li>" + esc(x) + "</li>").join("") + "</ul></div>" : "") +
              (p.excludes.length ? '<div class="pd-box no"><h2>ඇතුළත් නැති දේවල්</h2><ul>' + p.excludes.map(x => "<li>" + esc(x) + "</li>").join("") + "</ul></div>" : "") +
            "</div>" +
            (p.infra ? '<div class="pd-box"><h2>වෙනම ගෙවන්න ඕන දේවල්</h2><p>' + esc(p.infra) + "</p></div>" : "") +
            '<p class="pd-note">' + esc(C.packageNote && p.kind === "pkg" ? C.packageNote : "Design, video මිල අද dollar rate එකට රුපියල් වලට හරවලා තියෙන්නේ.") + ' <a href="service.html?s=' + encodeURIComponent(c.slug) + '">මේ service එක ගැන තව විස්තර →</a></p>' +
          "</div>" +
        "</div>" +
        '<section class="shop-sec"><div class="shop-h"><h2>මේ category එකේ අනිත් ඒවා</h2><a href="shop.html?c=' + encodeURIComponent(c.slug) + '">ඔක්කොම →</a></div><div class="sp-row">' +
          X.products().filter(x => x.cat === p.cat && x.id !== p.id).map(H.card).join("") + "</div></section>" +
      "</div>";
    shown = p;
  }
  // one listener for the product page (the page is drawn again when today's dollar rate arrives)
  let shown = null;
  root.addEventListener("click", e => {
    if (root.dataset.shop !== "product" || !shown) return;
    const p = shown, b = e.target.closest("[data-q],[data-add],[data-buy]"); if (!b) return;
    const n = $("#pd-n"), qty = n ? Math.max(1, Math.min(p.max, Math.floor(Number(n.value) || 1))) : 1;
    if (b.dataset.q && n) { n.value = Math.max(1, Math.min(p.max, qty + Number(b.dataset.q))); return; }
    if (b.hasAttribute("data-add")) { if (p.max === 1 && X.cart.has(p.id)) return toast("මේක දැනටමත් cart එකේ තියෙනවා."); X.cart.add(p.id, qty); toast("Cart එකට දැම්මා ✓"); }
    if (b.hasAttribute("data-buy")) { if (!X.cart.has(p.id)) X.cart.add(p.id, qty); location.href = "cart.html#checkout"; }
  });

  /* ================= cart.html: cart → checkout → done ================= */
  const DONE = "hx_last_order_v1";
  function cart() {
    if (location.hash === "#done") { const d = readDone(); if (d) return done(d); }
    const t = X.cart.totals();
    if (!t.lines.length) {
      root.innerHTML = '<div class="wrap shop-main"><div class="shop-empty"><b>Cart එක හිස්.</b><br>ඔයාට ඕන services, packages cart එකට දාලා එකපාර order කරන්න.<br><a class="btn btn-primary" href="shop.html">Shop එකට යන්න</a></div></div>';
      return;
    }
    const me = FB && FB.user();
    const pay = C.payhere && C.payhere.enabled;
    root.innerHTML =
      '<div class="wrap shop-main"><div class="shop-bar"><h1>ඔයාගේ cart එක</h1><p class="muted">' + t.items + " ක්</p></div>" +
      '<div class="cart">' +
        '<div class="cart-list">' + t.lines.map(l => {
          const p = l.p;
          return '<div class="cart-item" data-id="' + esc(p.id) + '">' + '<a href="product.html?id=' + encodeURIComponent(p.id) + '" tabindex="-1" aria-hidden="true">' + H.tile(p) + "</a>" +
            '<div><h3><a href="product.html?id=' + encodeURIComponent(p.id) + '">' + esc(p.name) + '</a></h3><span class="sp-price">' + H.price(p) + '</span><span class="sp-meta">' + esc(p.time) + (p.monthly ? " · මාසික plan" : "") + "</span></div>" +
            '<div class="cart-ctl">' + (p.max > 1 ? '<span class="pd-qty"><button type="button" data-q="-1" aria-label="අඩු කරන්න">−</button><input type="number" min="1" max="' + p.max + '" value="' + l.qty + '" aria-label="ගාණ" data-n><button type="button" data-q="1" aria-label="වැඩි කරන්න">+</button></span>' : "") +
              "<b>" + money(p.price * l.qty) + (p.monthly ? " / මාසෙට" : "") + '</b><button type="button" class="cart-rm" data-rm>අයින් කරන්න</button></div></div>';
        }).join("") + '<p class="pd-note">තව දේවල් එකතු කරන්න <a href="shop.html">shop එකට යන්න</a>.</p></div>' +
        '<aside class="cart-sum" id="checkout" aria-label="Order summary">' +
          "<h2>Order එකේ සාරාංශය</h2><dl>" +
            (t.once ? "<div><span>එක පාරක් ගෙවන වැඩ</span><b>" + money(t.once) + "</b></div><div><span>Advance (" + t.advancePercent + "%)</span><b>" + money(t.advance) + "</b></div>" : "") +
            (t.monthly ? "<div><span>මාසික plans (පළවෙනි මාසෙ)</span><b>" + money(t.monthly) + "</b></div>" : "") +
            '<div class="cart-due"><span>Order එක confirm වුණාම ගෙවන්න</span><b>' + money(t.dueNow) + "</b></div>" +
            (t.later ? "<div><span>ඉතුරු ටික (වැඩේ බාර දෙද්දී)</span><b>" + money(t.later) + "</b></div>" : "") +
          "</dl>" +
          '<p class="pd-note">' + esc(C.packageNote || "") + "</p>" +
          (me ? checkoutForm(me, pay) :
            '<p class="pd-note">Order එක දාන්න login වෙන්න. Phone number එකෙන් හරි Google account එකෙන් හරි තත්පර කීපයකින් පුළුවන්.</p>' +
            '<a class="btn btn-primary btn-block btn-lg" href="account.html?next=cart.html%23checkout">Login වෙලා order කරන්න</a>') +
        "</aside>" +
      "</div></div>";
    if (me && FB) prefill(me);
  }
  function checkoutForm(me, pay) {
    return '<form class="co" id="co-form" novalidate><h2>ඔයාගේ විස්තර</h2>' +
      '<div class="field"><label for="co-name">නම</label><input class="input" id="co-name" autocomplete="name" maxlength="100" value="' + esc(me.name || "") + '"></div>' +
      '<div class="field"><label for="co-phone">Phone number <span class="hint">(WhatsApp)</span></label><input class="input" id="co-phone" type="tel" inputmode="tel" autocomplete="tel" value="' + esc(me.phone ? FB.phoneLabel(me.phone) : "") + '"></div>' +
      '<div class="field"><label for="co-email">Email <span class="hint">(optional)</span></label><input class="input" id="co-email" type="email" autocomplete="email" maxlength="120" value="' + esc(me.email || "") + '"></div>' +
      '<div class="field"><label for="co-biz">Business එකේ නම <span class="hint">(optional)</span></label><input class="input" id="co-biz" autocomplete="organization" maxlength="120"></div>' +
      '<div class="field"><label for="co-note">ඔයාට ඕන දේ ගැන ටිකක් <span class="hint">(colours, examples, කවදට ඕනද)</span></label><textarea class="input" id="co-note" rows="3" maxlength="2000" placeholder="උදා: Cake shop එකකට. Blue, white colours. ලබන මාසෙ මුලට ඕන."></textarea></div>' +
      '<div class="co-pay" role="radiogroup" aria-label="Payment"><b>ගෙවන විදිය</b>' +
        '<label class="co-opt"><input type="radio" name="pay" value="bank" checked><span><b>Bank transfer</b><span>Order එක දැම්මාම bank details පේනවා. ගෙවලා receipt එක WhatsApp කරන්න, අපි confirm කරලා වැඩ පටන් ගන්නවා.</span></span></label>' +
        '<label class="co-opt' + (pay ? "" : " off") + '"><input type="radio" name="pay" value="card"' + (pay ? "" : " disabled") + '><span><b>Card එකෙන් (PayHere)</b><span>' + (pay ? "Visa, Master, eZ Cash වගේ ඒවායින් දැන්ම ගෙවන්න." : "ළඟදීම.") + "</span></span></label>" +
      "</div>" +
      '<label class="acc-agree"><input type="checkbox" id="co-agree"> <span>මම <a href="terms.html" target="_blank" rel="noopener">Terms</a> කියවලා එකඟයි.</span></label>' +
      '<p class="co-msg" id="co-msg" role="alert"></p>' +
      '<button class="btn btn-primary btn-block btn-lg btn-buy" type="submit">Order එක දාන්න</button></form>';
  }
  // a Google customer's phone comes from their profile
  async function prefill(me) {
    if (me.phone || !me.google) return;
    try { const pr = await FB.get("/customers/" + me.uid); if (pr && pr.phone) { FB.setPhone(pr.phone); const f = $("#co-phone"); if (f && !f.value) f.value = FB.phoneLabel(pr.phone); } } catch (e) { /* typed by hand */ }
  }
  function makeRef() { const d = new Date(), p = n => String(n).padStart(2, "0"); return "HX-" + String(d.getFullYear()).slice(2) + p(d.getMonth() + 1) + p(d.getDate()) + "-" + Math.floor(1000 + Math.random() * 9000); }
  let placing = false;
  async function place(form) {
    if (placing) return;
    const msg = (t, id) => { $("#co-msg").textContent = t; if (id) { const f = $("#" + id); if (f) f.focus(); } };
    const me = FB && FB.user(); if (!me) { location.href = "account.html?next=cart.html%23checkout"; return; }
    const name = $("#co-name").value.trim(), phone = FB.phoneId($("#co-phone").value), email = $("#co-email").value.trim(), biz = $("#co-biz").value.trim(), note = $("#co-note").value.trim();
    const payWay = (form.querySelector("input[name=pay]:checked") || {}).value || "bank";
    if (name.length < 2) return msg("නම ගහන්න.", "co-name");
    if (!phone) return msg("Phone number එක හරියට ගහන්න (උදා: 077 123 4567).", "co-phone");
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return msg("Email එක හරියට ගහන්න, නැත්නම් හිස්ව තියන්න.", "co-email");
    if (!$("#co-agree").checked) return msg("Terms වලට එකඟ වෙන්න (tick එක දාන්න).", "co-agree");
    const t = X.cart.totals(); if (!t.lines.length) return msg("Cart එක හිස්.");
    const ref = makeRef();
    const lines = t.lines.map((l, i) => (i + 1) + ". " + l.p.name + (l.qty > 1 ? " × " + l.qty : "") + " · " + money(l.p.price * l.qty) + (l.p.monthly ? " / මාසෙට" : "") + " [" + l.p.id + "]");
    const message = ["Shop order " + ref, "", lines.join("\n"), "",
      (t.once ? "එක පාරක් ගෙවන වැඩ: " + money(t.once) + " (advance " + t.advancePercent + "%: " + money(t.advance) + ")\n" : "") + (t.monthly ? "මාසික plans: " + money(t.monthly) + " / මාසෙට\n" : "") +
      "Confirm වුණාම ගෙවන්න: " + money(t.dueNow), "Payment: " + (payWay === "card" ? "Card (PayHere)" : "Bank transfer"), note ? "\nNotes: " + note : ""].join("\n").slice(0, 6000);
    const data = { ref: ref, title: (t.lines.length === 1 ? t.lines[0].p.name : "Shop order · " + t.items + " items").slice(0, 100), name: name.slice(0, 100), phone: phone, email: email.slice(0, 120),
      business: biz.slice(0, 120), contact: "WhatsApp", track: "pkg", estimate: (money(t.once + t.monthly) + " · දැන් " + money(t.dueNow)).slice(0, 60), message: message, status: "new", uid: me.uid };
    if (!data.email) delete data.email; if (!data.business) delete data.business;
    const btn = form.querySelector("button[type=submit]"); btn.disabled = true; placing = true; msg("Order එක යවනවා…");
    try {
      await FB.create("requests", FB.newId(), data, ["createdAt"]);
      const d = { ref: ref, due: t.dueNow, total: t.once + t.monthly, lines: lines, name: name, pay: payWay, at: Date.now() };
      try { localStorage.setItem(DONE, JSON.stringify(d)); } catch (e) { /* storage blocked */ }
      history.replaceState(null, "", "cart.html#done");   // before the cart is emptied: a redraw now shows the receipt, not an empty cart
      done(d);
      X.cart.clear();
      window.scrollTo(0, 0);
    } catch (e) {
      btn.disabled = false; placing = false;
      msg(FB.errText(e) + " නැත්නම් WhatsApp එකෙන් order කරන්න.");
    }
  }
  const readDone = () => { try { const d = JSON.parse(localStorage.getItem(DONE)); return d && Date.now() - d.at < 7 * 864e5 ? d : null; } catch (e) { return null; } };
  function done(d) {
    const B = C.bank || {}, hasBank = B.number && B.bank;
    const waText = "Hi Hexora! මම order එකක් දැම්මා. Ref: " + d.ref + "\n" + d.lines.join("\n") + "\nගෙවන්න: " + money(d.due);
    root.innerHTML = '<div class="wrap shop-main"><div class="co-done">' +
      '<span class="pd-badge" style="background:rgba(59,201,139,.15);color:#86EFAC">✓ Order එක ලැබුණා</span>' +
      "<h1>ස්තූතියි, " + esc(d.name) + "!</h1>" +
      '<p class="muted">ඔයාගේ order එකේ අංකය: <span class="co-ref">' + esc(d.ref) + "</span><br>Hexora team එකෙන් කෙනෙක් ඉක්මනටම WhatsApp එකෙන් හරි call එකකින් හරි කතා කරලා විස්තර confirm කරනවා.</p>" +
      '<div class="co-bank"><div><span>දැන් ගෙවන්න</span><b>' + money(d.due) + "</b></div>" +
        (hasBank ? "<div><span>Bank</span><b>" + esc(B.bank) + (B.branch ? " · " + esc(B.branch) : "") + "</b></div><div><span>Account name</span><b>" + esc(B.name || "") + "</b></div><div><span>Account number</span><b>" + esc(B.number) + "</b></div><div><span>Reference</span><b>" + esc(d.ref) + "</b></div>"
          : '<div><span>Bank details අපි WhatsApp එකෙන් එවනවා. Order අංකය reference එකට දාන්න.</span></div>') +
      "</div>" +
      '<p class="pd-note">' + (d.pay === "card" ? "Card payment එකට link එක WhatsApp එකෙන් එවනවා." : "ගෙවලා receipt එකේ photo එක WhatsApp කරන්න. අපි confirm කළාම වැඩ පටන් ගන්නවා.") + " Order එකේ status එක \"මගේ projects\" වල බලන්න පුළුවන්.</p>" +
      '<div class="co-acts"><a class="btn btn-wa btn-lg" href="' + esc(wa(waText)) + '" target="_blank" rel="noopener">WhatsApp එකෙන් receipt එක යවන්න</a><a class="btn btn-lg" href="account.html">මගේ projects</a><a class="btn btn-lg" href="shop.html">තව shopping</a></div>' +
      "</div></div>";
  }
  // cart controls
  root.addEventListener("click", e => {
    if (root.dataset.shop !== "cart") return;
    const it = e.target.closest(".cart-item"); if (!it) return;
    const id = it.dataset.id, n = $("[data-n]", it);
    if (e.target.closest("[data-rm]")) { X.cart.remove(id); return cart(); }
    const b = e.target.closest("[data-q]"); if (b && n) { X.cart.setQty(id, Math.max(1, (Number(n.value) || 1) + Number(b.dataset.q))); cart(); }
  });
  root.addEventListener("change", e => { if (root.dataset.shop === "cart" && e.target.matches("[data-n]")) { const it = e.target.closest(".cart-item"); X.cart.setQty(it.dataset.id, Math.max(1, Number(e.target.value) || 1)); cart(); } });
  root.addEventListener("submit", e => { if (e.target.id === "co-form") { e.preventDefault(); place(e.target); } });

  const draw = { home: home, list: list, product: product, cart: cart }[root.dataset.shop];
  if (draw) { draw(); X.ready.then(() => { if (root.dataset.shop !== "cart" || !$("#co-form") || !$("#co-form").contains(document.activeElement)) draw(); }); }
  if (root.dataset.shop === "cart") window.addEventListener("hx:cart", () => { if (location.hash === "#done") return; if (!$("#co-form") || !$("#co-form").contains(document.activeElement)) cart(); });
})();
