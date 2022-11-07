import { useRef, useState } from "react";
import styled from "styled-components";
import Item from "./Item";

const TodolistRoot = styled.div`
  padding: 1rem;
  .input-group {
    display: flex;
    border: 1px solid #ccc;
    height: 4rem;
  }
  input {
    flex: 1;
    border: none;
    outline: 0;
    padding: 0 1rem;
  }
  .btn-add {
    border: none;
    background-color: #bfbfbf;
    padding: 0 2rem;
    cursor: pointer;
    &:disable {
      background-color: #f7f7f7;
      cursor: no-drop;
    }
  }
  .card-list {
    display: flex;
    gap: 2rem;
    .card {
      flex: 1;
    }
  }
`;

function List({ todoList, handleAdd, handleUpdateCompleted, handleUpdateEdit }) {
    const jobRef = useRef();
    const [job, setJob] = useState("");

    const todoListCompleted = todoList.filter((e) => e.completed);
    todoListCompleted.sort(compareCount)
    const todoList2 = todoList.filter((e) => !e.completed);

    function compareCount(a, b) {
        const countA = a.count
        const countB = b.count

        let compair = 0
        return countA > countB ? compair = -1 : compair = 1
    }

    const handleAddJob = (e) => {
        handleAdd?.(job.trim());
        setJob("");
        jobRef.current.focus();
    };

    const handleCompleted = (id) => {
        handleUpdateCompleted?.(id)
    }

    const handleEdit = (id, job) => {
        handleUpdateEdit?.(id, job)
    }

    const handleOnKeyUpAdd = (event) => {
        if (event.key === "Enter") {
            handleAddJob()
        }
    }

    return (
        <TodolistRoot>
            <div className="input-group">
                <input
                    type="text"
                    placeholder="Công việc..."
                    onKeyUp={handleOnKeyUpAdd}
                    ref={jobRef}
                    value={job}
                    onChange={(e) => setJob(e.target.value)}
                />
                <button className="btn-add" disabled={!job.trim()} onClick={handleAddJob}>
                    Thêm
                </button>
            </div>
            <h1 className="title">Dashboard</h1>
            <div className="card-list">
                <div className="card">
                    <h2>Việc cần làm</h2>
                    {todoList2.map((todo) => (
                        <Item key={todo.id} {...todo} handleEdit={handleEdit} handleCompleted={handleCompleted} />
                    ))}
                </div>
                <div className="card">
                    <h2>Việc đã làm</h2>
                    {todoListCompleted.map((todo) => (
                        <Item key={todo.id} {...todo} handleEdit={handleEdit} handleCompleted={handleCompleted} />
                    ))}
                </div>
            </div>
        </TodolistRoot>
    );
}

export default List;
