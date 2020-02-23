import React from 'react'
import ReactDom from 'react-dom'
import LifeCycle from './LifeCycle'
// const ele = < h2 > hello,react 233</h2>
const arr=[2,2,5,6,5,5,6]

ReactDom.render(<LifeCycle></LifeCycle>,document.querySelector('#root'));
// ReactDom.render(<ul>
//     {
//     arr.map((item,index)=>{
//         return <li key={index}>{item}</li>
//     })
//     }
// </ul>, document.querySelector('#root'));