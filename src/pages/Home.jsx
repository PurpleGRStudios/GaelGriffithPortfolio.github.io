import Footer from '../components/Footer.jsx'
import { ArrowIcon } from '../components/Icons.jsx'
import ProjectTabs from '../components/ProjectTabs.jsx'
import Slider from '../components/Slider.jsx'
import { asset, featured } from '../data/projects.js'

const CV_URL = encodeURI(asset('pdf/Gael Griffith CV.pdf'))

export default function Home() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <>
      <section className="hero" id="top">
        <div className="hero-content">
          <div className="eyebrow"><span /> AMSTERDAM — NETHERLANDS</div>
          <h1>
            Gael
            <span>Griffith.</span>
          </h1>
          <p className="hero-description">
            Aspiring graphics &amp; gameplay developer. I build games in Unity and Unreal Engine —
            every system is another way through. Don&apos;t stop moving.
          </p>
          <div className="hero-actions">
            <button className="primary-action" onClick={() => scrollTo('services')}>
              <span>VIEW PROJECTS</span>
              <ArrowIcon />
            </button>
            <a className="secondary-action" href={CV_URL} target="_blank" rel="noreferrer">
              DOWNLOAD CV
            </a>
          </div>
        </div>

        <Slider slides={featured} />
      </section>

      <ProjectTabs />

      <section id="about" className="section">
        <div className="section-head">
          <div className="eyebrow"><span /> RUNNER PROFILE</div>
          <h2>About me<em>.</em></h2>
        </div>
        <div className="about-grid">
          <div className="about-copy">
            <p>
              I'm an 20-year-old aspiring Unity/Unreal developer from Amsterdam, The Netherlands.
              Living day to day with my mind always drifting off somewhere. My journey into the
              world of technology and software development began with a deep love for games and
              their impact on me as a child.
            </p>
            <p>
              Witnessing how games can spark all kinds of emotions, create connections, and even
              inspire, I was driven to explore the art of programming to create experiences that
              could touch people on a deeper level. Now, I'm seeking an internship in an
              environment that values effective workflow, hoping to further hone my skills and
              contribute to the world of game development with my creative ideas.
            </p>
            <p>
              I'm excited to continue my journey in the world of game development, and I'm always
              looking for new opportunities to create extraordinary gaming adventures. Let's
              connect and make something amazing together!
            </p>
          </div>
          <div className="about-photo">
            <img src={asset('img/17939550062067686.jpg')}alt="Gael Griffith" />
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
