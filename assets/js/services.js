/* ==========================================================================
   HEXORA — SERVICES  (each service gets its own page: service.html?s=<slug>)
   --------------------------------------------------------------------------
   • Prices are NOT written here. "prices" points to items in config.js, so a
     price changed there changes on every page.
       { type: "android" }     project type          (config.js → types)
       { creative: "logo" }    design / video item   (config.js → creative)
       { feature: "ai" }       add-on feature        (config.js → features)
       { extra: "hosting" }    launch extra          (config.js → extras)
       { maint: "small" }      monthly maintenance   (config.js → sizes)
       { design: "ui" }        design option         (config.js → design)
     Add  featured: true  to highlight one price card.
   • In text you can write {support}, {advance}, {urgent} or a price such as
     {feature:ai}, {creative:photo}, {maint:small}. The page fills them in.
   • short = the one-line description shown in the service lists (summary is used if it is missing).
   • anim = built-in animation: phone, browser, dashboard, backend, chat,
     server, logo, social, photo, timeline, uiux.
     video = "assets/video/your-file.mp4" shows your own video instead.
   ========================================================================== */

window.HX_SERVICES = {
  textv: 2,   // raise when the wording of categories / commonFaq / home changes: replaces an older copy saved from the admin panel
  categories: {
    dev: {
      label: "Development",
      note: "Apps, websites, business systems",
      steps: [
        { t: "Idea එක කියන්න", d: "Form එක fill කරන්න. ඒ වෙලාවෙම estimate එකයි, කොච්චර කල් යයිද කියලයි පේනවා." },
        { t: "Free call & quote", d: "අපි call කරලා විස්තර අහගන්නවා. ඊට පස්සේ fixed quote එකයි, ඉවර වෙන දවසයි එවනවා." },
        { t: "හදනවා, ඔයා බලනවා", d: "ටික ටික හදලා test version එවනවා. වෙනස් කරන්න ඕන දේවල් ඒ වෙලාවෙම කියන්න." },
        { t: "Launch & support", d: "App එක Play Store එකට, site එක ඔයාගේ domain එකට දානවා. ඊට පස්සේ {support} එකක් bugs free එකේ හදලා දෙනවා." }
      ]
    },
    creative: {
      label: "Design & Video",
      note: "Logo, branding, photo, video",
      steps: [
        { t: "Brief එක", d: "ඕන දේ, කැමති colours, ඔයාට අල්ලපු examples කියන්න. Photos, footage Google Drive එකෙන් හරි WhatsApp එකෙන් හරි එවන්න." },
        { t: "මුල් draft එක", d: "පළවෙනි draft එක, නැත්නම් concepts කීපයක් පෙන්නනවා." },
        { t: "Revisions", d: "ඔයා කියන වෙනස්කම් කරලා දෙනවා." },
        { t: "Final files", d: "Logo, design, video ඔක්කොම full quality එකෙන්ම ඔයාට." }
      ]
    }
  },

  /* Added to the end of every service's FAQ */
  commonFaq: [
    { q: "Payment කරන්නේ කොහොමද?", a: "වැඩ පටන් ගන්න කලින් {advance} advance එකක්. ඉතුරු ටික වැඩේ බාර දෙද්දී. Bank transfer එකෙන් ගෙවන්න පුළුවන්. ලොකු projects නම් කොටස් වලට කඩලා ගෙවන්නත් පුළුවන්." },
    { q: "ඉක්මනටම ඕන නම්?", a: "Form එකේ Speed එක \"Urgent\" කරන්න. එතකොට මිලට {urgent}ක් එකතු වෙනවා, අපි වැඩේ ඉස්සරහට අරන් ඉක්මනට ඉවර කරනවා." }
  ],

  /* ---------------- Home page (index.html): process steps and FAQ ----------------
     Edited from the admin panel -> Home page. In the text, {support} and {advance} become the
     free-support period and the advance percent from the price settings. */
  home: {
    /* "අපේ වැඩ" and "Customers කියන දේ" on the home page: filled from the admin panel → Home page. Empty = the section is not shown.
       work: { t: project name, d: one line about it, tag: "App" / "Website" / "Logo", link: optional address }
       reviews: { name: customer, biz: their business / place, text: what they said } — only real customers, with their OK. */
    work: [],
    reviews: [],
    steps: [
      { time: "විනාඩි 2", t: "Idea එක කියන්න", d: "Form එක fill කරන්න. ඒ වෙලාවෙම estimate එකයි, කොච්චර කල් යයිද කියලයි පේනවා." },
      { time: "දවස් 1 – 2", t: "Free call & quote", d: "අපි call කරලා විස්තර අහගන්නවා. ඊට පස්සේ fixed quote එකයි, ඉවර වෙන දවසයි එවනවා." },
      { time: "දවස් 1 – 7", t: "Design එක බලන්න", d: "හදන්න පටන් ගන්න කලින් design එක පෙන්නනවා. කැමති නැති දේවල් එතනදීම වෙනස් කරගමු." },
      { time: "Project එක අනුව", t: "හදනවා", d: "App එකක් නම් ටික ටික හදලා test version එවනවා. Design, video නම් revisions කරලා දෙනවා." },
      { time: "Delivery", t: "Launch", d: "App එක Play Store එකට, site එක ඔයාගේ domain එකට. Logo, design, video files full quality එකෙන්ම ඔයාට." },
      { time: "ඊට පස්සේ", t: "Support", d: "{support} එකක් bugs free එකේ හදලා දෙනවා. ඊට පස්සෙත් අපි බලාගන්න ඕන නම් මාසික plan එකක් ගන්න පුළුවන්." }
    ],
    faq: [
      { q: "Project එකක් ඉවර කරන්න කොච්චර කල් යනවද?", a: "වැඩේ අනුව වෙනස් වෙනවා. Logo එකකට දවස් 3ක් විතර, reel එකකට දවස් 1 – 2ක්. Landing page එකකට දවස් 3 – 5ක්, WordPress site එකකට සති 3 – 4ක්. Basic Android app එකකට දවස් 5 – 7ක්, Firebase app එකකට සති 3 – 5ක්. ලොකු systems වලට මාස 2 – 3ක් විතර යනවා. හැම package එකකම කාලය ලියලා තියෙනවා." },
      { q: "පටන් ගන්න මට මොකද ඕන?", a: "ඔයාගේ idea එක විතරක් ඇති. මොකක්ද ඕන, කවුද පාවිච්චි කරන්නේ කියලා කියන්න. ඔයාට අල්ලපු apps, logos, videos තියෙනවා නම් ඒවත් එවන්න. ඉතුරු design, technical වැඩ ඔක්කොම අපි බලාගන්නම්." },
      { q: "Play Store / App Store එකට දාන්න පුළුවන්ද?", a: "ඔව්. ඒක වෙනම service එකක්. Store listing එක, screenshots ඔක්කොම හදලා ඔයාගේ developer account එකෙන්ම publish කරනවා. එතකොට app එක තියෙන්නේ ඔයාගේ නමින්. Google එකට එක පාරක් USD 25ක්, Apple එකට අවුරුද්දකට USD 99ක් ගෙවන්න වෙනවා (ඒ ගාස්තු ඔයාගේ). අපේ app packages Android වලට." },
      { q: "Package price එකට hosting / domain / Firebase fees include ද?", a: "නෑ. Package එකේ මිල හදන වැඩේට විතරයි. Hosting, domain, Firebase වගේ database ගාස්තු, email, PayHere ගාස්තු, Google, Apple developer accounts ඕන වුණොත් ඒවා ඔයාගේ accounts වලින්ම ගෙවන්න වෙනවා. Basic, Standard apps සහ Basic, Standard websites වලට server එකක්වත් ඕන නෑ." },
      { q: "Source code එක මට ලැබෙනවද?", a: "ඔව්. අන්තිම payment එක කළාම source code එක සම්පූර්ණයෙන්ම, project එකේ logins ඔක්කොමත් එක්ක ඔයාට දෙනවා." },
      { q: "Launch කළාට පස්සේ මොකද වෙන්නේ?", a: "Launch එකෙන් පස්සේ දවස් 30ක් අපි හදපු දේවල වැරදි free එකේ හදලා දෙනවා. ඊට පස්සෙත් updates, backups, පොඩි වෙනස්කම් අපි බලාගන්න ඕන නම් මාසික plan එකක් ගන්න පුළුවන් (LKR 5,500 ඉඳන්). Hosting ගාස්තු ඒකට අමතරව." },
      { q: "Logo එකකට revisions කීයක් දෙනවද?", a: "මුලින් concepts 3ක් පෙන්නනවා. ඔයා තෝරන එකට වෙනස්කම් 3ක් දක්වා free. Final files PNG, JPG, SVG, PDF විදියට දෙනවා. Print කරන්නත්, online දාන්නත් පුළුවන්." },
      { q: "Video editing වලට footage එවන්නේ කොහොමද?", a: "Google Drive link එකක් එවන්න, නැත්නම් WhatsApp එකෙන් එවන්න. Reel එකක් සාමාන්‍යයෙන් දවස් 1 – 2කින්, YouTube video එකක් දවස් 2 – 4කින් ඉවර කරලා දෙනවා." },
      { q: "Payment කරන්නේ කොහොමද?", a: "වැඩ පටන් ගන්න කලින් {advance} advance එකක්. ඉතුරු ටික වැඩේ බාර දෙද්දී. Bank transfer එකෙන් ගෙවන්න පුළුවන්. ලොකු projects නම් කොටස් වලට කඩලා ගෙවන්නත් පුළුවන්." }
    ]
  },

  list: [
    /* ---------------- Development ---------------- */
    {
      slug: "mobile-apps", cat: "dev", name: "Mobile Apps", anim: "phone", pkgv: 4,   // pkgv: this text goes with the approved package list (config.js packagesVersion); an older saved copy is replaced
      icon: '<rect x="6" y="2" width="12" height="20" rx="2.5"/><path d="M11 18h2"/>',
      short: "Android apps · LKR 14,000 ඉඳන්",
      summary: "ඔයාගේ business එකට Android app එකක්. Packages 5ක් LKR 14,000 ඉඳන්. iPhone එකටත් ඕන නම්, නැත්නම් ලොකු project එකක් නම් වෙනම quote එකක් දෙනවා.",
      intro: "Orders ගන්න, bookings ගන්න, delivery බලාගන්න, class එකක් කරගෙන යන්න වගේ ඔයාගේ business එකට ඕන Android app එක අපි Flutter වලින් හදනවා. Basic ඉඳන් Premium දක්වා packages Android වලට. iPhone, web version, නැත්නම් ලොකු system එකක් ඕන නම් Custom package එකෙන් කතා කරගමු.",
      tags: ["Flutter", "Android", "Firebase"],
      packages: true,
      includes: [
        "මිල රුපියල් වලින්. Dollar rate එක උඩ ගියත් වෙනස් වෙන්නේ නෑ",
        "Package එකේ ලියලා තියෙන screens, features ටික හදනවා. ඊට වැඩිය ඕන නම් ඒකට වෙනම මිලක් කලින්ම කියනවා",
        "Packages Android වලට. iPhone එකට ඕන නම් Custom package එක",
        "Phone එකට දාලා බලන්න test version (APK), revisions, දවස් 30ක් free bug fixes",
        "{advance} advance. අන්තිම payment එකෙන් පස්සේ source code එක ඔයාට",
        "Firebase, hosting, domain, PayHere ගාස්තු, Google, Apple accounts වල ගාස්තු ඔයාගේ accounts වලින්"
      ],
      prices: [],
      faq: [
        { q: "App එකක් හදන්න කොච්චර කල් යනවද?", a: "Basic app එකකට දවස් 5 – 7ක්, Standard එකකට සති 2 – 3ක්, Firebase app එකකට සති 3 – 5ක්, Business app එකකට සති 6 – 9ක්, Premium එකකට සති 10 – 14ක් විතර. ඔයාගෙන් ඕන text, photos, accounts වෙලාවට ලැබුණොත් මේ කාලෙට ඉවර කරන්න පුළුවන්." },
        { q: "Screen එකක් කියන්නේ මොකක්ද?", a: "App එකේ තියෙන එක එක page එකක්. උදාහරණයක් විදියට Login, Home, Cart, Profile කියන්නේ screens 4ක්. හැම package එකකම screens කීයක් තියෙනවද කියලා ලියලා තියෙනවා (3, 5, 8, 12, 20). ඊට වැඩිය ඕන නම් ඒකට වෙනම මිලක් කියනවා." },
        { q: "iPhone (iOS) app එකක් හදන්න පුළුවන්ද?", a: "පුළුවන්, ඒත් packages 5 Android වලට විතරයි. iPhone එකටත් ඕන නම් Custom App Development package එකෙන් (LKR 299,000 ඉඳන්) ඔයාගේ වැඩේට ගැළපෙන quote එකක් දෙනවා. Apple developer account එකට අවුරුද්දකට USD 99ක් ඔයා ගෙවන්න ඕන." },
        { q: "Price එකට hosting / Firebase / Play Store fees include ද?", a: "නෑ. Package එකේ මිල app එක හදන වැඩේට විතරයි. Firebase, hosting, domain, PayHere ගාස්තු, Google developer account එක (එක පාරක් USD 25) ඔයාගේ accounts වලින්. Basic, Standard apps වලට server එකක්වත් ඕන නෑ." },
        { q: "Play Store එකට දාන්න පුළුවන්ද?", a: "ඔව්. ඒක වෙනම service එකක්. Store listing එක, screenshots ඔක්කොම හදලා ඔයාගේ developer account එකෙන්ම publish කරනවා. App එක තියෙන්නේ ඔයාගේ නමින්. Google එකට එක පාරක් USD 25ක් ගෙවන්න වෙනවා." },
        { q: "Quote එකක් ගන්න මොනවද කියන්න ඕන?", a: "ඔයාගේ business එක මොකක්ද, කවුද app එක පාවිච්චි කරන්නේ (customers, staff, admin), app එකේ මොන screens ඕනද, මොනවද save කරන්න ඕන (products, orders වගේ), photos upload කරන්න ඕනද, payments, notifications ඕනද, කවදට ඕනද කියලා form එකේ ලියන්න. තේරෙන්නේ නැති දේවල් අපි call එකෙන් අහගන්නම්." },
        { q: "Package එකේ නැති feature එකක් ඕන නම්?", a: "ඒකට වෙනම මිලක් ලියලා එවනවා, ඔයා OK කළොත් විතරයි කරන්නේ. Package එකේ දැනටමත් තියෙන දෙයකට ආයෙත් ගණන් ගන්නේ නෑ. ඔයාට ඕන දේ package එකට වඩා ගොඩක් ලොකු නම්, ගැළපෙන package එක අපිම කියනවා." },
        { q: "Urgent ඕන නම්?", a: "App packages වලට urgent ගාස්තුවක් auto එකතු වෙන්නේ නෑ. ඉක්මනට ඕන නම් form එකේ Speed එක Urgent කරන්න. කරන්න පුළුවන්ද කියලා බලලා, මිලක් වෙනස් වෙනවා නම් call එකෙන් කියනවා." }
      ]
    },
    {
      slug: "websites", cat: "dev", name: "Websites", anim: "browser", pkgv: 5,   // pkgv: this text goes with the approved website package list
      icon: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M7 6.5h.01M10 6.5h.01"/>',
      short: "Landing page, business site, online shop · LKR 10,000 ඉඳන්",
      summary: "එක page එකේ landing site එකක ඉඳන් WordPress site, online shop දක්වා. Packages LKR 10,000 ඉඳන්. Phone එකේ ලස්සනට පේනවා, Google එකේ හොයාගන්නත් පුළුවන්.",
      intro: "ඔයාගේ business එක online ගේන්න website එකක්. එක page එකේ landing site එකක් ඕනද, ඔයාටම content වෙනස් කරන්න පුළුවන් WordPress site එකක් ඕනද, online shop එකක් ඕනද, ඕන එකක් හදනවා. Package එකේ pages, products කීයක් තියෙනවද කියලා ලියලා තියෙනවා. ඊට වැඩිය ඕන නම් ඒකට වෙනම මිලක් කියනවා.",
      tags: ["Static", "WordPress", "WooCommerce"],
      packages: true, pkgCat: "web", pkgKeys: ["web-basic", "web-standard", "web-professional", "web-ecommerce"],
      includes: [
        "මිල රුපියල් වලින්. Dollar rate එක උඩ ගියත් වෙනස් වෙන්නේ නෑ",
        "Phone එකේ, tablet එකේ, computer එකේ හැම එකකම ලස්සනට පේනවා",
        "Google එකේ හොයාගන්න පුළුවන් විදියට basic SEO, HTTPS එක්ක",
        "Domain, hosting setup කරලා දෙනවා. ඒවයේ ගාස්තු ඔයාගේ accounts වලින්",
        "Revisions 1 – 2ක් (package එක අනුව), දවස් 30ක් free bug fixes",
        "{advance} advance. අන්තිම payment එකෙන් පස්සේ files ඔක්කොම ඔයාට"
      ],
      prices: [],
      faq: [
        { q: "Website එකක් හදන්න කොච්චර කල් යනවද?", a: "Landing page එකකට දවස් 3 – 5ක්, Standard site එකකට දවස් 10 – 15ක්, WordPress site එකකට සති 3 – 4ක්, online shop එකකට සති 5 – 7ක් විතර. ඔයාගේ text, photos වෙලාවට ලැබුණොත් මේ කාලෙට ඉවර කරනවා." },
        { q: "Domain එක සහ hosting එක ගණන් වලට include ද?", a: "Setup කරන එක අපි කරනවා. ගාස්තු ඔයාගේ. Domain එකකට අවුරුද්දකට ගෙවන්න ඕන (.com.lk එකක් LKR 1,000 විතර). Landing, Business sites free hosting එකක දාන්න පුළුවන්. WordPress site එකකට, shop එකකට hosting plan එකක් ඕන (අවුරුද්දකට USD 39 විතර ඉඳන්). ජීවිත කාලෙටම free hosting කියලා එකක් නෑ." },
        { q: "Pages වැඩි ඕන නම්? Online payments ඕන නම්?", a: "Package එකේ තියෙන ගාණට වඩා pages, products ඕන නම් ඒකට වෙනම මිලක් කියනවා, නැත්නම් ඊළඟ package එක ගන්න පුළුවන්. Card payments (PayHere), cart, customer accounts තියෙන්නේ E-commerce package එකේ. Staff login, dashboards වගේ දේවල් ඕන නම් Business Systems බලන්න." },
        { q: "Site එක හදලා ඉවර වුණාට පස්සේ කවුද බලාගන්නේ?", a: "මුල් දවස් 30 වැරදි ආවොත් අපි free හදනවා. ඊට පස්සෙත් updates, security, පොඩි content වෙනස්කම් අපි බලාගන්න ඕන නම් මාසික plan එකක් ගන්න පුළුවන් (Maintenance & Hosting බලන්න)." }
      ]
    },
    {
      slug: "business-systems", cat: "dev", name: "Business Systems", anim: "dashboard", pkgv: 5,
      icon: '<rect x="3" y="3" width="7" height="9" rx="1.5"/><rect x="14" y="3" width="7" height="5" rx="1.5"/><rect x="14" y="12" width="7" height="9" rx="1.5"/><rect x="3" y="16" width="7" height="5" rx="1.5"/>',
      short: "Class, stock, appointment systems",
      summary: "Staff ලට login වෙලා වැඩ කරන්න පුළුවන් web system එකක්. Class records, stock, appointments, customer requests වගේ දේවල් එක තැනකින් බලාගන්න. ලොකු portals වලට වෙනම quote එකක්.",
      intro: "Excel sheets, පොත් වල ලියන එක නවත්තලා ඔයාගේ business එකේ වැඩ එක තැනකට ගන්න web system එකක්. Computer එකෙන් හරි phone එකෙන් හරි ඕන තැනක ඉඳන් වැඩ කරන්න පුළුවන්. Admin, staff ලට වෙන වෙනම login, dashboard, reports. Advanced Business Web System package එකේ මිල fixed. ලොකු portals වලට ඔයාගේ වැඩේ බලලා quote එකක් දෙනවා.",
      tags: ["Dashboards", "User roles", "Supabase"],
      packages: true, pkgCat: "web", pkgKeys: ["web-advanced", "web-custom"],
      includes: [
        "Admin, Staff, Viewer කියලා වෙන වෙනම login",
        "Dashboard, reports, charts, Excel එකට download කරන්න",
        "ඔයාගේ business එකේ එක වැඩක් (class records, appointments, stock, requests වගේ)",
        "Computer, tablet, phone ඕන එකක වැඩ කරනවා",
        "පාවිච්චි කරන විදිය කියලා දෙනවා, revisions 3ක්, දවස් 30ක් free bug fixes",
        "Database, hosting ගාස්තු ඔයාගේ accounts වලින් (මාසයකට USD 25 විතර ඉඳන්)"
      ],
      prices: [],
      faq: [
        { q: "System එකක් හදන්න කොච්චර කල් යනවද?", a: "Advanced Business Web System එකකට සති 8 – 12ක් විතර. ලොකු portals වලට වැඩේ අනුව. Quote එකේම ඉවර වෙන දවස ලියලා දෙනවා." },
        { q: "Admin panel එක වෙනම ගෙවන්න ඕනද?", a: "නෑ. Dashboard එක package එකේම තියෙනවා (කොටස් 3ක්, reports 2ක් වගේ). ඊට වැඩිය ඕන නම් ඒකට වෙනම මිලක් කියනවා." },
        { q: "POS, accounting, payroll වගේ ඒවා?", a: "ඒවා Advanced package එකේ නෑ. Custom Web Portal එකෙන් (LKR 399,000 ඉඳන්) ඔයාට ඕන විදියට හදලා දෙන්න පුළුවන්." },
        { q: "මගේ staff එකට use කරන විදිය කියලා දෙනවද?", a: "ඔව්. පැයක training එකක් package එකේම තියෙනවා. ලොකු team එකකට තව training ඕන නම් ඒකත් ගන්න පුළුවන් ({extra:training})." }
      ]
    },
    {
      slug: "backend-admin", cat: "dev", name: "Backend & Admin Panel", anim: "backend", pkgv: 6,   // pkgv: this text goes with the approved backend package list
      icon: '<ellipse cx="12" cy="5.5" rx="8" ry="3"/><path d="M4 5.5v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6M4 11.5v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/>',
      short: "දැනට තියෙන app එකට, site එකට login, database, admin panel",
      summary: "ඔයාට දැනටමත් app එකක් හරි site එකක් හරි තියෙනවා නම්, ඒකට login එකක්, database එකක්, ඔයාටම data manage කරන්න admin panel එකක්. Packages 4ක් LKR 29,000 ඉඳන්.",
      intro: "ඔයාට දැනටමත් app එකක් හරි website එකක් හරි තියෙනවා නම්, ඒකට Firebase backend එකක් හදලා දෙනවා: email, password එකෙන් login, data save වෙන database එක, ඒ data ආරක්ෂිතව තියාගන්න rules. ඒ data ඔයාටම බලන්න, වෙනස් කරන්න admin panel එකකුත් ගන්න පුළුවන්. App එකත් අලුතෙන්ම ඕන නම් Mobile Apps, Websites packages බලන්න.",
      tags: ["Firebase", "Firestore", "Admin panel"],
      packages: true, pkgCat: "backend",
      includes: [
        "මිල රුපියල් වලින්. Dollar rate එක උඩ ගියත් වෙනස් වෙන්නේ නෑ",
        "Email, password එකෙන් login, Firebase database, data ආරක්ෂිතව තියාගන්න rules",
        "Admin panel එක (package එක අනුව pages 4 – 10ක්, user වර්ග 2 – 4ක්)",
        "ඔයාගේ දැනට තියෙන app එකට හරි site එකට හරි සම්බන්ධ කරලා දෙනවා",
        "Revisions 1 – 3ක් (package එක අනුව), දවස් 30ක් free bug fixes",
        "{advance} advance. අන්තිම payment එකෙන් පස්සේ source code එක ඔයාට",
        "Firebase, hosting, domain ගාස්තු ඔයාගේ accounts වලින්"
      ],
      prices: [],
      faq: [
        { q: "මට දැනටමත් app / site එකක් තියෙනවා. ඒකට backend එකක් විතරක් ගන්න පුළුවන්ද?", a: "ඔව්. මේ packages තියෙන්නේ ඒකටම. Basic Firebase Backend එකෙන් (LKR 29,000) ඔයාගේ app එකට login එකකුයි, data save කරන එක කොටසකුයි හදලා දෙනවා. මුලින් ඔයාගේ app එකේ code එක බලලා, කොච්චර කල් යයිද කියලා කියනවා." },
        { q: "මට backend එකක් තියෙනවා, admin panel එකක් විතරයි ඕන?", a: "එහෙනම් Basic Web Admin Panel එක (LKR 49,000) ගැළපෙනවා. ඔයාගේ Firebase backend එකට admin pages 4ක් හදනවා: dashboard එක, records list එක, add / edit form එක, users list එක. Backend එකත් නැත්නම් දෙකම තියෙන Advanced package එක බලන්න." },
        { q: "Firebase Blaze කියන්නේ මොකක්ද? ගෙවන්න වෙනවද?", a: "Blaze කියන්නේ Firebase එකේ පාවිච්චි කරන ගාණට ගෙවන plan එක. Photos, PDF upload කරන්න, server එකේ වැඩ කරන්න (Advanced, Professional packages) ඒක on කරන්නම ඕන. පොඩි පාවිච්චියකට free ගාණ ඇතුළේ bill එක 0 වෙන්නත් පුළුවන්, ඒත් අපිට ඒක පොරොන්දු වෙන්න බෑ. ඒ නිසා bill එක වැඩි වුණොත් ඔයාට message එකක් එන්න budget alert එකක් දාලා දෙනවා. Basic packages 2ට Blaze ඕන නෑ." },
        { q: "OTP (SMS) login ගන්න පුළුවන්ද?", a: "Packages වල නෑ, මොකද SMS වලට වෙනම ගාස්තු යනවා. ඕන නම් ඒකට වෙනම මිලක් කියනවා. Email, password login හැම package එකකම තියෙනවා." },
        { q: "App එකයි admin panel එකයි දෙකම අලුතෙන් ඕන නම්?", a: "එහෙනම් Mobile Apps වල Business, Premium packages බලන්න, ඒවයේ admin panel එකත් තියෙනවා. නැත්නම් Custom Backend & Admin (LKR 349,000 ඉඳන්). මේ page එකේ packages තියෙන්නේ දැනට තියෙන app එකකට backend එකක් එකතු කරන්න." }
      ]
    },
    {
      slug: "ai-features", cat: "dev", name: "AI Features & Automation", anim: "chat", pkgv: 7,   // pkgv: this text goes with the approved AI package list
      icon: '<path d="M12 3l1.8 4.7 4.7 1.8-4.7 1.8L12 16l-1.8-4.7-4.7-1.8 4.7-1.8z"/><path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z"/>',
      short: "Website chatbot, AI assistant, automation",
      summary: "Customers අහන ප්‍රශ්න වලට උත්තර දෙන website chatbot එකක ඉඳන්, ඔයාගේ documents කියවලා උත්තර දෙන assistant, දිනපතා කරන වැඩ auto කරන automation දක්වා. Packages 5ක් LKR 40,000 ඉඳන්.",
      intro: "ඔයාගේ website එකට, system එකට ඇත්තටම වැඩට එන AI. ඔයා දෙන ප්‍රශ්න උත්තර වලින් customers ලට reply කරන chatbot එකක්, ඔයාගේ price lists, documents කියවලා උත්තර දෙන assistant එකක්, posts, reports වගේ දේවල් draft කරලා ඔයාගේ OK එකෙන් පස්සේ යවන automation එකක්. හැම package එකකම මොනවද කරන්නේ කියලා පැහැදිලිව ලියලා තියෙනවා. ඒත් එක දෙයක් කලින්ම කියන්න ඕන: AI හැම වෙලේම 100% හරි උත්තර දෙනවා කියලා අපිට පොරොන්දු වෙන්න බෑ.",
      tags: ["Chatbot", "Assistant", "Automation"],
      packages: true, pkgCat: "ai",
      includes: [
        "එක පාරක් ගෙවන මිලක්, රුපියල් වලින්",
        "AI keys ආරක්ෂිතව server එකේ. කාටවත් site එකෙන් හොයාගන්න බෑ",
        "දන්නේ නැති ප්‍රශ්නයකට බොරු උත්තර නොදී ඔයාගේ contact එකට යොමු කරනවා",
        "Data වෙනස් කරන්න කලින් ඔයාගේ OK එක ඉල්ලනවා",
        "Revisions 1 – 3ක් (package එක අනුව), දවස් 30ක් free bug fixes",
        "AI පාවිච්චියට යන ගාස්තු, hosting ඔයාගේ accounts වලින්"
      ],
      prices: [],
      faq: [
        { q: "Chatbot එක හැම ප්‍රශ්නයකටම හරියටම උත්තර දෙනවද?", a: "හැම වෙලේම නෑ. AI සමහර වෙලාවට වැරදෙනවා. Basic chatbot එක උත්තර දෙන්නේ ඔයා දෙන ප්‍රශ්න උත්තර 30 ඇතුළෙන් විතරයි. ඒ ඇතුළේ නැති ප්‍රශ්නයක් ආවොත් ඔයාගේ number එක දෙනවා. Knowledge assistant එක ඔයාගේ documents වලින් උත්තර හොයලා, ඒක ගත්තේ මොන document එකෙන්ද කියලත් පෙන්නනවා. Documents වල නැත්නම් දන්නේ නෑ කියලා කියනවා. ඒත් 100%ක් හරි කියලා අපිට පොරොන්දු වෙන්න බෑ." },
        { q: "AI API costs කීයද? Package එකේ include ද?", a: "නෑ. Package එකේ මිල හදලා දෙන වැඩේට විතරයි. AI එක පාවිච්චි කරන ගාණට ඔයාගේ OpenAI account එකෙන් ගෙවන්න වෙනවා. උත්තරයකට USD 0.01ක් විතර, ඒ කියන්නේ රුපියල් 3 – 4ක් විතර යනවා. වැඩ පටන් ගන්න කලින් ඔයාගේ පාවිච්චියට මාසෙකට කීයක් යයිද කියලා estimate එකක් දෙනවා." },
        { q: "Package එකක් එකකට උඩ එක ඔක්කොම include ද?", a: "නෑ. හැම package එකක්ම වෙන වෙනම වැඩකට හදලා තියෙන්නේ. උදාහරණයක් විදියට, Business Assistant එකේ documents කියවන කොටස නෑ. දෙකම ඕන නම් දෙකටම එකට මිලක් කියනවා. දැනටමත් තියෙන දෙයකට ආයෙත් ගණන් ගන්නේ නෑ." },
        { q: "AI එකට මගේ data / database එකට access දෙන්න ආරක්ෂිතද?", a: "ඔව්. AI එකට බලන්න පුළුවන් ඔයා අවසර දෙන data විතරයි. Data වෙනස් කරන්න කලින්, ඒ වැඩේට අවසර තියෙන කෙනෙක් ඒක බලලා OK කරන්න ඕන. කවුද මොකද කළේ කියලා record එකකුත් තියාගන්නවා. කවුරුහරි chat එකෙන් උපක්‍රමයක් කරලා වැඩි access ගන්න හැදුවත් ඒක වෙන්නේ නෑ." },
        { q: "WhatsApp chatbot එකක් / voice AI එකක් ගන්න පුළුවන්ද?", a: "මේ packages වල නෑ. WhatsApp එකට business verification එකක් ඕන, SMS, call වලට වෙනම ගාස්තු යනවා. ඕන නම් Custom AI Solutions එකෙන් ඔයාගේ වැඩේට ගැළපෙන quote එකක් දෙනවා." }
      ]
    },
    {
      slug: "maintenance-hosting", cat: "dev", name: "Maintenance & Hosting", anim: "server", pkgv: 7,
      icon: '<path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.4-.6-.6-2.4z"/>',
      short: "Site එක, app එක මාසෙන් මාසෙට අපි බලාගන්නවා",
      summary: "ඔයාගේ website එක, web app එක හරියට වැඩ කරනවද කියලා අපි මාසෙන් මාසෙට බලාගන්නවා: updates, backups, පොඩි වෙනස්කම්, මාසික report එක. Plans LKR 5,500 ඉඳන් මාසෙකට. Hosting, domain ගාස්තු වෙනම.",
      intro: "Site එක හැදුවාට වැඩේ ඉවර නෑ. Plugins update කරන්න ඕන, backups හරියට වැටෙනවද බලන්න ඕන, site එක down වුණොත් ඉක්මනට දැනගන්න ඕන. මේ plans වලින් ඒ වැඩ අපි බලාගන්නවා. Plan එකේ මාසෙකට මොනවද කරන්නේ කියලා ලියලා තියෙනවා. Site එක 24 පැයම auto check වෙනවා, ඒත් අපි වැඩ කරන්නේ සතියේ දවස් වල office වෙලාවට. Site එක කවදාවත් down වෙන්නේ නෑ කියලා අපිට පොරොන්දු වෙන්න බෑ.",
      tags: ["Monitoring", "Updates", "Backups"],
      packages: true, pkgCat: "maint",
      includes: [
        "මිල Hexora බලාගන්න වැඩේට විතරයි. Hosting, domain, plugins, backups වලට යන ගාස්තු ඔයාගේ",
        "මාසෙ පටන් ගද්දී ඒ මාසෙට ගෙවන්න ඕන. නවත්තන්න ඕන නම් දවස් 30කට කලින් කියන්න",
        "මාසෙකට කරන වෙනස්කම් ගාණ plan එකේ ලියලා තියෙනවා. ඉතුරු වුණොත් ඊළඟ මාසෙට යන්නේ නෑ",
        "සතියේ දවස් වල office වෙලාවට reply කරනවා: සාමාන්‍ය plans වලට වැඩ කරන දවස් 2ක් ඇතුළත, Web App, Cloud plans වලට වැඩ කරන දවසක් ඇතුළත",
        "Backups හරියට වැටෙනවද කියලා බලනවා. Web App, Cloud, Custom plans වලට මාස 3කට සැරයක් backup එකෙන් restore කරලා test කරනවා",
        "අලුත් features, අලුත් design, hack වුණු site එකක් හදන එක වෙනම මිලකට"
      ],
      prices: [],
      faq: [
        { q: "Hosting එක මේ price එකේ include ද?", a: "නෑ. මිල අපි site එක බලාගන්න වැඩේට විතරයි. Hosting, server, domain renew කරන එක, paid plugins, payment ගාස්තු ඔයාගේ accounts වලින්ම ගෙවනවා. සමහර sites free hosting එකක දාන්න පුළුවන්, ඒත් එහෙම වුණත් maintenance ගාස්තුව වෙනස් වෙන්නේ නෑ." },
        { q: "අලුතෙන් හදපු project එකට free support තියෙනවා නේද?", a: "ඔව්. අපි හදපු project එකක මුල් දවස් 30 වැරදි free හදනවා. ඒ වැරදි වලට plan එකෙන් ආයෙත් ගණන් ගන්නේ නෑ. Updates, backups, content වෙනස්කම් වගේ දේවල් ඒ කාලෙත් ඕන නම් plan එකක් එදාම පටන් ගන්න පුළුවන්." },
        { q: "24/7 support ද?", a: "Site එක 24 පැයම auto check වෙනවා. ඒත් අපි වැඩ කරන්නේ සඳුදා ඉඳන් සිකුරාදා වෙනකන් උදේ 9 ඉඳන් හවස 6 වෙනකන්. Custom plan එකේ site එක සම්පූර්ණයෙන්ම down නම් පැය 2ක් ඇතුළත reply කරනවා. ඒ reply කරන කාලය, හදලා ඉවර කරන කාලය නෙවෙයි. 24 පැයම කෙනෙක් ඉන්න ඕන නම් ඒකට වෙනම කතා කරගමු." },
        { q: "Backups ගැන guarantee එකක් තියෙනවද?", a: "Backups auto වැටෙන්න set කරලා, ඒවා හරියට වැටෙනවද කියලා දිගටම බලනවා. Web App, Cloud, Custom plans වලට මාස 3කට සැරයක් backup එකකින් ඇත්තටම restore කරලා test කරනවා. ඒත් කිසිම data එකක් නැති වෙන්නේ නෑ කියලා අපිට පොරොන්දු වෙන්න බෑ, ඒක ඔයාගේ hosting එක අනුව වෙනස් වෙනවා. Online shop එකක පරණ backup එකක් කල්පනා නොකර දැම්මොත් අලුත් orders නැති වෙන්න පුළුවන්. ඒ නිසා ඒක කරන්නේ හොඳට බලලා විතරයි." },
        { q: "මගේ site එක දැනටම hacked / outdated නම්?", a: "එහෙනම් plan එක පටන් ගන්න කලින් site එක හොඳට check කරලා, හදන්න ඕන දේවල් හදනවා. ඒකට වෙනම මිලක් කියනවා. මාසික plans තියෙන්නේ හොඳට වැඩ කරන sites වලට." },
        { q: "Web app එකයි VPS එකයි දෙකම තියෙනවා නම් plans දෙකක්ද?", a: "නෑ. දෙකටම එකට එක මිලක් කියනවා. දෙකටම පොදු වැඩ වලට දෙපාරක් ගණන් ගන්නේ නෑ." }
      ]
    },

    /* ---------------- Design & Video ---------------- */
    {
      slug: "logo-branding", cat: "creative", name: "Logo & Branding", anim: "logo", pkgv: 2,
      icon: '<path d="M12 2l8.7 5v10L12 22l-8.7-5V7z"/><path d="M12 22V12M12 12l8.7-5M12 12L3.3 7"/>',
      short: "Logo, colours, fonts, business card, social kit",
      summary: "ඔයාගේ business එක මතක හිටින logo එකක්. Branding kit එක ගත්තොත් colours, fonts, business card, social media designs ඔක්කොම එකට.",
      intro: "Logo එක තමයි customers මුලින්ම දකින්නේ. ඔයාගේ business එකට ගැළපෙන, බැලුවම මතක හිටින logo එකක් හදනවා. Branding kit එක ගත්තොත් හැම තැනම එක වගේ පේන්න colours, fonts, business card එක, Facebook, Instagram designs ඔක්කොම ලැබෙනවා.",
      tags: ["Logo", "Brand kit", "Business card"],
      includes: [
        "මුලින් concepts 3ක් පෙන්නනවා",
        "තෝරන එකට වෙනස්කම් 3ක් දක්වා free",
        "PNG, JPG, SVG, PDF files (print කරන්නත් online දාන්නත්)",
        "Branding kit එකේ: logo, colours, fonts",
        "Branding kit එකේ: business card, social media designs"
      ],
      prices: [{ creative: "logo" }, { creative: "brand", featured: true }, { creative: "motion" }],
      faq: [
        { q: "Logo එකකට කොච්චර කල් යනවද?", a: "Logo එකකට දවස් 3ක් විතර. Branding kit එකට තව දවස් කීපයක් යනවා." },
        { q: "Logo එකකට revisions කීයක් දෙනවද?", a: "මුලින් concepts 3ක් පෙන්නනවා. ඔයා තෝරන එකට වෙනස්කම් 3ක් දක්වා free. Final files PNG, JPG, SVG, PDF විදියට දෙනවා. Print කරන්නත්, online දාන්නත් පුළුවන්." },
        { q: "Branding kit එකේ මොකද තියෙන්නේ?", a: "Logo එක, ඔයාගේ brand colours, fonts, business card design එක, Facebook, Instagram වලට designs." }
      ]
    },
    {
      slug: "social-print", cat: "creative", name: "Social Media & Print", anim: "social", pkgv: 2,
      icon: '<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M3 15l5-5 4 4 3-3 6 6"/><circle cx="16" cy="8" r="1.5"/>',
      short: "Posts, posters, flyers, YouTube thumbnails",
      summary: "Facebook, Instagram posts, posters, flyers, banners, YouTube thumbnails. Scroll කරද්දී නතර වෙලා බලන්න හිතෙන designs.",
      intro: "Offer එකකට post එකක්, කඩේට poster එකක්, YouTube video එකට thumbnail එකක්. ඔයාගේ brand එකට ගැළපෙන, scroll කරද්දී නතර වෙලා බලන්න හිතෙන designs හදනවා.",
      tags: ["Posts", "Posters", "Thumbnails"],
      includes: [
        "Facebook, Instagram posts",
        "Posters, flyers, banners (print කරන්නත් online දාන්නත්)",
        "YouTube thumbnails",
        "මාසෙකට posts කීපයක් එකට ගන්නත් පුළුවන්"
      ],
      prices: [{ creative: "social", featured: true }, { creative: "poster" }, { creative: "thumb" }],
      faq: [
        { q: "Monthly posts pack එකක් ගන්න පුළුවන්ද?", a: "ඔව්. මාසෙකට posts කීයක් ඕනද කියලා form එකේ දාන්න. මිල ඒ වෙලාවෙම පේනවා." },
        { q: "Print කරන්න පුළුවන් files ද දෙන්නේ?", a: "ඔව්. Print කරන්න ගැළපෙන high quality files, online දාන්න ගැළපෙන files දෙකම දෙනවා." }
      ]
    },
    {
      slug: "photo-editing", cat: "creative", name: "Photo Editing", anim: "photo", pkgv: 2,
      icon: '<path d="M3 7h3l2-3h8l2 3h3v13H3z"/><circle cx="12" cy="13" r="4"/>',
      short: "Retouch, background remove, product photos",
      summary: "Photos වල අඩුපාඩු හදලා, background එක අයින් කරලා, colours හදලා දෙනවා. Online shop එකට ලස්සන product photos.",
      intro: "Phone එකෙන් ගත්ත product photo එකක් වුණත් අපි හදලා දෙනවා: background එක සුදු කරලා, light එකයි colours එකයි හදලා, පොඩි අඩුපාඩු අයින් කරලා. Daraz, ඔයාගේ online shop එක, Facebook වලට දාන්න ගැළපෙනවා.",
      tags: ["Retouch", "Background", "Product"],
      includes: [
        "අඩුපාඩු හදන එක (retouch)",
        "Background එක අයින් කරන එක",
        "Colours, light හදන එක",
        "Online shop වලට product photos"
      ],
      prices: [{ creative: "photo", featured: true }],
      faq: [
        { q: "Photos එවන්නේ කොහොමද?", a: "Google Drive link එකක් එවන්න, නැත්නම් WhatsApp එකෙන් එවන්න." },
        { q: "Photos ගොඩක් තියෙනවා නම්?", a: "Photo එකකට {creative:photo} ගානේ. Form එකේ photos කීයක්ද කියලා දැම්මම මුළු මිල ඒ වෙලාවෙම පේනවා." }
      ]
    },
    {
      slug: "video-editing", cat: "creative", name: "Video Editing", anim: "timeline", pkgv: 2,
      icon: '<rect x="2" y="5" width="15" height="14" rx="2"/><path d="M17 10l5-3v10l-5-3"/>',
      short: "YouTube, Reels, TikTok, Shorts, subtitles",
      summary: "YouTube videos, Reels, TikTok, Shorts. Cuts, subtitles, music, colours ඔක්කොම හදලා post කරන්න ready කරලා දෙනවා.",
      intro: "ඔයා footage එක එවන්න, අපි ඒක post කරන්න ready කරලා දෙන්නම්. අනවශ්‍ය කොටස් කපලා, subtitles දාලා, music එකයි colours එකයි හදලා. Reels, TikTok, Shorts, YouTube videos ඔක්කොම.",
      tags: ["YouTube", "Reels", "Subtitles"],
      includes: [
        "Reels, TikTok, Shorts (තත්පර 60 දක්වා)",
        "YouTube videos (විනාඩි 10 දක්වා)",
        "Cuts, subtitles, music",
        "Colours හදන එක (colour grading)"
      ],
      prices: [{ creative: "reel", featured: true }, { creative: "youtube" }],
      faq: [
        { q: "Video එකක් edit කරන්න කොච්චර කල් යනවද?", a: "Reel එකක් සාමාන්‍යයෙන් දවස් 1 – 2කින්, YouTube video එකක් දවස් 2 – 4කින් ඉවර කරලා දෙනවා." },
        { q: "Footage එවන්නේ කොහොමද?", a: "Google Drive link එකක් එවන්න, නැත්නම් WhatsApp එකෙන් එවන්න. Files ලොකු නම් Google Drive එක හොඳයි." }
      ]
    },
    {
      slug: "motion-graphics", cat: "creative", name: "Motion Graphics", anim: "timeline", pkgv: 2,
      icon: '<circle cx="12" cy="12" r="9"/><path d="M10 8.5v7l6-3.5z"/>',
      short: "Logo animations, intros, video ads",
      summary: "Logo animations, YouTube intros, video ads, promo videos.",
      intro: "ඔයාගේ logo එක චලනය වෙන animation එකක්, YouTube channel එකට intro එකක්, Facebook, Instagram වලට video ad එකක්. Text විතරක් තියෙන post එකකට වඩා ගොඩක් අයගේ ඇස නතර වෙනවා.",
      tags: ["Logo animation", "Intros", "Ads"],
      includes: [
        "Logo animations",
        "YouTube, video intros",
        "Video ads, promos (තත්පර 30 – 60)"
      ],
      prices: [{ creative: "motion", featured: true }, { creative: "promo" }],
      faq: [
        { q: "මගේ logo එකට intro එකක් හදලා දෙනවද?", a: "ඔව්. ඔයාගේ logo එක animate කරලා, video වල මුලට දාන්න ගැළපෙන තත්පර කීපයක intro එකක් හදලා දෙනවා." },
        { q: "Logo animation එකකට කොච්චර කල් යනවද?", a: "Logo animation එකකට දවස් 2 – 3ක් විතර. Video ad එකකට, promo එකකට තව දවස් කීපයක් යනවා." }
      ]
    },
    {
      slug: "ui-ux-design", cat: "creative", name: "UI/UX Design", anim: "uiux", pkgv: 2,
      icon: '<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/>',
      short: "Figma screens, prototypes, wireframes",
      summary: "App එකේ, website එකේ screens Figma එකෙන් design කරලා පෙන්නනවා. හදන්න පටන් ගන්න කලින්ම ඔයාට බලන්න පුළුවන්.",
      intro: "App එකක් හරි website එකක් හරි හදන්න කලින්, ඒක පේන්නේ කොහොමද කියලා Figma එකෙන් design කරලා පෙන්නනවා. Click කරලා බලන්න පුළුවන් prototype එකකුත් හදනවා. වෙනස්කම් තියෙනවා නම් ඒ වෙලාවෙම කියන්න, හදලා ඉවර වුණාට පස්සේ වෙනස් කරනවට වඩා ලේසියි.",
      tags: ["Figma", "Prototypes", "Wireframes"],
      includes: [
        "App, website screens Figma එකෙන්",
        "Wireframes, click කරලා බලන්න පුළුවන් prototypes",
        "හදන්න කලින්ම ඔයාට බලලා වෙනස්කම් කියන්න පුළුවන්",
        "Screens එක්ක logo එකත් එකට ගන්න පුළුවන්"
      ],
      prices: [{ design: "ready" }, { design: "ui", featured: true }, { design: "brand" }],
      faq: [
        { q: "Design price එක කොහොමද ගණන් වෙන්නේ?", a: "Screens design කරන්න app එකේ, website එකේ මිලට 20%ක් එකතු වෙනවා. Screens එක්ක logo එකත් ඕන නම් 20%යි {design:brand}යි." },
        { q: "Design එක මගේ ළඟ තියෙනවා නම්?", a: "Figma, XD design එකක් හරි screenshots හරි තියෙනවා නම් අපි ඒ විදියටම හදනවා. එතකොට design ගාස්තුවක් නෑ." }
      ]
    }
  ]
};
