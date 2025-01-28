"use client"

import React, { useState } from 'react';
import LoginRegister from '@/components/login-register';
import WithRegister from '@/components/withRegister';
import Link from 'next/link';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import dotenv from "dotenv";
import { loginUser } from '@/services/users';
import Button from '@/components/general/Button';

function LoginContainer() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();



    const handleSubmitLogin = async (e) => {
        e.preventDefault();
        const userData = {
            email,
            password
        };

        try {
            if (!userData.email || !userData.password) {
                toast.error("Please fill in all fields.");
            }
            else if (userData.email !== email || userData.password !== password) {
                toast.error("Please check your credentials.");
            }
            else {
                await loginUser(userData);
                toast.success("Login success");
                router.push("/");
            }
        }
        catch (error) {
            console.error("Login failed:", error.message);
            toast.error("Login failed. Please check your credentials.");
        }
    };

    return (
        <div>
            <LoginRegister className="m-10" />
            <div>
                <form onSubmit={(e) => handleSubmitLogin(e)} className="max-w-sm mx-auto">
                    <div className="mb-5">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                        <input type="email" value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500 dark:shadow-sm-light" required />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                        <input type="password" value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            id="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500 dark:shadow-sm-light" required />
                    </div>

                    <div className='mt-4'>
                        <WithRegister />
                    </div>
                    <Button
                        type="submit"
                        variant="default"
                        size="md"
                        className="w-full"
                    >Login</Button>

                    <Link href="/forgot-password"
                        className="text-gray-600 hover:underline dark:text-white mt-4 flex justify-end">
                        Şifremi Unuttum
                    </Link>
                </form>
            </div>

        </div>
    )
}

export default LoginContainer  