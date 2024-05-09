Firstly Install the Vite Dependencies in the Project using : - 
npm create vite@latest 

Second  Install the npm using 
npm install

And at last install the Tailwind in the Project using 
Install Tailwind CSS
Install tailwindcss and its peer dependencies, then generate your tailwind.config.js and postcss.config.js files.

npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

Configure your template paths
Add the paths to all of your template files in your tailwind.config.js file
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
