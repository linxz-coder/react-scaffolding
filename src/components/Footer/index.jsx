import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {
  
  // 全选checkbox的回调
  handleCheckAll = (event) => {
    this.props.checkAll(event.target.checked)
  }

  // 清除已完成任务的回调
  handleClearAllDone = () => {
    this.props.clearAllDone()
  }
  
  render() {
    const {todos} = this.props
    // 已完成的个数
    const doneCount = todos.reduce((pre, todo) => pre + (todo.done ? 1 : 0), 0) /* reduce将上一步的计算结果，放到下一步去；每个done都是1，累加即可。mdn参考：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce */
    // 总数
    const total = todos.length

    return (
      <div className="todo-footer">
      <label>
        <input type="checkbox" onChange={this.handleCheckAll} checked={doneCount === total && total !== 0 ? true : false} />
      </label>
      <span>
        <span>已完成{doneCount}</span> / 全部{total}
      </span>
      <button onClick={this.handleClearAllDone} className="btn btn-danger">清除已完成任务</button>
    </div>
    )
  }
}
