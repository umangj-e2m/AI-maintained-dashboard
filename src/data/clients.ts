import { DEFAULT_CLIENT, EXPLORE_HVAC_CLIENT_NAMES } from './clientNames';

export type HealthStatus = 'green' | 'yellow' | 'red';
export type RiskLevel = 'Low' | 'Medium' | 'High' | 'Critical';
export type LifecycleStage = 'Onboarding' | 'Growing' | 'Stable' | 'At Risk' | 'Re-engagement' | 'Expansion';
export type ServiceCategory = 'HVAC' | 'Plumbing' | 'Home Services';

export interface Client {
  id: number;
  name: string;
  status: HealthStatus;
  category: ServiceCategory;
  score: number;
  alerts: number;
  trend: 'up' | 'down' | 'flat';
  revenue: string;
  lastChecked: string;
  healthScore: number;
  risk: RiskLevel;
  churnRisk: number;
  accountManager: string;
  lifecycleStage: LifecycleStage;
  monthlyChange: number;
  lastMeeting: string;
  lastEmailReply: string;
  lastTouchpoint: string;
  daysSinceContact: number;
  openTasks: number;
  overdueTasks: number;
  delayedDeliverables: number;
  blockedProjects: number;
  trafficGrowth: number;
  leadGrowth: number;
  revenueGrowth: number;
  roasTrend: number;
  seoHealth: number;
  ppcHealth: number;
  gbpHealth: number;
  websiteHealth: number;
  satisfactionScore: number;
  revenueDeclinePct: number;
  consecutiveDecliningMonths: number;
  negativeReviews: number;
  ratingDrop: number;
  meetingFrequency: number;
  emailEngagement: number;
  responseRate: number;
  executiveInvolvement: number;
  breakdown: {
    traffic: number;
    leads: number;
    revenue: number;
    sentiment: number;
    delivery: number;
    communication: number;
  };
  aiFlags: string[];
  aiRecommendations: string[];
  redFlags: string[];
  upsellOpportunity: boolean;
  crossSellOpportunity: boolean;
  budgetIncreaseSignal: boolean;
}

