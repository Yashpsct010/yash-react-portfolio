import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram,faLinkedin,faGithub } from '@fortawesome/free-brands-svg-icons'
import bgImg from '../assets/images/bgImg.jpg'
import yash from '../assets/pdf/Yash-Parmar-Resume.pdf'
import { faContactBook, faFile } from '@fortawesome/free-regular-svg-icons'
export const Home = () => {
  return (
    <>
      <div className="home" id='home' style={{backgroundImage:`url(${bgImg})`,backgroundSize:`cover`, height:"100vh",width:"100%",}}>
    <p style={{color:"#00000",padding:"20rem 4rem 4rem 3rem",fontSize:"3rem"}}>Code Craftsmanship Unleashed:<br/><br /> Dive into My Portfolio.</p>
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
    </>
  )
}
