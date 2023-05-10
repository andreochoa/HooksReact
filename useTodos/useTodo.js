import React, { useEffect, useReducer } from 'react'
import todoReducer from './todoReducer';
const initialState = [];

const init = () => {
  return JSON.parse(localStorage.getItem("todos") || []);
};

const useTodo = () => {

  const [todos, dispatch] = useReducer(todoReducer, initialState, init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleNewTodo = (todo) => {
    const action = {
      type: "addTodo",
      payload: todo,
    };

    dispatch(action);
  };
  const handleDeleteTodo = (id) => {
    console.log({ id });
    const action = {
      type: "removeTodo",
      payload: id,
    };

    dispatch(action);
  };
  const handleDoneTodo = (id) => {
    console.log({ id });
    const action = {
      type: "doneTodo",
      payload: id,
    };

    dispatch(action);
  };
  return {
    todoCount: todos.length,
    pendingTodos: todos.filter(todo => !todo.done).length,
    todos,
    handleNewTodo,
    handleDeleteTodo,
    handleDoneTodo,
  };
};

export default useTodo;
