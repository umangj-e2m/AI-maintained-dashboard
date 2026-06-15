const fs = require('fs');
let code = fs.readFileSync('index.html', 'utf8');

// The file currently has `chartInstances['...'] = new Chart(..., { ... }));`
// And it also has `if (document.getElementById('...')) {` before it.
// We want to replace the `}));` that closes the `new Chart` with `});\n      }`.

let count = 0;
// We can find `chartInstances['` and then find the NEXT `}));` and replace it.
let chunks = code.split(/chartInstances\['[^']+'\] = new Chart\(/);
if (chunks.length > 1) {
  for (let i = 1; i < chunks.length; i++) {
    // replace the very first `}));` in this chunk with `});\n      }`
    chunks[i] = chunks[i].replace(/\}\)\);/, "});\n      }");
    count++;
  }
}

code = chunks.join("chartInstances['xyz'] = new Chart("); // Wait, I need the ID!

