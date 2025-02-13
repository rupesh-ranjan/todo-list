import { createContext, useContext } from "react";
/*eslint no-unused-vars: "error"*/
export const TodoContext = createContext({
    todos: [{ id: 1, todo: "Todo message", completed: false }],
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {},
});

export const TodoProvider = TodoContext.Provider;

export const useTodo = () => useContext(TodoContext);
