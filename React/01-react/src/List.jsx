import React, { Component, useState } from 'react';
import './css/style.css';
const list = [1, 2, 3, 4, 5, 6, 5, 6, 6, 3, 3, 3, 2, 2, 2, 2];
const items = list.map((item, index) => {
  return <li className="large" key={index}>{item}</li>;
});
function Button(){
  const [count,setCount]=useState('text','sss');
  console.log(setCount);
  console.log(count);
  return <div>
  {count}</div>
}
class List extends Component {
  render() {
    return (
      <div>
        <h2 className="large">标题</h2>
        <Button></Button>
        <ul>
          {list.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
        <ul>{items}</ul>
      </div>
    );
  }
}

export default List;
