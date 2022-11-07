import { useState } from "react";
import styled from "styled-components";

const Div = styled.div`
  div {
    margin-top: 2rem;
    width: 100%;
    display: flex;
    align-items: center;
  }
  label {
    width: 10rem;
    font-size: 2rem;
    font-weight: bold;
  }
  input {
    flex: 1;
    padding: 1.2rem;
    font-size: 1.8rem;
  }
  span {
    margin-left: 10rem;
    color: red;
    font-weight: bold;
    display: block;
    margin-top: 1rem;
  }
`;
const ButtonS = styled.button`
  padding: 0.8rem 2rem;
  color: white;
  background-color: blue;
  cursor: pointer;
  transition: all .25s ease-out;
  :hover {
    background-color: green;
  }
`;

function RegisterForm() {
    const [formState, setFormState] = useState({
        username: "",
        password: "",
    });
    const [error, setError] = useState({
        username: "",
        password: "",
    });

    const handleOnChangeUsername = (e) => {
        setFormState({ ...formState, username: e.target.value });
    };

    const handleOnChangePassword = (e) => {
        setFormState({ ...formState, password: e.target.value });
    };

    const handleOnsubmit = (e) => {
        e.preventDefault();
    };

    const onHandleSubmit = () => {
        const newError = {};
        if (!formState.username) {
            newError.username = "Truong username khong duoc de trong";
        }
        if (!formState.password) {
            newError.password = "Truong password khong duoc de trong";
        }

        setError(newError);

        if (Object.keys(newError).length === 0) {
            console.log("OK");
        }
    };

    return (
        <form onSubmit={handleOnsubmit} style={{ padding: "1rem" }}>
            <Div>
                <div className="form-group">
                    <label htmlFor="username">Username: </label>
                    <input
                        id="username"
                        type="text"
                        value={formState.username}
                        onChange={handleOnChangeUsername}
                    />
                </div>
                {error.username && !!formState.username ? null : (
                    <span>{error.username}</span>
                )}
            </Div>
            <Div>
                <div className="form-group">
                    <label htmlFor="password">Password: </label>
                    <input
                        id="password"
                        type="password"
                        value={formState.password}
                        onChange={handleOnChangePassword}
                    />
                </div>
                {error.password && !!formState.password ? null : (
                    <span>{error.password}</span>
                )}
            </Div>
            <ButtonS onClick={onHandleSubmit}>Submit</ButtonS>
        </form>
    );
}

export default RegisterForm;
