module.exports = {
  mode: 'jit',
  purge: {
    content: [
      "./src/**/*.svelte",
    ],
},
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
  plugins: [],
}
