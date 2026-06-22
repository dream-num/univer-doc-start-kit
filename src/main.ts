import "./style.css";

import { demos } from "./demos";

function createElement<K extends keyof HTMLElementTagNameMap>(
  tagName: K,
  className?: string,
  textContent?: string,
) {
  const element = document.createElement(tagName);

  if (className) element.className = className;

  if (textContent) element.textContent = textContent;

  return element;
}

function renderDemoGroup(title: string, type: "esm" | "umd") {
  const $section = createElement("section", "demo-section");
  const $title = createElement("h2", undefined, title);
  const $list = createElement("ul", "directory-list");

  for (const demo of demos.filter((item) => item.type === type)) {
    const $item = createElement("li", "directory-item");
    const $link = createElement("a", "directory-link", demo.title);

    $link.href = demo.href;
    $item.appendChild($link);
    $list.appendChild($item);
  }

  $section.append($title, $list);
  return $section;
}

function main() {
  const $app = document.getElementById("app");
  if (!$app) throw new Error("Missing #app element");

  document.title = "Examples";

  const $page = createElement("main", "entry-page");
  const $content = createElement("section", "entry-content");
  const $title = createElement("h1", undefined, "Examples");

  $content.append($title, renderDemoGroup("esm", "esm"), renderDemoGroup("umd", "umd"));
  $page.appendChild($content);
  $app.replaceChildren($page);
}

main();
