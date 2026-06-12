/* SolarCore data — all content bilingual {en, ar}. Figures are typical industry
   planning ranges (2024-25), not a substitute for a licensed site survey. */
const T = (en, ar) => ({ en, ar });

const UI = {
  nav_intro: T("Intro", "مقدمة"),
  nav_components: T("Components", "المكوّنات"),
  nav_panels: T("Panels", "الألواح"),
  nav_inverters: T("Inverters", "العاكسات"),
  nav_batteries: T("Batteries", "البطاريات"),
  nav_brands: T("Brands", "العلامات"),
  nav_sizing: T("Sizing", "التحجيم"),
  nav_calc: T("Calculators", "الحاسبات"),
  nav_finance: T("Finance", "التمويل"),
  hero_kicker: T("Engineering Guide · v2.1", "دليل هندسي · إصدار 2.1"),
  hero_title: T(
    "The Complete Residential Solar Power System",
    "النظام الشمسي المنزلي المتكامل",
  ),
  hero_sub: T(
    "From photons to payback — a premium, engineering-grade reference covering every component, comparison, calculation, and financial decision behind powering a home with the sun.",
    "من الفوتون إلى استرداد التكلفة — مرجع هندسي احترافي يغطي كل مكوّن ومقارنة وحساب وقرار مالي وراء تشغيل المنزل بالطاقة الشمسية.",
  ),
  hero_btn1: T("Start the Guide", "ابدأ الدليل"),
  hero_btn2: T("Browse Components", "تصفّح المكوّنات"),
  stat_years: T("yr panel life", "سنة عمر اللوح"),
  stat_eff: T("% peak efficiency", "% أقصى كفاءة"),
  stat_payback: T("yr typical payback", "سنة استرداد نموذجي"),
  footer_tag: T(
    "An engineering reference for residential solar. Figures are typical industry ranges for planning — confirm with a licensed installer.",
    "مرجع هندسي للطاقة الشمسية المنزلية. الأرقام نطاقات تقديرية للتخطيط — تحقق دائماً مع فنّي مرخّص.",
  ),
  credit: T("Programmed by", "برمجة"),
  th_spec: T("Specification", "المواصفة"),
  th_value: T("Value", "القيمة"),
  purpose: T("Purpose", "الغرض"),
  advantages: T("Advantages", "المزايا"),
  disadvantages: T("Disadvantages", "العيوب"),
  lifespan: T("Lifespan", "العمر الافتراضي"),
  efficiency: T("Efficiency", "الكفاءة"),
  price: T("Price range", "نطاق السعر"),
  pros: T("Pros", "مزايا"),
  cons: T("Cons", "عيوب"),
  best_use: T("Best use", "أفضل استخدام"),
  recommended: T("Recommended for", "موصى به لـ"),
  why: T("Why we recommend", "سبب التوصية"),
  components_list: T("Components", "المكوّنات"),
  daily_prod: T("Est. daily production", "الإنتاج اليومي التقديري"),
  panels_req: T("Panels", "الألواح"),
  battery_req: T("Battery", "البطارية"),
  inverter_req: T("Inverter", "العاكس"),
};

/* 1 — INTRO */
const INTRO = {
  title: T("1 · Introduction", "1 · مقدمة"),
  lead: T(
    "What solar is, how a home system works, and why it pays off.",
    "ما الطاقة الشمسية، كيف يعمل النظام المنزلي، ولماذا يستحق الاستثمار.",
  ),
  blocks: [
    {
      h: T("What is solar energy?", "ما الطاقة الشمسية؟"),
      p: T(
        "Solar energy is electricity generated when photovoltaic (PV) cells convert sunlight directly into direct-current (DC) electricity through the photovoltaic effect. A single residential rooftop receives far more energy from the sun each day than the home consumes — the system's job is to capture, convert, store, and deliver it.",
        "الطاقة الشمسية هي كهرباء تُولَّد عندما تحوّل الخلايا الكهروضوئية (PV) ضوء الشمس مباشرة إلى تيار مستمر (DC) عبر التأثير الكهروضوئي. سطح منزل واحد يستقبل يومياً طاقة شمسية أكبر بكثير مما يستهلكه المنزل — ومهمة النظام التقاطها وتحويلها وتخزينها وتوصيلها.",
      ),
    },
    {
      h: T("How a residential system works", "كيف يعمل النظام المنزلي"),
      p: T(
        "Panels produce DC power → an inverter converts it to 230/120 V AC for the home → surplus charges a battery or exports to the grid → at night or during outages the battery (or grid) supplies the load. A monitoring system tracks every watt in real time.",
        "تنتج الألواح تياراً مستمراً → يحوّله العاكس إلى تيار متردد 230/120 فولت للمنزل → يشحن الفائض البطارية أو يُصدَّر للشبكة → ليلاً أو أثناء الانقطاع تغذّي البطارية (أو الشبكة) الأحمال. ويتابع نظام المراقبة كل واط لحظياً.",
      ),
    },
    {
      h: T("Benefits for the home", "فوائد المنزل"),
      p: T(
        "Lower or eliminated electricity bills, protection against tariff increases, backup power during outages, a quieter and cleaner alternative to generators, increased property value, and a major cut in carbon emissions.",
        "خفض فاتورة الكهرباء أو إلغاؤها، حماية من ارتفاع التعرفة، طاقة احتياطية أثناء الانقطاع، بديل أنظف وأهدأ من المولّدات، زيادة قيمة العقار، وخفض كبير لانبعاثات الكربون.",
      ),
    },
    {
      h: T("Savings & energy independence", "التوفير والاستقلال في الطاقة"),
      p: T(
        "A well-sized system commonly offsets 60–100% of annual consumption. Combined with batteries, a home can run for days off-grid. Most residential systems reach payback in 4–8 years and then deliver 15+ years of effectively free power.",
        "النظام المُحجَّم جيداً يغطي عادة 60–100% من الاستهلاك السنوي. ومع البطاريات يمكن للمنزل العمل لأيام دون شبكة. معظم الأنظمة تسترد تكلفتها خلال 4–8 سنوات ثم تقدّم 15+ سنة من الكهرباء المجانية فعلياً.",
      ),
    },
  ],
};

