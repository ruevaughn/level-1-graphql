import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Post from './Posts/Post';
import Posts from './Posts/Posts';

const client = new ApolloClient({
  uri: 'https://api-uswest.graphcms.com/v1/cjr4aysrs4stw01dn3d2f1pxy/master'
})

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router> 
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />

            </header>
            <Switch>
              <Route exact path="/" component={Posts} />>
              <Route path="/post/:id" component={Post} />>
            </Switch>
          </div>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