export const ALL_CLIENTS: Client[] = [
  {
    id: 1, name: 'Pure Air Solutions', status: 'green', category: 'HVAC',
    score: 94, alerts: 0, trend: 'up', revenue: '$6,300', lastChecked: '30m ago',
    healthScore: 94, risk: 'Low', churnRisk: 7, accountManager: 'Jennifer', lifecycleStage: 'Expansion',
    monthlyChange: 7, lastMeeting: '6 days ago', lastEmailReply: '1 day ago', lastTouchpoint: '1 day ago',
    daysSinceContact: 1, openTasks: 2, overdueTasks: 0, delayedDeliverables: 0, blockedProjects: 0,
    trafficGrowth: 14, leadGrowth: 11, revenueGrowth: 9, roasTrend: 7,
    seoHealth: 93, ppcHealth: 90, gbpHealth: 94, websiteHealth: 95, satisfactionScore: 93,
    revenueDeclinePct: 0, consecutiveDecliningMonths: 0, negativeReviews: 0, ratingDrop: 0,
    meetingFrequency: 90, emailEngagement: 92, responseRate: 94, executiveInvolvement: 88,
    breakdown: { traffic: 92, leads: 90, revenue: 94, sentiment: 93, delivery: 96, communication: 92 },
    aiFlags: [], aiRecommendations: [], redFlags: [],
    upsellOpportunity: true, crossSellOpportunity: true, budgetIncreaseSignal: true,
  },
  {
    id: 2, name: 'Frosty Systems', status: 'green', category: 'HVAC',
    score: 89, alerts: 0, trend: 'up', revenue: '$5,800', lastChecked: '5h ago',
    healthScore: 89, risk: 'Low', churnRisk: 11, accountManager: 'Jennifer', lifecycleStage: 'Stable',
    monthlyChange: 4, lastMeeting: '8 days ago', lastEmailReply: '2 days ago', lastTouchpoint: '2 days ago',
    daysSinceContact: 2, openTasks: 3, overdueTasks: 0, delayedDeliverables: 0, blockedProjects: 0,
    trafficGrowth: 7, leadGrowth: 6, revenueGrowth: 5, roasTrend: 4,
    seoHealth: 88, ppcHealth: 85, gbpHealth: 89, websiteHealth: 90, satisfactionScore: 88,
    revenueDeclinePct: 0, consecutiveDecliningMonths: 0, negativeReviews: 0, ratingDrop: 0,
    meetingFrequency: 82, emailEngagement: 85, responseRate: 88, executiveInvolvement: 78,
    breakdown: { traffic: 86, leads: 84, revenue: 88, sentiment: 88, delivery: 92, communication: 84 },
    aiFlags: [], aiRecommendations: [], redFlags: [],
    upsellOpportunity: false, crossSellOpportunity: false, budgetIncreaseSignal: false,
  },
  {
    id: 3, name: 'Precision HVAC Experts', status: 'green', category: 'HVAC',
    score: 91, alerts: 0, trend: 'up', revenue: '$7,200', lastChecked: '20m ago',
    healthScore: 91, risk: 'Low', churnRisk: 10, accountManager: 'Jennifer', lifecycleStage: 'Growing',
    monthlyChange: 6, lastMeeting: '4 days ago', lastEmailReply: '2 days ago', lastTouchpoint: '2 days ago',
    daysSinceContact: 2, openTasks: 3, overdueTasks: 0, delayedDeliverables: 0, blockedProjects: 0,
    trafficGrowth: 10, leadGrowth: 9, revenueGrowth: 7, roasTrend: 5,
    seoHealth: 90, ppcHealth: 88, gbpHealth: 91, websiteHealth: 92, satisfactionScore: 90,
    revenueDeclinePct: 0, consecutiveDecliningMonths: 0, negativeReviews: 0, ratingDrop: 0,
    meetingFrequency: 88, emailEngagement: 90, responseRate: 92, executiveInvolvement: 82,
    breakdown: { traffic: 88, leads: 90, revenue: 92, sentiment: 90, delivery: 94, communication: 88 },
    aiFlags: [], aiRecommendations: [], redFlags: [],
    upsellOpportunity: true, crossSellOpportunity: false, budgetIncreaseSignal: false,
  },
  {
    id: 4, name: 'Elite Air Systems', status: 'green', category: 'HVAC',
    score: 85, alerts: 0, trend: 'up', revenue: '$5,100', lastChecked: '4h ago',
    healthScore: 85, risk: 'Low', churnRisk: 15, accountManager: 'Jennifer', lifecycleStage: 'Stable',
    monthlyChange: 2, lastMeeting: '10 days ago', lastEmailReply: '3 days ago', lastTouchpoint: '3 days ago',
    daysSinceContact: 3, openTasks: 4, overdueTasks: 0, delayedDeliverables: 0, blockedProjects: 0,
    trafficGrowth: 5, leadGrowth: 4, revenueGrowth: 3, roasTrend: 2,
    seoHealth: 84, ppcHealth: 80, gbpHealth: 85, websiteHealth: 86, satisfactionScore: 84,
    revenueDeclinePct: 0, consecutiveDecliningMonths: 0, negativeReviews: 0, ratingDrop: 0,
    meetingFrequency: 75, emailEngagement: 80, responseRate: 85, executiveInvolvement: 70,
    breakdown: { traffic: 82, leads: 80, revenue: 85, sentiment: 84, delivery: 88, communication: 78 },
    aiFlags: [], aiRecommendations: [], redFlags: [],
    upsellOpportunity: false, crossSellOpportunity: true, budgetIncreaseSignal: false,
  },
  {
    id: 5, name: 'Keystone Home Comfort', status: 'green', category: 'Home Services',
    score: 92, alerts: 0, trend: 'up', revenue: '$4,200', lastChecked: '10m ago',
    healthScore: 92, risk: 'Low', churnRisk: 8, accountManager: 'Jennifer', lifecycleStage: 'Growing',
    monthlyChange: 5, lastMeeting: '3 days ago', lastEmailReply: '1 day ago', lastTouchpoint: '1 day ago',
    daysSinceContact: 1, openTasks: 4, overdueTasks: 0, delayedDeliverables: 0, blockedProjects: 0,
    trafficGrowth: 12, leadGrowth: 8, revenueGrowth: 6, roasTrend: 4,
    seoHealth: 90, ppcHealth: 88, gbpHealth: 92, websiteHealth: 94, satisfactionScore: 91,
    revenueDeclinePct: 0, consecutiveDecliningMonths: 0, negativeReviews: 0, ratingDrop: 0,
    meetingFrequency: 92, emailEngagement: 88, responseRate: 95, executiveInvolvement: 85,
    breakdown: { traffic: 90, leads: 88, revenue: 94, sentiment: 92, delivery: 95, communication: 90 },
    aiFlags: [], aiRecommendations: [], redFlags: [],
    upsellOpportunity: true, crossSellOpportunity: false, budgetIncreaseSignal: true,
  },
  {
    id: 6, name: 'Summit Plumbing & Drain', status: 'green', category: 'Plumbing',
    score: 88, alerts: 0, trend: 'up', revenue: '$2,800', lastChecked: '2h ago',
    healthScore: 88, risk: 'Low', churnRisk: 12, accountManager: 'Jennifer', lifecycleStage: 'Stable',
    monthlyChange: 3, lastMeeting: '7 days ago', lastEmailReply: '2 days ago', lastTouchpoint: '2 days ago',
    daysSinceContact: 2, openTasks: 3, overdueTasks: 0, delayedDeliverables: 0, blockedProjects: 0,
    trafficGrowth: 8, leadGrowth: 5, revenueGrowth: 4, roasTrend: 3,
    seoHealth: 86, ppcHealth: 82, gbpHealth: 88, websiteHealth: 90, satisfactionScore: 87,
    revenueDeclinePct: 0, consecutiveDecliningMonths: 0, negativeReviews: 0, ratingDrop: 0,
    meetingFrequency: 80, emailEngagement: 85, responseRate: 90, executiveInvolvement: 75,
    breakdown: { traffic: 85, leads: 82, revenue: 88, sentiment: 90, delivery: 92, communication: 85 },
    aiFlags: [], aiRecommendations: [], redFlags: [],
    upsellOpportunity: false, crossSellOpportunity: false, budgetIncreaseSignal: false,
  },
  {
    id: 7, name: 'AllSeason Home Services', status: 'green', category: 'Home Services',
    score: 95, alerts: 0, trend: 'up', revenue: '$5,500', lastChecked: '15m ago',
    healthScore: 95, risk: 'Low', churnRisk: 5, accountManager: 'Jennifer', lifecycleStage: 'Expansion',
    monthlyChange: 8, lastMeeting: '5 days ago', lastEmailReply: '1 day ago', lastTouchpoint: '1 day ago',
    daysSinceContact: 1, openTasks: 2, overdueTasks: 0, delayedDeliverables: 0, blockedProjects: 0,
    trafficGrowth: 15, leadGrowth: 12, revenueGrowth: 10, roasTrend: 8,
    seoHealth: 94, ppcHealth: 92, gbpHealth: 96, websiteHealth: 95, satisfactionScore: 94,
    revenueDeclinePct: 0, consecutiveDecliningMonths: 0, negativeReviews: 0, ratingDrop: 0,
    meetingFrequency: 95, emailEngagement: 92, responseRate: 96, executiveInvolvement: 90,
    breakdown: { traffic: 94, leads: 92, revenue: 96, sentiment: 95, delivery: 98, communication: 94 },
    aiFlags: [], aiRecommendations: [], redFlags: [],
    upsellOpportunity: true, crossSellOpportunity: true, budgetIncreaseSignal: true,
  },
  {
    id: 8, name: 'ProFlow Plumbing Co.', status: 'yellow', category: 'Plumbing',
    score: 74, alerts: 2, trend: 'down', revenue: '$3,100', lastChecked: '1h ago',
    healthScore: 74, risk: 'Medium', churnRisk: 42, accountManager: 'Sarah', lifecycleStage: 'At Risk',
    monthlyChange: -6, lastMeeting: '18 days ago', lastEmailReply: '5 days ago', lastTouchpoint: '5 days ago',
    daysSinceContact: 5, openTasks: 8, overdueTasks: 2, delayedDeliverables: 1, blockedProjects: 0,
    trafficGrowth: -4, leadGrowth: -8, revenueGrowth: -3, roasTrend: -2,
    seoHealth: 72, ppcHealth: 68, gbpHealth: 75, websiteHealth: 78, satisfactionScore: 70,
    revenueDeclinePct: 8, consecutiveDecliningMonths: 2, negativeReviews: 1, ratingDrop: 0.2,
    meetingFrequency: 55, emailEngagement: 62, responseRate: 70, executiveInvolvement: 45,
    breakdown: { traffic: 70, leads: 65, revenue: 72, sentiment: 68, delivery: 78, communication: 62 },
    aiFlags: ['Negative Sentiment', 'Lead Drop'],
    aiRecommendations: ['Audit LSA call extensions and tracking', 'Review Google Ads CPL by ad group', 'Launch seasonal offer landing page'],
    redFlags: ['MQL volume down 8%'],
    upsellOpportunity: false, crossSellOpportunity: true, budgetIncreaseSignal: false,
  },
  {
    id: 9, name: 'BlueLine Plumbing Services', status: 'yellow', category: 'Plumbing',
    score: 78, alerts: 1, trend: 'up', revenue: '$1,200', lastChecked: '3h ago',
    healthScore: 78, risk: 'Medium', churnRisk: 28, accountManager: 'Sarah', lifecycleStage: 'Re-engagement',
    monthlyChange: 4, lastMeeting: '14 days ago', lastEmailReply: '4 days ago', lastTouchpoint: '4 days ago',
    daysSinceContact: 4, openTasks: 5, overdueTasks: 1, delayedDeliverables: 0, blockedProjects: 0,
    trafficGrowth: 6, leadGrowth: 3, revenueGrowth: 2, roasTrend: 1,
    seoHealth: 76, ppcHealth: 70, gbpHealth: 78, websiteHealth: 80, satisfactionScore: 75,
    revenueDeclinePct: 0, consecutiveDecliningMonths: 0, negativeReviews: 0, ratingDrop: 0,
    meetingFrequency: 65, emailEngagement: 70, responseRate: 75, executiveInvolvement: 55,
    breakdown: { traffic: 75, leads: 72, revenue: 78, sentiment: 76, delivery: 82, communication: 70 },
    aiFlags: ['Communication Issues'],
    aiRecommendations: ['Schedule 90-day performance recovery roadmap', 'Send GBP review response report'],
    redFlags: [],
    upsellOpportunity: false, crossSellOpportunity: false, budgetIncreaseSignal: false,
  },
  {
    id: 10, name: 'Airflow Masters', status: 'yellow', category: 'HVAC',
    score: 72, alerts: 1, trend: 'up', revenue: '$4,100', lastChecked: '2h ago',
    healthScore: 72, risk: 'Medium', churnRisk: 35, accountManager: 'Sarah', lifecycleStage: 'Re-engagement',
    monthlyChange: 3, lastMeeting: '12 days ago', lastEmailReply: '5 days ago', lastTouchpoint: '5 days ago',
    daysSinceContact: 5, openTasks: 6, overdueTasks: 1, delayedDeliverables: 0, blockedProjects: 0,
    trafficGrowth: 4, leadGrowth: 2, revenueGrowth: 1, roasTrend: 0,
    seoHealth: 70, ppcHealth: 68, gbpHealth: 72, websiteHealth: 74, satisfactionScore: 70,
    revenueDeclinePct: 0, consecutiveDecliningMonths: 0, negativeReviews: 0, ratingDrop: 0,
    meetingFrequency: 60, emailEngagement: 65, responseRate: 68, executiveInvolvement: 50,
    breakdown: { traffic: 68, leads: 65, revenue: 72, sentiment: 70, delivery: 78, communication: 65 },
    aiFlags: [],
    aiRecommendations: ['Execute 90-day performance recovery roadmap', 'Schedule quarterly strategy QBR'],
    redFlags: [],
    upsellOpportunity: false, crossSellOpportunity: false, budgetIncreaseSignal: false,
  },
  {
    id: 11, name: 'Comfort Zone Heating & Air', status: 'yellow', category: 'HVAC',
    score: 68, alerts: 2, trend: 'down', revenue: '$3,800', lastChecked: '1h ago',
    healthScore: 68, risk: 'Medium', churnRisk: 48, accountManager: 'Sarah', lifecycleStage: 'At Risk',
    monthlyChange: -5, lastMeeting: '22 days ago', lastEmailReply: '6 days ago', lastTouchpoint: '6 days ago',
    daysSinceContact: 6, openTasks: 7, overdueTasks: 2, delayedDeliverables: 1, blockedProjects: 0,
    trafficGrowth: -6, leadGrowth: -10, revenueGrowth: -5, roasTrend: -4,
    seoHealth: 65, ppcHealth: 62, gbpHealth: 68, websiteHealth: 72, satisfactionScore: 65,
    revenueDeclinePct: 9, consecutiveDecliningMonths: 1, negativeReviews: 0, ratingDrop: 0.1,
    meetingFrequency: 50, emailEngagement: 55, responseRate: 60, executiveInvolvement: 40,
    breakdown: { traffic: 62, leads: 58, revenue: 65, sentiment: 60, delivery: 72, communication: 55 },
    aiFlags: ['Lead Drop', 'Communication Issues'],
    aiRecommendations: ['Schedule retainer check-in call', 'Review local SEO keyword performance report'],
    redFlags: ['MQL volume down 10%'],
    upsellOpportunity: false, crossSellOpportunity: false, budgetIncreaseSignal: false,
  },
  {
    id: 12, name: 'Apex Climate Control', status: 'red', category: 'HVAC',
    score: 61, alerts: 4, trend: 'down', revenue: '$4,500', lastChecked: '2m ago',
    healthScore: 61, risk: 'High', churnRisk: 65, accountManager: 'Sarah', lifecycleStage: 'At Risk',
    monthlyChange: -9, lastMeeting: '35 days ago', lastEmailReply: '8 days ago', lastTouchpoint: '8 days ago',
    daysSinceContact: 8, openTasks: 10, overdueTasks: 4, delayedDeliverables: 2, blockedProjects: 1,
    trafficGrowth: -12, leadGrowth: -15, revenueGrowth: -10, roasTrend: -8,
    seoHealth: 58, ppcHealth: 55, gbpHealth: 62, websiteHealth: 65, satisfactionScore: 55,
    revenueDeclinePct: 14, consecutiveDecliningMonths: 2, negativeReviews: 1, ratingDrop: 0.3,
    meetingFrequency: 40, emailEngagement: 45, responseRate: 50, executiveInvolvement: 30,
    breakdown: { traffic: 55, leads: 50, revenue: 58, sentiment: 52, delivery: 60, communication: 45 },
    aiFlags: ['Churn Risk', 'Traffic Drop', 'Revenue Drop', 'Lead Drop'],
    aiRecommendations: ['Schedule executive strategy call', 'Audit PPC CPL by campaign', 'Review GBP review response rate'],
    redFlags: ['Cost per lead up 14%', 'MQL volume down 15%', 'No QBR for 35 days'],
    upsellOpportunity: false, crossSellOpportunity: false, budgetIncreaseSignal: false,
  },
  {
    id: 13, name: 'Prime Comfort HVAC', status: 'red', category: 'HVAC',
    score: 58, alerts: 3, trend: 'down', revenue: '$3,400', lastChecked: '12m ago',
    healthScore: 58, risk: 'High', churnRisk: 72, accountManager: 'Sarah', lifecycleStage: 'At Risk',
    monthlyChange: -10, lastMeeting: '38 days ago', lastEmailReply: '10 days ago', lastTouchpoint: '10 days ago',
    daysSinceContact: 10, openTasks: 9, overdueTasks: 3, delayedDeliverables: 2, blockedProjects: 1,
    trafficGrowth: -14, leadGrowth: -16, revenueGrowth: -12, roasTrend: -9,
    seoHealth: 55, ppcHealth: 52, gbpHealth: 58, websiteHealth: 60, satisfactionScore: 52,
    revenueDeclinePct: 18, consecutiveDecliningMonths: 2, negativeReviews: 2, ratingDrop: 0.4,
    meetingFrequency: 35, emailEngagement: 40, responseRate: 45, executiveInvolvement: 25,
    breakdown: { traffic: 52, leads: 48, revenue: 55, sentiment: 50, delivery: 58, communication: 42 },
    aiFlags: ['Churn Risk', 'Traffic Drop', 'Revenue Drop', 'Communication Issues'],
    aiRecommendations: ['Schedule executive strategy call', 'Review lead source mix report', 'Present retainer save playbook'],
    redFlags: ['Cost per lead up 18%', 'No QBR for 38 days', 'MQL volume down 16%'],
    upsellOpportunity: false, crossSellOpportunity: false, budgetIncreaseSignal: false,
  },
  {
    id: 14, name: 'TotalCare Home Solutions', status: 'red', category: 'Home Services',
    score: 54, alerts: 5, trend: 'down', revenue: '$1,900', lastChecked: '5m ago',
    healthScore: 54, risk: 'Critical', churnRisk: 78, accountManager: 'Sarah', lifecycleStage: 'At Risk',
    monthlyChange: -12, lastMeeting: '42 days ago', lastEmailReply: '12 days ago', lastTouchpoint: '12 days ago',
    daysSinceContact: 12, openTasks: 12, overdueTasks: 5, delayedDeliverables: 3, blockedProjects: 1,
    trafficGrowth: -18, leadGrowth: -22, revenueGrowth: -15, roasTrend: -10,
    seoHealth: 52, ppcHealth: 48, gbpHealth: 55, websiteHealth: 58, satisfactionScore: 48,
    revenueDeclinePct: 22, consecutiveDecliningMonths: 3, negativeReviews: 2, ratingDrop: 0.5,
    meetingFrequency: 30, emailEngagement: 35, responseRate: 40, executiveInvolvement: 20,
    breakdown: { traffic: 48, leads: 42, revenue: 50, sentiment: 45, delivery: 55, communication: 38 },
    aiFlags: ['Churn Risk', 'Negative Sentiment', 'Traffic Drop', 'Revenue Drop', 'Communication Issues'],
    aiRecommendations: ['Emergency executive strategy call', 'Audit all lead source channels', 'Present retainer save playbook', 'Assign senior AM'],
    redFlags: ['Cost per lead up 22%', 'No QBR for 42 days', 'MQL volume down 22%', 'Deliverables overdue'],
    upsellOpportunity: false, crossSellOpportunity: false, budgetIncreaseSignal: false,
  },
  {
    id: 15, name: 'Rapid Response Air', status: 'red', category: 'HVAC',
    score: 45, alerts: 7, trend: 'down', revenue: '$2,100', lastChecked: '1m ago',
    healthScore: 45, risk: 'Critical', churnRisk: 82, accountManager: 'Sarah', lifecycleStage: 'At Risk',
    monthlyChange: -18, lastMeeting: '48 days ago', lastEmailReply: '15 days ago', lastTouchpoint: '15 days ago',
    daysSinceContact: 15, openTasks: 15, overdueTasks: 7, delayedDeliverables: 4, blockedProjects: 2,
    trafficGrowth: -25, leadGrowth: -30, revenueGrowth: -20, roasTrend: -15,
    seoHealth: 42, ppcHealth: 38, gbpHealth: 45, websiteHealth: 48, satisfactionScore: 38,
    revenueDeclinePct: 28, consecutiveDecliningMonths: 4, negativeReviews: 3, ratingDrop: 0.8,
    meetingFrequency: 20, emailEngagement: 25, responseRate: 30, executiveInvolvement: 15,
    breakdown: { traffic: 40, leads: 35, revenue: 42, sentiment: 38, delivery: 45, communication: 30 },
    aiFlags: ['Churn Risk', 'Negative Sentiment', 'Traffic Drop', 'Revenue Drop', 'Lead Drop', 'Communication Issues'],
    aiRecommendations: ['Emergency executive call', 'Full account performance audit', '90-day performance recovery roadmap', 'Reassign to senior AM'],
    redFlags: ['Cost per lead up 28%', 'Negative GBP review received', 'No QBR for 48 days', 'MQL volume down 30%', 'Churn language detected', 'Deliverables overdue'],
    upsellOpportunity: false, crossSellOpportunity: false, budgetIncreaseSignal: false,
  },
];

export { DEFAULT_CLIENT, EXPLORE_HVAC_CLIENT_NAMES };

export function getExecutiveStats() {
  const total = ALL_CLIENTS.length;
  const healthy = ALL_CLIENTS.filter(c => c.status === 'green').length;
  const watchlist = ALL_CLIENTS.filter(c => c.status === 'yellow').length;
  const atRisk = ALL_CLIENTS.filter(c => c.status === 'red' && c.risk === 'High').length;
  const critical = ALL_CLIENTS.filter(c => c.risk === 'Critical').length;
  const avgHealth = Math.round(ALL_CLIENTS.reduce((s, c) => s + c.healthScore, 0) / total);
  const improved = ALL_CLIENTS.filter(c => c.monthlyChange > 0).length;
  const declined = ALL_CLIENTS.filter(c => c.monthlyChange < 0).length;
  return { total, healthy, watchlist, atRisk, critical, avgHealth, improved, declined };
}

export function navigateToClientDashboard(clientName: string) {
  localStorage.setItem('selectedClient', clientName);
  window.location.href = `/dashboard.html?client=${encodeURIComponent(clientName)}`;
}

export function getClientsByCategory(category: ServiceCategory) {
  return ALL_CLIENTS.filter(c => c.category === category);
}
