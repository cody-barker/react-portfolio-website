
function Skills() {
  return(
    <section id="skills-container" className="skills-container">
      <div className="skill-cards-container">
        <div className="skills-card">
          <div className="skills-title-container">
            <h2 className="skill-title">Frontend</h2>
          </div>
          <ul className="skills-list">
            <li>JavaScript</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>React</li>
            <li>Redux</li>
            <li>React Context API</li>
            <li>Single Page Applications</li>
          </ul>
        </div>
        <div className="skills-card">
          <div className="skills-title-container">
            <h2 className="skill-title">Backend</h2>
          </div>
          <ul className="skills-list">
            <li>Ruby on Rails</li>
            <li>RESTful APIs</li>
            <li>Active Record</li>
            <li>Validations and Serialization</li>
            <li>Authentication & Authorizations</li>
            <li>Relational Databases</li>
            <li>PostgreSQL</li>
            <li>Sessions</li>
            <li>MVC</li>
          </ul>
        </div>
        <div className="skills-card">
          <div className="skills-title-container">
            <h2 className="skill-title">Extended Skills</h2>
          </div>        
          <ul className="skills-list">
            <li>Git</li>
            <li>Github</li>
            <li>Deployment</li>
            <li>Arduino IDE</li>
            <li>Project Management</li>
            <li>Research</li>
            <li>Inkscape</li>
            <li>Asana</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Skills