"use client";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify"; // ToastContainer'ı import edin
import "react-toastify/dist/ReactToastify.css"; // ToastContainer stilini import edin
import "./global.css";
import Hr from "@/components/general/hr";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        const newTheme = !darkMode ? "dark" : "light";
        setDarkMode(!darkMode);
        localStorage.setItem("theme", newTheme); // Tema tercihini kaydet
    };

    // Başlangıçta cihazın tema tercihini ve yerel depolamayı kontrol et
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
            setDarkMode(savedTheme === "dark");
        } else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
            setDarkMode(true);
        }
    }, []);

    // Tema değişikliğine göre 'dark' sınıfını HTML'ye ekle
    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [darkMode]);

    return (
        <html lang="en" className={`${inter.className}`}>
            <body className="h-full w-full bg-gray-100 bg-repeat-none dark:bg-gradient-to-t from-black text-gray-900 dark:text-gray-100 font-semibold">
                <div className="flex flex-col min-h-screen">
                    <div className="flex flex-col flex-grow mx-4 sm:mx-8 md:mx-16 lg:mx-32 xl:mx-64">
                        <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
                        <Hr />
                        <main className="flex-grow">{children}</main>
                    </div>
                    <Footer className="w-full" />
                </div>

                <ToastContainer position="top-right" autoClose={5000} hideProgressBar={true} closeOnClick />
            </body>
        </html>
    );
}
