# Citiscapes — spec-site preview

- **Suggested slug:** `citiscapes`
- **Target host (NOT live, do not claim it is):** citiscapes.capitalreconsulting.com
- **Site path:** `/workspace/previews/citiscapes/index.html`
- **Current public site:** https://citiscapesco.godaddysites.com/
- **One-liner:** Replaced the GoDaddy stock-fence brochure with a Denver neighborhood fence shop for Bill — custom vertical, horizontal, privacy, picket, and split-rail, click-to-call 720.233.5180, and a real split-rail job photo.

This folder is a static preview only. Do not deploy. Do not treat the target host as live. The host string does not appear on the customer-facing page.

## What changed vs their current site

Stripped the GoDaddy Website Builder chrome, cookie banner, empty Reviews block, subscribe widget, and stock fence photography used as if it were their work. Rebuilt one mobile-first page in slate navy / raw cedar / rust hardware (not walnut-stain, not landscaper green) around their published neighborhood line, the five fence types, Bill as sole proprietor, shop hours, and one compressed job-site photo they uploaded.

Headlines stay on their copy. We/us voice. Bill is first name only.

## Facts used (live pages only)

Fetched 2026-08-19 from https://citiscapesco.godaddysites.com/.

| Fact | Source |
| --- | --- |
| Brand **Citiscapes** | Header, contact block, footer |
| **Building in your neighborhood, because it's our neighborhood too.** | Homepage H1 / repeated hero |
| **Schedule your estimate today!** | Homepage |
| mailto subject **Build My Fence!** | Homepage Contact Us mailto |
| **Get a Custom Fence for your home!** | About Us |
| We work directly with you… style of your home, keep your pets safe, or spruce up your landscape — we can do it all | About Us |
| **Local and Family Owned** | About Us |
| **Bill** is the sole proprietor of this truly small and family owned business. In the industry for **over 10 years** | About Us |
| **Reliable, Honest, and On Time!** Direct access to the company owner | About Us |
| We customize **Vertical / Horizontal / Privacy / Traditional Picket** — from privacy to decorative | Photo Gallery |
| **Choose a Split Rail Fence** to accent your yard. Top quality lumber. Work closely with **Denver homeowners** | Photo Gallery |
| Customizing fences in the **Denver Metro** area for any design idea | Photo Gallery |
| Send us a message, or call us for a quote. We will get back to you as soon as possible to start the estimation process | Contact Us |
| Phone **720.233.5180** / `tel:+17202335180` | Contact Us |
| Email **Bill@CitiScapesCO.com** | Contact Us (exact casing) |
| City **Denver, CO** | Contact Us |
| Hours **Monday – Friday: 8am – 5pm**; **Saturday & Sunday: By Appointment** | Contact Us |
| Facebook `facebook.com/CitiScapesLLC` · Instagram `@citiscapes_denver` | Social |
| Quote form fields Name, Email*, Phone | Get a Quote |
| **Copyright © 2021 Citiscapes** | Footer |
| Job photo **IMG_1457.JPG** (split-rail going in) | Photo Gallery upload |

## Facts deliberately omitted

- **Last name** — not printed on the live page. First name only (Bill).
- **Street address, prices, license, insurance, crew size** — none published.
- **Irrigation, landscaping, snow** — appear on Thumbtack / Angi / LinkedIn, not on the live site. Not used.
- **GoDaddy stock** — `isteam/stock/84149` (hammer / dog-ear picket) and hero **Fence 1.JPG** (horizontal fence with tropical foliage, not a Denver job). Not used as their work.
- **Empty Reviews** block — no reviews printed on the page.
- **Subscribe / cookie / reCAPTCHA / Powered by GoDaddy** — builder chrome.
- **Any claim this preview is live** at citiscapes.capitalreconsulting.com.

## Pages

- `index.html` — one mobile-first page: neighborhood hero, Bill / family shop, five fence types, hours ticket, click-to-call + mailto form.

JSON-LD is `HomeAndConstructionBusiness` with only verified fields (name, phone, email, Denver CO, hours Mon–Fri 8–5, Facebook, Instagram, live URL). No last name, street, geo, or reviews.

Quote form opens a mail draft to Bill@CitiScapesCO.com with subject **Build My Fence!**. It does not post to GoDaddy.

## Images

- **One photo:** `assets/fence.jpg` — their gallery upload `IMG_1457.JPG` (split-rail install in progress: posts, rails, post-hole dirt, sawhorses). Cropped landscape, 1200×675 JPEG, **191 KB**. Same file for web. No fat original kept in this folder. No 1MB+ files.
- `assets/favicon.svg` — CS + slat mark, not a photo.

## Blockers

- No last name or street address on the live page.
- No published price list.
- Reviews section is empty.
- Did not contact the business. Did not deploy. Did not send email.
