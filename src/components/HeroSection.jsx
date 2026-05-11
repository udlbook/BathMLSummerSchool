const BASE = import.meta.env.BASE_URL

const TOPICS = [
  'ODEs & SDEs in ML',
  'Probabilistic & Bayesian Methods',
  'Self-Supervised Learning',
  'World Models',
]

/** Decorative clockface / seal graphic */
function HeroGraphic() {
  const ticks = Array.from({ length: 36 }, (_, i) => {
    const angle = (i * 10 * Math.PI) / 180
    const isMajor = i % 9 === 0
    const r1 = isMajor ? 132 : 135
    const r2 = 140
    return {
      x1: 150 + r1 * Math.cos(angle - Math.PI / 2),
      y1: 150 + r1 * Math.sin(angle - Math.PI / 2),
      x2: 150 + r2 * Math.cos(angle - Math.PI / 2),
      y2: 150 + r2 * Math.sin(angle - Math.PI / 2),
    }
  })

  return (
    <div className="hero__graphic" aria-hidden="true">
      <svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" role="presentation">
        {/* Rings */}
        <circle cx="150" cy="150" r="140" fill="none" stroke="rgba(232,168,48,0.45)" strokeWidth="1" />
        <circle cx="150" cy="150" r="115" fill="none" stroke="rgba(232,168,48,0.30)" strokeWidth="1" />
        <circle cx="150" cy="150" r="90"  fill="none" stroke="rgba(232,168,48,0.22)" strokeWidth="1" />

        {/* Tick marks */}
        {ticks.map((t, i) => (
          <line
            key={i}
            x1={t.x1} y1={t.y1} x2={t.x2} y2={t.y2}
            stroke="rgba(232,168,48,0.55)"
            strokeWidth={i % 9 === 0 ? 1.5 : 0.75}
          />
        ))}

        {/* Cardinal dots */}
        {[[150, 10], [290, 150], [150, 290], [10, 150]].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="3" fill="rgba(232,168,48,0.9)" />
        ))}

        {/* Year watermark */}
        <text
          x="150" y="145"
          textAnchor="middle"
          fontFamily="Cormorant Garant, Georgia, serif"
          fontSize="48"
          fontWeight="600"
          fill="rgba(232,168,48,0.55)"
        >
          2026
        </text>
        <text
          x="150" y="165"
          textAnchor="middle"
          fontFamily="Outfit, sans-serif"
          fontSize="7.5"
          fontWeight="500"
          fill="rgba(255,255,255,0.5)"
          letterSpacing="5"
        >
          BATH · ML
        </text>

        {/* Circular text path */}
        <defs>
          <path
            id="seal-path"
            d="M 150 12 A 138 138 0 1 1 149.99 12"
          />
        </defs>
        <text
          fontFamily="Outfit, sans-serif"
          fontSize="7.5"
          fill="rgba(255,255,255,0.48)"
          letterSpacing="6.5"
        >
          <textPath href="#seal-path" startOffset="2%">
            UNIVERSITY OF BATH · AUGUST 2026 · MACHINE LEARNING ·
          </textPath>
        </text>
      </svg>
    </div>
  )
}

export default function HeroSection() {
  return (
    <section id="about" className="hero">
      <div className="hero__container">
        {/* Left: Content */}
        <div>
          <div className="hero__institution">
          <img
            src={`${BASE}Uni of Bath logo (white).png`}
            alt="University of Bath"
            className="hero__uob-logo"
          />
        </div>
        <p className="hero__label">Centre for Artificial Intelligence</p>

          <div className="hero__ordinal" aria-hidden="true">1<sup style={{ fontSize: '0.45em', verticalAlign: 'super' }}>st</sup></div>

          <h1 className="hero__title">
            Bath Summer School in{' '}
            <em>Machine Learning</em>
          </h1>

          <div className="hero__meta">
            <span className="hero__badge">
              <span className="hero__badge-icon">📅</span>
              5–7 August 2026
            </span>
            <span className="hero__badge">
              <span className="hero__badge-icon">📍</span>
              University of Bath
            </span>
            <span className="hero__badge">
              <span className="hero__badge-icon">🎓</span>
              Open to UK/EU PhDs and Postdocs
            </span>
          </div>

          <p className="hero__description">
            Three days of tutorial-style lectures spanning core and emerging topics in
            machine learning. Designed to help graduate students rapidly build knowledge
            outside their direct research focus — in a friendly, inclusive environment.
          </p>

          <div className="hero__topics">
            <p className="hero__topics-label">This year&rsquo;s themes</p>
            <ul className="hero__topic-list" role="list">
              {TOPICS.map(t => (
                <li key={t} className="hero__topic-item">{t}</li>
              ))}
            </ul>
          </div>

          <div className="hero__actions">
            <a
              href="#registration"
              className="btn btn--primary"
              onClick={e => {
                e.preventDefault()
                const el = document.querySelector('#registration')
                if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' })
              }}>            
              Register Now
            </a>
            <a href="#programme" className="btn btn--outline" onClick={e => {
              e.preventDefault()
              const el = document.querySelector('#programme')
              if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' })
            }}>
              View Programme
            </a>
          </div>
        </div>

        {/* Right: Graphic */}
        <HeroGraphic />
      </div>
    </section>
  )
}
