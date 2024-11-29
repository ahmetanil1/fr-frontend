"use client";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoReturnDownBackSharp } from "react-icons/io5";
import Input from "../general/Input";

function HamburgerMenu() {
    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };

    const preventMenuClose = (e) => {
        e.stopPropagation();
    };

    const closeMenuAndGoHome = () => {
        setOpenMenu(false);
    };

    return (
        <div className="relative">
            <div className="flex z-50">
                <GiHamburgerMenu
                    size="25"
                    className="cursor-pointer"
                    onClick={toggleMenu}
                />
            </div>

            {/* {openMenu && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40 dark:bg-opacity-70"
                    onClick={() => setOpenMenu(false)} 
                ></div>
            )} */}

            <div
                className={`fixed top-0 left-0 h-full w-full bg-white dark:bg-black z-50 transform ${openMenu ? "scale-100" : "scale-0"
                    } ${openMenu ? "ease-out transition duration-500" : ""} shadow-lg flex items-center justify-center`}
            >
                <div
                    className="flex flex-col p-4 space-y-4 w-full max-w-md text-black dark:text-white"
                    onClick={(e) => e.stopPropagation()}
                >
                    <div
                        className="absolute top-4 right-4 cursor-pointer"
                        onClick={closeMenuAndGoHome}
                    >
                        <IoReturnDownBackSharp size={30} />
                    </div>

                    <div className="md:hidden" onClick={preventMenuClose}>
                        <Input />
                    </div>

                    <div className="flex flex-col space-y-4 text-center">
                        <p
                            className="text-lg font-medium hover:text-blue-500"
                            onClick={() => setOpenMenu(false)}
                        >
                            Home
                        </p>
                        <p
                            className="text-lg font-medium hover:text-blue-500"
                            onClick={() => setOpenMenu(false)}
                        >
                            About
                        </p>
                        <p
                            className="text-lg font-medium hover:text-blue-500"
                            onClick={() => setOpenMenu(false)}
                        >
                            Services
                        </p>
                        <p
                            className="text-lg font-medium hover:text-blue-500"
                            onClick={() => setOpenMenu(false)}
                        >
                            Contact
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HamburgerMenu;
