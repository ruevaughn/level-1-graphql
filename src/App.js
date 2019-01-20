import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider, Query } from 'react-apollo';
import gql from 'graphql-tag';
import logo from './logo.svg';
import './App.css';

const client = new ApolloClient({
  uri: 'https://api-uswest.graphcms.com/v1/cjr4aysrs4stw01dn3d2f1pxy/master'
})

const POSTS_QUERY = gql`
  {
    posts {
      id
      title
      body
    }
  }
`;

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <Query query={POSTS_QUERY}>
              {({loading, data}) => {
                if (loading) return "Loading...";
                const { posts } = data;
                return posts.map(post => <h1>{post.title}</h1>)
              }}
            </Query>
          </header>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