/* 2 — COMPONENTS (img = svg key in app.js) */
const COMPONENTS = [
  {
    img: "panel",
    h: T("Solar Panels", "الألواح الشمسية"),
    role: T("DC generation", "توليد التيار المستمر"),
    desc: T(
      "Series-wired PV cells (usually 60–72 or 120–144 half-cells) laminated under tempered glass that convert sunlight to DC electricity.",
      "خلايا كهروضوئية موصولة على التوالي (عادة 60–72 أو 120–144 نصف خلية) ملحومة تحت زجاج مقوّى تحوّل الضوء إلى تيار مستمر.",
    ),
    purpose: T(
      "Generate electricity from sunlight.",
      "توليد الكهرباء من ضوء الشمس.",
    ),
    adv: T(
      "Silent, no moving parts, 25-yr warranties, falling cost.",
      "صامتة، بلا أجزاء متحركة، ضمان 25 سنة، تكلفة متناقصة.",
    ),
    dis: T(
      "Output drops with heat, shade, and dust; needs roof area.",
      "ينخفض الإنتاج مع الحرارة والظل والغبار؛ يحتاج مساحة سطح.",
    ),
    life: T("25–30 years", "25–30 سنة"),
    eff: T("17–23%", "17–23%"),
    price: T("$0.25–0.50 / watt", "0.25–0.50$ / واط"),
  },
  {
    img: "inverter",
    h: T("Inverters", "العاكسات"),
    role: T("DC → AC", "تحويل DC إلى AC"),
    desc: T(
      "Power electronics that convert panel/battery DC into grid-quality AC and run maximum-power-point tracking (MPPT) to extract peak output.",
      "إلكترونيات قدرة تحوّل التيار المستمر للألواح/البطارية إلى تيار متردد بجودة الشبكة وتشغّل تتبع نقطة القدرة العظمى (MPPT) لاستخلاص أعلى إنتاج.",
    ),
    purpose: T(
      "Convert DC to usable household AC.",
      "تحويل DC إلى تيار متردد منزلي.",
    ),
    adv: T(
      "High efficiency (>97%), smart monitoring, grid support.",
      "كفاءة عالية (>97%)، مراقبة ذكية، دعم الشبكة.",
    ),
    dis: T(
      "Most failure-prone component; warranty shorter than panels.",
      "أكثر المكوّنات عرضة للأعطال؛ ضمانه أقصر من الألواح.",
    ),
    life: T("10–15 years", "10–15 سنة"),
    eff: T("95–98.5%", "95–98.5%"),
    price: T("$0.10–0.30 / watt", "0.10–0.30$ / واط"),
  },
  {
    img: "battery",
    h: T("Batteries", "البطاريات"),
    role: T("Energy storage", "تخزين الطاقة"),
    desc: T(
      "Electrochemical storage (mostly LiFePO4 today) that banks surplus daytime energy for night use, backup, and load shifting.",
      "تخزين كهروكيميائي (غالباً LiFePO4 اليوم) يخزّن فائض طاقة النهار للاستخدام ليلاً والاحتياطي وتحويل الأحمال.",
    ),
    purpose: T(
      "Store energy for night & outages.",
      "تخزين الطاقة لليل والانقطاعات.",
    ),
    adv: T(
      "Backup power, self-consumption, peak-shaving.",
      "طاقة احتياطية، استهلاك ذاتي، تقليل الذروة.",
    ),
    dis: T(
      "Highest cost per kWh; capacity fades over cycles.",
      "أعلى تكلفة لكل كيلوواط/ساعة؛ تتناقص السعة مع الدورات.",
    ),
    life: T("8–15 years", "8–15 سنة"),
    eff: T("90–98% round-trip", "90–98% ذهاب وإياب"),
    price: T("$300–700 / kWh", "300–700$ / ك.و.س"),
  },
  {
    img: "controller",
    h: T("Charge Controllers", "منظّمات الشحن"),
    role: T("Battery protection", "حماية البطارية"),
    desc: T(
      "In off-grid/DC-coupled systems, an MPPT controller regulates panel voltage/current to charge batteries safely and optimally.",
      "في الأنظمة المنفصلة/المقترنة بـ DC، ينظّم منظّم MPPT جهد وتيار الألواح لشحن البطاريات بأمان وكفاءة.",
    ),
    purpose: T(
      "Safely regulate battery charging.",
      "تنظيم شحن البطارية بأمان.",
    ),
    adv: T(
      "MPPT adds 15–30% harvest vs PWM; prevents overcharge.",
      "يضيف MPPT حصاد 15–30% مقابل PWM؛ يمنع الشحن الزائد.",
    ),
    dis: T(
      "Extra component in DC systems; sizing must match array.",
      "مكوّن إضافي في أنظمة DC؛ يجب مطابقة حجمه للمصفوفة.",
    ),
    life: T("10–15 years", "10–15 سنة"),
    eff: T("97–99% (MPPT)", "97–99% (MPPT)"),
    price: T("$80–600", "80–600$"),
  },
  {
    img: "mount",
    h: T("Mounting Structures", "هياكل التثبيت"),
    role: T("Structural", "إنشائي"),
    desc: T(
      "Aluminium rails, clamps and roof/ground anchors that hold the array at the optimal tilt and survive wind and snow loads.",
      "قضبان ألمنيوم ومشابك ومثبّتات سطح/أرض تحمل المصفوفة بالميل الأمثل وتتحمّل أحمال الرياح والثلج.",
    ),
    purpose: T(
      "Hold panels at the right angle, safely.",
      "تثبيت الألواح بالزاوية الصحيحة وبأمان.",
    ),
    adv: T(
      "Corrosion-resistant, adjustable tilt, 20-yr life.",
      "مقاومة للتآكل، ميل قابل للضبط، عمر 20 سنة.",
    ),
    dis: T(
      "Roof penetrations need flashing; adds wind load.",
      "اختراقات السطح تحتاج عزلاً؛ تضيف حمل رياح.",
    ),
    life: T("20–25 years", "20–25 سنة"),
    eff: T("—", "—"),
    price: T("$0.10–0.20 / watt", "0.10–0.20$ / واط"),
  },
  {
    img: "monitor",
    h: T("Monitoring Systems", "أنظمة المراقبة"),
    role: T("Telemetry", "قياس عن بُعد"),
    desc: T(
      "Gateways and apps that log production, consumption, battery state and faults — often with per-panel data from microinverters/optimizers.",
      "بوّابات وتطبيقات تسجّل الإنتاج والاستهلاك وحالة البطارية والأعطال — غالباً ببيانات لكل لوح من المايكروإنفرتر/المحسّنات.",
    ),
    purpose: T("See and optimize system performance.", "رؤية الأداء وتحسينه."),
    adv: T(
      "Early fault detection, savings tracking, alerts.",
      "كشف مبكر للأعطال، تتبع التوفير، تنبيهات.",
    ),
    dis: T(
      "Needs internet/Wi-Fi; some platforms charge fees.",
      "يحتاج إنترنت/واي فاي؛ بعض المنصّات برسوم.",
    ),
    life: T("Software-dependent", "يعتمد على البرمجيات"),
    eff: T("—", "—"),
    price: T("$0–500", "0–500$"),
  },
  {
    img: "wiring",
    h: T("Wiring & Protection", "الأسلاك والحماية"),
    role: T("Safety / BOS", "أمان / توازن النظام"),
    desc: T(
      "PV cabling, DC/AC isolators, fuses, breakers, surge protection (SPD) and grounding — the 'balance of system' that keeps everything safe and code-compliant.",
      "كابلات PV، عوازل DC/AC، مصاهر، قواطع، حماية من الصواعق (SPD)، والتأريض — 'توازن النظام' الذي يبقي كل شيء آمناً ومطابقاً للكود.",
    ),
    purpose: T(
      "Protect people, equipment and the home.",
      "حماية الأشخاص والمعدّات والمنزل.",
    ),
    adv: T(
      "Prevents fire/shock; required by code & insurers.",
      "يمنع الحريق/الصعق؛ مطلوب بالكود والتأمين.",
    ),
    dis: T(
      "Easy to under-spec; must be installed by a pro.",
      "سهل تقليل مواصفاته؛ يجب تركيبه بواسطة محترف.",
    ),
    life: T("20–30 years", "20–30 سنة"),
    eff: T("—", "—"),
    price: T("$300–1,500", "300–1500$"),
  },
];

