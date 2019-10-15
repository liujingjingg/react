import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Toding extends Component {
    render() {
        return (
            <div>
                <h1>正在进行{this.props.a}</h1>
                <ul className="list">
                   {
                       this.props.todo.map((item,idex)=><li key={idex}>{item}---<button onClick={()=>this.props.delTodo(idex)}>删除</button></li>)  
                       }
                </ul>
            </div>
        )
    }
}

Toding.propTypes={
    todo:PropTypes.string
}
Toding.defaultProps={
    todo:[2,3,4],
    a:100
}