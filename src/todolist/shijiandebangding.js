import React, { Component } from 'react'
import Toding from './Toding'
import Todoinput from './Todoinput'

export default class Todolist extends Component {
    constructor(){
        super();
        this.state={
            todo:[1,2,3]
        }
        var arr=[1,2,{a:100}];
      //  var b=JSON.parse(JSON.stringify(arr));
        //var b=[...arr];
        //b[2].a=200;
        //console.log(arr);


        //对象的拷贝assign
        var a={a:100,b:200};
        //var b={b:100};
        // var o=Object.assign({},a);
        // console.log(o===a);
        // console.log(o);


        //遍历对象keys
        Object.keys(a).forEach((item)=>{
            console.log(item)//只是对象名称 a,b
            console.log(a[item])//对象内容 100 200
        })
        for(var item in a){
            console.log(item);
        }
    }
    addItem=(msg)=>{
        this.setState({
            todo:[...this.state.todo,msg]
        })
        console.log(msg);
    }
    delItem=(a)=>{
       //this.state.todo.splice(a,1)
       //深拷贝\浅拷贝
       //状态state
       //1.不要直接改变状态、处理状态
       var todo =[...this.state.todo];
       todo.splice(a,1);
       //2.setstate是异步的
       this.setState((state,props)=>({
           todo:state.todo+1 
       }))
       this.setState({
           todo:this.state.todo
       })
    }
    render() {
        return (
            <div>
                <Todoinput addTodo={this.addItem}/>
                <Toding delTodo={this.delItem} todo={this.state.todo}/>
            </div>
        )
    }
}
