import { createContext, useContext, useEffect, useState } from "react";
import userService from "../services/userService";

export const Context = createContext();

export const PageProvider = ({ children }) => {
    const [isOpenLoginModal, setIsOpenLoginModal] = useState(false);
    const [isOpenRegisterModal, setIsOpenRegisterModal] = useState(false);
    const [user, setUser] = useState(() => {
        return JSON.parse(localStorage.getItem('user')) || null
    })

    useEffect(() => {
        // page reload is user updated when backend update
        (async () => {
            const token = localStorage.getItem('token')
            if (token) {
                const user = await userService.getInfo()
                localStorage.setItem('user', JSON.stringify(user))
                setUser(user.data)
            }
        })()
    }, [])

    return (
        <Context.Provider
            value={{
                isOpenLoginModal,
                setIsOpenLoginModal,
                isOpenRegisterModal,
                setIsOpenRegisterModal,
                user,
                setUser
            }}
        >
            {children}
        </Context.Provider>
    );
};

export const usePage = () => useContext(Context);
