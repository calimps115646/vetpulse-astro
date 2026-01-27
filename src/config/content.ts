//index.astro page
export const siteConfig = {
    name: "VetPulse",
    tagline: "Market Intelligence Infrastructure",
    description: "Market intelligence infrastructure for the veterinary economy.",
    contact: "contact@vetpulse.ai",
    footer: {
      copyright: "© 2026 VETPULSE INC.",
      locations: "NEW YORK · PARIS"
    }
  };
  
  export const navigation = {
    main: [
      { label: "For Operators", href: "/operators" },
      { label: "For Investors", href: "/investors" },
      { label: "For Vendors", href: "/vendors" },
      { label: "Resources", href: "/blog" }
    ],
    cta: {
      label: "Request Coverage",
      href: "/contact"
    }
  };
  
  export const hero = {
    eyebrow: "VETERINARY MARKET INTELLIGENCE",
    headline: "Clarity Where the Market Is Opaque.",
    subheadline: "Custom veterinary intelligence for hiring, expansion, and revenue decisions in fragmented US markets.",
    organizations: {
      title: "HOW ORGANIZATIONS USE VETPULSE:",
      segments: [
        {
          title: "Veterinary Operators & Networks",
          description: "You run clinics. You need people, locations, and visibility.",
          cta: "REVIEW MY OPERATING MARKETS"
        },
        {
          title: "Private Equity & Owners",
          description: "You allocate capital. You need clarity before committing it.",
          cta: "REVIEW MARKET INTELLIGENCE"
        },
        {
          title: "Vendors & Service Providers",
          description: "You sell into vet practices. You need access and conversion.",
          cta: "REVIEW TERRITORY REALITY"
        }
      ]
    }
  };
  
  export const challengeSection = {
    eyebrow: "01 / THE CHALLENGE",
    headline: "The \"Official\" Data Doesn't Exist.",
    description: "Hiring stalls. Capital is committed without full visibility. Territory plans assume markets that don't exist. There is no unified database for US veterinary practices or professionals. State licensing boards operate independently—50 different formats. Corporate ownership is obscured behind shell LLCs. Staff rosters exist as unstructured HTML or PDFs. Competitive activity is largely invisible.",
    callout: "As a result, strategic decisions—hiring, acquisitions, territory design—are routinely made before the market can be seen clearly. This is not a tactical inconvenience. It is structural risk.",
    stats: {
      title: "REALITY CHECK",
      items: [
        {
          value: "~30%",
          label: 'of "active" veterinarian licenses contain outdated contact info'
        },
        {
          value: "~40%",
          label: "of practice ownership records are misattributed to holding entities rather than operating practices"
        }
      ]
    }
  };
  
  export const dataArchitecture = {
    eyebrow: "02 / OUR DATA ARCHITECTURE",
    headline: "Intelligence, Triangulated.",
    description: "VetPulse builds a single source of truth by triangulating four independent data signals — cross-validated, normalized, and continuously refreshed.",
    layers: [
      {
        number: "01",
        title: "Licensing Foundation",
        description: "All 50 state veterinary boards. Deduplicated, normalized, verified."
      },
      {
        number: "02",
        title: "Digital Discovery",
        description: "Practice websites, LinkedIn, specialty certifications. Cross-validated against digital footprints."
      },
      {
        number: "03",
        title: "Geospatial Context",
        description: "Geocoding, drive-time analysis, US Census overlays. Market density and access mapped precisely."
      },
      {
        number: "04",
        title: "Reputation Signals",
        description: "Google Maps reviews, sentiment analysis, employee platforms. Portfolio-level brand health tracking."
      }
    ]
  };
  
  export const operatorsPage = {
    eyebrow: "03 / VETERINARY OPERATORS & NETWORKS",
    headline: "For Veterinary Operators & Networks",
    description: "VetPulse gives operators a real-time view of talent availability, competitive pressure, and portfolio health — across every market they operate in.",
    cta: "REVIEW MY OPERATING MARKETS",
    unlocksLabel: "WHAT VETPULSE UNLOCKS",
    benefits: [
      {
        title: "Hiring Reality, Not Guesswork",
        description: "See exactly how many qualified DVMs, RVTs, and LVTs exist within hiring distance of each clinic — before roles stay open for months."
      },
      {
        title: "Market Pressure, Clearly Mapped",
        description: "Understand who is opening, expanding, or consolidating around your locations — and how that affects growth and staffing decisions."
      },
      {
        title: "Portfolio Visibility at Scale",
        description: "Monitor reputation and operational risk across all locations without manual reporting or delayed signals."
      }
    ],
    proof: {
      label: "PROOF",
      quote: "A 60-clinic network used VetPulse to build a national veterinarian dataset, activate direct candidate engagement, and complete 20+ hires within 12 months."
    }
  };
  
  export const investorsPage = {
    eyebrow: "04 / PRIVATE EQUITY & OWNERS",
    headline: "For Private Equity & Owners",
    description: "VetPulse delivers pre-LOI clarity on market conditions, talent pools, and competitive dynamics — so capital decisions are grounded in evidence, not estimates.",
    cta: "REVIEW MARKET INTELLIGENCE",
    unlocksLabel: "WHAT VETPULSE UNLOCKS",
    benefits: [
      {
        title: "Capital Decisions with Pre-LOI Clarity",
        description: "Validate talent availability, competitive saturation, and demographic trends before submitting Letters of Intent — not after."
      },
      {
        title: "De Novo Expansion Without Blind Spots",
        description: "Identify underserved markets, confirm hiring feasibility, and assess competitive intensity before committing capital."
      },
      {
        title: "Portfolio Risk Surfaced Early",
        description: "Track ownership consolidation, reputation decline, and talent movement across portfolio geographies before issues compound."
      }
    ],
    proof: {
      label: "PROOF",
      quote: "A corporate veterinary group operating 400+ locations used VetPulse to unify 125,000 licensed veterinarians, map addressable hiring markets per clinic, and deploy the dataset directly into Greenhouse for recruiters."
    }
  };
  
  export const vendorsPage = {
    eyebrow: "05 / VENDORS & SERVICE PROVIDERS",
    headline: "For Vendors & Service Providers",
    description: "VetPulse is not a lead database. It is a market coverage engine designed to determine where revenue effort should exist at all.",
    cta: "REVIEW TERRITORY REALITY",
    unlocksLabel: "WHAT VETPULSE UNLOCKS",
    benefits: [
      {
        title: "Territories Designed Around Real Market Density",
        description: "Design sales territories based on practice concentration, revenue potential, and competitive dynamics — not arbitrary zip codes."
      },
      {
        title: "Targeting Based on Actual Practice Capability",
        description: "Prioritize accounts based on actual services, equipment, and scale. Avoid selling products to practices that cannot operationalize them."
      },
      {
        title: "Fewer Wasted Reps, Better Coverage",
        description: "Eliminate effort spent on closed, relocated, or unreachable practices. Focus on verified decision-makers."
      }
    ],
    proof: {
      label: "PROOF",
      quote: "Pharma and equipment vendors use VetPulse to reduce wasted rep coverage and improve account prioritization through capability scoring and ownership verification."
    }
  };  
  
  export const engagementModel = {
    eyebrow: "06 / ENGAGEMENT MODEL",
    headline: "How We Work With You",
    cards: [
      {
        title: "Data Assets",
        description: "Custom datasets built for your use case. Geographic scope, enrichment depth, and delivery format aligned to your operational reality. Delivered as CRM-ready exports or via direct API integration."
      },
      {
        title: "Activation (Optional)",
        description: "Direct engagement to validate insights or operationalize data assets. VetPulse manages outreach governance, response tracking, and qualified handoff."
      },
      {
        title: "Timeline",
        description: "Projects begin at 4 weeks. National datasets typically require 6-8 weeks. Ongoing activation operates on monthly cycles."
      },
      {
        title: "Investment",
        description: "Engagements begin at $10,000–$15,000. Market intelligence infrastructure is not a software subscription — it is a decision enabler built for multi-site operators, strategic buyers, and revenue organizations."
      }
    ]
  };
  
  export const caseStudies = {
    eyebrow: "07 / CASE STUDIES",
    headline: "Validated Datasets in Production",
    description: "VetPulse datasets are actively used across talent acquisition, investment diligence, and commercial execution — often by the same organizations.",
    examples: [
      {
        title: "National Veterinarian Database",
        stats: "400+ clinic operator unified 125,000 licensed veterinarians into a single dataset, mapped addressable hiring markets per location, and integrated directly into Greenhouse."
      },
      {
        title: "Scalable Hiring Activation",
        stats: "60-clinic network used VetPulse data and activation to complete 20+ hires while reducing reliance on external recruiters."
      }
    ]
  };

   export const aboutSection = {
    eyebrow: "08 / WHO WE ARE",  
    headline: "Data Engineering Meets Market Execution",
    description: "VetPulse operates at the intersection of data engineering, market intelligence, and activation. The team combines automation engineers, AI practitioners, CRM and tooling specialists, and commercial operators focused on validation — not volume.",
    subheadline: "We build decision-grade datasets, connect them into revenue systems, and support controlled activation when needed — so organizations can act only when market context is clear.",
    pillars: [
      { icon: "●", label: "DATA", color: "cyan" },
      { icon: "●", label: "STRATEGY", color: "cyan" },
      { icon: "●", label: "TOOLS", color: "yellow" },
      { icon: "●", label: "ACTIVATION", color: "green" }
    ]
  };  

  export const platformStandards = {
    title: "STANDARDS",
    links: [
      { label: "Data Ethics", href: "/data-ethics" },
      { label: "Privacy Policy", href: "/privacy-policy" }
    ]
  };
  
  export const platformLinks = {
    title: "PLATFORM",
    links: [
      { label: "Operators", href: "/operators" },
      { label: "Investors", href: "/investors" },
      { label: "Vendors", href: "/vendors" }
    ]
  };
  
  export const companyInfo = {
    description: "Market intelligence infrastructure for the veterinary economy. Built to restore market context before decisions are made.",
    contact: "contact@vetpulse.ai"
  };
  
