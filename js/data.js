/* SolarCore data — all content bilingual {en, ar}. Figures are typical industry
   planning ranges (2024-25), not a substitute for a licensed site survey. */
const T = (en, ar) => ({ en, ar });

const UI = {
  nav_intro: T("Intro", "مقدمة"),
  nav_components: T("Components", "المكوّنات"),
  nav_panels: T("Panels", "الألواح"),
  nav_inverters: T("Inverters", "الانفرتر"),
  nav_batteries: T("Batteries", "البطاريات"),
  nav_brands: T("Brands", "الماركات"),
  nav_sizing: T("Sizing", "الأحجام"),
  nav_calc: T("Calculators", "الحاسبات"),
  nav_finance: T("Finance", "التكلفة"),
  hero_kicker: T("Engineering Guide · v2.1", "دليل شامل · إصدار 2.1"),
  hero_title: T(
    "The Complete Residential Solar Power System",
    "الطاقة الشمسية لبيتك — الدليل الكامل",
  ),
  hero_sub: T(
    "From photons to payback — a premium, engineering-grade reference covering every component, comparison, calculation, and financial decision behind powering a home with the sun.",
    "دليل مبسّط وشامل يشرح لك كل شيء عن الطاقة الشمسية للمنازل: المكوّنات، المقارنات، الأحجام، والتكاليف — خطوة بخطوة وبلغة سهلة.",
  ),
  hero_btn1: T("Start the Guide", "ابدأ الدليل"),
  hero_btn2: T("Browse Components", "تعرّف على المكوّنات"),
  stat_years: T("yr panel life", "سنة عمر الألواح"),
  stat_eff: T("% peak efficiency", "% أعلى كفاءة"),
  stat_payback: T("yr typical payback", "سنوات لاسترداد التكلفة"),
  footer_tag: T(
    "An engineering reference for residential solar. Figures are typical industry ranges for planning — confirm with a licensed installer.",
    "مرجع مبسّط للطاقة الشمسية المنزلية. الأرقام تقديرية للتخطيط فقط — استشر فنّياً مرخّصاً قبل التركيب.",
  ),
  credit: T("Programmed by", "برمجة"),
  th_spec: T("Specification", "المواصفة"),
  th_value: T("Value", "القيمة"),
  purpose: T("Purpose", "وظيفته"),
  advantages: T("Advantages", "مميزاته"),
  disadvantages: T("Disadvantages", "عيوبه"),
  lifespan: T("Lifespan", "عمره"),
  efficiency: T("Efficiency", "كفاءته"),
  price: T("Price range", "سعره تقريباً"),
  pros: T("Pros", "مميزات"),
  cons: T("Cons", "عيوب"),
  best_use: T("Best use", "الأفضل لـ"),
  recommended: T("Recommended for", "الأنسب لـ"),
  why: T("Why we recommend", "لماذا نوصي به"),
  components_list: T("Components", "المكوّنات"),
  daily_prod: T("Est. daily production", "الإنتاج اليومي تقريباً"),
  panels_req: T("Panels", "الألواح"),
  battery_req: T("Battery", "البطارية"),
  inverter_req: T("Inverter", "الانفرتر"),
};

/* 1 — INTRO */
const INTRO = {
  title: T("1 · Introduction", "1 · مقدمة"),
  lead: T(
    "What solar is, how a home system works, and why it pays off.",
    "ما هي الطاقة الشمسية؟ كيف يعمل النظام في بيتك؟ ولماذا تستحق أن تستثمر فيها؟",
  ),
  blocks: [
    {
      h: T("What is solar energy?", "ما هي الطاقة الشمسية؟"),
      p: T(
        "Solar energy is electricity generated when photovoltaic (PV) cells convert sunlight directly into direct-current (DC) electricity through the photovoltaic effect. A single residential rooftop receives far more energy from the sun each day than the home consumes — the system's job is to capture, convert, store, and deliver it.",
        "ببساطة: الألواح الشمسية تحوّل ضوء الشمس إلى كهرباء مباشرة. سطح بيتك يستقبل كل يوم طاقة من الشمس أكثر بكثير مما يستهلكه البيت كله — ومهمة النظام أن يلتقط هذه الطاقة ويحوّلها ويخزّنها ويوصلها لأجهزتك.",
      ),
    },
    {
      h: T("How a residential system works", "كيف يعمل النظام في بيتك؟"),
      p: T(
        "Panels produce DC power → an inverter converts it to 230/120 V AC for the home → surplus charges a battery or exports to the grid → at night or during outages the battery (or grid) supplies the load. A monitoring system tracks every watt in real time.",
        "الألواح تنتج كهرباء مستمرة (DC) → الانفرتر يحوّلها إلى كهرباء عادية مثل كهرباء البيت → الفائض يشحن البطارية أو يُباع للشبكة → وفي الليل أو عند انقطاع الكهرباء تعمل أجهزتك من البطارية. وكل هذا تتابعه من تطبيق على جوالك.",
      ),
    },
    {
      h: T("Benefits for the home", "ماذا تستفيد؟"),
      p: T(
        "Lower or eliminated electricity bills, protection against tariff increases, backup power during outages, a quieter and cleaner alternative to generators, increased property value, and a major cut in carbon emissions.",
        "فاتورة كهرباء أقل أو صفر، حماية من ارتفاع الأسعار، كهرباء احتياطية عند الانقطاع، بديل نظيف وهادئ عن المولدات، وزيادة في قيمة بيتك.",
      ),
    },
    {
      h: T("Savings & energy independence", "التوفير والاستقلالية"),
      p: T(
        "A well-sized system commonly offsets 60–100% of annual consumption. Combined with batteries, a home can run for days off-grid. Most residential systems reach payback in 4–8 years and then deliver 15+ years of effectively free power.",
        "النظام المختار بحجم صحيح يغطي عادة 60–100% من استهلاكك السنوي. ومع البطاريات يمكن لبيتك أن يعمل أياماً كاملة بدون شبكة. أغلب الأنظمة تسترد تكلفتها خلال 4–8 سنوات، وبعدها تحصل على كهرباء شبه مجانية لأكثر من 15 سنة.",
      ),
    },
  ],
};

