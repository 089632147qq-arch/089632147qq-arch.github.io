# DreamStant Website

A responsive, single-page, multilingual (Japanese / Chinese / English) static website for GitHub Pages.

## Files
- `index.html` — page structure and content
- `style.css` — monochrome responsive design
- `script.js` — language switcher and mobile navigation

## Preview locally
Open `index.html` in a browser. No build tools or package installation are required.

## Publish with GitHub Pages
1. Create a **public** repository on GitHub, for example `dreamstant-website`.
2. Upload `index.html`, `style.css`, `script.js`, and this README to the repository root.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select branch `main` and folder `/ (root)`, then save.
6. Wait for GitHub Pages to publish the site. The address will be shown in the Pages settings.

## Before publishing
- Replace `Member 01` etc. with approved public display names and real roles.
- Replace the sample work titles, cover designs, and links with actual works.
- Replace `hello@example.com` with a contact address you are allowed to publish, or change it to social links.
- Review the Japanese, Chinese, and English copy.
- Do not publish private member information without their permission.

## Editing content
Search in `index.html` for the relevant section. Language-specific text is in the `translations` object in `script.js`. If you add a new text element that needs translation, add a `data-i18n="key"` attribute in HTML and the matching key to all three language dictionaries.
