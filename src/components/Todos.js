import React from 'react';
import TodoList from './TodoItem';
import propTypes from 'prop-types';

class Todo extends React.Component {

  render() {
    return this.props.todos.map((it) => (
        <TodoList key={it.id}
         todo= {it}
         toggleComplete={this.props.toggleComplete}
         deleteTodo={this.props.deleteTodo}
         />
    ));
  }
}

Todo.propTypes = {
    todos: propTypes.array.isRequired
}

export default Todo;