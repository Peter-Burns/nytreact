import React, { Component } from "react";
import API from "../utils/API";
import moment from 'moment';

class savedArticles extends Component {
  state = {
    articles: []
  }
  componentDidMount = () => {
    API.getArticles()
      .then(articles => this.setState({ articles: articles }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="panel panel-primary">
        <div className="panel-heading">
          <h2>Saved Articles</h2>
        </div>
        <ul className="list-group">
          {this.state.articles.data.map(article => (
            <div key={article.url} className="list-group-item">
              <a href={article.url}><h4>{article.title}</h4></a>
              <p>{article.snippet || "No text preview"}</p>
              {moment(article.dateCreated).format('M/D/YYYY h:mmA')}
            </div>
          ))}
        </ul>
      </div>
    );
  }
}

export default savedArticles;