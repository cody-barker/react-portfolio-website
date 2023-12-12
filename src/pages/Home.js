import headshot from '../assets/Cody_Barker_Headshot.jpg'
import githubIcon from '../assets/brand-github.svg'
import linkedInIcon from '../assets/brand-linkedin.svg'
import devToIcon from '../assets/brand-dev.to.svg'
import NavBar from '../components/NavBar.js'
import About from '../components/About.js'
import Projects from '../components/Projects.js'

function Home() {

  return(
    <>
      <NavBar />
      <header className="main-header"></header>
      <About id="about"/>
      <Projects id="projects"/>
    </>
  )
}

export default Home