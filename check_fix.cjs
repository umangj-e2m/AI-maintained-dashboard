const fs = require('fs');
const lines = fs.readFileSync('index.html', 'utf8').split('\n');
for (let i = 0; i < lines.length - 1; i++) {
  if (lines[i].match(/^\s*\}\)\;/) && lines[i+1].match(/^\s*\}/)) {
     console.log(`Matched at ${i+1}`);
  }
}