//operators.astro page
export const operatorsPageFull = {
    hero: {
      eyebrow: "VETERINARY OPERATORS & NETWORKS",
      headline: "Clarity Across Every Clinic You Operate.",
      description: "VetPulse gives multi-site veterinary operators a real-time view of hiring reality, competitive pressure, and portfolio health — market by market.",
      cta: "Discuss My Operating Footprint",
      visualization: {
        label: "LIVE_MONITORING",
        value: "60+ Locations",
        subtitle: "Portfolio Optimization Active"
      }
    },
    
    operatorReality: {
      eyebrow: "THE OPERATOR REALITY",
      headline: "Operating at Scale Without Visibility Is Expensive",
      description: "As veterinary networks grow, decision-making becomes harder — not easier. Most operators face the same constraints:",
      challenges: [
        "Hiring decisions are made without knowing the true addressable talent pool",
        "Clinics compete for the same candidates without geographic clarity",
        "Competitive expansion happens quietly, market by market",
        "Reputation and operational risks surface late, after impact is felt"
      ],
      callout1: "Effort is rarely the issue.",
      callout2: "Market visibility is.",
      footer: "VetPulse exists to make operating reality visible before problems compound."
    },
  
    unlocks: {
      eyebrow: "WHAT VETPULSE UNLOCKS",
      headline: "What VetPulse Unlocks for Operators",
      cards: [
        {
          title: "Hiring Reality, Not Guesswork",
          description: "Understand how many qualified DVMs, RVTs, and LVTs exist within realistic hiring distance of each clinic. Prioritize locations based on actual market capacity, not assumptions."
        },
        {
          title: "Competitive Pressure, Clearly Mapped",
          description: "See where competitors are opening, expanding, or consolidating around your footprint — and how that affects staffing, pricing, and growth."
        },
        {
          title: "Portfolio Visibility at Scale",
          description: "Monitor reputation and operational risk across all locations without manual reporting or delayed signals."
        }
      ]
    },
  
    support: {
      eyebrow: "HOW VETPULSE SUPPORTS OPERATORS",
      headline: "Built for Multi-Site Operations",
      content: [
        {
          paragraph: "VetPulse gives operators a unified workforce view across all 50 state licensing boards — validated through digital discovery and mapped directly to their clinic footprint."
        },
        {
          paragraph: "This allows teams to assess hiring feasibility before opening roles, understand competitive pressure before it affects retention, and surface portfolio risk before it compounds across locations."
        },
        {
          paragraph: "Where appropriate, optional activation enables operators to validate hiring assumptions directly in the market — turning insight into action without relying on external recruiters or guesswork."
        }
      ]
    },
  
    proof: {
      eyebrow: "PROOF",
      headline: "Used by Multi-Site Operators Nationwide",
      description: "A 60-clinic veterinary network hired VetPulse to build a targeted DVM dataset, validate addressable hiring markets by location, and activate direct candidate engagement — completing 20+ hires while reducing reliance on external recruiting agencies."
    },
  
    cta: {
      headline: "See Your True Hiring Coverage by Location",
      description: "Understand what's possible — before roles stay open for months.",
      buttonText: "Discuss My Operating Footprint"
    }
  };
  
