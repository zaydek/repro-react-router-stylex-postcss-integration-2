// https://github.com/facebook/stylex/discussions/825#discussioncomment-11720866
module.exports = {
  plugins: {
    "@stylexjs/postcss-plugin": {
      include: [
        // Ensure StyleX files are preprocessed
        //
        // Covers:
        //
        // - app/**/foo.ts
        // - app/**/foo.tsx
        //
        "app/**/*.{ts,tsx}",

        // Ensure StyleX static files are preprocessed
        //
        // Covers:
        //
        // - app/**/foo.stylex.ts
        //
        "app/**/*.stylex.ts",
      ],
      useCSSLayers: true, // Optional
    },
    autoprefixer: {},
  },
};
