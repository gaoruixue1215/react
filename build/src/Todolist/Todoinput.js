import React, { Component } from 'react'

export default class Todoinput extends Component {
    constructor(){
        super();
        this.state = {
            todo:[]
        }
    }
    handleInput = (e)=>{
        if(e.keyCode === 13){
            this.props.addTodo(e.target.value);
            e.target.value = ''
        }
    }
    render() {
        return (
            <div className='headerwrap'> 
                <header>
                    <label style={{fontSize:35,color:"white"}}>TodoList</label>
                    <input type="text" onKeyDown={(e)=>this.handleInput(e)} placeholder=" 添加ToDo" required="required" name="todo"></input>
                </header> 
           </div>
        )
    }
}

