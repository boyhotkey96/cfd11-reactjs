import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState()

    const handleLogin = () => {
        setUser({
            name: "Phùng Bá Dự",
            avatar:
                "https://scontent.fsgn8-4.fna.fbcdn.net/v/t1.6435-9/103836261_147730343534712_4650762923682418704_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=4CRS_BZ7ougAX-rU2J4&_nc_ht=scontent.fsgn8-4.fna&oh=00_AfBIbIrNd3hKEemeaqcLW7CZ8IjWFOYyr-r8An8jWXnBgw&oe=639C4CA9",
        });
    };

    const handleLogout = () => {
        setUser();
    };

    return (
        <AuthContext.Provider value={{ user, handleLogin, handleLogout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext)