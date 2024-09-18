import React, {Component} from 'react'
import welcome from './index.module.css' 

// 创建并暴露Welcome组件
export default class Welcome extends Component {
    render() {
        return (
        <div>
            <h2 className={welcome.title}>Welcome to React</h2>
        </div>
        )
    }
}