import React from 'react';
import { mount } from '../enzyme';
import TodoList from '../components/TodoList';
import TodoContext from '../TodoContext';

describe('<TodoList />', () => {
  let wrapper;
  const contextVal = {
    todos: [
      { id: 'aaa', label: 'test task 1', complete: false, important: false },
      { id: 'bbb', label: 'test task 2', complete: false, important: false }
    ]
  };

  beforeEach(() => {
    wrapper = mount(
      <TodoContext.Provider value={contextVal}>
        <TodoList />
      </TodoContext.Provider>
    );
  });

  it('should render todo list', () => {
    const todo = wrapper.find('section');
    expect(todo.length).toBe(2);
  });
});
