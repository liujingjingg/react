import React, { Component } from 'react'
export default class Todoinput extends Component {
    constructor(){
        super();
        this.state={
            n1: ''
        }
    }
    handleChange=(e)=>{

        this.setState({
            [e.target.name]:e.target.value
        })
    } 
    handleInput=(e)=>{
        if(e.keyCode===13){
        this.props.addTodo(e.target.value);//=this.state.val
        this.setState({
            n1: ''
        })
        }
    }
    render() {
        return (
            <div>   
                <label>输入</label>
                <input id="inp" placeholder="添加ToDo" name="n1" onChange={(e)=>this.handleChange(e)} value={this.state.n1} onKeyDown={(e)=>this.handleInput(e)} type="text"/>
            </div>
        )
    }
}


