import React, { Component } from 'react';
import {HashRouter,Route,Link} from 'react-router-dom'
import  Home from './Home'
import  About from './About'
import  Movie from './Movie'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
     <HashRouter>
     <view>
     <h2> 这是网站的根组件 </h2>
   </view>
 <div>  <Link to='/home'>首页</Link></div>
  <div> <Link to='/movie'>电影</Link></div>
<div>   <Link to='/about'>关于</Link></div>
<Route path='/home' component={Home}></Route>
<Route path='/movie' component={Movie}></Route>
<Route path='/about' component={About}></Route>
   </HashRouter>
    );
  }
}

export default App;
