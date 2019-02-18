import React, { Component } from 'react';

import PageTemplate from './PageTemplate';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

class App extends Component {
  state = {
    input: '',
    todos: [
      {
        id: 0,
        text: 'Study React',
        done: true,
      },
      {
        id: 1,
        text: 'Study Blockchain',
        done: false,
      },
    ],
  };

  id = 1;
  getId = () => {
    return ++this.id;
  };

  handleChange = e => {
    const { value } = e.target;
    this.setState({
      input: value,
    });
  };

  handleInsert = e => {
    const { todos, input } = this.state;

    // new obj
    const newTodo = {
      text: input,
      done: false,
      id: this.getId(),
    };

    this.setState({
      todos: [...todos, newTodo],
      input: '',
    });
  };

  // toggle the todo item
  handleToggle = id => {
    const { todos } = this.state;
    const index = todos.findIndex(tomato => tomato.id === id);

    const toggled = {
      ...todos[index],
      done: !todos[index].done,
    };

    //update state
    this.setState({
      todos: [
        ...todos.slice(0, index),
        toggled,
        ...todos.slice(index + 1, todos.length),
      ],
    });
  };

  handleRemove = id => {
    const { todos } = this.state;
    const index = todos.findIndex(todo => todo.id === id);

    //찾은인덱스 제외시키기...
    this.setState({
      todos: [
        ...todos.slice(0, index),
        ...todos.slice(index + 1, todos.length),
      ],
    });
  };

  render() {
    const { input, todos } = this.state;
    const { handleChange, handleInsert, handleToggle, handleRemove } = this;
    return (
      <PageTemplate>
        <TodoInput
          onChange={handleChange}
          onInsert={handleInsert}
          value={input}
        />
        <TodoList
          todos={todos}
          onToggle={handleToggle}
          onRemove={handleRemove}
        />
      </PageTemplate>
    );
  }
}

export default App;
