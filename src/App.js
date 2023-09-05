import logo from './logo.svg';
import './App.css';
import MyComponent from './MyComponent'
import React, { Component } from 'react';

class App extends Component {
  render(){
    
    return (
      <MyComponent name="테스트"/>
    );
  }
}

export default App;
