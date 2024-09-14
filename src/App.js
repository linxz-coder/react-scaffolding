import React,{Component} from 'react' //这种赋值说明react使用了多种暴露方式：分别暴露+默认暴露
import Hello from './components/Hello/Hello'
import Welcome from './components/Welcome/Welcome'

// 创建并暴露App组件
export default class App extends Component {
    render() {
        return (
        <div>
            <Hello/>
            <Welcome/>
        </div>
        )
    }
}
