import React  from 'react' 
// react中做类型校验的包 
import PropType from 'prop-types'
export default class Counter extends React.Component{
         constructor(props){
             super(props)
             this.state={
                 count:props.initCounter
             }
         }
        //   在初始化生命周期的时候 设置组件默认值
         static defaultProps={
             initCounter:0
         }
        //  类型校验 传过来的参数必须是number类型 否则会报错
         static propTypes={
            initCounter:PropType.number
         }
         render(){
             return<div>
                 <h1>这是Couter</h1>
                 <hr/>
                 <input type="button" value="+1" id="btn" onClick={this.add} />
                 <h2>当前值为: {this.state.count}</h2>
                
             </div>
         }
         add=()=>{
             this.setState({
                count:this.state.count+1
             })
         }
         shouldComponentUpdate(nextProps,nextState){
             console.log(nextProps);
             console.log(nextState);
             return true
             
         }
        //  componentDidMount(){
        //     //  这种方式不推荐
        //      document.querySelector('#btn').onclick=()=>{
        //          this.setState({
        //             count:this.state.count+1
        //          })
        //      }
        //  }
}