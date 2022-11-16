import { Link, useNavigate } from "react-router-dom";
import { PROFILE_COURSE_PATH, PROFILE_PATH } from "../config/path";
import { useAuth } from "../hooks/useAuth";

function Header() {
    // const [login, setLogin] = useState(true);
    const navigate = useNavigate();

    // const handleLogout = (e) => {
    //     e.preventDefault();
    //     setLogin(false);
    //     navigate("/");
    // };

    const {user, handleLogin, handleLogout} = useAuth()
    console.log(user)

    return (
        <>
            <header id="header">
                <div className="wrap">
                    <div className="menu-hambeger">
                        <div className="button">
                            <span />
                            <span />
                            <span />
                        </div>
                        <span className="text">menu</span>
                    </div>
                    <Link to="/" className="logo">
                        <img src="img/logo.svg" alt="" />
                        <h1>CFD</h1>
                    </Link>
                    <div className="right">
                        {user ? (
                            <div className="have-login">
                                <div className="account">
                                    <a href="#" className="info">
                                        <div className="name">{user.name}</div>
                                        <div className="avatar">
                                            <img src={user.avatar} alt="avatar" />
                                        </div>
                                    </a>
                                </div>
                                <div className="hamberger"></div>
                                <div className="sub">
                                    <Link to={PROFILE_COURSE_PATH}>Khóa học của tôi</Link>
                                    <Link to={PROFILE_PATH}>Thông tin tài khoản</Link>
                                    <Link to='/' onClick={handleLogout}>
                                        Đăng xuất
                                    </Link>
                                </div>
                            </div>
                        ) : (
                            <div class="not-login bg-none">
                                <Link to={PROFILE_PATH} class="btn-register" onClick={handleLogin}>
                                    Đăng nhập
                                </Link>
                                <a href="login.html" class="btn main btn-open-login">
                                    Đăng ký
                                </a>
                            </div>
                        )}
                    </div>
                </div>
            </header>
            {/* <nav className="nav">
                <ul>
                    <li className="li_login">
                        <a href="#">Đăng nhập</a>
                        <a href="#">Đăng ký</a>
                    </li>
                    <li className="active">
                        <a href="#">Trang chủ</a>
                    </li>
                    <li>
                        <a href="#">CFD Team</a>
                    </li>
                    <li>
                        <a href="#">Khóa Học</a>
                    </li>
                    <li>
                        <a href="#">Dự Án</a>
                    </li>
                    <li>
                        <a href="#">Liên hệ</a>
                    </li>
                </ul>
            </nav>
            <div className="overlay_nav" /> */}
        </>
    );
}

export default Header;
