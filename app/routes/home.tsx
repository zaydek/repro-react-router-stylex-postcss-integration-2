import * as stylex from "@stylexjs/stylex";
import { stylexConsts, stylexVars } from "../stylex/theme.stylex";
import type { Route } from "./+types/home";

const styles = stylex.create({
  defineConsts: { color: stylexConsts.blue },
  defineVars: { color: stylexVars.red },
});

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <>
      <h1 {...stylex.props(styles.defineConsts)}>
        This is proof `stylex.defineConsts` works
      </h1>
      <h1 {...stylex.props(styles.defineVars)}>
        This is proof `stylex.defineVars` works
      </h1>
    </>
  );
}
