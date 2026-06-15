#!/usr/bin/env node
/**
 * Second remediation pass: reframe Mailchimp, GHL, and Call Transcript mock data
 * from end-customer / field-ops model → Explore Media agency client-health model.
 */
const fs = require('fs');
const path = require('path');

const dashboardPath = path.join(__dirname, '../dashboard.html');
let html = fs.readFileSync(dashboardPath, 'utf8');

const CLIENTS = [
  'Pure Air Solutions', 'Frosty Systems', 'Precision HVAC Experts', 'Elite Air Systems',
  'Keystone Home Comfort', 'Summit Plumbing & Drain', 'AllSeason Home Services',
  'ProFlow Plumbing Co.', 'BlueLine Plumbing Services', 'Airflow Masters',
  'Comfort Zone Heating & Air', 'Apex Climate Control', 'Prime Comfort HVAC',
  'TotalCare Home Solutions', 'Rapid Response Air',
];

/** Per-client agency email-sentiment profiles */
const MAILCHIMP_PROFILES = {
  'Pure Air Solutions': {
    pct: 88, pos: 118, neu: 72, neg: 12,
    topComplaint: 'Late monthly report',
    complaints: [['Late monthly report', 8], ['Creative approval delays', 5], ['Dashboard access issues', 4], ['Unclear invoice line items', 3]],
    alert: 'Client satisfaction remains high at 88%. Minor friction on report delivery timing.',
    summary: 'Strong retainer relationship. Clients asked about Q3 content calendar and GBP post cadence.',
    exec: 'This week emails focused on campaign performance reviews and retainer scope. 4 clients signaled interest in adding paid social; 1 flagged billing clarification on media spend.',
  },
  'Frosty Systems': {
    pct: 84, pos: 102, neu: 78, neg: 14,
    topComplaint: 'Slow creative turnaround',
    complaints: [['Slow creative turnaround', 10], ['Reporting portal login issues', 6], ['Ad spend approval delays', 5], ['QBR rescheduling', 3]],
    alert: 'Satisfaction stable at 84%. Creative turnaround is the top account friction point.',
    summary: 'Clients requesting faster ad creative revisions and clearer weekly KPI summaries.',
    exec: 'Email volume centered on PPC performance and creative feedback loops. 2 clients requested scope expansion for LSA management.',
  },
  'Precision HVAC Experts': {
    pct: 82, pos: 124, neu: 89, neg: 21,
    topComplaint: 'Missed reporting deadline',
    complaints: [['Missed reporting deadline', 12], ['Unclear campaign ROI breakdown', 9], ['Slow email response from AM', 7], ['Landing page revision backlog', 5]],
    alert: 'Satisfaction dipped 3 points in June due to delayed monthly performance reports.',
    summary: 'Account sentiment positive overall; reporting cadence and deliverable timing are key concerns.',
    exec: 'Clients primarily discussed Google Ads performance and SEO deliverables. 3 accounts showed retainer expansion intent; 2 raised scope-change requests.',
  },
  'Elite Air Systems': {
    pct: 80, pos: 95, neu: 84, neg: 18,
    topComplaint: 'Campaign launch delay',
    complaints: [['Campaign launch delay', 11], ['GBP post cadence missed', 8], ['Unclear retainer invoice', 6], ['Dashboard metric discrepancies', 4]],
    alert: 'Satisfaction at 80%. Launch delays on seasonal campaigns drove most negative sentiment.',
    summary: 'Clients want tighter launch timelines and clearer media plan milestones.',
    exec: 'High inquiry volume on summer campaign timelines. 1 client flagged retainer cancellation risk due to missed Q2 deliverable.',
  },
  'Keystone Home Comfort': {
    pct: 86, pos: 124, neu: 89, neg: 16,
    topComplaint: 'Creative approval bottleneck',
    complaints: [['Creative approval bottleneck', 9], ['Late monthly report', 7], ['Scope creep on add-ons', 5], ['ClickUp task visibility', 4]],
    alert: 'Client satisfaction at 86%. Creative approval workflow is the main friction point.',
    summary: 'Strong engagement on Reels and local SEO initiatives; clients want faster creative sign-off.',
    exec: 'Emails focused on Q3 budget approvals and social content calendar. 6 clients signaled retainer upsell interest; 2 raised billing questions.',
  },
  'Summit Plumbing & Drain': {
    pct: 74, pos: 98, neu: 68, neg: 28,
    topComplaint: 'Client portal login failures',
    complaints: [['Client portal login failures', 14], ['Late monthly report', 11], ['Unclear PPC spend allocation', 9], ['Missed QBR', 6]],
    alert: 'Satisfaction dropped to 74%. Portal access and reporting delays are driving churn risk.',
    summary: 'Account sentiment declining; client reporting portal and deliverable timing need urgent attention.',
    exec: 'High volume of portal login and invoice dispute emails. 3 clients showed retainer cancellation signals; urgent QBR scheduling recommended.',
  },
  'AllSeason Home Services': {
    pct: 87, pos: 135, neu: 80, neg: 10,
    topComplaint: 'Ad spend approval delays',
    complaints: [['Ad spend approval delays', 6], ['Content calendar gaps', 4], ['Reporting format preferences', 3]],
    alert: 'Client satisfaction exceptionally high at 87%. Minor friction on spend approval workflow.',
    summary: 'Excellent account health; clients engaged on multi-channel campaign performance.',
    exec: 'Positive feedback on seasonal promo campaigns. 5 clients interested in retainer tier upgrades; churn risk extremely low.',
  },
  'ProFlow Plumbing Co.': {
    pct: 78, pos: 98, neu: 72, neg: 18,
    topComplaint: 'Slow creative turnaround',
    complaints: [['Slow creative turnaround', 12], ['Missed reporting deadline', 8], ['GBP review response lag', 6], ['Unclear invoice/billing', 5]],
    alert: 'Satisfaction at 78%. Creative turnaround and reporting cadence are primary concerns.',
    summary: 'Client accounts asking about LSA performance and landing page updates.',
    exec: 'Emails centered on emergency plumbing campaign optimization. 2 clients flagged retainer pause requests; 4 requested scope changes on ad creative.',
  },
  'BlueLine Plumbing Services': {
    pct: 90, pos: 115, neu: 58, neg: 8,
    topComplaint: 'Scope change request backlog',
    complaints: [['Scope change request backlog', 5], ['Reporting portal UX', 3], ['QBR scheduling conflicts', 2]],
    alert: 'Satisfaction rose to 90%. Account relationship is strong with minimal friction.',
    summary: 'Clients highly satisfied with lead quality and campaign ROI reporting.',
    exec: 'Exceptional feedback on PPC lead quality and SEO deliverables. Near-zero churn signals; 3 upsell inquiries this week.',
  },
  'Airflow Masters': {
    pct: 79, pos: 102, neu: 80, neg: 16,
    topComplaint: 'Deliverable approval delays',
    complaints: [['Deliverable approval delays', 10], ['AM response time', 7], ['Landing page revision queue', 5], ['Monthly report format', 4]],
    alert: 'Satisfaction stable at 79%. Deliverable approval workflow causing minor friction.',
    summary: 'Clients requesting faster turnaround on landing page and ad copy revisions.',
    exec: 'Email threads focused on smart campaign segmentation and content updates. 2 clients showing retainer cancellation indicators.',
  },
  'Comfort Zone Heating & Air': {
    pct: 83, pos: 118, neu: 66, neg: 12,
    topComplaint: 'Invoice/billing clarity',
    complaints: [['Invoice/billing clarity', 8], ['Creative revision turnaround', 6], ['Reporting dashboard access', 4]],
    alert: 'Satisfaction at 83%. Billing clarity and creative revisions are minor friction points.',
    summary: 'Strong account sentiment on heat pump campaign performance.',
    exec: 'Positive feedback on seasonal HVAC campaigns. 1 billing dispute resolved; overall churn risk low.',
  },
  'Apex Climate Control': {
    pct: 68, pos: 88, neu: 62, neg: 32,
    topComplaint: 'Missed reporting deadline',
    complaints: [['Missed reporting deadline', 18], ['Campaign launch delay', 14], ['Unresponsive AM on Slack', 11], ['Cost per lead spike concerns', 9]],
    alert: 'Satisfaction fell to 68%. Reporting delays and campaign launch slippage driving churn risk.',
    summary: 'Account sentiment declining; clients frustrated with deliverable timing and CPL increases.',
    exec: 'High complaint volume on missed QBR and reporting deadlines. 4 clients flagged retainer cancellation risk; executive escalation recommended.',
  },
  'Prime Comfort HVAC': {
    pct: 65, pos: 82, neu: 58, neg: 28,
    topComplaint: 'Retainer renewal at risk',
    complaints: [['Retainer renewal at risk', 15], ['MQL volume down concerns', 12], ['Missed QBR', 10], ['Creative approval bottleneck', 8]],
    alert: 'Satisfaction at 65%. Multiple accounts signaling retainer renewal risk.',
    summary: 'Critical account health; clients concerned about lead volume and agency responsiveness.',
    exec: 'Urgent: 3 clients used churn language in email threads. Recommend executive save playbook and 90-day performance recovery roadmap.',
  },
  'TotalCare Home Solutions': {
    pct: 62, pos: 78, neu: 55, neg: 30,
    topComplaint: 'Deliverables overdue',
    complaints: [['Deliverables overdue', 16], ['Missed reporting deadline', 13], ['Cost per lead up', 11], ['Scope change disputes', 8]],
    alert: 'Satisfaction at 62%. Overdue deliverables and reporting gaps threaten retainer renewals.',
    summary: 'Account sentiment critical; multiple deliverable and communication failures flagged.',
    exec: 'Critical churn risk across 2 accounts. Recommend emergency strategy call, senior AM reassignment, and retainer save playbook.',
  },
  'Rapid Response Air': {
    pct: 58, pos: 72, neu: 48, neg: 36,
    topComplaint: 'Retainer cancellation risk',
    complaints: [['Retainer cancellation risk', 20], ['Missed QBR / kickoff no-shows', 15], ['MQL volume down', 14], ['Unresponsive AM', 12]],
    alert: 'Satisfaction at 58%. Multiple accounts at critical churn risk.',
    summary: 'Severe account health decline; clients citing missed meetings and poor campaign results.',
    exec: 'Emergency escalation required. 5 clients flagged retainer cancellation; recommend executive intervention and full account audit.',
  },
};