/* 2 — COMPONENTS (img = svg key in app.js) */
const COMPONENTS = [
  {
    img: "panel",
    h: T("Solar Panels", "الألواح الشمسية"),
    role: T("DC generation", "مصدر الكهرباء"),
    desc: T(
      "Series-wired PV cells (usually 60–72 or 120–144 half-cells) laminated under tempered glass that convert sunlight to DC electricity.",
      "خلايا شمسية مغطاة بزجاج مقوّى تحوّل ضوء الشمس إلى كهرباء. هي قلب النظام ومصدر الطاقة كلها.",
    ),
    purpose: T(
      "Generate electricity from sunlight.",
      "توليد الكهرباء من ضوء الشمس.",
    ),
    adv: T(
      "Silent, no moving parts, 25-yr warranties, falling cost.",
      "صامتة تماماً، بلا قطع متحركة، ضمانها 25 سنة، وأسعارها تنخفض باستمرار.",
    ),
    dis: T(
      "Output drops with heat, shade, and dust; needs roof area.",
      "إنتاجها يقل مع الحرارة الشديدة والظل والغبار، وتحتاج مساحة على السطح.",
    ),
    life: T("25–30 years", "25–30 سنة"),
    eff: T("17–23%", "17–23%"),
    price: T("$0.25–0.50 / watt", "0.25–0.50 دولار لكل واط"),
  },
  {
    img: "inverter",
    h: T("Inverters", "الانفرتر (العاكس)"),
    role: T("DC → AC", "يحوّل الكهرباء لتناسب البيت"),
    desc: T(
      "Power electronics that convert panel/battery DC into grid-quality AC and run maximum-power-point tracking (MPPT) to extract peak output.",
      "الانفرتر هو عقل النظام: يحوّل كهرباء الألواح والبطارية إلى كهرباء عادية تشغّل أجهزة البيت، ويستخرج أقصى إنتاج ممكن من الألواح (خاصية MPPT).",
    ),
    purpose: T(
      "Convert DC to usable household AC.",
      "تحويل كهرباء الألواح إلى كهرباء تصلح للبيت.",
    ),
    adv: T(
      "High efficiency (>97%), smart monitoring, grid support.",
      "كفاءة عالية جداً (فوق 97%) ومراقبة ذكية من الجوال.",
    ),
    dis: T(
      "Most failure-prone component; warranty shorter than panels.",
      "أكثر قطعة تتعطل في النظام، وضمانه أقصر من ضمان الألواح.",
    ),
    life: T("10–15 years", "10–15 سنة"),
    eff: T("95–98.5%", "95–98.5%"),
    price: T("$0.10–0.30 / watt", "0.10–0.30 دولار لكل واط"),
  },
  {
    img: "battery",
    h: T("Batteries", "البطاريات"),
    role: T("Energy storage", "تخزين الطاقة"),
    desc: T(
      "Electrochemical storage (mostly LiFePO4 today) that banks surplus daytime energy for night use, backup, and load shifting.",
      "تخزّن فائض كهرباء النهار لتستخدمه في الليل وعند انقطاع الكهرباء. أغلب البطاريات الحديثة من نوع ليثيوم LiFePO4.",
    ),
    purpose: T(
      "Store energy for night & outages.",
      "تخزين الكهرباء لليل وساعات الانقطاع.",
    ),
    adv: T(
      "Backup power, self-consumption, peak-shaving.",
      "كهرباء احتياطية، واستفادة أكبر من إنتاج ألواحك بدل بيعه رخيصاً.",
    ),
    dis: T(
      "Highest cost per kWh; capacity fades over cycles.",
      "أغلى جزء في النظام، وسعتها تنقص مع كثرة الاستخدام.",
    ),
    life: T("8–15 years", "8–15 سنة"),
    eff: T("90–98% round-trip", "90–98% كفاءة شحن وتفريغ"),
    price: T("$300–700 / kWh", "300–700 دولار لكل كيلوواط ساعة"),
  },
  {
    img: "controller",
    h: T("Charge Controllers", "منظّم الشحن"),
    role: T("Battery protection", "حماية البطارية"),
    desc: T(
      "In off-grid/DC-coupled systems, an MPPT controller regulates panel voltage/current to charge batteries safely and optimally.",
      "في الأنظمة المنفصلة عن الشبكة، منظّم الشحن (MPPT) يتحكم بجهد وتيار الألواح حتى تُشحن البطارية بأمان وبأعلى كفاءة.",
    ),
    purpose: T(
      "Safely regulate battery charging.",
      "شحن البطارية بأمان وبدون إتلافها.",
    ),
    adv: T(
      "MPPT adds 15–30% harvest vs PWM; prevents overcharge.",
      "نوع MPPT يزيد الإنتاج 15–30% عن النوع العادي (PWM)، ويمنع الشحن الزائد.",
    ),
    dis: T(
      "Extra component in DC systems; sizing must match array.",
      "قطعة إضافية، ويجب أن يناسب حجمه حجم الألواح.",
    ),
    life: T("10–15 years", "10–15 سنة"),
    eff: T("97–99% (MPPT)", "97–99% (MPPT)"),
    price: T("$80–600", "80–600 دولار"),
  },
  {
    img: "mount",
    h: T("Mounting Structures", "قواعد التثبيت"),
    role: T("Structural", "تثبيت الألواح"),
    desc: T(
      "Aluminium rails, clamps and roof/ground anchors that hold the array at the optimal tilt and survive wind and snow loads.",
      "قواعد وقضبان ألمنيوم تثبّت الألواح على السطح بالزاوية الصحيحة وتتحمل الرياح القوية.",
    ),
    purpose: T(
      "Hold panels at the right angle, safely.",
      "تثبيت الألواح بأمان وبالزاوية الصحيحة.",
    ),
    adv: T(
      "Corrosion-resistant, adjustable tilt, 20-yr life.",
      "لا تصدأ، زاويتها قابلة للتعديل، وتعيش 20 سنة وأكثر.",
    ),
    dis: T(
      "Roof penetrations need flashing; adds wind load.",
      "تثبيتها في السطح يحتاج عزلاً جيداً ضد تسرب الماء.",
    ),
    life: T("20–25 years", "20–25 سنة"),
    eff: T("—", "—"),
    price: T("$0.10–0.20 / watt", "0.10–0.20 دولار لكل واط"),
  },
  {
    img: "monitor",
    h: T("Monitoring Systems", "أنظمة المراقبة"),
    role: T("Telemetry", "متابعة من الجوال"),
    desc: T(
      "Gateways and apps that log production, consumption, battery state and faults — often with per-panel data from microinverters/optimizers.",
      "تطبيقات وأجهزة صغيرة تسجّل كم أنتج النظام وكم استهلك البيت وحالة البطارية، وتنبّهك فوراً عند حدوث أي عطل.",
    ),
    purpose: T(
      "See and optimize system performance.",
      "متابعة أداء النظام وتحسينه.",
    ),
    adv: T(
      "Early fault detection, savings tracking, alerts.",
      "اكتشاف مبكر للأعطال، ومتابعة التوفير، وتنبيهات فورية.",
    ),
    dis: T(
      "Needs internet/Wi-Fi; some platforms charge fees.",
      "تحتاج إنترنت، وبعض التطبيقات باشتراك مدفوع.",
    ),
    life: T("Software-dependent", "حسب التطبيق"),
    eff: T("—", "—"),
    price: T("$0–500", "0–500 دولار"),
  },
  {
    img: "wiring",
    h: T("Wiring & Protection", "الأسلاك والحماية"),
    role: T("Safety / BOS", "أمان النظام"),
    desc: T(
      "PV cabling, DC/AC isolators, fuses, breakers, surge protection (SPD) and grounding — the 'balance of system' that keeps everything safe and code-compliant.",
      "الكابلات والقواطع والمصاهر والحماية من الصواعق والتأريض — قطع صغيرة لكنها أساس سلامة النظام والبيت.",
    ),
    purpose: T(
      "Protect people, equipment and the home.",
      "حماية الناس والأجهزة والبيت.",
    ),
    adv: T(
      "Prevents fire/shock; required by code & insurers.",
      "تمنع الحرائق والصعق الكهربائي، وإلزامية في أي تركيب نظامي.",
    ),
    dis: T(
      "Easy to under-spec; must be installed by a pro.",
      "يجب أن يركّبها كهربائي محترف — ولا يصح التوفير فيها.",
    ),
    life: T("20–30 years", "20–30 سنة"),
    eff: T("—", "—"),
    price: T("$300–1,500", "300–1500 دولار"),
  },
];

