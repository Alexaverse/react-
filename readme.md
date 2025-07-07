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

# React App Structure Guide

## App.jsx File Explanation

`App.jsx` is the main component file in a React application. It typically serves as the root component that contains all other components in your application.

### Rules for App.jsx

1. **Capitalized Function Name**: 
   - The component function name must start with a capital letter (PascalCase).
   - Example: `function App() { ... }` ✅
   - Not: `function app() { ... }` ❌

2. **File Naming**:
   - Should be named `App.jsx` (or `App.js` if not using JSX syntax explicitly)

3. **Default Export**:
   - Should export the component as default:
     ```jsx
     export default App;
     ```

4. **JSX Return**:
   - Must return valid JSX (wrapped in a single parent element or Fragment  ```(<>...</>)``` )
   - Example:
     ```jsx
     return (
       <div>
         {/* Your content */}
       </div>
     );
     ```

5. **Import Statements**:
   - Place all imports at the top of the file
   - React must be imported if using JSX:
     ```jsx
     import React from 'react';
     ```

## Basic App.jsx Template

```jsx
import React from 'react';

function App() {
  return (
    <div className="App">
      <h1>My React App</h1>
      {/* Other components go here */}
    </div>
  );
}

export default App;

```
## Must read react docs for deeper understanding of react components and JSX syntax. 
### Click to visit [React Docs](https://react.dev/reference/react)


## To setup react-Router-DOM
```
npm i react-router-dom
```

### when ```<a>``` tag is used it reloads the complete page that's why we import Link and NavLink from 'react-router-dom' and use it 