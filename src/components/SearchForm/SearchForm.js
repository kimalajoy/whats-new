import React, {Component} from 'react';
import './SearchForm.css';

class SearchForm extends Component {
  constructor() {
    super()
    this.state ={};
  }

  render() {
    return(
    <div className='search-form'>
      <input type="text" placeholder="Search for an article here" />
      <button className="search-button">Search</button>
    </div>
    )
  }
}

export default SearchForm;