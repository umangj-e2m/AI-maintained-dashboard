#!/usr/bin/env node
/**
 * Removes all spa/medical/wellness template residue from dashboard.html
 * and aligns mock data with Explore Media HVAC / plumbing / home services clients.
 */
const fs = require('fs');
const path = require('path');

const dashboardPath = path.join(__dirname, '../dashboard.html');
let html = fs.readFileSync(dashboardPath, 'utf8');

// ─── Static HTML copy ───────────────────────────────────────────────────────
const staticReplacements = [
  ['Analysis Dashboard', 'Client Performance Dashboard'],
  ['Published "Wellness Tips" Blog Post', 'Published "Summer HVAC Promo" Landing Page'],
  ['Most recent feedback lists uploaded directly by regional\n                  patients.', 'Most recent feedback from Google Business Profile customers.'],
  ['best wellness center near me', 'emergency ac repair near me'],
  ['holistic health benefits', 'plumbing leak repair cost'],
  ['health spa booking', 'hvac maintenance plan quote'],
];

// ─── MOCK_DATA global analytics ─────────────────────────────────────────────
const mockDataReplacements = [
  ['/blog/wellness-seo-tips', '/blog/local-seo-for-contractors'],
  ['query: "foundation health & wellness"', 'query: "ac repair near me"'],
  ['query: "jag medical spa services"', 'query: "emergency plumber [city]"'],
  ['query: "vital roots functional medicine"', 'query: "hvac installation quote"'],
  ['query: "core wellness & recovery center"', 'query: "local seo for contractors"'],
  ['query: "vitality medical spa booking"', 'query: "drain cleaning service near me"'],
  ['query: "inner calm therapy near me"', 'query: "furnace repair cost"'],
  ['query: "functional medicine therapy"', 'query: "home services ppc agency"'],
  ['query: "medical spa local deals"', 'query: "explore media case studies"'],
  ['query: "core wellness rehab"', 'query: "plumbing leads google ads"'],
  ['query: "foundation wellness consult"', 'query: "hvac marketing agency"'],
  ['Amazing Botox results, very natural looking! Staff was so professional.', 'Same-day AC repair — tech was professional and fixed our unit fast.'],
  ['Best laser hair removal in the city. Already seeing results after 2 sessions.', 'Honest quote on furnace install. Crew showed up on time and cleaned up.'],
  ['Love this place! My skin has never looked better after the facial treatment.', 'Great emergency plumbing response. Fixed our burst pipe within an hour.'],
  ['Wonderful service and elegant interior. Botox was slightly delayed but session went flawless.', 'Professional duct cleaning service. Noticed better airflow immediately.'],
  ['Wellness Brand — Search', 'Emergency HVAC — Search'],
  ['Wellness Brand - Search', 'Emergency HVAC - Search'],
  ['keyword: "foundation health wellness"', 'keyword: "ac repair near me"'],
  ['keyword: "jag medical spa treatments"', 'keyword: "emergency plumber"'],
  ['keyword: "vital roots functional medicine"', 'keyword: "hvac installation quote"'],
  ['keyword: "inner calm therapy booking"', 'keyword: "drain cleaning near me"'],
  ['keyword: "core wellness recovery"', 'keyword: "furnace tune up"'],
];

