import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './libs/redux/store';
import reportWebVitals from './reportWebVitals';
import { ApolloProvider } from '@apollo/client';
import { Provider } from 'react-redux';
import { client } from './libs/graphql';

import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
