/* SolarCore renderer + interactivity */
(() => {
  let lang = localStorage.getItem("sc_lang") || "ar";
  let theme = localStorage.getItem("sc_theme") || "dark";
  const tr = (o) => (o && typeof o === "object" && "en" in o ? o[lang] : o);
  const U = DATA.UI;

  /* ---------- SVG illustration library (crisp vector "HD" art) ---------- */
  const G = `<defs><linearGradient id="gold" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stop-color="#ffd45e"/><stop offset="1" stop-color="#ff7a00"/></linearGradient>
    <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#1a2342"/><stop offset="1" stop-color="#0d1426"/></linearGradient>
    <linearGradient id="cell" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stop-color="#1e3a8a"/><stop offset="1" stop-color="#0e1d4d"/></linearGradient></defs>`;
  const svg = (inner, vb = "0 0 320 150") =>
    `<svg class="thumb" viewBox="${vb}" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">${G}<rect width="100%" height="100%" fill="url(#sky)"/>${inner}</svg>`;

  const ART = {
    panel: () =>
      svg(
        `<g transform="translate(60 28)">${[0, 1, 2].map((r) => [0, 1, 2, 3].map((c) => `<rect x="${c * 48}" y="${r * 30}" width="44" height="26" rx="2" fill="url(#cell)" stroke="#3b82f6" stroke-width="0.6"/>`).join("")).join("")}</g><circle cx="265" cy="34" r="20" fill="url(#gold)" opacity="0.9"/>`,
      ),
    inverter: () =>
      svg(
        `<rect x="110" y="30" width="100" height="92" rx="10" fill="#182242" stroke="url(#gold)" stroke-width="2"/><rect x="124" y="44" width="72" height="30" rx="4" fill="#0d1426"/><text x="160" y="64" fill="#2dd4bf" font-size="13" font-family="monospace" text-anchor="middle">98%</text><circle cx="138" cy="100" r="5" fill="#34d399"/><circle cx="160" cy="100" r="5" fill="#ffb020"/><rect x="178" y="95" width="20" height="10" rx="2" fill="#2dd4bf"/>`,
      ),
    battery: () =>
      svg(
        `<rect x="120" y="34" width="80" height="86" rx="8" fill="#182242" stroke="url(#gold)" stroke-width="2"/><rect x="148" y="26" width="24" height="10" rx="3" fill="url(#gold)"/>${[0, 1, 2, 3].map((i) => `<rect x="130" y="${104 - i * 18}" width="60" height="12" rx="2" fill="${i < 3 ? "#34d399" : "#1f2b4d"}"/>`).join("")}`,
      ),
    controller: () =>
      svg(
        `<rect x="116" y="34" width="88" height="82" rx="8" fill="#182242" stroke="url(#gold)" stroke-width="2"/><path d="M130 96 L150 60 L162 80 L182 50" stroke="#2dd4bf" stroke-width="3" fill="none"/><circle cx="182" cy="50" r="4" fill="#ffb020"/><text x="160" y="110" fill="#93a0c2" font-size="9" font-family="monospace" text-anchor="middle">MPPT</text>`,
      ),
    mount: () =>
      svg(
        `<rect x="70" y="40" width="180" height="14" rx="3" fill="url(#gold)" transform="rotate(-12 160 47)"/><line x1="100" y1="60" x2="100" y2="120" stroke="#5f6b8a" stroke-width="5"/><line x1="220" y1="48" x2="220" y2="120" stroke="#5f6b8a" stroke-width="5"/><line x1="70" y1="120" x2="250" y2="120" stroke="#5f6b8a" stroke-width="4"/>`,
      ),
    monitor: () =>
      svg(
        `<rect x="108" y="34" width="104" height="70" rx="6" fill="#182242" stroke="url(#gold)" stroke-width="2"/><path d="M120 88 L138 70 L152 80 L168 56 L186 66 L200 48" stroke="#2dd4bf" stroke-width="2.5" fill="none"/><rect x="146" y="104" width="28" height="14" fill="#5f6b8a"/><rect x="128" y="118" width="64" height="6" rx="3" fill="#5f6b8a"/>`,
      ),
    wiring: () =>
      svg(
        `<path d="M70 110 C120 30 200 30 250 110" stroke="#ff7a00" stroke-width="4" fill="none"/><path d="M70 122 C120 50 200 50 250 122" stroke="#2dd4bf" stroke-width="4" fill="none"/><circle cx="70" cy="110" r="6" fill="url(#gold)"/><circle cx="250" cy="110" r="6" fill="url(#gold)"/><rect x="150" y="60" width="20" height="20" rx="3" fill="#fb7185"/>`,
      ),
    mono: () =>
      svg(
        `<g transform="translate(70 30)">${[0, 1, 2].map((r) => [0, 1, 2, 3].map((c) => `<rect x="${c * 46}" y="${r * 30}" width="42" height="26" rx="3" fill="#0b1b3a" stroke="#1e3a8a"/><circle cx="${c * 46 + 21}" cy="${r * 30 + 13}" r="3" fill="#3b82f6" opacity="0.5"/>`).join("")).join("")}</g>`,
      ),
    poly: () =>
      svg(
        `<g transform="translate(70 30)">${[0, 1, 2].map((r) => [0, 1, 2, 3].map((c) => `<rect x="${c * 46}" y="${r * 30}" width="42" height="26" rx="2" fill="#1e3a8a" stroke="#2563eb"/>`).join("")).join("")}</g>`,
      ),
    thin: () =>
      svg(
        `<rect x="60" y="40" width="200" height="70" rx="4" fill="#3a2a1a" stroke="url(#gold)"/><line x1="60" y1="62" x2="260" y2="62" stroke="#5b4632"/><line x1="60" y1="84" x2="260" y2="84" stroke="#5b4632"/>`,
      ),
    bifacial: () =>
      svg(
        `<g transform="translate(70 26)">${[0, 1].map((r) => [0, 1, 2, 3].map((c) => `<rect x="${c * 46}" y="${r * 30}" width="42" height="26" rx="2" fill="url(#cell)" stroke="#3b82f6"/>`).join("")).join("")}</g><path d="M80 96 L240 96" stroke="url(#gold)" stroke-width="2" stroke-dasharray="4 4"/><text x="160" y="118" fill="#ffb020" font-size="10" text-anchor="middle" font-family="monospace">↑↓ dual-face</text>`,
      ),
    inv_string: () =>
      svg(
        `<rect x="130" y="32" width="60" height="90" rx="8" fill="#182242" stroke="url(#gold)" stroke-width="2"/><line x1="160" y1="20" x2="160" y2="32" stroke="#2dd4bf" stroke-width="3"/><circle cx="160" cy="70" r="14" fill="none" stroke="#2dd4bf" stroke-width="2"/><text x="160" y="74" fill="#2dd4bf" font-size="9" text-anchor="middle" font-family="monospace">~</text>`,
      ),
    inv_micro: () =>
      svg(
        `${[0, 1, 2].map((i) => `<rect x="${80 + i * 60}" y="50" width="44" height="44" rx="6" fill="#182242" stroke="url(#gold)" stroke-width="1.5"/><circle cx="${102 + i * 60}" cy="72" r="8" fill="none" stroke="#2dd4bf" stroke-width="2"/>`).join("")}`,
      ),
    inv_hybrid: () =>
      svg(
        `<rect x="120" y="30" width="80" height="94" rx="8" fill="#182242" stroke="url(#gold)" stroke-width="2"/><circle cx="142" cy="56" r="6" fill="#ffb020"/><circle cx="178" cy="56" r="6" fill="#34d399"/><circle cx="160" cy="90" r="6" fill="#2dd4bf"/><text x="160" y="118" fill="#93a0c2" font-size="8" text-anchor="middle" font-family="monospace">PV+BAT+GRID</text>`,
      ),
    inv_offgrid: () =>
      svg(
        `<rect x="120" y="32" width="80" height="90" rx="8" fill="#182242" stroke="url(#gold)" stroke-width="2"/><path d="M150 96 L160 60 L168 78 L178 54" stroke="#34d399" stroke-width="3" fill="none"/><text x="160" y="116" fill="#93a0c2" font-size="8" text-anchor="middle" font-family="monospace">NO GRID</text>`,
      ),
    bat_lfp: () => ART.battery(),
    bat_liion: () => ART.battery(),
    bat_agm: () => ART.battery(),
    bat_gel: () => ART.battery(),
    sys3: () => ART.panel(),
    sys5: () => ART.panel(),
    sys10: () => ART.panel(),
    sys20: () => ART.panel(),
  };
  const art = (k) => (ART[k] ? ART[k]() : ART.panel());

  /* ---------- section helpers ---------- */
  const head = (num, title, lead) =>
    `<div class="sec-head reveal"><div class="sec-num">${tr(num)}</div><h2>${tr(title)}</h2>${lead ? `<p>${tr(lead)}</p>` : ""}</div>`;

  function S(id, inner) {
    return `<section class="section" id="${id}">${inner}</section>`;
  }

  /* 1 Intro */
  const secIntro = () =>
    S(
      "intro",
      head(U.nav_intro_n || T2("01"), DATA.INTRO.title, DATA.INTRO.lead) +
        `<div class="grid g2">${DATA.INTRO.blocks
          .map(
            (b, i) =>
              `<div class="card reveal" data-d="${(i % 2) + 1}"><h3>${tr(b.h)}</h3><p>${tr(b.p)}</p></div>`,
          )
          .join("")}</div>`,
    );

  /* TUTORIAL — animated energy flow (answers the "how does it work" ask) */
  const secFlow = () =>
    S(
      "howitworks",
      head(
        T2("·"),
        T("How It Works — Sun → Storage", "كيف يعمل — من الشمس إلى التخزين"),
        T(
          "Follow one watt from sunlight to the wall socket: capture, regulate, convert, store, deliver.",
          "تابع واطاً واحداً من ضوء الشمس إلى المقبس: التقاط، تنظيم، تحويل، تخزين، توصيل.",
        ),
      ) +
        `<div class="diagram reveal">
      <svg class="flow-svg" viewBox="0 0 920 240" xmlns="http://www.w3.org/2000/svg">${G}
        <circle cx="70" cy="60" r="34" fill="url(#gold)"><animate attributeName="r" values="34;37;34" dur="3s" repeatCount="indefinite"/></circle>
        ${[...Array(8)].map((_, i) => `<line x1="70" y1="60" x2="${70 + 44 * Math.cos(i * 0.785)}" y2="${60 + 44 * Math.sin(i * 0.785)}" stroke="#ffd45e" stroke-width="2" opacity="0.7"/>`).join("")}
        ${flowNode(150, 120, "☀→⚡", T("Panels", "الألواح"), "DC")}
        ${flowArrow(250, 150)}
        ${flowNode(300, 120, "⛰", T("Controller / MPPT", "المنظّم / MPPT"), "DC")}
        ${flowArrow(400, 150)}
        ${flowNode(450, 120, "🔋", T("Battery bank", "بنك البطاريات"), T("store", "تخزين"))}
        ${flowArrow(550, 150)}
        ${flowNode(600, 120, "🔌", T("Inverter", "العاكس"), "AC")}
        ${flowArrow(700, 150)}
        ${flowNode(750, 120, "🏠", T("Home / Grid", "المنزل / الشبكة"), "230V")}
        <circle r="5" fill="#ffb020"><animateMotion dur="4s" repeatCount="indefinite" path="M150 150 L300 150 L450 150 L600 150 L750 150"/></circle>
      </svg>
    </div>
    <div class="swipe-hint">${tr(T("← swipe the diagram →", "← اسحب المخطط →"))}</div>
    <div class="grid g3" style="margin-top:22px">${[
      [
        T("1 · Capture", "1 · الالتقاط"),
        T(
          "Sunlight hits the PV cells and frees electrons, producing low-voltage DC electricity that rises with sunlight intensity.",
          "يضرب الضوء الخلايا فيحرّر الإلكترونات منتجاً تياراً مستمراً منخفض الجهد يزداد مع شدة الإشعاع.",
        ),
      ],
      [
        T("2 · Regulate", "2 · التنظيم"),
        T(
          "An MPPT charge controller (or the hybrid inverter's MPPT) tracks the panels' optimal voltage and feeds the battery a safe, high-efficiency charge.",
          "يتتبّع منظّم MPPT (أو MPPT داخل العاكس الهجين) جهد الألواح الأمثل ويغذّي البطارية شحناً آمناً عالي الكفاءة.",
        ),
      ],
      [
        T("3 · Store at high voltage", "3 · التخزين بجهد عالٍ"),
        T(
          "Modern home batteries stack cells into a high-voltage (≈48–400 V) DC bank — higher voltage means lower current, thinner cables and less loss.",
          "تكدّس بطاريات المنازل الحديثة الخلايا في بنك DC عالي الجهد (≈48–400 فولت) — الجهد الأعلى يعني تياراً أقل وكابلات أنحف وفقداً أقل.",
        ),
      ],
      [
        T("4 · Convert", "4 · التحويل"),
        T(
          "The inverter turns stored/solar DC into clean 230 V (or 120 V) AC sine-wave power the home's appliances actually use.",
          "يحوّل العاكس التيار المستمر المخزَّن/الشمسي إلى تيار متردد جيبي نظيف 230 فولت (أو 120) تستخدمه أجهزة المنزل فعلياً.",
        ),
      ],
      [
        T("5 · Deliver & export", "5 · التوصيل والتصدير"),
        T(
          "AC power flows to your loads first; any surplus charges the battery or exports to the grid for credit.",
          "يتدفّق التيار المتردد إلى أحمالك أولاً؛ وأي فائض يشحن البطارية أو يُصدَّر للشبكة مقابل رصيد.",
        ),
      ],
      [
        T("6 · At night", "6 · ليلاً"),
        T(
          "When the sun is gone the inverter pulls from the battery (then the grid) so the home runs seamlessly 24/7.",
          "عند غياب الشمس يسحب العاكس من البطارية (ثم الشبكة) ليعمل المنزل بسلاسة على مدار الساعة.",
        ),
      ],
    ]
      .map(
        (s, i) =>
          `<div class="card reveal" data-d="${(i % 3) + 1}"><h3>${tr(s[0])}</h3><p>${tr(s[1])}</p></div>`,
      )
      .join("")}</div>`,
    );

  function flowNode(x, y, icon, label, tag) {
    return `<g><rect x="${x - 44}" y="${y - 34}" width="88" height="68" rx="10" fill="#182242" stroke="url(#gold)" stroke-width="1.5"/>
      <text x="${x}" y="${y - 4}" font-size="22" text-anchor="middle">${icon}</text>
      <text x="${x}" y="${y + 20}" font-size="9" fill="#eaf0ff" text-anchor="middle" font-family="monospace">${tr(label)}</text>
      <text x="${x}" y="${y - 44}" font-size="9" fill="#2dd4bf" text-anchor="middle" font-family="monospace">${tr(tag)}</text></g>`;
  }
  function flowArrow(x, y) {
    return `<path d="M${x - 44} ${y} L${x + 4} ${y}" stroke="#ffb020" stroke-width="2"/><path d="M${x} ${y - 5} L${x + 8} ${y} L${x} ${y + 5}" fill="#ffb020"/>`;
  }

  /* 2 Components */
  const compCard = (
    c,
    i,
  ) => `<div class="card reveal" data-d="${(i % 4) + 1}">${art(c.img)}
    <h3>${tr(c.h)}</h3><div class="role">${tr(c.role)}</div><p>${tr(c.desc)}</p>
    <ul class="specs">
      <li><span>${tr(U.purpose)}</span><span>${tr(c.purpose)}</span></li>
      <li><span>${tr(U.advantages)}</span><span>${tr(c.adv)}</span></li>
      <li><span>${tr(U.disadvantages)}</span><span>${tr(c.dis)}</span></li>
      <li><span>${tr(U.lifespan)}</span><span>${tr(c.life)}</span></li>
      <li><span>${tr(U.efficiency)}</span><span>${tr(c.eff)}</span></li>
      <li><span>${tr(U.price)}</span><span>${tr(c.price)}</span></li>
    </ul></div>`;
  const secComponents = () =>
    S(
      "components",
      head(
        T2("02"),
        T("Solar System Components", "مكوّنات النظام الشمسي"),
        T(
          "The seven building blocks of every residential installation.",
          "اللبنات السبع لكل تركيب منزلي.",
        ),
      ) +
        `<div class="grid g3">${DATA.COMPONENTS.map(compCard).join("")}</div>`,
    );

  /* 3 Panels */
  const secPanels = () =>
    S(
      "panels",
      head(T2("03"), T("Solar Panel Comparison", "مقارنة الألواح الشمسية")) +
        `<div class="grid g4">${DATA.PANELS.cards
          .map(
            (
              c,
              i,
            ) => `<div class="card reveal" data-d="${(i % 4) + 1}">${art(c.img)}
      <h3>${tr(c.h)}</h3><div class="role">${tr(U.efficiency)}: ${c.eff} · ${tr(c.cost)}</div>
      <p>${tr(c.note)}</p><div class="badge gold">${tr(U.best_use)}: ${tr(c.use)}</div></div>`,
          )
          .join("")}</div>` +
        table(DATA.PANELS.table.head, DATA.PANELS.table.rows),
    );

  /* 4 Inverters */
  const secInverters = () =>
    S(
      "inverters",
      head(T2("04"), T("Inverter Comparison", "مقارنة العاكسات")) +
        `<div class="grid g4">${DATA.INVERTERS.cards
          .map(
            (
              c,
              i,
            ) => `<div class="card reveal" data-d="${(i % 4) + 1}">${art(c.img)}
      <h3>${tr(c.h)}</h3><div class="role">${tr(U.efficiency)}: ${c.eff}</div>
      <div class="pros-cons"><div><div class="pc-head g">${tr(U.pros)}</div><ul class="pros">${c.pros.map((p) => `<li>${tr(p)}</li>`).join("")}</ul></div>
      <div><div class="pc-head b">${tr(U.cons)}</div><ul class="cons">${c.cons.map((p) => `<li>${tr(p)}</li>`).join("")}</ul></div></div>
      <div class="badge teal" style="margin-top:10px">${tr(U.recommended)}: ${tr(c.use)}</div></div>`,
          )
          .join("")}</div>`,
    );

  /* 5 Batteries */
  const secBatteries = () =>
    S(
      "batteries",
      head(T2("05"), T("Battery Technologies", "تقنيات البطاريات")) +
        table(
          DATA.BATTERIES.head.map((h) => tr(h)),
          DATA.BATTERIES.rows.map((r) => r.c.map((x) => tr(x))),
        ) +
        `<p class="prose" style="margin-top:18px">${tr(DATA.BATTERIES.note)}</p>`,
    );

  /* 6 Brands */
  const secBrands = () =>
    S(
      "brands",
      head(T2("06"), T("Recommended Equipment Brands", "العلامات الموصى بها")) +
        DATA.BRANDS.groups
          .map(
            (
              g,
            ) => `<h3 class="reveal" style="margin:24px 0 14px;color:var(--amber)">${tr(g.cat)}</h3>
      <div class="grid g3">${g.items
        .map(
          (it, i) => `<div class="card reveal" data-d="${(i % 3) + 1}">
        <h3>${it.n}</h3><div class="role">${tr(it.spec)}</div>
        <p><b>${tr(U.why)}:</b> ${tr(it.why)}</p></div>`,
        )
        .join("")}</div>`,
          )
          .join(""),
    );

  /* 7 Sizes */
  const secSizes = () =>
    S(
      "sizing",
      head(T2("07"), T("System Size Examples", "أمثلة على أحجام الأنظمة")) +
        `<div class="grid g4">${DATA.SIZES.map(
          (
            s,
            i,
          ) => `<div class="card reveal" data-d="${(i % 4) + 1}">${art(s.img)}
      <h3>${tr(s.tier)}</h3><div class="role">${s.kw}</div>
      <ul class="specs"><li><span>${tr(U.components_list)}</span><span>${tr(s.comp)}</span></li>
      <li><span>${tr(U.daily_prod)}</span><span>${tr(s.prod)}</span></li></ul></div>`,
        ).join("")}</div>`,
    );

  /* 8 AC sizing */
  const secAC = () =>
    S(
      "acsizing",
      head(
        T2("08"),
        T("Air-Conditioner Solar Sizing", "تحجيم الطاقة الشمسية للمكيّفات"),
        T(
          "How much solar each AC load needs.",
          "كم تحتاج كل وحدة تكييف من طاقة شمسية.",
        ),
      ) +
        table(
          DATA.AC.head.map((h) => tr(h)),
          DATA.AC.rows.map((r) => r.map((x) => tr(x))),
        ) +
        `<p class="prose" style="margin-top:16px">${tr(DATA.AC.note)}</p>`,
    );

  /* 9 Advanced */
  const secAdvanced = () =>
    S(
      "advanced",
      head(T2("09"), T("Advanced Solar Solutions", "حلول شمسية متقدّمة")) +
        `<div class="grid g3">${DATA.ADVANCED.map(
          (a, i) => `<div class="card reveal" data-d="${(i % 3) + 1}">
      <div style="font-size:34px;margin-bottom:8px">${a.i}</div><h3>${tr(a.h)}</h3><p>${tr(a.p)}</p></div>`,
        ).join("")}</div>`,
    );

  /* 10/11 Guides */
  const secGuides = () =>
    S(
      "guides",
      head(T2("10·11"), T("Installation & Maintenance", "التركيب والصيانة")) +
        `<h3 class="reveal" style="margin-bottom:14px;color:var(--amber)">${tr(T("Installation Guide", "دليل التركيب"))}</h3>
     <div class="grid g3">${DATA.INSTALL.steps.map((s, i) => `<div class="card reveal" data-d="${(i % 3) + 1}"><h3>${tr(s.h)}</h3><p>${tr(s.p)}</p></div>`).join("")}</div>
     <h3 class="reveal" style="margin:26px 0 14px;color:var(--amber)">${tr(T("Maintenance Guide", "دليل الصيانة"))}</h3>
     <div class="grid g3">${DATA.INSTALL.maint.map((s, i) => `<div class="card reveal" data-d="${(i % 3) + 1}"><h3>${tr(s.h)}</h3><p>${tr(s.p)}</p></div>`).join("")}</div>`,
    );

  /* 12 Finance */
  const secFinance = () =>
    S(
      "finance",
      head(T2("12"), T("Financial Analysis", "التحليل المالي")) +
        table(
          DATA.FINANCE.head.map((h) => tr(h)),
          DATA.FINANCE.rows,
        ) +
        `<p class="prose" style="margin-top:16px">${tr(DATA.FINANCE.note)}</p>`,
    );

  /* 13 Calculators */
  /* 15 Ranking */
  const secRank = () =>
    S(
      "final",
      head(
        T2("15"),
        T("Final Recommendation", "التوصية النهائية"),
        T(
          "Five tiers, from first-bill-saver to ultimate residential build.",
          "خمس فئات، من توفير أول فاتورة إلى أرقى تركيب منزلي.",
        ),
      ) +
        `<div class="rank">${DATA.RANK.map(
          (r, i) => `<div class="rank-row reveal" data-d="${(i % 4) + 1}">
      <div class="rank-tier">${r.t}</div><div><h4>${tr(r.h)}</h4><p>${tr(r.p)}</p></div>
      <div class="rank-price">${r.price}</div></div>`,
        ).join("")}</div>`,
    );

  function T2(s) {
    return { en: s, ar: s };
  }
  function T(en, ar) {
    return { en, ar };
  }

  function table(headRow, rows) {
    return `<div class="table-wrap reveal"><table><thead><tr>${headRow.map((h) => `<th>${h}</th>`).join("")}</tr></thead>
      <tbody>${rows.map((r) => `<tr>${r.map((c, i) => `<td>${i === 0 ? `<b>${c}</b>` : c}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;
  }

  /* ---------- render ---------- */
  function render() {
    document.getElementById("content").innerHTML =
      secIntro() +
      secFlow() +
      secComponents() +
      secPanels() +
      secInverters() +
      secBatteries() +
      secBrands() +
      secSizes() +
      secAC() +
      secAdvanced() +
      secGuides() +
      secFinance() +
      secRank();
    applyI18nStatic();
    observeReveal();
  }

  /* i18n for the static shell (nav/hero/footer) */
  function applyI18nStatic() {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.getElementById("langBtn").textContent =
      lang === "ar" ? "EN" : "العربية";
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const k = el.dataset.i18n;
      if (U[k]) el.textContent = tr(U[k]);
    });
  }

  /* ---------- reveal on scroll ---------- */
  let io;
  function observeReveal() {
    if (io) io.disconnect();
    io = new IntersectionObserver(
      (es) =>
        es.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.12 },
    );
    document
      .querySelectorAll(".reveal:not(.in)")
      .forEach((el) => io.observe(el));
  }

  /* ---------- chrome wiring ---------- */
  function setTheme(t) {
    theme = t;
    document.documentElement.dataset.theme = t;
    localStorage.setItem("sc_theme", t);
    document.getElementById("themeIcon").textContent = t === "dark" ? "☀" : "☾";
  }
  document.getElementById("themeBtn").onclick = () =>
    setTheme(theme === "dark" ? "light" : "dark");
  document.getElementById("langBtn").onclick = () => {
    lang = lang === "ar" ? "en" : "ar";
    localStorage.setItem("sc_lang", lang);
    render();
  };
  document.getElementById("menuBtn").onclick = () =>
    document.getElementById("navLinks").classList.toggle("open");
  document
    .querySelectorAll(".nav-links a")
    .forEach(
      (a) =>
        (a.onclick = () =>
          document.getElementById("navLinks").classList.remove("open")),
    );

  const onScroll = () => {
    const h = document.documentElement;
    const p = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
    document.getElementById("scrollProgress").style.width = p + "%";
    document
      .getElementById("toTop")
      .classList.toggle("show", h.scrollTop > 600);
  };
  document.addEventListener("scroll", onScroll, { passive: true });
  document.getElementById("toTop").onclick = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  setTheme(theme);
  render();
})();
