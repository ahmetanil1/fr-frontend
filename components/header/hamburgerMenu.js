"use client";
import React, { useState, useEffect, useRef } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoReturnDownBackSharp } from "react-icons/io5";
import Input from "../general/Input";
import HamburgerMenuContent from "../hamburgerMenuContent";
import { getCategories } from "../../services/categories";
import { useRouter } from "next/navigation";

function HamburgerMenu() {
    const [openMenu, setOpenMenu] = useState(false);
    const menuRef = useRef(null); // Ref to the menu container
    const [categories, setCategories] = useState([]);
    const router = useRouter();

    useEffect(() => {
        // Kategorileri yükleme
        const fetchCategories = async () => {
            const data = getCategories();
            setCategories(data);
        };
        fetchCategories();
    }, []);

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

    const handleCategoryClick = (categoryId) => {
        router.push(`/category/${categoryId}`);
        setOpenMenu(false); // Menü kapansın
    };



    return (
        <div className="relative">
            {/* Hamburger Icon */}
            <div
                onClick={toggleMenu}
                className="flex z-50 cursor-pointer"
            >
                <GiHamburgerMenu size="25" />
            </div>

            {/* Hamburger Menu Content */}
            <div
                ref={menuRef} // Attach the ref here
                className={`overflow-x-hidden fixed left-0 mt-9 mx-4 sm:mx-8 md:mx-16 lg:mx-32 xl:mx-64 h-3/5 sm:h-3/5 md:h-3/5 lg:h-3/5 xl:h-3/5 w-11/12 sm:w-10/12 md:w-10/12 lg:w-9/12 xl:w-2/3 bg-white z-50 transform ${openMenu ? "scale-100" : "scale-0"
                    } ${openMenu ? "ease-out transition duration-500" : ""} shadow-lg flex`}
            >
                {/* Content - Centered */}
                <div
                    className="flex flex-col p-4 space-y-4 w-full text-black dark:text-white"
                    onClick={preventMenuClose}
                >
                    <div
                        className="absolute top-4 right-4 cursor-pointer"
                        onClick={closeMenuAndGoHome}
                    >
                        <IoReturnDownBackSharp className="dark:text-black " size={30} />
                    </div>

                    <div className="md:hidden" onClick={preventMenuClose}>
                        <Input />
                    </div>

                    <div className="flex flex-col py-8 space-y-4 text-center max-h-[80vh]">
                        <HamburgerMenuContent
                            categories={categories}
                            onCategoryClick={handleCategoryClick}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HamburgerMenu;
