import { useScrollReveal } from '../hooks/useScrollReveal.js'

const HIGHLIGHTS = [
  {
    icon: '🏛️',
    name: 'Roman Baths',
    desc: 'Remarkably preserved Roman bathing complex at the heart of the city.',
  },
  {
    icon: '🌿',
    name: 'Royal Crescent',
    desc: 'Sweeping Georgian terrace — a masterpiece of 18th-century architecture.',
  },
  {
    icon: '🌍',
    name: 'UNESCO World Heritage Site',
    desc: 'Recognised for its outstanding architectural and cultural legacy.',
  },
  {
    icon: '📚',
    name: 'Jane Austen Country',
    desc: 'Explore the literary connections and the Jane Austen Centre.',
  },
  {
    icon: '🛁',
    name: 'Thermae Bath Spa',
    desc: 'Soak in natural thermal waters in a stunning contemporary setting.',
  },
  {
    icon: '🚶',
    name: 'River Avon Walks',
    desc: 'Scenic paths along the River Avon through rolling Somerset countryside.',
  },
]

export default function BathSection() {
  const textRef = useScrollReveal()
  const highlightsRef = useScrollReveal()

  return (
    <section id="bath" className="bath">
      {/* Full-width hero image */}
      <div className="bath__image-wrap">
        <img
          className="bath__image"
          src="/BathCityPicture.jpg"
          alt="Aerial view of Bath city centre showing Georgian architecture and the River Avon"
        />
        <div className="bath__image-overlay" aria-hidden="true" />
        <div className="bath__image-caption">
          <h2>Beautiful Bath</h2>
          <p>Somerset, England · UNESCO World Heritage Site</p>
        </div>
      </div>

      {/* Body content */}
      <div className="bath__body">
        {/* Left: description */}
        <div className="reveal" ref={textRef}>
          <p className="section-eyebrow">The Venue City</p>
          <h2 className="section-title" style={{ color: 'var(--navy)' }}>
            Visiting Bath
          </h2>
          <div className="section-rule" style={{ margin: '1.25rem 0 0' }} />

          <p className="bath__description">
            Bath is one of England&rsquo;s most elegant and historically rich cities,
            famed for its golden Georgian architecture and Roman heritage. Nestled in
            the rolling countryside of Somerset, it offers a perfect blend of culture,
            relaxation, and charm.
          </p>
          <p className="bath__description" style={{ marginTop: '1rem' }}>
            The city&rsquo;s compact layout makes it ideal for wandering, with boutique
            shops, cosy cafés, and excellent restaurants tucked along its picturesque
            streets. Whether you&rsquo;re soaking in modern thermal spas, discovering
            literary connections to Jane Austen, or enjoying scenic walks along the
            River Avon, Bath provides a refined yet welcoming escape.
          </p>

          <div className="bath__travel">
            <h3 className="bath__travel-heading">Getting There</h3>
            <a
              href="https://www.bath.ac.uk/topics/travel-advice/"
              className="bath__travel-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              University travel advice
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M3 8H13M13 8L9 4M13 8L9 12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Right: highlights */}
        <div className="reveal" ref={highlightsRef}>
          <h3 className="bath__highlights-heading">Things to See &amp; Do</h3>
          <ul className="bath__highlights-list" role="list">
            {HIGHLIGHTS.map(h => (
              <li key={h.name} className="bath__highlight">
                <div className="bath__highlight-icon" aria-hidden="true">
                  {h.icon}
                </div>
                <div className="bath__highlight-text">
                  <span className="bath__highlight-name">{h.name}</span>
                  <span className="bath__highlight-desc">{h.desc}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
