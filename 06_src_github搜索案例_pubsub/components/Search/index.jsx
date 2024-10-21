import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import axios from 'axios'

export default class Search extends Component {

  search = () => {
      console.log('Search组件发布消息了');
      // PubSub.publish('communication', {isFirst:false, isLoading:true})


      // 连续解构赋值+重命名
      const {keyWordElement: {value:KeyWord}} = this
      console.log(KeyWord)

      // 发送请求前通知List更新状态
      PubSub.publish('communication', {isFirst:false, isLoading:true})
      // 发送网络请求
      axios.get(`http://localhost:3000/api1/search/users?q=${KeyWord}`).then(
          response => {
            // 请求成功后通知List更新状态
            PubSub.publish('communication', {isLoading:false, users:response.data.items})
          },
          error => {
            console.log('失败了', error)
            // 请求失败后通知List更新状态
            PubSub.publish('communication', {isLoading:false, err:error.message})
          }
      )
  
  }

  render() {
    return (
        <section className="jumbotron">
            <h3 className="jumbotron-heading">搜索github用户</h3>
            <div>
            <input ref={c => this.keyWordElement = c} type="text" placeholder="输入关键词点击搜索"/>&nbsp;
            <button onClick={this.search}>搜索</button>
            </div>
        </section>
    )
  }
}

