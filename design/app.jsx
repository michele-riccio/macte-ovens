// Main app entry — composizione

const { useState: useStateA } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "layout": "spazioso",
  "heroStyle": "chiaro",
  "accent": "#c96d3a",
  "fontScale": 100
}/*EDITMODE-END*/;

const ACCENT_MAP = {
  "#c96d3a": { a: "oklch(0.62 0.15 45)",  b: "oklch(0.7 0.18 50)",  soft: "oklch(0.95 0.04 60)" },  // fiamma
  "#728f4a": { a: "oklch(0.55 0.1 130)",  b: "oklch(0.65 0.13 135)", soft: "oklch(0.95 0.04 130)" }, // ulivo
  "#3a6a9a": { a: "oklch(0.5 0.13 230)",  b: "oklch(0.6 0.16 230)",  soft: "oklch(0.95 0.03 220)" }, // marina
  "#b04a2a": { a: "oklch(0.55 0.18 25)",  b: "oklch(0.65 0.2 25)",   soft: "oklch(0.95 0.05 30)" },  // brace
};

function App() {
  const [state, setState] = useStateA({
    color: "nero",
    qty: 1,
    bundle: true,
    view: 0,
  });

  const [t, setTweak] = window.useTweaks(TWEAK_DEFAULTS);

  React.useEffect(() => {
    document.body.className = "";
    if (t.layout === "denso") document.body.classList.add("layout-dense");
    if (t.heroStyle === "scuro") document.body.classList.add("hero-dark");

    const c = ACCENT_MAP[t.accent] || ACCENT_MAP["#c96d3a"];
    document.documentElement.style.setProperty("--accent", c.a);
    document.documentElement.style.setProperty("--accent-bright", c.b);
    document.documentElement.style.setProperty("--accent-soft", c.soft);
    document.documentElement.style.fontSize = (t.fontScale || 100) + "%";
  }, [t.layout, t.heroStyle, t.accent, t.fontScale]);

  return (
    <React.Fragment>
      <Topbar />
      <Crumbs />
      <div className="container">
        <Hero state={state} setState={setState} />
      </div>
      <div className="container">
        <Metrics />
      </div>
      <div className="container">
        <Features />
      </div>
      <div className="container">
        <Anatomy />
      </div>
      <div className="container">
        <SpecsSection />
      </div>
      <div className="container">
        <CompareSection />
      </div>
      <div className="container">
        <ReviewsSection />
      </div>
      <div className="container">
        <FaqSection />
      </div>
      <Footer />
      <StickyBar state={state} />

      <window.TweaksPanel title="Tweaks">
        <window.TweakSection label="Layout" />
        <window.TweakRadio
          label="Densità"
          value={t.layout}
          options={["spazioso", "denso"]}
          onChange={v => setTweak("layout", v)}
        />
        <window.TweakRadio
          label="Hero"
          value={t.heroStyle}
          options={["chiaro", "scuro"]}
          onChange={v => setTweak("heroStyle", v)}
        />
        <window.TweakSlider
          label="Scala type"
          value={t.fontScale}
          min={85} max={115} step={5}
          unit="%"
          onChange={v => setTweak("fontScale", v)}
        />
        <window.TweakSection label="Accento" />
        <window.TweakColor
          label="Colore"
          value={t.accent}
          options={["#c96d3a", "#728f4a", "#3a6a9a", "#b04a2a"]}
          onChange={v => setTweak("accent", v)}
        />
      </window.TweaksPanel>
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
