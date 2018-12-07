import React, { Component } from 'react';
import { Button, Icon } from 'semantic-ui-react';
import styled from 'styled-components';
import Skills from './components/Skills';
import ResumeModal from './components/ResumeModal';

// import ContactForm from './components/ContactForm';

const Copyright = styled.p`
  color: rgb(153, 153, 153);
  font-size: 12px;
`

class App extends Component {

  render() {
    return (

      <div className="container centered">
      
        <div className="intro intro-bg">
          <div className="flex-container flex-column full-height">
            <div className="flex-100">
              <div className="portfolio-img">
                <img src={require('./images/person.png')} />
              </div>
              <h1>Hello! I'm John Doe, a Front-End Web Developer</h1>
              <span className="intro-text">
                I build desktop websites that are cross-platform and mobile responsive,<br />
                develop with the best practices to optimize for search engines and marketing,<br />
                and transform designs and ideas into websites with your brand in mind
              </span>
              <br /><br /><br />
              <a href='http://linkedin.com'>
                <Button icon labelPosition="left" primary>
                  <Icon name="linkedin" size="large"/>Find Me On LinkedIn
                </Button>
              </a>
            </div>
          </div>
        </div>

        <div className="skills pattern-bg spacing-lg">
          <div className="flex-container">
            <div className="flex-100">
              <h1>Technical Skills</h1>
              <p>
                I build desktop websites that are cross-platform and mobile responsive,<br />
                develop with the best practices to optimize for search engines and marketing,<br />
                and transform designs and ideas into websites with your brand in mind
              </p>
              <br />
            </div>
            <div className="flex-container">
              <Skills />
            </div>
          </div>
        </div>

        <div className="resume spacing-sm">
          <div className="flex-container">
            <div className="flex-60">
              <ResumeModal />
            </div>
          </div>
        </div>

        <div className="footer">
          <div className="flex-container flex-column full-height">
            <Copyright>
              Your-Website.com | Created By John Doe | 2018
            </Copyright>
          </div>
        </div>

      </div>

    );
  }
}

export default App;
