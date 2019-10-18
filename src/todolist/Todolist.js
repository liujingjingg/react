import React, { Component } from 'react'
import Toding from './Toing'
import Todoinput from './Todoinput'

export default class Todolist extends Component {
    constructor(props){
        super(props);
        this.state={
            //todo:[1,2,3]
             todo:JSON.parse(localStorage.getItem('todo'))||[],
             end:JSON.parse(localStorage.getItem('end'))||[]
        }
    }                                                                                                                                                                              
    //添加新任务，在组件中以props的形式传递给子组件
    addItem=(msg)=>{
        this.setState((state)=>(
            {
                todo:[...state.todo,msg]
            }
        ),()=>{
           localStorage.setItem('todo',JSON.stringify(this.state.todo)); 
        })
        console.log(msg);
    }
    //更新完成的任务，在组件中以props的形式传递给子组件
    updateItem=(idex)=>{
        
        this.setState({
            end:[...this.state.end,this.state.todo.splice(idex,1)[0]],
            todo:this.state.todo
        },()=>{
            localStorage.setItem('todo',JSON.stringify(this.state.todo));
            localStorage.setItem('end',JSON.stringify(this.state.end));
        })
        console.log(this);
    }
    //删除已经完成的任务或不需要处理的任务
    delItem=(a,item)=>{
    //    var todo =[...this.state.todo];
    //    todo.splice(a,1);
    //    this.setState({
    //        todo:todo
    //    },()=>{localStorage.setItem('todo',JSON.stringify(this.state.todo));})
    if(item=='todo'){
        var todo=[...this.state.todo];
        todo.splice(a,1);
        this.setState({
            todo:todo
        },()=>{localStorage.setItem('todo',JSON.stringify(this.state.todo));})
    }else if(item=='end'){
        var end=[...this.state.end];
        end.splice(a,1);
        this.setState({
            end:end
        },()=>{
            localStorage.setItem('end',JSON.stringify(this.state.end));
        })
    }
    }
    //在已经完成的任务中，点击复选框回到正在进行任务中
    newItem=(idex)=>{
        this.setState({
            end:this.state.end,
            todo:[...this.state.todo,this.state.end.splice(idex,1)[0]]
        },()=>{
            localStorage.setItem('todo',JSON.stringify(this.state.todo));
            localStorage.setItem('end',JSON.stringify(this.state.end));
        })
        console.log(this);
    }
    render() {
        return (
            <div>
                <Todoinput addTodo={this.addItem}/>
                <Toding delTodo={this.delItem} new={this.newItem} todo={this.state.todo} finsh={this.updateItem} end={this.state.end}/>
            </div>
        )
    }
}