// ─── CALL_TRANSCRIPT_ANALYSIS_DATA (6 migrated clients) ─────────────────────
const callTranscriptReplacements = [
  ['Practitioner Scheduling Constraints', 'Service Tech Scheduling Gaps'],
  ['Front desk booking software sync lag', 'Dispatch booking software sync lag'],
  ['Occasional complaints about double-booking in clinic', 'Occasional dispatch double-booking on emergency calls'],
  ['Update Botox landing page copy', 'Update emergency plumbing landing page copy'],
  ['Esthetician Calendar Double-Bookings', 'Dispatcher Calendar Conflicts'],
  ['Client is highly satisfied with laser hair removal lead flow.', 'Client is highly satisfied with emergency call lead flow.'],
  ['Opportunities: Propose budget expansion for high-margin dermal filler campaigns.', 'Opportunities: Propose budget expansion for drain cleaning upsell campaigns.'],
  ['Satisfactory results, but lab result review scheduling delays are impacting mood.', 'Solid lead volume, but callback delays on sewer line jobs are impacting sentiment.'],
  ['Complaints about lab delays ↑', 'Complaints about callback delays ↑'],
  ['Patient portal login bugs', 'Online booking form bugs'],
  ['Resolve Patient Portal API authentication bug', 'Fix online booking form authentication bug'],
  ['Draft thyroid supplement Google Ads ad groups', 'Draft sewer line Google Ads ad groups'],
  ['Deploy lab review schedule landing page', 'Deploy hydro jetting service landing page'],
  ['Lab Result Delivery Wait Time', 'Emergency Callback Wait Time'],
  ['Patient Portal Login Failures', 'Booking Portal Login Failures'],
  ['Supplement Supply Chain Delay', 'Parts Supply Delay'],
  ['Patients complaining about password reset loop', 'Homeowners reporting booking form reset loop'],
  ['Lab email attachments going to spam folder', 'Quote emails going to spam folder'],
  ['Lead generation for thyroid health programs remains stable, but patient retention is threatened.', 'Lead generation for drain cleaning remains stable, but client retention is threatened.'],
  ['Portal sync issues are generating high support ticket volumes, dragging overall health down.', 'Booking portal sync issues are generating high support ticket volumes, dragging overall health down.'],
  ['Urgent action: Deploy the portal hotfix to prevent sign-in loop issues.', 'Urgent action: Deploy the booking portal hotfix to prevent sign-in loop issues.'],
  ['Outstanding results. Locker room crowd and cryotherapy machine downtime are minor issues.', 'Strong multi-trade performance. Dispatch backlog and seasonal demand spikes are minor issues.'],
  ['Cryo chamber maintenance reports', 'Fleet GPS tracker maintenance reports'],
  ['Verify cold plunge pass tracking links', 'Verify seasonal maintenance plan tracking links'],
  ['Cryo Chamber Maintenance Delay', 'Fleet Vehicle Maintenance Delay'],
  ['Sauna Scheduling Conflicts', 'Technician Scheduling Conflicts'],
  ['Locker Room Congestion Reports', 'Dispatch Queue Backlog Reports'],
  ['Cryotherapy device heater sensor failure', 'GPS tracker device sensor failure'],
  ['Sauna and cold plunge therapy promotion campaigns exceeded goal by 22%.', 'HVAC tune-up and maintenance plan campaigns exceeded goal by 22%.'],
  ['Opportunities: Expand targeted ads for the high-end hyperbaric chamber launch.', 'Opportunities: Expand targeted ads for whole-home service bundle launch.'],
  ['Good results. Reception check-in delays and parking issues are key customer friction points.', 'Good results. Call center hold times and invoice mismatches are key friction points.'],
  ['Receptionist check-in delays', 'Call center callback delays'],
  ['Correct IV Hydration billing invoice mismatch', 'Correct service invoice mismatch on tune-up jobs'],
  ['Create Facebook Ads copy for filler promotions', 'Create Facebook Ads copy for AC tune-up promotions'],
  ['Review spa front-office scheduling logic', 'Review call center dispatch scheduling logic'],
  ['Spa Front-Office Check-in Delays', 'Call Center Hold Time Delays'],
  ['Parking Lot Congestion', 'Dispatch Queue Overload'],
  ['IV Hydration promotion continues to drive high traffic, but lobby wait times are causing frustration.', 'AC tune-up promotion continues to drive high traffic, but dispatch wait times are causing frustration.'],
  ['Client requested physical/paper statements mail-outs option for senior members.', 'Client requested paper invoice mail-outs for commercial accounts.'],
  ['Exceptional sentiment. Therapist matchmaking system is highly rated.', 'Exceptional sentiment. Emergency dispatch routing is highly rated.'],
  ['Friction on strict 24h late cancellation fees', 'Friction on strict same-day cancellation fees'],
  ['Write copy for therapist matchmaking landing page', 'Write copy for emergency plumbing landing page'],
  ['Launch Google Search campaigns for stress management', 'Launch Google Search campaigns for leak detection services'],
  ['Test insurance verification API triggers', 'Test LSA lead verification API triggers'],
  ['Late Cancellation Penalty Dispute', 'Same-Day Cancellation Fee Dispute'],
  ['Acoustic Noise Privacy In Rooms', 'After-Hours Dispatch Fee Disputes'],
  ['Therapist Match Delay Reports', 'Technician Dispatch Delay Reports'],
  ['Excellent reviews for matching patients with specialized CBT therapists.', 'Excellent reviews for fast emergency plumbing response times.'],
  ['Organic SEO traffic to the therapy blog increased 24% after keyword optimization.', 'Organic SEO traffic to the service area blog increased 24% after keyword optimization.'],
  ['Opportunities: Promote corporate mindfulness workshop packages next month.', 'Opportunities: Promote commercial maintenance contract packages next month.'],
];

