# ⚛️ React Project

A modern React project setup with Vite for blazing-fast development 🚀.

---

## 🛠 How to Setup

### ✅ 1. Install Node.js
Make sure you have **Node.js** installed on your system.  
👉 [Download Node.js](https://nodejs.org/) if you don’t have it already.

---

### ✅ 2. Create a React App with Vite

Run the following command in your terminal to scaffold a new project:

```bash
npm create vite@latest
cd your-project-name
npm install
npm run dev
```

## Your local hosting is running on :-
### 🌐 http://localhost:5173

---

## 🎨 Setting up Tailwind CSS (React + Vite)

Follow these steps to set up **Tailwind CSS** with React:  

---

## ✅ 1. Install Tailwind CSS

Run the following commands in your project directory:  

```bash
# Install Tailwind with PostCSS and Autoprefixer
npm install -D tailwindcss postcss autoprefixer

# If you face issues with the latest version, use a stable version
npm install -D tailwindcss@3.4.17

# Initialize Tailwind config
npx tailwindcss init -p
```

## ✅ 2. Configure Tailwind CSS
Edit your tailwind.config.js file and update it as below:

```bash
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
## ✅ 3. Add Tailwind to CSS
In your src/index.css, add the following:

```bash
@tailwind base;
@tailwind components;
@tailwind utilities;
```