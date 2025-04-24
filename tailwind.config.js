module.exports = {
  content: ["./*.html", "./partials/sidebar.html"], // Ajustá según tu estructura
  darkMode: 'class',
  theme: {
    extend: {}
  },
  plugins: [],
  safelist: [
    'hidden',
    'rotate-180',
    'block', // si necesitás revertir hidden
    'transform',
    'transition-transform',
    'duration-200',
  ]
}