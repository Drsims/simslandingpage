# Dr Sims website

Static site (HTML, CSS, JavaScript). No build step, no dependencies.

## Files
- `index.html` – all page content (text, links, phone/email)
- `styles.css` – design; brand colours are the variables at the top (`--purple`, `--blue`, `--navy`)
- `main.js` – menu, active nav, contact form (opens WhatsApp). WhatsApp number is the `WA` variable at the top
- `logo.png` – logo (replace with a new file of the same name to change it)
- `vercel.json` – security headers (HTTPS, CSP, etc.)
- `404.html`, `robots.txt`

## Common edits
- Phone / WhatsApp: search `2348165401686` in index.html and main.js
- Email: search `drssimstechgadgets@gmail.com` in index.html
- Facebook link: replace the facebook.com/search URL in index.html
- Products: edit the four `<article class="card">` blocks in index.html

## Preview locally
Run `python3 -m http.server` in this folder and open http://localhost:8000

## Deploy
- Vercel: drag the folder into vercel.com/new, or run `npx vercel --prod`
- GitHub: push this folder to a repo, then import the repo in Vercel for automatic deploys

## Note on the CSP
The security policy blocks inline scripts/styles and external resources. If you add a new script, font or image host, add it to the Content-Security-Policy in vercel.json.
