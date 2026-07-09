# Marlowe & Oak — Interior Design Studio

A standalone React (Vite) frontend for an interior design studio site, with working
navigation between Home, About Us, Our Services, Book Us, Contact, Privacy Policy,
and Terms of Service — no backend required.

## Run it

1. Open this folder in VS Code.
2. Open a terminal (Terminal → New Terminal) and install dependencies:
   ```bash
   npm install
   ```
3. Start the dev server:
   ```bash
   npm run dev
   ```
4. Open the printed URL (usually `http://localhost:5173`) in your browser.

Every save in `src/App.jsx` hot-reloads automatically.

## Build for production

```bash
npm run build
```

Outputs a static site into `dist/`, ready to deploy to Netlify, Vercel, GitHub Pages, etc.

## Notes

- Images are pulled live from Unsplash, so an internet connection is needed while developing/viewing.
- Icons come from `lucide-react` (already listed in `package.json`).
