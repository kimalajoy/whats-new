import React from 'react';
import './NewsArticle.css';

// NEWSARTICLE COMPONENT CODE GOES HERE

function NewsArticle (props) {
  return (
    <div className="newsArticle-container">
      <div className ="article-card">
        <h1 className="heading">{props.headline}</h1>
        <img src={props.img} alt="Img for article"/>
        <p>{props.description}</p>
        <a href={props.url}>Link to the Article</a>
      </div>
    </div>
  );
}

export default NewsArticle;