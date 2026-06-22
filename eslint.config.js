import antfu from "@antfu/eslint-config";

export default antfu({
  ignores: ["docs/superpowers/**"],
  yaml: true,
  typescript: true,
  formatters: {
    css: true,
    html: true,
    markdown: "prettier",
  },
});
