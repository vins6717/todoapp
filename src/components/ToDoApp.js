import React from "react";
import Todos from "./Todos";
import Header from "./Header";
import AddTodo from "./AddTodo";
import { v4 as uuidv4 } from 'uuid';

class ToDoApp extends React.Component {
  constructor(props){
    super(props);
    this.state={
      todos:[
        {
          id: uuidv4(),
          title: "Setup development environment",
          completed: false
        }, 
        {
          id: uuidv4(),
          title: "Develop website and add content",
          completed: false
        },
        {
          id: uuidv4(),
          title: "Deploy to live server",
          completed: false
        } 
      ]
    };

    this.handleChange = this.handleChange.bind(this);
    this.deleteToDo = this.deleteToDo.bind(this);
    this.addTodo= this.addTodo.bind(this);
    
  }

  addTodo(title) {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false
    };
    this.setState({
      todos: [
        ...this.state.todos,
        newTodo
      ]
    });
  }

 

  handleChange(id) {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

  deleteToDo(id) {
    this.setState({
      todos: [
        ...this.state.todos.filter((todo) => {
          return todo.id !== id;
        })
      ]
    });
  };

  render() {
    return (
      <div className="container">
      <Header />
      <AddTodo 
        addTodo={this.addTodo}
        
      />
       <Todos 
          todos={this.state.todos}
          handleChange={this.handleChange}
          deleteToDo={this.deleteToDo}
        />
      </div>
    );
  }
}

export default ToDoApp;
