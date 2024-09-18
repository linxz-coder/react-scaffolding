import React, {Component} from 'react'
import hello from './index.module.css' 

// 创建并暴露App组件
export default class Hello extends Component {
    render() {
        return (
        <div>
            <h2 className={hello.title}>Hello World</h2>
        </div>
        )
    }
}
