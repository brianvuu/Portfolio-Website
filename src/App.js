import React, { Component } from 'react';
import './styles.css';
import styled from 'styled-components';

class App extends Component {
  render() {
    return (

      <div className="container">

        <div className="intro">
          <h1>Intro</h1>
        </div>

        <div className="skills">
          <h1>Skills</h1>
        </div>

        <div className="resume">
          <h1>Resume</h1>
        </div>

        <div className="contact">
          <h1>Contact</h1>
        </div>

        <div className="footer">
          <p>brian-vuu.com | Created by Brian Vuu | 2018</p>
        </div>

      </div>

    );
  }
}

export default App;
