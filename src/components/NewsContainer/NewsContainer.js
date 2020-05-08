import React from 'react';
import './NewsContainer.css';
import NewsArticle from '../NewsArticle/NewsArticle.js';
import PropTypes from 'prop-types';

// NEWSCONTAINER COMPONENT CODE GOES HERE

function NewsContainer (props) {
  return (
      <div className="news-container">
      
        {props.news.map(localNews => <NewsArticle key={localNews.id} id={localNews.id} headline={localNews.headline} img={localNews.img} description={localNews.description} url={localNews.url}/>)}
      </div>
    );
}

NewsContainer.propTypes ={
  news: PropTypes.array
}

export default NewsContainer;
