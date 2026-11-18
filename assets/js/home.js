/* HEXORA — builds the changeable parts of the home page from the data in services.js (or what the admin panel saved):
   the service index, the process steps and the FAQ. Runs before main.js, which adds the reveal animations and tabs. */
(function () {
  "use strict";
  const S = window.HX_SERVICES, C = window.HEXORA || {}, U = window.HXSvcUI;
  if (!S || !U || !S.list || !S.categories) return;
  const esc = U.esc, pad = n => String(n).padStart(2, "0");
  const months = C.freeSupportMonths || 1;
  // {support} → "1 month", {advance} → "50%"
  const tok = t => esc(t).replace(/\{support\}/g, months + (months === 1 ? " month" : " months")).replace(/\{advance\}/g, (C.advancePercent || 50) + "%");
  const $ = id => document.getElementById(id);

  // the old price tabs moved to the Packages page: old links (#pricing-web, #pkg-firebase) still land on the right place
  const old = (location.hash || "").match(/^#(?:pricing-(app|web|backend|ai|maint|design)|(pkg-[\w-]+)|pricing)$/);
  if (old) { location.replace("packages.html" + (old[1] ? "#" + old[1] : old[2] ? "#" + old[2] : "")); return; }

  // popular packages: the most chosen package of apps, websites and AI
  const pop = $("home-popular"), K = window.HXPkg, P = window.HXPrice;
  if (pop && K && P && C.packages) {
    const pick = ["app", "web", "ai"].map(cat => { const ks = Object.keys(P.packagesOf(C, cat)); return ks.find(k => /ගොඩක් අය/.test(C.packages[k].badge || "")) || ks.find(k => C.packages[k].badge) || ks[0]; }).filter(Boolean);
    pop.innerHTML = pick.map((k, i) => K.card(C, P, k, i)).join("");
    K.wire(pop.parentElement.parentElement);
  }

  const sv = $("home-services");
  if (sv) sv.innerHTML = U.indexHtml(S, Object.keys(S.categories));

  // a list the admin emptied: the whole section goes away instead of showing a heading with nothing under it
  const gone = id => { const el = $(id); if (el) el.hidden = true; };
  const steps = S.home && S.home.steps, tl = $("home-steps");
  if (tl && Array.isArray(steps)) {
    tl.tabIndex = 0; tl.setAttribute("aria-label", "වැඩ කරන පියවර");   // a sideways-scrolling list on a phone must be reachable with the keyboard
    if (steps.length) tl.innerHTML = '<li class="tl-fill" aria-hidden="true"></li>' + steps.map((st, i) =>
      '<li class="tl-item rv"><span class="tl-dot">' + pad(i + 1) + '</span><div class="tl-body"><span class="tl-time">' + esc(st.time) + "</span><h3>" + esc(st.t) + "</h3><p>" + tok(st.d) + "</p></div></li>").join("");
    else gone("process");
  }

  // pictures uploaded from the admin panel ("media:<id>") or a plain address
  const M = window.HXMedia, pic = (ref, alt, cls) => (M && M.ok(ref) ? '<img class="' + cls + '" data-media="' + esc(ref) + '" alt="' + esc(alt || "") + '" loading="lazy" decoding="async">' : "");
  const safeLink = u => (/^(https:\/\/|[a-z0-9-]+\.html|#)/i.test(u || "") ? u : "");

  // banner under the top section
  const bn = C.banner, pr = $("home-promo");
  if (pr && bn && bn.show && M && M.ok(bn.image)) {
    const imgs = '<span class="promo-pic" data-media-box>' + pic(bn.image, bn.alt, "promo-d" + (M.ok(bn.imageM) ? " has-m" : "")) + (M.ok(bn.imageM) ? pic(bn.imageM, bn.alt, "promo-m") : "") + "</span>";
    const href = safeLink(bn.link);
    pr.innerHTML = href ? '<a class="promo-card" href="' + esc(href) + '"' + (/^https:/.test(href) ? ' target="_blank" rel="noopener"' : "") + ">" + imgs + "</a>" : '<div class="promo-card">' + imgs + "</div>";
    $("promo").hidden = false;
    M.apply(pr);
  }

  // our work: only when the admin has added projects
  const work = S.home && S.home.work, wk = $("home-work");
  if (wk && Array.isArray(work) && work.length) {
    wk.innerHTML = work.map(w => {
      const inner = (M && M.ok(w.img) ? '<span class="work-pic" data-media-box>' + pic(w.img, w.t, "") + "</span>" : "") + (w.tag ? '<span class="work-tag">' + esc(w.tag) + "</span>" : "") + "<h3>" + esc(w.t) + "</h3>" + (w.d ? "<p>" + esc(w.d) + "</p>" : "") + (w.link ? '<span class="work-go">බලන්න →</span>' : "");
      return w.link ? '<a class="work-card" href="' + esc(w.link) + '" target="_blank" rel="noopener">' + inner + "</a>" : '<div class="work-card">' + inner + "</div>";
    }).join("");
    if (M) M.apply(wk);
    const sec = $("work"); if (sec) sec.hidden = false;
  }
  // what customers say: only real, approved reviews the admin added
  const reviews = S.home && S.home.reviews, rv = $("home-reviews");
  if (rv && Array.isArray(reviews) && reviews.length) {
    rv.innerHTML = reviews.map(r => '<figure class="review"><blockquote>' + esc(r.text) + "</blockquote><figcaption>" + (M && M.ok(r.photo) ? '<span class="rv-photo" data-media-box>' + pic(r.photo, r.name, "") + "</span>" : "") + "<span class=\"rv-who\"><b>" + esc(r.name) + "</b>" + (r.biz ? "<span>" + esc(r.biz) + "</span>" : "") + "</span></figcaption></figure>").join("");
    if (M) M.apply(rv);
    const sec = $("reviews"); if (sec) sec.hidden = false;
  }

  const faq = S.home && S.home.faq, fq = $("home-faq");
  if (fq && Array.isArray(faq)) {
    const SHOW = 4;   // the first questions are enough for most people; the rest sit behind one button
    const one = (f, i) => "<details" + (i >= SHOW ? ' class="faq-more" hidden' : "") + "><summary>" + esc(f.q) + '</summary><div class="ans"><div><p>' + tok(f.a) + "</p></div></div></details>";
    if (faq.length) {
      fq.innerHTML = faq.map(one).join("") + (faq.length > SHOW ? '<button type="button" class="btn faq-toggle" aria-expanded="false">තව ප්‍රශ්න ' + (faq.length - SHOW) + ' ක් බලන්න</button>' : "");
      const t = fq.querySelector(".faq-toggle");
      if (t) t.addEventListener("click", () => { const open = t.getAttribute("aria-expanded") !== "true"; fq.querySelectorAll(".faq-more").forEach(d => { d.hidden = !open; }); t.setAttribute("aria-expanded", String(open)); t.textContent = open ? "ඉතිරි ප්‍රශ්න හංගන්න" : "තව ප්‍රශ්න " + (faq.length - SHOW) + " ක් බලන්න"; });
    } else gone("faq");
  }

  // the sections under the top one become tabs (a short page instead of a long scroll)
  if (window.HXSecTabs) window.HXSecTabs.init(document.getElementById("main"));
})();
