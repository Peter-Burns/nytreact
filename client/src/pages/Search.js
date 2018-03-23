import React, { Component } from "react";
import API from "../utils/API";

class Search extends Component {
  state = {
    query: "",
    start: "",
    end: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.query && this.state.start && this.state.end) {
      API.searchArticles(this.state.query, this.state.start, this.state.end)
        .then(res => this.loadBooks())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <div className="panel panel-primary">
        <div className="panel-heading">
          <h4>Search</h4>
        </ div>
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
          <button type='submit' onClick={this.handleFormSubmit}>
            Search
      </ button>
        </ form>
      </ div>
    );
  }
}

export default Search;
