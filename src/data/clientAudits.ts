export interface PageAudit {
  url: string;
  pageName: string;
  wordCount: number;
  focusKeyword: string;
  keywordRanking: number;
  indexedStatus: 'Indexed' | 'Not Indexed' | 'Pending';
  dateIndexed: string;
  lastUpdated: string;
  internalLinks: number;
  externalLinks: number;
  ctaPresent: boolean;
  ctaDetails: string;
  metaDescriptionFilled: boolean;
  metaDescriptionLength: number;
  metaDescriptionText: string;
  featuredImagePresent: boolean;
  featuredImageAlt: string;
  organicClicks: number;
  organicImpressions: number;
}

export interface Ga4EventShare {
  name: string;
  count: number;
  color: string;
}

export interface Ga4TrendItem {
  date: string;
  conversions: number;
  revenue: number;
}

export interface GscTrendItem {
  date: string;
  clicks: number;
  impressions: number;
  ctr: number;
  position: number;
}

export interface AdsTrendItem {
  date: string;
  spend: number;
  clicks: number;
  conversions: number;
  impressions: number;
  ctr: number;
}

export interface GbpViewsItem {
  month: string;
  searchViews: number;
  mapsViews: number;
}

export interface GbpReview {
  author: string;
  rating: number;
  text: string;
  date: string;
}

export interface ClientAudit {
  clientName: string;
  overallHealthScore: number;
  overallHealthLabel: 'Green' | 'Yellow' | 'Red';
  aiRecommendations: string[];
  pages: PageAudit[];
  newsletterHistory: {
    date: string;
    subject: string;
    sentCount: number;
    openRatePct: number;
    clickRatePct: number;
  }[];
  gbpPostHistory: {
    date: string;
    content: string;
    views: number;
    clicks: number;
  }[];
  
  // GA4 Metrics
  ga4: {
    totalEvents: number;
    eventsPerSession: number;
    conversions: number;
    totalRevenue: string;
    eventShare: Ga4EventShare[];
    trend: Ga4TrendItem[];
    topEvents: { name: string; count: number }[];
  };

  // Google Search Console (GSC) Metrics
  gsc: {
    totalClicks: number;
    totalImpressions: number;
    avgCtr: number;
    avgPosition: number;
    trend: GscTrendItem[];
  };

  // Google Ads (PPC) Metrics
  ads: {
    spend: string;
    impressions: number;
    clicks: number;
    ctr: number;
    trackedConversions: number;
    conversionsPerClick: number;
    avgCpc: string;
    avgCpa: string;
    totalConversionValue: string;
    campaignsCount: number;
    trend: AdsTrendItem[];
  };

  // Google Business Profile (GBP) Metrics
  gbp: {
    totalReviews: number;
    newReviews: number;
    avgRating: number;
    ratingBreakdown: { stars: number; count: number }[];
    responseRate: number;
    viewsTrend: GbpViewsItem[];
    reviews: GbpReview[];
  };
}

