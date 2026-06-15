
    let MOCK_DATA = {
      ga4: {
        summary: {
          sessions:            14320,
          sessions_delta:      12.4,
          users:               9841,
          users_delta:         8.1,
          new_users:           6230,
          new_users_delta:     14.7,
          returning_users:     3611,
          pageviews:           38420,
          pageviews_delta:     5.3,
          engagement_rate:     64.2,
          engagement_delta:    3.1,
          bounce_rate:         35.8,
          bounce_delta:        -2.1,
          avg_session_duration: 195,
          duration_delta:      7.4,
          conversion_rate:     3.8,
          conversion_delta:    0.4,
          conversions:         544,
          conversions_delta:   18.2,
          revenue:             12480,
          revenue_delta:       22.6,
          avg_order_value:     229.41,
          active_users_7d:       8420,
          active_users_7d_delta: 5.2,
          engaged_sessions:      9193,
          engaged_sessions_delta:3.2,
          total_events:          124500,
          total_events_delta:    10.1,
          sessions_per_user:     1.45,
          sessions_per_user_delta: 1.1,
          pages_per_session:     2.68,
          pages_per_session_delta: -0.5,
          events_per_session:    8.69,
          events_per_session_delta: 2.3,
          user_engagement_duration: 210,
          user_engagement_duration_delta: 4.5,
        },
        sessions_over_time: [
          { date: "2024-05-01", sessions: 410, users: 298 },
          { date: "2024-05-02", sessions: 388, users: 271 },
          { date: "2024-05-03", sessions: 442, users: 314 },
          { date: "2024-05-04", sessions: 395, users: 280 },
          { date: "2024-05-05", sessions: 360, users: 252 },
          { date: "2024-05-06", sessions: 295, users: 201 },
          { date: "2024-05-07", sessions: 310, users: 218 },
          { date: "2024-05-08", sessions: 468, users: 331 },
          { date: "2024-05-09", sessions: 502, users: 358 },
          { date: "2024-05-10", sessions: 488, users: 342 },
          { date: "2024-05-11", sessions: 476, users: 335 },
          { date: "2024-05-12", sessions: 451, users: 318 },
          { date: "2024-05-13", sessions: 320, users: 225 },
          { date: "2024-05-14", sessions: 298, users: 209 },
          { date: "2024-05-15", sessions: 521, users: 367 },
          { date: "2024-05-16", sessions: 544, users: 385 },
          { date: "2024-05-17", sessions: 510, users: 361 },
          { date: "2024-05-18", sessions: 498, users: 351 },
          { date: "2024-05-19", sessions: 482, users: 340 },
          { date: "2024-05-20", sessions: 335, users: 234 },
          { date: "2024-05-21", sessions: 312, users: 218 },
          { date: "2024-05-22", sessions: 558, users: 394 },
          { date: "2024-05-23", sessions: 571, users: 404 },
          { date: "2024-05-24", sessions: 540, users: 381 },
          { date: "2024-05-25", sessions: 524, users: 370 },
          { date: "2024-05-26", sessions: 498, users: 352 },
          { date: "2024-05-27", sessions: 348, users: 244 },
          { date: "2024-05-28", sessions: 324, users: 228 },
          { date: "2024-05-29", sessions: 590, users: 418 },
          { date: "2024-05-30", sessions: 601, users: 426 },
        ],
        channel_breakdown: [
          { channel: "Organic Search",  sessions: 5210, pct: 36.4 },
          { channel: "Direct",          sessions: 3180, pct: 22.2 },
          { channel: "Paid Search",     sessions: 2840, pct: 19.8 },
          { channel: "Organic Social",  sessions: 1620, pct: 11.3 },
          { channel: "Referral",        sessions: 980,  pct: 6.8  },
          { channel: "Email",           sessions: 490,  pct: 3.5  },
        ],
        top_pages: [
          { page: "/",                          pageviews: 8420, bounce_rate: 32.1, avg_time: 142 },
          { page: "/growth-accelerator",        pageviews: 5840, bounce_rate: 28.4, avg_time: 218 },
          { page: "/local-search-seo",          pageviews: 4210, bounce_rate: 35.6, avg_time: 184 },
          { page: "/success-stories",           pageviews: 3180, bounce_rate: 24.8, avg_time: 265 },
          { page: "/about",                     pageviews: 2940, bounce_rate: 38.2, avg_time: 127 },
          { page: "/blog/local-seo-for-contractors",    pageviews: 2310, bounce_rate: 42.1, avg_time: 198 },
          { page: "/contact",                   pageviews: 1840, bounce_rate: 18.6, avg_time: 93  },
        ],
        events: [
          { event_name: "page_view", count: 38420 },
          { event_name: "session_start", count: 14320 },
          { event_name: "user_engagement", count: 10450 },
          { event_name: "first_visit", count: 6230 },
          { event_name: "click", count: 4890 },
          { event_name: "scroll", count: 3200 },
          { event_name: "form_submit", count: 544 },
          { event_name: "file_download", count: 124 },
        ],
        countries: [
          { country: "United States", users: 5420, pct: 55.1 },
          { country: "United Kingdom", users: 1840, pct: 18.7 },
          { country: "Canada", users: 950, pct: 9.7 },
          { country: "Australia", users: 620, pct: 6.3 },
          { country: "Germany", users: 340, pct: 3.5 },
          { country: "India", users: 210, pct: 2.1 },
        ],
        device_split: [
          { device: "Desktop", users: 42800, sessions: 88000, pct: 97.9, eng: 44.4, bounce: 55.6 },
          { device: "Mobile",  users: 1000, sessions: 1900, pct: 2.1, eng: 52.2, bounce: 47.7  }
        ],
        os_split: [
          { os: "Windows", users: 33662, sessions: 68630, eng: 44.43, bounce: 55.57, pct: 76.9 },
          { os: "Macintosh", users: 6785, sessions: 14452, eng: 69.23, bounce: 30.77, pct: 15.5 },
          { os: "Chrome OS", users: 1771, sessions: 3465, eng: 72.21, bounce: 27.79, pct: 4.0 },
          { os: "iOS", users: 929, sessions: 1882, eng: 52.26, bounce: 47.74, pct: 2.1 },
          { os: "Linux", users: 606, sessions: 1482, eng: 68.13, bounce: 31.87, pct: 1.4 }
        ],
        browser_split: [
          { browser: "Chrome", users: 40444, sessions: 82385, eng: 44.43, bounce: 55.57 },
          { browser: "Edge", users: 2070, sessions: 5002, eng: 64.93, bounce: 35.07 },
          { browser: "Safari", users: 1142, sessions: 2418, eng: 52.26, bounce: 47.74 },
          { browser: "Opera", users: 97, sessions: 106, eng: 5.66, bounce: 94.34 }
        ],
      },
      gsc: {
        summary: {
          total_clicks:       8420,
          clicks_delta:       18.2,
          total_impressions:  124500,
          impressions_delta:  9.7,
          avg_ctr:            6.76,
          ctr_delta:          1.2,
          avg_position:       14.2,
          position_delta:     -1.8,
        },
        clicks_over_time: [
          { date: "2024-05-01", clicks: 240, impressions: 3820 },
          { date: "2024-05-04", clicks: 265, impressions: 4100 },
          { date: "2024-05-07", clicks: 198, impressions: 3240 },
          { date: "2024-05-10", clicks: 310, impressions: 4680 },
          { date: "2024-05-13", clicks: 218, impressions: 3510 },
          { date: "2024-05-16", clicks: 342, impressions: 4920 },
          { date: "2024-05-19", clicks: 298, impressions: 4380 },
          { date: "2024-05-22", clicks: 368, impressions: 5240 },
          { date: "2024-05-25", clicks: 390, impressions: 5610 },
          { date: "2024-05-28", clicks: 412, impressions: 5840 },
        ],
        top_queries: [
          { query: "hvac marketing agency",           clicks: 842,  impressions: 9240,  ctr: 9.1,  position: 2.1  },
          { query: "plumbing leads google ads",       clicks: 710,  impressions: 8100,  ctr: 8.8,  position: 3.4  },
          { query: "explore media case studies",      clicks: 680,  impressions: 2840,  ctr: 23.9, position: 1.2  },
          { query: "local seo for contractors",       clicks: 524,  impressions: 7600,  ctr: 6.9,  position: 5.8  },
          { query: "home services ppc agency",        clicks: 498,  impressions: 8420,  ctr: 5.9,  position: 7.2  },
          { query: "ac repair near me",               clicks: 412,  impressions: 6840,  ctr: 6.0,  position: 4.1  },
          { query: "emergency plumber",               clicks: 368,  impressions: 7120,  ctr: 5.2,  position: 9.3  },
          { query: "hvac installation quote",         clicks: 340,  impressions: 5980,  ctr: 5.7,  position: 6.4  },
          { query: "drain cleaning service",          clicks: 298,  impressions: 6210,  ctr: 4.8,  position: 11.2 },
          { query: "furnace repair cost",             clicks: 248,  impressions: 5840,  ctr: 4.2,  position: 13.8 },
        ],
        top_pages: [
          { page: "/",                       clicks: 2140, impressions: 28400, ctr: 7.5, position: 2.8  },
          { page: "/growth-accelerator",     clicks: 1840, impressions: 24200, ctr: 7.6, position: 3.1  },
          { page: "/local-search-seo",       clicks: 1320, impressions: 18600, ctr: 7.1, position: 5.4  },
          { page: "/success-stories",        clicks: 980,  impressions: 14800, ctr: 6.6, position: 7.2  },
          { page: "/blog/local-seo-for-contractors", clicks: 840,  impressions: 16200, ctr: 5.2, position: 9.8  },
        ],
      },
      gbp: {
        summary: {
          profile_views:         3210,
          profile_views_delta:   6.3,
          search_views:          1840,
          search_views_delta:    8.1,
          maps_views:            1370,
          maps_views_delta:      4.2,
          website_clicks:        540,
          website_clicks_delta:  11.4,
          direction_requests:    320,
          directions_delta:      4.1,
          phone_calls:           215,
          calls_delta:           11.0,
          avg_rating:            4.6,
          total_reviews:         128,
          new_reviews:           14,
          response_rate:         92.8,
        },
        views_over_time: [
          { month: "Dec 23", search_views: 1420, maps_views: 980  },
          { month: "Jan 24", search_views: 1380, maps_views: 940  },
          { month: "Feb 24", search_views: 1520, maps_views: 1080 },
          { month: "Mar 24", search_views: 1680, maps_views: 1180 },
          { month: "Apr 24", search_views: 1740, maps_views: 1290 },
          { month: "May 24", search_views: 1840, maps_views: 1370 },
        ],
        actions_over_time: [
          { month: "Dec 23", website: 420, directions: 248, calls: 168 },
          { month: "Jan 24", website: 398, directions: 240, calls: 158 },
          { month: "Feb 24", website: 448, directions: 265, calls: 178 },
          { month: "Mar 24", website: 492, directions: 288, calls: 194 },
          { month: "Apr 24", website: 518, directions: 305, calls: 208 },
          { month: "May 24", website: 540, directions: 320, calls: 215 },
        ],
        rating_distribution: [
          { stars: 5, count: 84, pct: 65.6 },
          { stars: 4, count: 28, pct: 21.9 },
          { stars: 3, count: 9,  pct: 7.0  },
          { stars: 2, count: 4,  pct: 3.1  },
          { stars: 1, count: 3,  pct: 2.3  },
        ],
        search_type: [
          { type: "Direct search",     views: 980,  pct: 30.5 },
          { type: "Discovery search",  views: 1640, pct: 51.1 },
          { type: "Branded search",    views: 590,  pct: 18.4 },
        ],
      },
      ads: {
        summary: {
          total_spend:           4280.00,
          spend_delta:           -3.2,
          impressions:           98400,
          impressions_delta:     5.8,
          clicks:                3120,
          clicks_delta:          7.8,
          ctr:                   3.17,
          ctr_delta:             2.1,
          avg_cpc:               1.37,
          cpc_delta:             -10.5,
          conversions:           186,
          conversions_delta:     14.5,
          conversion_rate:       5.96,
          conversion_rate_delta: 6.2,
          cost_per_conversion:   23.01,
          cpconv_delta:          -15.7,
          revenue:               17980,
          roas:                  4.20,
          roas_delta:            18.4,
          impression_share:      62.4,
          lost_is_budget:        18.2,
          lost_is_rank:          19.4,
          budget_utilisation:    84.6,
        },
        spend_over_time: [
          { date: "2024-05-01", spend: 128.40, clicks: 94,  conversions: 5  },
          { date: "2024-05-02", spend: 122.80, clicks: 88,  conversions: 4  },
          { date: "2024-05-03", spend: 131.20, clicks: 97,  conversions: 6  },
          { date: "2024-05-04", spend: 118.60, clicks: 84,  conversions: 4  },
          { date: "2024-05-05", spend: 98.40,  clicks: 70,  conversions: 3  },
          { date: "2024-05-06", spend: 82.10,  clicks: 58,  conversions: 2  },
          { date: "2024-05-07", spend: 87.30,  clicks: 62,  conversions: 3  },
          { date: "2024-05-08", spend: 142.80, clicks: 104, conversions: 7  },
          { date: "2024-05-09", spend: 148.20, clicks: 108, conversions: 7  },
          { date: "2024-05-10", spend: 139.60, clicks: 102, conversions: 6  },
          { date: "2024-05-11", spend: 135.40, clicks: 98,  conversions: 6  },
          { date: "2024-05-12", spend: 128.80, clicks: 94,  conversions: 5  },
          { date: "2024-05-13", spend: 94.20,  clicks: 66,  conversions: 3  },
          { date: "2024-05-14", spend: 88.60,  clicks: 63,  conversions: 3  },
          { date: "2024-05-15", spend: 152.40, clicks: 112, conversions: 8  },
          { date: "2024-05-16", spend: 158.20, clicks: 116, conversions: 8  },
          { date: "2024-05-17", spend: 148.60, clicks: 109, conversions: 7  },
          { date: "2024-05-18", spend: 142.40, clicks: 104, conversions: 6  },
          { date: "2024-05-19", spend: 138.20, clicks: 101, conversions: 6  },
          { date: "2024-05-20", spend: 102.80, clicks: 72,  conversions: 4  },
          { date: "2024-05-21", spend: 96.40,  clicks: 68,  conversions: 3  },
          { date: "2024-05-22", spend: 162.60, clicks: 120, conversions: 9  },
          { date: "2024-05-23", spend: 168.40, clicks: 124, conversions: 9  },
          { date: "2024-05-24", spend: 155.80, clicks: 114, conversions: 8  },
          { date: "2024-05-25", spend: 148.40, clicks: 108, conversions: 7  },
          { date: "2024-05-26", spend: 140.20, clicks: 102, conversions: 6  },
          { date: "2024-05-27", spend: 108.60, clicks: 76,  conversions: 4  },
          { date: "2024-05-28", spend: 101.80, clicks: 72,  conversions: 4  },
          { date: "2024-05-29", spend: 174.20, clicks: 128, conversions: 10 },
          { date: "2024-05-30", spend: 180.60, clicks: 132, conversions: 10 },
        ],
        campaigns: [
          { name: "Emergency HVAC — Search",     impressions: 32400, clicks: 1240, spend: 1680.40, conversions: 72,  ctr: 3.83, cpc: 1.36, roas: 5.2, status: "active"  },
          { name: "Local SEO Services — Search", impressions: 24800, clicks: 892,  spend: 1120.60, conversions: 58,  ctr: 3.60, cpc: 1.26, roas: 4.8, status: "active"  },
          { name: "GBP Promo — Display",         impressions: 28600, clicks: 480,  spend: 682.80,  conversions: 28,  ctr: 1.68, cpc: 1.42, roas: 3.2, status: "active"  },
          { name: "Retargeting — All Visitors",  impressions: 12600, clicks: 508,  spend: 796.20,  conversions: 28,  ctr: 4.03, cpc: 1.57, roas: 4.1, status: "active"  },
        ],
        top_keywords: [
          { keyword: "ac repair near me",               match: "Exact", impressions: 8420, clicks: 398, spend: 542.80, ctr: 4.73, cpc: 1.36, conv: 22, quality: 9 },
          { keyword: "emergency plumber",               match: "Phrase",impressions: 6840, clicks: 312, spend: 418.60, ctr: 4.56, cpc: 1.34, conv: 18, quality: 8 },
          { keyword: "hvac installation quote",         match: "Broad", impressions: 9200, clicks: 284, spend: 396.40, ctr: 3.09, cpc: 1.40, conv: 14, quality: 7 },
          { keyword: "drain cleaning near me",          match: "Exact", impressions: 5640, clicks: 268, spend: 352.20, ctr: 4.75, cpc: 1.31, conv: 16, quality: 8 },
          { keyword: "furnace tune up",                 match: "Phrase",impressions: 7120, clicks: 248, spend: 338.60, ctr: 3.48, cpc: 1.37, conv: 13, quality: 7 },
        ],
        ad_groups: [
          { name: "Brand Terms", spend: 420.50, conversions: 24 },
          { name: "Competitor", spend: 850.20, conversions: 18 },
          { name: "Core Services", spend: 1250.00, conversions: 45 },
          { name: "Local SEO", spend: 950.80, conversions: 32 }
        ],
        recommendations: [
          {
            campaign: "Emergency HVAC — Search", count: 3,
            items: [
              { title: "ADD SITELINK ASSET", type: "SUGGESTED ACTION", desc: 'Applies to budget "Emergency HVAC — Search". Review recommendation in Google Ads.', impact: null },
              { title: "MAXIMIZE CONVERSIONS OPT IN", type: "ESTIMATED IMPACT", desc: 'Applies to budget "Emergency HVAC — Search".', impact: { imp: 850, clicks: 42, cost: 84.50 } }
            ]
          },
          {
            campaign: "Local SEO Services — Search", count: 2,
            items: [
              { title: "RESPONSIVE SEARCH AD", type: null, desc: 'Applies to ad group "Core Services". Adding responsive search ads can increase your relevance.', impact: null }
            ]
          }
        ]
      },
      meta: {
        client:      "Explore Media",
        period:      "This Month",
        prev_period: "Last Month",
        currency:    "USD",
        timezone:    "America/New_York",
      },
    };

    const fmt = (n) => n.toLocaleString('en-US');
    const fmtUSD = (n) => '$' + n.toFixed(2);
    const fmtPct = (n) => n.toFixed(1) + '%';
    const fmtTime = (s) => `${Math.floor(s/60)}:${String(s%60).padStart(2,'0')}`;
    const fmtDelta = (n) => (n >= 0 ? '▲ ' : '▼ ') + Math.abs(n).toFixed(1) + '%';
    
    // invert=true for metrics where lower is better
    const deltaColor = (n, invert = false) => {
      const positive = invert ? n < 0 : n > 0;
      return positive ? '#10b981' : '#ef4444'; // Green or Red
    };

    function renderDelta(value, invert=false) {
      if (value === undefined || value === null) return '';
      const c = deltaColor(value, invert);
      return `<span style="background: ${c};">${fmtDelta(value)}</span>`;
    }

    function selectCampaign(campName, element) {
      document.querySelectorAll('#ads-campaign-dropdown-menu .custom-dropdown-item').forEach(item => {
        item.classList.remove('active');
        item.querySelector('.check-icon').style.opacity = '0';
      });
      element.classList.add('active');
      element.querySelector('.check-icon').style.opacity = '1';
      document.getElementById('selected-campaign-name').innerText = campName;
      document.getElementById('ads-campaign-dropdown-menu').classList.remove('show');
      
      updateCampaignDetails(campName);
    }

    function updateCampaignDetails(overrideCampName) {
      const campName = overrideCampName || document.getElementById('selected-campaign-name').innerText;
      const selCamp = MOCK_DATA.ads.campaigns.find(c => c.name === campName) || MOCK_DATA.ads.campaigns[0];
      const campRecs = MOCK_DATA.ads.recommendations.find(r => r.campaign === campName) || { count: 0, items: [] };

      // Details header
      document.getElementById('camp-details-title').innerText = 'Campaign Details: ' + selCamp.name;

      // KPIs
      if (document.getElementById('camp-det-spend')) {
         document.getElementById('camp-det-spend').innerText = fmtUSD(selCamp.spend);
         document.getElementById('camp-det-imp').innerText = fmt(selCamp.impressions);
         document.getElementById('camp-det-clicks').innerText = fmt(selCamp.clicks);
         document.getElementById('camp-det-ctr').innerText = selCamp.ctr.toFixed(2) + '%';
         document.getElementById('camp-det-conv').innerText = selCamp.conversions;
         document.getElementById('camp-det-convrate').innerText = ((selCamp.conversions / selCamp.clicks) * 100).toFixed(2) + '%';
         document.getElementById('camp-det-cpc').innerText = fmtUSD(selCamp.cpc);
         document.getElementById('camp-det-costconv').innerText = fmtUSD(selCamp.conversions > 0 ? selCamp.spend / selCamp.conversions : 0);
      }

      // Titles for charts
      if (document.getElementById('camp-chart-title-1')) {
        document.getElementById('camp-chart-title-1').innerText = selCamp.name + ': Spend, Clicks & Conversions';
        document.getElementById('camp-chart-title-2').innerText = selCamp.name + ': Impressions & CTR';
      }

      // Populate Recommendations Content
      const totalRecs = MOCK_DATA.ads.recommendations.reduce((acc, curr) => acc + curr.count, 0);
      const totalCampsWithRecs = MOCK_DATA.ads.recommendations.filter(r => r.count > 0).length;
      
      document.getElementById('rec-total-count').innerText = totalRecs;
      document.getElementById('rec-camp-count').innerText = totalCampsWithRecs;
      document.getElementById('rec-opt-score').innerText = (40 + Math.random() * 50).toFixed(2) + '%';

      const recsContainer = document.getElementById('ads-recs-container');
      if (recsContainer) {
        let recHtml = '';
        const campsWithRecs = MOCK_DATA.ads.recommendations.filter(r => r.count > 0);
        if (campsWithRecs.length === 0) {
          recsContainer.innerHTML = '<div style="padding: 24px; text-align: center; color: var(--color-muted);">No recommendations available for any campaign.</div>';
        } else {
          campsWithRecs.forEach(campData => {
            recHtml += `
              <div style="background: white; border: 1px solid var(--color-border); border-radius: 8px; margin-bottom: 24px;">
                <div style="padding: 16px 24px; border-bottom: 1px solid var(--color-border); background: #f8fafc; display: flex; justify-content: space-between; align-items: center; border-radius: 8px 8px 0 0;">
                  <div style="font-weight: 600; color: #0f172a;">${campData.campaign}</div>
                  <div style="background: #e2e8f0; border-radius: 12px; padding: 2px 8px; font-size: 12px; font-weight: 600; color: #475569;">${campData.count}</div>
                </div>
                <div style="padding: 24px;">
            `;
            
            campData.items.forEach((item, idx) => {
              let impactHtml = item.impact ? `
                <div style="font-size: 11px; color: var(--color-muted); margin-bottom: 4px; text-transform: uppercase;">ESTIMATED IMPACT</div>
                <div style="font-size: 13px; color: #0284c7; margin-bottom: 4px;">Impressions: ${item.impact.imp}</div>
                <div style="font-size: 13px; color: #0284c7; margin-bottom: 4px;">Clicks: ${item.impact.clicks}</div>
                <div style="font-size: 13px; color: #0284c7; margin-bottom: 16px;">Cost: ${fmtUSD(item.impact.cost)}</div>
              ` : '';
              
              let suggestionHtml = item.type ? `
                <div style="font-size: 11px; color: var(--color-muted); margin-bottom: 4px; text-transform: uppercase;">${item.type}</div>
                <div style="font-size: 14px; font-weight: 600; color: #0284c7;">Review this recommendation in Google Ads</div>
              ` : '';

              recHtml += `
                <div style="display: flex; gap: 16px; margin-bottom: ${idx === campData.items.length - 1 ? '0' : '32px'};">
                  <div style="width: 32px; height: 32px; border-radius: 16px; background: #f1f5f9; display: flex; align-items: center; justify-content: center; font-weight: 600; color: #475569; flex-shrink: 0;">${idx + 1}</div>
                  <div style="flex: 1;">
                    <div style="font-size: 12px; font-weight: 600; color: #334155; margin-bottom: 4px;">${item.title}</div>
                    <div style="font-size: 13px; color: var(--color-muted); margin-bottom: 16px;">${item.desc}</div>
                    <div style="border: 1px solid var(--color-border); border-radius: 6px; padding: 16px;">
                      ${impactHtml}
                      ${suggestionHtml}
                    </div>
                  </div>
                </div>
              `;
            });
            
            recHtml += `</div></div>`;
          });
          recsContainer.innerHTML = recHtml;
        }
      }
    }

    function showTab(tabId) {
      document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
      document.getElementById(tabId).classList.add('active');
      
      document.querySelectorAll('.sidebar-nav li').forEach(el => el.classList.remove('active'));
      const activeBtn = document.querySelector(`.sidebar-nav li[onclick="showTab('${tabId}')"]`);
      if (activeBtn) activeBtn.classList.add('active');

      renderDashboardData();

      // Trigger resize for ChartJS
      setTimeout(() => {
        window.dispatchEvent(new Event('resize'));
        Object.values(chartInstances).forEach(c => c.resize());
      }, 50);
    }

    function showSubTab(el, targetId, containerId) {
      const container = document.getElementById(containerId);
      container.querySelectorAll('.sub-tab-content').forEach(c => c.classList.remove('active'));
      container.querySelectorAll('.sub-tab').forEach(t => t.classList.remove('active'));
      
      document.getElementById(targetId).classList.add('active');
      el.classList.add('active');
      renderDashboardData();
      // Trigger resize for ChartJS
      setTimeout(() => {
        window.dispatchEvent(new Event('resize'));
        Object.values(chartInstances).forEach(c => c.resize());
      }, 50);
    }

    function selectDropdownClient(clientName, element) {
      document.getElementById('selected-client-name').innerText = '✓ ' + clientName;
      document.querySelectorAll('.custom-dropdown-item').forEach(el => {
        if (!el.classList.contains('date-dropdown-item')) {
          el.classList.remove('active');
          el.querySelector('.check-icon').style.opacity = '0';
        }
      });
      element.classList.add('active');
      element.querySelector('.check-icon').style.opacity = '1';
      document.getElementById('client-dropdown-menu').classList.remove('show');
      updateDashboardData();
    }

    function selectDateRange(dateRange, element) {
      document.getElementById('period-badge').innerText = dateRange;
      document.querySelectorAll('.date-dropdown-item').forEach(el => {
        el.classList.remove('active');
        const icon = el.querySelector('.date-check-icon');
        if (icon) icon.style.opacity = '0';
      });
      if (element) {
        element.classList.add('active');
        const icon = element.querySelector('.date-check-icon');
        if (icon) icon.style.opacity = '1';
      }
      document.getElementById('date-dropdown-menu').classList.remove('show');
      document.getElementById('custom-date-picker-container').style.display = 'none';
      updateDashboardData();
    }

    function toggleCustomDatePicker(event, element) {
      event.stopPropagation();
      const container = document.getElementById('custom-date-picker-container');
      if (container.style.display === 'flex') {
        container.style.display = 'none';
      } else {
        container.style.display = 'flex';
      }
    }

    function applyCustomDate(event) {
      event.stopPropagation();
      const start = document.getElementById('custom-date-start').value;
      const end = document.getElementById('custom-date-end').value;
      if (start && end) {
        // Simple format (e.g. 2024-05-01 -> May 1, 2024)
        const formatOptions = { month: 'short', day: 'numeric', year: 'numeric' };
        const d1 = new Date(start).toLocaleDateString(undefined, formatOptions);
        const d2 = new Date(end).toLocaleDateString(undefined, formatOptions);
        const rangeStr = `${d1} — ${d2}`;
        selectDateRange(rangeStr, document.getElementById('custom-date-toggle'));
      }
    }

    function toggleDropdown(menuId, event) {
      if (event) event.stopPropagation();
      // close options not the current
      const menus = ['client-dropdown-menu', 'date-dropdown-menu'];
      menus.forEach(mId => {
        if (mId !== menuId) {
          const menu = document.getElementById(mId);
          if (menu) menu.classList.remove('show');
        }
      });
      document.getElementById(menuId).classList.toggle('show');
    }

    // Close dropdown when clicking outside
    document.addEventListener("click", (e) => {
      if (!e.target.closest('.custom-dropdown-container')) {
        document.querySelectorAll('.custom-dropdown-menu').forEach(menu => menu.classList.remove('show'));
      }
    });

    const brandColors = ['#0b5b6f', '#1ba1c2', '#54c6e3', '#053440', '#12829e', '#94a3b8'];

    const chartInstances = {};
    
    let adsDailyPage = 1;
    const itemsPerAdsDailyPage = 5;
    let adsDailyData = [];
    
    function renderAdsDailyTable() {
      const tbody = document.querySelector('#ads-daily-perf-table tbody');
      const pag = document.getElementById('ads-daily-perf-pagination');
      if (!tbody || !pag) return;

      const totalItems = adsDailyData.length;
      const totalPages = Math.ceil(totalItems / itemsPerAdsDailyPage) || 1;
      
      if (adsDailyPage > totalPages) adsDailyPage = totalPages;
      if (adsDailyPage < 1) adsDailyPage = 1;

      const start = (adsDailyPage - 1) * itemsPerAdsDailyPage;
      const end = start + itemsPerAdsDailyPage;
      const currentData = adsDailyData.slice(start, end);

      tbody.innerHTML = currentData.map(d => `
          <tr>
            <td>${d.date}</td>
            <td>${fmtUSD(d.spend)}</td>
            <td>${fmt(d.impressions)}</td>
            <td>${fmt(d.clicks)}</td>
            <td>${((d.clicks / (d.impressions || 1)) * 100).toFixed(2)}%</td>
            <td>${d.conversions}</td>
          </tr>
        `).join('');

      pag.innerHTML = `
        <span style="margin-right: 16px;">${start + 1}-${Math.min(end, totalItems)} of ${totalItems}</span>
        <button style="border:none;background:none;" onclick="changeAdsDailyPage(-1)">
           <i data-lucide="chevron-left" style="width: 16px; height: 16px; display: inline-block; vertical-align: middle; cursor: ${adsDailyPage > 1 ? 'pointer' : 'default'}; color: ${adsDailyPage > 1 ? 'inherit' : '#cbd5e1'};"></i>
        </button>
        <button style="border:none;background:none;" onclick="changeAdsDailyPage(1)">
           <i data-lucide="chevron-right" style="width: 16px; height: 16px; display: inline-block; vertical-align: middle; cursor: ${adsDailyPage < totalPages ? 'pointer' : 'default'}; color: ${adsDailyPage < totalPages ? 'inherit' : '#cbd5e1'};"></i>
        </button>
      `;
      if (window.lucide) {
        lucide.createIcons();
      }
    }

    window.changeAdsDailyPage = function(delta) {
      adsDailyPage += delta;
      renderAdsDailyTable();
    };

    function updateDashboardData() {
      const period = document.getElementById('period-badge').innerText;
      
      let stepDaysGa4 = 1;
      let stepDaysGsc = 3;
      let stepMonths = 1;
      
      let startInfo = new Date();
      
      if (period === 'This Month') {
        startInfo.setDate(1); 
      } else if (period === 'Last Month') {
        startInfo.setMonth(startInfo.getMonth() - 1);
        startInfo.setDate(1);
      } else if (period === 'This Year') {
        startInfo = new Date(new Date().getFullYear(), 0, 1);
        stepDaysGa4 = 12;
        stepDaysGsc = 36;
        stepMonths = 2;
      } else if (period === 'Last Year') {
        startInfo = new Date(new Date().getFullYear() - 1, 0, 1);
        stepDaysGa4 = 12;
        stepDaysGsc = 36;
        stepMonths = 2;
      } else if (period === 'Last six Month') {
        startInfo.setMonth(startInfo.getMonth() - 5);
        startInfo.setDate(1);
        stepDaysGa4 = 6;
        stepDaysGsc = 18;
        stepMonths = 1;
      } else {
        startInfo.setMonth(startInfo.getMonth() - 1);
      }

      const ga4Len = MOCK_DATA.ga4.sessions_over_time.length;
      for(let i=0; i<ga4Len; i++) {
        let d = new Date(startInfo);
        d.setDate(d.getDate() + i * stepDaysGa4);
        MOCK_DATA.ga4.sessions_over_time[i].date = d.toISOString().split('T')[0];
      }

      const gscLen = MOCK_DATA.gsc.clicks_over_time.length;
      for(let i=0; i<gscLen; i++) {
        let d = new Date(startInfo);
        d.setDate(d.getDate() + i * stepDaysGsc);
        MOCK_DATA.gsc.clicks_over_time[i].date = d.toISOString().split('T')[0];
      }
      
      const viewsLen = MOCK_DATA.gbp.views_over_time.length;
      for(let i=0; i<viewsLen; i++) {
        let d = new Date(startInfo);
        d.setMonth(d.getMonth() + i * stepMonths);
        const mStr = d.toLocaleDateString(undefined, {month: 'short', year: '2-digit'});
        MOCK_DATA.gbp.views_over_time[i].month = mStr;
        MOCK_DATA.gbp.actions_over_time[i].month = mStr;
        MOCK_DATA.ads.spend_over_time[i].month = mStr;
      }

      const perturb = (val) => val * (0.8 + Math.random() * 0.4);
      const perturbDelta = (val) => val + (Math.random() * 10 - 5);

      MOCK_DATA.ga4.summary.sessions = Math.round(perturb(MOCK_DATA.ga4.summary.sessions));
      MOCK_DATA.ga4.summary.sessions_delta = perturbDelta(MOCK_DATA.ga4.summary.sessions_delta);
      MOCK_DATA.ga4.summary.users = Math.round(perturb(MOCK_DATA.ga4.summary.users));
      MOCK_DATA.ga4.summary.users_delta = perturbDelta(MOCK_DATA.ga4.summary.users_delta);
      
      MOCK_DATA.ga4.summary.active_users_7d = Math.round(perturb(MOCK_DATA.ga4.summary.active_users_7d));
      MOCK_DATA.ga4.summary.active_users_7d_delta = perturbDelta(MOCK_DATA.ga4.summary.active_users_7d_delta);
      MOCK_DATA.ga4.summary.new_users = Math.round(perturb(MOCK_DATA.ga4.summary.new_users));
      MOCK_DATA.ga4.summary.new_users_delta = perturbDelta(MOCK_DATA.ga4.summary.new_users_delta);
      MOCK_DATA.ga4.summary.engaged_sessions = Math.round(perturb(MOCK_DATA.ga4.summary.engaged_sessions));
      MOCK_DATA.ga4.summary.engaged_sessions_delta = perturbDelta(MOCK_DATA.ga4.summary.engaged_sessions_delta);
      MOCK_DATA.ga4.summary.pageviews = Math.round(perturb(MOCK_DATA.ga4.summary.pageviews));
      MOCK_DATA.ga4.summary.pageviews_delta = perturbDelta(MOCK_DATA.ga4.summary.pageviews_delta);
      MOCK_DATA.ga4.summary.avg_session_duration = perturb(MOCK_DATA.ga4.summary.avg_session_duration);
      MOCK_DATA.ga4.summary.duration_delta = perturbDelta(MOCK_DATA.ga4.summary.duration_delta);
      MOCK_DATA.ga4.summary.bounce_rate = Math.min(100, perturb(MOCK_DATA.ga4.summary.bounce_rate));
      MOCK_DATA.ga4.summary.bounce_delta = perturbDelta(MOCK_DATA.ga4.summary.bounce_delta);
      MOCK_DATA.ga4.summary.total_events = Math.round(perturb(MOCK_DATA.ga4.summary.total_events));
      MOCK_DATA.ga4.summary.total_events_delta = perturbDelta(MOCK_DATA.ga4.summary.total_events_delta);
      MOCK_DATA.ga4.summary.revenue = perturb(MOCK_DATA.ga4.summary.revenue);
      MOCK_DATA.ga4.summary.revenue_delta = perturbDelta(MOCK_DATA.ga4.summary.revenue_delta);
      MOCK_DATA.ga4.summary.sessions_per_user = perturb(MOCK_DATA.ga4.summary.sessions_per_user);
      MOCK_DATA.ga4.summary.sessions_per_user_delta = perturbDelta(MOCK_DATA.ga4.summary.sessions_per_user_delta);
      MOCK_DATA.ga4.summary.pages_per_session = perturb(MOCK_DATA.ga4.summary.pages_per_session);
      MOCK_DATA.ga4.summary.pages_per_session_delta = perturbDelta(MOCK_DATA.ga4.summary.pages_per_session_delta);
      MOCK_DATA.ga4.summary.events_per_session = perturb(MOCK_DATA.ga4.summary.events_per_session);
      MOCK_DATA.ga4.summary.events_per_session_delta = perturbDelta(MOCK_DATA.ga4.summary.events_per_session_delta);
      MOCK_DATA.ga4.summary.user_engagement_duration = perturb(MOCK_DATA.ga4.summary.user_engagement_duration);
      MOCK_DATA.ga4.summary.user_engagement_duration_delta = perturbDelta(MOCK_DATA.ga4.summary.user_engagement_duration_delta);

      MOCK_DATA.ga4.summary.engagement_rate = Math.min(100, perturb(MOCK_DATA.ga4.summary.engagement_rate));
      MOCK_DATA.ga4.summary.engagement_delta = perturbDelta(MOCK_DATA.ga4.summary.engagement_delta);
      MOCK_DATA.ga4.summary.conversions = Math.round(perturb(MOCK_DATA.ga4.summary.conversions));
      MOCK_DATA.ga4.summary.conversions_delta = perturbDelta(MOCK_DATA.ga4.summary.conversions_delta);
      
      MOCK_DATA.ga4.sessions_over_time.forEach(d => {
        d.sessions = Math.round(perturb(d.sessions));
        d.users = Math.round(perturb(d.users));
        d.pageviews = Math.round(d.sessions * Math.random() * 2 + d.sessions * 1.5);
        d.conversions = Math.round(d.sessions * 0.05 * Math.random());
        d.revenue = d.conversions * 230 * (0.8 + Math.random() * 0.4);
      });

      MOCK_DATA.gsc.summary.total_clicks = Math.round(perturb(MOCK_DATA.gsc.summary.total_clicks));
      MOCK_DATA.gsc.summary.clicks_delta = perturbDelta(MOCK_DATA.gsc.summary.clicks_delta);
      MOCK_DATA.gsc.summary.total_impressions = Math.round(perturb(MOCK_DATA.gsc.summary.total_impressions));
      MOCK_DATA.gsc.summary.impressions_delta = perturbDelta(MOCK_DATA.gsc.summary.impressions_delta);
      MOCK_DATA.gsc.summary.avg_ctr = perturb(MOCK_DATA.gsc.summary.avg_ctr);
      MOCK_DATA.gsc.summary.ctr_delta = perturbDelta(MOCK_DATA.gsc.summary.ctr_delta);
      MOCK_DATA.gsc.summary.avg_position = perturb(MOCK_DATA.gsc.summary.avg_position);
      
      MOCK_DATA.gsc.clicks_over_time.forEach(d => {
        d.clicks = Math.round(perturb(d.clicks));
        d.impressions = Math.round(perturb(d.impressions));
      });

      MOCK_DATA.gbp.summary.profile_views = Math.round(perturb(MOCK_DATA.gbp.summary.profile_views));
      MOCK_DATA.gbp.summary.website_clicks = Math.round(perturb(MOCK_DATA.gbp.summary.website_clicks));
      MOCK_DATA.gbp.summary.phone_calls = Math.round(perturb(MOCK_DATA.gbp.summary.phone_calls));
      
      MOCK_DATA.gbp.views_over_time.forEach(d => {
        d.search_views = Math.round(perturb(d.search_views));
        d.maps_views = Math.round(perturb(d.maps_views));
      });
      MOCK_DATA.gbp.actions_over_time.forEach(d => {
        d.website = Math.round(perturb(d.website));
        d.directions = Math.round(perturb(d.directions));
        d.calls = Math.round(perturb(d.calls));
      });

      MOCK_DATA.ads.summary.total_spend = perturb(MOCK_DATA.ads.summary.total_spend);
      MOCK_DATA.ads.summary.spend_delta = perturbDelta(MOCK_DATA.ads.summary.spend_delta);
      MOCK_DATA.ads.summary.impressions = Math.round(perturb(MOCK_DATA.ads.summary.impressions));
      MOCK_DATA.ads.summary.impressions_delta = perturbDelta(MOCK_DATA.ads.summary.impressions_delta);
      MOCK_DATA.ads.summary.clicks = Math.round(perturb(MOCK_DATA.ads.summary.clicks));
      MOCK_DATA.ads.summary.clicks_delta = perturbDelta(MOCK_DATA.ads.summary.clicks_delta);
      MOCK_DATA.ads.summary.ctr = perturb(MOCK_DATA.ads.summary.ctr);
      MOCK_DATA.ads.summary.ctr_delta = perturbDelta(MOCK_DATA.ads.summary.ctr_delta);
      MOCK_DATA.ads.summary.avg_cpc = perturb(MOCK_DATA.ads.summary.avg_cpc);
      MOCK_DATA.ads.summary.cpc_delta = perturbDelta(MOCK_DATA.ads.summary.cpc_delta);
      MOCK_DATA.ads.summary.conversions = Math.round(perturb(MOCK_DATA.ads.summary.conversions));
      MOCK_DATA.ads.summary.conversions_delta = perturbDelta(MOCK_DATA.ads.summary.conversions_delta);
      MOCK_DATA.ads.summary.conversion_rate = perturb(MOCK_DATA.ads.summary.conversion_rate);
      MOCK_DATA.ads.summary.conversion_rate_delta = perturbDelta(MOCK_DATA.ads.summary.conversion_rate_delta);
      MOCK_DATA.ads.summary.revenue = perturb(MOCK_DATA.ads.summary.revenue);
      MOCK_DATA.ads.summary.roas = perturb(MOCK_DATA.ads.summary.roas);
      MOCK_DATA.ads.summary.roas_delta = perturbDelta(MOCK_DATA.ads.summary.roas_delta);
      MOCK_DATA.ads.summary.cost_per_conversion = perturb(MOCK_DATA.ads.summary.cost_per_conversion);
      MOCK_DATA.ads.summary.cpconv_delta = perturbDelta(MOCK_DATA.ads.summary.cpconv_delta);
      
      MOCK_DATA.ads.spend_over_time.forEach(d => {
        d.spend = perturb(d.spend);
        d.conversions = Math.round(perturb(d.conversions));
      });

      MOCK_DATA.ga4.channel_breakdown.forEach(d => {
        d.sessions = Math.round(perturb(d.sessions));
      });
      MOCK_DATA.ga4.top_pages.forEach(d => {
        d.pageviews = Math.round(perturb(d.pageviews));
      });
      MOCK_DATA.ga4.events.forEach(d => {
        d.count = Math.round(perturb(d.count));
      });
      MOCK_DATA.ga4.countries.forEach(d => {
        d.users = Math.round(perturb(d.users));
      });
      MOCK_DATA.ga4.device_split.forEach(d => {
        d.sessions = Math.round(perturb(d.sessions));
      });
      MOCK_DATA.gsc.top_queries.forEach(d => {
        d.clicks = Math.round(perturb(d.clicks));
        d.impressions = Math.round(perturb(d.impressions));
      });
      MOCK_DATA.gsc.top_pages.forEach(d => {
        d.clicks = Math.round(perturb(d.clicks));
        d.impressions = Math.round(perturb(d.impressions));
      });
      MOCK_DATA.ads.campaigns.forEach(d => {
        d.spend = perturb(d.spend);
        d.conversions = Math.round(perturb(d.conversions));
      });
      MOCK_DATA.ads.top_keywords.forEach(d => {
        d.impressions = Math.round(perturb(d.impressions));
        d.clicks = Math.round(perturb(d.clicks));
        d.conv = Math.round(perturb(d.conv));
        d.spend = perturb(d.spend);
      });

      renderDashboardData();
    }

    function renderDashboardData() {
      // Destroy existing charts
      

      // Meta
      document.getElementById('period-badge').innerText = document.getElementById('period-badge').innerText || MOCK_DATA.meta.period;

      // --- GA4 ---
      document.getElementById('ga4-act-users').innerText = fmt(MOCK_DATA.ga4.summary.active_users_7d);
      document.getElementById('ga4-act-users-delta').innerHTML = renderDelta(MOCK_DATA.ga4.summary.active_users_7d_delta);
      document.getElementById('ga4-users').innerText = fmt(MOCK_DATA.ga4.summary.users);
      document.getElementById('ga4-users-delta').innerHTML = renderDelta(MOCK_DATA.ga4.summary.users_delta);
      document.getElementById('ga4-new-users').innerText = fmt(MOCK_DATA.ga4.summary.new_users);
      document.getElementById('ga4-new-users-delta').innerHTML = renderDelta(MOCK_DATA.ga4.summary.new_users_delta);
      document.getElementById('ga4-sessions').innerText = fmt(MOCK_DATA.ga4.summary.sessions);
      document.getElementById('ga4-sessions-delta').innerHTML = renderDelta(MOCK_DATA.ga4.summary.sessions_delta);
      document.getElementById('ga4-sessions-demo').innerText = fmt(MOCK_DATA.ga4.summary.sessions);
      document.getElementById('ga4-sessions-delta-demo').innerHTML = renderDelta(MOCK_DATA.ga4.summary.sessions_delta);

      document.getElementById('ga4-ret-users').innerText = fmt(MOCK_DATA.ga4.summary.returning_users);
      document.getElementById('ga4-ret-users-delta').innerHTML = renderDelta(9.4); // Mock delta 
      document.getElementById('ga4-1d-users').innerText = fmt(Math.round(MOCK_DATA.ga4.summary.active_users_7d / 7 * 1.5));
      document.getElementById('ga4-7d-users').innerText = fmt(MOCK_DATA.ga4.summary.active_users_7d);
      document.getElementById('ga4-28d-users').innerText = fmt(Math.round(MOCK_DATA.ga4.summary.active_users_7d * 3.8));
      document.getElementById('ga4-30d-users').innerText = fmt(Math.round(MOCK_DATA.ga4.summary.active_users_7d * 4.1));
      
      document.getElementById('ga4-eng-sessions').innerText = fmt(MOCK_DATA.ga4.summary.engaged_sessions);
      document.getElementById('ga4-eng-sessions-delta').innerHTML = renderDelta(MOCK_DATA.ga4.summary.engaged_sessions_delta);
      document.getElementById('ga4-pageviews').innerText = fmt(MOCK_DATA.ga4.summary.pageviews);
      document.getElementById('ga4-pageviews-delta').innerHTML = renderDelta(MOCK_DATA.ga4.summary.pageviews_delta);
      document.getElementById('ga4-avg-session').innerText = MOCK_DATA.ga4.summary.avg_session_duration.toFixed(2) + 's';
      document.getElementById('ga4-avg-session-delta').innerHTML = renderDelta(MOCK_DATA.ga4.summary.duration_delta);
      document.getElementById('ga4-bounce').innerText = fmtPct(MOCK_DATA.ga4.summary.bounce_rate);
      document.getElementById('ga4-bounce-delta').innerHTML = renderDelta(MOCK_DATA.ga4.summary.bounce_delta, true);

      document.getElementById('ga4-eng').innerText = fmtPct(MOCK_DATA.ga4.summary.engagement_rate);
      document.getElementById('ga4-eng-delta').innerHTML = renderDelta(MOCK_DATA.ga4.summary.engagement_delta);
      document.getElementById('ga4-events').innerText = fmt(MOCK_DATA.ga4.summary.total_events);
      document.getElementById('ga4-events-delta').innerHTML = renderDelta(MOCK_DATA.ga4.summary.total_events_delta);
      document.getElementById('ga4-conv').innerText = fmt(MOCK_DATA.ga4.summary.conversions);
      document.getElementById('ga4-conv-delta').innerHTML = renderDelta(MOCK_DATA.ga4.summary.conversions_delta);
      document.getElementById('ga4-conv-demo').innerText = fmt(MOCK_DATA.ga4.summary.conversions);
      document.getElementById('ga4-conv-delta-demo').innerHTML = renderDelta(MOCK_DATA.ga4.summary.conversions_delta);
      
      document.getElementById('ga4-rev').innerText = fmtUSD(MOCK_DATA.ga4.summary.revenue);
      document.getElementById('ga4-rev-delta').innerHTML = renderDelta(MOCK_DATA.ga4.summary.revenue_delta);
      document.getElementById('ga4-rev-demo').innerText = fmtUSD(MOCK_DATA.ga4.summary.revenue);
      document.getElementById('ga4-rev-delta-demo').innerHTML = renderDelta(MOCK_DATA.ga4.summary.revenue_delta);

      document.getElementById('ga4-spu').innerText = MOCK_DATA.ga4.summary.sessions_per_user.toFixed(2);
      document.getElementById('ga4-spu-delta').innerHTML = renderDelta(MOCK_DATA.ga4.summary.sessions_per_user_delta);
      document.getElementById('ga4-pps').innerText = MOCK_DATA.ga4.summary.pages_per_session.toFixed(2);
      document.getElementById('ga4-pps-delta').innerHTML = renderDelta(MOCK_DATA.ga4.summary.pages_per_session_delta);
      document.getElementById('ga4-eps').innerText = MOCK_DATA.ga4.summary.events_per_session.toFixed(2);
      document.getElementById('ga4-eps-delta').innerHTML = renderDelta(MOCK_DATA.ga4.summary.events_per_session_delta);
      document.getElementById('ga4-ued').innerText = MOCK_DATA.ga4.summary.user_engagement_duration.toFixed(2) + 'Ms';
      document.getElementById('ga4-ued-delta').innerHTML = renderDelta(MOCK_DATA.ga4.summary.user_engagement_duration_delta);

      document.getElementById('ga4-chart1-title').innerText = 'Sessions & Users — ' + MOCK_DATA.meta.period;

      if (document.getElementById('ga4-chart1') && document.getElementById('ga4-chart1').offsetWidth > 0) {
        if (chartInstances['ga4-chart1']) { chartInstances['ga4-chart1'].destroy(); }
        chartInstances['ga4-chart1'] = new Chart(document.getElementById('ga4-chart1'), {
        type: 'line',
        data: {
          labels: MOCK_DATA.ga4.sessions_over_time.map(d => d.date),
          datasets: [
            {
              label: 'Sessions',
              data: MOCK_DATA.ga4.sessions_over_time.map(d => d.sessions),
              borderColor: '#0b5b6f',
              backgroundColor: 'rgba(11, 91, 111, 0.2)',
              fill: true,
              borderWidth: 3,
              pointRadius: 4,
              pointHoverRadius: 6,
              tension: 0.4
            },
            {
              label: 'Users',
              data: MOCK_DATA.ga4.sessions_over_time.map(d => d.users),
              borderColor: '#1ba1c2',
              backgroundColor: 'rgba(27, 161, 194, 0.1)',
              fill: true,
              borderWidth: 3,
              pointRadius: 4,
              pointHoverRadius: 6,
              tension: 0.4
            }
          ]
        },
        options: { responsive: true, maintainAspectRatio: false }
      });
      }

      if (document.getElementById('ga4-chart2') && document.getElementById('ga4-chart2').offsetWidth > 0) {
        if (chartInstances['ga4-chart2']) { chartInstances['ga4-chart2'].destroy(); }
        chartInstances['ga4-chart2'] = new Chart(document.getElementById('ga4-chart2'), {
        type: 'doughnut',
        data: {
          labels: MOCK_DATA.ga4.channel_breakdown.map(d => d.channel),
          datasets: [{
            data: MOCK_DATA.ga4.channel_breakdown.map(d => d.sessions),
            backgroundColor: brandColors,
            borderWidth: 0
          }]
        },
        options: { 
          responsive: true, maintainAspectRatio: false,
          plugins: {
            legend: { position: 'bottom' }
          }
        }
      });
      }

      if (document.getElementById('ga4-chart3') && document.getElementById('ga4-chart3').offsetWidth > 0) {
        if (chartInstances['ga4-chart3']) { chartInstances['ga4-chart3'].destroy(); }
        chartInstances['ga4-chart3'] = new Chart(document.getElementById('ga4-chart3'), {
        type: 'doughnut',
        data: {
          labels: MOCK_DATA.ga4.device_split.map(d => d.device),
          datasets: [{
            data: MOCK_DATA.ga4.device_split.map(d => d.sessions),
            backgroundColor: brandColors.slice(0, 3)
          }]
        },
        options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { position: 'left' } }, cutout: '70%' }
      });
      }

      if (document.getElementById('ga4-chart4') && document.getElementById('ga4-chart4').offsetWidth > 0) {
        if (chartInstances['ga4-chart4']) { chartInstances['ga4-chart4'].destroy(); }
        chartInstances['ga4-chart4'] = new Chart(document.getElementById('ga4-chart4'), {
        type: 'bar',
        data: {
          labels: MOCK_DATA.ga4.countries.map(d => d.country),
          datasets: [{
            label: 'Users',
            data: MOCK_DATA.ga4.countries.map(d => d.users),
            backgroundColor: '#0b5b6f'
          }]
        },
        options: { responsive: true, maintainAspectRatio: false }
      });
      }

      if (document.getElementById('ga4-chart5') && document.getElementById('ga4-chart5').offsetWidth > 0) {
        if (chartInstances['ga4-chart5']) { chartInstances['ga4-chart5'].destroy(); }
        chartInstances['ga4-chart5'] = new Chart(document.getElementById('ga4-chart5'), {
        type: 'bar',
        data: {
          labels: MOCK_DATA.ga4.sessions_over_time.map(d => d.date),
          datasets: [
            {
              label: 'Page Views',
              data: MOCK_DATA.ga4.sessions_over_time.map(d => d.pageviews),
              backgroundColor: 'rgba(11, 91, 111, 0.7)',
              yAxisID: 'y'
            },
            {
              label: 'Sessions',
              type: 'line',
              data: MOCK_DATA.ga4.sessions_over_time.map(d => d.sessions),
              borderColor: '#1ba1c2',
              backgroundColor: 'rgba(27, 161, 194, 0.1)',
              borderWidth: 3,
              pointRadius: 4,
              pointHoverRadius: 6,
              tension: 0.4,
              yAxisID: 'y'
            }
          ]
        },
        options: { responsive: true, maintainAspectRatio: false }
      });
      }

      if (document.getElementById('ga4-chart6') && document.getElementById('ga4-chart6').offsetWidth > 0) {
        if (chartInstances['ga4-chart6']) { chartInstances['ga4-chart6'].destroy(); }
        chartInstances['ga4-chart6'] = new Chart(document.getElementById('ga4-chart6'), {
        type: 'bar',
        data: {
          labels: MOCK_DATA.ga4.sessions_over_time.map(d => d.date),
          datasets: [
            {
              label: 'Revenue ($)',
              type: 'line',
              data: MOCK_DATA.ga4.sessions_over_time.map(d => d.revenue),
              borderColor: '#0b5b6f',
              backgroundColor: 'rgba(11, 91, 111, 0.1)',
              borderWidth: 3,
              pointRadius: 4,
              pointHoverRadius: 6,
              tension: 0.4,
              yAxisID: 'y1'
            },
            {
              label: 'Conversions',
              data: MOCK_DATA.ga4.sessions_over_time.map(d => d.conversions),
              backgroundColor: 'rgba(27, 161, 194, 0.7)',
              yAxisID: 'y'
            }
          ]
        },
        options: { 
          responsive: true, maintainAspectRatio: false,
          scales: {
            y: {
              type: 'linear',
              display: true,
              position: 'left',
            },
            y1: {
              type: 'linear',
              display: true,
              position: 'right',
              grid: {
                drawOnChartArea: false,
              },
            }
          }
        }
      });
      }

      if (document.getElementById('ga4-chart7') && document.getElementById('ga4-chart7').offsetWidth > 0) {
        if (chartInstances['ga4-chart7']) { chartInstances['ga4-chart7'].destroy(); }
        chartInstances['ga4-chart7'] = new Chart(document.getElementById('ga4-chart7'), {
        type: 'pie',
        data: {
          labels: MOCK_DATA.ga4.events.map(d => d.event_name),
          datasets: [{
            data: MOCK_DATA.ga4.events.map(d => d.count),
            backgroundColor: brandColors
          }]
        },
        options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { position: 'right' } } }
      });
      }

      if (document.getElementById('ga4-chart8')) {
        if (document.getElementById('ga4-chart8') && document.getElementById('ga4-chart8').offsetWidth > 0) {
        if (chartInstances['ga4-chart8']) { chartInstances['ga4-chart8'].destroy(); }
        chartInstances['ga4-chart8'] = new Chart(document.getElementById('ga4-chart8'), {
          type: 'doughnut',
          data: {
            labels: MOCK_DATA.ga4.device_split.map(d => d.device),
            datasets: [{
              data: MOCK_DATA.ga4.device_split.map(d => d.sessions),
              backgroundColor: brandColors,
              borderWidth: 0
            }]
          },
          options: { 
            responsive: true, 
            maintainAspectRatio: false, 
            plugins: { legend: { position: 'bottom' } },
            rotation: -90,
            circumference: 360,
            animation: {
              animateRotate: true,
              animateScale: false,
              duration: 1800,
              easing: 'easeInOutQuart',
              delay: 200
            }
          }
        });
      }
      }

      if (document.getElementById('ga4-chart9')) {
        if (document.getElementById('ga4-chart9') && document.getElementById('ga4-chart9').offsetWidth > 0) {
        if (chartInstances['ga4-chart9']) { chartInstances['ga4-chart9'].destroy(); }
        chartInstances['ga4-chart9'] = new Chart(document.getElementById('ga4-chart9'), {
          type: 'doughnut',
          data: {
            labels: MOCK_DATA.ga4.channel_breakdown.map(d => d.channel),
            datasets: [{
              data: MOCK_DATA.ga4.channel_breakdown.map(d => d.sessions),
              backgroundColor: brandColors,
              borderWidth: 0
            }]
          },
          options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { position: 'bottom' } } }
        });
      }
      }

      const ga4Table = document.querySelector('#ga4-table tbody');
      ga4Table.innerHTML = MOCK_DATA.ga4.top_pages.map(r => `
        <tr>
          <td>${r.page}</td>
          <td>${fmt(r.pageviews)}</td>
          <td>${r.bounce_rate.toFixed(1)}%</td>
          <td>${fmtTime(r.avg_time)}</td>
        </tr>
      `).join('');

      const eventsTable = document.querySelector('#ga4-events-table tbody');
      eventsTable.innerHTML = MOCK_DATA.ga4.events.map(r => `
        <tr>
          <td>${r.event_name}</td>
          <td>${fmt(r.count)}</td>
        </tr>
      `).join('');

      const sourceTable = document.querySelector('#ga4-source-table tbody');
      sourceTable.innerHTML = MOCK_DATA.ga4.channel_breakdown.map(r => `
        <tr>
          <td>${r.channel}</td>
          <td>${fmt(r.sessions)}</td>
          <td>${r.pct.toFixed(2)}%</td>
        </tr>
      `).join('');

      // Render new Demographics tables
      const cities = ['New York', 'Ashburn', 'Chicago', 'Charlotte', 'Allen', 'Toronto', 'Harrisburg', 'Arlington Heights', '(not set)'];
      const locationData = MOCK_DATA.ga4.countries.slice(0, 10).map((c, i) => {
        return {
          country: c.country,
          city: cities[i % cities.length],
          au: c.users,
          nu: Math.floor(c.users * 0.4),
          sess: Math.floor(c.users * 1.5)
        };
      });
      document.querySelector('#ga4-location-table tbody').innerHTML = locationData.map(r => `
        <tr><td>${r.country}</td><td>${r.city}</td><td>${fmt(r.au)}</td><td>${fmt(r.nu)}</td><td>${fmt(r.sess)}</td></tr>
      `).join('');

      const geoDetailedTable = document.querySelector('#geo-detailed-table tbody');
      if (geoDetailedTable) {
        // Generating more rows for detailed geo view
        const geoDetailData = [];
        MOCK_DATA.ga4.countries.forEach((c) => {
          cities.forEach((city, index) => {
             geoDetailData.push({
               country: c.country,
               city: city,
               users: Math.floor(c.users / (index + 1) * Math.random()),
               sessions: Math.floor(c.users * 1.5 / (index + 1) * Math.random()),
               conversions: Math.floor(Math.random() * 3),
               revenue: '0.00',
               eng: (20 + Math.random() * 60).toFixed(2)
             });
          });
        });
        geoDetailData.sort((a,b) => b.users - a.users);
        
        geoDetailedTable.innerHTML = geoDetailData.slice(0, 10).map(r => `
          <tr>
            <td>${r.country}</td>
            <td>${r.city}</td>
            <td>${fmt(r.users)}</td>
            <td>${fmt(r.sessions)}</td>
            <td>${r.conversions}</td>
            <td>${r.revenue}</td>
            <td>${r.eng}%</td>
          </tr>
        `).join('');
      }


      const langData = [{ lang: 'English', au: MOCK_DATA.ga4.summary.users, sess: MOCK_DATA.ga4.summary.sessions }];
      document.querySelector('#ga4-language-table tbody').innerHTML = langData.map(r => `
        <tr><td>${r.lang}</td><td>${fmt(r.au)}</td><td>${fmt(r.sess)}</td></tr>
      `).join('');


      const userTypeData = [
        { type: 'returning', au: MOCK_DATA.ga4.summary.returning_users, nu: 0, sess: Math.floor(MOCK_DATA.ga4.summary.sessions * 0.6) },
        { type: 'new', au: MOCK_DATA.ga4.summary.new_users, nu: MOCK_DATA.ga4.summary.new_users, sess: Math.floor(MOCK_DATA.ga4.summary.sessions * 0.3) },
        { type: '(not set)', au: 0, nu: 0, sess: Math.floor(MOCK_DATA.ga4.summary.sessions * 0.1) }
      ];
      document.querySelector('#ga4-usertype-table tbody').innerHTML = userTypeData.map(r => `
        <tr><td>${r.type}</td><td>${fmt(r.au)}</td><td>${fmt(r.nu)}</td><td>${fmt(r.sess)}</td></tr>
      `).join('');




      // --- Technology ---
      document.getElementById('tech-users').innerText = fmt(MOCK_DATA.ga4.summary.users);
      document.getElementById('tech-sessions').innerText = fmt(MOCK_DATA.ga4.summary.sessions);
      document.getElementById('tech-eng-rate').innerText = fmtPct(MOCK_DATA.ga4.summary.engagement_rate);
      
      const osData = MOCK_DATA.ga4.os_split;
      const browserData = MOCK_DATA.ga4.browser_split;
      const deviceData = MOCK_DATA.ga4.device_split;
      
      if (document.getElementById('ga4-chart-os') && document.getElementById('ga4-chart-os').offsetWidth > 0) {
        if (chartInstances['ga4-chart-os']) { chartInstances['ga4-chart-os'].destroy(); }
        chartInstances['ga4-chart-os'] = new Chart(document.getElementById('ga4-chart-os'), {
        type: 'doughnut',
        data: {
          labels: osData.map(d => d.os),
          datasets: [{
            data: osData.map(d => d.sessions),
            backgroundColor: brandColors,
            borderWidth: 0
          }]
        },
        options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { position: 'left' } }, cutout: '70%' }
      });
      }

      if (document.getElementById('ga4-chart-browser') && document.getElementById('ga4-chart-browser').offsetWidth > 0) {
        if (chartInstances['ga4-chart-browser']) { chartInstances['ga4-chart-browser'].destroy(); }
        chartInstances['ga4-chart-browser'] = new Chart(document.getElementById('ga4-chart-browser'), {
        type: 'bar',
        data: {
          labels: browserData.map(d => d.browser),
          datasets: [{
            label: 'Sessions',
            data: browserData.map(d => d.sessions),
            backgroundColor: '#0b5b6f'
          }]
        },
        options: { responsive: true, maintainAspectRatio: false }
      });
      }

      document.querySelector('#tech-device-table tbody').innerHTML = deviceData.map(r => `
        <tr><td>${r.device}</td><td>${fmt(r.users)}</td><td>${fmt(r.sessions)}</td><td>${r.eng.toFixed(2)}%</td><td>${r.bounce.toFixed(2)}%</td></tr>
      `).join('');
      document.querySelector('#tech-os-table tbody').innerHTML = osData.map(r => `
        <tr><td>${r.os}</td><td>${fmt(r.users)}</td><td>${fmt(r.sessions)}</td><td>${r.eng.toFixed(2)}%</td><td>${r.bounce.toFixed(2)}%</td></tr>
      `).join('');
      document.querySelector('#tech-browser-table tbody').innerHTML = browserData.map(r => `
        <tr><td>${r.browser}</td><td>${fmt(r.users)}</td><td>${fmt(r.sessions)}</td><td>${r.eng.toFixed(2)}%</td><td>${r.bounce.toFixed(2)}%</td></tr>
      `).join('');

      const detailedTechData = Array.from({length: 10}, (_, i) => ({
        device: ['desktop', 'mobile', 'tablet'][Math.floor(Math.random()*3)],
        browser: browserData[Math.floor(Math.random()*browserData.length)].browser,
        os: osData[Math.floor(Math.random()*osData.length)].os,
        version: Math.floor(Math.random()*15) + 1,
        brand: ['Google', 'Apple', 'Samsung', '(not set)'][Math.floor(Math.random()*4)],
        model: '(not set)',
        platform: 'web',
        res: ['1920x1080', '1366x768', '1280x720', '1536x864'][Math.floor(Math.random()*4)],
        users: Math.floor(Math.random() * 5000),
        sessions: Math.floor(Math.random() * 7000),
        eng: 40 + Math.random()*40,
        bounce: 20 + Math.random()*40,
        dur: 150 + Math.random()*200
      }));
      
      document.querySelector('#tech-detailed-table tbody').innerHTML = detailedTechData.map(r => `
        <tr><td>${r.device}</td><td>${r.browser}</td><td>${r.os}</td><td>${r.version}</td><td>${r.brand}</td><td>${r.model}</td><td>${r.platform}</td><td>${r.res}</td><td>${fmt(r.users)}</td><td>${fmt(r.sessions)}</td><td>${r.eng.toFixed(2)}%</td><td>${r.bounce.toFixed(2)}%</td><td>${r.dur.toFixed(2)}</td></tr>
      `).join('');

      // --- GSC ---
      document.getElementById('gsc-clicks').innerText = fmt(MOCK_DATA.gsc.summary.total_clicks);
      document.getElementById('gsc-clicks-delta').innerHTML = renderDelta(MOCK_DATA.gsc.summary.clicks_delta, false, "↑ Search Traffic");
      document.getElementById('gsc-imp').innerText = fmt(MOCK_DATA.gsc.summary.total_impressions);
      document.getElementById('gsc-imp-delta').innerHTML = renderDelta(MOCK_DATA.gsc.summary.impressions_delta, false, "↑ Visibility");
      document.getElementById('gsc-ctr').innerText = fmtPct(MOCK_DATA.gsc.summary.avg_ctr);
      document.getElementById('gsc-ctr-delta').innerHTML = renderDelta(MOCK_DATA.gsc.summary.ctr_delta, false, "Click-Through Rate");
      document.getElementById('gsc-pos').innerText = MOCK_DATA.gsc.summary.avg_position.toFixed(2);
      document.getElementById('gsc-pos-delta').innerHTML = renderDelta(MOCK_DATA.gsc.summary.position_delta, true, "Search Ranking");

      const gscDailyLabels = MOCK_DATA.gsc.clicks_over_time.map(d => d.date);
      if (document.getElementById('gsc-chart1') && document.getElementById('gsc-chart1').offsetWidth > 0) {
        if (chartInstances['gsc-chart1']) { chartInstances['gsc-chart1'].destroy(); }
        chartInstances['gsc-chart1'] = new Chart(document.getElementById('gsc-chart1'), {
        type: 'line',
        data: {
          labels: gscDailyLabels,
          datasets: [
            {
              label: 'Clicks',
              data: MOCK_DATA.gsc.clicks_over_time.map(d => d.clicks),
              borderColor: '#1ba1c2', // light teal
              backgroundColor: 'rgba(27, 161, 194, 0.2)',
              fill: true,
              borderWidth: 3,
              pointRadius: 4,
              pointHoverRadius: 6,
              tension: 0.4,
              yAxisID: 'y'
            },
            {
              label: 'Impressions',
              data: MOCK_DATA.gsc.clicks_over_time.map(d => d.impressions),
              borderColor: '#0b5b6f', // dark teal
              backgroundColor: 'rgba(11, 91, 111, 0.2)',
              fill: true,
              borderWidth: 3,
              pointRadius: 4,
              pointHoverRadius: 6,
              tension: 0.4,
              yAxisID: 'y1'
            }
          ]
        },
        options: { 
          responsive: true, maintainAspectRatio: false,
          interaction: { mode: 'index', intersect: false },
          scales: {
            x: { grid: { display: false } },
            y: { type: 'linear', display: true, position: 'left', title: {display: true, text: 'Clicks'} },
            y1: { type: 'linear', display: true, position: 'right', grid: { drawOnChartArea: false }, title: {display: true, text: 'Impressions'} }
          }
        }
      });
      }

      const getPosColor = (pos) => pos <= 5 ? 'var(--color-success)' : (pos <= 10 ? 'var(--color-secondary)' : 'var(--color-muted)');
      
      const renderTable = (selector, data, mapRowFn) => {
        const tbody = document.querySelector(selector);
        if(tbody) tbody.innerHTML = data.map(mapRowFn).join('');
      };

      // Overview Daily Table
      renderTable('#gsc-table-daily tbody', MOCK_DATA.gsc.clicks_over_time.slice(-4), d => `
        <tr>
          <td>${d.date}</td>
          <td>${fmt(d.clicks)}</td>
          <td>${fmt(d.impressions)}</td>
          <td>${((d.clicks/d.impressions)*100).toFixed(2)}%</td>
          <td style="color: ${getPosColor(MOCK_DATA.gsc.summary.avg_position)}">${(MOCK_DATA.gsc.summary.avg_position + Math.random()).toFixed(2)}</td>
        </tr>
      `);

      // Queries
      renderTable('#gsc-table-queries tbody', MOCK_DATA.gsc.top_queries, q => `
        <tr>
          <td>${q.query}</td>
          <td>${fmt(q.clicks)}</td>
          <td>${fmt(q.impressions)}</td>
          <td>${q.ctr.toFixed(2)}%</td>
          <td>${q.position.toFixed(2)}</td>
        </tr>
      `);

      const queryPages = MOCK_DATA.gsc.top_queries.map((q, i) => ({ ...q, page: MOCK_DATA.gsc.top_pages[i % MOCK_DATA.gsc.top_pages.length].page }));
      renderTable('#gsc-table-query-page tbody', queryPages, q => `
        <tr>
          <td>${q.query}</td>
          <td>https://AcmeCorp.com${q.page}</td>
          <td>${fmt(q.clicks)}</td>
          <td>${fmt(q.impressions)}</td>
          <td>${q.ctr.toFixed(2)}%</td>
          <td>${q.position.toFixed(2)}</td>
        </tr>
      `);

      // Pages
      renderTable('#gsc-table-pages tbody', MOCK_DATA.gsc.top_pages, p => `
        <tr>
          <td>https://AcmeCorp.com${p.page}</td>
          <td>${fmt(p.clicks)}</td>
          <td>${fmt(p.impressions)}</td>
          <td>${p.ctr.toFixed(2)}%</td>
          <td>${p.position.toFixed(2)}</td>
        </tr>
      `);

      const devices = ['DESKTOP', 'MOBILE', 'TABLET'];
      const pageDevices = MOCK_DATA.gsc.top_pages.map((p, i) => ({ ...p, device: devices[i % 3], clicks: Math.round(p.clicks/(i+1)), impressions: Math.round(p.impressions/(i+1)) }));
      renderTable('#gsc-table-page-device tbody', pageDevices, p => `
        <tr>
          <td>https://AcmeCorp.com${p.page}</td>
          <td>${p.device}</td>
          <td>${fmt(p.clicks)}</td>
          <td>${fmt(p.impressions)}</td>
          <td>${((p.clicks/p.impressions)*100).toFixed(2)}%</td>
          <td>${p.position.toFixed(2)}</td>
        </tr>
      `);

      // Geography
      const countries = [
          { c: 'USA', clicks: 2600, imp: 22090, pos: 7.31 },
          { c: 'DZA', clicks: 220, imp: 3060, pos: 5.57 },
          { c: 'TJK', clicks: 150, imp: 3040, pos: 5.21 },
          { c: 'AUS', clicks: 110, imp: 1510, pos: 5.68 },
          { c: 'SDN', clicks: 110, imp: 1270, pos: 6.51 }
      ];
      if (document.getElementById('gsc-chart-country') && document.getElementById('gsc-chart-country').offsetWidth > 0) {
        if (chartInstances['gsc-chart-country']) { chartInstances['gsc-chart-country'].destroy(); }
        chartInstances['gsc-chart-country'] = new Chart(document.getElementById('gsc-chart-country'), {
        type: 'bar',
        data: { labels: countries.map(c => c.c), datasets: [{ label: 'Clicks', data: countries.map(c => c.clicks), backgroundColor: '#a3e635' },{ label: 'Impressions', data: countries.map(c => c.imp), backgroundColor: '#0369a1' }] },
        options: { responsive: true, maintainAspectRatio: false }
      });
      }
      if (document.getElementById('gsc-chart-dev-country') && document.getElementById('gsc-chart-dev-country').offsetWidth > 0) {
        if (chartInstances['gsc-chart-dev-country']) { chartInstances['gsc-chart-dev-country'].destroy(); }
        chartInstances['gsc-chart-dev-country'] = new Chart(document.getElementById('gsc-chart-dev-country'), {
        type: 'bar',
        data: { labels: countries.map(c => c.c + ' - ' + devices[Math.floor(Math.random()*2)]), datasets: [{ label: 'Clicks', data: countries.map(c => c.clicks), backgroundColor: '#a3e635' },{ label: 'Impressions', data: countries.map(c => c.imp), backgroundColor: '#0369a1' }] },
        options: { responsive: true, maintainAspectRatio: false }
      });
      }
      renderTable('#gsc-table-countries tbody', countries, c => `<tr><td>${c.c}</td><td>${fmt(c.clicks)}</td><td>${fmt(c.imp)}</td><td>${((c.clicks/c.imp)*100).toFixed(2)}%</td><td>${c.pos}</td></tr>`);
      renderTable('#gsc-table-dev-countries tbody', countries, c => `<tr><td>${devices[Math.floor(Math.random()*2)]}</td><td>${c.c}</td><td>${fmt(c.clicks)}</td><td>${fmt(c.imp)}</td><td>${((c.clicks/c.imp)*100).toFixed(2)}%</td><td>${c.pos}</td></tr>`);

      // Devices
      const devStats = [
          { d: 'MOBILE', clicks: 9700, imp: 218400, pos: 5.94 },
          { d: 'DESKTOP', clicks: 3200, imp: 256400, pos: 7.22 },
          { d: 'TABLET', clicks: 800, imp: 6600, pos: 5.88 }
      ];

      if (document.getElementById('gsc-chart-devices') && document.getElementById('gsc-chart-devices').offsetWidth > 0) {
        if (chartInstances['gsc-chart-devices']) { chartInstances['gsc-chart-devices'].destroy(); }
        chartInstances['gsc-chart-devices'] = new Chart(document.getElementById('gsc-chart-devices'), {
        type: 'pie',
        data: { 
          labels: devStats.map(d=>d.d), 
          datasets: [
            { 
              label: 'Impressions', 
              data: devStats.map(d=>d.imp), 
              backgroundColor: ['#0369a1', '#1d4ed8', '#a3e635'], 
              borderWidth: 1
            }
          ] 
        },
        options: { 
          responsive: true, 
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: true,
              position: 'bottom'
            }
          }
        }
      });
      }

      renderTable('#gsc-table-devices tbody', devStats, d => `<tr><td>${d.d}</td><td>${fmt(d.clicks)}</td><td>${fmt(d.imp)}</td><td>${((d.clicks/d.imp)*100).toFixed(2)}%</td><td>${d.pos}</td></tr>`);

      // Search Appearances
      const apps = [
          { a: 'TRANSLATED_RESULT', clicks: 200, imp: 5400, pos: 8.16 },
          { a: 'PRODUCT_SNIPPETS', clicks: 3000, imp: 105800, pos: 6.75 },
          { a: 'MERCHANT_LISTINGS', clicks: 0, imp: 200, pos: 1.00 }
      ];
      renderTable('#gsc-table-search tbody', apps, a => `<tr><td>${a.a}</td><td>${fmt(a.clicks)}</td><td>${fmt(a.imp)}</td><td>${((a.clicks/a.imp)*100).toFixed(2)}%</td><td>${a.pos.toFixed(2)}</td></tr>`);


      // --- GBP ---
      document.getElementById('gbp-views').innerText = fmt(MOCK_DATA.gbp.summary.profile_views);
      document.getElementById('gbp-views-delta').innerHTML = renderDelta(MOCK_DATA.gbp.summary.profile_views_delta);
      document.getElementById('gbp-search-views').innerText = fmt(MOCK_DATA.gbp.summary.search_views);
      document.getElementById('gbp-search-views-delta').innerHTML = renderDelta(MOCK_DATA.gbp.summary.search_views_delta);
      document.getElementById('gbp-maps-views').innerText = fmt(MOCK_DATA.gbp.summary.maps_views);
      document.getElementById('gbp-maps-views-delta').innerHTML = renderDelta(MOCK_DATA.gbp.summary.maps_views_delta);
      document.getElementById('gbp-direct-searches').innerText = fmt(980);
      document.getElementById('gbp-direct-searches-delta').innerHTML = renderDelta(5.2);
      document.getElementById('gbp-discovery-searches').innerText = fmt(1640);
      document.getElementById('gbp-discovery-searches-delta').innerHTML = renderDelta(8.4);

      document.getElementById('gbp-clicks').innerText = fmt(MOCK_DATA.gbp.summary.website_clicks);
      document.getElementById('gbp-clicks-delta').innerHTML = renderDelta(MOCK_DATA.gbp.summary.website_clicks_delta);
      document.getElementById('gbp-directions').innerText = fmt(MOCK_DATA.gbp.summary.direction_requests);
      document.getElementById('gbp-directions-delta').innerHTML = renderDelta(MOCK_DATA.gbp.summary.directions_delta);
      document.getElementById('gbp-calls').innerText = fmt(MOCK_DATA.gbp.summary.phone_calls);
      document.getElementById('gbp-calls-delta').innerHTML = renderDelta(MOCK_DATA.gbp.summary.calls_delta);
      document.getElementById('gbp-messages').innerText = fmt(142);
      document.getElementById('gbp-bookings').innerText = fmt(85);
      document.getElementById('gbp-menu').innerText = fmt(640);

      document.getElementById('gbp-rating').innerText = MOCK_DATA.gbp.summary.avg_rating.toFixed(1);
      document.getElementById('gbp-total-reviews').innerText = fmt(MOCK_DATA.gbp.summary.total_reviews);
      document.getElementById('gbp-new-reviews').innerText = fmt(MOCK_DATA.gbp.summary.new_reviews);
      document.getElementById('gbp-response-rate').innerText = MOCK_DATA.gbp.summary.response_rate.toFixed(1) + '%';
      document.getElementById('gbp-rating-dist-summary').innerText = MOCK_DATA.gbp.summary.avg_rating.toFixed(1) + '/5';

      if (document.getElementById('gbp-chart1') && document.getElementById('gbp-chart1').offsetWidth > 0) {
        if (chartInstances['gbp-chart1']) { chartInstances['gbp-chart1'].destroy(); }
        chartInstances['gbp-chart1'] = new Chart(document.getElementById('gbp-chart1'), {
        type: 'bar',
        data: {
          labels: MOCK_DATA.gbp.views_over_time.map(d => d.month),
          datasets: [
            { label: 'Search Views', data: MOCK_DATA.gbp.views_over_time.map(d => d.search_views), backgroundColor: '#0b5b6f' },
            { label: 'Maps Views', data: MOCK_DATA.gbp.views_over_time.map(d => d.maps_views), backgroundColor: '#54c6e3' }
          ]
        },
        options: { 
          responsive: true, maintainAspectRatio: false,
          scales: { x: { stacked: true, grid: { display: false } }, y: { stacked: true } }
        }
      });
      }

      if (document.getElementById('gbp-chart2') && document.getElementById('gbp-chart2').offsetWidth > 0) {
        if (chartInstances['gbp-chart2']) { chartInstances['gbp-chart2'].destroy(); }
        chartInstances['gbp-chart2'] = new Chart(document.getElementById('gbp-chart2'), {
        type: 'bar',
        data: {
          labels: MOCK_DATA.gbp.actions_over_time.map(d => d.month),
          datasets: [
            { label: 'Website Clicks', data: MOCK_DATA.gbp.actions_over_time.map(d => d.website), backgroundColor: '#0b5b6f' },
            { label: 'Directions', data: MOCK_DATA.gbp.actions_over_time.map(d => d.directions), backgroundColor: '#1ba1c2' },
            { label: 'Phone Calls', data: MOCK_DATA.gbp.actions_over_time.map(d => d.calls), backgroundColor: '#54c6e3' }
          ]
        },
        options: { 
          responsive: true, maintainAspectRatio: false,
          scales: { x: { grid: { display: false } } }
        }
      });
      }

      document.getElementById('gbp-rating-large').innerText = MOCK_DATA.gbp.summary.avg_rating.toFixed(1) + '/5';
      document.getElementById('gbp-rating-sub').innerText = MOCK_DATA.gbp.summary.total_reviews + ' reviews';
      document.getElementById('gbp-bars').innerHTML = MOCK_DATA.gbp.rating_distribution.map(d => `
        <div class="rating-bar-row">
          <div class="rating-bar-label">${d.stars} Stars</div>
          <div class="rating-bar-track">
            <div class="rating-bar-fill" style="width: ${d.pct}%;"></div>
          </div>
          <div class="rating-bar-count">${d.count}</div>
        </div>
      `).join('');


      // --- Google Ads ---
      document.getElementById('ads-spend').innerText = fmtUSD(MOCK_DATA.ads.summary.total_spend);
      document.getElementById('ads-imp').innerText = fmt(MOCK_DATA.ads.summary.impressions);
      document.getElementById('ads-clicks').innerText = fmt(MOCK_DATA.ads.summary.clicks);
      document.getElementById('ads-ctr').innerText = fmtPct(MOCK_DATA.ads.summary.ctr);
      document.getElementById('ads-conv').innerText = fmt(MOCK_DATA.ads.summary.conversions);
      document.getElementById('ads-conv-rate').innerText = fmtPct(MOCK_DATA.ads.summary.conversion_rate);
      document.getElementById('ads-avg-cpc').innerText = fmtUSD(MOCK_DATA.ads.summary.avg_cpc);
      document.getElementById('ads-cpc').innerText = fmtUSD(MOCK_DATA.ads.summary.cost_per_conversion);
      document.getElementById('ads-conv-val').innerText = fmtUSD(MOCK_DATA.ads.summary.revenue);
      document.getElementById('ads-campaigns-tracked').innerText = MOCK_DATA.ads.campaigns.length.toString();

      // Extend MOCK_DATA.ads.spend_over_time with mock impressions
      MOCK_DATA.ads.spend_over_time.forEach(d => {
        d.impressions = d.clicks * (20 + Math.random() * 15);
      });

      // Chart: Spend, Clicks & Conversions
      if (document.getElementById('ads-chart-spend-clicks')) {
        if (document.getElementById('ads-chart-spend-clicks') && document.getElementById('ads-chart-spend-clicks').offsetWidth > 0) {
        if (chartInstances['ads-chart-spend-clicks']) { chartInstances['ads-chart-spend-clicks'].destroy(); }
        chartInstances['ads-chart-spend-clicks'] = new Chart(document.getElementById('ads-chart-spend-clicks'), {
          type: 'bar',
          data: {
            labels: MOCK_DATA.ads.spend_over_time.map(d => d.date.split('-').slice(1).join('/')),
            datasets: [
              {
                label: 'Spend',
                type: 'bar',
                data: MOCK_DATA.ads.spend_over_time.map(d => d.spend),
                backgroundColor: '#0b5b6f',
                yAxisID: 'y'
              },
              {
                label: 'Clicks',
                type: 'line',
                data: MOCK_DATA.ads.spend_over_time.map(d => d.clicks),
                borderColor: '#84cc16',
                borderWidth: 2,
                pointRadius: 0,
                tension: 0.4,
                yAxisID: 'y1'
              },
              {
                label: 'Conversions',
                type: 'line',
                data: MOCK_DATA.ads.spend_over_time.map(d => d.conversions),
                borderColor: '#ef4444',
                borderWidth: 2,
                pointRadius: 0,
                tension: 0.4,
                yAxisID: 'y1'
              }
            ]
          },
          options: {
            responsive: true, maintainAspectRatio: false,
            scales: {
              x: { grid: { display: false } },
              y: { type: 'linear', display: true, position: 'left' },
              y1: { type: 'linear', display: true, position: 'right', grid: { drawOnChartArea: false } }
            }
          }
        });
      }
      }

      // Chart: Impressions & CTR
      if (document.getElementById('ads-chart-imp-ctr')) {
        if (document.getElementById('ads-chart-imp-ctr') && document.getElementById('ads-chart-imp-ctr').offsetWidth > 0) {
        if (chartInstances['ads-chart-imp-ctr']) { chartInstances['ads-chart-imp-ctr'].destroy(); }
        chartInstances['ads-chart-imp-ctr'] = new Chart(document.getElementById('ads-chart-imp-ctr'), {
          type: 'bar',
          data: {
            labels: MOCK_DATA.ads.spend_over_time.map(d => d.date.split('-').slice(1).join('/')),
            datasets: [
              {
                label: 'Impressions',
                type: 'bar',
                data: MOCK_DATA.ads.spend_over_time.map(d => d.impressions),
                backgroundColor: '#0b5b6f',
                yAxisID: 'y'
              },
              {
                label: 'CTR',
                type: 'line',
                data: MOCK_DATA.ads.spend_over_time.map(d => (d.clicks / d.impressions) * 100),
                borderColor: '#84cc16',
                borderWidth: 2,
                pointRadius: 0,
                tension: 0.4,
                yAxisID: 'y1'
              }
            ]
          },
          options: {
            responsive: true, maintainAspectRatio: false,
            scales: {
              x: { grid: { display: false } },
              y: { type: 'linear', display: true, position: 'left' },
              y1: { type: 'linear', display: true, position: 'right', grid: { drawOnChartArea: false } }
            }
          }
        });
      }
      }

      // Daily Performance Table Setup
      adsDailyData = [...MOCK_DATA.ads.spend_over_time].reverse();
      adsDailyPage = 1;
      renderAdsDailyTable();

      // Campaign Tab - Campaigns Table
      const campTable = document.querySelector('#ads-campaigns-table tbody');
      if (campTable) {
        campTable.innerHTML = MOCK_DATA.ads.campaigns.map(c => `
          <tr>
            <td>${c.name}</td>
            <td style="color: #65a30d; font-weight: 500;">${c.status.toUpperCase()}</td>
            <td>${fmtUSD(c.spend)}</td>
            <td>${fmt(c.impressions)}</td>
            <td>${fmt(c.clicks)}</td>
            <td>${c.ctr.toFixed(2)}%</td>
            <td>${c.conversions}</td>
            <td>${fmtUSD(c.cpc)}</td>
            <td>${(c.conversions / c.clicks * 100).toFixed(2)}%</td>
          </tr>
        `).join('');
      }

      // Campaign Details Sub-section
      const selCamp = MOCK_DATA.ads.campaigns[0];
      if (document.getElementById('camp-det-spend')) {
         document.getElementById('camp-det-spend').innerText = fmtUSD(selCamp.spend);
         document.getElementById('camp-det-imp').innerText = fmt(selCamp.impressions);
         document.getElementById('camp-det-clicks').innerText = fmt(selCamp.clicks);
         document.getElementById('camp-det-ctr').innerText = selCamp.ctr.toFixed(2) + '%';
         document.getElementById('camp-det-conv').innerText = selCamp.conversions;
         document.getElementById('camp-det-convrate').innerText = (selCamp.conversions / selCamp.clicks * 100).toFixed(2) + '%';
         document.getElementById('camp-det-cpc').innerText = fmtUSD(selCamp.cpc);
         document.getElementById('camp-det-costconv').innerText = fmtUSD(selCamp.spend / selCamp.conversions);
      }

      // Campaign Details Charts
      if (document.getElementById('ads-camp-chart-spend-clicks')) {
        if (document.getElementById('ads-camp-chart-spend-clicks') && document.getElementById('ads-camp-chart-spend-clicks').offsetWidth > 0) {
        if (chartInstances['ads-camp-chart-spend-clicks']) { chartInstances['ads-camp-chart-spend-clicks'].destroy(); }
        chartInstances['ads-camp-chart-spend-clicks'] = new Chart(document.getElementById('ads-camp-chart-spend-clicks'), {
          type: 'bar',
          data: {
            labels: MOCK_DATA.ads.spend_over_time.map(d => d.date.split('-').slice(1).join('/')),
            datasets: [
              { label: 'Spend', type: 'bar', data: MOCK_DATA.ads.spend_over_time.map(d => d.spend * 0.4), backgroundColor: '#0b5b6f', yAxisID: 'y' },
              { label: 'Clicks', type: 'line', data: MOCK_DATA.ads.spend_over_time.map(d => d.clicks * 0.4), borderColor: '#84cc16', borderWidth: 2, pointRadius: 0, tension: 0.4, yAxisID: 'y1' },
              { label: 'Conversions', type: 'line', data: MOCK_DATA.ads.spend_over_time.map(d => d.conversions * 0.4), borderColor: '#ef4444', borderWidth: 2, pointRadius: 0, tension: 0.4, yAxisID: 'y1' }
            ]
          },
          options: { responsive: true, maintainAspectRatio: false, scales: { x: { grid: { display: false } }, y: { type: 'linear', display: true, position: 'left' }, y1: { type: 'linear', display: true, position: 'right', grid: { drawOnChartArea: false } } } }
        });
      }
      }

      if (document.getElementById('ads-camp-chart-imp-ctr')) {
        if (document.getElementById('ads-camp-chart-imp-ctr') && document.getElementById('ads-camp-chart-imp-ctr').offsetWidth > 0) {
        if (chartInstances['ads-camp-chart-imp-ctr']) { chartInstances['ads-camp-chart-imp-ctr'].destroy(); }
        chartInstances['ads-camp-chart-imp-ctr'] = new Chart(document.getElementById('ads-camp-chart-imp-ctr'), {
          type: 'bar',
          data: {
            labels: MOCK_DATA.ads.spend_over_time.map(d => d.date.split('-').slice(1).join('/')),
            datasets: [
              { label: 'Impressions', type: 'bar', data: MOCK_DATA.ads.spend_over_time.map(d => d.impressions * 0.4), backgroundColor: '#0b5b6f', yAxisID: 'y' },
              { label: 'CTR', type: 'line', data: MOCK_DATA.ads.spend_over_time.map(d => (d.clicks / d.impressions) * 100), borderColor: '#84cc16', borderWidth: 2, pointRadius: 0, tension: 0.4, yAxisID: 'y1' }
            ]
          },
          options: { responsive: true, maintainAspectRatio: false, scales: { x: { grid: { display: false } }, y: { type: 'linear', display: true, position: 'left' }, y1: { type: 'linear', display: true, position: 'right', grid: { drawOnChartArea: false } } } }
        });
      }
      }

      // Ad Group and Keyword Breakdowns
      if (document.getElementById('ads-camp-top-keywords')) {
        if (document.getElementById('ads-camp-top-keywords') && document.getElementById('ads-camp-top-keywords').offsetWidth > 0) {
        if (chartInstances['ads-camp-top-keywords']) { chartInstances['ads-camp-top-keywords'].destroy(); }
        chartInstances['ads-camp-top-keywords'] = new Chart(document.getElementById('ads-camp-top-keywords'), {
          type: 'bar',
          data: {
            labels: MOCK_DATA.ads.top_keywords.map(k => k.keyword.split(' ')[0]),
            datasets: [
              { label: 'Spend', data: MOCK_DATA.ads.top_keywords.map(k => k.spend), backgroundColor: '#0b5b6f' },
              { label: 'Clicks', data: MOCK_DATA.ads.top_keywords.map(k => k.clicks), backgroundColor: '#54c6e3' }
            ]
          },
          options: { responsive: true, maintainAspectRatio: false }
        });
      }
      }

      if (document.getElementById('ads-camp-ad-groups')) {
        const adGroups = MOCK_DATA.ads.ad_groups;
        if (document.getElementById('ads-camp-ad-groups') && document.getElementById('ads-camp-ad-groups').offsetWidth > 0) {
        if (chartInstances['ads-camp-ad-groups']) { chartInstances['ads-camp-ad-groups'].destroy(); }
        chartInstances['ads-camp-ad-groups'] = new Chart(document.getElementById('ads-camp-ad-groups'), {
          type: 'bar',
          data: {
            labels: adGroups.map(a => a.name),
            datasets: [
              { label: 'Spend', data: adGroups.map(a => a.spend), backgroundColor: '#0b5b6f' },
              { label: 'Conversions', data: adGroups.map(a => a.conversions), backgroundColor: '#54c6e3' }
            ]
          },
          options: { responsive: true, maintainAspectRatio: false }
        });
      }
      }

      const adsKeywordBrTable = document.querySelector('#ads-keyword-brdown-table tbody');
      if (adsKeywordBrTable) {
        adsKeywordBrTable.innerHTML = MOCK_DATA.ads.top_keywords.map(k => `
          <tr>
            <td>${k.keyword}</td>
            <td>${k.match}</td>
            <td>Brand Terms</td>
            <td>${fmtUSD(k.spend)}</td>
            <td>${fmt(k.impressions)}</td>
            <td>${fmt(k.clicks)}</td>
            <td>${k.ctr.toFixed(2)}%</td>
            <td>${k.conv}</td>
            <td>${fmtUSD(k.cpc)}</td>
            <td>${(k.conv / k.clicks * 100).toFixed(2)}%</td>
          </tr>
        `).join('');
      }

      const adsSearchTermsTable = document.querySelector('#ads-search-terms-table tbody');
      if (adsSearchTermsTable) {
        adsSearchTermsTable.innerHTML = MOCK_DATA.ads.top_keywords.map(k => `
          <tr>
            <td>${k.keyword} in area</td>
            <td>Local SEO</td>
            <td>${fmtUSD(k.spend * 0.2)}</td>
            <td>${fmt(k.impressions * 0.2)}</td>
            <td>${fmt(k.clicks * 0.2)}</td>
            <td>${k.ctr.toFixed(2)}%</td>
            <td>${Math.floor(k.conv * 0.2)}</td>
            <td>${fmtUSD(k.cpc)}</td>
            <td>${(k.conv / (k.clicks||1) * 100).toFixed(2)}%</td>
          </tr>
        `).join('');
      }

      // Populate Campaigns Dropdown at the very end
      const campSelectMenu = document.getElementById('ads-campaign-dropdown-menu');
      if (campSelectMenu) {
        const currentlySelected = document.getElementById('selected-campaign-name').innerText || MOCK_DATA.ads.campaigns[0].name;
        
        campSelectMenu.innerHTML = MOCK_DATA.ads.campaigns.map(c => `
          <div class="custom-dropdown-item ${c.name === currentlySelected ? 'active' : ''}" onclick="selectCampaign('${c.name}', this)">
            <span class="check-icon" style="opacity: ${c.name === currentlySelected ? '1' : '0'};">✓ </span><span>${c.name}</span>
          </div>
        `).join('');
        
        document.getElementById('selected-campaign-name').innerText = currentlySelected;
      }
    }

    document.addEventListener("DOMContentLoaded", () => {
      // Global Chart Config
      Chart.defaults.font.family = "'Inter', sans-serif";
      Chart.defaults.font.size = 12;
      Chart.defaults.color = '#64748b';
      Chart.defaults.plugins.legend.position = 'bottom';
      Chart.defaults.plugins.tooltip.backgroundColor = '#1e293b';
      Chart.defaults.plugins.tooltip.titleColor = '#ffffff';
      Chart.defaults.plugins.tooltip.bodyColor = '#cbd5e1';
      Chart.defaults.scale.grid.color = '#f1f5f9';
      Chart.defaults.scale.grid.lineWidth = 1;

      updateDashboardData();

      lucide.createIcons();
    });
  