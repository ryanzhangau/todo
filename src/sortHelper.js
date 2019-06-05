export const sortTodo = (array, key) => {
  return array.sort((a, b) => {
    const first = a[key];
    const second = b[key];
    return first < second ? -1 : first > second ? 1 : 0;
  });
};
