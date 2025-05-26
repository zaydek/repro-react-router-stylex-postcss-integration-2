// https://github.com/facebook/stylex/discussions/825#discussioncomment-11720866
module.exports = {
  plugins: {
    "@stylexjs/postcss-plugin": {
      include: ["app/**/*.{js,jsx,ts,tsx}"],
      useCSSLayers: true, // Optional
    },
    autoprefixer: {},
  },
};
