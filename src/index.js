import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import Request from './Request';
//jsx表达式会被react转成一个对象
//import './index.css';
//import Showtime from './newzujian';
import Todolist from './todolist/shijiandebangding';
import { directive } from '@babel/types';
import shijiandebangding from './todolist/shijiandebangding';
//import App from './App';
//import * as serviceWorker from './serviceWorker';


//ReactDOM.render(<Showtime word="react"/>,document.getElementById('root'));
ReactDOM.render(<Request/>, document.getElementById('root'));
//ReactDOM.render(<Todolist word="react"/>,document.getElementById('root'))

//组件交互
//父组件->子组件：调用时在子组件上添加属性
//在子组件中通过props获取数据

//react元素创建后不可改变
// function tick(){
//     var e=<div>
//           <p>当前时间</p>
//           <h1>{new Date().toLocaleString()}</h1>
//           </div>
//     ReactDOM.render(e,document.getElementById('root'));
// }
// tick();
// setInterval(tick,1000);

//组件

//函数定义组件  当只是渲染结构的时候（无生命周期函数）
// function Hello(props){
//     return <h1>{props.name}</h1>
// }
// ReactDOM.render(
//     <Hello name="React"/>,document.getElementById('root')
// );


// var e=<div>he</div>;

// function Todo(props){
//     return (
//         <div>
//             {props.list.length>=5?<h1>TODO</h1>:''}
//             {props.list.length>=5 && <h1>TODO</h1>}
//             <ul>
//                 {/* {props.list.map(function(item,index){
//                         return <li key={item}>{item}</li>
//                 })} */}
//                 {
//                     props.list.map((item,index)=>index%2===0 && <li key={item}>{item}</li>)
//                 }
//                 {/*条件渲染*/}
//                 {/*循环渲染*/}
//             </ul>
//         </div>
//     )
// }
// var item=[1,2,3,4,5];
// ReactDOM.render(
//     <Todo list={item}/>,document.getElementById('root')
// );



//var ele=React.createElement('div',{'id':'box'},'hello',React.createElement('h1',{'id':'h'},'react'));

//var str='hello'

// var ele = React.createElement(
//     'div',
//     {'id':'box'},
//     'hello',
//     React.createElement(
//         'h1',
//         {'id':'h'},
//         'react'
//     )
// );


// var obj={
//     type:'div',
//     props:{
//         id:'box',
//         class:'box',
//         childern:['hello',{
//             type:'h1',
//             props:{
//                 id:'h',
//                 class:'h',
//                 childern:['react']
//             }
//         }]
//     }
// }
//加载HTML文件、浏览器解析HTML生成DOM树
//link加载css文件、解析css规则、和DOM结合生成render tree 渲染树，浏览器渲染引擎渲染render tree
//页面回流（重排）：内容改变、大小改变、结构改变
//display width height from-size,会引起页面回流，声明一个css的一个类
// var root =document.getElementById('root');
// var width=root.offsetWidth;
// setInterval(function(){
//     width+=1;
//     root.style.width=width+'px';
// }, 100);
//document.body.style.width='100px';
//.change{
//     width:'100px';
//     height:'100px';
// }
// document.body.className='change';
//页面重绘：把字体颜色、背景颜色等样式改变

// var str='<h1>hhello</h1>'+'';
// ele.innerHTML=str;
//封装
// function render(obj,container){
//     var {type,props}=obj;
    //文档碎片
    //var fragment=document.createDocumentFragement();

//     var ele=document.createElement(type);
//     for(var item in props){
//         if(item==='class'){
//             ele.className=props[item];
//         }else if(item==='children'){
//             for(var i=0;i<props[item].length;i++){
//                 if(typeof props[item][i]==='object'){
//                     render(props[item][i],ele);
//                 }else{
//                 var txt=document.createTextNode(props[item][i]);
//                 ele.appendChild(txt);
//             }
//           }
//         }else{
//             ele[item]=props[item];
//         }
//     }
//     //fragment.appendChild(ele);
//     container.appendChild(ele);
// }
//  render(obj,document.getElementById('root'));
//var ele =<h1>{str}</h1>;
//ReactDOM.render(ele,document.getElementById('root'));


//var e=<h1>hello</h1>
//ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
