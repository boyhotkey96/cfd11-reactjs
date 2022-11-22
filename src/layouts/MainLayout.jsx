import { Outlet } from "react-router-dom"
import Footer from "../components/Footer"
import Header from "../components/Header"
import LoginModal from "../components/LoginModal"
import RegisterModal from "../components/RegisterModal"

function MainLayout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
            <LoginModal />
            <RegisterModal />
        </>
    )
}

export default MainLayout