import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from "react-router-dom";
import {
  PROFILE_COURSE_PATH,
  PROFILE_PATH,
  PROFILE_PROJECT_PATH
} from "../config/path";
import { usePage } from "../hooks/usePage";
import { authLogout } from "../store/action";

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

  const [active, setActive] = useState(false);

  const { setIsOpenLoginModal, setIsOpenRegisterModal } = usePage();

  const { user } = useSelector(store => store.authReducer)
  console.log(user)
  const dispath = useDispatch()

  const onLogin = (e) => {
    e.preventDefault();
    setIsOpenLoginModal(true);
  };

  const onRegister = (e) => {
    e.preventDefault();
    setIsOpenRegisterModal(true);
  };

  const onLogout = () => {
    dispath(authLogout())
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    // setUser();
  };

  const handleToggleMenu = () => {
    document.body.classList.toggle("menu-is-show");
  };

  // Click item menu
  const handleClick = (id) => {
    const currentClass = document.getElementsByClassName("side_nav_item");
    let index = id - 1;

    for (let i = 0; i < currentClass.length; i++) {
      currentClass[i].classList.remove("active");
      currentClass[index].classList.add("active");
    }

    handleToggleMenu()
  };

  const initListItemMenu = [
    { id: 1, name: "Trang chủ", to: "/", active: `` },
    { id: 2, name: "CFD Team", to: "/thanh-vien", active: "" },
    { id: 3, name: "Khóa Học", to: `${PROFILE_COURSE_PATH}`, active: "" },
    { id: 4, name: "Dự Án", to: `${PROFILE_PROJECT_PATH}`, active: "" },
    { id: 5, name: "Liên hệ", to: "/lien-he", active: "" },
  ];

  const [listItemMenu, setListItemMenu] = useState(initListItemMenu);
  const [idItemMenu, setIdItemMenu] = useState();

  // Get NavLink have class active
  useEffect(() => {
    const navLinkActive = document.querySelector("li.side_nav_item a.active");
    if (navLinkActive) {
      setIdItemMenu(navLinkActive.id);
    }
  }, []);

  useEffect(() => {
    setListItemMenu([
      {
        id: 1,
        name: "Trang chủ",
        to: "/",
        active: +`${idItemMenu}` === 1 ? "active" : "",
      },
      {
        id: 2,
        name: "CFD Team",
        to: "/thanh-vien",
        active: +`${idItemMenu}` === 2 ? "active" : "",
      },
      {
        id: 3,
        name: "Khóa Học",
        to: `${PROFILE_COURSE_PATH}`,
        active: +`${idItemMenu}` === 3 ? "active" : "",
      },
      {
        id: 4,
        name: "Dự Án",
        to: `${PROFILE_PROJECT_PATH}`,
        active: +`${idItemMenu}` === 4 ? "active" : "",
      },
      {
        id: 5,
        name: "Liên hệ",
        to: "/lien-he",
        active: +`${idItemMenu}` === 5 ? "active" : "",
      },
    ]);
  }, [idItemMenu]);

  return (
    <>
      <header id="header">
        <div className="wrap">
          <div className="menu-hambeger" onClick={handleToggleMenu}>
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
                    <div className="name">{user.email || "Phùng Bá Dự"}</div>
                    <div className="avatar">
                      <img
                        src={
                          user.avatar ||
                          "https://scontent.fsgn8-4.fna.fbcdn.net/v/t1.6435-9/103836261_147730343534712_4650762923682418704_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=7rSqyM2sd1YAX_E7akm&_nc_ht=scontent.fsgn8-4.fna&oh=00_AfDZ2LOiS1UUSilTHY0U_TzeDdPPvG62uJ4SYhQKDucxzQ&oe=63A38CE9"
                        }
                        alt="avatar"
                      />
                    </div>
                  </a>
                </div>
                <div className="hamberger"></div>
                <div className="sub">
                  <Link to={PROFILE_COURSE_PATH}>Khóa học của tôi</Link>
                  <Link to={PROFILE_PATH}>Thông tin tài khoản</Link>
                  <Link to="/" onClick={onLogout}>
                    Đăng xuất
                  </Link>
                </div>
              </div>
            ) : (
              <div class="not-login bg-none">
                <Link to={PROFILE_PATH} class="btn-register" onClick={onLogin}>
                  Đăng nhập
                </Link>
                <a
                  href="login.html"
                  class="btn main btn-open-login"
                  onClick={onRegister}
                >
                  Đăng ký
                </a>
              </div>
            )}
          </div>
        </div>
      </header>
      <nav className="nav">
        {/* <ul>
                    <li className="li_login">
                        <a href="#">Đăng nhập</a>
                        <a href="#">Đăng ký</a>
                    </li>
                    <li className="active">
                        <Link to="/">Trang chủ</Link>
                    </li>
                    <li>
                        <Link to='/thanh-vien'>CFD Team</Link>
                    </li>
                    <li>
                        <Link to={PROFILE_COURSE_PATH}>Khóa Học</Link>
                    </li>
                    <li onClick={() => setActive()}>
                        <Link to={PROFILE_PROJECT_PATH}>Dự Án</Link>
                    </li>
                    <li>
                        <Link to="/lien-he">Liên hệ</Link>
                    </li>
                </ul> */}
        <ul>
          {listItemMenu.map((item) => (
            <li
              className={`side_nav_item ${item.active}`}
              key={item.id}
              onClick={handleClick.bind(null, item.id)}
            >
              <NavLink id={item.id} to={item.to}>
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className="overlay_nav" />
    </>
  );
}

export default Header;
