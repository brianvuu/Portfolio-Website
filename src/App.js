import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';
import Skills from './components/Skills';
import ResumeModal from './components/ResumeModal';
import { Button, Icon } from 'semantic-ui-react'

// import ContactForm from './components/ContactForm';

const PortfolioImg = styled.div`
  width:            300px;
  height:           200px;
  margin:           auto;
`
const LargeText = styled.span`
  font-size:        35px;
  font-weight:      1000;
`
const MediumText = styled.span`
  font-size:        18px;
`
const CardsContainer = styled.div`
  width:            100%;
  height:           auto;
  display:          flex;
  flex-direction:   row;
  flex-wrap:        wrap;
`

class App extends Component {

  render() {
    return (

      <div className="container centered">
      
        <div className="intro">
          <div className="flex-container align-center">
            <div className="content-100">
              <img src={require('./images/person.png')} />
              <br /><br /><br />
            </div>
            <div className="content-100">
              <h1>Hello! I'm John Doe, a Front-End Web Developer</h1>
              <MediumText>
                I build desktop websites that are cross-platform and mobile responsive,<br />
                develop with the best practices to optimize for search engines and marketing,<br />
                and transform designs and ideas into websites with your brand in mind
              </MediumText>
              <div className="content-100">
                <br /><br />
                <a href='http://linkedin.com'>
                  <Button icon labelPosition="left" primary>
                    <Icon name="linkedin" size="large"/>Find Me On LinkedIn
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="skills centered">
          <div className="flex-container">
            <div className="content-100">
              <h1>Technical Skills</h1>
              <br />
            </div>
            <div className="content-100">
            </div>
            <CardsContainer>
              <Skills />
            </CardsContainer>
          </div>
        </div>

        <div className="resume centered">
              <h1>Resume</h1>
              <br />

              <ResumeModal />
        </div>

        {/* <div className="contact">
          <div className="flex-container">
            <h1>Contact</h1>
          </div>
        </div> */}

        <div className="footer">
          <p>your-website.com | Created by John Doe | 2018</p>
        </div>

      </div>

    );
  }
}

export default App;
