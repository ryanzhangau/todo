import React, { useState } from 'react';
import TodoContext from './TodoContext';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import { TodoHead } from './style/Todo.style';
import SortByAlphaIcon from '@material-ui/icons/SortByAlpha';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, label: 'some task', complete: false, important: false }
  ]);

  const deleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const complete = id => {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) return { ...todo, complete: !todo.complete };
        return todo;
      })
    );
  };

  const important = id => {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) return { ...todo, important: !todo.important };
        return todo;
      })
    );
  };

  return (
    <>
      <TodoHead>
        <h3 style={{ margin: '0' }}>Todo List</h3>
        <span style={{ gridColumn: '2 / span 2' }}>
          {todos.filter(todo => !todo.complete).length} / {todos.length}
        </span>
      </TodoHead>
      <TodoContext.Provider value={{ todos, setTodos, deleteTodo, complete, important }}>
        <TodoList />
        <AddTodo />
      </TodoContext.Provider>
    </>
  );
}

export default App;
