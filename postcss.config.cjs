// https://github.com/facebook/stylex/discussions/825#discussioncomment-11720866
module.exports = {
  plugins: {
    "@stylexjs/postcss-plugin": {
      include: [
        // Ensure StyleX files (e.g. .ts, .tsx) are preprocessed
        "app/**/*.{js,jsx,ts,tsx}",
        // Ensure StyleX static files (e.g. .stylex.js, .stylex.ts) are preprocessed
        "app/**/*.{stylex.js,stylex.ts}",
      ],
      useCSSLayers: true, // Optional
    },
    autoprefixer: {},
  },
};
