import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import "./App.css";
import Search from './pages/Search';
import savedArticles from './pages/savedArticles';
import noMatch from './pages/noMatch';

class App extends Component {
  state = {
    savedArticles: [],
    searchResults: []
  };
  render() {
    return (
      <Router>
        <div className="container">
          <div className="jumbotron">
            <h2 className="text-center">NYT React</h2>
            <Link to="/search"><button className = "btn btn-primary">Search</button></Link>
            <Link to="/saved"><button className = "btn btn-success">Saved</button></Link>
          </div>
          <Switch>
            <Route exact path="/" component={Search} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/saved" component={savedArticles} />
            <Route path="/*" component={noMatch} />
          </ Switch>
        </div>
      </ Router>
    );
  }
}

export default App;