/* 3 — PANELS */
const PANELS = {
  cards: [
    {
      img: "mono",
      h: T("Monocrystalline", "أحادي البلورة"),
      eff: "19–23%",
      cost: T("$$$", "$$$"),
      use: T(
        "Limited roof area, premium installs",
        "مساحة سطح محدودة، تركيبات راقية",
      ),
      note: T(
        "Single-crystal silicon; highest efficiency and best low-light/heat behaviour.",
        "سيليكون أحادي البلورة؛ أعلى كفاءة وأفضل أداء في الإضاءة المنخفضة والحرارة.",
      ),
    },
    {
      img: "poly",
      h: T("Polycrystalline", "متعدد البلورات"),
      eff: "15–18%",
      cost: T("$$", "$$"),
      use: T(
        "Budget builds with ample roof space",
        "تركيبات اقتصادية بمساحة سطح وفيرة",
      ),
      note: T(
        "Multi-crystal silicon; cheaper but lower efficiency, the classic blue panel.",
        "سيليكون متعدد البلورات؛ أرخص لكن كفاءة أقل، اللوح الأزرق الكلاسيكي.",
      ),
    },
    {
      img: "thin",
      h: T("Thin-Film", "الأغشية الرقيقة"),
      eff: "10–13%",
      cost: T("$", "$"),
      use: T(
        "Large flat/commercial roofs, high heat",
        "أسطح كبيرة/تجارية، حرارة عالية",
      ),
      note: T(
        "Flexible, lightweight, best temperature coefficient — but needs ~2× the area.",
        "مرنة، خفيفة، أفضل معامل حرارة — لكنها تحتاج ~ضعف المساحة.",
      ),
    },
    {
      img: "bifacial",
      h: T("Bifacial", "ثنائي الوجه"),
      eff: "19–22% (+5–25% rear)",
      cost: T("$$$", "$$$"),
      use: T(
        "Ground-mount, reflective/white roofs",
        "تركيب أرضي، أسطح عاكسة/بيضاء",
      ),
      note: T(
        "Captures light on both faces; big gains over reflective ground or with trackers.",
        "يلتقط الضوء من الوجهين؛ مكاسب كبيرة فوق أرض عاكسة أو مع متتبّعات.",
      ),
    },
  ],
  table: {
    head: [
      T("Type", "النوع"),
      T("Efficiency", "الكفاءة"),
      T("Temp. coeff.", "معامل الحرارة"),
      T("Lifespan", "العمر"),
      T("Cost/W", "تكلفة/واط"),
      T("Area / kW", "مساحة/ك.و"),
    ],
    rows: [
      [
        "Monocrystalline / أحادي",
        "19–23%",
        "−0.30%/°C",
        "25–30 yr",
        "$0.35–0.50",
        "~5.5 m²",
      ],
      [
        "Polycrystalline / متعدد",
        "15–18%",
        "−0.40%/°C",
        "25 yr",
        "$0.25–0.35",
        "~6.5 m²",
      ],
      [
        "Thin-Film / أغشية",
        "10–13%",
        "−0.20%/°C",
        "10–20 yr",
        "$0.20–0.30",
        "~9–11 m²",
      ],
      [
        "Bifacial / ثنائي الوجه",
        "19–22% +bonus",
        "−0.30%/°C",
        "25–30 yr",
        "$0.40–0.55",
        "~5.5 m²",
      ],
    ],
  },
};

