import React, { Component } from 'react'
import { Button, DatePicker } from 'antd'
import { WechatOutlined } from '@ant-design/icons'
const { RangePicker } = DatePicker;


export default class App extends Component {

  render() {
    const onChange = (date, dateString) => {
      console.log(date, dateString);
    };

    return (
      <div>
        App
        <Button type="primary">Primary Button</Button>
        <Button type="link">Primary Button</Button>
        <Button>Primary Button</Button>
        <WechatOutlined />
        <hr />
        <DatePicker onChange={onChange} />
        <RangePicker />
      </div>
      
    )
  }
}
