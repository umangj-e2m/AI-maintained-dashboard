const fs = require('fs');
const lines = fs.readFileSync('script.cjs', 'utf8').split('\n');
console.log(lines.slice(1225, 1245).join('\n'));
