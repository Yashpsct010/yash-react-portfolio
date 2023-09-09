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
        <h2>Web Development :-</h2>

        <div className="skill">
            <div className="skill-icon"><FontAwesomeIcon icon={faHtml5} /></div>
            <div className="skill-details">
            </div>
        </div>

        <div className="skill">
            <div className="skill-icon"><FontAwesomeIcon icon={faCss3} /></div>
            <div className="skill-details">
            </div>
        </div>

        <div className="skill">
            <div className="skill-icon"><FontAwesomeIcon icon={faReact} /></div>
            <div className="skill-details">
            </div>
        </div>

        <div className="skill">
            <div className="skill-icon"><FontAwesomeIcon icon={faNodeJs} /></div>
            <div className="skill-details">
            </div>
        </div>

        <div className="skill">
            <div className="skill-icon"><img src={mongodb} alt="mongodb_logo"/></div>
            <div className="skill-details">
            </div>
        </div>

        <div className="skill">
            <div className="skill-icon"><FontAwesomeIcon icon={faSass} /></div>
            <div className="skill-details">
            </div>
        </div>

        <div className="skill">
            <div className="skill-icon"><img src={ajax} alt="ajax_logo"/></div>
            <div className="skill-details">
            </div>
        </div>

    </section>

    <section id="skills-roadmap">
        <h2>Programming Languages :-</h2>

        <div className="skill">
            <div className="skill-icon"><FontAwesomeIcon icon={faPhp} /></div>
            <div className="skill-details">
            </div>
        </div>

        <div className="skill">
            <div className="skill-icon"><FontAwesomeIcon icon={faJs} /></div>
            <div className="skill-details">
            </div>
        </div>

        <div className="skill">
            <div className="skill-icon">C++</div>
            <div className="skill-details">
            </div>
        </div>

        <div className="skill">
            <div className="skill-icon">SQL</div>
            <div className="skill-details">
            </div>
        </div>

        <div className="skill">
            <div className="skill-icon"><FontAwesomeIcon icon={faPython} /></div>
            <div className="skill-details">
            </div>
        </div>

    </section>

    <section id="skills-roadmap">
        <h2>Technical Skills :-</h2>

        <div className="skill">
            <div className="skill-icon"><FontAwesomeIcon icon={faGit} /></div>
            <div className="skill-details">
            </div>
        </div>

        <div className="skill">
            <div className="skill-icon"><FontAwesomeIcon icon={faGithub} /></div>
            <div className="skill-details">
            </div>
        </div>

        <div className="skill">
            <div className="skill-icon">Restful API</div>
            <div className="skill-details">
            </div>
        </div>

    </section>
    </div>    
    </>
  )
}
