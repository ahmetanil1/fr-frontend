"use client"
import React, { useState } from 'react';
import LoginRegister from '@/components/login-register';
import WithRegister from '@/components/withRegister';
import config from "@/config.json";

function RegisterContainer() {
    const [username, setUsername] = useState("");
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmitRegister = async (e) => {
        e.preventDefault();
        if (password != confirmPassword) {

            console.log("didn't match passwords");
        }
        if (password == confirmPassword) {
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
                console.log(data)
            } catch (error) {
                console.error("Hata:", error);
            }
        }
    };


    return (
        <div>
            <LoginRegister />
            <div>
                <form onClick={(e) => handleSubmitRegister(e)} className="max-w-sm mx-auto">
                    <div className="mb-5">
                        <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                        <input
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            type="text"
                            id="name"
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500 dark:shadow-sm-light"
                            required
                        />

                        <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Surname</label>
                        <input
                            value={surname}
                            onChange={(e) => setSurname(e.target.value)}
                            type="text"
                            id="surname"
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500 dark:shadow-sm-light"
                            required
                        />
                        <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                        <input
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            type="text"
                            id="name"
                            pattern="^[a-zA-Z0-9_]+$"  // Yalnızca İngilizce harfler, rakamlar ve alt çizgi (_)
                            title="Username yalnızca İngilizce harfler, rakamlar ve alt çizgi (_) içerebilir. Türkçe karakterler yasaktır."
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500 dark:shadow-sm-light"
                            required
                        />
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            id="email"
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500 dark:shadow-sm-light"
                            required
                        />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                        <input
                            minLength={6}  // Minimum karakter uzunluğu
                            maxLength={18} // Maksimum karakter uzunluğu
                            pattern="^(?=.*[a-z])(?=.*[A-Z]).{6,18}$"  // En az bir küçük ve bir büyük harf gereksinimi
                            title="Şifre en az bir küçük harf ve bir büyük harf içermeli ve 6-18 karakter uzunluğunda olmalıdır."
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            id="password"
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500 dark:shadow-sm-light"
                            required
                        />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                        <input
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            type="password"
                            id="confirm-password"
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500 dark:shadow-sm-light"
                            required
                        />
                    </div>
                    <WithRegister />

                    <button
                        type="submit"
                        className="w-full text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                    >
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
}

export default RegisterContainer;