function buildMailchimpData() {
  const lines = ['    const MAILCHIMP_CLIENT_DATA = {'];
  for (const name of CLIENTS) {
    const p = MAILCHIMP_PROFILES[name];
    const intentTotal = p.pos + p.neu + p.neg;
    lines.push(`      "${name}": {`);
    lines.push(`        sentiment: { positive: ${p.pos}, neutral: ${p.neu}, negative: ${p.neg}, pct: ${p.pct}, summary: "Client account sentiment is ${p.pct}% positive. Main friction: ${p.topComplaint.toLowerCase()}." },`);
    lines.push(`        complaints: [`);
    p.complaints.forEach(([n, m], i) => {
      lines.push(`          { name: "${n}", mentions: ${m} }${i < p.complaints.length - 1 ? ',' : ''}`);
    });
    lines.push(`        ],`);
    lines.push(`        intent: [`);
    lines.push(`          { category: "Upsell Inquiry", count: ${Math.round(intentTotal * 0.35)} },`);
    lines.push(`          { category: "Scope Change Request", count: ${Math.round(intentTotal * 0.22)} },`);
    lines.push(`          { category: "Complaint", count: ${Math.round(intentTotal * 0.18)} },`);
    lines.push(`          { category: "Retainer Cancellation Risk", count: ${Math.round(intentTotal * 0.12)} },`);
    lines.push(`          { category: "Billing Question", count: ${Math.round(intentTotal * 0.13)} }`);
    lines.push(`        ],`);
    lines.push(`        churn: { count: ${Math.max(1, Math.round(p.neg / 4))}, risk: "${p.pct >= 82 ? 'Low' : p.pct >= 72 ? 'Medium' : 'High'}" },`);
    lines.push(`        urgency: { count: ${Math.max(2, Math.round(p.neg / 2))} },`);
    lines.push(`        satisfactionTrend: { months: ["April", "May", "June"], scores: [${p.pct - 4}, ${p.pct - 2}, ${p.pct}], alert: "${p.alert}" },`);
    lines.push(`        topics: ["Campaign Performance", "Content Calendar", "Retainer Scope", "Reporting Portal", "Ad Spend Approvals"],`);
    lines.push(`        responseTime: { avg: "${(1.5 + (100 - p.pct) / 30).toFixed(1)} hrs", unanswered: ${Math.max(1, Math.round(p.neg / 3))}, delayed: ${Math.max(0, Math.round(p.neg / 6))} },`);
    lines.push(`        executiveSummary: "${p.exec}"`);
    lines.push(`      },`);
  }
  lines[lines.length - 1] = lines[lines.length - 1].replace(/,$/, '');
  lines.push('    };');
  return lines.join('\n');
}

