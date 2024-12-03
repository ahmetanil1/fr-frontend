"use client";

import React, { useEffect, useState } from "react";
import { CgProfile } from "react-icons/cg";
import Link from "next/link";
import useUserStore from "@/store/useUserStore";
import config from "@/config.json"


function Profile() {
    const [openMenu, setOpenMenu] = useState(false);
    const { user, login, logout } = useUserStore();

    const handleLogin = () => {
        const mockUser = { name: "John Doe" };
        login(mockUser);
    };
    const handleLogout = () => {
        logout();
    };

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await fetch(config.backend_url + "/auth/user", {
    //                 method: "GET",
    //                 headers: {
    //                     "Content-Type": "application/json"
    //                 },
    //                 credentials: "include"
    //             })

    //             if (!response.ok) {
    //                 throw new Error("Error fetching user data");
    //             }
    //             const data = await response.json();
    //             login(data)

    //         } catch (error) {
    //             throw new Error("Error happened while fetching data for profile pic ")
    //         }

    //     };
    //     if (!user) {
    //         fetchData();
    //     }
    // }, [user, login])

    return (
        <div className="relative inline-block text-left">
            {/* Profile Icon */}
            <div onClick={() => setOpenMenu(!openMenu)} className="cursor-pointer">
                {user ? (
                    <>
                        {user.gender = "male" ? (
                            <img
                                src={user.image || <svg xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 512"><path fill-rule="nonzero" d="M256 0c70.69 0 134.69 28.655 181.018 74.982C483.345 121.31 512 185.31 512 256s-28.655 134.69-74.982 181.018C390.69 483.345 326.69 512 256 512s-134.69-28.655-181.018-74.982C28.655 390.69 0 326.69 0 256S28.655 121.31 74.982 74.982C121.31 28.655 185.31 0 256 0zm83.858 360.495c-8.946-17.959-20.291-33.187-33.495-47.498 86.303 33.392 107.758 28.216 126.204 82.097 30.184-38.263 48.197-86.574 48.197-139.094 0-62.068-25.158-118.26-65.83-158.934C374.26 56.394 318.068 31.236 256 31.236S137.74 56.394 97.066 97.066C56.394 137.74 31.236 193.932 31.236 256c0 52.461 17.973 100.722 48.095 138.965 18.247-55.6 36.446-48.494 122.961-81.968-13.204 14.311-24.549 29.539-33.5 47.498l25.915-.635 58.179 46.465 61.058-46.465 25.914.635zm-127.87-64.325v15.645l-15.421 25.895 57.727 45.55 57.794-45.959-20.199-26.986v-14.557c20.758-1.106 38.585-2.954 48.454-5.364 12.753-3.109 23.387-7.763 30.725-14.781-11.447-5.501-18.761-14.911-22.976-27.214-9.796-28.591-.507-60.756-4.884-91.797-5.864-41.569-33.021-55.47-59.976-52.595-34.379-28.257-96.069-11.754-112.764 36.542-8.433 24.396-3.3 44.822-4.204 69.543-1.22 33.255-9.873 55.471-28.678 62.555 6.51 7.745 15.82 13.696 28.08 17.699 9.152 2.987 26.194 4.87 46.322 5.824z" /></svg>}
                                alt={user.name}
                                className="w-8 h-8 rounded-full"
                            />
                        ) : (
                            <img
                                src={user.image || <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 122.88"><title>my-account</title><path d="M61.44,0a61.59,61.59,0,0,1,56.78,38l.07.18A61.43,61.43,0,0,1,18,104.88h0A61.54,61.54,0,0,1,4.66,84.94l-.07-.19A61.35,61.35,0,0,1,18,18h0A61.54,61.54,0,0,1,37.94,4.66l.18-.07A61.25,61.25,0,0,1,61.44,0ZM49.54,79.32c-2.14-1.83-4.2-3.89-4.54-7.65h-.28a3.79,3.79,0,0,1-1.87-.49,5.1,5.1,0,0,1-2.05-2.49c-.95-2.18-1.7-7.91.68-9.55L41,58.85l0-.64c-.1-1.15-.12-2.55-.14-4-.09-5.39-.2-11.91-4.53-13.22l-1.85-.56,1.22-1.51a70,70,0,0,1,10.84-11c4.17-3.28,8.41-5.47,12.56-6.1A15.09,15.09,0,0,1,71.3,25.22a23,23,0,0,1,3.27,3.28,13.93,13.93,0,0,1,9.78,5.72,19.89,19.89,0,0,1,3.18,6.42,22.34,22.34,0,0,1,.86,7.28,17.54,17.54,0,0,1-5.08,11.81,3.62,3.62,0,0,1,1.58.4c1.81,1,1.87,3.07,1.39,4.83-.47,1.47-1.06,3.17-1.63,4.6C84,71.5,83,71.86,81,71.65c-.08,4.18-2.8,6.18-5.47,8.49l.08.12a31.89,31.89,0,0,0,3.51,4.52.75.75,0,0,1,.12.14c6.19,4.38,19.56,5.44,25.34,8.66l.23.14a54.09,54.09,0,1,0-86.83,0h0l.23-.14C24,90.36,40.73,89.3,47,85a19.43,19.43,0,0,0,1.43-2.77c.41-1,.81-2,1.15-2.86Z" /></svg>}
                                alt={user.name}
                                className="w-8 h-8 rounded-full"
                            />
                        )
                        }
                    </>
                ) : (
                    <>
                        <CgProfile size="35" />
                    </>
                )}
            </div>

            {/* Dropdown Menu */}
            {
                openMenu && (
                    <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-10 border">
                        <div className="flex flex-col space-y-2 text-center py-2">
                            {user ? (
                                <Link
                                    href="/login"
                                    onClick={handleLogout}
                                    className="px-4 py-2 text-gray-700 hover:bg-gray-200 cursor-pointer"
                                >
                                    Logout
                                </Link>
                            ) : (
                                <>
                                    <Link
                                        href="/login"
                                        className="px-4 py-2 text-gray-700 hover:bg-gray-200"
                                        onClick={() => {
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
                                </>
                            )}
                        </div>
                    </div>
                )
            }
        </div >
    );
}

export default Profile;
