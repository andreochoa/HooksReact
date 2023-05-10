const todoReducer = (initialState = [], action = {}) => {
  switch (action.type) {
    case "addTodo":
      // throw new Error('Action.type ABC, no esta implementada');
      return [...initialState, action.payload];

    case "removeTodo":
      return initialState.filter(todo => todo.id !== action.payload);
    case "doneTodo":
      return  initialState.map(todo => {
        if(todo.id === action.payload){
          return {...todo,
          done: !todo.done}
        }
        return todo;
      });

    default:
      break;
  }
  return {};
};

export default todoReducer;
