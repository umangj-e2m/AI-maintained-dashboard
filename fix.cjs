const fs = require('fs');
let code = fs.readFileSync('index.html', 'utf8');

// 1. replace const chartInstances = {};
code = code.replace("let dashboardCharts = [];", "const chartInstances = {};");

// 2. remove existing foreach destroy
code = code.replace(/dashboardCharts\.forEach\(c => c\.destroy\(\)\);\s*dashboardCharts = \[\];/g, "");

// 3. resize fix in showTab
code = code.replace(/if \(typeof dashboardCharts !== 'undefined'\) \{\s*dashboardCharts\.forEach\(c => c\.resize\(\)\);\s*\}/g, "Object.values(chartInstances).forEach(c => c.resize());");

// 4. replace chart definitions
code = code.replace(/dashboardCharts\.push\(new Chart\(document\.getElementById\('([^']+)'\),\s*\{/g, (match, id) => {
  return `if (document.getElementById('${id}') && document.getElementById('${id}').offsetWidth > 0) {\n        if (chartInstances['${id}']) { chartInstances['${id}'].destroy(); }\n        chartInstances['${id}'] = new Chart(document.getElementById('${id}'), {`;
});

let lines = code.split('\n');
let replacedCount = 0;
for(let i=0; i<lines.length; i++) {
  if (lines[i].match(/^\s*\}\)\);/)) {
    lines[i] = lines[i].replace("}));", "});\n      }");
    replacedCount++;
  }
}
console.log("Replaced end lines: " + replacedCount);
code = lines.join('\n');

// 5. showTab fix: add renderDashboardData() check
const showTabCode = `
    function showTab(tabId) {
      document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
      document.getElementById(tabId).classList.add('active');
      
      document.querySelectorAll('.sidebar-nav li').forEach(el => el.classList.remove('active'));
      const activeBtn = document.querySelector(\`.sidebar-nav li[onclick="showTab('\${tabId}')"]\`);
      if (activeBtn) activeBtn.classList.add('active');

      renderDashboardData();

      // Trigger resize for ChartJS
      setTimeout(() => {
        window.dispatchEvent(new Event('resize'));
        Object.values(chartInstances).forEach(c => c.resize());
      }, 50);
    }
`;
code = code.replace(/function showTab\(tabId\) \{[\s\S]*?setTimeout\(\(\) => \{[\s\S]*?\}, 50\);\n    \}/, showTabCode.trim());

// 6. showSubTab fix
const subTabRegex = /el\.classList\.add\('active'\);\s*\/\/\s*Trigger resize for ChartJS/;
const replacement = "el.classList.add('active');\n      renderDashboardData();\n      // Trigger resize for ChartJS";
code = code.replace(subTabRegex, replacement);

fs.writeFileSync('index.html', code, 'utf8');
console.log("Done");
