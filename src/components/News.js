import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
export class News extends Component {
  static defaultProps={
    country:'in',
    pageSize:10,
    category:'science'
  }
  static propTypes={
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }
  handlenextclick=async ()=>{
    if(this.state.page+1<Math.ceil(this.state.totalresults/this.props.pageSize)){
      let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pagesize=${this.props.pageSize}`;
      this.setState({loading:true});
      let data=await fetch(url);
      let parsedData=await data.json();
      // console.log(parsedData);
      console.log("Next");
      this.setState({
        page:this.state.page+1,
        articles:parsedData.articles,
        loading:false
      })
      console.log(this.state.page);
    }
  }
  handleprevclick=async ()=>{
    if(this.state.page+1<Math.ceil(this.state.totalresults/this.props.pageSize)){
      
      let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page - 1}&pagesize=${this.props.pageSize}`;
      this.setState({loading:true});
      let data=await fetch(url);
      let parsedData=await data.json();
      // console.log(parsedData);
      console.log("Next");
      this.setState({
        page:this.state.page-1,
        articles:parsedData.articles,
        loading:false
      })
      console.log(this.state.page);
    }
  }
  capFirst=(str)=> {
    var firstLetter = str.slice(0,1);
    return firstLetter.toUpperCase() + str.substring(1);
}
  constructor(props) {
    super(props);
    this.state={
      articles:[{
        "source": {
            "id": "al-jazeera-english",
            "name": "Al Jazeera English"
        },
        "author": "Hafsa Adil",
        "title": "testing",
        "description": "Many Sri Lankans speak of a decades-old bond between the two South Asian nations - in cricket and beyond.",
        "url": "http://www.aljazeera.com/sports/2023/9/13/special-connection-sri-lankas-love-affair-with-pakistans-cricket-team",
        "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2023/09/IMG_6627-1694607976.jpg?resize=1920%2C1440",
        "publishedAt": "2023-09-13T13:23:54Z",
        "content": "Colombo, Sri Lanka Kalana Weerasinghes love affair with Pakistans cricket team began 27 years ago, when Sri Lanka beat Australia to win its maiden Cricket World Cup in Pakistans eastern metropolis of… [+6695 chars]"
    }],
      loading:false,
      page:1
    }
    document.title=`${this.capFirst(this.props.category)} - NewsBuddy`;
  }
  async componentDidMount(){
    // console.log("cdm");
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=1&pagesize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data=await fetch(url);
    let parsedData=await data.json();
    console.log(parsedData);
    this.setState({articles:parsedData.articles,totalresults:parsedData.totalResults,loading:false,page:1});
  }
  render() {
    return (
      <div className='container my-3'>
        <h1 className="text-center">
          Top Headlines - {this.capFirst(this.props.category)} 
        </h1>
        {this.state.loading && <Spinner/>}
          <div className="row">
          {!this.state.loading && this.state.articles ? (
              this.state.articles.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <NewsItem
                      title={element.title ? element.title.slice(0, 45) : ""}
                      description={element.description ? element.description.slice(0, 88) : ""}
                      imageUrl={element.urlToImage ? element.urlToImage : "https://images.cnbctv18.com/wp-content/uploads/2023/02/retail-inflation-cpi-shutterstock-1019x573.jpg"}
                      newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}
                    />
                  </div>
                );
              })
            ) : (
              <h3 className='d-flex justify-content-center align-items-center' style={{height:'40px'}}>Still working on it...</h3>
            )}

          </div>
        <div className="container d-flex justify-content-between mt-3">
          <button type="button" className="btn btn-dark" disabled={this.state.page<=1} onClick={this.handleprevclick}> &larr; Previous</button>
          <h5 className='btn btn-danger'>{this.state.page}</h5>
          <button type="button" className="btn btn-dark" onClick={this.handlenextclick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News