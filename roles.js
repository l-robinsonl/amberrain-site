// Example rubrics shown on the site. The AI engineer, care assistant and account executive
// rubrics were written by AmberRain from example job descriptions; the rental car cleaner is
// the product’s built-in sample role. Titles are shown in sentence case.
window.AMBERRAIN_ROLES = [
  {
    "id": "ai-engineer",
    "label": "AI engineer",
    "title": "AI Engineer",
    "context": null,
    "summary": "This role builds and operates reliable LLM-powered product features, with particular emphasis on production engineering, LLM application development, retrieval systems and measurable experimentation. Weighting prioritizes the explicitly required hands-on technical capabilities; communication and stack-specific backend experience are important but more readily transferable.",
    "seniority": null,
    "criteria": [
      {
        "title": "Production software engineering",
        "weight": 24,
        "question": "What evidence in the CV demonstrates strong software engineering fundamentals and responsibility for shipping and maintaining production code relevant to customer-facing backend or product systems?",
        "levels": [
          "No verified production engineering evidence",
          "Foundational implementation evidence",
          "Production contributor",
          "Production feature owner",
          "Production systems engineering leader"
        ]
      },
      {
        "title": "LLM application development",
        "weight": 24,
        "question": "What evidence in the CV demonstrates hands-on development of applications using LLM APIs or comparable large language model services?",
        "levels": [
          "No verified LLM application evidence",
          "LLM learning or prototype work",
          "Functional LLM feature implementation",
          "Reliable LLM application delivery",
          "End-to-end LLM product ownership"
        ]
      },
      {
        "title": "Retrieval, embeddings and vector search",
        "weight": 18,
        "question": "What evidence in the CV demonstrates practical work with retrieval pipelines, embeddings, vector search, or retrieval-augmented generation?",
        "levels": [
          "No verified retrieval evidence",
          "Retrieval learning or exploratory work",
          "Implemented retrieval workflow",
          "Evaluated retrieval system",
          "Production retrieval system ownership"
        ]
      },
      {
        "title": "Experimentation and LLM evaluation",
        "weight": 16,
        "question": "What evidence in the CV demonstrates the ability to form hypotheses, measure AI or software outcomes, and iterate based on results?",
        "levels": [
          "No verified experimentation evidence",
          "Structured exploratory analysis",
          "Measured comparison",
          "Evidence-driven iteration",
          "Systematic evaluation practice"
        ]
      },
      {
        "title": "Python and TypeScript backend development",
        "weight": 10,
        "question": "What evidence in the CV demonstrates ability to build backend services or APIs using Python and/or TypeScript?",
        "levels": [
          "No verified Python or TypeScript backend evidence",
          "Language learning or scripting evidence",
          "Backend implementation in one target language",
          "Maintained backend service using target languages",
          "Robust backend systems delivery"
        ]
      },
      {
        "title": "Written cross-functional communication",
        "weight": 8,
        "question": "What evidence in the CV demonstrates clear written communication of technical work, results, or trade-offs to product, design, business, or other non-specialist stakeholders?",
        "levels": [
          "No verified communication evidence",
          "Basic documented communication",
          "Clear technical explanation",
          "Stakeholder-oriented trade-off communication",
          "Cross-functional decision influence"
        ]
      }
    ]
  },
  {
    "id": "care-assistant",
    "label": "Care assistant",
    "title": "Care Assistant",
    "context": "Residential care home",
    "summary": "Entry-level residential care role supporting older adults with dignity, safety and warmth; training and the Care Certificate are provided. Weighting prioritises evidenced compassion, reliable safe working, communication/teamwork and shift availability rather than prior care experience.",
    "seniority": "an entry-level role",
    "criteria": [
      {
        "title": "Compassionate support for others",
        "weight": 28,
        "question": "What evidence in the CV shows compassionate, patient support for another person’s wellbeing, comfort, independence or daily needs? Accept evidence from work, volunteering, school, informal responsibilities or family support.",
        "levels": [
          "No evidenced support",
          "Limited interpersonal support",
          "Caring support example",
          "Dignity and independence focused",
          "Sustained person-centred support"
        ]
      },
      {
        "title": "Reliability and following procedures",
        "weight": 24,
        "question": "What evidence in the CV demonstrates dependability and careful adherence to safety, hygiene, confidentiality, safeguarding or other established procedures?",
        "levels": [
          "No relevant evidence",
          "General reliability claim",
          "Dependable responsibility",
          "Careful procedural working",
          "Trusted safe practice"
        ]
      },
      {
        "title": "Clear communication and shift teamwork",
        "weight": 22,
        "question": "What evidence in the CV shows clear, respectful communication and effective cooperation with colleagues, service users, customers, families or other stakeholders?",
        "levels": [
          "No relevant evidence",
          "General communication claim",
          "Collaborative interaction",
          "Responsive team communication",
          "Trusted coordination"
        ]
      },
      {
        "title": "Shift and weekend availability",
        "weight": 18,
        "question": "Does the CV provide evidence that the candidate can work shifts, including some weekends, as required for this residential care role?",
        "levels": [
          "Explicitly unavailable",
          "Unverified availability",
          "Flexible availability stated",
          "Shift availability stated",
          "Shifts and weekends confirmed"
        ]
      },
      {
        "title": "Readiness for care support training",
        "weight": 8,
        "question": "What evidence in the CV demonstrates practical readiness for training in person-centred daily living support, such as helping others with routine needs, observing wellbeing, or maintaining basic records? Prior care experience is not required.",
        "levels": [
          "No relevant evidence",
          "Interest only",
          "Relevant informal support",
          "Structured support exposure",
          "Direct care-support experience"
        ]
      }
    ]
  },
  {
    "id": "account-executive",
    "label": "Account executive",
    "title": "Account Executive",
    "context": "B2B SaaS",
    "summary": "Mid-level individual-contributor seller responsible for winning new B2B SaaS business through a full, consultative sales cycle. Weighting prioritizes demonstrated closing performance, quota attainment, pipeline discipline, and core sales execution; optional buyer-domain and methodology exposure is assessed lightly.",
    "seniority": "a mid-level individual-contributor role",
    "criteria": [
      {
        "title": "B2B SaaS complex-sale closing experience",
        "weight": 20,
        "question": "What evidence does the CV provide of personally owning and closing B2B software or similarly complex sales opportunities?",
        "levels": [
          "No relevant evidence",
          "Transactional sales exposure",
          "Some complex-sale closing",
          "Established complex-sale closer",
          "Proven full-cycle complex closer"
        ]
      },
      {
        "title": "Pipeline management and forecasting",
        "weight": 18,
        "question": "How well does the CV evidence disciplined management of qualified sales opportunities and accurate forecasting in a CRM or comparable system?",
        "levels": [
          "No relevant evidence",
          "CRM user",
          "Pipeline ownership",
          "Forecasting discipline",
          "Data-driven forecast ownership"
        ]
      },
      {
        "title": "Quota attainment",
        "weight": 16,
        "question": "What verifiable evidence does the CV provide of meeting or exceeding an individual sales quota or clearly defined revenue target?",
        "levels": [
          "No attainment evidence",
          "Target participation",
          "Individual target evidence",
          "Repeated target achievement",
          "Strong documented overachievement"
        ]
      },
      {
        "title": "Discovery and ROI business cases",
        "weight": 12,
        "question": "What evidence does the CV provide of uncovering customer needs and translating them into an ROI-based business case for B2B buyers?",
        "levels": [
          "No relevant evidence",
          "Basic needs gathering",
          "Consultative discovery",
          "Value-case development",
          "Multi-stakeholder ROI alignment"
        ]
      },
      {
        "title": "Commercial negotiation",
        "weight": 12,
        "question": "What evidence does the CV provide of personally negotiating commercial terms to progress or close B2B sales?",
        "levels": [
          "No relevant evidence",
          "Negotiation support",
          "Basic commercial negotiation",
          "Deal-term ownership",
          "Complex commercial negotiation"
        ]
      },
      {
        "title": "Sales presentations and product demos",
        "weight": 10,
        "question": "What evidence does the CV provide of delivering persuasive B2B sales presentations or product demonstrations to prospective customers?",
        "levels": [
          "No relevant evidence",
          "Presentation support",
          "Customer presentation delivery",
          "Tailored solution presentation",
          "Persuasive executive presentation"
        ]
      },
      {
        "title": "Customer communication",
        "weight": 7,
        "question": "What evidence does the CV provide of clear, professional written and verbal communication with B2B customers or stakeholders?",
        "levels": [
          "No relevant evidence",
          "Routine communication",
          "Clear customer communication",
          "Audience-adapted communication",
          "High-impact stakeholder communication"
        ]
      },
      {
        "title": "Operations or finance buyer and qualification-framework exposure",
        "weight": 5,
        "question": "What evidence does the CV provide of selling to operations or finance buyers, or using MEDDICC or a comparable sales qualification framework?",
        "levels": [
          "No relevant evidence",
          "General adjacent exposure",
          "One relevant exposure",
          "Applied relevant practice",
          "Combined applied expertise"
        ]
      }
    ]
  },
  {
    "id": "rental-car-cleaner",
    "label": "Rental car cleaner",
    "title": "Rental Car Cleaner",
    "context": null,
    "summary": "An entry-level role preparing rental vehicles and moving them safely. No experience is required: the rubric prioritises teamwork, professional service and safe independent working, with just 8 points for prior cleaning and readiness.",
    "seniority": "an entry-level role",
    "criteria": [
      {
        "title": "Teamwork and customer service",
        "weight": 48,
        "question": "How strong is the documented evidence of professional service in a collaborative setting? Look for concrete interactions and handovers rather than unsupported descriptions such as 'team player'. Accept volunteering, informal work and education.",
        "levels": [
          "Not documented",
          "Supports others",
          "Routine service",
          "Coordinated service",
          "Consistent service ownership"
        ]
      },
      {
        "title": "Safe independent working",
        "weight": 28,
        "question": "What documented tasks demonstrate following safety procedures while working reliably without close supervision? Accept concrete transferable evidence from any setting; do not infer ability from age, disability or employment gaps.",
        "levels": [
          "Not documented",
          "Supervised routines",
          "Reliable routines",
          "Independent and safe",
          "Proactive safety"
        ]
      },
      {
        "title": "Valid driving licence",
        "weight": 16,
        "question": "What explicit evidence is there of a valid driving licence suitable for moving rental cars? Do not assume a licence from a job title, age or address. Missing licence information is unverified, not proof of lacking a licence.",
        "levels": [
          "Explicitly not held",
          "Not currently valid",
          "Needs verification",
          "Licence stated",
          "Valid licence stated"
        ]
      },
      {
        "title": "Relevant practical experience",
        "weight": 4,
        "question": "What concrete hands-on cleaning or upkeep tasks are documented? Judge tasks, not job titles, and include informal, school, volunteer and family-business activities. This experience is optional for this entry-level job.",
        "levels": [
          "No documented tasks",
          "Related upkeep",
          "General cleaning",
          "Vehicle cleaning",
          "Rental preparation"
        ]
      },
      {
        "title": "Cleaning and vehicle readiness",
        "weight": 4,
        "question": "What documented evidence shows readiness to follow a vehicle-preparation checklist? Formal training is not required; accept concrete transferable checklist-based tasks.",
        "levels": [
          "Not documented",
          "Basic preparation",
          "Follows a checklist",
          "Vehicle checks",
          "Complete preparation"
        ]
      }
    ]
  }
];