/** Agency CRM pipeline profiles for GHL tab */
const GHL_PROFILES = {
  'Pure Air Solutions': {
    pipeline: '$42,800', leads: 128, conv: 78, noShow: 4.2,
    lead: { name: 'Marcus Chen', email: 'marcus@pureairco.com', phone: '+1 (555) 201-4400', source: 'Inbound Referral', tags: ['Retainer Active', 'Upsell Signal'], serviceType: 'LSA Lead — AC Repair', budget: '$4,200/mo', history: 'Discovery Call → Proposal Sent → Retainer Signed' },
    appt: { dateTime: 'Jun 12, 2026 at 10:00 AM', contact: 'Marcus Chen', staff: 'AM: Jennifer', status: 'QBR Scheduled' },
    campaign: 'Pure Air — Emergency HVAC Search',
  },
  'Frosty Systems': {
    pipeline: '$36,200', leads: 104, conv: 74, noShow: 5.8,
    lead: { name: 'Lisa Park', email: 'lpark@frostysystems.com', phone: '+1 (555) 302-8800', source: 'PPC Form', tags: ['Retainer Active'], serviceType: 'PPC Form — Furnace Repair', budget: '$3,800/mo', history: 'Lead Form → Strategy Session → Media Plan Approved' },
    appt: { dateTime: 'Jun 11, 2026 at 02:00 PM', contact: 'Lisa Park', staff: 'Strategist: Sam', status: 'Kickoff Complete' },
    campaign: 'Frosty Systems — Seasonal PPC',
  },
  'Precision HVAC Experts': {
    pipeline: '$48,900', leads: 154, conv: 72, noShow: 6.1,
    lead: { name: 'Frank Castle', email: 'fcastle@precisionhvac.com', phone: '+1 (555) 100-2000', source: 'Google LSA', tags: ['Hot Lead', 'Scope Expansion'], serviceType: 'LSA Lead — System Replacement', budget: '$7,200/mo', history: 'LSA Inquiry → Discovery Call → Proposal Sent' },
    appt: { dateTime: 'Jun 11, 2026 at 08:30 AM', contact: 'Frank Castle', staff: 'Paid Media: Alex', status: 'QBR Scheduled' },
    campaign: 'Precision HVAC — LSA + Search',
  },
  'Elite Air Systems': {
    pipeline: '$31,500', leads: 96, conv: 70, noShow: 7.2,
    lead: { name: 'Karen Page', email: 'kpage@eliteair.com', phone: '+1 (555) 300-4000', source: 'Email Outreach', tags: ['Nurturing'], serviceType: 'SEO Consultation Request', budget: '$2,800/mo', history: 'Inbound Email → Discovery Call Booked → Awaiting Proposal' },
    appt: { dateTime: 'Jun 13, 2026 at 11:00 AM', contact: 'Karen Page', staff: 'AM: Sarah', status: 'QBR Scheduled' },
    campaign: 'Elite Air — Local SEO Retainer',
  },
  'Keystone Home Comfort': {
    pipeline: '$34,500', leads: 142, conv: 76, noShow: 3.8,
    lead: { name: 'John Miller', email: 'john@keystonehome.com', phone: '+1 (555) 321-4567', source: 'Referral', tags: ['Retainer Active', 'Upsell Signal'], serviceType: 'PPC Form — Multi-Trade Bundle', budget: '$4,200/mo', history: 'Referral → Discovery Call → Retainer Renewal' },
    appt: { dateTime: 'Jun 11, 2026 at 10:00 AM', contact: 'John Miller', staff: 'AM: Jennifer', status: 'Kickoff Complete' },
    campaign: 'Keystone — Local SEO + Social',
  },
  'Summit Plumbing & Drain': {
    pipeline: '$18,200', leads: 85, conv: 62, noShow: 9.5,
    lead: { name: 'Laura Palmer', email: 'lpalmer@summitplumbing.com', phone: '+1 (555) 666-0000', source: 'PPC Form', tags: ['At Risk', 'Churn Signal'], serviceType: 'PPC Form — Drain Cleaning', budget: '$2,800/mo', history: 'Ad Click → Lead Form → Escalation Call Pending' },
    appt: { dateTime: 'Jun 11, 2026 at 02:00 PM', contact: 'Laura Palmer', staff: 'AM: Sarah', status: 'Client No-Show' },
    campaign: 'Summit — Emergency Plumbing Search',
  },
  'AllSeason Home Services': {
    pipeline: '$41,000', leads: 168, conv: 82, noShow: 2.8,
    lead: { name: 'Bruce Wayne', email: 'bwayne@allseason.com', phone: '+1 (555) 911-0000', source: 'Referral', tags: ['Retainer Active', 'Expansion'], serviceType: 'Full-Service Retainer — HVAC + Plumbing', budget: '$5,500/mo', history: 'Referral → QBR → Scope Expansion Approved' },
    appt: { dateTime: 'Jun 12, 2026 at 01:00 PM', contact: 'Bruce Wayne', staff: 'AM: Jennifer', status: 'Kickoff Complete' },
    campaign: 'AllSeason — Multi-Channel Retainer',
  },
  'ProFlow Plumbing Co.': {
    pipeline: '$28,400', leads: 110, conv: 68, noShow: 8.2,
    lead: { name: 'Jessica Alba', email: 'jalba@proflowplumbing.com', phone: '+1 (555) 789-1234', source: 'Google Ads', tags: ['At Risk'], serviceType: 'LSA Lead — Emergency Plumbing', budget: '$3,100/mo', history: 'LSA Call → Save Call Scheduled → Proposal Under Review' },
    appt: { dateTime: 'Jun 12, 2026 at 09:00 AM', contact: 'Jessica Alba', staff: 'Strategist: Sam', status: 'QBR Scheduled' },
    campaign: 'ProFlow — LSA + Local Search',
  },
  'BlueLine Plumbing Services': {
    pipeline: '$15,600', leads: 78, conv: 84, noShow: 2.2,
    lead: { name: 'Barry Allen', email: 'ballen@bluelineplumbing.com', phone: '+1 (555) 444-1111', source: 'Organic Search', tags: ['Retainer Active'], serviceType: 'SEO Consultation Request', budget: '$1,200/mo', history: 'Inbound Form → Discovery Call → Retainer Active' },
    appt: { dateTime: 'Jun 12, 2026 at 11:00 AM', contact: 'Barry Allen', staff: 'AM: Jennifer', status: 'Kickoff Complete' },
    campaign: 'BlueLine — SEO + GBP Management',
  },
  'Airflow Masters': {
    pipeline: '$29,800', leads: 112, conv: 71, noShow: 6.4,
    lead: { name: 'Arthur Dent', email: 'arthur@airflowmasters.com', phone: '+1 (555) 424-2424', source: 'PPC Form', tags: ['Retainer Active'], serviceType: 'PPC Form — Smart Thermostat Campaign', budget: '$4,100/mo', history: 'Form Submit → Strategy Session → Media Plan Live' },
    appt: { dateTime: 'Jun 11, 2026 at 02:00 PM', contact: 'Arthur Dent', staff: 'Paid Media: Alex', status: 'QBR Scheduled' },
    campaign: 'Airflow Masters — PPC Retainer',
  },
  'Comfort Zone Heating & Air': {
    pipeline: '$38,400', leads: 118, conv: 75, noShow: 4.5,
    lead: { name: 'Ford Prefect', email: 'ford@comfortzonehvac.com', phone: '+1 (555) 424-4242', source: 'Referral', tags: ['Retainer Active'], serviceType: 'Social + PPC Bundle', budget: '$3,800/mo', history: 'Referral → Kickoff → Campaign Live' },
    appt: { dateTime: 'Jun 09, 2026 at 10:00 AM', contact: 'Ford Prefect', staff: 'AM: Sarah', status: 'Kickoff Complete' },
    campaign: 'Comfort Zone — Heat Pump Launch',
  },
  'Apex Climate Control': {
    pipeline: '$56,000', leads: 184, conv: 58, noShow: 11.2,
    lead: { name: 'Peter Parker', email: 'spidey@apexclimate.com', phone: '+1 (555) 800-4444', source: 'Google LSA', tags: ['At Risk', 'Churn Signal'], serviceType: 'LSA Lead — AC Repair', budget: '$4,500/mo', history: 'LSA Call → Save Call → Escalation Pending' },
    appt: { dateTime: 'Jun 12, 2026 at 09:30 AM', contact: 'Peter Parker', staff: 'AM: Sarah', status: 'Client No-Show' },
    campaign: 'Apex — Emergency HVAC Search',
  },
  'Prime Comfort HVAC': {
    pipeline: '$22,400', leads: 88, conv: 55, noShow: 12.8,
    lead: { name: 'Harry Osborn', email: 'harry@primecomfort.com', phone: '+1 (555) 800-6666', source: 'Email', tags: ['Critical', 'Renewal at Risk'], serviceType: 'Retainer Renewal — Full Service', budget: '$3,400/mo', history: 'Renewal Notice → Save Call → Proposal Sent' },
    appt: { dateTime: 'Jun 10, 2026 at 04:00 PM', contact: 'Harry Osborn', staff: 'AM: Sarah', status: 'Client No-Show' },
    campaign: 'Prime Comfort — PPC + SEO',
  },
  'TotalCare Home Solutions': {
    pipeline: '$19,100', leads: 72, conv: 52, noShow: 14.1,
    lead: { name: 'Clark Kent', email: 'ckent@totalcarehome.com', phone: '+1 (555) 800-2222', source: 'Referral', tags: ['Critical', 'Churn Signal'], serviceType: 'Multi-Trade Retainer', budget: '$1,900/mo', history: 'QBR Missed → Escalation Email → Save Plan Draft' },
    appt: { dateTime: 'Jun 08, 2026 at 10:00 AM', contact: 'Clark Kent', staff: 'AM: Sarah', status: 'Client No-Show' },
    campaign: 'TotalCare — Home Services Bundle',
  },
  'Rapid Response Air': {
    pipeline: '$14,200', leads: 58, conv: 48, noShow: 16.4,
    lead: { name: 'Matt Murdock', email: 'mmurdock@rapidresponseair.com', phone: '+1 (555) 200-3000', source: 'Inbound Email', tags: ['Critical', 'Cancellation Notice'], serviceType: 'Retainer — Emergency AC Campaigns', budget: '$2,100/mo', history: 'Churn Notice → Executive Call → Audit Scheduled' },
    appt: { dateTime: 'Jun 07, 2026 at 03:00 PM', contact: 'Matt Murdock', staff: 'AM: Sarah', status: 'Client No-Show' },
    campaign: 'Rapid Response — LSA Emergency',
  },
};