/* 4 — INVERTERS */
const INVERTERS = {
  cards: [
    {
      img: "inv_string",
      h: T("String Inverter", "عاكس سلسلة"),
      eff: "97–98.5%",
      pros: [
        T(
          "Lowest $/W, proven, easy service",
          "أقل تكلفة/واط، مُجرَّب، صيانة سهلة",
        ),
      ],
      cons: [
        T(
          "One shaded panel drags the whole string",
          "لوح مظلَّل واحد يخفض السلسلة كلها",
        ),
      ],
      use: T(
        "Unshaded roofs with a single orientation.",
        "أسطح بلا ظل وباتجاه واحد.",
      ),
    },
    {
      img: "inv_micro",
      h: T("Microinverter", "مايكروإنفرتر"),
      eff: "95–97%",
      pros: [
        T(
          "Per-panel MPPT, shade-tolerant, safe AC",
          "MPPT لكل لوح، يتحمّل الظل، تيار متردد آمن",
        ),
      ],
      cons: [
        T(
          "Higher cost; many units on the roof",
          "تكلفة أعلى؛ وحدات كثيرة على السطح",
        ),
      ],
      use: T(
        "Complex/shaded roofs, multiple orientations.",
        "أسطح معقّدة/مظلَّلة، اتجاهات متعدّدة.",
      ),
    },
    {
      img: "inv_hybrid",
      h: T("Hybrid Inverter", "عاكس هجين"),
      eff: "96–98%",
      pros: [
        T(
          "Runs panels + battery + grid in one box",
          "يدير الألواح + البطارية + الشبكة في وحدة واحدة",
        ),
      ],
      cons: [
        T(
          "Pricier; battery voltage must match",
          "أغلى؛ يجب مطابقة جهد البطارية",
        ),
      ],
      use: T(
        "New installs planning storage now or later.",
        "تركيبات جديدة تخطّط للتخزين الآن أو لاحقاً.",
      ),
    },
    {
      img: "inv_offgrid",
      h: T("Off-Grid Inverter", "عاكس منفصل"),
      eff: "94–96%",
      pros: [
        T(
          "Runs with no grid at all; strong surge",
          "يعمل بلا شبكة إطلاقاً؛ تحمّل اندفاع عالٍ",
        ),
      ],
      cons: [
        T(
          "Needs big battery; no grid export",
          "يحتاج بطارية كبيرة؛ لا تصدير للشبكة",
        ),
      ],
      use: T("Remote homes, cabins, farms.", "منازل نائية، أكواخ، مزارع."),
    },
  ],
};

