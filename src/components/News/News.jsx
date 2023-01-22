import React from 'react'
import "./news.css"

function News({news}) {
  return (
    <div className='news'>
        <div className='news-img'>
            <img src={news.urlToImage} alt="" />
        </div>
        <div className='news-info'>
            <h3>{news.title}</h3>
        </div>
    </div>
  )
}

export default News