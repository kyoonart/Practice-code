import React  from 'react' 
import PropType from 'prop-types'
export default class Counter extends React.Component{
         constructor(props){
             super(props)
             this.state={
                 count:props.initCounter
             }
         }
         static defaultProps={
             initCounter:0
         }
         static propType
         render(){
             return<div>
                 <h1>这是Couter</h1>
                 <hr/>
                 <input type="button" value="+1" id="btn" />
                 <h2>当前值为: {this.state.count}</h2>
                
             </div>
         }
         componentDidMount(){
             document.querySelector('#btn').onclick=()=>{
                 this.setState({
                    count:this.state.count+1
                 })
             }
         }
}