//investors.astro page
export const investorsPageFull = {
    hero: {
      eyebrow: "PRIVATE EQUITY & OWNERS",
      headline: "Make Capital Decisions with Market Clarity",
      description: "VetPulse provides pre-LOI visibility into talent availability, competitive saturation, and ownership dynamics — before capital is committed.",
      cta: "Request Market Intelligence",
      visualization: {
        label: "Deal Flow Analysis",
        value: "98.2%",
        subtitle: "Data Accuracy (Verified)"
      }
    },
    
    peReality: {
      eyebrow: "THE PE REALITY",
      headline: "Most Diligence Happens with Incomplete Inputs",
      description: "In veterinary M&A, critical inputs often surface too late:",
      challenges: [
        "Talent availability is assessed post-close",
        "Competitive density is estimated, not measured",
        "Ownership structures are opaque",
        "Market dynamics are inferred from limited samples"
      ],
      callout1: "These gaps don't just slow deals — they create hidden risk.",
      callout2: "VetPulse exists to remove unknowns before they become liabilities."
    },
  
    unlocks: {
      eyebrow: "WHAT VETPULSE UNLOCKS",
      headline: "What VetPulse Unlocks for Investors",
      cards: [
        {
          title: "Capital Decisions with Pre-LOI Clarity",
          description: "Validate whether a market can support staffing, growth, and operational stability before submitting a Letter of Intent."
        },
        {
          title: "De Novo Expansion Without Blind Spots",
          description: "Identify underserved markets, confirm hiring feasibility, and assess competitive intensity before committing capital."
        },
        {
          title: "Portfolio Risk Surfaced Early",
          description: "Track consolidation, reputation decline, and talent movement across portfolio geographies before issues compound."
        }
      ]
    },
  
    diligence: {
      eyebrow: "BUILT FOR DILIGENCE",
      headline: "Designed for Decision-Making, Not Dashboards",
      content: [
        {
          paragraph: "VetPulse datasets are built for diligence and portfolio oversight — not monitoring theater."
        },
        {
          paragraph: "Ownership-aware practice mapping unmasks MSOs and shell LLCs. National workforce visibility is grounded in licensing data, not samples. Geospatial competition analysis operates at drive-time level, not ZIP codes. Reputation and sentiment signals are tracked over time, not extracted in isolation."
        },
        {
          paragraph: "The result is evidence-based confidence, not narrative reassurance."
        }
      ]
    },
  
    proof: {
      eyebrow: "PROOF",
      headline: "Supporting Large-Scale Investment Decisions",
      description: "A corporate veterinary group operating 400+ locations used VetPulse to unify 125,000 licensed veterinarians, map addressable hiring markets per clinic, and deploy the dataset directly into Greenhouse for immediate operational use."
    },
  
    cta: {
      headline: "Clarity Before Capital",
      description: "If you need market evidence before committing capital, VetPulse is built for that moment.",
      buttonText: "Request Market Intelligence"
    }
  };

