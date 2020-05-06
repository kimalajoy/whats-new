import React from 'react';
import './NewsContainer.css';
import NewsArticle from '../NewsArticle/NewsArticle.js';

// NEWSCONTAINER COMPONENT CODE GOES HERE

function NewsContainer (props) {
  return (
      <div className="news-container">
      
        {props.news.map(localNews => <NewsArticle key={localNews.id} id={localNews.id} headline={localNews.headline} img={localNews.img} description={localNews.description} url={localNews.url}/>)}
      </div>
    );

}

export default NewsContainer;

// Each NewsArticle card will display: the image, the headline, the description, and the url