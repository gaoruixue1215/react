import React, { Component } from 'react'
import PropTypes from 'prop-types';

//正在进行
export default class ToDone extends Component {
    render() {
        return (
            <div className='content'>
                <h1>已经完成 <span className='num'>{this.props.todone.length}</span></h1>
                <ul className="list">
                    {
                        this.props.todone.map((item,idx)=><li className='done' key={idx}><input type='checkbox' checked={true}></input>{item}<button onClick={()=>{this.props.delTodone(idx)}}>删除</button></li>)
                    }
                </ul>
            </div>
        )
    }
}
ToDone.propTypes = {
    todone: PropTypes.array
}






