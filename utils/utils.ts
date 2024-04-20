import fs from "fs";
const readFile = (filePath: string) => {
  return new Promise<string>((resolve, reject) => {
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

const splitLines = (data: string) => {
  return data.split("\n");
};

export { readFile, splitLines };
