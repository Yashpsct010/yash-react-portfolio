import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram,faLinkedin,faGithub } from '@fortawesome/free-brands-svg-icons'
import yash from '../assets/pdf/Yash-Parmar-Resume.pdf'
import { faContactBook, faFile } from '@fortawesome/free-regular-svg-icons'
export const Home = () => {
  return (
    <>
      <div className="home" id='home'>
    <div className="all">
    <p>Code Craftsmanship Unleashed:<br/><br /> Dive into My Portfolio.</p>
    <div className='home-link d-flex justify-content-evenly'>
    <a href="#contact">
    <FontAwesomeIcon icon={faContactBook} />
    </a>
    <a target='_blank' rel="noreferrer" href={yash}>
    <FontAwesomeIcon icon={faFile} />
    </a>
    <a target='_blank' rel="noreferrer" href="https://www.linkedin.com/in/yash-parmar-394460222/">
    <FontAwesomeIcon icon={faLinkedin} />
    </a>
    <a target='_blank' rel="noreferrer" href="https://www.instagram.com/yashpsct010/">
    <FontAwesomeIcon icon={faInstagram} />
    </a>
    <a target='_blank' rel="noreferrer" href="https://github.com/Yashpsct010/">
    <FontAwesomeIcon icon={faGithub} />
    </a>
    </div>
    </div>
      <div className="svg">
      <iframe title="svgicon" src="https://lottie.host/?file=660d98ee-a11c-46ae-bf8e-08a3bc8e56b0/l5CcG5vJrz.json"></iframe>
      </div>
    </div>
    </>
  )
}
