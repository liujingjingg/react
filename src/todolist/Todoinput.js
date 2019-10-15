import React, { Component } from 'react'
//子组件---->父组件传递数据，调用子组件时往子组件传递一个函数
//子组件通过props调用该函数

//受控组件和非受控组件
//受控组件：value值react控制
//可以方便拿到input框的值、实时获取或处理输入的内容


//受控组件
export default class Todoinput extends Component {
    constructor(){
        super();
        this.state={
            n1: 0,
            n2: 0
        }
    }
    handleChange=(e)=>{

        this.setState({
            [e.target.name]:parseInt(e.target.value===''?0:e.target.value)
        })
    }
    handleInput=(e)=>{
        if(e.keyCode===13){
        this.props.addTodo(e.target.value);//=this.state.val
        }
    }
    render() {
        return (
            <div>
                <label style={{
                    color:this.state.n1+this.state.n2>10?'red':'green'
                }} htmlFor="inp">输入：</label>
                <input id="inp" name="n1" onChange={(e)=>this.handleChange(e)} value={this.state.n1} onKeyDown={(e)=>this.handleInput(e)} type="text"/>
                +
                <input name="n2" onChange={(e)=>this.handleChange(e)} value={this.state.n2} onKeyDown={(e)=>this.handleInput(e)} type="text"/>
                <p>{this.state.n1+this.state.n2}</p>
            </div>
        )
    }
}


//非受控组件
//代码简单，比较适用于一次性获取表单所有值
// export default class Todoinput extends Component{
//     componentDidMount(){
//         console.log(this.inp.value);
//         console.log(this.refs);
//     }
//     serach=()=>{
//         console.log(this.inp.value);
//     }
//     render(){
//         return (<div>
//             <input ref={(inp)=>this.inp=inp} type="text"/>
//             <button onClick={this.serach}>查询</button>
//         </div>)
//     }
// }