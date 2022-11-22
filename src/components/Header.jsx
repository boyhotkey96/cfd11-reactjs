import { Link, useNavigate } from "react-router-dom";
import { PROFILE_COURSE_PATH, PROFILE_PATH } from "../config/path";
import { usePage } from "../hooks/usePage";

function Header() {
    // const [login, setLogin] = useState(true);
    // const navigate = useNavigate();

    // const handleLogout = (e) => {
    //     e.preventDefault();
    //     setLogin(false);
    //     navigate("/");
    // };

    // const {user, handleLogin, handleLogout} = useAuth()
    // console.log(user)

    const { setIsOpenLoginModal, setIsOpenRegisterModal, user, setUser } = usePage()

    const onLogin = (e) => {
        e.preventDefault()
        setIsOpenLoginModal(true)
    }

    const onRegister = (e) => {
        e.preventDefault()
        setIsOpenRegisterModal(true)
    }

    const onLogout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        setUser()
    }

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
                                        <div className="name">{user.name || 'Phùng Bá Dự'}</div>
                                        <div className="avatar">
                                            <img src={user.avatar || 'https://scontent.fsgn8-4.fna.fbcdn.net/v/t1.6435-9/103836261_147730343534712_4650762923682418704_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=7rSqyM2sd1YAX_E7akm&_nc_ht=scontent.fsgn8-4.fna&oh=00_AfDZ2LOiS1UUSilTHY0U_TzeDdPPvG62uJ4SYhQKDucxzQ&oe=63A38CE9'} alt="avatar" />
                                        </div>
                                    </a>
                                </div>
                                <div className="hamberger"></div>
                                <div className="sub">
                                    <Link to={PROFILE_COURSE_PATH}>Khóa học của tôi</Link>
                                    <Link to={PROFILE_PATH}>Thông tin tài khoản</Link>
                                    <Link to='/' onClick={onLogout}>
                                        Đăng xuất
                                    </Link>
                                </div>
                            </div>
                        ) : (
                            <div class="not-login bg-none">
                                <Link to={PROFILE_PATH} class="btn-register" onClick={onLogin}>
                                    Đăng nhập
                                </Link>
                                <a href="login.html" class="btn main btn-open-login" onClick={onRegister}>
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
