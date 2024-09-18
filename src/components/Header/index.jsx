import React, { Component } from 'react'
import { nanoid } from 'nanoid'
import './index.css'


export default class Header extends Component {
  handleKeyUp = (event) => {
    const {keyCode, target} = event
    // 判断是否是回车按键
    if(keyCode !== 13) return
    
    // 添加的todo名字不能为空
    if(target.value.trim() === '') { /* trim()去掉空格 */
      alert('输入不能为空')
      return
    }

    // 测试一下回车的keyCode
    // console.log(target.value, keyCode)

    const todoObj = {id: nanoid(), name: target.value, done: false}
    // 将todoObj传递给App
    this.props.addTodo(todoObj)

    // 清空输入
    target.value = ''

  }

  render() {
    return (
        <div className="todo-header">
            <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认"/>
        </div>
    )
  }
}
