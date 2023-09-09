import React from 'react'
import project1 from '../assets/images/project1.png'
import project2 from '../assets/images/project2.png'
import project3 from '../assets/images/project3.png'
export const Work = () => {
  return (
    <>
        <div className="work" id='work'>
            <h3>WORK</h3>
        <section id="work-experience">
        <h2>Work Experience / Projects</h2>

        <div class="project">
            <div class="project-banner">
                <a href="https://github.com/Yashpsct010/rent-management" target="_blank" rel="noreferrer" >
                    <img src={project1} alt="Project 1"/>
                </a>
            </div>
            <div class="project-details">
                <h3>Rent Management System</h3>
                <p>Rent Management System with a centralized data accessibility, streamlined customer data management and enhanced data security.</p>
                <p><strong><a href="https://github.com/Yashpsct010/rent-management" target='_blank' rel="noreferrer" >Github</a></strong></p>
                <p><strong><a href="http://rms.yashtechnologies.co/" target='_blank' rel="noreferrer" >Project Live</a></strong> </p>
            </div>
        </div>

        <div class="project">
            <div class="project-banner">
                <a href="https://github.com/Yashpsct010/ems" target='_blank' rel="noreferrer" >
                    <img src={project2} alt="Project 2"/>
                </a>
            </div>
            <div class="project-details">
                <h3>Prepaid Electricity Meter Using Blockchain And IOT</h3>
                <p>Designed a system enabling users to remotely monitor electricity consumption and recharge prepaid accounts from any location.</p>
                <p><strong><a href="https://github.com/Yashpsct010/ems" target='_blank' rel="noreferrer" >Github</a></strong></p>
                <p><strong><a href="https://energyefficient.000webhostapp.com/" target='_blank' rel="noreferrer" >Project Live</a></strong></p>
            </div>
        </div>

        <div class="project">
            <div class="project-banner">
                <a href="https://github.com/Yashpsct010/react-todo-app" target='_blank' rel="noreferrer" >
                    <img src={project3} alt="Project 3"/>
                </a>
            </div>
            <div class="project-details">
                <h3>React Todo App</h3>
                <p>Todo app made using Reactjs.</p>
                <p><strong><a href="https://github.com/Yashpsct010/react-todo-app" target='_blank' rel="noreferrer" >Github</a></strong></p>
                <p><strong><a href="https://yash-react-todo-app.netlify.app/" target='_blank' rel="noreferrer" >Project Live</a></strong></p>
            </div>
        </div>

    </section>
        </div>
    </>
  )
}
