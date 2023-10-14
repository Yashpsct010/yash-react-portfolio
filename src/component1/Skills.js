import React from 'react'
import { faCss3, faGit, faGithub, faHtml5, faJs, faNodeJs, faPhp, faPython, faReact, faSass } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import  mongodb  from '../assets/images/mongodb.png'
import  ajax  from '../assets/images/bxl-jquery-icon.png'
export const Skills = () => {
  return (
    <>
<div className="skills" id='skills'>
<h3>SKILLS</h3>
    <section id="skills-roadmap">
        <h2>Web Development</h2>
        <div className="skillss">
        <div className="skill">
            <div className="skill-icon"><FontAwesomeIcon icon={faHtml5} /></div>
        </div>

        <div className="skill">
            <div className="skill-icon"><FontAwesomeIcon icon={faCss3} /></div>
        </div>

        <div className="skill">
            <div className="skill-icon"><FontAwesomeIcon icon={faReact} /></div>
        </div>

        <div className="skill">
            <div className="skill-icon"><FontAwesomeIcon icon={faNodeJs} /></div>
        </div>

        <div className="skill">
            <div className="skill-icon"><img src={mongodb} alt="mongodb_logo"/></div>
        </div>

        <div className="skill">
            <div className="skill-icon"><FontAwesomeIcon icon={faSass} /></div>
        </div>

        <div className="skill">
            <div className="skill-icon"><img src={ajax} alt="ajax_logo"/></div>
        </div>
        </div>

    </section>

    <section id="skills-roadmap">
        <h2>Programming Languages</h2>
        <div className="skillss">
        <div className="skill">
            <div className="skill-icon"><FontAwesomeIcon icon={faPhp} /></div>
        </div>

        <div className="skill">
            <div className="skill-icon"><FontAwesomeIcon icon={faJs} /></div>
        </div>

        <div className="skill">
            <div className="skill-icon">C++</div>
        </div>

        <div className="skill">
            <div className="skill-icon">SQL</div>
        </div>

        <div className="skill">
            <div className="skill-icon"><FontAwesomeIcon icon={faPython} /></div>
        </div>
        </div>

    </section>

    <section id="skills-roadmap">
        <h2>Technical Skills</h2>
        <div className="skillss">
        <div className="skill">
            <div className="skill-icon"><FontAwesomeIcon icon={faGit} /></div>
        </div>

        <div className="skill">
            <div className="skill-icon"><FontAwesomeIcon icon={faGithub} /></div>
        </div>

        <div className="skill">
            <div className="skill-icon">Restful API</div>
        </div>
        </div>

    </section>
    </div>    
    </>
  )
}
