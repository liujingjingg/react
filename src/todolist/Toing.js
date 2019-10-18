import React, { Component } from 'react'
import PropTypes from 'prop-types'


export default class Toding extends Component {
    render() {
        console.log(this.props.todo)
        return (
            <div>
                <h1>正在进行--------{(this.props.todo||[]).length}</h1>
                <ul className="list">
                   {
                       (this.props.todo||[]).map((item,idex)=><li key={idex}><input type="checkbox" checked='' onClick={()=>{this.props.finsh(idex)}} />{item}---<button onClick={()=>this.props.delTodo(idex,'todo')}>删除</button></li>)  
                       }
                </ul>
                <h1>已经完成--------{(this.props.end||[]).length}</h1>
                <ul>
                    {
                        (this.props.end || []).map((item,idex)=><li key={idex}><input type="checkbox" checked='' onClick={()=>{this.props.new(idex)}} />{item}---<button onClick={()=>this.props.delTodo(idex,'end')}>删除</button></li>)
                    }
                </ul>
            </div>
        )
    }
}

Toding.propTypes={
    todo:PropTypes.string
}


