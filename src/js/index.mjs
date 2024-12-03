"use strict";

console.log("Welcome to the Jihogrammer's blog.");

const appendChildTo = (el, parentPath, dir) => {
  dir.files.forEach(file => {
    if (file.type === "file") {
      const e = document.createElement("li");
      const a = document.createElement("a");

      a.textContent = `${file.name}`;
      a.href = `${parentPath}/${dir.name}/${file.name}`;

      if (a.href.endsWith(".md")) {
        console.log(a.href);
        a.href = a.href.replace(/\.md$/, "");
        console.log(a.href);
      }

      e.appendChild(a);
      el.appendChild(e);
    }
  });
};

const getArticles = () => {
  const ul = document.getElementById("article-list");
  fetch(`./articles/index.json`)
    .then((response) => response.json())
    .then((articles) => appendChildTo(ul, '', articles))
    .catch((e) => console.error("Failed to get html", e));
};

(() => {
  getArticles();
})();