/* 5 — BATTERIES */
const BATTERIES = {
  head: [
    T("Technology", "التقنية"),
    T("Cycle life", "عدد الدورات"),
    T("DoD", "عمق التفريغ"),
    T("Maintenance", "الصيانة"),
    T("Safety", "الأمان"),
  ],
  rows: [
    {
      img: "bat_lfp",
      c: [
        "LiFePO4",
        "4,000–8,000",
        "90–100%",
        T("None", "لا شيء"),
        T("Excellent — very stable chemistry", "ممتاز — كيمياء مستقرة جداً"),
      ],
    },
    {
      img: "bat_liion",
      c: [
        "Lithium-ion (NMC)",
        "2,000–4,000",
        "80–90%",
        T("None", "لا شيء"),
        T(
          "Good — needs quality BMS & cooling",
          "جيّد — يحتاج نظام إدارة وتبريد جيّد",
        ),
      ],
    },
    {
      img: "bat_agm",
      c: [
        "Lead-Acid AGM",
        "500–1,200",
        "50%",
        T("Low", "منخفضة"),
        T(
          "Safe, sealed, but heavy & short-lived",
          "آمن ومُغلق لكنه ثقيل وقصير العمر",
        ),
      ],
    },
    {
      img: "bat_gel",
      c: [
        "Gel",
        "600–1,500",
        "50–60%",
        T("Low", "منخفضة"),
        T(
          "Safe; tolerates heat better than AGM",
          "آمن؛ يتحمّل الحرارة أفضل من AGM",
        ),
      ],
    },
  ],
  note: T(
    "LiFePO4 dominates new residential storage: longest cycle life, deepest usable capacity, and the safest chemistry. Lead-acid only makes sense for very low budgets or rarely-cycled backup.",
    "تهيمن LiFePO4 على التخزين المنزلي الجديد: أطول عمر دورات، أعمق سعة قابلة للاستخدام، وأكثر كيمياء أماناً. لا يُنصح بالرصاص الحمضي إلا لميزانيات منخفضة جداً أو احتياطي نادر الاستخدام.",
  ),
};

