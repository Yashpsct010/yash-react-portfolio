import './App.css';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Navi} from './component1/Navbar.js';
import {Home} from './component1/Home.js';
import {About} from './component1/About.js';
import { Skills } from './component1/Skills';
import {Contact} from '../src/component1/Contact';
import { Work } from './component1/Work';
class App extends Component {
  render() {
    return (
      <>
        <Navi />
        <Home />
        <About />
        <Skills />
        <Work/>
        <Contact />
      </>
    );
  }
}
export default App;
