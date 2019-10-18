import React,{Component,Fragment} from 'react';
import ReactDOM from 'react-dom';
//jsx表达式会被react转成一个对象
import './index.css';
import { directive } from '@babel/types';
//用类定义组件
export default class Showtime extends Component{
    constructor(props){
        super(props);
        this.state={
            time:new Date().toLocaleString()
        }
       // this.handleClick=this.handleClick.bind(this);
        console.log('constructor',this.props.word)
        setTimeout(()=>{
            this.setState({
                time:new Date().toLocaleString()
            })
        },1000)
    }
    componentDidMount(){
        console.log(' ComponentDidMount');
    }
    shouldComponentUpdate(){
        return true;
    }
    getSnapshotBeforeUpdate(){
        console.log('getsnapshot')
    }
    componentDidUpdate(){
        console.log('didupdate');
    }
    handleClick=(num,e)=>{
        console.log(num,e);
        console.log('点击成功');
    }
    divClick(num,e){
        console.log(num,e);
    }
    render(){
        console.log('render');
        return (
            <Fragment>
                <div onClick={(ev)=>{this.handleClick(1,ev)}}>{this.state.time}</div>
                {/* <div onClick={()=>{
                    console.log(1);
                }}>{this.state.time}</div> */}
                <div onClick={this.divClick.bind(this,3333)}>hello{this.props.word}</div>
            </Fragment>
        );
    }
}
//默认导出
//export default Showtime;
//命名导出
//export{Showtime}


