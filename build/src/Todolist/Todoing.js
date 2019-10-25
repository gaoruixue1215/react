import React, { Component } from 'react'
import PropTypes from 'prop-types';

//正在进行
export default class Todoing extends Component {
    render() {
        return (
            <div className='content'>
                <h1>正在进行 <span className='num'>{this.props.todo.length}</span></h1>
                <ul className="list">
                    {
                        this.props.todo.map((item,idx)=><li className='doing' key={idx}><input type='checkbox' onClick={()=>{this.props.changeTodo(idx)}} checked={false}></input>{item}<button onClick={()=>{this.props.delTodo(idx)}}>删除</button></li>)
                    }
                </ul>
            </div>
        )
    }
}
Todoing.propTypes = {
    todo: PropTypes.array
}
