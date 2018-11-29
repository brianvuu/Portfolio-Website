import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import styled from 'styled-components';

const CardName = styled.div`
  width:            100%;
  height:           30px;
  border:           solid 1px black;
  line-height:      30px;
  text-align:       center;
  font-weight:      600;
`
const cards = [
  { name: 'HTML5', img: 'html.jpg' },
  { name: 'CSS3', img: 'css.jpg' },
  { name: 'JavaScript', img: 'javascript.jpg' },
  { name: 'React', img: 'react.png' },
  { name: 'jQuery', img: 'jquery.png' },
  { name: 'SEO', img: 'seo.png' },
  { name: 'Sass', img: 'sass.png' },
  { name: 'Styled-Components', img: 'styledcomponents.png' },
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
            <img src={require(`../images/${card.img}`)} alt={`${card.name} logo`} />
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