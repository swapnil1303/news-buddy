import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl,newsUrl,author,date,source} = this.props;

    return (
      <div className='my-3'>
        <div className="card">
        <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{zIndex:'1',left:'12%',padding:'10px'}}>
              {source}
              <span class="visually-hidden">unread messages</span>
            </span>
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-body-secondary">By {!author?"Unknown":author} on {date}</small></p>
            <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem