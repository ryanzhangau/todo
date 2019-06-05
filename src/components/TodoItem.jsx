import React, { useContext } from 'react';
import ClearIcon from '@material-ui/icons/Clear';
import DoneIcon from '@material-ui/icons/Done';
import NotificationImportantIcon from '@material-ui/icons/NotificationImportant';
import { Todo } from '../style/Todo.style';
import TodoContext from '../TodoContext';

const TodoItem = props => {
  const { todo } = props;
  const { deleteTodo, complete, important } = useContext(TodoContext);
  return (
    <Todo>
      <strong>{todo.label}</strong>
      <DoneIcon
        style={{ cursor: 'pointer', color: todo.complete ? 'limegreen' : '#aaa' }}
        onClick={() => complete(todo.id)}
      />
      <NotificationImportantIcon
        style={{ cursor: 'pointer', color: todo.important ? 'red' : '#aaa' }}
        onClick={() => important(todo.id)}
      />
      <ClearIcon style={{ cursor: 'pointer' }} onClick={() => deleteTodo(todo.id)} />
    </Todo>
  );
};

export default TodoItem;