/* 3 — PANELS */
const PANELS = {
  cards: [
    {
      img: "mono",
      h: T("Monocrystalline", "مونو (أحادي الكريستال)"),
      eff: "19–23%",
      cost: T("$$$", "$$$"),
      use: T(
        "Limited roof area, premium installs",
        "الأسطح الصغيرة والتركيبات عالية الجودة",
      ),
      note: T(
        "Single-crystal silicon; highest efficiency and best low-light/heat behaviour.",
        "أعلى الأنواع كفاءة وأفضلها في الحرارة والإضاءة الضعيفة — الخيار الأول لمعظم البيوت.",
      ),
    },
    {
      img: "poly",
      h: T("Polycrystalline", "بولي (متعدد الكريستال)"),
      eff: "15–18%",
      cost: T("$$", "$$"),
      use: T(
        "Budget builds with ample roof space",
        "الميزانيات المحدودة مع سطح واسع",
      ),
      note: T(
        "Multi-crystal silicon; cheaper but lower efficiency, the classic blue panel.",
        "اللوح الأزرق المعروف؛ أرخص لكن كفاءته أقل ويحتاج مساحة أكبر.",
      ),
    },
    {
      img: "thin",
      h: T("Thin-Film", "الأغشية الرقيقة"),
      eff: "10–13%",
      cost: T("$", "$"),
      use: T(
        "Large flat/commercial roofs, high heat",
        "الأسطح الكبيرة والمناطق شديدة الحرارة",
      ),
      note: T(
        "Flexible, lightweight, best temperature coefficient — but needs ~2× the area.",
        "خفيفة ومرنة وتتحمل الحرارة جيداً — لكنها تحتاج ضعف المساحة تقريباً.",
      ),
    },
    {
      img: "bifacial",
      h: T("Bifacial", "ثنائي الوجه"),
      eff: "19–22% (+5–25% rear)",
      cost: T("$$$", "$$$"),
      use: T(
        "Ground-mount, reflective/white roofs",
        "التركيب الأرضي والأسطح البيضاء",
      ),
      note: T(
        "Captures light on both faces; big gains over reflective ground or with trackers.",
        "يلتقط الضوء من وجهيه الأمامي والخلفي؛ إنتاج إضافي فوق الأسطح الفاتحة والأرضيات العاكسة.",
      ),
    },
  ],
  table: {
    head: [
      T("Type", "النوع"),
      T("Efficiency", "الكفاءة"),
      T("Temp. coeff.", "تأثير الحرارة"),
      T("Lifespan", "العمر"),
      T("Cost/W", "تكلفة الواط"),
      T("Area / kW", "المساحة لكل كيلوواط"),
    ],
    rows: [
      [
        T("Monocrystalline", "مونو (أحادي)"),
        "19–23%",
        T("−0.30%/°C", "−0.30% لكل درجة حرارة"),
        T("25–30 yr", "25–30 سنة"),
        T("$0.35–0.50", "0.35–0.50 دولار"),
        T("~5.5 m²", "≈5.5 متر مربع"),
      ],
      [
        T("Polycrystalline", "بولي (متعدد)"),
        "15–18%",
        T("−0.40%/°C", "−0.40% لكل درجة حرارة"),
        T("25 yr", "25 سنة"),
        T("$0.25–0.35", "0.25–0.35 دولار"),
        T("~6.5 m²", "≈6.5 متر مربع"),
      ],
      [
        T("Thin-Film", "أغشية رقيقة"),
        "10–13%",
        T("−0.20%/°C", "−0.20% لكل درجة حرارة"),
        T("10–20 yr", "10–20 سنة"),
        T("$0.20–0.30", "0.20–0.30 دولار"),
        T("~9–11 m²", "≈9–11 متر مربع"),
      ],
      [
        T("Bifacial", "ثنائي الوجه"),
        T("19–22% +bonus", "19–22% + زيادة"),
        T("−0.30%/°C", "−0.30% لكل درجة حرارة"),
        T("25–30 yr", "25–30 سنة"),
        T("$0.40–0.55", "0.40–0.55 دولار"),
        T("~5.5 m²", "≈5.5 متر مربع"),
      ],
    ],
  },
};