/* 6 — BRANDS */
const BRANDS = {
  groups: [
    {
      cat: T("Solar Panels", "الألواح الشمسية"),
      items: [
        {
          n: "SunPower (Maxeon)",
          spec: T("Up to 22.8% · 40-yr warranty", "حتى 22.8% · ضمان 40 سنة"),
          why: T(
            "Best-in-class efficiency & durability.",
            "أعلى كفاءة ومتانة في فئتها.",
          ),
        },
        {
          n: "LONGi",
          spec: T("Hi-MO 6/7 · 22–23%", "Hi-MO 6/7 · 22–23%"),
          why: T(
            "World's largest maker; excellent value.",
            "أكبر مصنّع عالمياً؛ قيمة ممتازة.",
          ),
        },
        {
          n: "JinkoSolar",
          spec: T("Tiger Neo N-type · 22.5%", "Tiger Neo N-type · 22.5%"),
          why: T(
            "Reliable tier-1 at fair pricing.",
            "موثوق من الفئة الأولى بسعر عادل.",
          ),
        },
        {
          n: "Trina Solar",
          spec: T("Vertex S+ · 21–22%", "Vertex S+ · 21–22%"),
          why: T(
            "Strong warranties, wide availability.",
            "ضمانات قوية وتوفّر واسع.",
          ),
        },
        {
          n: "Canadian Solar",
          spec: T("TOPHiKu6 · 22%", "TOPHiKu6 · 22%"),
          why: T(
            "Bankable, great price-to-performance.",
            "موثوق مالياً، أداء مقابل سعر ممتاز.",
          ),
        },
      ],
    },
    {
      cat: T("Inverters", "العاكسات"),
      items: [
        {
          n: "Huawei",
          spec: T("FusionSolar · 98.6%", "FusionSolar · 98.6%"),
          why: T(
            "Smart, efficient, arc-fault safety.",
            "ذكي، عالي الكفاءة، حماية من قوس التماس.",
          ),
        },
        {
          n: "SMA",
          spec: T("Sunny Boy/Tripower · 98%", "Sunny Boy/Tripower · 98%"),
          why: T(
            "German engineering, legendary reliability.",
            "هندسة ألمانية وموثوقية أسطورية.",
          ),
        },
        {
          n: "Fronius",
          spec: T("Symo/Gen24 · 98%", "Symo/Gen24 · 98%"),
          why: T("Premium build, excellent support.", "تصنيع ممتاز ودعم رائع."),
        },
        {
          n: "SolarEdge",
          spec: T("HD-Wave + optimizers · 99%", "HD-Wave + محسّنات · 99%"),
          why: T(
            "Per-panel optimization & monitoring.",
            "تحسين ومراقبة لكل لوح.",
          ),
        },
        {
          n: "Growatt",
          spec: T("MIN/MOD hybrid · 98%", "MIN/MOD هجين · 98%"),
          why: T(
            "Best budget hybrid for storage.",
            "أفضل هجين اقتصادي للتخزين.",
          ),
        },
      ],
    },
    {
      cat: T("Batteries", "البطاريات"),
      items: [
        {
          n: "Tesla Powerwall 3",
          spec: T("13.5 kWh · built-in inverter", "13.5 ك.و.س · عاكس مدمج"),
          why: T("Seamless backup, polished app.", "احتياطي سلس وتطبيق متقن."),
        },
        {
          n: "BYD Battery-Box",
          spec: T("Modular 5–22 kWh · LFP", "معياري 5–22 ك.و.س · LFP"),
          why: T(
            "Scalable, high quality LFP.",
            "قابل للتوسّع، LFP عالي الجودة.",
          ),
        },
        {
          n: "Pylontech",
          spec: T("US/Force series · LFP", "سلسلة US/Force · LFP"),
          why: T(
            "Reliable, affordable, wide support.",
            "موثوق، اقتصادي، دعم واسع.",
          ),
        },
        {
          n: "LG Energy Solution",
          spec: T("RESU · 9.6–16 kWh", "RESU · 9.6–16 ك.و.س"),
          why: T("Compact, proven home storage.", "مدمج وتخزين منزلي مُجرَّب."),
        },
        {
          n: "Enphase IQ Battery",
          spec: T("5P · microinverter-based", "5P · قائم على مايكروإنفرتر"),
          why: T(
            "Modular AC-coupled, very safe.",
            "معياري مقترن بالتيار المتردد وآمن جداً.",
          ),
        },
      ],
    },
  ],
};

/* 7 — SYSTEM SIZES */
const SIZES = [
  {
    tier: T("Small Home", "منزل صغير"),
    kw: "3 kW",
    img: "sys3",
    comp: T(
      "8× 380 W panels · 3 kW string inverter · optional 5 kWh LFP",
      "8 ألواح 380 واط · عاكس سلسلة 3 ك.و · 5 ك.و.س LFP اختياري",
    ),
    prod: T("12–15 kWh/day", "12–15 ك.و.س/يوم"),
  },
  {
    tier: T("Medium Home", "منزل متوسط"),
    kw: "5 kW",
    img: "sys5",
    comp: T(
      "13× 400 W panels · 5 kW hybrid inverter · 10 kWh LFP",
      "13 لوحاً 400 واط · عاكس هجين 5 ك.و · 10 ك.و.س LFP",
    ),
    prod: T("20–25 kWh/day", "20–25 ك.و.س/يوم"),
  },
  {
    tier: T("Large Home", "منزل كبير"),
    kw: "10 kW",
    img: "sys10",
    comp: T(
      "25× 400 W panels · 10 kW hybrid · 15–20 kWh LFP",
      "25 لوحاً 400 واط · هجين 10 ك.و · 15–20 ك.و.س LFP",
    ),
    prod: T("40–50 kWh/day", "40–50 ك.و.س/يوم"),
  },
  {
    tier: T("Luxury Villa", "فيلا فاخرة"),
    kw: "20 kW+",
    img: "sys20",
    comp: T(
      "50× 450 W panels · 2× 10 kW hybrids · 30–40 kWh LFP · EV charger",
      "50 لوحاً 450 واط · عاكسان هجينان 10 ك.و · 30–40 ك.و.س LFP · شاحن سيارة",
    ),
    prod: T("80–110 kWh/day", "80–110 ك.و.س/يوم"),
  },
];

