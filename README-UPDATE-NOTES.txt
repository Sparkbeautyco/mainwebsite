SPARK BEAUTY CO. — EASY CONTENT UPDATES
=======================================

1) HOME PAGE / INSTAGRAM PHOTOS
--------------------------------
The website always shows six image tiles.

Manual mode:
Replace these files in /assets with new square photos, keeping the same filenames:
- instagram-1.jpg
- instagram-2.jpg
- instagram-3.jpg
- instagram-4.jpg
- instagram-5.jpg
- instagram-6.jpg

You do NOT need to edit the HTML when replacing those six images.

Automatic mode:
The included GitHub workflow can refresh instagram-feed.json from Instagram.
Add these repository secrets in GitHub:
- INSTAGRAM_ACCESS_TOKEN
- INSTAGRAM_USER_ID

The workflow is located at:
.github/workflows/update-instagram.yml

If the API or workflow is unavailable, the manual photos stay visible automatically.


2) COMPLEXION GALLERY
----------------------
The website has eight photo slots. Replace these branded placeholder files with APPROVED Spark Beauty Co. client photos:

Light:
- complexion-light-1.jpg
- complexion-light-2.jpg
- complexion-light-3.jpg

Medium:
- complexion-medium-1.jpg
- complexion-medium-2.jpg

Deep:
- complexion-deep-1.jpg
- complexion-deep-2.jpg
- complexion-deep-3.jpg

Keep the same filenames and the filters will continue to work automatically.
Portrait-oriented images work best. Recommended crop: 4:5.

IMPORTANT: The included gallery files are intentionally branded placeholders rather than fake or stock client work.


3) PARTNER LOGOS
-----------------
Current partner area includes:
- Silly George (local asset)
- Herbtropia (official image loaded from herbtropia.com)

The partner grid automatically reorganizes as more logos are added.
There is a commented example inside index.html showing the exact block to copy for a future partner.


4) PARTNERSHIP FORM EMAIL
--------------------------
The partnership form uses Web3Forms.

The form currently contains this access key:
c75219bf-8dde-4354-bad8-b0219d82bb77

Web3Forms sends submissions to the email address associated with that access key.
For submissions to arrive directly at sparkbeautycoaz@gmail.com, that must be the email address that was used/verified when this Web3Forms access key was created.

The form subject is:
New Partnership Inquiry — Spark Beauty Co.

The visitor's email is collected so Spark Beauty Co. can reply to the inquiry.
