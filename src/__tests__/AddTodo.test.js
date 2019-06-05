import React from 'react';
import { mount } from '../enzyme';
import AddTodo from '../components/AddTodo';
import TodoContext from '../TodoContext';

describe('<AddTodo />', () => {
  let wrapper;
  const contextVal = {
    todos: [
      { id: 'aaa', label: 'test task 1', complete: false, important: false }
      // { id: 'bbb', label: 'test task 2', complete: false, important: false }
    ],
    setTodos: jest.fn()
  };

  beforeEach(() => {
    wrapper = mount(
      <TodoContext.Provider value={contextVal}>
        <AddTodo />
      </TodoContext.Provider>
    );
  });
  it('should render two buttons', () => {
    expect(wrapper.find('svg').length).toBe(2);
    expect(wrapper.find('input').length).toBe(1);
  });
});
