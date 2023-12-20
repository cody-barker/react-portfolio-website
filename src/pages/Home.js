import About from "../components/About.js";
import Projects from "../components/Projects.js";
import Skills from "../components/Skills.js";
import Footer from "../components/Footer.js";

function Home() {
  return (
    <>
      <header className="header-wrap" loading="lazy">
        <div className="header-content">
          <h2 id="header-title">Full-Stack Developer</h2>
          <h3 id="header-subtitle">
            Designing practical web applications with environmental
            sensibilities.
          </h3>
        </div>
      </header>
      <About id="about" />
      <Skills />
      <Projects id="projects" />
      <Footer />
    </>
  );
}

export default Home;
