// Macte Ovens redesign — sezioni inferiori

const { useState: useStateB, useEffect: useEffectB } = React;

// ── Specifiche ──────────────────────────────────────────
function SpecsSection() {
  return (
    <section className="section" id="specifiche" style={{ background: "transparent" }}>
      <div className="section-head">
        <div>
          <div className="section-num">/ 04 — Specifiche</div>
          <h2 className="section-title">Numeri, <em>nudi e crudi</em>.</h2>
        </div>
        <p className="section-lead">
          Tutto quello che serve sapere prima di installarlo. Le schede tecniche dettagliate
          e il manuale d'uso sono scaricabili in fondo alla pagina.
        </p>
      </div>
      <div className="spec-grid">
        {PRODUCT.specs.map(g => (
          <div className="spec-card" key={g.group}>
            <h4>{g.group}</h4>
            {g.items.map(([k, v], i) => (
              <div className="spec-row" key={i}>
                <span className="k">{k}</span>
                <span className="v mono">{v}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

// ── Comparatore ─────────────────────────────────────────
function CompareSection() {
  const c = PRODUCT.compare;
  return (
    <section className="section" id="confronta">
      <div className="section-head">
        <div>
          <div className="section-num">/ 05 — Confronto</div>
          <h2 className="section-title">Qual è <em>il tuo</em> Macte?</h2>
        </div>
        <p className="section-lead">
          Il Nettuno ADVANCED è il punto di equilibrio tra controllo digitale e dimensioni domestiche.
          Se ti serve più capacità, dai un'occhiata al Saturno.
        </p>
      </div>
      <div className="compare">
        <table>
          <thead>
            <tr>
              <th></th>
              {c.columns.map((col, i) => (
                <th key={i} className={i === 1 ? "hl" : ""}>{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {c.rows.map((r, i) => (
              <tr key={i}>
                <td>{r.label}</td>
                {r.values.map((v, j) => (
                  <td key={j} className={r.highlight === j ? "hl" : ""}>{v}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

// ── Recensioni ──────────────────────────────────────────
function ReviewsSection() {
  const total = PRODUCT.reviews_summary.reduce((s, r) => s + r.count, 0);
  return (
    <section className="section" id="recensioni">
      <div className="section-head">
        <div>
          <div className="section-num">/ 06 — Voce dei clienti</div>
          <h2 className="section-title">Chi lo usa <em>ogni giorno.</em></h2>
        </div>
        <p className="section-lead">
          Una selezione delle recensioni verificate. Per leggere le altre 309 raccolte negli
          ultimi 18 mesi, filtra per profilo (uso domestico / professionale) nella pagina dedicata.
        </p>
      </div>
      <div className="reviews">
        <div className="reviews-summary">
          <span className="big serif">{PRODUCT.rating}</span>
          <span className="of">/ 5</span>
          <div className="stars-line">★★★★★</div>
          <div className="total">basato su {total} recensioni</div>
          {PRODUCT.reviews_summary.map((r, i) => (
            <div className="review-bar" key={i}>
              <span>{r.stars}★</span>
              <span className="track">
                <span className="fill" style={{ width: (r.count / total * 100) + "%" }}></span>
              </span>
              <span>{r.count}</span>
            </div>
          ))}
          <button className="btn btn-secondary" style={{ marginTop: 14, width: "100%", padding: "12px" }}>
            Scrivi una recensione
          </button>
        </div>
        <div className="reviews-list">
          {PRODUCT.reviews_excerpt.map((r, i) => (
            <article className="review-card" key={i}>
              <div className="head">
                <div className="who">
                  <span className="avatar">{r.name[0]}</span>
                  <div>
                    <div><span className="name">{r.name}</span> <span className="city">· {r.city}</span></div>
                    <div className="stars-mini">{"★".repeat(r.stars)}<span style={{opacity:.2}}>{"★".repeat(5-r.stars)}</span></div>
                  </div>
                </div>
                <span className="date">{r.date}</span>
              </div>
              <h5>{r.title}</h5>
              <p>{r.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── FAQ ─────────────────────────────────────────────────
function FaqSection() {
  const [open, setOpen] = useStateB(0);
  return (
    <section className="section" id="domande">
      <div className="section-head">
        <div>
          <div className="section-num">/ 07 — FAQ</div>
          <h2 className="section-title">Domande <em>frequenti</em>.</h2>
        </div>
        <p className="section-lead">
          Le domande più comuni dei clienti prima dell'acquisto. Non trovi una risposta?
          Scrivici, rispondiamo entro 4 ore lavorative.
        </p>
      </div>
      <div className="faq">
        {PRODUCT.faq.map((f, i) => (
          <div
            className={"faq-item" + (open === i ? " open" : "")}
            key={i}
            onClick={() => setOpen(open === i ? -1 : i)}
          >
            <div className="faq-q">
              <span>{f.q}</span>
              <span className="plus">+</span>
            </div>
            <div className="faq-a">
              <div>{f.a}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ── Sticky buy bar (visibile dopo scroll oltre hero) ────
function StickyBar({ state }) {
  const [show, setShow] = useStateB(false);
  useEffectB(() => {
    const onScroll = () => setShow(window.scrollY > 700 && window.scrollY < (document.body.scrollHeight - 1200));
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const c = PRODUCT.colors.find(c => c.id === state.color);
  return (
    <div className={"sticky-bar" + (show ? " show" : "")}>
      <div className="left">
        <div className="thumb-mini" style={{ background: `linear-gradient(135deg, ${c.hex} 0%, ${c.swatchAccent} 100%)` }}></div>
        <div className="info">
          <span className="info-name">Nettuno ADVANCED · {c.label}</span>
          <span className="info-sub">Qty {state.qty} · {state.bundle ? "+ Kit completo" : "Solo forno"}</span>
        </div>
      </div>
      <span className="price-mini">€ {(PRODUCT.price + (state.bundle ? 89 : 0)).toLocaleString("it-IT")}</span>
      <button className="btn btn-secondary" style={{ background: "rgba(255,255,255,0.08)", color: "var(--bg)", borderColor: "rgba(255,255,255,0.15)" }}>
        Aggiungi al carrello
      </button>
      <button className="btn btn-primary">Acquista ora</button>
    </div>
  );
}

// ── Topbar + Breadcrumbs ────────────────────────────────
function Topbar() {
  return (
    <header className="topbar">
      <div className="container topbar-inner">
        <div className="brand-mark serif">
          Officina <small>Forni Italiani</small>
        </div>
        <nav className="topnav">
          <a href="#">Forni</a>
          <a href="#">Accessori</a>
          <a href="#">Ricette</a>
          <a href="#" className="active">Nettuno ADVANCED</a>
          <a href="#">Assistenza</a>
        </nav>
        <div className="top-actions">
          <button className="icon-btn" aria-label="Cerca">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.4"/>
              <path d="M11 11l3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
            </svg>
          </button>
          <button className="icon-btn" aria-label="Account">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="6" r="2.5" stroke="currentColor" strokeWidth="1.4"/>
              <path d="M3 14c.5-2.5 2.5-4 5-4s4.5 1.5 5 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
            </svg>
          </button>
          <button className="cart-pill">
            <span className="dot"></span>
            Carrello · 2
          </button>
        </div>
      </div>
    </header>
  );
}

function Crumbs() {
  return (
    <div className="container">
      <div className="crumbs mono">
        <span>Home</span>
        <span>Forni</span>
        <span>Forni per Pizza</span>
        <span className="cur">Nettuno ADVANCED</span>
      </div>
    </div>
  );
}

// ── Footer ─────────────────────────────────────────────
function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="foot-grid">
          <div>
            <div className="brand-big serif">Officina <em style={{fontStyle:"italic", color:"oklch(0.7 0.18 50)"}}>Forni</em></div>
            <p className="brand-tag">Forni elettrici e accessori per pizza, pane e cucina ad alta temperatura. Spedizioni in tutta Europa.</p>
          </div>
          <div>
            <h6>Catalogo</h6>
            <ul>
              <li><a href="#">Nettuno</a></li>
              <li><a href="#">Nettuno ADVANCED</a></li>
              <li><a href="#">Saturno</a></li>
              <li><a href="#">Plutone</a></li>
              <li><a href="#">Accessori</a></li>
            </ul>
          </div>
          <div>
            <h6>Supporto</h6>
            <ul>
              <li><a href="#">Spedizioni</a></li>
              <li><a href="#">Resi & rimborsi</a></li>
              <li><a href="#">Manuali & schede</a></li>
              <li><a href="#">Assistenza tecnica</a></li>
              <li><a href="#">Garanzia</a></li>
            </ul>
          </div>
          <div>
            <h6>Azienda</h6>
            <ul>
              <li><a href="#">Storia</a></li>
              <li><a href="#">Made in Italy</a></li>
              <li><a href="#">AVPN</a></li>
              <li><a href="#">Sostenibilità</a></li>
              <li><a href="#">Contatti</a></li>
            </ul>
          </div>
        </div>
        <div className="foot-mini">
          <span>© 2026 — Redesign concept, prototipo non commerciale.</span>
          <span>P.IVA 0000000000 · Salerno, IT</span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { SpecsSection, CompareSection, ReviewsSection, FaqSection, StickyBar, Topbar, Crumbs, Footer });