// Helper to generate realistic data based on a client's health score
function generateAudit(name: string, category: 'HVAC' | 'Plumbing' | 'Home Services', healthScore: number, status: 'Green' | 'Yellow' | 'Red'): ClientAudit {
  const isHealthy = status === 'Green';
  const multiplier = healthScore / 100;
  
  const totalEvents = Math.round(50000 + multiplier * 80000);
  const totalClicks = Math.round(2000 + multiplier * 4500);
  const totalImpressions = Math.round(40000 + multiplier * 60000);
  const avgCtr = parseFloat((4.0 + multiplier * 4.2).toFixed(1));
  const avgPosition = parseFloat((25.0 - multiplier * 12.0).toFixed(2));
  
  const spendNum = 1500 + multiplier * 3000;
  const adsClicks = Math.round(spendNum / (0.8 + Math.random() * 0.5));
  const adsConversions = Math.round(adsClicks * (0.02 + multiplier * 0.04));
  const gbpReviewsCount = Math.round(40 + multiplier * 180);
  
  const pages: PageAudit[] = [
    {
      url: "/services",
      pageName: "Core Services",
      wordCount: Math.round(800 + multiplier * 600),
      focusKeyword: category === 'HVAC' ? 'ac repair' : category === 'Plumbing' ? 'clogged drain' : 'electrical panel replacement',
      keywordRanking: Math.max(1, Math.round(15 - multiplier * 12)),
      indexedStatus: "Indexed",
      dateIndexed: "2026-04-10",
      lastUpdated: "2026-06-01",
      internalLinks: Math.round(4 + multiplier * 10),
      externalLinks: Math.round(1 + multiplier * 4),
      ctaPresent: isHealthy || Math.random() > 0.3,
      ctaDetails: "Yes (Phone Line)",
      metaDescriptionFilled: isHealthy || Math.random() > 0.4,
      metaDescriptionLength: isHealthy ? 150 : 0,
      metaDescriptionText: isHealthy ? `Local professional ${category.toLowerCase()} repair and tune-ups.` : "",
      featuredImagePresent: true,
      featuredImageAlt: isHealthy ? "Certified technicians at job site" : "",
      organicClicks: Math.round(totalClicks * 0.45),
      organicImpressions: Math.round(totalImpressions * 0.4)
    }
  ];

  return {
    clientName: name,
    overallHealthScore: healthScore,
    overallHealthLabel: status,
    aiRecommendations: [
      `Audit page title tag configuration for local search queries.`,
      `Verify all CTA click triggers are properly tracking in tag manager.`
    ],
    pages,
    newsletterHistory: [
      { date: "2026-06-10", subject: `Local Home Maintenance tips by ${name}`, sentCount: 1000, openRatePct: Math.round(20 + multiplier * 25), clickRatePct: Math.round(2 + multiplier * 6) }
    ],
    gbpPostHistory: [
      { date: "2026-06-12", content: `Call us for reliable local ${category.toLowerCase()} services!`, views: 50, clicks: 5 }
    ],
    ga4: {
      totalEvents,
      eventsPerSession: parseFloat((5.0 + multiplier * 3.2).toFixed(2)),
      conversions: Math.round(200 + multiplier * 400),
      totalRevenue: `$${(2000 + multiplier * 9000).toFixed(2)}`,
      eventShare: [
        { name: "page_view", count: Math.round(totalEvents * 0.35), color: "#142f45" },
        { name: "session_start", count: Math.round(totalEvents * 0.15), color: "#607484" },
        { name: "user_engagement", count: Math.round(totalEvents * 0.12), color: "#ee683b" },
        { name: "first_visit", count: Math.round(totalEvents * 0.08), color: "#0c304f" },
        { name: "click", count: Math.round(totalEvents * 0.07), color: "#eae0d3" }
      ],
      trend: [
        { date: "06-01", conversions: Math.round(15 * multiplier), revenue: Math.round(250 * multiplier) },
        { date: "06-03", conversions: Math.round(18 * multiplier), revenue: Math.round(310 * multiplier) },
        { date: "06-05", conversions: Math.round(22 * multiplier), revenue: Math.round(420 * multiplier) },
        { date: "06-07", conversions: Math.round(14 * multiplier), revenue: Math.round(200 * multiplier) },
        { date: "06-09", conversions: Math.round(20 * multiplier), revenue: Math.round(380 * multiplier) },
        { date: "06-11", conversions: Math.round(25 * multiplier), revenue: Math.round(490 * multiplier) }
      ],
      topEvents: [
        { name: "page_view", count: Math.round(totalEvents * 0.35) },
        { name: "session_start", count: Math.round(totalEvents * 0.15) },
        { name: "user_engagement", count: Math.round(totalEvents * 0.12) }
      ]
    },
    gsc: {
      totalClicks,
      totalImpressions,
      avgCtr,
      avgPosition,
      trend: [
        { date: "06-02", clicks: Math.round(totalClicks * 0.06), impressions: Math.round(totalImpressions * 0.06), ctr: avgCtr, position: avgPosition },
        { date: "06-05", clicks: Math.round(totalClicks * 0.07), impressions: Math.round(totalImpressions * 0.07), ctr: parseFloat((avgCtr * 0.95).toFixed(2)), position: parseFloat((avgPosition * 1.02).toFixed(2)) },
        { date: "06-08", clicks: Math.round(totalClicks * 0.08), impressions: Math.round(totalImpressions * 0.08), ctr: parseFloat((avgCtr * 1.05).toFixed(2)), position: parseFloat((avgPosition * 0.98).toFixed(2)) },
        { date: "06-11", clicks: Math.round(totalClicks * 0.065), impressions: Math.round(totalImpressions * 0.072), ctr: avgCtr, position: avgPosition }
      ]
    },
    ads: {
      spend: `$${spendNum.toFixed(2)}`,
      impressions: Math.round(spendNum * 18),
      clicks: adsClicks,
      ctr: parseFloat((2.5 + multiplier * 1.5).toFixed(2)),
      trackedConversions: adsConversions,
      conversionsPerClick: parseFloat((3.0 + multiplier * 3.0).toFixed(2)),
      avgCpc: `$${(spendNum / adsClicks).toFixed(2)}`,
      avgCpa: `$${(spendNum / adsConversions).toFixed(2)}`,
      totalConversionValue: `$${(adsConversions * 95).toFixed(2)}`,
      campaignsCount: Math.round(2 + Math.random() * 3),
      trend: [
        { date: "06-01", spend: Math.round(spendNum * 0.12), clicks: Math.round(adsClicks * 0.12), conversions: Math.round(adsConversions * 0.12), impressions: Math.round(spendNum * 1.8), ctr: 3.4 },
        { date: "06-05", spend: Math.round(spendNum * 0.15), clicks: Math.round(adsClicks * 0.16), conversions: Math.round(adsConversions * 0.14), impressions: Math.round(spendNum * 2.2), ctr: 3.2 },
        { date: "06-09", spend: Math.round(spendNum * 0.14), clicks: Math.round(adsClicks * 0.13), conversions: Math.round(adsConversions * 0.16), impressions: Math.round(spendNum * 2.0), ctr: 3.6 }
      ]
    },
    gbp: {
      totalReviews: gbpReviewsCount,
      newReviews: Math.round(gbpReviewsCount * 0.06),
      avgRating: parseFloat((4.0 + multiplier * 0.9).toFixed(1)),
      ratingBreakdown: [
        { stars: 5, count: Math.round(gbpReviewsCount * 0.8) },
        { stars: 4, count: Math.round(gbpReviewsCount * 0.12) },
        { stars: 3, count: Math.round(gbpReviewsCount * 0.05) },
        { stars: 2, count: Math.round(gbpReviewsCount * 0.02) },
        { stars: 1, count: Math.round(gbpReviewsCount * 0.01) }
      ],
      responseRate: parseFloat((80 + multiplier * 19).toFixed(1)),
      viewsTrend: [
        { month: "May 26", searchViews: 1200, mapsViews: 850 },
        { month: "Jun 26", searchViews: 1500, mapsViews: 900 },
        { month: "Jul 26", searchViews: 1700, mapsViews: 1050 }
      ],
      reviews: [
        { author: "John D.", rating: 5, text: "Excellent prompt service! Safe and professional technicians.", date: "June 10, 2026" },
        { author: "Merry A.", rating: 4, text: "Fixed our issue, pricing was slightly higher but overall worth it.", date: "June 05, 2026" }
      ]
    }
  };
}

