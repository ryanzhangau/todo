import React, { useState, useContext } from 'react';
import TodoContext from '../TodoContext';
import Input from '@material-ui/core/Input';
import { TodoFooter } from '../style/Todo.style';
import AddIcon from '@material-ui/icons/Add';
import NotificationImportantIcon from '@material-ui/icons/NotificationImportant';
import shortid from 'shortid';
import { sortTodo } from '../sortHelper';
const AddTodo = () => {
  const { todos, setTodos } = useContext(TodoContext);
  const [newTask, setNewTask] = useState('');
  const [important, setImportant] = useState(false);
  return (
    <TodoFooter>
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

      <NotificationImportantIcon
        style={{ cursor: 'pointer', color: important ? 'red' : '#aaa' }}
        onClick={() => setImportant(!important)}
      />
      <AddIcon
        style={{ cursor: 'pointer' }}
        onClick={() => {
          if (newTask) {
            const newTodo = [
              ...todos,
              { id: shortid.generate(), label: newTask, complete: false, important }
            ];
            const highPriority = newTodo.filter(todo => todo.important);
            const lowPriority = newTodo.filter(todo => !todo.important);
            setTodos([...sortTodo(highPriority, 'label'), ...sortTodo(lowPriority, 'label')]);
            setNewTask('');
            setImportant(false);
          }
        }}
      />
    </TodoFooter>
  );
};

export default AddTodo;
