import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'

class TodoItem extends React.Component {
    render () {
        
        const completedStyle={
            color: "#cccccc",
            textDecoration: "line-through"
        }

        const { completed, id, title } = this.props.todo

        return (

            <div className="todo-items">

                <input 
                    type="checkbox" 
                    checked={completed} 
                    className="checkbox"
                    onChange={(event) => this.props.handleChange(id)}
                />

                <li><span style={completed ? completedStyle : null}>{title}</span></li>

                <FontAwesomeIcon icon={faTrashCan} className="trash-icon"
                    onClick={() => this.props.deleteToDo(id)}
                />


            </div>
        )
    }
}

export default TodoItem;