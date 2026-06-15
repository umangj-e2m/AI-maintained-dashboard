const fs = require('fs');
let code = fs.readFileSync('index.html', 'utf8');

let offset = 0;
let count = 0;
while (true) {
  let start = code.indexOf("chartInstances['", offset);
  if (start === -1) break;
  let chartStart = code.indexOf("new Chart(", start);
  // Find the next `}));` after chartStart
  let end = code.indexOf("}));", chartStart);
  if (end === -1) {
    // maybe it is already fixed to `});` ?
    offset = chartStart + 10;
    continue;
  }
  
  code = code.substring(0, end) + "});\n      }" + code.substring(end + 4);
  offset = end + 10;
  count++;
}

fs.writeFileSync('index.html', code, 'utf8');
console.log("Fixed " + count + " charts");
