import React from 'react'
import {useParams} from 'react-router-dom'

const DetailsData = [
    {id: '001', content: '你好，中国'},
    {id: '002', content: '你好，尚硅谷'},
    {id: '003', content: '你好，未来的自己'}
]

export default function Details () {
    
    // 接收params参数
    const {id, title} = useParams()
    const findDetailsData = DetailsData.find(item => item.id === id)

    return (
        <ul>
            <li>ID: {id}</li>
            <li>Title: {title}</li>
            <li>Content: {findDetailsData.content}</li>
        </ul>
    )
}
