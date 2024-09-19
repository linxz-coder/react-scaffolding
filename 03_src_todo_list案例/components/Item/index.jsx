import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {
  
  // 标识鼠标移入移出
  state = {mouse:false}
  
  // 鼠标移入移出的回调
  handleMouse = (flag) => {
        return () => {
          // console.log(flag)
          this.setState({mouse:flag})
        }
    }
  
  // 勾选、取消勾选某一个todo的回调
  handleCheck = (id) => {
    return (e) => {
      // console.log(id, e.target.checked)
      this.props.updateTodo(id, e.target.checked)
    }
  }

  // 删除一个todo的回调
  handleDelete = (id) => {
    // console.log(id)
    const {name} = this.props
    if(window.confirm(`确定删除${name}吗？`)) {
      this.props.deleteTodo(id)
    }
    // this.props.deleteTodo(id)
  }


  render() {
    const {id,name,done} = this.props
    const {mouse} = this.state
    
    return (
      <li style={{backgroundColor: mouse ? "#ddd" : "white"}} onMouseLeave={this.handleMouse(false)} onMouseEnter={this.handleMouse(true)}>
        <label>
          <input type="checkbox" checked={done} onChange={this.handleCheck(id)}/> {/* defaultChecked刚开始默认选中，之后可以改；而checked是写死的，之后不能改 */}
          <span>{name}</span>
        </label>
        <button onClick={()=> this.handleDelete(id)} className="btn btn-danger" style={{display: mouse ? "block" : "none"}}>删除</button>
      </li>
    )
  }
}