function buildGHLData() {
  const lines = ['    const GHL_CLIENT_DATA = {'];
  for (const name of CLIENTS) {
    const p = GHL_PROFILES[name];
    const l = p.lead;
    const a = p.appt;
    lines.push(`      "${name}": {`);
    lines.push(`        pipelineValue: "${p.pipeline}",`);
    lines.push(`        totalLeads: ${p.leads},`);
    lines.push(`        conversionRate: ${p.conv},`);
    lines.push(`        meetingNoShowRate: ${p.noShow},`);
    lines.push(`        leads: [`);
    lines.push(`          { name: "${l.name}", email: "${l.email}", phone: "${l.phone}", source: "${l.source}", tags: ${JSON.stringify(l.tags)}, serviceType: "${l.serviceType}", budget: "${l.budget}", history: "${l.history}" }`);
    lines.push(`        ],`);
    lines.push(`        appointments: [`);
    lines.push(`          { dateTime: "${a.dateTime}", contact: "${a.contact}", staff: "${a.staff}", status: "${a.status}" }`);
    lines.push(`        ],`);
    lines.push(`        funnelStages: [${p.leads}, ${Math.round(p.leads * 0.82)}, ${Math.round(p.leads * 0.68)}, ${Math.round(p.leads * 0.62)}, ${Math.round(p.leads * p.conv / 100)}],`);
    lines.push(`        sourceBreakdown: [`);
    lines.push(`          { source: "Google Ads / LSA", count: ${Math.round(p.leads * 0.42)} },`);
    lines.push(`          { source: "Referral / Inbound", count: ${Math.round(p.leads * 0.28)} },`);
    lines.push(`          { source: "Organic / SEO", count: ${Math.round(p.leads * 0.18)} },`);
    lines.push(`          { source: "Email Outreach", count: ${Math.round(p.leads * 0.12)} }`);
    lines.push(`        ]`);
    lines.push(`      },`);
  }
  lines[lines.length - 1] = lines[lines.length - 1].replace(/,$/, '');
  lines.push('    };');
  return lines.join('\n');
}

