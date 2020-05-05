import React, { Component } from 'react';
import localNews from '../../data/local';
import './App.css';
import NewsContainer from '../NewsContainer/NewsContainer.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      localNews
    }
  }

  render () {
    console.log(this.state.localNews)
    return (
      <NewsContainer news={this.state.localNews}/>
    );
  }
}

export default App;
