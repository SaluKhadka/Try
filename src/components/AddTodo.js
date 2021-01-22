import React, { Component } from 'react'

export class AddTodo extends Component {
    state = {
        title:''
    }

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({ title: ''});
    }

    render() {
        return (
            <form style={{  display: "flex", flexDirection: "column" }} onSubmit={this.onSubmit}>
                <input 
                style={{flex: '10', padding: '5px'}}
                name="title"
                value={this.state.title}
                placeholder="Add Todo.."
                onChange= {this.onChange}
                />
                <input 
                type="submit"
                value="Add"
                className="btnAdd"
                style={{flex: 1}}
                />
            </form>
        
        )
    }
}

export default AddTodo;
