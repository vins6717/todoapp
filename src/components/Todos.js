import React from 'react';
import TodoItem from './TodoItem'

class Todos extends React.Component{
    render() {
        return (
            <div className="list-container">
                <div className='todo-list'>
                {this.props.todos.map((todo) => (

                    <TodoItem 
                        key={todo.id} 
                        todo={todo}
                        handleChange={this.props.handleChange}
                        deleteToDo={this.props.deleteToDo}
                    />

                    ))}
                </div>
            </div>
        )


    }
}

export default Todos;