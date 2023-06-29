/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    fontFamily: {
      dot: ["JF-Dot-MPlus12-No-Kanji"],
    },
    extend: {
      colors: {
        "origin-blue": "#0000cd",
      },
    },
  },
  plugins: [],
};
