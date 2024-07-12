import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner.js';
import PropTypes from 'prop-types'


export class News extends Component {
  static defaultProps = {
    country: 'us',
    pageSize: 8,
    category: 'general'

  }
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }

   capitalizeFirstLetter = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1 
    }
    document.title = `${this.capitalizeFirstLetter(this.props.category)} - NewsMandu`;
  }

  async fetchNews(page) {
    this.setState({ loading: true });
    try {
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=910a06fa2dda487fbf81ef6e567e275e&page=${page}&pageSize=${this.props.pageSize}`;
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        articles: parsedData.articles,
        loading: false,
        page: page
      });
    } catch (error) {
      console.error("Error fetching news:", error);
      this.setState({ loading: false });
    }
  }

  async componentDidMount() {
    this.fetchNews(this.state.page);
  }

  handlePrevClick = async () => {
    this.fetchNews(this.state.page - 1);
  }

  handleNextClick = async () => {
    this.fetchNews(this.state.page + 1);
  }

  render() {
    return (
      <div className='container my-3'>
        <br/>
        {this.state.loading && <p>Loading...</p>}
        <h1 className='text-center'>NewsMandu - {this.capitalizeFirstLetter(this.props.category)}</h1> <br/>
        {this.state.loading && <Spinner/>}
        
        {!this.state.loading && this.state.articles.length === 0 && (
          <div className="text-center">
            <p>Oops! Looks like we've run out of news articles. Here's a joke to lighten your mood:</p>
            <p><em>"Why don’t scientists trust atoms? Because they make up everything!"</em></p>
          </div>
        )}
        <div className='row'>
          {!this.state.loading && this.state.articles.length > 0 && this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem 
                  title={element.title ? element.title : ""} 
                  description={element.description ? element.description : ""} 
                  imageUrl={element.urlToImage} 
                  newsUrl={element.url} 
                  author={element.author}
                  date={element.publishedAt}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
          <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    );
  }
}

export default News;
