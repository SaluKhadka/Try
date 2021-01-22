import React from 'react';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/layout/pages/About';
import Header from './components/layout/Header';
import { v4 as uuidv4 } from 'uuid';

class App extends React.Component {

  state = {
    todos: [
      {
        id: uuidv4(),
        title: 'Goal 1: Learn React',
        completed: true
      },
      {
        id: uuidv4(),
        title: 'Goal 2: Level up knowledge in Java language',
        completed: false
      },
      {
        id: uuidv4(),
        title: 'Get involved in reading habits',
        completed: false
      }
    ]
  }

  toggleComplete = (id) => {
    this.setState({
      todo: this.state.todos
        .filter(todo => todo.id === id)
        .map(todo => todo.completed = !todo.completed)
    });
  }

  deleteTodo = (id) => {
    console.log(id);
    this.setState({ todos: [...this.state.todos.filter(it => it.id !== id)] });
  }

  addTodo = (title) => {
    console.log(title);
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo] });
  }

  render() {
    return (
        <div className="App">
          <div className="container">
            <Header />
            <AddTodo addTodo= {this.addTodo} />
            <Todos todos={ this.state.todos }
       toggleComplete={this.toggleComplete}
       deleteTodo={this.deleteTodo}/>
                       </div>
        </div>
    );
  }
}

export default App;