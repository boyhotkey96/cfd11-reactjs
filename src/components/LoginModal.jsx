import { useState } from "react";
import ReactDOM from "react-dom";
import { usePage } from "../hooks/usePage";
import authService from "../services/authService";
import userService from "../services/userService";

function LoginModal() {
    const { isOpenLoginModal, setIsOpenLoginModal, setUser } = usePage();
    const [form, setForm] = useState({});
    const [error, setError] = useState();
    const [isFetching, setIsFetching] = useState(false);

    const handleSubmitLogin = async () => {
        try {
            setIsFetching(true);
            const res = await authService.login(form);
            const resData = await res.data;
            if (resData) {
                localStorage.setItem("token", JSON.stringify(resData));
                
                const user = await userService.getInfo()
                const data = await user.data
                // const {data} = await user.data
                if (data) {
                    localStorage.setItem("user", JSON.stringify(data));
                    setUser(data)
                    setIsOpenLoginModal(false)
                }
            }
            setError();
        } catch (error) {
            const message = await error.response.data.message;
            message && setError(message);
        } finally {
            setIsFetching(false);
        }
    };

    return ReactDOM.createPortal(
        <div
            className="popup-form popup-login"
            style={{ display: isOpenLoginModal ? "flex" : "none" }}
        >
            <div className="wrap">
                {/* login-form */}
                <div className="ct_login" style={{ display: "block" }}>
                    <h2 className="title">Đăng nhập</h2>
                    {error && <p style={{ color: "deeppink" }}>{error}</p>}
                    <input
                        type="text"
                        placeholder="Email / Số điện thoại"
                        onChange={(e) => (form.username = e.currentTarget.value)}
                    />
                    <input
                        type="password"
                        placeholder="Mật khẩu"
                        onChange={(e) => (form.password = e.currentTarget.value)}
                    />
                    <div className="remember">
                        <label className="btn-remember">
                            <div>
                                <input type="checkbox" />
                            </div>
                            <p>Nhớ mật khẩu</p>
                        </label>
                        <a href="#" className="forget">
                            Quên mật khẩu?
                        </a>
                    </div>
                    <button
                        className="btn rect main btn-login"
                        disabled={isFetching}
                        onClick={handleSubmitLogin}
                    >
                        đăng nhập
                    </button>
                    <div className="close">
                        <img
                            src="img/close-icon.png"
                            alt=""
                            onClick={setIsOpenLoginModal.bind(null, false)}
                        />
                    </div>
                </div>
            </div>
        </div>,
        document.body
    );
}

export default LoginModal;
