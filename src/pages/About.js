import headshot from '../assets/Cody_Barker_Headshot.jpg'

function About() {

  function onClick(url) {
    window.open(url, '_blank')
  }

  return(
      // <div className="about-container">
      //   <h2>hi, i'm cody!</h2>
      //   <p className="about-content">I'm a Full-Stack Software Engineer, experienced with React, JavaScript, Ruby on Rails, and more. I graduated from Flatiron School, where I built projects combining React frontends with RESTful APIs using Ruby on Rails. 
      // //   </p>
      //   <p>Prior to my software engineering career, I served as Director of Cultivation at Infinite Tree, where I managed the production and sale of over 200,000 USDA organic nursery plants, developed and released 4 industry-leading, university tested cultivars, conducted 15+ scientific cultivation studies, and provided consulting services to farms and government organizations domestically and internationally. 
      // //   </p>
      //   <p>I also have extensive experience in ecological restoration and am passionate about the intersection of sustainability, technology, culture, and the environment. My desire is to create applications that connect users with their local environment, driving education and engagement in the world around us. I'm compassionate, professional, reliable, and eager to apply my proven project management and technical skills to the software industry.
      // //   </p>
      //   <div className="about-skills-container">
      //     <h2>my skills</h2>
      //     <ul>
      //       <div>
      //         <li>JavaScript</li>
      //         <li>React</li>
      //         <li>Redux</li>
      //         <li>Ruby on Rails</li>
      //       </div>
      //       <div>
      //         <li>Active Record</li>
      //         <li>HTML</li>
      //         <li>CSS</li>
      //         <li>RESTful APIs</li>
      //       </div>
      //       <div>
      //         <li>Inkscape</li>
      //         <li>Project Management</li>
      //         <li>Customer Service</li>
      //         <li>Research</li>
      //       </div>
      //     </ul>
      //   </div>
      // </div>
      <>
        <header className="section-header">
          <h1>About Me</h1>
        </header>
        <section className="about-section">
          <img className="about-section-headshot" src={headshot}></img>
          <p className="about-content">I'm a Full-Stack Software Engineer, experienced with React, JavaScript, Ruby on Rails, and more. I graduated from Flatiron School, where I learned how to build projects combining React frontends with RESTful APIs using Ruby on Rails. Some interesting personal projects I've been working on include <a href="https://github.com/cody-barker/soil-moisture-sensors" target="_blank" rel="noopener noreferrer">Soil Moisture Sensors</a>, a repo for collecting and visualizing soil moisture sensor readings on a Grafana dashboard, and the <a href="https://portlandnativeplants.com" target="_blank" rel="noopener noreferrer">Portland Native Plants</a> website, which catalogs the details of an extensive list of plants native to the Portland, OR metro area. </p>
          <p className="about-content">Prior to my software engineering career, I served as Director of Cultivation at Infinite Tree, where I managed the production and sale of over 200,000 USDA organic nursery plants, developed and released 4 industry-leading, university tested cultivars, conducted 15+ scientific cultivation studies, and provided consulting services to farms and government organizations domestically and internationally.</p>
          <p className="about-content">I also have extensive experience in ecological restoration and am passionate about the intersection of sustainability, technology, culture, and the environment. My desire is to create applications that connect users with their local environment, driving education and engagement in the world around us. I'm compassionate, professional, reliable, and eager to apply my proven project management and technical skills to the software industry.</p>
        </section>
      </>

  )
}

export default About