//vendors.astro page
export const vendorsPageFull = {
    hero: {
      eyebrow: "VENDORS & SERVICE PROVIDERS",
      headline: "Design Revenue Coverage Around Reality",
      description: "VetPulse helps animal health vendors design territories, prioritize accounts, and focus revenue effort where it actually converts.",
      cta: "Optimize My Territory Coverage",
      visualization: {
        label: "TERRITORY_HEATMAP_V4",
        value: "Active",
        subtitle: "Coverage Optimization"
      }
    },
    
    vendorReality: {
      eyebrow: "THE VENDOR REALITY",
      headline: "Most Sales Coverage Is Built on Broken Inputs",
      description: "Revenue teams operate with:",
      challenges: [
        "Outdated or incomplete practice registries",
        "Ownership changes that break account structures",
        "Territories assigned by geography, not opportunity",
        "Reps spending time on closed, relocated, or unreachable practices"
      ],
      callout1: "Scripts and tooling can't fix bad inputs.",
      callout2: "VetPulse fixes the market map itself."
    },
  
    unlocks: {
      eyebrow: "WHAT VETPULSE UNLOCKS",
      headline: "What VetPulse Unlocks for Vendors",
      cards: [
        {
          title: "Territories Built on Market Density",
          description: "Design sales coverage around practice concentration, revenue potential, and competitive dynamics — not arbitrary zip codes."
        },
        {
          title: "Capability-Based Targeting",
          description: "Prioritize accounts based on actual services, equipment, and scale. Avoid selling products to practices that cannot operationalize them."
        },
        {
          title: "Fewer Wasted Reps, Better Coverage",
          description: "Eliminate effort spent on closed or misclassified accounts. Focus on validated practices with verified decision-makers."
        }
      ]
    },
  
    gtmFit: {
      eyebrow: "FIT WITH REVENUE OPERATIONS",
      headline: "Designed to Plug into Your GTM Stack",
      content: [
        {
          paragraph: "VetPulse delivers CRM-ready datasets with ownership-aware account structures and territory-level segmentation — designed to plug directly into Salesforce, HubSpot, or your GTM stack."
        },
        {
          paragraph: "Optional activation can be used to validate targeting assumptions directly in the market, ensuring coverage models match reality before scaling."
        }
      ]
    },
  
    proof: {
      eyebrow: "PROOF",
      headline: "Used by Animal Health Vendors",
      description: "Pharma and equipment vendors use VetPulse to reduce wasted rep coverage and improve account prioritization through capability scoring and ownership verification."
    },
  
    cta: {
      headline: "See What Your Market Really Looks Like",
      description: "Before you rebalance territories or hire more reps, validate the ground truth.",
      buttonText: "Optimize My Territory Coverage"
    }
  };

