# Harshad Jamdar — Portfolio

A personal portfolio site built with plain HTML, CSS and JavaScript (no build step, no dependencies), styled as an engineering "blueprint" drawing set.

## Files
- `index.html` — page structure and content
- `style.css` — all styling and animations
- `script.js` — scroll reveals, nav toggle, cursor coordinate readout

## Run locally
Just open `index.html` in a browser, or serve it locally:
```bash
python3 -m http.server 8000
```
Then visit `http://localhost:8000`.

## Deploy on GitHub Pages
1. Create a new repository on GitHub (e.g. `portfolio`).
2. Push these three files (`index.html`, `style.css`, `script.js`) to the root of the repository:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
3. On GitHub, go to **Settings → Pages**.
4. Under **Build and deployment**, set **Source** to `Deploy from a branch`, choose the `main` branch and `/ (root)` folder, then click **Save**.
5. Wait a minute, then your site will be live at:
   ```
   
   ```

## Customizing
- Update contact details and links inside the `#contact` section of `index.html`.
- Add new projects by duplicating a `.titleblock` article inside the `#projects` section.
- Colors, fonts and spacing are all controlled by CSS variables at the top of `style.css` (the `:root` block).
