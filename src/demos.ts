export const demos = [
  {
    dir: "preset-docs-core",
    href: "./preset-docs-core/",
    title: "preset-docs-core/",
    type: "esm",
  },
  {
    dir: "preset-docs-advanced",
    href: "./preset-docs-advanced/",
    title: "preset-docs-advanced/",
    type: "esm",
  },
  {
    dir: "preset-docs-collaboration",
    href: "./preset-docs-collaboration/",
    title: "preset-docs-collaboration/",
    type: "esm",
  },
  {
    dir: "umd/preset-docs-core",
    href: "./umd/preset-docs-core/",
    title: "umd/preset-docs-core/",
    type: "umd",
  },
  {
    dir: "umd/preset-docs-advanced",
    href: "./umd/preset-docs-advanced/",
    title: "umd/preset-docs-advanced/",
    type: "umd",
  },
  {
    dir: "umd/preset-docs-collaboration",
    href: "./umd/preset-docs-collaboration/",
    title: "umd/preset-docs-collaboration/",
    type: "umd",
  },
] as const;

export type Demo = (typeof demos)[number];
