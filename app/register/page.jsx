"use client";
import React, { useState } from 'react';
import LoginRegister from '@/components/login-register';
// import WithRegister from '@/components/withRegister';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import dotenv from "dotenv";
import Button from '@/components/general/Button';
import { createUser } from '@/services/users';

function RegisterContainer() {
    const [username, setUsername] = useState("");
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");


    const router = useRouter();
    const backend_url = process.env.NEXT_PUBLIC_BACKEND_URL;
    const validateForm = () => {



        const passwordPattern = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/;
        if (!passwordPattern.test(password)) {
            toast.error("Password must be 6-18 characters long and contain at least one uppercase and one lowercase letter.");
            return false;
        }

        const usernamePattern = /^[a-zA-Z0-9_]{3,20}$/;
        if (!usernamePattern.test(username)) {
            toast.error("Username can only contain letters, numbers, and underscores.");
            return false;
        }


        const emailPattern = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;
        if (!emailPattern.test(email)) {
            toast.error("Please enter a valid email.");
            return false;
        }
        return true;
    };

    const handleSubmitRegister = (e) => {
        e.preventDefault();
        if (!validateForm) {
            return false;
        }
        const userData = {
            username,
            name,
            surname,
            email,
            password,
        };

        const registerUser = async () => {
            try {
                if (!userData.username || !userData.name || !userData.surname || !userData.email || !userData.password) {
                    toast.error("Please fill in all fields.");
                    return;
                }
                if (password !== confirmPassword) {
                    toast.error("Passwords do not match.");
                    return false;
                }

                await createUser(userData);
                toast.success("Registration successful.");
                router.push("/login");
            } catch (error) {
                console.error("Registration failed:", error.message);
                toast.error("Registration failed. Please try again.");
            }
        }
        registerUser();
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


                    <Button
                        type="submit"
                        variant="default"
                        size="md"
                        className="w-full"
                    >Register</Button>
                </form>
            </div>
        </div>
    );
}

export default RegisterContainer;
