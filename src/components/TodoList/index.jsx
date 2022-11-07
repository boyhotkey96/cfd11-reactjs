import { useEffect, useState } from "react";
import List from "./components/List";

function TodoList() {
    const [todoList, setTodoList] = useState(() => {
        const todoListStorage = localStorage.getItem("cfd11-todolist");
        return todoListStorage ? JSON.parse(todoListStorage) : [];
    });

    const handleAdd = (job) => {
        const newJob = {
            id: Math.random() + "-" + Date.now(),
            content: job,
            completed: false,
        };
        setTodoList([...todoList, newJob]);
    };

    const handleUpdateCompleted = (id) => {
        const task = todoList.find((todo) => todo.id === id);
        if (task) {
            task.completed = true;
        }
        setTodoList([...todoList]);
    };

    const handleUpdateEdit = (id, x) => {
        const task = todoList.find((todo) => todo.id === id);
        if (task) {
            task.content = x
        }
        setTodoList([...todoList]);
    }

    useEffect(() => {
        localStorage.setItem("cfd11-todolist", JSON.stringify(todoList));
    }, [todoList]);

    return (
        <div>
            <List
                todoList={todoList}
                handleAdd={handleAdd}
                handleUpdateEdit={handleUpdateEdit}
                handleUpdateCompleted={handleUpdateCompleted}
            />
        </div>
    );
}

export default TodoList;
