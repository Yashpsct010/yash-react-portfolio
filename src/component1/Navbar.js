import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Nav from 'react-bootstrap/Nav';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { Container } from 'react-bootstrap';

export const Navi = () => {
  return (
    <>
      <Container fluid className='navi' id='navi'>
      <a href="#home"><FontAwesomeIcon className="icon" icon={faCheckCircle}/></a>
      <Nav.Item>
        <Nav.Link className="active" href="#home">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="active" href="#about">About</Nav.Link>
      </Nav.Item> 
      <Nav.Item>
        <Nav.Link className="active" href="#skills">Skills</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="active" href="#work">Work</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="active" href="#contact">Contact</Nav.Link>
      </Nav.Item>
      </Container>

    </>
  )
  
}

