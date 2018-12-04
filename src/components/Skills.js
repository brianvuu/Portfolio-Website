import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import styled from 'styled-components';

const CardName = styled.div`
  width:            100%;
  height:           30px;
  line-height:      30px;
  text-align:       center;
  font-weight:      600;
`

const cards = [
  { name: 'HTML5', img: 'html.png' },
  { name: 'CSS3', img: 'css.png' },
  { name: 'JavaScript', img: 'javascript.png' },
  { name: 'React', img: 'react.png' },
  { name: 'Sass', img: 'sass.png' },
  { name: 'SEO', img: 'seo.png' },
  { name: 'Git / GitHub', img: 'git.png' },
  { name: 'Terminal', img: 'terminal.png' },
]

class Skills extends Component {

  render() {
    return(
    <>
      {cards.map( card => (
        <div className='content-20 card-box' key={card.name}>
          <div className='card-img'>
            <img 
              src={require(`../images/${card.img}`)} 
              alt={`${card.name} logo`} 
            />
          </div>
          <CardName>
            {card.name}
          </CardName>
        </div>
        ))
      }
    </>
    )
  }
}

export default Skills;