# Hexora site එකට ඕන images

Images දාන්නේ **Admin → Website** එකෙන්. Upload කරද්දිම admin එක image එක හරි size එකට හදලා
WebP කරනවා (600 KB ට අඩුවෙන්). ඒ නිසා phone එකෙන් ගත්ත photo එකක් වුණත් කෙලින්ම upload කරන්න පුළුවන්.
Upload කළාට පස්සේ පහළ **Save කරන්න** එබුවම විතරයි site එකට යන්නේ.

> **පළවෙනි පාරට:** Images upload කරන්න කලින් Firebase rules update කරන්න ඕන.
> Firebase console → Firestore Database → Rules → repo එකේ `firestore.rules` file එකේ තියෙන ඔක්කොම paste කරලා **Publish**.
> (අලුත් කොටස `match /media/{id}`.)

---

## 1. දැන්ම ඕන (site එක හොඳට පේන්න)

| # | Image එක | කොහෙද පේන්නේ | Size (pixels) | Admin එකේ කොහෙන්ද දාන්නේ |
|---|---|---|---|---|
| 1 | **Work / project images** — ඔයා හදපු apps, websites, logos වල screenshots හරි designs | Home page → "අපි හදපු දේවල්" | **1200 × 900** (4:3) | Website → Home page → අපේ වැඩ → Project image |
| 2 | **Service images** (service එකකට එකක්, 12ක් දක්වා) — ඒ service එකේ හොඳම වැඩක screenshot / mockup එකක් | Service page එකේ උඩ, නමට දකුණු පැත්තේ | **1200 × 900** (4:3) | Website → Services → service එක තෝරලා → Service image |

Service image එකක් නැත්නම් ඒ page එකේ දැන් තියෙන 3D animation එක පේනවා — ඒ නිසා service images optional.
හැබැයි real work පෙන්නන එක customers ලාට විශ්වාසයක් දෙනවා.

Service image ඕන වෙන්න පුළුවන් services 12:
Mobile Apps · Websites · Business Systems · Backend & Admin Panel · AI Features & Automation · Maintenance & Hosting ·
Logo & Branding · Social Media & Print · Photo Editing · Video Editing · Motion Graphics · UI/UX Design

## 2. Offers / promotions තියෙනකොට

| # | Image එක | කොහෙද පේන්නේ | Size (pixels) | Admin එකේ කොහෙන්ද දාන්නේ |
|---|---|---|---|---|
| 3 | **Home banner — computer** | Home page එකේ උඩ කොටසට පහළින්, පළල banner එකක් | **1920 × 720** (16:6) | Website → Images → Home page banner |
| 4 | **Home banner — phone** (optional) | Phone එකේ banner එක (කොටුවක්) | **1080 × 1080** (1:1) | Website → Images → Banner image (phone) |

Banner tips:
- වැදගත් text එක image එකේ **මැදට** දාන්න. Screen එක අනුව දෙපැත්තෙන් ටිකක් කැපෙන්න පුළුවන්.
- Phone banner එකක් නැත්නම් phone එකෙත් computer banner එකම පේනවා (කුඩාවට). Text තියෙන banner එකකට phone version එකක් හදන්න.
- "Image එකේ තියෙන දේ (alt text)" කොටුවේ banner එකේ ලියලා තියෙන text එක ලියන්න.
- "Click කළාම යන තැන" එකට `start-project.html` (form එක), `service.html?s=websites` වගේ page එකක් හරි `https://…` link එකක් දාන්න පුළුවන්.
- Banner එක අයින් කරන්න "Banner එක පෙන්නන්න" ටික් එක අයින් කරලා Save කරන්න.

## 3. Customers ලාගේ reviews

| # | Image එක | කොහෙද පේන්නේ | Size (pixels) | Admin එකේ කොහෙන්ද දාන්නේ |
|---|---|---|---|---|
| 5 | **Customer photo / business logo** (optional) | Home page → "අපිත් එක්ක වැඩ කරපු අය", නම ළඟ රවුමක | **400 × 400** (කොටුවක්) | Website → Home page → Customers කියන දේ → Customer ගේ photo |

Customer ගේ අවසරය තියෙනවා නම් විතරයි photo එක, නම, review එක දාන්න.

## 4. Admin එකෙන් මාරු කරන්න බැරි ඒවා (code එකේ files)

මේවා Google, Facebook, WhatsApp වගේ තැන් කියවන්නේ site එකේ files වලින් කෙලින්ම. ඒ නිසා මේවා මාරු කරන්න ඕන නම්
image එක එවන්න — repo එකේ file එක මාරු කරලා දෙන්නම්.

| # | Image එක | දැන් තියෙන file එක | Size (pixels) |
|---|---|---|---|
| 6 | **Share image** — WhatsApp / Facebook එකේ link එක share කරද්දී පේන එක | `assets/brand/hexora-og.jpg` | **1200 × 630** |
| 7 | **Logo** | `assets/brand/hexora-logo.png` | Transparent PNG, අඩුම 1200 px පළල |
| 8 | **Browser tab icon / app icon** | `assets/brand/` icons | **512 × 512** transparent PNG (logo mark එක විතරක්) |

දැන් තියෙන share image, logo සහ icons Hexora brand එකට හදලා තියෙන්නේ. අලුත් ඒවා ඕන නම් විතරක් එවන්න.

---

## Image එකක් හොඳට පේන්න

- **Format:** JPG, PNG හරි WebP. (Upload කරද්දි admin එක WebP කරනවා.)
- **Size:** උඩ කියපු size එකට වඩා **ලොකු** එකක් දෙන්න. පොඩි image එකක් ලොකු කරද්දී blur වෙනවා.
- **Screenshots:** App screenshots නම් phone mockup එකක් ඇතුළේ දාලා 1200 × 900 කොටුවට හදන එක ලස්සනයි.
- **අඳුරු background:** Site එක කළු / navy නිසා කළු background එකේ හොඳට පේන images හොඳයි.
- **කෙනෙක්ගේ photo, logo හරි වැඩක්:** අයිතිකාරයාගේ අවසරය ඇතුව විතරයි.
- Use වෙන image එකක් මකන්න බෑ. මුලින් ඒක use කරන තැනින් අයින් කරන්න, Save කරන්න, ඊට පස්සේ Website → Images එකෙන් මකන්න.
