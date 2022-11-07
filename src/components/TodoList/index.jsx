import { useEffect, useState } from "react";
import List from "./components/List";

let num = 0;
function TodoList() {
    const [todoList, setTodoList] = useState(() => {
        const todoListStorage = JSON.parse(localStorage.getItem("cfd11-todolist"));

        if (todoListStorage) {
            const completedFilter = todoListStorage.filter(e => e.completed)
            const countMax = Math.max(...completedFilter.map(item => item.count))
            countMax === null ? 0 : countMax
            num = countMax
        }

        return todoListStorage ? todoListStorage : [];
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
            task.count = ++num;
        }
        setTodoList([...todoList]);
    };

    const handleUpdateEdit = (id, job) => {
        const task = todoList.find((todo) => todo.id === id);
        if (task) {
            task.content = job
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
