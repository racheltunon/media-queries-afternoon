import React, {Component} from 'react';

import './App.scss';
import './reset.css'

class App extends Component {
  constructor() {
    super();
    this.state = {
      menuStatus: 'menu-drop-down'
    }
  }

  handleClick = () => {
    if
    (this.state.menuStatus === 'active') {
      this.setState({menuStatus: 'unactive'})
    } else {
      this.setState({menuStatus: 'active'})
    }
  }
  
  
  render() {
    return (
      <main>
        <div className='fullNav'>
            <div className='title'>
              <h2>Start Bootstrap</h2>
            </div>

            <div className='list-items'>
                <p className='item'>SERVICES</p>
                <p className='item'>PORTFOLIO</p>
                <p className='item'>ABOUT</p>
                <p className='item'>TEAM</p>
                <p className='item'>CONTACT</p>
            </div>

              <button 
              onClick={this.handleClick}
              className='headerButton'>
                MENU <i class="fas fa-bars"></i>
              </button>

              <div className={this.state.menuStatus + ' menu-drop-down'}>
              <div className='menu-drop-down-list'>
                <p className='item'>SERVICES</p>
                <p className='item'>PORTFOLIO</p>
                <p className='item'>ABOUT</p>
                <p className='item'>TEAM</p>
                <p className='item'>CONTACT</p>
              </div>
            </div>

              </div>
       


        <div className='frontImage'>
          <div className='mainText'>
            <h2>Welcome To Our Studio!</h2>
            <h1>IT'S NICE TO MEET YOU</h1>
            <button 
            className='frontImageButton'>TELL ME MORE</button>
          </div>
        </div>
      </main>
    );
  }
}
export default App;