import React, { Component } from 'react';
import local from '../../data/local';
import health from '../../data/health';
import science from '../../data/science';
import tech from '../../data/technology';
import entertainment from '../../data/entertainment';
import './App.css';
import NewsContainer from '../NewsContainer/NewsContainer.js';
import Menu from '../Menu/Menu.js';
import SearchForm from '../SearchForm/SearchForm.js'

class App extends Component {
  constructor() {
    super();

    this.news = {
      local,
      health,
      science,
      tech,
      entertainment
    };

    this.state = {
      newsKey: 'local',
      searchTerm: ''
    }
  }

  setNews = (newsKey) => {
    this.setState({ newsKey });
  }

  getNews(){
    let news = this.news[this.state.newsKey];
    if(this.state.searchTerm){
      news = news.filter(searched => {
        return searched.description.toLowerCase().includes(this.state.searchTerm) || searched.headline.toLowerCase().includes(this.state.searchTerm);
      })
    }

    return news;
  }

  setSearchTerm = (input) => {
    this.setState({searchTerm: input})
  }

  render () {
    return (
      <div>
        <h1>What's New(s)?</h1> 
        <SearchForm filter={this.setSearchTerm}/>
        <Menu news={Object.keys(this.news)} setNews={this.setNews}/>
        <NewsContainer news={this.getNews()}/>
      </div>
    );
  }
}

export default App;
