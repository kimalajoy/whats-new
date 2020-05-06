import React, {Component} from 'react';
import './SearchForm.css';

class SearchForm extends Component {
  constructor(props) {
    super(props)
    this.state ={
      searchInput: ''
    };
  }

  searchTerms = (e) => {
    this.setState({searchInput: e.target.value.toLowerCase()})
  }

  render() {
    return(
    <div className='search-form'>
      <input 
        onChange={this.searchTerms} 
        type="text" 
        placeholder="Search for an article here" />
      <button 
        onClick={() => this.props.filter(this.state.searchInput)} className="search-button">Search</button>
    </div>
    )
  }
}

export default SearchForm;