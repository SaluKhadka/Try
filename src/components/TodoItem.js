import React, { Component } from 'react';
import propTypes from 'prop-types';

export class TodoItem extends Component {

    getStyle = () => {
        return {
            backgroundColor: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: (this.props.todo.completed) ? 'line-through' : 'none'
        }
    }

    render() {
        const { id, title, completed } = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p id={this.key}>
                    <input type="checkbox"
                     defaultChecked={completed}
                     onChange={this.props.toggleComplete.bind(this, id)} /> {' '}
                    {title}

                    <button style={btnStyle} onClick={this.props.deleteTodo.bind(this, id)}>X</button>
                </p>
            </div>
        )
    }
}

TodoItem.propTypes = {
    todo: propTypes.object.isRequired
}

const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding:'5px 10px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

export default TodoItem;
