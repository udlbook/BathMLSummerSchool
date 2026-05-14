import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal.js'

const DAYS = [
  {
    id: 'wed',
    tab: 'Wednesday 5 Aug',
    heading: 'Wednesday 5th August',
    sessions: [
      {
        type: 'intro',
        time: '1:30 pm',
        title: 'Introduction & Welcome',
      },
      {
        type: 'talk',
        time: '1:45 – 3:00 pm',
        title: 'ODEs and SDEs in ML (1)',
        subtitle: 'ODEs in Machine Learning',
        speaker: 'Simon Prince',
        institution: 'University of Bath',
        topics: [
          'ODEs and their solutions',
          'Closed form solutions',
          'Numerical approaches',
          'Neural ODEs',
          'Continuous normalizing flows',
          'Physics informed neural networks',
        ],
      },
      { type: 'break', label: 'Coffee Break' },
      {
        type: 'talk',
        time: '3:30 – 5:00 pm',
        title: 'ODEs and SDEs in ML (2)',
        subtitle: 'Introduction to SDEs',
        speaker: 'Simon Prince',
        institution: 'University of Bath',
        topics: [
          'Stochastic processes',
          'Stochastic integration',
          "Itô's lemma",
          'Fokker–Planck equation',
          "Anderson's reverse-time theorem",
        ],
      },
    ],
  },
  {
    id: 'thu',
    tab: 'Thursday 6 Aug',
    heading: 'Thursday 6th August',
    sessions: [
      {
        type: 'talk',
        time: '9:30 – 11:30 am',
        title: 'ODEs and SDEs in ML (3)',
        subtitle: 'SDEs in Machine Learning',
        speaker: 'Simon Prince',
        institution: 'University of Bath',
        topics: [
          'Stochastic gradient descent as an SDE',
          'Implicit regularization',
          'Diffusion models',
        ],
      },
      { type: 'break', label: 'Coffee Break' },
      {
        type: 'talk',
        time: '12:00 – 1:00 pm',
        title: 'Foundations of Probabilistic ML',
        speaker: 'Neill Campbell',
        institution: 'University College London',
        topics: [
          'Introduction to Bayesian ML',
          'No free lunch theorem',
          'Introduction to probability',
          'Model selection',
          'Evaluation',
          'Causality',
        ],
      },
      { type: 'break', label: 'Lunch Break' },
      {
        type: 'talk',
        time: '2:00 – 3:30 pm',
        title: 'Foundations of Probabilistic ML (cont.)',
        speaker: 'Neill Campbell',
        institution: 'University College London',
        topics: [],
      },
      { type: 'break', label: 'Coffee Break' },
      {
        type: 'talk',
        time: '4:00 – 5:00 pm',
        title: 'Applied Bayesian Deep Learning',
        speaker: 'Ivor Simpson',
        institution: 'University of Sussex',
        topics: [
          'Reducible (epistemic) vs irreducible (aleatoric) uncertainty',
          'Bayesian neural networks — ensembles, dropout, variational, sampling',
          ' ⁠Bayesian approaches for neural networks',
          'Calibration and robustness',
          'Efficient inference of uncertainty',
          '⁠Real-world impact: Why uncertainty quantification is critical for medical imaging',
        ],
      },
    ],
  },
  {
    id: 'fri',
    tab: 'Friday 7 Aug',
    heading: 'Friday 7th August',
    sessions: [
      {
        type: 'talk',
        time: '9:30 – 10:30 am',
        title: 'Deep Generative Models for Inverse Problems in Imaging',
        speaker: 'Ivor Simpson',
        institution: 'University of Sussex',
        topics: [
          'From regularization to deep learning',
          'Generative models (VAEs, GANs, Diffusion) as regularisers',
          'Blind inverse problems',
          'Posterior sampling and uncertainty quantification',
          'Case studies in MR image reconstruction / super-resolution',
        ],
      },
      { type: 'break', label: 'Coffee Break' },
      {
        type: 'talk',
        time: '11:00 am – 12:30 pm',
        title: 'Self-Supervised Learning',
        speaker: 'Oisin Mac Aodha',
        institution: 'University of Edinburgh',
        topics: [
          'Early attempts at learning representations via self-supervision',
          'Contrastive methods',
          'Masked-based objectives',
          'Recent approaches, e.g. DINOv2',
          'Limitations and open questions',
        ],
      },
      { type: 'break', label: 'Lunch Break' },
      {
        type: 'invited',
        time: '1:30 – 2:30 pm',
        title: 'Tracking Any Point',
        speaker: 'Gabriel Brostow',
        institution: 'University College London',
        topics: [],
      },
      { type: 'break', label: 'Coffee Break' },
      {
        type: 'talk',
        time: '3:00 – 5:00 pm',
        title: 'World Models: Learning to Simulate the Future',
        speaker: 'Deblina Bhattacharjee',
        institution: 'University of Bath',
        topics: [
          'What is a world model?',
          'Classic foundations',
          'Latent state-space models and Dreamer',
          'Video prediction as world modelling',
          'World models at scale',
          'Real-world applications',
          'Open challenges and research frontiers',
        ],
      },
    ],
  },
]

/** @param {{ session: object }} props */
function Session({ session }) {
  if (session.type === 'break') {
    return (
      <div className="session session--break">
        <div className="session__time" />
        <div className="session__content">
          <span className="break-label">{session.label}</span>
        </div>
      </div>
    )
  }

  if (session.type === 'intro') {
    return (
      <div className="session session--intro">
        <div className="session__time">{session.time}</div>
        <div className="session__content">
          <p className="session__title">{session.title}</p>
        </div>
      </div>
    )
  }

  return (
    <div className={`session${session.type === 'invited' ? ' session--invited' : ''}`}>
      <div className="session__time">{session.time}</div>
      <div className="session__content">
        <h3 className="session__title">
          {session.title}
          {session.type === 'invited' && (
            <span className="invited-badge">Invited Talk</span>
          )}
        </h3>
        {session.subtitle && (
          <p className="session__subtitle">{session.subtitle}</p>
        )}
        {session.speaker && (
          <p className="session__speaker">
            {session.speaker}
            {session.institution && (
              <span className="session__speaker-inst"> · {session.institution}</span>
            )}
          </p>
        )}
        {session.topics && session.topics.length > 0 && (
          <ul className="session__topics" role="list">
            {session.topics.map((t, i) => (
              <li key={i} className="session__topic">{t}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default function ProgrammeSection() {
  const [activeDay, setActiveDay] = useState('wed')
  const headerRef = useScrollReveal()

  return (
    <section id="programme" className="programme">
      <div className="container">
        <div className="section-header reveal" ref={headerRef}>
          <p className="section-eyebrow">Schedule</p>
          <h2 className="section-title">Programme</h2>
          <div className="section-rule" />
          <p className="section-note">(subject to change)</p>
        </div>

        <div className="programme__tabs" role="tablist" aria-label="Programme days">
          {DAYS.map(day => (
            <button
              key={day.id}
              role="tab"
              aria-selected={activeDay === day.id}
              aria-controls={`day-${day.id}`}
              className={`programme__tab${activeDay === day.id ? ' is-active' : ''}`}
              onClick={() => setActiveDay(day.id)}
            >
              {day.tab}
            </button>
          ))}
        </div>

        {DAYS.map(day => (
          <div
            key={day.id}
            id={`day-${day.id}`}
            role="tabpanel"
            aria-label={day.heading}
            className={`programme__day${activeDay === day.id ? ' is-active' : ''}`}
          >
            <div className="programme__sessions">
              {day.sessions.map((session, i) => (
                <Session key={i} session={session} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
