import React from 'react'
export default class Bindthis extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            msg: '这是默认值'
        }
        this.changeThis2=this.changeThis2.bind(this,'look')
    }
   
    render() {
        return <div>
            <h1>绑定this的几种方式</h1>
            <input type='button' value='绑定this1' onClick={this.changeThis1.bind(this,'233')} />
            <input type='button' value='绑定this2' onClick={this.changeThis2} />
            <input type='button' value='绑定this3' onClick={()=>{this.changeThis3('333')}}/>
            <input type='button' value='绑定this3' onClick={this.changeThis4}/>
            <hr/>
            <h3>{this.state.msg}</h3>
            <h2>数据双向绑定</h2>
            <input type="text" value={this.state.msg} onChange={this.changValue} />
           </div>
    }
    changeThis1(arg){
      this.setState({
       msg:'1改变了'+arg
      })
        
    }
     changeThis2(arg){
      this.setState({
       msg:'2改变了'+arg
      })
       
    }
    changeThis3(arg){
      this.setState({
       msg:'3改变了'+arg
      })
       
    }
    changeThis4 = (arg)=>{
      this.setState({
       msg:'3-1改变了'+arg
      })
       
    }
    changValue=(e)=>{
      this.setState({
        msg:e.target.value
      })
      console.log(e.target.value);
      
    }
} 