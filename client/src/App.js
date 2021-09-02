import React from 'react';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from "../src/pages/home/Home";
import Topbar from "../src/components/topbar/Topbar";
import Login from "../src/components/login/login";
import Signup from "../src/components/signup/signup";
import Single from "../src/pages/single/Single";
import Logout from "./components/logout/logout.jsx"
import Write from "../src/pages/write/write"
import "materialize-css/dist/css/materialize.min.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import Auth from './utils/auth';

const httpLink = createHttpLink({
  uri: '/graphql',
});


// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


function App() {
  return (
  <ApolloProvider client={client}>
    <Router>
      <Topbar/>
      {!Auth.loggedIn() ? (   
      <Switch>
        <Route exact path = "/Signup" component = {Signup}/>
      </Switch>
      ) : 
      (
      <Switch>
        <Route exact path = "/login" component = {Login}/>
      </Switch>
      )}


    </Router>
  </ApolloProvider>
    
  );
}

export default App;
