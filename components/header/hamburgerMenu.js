"use client";
import React, { useState, useEffect, useRef } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoReturnDownBackSharp } from "react-icons/io5";
import Input from "../general/Input";
import HamburgerMenuContent from "../hamburgerMenuContent";
import { useRouter } from "next/navigation";
import { getCategories } from '@/services/categories';

function HamburgerMenu() {
    const [openMenu, setOpenMenu] = useState(false);
    const menuRef = useRef(null);
    const router = useRouter();
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const { data } = await getCategories(); 
                setCategories(data);  
                setLoading(false);     
            } catch (error) {
                setError("Failed to load categories");
                setLoading(false);
            }
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

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setOpenMenu(false); 
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleCategoryClick = (categoryName) => {
        router.push(`/category/${categoryName}`); 
        setOpenMenu(false); 
    };



    return (
        <div className="relative">

            <div
                onClick={toggleMenu}
                className="flex z-50 cursor-pointer"
            >
                <GiHamburgerMenu size="25" />
            </div>

            <div
                ref={menuRef}
                className={`overflow-x-hidden fixed left-0 mt-9 mx-4 sm:mx-8 md:mx-16 lg:mx-32 xl:mx-64 h-3/5 sm:h-3/5 md:h-3/5 lg:h-3/5 xl:h-3/5 w-11/12 sm:w-10/12 md:w-10/12 lg:w-9/12 xl:w-2/3 bg-white z-50 transform ${openMenu ? "scale-100" : "scale-0"
                    } ${openMenu ? "ease-out transition duration-500" : ""} shadow-lg flex`}
            >
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
                        <Input
                            size="md"
                            placeholder="Search"
                            className="w-full"
                        />
                    </div>

                    <div className="flex flex-col py-8 space-y-4 text-center max-h-[80vh]">
                        <HamburgerMenuContent
                            onCategoryClick={handleCategoryClick}
                            categories={categories}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HamburgerMenu;
