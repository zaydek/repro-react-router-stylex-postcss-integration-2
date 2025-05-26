import * as stylex from "@stylexjs/stylex";
import type { Route } from "./+types/home";

const styles = stylex.create({
  red: {
    color: "red",
  },
});

export function meta({}: Route.MetaArgs) {
  return [{ title: "New React Router App" }, { name: "description", content: "Welcome to React Router!" }];
}

export default function Home() {
  // This is supposed to be red!
  return <h1 {...stylex.props(styles.red)}>Hello</h1>;
}
