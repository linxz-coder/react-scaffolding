import React, { Component } from 'react'
import PubSub from 'pubsub-js'
// import axios from 'axios'

export default class Search extends Component {

  search = async () => {
      console.log('Search组件发布消息了');
      // PubSub.publish('communication', {isFirst:false, isLoading:true})


      // 连续解构赋值+重命名
      const {keyWordElement: {value:KeyWord}} = this
      console.log(KeyWord)

      // 发送请求前通知List更新状态
      PubSub.publish('communication', {isFirst:false, isLoading:true})
      // 发送网络请求 —— 使用axios发送请求
/*       axios.get(`http://localhost:3000/api1/search/users2?q=${KeyWord}`).then(
          response => {
            // 请求成功后通知List更新状态
            PubSub.publish('communication', {isLoading:false, users:response.data.items})
          },
          error => {
            console.log('失败了', error)
            // 请求失败后通知List更新状态
            PubSub.publish('communication', {isLoading:false, err:error.message})
          }
      ) */

      // 发送网络请求 —— 使用fetch发送请求 （关注分离：先联系服务器，再获取数据）
/*       fetch(`http://localhost:3000/api1/search/users2?q=${KeyWord}`).then(
        response => {
          console.log('联系服务器成功了');
          return response.json()
        },
        // error => {
        //   console.log('联系服务器失败了', error);
        //   return new Promise(() => {})
        // } 
      ).then(
        response => {
          console.log('获取数据成功了', response);
          PubSub.publish('communication', {isLoading:false, users:response.items})
        },
        //  error => {
        //   console.log('获取数据失败了', error);
        //   PubSub.publish('communication', {isLoading:false, err:error.message})
        // } 
      ).catch(
        error => {
          console.log('请求出错了', error); // 统一处理错误
        }
      ) */

      // 新发送网络请求 —— 使用fetch发送请求 （关注分离：先联系服务器，再获取数据）
      try {
        const response = await fetch(`http://localhost:3000/api1/search/users2?q=${KeyWord}`)
        const data = await response.json()
        // console.log(data);
        PubSub.publish('communication', {isLoading:false, users:data.items})
      } catch (error) {
        console.log('请求出错了', error);
        PubSub.publish('communication', {isLoading:false, err:error.message})
      }


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

