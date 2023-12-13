import headshot from '../assets/Cody_Barker_Headshot.jpg'
import githubIcon from '../assets/brand-github.svg'
import linkedInIcon from '../assets/brand-linkedin.svg'
import devToIcon from '../assets/brand-dev.to.svg'
import NavBar from '../components/NavBar.js'
import About from '../components/About.js'
import Projects from '../components/Projects.js'
import Skills from '../components/Skills.js'
import jungle from '../assets/jungle.jpg'

function Home() {

  return(
    <>
      <NavBar />
      <header className="header-wrap">
        <div className="header-content">
          <h2>Full-Stack Developer</h2>
          <h3>Designing practical web applications with environmental sensibilities.</h3>
        </div>
      </header>
      <About id="about"/>
      <Skills />
      <Projects id="projects"/>
    </>
  )
}

export default Home