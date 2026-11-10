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
     cat: "app" = Mobile App packages 01–06, cat: "web" = Website Development packages WEB-01–06.
     FIXED LKR prices: they are NOT scaled by the dollar rate ("packagesFixedLkr": true). The price is the
     DEVELOPMENT charge only: Firebase usage, domain, hosting, PayHere fees, Google / Apple accounts are the
     customer's (paid separately). Packages 01–05 are Android only (Flutter). "from": true = starting price,
     final price by quotation (Custom). "packagesVersion" guards an older copy saved from the admin panel:
     when it differs, the packages below replace the saved ones. */
  packagesFixedLkr: true,
  packagesVersion: 3,
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
      infra: "Architecture එක අනුව: Supabase Pro USD 25 / මාසයට, Vercel Pro USD 20 / මාසයට, Resend, domain — quote එකේ one-time / monthly / annual වෙන වෙනම itemize කරනවා." }
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
