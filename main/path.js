// Import built-in module path
const path = require("node:path");

// Returns the file name, and if you want, remove the extension
const name = path.basename("./content/subfolder/first.txt", ".txt");
console.log(name);

const name1 = path.dirname("./content/subfolder/first.txt");
console.log(name1);

// Returns the extension of a file
const extension = path.extname("./content/subfolder/first.txt");
console.log(extension);

const pathFormat = path.format({
  dir: "./content/subfolder/first.txt",
  base: "first.txt",
});
console.log(pathFormat);

const pathParse = path.parse("./content/subfolder/test.txt");
console.log(pathParse);
