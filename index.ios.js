/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import App from './src/components/App';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import activeThreadIdReducer from './src/reducers/activeThreadIdReducer';
import threadsReducer from './src/reducers/threadsReducer';

const reducer = combineReducers({
  activeThreadId: activeThreadIdReducer,
  threads: threadsReducer
});

const store = createStore(reducer);

export default class Playground extends Component
{
  render() {
    return (
        <Provider store={store}>
          <App />
        </Provider>
    )
  }
}

AppRegistry.registerComponent('playground', () => Playground);
