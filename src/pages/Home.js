import headshot from '../assets/Cody_Barker_Headshot.jpg'
import githubIcon from '../assets/brand-github.svg'
import linkedInIcon from '../assets/brand-linkedin.svg'
import devToIcon from '../assets/brand-dev.to.svg'
import About from '../components/About.js'

function Home() {

  function onClick(url) {
    window.open(url, '_blank')
  }

  return(
    // <div className="container">
    //   <div className="home-left">
    //     <img src={headshot} alt="headshot"/>
    //   </div>
    //   <div className="home-right">
    //     <h1>Cody Barker</h1>
    //     <p>Full-Stack Software Engineer</p>
    //     <p>React | JavaScript | Ruby on Rails</p>
    //     <div className="icons-container">
    //       <button onClick={() => onClick('https://drive.google.com/file/d/1E1DjQEfq_jVlV4agaku-KVr_8c2LDmM3/view?usp=drive_link')}>Resume</button>
    //       <img id="no-shadow" src={linkedInIcon} alt="LinkedIn icon" onClick={() => onClick('https://www.linkedin.com/in/barkercody/')}/>
    //       <img id="no-shadow" src={githubIcon} alt="GitHub icon" onClick={() => onClick('https://github.com/cody-barker')}/>
    //       <img id="no-shadow" src={devToIcon} alt="Dev.to icon" onClick={() => onClick('https://dev.to/codybarker')}/>
    //     </div>
    //   </div>
    // </div>
    <About id="about"/>
  )
}

export default Home