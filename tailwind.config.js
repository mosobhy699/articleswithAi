/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // here we can use custom fonts family using theme but then must import them to index.html
  theme: {
    extend: {
      fontFamily: {
        satoshi: ["Satoshi", "Sans-serif"],
        inter:["Inter","Sans-serif"]
      }
    },
  },
  plugins: [],
}

