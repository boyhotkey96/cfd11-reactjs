import { Navigate, NavLink, Outlet } from "react-router-dom";
import {
    PROFILE_COIN_PATH,
    PROFILE_COURSE_PATH,
    PROFILE_PATH,
    PROFILE_PAYMENT_PATH,
    PROFILE_PROJECT_PATH
} from "../config/path";
import { useAuth } from "../hooks/useAuth";
import { usePage } from "../hooks/usePage";

function ProfileLayout() {
    // const { user } = useAuth()
    const {user} = usePage()
    console.log(user)

    if (!user) return <Navigate to="/" />

    return (
        <main className="profile" id="main">
            <section>
                <div className="top-info">
                    <div className="avatar">
                        {/* <span class="text">H</span> */}
                        <img src={user.avatar || 'https://scontent.fsgn8-4.fna.fbcdn.net/v/t1.6435-9/103836261_147730343534712_4650762923682418704_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=7rSqyM2sd1YAX_E7akm&_nc_ht=scontent.fsgn8-4.fna&oh=00_AfDZ2LOiS1UUSilTHY0U_TzeDdPPvG62uJ4SYhQKDucxzQ&oe=63A38CE9'} alt="avatar" />
                        <div className="camera" />
                    </div>
                    <div className="name">{user.name}</div>
                    <p className="des">Thành viên của team CFD1-OFFLINE</p>
                </div>
                <div className="container">
                    <div className="tab">
                        <div className="tab-title">
                            <NavLink end to={PROFILE_PATH}>
                                Thông tin tài khoản
                            </NavLink>
                            <NavLink to={PROFILE_COURSE_PATH}>Khóa học của bạn</NavLink>
                            <NavLink to={PROFILE_PROJECT_PATH}>Dự án đã làm</NavLink>
                            <NavLink to={PROFILE_PAYMENT_PATH}>Lịch sử thanh toán</NavLink>
                            <NavLink to={PROFILE_COIN_PATH}>Quản lý COIN của tôi</NavLink>
                        </div>
                        <div className="tab-content">
                            <Outlet />
                            {/* <MyCourse />
                            <MyProject />
                            <PaymentHistory />
                            <MyCoin /> */}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default ProfileLayout;
