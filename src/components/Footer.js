import githubIcon from '../assets/brand-github.svg'
import linkedInIcon from '../assets/brand-linkedin.svg'
import devToIcon from '../assets/brand-dev.to.svg'
import resumeIcon from '../assets/resume.svg'

function Footer() {

  const socials = [
    {
      id: 0,
      name: "Github",
      link: "https://github.com/cody-barker",
      icon: githubIcon
    },
    {
      id: 1,
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/barkercody/",
      icon:linkedInIcon
    },
    {
      id: 2,
      name: "Dev.to",
      link:"https://dev.to/codybarker",
      icon: devToIcon
    },
    {
      id: 3,
      name: "Resume",
      link: "https://drive.google.com/file/d/1-Ve7W1xTTducqajRfEBZZL0o2ZixIQ8w/view?usp=sharing",
      icon: resumeIcon
    }
  ]

  const socialIcons = socials.map((social) => {
    const {
      id,
      name,
      link,
      icon
    } = social

    return (
      <a key={id} href={link} target="_blank" rel='noreferrer'>
        <img className="social-icon" src={icon} alt={{name} + "icon"} loading="lazy"/>
      </a>
    )
  })

  return(
    <footer id="socials">
      <div className="footer-name">
        <a href="#nav">
          <h4>Cody Barker</h4>
        </a>
        <p>Designing practical web applications with environmental sensibilities.</p>
      </div>
      <div className="footer-socials">
        {socialIcons}
      </div>
    </footer>
  )
}

export default Footer