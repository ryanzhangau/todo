import React, { useContext, useState } from 'react';
import TodoItem from './TodoItem';
import TodoContext from '../TodoContext';

const TodoList = () => {
  const { todos } = useContext(TodoContext);
  return (
    <div>
      {todos.map((todo, index) => (
        <TodoItem todo={todo} key={index} />
      ))}
    </div>
  );
};

export default TodoList;
