import React, { Component } from "react";
import API from "../utils/API";
import moment from 'moment';

class savedArticles extends Component {
  state = {
    articles: []
  }
  componentDidMount = () => {
    API.getArticles()
    .then(articles => this.setState({articles:articles}))
    .catch(err => console.log(err));
  }

  render() {
    return (
      <div className='div' />
    );
  }
}

export default savedArticles;