import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import {
  COURSE_DETAIL,
  PROFILE_COIN_PATH,
  PROFILE_COURSE_PATH,
  PROFILE_PATH,
  PROFILE_PAYMENT_PATH,
  PROFILE_PROJECT_PATH
} from "./config/path";
import { AuthProvider } from "./hooks/useAuth";
/*// import theo cach thong thuong.
import MainLayout from "./layouts/MainLayout";
import ProfileLayout from "./layouts/ProfileLayout";
import Home from "./pages";
import Profile from "./pages/ca-nhan";
import MyProject from "./pages/ca-nhan/du-an";
import MyCourse from "./pages/ca-nhan/khoa-hoc";
import PaymentHistory from "./pages/ca-nhan/lich-su-thanh-toan";
import MyCoin from "./pages/ca-nhan/my-coin";
import Contact from "./pages/lien-he";
import Page404 from "./pages/Page404";
import Team from "./pages/thanh-vien";
import CourseDetail from "./pages/[slug]"; */

// import theo cach su dung lazyload
const MainLayout = lazy(() => import("./layouts/MainLayout"));
const ProfileLayout = lazy(() => import("./layouts/ProfileLayout"));
const Home = lazy(() => import("./pages"));
const Profile = lazy(() => import("./pages/ca-nhan"));
const MyProject = lazy(() => import("./pages/ca-nhan/du-an"));
const MyCourse = lazy(() => import("./pages/ca-nhan/khoa-hoc"));
const PaymentHistory = lazy(() => import("./pages/ca-nhan/lich-su-thanh-toan"));
const MyCoin = lazy(() => import("./pages/ca-nhan/my-coin"));
const Contact = lazy(() => import("./pages/lien-he"));
const Page404 = lazy(() => import("./pages/Page404"));
const Team = lazy(() => import("./pages/thanh-vien"));
const CourseDetail = lazy(() => import("./pages/[slug]"));

const WrapLoading = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    font-size: 42px;
    font-weight: bold;
    color: deeppink;
  }
`;

function App() {
  return (
    <AuthProvider>
      <Suspense fallback={<WrapLoading><span>Loading...</span></WrapLoading>}>
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
      </Suspense>
    </AuthProvider>
  );
}

export default App;