//blog.astro page
export const blogPage = {
  eyebrow: "INTELLIGENCE BRIEFS",
  headline: "Market Research & Insights",
  description: "Data-driven insights on veterinary workforce trends, market consolidation, and commercial intelligence.",
  articles: [
    {
      category: "COMMERCIAL INTELLIGENCE",
      readTime: "8 MIN READ",
      title: "Why There Is No Single Source of Truth for the US Veterinary Market",
      description: "The US veterinary market lacks a single source of truth, operating instead on fragmented state registries and opaque ownership structures. This data gap creates systematic waste in territory planning and sales operations.",
      slug: "no-single-source-of-truth-veterinary-market",
      coverPlaceholder: "ARTICLE_COVER"
    },
    {
      category: "M&A INTELLIGENCE",
      readTime: "7 MIN READ",
      title: "Why Most Veterinary Decisions Are Still Made on Incomplete Data",
      description: "Sales leaders in the veterinary sector face a fundamental constraint: the market infrastructure needed for informed decisions does not exist in standardized form.",
      slug: "veterinary-decisions-made-on-incomplete-data",
      coverPlaceholder: "ARTICLE_COVER"
    },
    {
      category: "WORKFORCE INTELLIGENCE",
      readTime: "6 MIN READ",
      title: "Why Veterinary Hiring Fails in High-Demand Markets",
      description: "Multi-site veterinary networks aren't losing the talent war due to compensation—they're losing because their hiring process can't match market velocity.",
      slug: "veterinary-hiring-fails-high-demand-markets",
      coverPlaceholder: "ARTICLE_COVER"
    }
  ]
};