/* 4 — INVERTERS */
const INVERTERS = {
  cards: [
    {
      img: "inv_string",
      h: T("String Inverter", "انفرتر سلسلة (String)"),
      eff: "97–98.5%",
      pros: [
        T(
          "Lowest $/W, proven, easy service",
          "الأرخص والأكثر انتشاراً، وصيانته سهلة",
        ),
      ],
      cons: [
        T(
          "One shaded panel drags the whole string",
          "لوح واحد في الظل يقلل إنتاج كل المجموعة",
        ),
      ],
      use: T(
        "Unshaded roofs with a single orientation.",
        "الأسطح المكشوفة بدون ظل وباتجاه واحد.",
      ),
    },
    {
      img: "inv_micro",
      h: T("Microinverter", "مايكرو انفرتر"),
      eff: "95–97%",
      pros: [
        T(
          "Per-panel MPPT, shade-tolerant, safe AC",
          "كل لوح يعمل مستقلاً، ممتاز مع الظل، وأكثر أماناً",
        ),
      ],
      cons: [
        T(
          "Higher cost; many units on the roof",
          "أغلى، وعدد القطع على السطح كبير",
        ),
      ],
      use: T(
        "Complex/shaded roofs, multiple orientations.",
        "الأسطح المعقدة أو التي يصلها ظل.",
      ),
    },
    {
      img: "inv_hybrid",
      h: T("Hybrid Inverter", "انفرتر هجين"),
      eff: "96–98%",
      pros: [
        T(
          "Runs panels + battery + grid in one box",
          "يدير الألواح والبطارية والشبكة في جهاز واحد",
        ),
      ],
      cons: [
        T(
          "Pricier; battery voltage must match",
          "سعره أعلى، ويجب أن تناسبه البطارية",
        ),
      ],
      use: T(
        "New installs planning storage now or later.",
        "التركيبات الجديدة التي تخطط لبطارية الآن أو لاحقاً.",
      ),
    },
    {
      img: "inv_offgrid",
      h: T("Off-Grid Inverter", "انفرتر منفصل (أوف جريد)"),
      eff: "94–96%",
      pros: [
        T(
          "Runs with no grid at all; strong surge",
          "يعمل بدون شبكة نهائياً، ويتحمل أحمال بدء التشغيل العالية",
        ),
      ],
      cons: [
        T(
          "Needs big battery; no grid export",
          "يحتاج بطارية كبيرة، ولا يبيع الفائض للشبكة",
        ),
      ],
      use: T(
        "Remote homes, cabins, farms.",
        "البيوت البعيدة والمزارع والاستراحات.",
      ),
    },
  ],
};

