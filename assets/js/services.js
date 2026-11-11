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
  categories: {
    dev: {
      label: "Development",
      note: "Apps, websites සහ business systems",
      steps: [
        { t: "Idea එක කියන්න", d: "Project form එක fill කරන්න. Estimate price එක සහ කල් යන වෙලාව එකපාර පෙන්නනවා." },
        { t: "Free call & quote", d: "Details කතා කරලා fixed quote එකක් සහ timeline එකක් ඔයාට එවනවා." },
        { t: "Build + test versions", d: "කොටස් වලට හදලා test version එවනවා. වෙනස් කරන්න ඕන ඒවා එතකොට කියන්න පුළුවන්." },
        { t: "Launch & support", d: "App එක store එකට, site එක domain එකට. ඊට පස්සේ {support} එකක් bug fixes free." }
      ]
    },
    creative: {
      label: "Design & Video",
      note: "Logo, branding, photo editing සහ video editing",
      steps: [
        { t: "Brief එක", d: "මොකද ඕන, colours, examples කියන්න. Photos / footage Google Drive හරි WhatsApp එකෙන් එවන්න." },
        { t: "Draft එක", d: "වැඩ පටන් අරන් මුල් draft එක හරි concepts පෙන්නනවා." },
        { t: "Revisions", d: "ඔයාට ඕන වෙනස් කරලා දෙනවා." },
        { t: "Final files", d: "Logo, design, video files ඔක්කොම full quality වලින් ඔයාට." }
      ]
    }
  },

  /* Added to the end of every service's FAQ */
  commonFaq: [
    { q: "Payment කරන්නේ කොහොමද?", a: "වැඩ පටන් ගන්න {advance} advance, ඉතුරු ටික deliver කරද්දී, bank transfer එකෙන්. ලොකු projects milestones වලට කඩලා ගෙවන්න පුළුවන්." },
    { q: "ඉක්මනටම ඕන නම්?", a: "Project form එකේ Speed එක \"Urgent\" කළාම price එකට +{urgent} ක් එකතු වෙනවා, වැඩ ඉක්මනට ඉවර කරනවා." }
  ],

  /* ---------------- Home page (index.html): process steps and FAQ ----------------
     Edited from the admin panel -> Home page. In the text, {support} and {advance} become the
     free-support period and the advance percent from the price settings. */
  home: {
    steps: [
      { time: "විනාඩි 2", t: "Idea එක කියන්න", d: "Project form එක fill කරන්න. Estimate price එක සහ කල් යන වෙලාව එකපාර පෙන්නනවා." },
      { time: "දවස් 1 – 2", t: "Free call & quote", d: "Details කතා කරලා fixed quote එකක් සහ timeline එකක් ඔයාට එවනවා." },
      { time: "දවස් 1 – 7", t: "Design preview", d: "Code කරන්න, edit කරන්න කලින් draft එක පෙන්නනවා. වෙනස් කරන්න ඕන ඒවා එතකොට කියන්න පුළුවන්." },
      { time: "Project එක අනුව", t: "Build + updates", d: "Apps කොටස් වලට හදලා test version එවනවා. Design සහ video වලට revisions දෙනවා." },
      { time: "Delivery", t: "Launch & delivery", d: "App එක store එකට, site එක domain එකට. Logo, design, video files ඔක්කොම full quality වලින් ඔයාට." },
      { time: "ඊට පස්සේ", t: "Support", d: "{support} එකක් free bug fixes. ඊට පස්සේ monthly maintenance plan එකක් ගන්න පුළුවන්." }
    ],
    faq: [
      { q: "Project එකක් ඉවර කරන්න කොච්චර කල් යනවද?", a: "Logo එකකට දවස් 3ක් විතර, reel එකකට දවස් 1 – 2ක්. Landing page එකකට දවස් 3 – 5ක්, WordPress site එකකට සති 3 – 4ක්, Basic Android app එකකට දවස් 5 – 7ක්, Firebase app එකකට සති 3 – 5ක්, ලොකු systems වලට මාස 2 – 3ක් යන්න පුළුවන්. හැම package එකකම time එක පෙන්නනවා." },
      { q: "පටන් ගන්න මට මොකද ඕන?", a: "ඔයාගේ idea එක විතරයි. මොකද ඕන, කවුද use කරන්නේ කියලා කියන්න. ඔයාට කැමති apps, logos, videos තියෙනවා නම් ඒවත් එවන්න. Design සහ technical වැඩ ඔක්කොම අපි කරනවා." },
      { q: "Play Store / App Store එකට දාන්න පුළුවන්ද?", a: "ඔව්, වෙනම publishing service එකක් විදියට. Listing එක, screenshots, builds හදලා ඔයාගේ developer account එකෙන් publish කරනවා. එතකොට app එක ඔයාගේ නමින් තියෙන්නේ. Google USD 25 එකපාරයි, Apple USD 99 අවුරුද්දට (ඒ fees ඔයාගේ). App packages 01 – 05 Android only." },
      { q: "Package price එකට hosting / domain / Firebase fees include ද?", a: "නෑ. App, website සහ backend package prices development charges විතරයි (fixed LKR). Hosting, domain, Firebase / Supabase / database usage, email, PayHere fees, Google / Apple developer accounts ඕන වුණොත් ඔයාගේ accounts වලින් වෙනම. Basic / Standard apps වලටයි Basic / Standard websites වලටයි server එකක් ඕනම නෑ." },
      { q: "Source code එක මට ලැබෙනවද?", a: "ඔව්. Final payment එක කළාම full source code එක සහ project එකේ logins ඔක්කොම ඔයාට දෙනවා." },
      { q: "Launch කළාට පස්සේ මොකද වෙන්නේ?", a: "දවස් 30ක් agreed scope එකේ bug fixes free. ඊට පස්සේ monitoring, updates, backups review, පොඩි edits වලට මාසික maintenance plan එකක් (Basic Website Care LKR 5,500 / මාසයට ඉඳන්) ගන්න පුළුවන් — hosting / cloud fees වෙනම." },
      { q: "Logo එකකට revisions කීයක් දෙනවද?", a: "Concepts 3ක් පෙන්නනවා. ඔයාට කැමති එක revisions 3ක් වෙනකන් free. Final files PNG, JPG, SVG, PDF විදියට දෙනවා, print වලටයි online වලටයි දාන්න පුළුවන්." },
      { q: "Video editing වලට footage එවන්නේ කොහොමද?", a: "Google Drive link එකක් හරි WhatsApp එකෙන් එවන්න පුළුවන්. Reel එකක් usually දවස් 1 – 2කින්, YouTube video එකක් දවස් 2 – 4කින් deliver කරනවා." },
      { q: "Payment කරන්නේ කොහොමද?", a: "වැඩ පටන් ගන්න {advance} advance, ඉතුරු ටික deliver කරද්දී, bank transfer එකෙන්. ලොකු projects milestones වලට කඩලා ගෙවන්න පුළුවන්." }
    ]
  },

  list: [
    /* ---------------- Development ---------------- */
    {
      slug: "mobile-apps", cat: "dev", name: "Mobile Apps", anim: "phone", pkgv: 2,   // pkgv: this text goes with the approved package list (config.js packagesVersion); an older saved copy is replaced
      icon: '<rect x="6" y="2" width="12" height="20" rx="2.5"/><path d="M11 18h2"/>',
      short: "Android apps Flutter වලින් · LKR 14,000 ඉඳන්",
      summary: "Flutter වලින් හදන Android apps. LKR 14,000 ඉඳන් fixed price packages 5ක්, ලොකු projects වලට custom quote (iOS / Web එක්ක).",
      intro: "Order, booking, delivery, class වගේ ඔයාගේ business එකට ඕන Android app එක Flutter වලින් හදනවා. Package 01 – 05 Android only; iOS, Web, ලොකු systems Custom package එකෙන් quote කරනවා.",
      tags: ["Flutter", "Android", "Firebase"],
      packages: true,
      includes: [
        "Fixed LKR development price (dollar rate එකට වෙනස් වෙන්නේ නෑ)",
        "Package එකේ කියලා තියෙන screens, features විතරයි. ඊට වැඩි දෙයක් ඕන නම් වෙනම quote එකක්",
        "Android only (Package 01 – 05). iOS / Web Custom එකෙන්",
        "Test APK, revisions, දවස් 30ක් bug-fix support",
        "{advance} advance, final payment එකෙන් පස්සේ full source code එක ඔයාට",
        "Firebase usage, hosting, domain, PayHere fees, Google / Apple accounts වෙනම (ඔයාගේ accounts වලින්)"
      ],
      prices: [],
      faq: [
        { q: "App එකක් හදන්න කොච්චර කල් යනවද?", a: "Basic app එකකට දවස් 5 – 7ක්, Standard එකකට සති 2 – 3ක්, Firebase app එකකට සති 3 – 5ක්, Business app එකකට සති 6 – 9ක්, Premium එකකට සති 10 – 14ක් විතර. Content, approvals, accounts වෙලාවට ලැබුණොත්." },
        { q: "Screen එකක් කියන්නේ මොකක්ද?", a: "App එකේ වෙන වෙනම page එකක් (Ex: Login, Home, Cart, Profile). හැම package එකකම screens ගණනක් තියෙනවා (3, 5, 8, 12, 20). ඊට වැඩි screens හෝ package එකේ නැති features ඕන නම් වෙනම quote එකක් දෙනවා." },
        { q: "iPhone (iOS) app එකක් හදන්න පුළුවන්ද?", a: "Package 01 – 05 Android only. iOS හෝ Web version එකක් ඕන නම් Custom App Development (LKR 299,000 ඉඳන්) එකෙන් scope එකට quote කරනවා. Apple developer account එක (USD 99 / අවුරුද්දට) ඔයාගේ." },
        { q: "Price එකට hosting / Firebase / Play Store fees include ද?", a: "නෑ. Package price එක development charge එක විතරයි. Firebase / database usage, hosting, domain, PayHere merchant fees, Google developer account (USD 25 එකපාරයි) ඔයාගේ accounts වලින් වෙනම. Basic සහ Standard apps වලට server එකක් ඕනම නෑ." },
        { q: "Play Store එකට දාන්න පුළුවන්ද?", a: "ඔව්, වෙනම publishing service එකක් විදියට. Listing එක, screenshots, builds හදලා ඔයාගේ developer account එකෙන් publish කරනවා — app එක ඔයාගේ නමින්. Google USD 25 එකපාරයි (Google ට)." },
        { q: "Quote එකක් ගන්න මොනවද කියන්න ඕන?", a: "Business එක, package එක, screens ගණන සහ ඒවායේ නම්, users / roles (customer, staff, admin), save කරන data (Ex: products, orders), uploads (photos / files, කීයක්), payments, notifications, external APIs, දැනට තියෙන Firebase / Play Store / domain accounts, content ලැබෙන දවස සහ ඕන දවස. Project form එකේ Idea එකේ මේවා ලියන්න, call එකෙන් ඉතුරු ටික අහනවා." },
        { q: "Package එකේ නැති feature එකක් ඕන නම්?", a: "ඒකට වෙනම ලිඛිත quote එකක් (change request) දෙනවා. Package එකේ දැනටම include දෙයකට දෙපාරක් ගණන් වෙන්නේ නෑ. Scope එක package එකට වඩා ගොඩක් ලොකු නම් ඊළඟ package එක හෝ Custom එක recommend කරනවා." },
        { q: "Urgent ඕන නම්?", a: "App packages වලට automatic urgent charge එකක් නෑ. ඉක්මනට ඕන නම් form එකේ Speed එක Urgent කරන්න — පුළුවන්ද කියලා බලලා, ඕන නම් ගණන call එකෙන් confirm කරනවා." }
      ]
    },
    {
      slug: "websites", cat: "dev", name: "Websites", anim: "browser", pkgv: 3,   // pkgv: this text goes with the approved website package list
      icon: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M7 6.5h.01M10 6.5h.01"/>',
      short: "Landing page, WordPress site, online shop · LKR 10,000 ඉඳන්",
      summary: "Landing pages, business sites, WordPress CMS sites සහ WooCommerce online shops. LKR 10,000 ඉඳන් fixed price packages, phone එකේ ලස්සනට පේන, Google එකේ හොයාගන්න පුළුවන්.",
      intro: "ඔයාගේ business එක online ගෙනියන්න website එකක්: එක page landing site එකක ඉඳන් WordPress CMS site එකක් සහ online shop එකක් වෙනකන්. Package එකේ කියලා තියෙන pages, items විතරයි — ඊට වැඩි දෙයක් ඕන නම් වෙනම quote එකක්.",
      tags: ["Static", "WordPress", "WooCommerce"],
      packages: true, pkgCat: "web", pkgKeys: ["web-basic", "web-standard", "web-professional", "web-ecommerce"],
      includes: [
        "Fixed LKR development price (dollar rate එකට වෙනස් වෙන්නේ නෑ)",
        "Phone, tablet, computer හැම එකකම ලස්සනට පේන design",
        "Basic SEO, sitemap, HTTPS setup",
        "Domain / hosting setup — ඒ fees ඔයාගේ accounts වලින් වෙනම",
        "Revisions (package එක අනුව 1 – 2), දවස් 30ක් bug-fix support",
        "{advance} advance, final payment එකෙන් පස්සේ source files ඔයාට"
      ],
      prices: [],
      faq: [
        { q: "Website එකක් හදන්න කොච්චර කල් යනවද?", a: "Basic landing page එකකට දවස් 3 – 5ක්, Standard site එකකට දවස් 10 – 15ක්, WordPress site එකකට සති 3 – 4ක්, online shop එකකට සති 5 – 7ක් විතර — ඔයාගේ content (text, photos) වෙලාවට ලැබුණොත්." },
        { q: "Domain එක සහ hosting එක ගණන් වලට include ද?", a: "Setup එක අපි කරනවා, ඒත් fees ඔයාගේ: domain අවුරුද්දකට (.com.lk LKR 1,000 වගේ), hosting ඕන නම් (Basic / Standard sites වලට free static hosting ඇති; WordPress / shop වලට WordPress hosting plan එකක් — Ex: USD 39 ඉඳන් අවුරුද්දට). Lifetime free hosting කියලා එකක් නෑ." },
        { q: "Pages වැඩි ඕන නම්? Online payments ඕන නම්?", a: "Package එකේ limits (pages, items, products) පැනුවොත් වෙනම quote එකක් හෝ ඊළඟ package එක. Online payments (PayHere), cart, customer accounts E-commerce package එකේ. Login, roles, dashboards ඕන නම් Business Systems බලන්න." },
        { q: "Ongoing maintenance?", a: "දවස් 30 bug-fix support එකට පස්සේ updates, security patches, content changes වලට වෙනම maintenance plan එකක් (Maintenance & Hosting බලන්න)." }
      ]
    },
    {
      slug: "business-systems", cat: "dev", name: "Business Systems", anim: "dashboard", pkgv: 3,
      icon: '<rect x="3" y="3" width="7" height="9" rx="1.5"/><rect x="14" y="3" width="7" height="5" rx="1.5"/><rect x="14" y="12" width="7" height="9" rx="1.5"/><rect x="3" y="16" width="7" height="5" rx="1.5"/>',
      short: "Class, stock, appointment systems, custom portals",
      summary: "Login, roles, database සහ reports එක්ක business web systems: class records, stock, appointments, customer requests. ලොකු portals (student / employee / multi-store) custom quote එකෙන්.",
      intro: "ඔයාගේ business එකේ වැඩ computer එකෙන් හරි phone එකෙන් හරි කරන්න පුළුවන් web system එකක්: login, user roles, database, dashboard, reports. Advanced Business Web System package එක fixed price; ලොකු portals වලට Custom quote.",
      tags: ["Dashboards", "User roles", "Supabase"],
      packages: true, pkgCat: "web", pkgKeys: ["web-advanced", "web-custom"],
      includes: [
        "Login, roles (Admin / Staff / Viewer), database (Supabase PostgreSQL)",
        "Dashboard, reports / charts, CSV export",
        "Business workflow එකක් (Ex: class records, appointments, stock, requests)",
        "ඕන device එකක වැඩ කරනවා",
        "Admin training, revisions 3ක්, දවස් 30ක් bug-fix support",
        "Database / hosting usage ඔයාගේ accounts වලින් වෙනම (Supabase Pro USD 25 / මාසයට ඉඳන්)"
      ],
      prices: [],
      faq: [
        { q: "System එකක් හදන්න කොච්චර කල් යනවද?", a: "Advanced Business Web System එකකට සති 8 – 12ක් විතර. Custom portals වලට project එක අනුව, quote එකේ timeline එක." },
        { q: "Admin panel එක වෙනම ගෙවන්න ඕනද?", a: "නෑ. Dashboard / admin එක package එකේම include (modules 3, reports 2 වගේ limits එක්ක). ඊට වැඩි modules, workflows ඕන නම් වෙනම quote එකක්." },
        { q: "POS, accounting, payroll වගේ ඒවා?", a: "ඒවා Advanced package එකේ include නෑ — Custom Web Portal (LKR 399,000 ඉඳන්) එකෙන් scope එකට quote කරනවා." },
        { q: "මගේ staff එකට use කරන විදිය කියලා දෙනවද?", a: "ඔව්. Admin training පැය 1ක් package එකේ include. ලොකු team එකකට වැඩි training ඕන නම් add කරන්න පුළුවන් ({extra:training})." }
      ]
    },
    {
      slug: "backend-admin", cat: "dev", name: "Backend & Admin Panel", anim: "backend", pkgv: 4,   // pkgv: this text goes with the approved backend package list
      icon: '<ellipse cx="12" cy="5.5" rx="8" ry="3"/><path d="M4 5.5v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6M4 11.5v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/>',
      short: "Existing app / site එකට Firebase backend + admin panel",
      summary: "ඔයාගේ දැනට තියෙන app එකට හෝ site එකට secure login, Firestore database සහ web admin panel එකක්. LKR 29,000 ඉඳන් fixed packages 4ක්, custom backends quote එකෙන්.",
      intro: "ඔයාගේ දැනට තියෙන app එකට හෝ website එකට Firebase backend එකක් (email / password login, database, security rules) සහ web admin panel එකක්. Package එකේ කියලා තියෙන modules, admin views, roles විතරයි — ඊට වැඩි දෙයක් ඕන නම් වෙනම quote එකක්. අලුත් app / site එකක් ඕන නම් Mobile Apps / Websites packages බලන්න.",
      tags: ["Firebase", "Firestore", "Admin panel"],
      packages: true, pkgCat: "backend",
      includes: [
        "Fixed LKR development price (dollar rate එකට වෙනස් වෙන්නේ නෑ)",
        "Email / password Firebase login, Firestore data modules, security rules",
        "Web admin panel (package එක අනුව views 4 – 10, roles 2 – 4)",
        "ඔයාගේ existing app / site 1කට wire කරලා දෙනවා",
        "Revisions (package එක අනුව 1 – 3), දවස් 30ක් bug-fix support",
        "{advance} advance, final payment එකෙන් පස්සේ source code ඔයාට",
        "Firebase usage, Blaze billing (uploads / functions), hosting, domain ඔයාගේ accounts වලින් වෙනම"
      ],
      prices: [],
      faq: [
        { q: "මට දැනටමත් app / site එකක් තියෙනවා. ඒකට backend එකක් විතරක් ගන්න පුළුවන්ද?", a: "ඔව් — මේ packages හැදුවේ ඒකටම. Basic Firebase Backend (LKR 29,000) එකෙන් login + data module 1ක් ඔයාගේ existing app / site එකට wire කරනවා. Frontend එක integration-ready ද කියලා code audit එකකින් බලලා timeline එක confirm කරනවා." },
        { q: "මට backend එකක් තියෙනවා, admin panel එකක් විතරයි ඕන?", a: "Basic Web Admin Panel (LKR 49,000): ඔයාගේ වැඩ කරන Firebase backend එකට admin views 4ක් (dashboard, records list, add / edit, read-only users). Backend එකක් නැත්නම් Advanced package එක (backend + admin දෙකම) බලන්න." },
        { q: "Firebase Blaze කියන්නේ මොකක්ද? ගෙවන්න වෙනවද?", a: "Firebase ගේ pay-as-you-go billing plan එක. Photo / PDF uploads (Cloud Storage) සහ Cloud Functions වලට Blaze on කරලා ඕනමයි — Advanced සහ Professional packages වලට. Free allowance ඇතුළේ නම් bill එක 0 වෙන්නත් පුළුවන්, ඒත් guarantee නෑ; ඔයාගේ Google account එකේ billing + budget alerts set කරනවා. Basic packages 2ට Blaze ඕන නෑ." },
        { q: "OTP (SMS) login ගන්න පුළුවන්ද?", a: "Packages වල include නෑ (SMS fees + වෙනම setup). ඕන නම් වෙනම quote කරනවා. Email / password login හැම package එකකම include." },
        { q: "App එකයි admin panel එකයි දෙකම අලුතෙන් ඕන නම්?", a: "ඒකට Mobile Apps packages (Business / Premium එකේ admin එකත් එක්ක) හරි Custom Backend & Admin (LKR 349,000 ඉඳන්) හරි. දැනට තියෙන app එකකට backend / admin එකතු කරන එකයි මේ page එකේ packages." }
      ]
    },
    {
      slug: "ai-features", cat: "dev", name: "AI Features & Automation", anim: "chat", pkgv: 5,   // pkgv: this text goes with the approved AI package list
      icon: '<path d="M12 3l1.8 4.7 4.7 1.8-4.7 1.8L12 16l-1.8-4.7-4.7-1.8 4.7-1.8z"/><path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z"/>',
      short: "Chatbot, knowledge assistant, automation, AI agents",
      summary: "ඔයාගේ website එකට FAQ chatbot එකක ඉඳන් documents වලින් උත්තර දෙන assistant, human-approved content automation, business data assistant සහ multi-step AI agent දක්වා. LKR 40,000 ඉඳන් fixed packages 5ක්, enterprise AI custom quote.",
      intro: "ඔයාගේ දැනට තියෙන website, dashboard හෝ database එකට practical AI: approved FAQ වලින් උත්තර දෙන chatbot, ඔයාගේ documents වලින් උත්තර දෙන knowledge assistant, ඔයාගේ approval එකෙන් වැඩ කරන content automation, business data assistant, scoped AI agent. හැම package එකකම scope caps පැහැදිලිව — AI outcomes probabilistic, 100% accuracy guarantee එකක් නෑ.",
      tags: ["Chatbot", "RAG", "Automation", "Agents"],
      packages: true, pkgCat: "ai",
      includes: [
        "Fixed LKR one-time development / integration fee (dollar rate එකට වෙනස් වෙන්නේ නෑ)",
        "API keys server-side විතරයි — browser එකේ හෝ public code එකේ නෑ",
        "දන්නේ නැති ප්‍රශ්නයකට fallback; write actions වලට human approval",
        "Revisions (package එක අනුව 1 – 3), දවස් 30ක් bug-fix support",
        "{advance} advance, final payment එකෙන් පස්සේ source + workflow export",
        "AI tokens, File Search, Make / n8n plans, hosting, database ඔයාගේ accounts වලින් වෙනම"
      ],
      prices: [],
      faq: [
        { q: "Chatbot එක හැම ප්‍රශ්නයකටම හරියටම උත්තර දෙනවද?", a: "නෑ — AI probabilistic. Basic chatbot එක ඔයාගේ approved FAQ 30 වලින් උත්තර දෙනවා, දන්නේ නැති එකකට ඔයාගේ contact එකට යොමු කරනවා. Knowledge assistant එක ඔයාගේ documents වලින් evidence එක්ක උත්තර දෙනවා, source reference පෙන්නනවා; evidence නැති නම් fallback. 100% accuracy / hallucination-free guarantee එකක් දෙන්නේ නෑ." },
        { q: "AI API costs කීයද? Package එකේ include ද?", a: "නෑ. Package price එක development / integration fee එක විතරයි. AI tokens usage අනුව ඔයාගේ OpenAI account එකෙන් (Ex: knowledge answer එකක් ≈ USD 0.011, content draft එකක් ≈ USD 0.0055 — assumptions). Make / n8n plans, Cloudflare Workers, Supabase usage ඒ provider ට. Work පටන් ගන්න කලින් ඔයාගේ expected usage එකට infrastructure estimate එකක් දෙනවා." },
        { q: "Package එකක් එකකට උඩ එක ඔක්කොම include ද?", a: "නෑ — හැම package එකක්ම වෙනම scope එකක්. Ex: Advanced AI Business Assistant එකේ Knowledge Base එකේ 12-document RAG එක default නෑ; AI Agent එකේ multi-file ingestion නෑ. දෙකම ඕන නම් combined quote එකක්. Include වෙච්ච feature එකකට දෙපාරක් ගණන් වෙන්නේ නෑ." },
        { q: "AI එකට මගේ data / database එකට access දෙන්න ආරක්ෂිතද?", a: "Business Assistant / Agent packages වල allowlisted read tools විතරයි, approved entities වලට විතරයි; write action එකක් කරන්නේ authorized කෙනෙක් preview බලලා approve කළාමයි — server එක නැවත permissions check කරනවා, audit log එකක් ලියනවා. Roles server-side enforce; prompt එකකින් access වැඩි කරගන්න බෑ. Secrets public code එකේ නෑ." },
        { q: "WhatsApp chatbot එකක් / voice AI එකක් ගන්න පුළුවන්ද?", a: "මේ packages වල නෑ (WhatsApp Business verification, SMS / voice fees වෙනම). ඕන නම් Custom AI Solutions එකෙන් scope එකට quote කරනවා." }
      ]
    },
    {
      slug: "maintenance-hosting", cat: "dev", name: "Maintenance & Hosting", anim: "server", pkgv: 5,
      icon: '<path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.4-.6-.6-2.4z"/>',
      short: "Website, WordPress, shop, web app, VPS මාසික care",
      summary: "ඔබේ website, web app, database සහ VPS පද්ධති සඳහා මාසික නඩත්තු සේවා: monitoring, updates, backups review, පොඩි edits, reports. LKR 5,500 / මාසයට ඉඳන් plans 5ක් + custom SLA. Hosting, domain, cloud වියදම් වෙනම.",
      intro: "Launch කළාට පස්සේ ඔයාගේ website, WordPress site, online shop, web app හෝ VPS එක නිරෝගීව තියාගන්න මාසික plans. හැම plan එකකම scope එක (pages, plugins, products, edits, windows, triages) ලිඛිතව. Business-hours support; automated monitoring 24/7 උනත් staffed 24/7 support එකක්, uptime guarantee එකක් නෑ.",
      tags: ["Monitoring", "Updates", "Backups"],
      packages: true, pkgCat: "maint",
      includes: [
        "Hexora ගේ මාසික maintenance service fee එක විතරයි — hosting, VPS, cloud, backups, domain, plugins, gateway fees ඔයාගේ",
        "මාසික fee 100% prepaid (මාසය පටන් ගද්දී); cancel කරන්න දවස් 30 notice",
        "Scope caps පැහැදිලිව: edits / changes / triages ඊළඟ මාසෙට යන්නේ නෑ",
        "Business-hours support (initial response targets: plans 01 – 03 business days 2, 04 – 05 business day 1, custom SLA)",
        "Backup monitoring + verification — guaranteed restore එකක් නෙවෙයි; quarterly safe restore rehearsal (plans 04 – 06)",
        "අලුත් features, redesigns, hacked-site recovery, migrations වෙනම quote"
      ],
      prices: [],
      faq: [
        { q: "Hosting එක මේ price එකේ include ද?", a: "නෑ. Price එක Hexora ගේ මාසික maintenance / management fee එක විතරයි. Hosting, VPS, database, backup storage, domain renewal, premium plugins, payment gateway fees, monitoring tools ඔයාගේ accounts වලින් කෙලින්ම ගෙවනවා. Static site එකක් free tier එකක නම් hosting LKR 0 වෙන්න පුළුවන් — ඒත් maintenance fee එක ඒකෙන් free වෙන්නේ නෑ." },
        { q: "අලුතෙන් හදපු project එකට free support තියෙනවා නේද?", a: "ඔව් — development package එකක දවස් 30ක් agreed scope එකේ bug fixes free. ඒ bug එකකට maintenance plan එකෙන් දෙපාරක් ගණන් වෙන්නේ නෑ. Monitoring, backups, content updates වගේ warranty එකේ නැති දේවල් ඕන නම් ඒ කාලෙම plan එකක් පටන් ගන්න පුළුවන්." },
        { q: "24/7 support ද?", a: "Monitoring automated විදියට 24/7 වුණත්, support business hours වලදී (සඳුදා – සිකුරාදා 09:00 – 18:00 SL). Custom SLA එකේ P1 පැය 2 / P2 පැය 4 / P3 business day 1 — ඒවා initial response targets, resolution deadlines නෙවෙයි. 24/7 staffed coverage ඕන නම් staffing model එකකින් වෙනම quote." },
        { q: "Backups ගැන guarantee එකක් තියෙනවද?", a: "Backup jobs configure කරලා monitor කරනවා, status / retention review කරනවා, plans 04 – 06 වල quarter එකකට non-production restore rehearsal එකක් කරනවා. ඒත් restore / zero data loss / RTO / RPO guarantee එකක් standard prices වල නෑ — ඒවා ඔයාගේ paid storage, provider, architecture අනුව. WooCommerce store එකක් උඩින් පරණ DB එකක් blind restore කරන්නේ නෑ." },
        { q: "මගේ site එක දැනටම hacked / outdated නම්?", a: "Routine plan එකට කලින් initial technical audit + cleanup / update / migration වෙනම quote කරනවා. Plans හදලා තියෙන්නේ healthy systems වලට." },
        { q: "Web app එකයි VPS එකයි දෙකම තියෙනවා නම් plans දෙකක්ද?", a: "Combined quote එකක් — overlap වෙන monitoring / reporting වැඩ දෙපාරක් ගණන් කරන්නේ නෑ." }
      ]
    },

    /* ---------------- Design & Video ---------------- */
    {
      slug: "logo-branding", cat: "creative", name: "Logo & Branding", anim: "logo",
      icon: '<path d="M12 2l8.7 5v10L12 22l-8.7-5V7z"/><path d="M12 22V12M12 12l8.7-5M12 12L3.3 7"/>',
      short: "Logo, colours, fonts, business card, social kit",
      summary: "ඔයාගේ business එකට තමා කියන logo එකක්. Colours, fonts, business card සහ social media kit එකත් එක්කම.",
      intro: "ඔයාගේ business එකට තමා කියන logo එකක්. Branding kit එක ගත්තොත් colours, fonts, business card සහ social media kit එකත් ලැබෙනවා.",
      tags: ["Logo", "Brand kit", "Business card"],
      includes: [
        "Concepts 3ක්",
        "Revisions 3ක් free",
        "PNG, JPG, SVG, PDF files",
        "Branding kit: logo + colours + fonts",
        "Business card සහ social media kit (branding kit එකේ)"
      ],
      prices: [{ creative: "logo" }, { creative: "brand", featured: true }, { creative: "motion" }],
      faq: [
        { q: "Logo එකකට කොච්චර කල් යනවද?", a: "Logo එකකට දවස් 3ක් විතර. Branding kit එකකට ටිකක් වැඩි කාලයක් යනවා." },
        { q: "Logo එකකට revisions කීයක් දෙනවද?", a: "Concepts 3ක් පෙන්නනවා. ඔයාට කැමති එක revisions 3ක් වෙනකන් free. Final files PNG, JPG, SVG, PDF විදියට දෙනවා, print වලටයි online වලටයි දාන්න පුළුවන්." },
        { q: "Branding kit එකේ මොකද තියෙන්නේ?", a: "Logo එක, colours, fonts, business card design සහ social media kit." }
      ]
    },
    {
      slug: "social-print", cat: "creative", name: "Social Media & Print", anim: "social",
      icon: '<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M3 15l5-5 4 4 3-3 6 6"/><circle cx="16" cy="8" r="1.5"/>',
      short: "Posts, posters, flyers, YouTube thumbnails",
      summary: "Facebook / Instagram posts, posters, flyers, banners, YouTube thumbnails. Click කරන්න හිතෙන designs.",
      intro: "Facebook / Instagram posts, posters, flyers, banners සහ YouTube thumbnails. ඔයාගේ brand එකට ගැළපෙන, click කරන්න හිතෙන designs.",
      tags: ["Posts", "Posters", "Thumbnails"],
      includes: [
        "Facebook / Instagram posts",
        "Posters, flyers, banners (print වලටයි online වලටයි)",
        "YouTube thumbnails",
        "Monthly packs"
      ],
      prices: [{ creative: "social", featured: true }, { creative: "poster" }, { creative: "thumb" }],
      faq: [
        { q: "Monthly posts pack එකක් ගන්න පුළුවන්ද?", a: "ඔව්. මාසයට ඕන posts ගණන project form එකේ දාලා, ඒකට ගැළපෙන price එක එකපාර බලන්න පුළුවන්." },
        { q: "Print කරන්න පුළුවන් files ද දෙන්නේ?", a: "ඔව්. Posters, flyers, banners print වලටයි online වලටයි ගැළපෙන විදියට දෙනවා." }
      ]
    },
    {
      slug: "photo-editing", cat: "creative", name: "Photo Editing", anim: "photo",
      icon: '<path d="M3 7h3l2-3h8l2 3h3v13H3z"/><circle cx="12" cy="13" r="4"/>',
      short: "Retouch, background remove, product photos",
      summary: "Retouch, background remove, colour correction, product photos. Online shop එකට ලස්සන photos.",
      intro: "Retouch, background remove, colour correction සහ product photos. Online shop එකට, social media වලට ලස්සන photos.",
      tags: ["Retouch", "Background", "Product"],
      includes: [
        "Retouch",
        "Background remove",
        "Colour correction",
        "Online shop වලට product photos"
      ],
      prices: [{ creative: "photo", featured: true }],
      faq: [
        { q: "Photos එවන්නේ කොහොමද?", a: "Google Drive link එකක් හරි WhatsApp එකෙන් එවන්න පුළුවන්." },
        { q: "Photos ගොඩක් තියෙනවා නම්?", a: "Photo එකකට {creative:photo} විදියට ගණන් වෙනවා. Project form එකේ photo ගණන දාලා total එක එකපාර බලන්න." }
      ]
    },
    {
      slug: "video-editing", cat: "creative", name: "Video Editing", anim: "timeline",
      icon: '<rect x="2" y="5" width="15" height="14" rx="2"/><path d="M17 10l5-3v10l-5-3"/>',
      short: "YouTube, Reels, TikTok, Shorts, subtitles",
      summary: "YouTube videos, Reels, TikTok, Shorts. Cuts, subtitles, music, colour grading ඔක්කොම එක්ක.",
      intro: "YouTube videos, Reels, TikTok සහ Shorts. Cuts, subtitles, music සහ colour grading ඔක්කොම එක්ක edit කරලා දෙනවා.",
      tags: ["YouTube", "Reels", "Subtitles"],
      includes: [
        "Reels, TikTok, Shorts (තත්පර 60 වෙනකන්)",
        "YouTube videos (විනාඩි 10 වෙනකන්)",
        "Cuts, subtitles, music",
        "Colour grading"
      ],
      prices: [{ creative: "reel", featured: true }, { creative: "youtube" }],
      faq: [
        { q: "Video එකක් edit කරන්න කොච්චර කල් යනවද?", a: "Reel එකක් usually දවස් 1 – 2කින්, YouTube video එකක් දවස් 2 – 4කින් deliver කරනවා." },
        { q: "Video editing වලට footage එවන්නේ කොහොමද?", a: "Google Drive link එකක් හරි WhatsApp එකෙන් එවන්න පුළුවන්." }
      ]
    },
    {
      slug: "motion-graphics", cat: "creative", name: "Motion Graphics", anim: "timeline",
      icon: '<circle cx="12" cy="12" r="9"/><path d="M10 8.5v7l6-3.5z"/>',
      short: "Logo animations, intros, video ads",
      summary: "Logo animations, intros, video ads, promo videos. මේ site එකේ video එක වගේ animations.",
      intro: "Logo animations, intros, video ads සහ promo videos. මේ page එකේ video එක Hexora logo එක animate කරපු එකක්.",
      tags: ["Logo animation", "Intros", "Ads"],
      includes: [
        "Logo animations",
        "YouTube / video intros",
        "Video ads සහ promos (තත්පර 30 – 60)"
      ],
      prices: [{ creative: "motion", featured: true }, { creative: "promo" }],
      faq: [
        { q: "මේ site එකේ video එක වගේ එකක් හදලා දෙනවද?", a: "ඔව්. මේ video එක Hexora logo එක animate කරපු එකක්. ඔයාගේ logo එකටත් එහෙම intro එකක් හදන්න පුළුවන්." },
        { q: "Logo animation එකකට කොච්චර කල් යනවද?", a: "Logo animation එකකට දවස් 2 – 3 ක් විතර. Video ad / promo එකකට ටිකක් වැඩි කාලයක් යනවා." }
      ]
    },
    {
      slug: "ui-ux-design", cat: "creative", name: "UI/UX Design", anim: "uiux",
      icon: '<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/>',
      short: "Figma screens, prototypes, wireframes",
      summary: "App සහ website screens Figma එකෙන් design කරලා පෙන්නනවා. Code කරන්න කලින් ඔයාට බලන්න පුළුවන්.",
      intro: "App සහ website screens Figma එකෙන් design කරලා පෙන්නනවා. Code කරන්න කලින් ඔයාට බලලා වෙනස් කියන්න පුළුවන්.",
      tags: ["Figma", "Prototypes", "Wireframes"],
      includes: [
        "App සහ website screens Figma එකෙන්",
        "Wireframes සහ prototypes",
        "Code කරන්න කලින් ඔයාට බලන්න පුළුවන්",
        "Screens + logo design එකට ගන්න පුළුවන්"
      ],
      prices: [{ design: "ready" }, { design: "ui", featured: true }, { design: "brand" }],
      faq: [
        { q: "Design price එක කොහොමද ගණන් වෙන්නේ?", a: "Screens design කරලා දෙන්න නම් app / website project price එකට 20% ක් එකතු වෙනවා. Screens + logo design නම් 20% + {design:brand}." },
        { q: "Design එක මගේ ළඟ තියෙනවා නම්?", a: "Figma / XD design එකක් හරි screenshots තියෙනවා නම් ඒ විදියටම හදනවා. ඒකට design charge එකක් නෑ." }
      ]
    }
  ]
};
