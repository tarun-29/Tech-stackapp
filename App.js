import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './src/reducers';
import {Header} from './src/components/common'
import LibraryList from './src/components/LibraryList'

export default class App extends Component{
  render() {
    return (
      <Provider store = {createStore(reducer)}>
        <View style={{flex: 1}}>
          <Header headerText = {"Tech Stack"}/>
          <LibraryList/>
        </View>
      </Provider>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
