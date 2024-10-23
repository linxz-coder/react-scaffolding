import React, { Component } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Header from './components/Header'
import MyNavLink from './components/MyNavLink'

export default class App extends Component {

  render(){
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <Header a={1}/>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
            {/* 原生html中，靠<a>标签跳转不同的页面。 */}
             {/*  <a className="list-group-item" href="./about.html">About</a>
              <a className="list-group-item active" href="./home.html">Home</a> */}

            {/* 在React中靠路由链接实现切换组件 */}
            {/* 编写路由链接 */}
              <MyNavLink to="/about">About</MyNavLink>
              <MyNavLink to="/home">Home</MyNavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
              {/* 注册路由 */}
                <Routes>
                    {/* 默认选中的是home */}
                    <Route path="*" element={<Navigate to ="/home" />}/>
                    <Route path="/about" element={<About v={1} />} />
                    {/* 模糊匹配 */}
                    <Route path="/home/*" element={<Home />} /> 
                </Routes>
              </div>
            </div>
          </div>
        </div>
    </div>
    )
  }
}