// Replace MAILCHIMP and GHL data blocks
html = html.replace(
  /    const MAILCHIMP_CLIENT_DATA = \{[\s\S]*?\n    \};\n\n    const GHL_CLIENT_DATA = \{[\s\S]*?\n    \};/,
  `${buildMailchimpData()}\n\n${buildGHLData()}`
);

// UI label updates — Mailchimp tab
const uiReplacements = [
  ['<!-- AI Customer Insights Tab directly visible -->', '<!-- Client Email Sentiment tab -->'],
  ['Loading AI customer summary...', 'Loading agency relationship summary...'],
  ['Customer Sentiment', 'Account Sentiment'],
  ['Top Customer Complaint', 'Top Account Friction'],
  ['Customer Satisfaction Trend (MoM)', 'Client Satisfaction Trend (MoM)'],
  ['Customer Email Intent Analysis', 'Client Email Intent Analysis'],
  ['Top Customer Complaints', 'Top Account Friction Points'],
  ['* AI automatically clusters customer emails into topics to save reading time.', '* AI clusters client account emails into agency topics to surface relationship signals.'],
  ['GHL Contact Lead Details', 'Managed Lead Pipeline'],
  ['Appointment & Booking Details', 'Agency Meeting & Pipeline'],
  ['Booking Status', 'Meeting Status'],
  ['Current state of scheduling', 'Current state of account engagement'],
  ['Appointment Date & Time', 'Meeting Date & Time'],
  ['Linked CRM Lead', 'Client Contact'],
  ['Assigned Representative', 'Explore Media Owner'],
  ['Latest Google Review', 'Client Testimonial'],
  ['(via GHL Reputation)', '(client account feedback)'],
  ['Service & Budget', 'Campaign Scope & Retainer'],
  ['Contact Activity History', 'Pipeline Activity History'],
];

