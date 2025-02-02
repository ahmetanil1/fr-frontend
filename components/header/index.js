import React, { useEffect, useState } from "react";
import Logo from "./logo";
import Search from "./search";
import DarkMode from "./Darkmode";
import Profile from "./profile";
import HamburgerMenu from "./hamburgerMenu";
import { getCurrentUser, logoutUser } from "@/services/users";


function Header({ toggleDarkMode, darkMode }) {
    const [currentUser, setCurrentUser] = useState([]);

    useEffect(() => {
        const fetchUser = async () => {
            const user = await getCurrentUser();
            setCurrentUser(user);
        };

        if (currentUser) fetchUser();
    }, []);

    const handleLogout = async () => {
        try {
            const response = await logoutUser();
            if (response) {
                console.log("Çıkış yapılıyor");
                setCurrentUser(null);
                console.log("Çıkış yapıldı");
                console.log("Current User:", currentUser);
            }

        } catch (error) {
            console.error("Error:", error);
        }
    }



    return (
        <div className="flex items-center justify-between gap-3 md:gap-10 h-24 box-shadow">
            <div className="flex items-center gap-3">
                <HamburgerMenu />
                <Logo />
            </div>
            <Search />
            <div className="flex items-center justify-between gap-5">
                <DarkMode toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
                <Profile user={currentUser} onLogout={handleLogout} />
            </div>
        </div>
    );
}

export default Header;
