import React, { Component } from 'react'
import Todoing from './Todoing';
import ToDone from './ToDone';
import Todoinput from './Todoinput';

export default class Todolist extends Component {
    constructor(){
        super();
        var todo = localStorage.todo != null ? JSON.parse(localStorage.todo) : [];
        var todone = localStorage.todone != null ? JSON.parse(localStorage.todone) : [];
        this.state = {
            todo: todo,
            todone:todone
        }
    }
    addItem = (data)=>{
        var todo = [...this.state.todo,data];
        this.setState({
            todo:todo
        },()=>{
            localStorage.setItem('todo',JSON.stringify(todo));
        })

    }
    delTodoItem = (id)=>{
        var todo = [...this.state.todo];
        todo.splice(id,1);
        this.setState({
            todo:todo
        },()=>{
            localStorage.setItem('todo',JSON.stringify(todo));
        })
        
    }
    delDoneItem = (id)=>{
        var todone = [...this.state.todone];
        todone.splice(id,1);
        this.setState({
            todone:todone
        },()=>{
            localStorage.setItem('todone',JSON.stringify(todone));
        })
        
    }
    doneItem = (data)=>{
        var todone = [...this.state.todone,data];
        this.setState({
            todone:todone
        },()=>{
            localStorage.setItem('todone',JSON.stringify(todone));
        })
        
    }
    changeItem = (id) =>{
        var todone =  [...this.state.todone,this.state.todo[id]];
        this.delTodoItem(id);
        this.setState({
            todone:todone
        },()=>{
            localStorage.setItem('todone',JSON.stringify(todone));
        })

    }
    render() {
        return (
            <div>
                <Todoinput addTodo={this.addItem}/>
                <Todoing delTodo={this.delTodoItem} todo={this.state.todo} changeTodo={this.changeItem}/>
                <ToDone doneTodo={this.doneItem} todone={this.state.todone} changeTodo={this.changeItem} delTodone={this.delDoneItem}/>
            </div>
        )
    }
}


