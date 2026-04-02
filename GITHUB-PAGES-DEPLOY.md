# BridgeHelp GitHub Pages Deploy

This prototype is ready to publish as a static GitHub Pages site.

## Target

- Repository name: `bridgehelp-prototype`
- Recommended owner URL: `https://yunbeeeen.github.io/bridgehelp-prototype/mobile-app-v4.html`

## Files to publish

Upload the whole current folder so older prototype versions stay available too.

Important files for V4:

- `mobile-app-v4.html`
- `mobile-app-v4.css`
- `mobile-app-v4.js`
- `mobile-app-v4-config.js`
- `qrcode.js`
- `.nojekyll`

## GitHub Pages settings

1. Create a new public repository named `bridgehelp-prototype`.
2. Upload the files in this folder to the repository root.
3. Open repository `Settings -> Pages`.
4. Set `Build and deployment` to `Deploy from a branch`.
5. Select branch `main` and folder `/ (root)`.
6. Save and wait for the site to publish.

## Expected URL

After GitHub Pages finishes publishing, open:

`https://yunbeeeen.github.io/bridgehelp-prototype/mobile-app-v4.html`

The QR card in the desktop preview is already configured to point to that URL.

## Quick checks after deploy

1. Open the V4 URL on desktop.
2. Confirm styles and scripts load correctly.
3. Switch to `vi`, `ru`, and `uz` and confirm the category buttons are translated.
4. Scan the QR code with a phone and confirm the same V4 page opens.
