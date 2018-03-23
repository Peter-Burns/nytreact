import React, { Component } from "react";
import API from "../utils/API";
import moment from 'moment';

class Search extends Component {
  state = {
    query: "",
    start: "",
    end: "",
    articles: []
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  saveArticle = (title, snippet, url, date) =>{
    API.saveArticle({title:title, snippet:snippet, url:url, dateCreated:date})
    .then(res => alert('Saved!'))
    .catch(err => alert('Already saved'));
  }

  loadArticles = articles => {
    this.setState({
      articles: articles.data.response.docs
    });
  }

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.query && this.state.start && this.state.end) {
      API.searchArticles(this.state.query, this.state.start, this.state.end)
        .then(res => this.loadArticles(res))
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <section>
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h4>Search</h4>
          </ div>
          <div className="panel-body">
            <form className='form'>
              <div className='form-group'>
                <label htmlFor='searchQuery'>Search Query</ label>
                <input name="query" value={this.state.query} onChange={this.handleInputChange} className='form-control' type='text' id='searchQuery' />
              </ div>
              <div className='form-group'>
                <label htmlFor='startYear'>Start Year</ label>
                <input name="start" value={this.state.start} onChange={this.handleInputChange} className='form-control' type='text' id='startYear' />
              </ div>
              <div className='form-group'>
                <label htmlFor='endYear'>End Year</ label>
                <input name="end" value={this.state.end} onChange={this.handleInputChange} className='form-control' type='text' id='endYear' />
              </ div>
              <button className="btn btn-primary" type='submit' onClick={this.handleFormSubmit}>
                Search
              </ button>
            </ form>
          </div>
        </ div>
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h4>Articles</h4>
          </ div>
          <div className="panel-body">
            <div className="list-group">
              {this.state.articles.map(article => (
                <div key={article.web_url} className="list-group-item">
                  <a href={article.web_url}><h4>{article.headline.main}</h4></a>
                  <p>{article.snippet || "No text preview"}</p>
                  {moment(article.pub_date).format('M/D/YYYY h:mmA')}
                  <button className="btn btn-success" onClick={() => this.saveArticle(article.headline.main, article.snippet,article.web_url,moment(article.pub_date))}>Save Article</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ section>
    );
  }
}

export default Search;
