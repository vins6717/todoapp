import React from "react";
import Todos from "./Todos";
import Header from "./Header";
import AddTodo from "./AddTodo";


class ToDoApp extends React.Component {
  constructor(props){
    super(props);
    this.state={
      todos:[] 
    };

    this.handleChange = this.handleChange.bind(this);
    this.deleteToDo = this.deleteToDo.bind(this);
    this.addTodo= this.addTodo.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    
    
  }

  addTodo(title) {

    const addToDo = { 
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: title })
    }
   fetch("https://jsonplaceholder.typicode.com/posts", addToDo)
   .then(response => response.json())
   .then(response => this.setState({
     todos:[...this.state.todos, response]
   }));

  };
  

 

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
    fetch(`https://jsonplaceholder.typicode.com/todos/posts/${id}`, {
      method: "DELETE"
    }).then(response => response.json()).then(response => this.setState({
      todos: [
        ...this.state.todos.filter((todo) => {
          return todo.id !== id;
        })
      ]
    }))
  };

  componentDidMount() {
   fetch("https://jsonplaceholder.typicode.com/todos?_limit=3")
   .then(response => response.json())
   .then(response => this.setState({todos: response}));
  }
 

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
