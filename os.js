const os = require("node:os");

let totalMen = os.totalmem();
console.log(totalMen);

let freememory = os.freemem();
console.log(freememory);
