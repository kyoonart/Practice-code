import React from 'react'
import ReactDom from 'react-dom'
import './css/List.css'
function Item(props){
    return <div>
                        <h1 style={{color:'green'}}>people:{props.user}</h1>
                        <h4 >content: {props.content}</h4></div>
}
export default class List extends React.Component {
        constructor(props) {
            super(props)
            this.state = {
                conts: [
                    { user: 'zhangsan', content: "123" },
                    { user: 'zhangsxn', content: "456" },
                    { user: 'zhangsan', content: "789" },
                    { user: 'zhangsan', content: "2552" },
                    { user: 'zhangsan', content: "123" },
                    { user: 'zhangsan', content: "123" }
                ]
            }
        }
        render() {
            let itemSTYLE={border:'1px solid #ccc',padding:'10'}
            return <div >
             <h1 className='title'>评论列表案例</h1>
                 {this.state.conts.map((item,i)=>{
                        return    <div key={i} style={itemSTYLE}><Item   {...item}></Item>
                  
                        </div>
                    })}
                  
                    </div>
            }
        }
ReactDom.render(<div><List ></List></div>,
document.getElementById('root'))