import React, { Component} from 'react';
import logo from './logo.svg';
import './reset.css';
import './App.css';

export default class App extends Component {
  constructor() {
    super();
    this.state ={

    }
  }

  render() {
    return(
      <div>
        <nav>
          <h1>Start Bootstrap</h1>
          <ul>
            <li>SERVICES</li>
            <li>PORTFOLIO</li>
            <li>ABOUT</li>
            <li>TEAM</li>
            <li>CONTACT</li>
          </ul>
        </nav>
      </div>
    )
  }
}