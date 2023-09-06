import React, { Component } from 'react';
import './App.css';
import LifeCycleSample from './LifeCycleSample';

//랜덤 색상 생성 

function getRandomColor(){
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
  //16777215를 hex로 표현하면 ffffff가 되므로 000000 ~ ffffff 값 반환
}

class App extends Component {
  state ={
    color: '#000000'
  }

  handleClick = () => {
    this.setState({
      color: getRandomColor()
    });
  }

  render() {
    return(
      <div>
        <button onClick={this.handleClick}>랜덤 색상</button>
        <LifeCycleSample color={this.state.color}/>
      </div>
    );
  }

}
export default App;