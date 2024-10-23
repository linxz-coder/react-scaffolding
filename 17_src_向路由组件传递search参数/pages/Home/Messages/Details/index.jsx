import React from 'react'
import {useLocation} from 'react-router-dom'
import qs from 'qs'

const DetailsData = [
    {id: '001', content: '你好，中国'},
    {id: '002', content: '你好，尚硅谷'},
    {id: '003', content: '你好，未来的自己'}
]

export default function Details () {
    
    // 接收params参数
    // const {id, title} = useParams()

    // 接收search参数
    const {search} = useLocation()
    // search参数是经过url编码的字符串，需要解析成对象
    const {id, title} = qs.parse(search.slice(1))


    const findDetailsData = DetailsData.find(item => item.id === id)

    return (
        <ul>
            <li>ID: {id}</li>
            <li>Title: {title}</li>
            <li>Content: {findDetailsData.content}</li>
        </ul>
    )
}
