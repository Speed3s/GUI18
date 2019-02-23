import React, { Component } from 'react';

class Todo extends Component{
    render(){
        return (
            <div className="Todomain">
                <form className= "form-main">
                <h1>To-Do List</h1>
                    <input placeholder="Enter a task...">
                    </input> 
                    <button className = "Btn" type="submit">Add the task</button>
                </form>
            </div>
        )
    }

}

const element = <p>To do</p>;



export default Todo;