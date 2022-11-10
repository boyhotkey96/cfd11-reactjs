import React from "react";
import { Route, Routes } from "react-router-dom";
import {
    COURSE_DETAIL, PROFILE_COIN_PATH, PROFILE_COURSE_PATH, PROFILE_PATH, PROFILE_PAYMENT_PATH, PROFILE_PROJECT_PATH
} from "./config/path";
import MainLayout from "./layouts/MainLayout";
import ProfileLayout from "./layouts/ProfileLayout";
import Home from "./pages";
import Page404 from "./pages/Page404";
import Profile from "./pages/ca-nhan";
import MyProject from "./pages/ca-nhan/du-an";
import MyCourse from "./pages/ca-nhan/khoa-hoc";
import PaymentHistory from "./pages/ca-nhan/lich-su-thanh-toan";
import MyCoin from "./pages/ca-nhan/my-coin";
import Contact from "./pages/lien-he";
import Team from "./pages/thanh-vien";
import CourseDetail from "./pages/[slug]";

function App() {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route path="/thanh-vien" element={<Team />} />
                <Route path="/lien-he" element={<Contact />} />
                <Route path={COURSE_DETAIL} element={<CourseDetail />} />
                <Route path={PROFILE_PATH} element={<ProfileLayout />}>
                    <Route index element={<Profile />} />
                    <Route path={PROFILE_COURSE_PATH} element={<MyCourse />} />
                    <Route path={PROFILE_PROJECT_PATH} element={<MyProject />} />
                    <Route path={PROFILE_PAYMENT_PATH} element={<PaymentHistory />} />
                    <Route path={PROFILE_COIN_PATH} element={<MyCoin />} />
                </Route>
                <Route path="*" element={<Page404 />} />
            </Route>
        </Routes>
    );
}

export default App;
