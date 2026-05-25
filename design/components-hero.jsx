// Macte Ovens redesign — componenti principali
// Carica DOPO React, Babel e product-data.js

const { useState, useEffect, useRef, useMemo } = React;

// ── SVG illustration (originale, geometria semplice) ──────
function OvenSVG({ color = "#1a1614", accent = "oklch(0.62 0.15 45)" }) {
  return (
    <svg viewBox="0 0 400 400" className="oven-illus" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bodyGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={color} stopOpacity="0.95" />
          <stop offset="1" stopColor={color} stopOpacity="0.75" />
        </linearGradient>
        <linearGradient id="glow" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={accent} stopOpacity="0.95" />
          <stop offset="1" stopColor={accent} stopOpacity="0.35" />
        </linearGradient>
      </defs>
      {/* base shadow */}
      <ellipse cx="200" cy="360" rx="160" ry="14" fill="#000" opacity="0.18" />
      {/* feet */}
      <rect x="60" y="338" width="20" height="12" rx="2" fill="#3a3431" />
      <rect x="320" y="338" width="20" height="12" rx="2" fill="#3a3431" />
      {/* body */}
      <rect x="50" y="120" width="300" height="220" rx="6" fill="url(#bodyGrad)" />
      {/* top vent */}
      <rect x="50" y="120" width="300" height="22" rx="6" fill="#000" opacity="0.25" />
      {[...Array(14)].map((_, i) => (
        <rect key={i} x={68 + i * 19} y={126} width="14" height="10" rx="1" fill="#000" opacity="0.35" />
      ))}
      {/* chamber */}
      <rect x="80" y="170" width="240" height="140" rx="4" fill="#0a0807" />
      {/* glow inside */}
      <rect x="92" y="180" width="216" height="120" rx="3" fill="url(#glow)" opacity="0.9" />
      {/* pizza */}
      <ellipse cx="200" cy="262" rx="56" ry="14" fill="#e9c79a" opacity="0.85" />
      <ellipse cx="200" cy="258" rx="50" ry="11" fill="#c9854a" opacity="0.6" />
      {/* door frame */}
      <rect x="80" y="170" width="240" height="140" rx="4" fill="none" stroke="#000" strokeOpacity="0.4" strokeWidth="2" />
      {/* handle */}
      <rect x="100" y="316" width="200" height="10" rx="5" fill="#2a2622" />
      <rect x="100" y="316" width="200" height="3" rx="1.5" fill="#fff" opacity="0.15" />
      {/* knobs */}
      <circle cx="100" cy="154" r="8" fill="#0a0807" stroke="#fff" strokeOpacity="0.2" strokeWidth="1" />
      <circle cx="100" cy="154" r="2" fill={accent} />
      <circle cx="300" cy="154" r="8" fill="#0a0807" stroke="#fff" strokeOpacity="0.2" strokeWidth="1" />
      <circle cx="300" cy="154" r="2" fill={accent} />
      {/* digital display */}
      <rect x="160" y="146" width="80" height="18" rx="2" fill="#0a0807" />
      <text x="200" y="159" textAnchor="middle" fontFamily="ui-monospace, monospace" fontSize="11" fill={accent} letterSpacing="2">
        510°C
      </text>
    </svg>
  );
}

