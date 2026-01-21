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
      { label: "For Operators", href: "/for-operators" },
      { label: "For Investors", href: "/for-investors" },
      { label: "For Vendors", href: "/for-vendors" },
      { label: "Resources", href: "/resources" }
    ],
    cta: {
      label: "Request Coverage",
      href: "/request-coverage"
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
  
  export const aboutSection = {
    eyebrow: "01 / WHO WE ARE",
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
  