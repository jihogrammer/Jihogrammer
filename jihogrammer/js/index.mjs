"use strict";

console.log("Welcome to the Jihogrammer's blog.");

const appendChildTo = (el, parentPath, dir) => {
  dir.files.forEach(file => {
    if (file.type === "file") {
      const e = document.createElement("li");
      const a = document.createElement("a");

      a.textContent = `${file.name}`;
      a.href = `${parentPath}/${dir.name}/${file.name}`;
      e.appendChild(a);
      el.appendChild(e);
    }
  });
};

const getArticles = () => {
  const el = document.getElementById("article-list");

  fetch("/jihogrammer/articles/index.json")
    .then((response) => response.json())
    .then((articles) => {
      appendChildTo(document.getElementById("article-list"), "/jihogrammer", articles);
    })
    .catch((e) => console.error("Failed to get html", e));
};

(() => getArticles())();