// ─── MAILCHIMP_CLIENT_DATA ──────────────────────────────────────────────────
const mailchimpReplacements = [
  ['Practitioner Schedules', 'Technician Schedules'],
  ['Treatment Plans', 'Service Quotes'],
  ['Skin Care Memberships', 'Maintenance Plans'],
  ['practitioner scheduling constraints', 'technician scheduling gaps'],
  ['treatment plans and membership pricing', 'service quotes and maintenance plan pricing'],
  ['premium memberships', 'annual maintenance plans'],
  ['Practitioner fully booked', 'Technician fully booked'],
  ['Botox Treatments', 'Drain Cleaning'],
  ['Laser Therapy', 'Water Heater Repair'],
  ['Esthetician Schedules', 'Dispatcher Schedules'],
  ['This week patients focused on laser appointment availability', 'This week customers focused on emergency call availability'],
  ['treatment outcomes', 'job completion outcomes'],
  ['long wait times in the lobby', 'long dispatch wait times'],
  ['Difficult patient portal', 'Difficult online booking portal'],
  ['Blood Work Analysis', 'Sewer Camera Inspection'],
  ['Thyroid Protocols', 'Hydro Jetting'],
  ['Supplement Shipments', 'Warranty Claims'],
  ['lab portal logins and supplement order tracking', 'booking portal logins and invoice tracking'],
  ['blood work review schedules', 'sewer line inspection schedules'],
  ['prescription refill approvals', 'emergency dispatch approvals'],
  ['cryotherapy machine downtime and lockers', 'dispatch backlog and parts delays'],
  ['Cryo chamber offline', 'Service truck offline'],
  ['Cryotherapy Sessions', 'HVAC Install'],
  ['Sauna Bookings', 'Electrical Panel Upgrades'],
  ['Cold Plunge Pass', 'Home Warranty Plans'],
  ['sauna and cold plunge therapies', 'HVAC installs and electrical upgrades'],
  ['Cryotherapy downtime', 'technician availability gaps'],
  ['Dermal Fillers', 'AC Tune-Ups'],
  ['IV Hydration Therapy', 'Furnace Repair'],
  ['Facial Packages', 'Duct Cleaning'],
  ['IV hydration packages', 'AC tune-up packages'],
  ['CBT Sessions', 'Pipe Repair'],
  ['Massage Therapy', 'Leak Detection'],
  ['Therapist Matches', 'Emergency Dispatch'],
  ['Therapy outcomes are highly rated', 'Dispatch response times are highly rated'],
  ['patient-therapist matchmaking', 'lead-to-job dispatch routing'],
  ['Therapist delay', 'Technician delay'],
  ['Room acoustic privacy', 'Dispatch fee dispute'],
  ['Room cleanliness', 'Job site cleanup'],
];

