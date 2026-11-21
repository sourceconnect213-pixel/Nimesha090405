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
  whatsapp: "94706305377",               // international format, digits only
  phoneDisplay: "070 630 5377",
  contactVersion: 2,                     // raise when the number above changes: replaces an older number saved from the admin panel
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
  textVersion: 2,   // raise when the labels / notes of the option lists below change (prices saved from the admin panel are kept)
  packagesFixedLkr: true,
  // home page banner under the top section (Website → Images in the admin panel). image: wide picture, imageM: phone picture (optional)
  banner: { show: false, image: "", imageM: "", link: "", alt: "" },
  packagesVersion: 8,   // 7: wording only (no internal codes / dashes), prices unchanged. 6: the approved terms (30-day support = 1 month, 50% advance) come with the list too
  packageBaseRate: 369,                  // only used to show "≈ USD" next to LKR prices
  packageNote: "මේ මිල අපි හදන වැඩේට විතරයි. Hosting, domain, database, email, payment ගාස්තු, Google, Apple developer accounts, paid plugins ඕන වුණොත් ඒවා ඔයාගේ accounts වලින් වෙනම ගෙවන්න වෙනවා.",
  packageTerms: ["50% advance", "දවස් 30ක් free bug fixes (අපි හදපු දේවලට)", "අන්තිම payment එකෙන් පස්සේ source code එක ඔයාට"],
  /* What the customer pays third parties (never Hexora's price). Shown under the package list and on the Mobile Apps page. */
  packageFees: [
    { t: "Google Play developer account", d: "Google එකට එක පාරක් USD 25ක්, ඔයාගේ නමින්. App එක store එකට දාලා දෙන එක අපේ වෙනම service එකක්." },
    { t: "Apple Developer Program", d: "Apple එකට අවුරුද්දකට USD 99ක්. iPhone app එකක් Custom package එකෙන් ගත්තොත් විතරයි ඕන වෙන්නේ." },
    { t: "Firebase (Firebase, Business, Premium apps)", d: "පොඩි app එකකට Firebase free plan එක ඇති: data 1 GB, දවසකට reads 50,000ක්, writes 20,000ක්. Photos upload කරන්න (Business, Premium) Blaze plan එක on කරන්න ඕන. පොඩි පාවිච්චියකට bill එක 0 වෙන්නත් පුළුවන්, ඒත් පොරොන්දු වෙන්න බෑ. Firebase project එක තියෙන්නේ ඔයාගේ Google account එකේ." },
    { t: "PayHere (Premium app)", d: "PayHere ගාස්තු: Lite plan එක මාසික ගාස්තුවක් නැතුව 3.30%, Plus මාසෙකට LKR 3,990යි 2.99%යි, Premium මාසෙකට LKR 9,990යි 2.69%යි (payhere.lk/fees බලන්න). PayHere account එක ඔයාගේ නමින්." },
    { t: "Domain, hosting, server", d: "Basic, Standard, Firebase apps වලට server, domain, hosting කිසිවක් ඕන නෑ. Business, Premium apps වල admin panel එක Firebase free hosting එකේ දාන්න පුළුවන්. .com domain එකක් ඕන නම් ඒක වෙනම." },
    { t: "SMS, OTP, වෙනත් services", d: "SMS OTP වගේ ගෙවන්න ඕන services වල ගාස්තු ඒ company එකට වෙනම." }
  ],
  packageFeesWeb: [
    { t: "Domain", d: ".com.lk එකක් අවුරුද්දකට LKR 1,000ක්, .lk එකක් LKR 5,000ක් (LK Domain Registry). .com එකක් USD 11ක් විතර (Cloudflare). Domain එක ඔයාගේ නමින්, අවුරුද්දෙන් අවුරුද්දට renew කරන්න ඕන." },
    { t: "Free hosting (Landing, Business websites)", d: "Cloudflare Pages වගේ free hosting එකක් ඇති, රුපියලක්වත් යන්නේ නෑ. Server, database ඕන නෑ." },
    { t: "WordPress hosting (Professional, E-commerce)", d: "WordPress වලට WordPress hosting plan එකක් ඕන, free hosting එකක දාන්න බෑ. උදාහරණයක් විදියට Namecheap EasyWP Starter පළවෙනි අවුරුද්දට USD 38.88යි, ඊට පස්සේ USD 68.88යි. Shop එකකට Turbo plan එක USD 61.88යි, ඊට පස්සේ USD 114.88යි. WordPress, WooCommerce නම් free." },
    { t: "Database, hosting (Web System, Custom Portal)", d: "Database එකට (Supabase) මාසෙකට USD 25ක් විතර ඉඳන්, පාවිච්චිය වැඩි වුණොත් ටිකක් වැඩි වෙන්න පුළුවන්. Hosting free, නැත්නම් මාසෙකට USD 20ක්. Emails මාසෙකට 3,000ක් දක්වා free." },
    { t: "PayHere (E-commerce)", d: "PayHere ගාස්තු: Lite plan එක මාසික ගාස්තුවක් නැතුව 3.30%, Plus මාසෙකට LKR 3,990යි 2.99%යි, Premium මාසෙකට LKR 9,990යි 2.69%යි. PayHere account එක approve කරන්නේ PayHere එකෙන්." },
    { t: "Email, SMS, paid plugins", d: "Business email, SMS, paid themes, plugins, paid photos ඕන වුණොත් ඒ company එකට වෙනම." }
  ],
  packageFeesBackend: [
    { t: "Firebase login, database", d: "Email login free. Firebase free plan එකේ data 1 GB, දවසකට reads 50,000ක්, writes 20,000ක් දක්වා. ඊට වැඩි වුණොත් Google එකට ගෙවන්න වෙනවා. Firebase project එක තියෙන්නේ ඔයාගේ Google account එකේ." },
    { t: "Photos, PDF uploads (Blaze plan)", d: "Photos, PDF upload කරන්න Firebase Blaze plan එක on කරන්නම ඕන, free සීමාව ඇතුළේ වුණත්. Bill එක යන්නේ files කීයක් තියෙනවද, කී පාරක් download වෙනවද කියන එක අනුව. Budget alert එකක් දැම්මට bill එක නතර වෙන්නේ නෑ, message එකක් විතරයි එන්නේ." },
    { t: "Server functions (Professional)", d: "Server එකේ වැඩ කරන functions වලටත් Blaze plan එක ඕන. Free සීමාවක් තියෙනවා, ඊට වැඩි වුණොත් ගාස්තු යනවා." },
    { t: "Admin panel hosting", d: "Admin panel එක Firebase free hosting එකේ දාන්න පුළුවන් (10 GB, දවසකට 360 MB විතර). ඔයාගේම domain එකක් ඕන නම් ඒක වෙනම. Server එකක් ඕන නෑ." },
    { t: "Supabase (Custom)", d: "Custom backend එකකට Supabase තෝරගත්තොත් මාසෙකට USD 25ක් විතර (රු. 9,200ක් වගේ) ඉඳන්. Firebase, Supabase, server අතරින් එකක් ඇති, තුනම ඕන නෑ." },
    { t: "SMS, OTP, email, වෙනත් services", d: "Quote එකේ ලියලා තියෙනවා නම් විතරයි. ඒ ගාස්තු ඒ company එකට ඔයාගේ account එකෙන්." }
  ],
  packageFeesAI: [
    { t: "AI පාවිච්චියට යන ගාස්තුව (හැම package එකකම)", d: "AI එක පාවිච්චි කරන ගාණට ඔයාගේ OpenAI account එකෙන් ගෙවන්න ඕන. උත්තරයකට USD 0.01ක් විතර, post draft එකකට USD 0.005ක් විතර, agent එක එක පාරක් වැඩ කරන්න USD 0.04ක් විතර. මේ estimate විතරයි, ඇත්ත bill එක පාවිච්චිය අනුව." },
    { t: "Documents හොයන එක (Knowledge Base)", d: "Documents හොයන calls 1,000කට USD 2.50ක් විතර. Documents තියාගන්න 1 GB දක්වා free, ඊට පස්සේ GB එකකට දවසකට USD 0.10යි." },
    { t: "Automation service (Workflow Automation, AI Agent)", d: "Make: free plan එකක් තියෙනවා, Core plan එක මාසෙකට USD 12ක් විතර. n8n: මාසෙකට €20ක් විතර (වැඩ 2,500ක්), Pro €50ක් විතර (වැඩ 10,000ක්). Plan එක ඔයාගේ නමින්." },
    { t: "Server, database (Chatbot, Business Assistant, Custom)", d: "Chatbot එක run වෙන පොඩි server එක free, නැත්නම් මාසෙකට USD 5ක් විතර. දැනට තියෙන Firebase, Supabase ගාස්තු ඔයාගේ." },
    { t: "Email, SMS, WhatsApp", d: "ඒ company එකට වෙනම ගෙවන්න ඕන. WhatsApp එකට business verification එකකුත් ඕන." },
    { t: "දිගටම බලාගන්න එක", d: "දවස් 30 free support එකෙන් පස්සේ AI එක බලාගන්න, අලුත් ප්‍රශ්න එකතු කරන්න ඕන නම් වෙනම මාසික plan එකක්." }
  ],
  packageFeesMaint: [
    { t: "Hosting, server, cloud", d: "Website hosting, server, Firebase, Supabase ගාස්තු ඔයාගේ account එකෙන්ම ගෙවනවා. Free hosting එකක් නම් hosting ගාස්තුවක් නෑ, ඒත් අපේ maintenance ගාස්තුව එහෙමමයි." },
    { t: "Backups තියාගන්න තැන", d: "Backups තියාගන්න storage, server snapshots, Firebase backups (Blaze), Supabase backup add-ons ඔයාගේ. Backups අපි බලාගත්තට, හැම වෙලේම restore කරන්න පුළුවන් කියලා පොරොන්දු වෙන්න බෑ." },
    { t: "Domain, plugins, licenses", d: "Domain renew කරන එක, paid themes, plugins, licenses, security tools ඔයාගේ නමින්." },
    { t: "Payment ගාස්තු (E-commerce)", d: "PayHere වගේ payment service එකේ plan ගාස්තුවයි, payment එකකට කපන %යි ඔයාගේ account එකෙන්." },
    { t: "Monitoring tools", d: "ගෙවන්න ඕන uptime monitors, alert tools, test කරන්න වෙනම server එකක් ඕන නම් ඒවා ඔයාගේ." },
    { t: "මුල් check එක", d: "Hack වෙලා තියෙන, කැඩිලා තියෙන, නැත්නම් කාලෙකින් update කරලා නැති site එකක් නම් මුලින් check කරලා හදන්න වෙනම මිලක්. ඒක මාසික ගාස්තුවට ඇතුළත් නෑ." }
  ],
  packageTermsMonthly: ["මාසෙ පටන් ගද්දී ඒ මාසෙට ගෙවන්න", "සතියේ දවස් වල office වෙලාවට support", "නවත්තන්න දවස් 30කට කලින් කියන්න", "ඉතුරු වෙන වෙනස්කම් ඊළඟ මාසෙට යන්නේ නෑ"],
  packageQuote: "මිල: package එකේ මිල, නැත්නම් අපි එකඟ වුණු quote එකේ මිල. වැඩ පටන් ගන්න 50% advance එකක්. Package එකේ ලියලා තියෙන දේවල් විතරයි මිලට ඇතුළත්. Hosting, domain, Firebase වගේ database ගාස්තු, email, SMS, payment ගාස්තු, Google, Apple developer accounts, store එකට දාන එක, paid plugins වගේ දේවල් quote එකේ ලියලා නැත්නම් ඒවා ඇතුළත් නෑ. දවස් 30 free support එක අපි හදලා දුන්න දේවල වැරදි හදන්න විතරයි, අලුත් features වලට නෙවෙයි. අන්තිම payment එකෙන් පස්සේ source code එක ඔයාට.",
  packages: {
    basic: { cat: "app", label: "Basic Android App", lkr: 14000, weeks: 1, time: "දවස් 5 – 7", platform: "Android", screens: "Screens 3ක් (සරල)", revisions: 1,
      blurb: "සරල Android app එකක්, screens 3ක් එක්ක. ඔයාගේ business එකේ විස්තර, photos, contact form එකක්. Internet නැතුවත් වැඩ කරනවා. Server එකක් නැති නිසා මාසෙකට ගෙවන්න දෙයක් නෑ.",
      infra: "Server, Firebase, domain කිසිවක් ඕන නෑ. මාසෙකට රුපියලක්වත් යන්නේ නෑ. Play Store එකට දාන්න ඕන නම් Google account එකට වෙනම.",
      includes: ["Screens 3ක් (උදා: Home, Services, Contact)", "ලස්සන, ලේසියෙන් පාවිච්චි කරන්න පුළුවන් design එකක්", "ඔයා දෙන text, photos, logo", "සරල form එකක්", "Phone එකට දාලා බලන්න test version (APK)", "පොඩි වෙනස්කම් එක පාරක්", "දවස් 30ක් free bug fixes"],
      excludes: ["Online database (Firebase)", "Login, OTP, payments, notifications", "Admin panel", "iPhone app, Play Store එකට දාන එක"] },
    standard: { cat: "app", label: "Standard Android App", lkr: 25000, weeks: 2.5, time: "සති 2 – 3", platform: "Android", screens: "Screens 5ක් දක්වා", revisions: 2,
      blurb: "Screens 5ක් තියෙන, ලස්සනට හදපු Android app එකක්. Data save වෙන්නේ phone එකේමයි. ඒ data හොයන්න, filter කරන්න පුළුවන්. Splash screen එකයි app icon එකයි එක්කම. Online server එකක් නැති නිසා මාසික ගාස්තුවක් නෑ.",
      infra: "Server, Firebase, domain කිසිවක් ඕන නෑ. මාසික ගාස්තුවක් නෑ. Data තියෙන්නේ phone එකේ විතරයි, online backup එකක් නෑ.",
      includes: ["Screens 5ක් දක්වා", "ලස්සන design එකක්, වැරදි දාන්න බැරි forms", "Data save වෙන්නේ phone එකේමයි (internet නැතුවත් වැඩ)", "Data හොයන්න, filter කරන්න පුළුවන්", "Splash screen එක, app icon එක", "Phone එකට දාලා බලන්න test version (APK)", "Revisions 2ක්", "දවස් 30ක් free bug fixes"],
      excludes: ["Login, online database, phones කීපයක් අතර data sync", "OTP, payments, admin panel, notifications", "iPhone app, Play Store එකට දාන එක"] },
    firebase: { cat: "app", label: "Firebase Android App", badge: "ගොඩක් අය තෝරන්නේ", lkr: 49000, weeks: 4, time: "සති 3 – 5", platform: "Android", screens: "Screens 8ක් දක්වා", revisions: 2,
      blurb: "Online වැඩ කරන app එකක්. Users ලට email, password එකෙන් register වෙලා login වෙන්න පුළුවන්, password එක අමතක වුණොත් reset කරන්නත් පුළුවන්. Tasks, notes, records වගේ data online save වෙනවා. Profile page එකක්, search එකක් එක්ක.",
      infra: "පොඩි app එකකට Firebase free plan එක ඇති වෙයි (දවසකට reads 50,000ක් වගේ). Server, domain ඕන නෑ. Users ගොඩක් වැඩි වුණොත් Google එකට ගෙවන්න වෙනවා.",
      includes: ["Screens 8ක් දක්වා, ලස්සනට හදපු design එකක්", "Email, password එකෙන් register, login, password reset", "Online database එකේ data save වෙන එක කොටසක්", "User ට තමන්ගේ profile එක බලන්න, වෙනස් කරන්න", "Search, filter", "Internet නැති වෙලාවටත් කලින් බලපු data පේනවා", "එක user කෙනෙක්ට අනිත් අයගේ data බලන්න බෑ", "Test version (APK), revisions 2ක්, දවස් 30ක් free bug fixes"],
      excludes: ["SMS OTP, Google එකෙන් login", "Photos, files upload කරන එක", "Admin panel, push notifications", "Payments, වෙනත් systems එක්ක සම්බන්ධ කිරීම්", "iPhone app, Play Store එකට දාන එක"] },
    business: { cat: "app", label: "Advanced / Business Android App", badge: "Business වලට හොඳයි", lkr: 99000, weeks: 7.5, time: "සති 6 – 9", platform: "Android + admin panel", screens: "Screens 12ක් දක්වා · admin කොටස් 3", revisions: 2,
      blurb: "App එකක් සහ ඔයාගේ business එක computer එකෙන් manage කරන්න admin panel එකක්. Admin panel එකේ dashboard එක, users, records බලන්න පුළුවන්. Data කොටස් 2ක්, admin සහ user කියලා වෙන වෙනම access, photo upload කරන්න එක තැනක්, ඔයාටම users ලට notification යවන්න පුළුවන්.",
      infra: "Photos upload කරන්න Firebase Blaze plan එක on කරන්න ඕන (පොඩි පාවිච්චියකට bill එක 0 වෙන්නත් පුළුවන්). Admin panel එක Firebase free hosting එකේ. Domain එකක් ඕනම නෑ. Server එකක් ඕන නෑ.",
      includes: ["Screens 12ක් දක්වා", "Email, password එකෙන් login, profile", "Online database එකේ data කොටස් 2ක්", "Computer එකෙන් බලන admin panel එක (dashboard, users, records)", "Admin, user කියලා වෙන වෙනම access", "Photos upload කරන්න එක තැනක්", "Search, filter", "ඔයාටම users ලට notifications යවන්න පුළුවන්", "Test version (APK), revisions 2ක්, දවස් 30ක් free bug fixes"],
      excludes: ["Online payments, SMS OTP", "සම්පූර්ණ online shop, POS, stock system", "Reports, AI, වෙනත් systems එක්ක සම්බන්ධ කිරීම්", "iPhone app, Play Store එකට දාන එක"] },
    premium: { cat: "app", label: "Premium Android App", lkr: 249000, weeks: 12, time: "සති 10 – 14", platform: "Android + admin panel", screens: "Screens 20ක් දක්වා · admin කොටස් 5", revisions: 3,
      blurb: "Orders, නැත්නම් bookings ගන්න සම්පූර්ණ business app එකක්. PayHere එකෙන් card payments ගන්න පුළුවන්. Screens 20ක්, admin panel එකේ කොටස් 5ක්, customers, staff, admin ලට වෙන වෙනම access, photo uploads, notifications, reports.",
      infra: "Firebase Blaze plan එක on කරන්න ඕන. PayHere ගාස්තු (3.30% ඉඳන්) ඔයාගේ PayHere account එකෙන්. Domain එකක් ඕනම නෑ.",
      includes: ["Screens 20ක් දක්වා, ලස්සනට හදපු design එකක්", "Login, profile, data කොටස් 3ක් දක්වා", "Admin panel එක (කොටස් 5ක් දක්වා)", "Customer, staff, admin කියලා වෙන වෙනම access", "Products, cart, orders, නැත්නම් bookings (එකක්)", "PayHere card payments", "වෙනත් system එකක් එක්ක සම්බන්ධ කිරීමක්", "Photos, files upload කරන්න", "Push notifications, reports", "Testing, revisions 3ක්, දවස් 30ක් free bug fixes"],
      excludes: ["iPhone app", "Branches කීපයක්, ERP, POS, accounting", "දෙවෙනි payment method එකක්, මාසික subscriptions", "Play Store එකට දාන එක, PayHere ගාස්තු, hosting"] },
    custom: { cat: "app", label: "Custom App Development", lkr: 299000, from: true, weeks: 0, time: "Project එක අනුව", platform: "Android, iPhone, web (quote එකට)", screens: "ඔයාගේ වැඩේ අනුව", revisions: 0,
      blurb: "ඔයාගේ business එකටම හදන app එකක්. Android, iPhone, web ඕන එකක්. Payments, admin systems, AI, ඕන දෙයක් කතා කරලා හදමු. මොනවද හදන්නේ, කවදට ඉවර වෙනවද, වෙනම ගෙවන්න වෙන ගාස්තු මොනවද කියලා වැඩ පටන් ගන්න කලින්ම ලියලා දෙනවා.",
      infra: "Hosting, server, payment, store ගාස්තු ඔයාගේ app එක අනුව වෙනස් වෙනවා. ඒ ඔක්කොම quote එකේ වෙන වෙනම ලියලා දෙනවා.",
      includes: ["ඔයාගේ business එකටම හදන app එකක්", "Android, iPhone, web, ඕන එකක් හරි ඔක්කොම හරි", "ඔයාට ඕන විදියට design, animations", "Firebase, Supabase, නැත්නම් අපිම හදන backend එකක්", "ලොකු admin panels, access වර්ග, reports", "Branches කීපයක්, POS, stock, online shop, bookings", "Payments, AI, maps, automation", "Store එකට දාන එක, testing, documents"],
      excludes: ["LKR 299,000 කියන්නේ පටන් ගන්න මිල. මුළු මිල ඔයාට ඕන දේවල් අනුව", "Hosting, payment, store ගාස්තු වෙනම"] },

    /* ---------- Website Development packages WEB-01 – 06 (approved 2026-11-10, fixed LKR development prices) ---------- */
    "web-basic": { cat: "web", label: "Basic Landing Website", lkr: 10000, weeks: 1, time: "දවස් 3 – 5", platform: "එක page එකේ site එකක්", screens: "කොටස් 4ක් (Home, Services, About, Contact)", revisions: 1,
      blurb: "එක page එකේ website එකක්. Home, Services, About, Contact කොටස් 4යි. ඔයාගේ services, products 4ක් දාන්න පුළුවන්. WhatsApp, call, Facebook buttons, Google Maps location එක. Phone එකේ ලස්සනට පේනවා, Google එකේ හොයාගන්නත් පුළුවන්.",
      includes: ["Phone එකේත් ලස්සනට පේන එක page site එකක් (කොටස් 4)", "Services, products 4ක් දක්වා", "WhatsApp, call, Facebook links, Google Maps location", "ඔයාගේ logo, text, photos", "Google එකට ගැළපෙන title, description, ඉක්මනට load වෙන photos", "Free hosting, HTTPS, ඔයාගේ domain එකට සම්බන්ධ කරලා", "Revision 1ක්, දවස් 30ක් free bug fixes", "අන්තිම payment එකෙන් පස්සේ files ඔක්කොම"],
      excludes: ["දෙවෙනි page එකක්, කොටස් 4ට වඩා", "ඔයාටම edit කරන admin panel එකක්, login, database", "Contact form, bookings, payments, online shop", "Logo design, text ලියන එක, paid templates, business email"],
      infra: "Server එකක් ඕන නෑ. Free hosting එකක දානවා. Domain එකක් ඕන නම් ඒක විතරක් වෙනම (.com.lk එකක් අවුරුද්දකට LKR 1,000 විතර)." },
    "web-standard": { cat: "web", label: "Standard Business Website", lkr: 29000, weeks: 2.5, time: "දවස් 10 – 15", platform: "Pages 5ක site එකක්", screens: "Pages 5 · products 8 · photos 12", revisions: 2,
      blurb: "Pages 5ක business website එකක්: Home, About, Services හරි Products (8ක් දක්වා), Gallery (photos 12ක් දක්වා), Contact. Customers ලට message එකක් එවන්න form එකකුත් තියෙනවා. ඔයාගේ brand colours වලට ගැළපෙන්න හදනවා.",
      includes: ["Phone එකේත් ලස්සනට පේන pages 5ක් (ඔයාගේ brand එකට ගැළපෙන්න)", "Services, products 8ක් දක්වා", "Gallery එකේ photos 12ක් දක්වා", "Customers ලට message එවන්න contact form එකක්", "WhatsApp, call, email, Facebook links, Google Maps", "හැම page එකකටම Google එකට ගැළපෙන විස්තර, ඉක්මනට load වෙන photos", "Free hosting, HTTPS, domain එක සම්බන්ධ කරලා", "Revisions 2ක්, දවස් 30ක් free bug fixes"],
      excludes: ["ඔයාටම edit කරන admin panel එකක්, login, database", "Cart, checkout, payments, bookings", "භාෂා කීපයක්, විශේෂ animations", "Logo, text ලියන එක, paid form plan එකක්, business email"],
      infra: "Free hosting එකක දානවා. Contact form එකට free service එකක් ඇති (messages ගොඩක් ආවොත් විතරක් ගෙවන්න වෙනවා). Domain එක වෙනම." },
    "web-professional": { cat: "web", label: "Professional Business Website", badge: "ගොඩක් අය තෝරන්නේ", lkr: 79000, weeks: 3.5, time: "සති 3 – 4", platform: "WordPress site එකක්", screens: "Pages 8 · services 15 · photos 20 · blog posts 5", revisions: 2,
      blurb: "WordPress වලින් හදන pages 8ක website එකක්. අපිට කතා නොකර ඔයාටම text, photos වෙනස් කරන්න පුළුවන්. Services 15ක්, gallery එකේ photos 20ක්, blog එකක් සහ posts 5ක්, contact form එක. Google Analytics එකත් set කරලා, පාවිච්චි කරන විදිය කියලා දෙනවා.",
      includes: ["Phone එකේත් ලස්සනට පේන pages 8ක් දක්වා (ඔයාගේ brand එකට)", "ඔයාටම text, photos වෙනස් කරන්න WordPress admin එක", "Services 15ක්, gallery එකේ photos 20ක් දක්වා", "Blog එකක්, ඔයා දෙන posts 5ක් එක්ක", "Contact form, WhatsApp, Facebook, Google Maps", "Google එකට ගැළපෙන්න SEO, Google Search Console, Analytics (ඔයාගේ accounts)", "ඉක්මනට load වෙන්න, SSL, basic security, hosting setup", "පාවිච්චි කරන විදිය කියලා දෙනවා (විනාඩි 45)", "Revisions 2ක්, දවස් 30ක් free bug fixes", "Site එකේ සම්පූර්ණ copy එක ඔයාට"],
      excludes: ["Online shop, payments, bookings", "Customers, staff ලට login portals, විශේෂ dashboards", "භාෂා කීපයක්, පරණ site එකකින් ගොඩක් content ගෙනියන එක", "Paid themes, plugins, SEO campaigns, දිනපතා content දාන එක"],
      infra: "WordPress වලට WordPress hosting plan එකක් ඕන, free hosting එකක දාන්න බෑ. උදාහරණයක් විදියට Namecheap EasyWP පළවෙනි අවුරුද්දට USD 38.88යි, ඊට පස්සේ USD 68.88යි. Domain, paid themes, plugins වෙනම." },
    "web-ecommerce": { cat: "web", label: "E-commerce Website", badge: "Online shop එකට", lkr: 169000, weeks: 6, time: "සති 5 – 7", platform: "WordPress online shop", screens: "Pages 8 · products 25 · categories 5", revisions: 2,
      blurb: "WordPress වලින් online shop එකක්. Products 25ක්, categories 5ක්, cart එක, checkout එක, customers ලට account එකක්. PayHere එකෙන් card payments, cash on delivery, bank transfer ගන්න පුළුවන්. Stock, delivery ගාස්තු (ප්‍රදේශ 3ක්), coupons එක්ක.",
      includes: ["Pages 8ක් දක්වා, shop එක, product pages, cart, checkout, customer account pages", "Products 25ක් (ඔයා දෙන photos, විස්තර, මිල), categories 5ක්", "Products list එක, search, filter", "Cart, checkout, customers ලට account එකක්", "PayHere card payments (test කරලා)", "Cash on delivery, bank transfer", "Stock, delivery ගාස්තු (ප්‍රදේශ 3ක් + pickup), coupons", "Orders, products manage කරන admin එක, order emails", "SEO, SSL, security, backups setup", "පැයක training එකක්, revisions 2ක්, දවස් 30ක් free bug fixes"],
      excludes: ["Sellers කීපයක්, branches කීපයක්, POS, ERP", "මාසික subscriptions, සංකීර්ණ product variations, courier connections, currencies කීපයක්", "විශේෂ checkout එකක්, විශේෂ plugins, mobile app එකක්", "Products 25ට වඩා දාන එක, paid plugins, maintenance"],
      infra: "Shop එකකට ගැළපෙන hosting plan එකක් ඕන (උදා: EasyWP Turbo USD 61.88, ඊට පස්සේ USD 114.88). Domain, business email, PayHere ගාස්තු (3.30% ඉඳන්), paid plugins වෙනම. PayHere account එක approve කරන්නේ PayHere එකෙන්." },
    "web-advanced": { cat: "web", label: "Advanced Business Web System", badge: "Business වලට හොඳයි", lkr: 279000, weeks: 10, time: "සති 8 – 12", platform: "Web system", screens: "Pages 15 · access වර්ග 3 · data කොටස් 3", revisions: 3,
      blurb: "ඔයාගේ business එකේ වැඩ කරන්න web system එකක්. Pages 15ක්, Admin, Staff, Viewer කියලා වෙන වෙනම access, data කොටස් 3ක්, class records, appointments, stock වගේ ඔයාගේ එක වැඩක්. Reports 2ක්, Excel එකට download කරන්න, files upload කරන්න එක තැනක්.",
      includes: ["Phone එකේත් වැඩ කරන pages 15ක් දක්වා", "Email, password එකෙන් login, password reset", "Access වර්ග 3: Admin, Staff, Viewer", "Data කොටස් 3ක්", "ඔයාගේ business එකේ එක වැඩක් (status එක්ක, උදා: Pending → Done)", "Dashboard, reports 2ක්, Excel එකට download කරන්න", "Photos, documents upload කරන්න එක තැනක්", "System එකෙන් emails යවන්න setup කරලා", "Data ආරක්ෂාව, backups, online දාන එක", "පැයක training එකක්, revisions 3ක්, දවස් 30ක් free bug fixes"],
      excludes: ["POS, ERP, accounting, payroll, branches කීපයක්", "Online payments, SMS OTP, AI, mobile apps", "සංකීර්ණ scheduling, ගොඩක් systems එක්ක සම්බන්ධ කිරීම්, පරණ data ගොඩක් ගෙනියන එක", "24 පැයම support, maintenance"],
      infra: "Database එකට (Supabase) මාසෙකට USD 25ක් විතර (රු. 9,200ක් වගේ) ඔයාගේ account එකෙන්. Website එකේ hosting එක free. Emails මාසෙකට 3,000ක් දක්වා free. Domain වෙනම." },
    "web-custom": { cat: "web", label: "Custom Web Portal / Enterprise Web App", lkr: 399000, from: true, weeks: 0, time: "Project එක අනුව", platform: "Web portal (quote එකට)", screens: "ඔයාගේ වැඩේ අනුව", revisions: 0,
      blurb: "ලොකු business එකකට හදන web portal එකක්: students, customers, employees ලට portals, branches කීපයක් තියෙන systems, ඔයාගේම වැඩ ක්‍රම. මොනවද හදන්නේ කියලා අපි දෙන්නා එකඟ වෙන proposal එකේ ලියලා දෙනවා.",
      includes: ["ඔයාටම design කරපු web portal එකක් (උදා: pages 20ක් විතර)", "Access වර්ග, data කොටස් (උදා: 4ක් බැගින්)", "ඔයාගේ business එකේ වැඩ 1 – 2ක්", "Admin dashboard, reports, search, Excel export", "Files upload, වෙනත් systems එක්ක සම්බන්ධ කිරීම, emails", "Data ආරක්ෂාව, security test කරන එක, online දාන එක", "Training, revisions (quote එකේ ලියලා)", "දවස් 30ක් free bug fixes, source code එක, database එක ඔයාට"],
      excludes: ["LKR 399,000 කියන්නේ පටන් ගන්න මිල. මුළු මිල proposal එකෙන්", "Companies කීපයකට එකම system එක, live chat, ලොකු AI, mobile apps වෙනම", "Hosting, cloud, email, SMS, maintenance වෙනම"],
      infra: "ඔයාගේ system එක අනුව වෙනස් වෙනවා (database එකට මාසෙකට USD 25ක් විතර, hosting එකට USD 20ක් විතර වගේ). එක පාරක් ගෙවන ඒවා, මාසෙන් මාසෙට ගෙවන ඒවා, අවුරුද්දකට ගෙවන ඒවා quote එකේ වෙන වෙනම ලියලා දෙනවා." },

    /* ---------- Backend & Admin Panel packages BACKEND-01 – 05 (approved 2026-11-10, fixed LKR development prices) ----------
       Every package wires the backend / admin into ONE existing app or site of the customer (a new app / site is a separate package). */
    "backend-basic": { cat: "backend", label: "Basic Firebase Backend Setup", lkr: 29000, weeks: 1.5, time: "සති 1 – 2", platform: "Firebase · දැනට තියෙන app / site 1ක්", screens: "Login + data කොටසක් · admin panel නෑ", revisions: 1,
      blurb: "ඔයාට දැනටමත් තියෙන app එකට හරි site එකට හරි Firebase backend එකක්. Email, password එකෙන් login, data save කරන එක කොටසක්, ඒ data ආරක්ෂිතව තියාගන්න rules. Admin panel එකක් මේකේ නෑ.",
      includes: ["Firebase project එක setup කරලා ඔයාගේ app එකට සම්බන්ධ කරනවා", "Email, password එකෙන් register, login, password reset", "Data save වෙන එක කොටසක් (වැරදි data වැටෙන්නේ නැති විදියට)", "Users ලාගේ profile විස්තර", "එක user කෙනෙක්ට අනිත් අයගේ data බලන්න බෑ", "ඔයාගේ දැනට තියෙන app එකට සම්බන්ධ කරලා", "Testing, භාර දෙන documents", "Revision 1ක්, දවස් 30ක් free bug fixes", "අන්තිම payment එකෙන් පස්සේ source code එක ඔයාට"],
      excludes: ["අලුත් screens, admin panel, dashboards, access වර්ග", "SMS OTP, Google, Facebook login", "Photos, PDF upload", "Payments, data ගෙනියන එක, analytics, chat, AI", "Hosting, domain, වෙනත් ගාස්තු"],
      infra: "Firebase free plan එකේ සීමාව ඇතුළේ නම් රුපියලක්වත් යන්නේ නෑ (ඒත් පොරොන්දු වෙන්න බෑ). Server, domain ඕන නෑ. ඔයාගේ app එකේ hosting එක දැන් තියෙන විදියටම." },
    "backend-admin": { cat: "backend", label: "Basic Web Admin Panel", lkr: 49000, weeks: 2.5, time: "සති 2 – 3", platform: "දැනට තියෙන Firebase backend එකකට", screens: "Admin pages 4 · access වර්ග 2", revisions: 1,
      blurb: "ඔයාගේ Firebase backend එකට admin panel එකක්. Dashboard එකේ ගණන්, records list එක (search, filter එක්ක), අලුතෙන් එකතු කරන්න, වෙනස් කරන්න form එකක්, users ලාගේ විස්තර බලන්න. Admin සහ user කියලා access වර්ග 2ක්.",
      includes: ["Dashboard එක (මුළු records ගාණ වගේ)", "Records list එක: search, filter, delete", "අලුතෙන් එකතු කරන්න, වෙනස් කරන්න form එකක්", "Users ලාගේ විස්තර බලන්න (බලන්න විතරයි)", "දැනට තියෙන login එකෙන්ම admin ට ඇතුළු වෙන්න", "Admin, user කියලා access වර්ග 2ක්", "Computer, tablet, phone ඕන එකක වැඩ කරනවා", "Online දාලා දෙනවා, විනාඩි 30ක training එකක්", "Revision 1ක්, දවස් 30ක් free bug fixes, source code එක"],
      excludes: ["අලුත් Firebase backend එකක් (Basic Backend, Advanced packages බලන්න)", "Admin panel එකෙන් user accounts හදන එක, block කරන එක", "Data කොටස් 2ක් හෝ වැඩි, uploads, reports", "Payments, branches කීපයක්, AI", "ගෙවන්න ඕන cloud services, maintenance"],
      infra: "මේකට ඔයාට දැනටමත් වැඩ කරන Firebase backend එකක් තියෙන්න ඕන. Admin panel එක Firebase free hosting එකේ දාන්න පුළුවන්. Domain එකක් ඕනම නෑ. මාසෙකට රුපියලක්වත් නොයන්නත් පුළුවන්." },
    "backend-advanced": { cat: "backend", label: "Advanced Firebase Backend & Admin System", badge: "ගොඩක් අය තෝරන්නේ", lkr: 129000, weeks: 5.5, time: "සති 4 – 7", platform: "Firebase backend + admin panel", screens: "Data කොටස් 3 · admin pages 8 · access වර්ග 3 · uploads 1", revisions: 2,
      blurb: "Firebase backend එකයි admin panel එකයි දෙකම. Data කොටස් 3ක්, admin pages 8ක් දක්වා, Admin, Editor, Viewer කියලා access වර්ග 3ක්, photos, PDF upload කරන්න එක තැනක්, report එකක්. ඔයාගේ දැනට තියෙන app එකට හරි site එකට හරි සම්බන්ධ කරලා දෙනවා.",
      includes: ["Firebase setup, email, password login", "Data කොටස් 3ක් (lists, forms එක්ක)", "Admin pages 8ක් දක්වා (dashboard, data, users, files, report, settings)", "Admin, Editor, Viewer කියලා access වර්ග 3ක්", "Photos, PDF upload කරන්න එක තැනක් (size limit එක්ක)", "Dashboard ගණන්, report එකක්", "Search, filter, users list (බලන්න විතරයි)", "Data, files ආරක්ෂිතව තියාගන්න rules", "ඔයාගේ app එකට සම්බන්ධ කරලා, test කරලා, online දානවා", "පැයක training එකක්, revisions 2ක්, දවස් 30ක් free bug fixes, source code එක"],
      excludes: ["Customers ලට අලුත් app එකක්, site එකක්", "Users ගොඩක් එකපාර manage කරන එක, branches කීපයක්", "Payments, automation, AI, SMS OTP, වෙනත් systems", "සීමාවක් නැති uploads, පරණ data ගොඩක් ගෙනියන එක", "Server, maintenance, වෙනත් ගාස්තු"],
      infra: "Photos, PDF upload කරන්න Firebase Blaze plan එක on කරන්නම ඕන (පොඩි පාවිච්චියකට bill එක 0 වෙන්නත් පුළුවන්). අනිත් ඒවා Firebase free සීමාව ඇතුළේ. Server, domain ඕන නෑ." },
    "backend-professional": { cat: "backend", label: "Professional Backend & Admin System", badge: "Business වලට හොඳයි", lkr: 219000, weeks: 8.5, time: "සති 7 – 10", platform: "Firebase + server functions + admin panel", screens: "Data කොටස් 4 · admin pages 10 · access වර්ග 4 · uploads 2 · reports 3", revisions: 3,
      blurb: "ලොකු business එකකට backend එකයි admin panel එකයි. Data කොටස් 4ක්, admin pages 10ක්, Super Admin, Manager, Editor, Viewer කියලා access වර්ග 4ක්, upload කරන තැන් 2ක්, reports 3ක්, කවුද මොකද කළේ කියලා record එකක්, server එකේ වැඩ කරන functions, වෙන system එකක් එක්ක සම්බන්ධ කිරීමක්.",
      includes: ["Firebase backend, email, password login", "Data කොටස් 4ක්", "Admin pages 10ක් දක්වා", "Super Admin, Manager, Editor, Viewer කියලා access වර්ග 4ක්", "Photos, PDF upload කරන තැන් 2ක්", "Reports 3ක්, filter කරපු lists", "කවුද, මොකද, කවදද කළේ කියලා record එකක්", "Server එකේ auto වැඩ කරන functions (quote එකේ ලියලා)", "වෙනත් system එකක් එක්ක සම්බන්ධ කිරීමක්", "ඔයාගේ app එකට සම්බන්ධ කරලා, test කරලා, online දානවා", "පැයක training එකක්, revisions 3ක්, දවස් 30ක් free bug fixes, source code එක"],
      excludes: ["Customers ලට ලොකු app එකක්, site එකක්", "Companies කීපයකට එකම system එක", "සංකීර්ණ payments, POS, payroll, accounting, AI", "සීමාවක් නැති functions, integrations", "Server බලාගන්න එක, ගෙවන්න ඕන services"],
      infra: "Uploads වලටයි server functions වලටයි Firebase Blaze plan එක ඕන (පාවිච්චිය අනුව ගෙවන්නේ, free සීමාවකුත් තියෙනවා). Firebase, hosting, domain, වෙනත් services වල ගාස්තු ඔයාගේ account එකෙන්." },
    "backend-custom": { cat: "backend", label: "Custom Backend & Admin Development", lkr: 349000, from: true, weeks: 0, time: "Project එක අනුව", platform: "Firebase, Supabase, නැත්නම් custom (quote එකට)", screens: "ඔයාගේ වැඩේ අනුව", revisions: 0,
      blurb: "ඔයාගේ business එකටම හදන backend එකක් සහ admin system එකක්. ඔයාගේ data වලට ගැළපෙන database එක, dashboards, access වර්ග, ඔයාගේ වැඩ ක්‍රම, වෙනත් systems එක්ක සම්බන්ධ කිරීම්. මොනවද හදන්නේ, කවදට ඉවර වෙනවද, මිල කීයද කියලා project එක බලලා quote එකක් දෙනවා.",
      includes: ["Firebase, Supabase, නැත්නම් අපිම හදන backend එකක්", "ඔයාගේ data වලට ගැළපෙන database එකක්, APIs", "ලොකු admin dashboards, access වර්ග, වැඩ ක්‍රම", "Records, files, reports, exports", "Payments, notifications, automation, AI (quote එකේ තිබ්බොත්)", "Security, testing, online දාන එක, documents", "ඔයාගේ app එකට සම්බන්ධ කරන එක (එකඟ වුණොත්)", "දවස් 30ක් free bug fixes, source code එක, database එක"],
      excludes: ["LKR 349,000 කියන්නේ පටන් ගන්න මිල. මුළු මිල quote එකෙන්", "Customers ලට අලුත් app එකක්, site එකක් (වෙනම)", "Revisions, කාලය quote එකේ ලියලා (සීමාවක් නැතුව නෙවෙයි)", "Server, වෙනත් ගාස්තු වෙනම"],
      infra: "ඔයාගේ system එක අනුව වෙනස් වෙනවා (Firebase, Supabase ගාස්තු, domain වගේ). එක පාරක් ගෙවන ඒවයි මාසෙන් මාසෙට ගෙවන ඒවයි quote එකේ වෙන වෙනම ලියලා දෙනවා." },

    /* ---------- AI Features & Automation AI-01 – 06 (approved 2026-11-11, fixed LKR one-time development / integration fees) ---------- */
    "ai-chatbot": { cat: "ai", label: "Basic AI Website Chatbot", lkr: 40000, weeks: 1.5, time: "සති 1 – 2", platform: "ඔයාගේ දැනට තියෙන website එකට", screens: "ප්‍රශ්න උත්තර 30 · භාෂා 1", revisions: 1,
      blurb: "ඔයාගේ website එකට chatbot එකක්. ඔයා දෙන ප්‍රශ්න උත්තර 30 ඇතුළෙන් customers ලට උත්තර දෙනවා, ඔයාගේ brand colours වලින්. උත්තරය දන්නේ නැත්නම් බොරු නොකියා ඔයාගේ WhatsApp, phone number එක දෙනවා.",
      includes: ["Phone එකේත් computer එකේත් වැඩ කරන chat box එකක්, ඔයාගේ colours, logo එක්ක", "ඔයා දෙන ප්‍රශ්න උත්තර 30ක් දක්වා", "භාෂාවක්: සිංහල හරි English හරි", "AI key එක ආරක්ෂිතව server එකේ (කාටවත් හොයාගන්න බෑ)", "දන්නේ නැති ප්‍රශ්නයකට ඔයාගේ contact එක දෙනවා", "කවුරුහරි spam කරලා bill එක වැඩි කරන්න බැරි වෙන්න සීමා", "Site එකට දාලා, test කරලා, setup documents", "Revision 1ක්, දවස් 30ක් free bug fixes, code එක ඔයාට"],
      excludes: ["මිනිහෙක්ට chat එක මාරු කරන එක, CRM, chats save කරන එක", "PDF, documents කියවන එක, website එක කියවන එක", "WhatsApp, Facebook, Instagram, voice AI, payments", "සීමාවක් නැති ප්‍රශ්න, භාෂා, revisions"],
      infra: "AI එක පාවිච්චි කරන ගාණට ගෙවන්න ඕන (ඔයාගේ OpenAI account එකෙන්). Chatbot එක run වෙන server එක free, නැත්නම් මාසෙකට USD 5ක් විතර. ඔයාගේ site එකේ hosting එක දැන් තියෙන විදියටම." },
    "ai-knowledge": { cat: "ai", label: "AI Knowledge Base Assistant", badge: "ගොඩක් අය තෝරන්නේ", lkr: 100000, weeks: 4, time: "සති 3 – 5", platform: "ඔයාගේ දැනට තියෙන website එකට", screens: "Files 12 · පිටු 150 · 30 MB", revisions: 2,
      blurb: "ඔයාගේ price lists, brochures, policies වගේ documents (PDF, Word) කියවලා customers ලාගේ ප්‍රශ්න වලට උත්තර දෙන assistant එකක්. උත්තරය ගත්තේ මොන document එකෙන්ද කියලත් පෙන්නනවා. Documents වල නැති දෙයක් නම් දන්නේ නෑ කියලා කියනවා.",
      includes: ["ඔයාගේ site එකේ chat box එකක් (phone එකේත් වැඩ)", "Files 12ක් දක්වා, පිටු 150ක් දක්වා, 30 MB දක්වා (තුනම)", "Documents හදලා, upload කරලා, හරියට හොයාගන්නවද කියලා test කරනවා", "ඔයාගේ documents වලින්ම උත්තර හොයනවා", "උත්තරය ගත්තේ මොන file එකෙන්ද කියලා පෙන්නනවා", "භාෂාවක්. දන්නේ නැත්නම් දන්නේ නෑ කියලා කියනවා", "කලින් ඇහුව දේ මතක තියාගෙන කතා කරනවා, AI key ආරක්ෂිතව", "Documents වල වැරදි හදන්න එක පාරක්, revisions 2ක්", "ප්‍රශ්න 20ක් විතර දාලා test කරනවා, දවස් 30ක් free bug fixes"],
      excludes: ["Scan කරපු photos වගේ PDFs, අතින් ලියපු documents, සංකීර්ණ charts", "Google Drive එකෙන් auto update වෙන එක, සීමාවක් නැති uploads", "ඔයාටම documents upload කරන admin එකක්, WhatsApp, භාෂා කීපයක්, voice", "100%ක් හරි උත්තර දෙනවා කියලා පොරොන්දුවක් නෑ"],
      infra: "AI පාවිච්චියට, documents හොයන එකට (calls 1,000කට USD 2.50ක් විතර), documents තියාගන්න (1 GB දක්වා free) ගාස්තු ඔයාගේ OpenAI account එකෙන්." },
    "ai-automation": { cat: "ai", label: "AI Content & Workflow Automation", lkr: 160000, weeks: 5, time: "සති 4 – 6", platform: "Make, n8n වගේ service එකක", screens: "වැඩ 1 · විදි 2 · templates 3", revisions: 2,
      blurb: "ඔයා දිනපතා කරන එක වැඩක් auto කරනවා. උදාහරණයක් විදියට, Google Sheet එකට අලුත් පේළියක් එකතු කළාම AI එක post එකක් draft කරනවා, ඔයා ඒක බලලා OK කළාම විතරක් යවනවා. ඒ එක වැඩේ විදි 2ක් (scenarios 2) හදනවා, වෙනම වැඩ 2ක් නෙවෙයි.",
      includes: ["AI එකෙන් text ලියවන වැඩක් (ඔයාගේ brand එකේ විදියට)", "ඒ වැඩේ විදි 2ක් දක්වා", "Templates 3ක් දක්වා (captions, product විස්තර, promo text)", "එක තැනකින් data ගන්නවා (උදා: Google Sheets), එක තැනකට දානවා (උදා: Google Docs)", "Auto පටන් ගන්න විදියක්: වෙලාවට, නැත්නම් යමක් වුණාම", "යවන්න කලින් ඔයාගේ OK එක ඉල්ලනවා", "එකම දේ දෙපාරක් යන්නේ නෑ, වැරදුණොත් ආයෙත් try කරනවා, record එකක් තියාගන්නවා", "Login ආරක්ෂිතව, bill එක වැඩි වුණොත් alert එකක්", "Items 30ක් විතර test කරනවා, revisions 2ක්, පැයක training එකක්", "Workflow එකේ copy එක ඔයාට, දවස් 30ක් free bug fixes"],
      excludes: ["Facebook, YouTube, WhatsApp වලට auto post කරන එක, එකපාර ගොඩක් අයට messages", "AI photos, videos, CRM, voice", "Admin dashboard එකක්, 24 පැයම බලාගන්න එක, මාසෙන් මාසෙට content හදන එක", "තවත් accounts, වැඩ එකතු කරන්න වෙනම මිලක්"],
      infra: "Make වගේ automation service එකක plan එක (free plan එකක් තියෙනවා, නැත්නම් මාසෙකට USD 12ක් විතර), AI ගාස්තු ඔයාගේ accounts වලින්. Server, domain ඕන නෑ." },
    "ai-assistant": { cat: "ai", label: "Advanced AI Business Assistant", badge: "Business වලට හොඳයි", lkr: 300000, weeks: 8.5, time: "සති 7 – 10", platform: "දැනට තියෙන site / dashboard + database", screens: "Data වර්ග 2 · බලන tools 2 · වෙනස් කරන tool 1", revisions: 3,
      blurb: "ඔයාගේ database එකේ data ගැන සාමාන්‍ය භාෂාවෙන් අහන්න පුළුවන් AI assistant එකක්. උදාහරණයක් විදියට \"මේ මාසේ ඉතුරු වෙලා තියෙන orders පෙන්නන්න\". ඔයා OK කළාට පස්සේ data වෙනස් කරන එක වැඩකුත් කරන්න පුළුවන්.",
      includes: ["ඔයාගේ site එකට හරි dashboard එකට හරි AI assistant එකක්", "ඔයාගේ Firebase, නැත්නම් Supabase database එකට සම්බන්ධ කරලා", "Google Sheets එකක් කියවන්නත් පුළුවන් (ඕන නම්)", "ඔයා අවසර දෙන data වර්ග 2ක් දක්වා බලන්න පුළුවන්", "Data වෙනස් කරන එක වැඩක්, අවසර තියෙන කෙනෙක් OK කළාට පස්සේ විතරයි", "Admin, Staff කියලා වෙන වෙනම access, ඕන data විතරක් බලනවා", "ඔයාට ඕන විදියේ summary එකක්, report එකක්", "AI එක රවට්ටලා වැඩි access ගන්න බැරි වෙන්න ආරක්ෂාව", "කවුද OK කළේ කියලා record එකක්, සීමා, monitoring", "Testing, revisions 3ක්, documents, දවස් 30ක් free bug fixes"],
      excludes: ["අලුත් CRM, POS, stock system එකක්", "Documents කියවන එක (default නෑ)", "Data වෙනස් කරන වැඩ කීපයක්, refunds, payroll, legal තීරණ", "WhatsApp, voice, companies කීපයකට එකම system එක"],
      infra: "AI ගාස්තු, දැනට තියෙන Firebase හරි Supabase හරි ගාස්තු, පොඩි server එකක ගාස්තු ඔයාගේ accounts වලින්. දැනටමත් ගෙවන දේවල් වලට ආයෙත් ගණන් ගන්නේ නෑ." },
    "ai-agent": { cat: "ai", label: "AI Agent & Multi-Step Automation System", lkr: 550000, weeks: 12, time: "සති 10 – 14", platform: "n8n වගේ service එකක · agent 1", screens: "වැඩ 2 · systems 2 · tools 5 · triggers 2", revisions: 3,
      blurb: "පියවර කීපයක් තියෙන වැඩ තනියම කරන AI agent එකක්. උදාහරණයක් විදියට: අලුත් order එකක් ආවම ඒක check කරලා, customer ට email එකක් draft කරලා, staff කෙනෙක් OK කළාම යවලා, order status එක update කරනවා. වැඩ 2ක්, වෙනත් systems 2ක් එක්ක. Data වෙනස් කරන හැම වෙලාවකම මිනිහෙක්ගේ OK එක ඕන.",
      includes: ["එකඟ වුණු වැඩ විතරක් කරන AI agent එකක්", "පියවර කීපයක් තියෙන වැඩ 2ක් දක්වා (එක business වැඩකට)", "වෙනත් systems 2ක් එක්ක සම්බන්ධ කරලා (උදා: database එක, email)", "Tools 5ක්: data බලන ඒවා 3ක්, වෙනස් කරන ඒවා 2ක්", "Data වෙනස් කරන හැම වෙලාවකම මිනිහෙක් බලලා OK කරන්න ඕන", "Auto පටන් ගන්න විදි 2ක් දක්වා (වෙලාවට, නැත්නම් යමක් වුණාම)", "මඟදී නතර වුණොත් ආයෙත් try කරනවා, එකම දේ දෙපාරක් කරන්නේ නෑ, වැරදුණොත් alert එකක්", "මොකද වුණේ කියලා records, status එක බලන්න තැනක්", "Scenarios 50ක් විතර test කරනවා", "Documents, training, revisions 3ක්, source එක, දවස් 30ක් free bug fixes"],
      excludes: ["සීමාවක් නැති agents, internet එකේ ඕන දේ හොයන එක, තනියම සල්ලි ගනුදෙනු", "ඕන විදියට data වෙනස් කරන එක, එකපාර ගොඩක් අයට messages, auto refunds", "Documents කියවන එක (Knowledge Base එකත් එක්ක එකට මිලක් කියනවා)", "24 පැයම බලාගන්න එක, SLA, ලොකු company security"],
      infra: "n8n වගේ automation service එකක plan එක (මාසෙකට €20ක් විතර ඉඳන්), AI ගාස්තු, database, email, SMS ඔයාගේ accounts වලින්. මේ ගාස්තු අපේ මිලට ඇතුළත් නෑ." },
    "ai-custom": { cat: "ai", label: "Custom AI Solutions / Enterprise AI Systems", lkr: 800000, from: true, weeks: 0, time: "Project එක අනුව", platform: "ඔයාගේ business එකට (quote එකට)", screens: "ඔයාගේ වැඩේ අනුව", revisions: 0,
      blurb: "ඔයාගේ business එකටම හදන AI system එකක්: staff ලට company documents හොයාගන්න AI එකක්, customer support AI එකක්, CRM, ERP systems එක්ක වැඩ කරන automation. Project එක බලලා quote එකක් දෙනවා.",
      includes: ["ඔයාගේ business එකට ගැළපෙන AI system එකක් design කරනවා", "Agents, auto වැඩ, වෙනත් systems එක්ක සම්බන්ධ කිරීම් (quote එකේ ලියලා)", "Staff ලට පාවිච්චි කරන්න තැනක්, dashboard එකක් (ඕන නම්)", "Documents කියවන එක (ඕන නම්)", "Login, access වර්ග, data වෙන් කරලා තියාගන්න එක, මිනිහෙක්ගේ OK එක, records", "Logs, alerts, bill එකට සීමා", "Security test, AI එක test කරන එක, documents, training", "දවස් 30ක් free bug fixes, source එක"],
      excludes: ["LKR 800,000 කියන්නේ පටන් ගන්න මිල. මුළු මිල quote එකෙන්", "Certificates, security audits, 24 පැයම support", "ලොකු call centre, සීමාවක් නැති agents, AI model train කරන එක", "GPU servers, mobile apps, ERP එකක් අලුතෙන් හදන එක"],
      infra: "AI, hosting, database, email, SMS, domain වගේ ගාස්තු ඔයාගේ accounts වලින්. ඔයාගේ වැඩේට ඇත්තටම ඕන services විතරයි පාවිච්චි කරන්නේ. ඒ ඔක්කොම quote එකේ වෙන වෙනම ලියලා දෙනවා." },

    /* ---------- Maintenance & Hosting MAINT-01 – 06 (approved 2026-11-11): MONTHLY Hexora service fees, 100% prepaid each month.
       Hosting, VPS, databases, backups, domains, plugins, gateways, monitoring tools are the customer's. ---------- */
    "maint-basic": { cat: "maint", monthly: true, label: "Basic Website Care", lkr: 5500, weeks: 0, time: "මාසිකව", platform: "පොඩි website එකක් · pages 5", screens: "වෙනස්කම් 2 / මාසෙට · copy 1", revisions: 0,
      blurb: "පොඩි website එකක් (pages 5 දක්වා) හොඳට වැඩ කරනවද කියලා අපි බලාගන්නවා. Site එක down වුණොත් අපිට දැනගන්න පුළුවන්. මාසෙකට පොඩි වෙනස්කම් 2ක් කරනවා, SSL, domain, links හරියට වැඩද බලනවා, site එකේ copy එකක් තියාගන්නවා, මාසෙ අන්තිමට report එකක් එවනවා.",
      includes: ["දැනට තියෙන pages 5ක් දක්වා site එකක්", "Site එක down වුණොත් auto දැනගන්නවා", "මාසෙකට සැරයක් site එක හොඳට check කරනවා", "SSL, domain expire වෙන දවස check කරනවා", "මාසෙකට පොඩි වෙනස්කම් 2ක් (text, open hours, phone number, photo එකක් මාරු කරන එක වගේ)", "කැඩුණු links, phone එකේ පේන විදිය check කරනවා", "මාසෙකට site එකේ copy එකක් තියාගන්නවා (database, email නෙවෙයි)", "වෙනස්කම් online දාලා දෙනවා", "මාසෙ අන්තිමට report එකක්", "වැඩ කරන දවස් 2ක් ඇතුළත reply කරනවා"],
      excludes: ["WordPress, online shop, database, server", "අලුත් pages, features, SEO campaigns, text ලියන එක", "Hack වුණ site එකක් හදන එක, 24 පැයම support, site එක කවදාවත් down නොවෙනවා කියන පොරොන්දුව", "මාසෙකට වෙනස්කම් 2ට වඩා. ඉතුරු වුණොත් ඊළඟ මාසෙට යන්නේ නෑ"],
      infra: "Hosting (free hosting නම් රුපියලක්වත් නෑ, ඒත් අපේ ගාස්තුව එහෙමමයි), domain renew කරන එක, forms, email ඔයාගේ accounts වලින්." },
    "maint-wordpress": { cat: "maint", monthly: true, label: "WordPress Website Care", lkr: 12500, weeks: 0, time: "මාසිකව", platform: "WordPress site එකක් (shop නැති) · pages 8 · plugins 12", screens: "Update වාර 2 · වෙනස්කම් 2 / මාසෙට", revisions: 0,
      blurb: "WordPress site එකකට (pages 8, plugins 12 දක්වා). WordPress, theme, plugins update කරලා site එක කැඩුණේ නෑ කියලා check කරනවා. Backups හරියට වැටෙනවද බලනවා, security බලනවා, මාසෙකට වෙනස්කම් 2ක් කරනවා, මාසික report එකක් එවනවා.",
      includes: ["WordPress, theme, plugins 12ක් දක්වා මාසෙකට දෙපාරක් update කරලා, site එක කැඩුණේ නෑ කියලා check කරනවා", "දවසින් දවස database backup, සතියෙන් සතිය සම්පූර්ණ backup", "Backups දවස් 7ක්, සති 4ක් තියාගන්නවා (ඔයාගේ storage එක අනුව)", "මාසෙකට සැරයක් backups හරියට වැටෙනවද බලනවා", "මාසෙකට සැරයක් security check, virus scan", "Site එක down වුණොත් දැනගන්නවා, SSL, domain check කරනවා", "Site එකේ speed එක, කැඩුණු links check කරනවා", "මාසෙකට පොඩි වෙනස්කම් 2ක්", "Update එකකට පස්සේ pages, login, forms, phone එකේ පේන විදිය check කරනවා", "මාසික report එකක්, වැඩ කරන දවස් 2ක් ඇතුළත reply කරනවා"],
      excludes: ["Online shop, payments (E-commerce Store Care බලන්න)", "අලුත් pages, plugins, features, අලුත් design, site එක වෙන තැනකට ගෙනියන එක", "Hack වුණ site එකක් හදන එක, data ආපහු ගන්නවා කියන පොරොන්දුව", "Paid themes, plugins, backup storage, hosting, domain, 24 පැයම support"],
      infra: "WordPress hosting, domain, paid themes, plugins, backup storage ඔයාගේ. Hack වෙලා තියෙන, නැත්නම් කාලෙකින් update කරලා නැති site එකක් නම් මුලින් ඒක හදන්න වෙනම මිලක්." },
    "maint-ecommerce": { cat: "maint", monthly: true, label: "E-commerce Store Care", badge: "Online shop එකට", lkr: 25000, weeks: 0, time: "මාසිකව", platform: "WooCommerce shop එකක් · products 100 · plugins 20", screens: "Update වාර 2 · products 5 / මාසෙට", revisions: 0,
      blurb: "WooCommerce online shop එකකට (products 100, plugins 20 දක්වා). Updates කරලා shop එක කැඩුණේ නෑ කියලා check කරනවා, backups බලනවා, checkout එකයි payments වැඩද කියලා test කරනවා, මාසෙකට products 5ක් update කරනවා, මාසික report එකක් එවනවා.",
      includes: ["WordPress, WooCommerce, theme, plugins 20ක් දක්වා මාසෙකට දෙපාරක් update කරලා check කරනවා", "Update කරන්න කලින් backup එකක්, ප්‍රශ්නයක් වුණොත් ආපහු යන්න plan එකක්", "දවසින් දවස database backup, සතියෙන් සතිය සම්පූර්ණ backup, මාසෙකට සැරයක් check කරනවා", "Cart, checkout, payments test කරනවා (වෙනස්කම් වලට පස්සේ)", "Orders වල, payments වල errors මාසෙකට සැරයක් බලනවා", "Security, virus scan, SSL, domain, shop එක down වුණොත් දැනගන්නවා", "මාසෙකට products 5ක් update කරනවා (මිල, විස්තරය, photo එකක්)", "Order emails, checkout එක test කරනවා", "මාසික report එකක්, වැඩ කරන දවස් 2ක් ඇතුළත reply කරනවා"],
      excludes: ["දිනපතා orders, delivery, stock ගණන් කරන එක, refunds, customer service", "Payment service එක මාරු කරන එක, Daraz වගේ තැන් එක්ක සම්බන්ධ කිරීම්, අලුත් features", "ලොකු ප්‍රශ්න හදන එක, virus අයින් කරන එක, 24 පැයම support", "Plugin licenses, hosting, payment ගාස්තු, backup storage"],
      infra: "Hosting, PayHere ගාස්තු, paid plugins, domain, backup storage, email, SMS ඔයාගේ. පරණ backup එකක් කල්පනා නොකර දැම්මොත් අලුත් orders නැති වෙන නිසා shop එකක restore කරන්නේ හොඳට බලලා විතරයි." },
    "maint-webapp": { cat: "maint", monthly: true, label: "Web App & Database Care", badge: "Business වලට හොඳයි", lkr: 45000, weeks: 0, time: "මාසිකව", platform: "Web app එකක් · Firebase හෝ Supabase", screens: "Data වර්ග 5 · functions 10 · fixes 2 / මාසෙට", revisions: 0,
      blurb: "Customers පාවිච්චි කරන web app එකකට (Firebase හරි Supabase හරි). Security, database, backups, server functions හරියට වැඩද බලනවා, cloud bill එක අසාමාන්‍ය විදියට වැඩි වෙනවද බලනවා, මාසෙකට fixes 2ක් කරනවා, මාස 3කට සැරයක් backup එකකින් restore කරලා test කරනවා.",
      includes: ["මාසෙකට සැරයක් login, access, security check කරනවා", "සතියෙන් සතිය database එක, errors, logs බලනවා", "සතියෙන් සතිය backups බලනවා, මාසෙකට සැරයක් restore කරන්න ready ද බලනවා", "මාස 3කට සැරයක් backup එකකින් restore කරලා test කරනවා (test ගාස්තු ඔයාගේ)", "සතියෙන් සතිය server functions වල errors බලනවා (10ක් දක්වා)", "මාසෙකට සැරයක් cloud bill එක බලනවා, අසාමාන්‍ය විදියට වැඩි නම් කියනවා", "App එක down වුණොත් auto දැනගන්නවා", "මාසෙකට update වාර 2ක්, ඊට පස්සේ check කරනවා", "මාසෙකට පොඩි fixes 2ක් (එකකට පැයක් දක්වා)", "මාසික report එකක්, වැඩ කරන දවසක් ඇතුළත reply කරනවා"],
      excludes: ["අලුත් features, functions, database වෙනස්කම්, app එක අලුතෙන් හදන එක", "ලොකු ප්‍රශ්නයකින් ආපහු ගොඩ ගන්න එක, security audits, certificates", "App එක කවදාවත් down නොවෙනවා කියන පොරොන්දුව, 24 පැයම support, සීමාවක් නැති වෙනස්කම්", "Database, backups, functions, domain, email ගාස්තු"],
      infra: "Firebase (backups වලට Blaze plan එක), නැත්නම් Supabase (backups plan එක අනුව), hosting, domain ඔයාගේ. Free plan එකක තියෙන project එකකට සම්පූර්ණ backups ගන්න බෑ." },
    "maint-vps": { cat: "maint", monthly: true, label: "Managed Cloud / VPS Care", lkr: 65000, weeks: 0, time: "මාසිකව", platform: "Linux server එකක් · 4 vCPU / 8 GB දක්වා · services 2", screens: "Update වාර 2 · වෙනස්කම් 2 · ප්‍රශ්න 2 / මාසෙට", revisions: 0,
      blurb: "ඔයාගේ Linux server එක (VPS) අපි බලාගන්නවා. Security updates දානවා, firewall එක check කරනවා, SSL එක renew වෙනවද බලනවා, CPU, RAM, disk එක පිරෙනවද බලනවා, backups බලනවා, මාස 3කට සැරයක් restore කරලා test කරනවා, මාසෙකට ප්‍රශ්න 2ක් හොයලා බලනවා.",
      includes: ["මාසෙකට සැරයක් server එකට security updates (හදිසි ඒවා ඉක්මනට)", "මාසෙකට සැරයක් firewall, login access check කරනවා", "Website එක serve කරන config එක, SSL certificate එක බලාගන්නවා", "CPU, RAM, disk, services auto බලනවා, ප්‍රශ්නයක් වුණොත් alert එකක්", "Services 2ක් දක්වා check කරනවා", "සතියෙන් සතිය backups බලනවා", "මාස 3කට සැරයක් backup එකකින් restore කරලා test කරනවා (test ගාස්තු ඔයාගේ)", "සතියෙන් සතිය server logs බලනවා", "මාසෙකට update වාර 2ක්", "මාසෙකට server වෙනස්කම් 2ක් (එකකට පැයක් දක්වා)", "මාසෙකට පොඩි ප්‍රශ්න 2ක් හොයලා බලනවා (office වෙලාවට)", "මාසික report එකක්, වැඩ කරන දවසක් ඇතුළත reply කරනවා"],
      excludes: ["ලොකු ප්‍රශ්න, hack වුණ server එකක් හදන එක, server එක මාරු කරන එක", "Database අලුතෙන් හදන එක, අලුත් servers", "24 පැයම කෙනෙක් ඉන්න එක, server එක කවදාවත් down නොවෙනවා කියන පොරොන්දුව", "Server, backup storage, domain, paid tools, licenses"],
      infra: "Server එක, snapshots, backups, storage, paid tools, domain ඔයාගේ. Web App plan එකත් ඕන නම් දෙකටම එකට මිලක් කියනවා, පොදු වැඩ වලට දෙපාරක් ගණන් ගන්නේ නෑ." },
    "maint-custom": { cat: "maint", monthly: true, label: "Custom Maintenance & SLA", lkr: 150000, from: true, weeks: 0, time: "මාසිකව · quote එකට", platform: "Servers 2 දක්වා · services 4 · ලිඛිත SLA", screens: "Checks 10 · update වාර 4 · වෙනස්කම් 4 · ප්‍රශ්න 4 / මාසෙට", revisions: 0,
      blurb: "Business එකට නැතුවම බැරි systems, servers කීපයක් තියෙනවා නම් ඔයාට ගැළපෙන විදියට plan එකක්. ප්‍රශ්නයක් ආවොත් reply කරන කාලය ලියලා දෙනවා, advanced monitoring, updates, backups, මාසික report. LKR 150,000 ඉඳන් මාසෙකට, අවසාන මිල ඔයාගේ systems බලලා කියනවා.",
      includes: ["උදාහරණයක්: හොඳට වැඩ කරන Linux servers 2ක් දක්වා, services 4ක්", "වැදගත්ම දේවල් 10ක් auto check කරනවා", "මාසෙකට සැරයක් security updates, හදිසි ඒවා ඉක්මනට", "Login access, firewall, SSL check කරනවා", "සතියෙන් සතිය backups බලනවා", "මාස 3කට සැරයක් backup එකකින් restore කරලා test කරනවා", "මාසෙකට update වාර 4ක්, වෙනස්කම් 4ක්, ප්‍රශ්න 4ක් බලනවා", "System එක සම්පූර්ණයෙන්ම down නම් පැය 2ක් ඇතුළත, කොටසක් නම් පැය 4ක් ඇතුළත, පොඩි ප්‍රශ්නයකට වැඩ කරන දවසක් ඇතුළත reply කරනවා (සඳුදා – සිකුරාදා, උදේ 9 – හවස 6)", "ප්‍රශ්නයක් ආවොත් කරන දේ ලියලා, මාසික report එකක්, පැයක meeting එකක්"],
      excludes: ["24 පැයම කෙනෙක් ඉන්න එක", "99.9% uptime පොරොන්දුව, data කිසිම විටක නැති නොවෙනවා කියන පොරොන්දුව", "සීමාවක් නැති servers, checks, ප්‍රශ්න", "රටවල් කීපයක servers, ලොකු company security certificates", "Hack වුණ server එකක් හදන එක, server මාරු කරන එක, අලුත් app එකක්"],
      infra: "Servers, backups, monitoring tools, domain, licenses ඔයාගේ. 24 පැයම කෙනෙක් ඉන්න ඕන නම් ඒකට වෙනම මිලක් කියනවා." }
  },

  /* ---------- Package add-ons ----------
     The old add-on price list (extra screens, login…) is NOT approved for the new packages: anything a
     package does not include is quoted separately (change request). Leave this empty, or add approved ones.
     lkr = LKR (fixed, like the packages). qty: true = the customer picks how many. */
  addons: {},

  /* ---------- Project types: price for a SMALL project ---------- */
  types: {
    website:  { label: "Website",           note: "Business site, shop, portfolio",           usd: 120, weeks: 2, kind: "web" },
    webapp:   { label: "Web system",        note: "POS, bookings, class, stock වගේ systems",   usd: 300, weeks: 5, kind: "web",  includesAdmin: true },
    android:  { label: "Android app",       note: "Android phones වලට app එකක්",    usd: 250, weeks: 4, kind: "app" },
    cross:    { label: "Android + iOS app", note: "Android, iPhone දෙකටම එකම app එක",             usd: 350, weeks: 5, kind: "app" },
    appadmin: { label: "App + Admin panel", note: "App එකයි, computer එකෙන් manage කරන්න admin panel එකයි",   usd: 500, weeks: 7, kind: "both", includesAdmin: true }
  },

  /* ---------- Size ---------- */
  sizes: {
    small:  { label: "Small",  note: "Screens / pages 5ක් දක්වා", priceX: 1.0, weeksX: 1.0, maintenanceUsd: 15 },
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
    ready: { label: "Design එක මගේ ළඟ තියෙනවා", note: "Figma, XD, නැත්නම් screenshots", percent: 0,  usd: 0 },
    ui:    { label: "Screens design කරලා දෙන්න",     note: "Screens Hexora design කරනවා",      percent: 20, usd: 0 },
    brand: { label: "Screens + Logo design",           note: "Screens design, logo, colours",   percent: 20, usd: 45 }
  },

  /* ---------- Launch extras ---------- */
  extras: {
    playstore: { label: "Google Play එකේ publish කරන්න", note: "Google එකට එක පාරක් USD 25ක් වෙනම", usd: 15, for: ["app", "both"] },
    appstore:  { label: "App Store එකේ publish කරන්න",   note: "Apple එකට අවුරුද්දකට USD 99ක් වෙනම", usd: 30, for: ["app", "both"] },
    hosting:   { label: "Domain & Hosting setup",          note: "Domain, hosting ගාස්තු වෙනම",         usd: 25, for: ["web", "both"] },
    training:  { label: "Training & User guide",           note: "ඔයාගේ team එකට පාවිච්චි කරන විදිය කියලා දෙනවා",   usd: 15, for: ["app", "web", "both"] }
  },

  /* ---------- Design & Video services (price per item, USD) ----------
     days = working days for the first item, extraDays = for each extra one */
  creative: {
    logo:    { label: "Logo design",              note: "Concepts 3ක්, වෙනස්කම් 3ක්, හැම file වර්ගයක්ම", usd: 25, unit: "logo",      days: 3, extraDays: 2 },
    brand:   { label: "Branding kit",             note: "Logo, colours, business card, social media designs", usd: 60, unit: "kit",      days: 6, extraDays: 4 },
    social:  { label: "Social media post",        note: "Facebook, Instagram post එකක්",               usd: 4,  unit: "post",     days: 1, extraDays: 0.25 },
    poster:  { label: "Poster / Flyer / Banner",  note: "Print කරන්නත් online දාන්නත්",                    usd: 10, unit: "design",   days: 1, extraDays: 0.5 },
    thumb:   { label: "YouTube thumbnail",        note: "Click කරන්න හිතෙන thumbnail එකක්",                    usd: 4,  unit: "thumbnail", days: 1, extraDays: 0.25 },
    photo:   { label: "Photo editing",            note: "අඩුපාඩු හදලා, background අයින් කරලා, colours හදලා",          usd: 2,  unit: "photo",    days: 1, extraDays: 0.1 },
    reel:    { label: "Reel / Short video edit",  note: "තත්පර 60 දක්වා (TikTok, Reels, Shorts)",       usd: 10, unit: "video",    days: 1, extraDays: 0.5 },
    youtube: { label: "YouTube video edit",       note: "විනාඩි 10 දක්වා",                               usd: 25, unit: "video",    days: 2, extraDays: 1 },
    motion:  { label: "Logo animation / Intro",   note: "ඔයාගේ logo එක animate කරලා",                   usd: 20, unit: "animation", days: 2, extraDays: 1 },
    promo:   { label: "Video ad / Promo",         note: "Product එකකට, business එකට තත්පර 30 – 60ක video එකක්",         usd: 35, unit: "video",    days: 3, extraDays: 2 }
  },

  /* ---------- Speed ---------- */
  urgency: {
    normal: { label: "Normal", note: "සාමාන්‍ය කාලය", percent: 0,  weeksX: 1 },
    fast:   { label: "Urgent", note: "ඉක්මනට ඉවර කරනවා (+25%)",       percent: 25, weeksX: 0.7 }
  }
};
