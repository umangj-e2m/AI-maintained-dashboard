#!/usr/bin/env node
/**
 * Migrates dashboard.html mock client names to exploreHVAC vertical.
 * Run: node scripts/migrate-dashboard-clients.cjs
 */
const fs = require('fs');
const path = require('path');

const dashboardPath = path.join(__dirname, '../dashboard.html');
let html = fs.readFileSync(dashboardPath, 'utf8');

const LEGACY_CLIENT_NAME_MAP = {
  'Foundation Health & Wellness': 'Keystone Home Comfort',
  'JAG Medical Spa': 'ProFlow Plumbing Co.',
  'Vital Roots Functional Medicine': 'Summit Plumbing & Drain',
  'Core Wellness & Recovery': 'TotalCare Home Solutions',
  'Vitality Medical Spa': 'AllSeason Home Services',
  'Inner Calm Therapy Center': 'BlueLine Plumbing Services',
};

const NEW_ALL_CLIENTS = [
  'Pure Air Solutions',
  'Frosty Systems',
  'Precision HVAC Experts',
  'Elite Air Systems',
  'Keystone Home Comfort',
  'Summit Plumbing & Drain',
  'AllSeason Home Services',
  'ProFlow Plumbing Co.',
  'BlueLine Plumbing Services',
  'Airflow Masters',
  'Comfort Zone Heating & Air',
  'Apex Climate Control',
  'Prime Comfort HVAC',
  'TotalCare Home Solutions',
  'Rapid Response Air',
];

// Rename legacy keys and references (longest names first to avoid partial matches)
const sortedOldNames = Object.keys(LEGACY_CLIENT_NAME_MAP).sort((a, b) => b.length - a.length);
for (const oldName of sortedOldNames) {
  const newName = LEGACY_CLIENT_NAME_MAP[oldName];
  html = html.split(oldName).join(newName);
}

// Replace ALL_CLIENTS array block
html = html.replace(
  /const ALL_CLIENTS = \[[\s\S]*?\];/,
  `const ALL_CLIENTS = [\n${NEW_ALL_CLIENTS.map(c => `      "${c}"`).join(',\n')}\n    ];`,
);

// exploreHVAC content patches for renamed client transcript blocks
const contentPatches = [
  {
    client: 'Keystone Home Comfort',
    from: /("Keystone Home Comfort": \{[\s\S]*?)Excellent alignment\. Strong trust and high satisfaction scores across all campaigns\./,
    to: '$1Strong home services performance. HVAC, electrical, and handyman leads trending up across local campaigns.',
  },
  {
    client: 'ProFlow Plumbing Co.',
    from: /("ProFlow Plumbing Co\.": \{[\s\S]*?)Consistent positive feedback\. High trust in strategy and campaign results\./,
    to: '$1Plumbing lead volume softening. Emergency call campaigns need optimization before peak season.',
  },
  {
    client: 'Summit Plumbing & Drain',
    from: /("Summit Plumbing & Drain": \{[\s\S]*?)Strong organic growth and positive patient sentiment\./,
    to: '$1Drain cleaning and sewer line SEO performing well. Steady growth in booked plumbing jobs.',
  },
  {
    client: 'TotalCare Home Solutions',
    from: /("TotalCare Home Solutions": \{[\s\S]*?)Critical churn risk\. Multiple unresolved billing and results concerns\./,
    to: '$1Critical churn risk. Multi-trade home service leads down sharply; client frustrated with campaign ROI.',
  },
  {
    client: 'AllSeason Home Services',
    from: /("AllSeason Home Services": \{[\s\S]*?)Top-tier client\. Expanding budget and highly engaged with new initiatives\./,
    to: '$1Top-tier home services client. Expanding into HVAC maintenance plans and seasonal tune-up campaigns.',
  },
  {
    client: 'BlueLine Plumbing Services',
    from: /("BlueLine Plumbing Services": \{[\s\S]*?)Generally positive but occasional friction around scheduling\./,
    to: '$1Generally positive but friction around after-hours plumbing call tracking and LSA lead quality.',
  },
];

for (const patch of contentPatches) {
  if (patch.from.test(html)) {
    html = html.replace(patch.from, patch.to);
  }
}

// Update page title area branding hint if present
html = html.replace(
  /Client Health Dashboard/g,
  'exploreHVAC Client Dashboard',
);

fs.writeFileSync(dashboardPath, html);
console.log('dashboard.html migrated to exploreHVAC client names.');
