import React, { Component } from 'react';
import {Input,Button,List} from 'antd'
import store from './store/index'
export default class App extends Component {
  constructor(props){
    super(props)
    this.state=store.getState();    
    this.storeChange = this.storeChange.bind(this)  //转变this指向
    store.subscribe(this.storeChange) //订阅Redux的状态 
  }
  render() {
   
    return (
      <div style={{marginLeft:"550px"}}> 
      <div>
      <Input placeholder= {this.state.inputValue} style={{width:"250px"}} onChange={this.inputChange} />
      <Button type="primary" onClick={this.add}>add</Button>
      </div>
      <div style={{margin:'10px',width:'300px',marginLeft:'0px'}}>
      <List
      bordered
      dataSource={this.state.list}
      renderItem={item=>(<List.Item>{item}</List.Item>)}
      /></div>
       </div>
    )
   
  }
  inputChange=(e)=>{
    const action={
    type:"changeInput",
     value:e.target.value
    }
    store.dispatch(action)
  }
  storeChange(){
    this.setState(store.getState()) 
 }
 add=()=>{
  const action = { type:'addItem'}
  store.dispatch(action)
 }
  
}
