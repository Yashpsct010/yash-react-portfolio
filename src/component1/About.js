import React from 'react'
import yashp from '../assets/images/profile-pic2.png'
export const About = () => {
  return (
    <>
    <div id='about' className='photo'>
    <h3 className='about'>ABOUT</h3>
    <img src={yashp} alt="my_photo"/>
    <p>
        My name is Yash Parmar.
        <br />
        I am a 4th year B.Tech. CSE (IoT) student.
        <br />
        Objective and highly motivated full-stack developer with over 1 year of experience in web development and a strong background in IT.
        <br />
        Skilled in programming languages such as C, C++, and JavaScript, as well as web development technologies such as HTML, CSS, PHP, MERN, SQL and cloud services.
        <br />
        Proven ability to develop and maintain complex ERP systems, and experience in developing cool websites.
    </p>
    </div>
    
    </>
  )
}
