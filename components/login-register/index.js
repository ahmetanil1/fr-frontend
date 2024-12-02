"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

function LoginRegister() {
    const [selected, setSelected] = useState("login");
    useEffect(() => {
        const path = window.location.pathname;
        if (path === "/login") {
            setSelected("login");
        } else if (path === "/register") {
            setSelected("register");
        }
    }, []);


    return (
        <div className="auth-nav m-10 flex justify-center items-center space-x-4">
            <Link
                href="/login"
                onClick={() => setSelected("login")}
                className={`px-4 py-2 duration-300 rounded-md border border-gray-500 ${selected === "login" ? "bg-gray-700 text-white" : "bg-gray-100 text-gray-700"
                    }`}
            >
                Login
            </Link>
            <Link
                href="/register"
                onClick={() => { setSelected("register"); console.log(setSelected) }}
                className={`px-4 py-2 duration-300 rounded-md border border-gray-500 ${selected === "register" ? "bg-gray-700 text-white" : "bg-gray-100 text-gray-700"
                    }`}
            >
                Register
            </Link>
        </div>
    );
}

export default LoginRegister;