/* 8 — AC SIZING */
const AC = {
  head: [
    T("AC unit", "وحدة التكييف"),
    T("Approx. load", "الحمل التقريبي"),
    T("Panels", "الألواح"),
    T("Inverter", "العاكس"),
    T("Battery (4h)", "البطارية (4 ساعات)"),
  ],
  rows: [
    [T("1 Ton", "1 طن"), "~1.2 kW", "4–5 × 400 W", "2 kW", "~6 kWh"],
    [T("1.5 Ton", "1.5 طن"), "~1.8 kW", "6–7 × 400 W", "3 kW", "~9 kWh"],
    [T("2 Ton", "2 طن"), "~2.4 kW", "8–9 × 400 W", "3.6 kW", "~12 kWh"],
    [
      T("3× 1.5 Ton", "3 × 1.5 طن"),
      "~5.4 kW",
      "18–20 × 400 W",
      "8 kW",
      "~28 kWh",
    ],
  ],
  note: T(
    "Assumes inverter (DC) AC units and ~5 peak-sun-hours. Inrush current means the inverter must be sized above the running load; non-inverter compressors need ~2–3× headroom.",
    "بافتراض مكيّفات إنفرتر (DC) و~5 ساعات ذروة شمسية. تيار البدء يعني أن العاكس يجب أن يكون أكبر من حمل التشغيل؛ الضواغط غير الإنفرتر تحتاج هامشاً ~2–3 أضعاف.",
  ),
};

/* 9 — ADVANCED */
const ADVANCED = [
  {
    i: "🧠",
    h: T("Smart Energy Management", "إدارة الطاقة الذكية"),
    p: T(
      "Automated load scheduling runs heavy appliances when the sun is strongest.",
      "جدولة أحمال آلية تُشغّل الأجهزة الثقيلة وقت أقوى إشعاع شمسي.",
    ),
  },
  {
    i: "📈",
    h: T("AI Energy Monitoring", "مراقبة بالذكاء الاصطناعي"),
    p: T(
      "Models forecast production & consumption and flag faults before they cost you.",
      "نماذج تتنبّأ بالإنتاج والاستهلاك وترصد الأعطال قبل أن تكلّفك.",
    ),
  },
  {
    i: "🔋",
    h: T("Hybrid Solar Systems", "الأنظمة الهجينة"),
    p: T(
      "Grid + battery + solar together — self-consume by day, back up by night.",
      "شبكة + بطارية + شمس معاً — استهلاك ذاتي نهاراً واحتياطي ليلاً.",
    ),
  },
  {
    i: "🔌",
    h: T("Grid-Tied Systems", "الأنظمة المرتبطة بالشبكة"),
    p: T(
      "Export surplus for credits (net metering); lowest cost, no backup alone.",
      "تصدير الفائض مقابل أرصدة (صافي القياس)؛ أقل تكلفة، لكن بلا احتياطي وحده.",
    ),
  },
  {
    i: "🏝️",
    h: T("Off-Grid Systems", "الأنظمة المنفصلة"),
    p: T(
      "Full independence with large storage; ideal where no grid exists.",
      "استقلال كامل بتخزين كبير؛ مثالي حيث لا توجد شبكة.",
    ),
  },
  {
    i: "🚗",
    h: T("EV Charging Integration", "دمج شحن السيارات"),
    p: T(
      "Solar-aware chargers top up your car from surplus PV automatically.",
      "شواحن مدركة للشمس تشحن سيارتك من فائض الطاقة تلقائياً.",
    ),
  },
];

