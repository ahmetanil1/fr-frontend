"use client"
import { Inter } from 'next/font/google'
import Header from "@/components/header"
import Footer from "@/components/footer";
import { useEffect, useState } from 'react';
import "./global.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
    // const [darkMode, setDarkMode] = useState(false);

    // const toggleDarkMode = () => {
    //     setDarkMode(!darkMode);
    //     const newTheme = !darkMode ? "dark" : "light";
    //     localStorage.setItem("theme", newTheme);
    // };



    // useEffect(() => {
    //     if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    //         setDarkMode(true);
    //     }
    // }, []);

    // useEffect(() => {
    //     if (darkMode) {
    //         document.documentElement.classList.add('dark');
    //     } else {
    //         document.documentElement.classList.remove('dark');
    //     }
    // }, [darkMode]);

    return (
        <html lang="en" className={inter.className}>
            <body className='h-screen w-screen ' >
                <div className='flex flex-col min-h-screen'>
                    <div className="flex flex-col flex-grow mx-64">
                        <Header />
                        <hr />
                        <main className="flex-grow">{children}</main>
                    </div>
                    <Footer className="w-full" />
                </div>
            </body>
        </html>
    );
}
