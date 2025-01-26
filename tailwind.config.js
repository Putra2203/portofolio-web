/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        playFairDisplay: ["Playfair Display", "serif"],
        lavishlyyoursregular: ["Lavishly Yours", "cursive"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        primary: "#FF0000",
        secondary: "#950101",
        accent: "#3D0000",
      },
      backgroundImage: {
        "desktop-home": "url('/src/assets/bgcover.jpg')",
        "mobile-home": "url('/src/assets/bgcoverMobile.jpg')",
        "desktop-about": "url('/src/assets/bgcoverAbout.jpg')",
        "desktop-skills": "url('/src/assets/bgcoverSkills.jpg')",
      },
    },
  },
  plugins: [require("daisyui")],
};
