import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import './index.css'

export default class List extends Component {

  state = {// 初始化状态
    users:[], //users初始值为数组
    isFirst:true, //是否为第一次打开页面
    isLoading:false, //标识是否处于加载中
    err:'' //存储请求相关的错误信息
  } 

  componentDidMount() {
    // _表示不使用这个参数，这个参数是msg，现在只是占位。
    this.token = PubSub.subscribe('communication', (_,stateObj)=>{
       console.log('List组件收到数据了', stateObj);
        this.setState(stateObj)
    })
  }

  componentWillUnmount() {
    PubSub.unsubscribe(this.token)
  }

  render() {

    const {users, isFirst, isLoading, err} = this.state

    return (
      <div className="row">
          {
            isFirst ? <h2>欢迎使用，输入关键字搜索</h2> :
            isLoading ? <h2>Loading...</h2> :
            err ? <h2 style={{color:'red'}}>{err}</h2> :
            users.map((userObj) => {
                return (
                  <div key={userObj.id} className="card">
                      <a rel="noreferrer" href={userObj.html_url} target="_blank">
                        <img alt="avatar" src={userObj.avatar_url} style={{width: '100px'}}/>
                      </a>
                      <p className="card-text">{userObj.login}</p>
                    </div>
                )
            })
          }
      </div>
    )
  }
}
