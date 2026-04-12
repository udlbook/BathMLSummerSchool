import { useScrollReveal } from '../hooks/useScrollReveal.js'

const SPEAKERS = [
  {
    name: 'Deblina Bhattacharjee',
    image: '/Deblina Bhattacharjee.jpg',
    role: 'Assistant Professor',
    institution: 'University of Bath',
    bio: 'An interdisciplinary AI researcher working at the intersection of Computer Vision and the Arts. Her research spans generative models, 3D reconstruction, multimodal large language models, depth estimation, and visual saliency. Recipient of three prestigious fellowships including the Perplexity AI Business Fellowship.',
  },
  {
    name: 'Gabriel Brostow',
    image: '/Gabriel Brostow.jpg',
    role: 'Professor of Computer Science',
    institution: 'University College London',
    bio: 'A Professor at UCL and former Chief Research Scientist and Senior Director at Niantic (creators of Pokémon GO). His research focuses on Human-Centered AI at the intersection of Computer Vision and HCI, building "super-tools" for architects, filmmakers, and roboticists.',
  },
  {
    name: 'Neill Campbell',
    image: '/Neill Campbell.png',
    role: 'Professor of Visual Computing & ML',
    institution: 'University College London',
    bio: 'A Professor of Visual Computing and Machine Learning at UCL and former Royal Society Industry Fellow. His research focuses on learning models of shape, appearance, and dynamics from images, with particular interest in Bayesian non-parametric methods and medical applications.',
  },
  {
    name: 'Oisin Mac Aodha',
    image: '/Oisin Mac Aodha.jpeg',
    role: 'Reader in Machine Learning',
    institution: 'University of Edinburgh',
    bio: 'A Reader in Machine Learning in the School of Informatics at the University of Edinburgh. His research spans human-in-the-loop machine learning, representation learning, 3D understanding, and AI for climate, conservation, and biodiversity monitoring.',
  },
  {
    name: 'Simon Prince',
    image: '/Simon Prince.jpeg',
    role: 'Honorary Professor',
    institution: 'University of Bath',
    bio: 'Author of two influential textbooks: Understanding Deep Learning (MIT Press, 2023) and Computer Vision: Models, Learning, and Inference (Cambridge, 2012). He has led research teams at Borealis AI (RBC) and Anthropic Technologies, following a tenured position at UCL.',
  },
  {
    name: 'Ivor Simpson',
    image: '/Ivor Simpson.jpeg',
    role: 'Associate Professor in AI',
    institution: 'University of Sussex',
    bio: 'Academic Lead for Sussex AI and convenor of the MRes in Advanced Artificial Intelligence. His research develops novel machine learning and statistical inference methods for imaging and temporal data, with applications in medical image analysis and ecological monitoring.',
  },
]

/** @param {{ speaker: object, delay: number }} props */
function SpeakerCard({ speaker, delay }) {
  const ref = useScrollReveal()

  return (
    <article
      className={`speaker-card reveal reveal-d${delay}`}
      ref={ref}
    >
      <div className="speaker-card__photo-wrap">
        <img
          className="speaker-card__photo"
          src={speaker.image}
          alt={speaker.name}
          loading="lazy"
        />
      </div>
      <h3 className="speaker-card__name">{speaker.name}</h3>
      <p className="speaker-card__role">{speaker.role}</p>
      <p className="speaker-card__institution">{speaker.institution}</p>
      <div className="speaker-card__divider" />
      <p className="speaker-card__bio">{speaker.bio}</p>
    </article>
  )
}

export default function SpeakersSection() {
  const headerRef = useScrollReveal()

  return (
    <section id="speakers" className="speakers">
      <div className="container">
        <div className="section-header reveal" ref={headerRef}>
          <p className="section-eyebrow">Faculty</p>
          <h2 className="section-title">Speakers</h2>
          <div className="section-rule" />
        </div>

        <div className="speakers__grid">
          {SPEAKERS.map((speaker, i) => (
            <SpeakerCard
              key={speaker.name}
              speaker={speaker}
              delay={Math.min((i % 3) + 1, 6)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
