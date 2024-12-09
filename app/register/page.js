"use client";
import React, { useState } from 'react';
import LoginRegister from '@/components/login-register';
import WithRegister from '@/components/withRegister';
import config from "@/config.json";
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

function RegisterContainer() {
    const [username, setUsername] = useState("");
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const router = useRouter();


    const validateForm = () => {


        if (password !== confirmPassword) {
            toast.error("Passwords do not match.");
            return false;
        }

        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z]).{6,18}$/;
        if (!passwordPattern.test(password)) {
            toast.error("Password must be 6-18 characters long and contain at least one uppercase and one lowercase letter.");
            return false;
        }

        const usernamePattern = /^[a-zA-Z0-9_]+$/;
        if (!usernamePattern.test(username)) {
            toast.error("Username can only contain letters, numbers, and underscores.");
            return false;
        }

        if (!email.includes("@")) {
            toast.error("Please enter a valid email.");
            return false;
        }

        return true;
    };

    const handleSubmitRegister = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            toast.error("Please check the form and try again.");
            return;
        }

        try {
            const response = await fetch(config.backend_url + "/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, name, surname, email, password }),
                credentials: "include"
            });

            const data = await response.json();
            console.log(data);

            if (response.ok) {
                toast.success("Registration successful. Redirecting to login page.");
                setTimeout(() => {
                    router.push("/login");  // Redirect to login page
                }, 500);
            } else {
                setErrorMessage(data.message || "An error occurred during registration.");
                setIsToastVisible(true);  // Show toast if registration fails
            }
        } catch (error) {
            console.error("Error:", error);
            setErrorMessage("An error occurred while submitting the form.");
            setIsToastVisible(true);  // Show toast on error
        }
    };

    return (
        <div className='flex flex-col '>
            <LoginRegister />
            <div>
                <form onSubmit={handleSubmitRegister} className="max-w-sm mx-auto">
                    <div className="mb-5">
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                        <input
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            type="text"
                            id="name"
                            className="mb-1 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500 dark:shadow-sm-light"
                        />

                        <label htmlFor="surname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Surname</label>
                        <input
                            value={surname}
                            onChange={(e) => setSurname(e.target.value)}
                            type="text"
                            id="surname"
                            className="mb-1 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500 dark:shadow-sm-light"
                        />

                        <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                        <input
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            type="text"
                            id="username"
                            pattern="^[a-zA-Z0-9_]+$"
                            title="Username can only contain letters, numbers, and underscores."
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500 dark:shadow-sm-light"
                        />

                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="text"
                            id="email"
                            className="mb-1 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500 dark:shadow-sm-light"
                        />

                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                        <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            id="password"
                            pattern="^(?=.*[a-z])(?=.*[A-Z]).{6,18}$"
                            title="Password must be 6-18 characters long and contain at least one uppercase and one lowercase letter."
                            minLength={6}
                            maxLength={18}
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500 dark:shadow-sm-light"
                        />

                        <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm Password</label>
                        <input
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            type="password"
                            id="confirm-password"
                            className="mb-1 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500 dark:shadow-sm-light"
                        />
                    </div>


                    <button
                        type="submit"
                        className="w-full mb-2 text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                    >
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
}

export default RegisterContainer;