export const CLIENT_AUDITS: Record<string, ClientAudit> = {
  "Pure Air Solutions": {
    clientName: "Pure Air Solutions",
    overallHealthScore: 94,
    overallHealthLabel: "Green",
    aiRecommendations: [
      "Add internal links from 'HVAC Maintenance' blog post to the new 'Whole Home AC Installation' page to speed up juice flow.",
      "Update alt text on the emergency AC repair featured image — currently too generic.",
      "Consider testing a higher contrast color for the phone CTA button on the Homepage."
    ],
    pages: [
      {
        url: "/ac-repair-houston",
        pageName: "AC Repair Services",
        wordCount: 1450,
        focusKeyword: "ac repair houston",
        keywordRanking: 3,
        indexedStatus: "Indexed",
        dateIndexed: "2026-04-12",
        lastUpdated: "2026-06-05",
        internalLinks: 12,
        externalLinks: 4,
        ctaPresent: true,
        ctaDetails: "Yes (Phone Button + Lead Form)",
        metaDescriptionFilled: true,
        metaDescriptionLength: 154,
        metaDescriptionText: "Need reliable AC repair in Houston? Pure Air Solutions offers 24/7 emergency repair services by certified technicians. Call now for same-day service!",
        featuredImagePresent: true,
        featuredImageAlt: "AC Repair Houston technician servicing outdoor compressor unit",
        organicClicks: 420,
        organicImpressions: 8200
      },
      {
        url: "/furnace-maintenance",
        pageName: "Furnace Tune-Up & Maintenance",
        wordCount: 1120,
        focusKeyword: "furnace maintenance houston",
        keywordRanking: 5,
        indexedStatus: "Indexed",
        dateIndexed: "2026-03-20",
        lastUpdated: "2026-05-18",
        internalLinks: 8,
        externalLinks: 2,
        ctaPresent: true,
        ctaDetails: "Yes (Book Appointment Form)",
        metaDescriptionFilled: true,
        metaDescriptionLength: 148,
        metaDescriptionText: "Keep your home warm all winter with professional furnace maintenance in Houston. Schedule a tune-up today with our heating experts.",
        featuredImagePresent: true,
        featuredImageAlt: "Technician inspecting a gas furnace heating system",
        organicClicks: 180,
        organicImpressions: 4100
      }
    ],
    newsletterHistory: [
      { date: "2026-06-10", subject: "Beat the Houston Heat: Summer Prep Special ☀️", sentCount: 1250, openRatePct: 41.5, clickRatePct: 6.8 },
      { date: "2026-05-15", subject: "Is your home's air clean? 3 indoor air quality tips", sentCount: 1200, openRatePct: 39.2, clickRatePct: 5.1 }
    ],
    gbpPostHistory: [
      { date: "2026-06-14", content: "Stay cool with our premium AC check-ups! Get $25 off a complete cooling system audit this week. 📞 Call today to book same-day service.", views: 88, clicks: 12 },
      { date: "2026-05-30", content: "We are proud of our team of certified AC repair technicians. Serving the greater Houston area with honesty and pride since 2012.", views: 64, clicks: 4 }
    ],

    // Mapped precisely to GA4 Screenshot 1
    ga4: {
      totalEvents: 144229,
      eventsPerSession: 7.94,
      conversions: 650,
      totalRevenue: "$11295.67",
      eventShare: [
        { name: "page_view", count: 45736, color: "#142f45" },
        { name: "session_start", count: 16820, color: "#607484" },
        { name: "user_engagement", count: 12214, color: "#ee683b" },
        { name: "first_visit", count: 6514, color: "#0c304f" },
        { name: "click", count: 5111, color: "#eae0d3" }
      ],
      trend: [
        { date: "2026-05-15", conversions: 2, revenue: 100 },
        { date: "2026-05-16", conversions: 11, revenue: 1500 },
        { date: "2026-05-17", conversions: 18, revenue: 3800 },
        { date: "2026-05-18", conversions: 12, revenue: 2500 },
        { date: "2026-05-19", conversions: 14, revenue: 2800 },
        { date: "2026-05-20", conversions: 19, revenue: 4200 },
        { date: "2026-05-21", conversions: 8, revenue: 1900 },
        { date: "2026-05-22", conversions: 4, revenue: 800 },
        { date: "2026-05-23", conversions: 13, revenue: 2600 },
        { date: "2026-05-24", conversions: 11, revenue: 2100 },
        { date: "2026-05-25", conversions: 18, revenue: 3900 },
        { date: "2026-05-26", conversions: 7, revenue: 1400 },
        { date: "2026-05-27", conversions: 3, revenue: 500 },
        { date: "2026-05-28", conversions: 12, revenue: 2400 },
        { date: "2026-05-29", conversions: 12, revenue: 2700 },
        { date: "2026-05-30", conversions: 7, revenue: 1300 },
        { date: "2026-05-31", conversions: 13, revenue: 2900 },
        { date: "2026-06-01", conversions: 4, revenue: 900 },
        { date: "2026-06-02", conversions: 15, revenue: 3500 },
        { date: "2026-06-03", conversions: 5, revenue: 1100 },
        { date: "2026-06-04", conversions: 3, revenue: 600 },
        { date: "2026-06-05", conversions: 6, revenue: 1200 },
        { date: "2026-06-06", conversions: 12, revenue: 2800 },
        { date: "2026-06-07", conversions: 15, revenue: 3600 },
        { date: "2026-06-08", conversions: 4, revenue: 1000 },
        { date: "2026-06-09", conversions: 17, revenue: 4100 },
        { date: "2026-06-10", conversions: 11, revenue: 2500 },
        { date: "2026-06-11", conversions: 9, revenue: 1800 },
        { date: "2026-06-12", conversions: 7, revenue: 1400 },
        { date: "2026-06-13", conversions: 5, revenue: 900 }
      ],
      topEvents: [
        { name: "page_view", count: 45736 },
        { name: "session_start", count: 16820 },
        { name: "user_engagement", count: 12214 },
        { name: "first_visit", count: 6514 },
        { name: "click", count: 5111 }
      ]
    },

    // Mapped precisely to Search Console Screenshot 2
    gsc: {
      totalClicks: 6910,
      totalImpressions: 101832,
      avgCtr: 7.6,
      avgPosition: 15.25,
      trend: [
        { date: "2026-05-15", clicks: 200, impressions: 3200, ctr: 6.25, position: 16.4 },
        { date: "2026-05-18", clicks: 230, impressions: 3800, ctr: 6.05, position: 16.2 },
        { date: "2026-05-21", clicks: 150, impressions: 2900, ctr: 5.17, position: 16.8 },
        { date: "2026-05-24", clicks: 335, impressions: 4500, ctr: 7.44, position: 15.8 },
        { date: "2026-05-27", clicks: 205, impressions: 3800, ctr: 5.39, position: 16.1 },
        { date: "2026-05-30", clicks: 395, impressions: 4300, ctr: 9.18, position: 14.9 },
        { date: "2026-06-02", clicks: 306, impressions: 4510, ctr: 6.78, position: 16.11 },
        { date: "2026-06-05", clicks: 334, impressions: 5083, ctr: 6.57, position: 16.08 },
        { date: "2026-06-08", clicks: 422, impressions: 6167, ctr: 6.84, position: 15.55 },
        { date: "2026-06-11", clicks: 332, impressions: 5143, ctr: 6.46, position: 16.11 }
      ]
    },

    // Mapped precisely to Ads Screenshot 3
    ads: {
      spend: "$4850.23",
      impressions: 79600,
      clicks: 2736,
      ctr: 3.4,
      trackedConversions: 170,
      conversionsPerClick: 5.2,
      avgCpc: "$1.16",
      avgCpa: "$21.28",
      totalConversionValue: "$16591.97",
      campaignsCount: 4,
      trend: [
        { date: "05/01", spend: 150, clicks: 130, conversions: 6, impressions: 2300, ctr: 3.1 },
        { date: "05/02", spend: 120, clicks: 110, conversions: 5, impressions: 2100, ctr: 3.2 },
        { date: "05/03", spend: 125, clicks: 105, conversions: 4, impressions: 2400, ctr: 3.0 },
        { date: "05/04", spend: 140, clicks: 115, conversions: 6, impressions: 2250, ctr: 3.3 },
        { date: "05/05", spend: 90, clicks: 80, conversions: 3, impressions: 2000, ctr: 2.8 },
        { date: "05/06", spend: 95, clicks: 85, conversions: 4, impressions: 1800, ctr: 2.9 },
        { date: "05/07", spend: 130, clicks: 110, conversions: 5, impressions: 2150, ctr: 3.1 },
        { date: "05/08", spend: 155, clicks: 135, conversions: 7, impressions: 2350, ctr: 3.4 },
        { date: "05/09", spend: 145, clicks: 120, conversions: 6, impressions: 2200, ctr: 3.2 },
        { date: "05/10", spend: 120, clicks: 105, conversions: 5, impressions: 2050, ctr: 3.1 },
        { date: "05/11", spend: 130, clicks: 115, conversions: 6, impressions: 2200, ctr: 3.3 },
        { date: "05/12", spend: 160, clicks: 140, conversions: 8, impressions: 3450, ctr: 3.5 },
        { date: "05/13", spend: 90, clicks: 80, conversions: 4, impressions: 2300, ctr: 2.9 },
        { date: "05/14", spend: 80, clicks: 70, conversions: 3, impressions: 2100, ctr: 2.8 },
        { date: "05/15", spend: 100, clicks: 90, conversions: 5, impressions: 1350, ctr: 3.4 },
        { date: "05/16", spend: 145, clicks: 125, conversions: 6, impressions: 1400, ctr: 3.2 },
        { date: "05/17", spend: 170, clicks: 140, conversions: 7, impressions: 1800, ctr: 3.5 },
        { date: "05/18", spend: 130, clicks: 110, conversions: 5, impressions: 3200, ctr: 3.1 },
        { date: "05/19", spend: 125, clicks: 105, conversions: 5, impressions: 2300, ctr: 3.0 },
        { date: "05/20", spend: 100, clicks: 90, conversions: 4, impressions: 2100, ctr: 2.9 },
        { date: "05/21", spend: 150, clicks: 120, conversions: 6, impressions: 4000, ctr: 3.5 },
        { date: "05/22", spend: 175, clicks: 145, conversions: 8, impressions: 2400, ctr: 3.6 },
        { date: "05/23", spend: 180, clicks: 150, conversions: 9, impressions: 2300, ctr: 3.7 },
        { date: "05/24", spend: 178, clicks: 148, conversions: 8, impressions: 3200, ctr: 3.5 },
        { date: "05/25", spend: 120, clicks: 100, conversions: 5, impressions: 2200, ctr: 3.0 },
        { date: "05/26", spend: 155, clicks: 125, conversions: 6, impressions: 2400, ctr: 3.2 },
        { date: "05/27", spend: 160, clicks: 130, conversions: 7, impressions: 3450, ctr: 3.4 },
        { date: "05/28", spend: 150, clicks: 125, conversions: 6, impressions: 2200, ctr: 3.3 },
        { date: "05/29", spend: 130, clicks: 110, conversions: 5, impressions: 2000, ctr: 3.1 },
        { date: "05/30", spend: 200, clicks: 165, conversions: 9, impressions: 4150, ctr: 3.7 }
      ]
    },

    // Mapped precisely to GBP Screenshot 4
    gbp: {
      totalReviews: 247,
      newReviews: 14,
      avgRating: 4.8,
      ratingBreakdown: [
        { stars: 5, count: 202 }, // ~82%
        { stars: 4, count: 35 },  // ~14%
        { stars: 3, count: 7 },   // ~3%
        { stars: 2, count: 2 },   // ~1%
        { stars: 1, count: 1 }    // ~0%
      ],
      responseRate: 92.8,
      viewsTrend: [
        { month: "May 26", searchViews: 1350, mapsViews: 800 },
        { month: "Jun 26", searchViews: 1580, mapsViews: 880 },
        { month: "Jul 26", searchViews: 1760, mapsViews: 1080 },
        { month: "Aug 26", searchViews: 1450, mapsViews: 1220 },
        { month: "Sep 26", searchViews: 1600, mapsViews: 1280 }
      ],
      reviews: [
        { author: "Douglas P.", rating: 5, text: "Super fast response on a hot day. The technician diagnosed and fixed my HVAC unit in 30 minutes flat.", date: "June 14, 2026" },
        { author: "Jennifer L.", rating: 5, text: "Unbelievable service! They installed a whole home filter and explained everything so well. Highly recommend.", date: "June 08, 2026" },
        { author: "Marcus K.", rating: 4, text: "Great ac maintenance service. Docked one star since they arrived 20 minutes outside their estimate slot.", date: "June 02, 2026" }
      ]
    }
  },
  "Frosty Systems": generateAudit("Frosty Systems", "HVAC", 89, "Green"),
  "Precision HVAC Experts": generateAudit("Precision HVAC Experts", "HVAC", 91, "Green"),
  "Elite Air Systems": generateAudit("Elite Air Systems", "HVAC", 85, "Green"),
  "Keystone Home Comfort": generateAudit("Keystone Home Comfort", "Home Services", 92, "Green"),
  "Summit Plumbing & Drain": generateAudit("Summit Plumbing & Drain", "Plumbing", 88, "Green"),
  "AllSeason Home Services": generateAudit("AllSeason Home Services", "Home Services", 95, "Green"),
  "ProFlow Plumbing Co.": generateAudit("ProFlow Plumbing Co.", "Plumbing", 74, "Yellow"),
  "BlueLine Plumbing Services": generateAudit("BlueLine Plumbing Services", "Plumbing", 78, "Yellow"),
  "Airflow Masters": generateAudit("Airflow Masters", "HVAC", 72, "Yellow"),
  "Comfort Zone Heating & Air": generateAudit("Comfort Zone Heating & Air", "HVAC", 68, "Yellow"),
  "Apex Climate Control": generateAudit("Apex Climate Control", "HVAC", 61, "Red"),
  "Prime Comfort HVAC": generateAudit("Prime Comfort HVAC", "HVAC", 58, "Red"),
  "TotalCare Home Solutions": generateAudit("TotalCare Home Solutions", "Home Services", 54, "Red"),
  "Rapid Response Air": generateAudit("Rapid Response Air", "HVAC", 45, "Red")
};
