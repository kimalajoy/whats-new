import React, {Component} from 'react';
import './SearchForm.css';
import PropTypes from 'prop-types';

class SearchForm extends Component {
  constructor(props) {
    super(props)
    this.state ={
      searchInput: ''
    };
  }

  searchTerms = (e) => {
    let searchTerm = e.target.value.toLowerCase();
    this.setState({searchInput: searchTerm}, () =>{
      if(!searchTerm) {
        this.props.filter(this.state.searchInput)
      }
    });
  }

  render() {
    return(
    <div className='search-form'>
      <input 
        onChange={this.searchTerms} 
        type="text" 
        placeholder="Search for an article here"
        onKeyPress={(e) => (e.key === 'Enter' ?this.props.filter(this.state.searchInput) : null)} />
      <button 
        onClick={() => this.props.filter(this.state.searchInput)} className="search-button">Search</button>
    </div>
    )
  }
}

SearchForm.propTypes = {
  filter: PropTypes.func
};


export default SearchForm;