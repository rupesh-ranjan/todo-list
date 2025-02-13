import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [{ id: 1, message: "Todo message", completed: false }],
    addTodo: (message) => {},
    updateTodo: (id, message) => {},
    delete: (id) => {},
    toggleComplete: (id) => {},
});

export const TodoProvider = TodoContext.Provider;

export const useTodo = () => useContext(TodoContext);
