import portlandNativePlantsPreview from '../assets/Portland Plant List Preview Image.png'
import soilMoistureSensorsPreview from '../assets/Soil Moisture Sensors Preview Image.png'
import trailScanPreview from '../assets/TrailScan Preview Image.png'
import trakablePreview from '../assets/Trakable Preview Image.png'
import farmTrackerPreview from '../assets/Farm Tracker Preview Image.png'

function Projects() {
  return(
    <div id="projects">
      <div className="section-header">
        <h2>Projects</h2>
      </div>
      <section className="projects-container">

        <div className="project flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img className="project-image" loading="lazy" src={portlandNativePlantsPreview} alt="portland native plants preview"/>
            </div>
            <div className="flip-card-back">
              <h3>Portland Native Plants</h3>
            </div>
          </div>
        </div>

        <div className="project flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img className="project-image" loading="lazy" src={soilMoistureSensorsPreview} alt="soil moisture sensors preview"/>
            </div>
            <div className="flip-card-back">
              <h3>Soil Moisture Sensors</h3>
            </div>
          </div>
        </div>

        <div className="project flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img className="project-image" loading="lazy" src={trailScanPreview} alt="trailscan preview"/>
            </div>
            <div className="flip-card-back">
              <h3>Trailscan</h3>
            </div>
          </div>
        </div>

        <div className="project flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img className="project-image" loading="lazy" src={trakablePreview} alt="trakable preview"/>
            </div>
            <div className="flip-card-back">
              <h3>Trakable</h3>
            </div>
          </div>
        </div>

        <div className="project flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img className="project-image" loading="lazy" src={farmTrackerPreview} alt="farm tracker preview"/>
            </div>
            <div className="flip-card-back">
              <h3>Farm Tracker</h3>
            </div>
          </div>
        </div>

      </section>
    </div>
  )
}

export default Projects