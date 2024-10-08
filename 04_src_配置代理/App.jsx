import React, { Component } from 'react'
import axios from 'axios'

export default class App extends Component {
  getStudentData = () => {
    axios.get('http://localhost:3000/api1/students').then(
      // 成功的回调
      response => {console.log('成功了', response.data)},
      // 失败的回调
      error => {console.log('失败了', error)}
    )  
  }

  getCarData = () => {
    axios.get('http://localhost:3000/api2/cars').then(
      // 成功的回调
      response => {console.log('成功了', response.data)},
      // 失败的回调
      error => {console.log('失败了', error)}
    )  
  }


  render() {
    return (
      <div>
          <button onClick={this.getStudentData}>点我获取数据学生数据</button>
          <button onClick={this.getCarData}>点我获取数据汽车数据</button>        
      </div>

    )
  }
}
