import { useScrollReveal } from '../hooks/useScrollReveal.js'

const REGISTER_URL =
  'https://store.bath.ac.uk/product-catalogue/items-for-staff-students-and-alumni/faculty-of-science/department-of-computer-science/bath-summer-school-in-machine-learning-2026'

const ELIGIBILITY = [
  'PhD students, PostDocs, and research staff at any UK or EU university',
  'Solid foundational knowledge of machine learning assumed',
  'Applicants must be available to attend the full three-day programme',
]

const PRICES = [
  {
    label: 'Without Accommodation',
    amount: '£150',
    description: 'Registration only.',
    featured: false,
  },
  {
    label: 'With Accommodation',
    amount: '£320',
    description:
      'Registration plus three nights in University halls (Wed 6th – Sat 9th Aug). Limited places — register promptly if you want this option.',
    featured: true,
  },
]

export default function RegistrationSection() {
  const headerRef = useScrollReveal()
  const eligibilityRef = useScrollReveal()
  const pricingRef = useScrollReveal()
  const costsRef = useScrollReveal()

  return (
    <section id="registration" className="registration">
      <div className="container">
        <div className="section-header reveal" ref={headerRef}>
          <p className="section-eyebrow">Join Us</p>
          <h2 className="section-title" style={{ color: 'var(--navy)' }}>
            Registration
          </h2>
          <div className="section-rule" />
        </div>

        <div className="registration__body">
          {/* Eligibility */}
          <div className="registration__eligibility reveal" ref={eligibilityRef}>
            <h3 className="registration__subheading">Who Can Apply</h3>
            <ul className="registration__eligibility-list" role="list">
              {ELIGIBILITY.map(item => (
                <li key={item} className="registration__eligibility-item">
                  <span className="registration__check" aria-hidden="true">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="registration__contact">
              Unsure whether you&rsquo;re eligible?{' '}
              <a href="mailto:drsjdprince@gmail.com" className="registration__email-link">
                Contact us.
              </a>
            </p>
          </div>

          {/* Costs note */}
          <div className="registration__costs reveal" ref={costsRef}>
            <h3 className="registration__subheading">Costs</h3>
            <p className="registration__costs-text">
              We have endeavoured to keep costs as low as possible. Tea and coffee are
              included throughout; meals are at your own expense. There are many
              accommodation options available in Bath and nearby Bristol in addition to
              the university halls package below.
            </p>
          </div>
        </div>

        {/* Pricing cards */}
        <div className="registration__pricing reveal" ref={pricingRef}>
          {PRICES.map(price => (
            <div
              key={price.label}
              className={`price-card${price.featured ? ' price-card--featured' : ''}`}
            >
              {price.featured && (
                <div className="price-card__badge">Limited Availability</div>
              )}
              <p className="price-card__label">{price.label}</p>
              <p className="price-card__amount">{price.amount}</p>
              <p className="price-card__description">{price.description}</p>
              <a
                href={REGISTER_URL}
                className={`btn${price.featured ? ' btn--primary' : ' btn--outline-dark'}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Register Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