// ── Hero ─────────────────────────────────────────────────
function Hero({ state, setState }) {
  const p = PRODUCT;
  const activeColor = p.colors.find(c => c.id === state.color);

  return (
    <section className="hero">
      <div className="gallery">
        <div className="gallery-main">
          <div className="badge-row">
            <span className="badge avpn"><span className="seal"></span>Certificato AVPN</span>
            <span className="badge">Made in Italy 🇮🇹</span>
          </div>
          <div className="corner-id">REF · NTT-ADV-{state.color.toUpperCase().slice(0,3)}</div>
          <OvenSVG color={activeColor.hex} />
          <div className="nav-arrows">
            <button aria-label="Precedente" onClick={() => setState(s => ({ ...s, view: Math.max(0, s.view - 1) }))}>
              <Arrow dir="left" />
            </button>
            <button aria-label="Successivo" onClick={() => setState(s => ({ ...s, view: Math.min(3, s.view + 1) }))}>
              <Arrow dir="right" />
            </button>
          </div>
        </div>
        <div className="gallery-thumbs">
          {["Fronte","3/4","Camera","Display"].map((label, i) => (
            <button
              key={i}
              className={"thumb" + (state.view === i ? " active" : "")}
              onClick={() => setState(s => ({ ...s, view: i }))}
            >
              <span className="thumb-fill"></span>
              <span className="thumb-label">{String(i+1).padStart(2,"0")} · {label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="config">
        <div className="eyebrow">{p.family} · Edizione {p.edition}</div>
        <h1 className="serif">
          {p.name} <em>ADVANCED</em>
        </h1>
        <p className="lead">{p.description}</p>

        <div className="stars">
          <span className="glyphs">★★★★★</span>
          <b>{p.rating}</b>
          <span>· {p.reviews} recensioni verificate</span>
        </div>

        <div className="config-card">
          {/* Color */}
          <div className="field-group">
            <div className="field-label">
              <span className="label">01 · Finitura</span>
              <span className="value">{activeColor.label}</span>
            </div>
            <div className="swatches">
              {p.colors.map(c => (
                <button
                  key={c.id}
                  className={"swatch" + (state.color === c.id ? " active" : "")}
                  onClick={() => setState(s => ({ ...s, color: c.id }))}
                  aria-label={c.label}
                >
                  <span className="dot" style={{ background: c.hex }}></span>
                  {c.label}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="field-group">
            <div className="field-label">
              <span className="label">02 · Quantità</span>
              <span className="value mono">{String(state.qty).padStart(2,"0")} pz</span>
            </div>
            <div className="qty">
              <button onClick={() => setState(s => ({ ...s, qty: Math.max(1, s.qty - 1) }))}>−</button>
              <span className="n">{state.qty}</span>
              <button onClick={() => setState(s => ({ ...s, qty: Math.min(9, s.qty + 1) }))}>+</button>
            </div>
          </div>

          {/* Bundle */}
          <div className="field-group">
            <div className="field-label">
              <span className="label">03 · Accessori inclusi</span>
              <span className="value">{state.bundle ? "Kit completo" : "Solo forno"}</span>
            </div>
            <div className="bundle">
              <label className={state.bundle ? "on" : ""}>
                <input
                  type="checkbox"
                  checked={state.bundle}
                  onChange={() => setState(s => ({ ...s, bundle: !s.bundle }))}
                />
                <span className="bundle-img">PALA</span>
                <span className="bundle-info">
                  <span className="bundle-title">Kit Pala + Rotella + Termometro</span>
                  <span className="bundle-meta">+ €89 · risparmi €40</span>
                </span>
              </label>
            </div>
          </div>

          {/* Price */}
          <div className="price-block">
            <span className="price-now serif">€ {(p.price + (state.bundle ? 89 : 0)).toLocaleString("it-IT")}</span>
            <span className="price-was">€ {p.originalPrice.toLocaleString("it-IT")}</span>
            <span className="price-tag">−12%</span>
          </div>

          <div className="price-fine">
            <span>oppure 3 rate da <b>€ {Math.round((p.price + (state.bundle ? 89 : 0))/3).toLocaleString("it-IT")}</b> a tasso 0</span>
            <span>IVA inclusa</span>
          </div>

          {/* CTAs */}
          <div className="cta-row">
            <button className="btn btn-primary">Acquista ora</button>
            <button className="btn btn-secondary">Aggiungi al carrello</button>
            <button className="btn btn-secondary btn-full" style={{padding: "12px"}}>
              <Heart /> Salva nella lista
            </button>
          </div>

          {/* Assurance */}
          <div className="assurance">
            <span className="row"><span className="check">✓</span> {p.shipping}</span>
            <span className="row"><span className="check">✓</span> Reso gratuito 30 giorni</span>
            <span className="row"><span className="check">✓</span> {p.warranty}</span>
            <span className="row"><span className="check">✓</span> Pagamento sicuro</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Arrow({ dir }) {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path
        d={dir === "left" ? "M9 2L3 7l6 5" : "M5 2l6 5-6 5"}
        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      />
    </svg>
  );
}
function Heart() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M7 12s-4.5-2.5-4.5-5.5C2.5 5 3.5 4 4.8 4c.9 0 1.6.5 2.2 1.3C7.6 4.5 8.3 4 9.2 4c1.3 0 2.3 1 2.3 2.5C11.5 9.5 7 12 7 12z"
        stroke="currentColor" strokeWidth="1.3" fill="none"/>
    </svg>
  );
}

// ── Metrics strip ────────────────────────────────────────
function Metrics() {
  return (
    <section className="metrics">
      {PRODUCT.highlights.map((h, i) => {
        // split unit from val
        const m = h.value.match(/^([\d.,×]+)(.*)$/);
        return (
          <div className="metric" key={i}>
            <span className="n">/{String(i+1).padStart(2,"0")}</span>
            <span className="val serif">
              {m ? m[1] : h.value}
              {m && m[2] && <span className="unit">{m[2]}</span>}
            </span>
            <span className="lab">{h.label}</span>
            <span className="sub">{h.note}</span>
          </div>
        );
      })}
    </section>
  );
}

// ── Features ─────────────────────────────────────────────
function Features() {
  return (
    <section className="section" id="caratteristiche">
      <div className="section-head">
        <div>
          <div className="section-num">/ 02 — Tecnologia</div>
          <h2 className="section-title">Sotto al <em>cofano</em>.</h2>
        </div>
        <p className="section-lead">
          Ogni componente è scelto per spingere il forno al limite delle prestazioni domestiche
          mantenendolo silenzioso, sicuro e prevedibile come uno strumento da pizzeria.
        </p>
      </div>
      <div className="feat-grid">
        {PRODUCT.features.map(f => (
          <article className="feat" key={f.n}>
            <span className="feat-n">{f.n} / 04</span>
            <div>
              <h3 className="feat-title">{f.title}</h3>
              <p className="feat-body">{f.body}</p>
            </div>
            <div className="feat-viz">
              [ illustrazione · {f.title.toLowerCase()} ]
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

// ── Anatomy / annotated diagram ──────────────────────────
function Anatomy() {
  const [active, setActive] = useState(0);
  const pin = PRODUCT.anatomy[active];

  return (
    <section className="section" id="anatomia">
      <div className="anatomy">
        <div>
          <div className="section-num">/ 03 — Anatomia</div>
          <h2 className="section-title">Esploralo, <em>punto per punto.</em></h2>
          <p className="anatomy-lead">
            Cinque sistemi che lavorano in sincronia per restituire una vera napoletana
            in 60 secondi, anche dalla cucina di casa.
          </p>
          <div className="anatomy-callouts">
            {PRODUCT.anatomy.map((a, i) => (
              <div
                key={i}
                className={"row" + (active === i ? " active" : "")}
                onMouseEnter={() => setActive(i)}
                onClick={() => setActive(i)}
              >
                <span className="pin-n">{String(i+1).padStart(2,"0")}</span>
                <strong>{a.label}</strong>
                <small>{a.desc}</small>
              </div>
            ))}
          </div>
        </div>
        <div className="anatomy-stage">
          <div style={{
            position: "absolute", inset: 0,
            backgroundImage: "repeating-linear-gradient(0deg, transparent 0 39px, rgba(255,255,255,0.04) 39px 40px), repeating-linear-gradient(90deg, transparent 0 39px, rgba(255,255,255,0.04) 39px 40px)"
          }} />
          <OvenSVG color="#2a2622" />
          {PRODUCT.anatomy.map((a, i) => (
            <button
              key={i}
              className="pin"
              style={{
                left: a.x + "%", top: a.y + "%",
                opacity: active === i ? 1 : 0.55,
              }}
              onMouseEnter={() => setActive(i)}
              onClick={() => setActive(i)}
              aria-label={a.label}
            >
              {i+1}
            </button>
          ))}
          {pin && (
            <div className="pin-label" style={{ left: (pin.x + 14) + "%", top: pin.y + "%" }}>
              <b>{pin.label}</b>
              <small>{pin.desc}</small>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Hero, Metrics, Features, Anatomy, OvenSVG });
