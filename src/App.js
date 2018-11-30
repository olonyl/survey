import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { View } from 'react-native'
import reducers from './reducers';

import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import MainForm from './components/MainForm';
import { setContext } from 'apollo-link-context';

const baseEndpointURL = 'http://ec2-18-223-97-7.us-east-2.compute.amazonaws.com:5000';

const token =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7IklkIjoxMCwiQ29kZV9Vc2VyIjoiYWRtaW4gICAgICJ9LCJpYXQiOjE1Mzg2NjI4ODgsImV4cCI6MTg1NDIzODg4OH0.3p2Hej6LhKeiNvONYNsJ2S7-5NSeeC-gcKgYyJvc8F0';

// Endpoint URL
const httpLink = createHttpLink({
	uri: baseEndpointURL + '/graphql'
});

// Endpoint URL for Login
const loginHttpLink = createHttpLink({
	uri: baseEndpointURL + '/login'
});

const authLink = setContext((_, { headers }) => {
	// return the headers to the context so httpLink can read them
	return {
		headers: {
			...headers,
			authentication: token
		}
	};
});

var loginClient = null;
loginClient = new ApolloClient({
	link: loginHttpLink,
	cache: new InMemoryCache()
});

// To configure Apollo client with link (url) endpoint and cache option
const client = new ApolloClient({
	link: authLink.concat(httpLink),
	cache: new InMemoryCache()
});


class App extends Component {
	render() {
		return (
			<Provider store={createStore(reducers)}>
				<View style={{ flex: 1 }}>
					<MainForm loginClient={loginClient} customClient={client} />
				</View>
			</Provider >
		);
	}
}

export default App;
