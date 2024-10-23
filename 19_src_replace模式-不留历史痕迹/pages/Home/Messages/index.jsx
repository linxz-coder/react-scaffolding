import React, { Component } from 'react'
import { Link, Route, Routes, Navigate } from 'react-router-dom'
import Details from './Details' 

export default class Messages extends Component {
  state = {
    messagesArr: [
      {id: '001', title: 'message001'},
      {id: '002', title: 'message002'},
      {id: '003', title: 'message003'}
    ]
  }

  render() {
    return (
        <div>
            <ul>
                {
                    this.state.messagesArr.map((messageObj) => {
                        return (
                            <li key={messageObj.id}>
                                {/* 向路由组件传递params参数 */}
                                {/* <Link to={`/home/messages/details/${messageObj.id}/${messageObj.title}`}>{messageObj.title}</Link> */}

                                {/* 向路由组件传递search参数 */}
                                {/* <Link to={`/home/messages/details?id=${messageObj.id}&title=${messageObj.title}`}>{messageObj.title}</Link> */}

                                {/* 向路由组件传递state参数 */}
                                <Link replace to="/home/messages/details" state={{id: messageObj.id, title: messageObj.title}}>{messageObj.title}</Link>
                            </li>
                        )
                    })
                }
            </ul>
            <hr/>
            {/* 注册路由 */}
            <Routes>
                {/* 声明接收params参数 */}
                {/* <Route path="/details/:id/:title" element={<Details/>}/> */}

                {/* search参数无需声明接收，正常注册路由即可 */}
                {/* <Route path="/details" element={<Details/>}/> */}

                {/* state参数无需声明接收，正常注册路由即可 */}
                <Route path="/details" element={<Details/>}/>
                
            </Routes>
      </div>
    )
  }
}
