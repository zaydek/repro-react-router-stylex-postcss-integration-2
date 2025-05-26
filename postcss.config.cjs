module.exports = {
  plugins: {
    "@stylexjs/postcss-plugin": {
      include: ["app/**/*.{js,jsx,ts,tsx}"],
      useCSSLayers: true, // Optional
    },
    autoprefixer: {},
  },
};
