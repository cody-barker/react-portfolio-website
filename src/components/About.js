import headshot from '../assets/headshot-square-crop.png'


function About() {

  return(
      <div id="about" className="about-wrap">
        <header className="section-header">
          <h2>About</h2>
        </header>
        <div className="about-section">
          <div className="about-left">
            <h3>I'm a Full-Stack Web Developer with a focus on elegant Frontend design. As a former conservationist, plant breeder, and researcher, I'm passionate about the intersection of technology, culture, and the environment.</h3>
          </div>
          <div className="about-right">
            <img className="about-section-headshot" src={headshot}></img>
          </div>
        </div>
      </div>


  )
}

export default About