/* 5 — BATTERIES */
const BATTERIES = {
  head: [
    T("Technology", "النوع"),
    T("Cycle life", "عدد دورات الشحن"),
    T("DoD", "نسبة الاستخدام الآمن"),
    T("Maintenance", "الصيانة"),
    T("Safety", "الأمان"),
  ],
  rows: [
    {
      img: "bat_lfp",
      c: [
        T("LiFePO4", "ليثيوم حديد (LiFePO4)"),
        "4,000–8,000",
        "90–100%",
        T("None", "لا تحتاج"),
        T(
          "Excellent — very stable chemistry",
          "ممتاز — أكثر الأنواع أماناً واستقراراً",
        ),
      ],
    },
    {
      img: "bat_liion",
      c: [
        T("Lithium-ion (NMC)", "ليثيوم أيون (NMC)"),
        "2,000–4,000",
        "80–90%",
        T("None", "لا تحتاج"),
        T(
          "Good — needs quality BMS & cooling",
          "جيد — يحتاج تبريداً ونظام حماية جيد",
        ),
      ],
    },
    {
      img: "bat_agm",
      c: [
        T("Lead-Acid AGM", "رصاص جاف (AGM)"),
        "500–1,200",
        "50%",
        T("Low", "قليلة"),
        T(
          "Safe, sealed, but heavy & short-lived",
          "آمن ومغلق، لكنه ثقيل وعمره قصير",
        ),
      ],
    },
    {
      img: "bat_gel",
      c: [
        T("Gel", "رصاص جل (Gel)"),
        "600–1,500",
        "50–60%",
        T("Low", "قليلة"),
        T(
          "Safe; tolerates heat better than AGM",
          "آمن، ويتحمل الحرارة أفضل من AGM",
        ),
      ],
    },
  ],
  note: T(
    "LiFePO4 dominates new residential storage: longest cycle life, deepest usable capacity, and the safest chemistry. Lead-acid only makes sense for very low budgets or rarely-cycled backup.",
    "بطاريات ليثيوم LiFePO4 هي الخيار الأفضل اليوم للبيوت: أطول عمراً، تستفيد من كامل سعتها تقريباً، وأكثرها أماناً. بطاريات الرصاص لا ننصح بها إلا لميزانية ضيقة جداً أو استخدام نادر.",
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
            "الأعلى كفاءة والأقوى تحمّلاً في السوق.",
          ),
        },
        {
          n: "LONGi",
          spec: T("Hi-MO 6/7 · 22–23%", "Hi-MO 6/7 · 22–23%"),
          why: T(
            "World's largest maker; excellent value.",
            "أكبر مصنّع ألواح في العالم، وسعره ممتاز مقابل جودته.",
          ),
        },
        {
          n: "JinkoSolar",
          spec: T("Tiger Neo N-type · 22.5%", "Tiger Neo N-type · 22.5%"),
          why: T(
            "Reliable tier-1 at fair pricing.",
            "ماركة موثوقة من الصف الأول وبسعر عادل.",
          ),
        },
        {
          n: "Trina Solar",
          spec: T("Vertex S+ · 21–22%", "Vertex S+ · 21–22%"),
          why: T(
            "Strong warranties, wide availability.",
            "ضمانات قوية ومتوفرة في كل مكان.",
          ),
        },
        {
          n: "Canadian Solar",
          spec: T("TOPHiKu6 · 22%", "TOPHiKu6 · 22%"),
          why: T(
            "Bankable, great price-to-performance.",
            "شركة عريقة وسعر ممتاز مقابل الأداء.",
          ),
        },
      ],
    },
    {
      cat: T("Inverters", "الانفرترات"),
      items: [
        {
          n: "Huawei",
          spec: T("FusionSolar · 98.6%", "FusionSolar · 98.6%"),
          why: T(
            "Smart, efficient, arc-fault safety.",
            "ذكي وعالي الكفاءة، مع حماية من الشرر الكهربائي.",
          ),
        },
        {
          n: "SMA",
          spec: T("Sunny Boy/Tripower · 98%", "Sunny Boy/Tripower · 98%"),
          why: T(
            "German engineering, legendary reliability.",
            "صناعة ألمانية وموثوقية لا يُعلى عليها.",
          ),
        },
        {
          n: "Fronius",
          spec: T("Symo/Gen24 · 98%", "Symo/Gen24 · 98%"),
          why: T(
            "Premium build, excellent support.",
            "تصنيع ممتاز ودعم فني رائع.",
          ),
        },
        {
          n: "SolarEdge",
          spec: T("HD-Wave + optimizers · 99%", "HD-Wave + محسّنات · 99%"),
          why: T(
            "Per-panel optimization & monitoring.",
            "يحسّن ويراقب كل لوح على حدة.",
          ),
        },
        {
          n: "Growatt",
          spec: T("MIN/MOD hybrid · 98%", "MIN/MOD هجين · 98%"),
          why: T(
            "Best budget hybrid for storage.",
            "أفضل انفرتر هجين اقتصادي مع البطاريات.",
          ),
        },
      ],
    },
    {
      cat: T("Batteries", "البطاريات"),
      items: [
        {
          n: "Tesla Powerwall 3",
          spec: T(
            "13.5 kWh · built-in inverter",
            "13.5 كيلوواط ساعة · انفرتر مدمج",
          ),
          why: T(
            "Seamless backup, polished app.",
            "تحويل تلقائي فوري عند انقطاع الكهرباء، وتطبيق ممتاز.",
          ),
        },
        {
          n: "BYD Battery-Box",
          spec: T("Modular 5–22 kWh · LFP", "وحدات 5–22 كيلوواط ساعة · LFP"),
          why: T(
            "Scalable, high quality LFP.",
            "تتوسع حسب حاجتك، وجودتها عالية.",
          ),
        },
        {
          n: "Pylontech",
          spec: T("US/Force series · LFP", "سلسلة US/Force · LFP"),
          why: T(
            "Reliable, affordable, wide support.",
            "موثوقة وسعرها مناسب ومنتشرة في كل مكان.",
          ),
        },
        {
          n: "LG Energy Solution",
          spec: T("RESU · 9.6–16 kWh", "RESU · 9.6–16 كيلوواط ساعة"),
          why: T(
            "Compact, proven home storage.",
            "حجم صغير وتقنية مجرّبة في آلاف البيوت.",
          ),
        },
        {
          n: "Enphase IQ Battery",
          spec: T("5P · microinverter-based", "5P · بتقنية المايكرو انفرتر"),
          why: T(
            "Modular AC-coupled, very safe.",
            "وحدات قابلة للتوسع وآمنة جداً.",
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
    kw: T("3 kW", "3 كيلوواط"),
    img: "sys3",
    comp: T(
      "8× 380 W panels · 3 kW string inverter · optional 5 kWh LFP",
      "8 ألواح 380 واط · انفرتر 3 كيلوواط · بطارية 5 كيلوواط ساعة (اختيارية)",
    ),
    prod: T("12–15 kWh/day", "12–15 كيلوواط ساعة يومياً"),
  },
  {
    tier: T("Medium Home", "منزل متوسط"),
    kw: T("5 kW", "5 كيلوواط"),
    img: "sys5",
    comp: T(
      "13× 400 W panels · 5 kW hybrid inverter · 10 kWh LFP",
      "13 لوحاً 400 واط · انفرتر هجين 5 كيلوواط · بطارية 10 كيلوواط ساعة",
    ),
    prod: T("20–25 kWh/day", "20–25 كيلوواط ساعة يومياً"),
  },
  {
    tier: T("Large Home", "منزل كبير"),
    kw: T("10 kW", "10 كيلوواط"),
    img: "sys10",
    comp: T(
      "25× 400 W panels · 10 kW hybrid · 15–20 kWh LFP",
      "25 لوحاً 400 واط · انفرتر هجين 10 كيلوواط · بطارية 15–20 كيلوواط ساعة",
    ),
    prod: T("40–50 kWh/day", "40–50 كيلوواط ساعة يومياً"),
  },
  {
    tier: T("Luxury Villa", "فيلا فاخرة"),
    kw: T("20 kW+", "20 كيلوواط وأكثر"),
    img: "sys20",
    comp: T(
      "50× 450 W panels · 2× 10 kW hybrids · 30–40 kWh LFP · EV charger",
      "50 لوحاً 450 واط · انفرتران هجينان 10 كيلوواط · بطاريات 30–40 كيلوواط ساعة · شاحن سيارة",
    ),
    prod: T("80–110 kWh/day", "80–110 كيلوواط ساعة يومياً"),
  },
];

/* 8 — AC SIZING */
const AC = {
  head: [
    T("AC unit", "حجم المكيف"),
    T("Approx. load", "استهلاكه تقريباً"),
    T("Panels", "عدد الألواح"),
    T("Inverter", "الانفرتر"),
    T("Battery (4h)", "البطارية (4 ساعات)"),
  ],
  rows: [
    [T("1 Ton", "1 طن"), T("~1.2 kW", "≈1.2 كيلوواط"), T("4–5 × 400 W", "4–5 ألواح 400 واط"), T("2 kW", "2 كيلوواط"), T("~6 kWh", "≈6 كيلوواط ساعة")],
    [T("1.5 Ton", "1.5 طن"), T("~1.8 kW", "≈1.8 كيلوواط"), T("6–7 × 400 W", "6–7 ألواح 400 واط"), T("3 kW", "3 كيلوواط"), T("~9 kWh", "≈9 كيلوواط ساعة")],
    [T("2 Ton", "2 طن"), T("~2.4 kW", "≈2.4 كيلوواط"), T("8–9 × 400 W", "8–9 ألواح 400 واط"), T("3.6 kW", "3.6 كيلوواط"), T("~12 kWh", "≈12 كيلوواط ساعة")],
    [
      T("3× 1.5 Ton", "3 × 1.5 طن"),
      T("~5.4 kW", "≈5.4 كيلوواط"),
      T("18–20 × 400 W", "18–20 لوحاً 400 واط"),
      T("8 kW", "8 كيلوواط"),
      T("~28 kWh", "≈28 كيلوواط ساعة"),
    ],
  ],
  note: T(
    "Assumes inverter (DC) AC units and ~5 peak-sun-hours. Inrush current means the inverter must be sized above the running load; non-inverter compressors need ~2–3× headroom.",
    "الأرقام لمكيفات إنفرتر وبافتراض 5 ساعات شمس قوية يومياً. المكيف يسحب تياراً عالياً لحظة بدء التشغيل، لذلك يجب أن يكون الانفرتر أكبر من استهلاك التشغيل العادي — والمكيفات العادية (غير الإنفرتر) تحتاج ضعفين إلى ثلاثة أضعاف.",
  ),
};

/* 9 — ADVANCED */
const ADVANCED = [
  {
    i: "🧠",
    h: T("Smart Energy Management", "إدارة الطاقة الذكية"),
    p: T(
      "Automated load scheduling runs heavy appliances when the sun is strongest.",
      "جدولة آلية تشغّل الأجهزة الثقيلة (الغسالة، السخان...) وقت ذروة الشمس لتستفيد من إنتاجك بأقصى حد.",
    ),
  },
  {
    i: "📈",
    h: T("AI Energy Monitoring", "مراقبة بالذكاء الاصطناعي"),
    p: T(
      "Models forecast production & consumption and flag faults before they cost you.",
      "أنظمة ذكية تتوقع إنتاجك واستهلاكك وتكتشف الأعطال مبكراً قبل أن تكلفك خسائر.",
    ),
  },
  {
    i: "🔋",
    h: T("Hybrid Solar Systems", "الأنظمة الهجينة"),
    p: T(
      "Grid + battery + solar together — self-consume by day, back up by night.",
      "شمس + بطارية + شبكة معاً — تستهلك من الشمس نهاراً ومن البطارية ليلاً.",
    ),
  },
  {
    i: "🔌",
    h: T("Grid-Tied Systems", "الأنظمة المرتبطة بالشبكة"),
    p: T(
      "Export surplus for credits (net metering); lowest cost, no backup alone.",
      "تبيع الفائض للشبكة ويُخصم من فاتورتك (Net Metering)؛ الأقل تكلفة، لكنها وحدها لا تعطيك كهرباء عند الانقطاع.",
    ),
  },
  {
    i: "🏝️",
    h: T("Off-Grid Systems", "الأنظمة المنفصلة"),
    p: T(
      "Full independence with large storage; ideal where no grid exists.",
      "استقلال كامل عن الشبكة ببطاريات كبيرة؛ مثالية للمناطق التي لا تصلها الكهرباء.",
    ),
  },
  {
    i: "🚗",
    h: T("EV Charging Integration", "شحن السيارات الكهربائية"),
    p: T(
      "Solar-aware chargers top up your car from surplus PV automatically.",
      "شواحن ذكية تشحن سيارتك تلقائياً من فائض الشمس بدل بيعه رخيصاً.",
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
        "قياس المساحة الصالحة على السطح، وقوة تحمّله، والظل على مدار اليوم، وسعة لوحة الكهرباء.",
      ),
    },
    {
      h: T("Roof orientation", "اتجاه السطح"),
      p: T(
        "True south (north hemisphere) is ideal; east–west splits production across the day.",
        "الاتجاه نحو الجنوب هو الأفضل؛ وتوزيع الألواح شرق–غرب يمدد الإنتاج على ساعات اليوم.",
      ),
    },
    {
      h: T("Tilt optimization", "زاوية الميل"),
      p: T(
        "Set tilt ≈ your latitude for an annual optimum; steeper favours winter, flatter favours summer.",
        "اجعل ميل الألواح قريباً من خط عرض مدينتك لأفضل إنتاج طوال السنة؛ ميل أكبر يفيد الشتاء، وميل أقل يفيد الصيف.",
      ),
    },
    {
      h: T("Wiring layout", "تمديد الأسلاك"),
      p: T(
        "Keep string voltages within inverter limits; minimize DC run length; label everything.",
        "أبقِ جهد الألواح ضمن حدود الانفرتر، وقصّر مسارات الكابلات قدر الإمكان، وضع ملصقاً يوضح كل سلك.",
      ),
    },
    {
      h: T("Safety requirements", "متطلبات الأمان"),
      p: T(
        "Rapid shutdown, DC/AC isolators, surge protection, proper grounding, and permits/inspection.",
        "قاطع إيقاف سريع، عوازل، حماية من الصواعق، تأريض سليم، وتصاريح وفحص رسمي.",
      ),
    },
  ],
  maint: [
    {
      h: T("Cleaning schedule", "تنظيف الألواح"),
      p: T(
        "Rinse panels 2–4×/year (monthly in dusty climates); avoid abrasive tools.",
        "اغسل الألواح بالماء 2–4 مرات في السنة (وشهرياً في المناطق المغبرة)، وتجنب أي أداة تخدش الزجاج.",
      ),
    },
    {
      h: T("Inspection checklist", "الفحص الدوري"),
      p: T(
        "Annually check connectors, mounts, inverter logs, battery terminals and isolators.",
        "افحص مرة في السنة: الوصلات، والقواعد، وسجل الانفرتر، وأطراف البطارية.",
      ),
    },
    {
      h: T("Performance monitoring", "متابعة الأداء"),
      p: T(
        "Watch the app for kWh drops vs weather; a sustained dip means a fault to investigate.",
        "تابع التطبيق: إذا انخفض الإنتاج باستمرار رغم صفاء الجو، فهناك عطل يحتاج فحصاً.",
      ),
    },
  ],
};

/* 12 — FINANCE */
const FINANCE = {
  head: [
    T("System", "النظام"),
    T("Install cost", "تكلفة التركيب"),
    T("Annual saving", "التوفير في السنة"),
    T("Payback", "استرداد التكلفة"),
    T("25-yr saving", "التوفير في 25 سنة"),
  ],
  rows: [
    [T("3 kW", "3 كيلوواط"), T("$4,500–6,000", "4,500–6,000 دولار"), T("$650–900", "650–900 دولار"), T("5–7 yr", "5–7 سنوات"), T("$18,000–24,000", "18–24 ألف دولار")],
    [T("5 kW", "5 كيلوواط"), T("$7,000–10,000", "7,000–10,000 دولار"), T("$1,100–1,500", "1,100–1,500 دولار"), T("5–7 yr", "5–7 سنوات"), T("$30,000–42,000", "30–42 ألف دولار")],
    [T("10 kW", "10 كيلوواط"), T("$13,000–18,000", "13,000–18,000 دولار"), T("$2,200–3,000", "2,200–3,000 دولار"), T("5–6 yr", "5–6 سنوات"), T("$60,000–85,000", "60–85 ألف دولار")],
    [T("20 kW+", "20 كيلوواط+"), T("$26,000–40,000", "26,000–40,000 دولار"), T("$4,500–6,500", "4,500–6,500 دولار"), T("4–6 yr", "4–6 سنوات"), T("$120,000–180,000", "120–180 ألف دولار")],
  ],
  note: T(
    "Figures exclude incentives/net-metering, which often cut payback by 1–3 years. Battery storage adds cost and resilience but lengthens payback.",
    "الأرقام بدون دعم حكومي أو بيع للفائض — وهذه عادة تقصّر فترة الاسترداد سنة إلى ثلاث سنوات. إضافة البطاريات ترفع التكلفة وتعطيك أماناً أكثر، لكنها تطيل فترة الاسترداد.",
  ),
};

/* 15 — FINAL RANKING */
const RANK = [
  {
    t: "01",
    h: T("Budget", "اقتصادي"),
    p: T(
      "3 kW poly grid-tied · Growatt string inverter · no battery",
      "3 كيلوواط بولي مرتبط بالشبكة · انفرتر Growatt · بدون بطارية",
    ),
    price: "$4.5–6k",
  },
  {
    t: "02",
    h: T("Mid-Range", "متوسط"),
    p: T(
      "5 kW mono hybrid · Growatt/Huawei · 10 kWh Pylontech LFP",
      "5 كيلوواط مونو هجين · Growatt/Huawei · بطارية Pylontech 10 كيلوواط ساعة",
    ),
    price: "$9–13k",
  },
  {
    t: "03",
    h: T("Professional", "احترافي"),
    p: T(
      "10 kW mono · SolarEdge + optimizers · 15 kWh BYD · full monitoring",
      "10 كيلوواط مونو · SolarEdge مع محسّنات · بطارية BYD 15 كيلوواط ساعة · مراقبة كاملة",
    ),
    price: "$16–22k",
  },
  {
    t: "04",
    h: T("Enterprise", "متكامل"),
    p: T(
      "15 kW LONGi · SMA/Fronius · 24 kWh LFP · EV charging",
      "15 كيلوواط LONGi · انفرتر SMA/Fronius · بطاريات 24 كيلوواط ساعة · شاحن سيارة",
    ),
    price: "$28–38k",
  },
  {
    t: "05",
    h: T("Ultimate High-End", "الأفخم"),
    p: T(
      "20 kW+ SunPower Maxeon · dual Tesla Powerwall 3 · AI management · EV + backup",
      "20 كيلوواط+ SunPower Maxeon · بطاريتا Tesla Powerwall 3 · إدارة ذكية · شاحن سيارة + احتياطي كامل",
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
