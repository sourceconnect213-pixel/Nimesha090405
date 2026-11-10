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

  /* ---------- Mobile app packages (approved price list, 2026-11-10) ----------
     FIXED LKR prices: they are NOT scaled by the dollar rate ("packagesFixedLkr": true). The price is the
     DEVELOPMENT charge only: Firebase usage, domain, hosting, PayHere fees, Google / Apple accounts are the
     customer's (paid separately). Packages 01–05 are Android only (Flutter). "from": true = starting price,
     final price by quotation (Custom). "packagesVersion" guards an older copy saved from the admin panel:
     when it differs, the packages below replace the saved ones. */
  packagesFixedLkr: true,
  packagesVersion: 2,
  packageBaseRate: 369,                  // only used to show "≈ USD" next to LKR prices
  packageNote: "මේවා development charges. Firebase / database usage, hosting, domain, PayHere fees, Google / Apple developer accounts ඕන වුණොත් වෙනම (ඔයාගේ accounts වලින්).",
  packageTerms: ["50% advance", "දවස් 30ක් bug-fix support (approved scope එකට)", "Final payment එකෙන් පස්සේ source code"],
  packages: {
    basic: { label: "Basic Android App", lkr: 14000, weeks: 1, time: "දවස් 5 – 7", platform: "Android only", screens: "Screens 3ක් (simple)", revisions: 1,
      includes: ["Flutter screens 3ක් (Ex: Home, Services, Contact)", "Clean UI + navigation", "ඔයා දෙන text, photos, logo", "Simple form UI (local)", "Test APK + basic testing", "Minor revision 1ක්", "දවස් 30 bug-fix support"],
      excludes: ["Firebase / online database", "Login, OTP, payments, notifications", "Admin panel", "iOS app, Play Store publish"] },
    standard: { label: "Standard Android App", lkr: 25000, weeks: 2.5, time: "සති 2 – 3", platform: "Android only", screens: "Screens 5 ට වෙනකන් (simple)", revisions: 2,
      includes: ["Screens 5 ට වෙනකන්", "Polished UI/UX, forms + validation", "On-device (offline) data storage", "Basic local search / filter", "Splash screen + app icon", "Test APK + testing", "Revisions 2ක්", "දවස් 30 bug-fix support"],
      excludes: ["Firebase Auth / Firestore / cloud sync", "OTP, payments, admin panel, notifications", "iOS app, Play Store publish"] },
    firebase: { label: "Firebase Android App", badge: "ගොඩක් අය තෝරන්නේ", lkr: 49000, weeks: 4, time: "සති 3 – 5", platform: "Android only", screens: "Screens 8 ට වෙනකන්", revisions: 2,
      includes: ["Screens 8 ට වෙනකන්, professional UI/UX", "Firebase login (email + password), password reset", "Firestore database + CRUD module 1ක්", "User profile view / edit", "Basic search / filter", "Offline caching (Firestore support කරන තැන)", "Firestore security rules", "Test APK, revisions 2ක්, දවස් 30 bug-fix support"],
      excludes: ["SMS / phone OTP, Google sign-in", "Photo / file uploads", "Admin panel, push notifications", "Payments, external APIs", "iOS app, Play Store publish"] },
    business: { label: "Advanced / Business Android App", badge: "Business වලට හොඳයි", lkr: 99000, weeks: 7.5, time: "සති 6 – 9", platform: "Android + basic web admin", screens: "App screens 12 ට වෙනකන් · admin sections 3", revisions: 2,
      includes: ["App screens 12 ට වෙනකන්", "Firebase login (email + password), profile", "Firestore CRUD modules 2ක්", "Web admin dashboard (sections 3: overview, users, records)", "Basic user / admin roles (security rules)", "Image upload use-case 1ක් (Firebase Storage)", "Basic search / filter", "Manual push notifications (FCM)", "Test APK, revisions 2ක්, දවස් 30 bug-fix support"],
      excludes: ["Online payments, SMS OTP", "Full e-commerce / POS / inventory", "Reports / analytics engine, AI, external APIs", "iOS app, Play Store publish"] },
    premium: { label: "Premium Android App", lkr: 249000, weeks: 12, time: "සති 10 – 14", platform: "Android + web admin", screens: "App screens 20 ට වෙනකන් · admin sections 5", revisions: 3,
      includes: ["App screens 20 ට වෙනකන්, polished UI/UX", "Firebase login, profile, CRUD modules 3 ට වෙනකන්", "Web admin dashboard (sections 5 ට වෙනකන්)", "User / Staff / Admin roles", "Workflow 1ක්: Products + Cart + Orders හෝ Bookings (එකක්)", "PayHere payment gateway 1ක් (server-side verify)", "External API integration 1ක්", "Basic image / file uploads", "Push notifications + basic reports", "Testing, revisions 3ක්, දවස් 30 bug-fix support"],
      excludes: ["iOS app", "Multi-store / ERP / POS / accounting", "දෙවෙනි payment gateway, subscriptions", "Store publish, merchant fees, hosting"] },
    custom: { label: "Custom App Development", lkr: 299000, from: true, weeks: 0, time: "Project එක අනුව", platform: "Android / iOS / Web (quote එකට)", screens: "Scope එක අනුව", revisions: 0,
      includes: ["ඔයාගේ requirements වලට custom app එකක්", "Android, iOS සහ / හෝ Web (scope එකට)", "Custom UI/UX, animations", "Firebase / Supabase / custom backend + APIs", "ලොකු admin portals, roles, reports", "Multi-store, POS, inventory, e-commerce, bookings", "Payments, APIs, AI, maps, automation", "Deployment, testing, documentation"],
      excludes: ["LKR 299,000 ට ඔක්කොම include නෑ: features scope එක අනුව quote වෙනවා", "Hosting, gateways, store fees වෙනම"] }
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
