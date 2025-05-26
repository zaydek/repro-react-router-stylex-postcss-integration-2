// https://github.com/facebook/stylex/discussions/825#discussioncomment-11720866
module.exports = {
  // Make sure Babel knows to preprocess React and TypeScript
  presets: [["@babel/preset-react", { runtime: "automatic" }], "@babel/preset-typescript"],

  // Make sure Babel knows to preprocess StyleX
  plugins: [
    [
      "@stylexjs/babel-plugin",
      {
        runtimeInjection: false,
        dev: process.env.NODE_ENV === "development",
        test: false,
        unstable_moduleResolution: {
          type: "commonJS",
          rootDir: process.cwd(),
        },
      },
    ],
  ],
};
