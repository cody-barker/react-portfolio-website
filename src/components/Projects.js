import portlandNativePlantsPreview from '../assets/Portland Plant List Preview Image.png'
import soilMoistureSensorsPreview from '../assets/Soil Moisture Sensors Preview Image.png'
import trailScanPreview from '../assets/TrailScan Preview Image.png'
import trakablePreview from '../assets/Trakable Preview Image.png'
import farmTrackerPreview from '../assets/Farm Tracker Preview Image.png'
import whiteGithubIcon from '../assets/white-github-icon.svg'

function Projects() {

const projects = [
  {
    id: 0,
    title: "Portland Native Plants",
    description: "An expansive list of plant species native to Portland, Oregon.",
    image: portlandNativePlantsPreview,
    website: "https://www.portlandnativeplants.com",
    github: "https://github.com/cody-barker/portland-native-plants"
  },

  {
    id: 1,
    title: "Soil Moisture Sensors",
    description: "A template for graphically displaying soil moisture levels, temp, and humidity with an ESP32 microcontroller, InfluxDB, and Grafana.",
    image: soilMoistureSensorsPreview,
    website: null,
    github: "https://github.com/cody-barker/soil-moisture-sensors"
  },

  {
    id: 2,
    title: "TrailScan",
    description: "An app built for hikers. Users can add new trails and review the ones they've hiked.",
    image: trailScanPreview,
    website: "https://trailscan.onrender.com/",
    github: "https://github.com/cody-barker/trailscan"
  },

  {
    id: 3,
    title: "Trakable",
    description: "A task management app that allows users to join teams, and contribute to projects by creating and managing tasks.",
    image: trakablePreview,
    website: "https://trakable.onrender.com/",
    github: "https://github.com/cody-barker/trakable"
  },

  {
    id: 4,
    title: "Farm Tracker",
    description: "Maintains a record of the production beds on a number of farms, with full CRUD for both Farms and Beds.",
    image: farmTrackerPreview,
    website: "https://farm-tracker.onrender.com",
    github: "https://github.com/cody-barker/farmtracker"
  },
]

const projectCards = projects.map((project) => {

  const { 
    id,
    title,
    description,
    image,
    website,
    github
  } = project

  return(
    <div key={id} className="project flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img className="project-image" loading="lazy" src={image} alt={{title} + "preview"}/>
        </div>
        <div className="flip-card-back">
          <a href={website} src={website} target='_blank' rel="noopener">
            <h3>{title}</h3>
          </a>
          <h4>{description}</h4>
          <a className="icon" href={github} target="_blank" rel="noopener" alt={{title} + "preview"}>
            <img src={whiteGithubIcon}/>
          </a>
        </div>
      </div>
    </div>
  )
})

  return(
    <div id="projects">
      <div className="section-header">
        <h2>Projects</h2>
      </div>
      <section className="projects-container">
        {projectCards}
      </section>
    </div>
  )
}

export default Projects