# 🚀 Keen Keeper

## 📌 Description
Keen Keeper is a modern web application designed to help users manage and track their connections efficiently. It provides an organized timeline, status tracking, and filtering features to keep important relationships active and up-to-date.

---

## 🛠️ Tech Stack

- **React 19** with React Router v7
- **Vite 8** (build tool)
- **Tailwind CSS v4** + **DaisyUI**
- **Recharts** for stats visualizations
- **React Toastify** for notifications
- Context API for state management

---

## ✨ Key Features

- 📊 Dynamic Timeline with filtering (All / Active / Inactive)
- 👥 Contact management with status tracking
- ⚡ Responsive and user-friendly UI design

---

## 📷 Preview

Live Site: https://lucent-malabi-05e42d.netlify.app

---

## 📦 Getting Started

### Prerequisites
- Node.js 18+
- npm

### Install & Run Locally

```bash
git clone https://github.com/kibriya41/keen-keeper.git
cd keen-keeper
npm install
npm run dev
```

### Build for Production

```bash
npm run build
```

The output will be in the `dist/` folder.

---

## 🌐 Deployment on Render

This project is configured for deployment on [Render](https://render.com) as a **Static Site**.

### Option A — Auto Deploy via `render.yaml` (Recommended)

1. Push this repo to GitHub.
2. Go to [Render Dashboard](https://dashboard.render.com/) → **New** → **Blueprint**.
3. Connect your repository — Render will detect `render.yaml` and configure everything automatically.

### Option B — Manual Setup on Render

| Setting | Value |
|---|---|
| **Service Type** | Static Site |
| **Build Command** | `npm install && npm run build` |
| **Publish Directory** | `dist` |

> SPA routing is handled by the `public/_redirects` file and the `render.yaml` rewrite rules — all routes correctly serve `index.html`.

---

## 📁 Project Structure

```
keen-keeper/
├── public/
│   ├── _redirects      # SPA routing fallback
│   ├── data.json       # Local data source
│   └── favicon.svg
├── src/
│   ├── component/      # Reusable UI components
│   ├── context/        # React Context providers
│   ├── hooks/          # Custom hooks
│   ├── layout/         # Root layout
│   ├── pages/          # Route-level pages
│   └── router/         # React Router config
├── render.yaml         # Render deployment config
└── vite.config.js
```