// Call transcript bulk agency reframing
const callTranscriptReplacements = [
  ['Service Tech Scheduling Gaps', 'Account manager capacity gaps'],
  ['Dispatch booking software sync lag', 'GA4 conversion tracking gap'],
  ['Occasional dispatch double-booking on emergency calls', 'Occasional campaign launch scheduling conflicts'],
  ['Dispatcher Calendar Conflicts', 'Creative approval bottleneck'],
  ['Client is highly satisfied with emergency call lead flow.', 'Client is highly satisfied with PPC lead quality and reporting.'],
  ['Opportunities: Propose budget expansion for drain cleaning upsell campaigns.', 'Opportunities: Propose retainer tier expansion for seasonal campaign bundle.'],
  ['Solid lead volume, but callback delays on sewer line jobs are impacting sentiment.', 'Solid campaign performance, but reporting delays are impacting account sentiment.'],
  ['Complaints about callback delays ↑', 'Complaints about reporting delays ↑'],
  ['Online booking form bugs', 'Client portal login issues'],
  ['Fix online booking form authentication bug', 'Fix client reporting portal authentication bug'],
  ['Draft sewer line Google Ads ad groups', 'Draft Q3 Google Ads ad group restructure'],
  ['Deploy hydro jetting service landing page', 'Deploy seasonal landing page refresh'],
  ['Emergency Callback Wait Time', 'QBR overdue'],
  ['Booking Portal Login Failures', 'Client reporting portal login failures'],
  ['Parts Supply Delay', 'Creative deliverable backlog'],
  ['Homeowners reporting booking form reset loop', 'Clients reporting dashboard login reset loop'],
  ['Quote emails going to spam folder', 'Monthly report emails going to spam folder'],
  ['Lead generation for drain cleaning remains stable, but client retention is threatened.', 'Lead generation remains stable, but retainer renewal is at risk.'],
  ['Booking portal sync issues are generating high support ticket volumes, dragging overall health down.', 'Reporting portal sync issues are generating high support ticket volumes, dragging overall health down.'],
  ['Urgent action: Deploy the booking portal hotfix to prevent sign-in loop issues.', 'Urgent action: Deploy the client portal hotfix to prevent sign-in loop issues.'],
  ['Strong multi-trade performance. Dispatch backlog and seasonal demand spikes are minor issues.', 'Strong multi-channel performance. Deliverable backlog and seasonal campaign spikes are minor issues.'],
  ['Fleet GPS tracker maintenance reports', 'Campaign tracking pixel maintenance reports'],
  ['Verify seasonal maintenance plan tracking links', 'Verify seasonal campaign tracking links'],
  ['Fleet Vehicle Maintenance Delay', 'Campaign Launch Delay'],
  ['Technician Scheduling Conflicts', 'Creative approval scheduling conflicts'],
  ['Dispatch Queue Backlog Reports', 'Deliverable approval backlog reports'],
  ['GPS tracker device sensor failure', 'Conversion tracking pixel failure'],
  ['HVAC tune-up and maintenance plan campaigns exceeded goal by 22%.', 'Seasonal PPC and maintenance-plan campaigns exceeded goal by 22%.'],
  ['Opportunities: Expand targeted ads for whole-home service bundle launch.', 'Opportunities: Expand retainer scope for whole-home services campaign bundle.'],
  ['Good results. Call center hold times and invoice mismatches are key friction points.', 'Good results. AM response times and invoice mismatches are key friction points.'],
  ['Call center callback delays', 'AM response delays'],
  ['Correct service invoice mismatch on tune-up jobs', 'Correct retainer invoice mismatch on media spend'],
  ['Create Facebook Ads copy for AC tune-up promotions', 'Create Facebook Ads copy for seasonal promo campaigns'],
  ['Review call center dispatch scheduling logic', 'Review campaign launch scheduling workflow'],
  ['Call Center Hold Time Delays', 'AM response time delays'],
  ['Incorrect Billing Records Sent', 'Incorrect retainer invoices sent'],
  ['Dispatch Queue Overload', 'Deliverable approval queue overload'],
  ['AC tune-up promotion continues to drive high traffic, but dispatch wait times are causing frustration.', 'Seasonal promo campaign continues to drive strong ROAS, but reporting delays are causing frustration.'],
  ['Client requested paper invoice mail-outs for commercial accounts.', 'Client requested paper invoice mail-outs for retainer billing.'],
  ['Exceptional sentiment. Emergency dispatch routing is highly rated.', 'Exceptional sentiment. Campaign ROI reporting is highly rated.'],
  ['Friction on strict same-day cancellation fees', 'Friction on strict scope-change approval policy'],
  ['Write copy for emergency plumbing landing page', 'Write copy for seasonal landing page refresh'],
  ['Launch Google Search campaigns for leak detection services', 'Launch Google Search campaigns for high-intent service keywords'],
  ['Same-Day Cancellation Fee Dispute', 'Scope change fee dispute'],
  ['After-Hours Dispatch Fee Disputes', 'Rush deliverable fee disputes'],
  ['Technician Dispatch Delay Reports', 'Creative deliverable delay reports'],
  ['Excellent reviews for fast emergency plumbing response times.', 'Excellent reviews for fast campaign turnaround and lead quality.'],
  ['Organic SEO traffic to the service area blog increased 24% after keyword optimization.', 'Organic SEO traffic to the client blog increased 24% after keyword optimization.'],
  ['Opportunities: Promote commercial maintenance contract packages next month.', 'Opportunities: Promote commercial retainer expansion packages next month.'],
  ['Moderate health. High summer AC repair demand causing booking backlogs.', 'Moderate health. High summer demand causing campaign budget pacing issues.'],
  ['AC repair response delays', 'Campaign launch delays'],
  ['Scheduling errors in database', 'Reporting data discrepancies'],
  ['Resolve AC dispatch system scheduling backlog', 'Resolve campaign launch scheduling backlog'],
  ['Set up automatic SMS callback notifications', 'Set up automated client reporting notifications'],
  ['Summer AC Repair Appointment Delay', 'PPC campaign launch delay'],
  ['Emergency Dispatch Fee Costs', 'Cost per lead spike concerns'],
  ['Missed Scheduled Time Window', 'Missed reporting deadline'],
  ['Technician failed to call before arrival', 'AM failed to respond before QBR'],
  ['Overpriced diagnostic quotes compared to online estimators', 'CPL above benchmark vs. industry averages'],
  ['AC repair inquiries spiked, but scheduling bottlenecks limited campaign conversion efficiency.', 'Lead inquiries spiked, but landing page bottlenecks limited campaign conversion efficiency.'],
  ['Created automated reminders for SMS notifications to reduce no-shows.', 'Created automated reminders for QBR scheduling to reduce client no-shows.'],
  ['Pending action: Resolving the dispatch API lag database syncing issue.', 'Pending action: Resolving the CallRail → CRM webhook syncing issue.'],
  ['Opportunities: Launch HVAC maintenance plan subscription campaign in late summer.', 'Opportunities: Launch maintenance-plan subscription campaign in late summer.'],
  ['Low-end Yellow. Summer dispatch fee complaints and callback response times are dragging health down.', 'Low-end Yellow. CPL concerns and reporting response times are dragging health down.'],
  ['Callback response delays', 'Reporting response delays'],
  ['High dispatch fee friction', 'High CPL friction'],
  ['Fix emergency callback dispatch webhooks', 'Fix CallRail → CRM webhook integration'],
  ['Draft social media post addressing dispatch costs', 'Draft social media post addressing CPL transparency'],
  ['Dispatch Callback Delay (Emergency)', 'Missed reporting deadline'],
  ['High Diagnostic & Call Out Fees', 'Cost per lead above target'],
  ['Technician Professionalism Reports', 'Creative quality concerns'],
  ['Emergency calls not routed to active operator', 'Leads not routing to active CRM pipeline'],
  ['Billing portal invoice disputes (unresolved)', 'Retainer invoice disputes (unresolved)'],
  ['High negative feedback concerning dispatch wait times and high entry fees.', 'High negative feedback concerning reporting delays and CPL increases.'],
  ['Marketing campaign conversion rates are high, but backend logistics are bottlenecked.', 'Marketing campaign conversion rates are high, but deliverable approval workflow is bottlenecked.'],
  ['Urgent integration of Twilio SLA triggers in progress to resolve callback delays.', 'Urgent integration of automated reporting SLA triggers in progress.'],
  ['Opportunities: Create clear transparent pricing comparison page to build trust.', 'Opportunities: Create clear transparent CPL benchmarking report to build trust.'],
  ['High Risk. Severe escalation regarding missed emergency windows and slow dispatcher callbacks.', 'High Risk. Severe escalation regarding missed QBRs and slow AM response times.'],
  ['Missed emergency windows ↑', 'Missed QBR / kickoff no-shows ↑'],
  ['No-show technician reports', 'Client meeting no-show reports'],
  ['Unresponsive dispatcher', 'Unresponsive client POC'],
  ['Reconcile emergency dispatcher no-show reports', 'Reconcile client QBR no-show reports'],
  ['Deploy real-time technician GPS tracking link', 'Deploy real-time campaign performance dashboard link'],
  ['Draft emergency rate structure update', 'Draft retainer tier restructure proposal'],
  ['Send SLA credit adjustments to billing department', 'Send SLA credit adjustments on overdue deliverables'],
  ['Re-engage paused Google Ads emergency search campaigns', 'Re-engage paused Google Ads search campaigns'],
  ['Customer invoicing sent with double taxes', 'Retainer invoice sent with duplicate line items'],
  ['Call center scheduling system conflicts', 'Campaign launch scheduling conflicts'],
];

