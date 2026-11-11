/* ==========================================================================
   HEXORA — SITE SETTINGS  (edit this file only)
   --------------------------------------------------------------------------
   • All prices are in US DOLLARS (USD), except the mobile app PACKAGES below:
     those are FIXED LKR prices (approved price list) and do not move with the dollar.
   • The site gets today's USD → LKR rate automatically and shows LKR.
   • If the live rate can't be loaded, "fallbackRate" is used.
   ========================================================================== */

window.HEXORA = {
  /* ---------- Contact ---------- */
  whatsapp: "94766792617",               // international format, digits only
  phoneDisplay: "076 679 2617",
  email: "teamhexoramain@gmail.com",
  facebook: "",                          // add your Facebook page link (https://...)
  youtube: "",                           // add your YouTube channel link (https://...)

  /* ---------- Notice bar at the top of every page (admin panel → Notice) ---------- */
  notice: { show: false, text: "", linkText: "", link: "" },

  /* ---------- Exchange rate ---------- */
  rateApi: "https://open.er-api.com/v6/latest/USD",   // free, no API key
  fallbackRate: 369,                     // LKR for 1 USD, used if the API fails
  rateCacheHours: 12,
  roundTo: 500,                          // LKR prices are rounded to this

  /* ---------- Terms ---------- */
  advancePercent: 50,
  freeSupportMonths: 1,
  rangeSpread: 1.25,                     // top of estimate range = lowest × this

  /* ---------- App + website packages (approved price lists, 2026-11-10) ----------
     cat: "app" = Mobile App packages 01–06, cat: "web" = Website Development packages WEB-01–06,
     cat: "backend" = Backend & Admin Panel packages BACKEND-01–05, cat: "ai" = AI Features & Automation AI-01–06,
     cat: "maint" = Maintenance & Hosting MAINT-01–06 (monthly: true = a monthly service fee, 100% prepaid each month,
     not the 50% advance of a one-time project).
     FIXED LKR prices: they are NOT scaled by the dollar rate ("packagesFixedLkr": true). The price is the
     DEVELOPMENT charge only: Firebase usage, domain, hosting, PayHere fees, Google / Apple accounts are the
     customer's (paid separately). Packages 01–05 are Android only (Flutter). "from": true = starting price,
     final price by quotation (Custom). "packagesVersion" guards an older copy saved from the admin panel:
     when it differs, the packages below replace the saved ones. */
  packagesFixedLkr: true,
  packagesVersion: 5,
  packageBaseRate: 369,                  // only used to show "≈ USD" next to LKR prices
  packageNote: "මේවා development charges විතරයි. Hosting, domain, database / cloud usage, email, payment gateway fees, Google / Apple developer accounts, premium plugins ඕන වුණොත් වෙනම (ඔයාගේ accounts වලින්).",
  packageTerms: ["50% advance", "දවස් 30ක් bug-fix support (approved scope එකට)", "Final payment එකෙන් පස්සේ source code"],
  /* What the customer pays third parties (never Hexora's price). Shown under the package list and on the Mobile Apps page. */
  packageFees: [
    { t: "Google Play developer account", d: "USD 25 එකපාරයි (Google ට, ඔයාගේ නමින්). Publish කරලා දෙන service එක වෙනම quote වෙනවා." },
    { t: "Apple Developer Program", d: "USD 99 අවුරුද්දට (Apple ට). iOS app එකක් Custom package එකෙන් ගත්තොත් විතරයි." },
    { t: "Firebase (Package 03 – 05)", d: "Email login + පොඩි Firestore app එකකට free (Spark) plan එක ඇති: 1 GiB data, දවසකට reads 50,000 / writes 20,000. Image uploads (Package 04 – 05) වලට Blaze (pay-as-you-go) billing on කරන්න ඕන — free allowance එක ඇතුළේ නම් bill එක 0 වෙන්නත් පුළුවන්, ඒත් guarantee නෑ. Firebase project එක ඔයාගේ Google account එකේ." },
    { t: "PayHere (Package 05)", d: "Merchant fees PayHere ට: Lite LKR 0 / මාසයට + 3.30%, Plus LKR 3,990 + 2.99%, Premium LKR 9,990 + 2.69% (payhere.lk/fees බලන්න). Merchant account එක ඔයාගේ." },
    { t: "Domain, hosting, server", d: "Package 01 – 03 වලට server එකක්, domain එකක්, hosting එකක් ඕනම නෑ (LKR 0). Package 04 – 05 web admin එක Firebase Hosting free tier එකේ දාන්න පුළුවන්; .com domain එකක් ඕන නම් optional, වෙනම." },
    { t: "SMS / OTP, external APIs", d: "SMS OTP, paid APIs වගේ third-party services වල usage fees ඒ provider ට වෙනම." }
  ],
  packageFeesWeb: [
    { t: "Domain", d: ".com.lk LKR 1,000 / අවුරුද්දට, .lk LKR 5,000 (LK Domain Registry); .com USD 11 විතර (Cloudflare Registrar). Registrar ට ඔයාගේ නමින්, renewal අවුරුද්දකට." },
    { t: "Static hosting (WEB-01, 02)", d: "Cloudflare Pages වගේ free tier එකක් ඇති — LKR 0 (provider limits ඇතුළේ). Server / database ඕන නෑ." },
    { t: "WordPress hosting (WEB-03, 04)", d: "PHP + database hosting ඕන (static hosting බෑ). Sample: Namecheap EasyWP Starter USD 38.88 පළවෙනි අවුරුද්ද / 68.88 renewal; Turbo (shop එකට) USD 61.88 / 114.88. Plan එක ඔයාගේ account එකෙන්; WordPress / WooCommerce software free." },
    { t: "Supabase / Vercel (WEB-05, 06)", d: "Supabase Pro USD 25 / මාසයට ඉඳන් (usage අනුව වැඩි වෙන්න පුළුවන්), Vercel Pro USD 20 / මාසයට (ඕන නම්), Resend email free 3,000 / මාසයට. VPS default ඕන නෑ." },
    { t: "PayHere (WEB-04)", d: "Merchant fees PayHere ට: Lite LKR 0 / මාසයට + 3.30%, Plus LKR 3,990 + 2.99%, Premium LKR 9,990 + 2.69%. Merchant approval එක PayHere එකෙන්." },
    { t: "Email, SMS, premium plugins", d: "Business email, SMTP, SMS, premium themes / plugins, paid stock assets ඕන වුණොත් ඒ provider ට වෙනම." }
  ],
  packageFeesBackend: [
    { t: "Firebase Auth + Firestore (01 – 04)", d: "Email / password login free. Firestore free quota (project එකකට): 1 GiB, දවසකට reads 50,000 / writes 20,000 / deletes 20,000, outbound 10 GiB / මාසයට. ඊට වැඩි usage, backups, special indexes Google ට. Firebase project එක ඔයාගේ Google account එකේ." },
    { t: "Cloud Storage uploads (03, 04) — Blaze", d: "Photo / PDF uploads වලට Firebase Blaze (pay-as-you-go) plan එක ඕනමයි — free allowance ඇතුළේ උනත් billing enable කරන්න ඕන. Bill එක region, stored GB, downloads අනුව. Budget alert එකක් spend cap එකක් නෙවෙයි." },
    { t: "Cloud Functions (04)", d: "Server-side operations වලටත් Blaze ඕන. Invocations වලට free allowance තියෙනවා; compute, networking, builds වලට charges එන්න පුළුවන්." },
    { t: "Admin panel hosting", d: "Admin web app එක Firebase Hosting free tier එකේ (10 GB storage, දවසකට ~360 MB transfer) දාන්න පුළුවන්. Custom domain optional, registrar ට වෙනම. VPS default ඕන නෑ." },
    { t: "Supabase (custom, 05)", d: "Custom backend එකකට Supabase තෝරුවොත් Pro USD 25 / මාසයට ඉඳන් (≈ LKR 9,225) — usage අනුව වැඩි වෙන්න පුළුවන්. Firebase / Supabase / VPS එකක් තෝරන එකයි, තුනම ගන්න ඕන නෑ." },
    { t: "SMS / OTP, email, APIs, premium tools", d: "Quote එකේ include කළොත් විතරයි; ඒ provider ට ඔයාගේ account එකෙන් වෙනම." }
  ],
  packageFeesAI: [
    { t: "AI model tokens (හැම package එකකම)", d: "Input / output tokens usage අනුව (model එක අනුව; Ex: USD 1 – 2 input / 5 – 10 output per 1M tokens). Multi-step run එකක model calls කීපයක්. Guide: knowledge answer එකක් ≈ USD 0.011, content draft එකක් ≈ USD 0.0055, agent run එකක් ≈ USD 0.04 — assumptions, bill එකක් නෙවෙයි. ඔයාගේ OpenAI account එකෙන්." },
    { t: "File Search + vector storage (AI-02)", d: "File Search ≈ USD 2.50 / 1,000 calls; vector storage 1 GB free, පස්සේ USD 0.10 / GB / දවසට (indexed size එක, raw 30 MB එක නෙවෙයි)." },
    { t: "Automation platform (AI-03, AI-05)", d: "Make: Free (credit limit), Core ≈ USD 12 / මාසයට (annual). n8n Cloud: Starter ≈ €20 / මාසයට (2,500 executions), Pro ≈ €50 (10,000). Executions ≠ finished drafts; plan එක ඔයාගේ." },
    { t: "Serverless / database (AI-01, 04, 06)", d: "Cloudflare Workers free tier හෝ USD 5 / මාසයට ඉඳන්; existing Firebase / Supabase usage (Supabase Pro USD 25 ඉඳන්) ඔයාගේ. VPS default ඕන නෑ." },
    { t: "Email / SMS / CRM / WhatsApp connectors", d: "ඒ provider ට වෙනම — business verification, consent, charges AI tokens වලට අමතරව." },
    { t: "Ongoing monitoring / prompt updates", d: "දවස් 30 bug-fix support එකේ නෑ — ඕන නම් වෙනම maintenance quote." }
  ],
  packageFeesMaint: [
    { t: "Hosting / VPS / cloud", d: "Website / server hosting, VPS, Firebase / Supabase usage ඔයාගේ account එකෙන් කෙලින්ම. Static free tier එකක් නම් hosting LKR 0 වෙන්න පුළුවන් — maintenance fee එක ඒකෙන් free වෙන්නේ නෑ." },
    { t: "Backup storage", d: "Offsite backup storage, VPS snapshots, Firestore scheduled backups (Blaze), Supabase PITR add-ons ඔයාගේ. Backup monitoring ≠ guaranteed restore; retention ඔයාගේ storage + provider policies අනුව." },
    { t: "Domain, plugins, licenses", d: "Domain renewals, premium themes / plugins / extensions, commercial licenses, security tools ඔයාගේ නමින්." },
    { t: "Payment gateway (E-commerce)", d: "PayHere / gateway plan fees + transaction % ඔයාගේ merchant account එකෙන්." },
    { t: "Monitoring / paging tools", d: "Paid uptime monitors, alerting / on-call tools, test environments (restore rehearsal වලට) ඔයාගේ." },
    { t: "Onboarding audit", d: "Infected / broken / ගොඩක් outdated system එකක් නම් initial audit + cleanup / migration වෙනම quote — routine fee එකේ නෑ." }
  ],
  packageTermsMonthly: ["මාසික fee 100% prepaid (මාසය පටන් ගද්දී)", "Business-hours support", "Cancel: දවස් 30 notice", "Unused edits / triages ඊළඟ මාසෙට යන්නේ නෑ"],
  packageQuote: "Development charge: package price එක (හෝ approved custom quote එක). Advance 50%. Package එකේ කියලා තියෙන scope එක විතරයි include. Hosting, domain, Firebase / Supabase / database usage, email / SMS, payment gateway fees, Google / Apple developer accounts, store publishing, premium plugins සහ third-party software fees ලිඛිතව itemize කරලා නැත්නම් exclude. දවස් 30 free support එක deliver කරපු features වල bugs වලට විතරයි, අලුත් features වලට නෙවෙයි. Final payment එකෙන් පස්සේ agreed source code එක ඔයාට.",
  packages: {
    basic: { cat: "app", label: "Basic Android App", lkr: 14000, weeks: 1, time: "දවස් 5 – 7", platform: "Android only", screens: "Screens 3ක් (simple)", revisions: 1,
      blurb: "Simple Flutter screens 3ක් එක්ක offline Android app එකක්: clean UI, navigation, ඔයාගේ content, simple form UI, test APK. Cloud backend එකක්, මාසික server cost එකක් නෑ.",
      infra: "Server / Firebase / domain ඕන නෑ — මාසික cost LKR 0. Play Store account එක ඕන නම් වෙනම.",
      includes: ["Flutter screens 3ක් (Ex: Home, Services, Contact)", "Clean UI + navigation", "ඔයා දෙන text, photos, logo", "Simple form UI (local)", "Test APK + basic testing", "Minor revision 1ක්", "දවස් 30 bug-fix support"],
      excludes: ["Firebase / online database", "Login, OTP, payments, notifications", "Admin panel", "iOS app, Play Store publish"] },
    standard: { cat: "app", label: "Standard Android App", lkr: 25000, weeks: 2.5, time: "සති 2 – 3", platform: "Android only", screens: "Screens 5 ට වෙනකන් (simple)", revisions: 2,
      blurb: "Screens 5ක් එක්ක polished offline Android app එකක්: phone එකේම data save වෙනවා (SQLite / local storage), local search / filter, splash + icon. Cloud sync නෑ — ඒ නිසා server cost එකක් නෑ.",
      infra: "Server / Firebase / domain ඕන නෑ — මාසික cost LKR 0. Data තියෙන්නේ phone එකේ (cloud backup නෑ).",
      includes: ["Screens 5 ට වෙනකන්", "Polished UI/UX, forms + validation", "On-device (offline) data storage", "Basic local search / filter", "Splash screen + app icon", "Test APK + testing", "Revisions 2ක්", "දවස් 30 bug-fix support"],
      excludes: ["Firebase Auth / Firestore / cloud sync", "OTP, payments, admin panel, notifications", "iOS app, Play Store publish"] },
    firebase: { cat: "app", label: "Firebase Android App", badge: "ගොඩක් අය තෝරන්නේ", lkr: 49000, weeks: 4, time: "සති 3 – 5", platform: "Android only", screens: "Screens 8 ට වෙනකන්", revisions: 2,
      blurb: "Online app එකක්: email + password login, password reset, Firestore database එකේ CRUD module 1ක් (Ex: tasks / notes / records), user profile, basic search. Security rules එක්ක.",
      infra: "Firebase free (Spark) plan එක ඇති වෙන්න පුළුවන් (Firestore 1 GiB, reads 50k / දවසට). Server / domain ඕන නෑ. Firebase usage ඉහළ ගියොත් Google ට වෙනම.",
      includes: ["Screens 8 ට වෙනකන්, professional UI/UX", "Firebase login (email + password), password reset", "Firestore database + CRUD module 1ක්", "User profile view / edit", "Basic search / filter", "Offline caching (Firestore support කරන තැන)", "Firestore security rules", "Test APK, revisions 2ක්, දවස් 30 bug-fix support"],
      excludes: ["SMS / phone OTP, Google sign-in", "Photo / file uploads", "Admin panel, push notifications", "Payments, external APIs", "iOS app, Play Store publish"] },
    business: { cat: "app", label: "Advanced / Business Android App", badge: "Business වලට හොඳයි", lkr: 99000, weeks: 7.5, time: "සති 6 – 9", platform: "Android + basic web admin", screens: "App screens 12 ට වෙනකන් · admin sections 3", revisions: 2,
      blurb: "App එක + ඔයාගේ business එක manage කරන basic web admin එකක් (overview, users, records). Firebase login, database modules 2ක්, user / admin roles, image upload use-case 1ක්, manual push notifications.",
      infra: "Image uploads වලට Firebase Blaze billing on කරන්න ඕන (free allowance ඇතුළේ නම් 0 වෙන්න පුළුවන්). Admin එක Firebase Hosting free tier එකේ. Domain optional. VPS ඕන නෑ.",
      includes: ["App screens 12 ට වෙනකන්", "Firebase login (email + password), profile", "Firestore CRUD modules 2ක්", "Web admin dashboard (sections 3: overview, users, records)", "Basic user / admin roles (security rules)", "Image upload use-case 1ක් (Firebase Storage)", "Basic search / filter", "Manual push notifications (FCM)", "Test APK, revisions 2ක්, දවස් 30 bug-fix support"],
      excludes: ["Online payments, SMS OTP", "Full e-commerce / POS / inventory", "Reports / analytics engine, AI, external APIs", "iOS app, Play Store publish"] },
    premium: { cat: "app", label: "Premium Android App", lkr: 249000, weeks: 12, time: "සති 10 – 14", platform: "Android + web admin", screens: "App screens 20 ට වෙනකන් · admin sections 5", revisions: 3,
      blurb: "Orders හෝ bookings workflow එකක් + PayHere payments එක්ක business app එකක්: screens 20, admin sections 5, user / staff / admin roles, external API 1ක්, uploads, notifications, basic reports.",
      infra: "Firebase Blaze billing (Storage, server-side payment verify). PayHere merchant fees (Lite 3.30% ඉඳන්) ඔයාගේ merchant account එකෙන්. Domain optional. VPS default ඕන නෑ.",
      includes: ["App screens 20 ට වෙනකන්, polished UI/UX", "Firebase login, profile, CRUD modules 3 ට වෙනකන්", "Web admin dashboard (sections 5 ට වෙනකන්)", "User / Staff / Admin roles", "Workflow 1ක්: Products + Cart + Orders හෝ Bookings (එකක්)", "PayHere payment gateway 1ක් (server-side verify)", "External API integration 1ක්", "Basic image / file uploads", "Push notifications + basic reports", "Testing, revisions 3ක්, දවස් 30 bug-fix support"],
      excludes: ["iOS app", "Multi-store / ERP / POS / accounting", "දෙවෙනි payment gateway, subscriptions", "Store publish, merchant fees, hosting"] },
    custom: { cat: "app", label: "Custom App Development", lkr: 299000, from: true, weeks: 0, time: "Project එක අනුව", platform: "Android / iOS / Web (quote එකට)", screens: "Scope එක අනුව", revisions: 0,
      blurb: "ඔයාගේ requirements වලට හදන Android, iOS හෝ Web solution එකක්. Custom backend, admin systems, payments, APIs, business workflows, AI — quote එකට. Features, timeline, external fees development එකට කලින් ලිඛිතව confirm.",
      infra: "Hosting / backend / gateway / store fees architecture එක අනුව, quote එකේ වෙනම itemize කරනවා. Revisions සහ milestones quote එකේම.",
      includes: ["ඔයාගේ requirements වලට custom app එකක්", "Android, iOS සහ / හෝ Web (scope එකට)", "Custom UI/UX, animations", "Firebase / Supabase / custom backend + APIs", "ලොකු admin portals, roles, reports", "Multi-store, POS, inventory, e-commerce, bookings", "Payments, APIs, AI, maps, automation", "Deployment, testing, documentation"],
      excludes: ["LKR 299,000 ට ඔක්කොම include නෑ: features scope එක අනුව quote වෙනවා", "Hosting, gateways, store fees වෙනම"] },

    /* ---------- Website Development packages WEB-01 – 06 (approved 2026-11-10, fixed LKR development prices) ---------- */
    "web-basic": { cat: "web", label: "Basic Landing Website", lkr: 10000, weeks: 1, time: "දවස් 3 – 5", platform: "Static · 1 page", screens: "Sections 4ක් (Home, Services, About, Contact)", revisions: 1,
      blurb: "Phone-friendly එක page landing site එකක්: Home / Services / About / Contact sections 4, showcase items 4ක් දක්වා, WhatsApp / call / social links, Google Maps link, basic SEO, HTTPS static hosting setup.",
      includes: ["Responsive එක page site එකක් (sections 4)", "Showcase / service items 4 ට වෙනකන්", "WhatsApp, call, social links + Google Maps link", "ඔයාගේ logo, text, photos", "Title / description (basic SEO), image optimization", "Free-tier static hosting + HTTPS setup, domain hookup", "Revision 1ක්, දවස් 30 bug-fix support", "Final payment එකෙන් පස්සේ source files"],
      excludes: ["දෙවෙනි page එකක් / sections 4ට වැඩි", "Admin / CMS, login, database", "Server-side contact form, bookings, payments, e-commerce", "Logo design, copywriting, premium templates, business email"],
      infra: "Server / database ඕන නෑ. Static hosting free tier (LKR 0). Domain එකක් ඕන නම් වෙනම (.com.lk LKR 1,000 / අවුරුද්දට වගේ)." },
    "web-standard": { cat: "web", label: "Standard Business Website", lkr: 29000, weeks: 2.5, time: "දවස් 10 – 15", platform: "Static · pages 5", screens: "Pages 5 · items 8 · gallery 12", revisions: 2,
      blurb: "Pages 5ක business site එකක්: Home, About, Services / Products (items 8ක් දක්වා), Gallery (photos 12ක් දක්වා), Contact + basic enquiry form. Template එකක් ඔයාගේ brand එකට customize කරලා.",
      includes: ["Responsive pages 5ක් (template customized)", "Services / products showcase 8 ට වෙනකන්", "Gallery photos 12 ට වෙනකන්", "Basic enquiry form (third-party form service)", "WhatsApp, call, email, social + Maps link", "Per-page SEO, sitemap, image optimization", "Static hosting, DNS, HTTPS setup", "Revisions 2ක්, දවස් 30 bug-fix support"],
      excludes: ["CMS / admin, login, database", "Cart, checkout, payments, bookings", "Multilingual, custom animations, page builder", "Logo / copywriting, premium form plan, business email"],
      infra: "Static hosting free tier (LKR 0). Enquiry form provider free tier ඇති (limit පැනුවොත් ඒ provider ට). Domain වෙනම." },
    "web-professional": { cat: "web", label: "Professional Business Website", badge: "ගොඩක් අය තෝරන්නේ", lkr: 79000, weeks: 3.5, time: "සති 3 – 4", platform: "WordPress CMS · pages 8", screens: "Pages 8 · services 15 · gallery 20 · blog posts 5", revisions: 2,
      blurb: "WordPress CMS එකක් එක්ක pages 8ක site එකක් — ඔයාටම content edit කරන්න පුළුවන්. Services 15ක්, gallery 20ක්, blog එක + posts 5ක්, enquiry form, SEO / analytics, admin training.",
      includes: ["Responsive pages 8 ට වෙනකන් (brand-customized starter theme)", "WordPress admin / content editor access", "Service entries 15ක්, gallery photos 20ක් දක්වා", "Blog setup + ඔයා දෙන posts 5ක්", "Enquiry form, WhatsApp / social / Maps links", "Basic SEO, sitemap, Search Console + Analytics (ඔයාගේ accounts)", "Speed, SSL, basic security, hosting setup", "Admin orientation විනාඩි 45ක්", "Revisions 2ක්, දවස් 30 bug-fix support", "Theme changes + WordPress DB export handover"],
      excludes: ["WooCommerce / checkout / payments, bookings", "Customer / staff portals, custom dashboards", "Multilingual, ලොකු content migration", "Premium theme / plugins, SEO campaigns, daily content updates"],
      infra: "WordPress hosting (PHP + database) ඕන — static hosting එකේ බෑ. Ex: Namecheap EasyWP Starter USD 38.88 පළවෙනි අවුරුද්ද / 68.88 renewal (sample, ඔයාගේ account). Domain, premium theme / plugins වෙනම." },
    "web-ecommerce": { cat: "web", label: "E-commerce Website", badge: "Online shop එකට", lkr: 169000, weeks: 6, time: "සති 5 – 7", platform: "WordPress + WooCommerce", screens: "Pages 8 · products 25 · categories 5", revisions: 2,
      blurb: "Single-store online shop එකක් WordPress + WooCommerce වලින්: products 25ක්, categories 5ක්, cart + checkout, customer accounts, PayHere + COD / bank transfer, stock, shipping zones 3ක්, coupons.",
      includes: ["Informational pages 8 ට වෙනකන් + standard shop / product / cart / checkout / account templates", "Products 25ක් (ඔයා දෙන photos, details, prices), categories 5ක්", "Product listing, search / filter, product pages", "WooCommerce cart, checkout, customer accounts", "PayHere integration 1ක් (sandbox test + server-side verify)", "COD + bank transfer", "Basic stock, flat-rate shipping zones 3ක් + pickup, coupons", "Orders / products admin dashboard, notification emails", "SEO, SSL, security + backup setup", "Admin training පැය 1ක්, revisions 2ක්, දවස් 30 bug-fix support"],
      excludes: ["Multi-vendor / multi-store, POS / ERP sync", "Subscriptions, complex variations, courier APIs, multi-currency", "Custom checkout, custom plugins, mobile app", "Products 25ට වැඩි upload, premium plugins, maintenance"],
      infra: "WooCommerce-capable hosting (Ex: EasyWP Turbo USD 61.88 / 114.88 renewal — sample). Domain, SMTP / business email, PayHere merchant fees (Lite 3.30% ඉඳන්), paid plugins වෙනම. PayHere approval එක PayHere එකෙන්." },
    "web-advanced": { cat: "web", label: "Advanced Business Web System", badge: "Business වලට හොඳයි", lkr: 279000, weeks: 10, time: "සති 8 – 12", platform: "Web app · React + Supabase", screens: "Views 15 · roles 3 · modules 3", revisions: 3,
      blurb: "Database එකක් එක්ක business dashboard එකක්: views 15, Admin / Staff / Viewer roles, CRUD modules 3, business workflow 1ක් (Ex: class records, appointments, stock), reports 2, CSV export, upload module 1.",
      includes: ["Responsive app views 15 ට වෙනකන්", "Email / password login, reset (Supabase Auth)", "Roles 3: Admin, Staff, Viewer", "Simple CRUD modules 3ක් (Supabase PostgreSQL)", "Main business workflow 1ක් (statuses එක්ක)", "Dashboard + simple reports / charts 2ක්, CSV export", "Photo / document upload module 1ක්", "Transactional email provider 1ක් setup", "RLS + role authorization, validation, backups, deployment", "Admin training පැය 1ක්, revisions 3ක්, දවස් 30 bug-fix support"],
      excludes: ["POS / ERP / accounting / payroll, multi-branch", "Online payments, SMS / OTP, AI, native apps", "Complex scheduling, unlimited APIs, ලොකු data migrations", "24/7 support, backup monitoring, maintenance"],
      infra: "Supabase (Auth / DB / Storage) usage ඔයාගේ account එකෙන් — Pro USD 25 / මාසයට ඉඳන් (≈ LKR 9,225). Frontend Cloudflare Pages free tier. Email Resend free tier (3,000 / මාසයට). VPS default ඕන නෑ. Domain වෙනම." },
    "web-custom": { cat: "web", label: "Custom Web Portal / Enterprise Web App", lkr: 399000, from: true, weeks: 0, time: "Project එක අනුව", platform: "Next.js / React + Supabase (quote එකට)", screens: "Scope එක අනුව", revisions: 0,
      blurb: "ඔයාගේ business එකට හදන web portal / enterprise web app එකක්: student / customer / employee portals, multi-store systems, custom workflows. Roles, dashboards, workflows, databases, reports, integrations — approved proposal එක අනුව.",
      includes: ["Custom-designed responsive portal (quote එකට, Ex: views 20ක් විතර)", "User roles (Ex: 4), CRUD modules (Ex: 4)", "Business workflows 1 – 2ක් agreed rules එක්ක", "Admin dashboard, reports / charts, search, CSV export", "File upload, API integration, transactional email", "RLS / permissions, security testing, deployment", "Admin orientation, revisions (quote එකේ)", "දවස් 30 bug-fix support, source + DB handover"],
      excludes: ["LKR 399,000 ට ඔක්කොම include නෑ — scope එක proposal එකෙන්", "Multi-company tenancy, SSO, real-time chat, deep AI, mobile apps වෙනම estimate", "Hosting, cloud usage, APIs, email / SMS, maintenance වෙනම"],
      infra: "Architecture එක අනුව: Supabase Pro USD 25 / මාසයට, Vercel Pro USD 20 / මාසයට, Resend, domain — quote එකේ one-time / monthly / annual වෙන වෙනම itemize කරනවා." },

    /* ---------- Backend & Admin Panel packages BACKEND-01 – 05 (approved 2026-11-10, fixed LKR development prices) ----------
       Every package wires the backend / admin into ONE existing app or site of the customer (a new app / site is a separate package). */
    "backend-basic": { cat: "backend", label: "Basic Firebase Backend Setup", lkr: 29000, weeks: 1.5, time: "සති 1 – 2", platform: "Firebase · existing app / site 1ක්", screens: "Login + CRUD module 1 · admin panel නෑ", revisions: 1,
      blurb: "ඔයාගේ දැනට තියෙන app එකට හෝ site එකට Firebase backend එකක්: email / password login, Firestore data module 1ක්, security rules. Admin dashboard එකක් නෑ.",
      includes: ["Firebase project / connection 1ක් setup", "Email / password register, login, password reset", "Simple Firestore CRUD module 1ක් (validation එක්ක)", "User profile data (module එකට ඕන තරම්)", "Firestore security rules (අනිත් අයගේ data බලන්න බෑ)", "දැනට තියෙන, integration-ready frontend 1කට wire කරලා", "Testing, setup / handover docs", "Revision 1ක්, දවස් 30 bug-fix support", "Final payment එකෙන් පස්සේ source code"],
      excludes: ["අලුත් screens / frontend design, admin panel, dashboards, roles", "SMS / phone OTP, social login", "Photo / PDF uploads (Cloud Storage)", "Payments, custom API server, data migration, analytics, chat, AI", "Hosting, domain, third-party fees"],
      infra: "Firebase Auth (email) + Firestore free quota ඇතුළේ නම් LKR 0 (guarantee නෑ). VPS, domain, Storage ඕන නෑ. ඔයාගේ app / site එකේ hosting එක ඒ විදියටම." },
    "backend-admin": { cat: "backend", label: "Basic Web Admin Panel", lkr: 49000, weeks: 2.5, time: "සති 2 – 3", platform: "දැනට තියෙන Firebase backend එකකට", screens: "Admin views 4 · roles 2", revisions: 1,
      blurb: "දැනටමත් වැඩ කරන Firebase backend එකකට web admin panel එකක්: dashboard counters, records list / search / filter, add / edit form, read-only user profiles. Admin / user roles 2ක්.",
      includes: ["Dashboard overview (record totals, counters)", "Records list: දැනට තියෙන Firestore module 1කට list, search, filter, delete", "ඒ module එකටම add / edit form", "User profiles — read-only list / search", "Existing Firebase email login එකෙන් admin access", "Roles 2: Admin + user (Firestore rules වලින් enforce)", "Responsive desktop / tablet / phone layout", "Static admin frontend deploy, admin training විනාඩි 30", "Revision 1ක්, දවස් 30 bug-fix support, source handover"],
      excludes: ["අලුත් Firebase backend එකක් හදන එක (Backend 01 / 03 බලන්න)", "Firebase Auth accounts create / disable / bulk manage", "Modules 2ක් හෝ වැඩි, file uploads, advanced reports", "APIs, payments, multi-branch, AI", "Paid cloud services, maintenance"],
      infra: "Prerequisite: ඔයාගේම වැඩ කරන Firebase backend එකක් ඕන. Admin එක Firebase Hosting free tier එකේ දාන්න පුළුවන්. Domain optional. LKR 0 / මාසයට වෙන්න පුළුවන්, guarantee නෑ." },
    "backend-advanced": { cat: "backend", label: "Advanced Firebase Backend & Admin System", badge: "ගොඩක් අය තෝරන්නේ", lkr: 129000, weeks: 5.5, time: "සති 4 – 7", platform: "Firebase backend + web admin", screens: "CRUD modules 3 · admin views 8 · roles 3 · upload module 1", revisions: 2,
      blurb: "Firebase backend එකයි web admin එකයි දෙකම: data modules 3ක්, admin views 8ක් දක්වා, Admin / Editor / Viewer roles, image / PDF upload module 1ක්, basic report 1ක්. ඔයාගේ existing app / site 1කට wire කරනවා.",
      includes: ["Firebase project setup + email / password Auth", "Simple Firestore CRUD modules 3ක් (lists, forms, validation)", "Responsive web admin views 8 ට වෙනකන් (overview, data, users, files, report / settings)", "Roles 3: Admin, Editor, Viewer (authorization matrix)", "Image / PDF upload module 1ක් (Cloud Storage; types, size limit, role actions)", "Dashboard counters + basic report / chart 1ක්", "Search / filter, read-only user profile list", "Firestore + Storage security rules", "Existing frontend 1කට integration, integration tests, deployment", "Admin training පැය 1, revisions 2ක්, දවස් 30 bug-fix support, source handover"],
      excludes: ["අලුත් customer-facing app / site එකක් හදන එක", "Bulk Auth account admin, invitation / permission lifecycle, multi-tenant / multi-branch", "Payments, automation, heavy PDF processing, AI, SMS OTP, external APIs", "Unlimited uploads, ලොකු data migration", "VPS, paid maintenance, vendor fees"],
      infra: "Cloud Storage (uploads) වලට Firebase Blaze (pay-as-you-go) billing on කරන්න ඕන — free allowance ඇතුළේ නම් bill එක 0 වෙන්නත් පුළුවන්, ඒත් billing enable කරලා ඕන. Firestore / Hosting free quotas. VPS ඕන නෑ. Domain optional." },
    "backend-professional": { cat: "backend", label: "Professional Backend & Admin System", badge: "Business වලට හොඳයි", lkr: 219000, weeks: 8.5, time: "සති 7 – 10", platform: "Firebase + Cloud Functions + web admin", screens: "CRUD modules 4 · admin views 10 · roles 4 · uploads 2 · reports 3", revisions: 3,
      blurb: "Professional Firebase backend + admin: modules 4, admin views 10, Super Admin / Manager / Editor / Viewer roles, upload modules 2, reports 3, basic audit log, scoped Cloud Functions, external API 1ක්.",
      includes: ["Firebase backend + email / password Auth", "Simple Firestore CRUD modules 4ක්", "Responsive web admin views 10 ට වෙනකන්", "Roles 4: Super Admin, Manager, Editor, Viewer (role-action matrix, rules වලින් enforce)", "Image / PDF upload-management modules 2ක්", "Basic reports / charts 3ක්, filtered lists, pagination", "Basic audit log (කවුද, මොකද, කවදද — agreed modules වලට)", "Scoped Cloud Functions / server-side operations (quote එකේ triggers)", "External API integration 1ක් (ඔයාගේ access එකෙන්)", "Existing frontend 1කට integration, security rules, validation, testing, deployment", "Admin training පැය 1, revisions 3ක්, දවස් 30 bug-fix support, source handover"],
      excludes: ["ලොකු customer-facing app / site UI එකක්, frontends කීපයක්", "Multi-tenant SaaS / enterprise multi-store", "Complex payments / banking, POS, payroll / accounting, AI", "Unlimited functions / integrations, heavy real-time workloads", "Cloud operations, SLAs, paid infrastructure" ],
      infra: "Cloud Storage + Cloud Functions වලට Firebase Blaze billing ඕන (usage-based; free allowances තියෙනවා). Auth, Firestore, Hosting, Functions compute, domain, API fees ඔයාගේ account එකෙන් වෙනම. VPS ඕන නෑ." },
    "backend-custom": { cat: "backend", label: "Custom Backend & Admin Development", lkr: 349000, from: true, weeks: 0, time: "Project එක අනුව", platform: "Firebase / Supabase / custom (quote එකට)", screens: "Scope එක අනුව", revisions: 0,
      blurb: "ඔයාගේ business එකට හදන custom backend එකක් සහ secure admin system එකක්: custom database schema, APIs, advanced dashboards, roles, workflows, integrations. Features, timeline, final price dedicated project quote එකෙන්.",
      includes: ["Firebase, Supabase, PostgreSQL හෝ custom backend architecture", "Custom database schema + server-side APIs (REST ආදී)", "Advanced admin dashboards, role management, workflow orchestration", "Complex records, scoped file / image / PDF management, reports / exports", "API, payments, notifications, automation, AI integrations (quote කළොත්)", "Security / access control, testing, deployment, documentation (quote එකේ items වලට)", "Existing frontend integration (agreed කළොත්)", "දවස් 30 bug-fix support, source + DB handover"],
      excludes: ["LKR 349,000 ට ඔක්කොම include නෑ — scope එක quote එකෙන්", "අලුත් customer-facing app / website එකක් (වෙනම scope)", "Revisions / timeline quote එකේ (unlimited නෑ)", "Infrastructure / third-party fees වෙනම"],
      infra: "Architecture එක අනුව (Firebase Blaze usage, Supabase Pro USD 25 / මාසයට ඉඳන්, domain, APIs) — quote එකේ one-time / monthly වෙන වෙනම itemize කරනවා. VPS ඕන නම් විතරයි." },

    /* ---------- AI Features & Automation AI-01 – 06 (approved 2026-11-11, fixed LKR one-time development / integration fees) ---------- */
    "ai-chatbot": { cat: "ai", label: "Basic AI Website Chatbot", lkr: 40000, weeks: 1.5, time: "සති 1 – 2", platform: "ඔයාගේ existing website 1කට", screens: "FAQ pairs 30 · language 1", revisions: 1,
      blurb: "ඔයාගේ දැනට තියෙන website එකට ඔයාගේම approved FAQ වලින් උත්තර දෙන, brand එකට ගැළපෙන secure AI chat widget එකක්. දන්නේ නැති ප්‍රශ්නයකට ඔයාගේ contact එකට යොමු කරනවා.",
      includes: ["Responsive chat widget (phone + desktop), ඔයාගේ colours + logo", "Approved FAQ ප්‍රශ්න-උත්තර 30 ට වෙනකන්", "Primary language 1ක්: සිංහල හෝ English", "AI model provider 1ක් server-side backend එකකින් (API key browser එකේ නෑ)", "දන්නේ නැති ප්‍රශ්නයකට human / contact fallback", "Basic rate limiting + abuse guardrails", "Website integration, testing, setup docs", "Revision 1ක්, දවස් 30 bug-fix support, code handover"],
      excludes: ["Live agent handoff, CRM, chat history database, lead backend", "PDF / document ingestion, RAG, citations, website crawling", "WhatsApp / Instagram / Facebook / phone, voice AI, payments", "Unlimited prompts, FAQs, languages, traffic, revisions"],
      infra: "AI tokens (usage අනුව) + serverless API proxy (Ex: Cloudflare Workers free tier / USD 5 ඉඳන්) ඔයාගේ accounts වලින්. VPS / database ඕන නෑ. ඔයාගේ site එකේ hosting ඒ විදියටම." },
    "ai-knowledge": { cat: "ai", label: "AI Knowledge Base Assistant", badge: "ගොඩක් අය තෝරන්නේ", lkr: 100000, weeks: 4, time: "සති 3 – 5", platform: "ඔයාගේ existing website 1කට · RAG", screens: "Files 12 · pages 150 · 30 MB", revisions: 2,
      blurb: "ඔයාගේ approved business documents (PDF, DOCX, TXT, MD) වලින් visitors ලාගේ ප්‍රශ්න වලට උත්තර දෙන assistant එකක් — document retrieval (RAG) එක්ක, source / file references පෙන්නලා, evidence නැති තැන fallback.",
      includes: ["Responsive chat interface එකක් existing site එකේ", "Files 12 ට වෙනකන් · පිටු 150 ට වෙනකන් · 30 MB ට වෙනකන් (තුනම)", "Document preparation, upload, indexing, search validation", "RAG retrieval (Ex: OpenAI File Search) + answer grounding", "Answer එකේ source / file reference (API support කරන තැන)", "Primary language 1ක්, unknown-answer fallback", "Conversation context, server-side secrets, rate limiting, usage monitoring", "Document correction batch 1ක්, revisions 2ක්", "QA (~20 curated questions), deployment, docs, දවස් 30 bug-fix support"],
      excludes: ["Scanned / image-only PDFs (OCR), handwriting, complex charts", "Google Drive / OneDrive / SharePoint auto-sync, unlimited uploads", "Self-serve document upload admin, WhatsApp, multilingual, voice", "Fine-tuning; 100% accuracy guarantee එකක් නෑ"],
      infra: "AI tokens + File Search calls (≈ USD 2.50 / 1,000 calls) + vector storage (1 GB free, පස්සේ USD 0.10 / GB / දවසට) + serverless hosting — ඔයාගේ OpenAI / cloud accounts වලින්." },
    "ai-automation": { cat: "ai", label: "AI Content & Workflow Automation", lkr: 160000, weeks: 5, time: "සති 4 – 6", platform: "Make / n8n වගේ platform එකක", screens: "Workflow 1 · scenarios 2 · templates 3", revisions: 2,
      blurb: "Business workflow 1ක් (Ex: Google Sheet row එකකින් content draft එකක්) — AI drafts, ඔයාගේ human approval, output destination එකකට. Scenarios 2 ඒ එක workflow එකේම කොටස්, වෙනම projects 2ක් නෙවෙයි.",
      includes: ["AI text-content workflow 1ක් (brand voice එකට prompts)", "Connected automation scenarios 2 ට වෙනකන් (එකම workflow එකේ)", "Text templates 3 ට වෙනකන් (captions, product descriptions, promo copy)", "Input source 1ක් (Ex: Google Sheets) + output destination 1ක් (Ex: Google Docs)", "Trigger 1ක්: scheduled හෝ event-based", "Human review / approval step එක output එකට කලින්", "Duplicate prevention, retries, error handling, execution logs", "Secure credentials, usage / cost alerts (platform support කරන තරමට)", "Test items ~30, revisions 2ක්, training පැය 1", "Workflow export + code handover, දවස් 30 bug-fix support"],
      excludes: ["Meta / YouTube / WhatsApp auto-posting, bulk DMs, email blasts", "AI image / video, CRM, unlimited templates, voice", "Custom admin dashboard, 24/7 monitoring, monthly content production", "අමතර input / output accounts, triggers, workflows → change quote"],
      infra: "Make plan + operations / credits (Free tier; Core ≈ USD 12 / මාසයට annual) හෝ n8n, AI tokens, paid connectors — ඔයාගේ accounts වලින්. VPS / database / domain ඕන නෑ." },
    "ai-assistant": { cat: "ai", label: "Advanced AI Business Assistant", badge: "Business වලට හොඳයි", lkr: 300000, weeks: 8.5, time: "සති 7 – 10", platform: "Existing site / dashboard + existing database", screens: "Entities 2 · read tools 2 · approved write 1", revisions: 3,
      blurb: "ඔයාගේ existing database එකෙන් (Firebase හෝ Supabase) permitted data අහන්න පුළුවන්, approval එකකින් පස්සේ action 1ක් කරන secure AI assistant එකක් — Ex: \"මේ මාසේ pending orders පෙන්නන්න\".",
      includes: ["AI assistant interface 1ක් existing website / dashboard 1කට", "Existing database 1ක්: Firebase / Firestore හෝ Supabase / PostgreSQL", "Optional Google Sheets READ integration 1ක්", "Approved data entities 2 ට වෙනකන්, allowlisted READ tools 2ක්", "WRITE action 1ක් — authorized human approval එකකින් පස්සේ විතරයි (server එක re-check කරනවා)", "Admin / Staff roles, server-side authorization, least-privilege queries", "Predefined business summary / report format 1ක්", "Tool argument validation, prompt-injection countermeasures, fallback", "Audit log (කවුද approve කළේ), rate limits, monitoring", "Testing, revisions 3ක්, docs, දවස් 30 bug-fix support"],
      excludes: ["අලුත් CRM / POS / inventory system එකක්", "AI-02 style document RAG (default නෑ)", "Writes කීපයක්, unrestricted SQL / Firestore, refunds, payroll, legal decisions", "WhatsApp / voice / omnichannel, multi-tenant"],
      infra: "AI tokens, existing Firebase / Supabase usage, serverless middleware (Cloudflare Workers), Sheets API, email — ඔයාගේ accounts වලින්. දැනට ගෙවන subscriptions දෙපාරක් ගණන් වෙන්නේ නෑ." },
    "ai-agent": { cat: "ai", label: "AI Agent & Multi-Step Automation System", lkr: 550000, weeks: 12, time: "සති 10 – 14", platform: "n8n වගේ runtime එකක · agent 1", screens: "Workflows 2 · integrations 2 · tools 5 · triggers 2", revisions: 3,
      blurb: "Scoped AI agent 1ක්: multi-step workflows 2ක් දක්වා, external integrations 2ක්, allowlisted tools 5ක් (read 3 + write 2). හැම write action එකකටම human approval. Ex: අලුත් order → check → follow-up email draft → staff approval → send → status update.",
      includes: ["AI agent 1ක් agreed task boundaries + tool orchestration එක්ක", "Multi-step workflows 2 ට වෙනකන් (එක business use case එකක)", "External system integrations 2 ට වෙනකන් (Ex: database + email API)", "Allowlisted tools 5 ට වෙනකන්: read 3 + write 2", "හැම write action එකකටම human approval (authority check + arguments preview)", "Scheduled / event triggers 2 ට වෙනකන්", "Durable task state, retries / backoff, timeouts, duplicate prevention, failed-run alerts", "Execution logs, status reporting, basic monitoring view", "Scenarios ~50 test / evaluation", "Docs, training, revisions 3ක්, source + workflow export, දවස් 30 bug-fix support"],
      excludes: ["Unlimited agents / executions, open web browsing, unattended financial actions", "Unrestricted DB writes, bulk messaging, auto purchases / refunds", "AI-02 style file ingestion (combined quote එකකින් විතරයි)", "24/7 operations, SLA, SSO, multi-region, compliance audit"],
      infra: "n8n Cloud (Starter ≈ €20 / මාසයට 2,500 executions, Pro ≈ €50 / 10,000 — annual) හෝ වෙන runtime එකක්, AI tokens, database, email / SMS — ඔයාගේ accounts වලින්. n8n plan එක හෝ AI credits development fee එකේ නෑ." },
    "ai-custom": { cat: "ai", label: "Custom AI Solutions / Enterprise AI Systems", lkr: 800000, from: true, weeks: 0, time: "Project එක අනුව", platform: "Custom architecture (quote එකට)", screens: "Scope එක අනුව", revisions: 0,
      blurb: "ඔයාගේ business එකටම හදන custom AI solution එකක්: permissions එක්ක enterprise knowledge access, multi-agent systems, CRM / ERP / support desk workflow automation, customer-support AI, analytics. Project එකක් එකක් බැගින් quote.",
      includes: ["Custom AI architecture / design (agreed solution එකට ඕන තරම්)", "Agents / models, workflows / triggers, integrations — quote එකේ හරියටම", "Web / staff UI, dashboard (scope එකේ තිබ්බොත්)", "RAG / vector store / document indexing (ඕන නම්, costed)", "Auth / roles / data isolation, human approval + audit trails", "Logs, alerts, rate limits, spend controls (agreed requirements වලට)", "Security testing / AI evaluations, documentation, training, deployment", "දවස් 30 bug-fix support, source / workflow handover"],
      excludes: ["LKR 800,000 ට ඔක්කොම include නෑ — scope එක quote එකෙන්", "Compliance certification, pen-test, data residency, custom SLA, 24/7", "High-volume contact centre, unlimited agents / prompts, fine-tuning", "GPU hosting, multi-region, native mobile apps, ERP redevelopment"],
      infra: "AI tokens / tools, vector stores, automation plans, hosting / database / storage, email / SMS, domain, observability — ඔයාගේ accounts වලින්, quote එකේ වෙන වෙනම itemize. ඕන components විතරයි (n8n + Make + Supabase + Vercel + VPS ඔක්කොම stack කරන්නේ නෑ)." },

    /* ---------- Maintenance & Hosting MAINT-01 – 06 (approved 2026-11-11): MONTHLY Hexora service fees, 100% prepaid each month.
       Hosting, VPS, databases, backups, domains, plugins, gateways, monitoring tools are the customer's. ---------- */
    "maint-basic": { cat: "maint", monthly: true, label: "Basic Website Care", lkr: 5500, weeks: 0, time: "මාසිකව", platform: "Static site 1ක් · pages 5", screens: "Edits 2 / මාසයට · snapshot 1", revisions: 0,
      blurb: "Static website එකක් (pages 5 ට වෙනකන්) නිරෝගීව තියාගන්න: uptime monitoring, මාසික health check, පොඩි content edits 2ක්, SSL / domain / broken-link checks, source snapshot එකක්, මාසික report එකක්.",
      includes: ["Static website 1ක්, දැනට තියෙන pages 5 ට වෙනකන්", "Automated uptime monitoring", "මාසික site health inspection 1ක්", "මාසික SSL / HTTPS + domain expiry check", "Minor content edits 2 / මාසයට (එකකට විනාඩි 20 විතර; text, hours, phone, photo swap)", "මාසික broken-link + mobile check", "මාසික source snapshot / repo backup 1ක් (database / email backup නෙවෙයි)", "Agreed changes deploy කරලා දීම", "මාසික maintenance report 1ක්", "Business-hours support (initial response target: business days 2)"],
      excludes: ["WordPress / WooCommerce, database, server admin", "අලුත් pages / sections / features, SEO campaigns, content writing", "Malware removal, hacked-account recovery, 24/7 staffed support, uptime guarantee", "Edits 2ට වැඩි; unused edits ඊළඟ මාසෙට යන්නේ නෑ"],
      infra: "Hosting (static free tier නම් LKR 0 — ඒත් Hexora fee එක ඒකෙන් free වෙන්නේ නෑ), domain renewal, optional paid uptime monitor, form / email tools ඔයාගේ." },
    "maint-wordpress": { cat: "maint", monthly: true, label: "WordPress Website Care", lkr: 12500, weeks: 0, time: "මාසිකව", platform: "WordPress site 1ක් (shop නැති) · pages 8 · plugins 12", screens: "Update windows 2 · edits 2 / මාසයට", revisions: 0,
      blurb: "WordPress business site එකකට (pages 8, plugins 12 දක්වා): compatibility-tested core / theme / plugin updates, scheduled backup checks, security / health monitoring, content edits 2ක්, මාසික report.",
      includes: ["WordPress core, theme, plugins 12 ට වෙනකන් — tested updates, maintenance windows 2 / මාසයට", "Daily database + weekly full backups configure (hosting / plugin / paid storage support කරන තැන)", "Retention target: daily DB 7 + weekly full 4 (ඔයාගේ storage අනුව)", "මාසික backup job / storage / retention review (restore proof එකක් නෙවෙයි)", "මාසික security review / malware scan, site health", "Uptime monitoring, SSL + domain expiry review", "මාසික performance + broken-link review", "Minor content edits 2 / මාසයට (එකකට විනාඩි 20 විතර, existing pages)", "Update එකකට පස්සේ smoke tests (pages, login, forms, mobile)", "මාසික report, business-hours support (response target: business days 2)"],
      excludes: ["WooCommerce / cart / checkout / payments (E-commerce Store Care බලන්න)", "අලුත් pages, plugins, features, redesign, migration", "Hacked-site recovery, data-recovery guarantee", "Paid themes / plugins, backup storage, hosting, domain; 24/7, uptime guarantee, unlimited edits"],
      infra: "WordPress hosting, domain, premium themes / plugins, offsite backup storage / security tools ඔයාගේ. Infected / ගොඩක් outdated site එකක initial cleanup වෙනම quote." },
    "maint-ecommerce": { cat: "maint", monthly: true, label: "E-commerce Store Care", badge: "Online shop එකට", lkr: 25000, weeks: 0, time: "මාසිකව", platform: "WooCommerce store 1ක් · products 100 · plugins 20", screens: "Update windows 2 · product edits 5 / මාසයට", revisions: 0,
      blurb: "WooCommerce store එකකට (simple products 100, plugins 20 දක්වා): tested updates, backup monitoring, checkout / payment gateway sandbox checks, product edits 5ක්, security / uptime checks, මාසික report.",
      includes: ["WordPress + WooCommerce + theme + plugins 20 ට වෙනකන් — tested updates, maintenance windows 2 / මාසයට", "Pre-update backup / rollback plan, staging ඇති තැන", "Daily DB + weekly full backups (retention target 7 + 4, ඔයාගේ platform අනුව), මාසික status review", "Cart / checkout / gateway sandbox checks (agreed test sessions වලදී, changes වලට පස්සේ)", "මාසික order-status errors + gateway logs review", "Security / malware scan, SSL / domain, uptime monitoring", "Existing product edits 5 / මාසයට (price, short description, image 1)", "Order email / checkout smoke tests", "මාසික report, business-hours support (response target: business days 2)"],
      excludes: ["දවසේ order processing, dispatch, shipping, stock counts, refunds, customer service", "Gateway migration, marketplace integrations, අලුත් features / design", "Major incident recovery, malware cleanup, 24/7", "Plugin / theme licenses, hosting, gateway transaction fees, backup storage"],
      infra: "WooCommerce hosting, PayHere / gateway plan + fees, premium extensions, domain, order-aware backup storage, email / SMS ඔයාගේ. Live store එකක් උඩින් පරණ DB එකක් blind restore කරන්නේ නෑ — orders නැති වෙන්න පුළුවන්." },
    "maint-webapp": { cat: "maint", monthly: true, label: "Web App & Database Care", badge: "Business වලට හොඳයි", lkr: 45000, weeks: 0, time: "මාසිකව", platform: "Web app 1ක් · Firebase හෝ Supabase 1ක්", screens: "Entities 5 · functions 10 · patches 2 / මාසයට", revisions: 0,
      blurb: "Production web app එකකට (Firebase හෝ Supabase backend, entities 5, functions 10 දක්වා): auth / security reviews, database + backup + function health, cloud usage checks, patches 2ක්, quarterly safe restore rehearsal, report.",
      includes: ["මාසික auth, access control, security review (Firestore / Storage rules හෝ Supabase RLS)", "සතිපතා database health, usage, errors, logs review", "සතිපතා backup job / retention review, මාසික restore-readiness review", "Quarter එකකට safe non-production restore rehearsal 1ක් (test resources + provider charges ඔයාගේ)", "සතිපතා API / functions error review (10 ට වෙනකන්)", "මාසික cloud usage + billing review (unusual usage flag; spend cap guarantee නෑ)", "Automated uptime / endpoint checks", "Planned patch / deployment windows 2 / මාසයට, smoke tests", "Minor bug / config corrections 2 / මාසයට (එකකට පැය 1 දක්වා)", "මාසික report, business-hours support (response target: business day 1)"],
      excludes: ["අලුත් CRUD modules, functions, APIs, schema migrations, performance re-architecture", "Major incident / disaster recovery, pen-tests, compliance certification", "Uptime / recovery SLA, 24/7 human support, unlimited changes", "Cloud database, backups, functions, domain, email, API usage charges"],
      infra: "Firebase (Blaze — scheduled backups / restores වලට billing) හෝ Supabase (backups / PITR plan එක අනුව) usage, hosting, domain ඔයාගේ. Free-tier project එකක full managed backups නෑ." },
    "maint-vps": { cat: "maint", monthly: true, label: "Managed Cloud / VPS Care", lkr: 65000, weeks: 0, time: "මාසිකව", platform: "Linux VPS 1ක් · 4 vCPU / 8 GB දක්වා · services 2", screens: "Windows 2 · config changes 2 · triages 2 / මාසයට", revisions: 0,
      blurb: "Healthy Linux VPS එකකට (4 vCPU / 8 GB, services 2 දක්වා): OS security patching, firewall / SSH hardening review, Nginx + SSL, CPU / RAM / disk monitoring, backup-health review, quarterly restore rehearsal, incident triage 2ක්.",
      includes: ["Ubuntu LTS (හෝ agreed distro) මාසික OS security patching, urgent patches risk අනුව", "මාසික firewall, SSH / user access, least-privilege, hardening review", "Nginx / reverse proxy config 1ක් + SSL certificate maintenance", "Automated CPU, RAM, disk, service health, uptime monitoring (agreed alert channels)", "Docker / systemd services 2 ට වෙනකන් checks", "Agreed VPS backup policy 1ක්, සතිපතා backup-status + storage review", "Quarter එකකට safe restore rehearsal 1ක් (isolated test env, test resources ඔයාගේ)", "සතිපතා runtime / server logs review", "Planned maintenance windows 2 / මාසයට", "Minor server config changes 2 / මාසයට (එකකට පැය 1 දක්වා)", "Minor incident triages 2 / මාසයට (business hours; assessment + initial handling)", "මාසික server health report, business-hours support (response target: business day 1)"],
      excludes: ["Major incidents, hacked-server / ransomware recovery, migrations, re-architecture", "Database redesign, disaster recovery engineering, new infrastructure", "24/7 human on-call (monitoring automated වුණත්), uptime / zero-data-loss guarantee", "VPS hosting, backup / snapshot storage, domain, paid monitoring, licenses"],
      infra: "VPS, snapshots / offsite backups, storage, bandwidth, paid monitoring / security tools, domains / licenses ඔයාගේ. Web App Care එකත් ඕන නම් combined quote (overlapping වැඩ දෙපාරක් ගණන් වෙන්නේ නෑ)." },
    "maint-custom": { cat: "maint", monthly: true, label: "Custom Maintenance & SLA", lkr: 150000, from: true, weeks: 0, time: "මාසිකව · quote එකට", platform: "Servers 2 දක්වා · services 4 · written SLA", screens: "Checks 10 · windows 4 · changes 4 · triages 4 / මාසයට", revisions: 0,
      blurb: "Multi-server / business-critical systems වලට custom maintenance + written SLA: priority business-hours incident response targets, advanced monitoring, patch management, backup review, SLA reporting. LKR 150,000 / මාසයට ඉඳන් — starting example එකක්, quote එකෙන් final.",
      includes: ["Starting example: healthy Linux servers 2 ට වෙනකන් (එකක් 4 vCPU / 8 GB දක්වා), services 4", "Critical automated monitoring checks 10 ට වෙනකන් (ඔයාගේ tools / accounts)", "මාසික security / access / OS patch maintenance, risk-based urgent patches", "SSH / firewall / access reviews, SSL / reverse-proxy checks", "සතිපතා backup status, schedule, retention, capacity reviews", "Quarter එකකට safe restore rehearsal 1ක් (test infra ඔයාගේ)", "Planned maintenance windows 4 / මාසයට, minor config changes 4 (එකකට පැය 1), incident triages 4", "Priority response targets (business hours, සඳුදා – සිකුරාදා 09:00 – 18:00 SL): P1 පැය 2 · P2 පැය 4 · P3 business day 1 — initial response, resolution deadline එකක් නෙවෙයි", "Written severity classes, escalation process, මාසික SLA / health report, review meeting පැය 1"],
      excludes: ["24/7 staffed on-call, dedicated engineer shifts", "99.9% uptime guarantee, service credits, RTO / RPO, zero data loss", "Unlimited servers / services / checks / incidents", "Multi-region failover, HA clustering, DR engineering, security certification", "Hacked / broken server remediation, migrations, new app development", "Cloud bills, storage, test infra, paid alerting, licenses"],
      infra: "Agreed servers, multi-server backup / monitoring, test environments, domains / licenses, security tools, paging tools ඔයාගේ. 24/7 coverage ඕන නම් real staffing model එකකින් වෙනම quote." }
  },

  /* ---------- Package add-ons ----------
     The old add-on price list (extra screens, login…) is NOT approved for the new packages: anything a
     package does not include is quoted separately (change request). Leave this empty, or add approved ones.
     lkr = LKR (fixed, like the packages). qty: true = the customer picks how many. */
  addons: {},

  /* ---------- Project types: price for a SMALL project ---------- */
  types: {
    website:  { label: "Website",           note: "Business, shop, portfolio site",           usd: 120, weeks: 2, kind: "web" },
    webapp:   { label: "Web system",        note: "POS, booking, class / stock management",   usd: 300, weeks: 5, kind: "web",  includesAdmin: true },
    android:  { label: "Android app",       note: "Flutter app එක Android phones වලට",    usd: 250, weeks: 4, kind: "app" },
    cross:    { label: "Android + iOS app", note: "එක app එකක් stores දෙකටම",             usd: 350, weeks: 5, kind: "app" },
    appadmin: { label: "App + Admin panel", note: "App එක + manage කරන්න web dashboard",   usd: 500, weeks: 7, kind: "both", includesAdmin: true }
  },

  /* ---------- Size ---------- */
  sizes: {
    small:  { label: "Small",  note: "Screens / pages 5 ට වෙනකන්", priceX: 1.0, weeksX: 1.0, maintenanceUsd: 15 },
    medium: { label: "Medium", note: "Screens / pages 6 – 15",       priceX: 1.6, weeksX: 1.4, maintenanceUsd: 30 },
    large:  { label: "Large",  note: "Screens / pages 16+",          priceX: 2.4, weeksX: 2.0, maintenanceUsd: 45 }
  },

  /* ---------- Features (added on top) ---------- */
  features: {
    login:    { label: "Login & Sign up",              usd: 30,  weeks: 0.5 },
    otp:      { label: "OTP verification (SMS / Email)", usd: 35, weeks: 0.5 },
    admin:    { label: "Admin Panel",                  usd: 90,  weeks: 1.5 },
    payments: { label: "Online payments (Card / PayHere)", usd: 75, weeks: 1 },
    shop:     { label: "Products, Cart & Orders",      usd: 105, weeks: 1.5 },
    booking:  { label: "Bookings & Appointments",      usd: 60,  weeks: 1 },
    chat:     { label: "Chat / Messaging",             usd: 105, weeks: 1.5 },
    notify:   { label: "Push notifications",           usd: 30,  weeks: 0.5 },
    maps:     { label: "Maps & Location",              usd: 45,  weeks: 0.5 },
    uploads:  { label: "Photo / PDF upload",           usd: 30,  weeks: 0.5 },
    reports:  { label: "Reports & Charts",             usd: 45,  weeks: 1 },
    lang:     { label: "Sinhala / Tamil / English",    usd: 35,  weeks: 0.5 },
    offline:  { label: "Offline mode",                 usd: 45,  weeks: 1 },
    qr:       { label: "QR / Barcode scan",            usd: 30,  weeks: 0.5 },
    ai:       { label: "AI features (Chatbot, Smart search)", usd: 135, weeks: 1.5 }
  },

  /* ---------- Design ---------- */
  design: {
    ready: { label: "Design එක මගේ ළඟ තියෙනවා", note: "Figma / XD / screenshots", percent: 0,  usd: 0 },
    ui:    { label: "Screens design කරලා දෙන්න",     note: "Hexora UI/UX design",      percent: 20, usd: 0 },
    brand: { label: "Screens + Logo design",           note: "UI/UX + logo & colours",   percent: 20, usd: 45 }
  },

  /* ---------- Launch extras ---------- */
  extras: {
    playstore: { label: "Google Play එකේ publish කරන්න", note: "Google fee USD 25 (එක පාරයි) වෙනම", usd: 15, for: ["app", "both"] },
    appstore:  { label: "App Store එකේ publish කරන්න",   note: "Apple fee USD 99 / අවුරුද්දට වෙනම", usd: 30, for: ["app", "both"] },
    hosting:   { label: "Domain & Hosting setup",          note: "Domain / hosting fees වෙනම",         usd: 25, for: ["web", "both"] },
    training:  { label: "Training & User guide",           note: "ඔයාගේ team එකට use කරන විදිය",   usd: 15, for: ["app", "web", "both"] }
  },

  /* ---------- Design & Video services (price per item, USD) ----------
     days = working days for the first item, extraDays = for each extra one */
  creative: {
    logo:    { label: "Logo design",              note: "Concepts 3 + revisions 3, ඔක්කොම file formats", usd: 25, unit: "logo",      days: 3, extraDays: 2 },
    brand:   { label: "Branding kit",             note: "Logo, colours, business card, social media kit", usd: 60, unit: "kit",      days: 6, extraDays: 4 },
    social:  { label: "Social media post",        note: "Facebook / Instagram post design",               usd: 4,  unit: "post",     days: 1, extraDays: 0.25 },
    poster:  { label: "Poster / Flyer / Banner",  note: "Print වලටයි online වලටයි",                    usd: 10, unit: "design",   days: 1, extraDays: 0.5 },
    thumb:   { label: "YouTube thumbnail",        note: "Click කරන්න හිතෙන design",                    usd: 4,  unit: "thumbnail", days: 1, extraDays: 0.25 },
    photo:   { label: "Photo editing",            note: "Retouch, background remove, colour fix",          usd: 2,  unit: "photo",    days: 1, extraDays: 0.1 },
    reel:    { label: "Reel / Short video edit",  note: "තත්පර 60 වෙනකන් (TikTok, Reels, Shorts)",       usd: 10, unit: "video",    days: 1, extraDays: 0.5 },
    youtube: { label: "YouTube video edit",       note: "විනාඩි 10 වෙනකන්",                               usd: 25, unit: "video",    days: 2, extraDays: 1 },
    motion:  { label: "Logo animation / Intro",   note: "ඔයාගේ logo එක animate කරලා",                   usd: 20, unit: "animation", days: 2, extraDays: 1 },
    promo:   { label: "Video ad / Promo",         note: "තත්පර 30 – 60 product / business promo",         usd: 35, unit: "video",    days: 3, extraDays: 2 }
  },

  /* ---------- Speed ---------- */
  urgency: {
    normal: { label: "Normal", note: "Standard timeline එක", percent: 0,  weeksX: 1 },
    fast:   { label: "Urgent", note: "ඉක්මනට — +25%",       percent: 25, weeksX: 0.7 }
  }
};
