import React from 'react';
import './Menu.css'

function Menu (props) {
  console.log(props)
  return (
    <div className='menu-buttons'>  
    {props.news.map((newsTopic, i) => <button className='menuButton' key={i} onClick={() => props.setNews(newsTopic)}>{newsTopic} News</button>)} 
    </div>
  )
}

export default Menu;
