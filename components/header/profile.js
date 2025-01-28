import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import Link from "next/link";
import { logoutUser } from "@/services/users";
import { toast } from "react-toastify";

function Profile({ user, onLogout }) {
    const [openMenu, setOpenMenu] = useState(false);

    const handleLogout = async () => {
        try {
            await logoutUser();
            setOpenMenu(false);
            onLogout();
            toast.success("Logout success");
        } catch (error) {
            console.error("Logout failed:", error);
        }
    };

    return (
        <div className="relative inline-block text-left">
            <div onClick={() => setOpenMenu(!openMenu)} className="cursor-pointer">
                {user ? (
                    <>
                        <img
                            src={user.profileImage ||
                                (user.gender === "male" ?
                                    "https://via.placeholder.com/150?text=Default+Male+Avatar" :
                                    "https://via.placeholder.com/150?text=Default+Female+Avatar")}
                            alt={user.name}
                            className="w-8 h-8 rounded-full"
                        />
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
                                    href="/recipe/create-recipe"
                                    className="px-4 py-2 text-gray-700 hover:bg-gray-200 cursor-pointer"
                                >
                                    Add Recipe
                                </Link>
                                <Link
                                    href="/settings"
                                    className="px-4 py-2 text-gray-700 hover:bg-gray-200 cursor-pointer"
                                >Settings</Link>
                                <Link
                                    href="/login"
                                    onClick={handleLogout}
                                    className="px-4 py-2 text-gray-700 hover:bg-gray-200 cursor-pointer"
                                >
                                    Logout
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
