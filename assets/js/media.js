/* HEXORA — pictures uploaded from the admin panel (Website → Images).
   An uploaded picture is kept in Firestore (media/<id>, a small WebP as a data: URL) and a page refers to it as "media:<id>".
   A plain address (assets/…, https://…) is used as it is. A picture never changes once uploaded (a new upload gets a new id),
   so the copy kept in this browser is always right.
   Use: <img data-media="media:abc" alt="…"> then HXMedia.apply(element). */
(function (root) {
  "use strict";
  const F = root.HX_FIREBASE || {};
  const mem = {}, KEY = "hx_m_";
  const ok = ref => typeof ref === "string" && (/^media:[A-Za-z0-9_-]{6,64}$/.test(ref) || /^(https:\/\/|assets\/)[^"'<>\s]+$/.test(ref));

  function store(id, data) {
    try { localStorage.setItem(KEY + id, data); }
    catch (e) {   // full: drop the older pictures and try once more
      try { Object.keys(localStorage).filter(k => k.indexOf(KEY) === 0).forEach(k => localStorage.removeItem(k)); localStorage.setItem(KEY + id, data); } catch (e2) { /* blocked */ }
    }
  }
  function src(ref) {
    if (!ok(ref)) return Promise.resolve("");
    if (ref.indexOf("media:") !== 0) return Promise.resolve(ref);
    const id = ref.slice(6);
    if (mem[id]) return mem[id];
    let kept = null;
    try { kept = localStorage.getItem(KEY + id); } catch (e) { kept = null; }
    if (kept) return (mem[id] = Promise.resolve(kept));
    if (!F.projectId || !root.fetch) return Promise.resolve("");
    const url = "https://firestore.googleapis.com/v1/projects/" + encodeURIComponent(F.projectId) + "/databases/(default)/documents/media/" + encodeURIComponent(id) +
      "?mask.fieldPaths=data" + (F.apiKey ? "&key=" + encodeURIComponent(F.apiKey) : "");
    mem[id] = fetch(url).then(r => (r.ok ? r.json() : null)).then(d => {
      const v = d && d.fields && d.fields.data && d.fields.data.stringValue;
      if (!v || !/^data:image\/(webp|jpeg|png);base64,/.test(v)) { delete mem[id]; return ""; }
      store(id, v); return v;
    }).catch(() => { delete mem[id]; return ""; });
    return mem[id];
  }
  // fills every <img data-media> under el; a picture that cannot be found hides its holder ([data-media-box]) instead of showing a broken image
  function apply(el) {
    (el || document).querySelectorAll("img[data-media]").forEach(img => {
      const ref = img.getAttribute("data-media");
      img.removeAttribute("data-media");
      src(ref).then(u => {
        const box = img.closest("[data-media-box]");
        if (!u) { if (box) box.hidden = true; else img.remove(); return; }
        img.src = u;
        if (box) box.classList.add("has-media");
      });
    });
  }
  root.HXMedia = { src: src, apply: apply, ok: ok };
})(window);
