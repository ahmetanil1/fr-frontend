"use client";

import React, { useEffect, useState } from "react";
import { CgProfile } from "react-icons/cg";
import Link from "next/link";
import useUserStore from "@/store/useUserStore";
import { getCurrentUser, loginUser } from "@/services/users";
function Profile() {
    const [openMenu, setOpenMenu] = useState(false);
    const { user, setUser } = useUserStore();
    const { token, setToken } = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const tokenFromHeader = await loginUser();
                setToken(tokenFromHeader);

                if (tokenFromHeader) {
                    console.log("Profile içindeki Kullanıcı tokeni:", tokenFromHeader);
                    const user = await getCurrentUser(tokenFromHeader);
                    setUser(user);
                }
                else {
                    console.error("Token not found in headers");
                }
            } catch (error) {
                console.error("Error:", error);
            }
        };
        fetchUser();
    }, [])


    const handleLogout = () => {
        // Logout işlemleri burada yapılabilir
        setUser(null);
        console.log("Kullanıcı çıkış yaptı.");
    };

    return (
        <div className="relative inline-block text-left">
            <div onClick={() => setOpenMenu(!openMenu)} className="cursor-pointer">
                {user ? (
                    <>
                        {user.gender === "male" ? ( // Doğru karşılaştırma için `===` kullanıldı
                            <img
                                src={
                                    user.profileImage ||
                                    "https://via.placeholder.com/150?text=Default+Male+Avatar"
                                }
                                alt={user.name}
                                className="w-8 h-8 rounded-full"
                            />
                        ) : (
                            <img
                                src={
                                    user.profileImage ||
                                    "https://via.placeholder.com/150?text=Default+Female+Avatar"
                                }
                                alt={user.name}
                                className="w-8 h-8 rounded-full"
                            />
                        )}
                    </>
                ) : (
                    <CgProfile size="35" />
                )}
            </div>

            {openMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-10 border">
                    <div className="flex flex-col space-y-2 text-center py-2">
                        {user ? (
                            <>
                                <Link
                                    href="/login"
                                    onClick={handleLogout}
                                    className="px-4 py-2 text-gray-700 hover:bg-gray-200 cursor-pointer"
                                >
                                    Logout
                                </Link>
                                <Link
                                    href="/admin/create-recipe"
                                    className="px-4 py-2 text-gray-700 hover:bg-gray-200 cursor-pointer"
                                >
                                    Add Recipe
                                </Link>
                            </>
                        ) : (
                            <>
                                <Link
                                    href="/login"
                                    className="px-4 py-2 text-gray-700 hover:bg-gray-200"
                                    onClick={() => setOpenMenu(false)}
                                >
                                    Login
                                </Link>
                                <Link
                                    href="/register"
                                    className="px-4 py-2 text-gray-700 hover:bg-gray-200"
                                    onClick={() => setOpenMenu(false)}
                                >
                                    Register
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Profile;
