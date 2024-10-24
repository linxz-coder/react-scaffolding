import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Header() {
  const navigate = useNavigate()
  const go =() => {
    navigate(-2); // 自定义功能：后退两步
  }

  return (
    <div className="page-header">
           <h2>React Router Demo</h2>
           <button onClick={()=> navigate(-1)}>Back</button>
           <button onClick={()=> navigate(1)}>Forward</button>
           <button onClick={go}>Go</button>
           </div>
  )
}
