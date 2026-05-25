// Macte Ovens Nettuno ADVANCED — dati prodotto
// Redesign UI/UX originale, dati reali estratti da fonti pubbliche.

window.PRODUCT = {
  brand: "Macte Ovens",
  family: "Linea Digitale",
  name: "Nettuno",
  edition: "ADVANCED",
  tagline: "Il forno elettrico più versatile della gamma.",
  description:
    "Controllo digitale PID con Autoboost, pietra biscotto di Casapulla e doppia resistenza indipendente. Progettato e costruito a Salerno.",
  price: 1490,
  originalPrice: 1690,
  currency: "€",
  rating: 4.8,
  reviews: 312,
  shipping: "Spedizione in 5–7 giorni lavorativi",
  warranty: "24 mesi · Assistenza tecnica diretta",
  badges: ["Certificato AVPN", "Made in Italy 🇮🇹"],
  colors: [
    { id: "nero",    label: "Nero",    hex: "#1a1614", swatchAccent: "#2a2622" },
    { id: "grigio",  label: "Grigio",  hex: "#7a7670", swatchAccent: "#8a8680" },
    { id: "bianco",  label: "Bianco",  hex: "#eee9df", swatchAccent: "#d8d2c4" },
    { id: "rame",    label: "Rame",    hex: "#a8623a", swatchAccent: "#b8724a" },
  ],
  highlights: [
    { value: "510°C",   label: "Temperatura max"  , note: "in meno di 30 min" },
    { value: "PID",     label: "Controllo digitale", note: "con Autoboost" },
    { value: "2975 W",  label: "Potenza"           , note: "presa Schuko 230V" },
    { value: "AVPN",    label: "Certificato",        note: "Verace Pizza Napoletana" },
    { value: "35×40",   label: "Camera (cm)"       , note: "altezza utile 17 cm" },
  ],
  features: [
    {
      n: "01",
      title: "PID + Autoboost",
      body: "Controllo elettronico della temperatura con recupero termico immediato all'apertura dello sportello. Stabilità superiore rispetto ai termostati tradizionali.",
    },
    {
      n: "02",
      title: "Pietra biscotto di Casapulla",
      body: "Refrattario naturale ad alta inerzia termica: base ben cotta, distribuzione uniforme, resa professionale anche dopo cotture consecutive.",
    },
    {
      n: "03",
      title: "Doppia resistenza indipendente",
      body: "Cielo e platea regolabili separatamente. Profilo termico personalizzato per pizza, pane, focaccia, panettone.",
    },
    {
      n: "04",
      title: "Triplo vetro + guarnizione pirolitica",
      body: "Sportello a triplo vetro isolante e guarnizione resistente a temperature estreme. Superfici esterne sicure anche oltre i 500°C.",
    },
  ],
  anatomy: [
    { x: 18, y: 30, label: "Display PID",  desc: "Touch capacitivo, due zone" },
    { x: 72, y: 26, label: "Cielo inox",   desc: "Resistenza superiore" },
    { x: 52, y: 56, label: "Camera",       desc: "35 × 40 × 17 cm" },
    { x: 24, y: 72, label: "Biscotto",     desc: "Pietra Casapulla" },
    { x: 80, y: 78, label: "Doppia ventola", desc: "Raffreddamento attivo" },
  ],
  specs: [
    { group: "Alimentazione", items: [
      ["Tensione", "230 V — 16 A"],
      ["Potenza totale", "2975 W"],
      ["Spina", "Schuko (CEE 7/7)"],
    ]},
    { group: "Dimensioni", items: [
      ["Esterne", "61,5 × 45 × 37 cm"],
      ["Camera interna", "35 × 40 × 17 cm"],
      ["Peso", "32 kg"],
    ]},
    { group: "Performance", items: [
      ["Temperatura massima", "510 °C"],
      ["Tempo di riscaldo", "< 30 min"],
      ["Pizze per volta", "1 (Ø 33 cm)"],
    ]},
    { group: "Materiali", items: [
      ["Scocca", "Acciaio inox professional grade"],
      ["Camera", "Acciaio inox + biscotto Casapulla"],
      ["Sportello", "Triplo vetro + guarnizione pirolitica"],
    ]},
  ],
  compare: {
    columns: ["Nettuno", "Nettuno ADVANCED", "Saturno"],
    rows: [
      { label: "Controllo",        values: ["Termostato", "PID + Autoboost", "PID + Autoboost"] },
      { label: "Temp. max",        values: ["500 °C", "510 °C", "510 °C"], highlight: 1 },
      { label: "Pizze per volta",  values: ["1", "1", "2"] },
      { label: "Camera (cm)",      values: ["35×40×17", "35×40×17", "70×40×17"] },
      { label: "Doppia resistenza", values: ["Sì", "Sì", "Sì"] },
      { label: "Certificazione AVPN", values: ["Sì", "Sì", "—"], highlight: 1 },
      { label: "Prezzo da",        values: ["€ 1.190", "€ 1.490", "€ 2.190"], highlight: 1 },
    ],
  },
  faq: [
    {
      q: "Serve un impianto elettrico speciale?",
      a: "No. Il Nettuno ADVANCED si collega a una normale presa Schuko 230V 16A, su impianto domestico conforme. Nessun adeguamento di potenza richiesto.",
    },
    {
      q: "Posso usarlo all'aperto?",
      a: "Sì, a patto di operare in condizioni asciutte e in assenza di umidità. Non lasciarlo esposto a pioggia o intemperie.",
    },
    {
      q: "Cosa posso cuocere oltre alla pizza?",
      a: "Pane di ogni tipo, focacce, pasta al forno e persino panettone. Le due resistenze indipendenti permettono di adattare il profilo termico a qualunque preparazione.",
    },
    {
      q: "La pietra arriva in due pezzi: è un problema?",
      a: "No. Per evitare rotture in trasporto la pietra è suddivisa in due elementi. Una volta installata, le prestazioni di cottura restano identiche a una pietra unica.",
    },
    {
      q: "Cos'è la certificazione AVPN?",
      a: "L'Associazione Verace Pizza Napoletana certifica i forni idonei alla cottura della vera pizza napoletana. Il Nettuno è approvato dopo anni di test sul campo.",
    },
  ],
  reviews_summary: [
    { stars: 5, count: 248 },
    { stars: 4, count: 51 },
    { stars: 3, count: 9 },
    { stars: 2, count: 3 },
    { stars: 1, count: 1 },
  ],
  reviews_excerpt: [
    {
      name: "Marco D.",
      city: "Napoli",
      stars: 5,
      title: "La napoletana, in cucina.",
      body: "60 secondi a 480°C. Cornicione perfetto, base asciutta. Il PID è il vero salto.",
      date: "12 marzo 2026",
    },
    {
      name: "Giulia R.",
      city: "Milano",
      stars: 5,
      title: "Vale ogni euro",
      body: "Compatto, silenzioso, e la pietra Casapulla fa la differenza. Anche il pane viene benissimo.",
      date: "28 febbraio 2026",
    },
    {
      name: "Pizzeria L'Angolo",
      city: "Salerno",
      stars: 4,
      title: "Lo usiamo in delivery",
      body: "Recupero termico velocissimo tra una infornata e l'altra. Costruzione seria.",
      date: "5 gennaio 2026",
    },
  ],
};
