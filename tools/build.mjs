"use strict";

import fs from "fs";
import path from "path";

const SOURCE_DIR = "src";
const TARGET_DIR = "docs";

const scanFiles = (dir, parent) => {
  fs.readdirSync(dir).forEach((filename) => {
    const aPath = dir + path.sep + filename;

    if (fs.lstatSync(aPath).isFile()) {
      parent.push({
        type: "file",
        path: aPath,
        name: filename,
      });
    } else {
      const subDir = {
        type: "dir",
        path: aPath,
        name: filename,
        files: [],
      };
      parent.push(subDir);
      scanFiles(aPath, subDir.files);
      subDir.files.sort((a, b) => a.name.localeCompare(b.name));
    }
  });
};

const readFiles = (targetDir) => {
  const result = {
    type: "dir",
    name: targetDir.split(path.sep).pop(),
    path: targetDir,
    files: [],
  };

  scanFiles(targetDir, result.files);
  result.files.sort((a, b) => a.name.localeCompare(b.name));

  return result;
};

const buildFile = (parent) => {
  for (const aFile of parent.files) {
    console.log(aFile);

    if (fs.lstatSync(aFile.path).isFile()) {
      fs.copyFileSync(aFile.path, aFile.path.replace(SOURCE_DIR, TARGET_DIR));
    } else {
      fs.mkdirSync(aFile.path.replace(SOURCE_DIR, TARGET_DIR), {recursive: true});
      buildFile(readFiles(aFile.path));
    }
  }
};

(() => {
  fs.rmSync(TARGET_DIR, {recursive: true, force: true});
  buildFile(readFiles(SOURCE_DIR));

  fs.writeFileSync(
    `${TARGET_DIR}${path.sep}articles${path.sep}index.json`,
    JSON.stringify(readFiles(`${TARGET_DIR}${path.sep}articles`), null, 2)
  );
})();
