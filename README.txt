ALTITUDE SCAFFOLDING — WEBSITE (2026)
=====================================

A 6-page static site: plain HTML/CSS/JS, no framework, no build step.
Pages: index (Home), about, services, projects, gallery, contact.
Shared files: styles.css (all styling), script.js (all interactions),
and an img/ folder with the photos.

WHAT'S IN THIS VERSION
----------------------
- Real photos wired into the Home hero carousel, service cards, About,
  Services feature rows, the 9 Projects cards, and a new GALLERY page
  (filterable Film / Construction / Events, tap any image to enlarge).
- 17 images, optimised for web (~4 MB total) in the img/ folder.

ADDING MORE PHOTOS LATER
------------------------
1. Optimise them the same way (long edge ~1200-1600px, JPEG) and drop them
   into the img/ folder with clear names (e.g. construction-warehouse.jpg).
2. To add to the gallery, open gallery.html and copy one line, e.g.:
     <div class="g-item" data-cat="construction"><img src="img/your-photo.jpg" alt="Describe it"><span class="g-tag">Construction</span></div>
   Paste it among the others and change the src/alt/category. That's it.
3. Categories must be exactly: film, construction, or events.

PUBLISHING WITH GITHUB (GitHub Pages — free)
--------------------------------------------
1. Create a free account at github.com.
2. Create a new repository (e.g. "altitude-scaffolding"), set it Public.
3. Upload ALL the files in this folder (index.html, the other .html files,
   styles.css, script.js, and the whole img/ folder) — keep them together,
   index.html in the top level.
   (Easiest: on the repo page, "Add file" -> "Upload files" -> drag the lot in -> Commit.)
4. In the repo: Settings -> Pages -> under "Build and deployment",
   Source = "Deploy from a branch", Branch = main, Folder = / (root), Save.
5. Wait ~1 minute. Your live link appears at the top of that Pages screen,
   like:  https://YOUR-USERNAME.github.io/altitude-scaffolding/
   Share that link with your client.
6. To update later: edit/replace files in the repo (or re-upload) and commit;
   the live site refreshes automatically in a minute. Same link every time.

(Tip: if you connect this same GitHub repo to Netlify or Cloudflare Pages
instead, you get the same auto-publishing plus an easy custom domain later.)

CONTENT STILL TO CONFIRM (unchanged from before)
------------------------------------------------
- ADDRESS: using "10 Scheckter Road, Killarney Gardens, Cape Town 7441"
  (your Client Info Summary). The old contact draft said "3 Passtime Park,
  8 Clark Road" — confirm which is correct.
- STATS on the home page are placeholders: 150+ films, 2000+ projects,
  31+ years (est. 1995), 0 incidents. Confirm the real numbers.
- Founded year standardised to 1995 (stray "1993" lines corrected).
- Project CARD titles are my best guess from the photos (e.g. "One Piece
  (2023)", "Feature Film Dome Build", "Cement Silo Access"). Rename any
  that should match a specific job — edit the <h3> text in projects.html.
- EVENTS photography is thin (only a few event images existed), so the
  Events section/cards use grandstand + fete shots. Send more event photos
  any time and we'll strengthen it.
- The contact form shows a success message but doesn't email yet. On GitHub
  Pages (static), wire it to a free service like Formspree, or use Netlify
  Forms if you host on Netlify.

EDITING COLOURS / FONTS
-----------------------
All in the :root block at the top of styles.css (brand blue, orange, navy).
