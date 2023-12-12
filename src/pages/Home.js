import headshot from '../assets/Cody_Barker_Headshot.jpg'
import githubIcon from '../assets/brand-github.svg'
import linkedInIcon from '../assets/brand-linkedin.svg'
import devToIcon from '../assets/brand-dev.to.svg'
import NavBar from '../components/NavBar.js'
import About from '../components/About.js'
import Projects from '../components/Projects.js'
import jungle from '../assets/jungle.jpg'

function Home() {

  return(
    <>
      <NavBar />
      <header className="header-wrap">
        <div className="header-content">
          <h2>Full-Stack Developer</h2>
        </div>
      </header>
      <About id="about"/>
      <Projects id="projects"/>
    </>
  )
}

export default Home