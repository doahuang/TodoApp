
export const allTodos = ({ todos }) => {
  return Object.keys(todos).map(id => todos[id]);
};

export const stepsByTodoId = ({ steps }, todoId) => {
  const stepsList = Object.keys(steps).map(id => steps[id]);
  return stepsList.filter(step => step.todoId === todoId);
};