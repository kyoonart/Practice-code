import React , { Component } from 'react'
export default class LifeCycle  extends Component{
   render(){

       return (
           <div>
               <h2>hello react</h2>
       <h1>{this.props.arr}</h1>
           </div>
       )
   }
}