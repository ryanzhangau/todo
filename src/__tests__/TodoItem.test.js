import React from 'react';
import { mount } from '../enzyme';
import TodoItem from '../components/TodoItem';
import TodoContext from '../TodoContext';

describe('<TodoItem />', () => {
  let wrapper;
  const props = {
    todo: { id: 'aaa', label: 'test task 1', complete: false, important: false }
  };

  beforeEach(() => {
    wrapper = mount(
      <TodoContext.Provider value={{ todos: props.todo }}>
        <TodoItem {...props} />
      </TodoContext.Provider>
    );
  });

  it('should render todo item', () => {
    const todo = wrapper.find('section');
    expect(todo.length).toBe(1);
    expect(todo.find('strong').text()).toBe('test task 1');
  });
});
