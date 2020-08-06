import React, { Component } from 'react'
import particles from 'particles.js';


export default class Header extends Component {
        
  render () {
    return (

      <header id='top'>

        <div id='logo'>

          <h1>&lt; Alex Cocan  /&gt;</h1>
          <p><span> &#123; Front-End Developer &#125; </span></p>
          <p><span>HTML | CSS | Javascript | JQuery | React.js | Redux | Node.js | Express.js | Ajax | Git | Sass | Webpack | </span></p>

        </div>
        

        <nav id = "main-nav">
        
          <ul>
            <li> <a className = "left" href='#top'> Home </a>
            </li> <li> <a className = "left" href='#projects'> Projects </a>
            </li> <li> <a className = "left" href='#description'> About Me </a>
            </li> <li> <a className = "left" href='#form'> Contact</a>
            </li>
          </ul>
        </nav>
      </header>

    )
  }
}