//data-ethics.astro page
export const dataEthicsPage = {
  hero: {
    headline: "Data Ethics at VetPulse",
    description: "Market intelligence requires defensible data.",
    intro: [
      "VetPulse exists because the US veterinary market lacks a unified, accurate view of workforce, ownership, and competitive dynamics. State licensing boards operate independently. Ownership structures are opaque. Digital footprints are fragmented.",
      "Our responsibility is not just to aggregate data — it is to restore market context in a way organizations can rely on for hiring, investment, and revenue decisions.",
      "This page explains how VetPulse builds datasets, what we explicitly exclude, and why these standards matter for organizations using VetPulse as decision infrastructure."
    ]
  },

  ethicalFoundation: {
    title: "Our Ethical Foundation",
    intro: "VetPulse builds market intelligence from verifiable, defensible sources and applies governance at every stage of data collection, enrichment, and activation.",
    principles: [
      {
        title: "Accuracy is more valuable than speed",
        description: null
      },
      {
        title: "Validation matters more than volume",
        description: null
      },
      {
        title: "Context matters more than access",
        description: null
      }
    ],
    footer: "We would rather deliver less data with higher confidence than inflate coverage with unverifiable inputs."
  },

  dataSourcing: {
    title: "How We Source Data",
    intro: "VetPulse datasets are built from a combination of:",
    sources: [
      {
        title: "Public regulatory sources",
        description: "State veterinary licensing boards and other official registries"
      },
      {
        title: "Public digital footprints",
        description: "Practice websites, publicly available professional profiles, and published certifications"
      },
      {
        title: "Commercial and public datasets",
        description: "Geospatial, demographic, and market structure data used to contextualize supply and demand"
      }
    ],
    footer: "All sources are cross-validated, normalized, and confidence-scored before inclusion in any client deliverable."
  },

  exclusions: {
    title: "What We Explicitly Do Not Do",
    intro: "VetPulse draws clear boundaries around data use.",
    doNot: [
      "Scrape private social networks or gated communities",
      "Collect or sell consumer pet owner data",
      "Sell raw contact lists or \"leads\"",
      "Create surveillance tools",
      "Infer sensitive personal attributes",
      "Automate outreach without explicit client governance"
    ],
    footer: "These exclusions are intentional. They reduce risk for our clients and ensure VetPulse datasets remain suitable for enterprise, diligence, and operational use."
  },

  useCaseGovernance: {
    title: "Use-Case Governance",
    subtitle: "Design for Purpose",
    intro: "VetPulse does not operate as a self-serve platform.",
    description: "Market intelligence infrastructure requires design for purpose — not unlimited access to raw data.",
    governance: "Each engagement is scoped intentionally based on:",
    criteria: [
      "Decision context (hiring, diligence, expansion, revenue)",
      "Acceptable use boundaries",
      "Activation controls, if outreach is involved",
      "Internal handling and access expectations"
    ],
    footer: "This governance ensures data is used as decision infrastructure, not as an indiscriminate execution engine."
  },

  validation: {
    title: "Validation Over Volume",
    intro: "Every dataset VetPulse delivers includes:",
    components: [
      "Source attribution",
      "Confidence indicators",
      "Known limitations and exclusions"
    ],
    description: "We actively remove records that cannot be validated to our standards, even when doing so reduces apparent coverage.",
    callout: "Accuracy compounds. Bad data creates liability."
  },

  contact: {
    title: "Questions or Concerns",
    description: "For questions about our data practices or ethical standards, contact:",
    email: "contact@vetpulse.ai"
  }
};

