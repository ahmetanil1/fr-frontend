"use client";

import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import Link from "next/link";
function Profile() {
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <div className="relative inline-block text-left">
            {/* Profile Icon */}
            <div onClick={() => setOpenMenu(!openMenu)} className="cursor-pointer">
                <CgProfile size="35" />
            </div>

            {/* Dropdown Menu */}
            {openMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-10 border">
                    <div className="flex flex-col space-y-2 text-center py-2">
                        <Link
                            href="/login"
                            className="px-4 py-2 text-gray-700 hover:bg-gray-200"
                            onClick={() => {
                                console.log("Login clicked");
                                setOpenMenu(false);
                            }}
                        >
                            Login
                        </Link>
                        <Link
                            href="/register"
                            className="px-4 py-2 text-gray-700 hover:bg-gray-200"
                            onClick={() => {
                                console.log("Register clicked");
                                setOpenMenu(false);
                            }}
                        >
                            Register
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Profile;
