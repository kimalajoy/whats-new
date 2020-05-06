import React from 'react';
import './NewsArticle.css';

// NEWSARTICLE COMPONENT CODE GOES HERE

function NewsArticle (props) {
  return (
    <div className="newsArticle-container">
      <div className ="article-card">
        <h2 className="heading">{props.headline}</h2>
        <img src={props.img} alt={props.headline}/>
        <p>{props.description}</p>
        <a href={props.url}>Link to the Article</a>
      </div>
    </div>
  );
}

export default NewsArticle;