const fs = require("fs");

const buffer = fs.readFileSync("out.c");

console.log(buffer)

fs.writeFileSync("test.kbc1", buffer);
