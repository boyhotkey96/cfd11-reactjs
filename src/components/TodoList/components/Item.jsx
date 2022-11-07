import { useRef, useState } from "react";
import styled from "styled-components";

const TodoItemRoot = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  padding: 1rem 0 1rem 2rem;
  height: 5rem;
  margin-bottom: 1rem;
  .name {
    flex: 1;
    text-transform: capitalize;
  }
  button {
    border: 1px solid #ccc;
    background-color: #eee;
    width: 3.5rem;
    height: 3.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  &.isCompleted {
    background: #ccc;
    text-decoration: line-through;
    button {
      display: none;
    }
  }
  .input {
    display: none;
  }
  .none {
    display: none;
  }
`;

function Item({ id, content, completed, handleCompleted, handleEdit }) {
    const divRef = useRef();
    const inputRed = useRef();
    const okRef = useRef();
    const editRef = useRef();

    const [job, setJob] = useState(content)

    const handleCheck = (id) => {
        handleCompleted?.(id);
    };
    
    const handleCheckEdit = (id) => {
        divRef.current.style.display = "none"
        inputRed.current.style.display = 'block'

        editRef.current.style.display = "none"
        okRef.current.style.display = 'flex'

        inputRed.current.focus()
    };
    
    const handleOk = (id, job) => {
        editRef.current.style.display = "flex"
        okRef.current.style.display = 'none'

        divRef.current.style.display = "block"
        inputRed.current.style.display = 'none'

        handleEdit?.(id, job);
    };

    return (
        <TodoItemRoot className={completed ? "isCompleted" : ""}>
            <div ref={divRef} className="name">
                {content}
            </div>
            <input ref={inputRed} className="input" value={job} onChange={e => setJob(e.target.value)} />
            {completed ? null : (
                <>
                    <button ref={okRef} className="none" onClick={handleOk.bind(null, id, job)}>OK</button>
                    <button ref={editRef} onClick={handleCheckEdit.bind(null, id)}>Edit</button>
                    <button onClick={handleCheck.bind(null, id)}>{completed}✓</button>
                </>
            )}
        </TodoItemRoot>
    );
}

export default Item;
