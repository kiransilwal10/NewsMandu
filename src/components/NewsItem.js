import React, { Component } from 'react'

export class NewsItem extends Component {

  

  render() {
    
    let {title, description, imageUrl, newsUrl, author, date} = this.props;  
    return (
      <div>
          <div className="card" style={{width: "18rem;"}}>
      <img src={!imageUrl?"https://www.investopedia.com/thmb/TNTsdR0xPn0lQae59esdG8FGZQw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/MarketBlogImage-final-6ac06c7b9250446a8e86c566b11e02e1.png": imageUrl} className="card-img-top" alt="..."/>
     <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{description}</p>
      <p className="card-text"><small className="text-muted"> By {!author? "Unknown" :author} on {new Date(date).toGMTString()}</small></p>
      <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-dark">Read More</a>
    </div>
</div>
      </div>
    )
  }
}

export default NewsItem