// GHL render fallbacks
html = html.replace(
  `      const pipelineStage = "Site Estimate Scheduled";
      const adCampaign = "Emergency Furnace Outage SEO";
      const lastCommunication = "Outbound Call Answered (Yesterday)";
      const nextAction = "Confirm service tech dispatch time";

      const latestReview = {
        author: "Douglas P.",
        rating: 5,
        text: "Super fast response on a hot day. The technician diagnosed and fixed my HVAC unit in 30 minutes flat."
      };`,
  `      const pipelineStage = data.leads[0]?.history?.includes("Proposal") ? "Proposal Sent" : "Discovery Call Booked";
      const adCampaign = data.leads[0]?.serviceType?.includes("—") ? data.leads[0].serviceType.split("—")[1].trim() + " Campaign" : "Managed PPC — Seasonal";
      const lastCommunication = "Strategy email replied (Yesterday)";
      const nextAction = "Confirm Q3 media plan sign-off";

      const latestReview = {
        author: "Douglas P.",
        rating: 5,
        text: "Explore Media doubled our inbound leads in 90 days. Reporting is clear and the team is responsive."
      };`
);

// GHL status badge handling for agency meeting statuses
html = html.replace(
  `      if (appt.status === "Booked") statusBadge = "badge-blue";
      else if (appt.status === "Attended" || appt.status === "Completed") statusBadge = "badge-success";
      else if (appt.status === "No-Show") statusBadge = "badge-danger";
      else if (appt.status === "Canceled") statusBadge = "badge-secondary";`,
  `      if (appt.status === "QBR Scheduled" || appt.status === "Booked") statusBadge = "badge-blue";
      else if (appt.status === "Kickoff Complete" || appt.status === "Attended" || appt.status === "Completed") statusBadge = "badge-success";
      else if (appt.status === "Client No-Show" || appt.status === "No-Show") statusBadge = "badge-danger";
      else if (appt.status === "Canceled") statusBadge = "badge-secondary";`
);

function applyReplacements(content, pairs) {
  for (const [from, to] of pairs) {
    content = content.split(from).join(to);
  }
  return content;
}

html = applyReplacements(html, uiReplacements);
html = applyReplacements(html, callTranscriptReplacements);

fs.writeFileSync(dashboardPath, html);
console.log('dashboard.html agency alignment complete.');
console.log('  - MAILCHIMP_CLIENT_DATA: regenerated (15 clients, agency sentiment model)');
console.log('  - GHL_CLIENT_DATA: regenerated (15 clients, agency pipeline model)');
console.log('  - CALL_TRANSCRIPT: bulk reframed to agency narrative');
console.log('  - UI labels + GHL fallbacks updated');
