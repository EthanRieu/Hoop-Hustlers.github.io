/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        bgColor: "#383838",
        degrade_one : "#150026",
        degrade_two : "#450979",
        degrade_three :"#6c16b8",
        degrade_four : "#b462fc"
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      backgroundImage: {
        'grid-pattern': `
          linear-gradient(to right, rgba(255, 255, 255, 0.2) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255, 255, 255, 0.2) 1px, transparent 1px)
        `,
      },
      backgroundSize: {
        'grid-size': '200px 200px',
      },
      opacity: {
        'grid-opacity': '0.2',
      },
    },
  },
  plugins: [],
}