// ─── GHL_CLIENT_DATA leads & appointments (6 clients) ───────────────────────
const ghlReplacements = [
  ['IV Therapy Package', 'AC Tune-Up Package'],
  ['Botox Treatment', 'Drain Cleaning Service'],
  ['Skin Care Assessment', 'Duct Inspection'],
  ['Therapeutic Massage', 'Furnace Maintenance'],
  ['Sarah K. (Nurse)', 'Tech Alex (HVAC)'],
  ['Dr. Stone (MD)', 'Dispatcher Sam'],
  ['Alex M. (Rep)', 'Tech Marcus (Plumbing)'],
  ['Esthetician Lisa', 'Tech Roger (Plumbing)'],
  ['Dermal Fillers', 'Water Heater Install'],
  ['Laser Treatment', 'Sewer Line Repair'],
  ['Functional Consultation', 'Whole-Home Assessment'],
  ['Thyroid Protocol Consultation', 'Sewer Camera Inspection'],
  ['Gut Health Analysis', 'Hydro Jetting Quote'],
  ['Adrenal Fatigue Assessment', 'Emergency Pipe Repair'],
  ['Thyroid Help', 'Sewer Emergency'],
  ['Corporate Wellness Membership', 'Multi-Trade Service Bundle'],
  ['Cold Plunge Monthly Pass', 'Annual Maintenance Plan'],
  ['Hyperbaric Chamber Session', 'Electrical Panel Upgrade'],
  ['Cryo Pass', 'Maintenance Plan'],
  ['IV Hydration Bundle', 'AC Replacement Quote'],
  ['Facial Package', 'Duct Cleaning Package'],
  ['Mindfulness Package', 'Emergency Pipe Repair'],
  ['Therapeutic Counseling', 'Water Heater Replacement'],
  ['Stress CBT', 'Emergency Lead'],
  ['Lip Filler', 'Water Heater'],
  ['IV Drip', 'AC Install'],
  ['IV Therapy', 'AC Tune-Up'],
];

// ─── Remove isSpa conditional logic ─────────────────────────────────────────
html = html.replace(
  /      \/\/ Determine category \(Spa vs HVAC\) for dynamic campaign\/review fallbacks\n      const isSpa = clientName\.toLowerCase\(\)\.includes\("spa"\)[\s\S]*?const latestReview = isSpa \? \{[\s\S]*?\} : \{[\s\S]*?\};/,
  `      const pipelineStage = "Site Estimate Scheduled";
      const adCampaign = "Emergency Furnace Outage SEO";
      const lastCommunication = "Outbound Call Answered (Yesterday)";
      const nextAction = "Confirm service tech dispatch time";

      const latestReview = {
        author: "Douglas P.",
        rating: 5,
        text: "Super fast response on a hot day. The technician diagnosed and fixed my HVAC unit in 30 minutes flat."
      };`
);

function applyReplacements(content, pairs) {
  for (const [from, to] of pairs) {
    content = content.split(from).join(to);
  }
  return content;
}

html = applyReplacements(html, staticReplacements);
html = applyReplacements(html, mockDataReplacements);
html = applyReplacements(html, callTranscriptReplacements);
html = applyReplacements(html, mailchimpReplacements);
html = applyReplacements(html, ghlReplacements);

fs.writeFileSync(dashboardPath, html);

// Verify remaining spa/medical terms
const spaPattern = /wellness|medical spa|botox|therapy center|patient portal|practitioner|iv hydration|cryotherapy|thyroid|esthetician|dermal filler|laser hair|functional medicine|mindfulness|hyperbaric|cold plunge|sauna booking|cbt session/i;
const matches = html.match(new RegExp(spaPattern.source, 'gi')) || [];
const unique = [...new Set(matches.map(m => m.toLowerCase()))];

console.log(`dashboard.html remediated. Remaining flagged terms (${unique.length}):`, unique.slice(0, 20).join(', ') || 'none');
