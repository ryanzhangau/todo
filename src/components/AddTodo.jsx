import React, { useState, useContext } from 'react';
import TodoContext from '../TodoContext';
import Input from '@material-ui/core/Input';
import { Todo } from '../style/Todo.style';
import AddIcon from '@material-ui/icons/Add';
import shortid from 'shortid';

const AddTodo = () => {
  const { todos, setTodos } = useContext(TodoContext);
  const [newTask, setNewTask] = useState('');
  return (
    <Todo>
      <Input
        id='new-task'
        name='new-task'
        value={newTask}
        onChange={e => setNewTask(e.target.value)}
        placeholder='New task'
        inputProps={{
          'aria-label': 'New Task'
        }}
      />
      <AddIcon
        style={{ cursor: 'pointer' }}
        onClick={() => {
          setTodos([...todos, { id: shortid.generate(), label: newTask, complete: false }]);
          setNewTask('');
        }}
      />
    </Todo>
  );
};

export default AddTodo;
