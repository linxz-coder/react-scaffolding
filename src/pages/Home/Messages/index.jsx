import React from 'react'
import { Link, Route, Routes, useNavigate } from 'react-router-dom'
import Details from './Details' 

export default function Messages() {

  const messagesArr = [
    {id: '001', title: 'message001'},
    {id: '002', title: 'message002'},
    {id: '003', title: 'message003'}
  ]


  const navigate = useNavigate()

  const pushShow = (id, title) => {
    // 编写一段代码，让其实现跳转到Details组件，但是使用push进行跳转
    navigate(`/home/messages/details/${id}/${title}`);
  }

  const replaceShow = (id, title) => {
    // 编写一段代码，让其实现跳转到Details组件，但是使用replace进行跳转
    navigate(`/home/messages/details/${id}/${title}`, { replace:true } );
  }



  return (
      <div>
          <ul>
              {
                messagesArr.map((messageObj) => {
                      return (
                          <li key={messageObj.id}>
                              {/* 向路由组件传递params参数 */}
                              <Link to={`/home/messages/details/${messageObj.id}/${messageObj.title}`}>{messageObj.title}</Link>
                              &nbsp;<button onClick={()=>pushShow(messageObj.id, messageObj.title)}>push查看</button>
                              &nbsp;<button onClick={()=>replaceShow(messageObj.id, messageObj.title)}>replace查看</button>

                              {/* 向路由组件传递search参数 */}
                              {/* <Link to={`/home/messages/details?id=${messageObj.id}&title=${messageObj.title}`}>{messageObj.title}</Link> */}

                              {/* 向路由组件传递state参数 */}
                              {/* <Link to="/home/messages/details" state={{id: messageObj.id, title: messageObj.title}}>{messageObj.title}</Link> */}
                          </li>
                      )
                  })
              }
          </ul>
          <hr/>
          {/* 注册路由 */}
          <Routes>
              {/* 声明接收params参数 */}
              <Route path="/details/:id/:title" element={<Details/>}/>

              {/* search参数无需声明接收，正常注册路由即可 */}
              {/* <Route path="/details" element={<Details/>}/> */}

              {/* state参数无需声明接收，正常注册路由即可 */}
              {/* <Route path="/details" element={<Details/>}/> */}
              
          </Routes>
    </div>
  )
}
