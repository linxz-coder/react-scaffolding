import React, { Component } from 'react'
import MyNavLink from '../../components/MyNavLink'
import { Route, Routes, Navigate } from 'react-router-dom'
import News from './News'
import Messages from './Messages'

export default class Home extends Component {
  render() {
    return (
      <div>
        <h3>我是Home的内容</h3>
          <div>
            <ul className="nav nav-tabs">
              <li>
                {/* <a className="list-group-item" href="./home-news.html">News</a> */}
                <MyNavLink to="/home/news">News</MyNavLink>
              </li>
              <li>
                {/* <a className="list-group-item" href="./home-message.html">Message</a> */}
                <MyNavLink to="/home/messages">Messages</MyNavLink>
              </li>
            </ul>

            {/* 注册路由 */}
            <Routes>
              {/* 默认选中的是home/news */}
              <Route path="*" element={<Navigate to ="news" />}/>
              <Route path="/news" element={<News/>}/>
              <Route path="/messages" element={<Messages/>}/>
            </Routes>
          </div>
      </div>
    )
  }
}
