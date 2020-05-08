import React from 'react';
import './Menu.css';
import PropTypes from 'prop-types';

function Menu (props) {
  return (
    <div className='menu-buttons'>  
    {props.news.map((newsTopic, i) => <button className='menuButton' key={i} onClick={() => props.setNews(newsTopic)}>{newsTopic} News</button>)} 
    </div>
  )
}

Menu.propTypes ={
  news: PropTypes.array,
  setNews: PropTypes.func
}

export default Menu;