//privacy-policy.astro page
export const privacyPolicyPage = {
  hero: {
    headline: "Privacy Policy",
    effectiveDate: "EFFECTIVE DATE: JANUARY 2026",
    intro: [
      "VetPulse treats privacy as part of decision-grade infrastructure, not as a compliance afterthought.",
      "This policy explains what data we collect, how it is used, how it is protected, and the rights available to individuals whose data may be processed by VetPulse."
    ]
  },

  scope: {
    title: "1. Scope",
    intro: "This policy applies to:",
    items: [
      "Visitors to vetpulse.ai",
      "Individuals whose professional or business information appears in VetPulse datasets",
      "Clients and business contacts engaging with VetPulse services"
    ]
  },

  dataCollection: {
    title: "2. What Data We Collect",
    sections: [
      {
        subtitle: "2.1 Website and Business Communications",
        items: [
          "Contact details submitted via forms or email",
          "Business correspondence",
          "Website analytics (IP address, device type, pages visited)"
        ]
      },
      {
        subtitle: "2.2 Market Intelligence Data",
        description: "VetPulse processes professional and business information, including:",
        items: [
          "Licensed veterinary professionals (public regulatory data)",
          "Veterinary practices and ownership structures",
          "Publicly available employment and capability signals"
        ],
        footer: [
          "VetPulse does not collect consumer pet owner data and does not process sensitive personal data categories (as defined under GDPR Article 9 or equivalent regulations).",
          "Our processing focuses on market structure, not individual consumer behavior, medical records, or personal health information."
        ]
      }
    ]
  },

  dataUse: {
    title: "3. How We Use Data",
    intro: "Data is processed to:",
    items: [
      "Deliver market intelligence and decision support to clients",
      "Validate and improve dataset accuracy",
      "Fulfill contractual obligations",
      "Comply with legal and regulatory requirements"
    ],
    footer: "We do not sell personal data to third parties."
  },

  legalBasis: {
    title: "4. Legal Basis for Processing (GDPR)",
    intro: "Where GDPR applies, VetPulse processes data under one or more of the following lawful bases:",
    items: [
      "Legitimate interests (market intelligence, research, and validation)",
      "Contractual necessity",
      "Legal obligation"
    ],
    footer: "Legitimate interest assessments are conducted to ensure processing does not override individual rights."
  },

  dataProtection: {
    title: "5. Data Protection and Security",
    intro: "VetPulse implements appropriate technical and organizational safeguards, including:",
    items: [
      "Encryption in transit and at rest",
      "Role-based access controls",
      "Restricted internal access to datasets",
      "Retention policies aligned to purpose and legal requirements"
    ]
  },

  dataRetention: {
    title: "6. Data Retention",
    intro: "Data is retained only as long as necessary to:",
    items: [
      "Fulfill the purpose for which it was collected",
      "Meet contractual obligations",
      "Satisfy legal or regulatory requirements"
    ]
  },

  dataSharing: {
    title: "7. Data Sharing",
    intro: "Data may be shared with:",
    items: [
      "Clients, as part of contracted deliverables",
      "Service providers supporting infrastructure operations (under confidentiality agreements)"
    ],
    footer: "VetPulse does not permit onward resale or uncontrolled redistribution of datasets."
  },

  yourRights: {
    title: "8. Your Rights",
    intro: "Where applicable, individuals have the right to:",
    items: [
      "Access their data",
      "Request correction of inaccurate data",
      "Request deletion (subject to legal limitations)",
      "Object to certain processing activities",
      "Request restriction of processing"
    ],
    exercise: {
      subtitle: "How to Exercise Your Rights",
      description: "Requests can be made by emailing",
      email: "privacy@vetpulse.ai",
      requirements: "with:",
      items: [
        "Your name and contact information",
        "A description of your request",
        "Any information that will help us locate your data"
      ],
      footer: "Verified requests will be addressed within the timeframes required by applicable law."
    }
  },

  contact: {
    title: "9. Contact",
    description: "For privacy-related inquiries:",
    email: "contact@vetpulse.ai"
  }
};
