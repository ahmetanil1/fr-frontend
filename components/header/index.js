import React from "react";
import Logo from "./logo";
import Search from "./search"
import DarkMode from "./Darkmode";
import Profile from "./profile";
import HamburgerMenu from "./hamburgerMenu";
function header({ toggleDarkMode, darkMode }) {
    return (
        <div className="flex items-center justify-between gap-3 md:gap-10 h-24 box-shadow ">
            <div className="flex items-center gap-3 ">
                <HamburgerMenu />
                <Logo />
            </div>
            <Search />
            <div className="flex items-center justify-between gap-5">
                <DarkMode toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
                <Profile />
            </div>
        </div>
    )
}

export default header