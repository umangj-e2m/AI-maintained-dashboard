const fs = require('fs');
let code = fs.readFileSync('index.html', 'utf8');

code = code.replace(/\}\)\);\);/g, "});\n          });");

fs.writeFileSync('index.html', code, 'utf8');
console.log("Fixed }););");
