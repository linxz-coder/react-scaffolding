import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {
  render() {
    const {id,name,done} = this.props
    
    return (
      <li>
        <label>
          <input type="checkbox" defaultChecked={done}/> {/* defaultChecked刚开始默认选中，之后可以改；而checked是写死的，之后不能改 */}
          <span>{name}</span>
        </label>
        <button className="btn btn-danger" style={{display:"none"}}>删除</button>
      </li>
    )
  }
}
