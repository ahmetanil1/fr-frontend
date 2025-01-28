import React, { useEffect, useState } from "react";
import Logo from "./logo";
import Search from "./search";
import DarkMode from "./Darkmode";
import Profile from "./profile";
import HamburgerMenu from "./hamburgerMenu";
import { getCurrentUser } from "@/services/users";

function Header({ toggleDarkMode, darkMode }) {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            const user = await getCurrentUser();
            setCurrentUser(user);
        };

        fetchUser();
    }, []);

    const handleLogout = () => {
        setCurrentUser(null);
    };

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
