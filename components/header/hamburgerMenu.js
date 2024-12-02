"use client";
import React, { useState, useEffect, useRef } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoReturnDownBackSharp } from "react-icons/io5";
import Input from "../general/Input";
import HamburgerMenuContent from "../HamburgerMenuContent";

function HamburgerMenu() {
    const [openMenu, setOpenMenu] = useState(false);
    const menuRef = useRef(null); // Ref to the menu container

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };

    const preventMenuClose = (e) => {
        e.stopPropagation();
    };

    const closeMenuAndGoHome = () => {
        setOpenMenu(false);
    };

    // Close the menu when clicking outside the menu
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setOpenMenu(false); // Close the menu
            }
        };

        // Add event listener on mount
        document.addEventListener("mousedown", handleClickOutside);

        // Clean up event listener on unmount
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="relative">
            <div className="flex z-50">
                <GiHamburgerMenu
                    size="25"
                    className="cursor-pointer"
                    onClick={toggleMenu}
                />
            </div>

            <div
                ref={menuRef} // Attach the ref here
                className={`rounded-md fixed left-0 mt-9 mx-64 h-3/5 w-8/12  bg-white dark:bg-black z-50 transform ${openMenu ? "scale-100" : "scale-0"
                    } ${openMenu ? "ease-out transition duration-500" : ""} shadow-lg flex`}
            >
                {/* Content - Ortada */}
                <div
                    className="flex flex-col p-4 space-y-4 w-full text-black dark:text-white"
                    onClick={preventMenuClose}
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

                    <div className="flex flex-col space-y-4 text-center  max-h-[80vh]">
                        <HamburgerMenuContent onCategoryClick={closeMenuAndGoHome} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HamburgerMenu;
