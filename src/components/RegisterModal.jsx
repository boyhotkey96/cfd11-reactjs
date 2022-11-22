import { useRef, useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { usePage } from "../hooks/usePage";
import authService from "../services/authService";

const WrapGroup = styled.div`
  margin-top: 1rem;
  input {
    margin-bottom: 0rem !important;
  }
  p {
    color: red;
    margin-bottom: 1rem;
  }
`;

function RegisterModal() {
    const initStateForm = {
        username: "",
        password: "",
    };
    const [form, setForm] = useState(initStateForm);
    const [message, setMessage] = useState()
    const [error, setError] = useState(initStateForm);
    // state: prevent pressing the button repeatedly
    const [isFetching, setIsFetching] = useState(false);

    const usernameRef = useRef();
    const passwordRef = useRef();
    const usernameTitleError = 'Username không được để trống';
    const passwordTitleError = 'Password không được để trống';

    const { isOpenRegisterModal, setIsOpenRegisterModal } = usePage();

    const handleSubmitRegister = async () => {
        try {
            const newError = {};
            !form.username && (newError.username = usernameTitleError);
            !form.password && (newError.password = passwordTitleError);
            setError(newError);

            if (Object.keys(newError).length === 0) {
                setIsFetching(true);
                const result = await authService.register(form);
                if (result.data) {
                    setIsOpenRegisterModal(false);
                    setForm(initStateForm);
                }
            }
        } catch (error) {
            console.log(error)
            const message = await error.message;
            message && setMessage(message);
        } finally {
            setIsFetching(false)
        }
    };

    const handleUsernameBlur = () => {
        setError({
            ...error,
            username: usernameTitleError,
        });
    };

    const handlePasswordBlur = () => {
        setError({
            ...error,
            password: passwordTitleError,
        });
    };

    const handleOnChangeUsername = (e) => {
        setForm({ ...form, username: e.target.value });
    };

    const handleOnChangePassword = (e) => {
        setForm({ ...form, password: e.target.value });
    };

    return ReactDOM.createPortal(
        <div
            className="popup-form popup-login"
            style={{ display: isOpenRegisterModal ? "flex" : "none" }}
        >
            <div className="wrap">
                {/* login-form */}
                <div className="ct_login" style={{ display: "block" }}>
                    <h2 className="title">Đăng ký</h2>
                    {message && <span style={{color: 'red'}}>Error: {message}</span>}
                    <WrapGroup>
                        <input
                            ref={usernameRef}
                            type="text"
                            placeholder="Email / Số điện thoại"
                            value={form.username}
                            onChange={handleOnChangeUsername}
                            onBlur={handleUsernameBlur}
                        />
                        {form.username ? null : <p>{error.username}</p>}
                    </WrapGroup>
                    <WrapGroup>
                        <input
                            ref={passwordRef}
                            type="password"
                            placeholder="Mật khẩu"
                            value={form.password}
                            onChange={handleOnChangePassword}
                            onBlur={handlePasswordBlur}
                        />
                        {form.password ? null : <p>{error.password}</p>}
                    </WrapGroup>
                    {/* <div className="remember">
                        <label className="btn-remember">
                            <div>
                                <input type="checkbox" />
                            </div>
                            <p>Nhớ mật khẩu</p>
                        </label>
                        <a href="#" className="forget">
                            Quên mật khẩu?
                        </a>
                    </div> */}
                    <button
                        disabled={isFetching}
                        className="btn rect main btn-login"
                        onClick={handleSubmitRegister}
                    >
                        đăng ký
                    </button>
                    <div className="close">
                        <img
                            src="img/close-icon.png"
                            alt=""
                            onClick={() => setIsOpenRegisterModal(false)}
                        />
                    </div>
                </div>
            </div>
        </div>,
        document.body
    );
}

export default RegisterModal;
