import { useState } from "react";
import ReactDOM from "react-dom";
import { usePage } from "../hooks/usePage";
import authService from "../services/authService";

function RegisterModal() {
    const initForm = {
        username: '',
        password: '',
    }

    const { isOpenRegisterModal, setIsOpenRegisterModal } = usePage();
    const [form, setForm] = useState(initForm);

    const handleSubmitRegister = async () => {
        const result = await authService.register(form);
        console.log(result);
        if (result.data) {
            setIsOpenRegisterModal(false)
            setForm(initForm)
        }
    };
    
    const handleOnChangeUsername = (e) => {
        setForm({...form, username: e.target.value})
    }
    
    const handleOnChangePassword = (e) => {
        setForm({...form, password: e.target.value})
    }

    console.log(form)
    
    return ReactDOM.createPortal(
        <div
            className="popup-form popup-login"
            style={{ display: isOpenRegisterModal ? "flex" : "none" }}
        >
            <div className="wrap">
                {/* login-form */}
                <div className="ct_login" style={{ display: "block" }}>
                    <h2 className="title">Đăng ký</h2>
                    <input
                        type="text"
                        placeholder="Email / Số điện thoại"
                        value={form.username}
                        onChange={handleOnChangeUsername}
                    />
                    <input
                        type="password"
                        placeholder="Mật khẩu"
                        value={form.password}
                        onChange={handleOnChangePassword}
                    />
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
                    <div className="btn rect main btn-login" onClick={handleSubmitRegister}>
                        đăng ký
                    </div>
                    <div className="close">
                        <img src="img/close-icon.png" alt="" onClick={() => setIsOpenRegisterModal(false)} />
                    </div>
                </div>
            </div>
        </div>,
        document.body
    );
}

export default RegisterModal;
