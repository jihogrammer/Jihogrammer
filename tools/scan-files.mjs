"use strict";

import fs from "fs";
import path from "path";

const scanFiles = (dir, parent) => {
  fs.readdirSync(dir).forEach((filename) => {
    if (filename.startsWith("index")) {
      return;
    }

    const aPath = dir + path.sep + filename;
    const aFile = fs.lstatSync(aPath);

    if (aFile.isFile()) {
      parent.push({
        type: "file",
        name: filename
      });
    } else {
      const subDir = {
        type: "dir",
        name: filename,
        files: []
      };
      parent.push(subDir);
      scanFiles(aPath, subDir.files)
      subDir.files.sort((a, b) => a.name.localeCompare(b.name));
    }
  });
};

export const writeFiles = (targetDir) => {
  if (!targetDir) {
    throw "targetDir is not valid: " + targetDir;
  }
  const result = {
    name: targetDir.split(path.sep).pop(),
    files: []
  };

  console.log(`>>> Start to scan files from "${targetDir}"`);

  scanFiles(targetDir, result.files);
  result.files.sort((a, b) => a.name.localeCompare(b.name));

  const json = JSON.stringify(result, null, 2);
  console.log(json);

  fs.writeFileSync(`${targetDir}${path.sep}index.json`, json);
};
