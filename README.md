# 🎬 Hotstar Clone - Streaming Platform

A modern, responsive streaming platform clone built with **Next.js 14**, **React 18**, and **Tailwind CSS**. This project replicates the UI/UX of a popular streaming service and is fully deployable on Vercel.

## ✨ Features

- 🎨 Modern, dark-themed UI inspired by streaming platforms
- 📱 Fully responsive design (Mobile, Tablet, Desktop)
- ⚡ Built with Next.js 14 App Router for optimal performance
- 🎭 Dynamic content sections (Popular Shows, Latest Movies)
- 🔥 Hero banner with call-to-action buttons
- 🎯 Clean navigation bar with category links
- 🎨 Styled with Tailwind CSS utility classes
- 📦 Zero external dependencies for the UI

## 🚀 Quick Start

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Clone this repository:
```bash
git clone https://github.com/m8riix/hotstar-clone.git
cd hotstar-clone
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create required configuration files (see below)

4. Run the development server:
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Required Files

Before running the project, create these missing files:

### `app/globals.css`
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### `tailwind.config.js`
```js
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### `postcss.config.js`
```js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

### `next.config.js`
```js
module.exports = {
  reactStrictMode: true,
}
```

## 🌐 Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/m8riix/hotstar-clone)

### Manual Deployment Steps:

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Next.js settings
6. Click "Deploy"

Your site will be live in minutes! 🎉

## 📂 Project Structure

```
hotstar-clone/
├── app/
│   ├── page.js          # Homepage component
│   ├── layout.js        # Root layout (add this)
│   └── globals.css      # Global styles (add this)
├── public/              # Static assets (create this)
├── package.json         # Dependencies
├── tailwind.config.js   # Tailwind config (add this)
├── postcss.config.js    # PostCSS config (add this)
├── next.config.js       # Next.js config (add this)
└── README.md           # This file
```

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **UI Library:** React 18
- **Styling:** Tailwind CSS 3
- **Language:** JavaScript (ES6+)
- **Deployment:** Vercel

## 🎨 Customization

### Changing Colors
Edit the gradient colors in `app/page.js`:
- Hero section: `bg-gradient-to-r from-blue-900 to-purple-900`
- Show cards: `bg-gradient-to-br from-blue-500 to-purple-600`
- Movie cards: `bg-gradient-to-br from-pink-500 to-orange-600`

### Adding Real Content
Replace placeholder content in `app/page.js` with:
- API integration (TMDB, IMDb)
- Database connection (MongoDB, PostgreSQL)
- CMS integration (Sanity, Contentful)

## 📝 License

MIT License - feel free to use this project for learning and personal projects.

## ⚠️ Disclaimer

This is an educational project for learning purposes only. Not affiliated with or endorsed by any streaming platform.

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest new features
- Submit pull requests

## 📧 Contact

Created by [@m8riix](https://github.com/m8riix)

---

**Happy Coding! 🚀**