/* 10 / 11 — GUIDES */
const INSTALL = {
  steps: [
    {
      h: T("Site assessment", "تقييم الموقع"),
      p: T(
        "Measure usable roof area, structural capacity, shading (morning–evening) and electrical panel headroom.",
        "قياس مساحة السطح القابلة للاستخدام، السعة الإنشائية، الظل (صباحاً–مساءً) وهامش لوحة الكهرباء.",
      ),
    },
    {
      h: T("Roof orientation", "اتجاه السطح"),
      p: T(
        "True south (north hemisphere) is ideal; east–west splits production across the day.",
        "الجنوب الحقيقي (نصف الكرة الشمالي) مثالي؛ شرق–غرب يوزّع الإنتاج على اليوم.",
      ),
    },
    {
      h: T("Tilt optimization", "ضبط زاوية الميل"),
      p: T(
        "Set tilt ≈ your latitude for an annual optimum; steeper favours winter, flatter favours summer.",
        "اضبط الميل ≈ خط العرض للأمثلية السنوية؛ الأكثر انحداراً يخدم الشتاء والأقل يخدم الصيف.",
      ),
    },
    {
      h: T("Wiring layout", "مخطط الأسلاك"),
      p: T(
        "Keep string voltages within inverter limits; minimize DC run length; label everything.",
        "أبقِ جهود السلاسل ضمن حدود العاكس؛ قلّل طول مسار DC؛ ضع لصاقات على كل شيء.",
      ),
    },
    {
      h: T("Safety requirements", "متطلبات الأمان"),
      p: T(
        "Rapid shutdown, DC/AC isolators, surge protection, proper grounding, and permits/inspection.",
        "إيقاف سريع، عوازل DC/AC، حماية من الصواعق، تأريض سليم، وتصاريح/فحص.",
      ),
    },
  ],
  maint: [
    {
      h: T("Cleaning schedule", "جدول التنظيف"),
      p: T(
        "Rinse panels 2–4×/year (monthly in dusty climates); avoid abrasive tools.",
        "اشطف الألواح 2–4 مرات/سنة (شهرياً في المناخ المغبر)؛ تجنّب الأدوات الخادشة.",
      ),
    },
    {
      h: T("Inspection checklist", "قائمة الفحص"),
      p: T(
        "Annually check connectors, mounts, inverter logs, battery terminals and isolators.",
        "افحص سنوياً الموصّلات والهياكل وسجلّات العاكس وأطراف البطارية والعوازل.",
      ),
    },
    {
      h: T("Performance monitoring", "مراقبة الأداء"),
      p: T(
        "Watch the app for kWh drops vs weather; a sustained dip means a fault to investigate.",
        "راقب التطبيق لانخفاض الكيلوواط/ساعة مقابل الطقس؛ الانخفاض المستمر يعني عطلاً يستحق الفحص.",
      ),
    },
  ],
};

/* 12 — FINANCE */
const FINANCE = {
  head: [
    T("System", "النظام"),
    T("Install cost", "تكلفة التركيب"),
    T("Annual saving", "التوفير السنوي"),
    T("Payback", "الاسترداد"),
    T("25-yr saving", "توفير 25 سنة"),
  ],
  rows: [
    ["3 kW", "$4,500–6,000", "$650–900", "5–7 yr", "$18,000–24,000"],
    ["5 kW", "$7,000–10,000", "$1,100–1,500", "5–7 yr", "$30,000–42,000"],
    ["10 kW", "$13,000–18,000", "$2,200–3,000", "5–6 yr", "$60,000–85,000"],
    ["20 kW+", "$26,000–40,000", "$4,500–6,500", "4–6 yr", "$120,000–180,000"],
  ],
  note: T(
    "Figures exclude incentives/net-metering, which often cut payback by 1–3 years. Battery storage adds cost and resilience but lengthens payback.",
    "الأرقام لا تشمل الحوافز/صافي القياس التي تقلّل الاسترداد عادة 1–3 سنوات. التخزين بالبطاريات يضيف تكلفة ومرونة لكنه يطيل فترة الاسترداد.",
  ),
};

/* 15 — FINAL RANKING */
const RANK = [
  {
    t: "01",
    h: T("Budget", "اقتصادي"),
    p: T(
      "3 kW poly grid-tied · Growatt string inverter · no battery",
      "3 ك.و متعدد مرتبط بالشبكة · عاكس Growatt · بلا بطارية",
    ),
    price: "$4.5–6k",
  },
  {
    t: "02",
    h: T("Mid-Range", "متوسط"),
    p: T(
      "5 kW mono hybrid · Growatt/Huawei · 10 kWh Pylontech LFP",
      "5 ك.و أحادي هجين · Growatt/Huawei · 10 ك.و.س Pylontech LFP",
    ),
    price: "$9–13k",
  },
  {
    t: "03",
    h: T("Professional", "احترافي"),
    p: T(
      "10 kW mono · SolarEdge + optimizers · 15 kWh BYD · full monitoring",
      "10 ك.و أحادي · SolarEdge + محسّنات · 15 ك.و.س BYD · مراقبة كاملة",
    ),
    price: "$16–22k",
  },
  {
    t: "04",
    h: T("Enterprise", "مؤسسي"),
    p: T(
      "15 kW LONGi · SMA/Fronius · 24 kWh LFP · EV charging",
      "15 ك.و LONGi · SMA/Fronius · 24 ك.و.س LFP · شحن سيارات",
    ),
    price: "$28–38k",
  },
  {
    t: "05",
    h: T("Ultimate High-End", "القمة الفاخرة"),
    p: T(
      "20 kW+ SunPower Maxeon · dual Tesla Powerwall 3 · AI management · EV + backup",
      "20 ك.و+ SunPower Maxeon · بطاريتا Tesla Powerwall 3 · إدارة بالذكاء الاصطناعي · سيارة + احتياطي",
    ),
    price: "$45k+",
  },
];

const DATA = {
  UI,
  INTRO,
  COMPONENTS,
  PANELS,
  INVERTERS,
  BATTERIES,
  BRANDS,
  SIZES,
  AC,
  ADVANCED,
  INSTALL,
  FINANCE,
  RANK,
};
