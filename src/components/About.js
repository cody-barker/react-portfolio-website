import headshot from '../assets/headshot-square-crop.png'

function About() {

  return(
      <section id="about" className="about-wrap">
        <header className="section-header">
          <h2 id="about-title">Hi. I'm Cody.</h2>
        </header>
        <div className="about-section">
          <div id="about-left" className="about-left">
            <h3>
              I'm a Full-Stack Web Developer with a focus on modern Frontend design. As a former conservationist, plant breeder, and researcher, I'm passionate about the intersection of technology, culture, and the environment.
            </h3>
            <h3>
              When I'm not working, you can find me out on the river, angling for steelhead, hiking a new trail with my dog, or exploring all the wonderful art galleries Portland has to offer.
            </h3>
          </div>
          <div id="about-right" className="about-right">
            <img className="about-section-headshot" src={headshot} loading="lazy"></img>
          </div>
        </div>
      </section>
  )
}

export default About