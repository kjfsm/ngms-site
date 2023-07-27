/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    fontFamily: {
      dot: ["var(--font-dots)"],
    },
    extend: {
      colors: {
        "origin-blue": "#0000cd",
      },
    },
  },
  plugins: [],
};
