"use client"

import React, { useState } from 'react';
import LoginRegister from '@/components/login-register';
import WithRegister from '@/components/withRegister';
import Link from 'next/link';
import config from "@/config.json";
import { useRouter } from 'next/navigation';
import Toast from '@/components/error-handler';

function LoginContainer() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { toast, setToast } = useState({ message: "", type: "", onClose: false });
    const router = useRouter();


    const showToast = (message, type) => {
        setToast({ message, type, onClose: true });
    };

    const handleToastClose = () => {
        setToast({ ...toast, onClose: false });
    };
    // console.log("Toast STATE:", toast);

    const handleSubmitLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(config.backend_url + "/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
                credentials: 'include'
            });

            if (response.ok) {
                const data = await response.json();
                console.log(data);
                showToast("Giriş başarılı! Yönlendiriliyorsunuz...", "success");
                router.push("/");
            }
            else {
                const errorData = await response.json();
                showToast(errorData.message || "Giriş başarısız.", "error");
            }
        } catch (error) {
            console.error("Hata:", error);
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
                    <button
                        type="submit"
                        className="w-full text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                    >
                        Login
                    </button>
                    <Link href="/forgot-password"
                        className="text-gray-600 hover:underline dark:text-white mt-4 flex justify-end">
                        Şifremi Unuttum
                    </Link>
                </form>
            </div>
            {toast?.onClose && (
                <Toast message={toast.message} type={toast.type} onClose={handleToastClose} />
            )}
        </div >
    )
}

export default LoginContainer