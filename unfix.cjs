const fs = require('fs');
let code = fs.readFileSync('index.html', 'utf8');

// The replacement was: lines[i] = lines[i].replace("}));", "});\n      }");
// Let's reverse it safely.
code = code.replace(/\}\);\n\s*\}/g, "}));");

fs.writeFileSync('index.html', code, 'utf8');
console.log("Reversed");
