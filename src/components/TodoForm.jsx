import { useState } from "react";
import { useTodo } from "../contexts";

function TodoForm() {
    const [todo, setTodo] = useState("");
    const { addTodo } = useTodo();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (todo.trim() !== "")
            addTodo({ id: Date.now(), todo: todo.trim(), completed: false });

        setTodo("");
    };
    return (
        <form className="flex" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button
                type="submit"
                className={`rounded-r-lg px-3 py-1 text-white shrink-0 ${todo.trim() === "" ? "bg-gray-500" : "cursor-pointer bg-green-600 hover:bg-green-700"}`}
                disabled={todo.trim() === "" ? true : false}
            >
                Add
            </button>
        </form>
    );
}

export default TodoForm;
