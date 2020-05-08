import React from 'react';
import './NewsArticle.css';
import PropTypes from 'prop-types';

// NEWSARTICLE COMPONENT CODE GOES HERE

function NewsArticle (props) {
  return (
    <div className="newsArticle-container">
      <div className ="article-card">
        <h2 className="heading">{props.headline}</h2>
        <img src={props.img} alt={props.headline}/>
        <p>{props.description}</p>
        <a href={props.url}>Link to the Full Article</a>
      </div>
    </div>
  );
}

NewsArticle.propTypes = {
    id: PropTypes.number,
    heading: PropTypes.string,
    img: PropTypes.string,
    description: PropTypes.string,
    url: PropTypes.string
}


export default NewsArticle;