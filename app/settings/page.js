"use client"
import Button from '@/components/general/Button';
import React, { useState } from 'react'
import { FaEye, FaEyeSlash, FaFacebook } from "react-icons/fa";
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import Textarea from '@/components/general/Textarea';
import useUserStore from '@/store/useUserStore';



function SettingsPage() {
    const [showPassword, setShowPassword] = useState(false);
    const router = useRouter();

    const {
        userData,
        updateFullName,
        updateUsername,
        updateDob,
        updateProfileImage,
        updateEmail,
        updatePassword,
        updateGender,
        updatePhone,
        updateBio,
        updateLinks,
    } = useUserStore();
    const countries = [
        { code: "+1", name: "USA/Canada", flag: "🇺🇸" },
        { code: "+44", name: "UK", flag: "🇬🇧" },
        { code: "+33", name: "France", flag: "🇫🇷" },
        { code: "+49", name: "Germany", flag: "🇩🇪" },
        { code: "+90", name: "Turkey", flag: "🇹🇷" },
        { code: "+61", name: "Australia", flag: "🇦🇺" },
        { code: "+81", name: "Japan", flag: "🇯🇵" },
        { code: "+55", name: "Brazil", flag: "🇧🇷" },
        { code: "+91", name: "India", flag: "🇮🇳" },
        { code: "+86", name: "China", flag: "🇨🇳" },
        { code: "+34", name: "Spain", flag: "🇪🇸" },
        { code: "+39", name: "Italy", flag: "🇮🇹" },
        { code: "+7", name: "Russia", flag: "🇷🇺" },
        { code: "+27", name: "South Africa", flag: "🇿🇦" },
        { code: "+46", name: "Sweden", flag: "🇸🇪" },
        { code: "+54", name: "Argentina", flag: "🇦🇷" },
        { code: "+48", name: "Poland", flag: "🇵🇱" },
        { code: "+20", name: "Egypt", flag: "🇪🇬" },
        { code: "+52", name: "Colombia", flag: "🇨🇴" }
    ];

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };


    return (
        <div>
            <div className='p-5 flex justify-between items-start '>
                <div className=' p-4 w-1/2 space-y-5'>
                    <div className=' text-2xl'>Personal Informations</div>
                    <div className='space-y-5'>
                        <div className="flex flex-col space-y-2">
                            <label className="text-sm font-medium text-gray-700">
                                Full Name
                            </label>
                            <input
                                className="border border-gray-300 py-2 px-3 text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-200 transition-all"
                                placeholder="Name Surname"
                                onChange={((e) => userData.setFullName(e.target.value))}
                                type="text"
                            />
                        </div>
                        <div className="flex flex-col space-y-2">
                            <label className="text-sm font-medium text-gray-700">
                                Username
                            </label>
                            <input
                                className="border border-gray-300 py-2 px-3 text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-200 transition-all"
                                placeholder="Username"
                                onChange={((e) => userData.setUsername(e.target.value))}
                                type="text"
                            />
                        </div>
                        <div className='flex justify-between'>
                            <div className="flex flex-col space-y-2">
                                <label className="text-sm font-medium text-gray-700">
                                    Email
                                </label>
                                <input
                                    className="border border-gray-300 py-2 px-3 text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-200 transition-all"
                                    placeholder="ornek@domain.com"
                                    onChange={((e) => userData.setEmail(e.target.value))}
                                    type="email"
                                />
                            </div>
                            <div className="flex flex-col space-y-2">
                                <label className="text-sm font-medium text-gray-700">Password</label>
                                <div className="relative">
                                    <input
                                        className="w-full border border-gray-300 py-2 pr-10 px-3 text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-200 transition-all"
                                        placeholder="Password"
                                        onChange={((e) => userData.setPassword(e.target.value))}
                                        type={showPassword ? "text" : "password"}
                                    />
                                    <button
                                        type="button"
                                        className="absolute  right-2 top-2 text-gray-500 hover:text-gray-700"
                                        onClick={togglePasswordVisibility}
                                    >
                                        {showPassword ? (
                                            <FaEyeSlash className="w-5 h-5" />
                                        ) : (
                                            <FaEye className="w-5 h-5" />
                                        )}
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col space-y-2" >
                            <label className="text-sm font-medium text-gray-700">Gender</label>
                            <div className="flex justify-between items-center">
                                <div className="flex items-center me-4">
                                    <input
                                        id="purple-checkbox"
                                        type="checkbox"
                                        value="female"
                                        className="w-4 h-4 accent-purple-600   focus:ring-purple-500 "

                                    />
                                    <label htmlFor="purple-checkbox" className="ms-2 text-sm font-medium text-gray-900">Female</label>
                                </div>
                                <div className="flex items-center me-4">
                                    <input
                                        id="blue-checkbox"
                                        type="checkbox"
                                        value="male"
                                        className="w-4 h-4 accent-blue-600   focus:ring-blue-500 "
                                    />
                                    <label htmlFor="blue-checkbox" className="ms-2 text-sm font-medium text-gray-900">Male</label>
                                </div>
                                <div className="flex items-center me-4">
                                    <input
                                        id="gray-checkbox"
                                        type="checkbox"
                                        value="specify "
                                        className="w-4 h-4 accent-gray-800   focus:ring-gray-500 "
                                    />
                                    <label htmlFor="gray-checkbox" className="ms-2 text-sm font-medium text-gray-900">Don't specify</label>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col space-y-2">
                            <label className="text-sm font-medium text-gray-700">Phone Number</label>
                            <div className="flex items-center space-x-2">
                                <select className="border border-gray-300 py-2 px-3 text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-200 transition-all">
                                    {countries.map((country) => (
                                        <option key={country.code} value={country.code}>
                                            {country.flag} {country.code}
                                        </option>
                                    ))}
                                </select>
                                <input
                                    name="phone"
                                    className="border border-gray-300 py-2 px-3 text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-200 transition-all w-full"
                                    placeholder="(5xx) xxx xx xx"
                                    type="tel"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">Birth Date</label>
                            <div className="flex gap-10">
                                <select
                                    className="border border-gray-300 rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                    defaultValue=""
                                >
                                    <option value="" disabled>Day</option>
                                    {Array.from({ length: 31 }, (_, i) => (
                                        <option key={i + 1} value={i + 1}>
                                            {i + 1}
                                        </option>
                                    ))}
                                </select>

                                <select
                                    className="border border-gray-300 rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                    defaultValue=""
                                >
                                    <option value="" disabled>Month</option>
                                    {[
                                        "Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran",
                                        "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"
                                    ].map((month, index) => (
                                        <option key={index + 1} value={index + 1}>
                                            {month}
                                        </option>
                                    ))}
                                </select>

                                <select
                                    className="border border-gray-300 rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                    defaultValue=""
                                >
                                    <option value="" disabled>Year</option>
                                    {Array.from({ length: 75 }, (_, i) => (
                                        <option key={2025 - i} value={2025 - i}>
                                            {2025 - i}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='w-1 bg-color-black'></div>
                <div className="p-4 w-1/2  space-y-5">
                    <div className="text-2xl">User Informations </div>
                    <div className='space-y-2'>
                        <label className="text-sm font-medium text-gray-700 ">Social Medias</label>
                        <div className="space-y-4">
                            <div className="relative flex items-center mb-4">
                                <FaTwitter
                                    size={24}
                                    className="absolute left-3 text-gray-700 hover:text-blue-500 transition-all"
                                />
                                <input
                                    type="url"
                                    name="twitter"
                                    className="border border-gray-300 py-2 px-3 pl-12 text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-200 transition-all sm:w-full md:w-2/3 lg:w-2/3"
                                    placeholder="https://twitter.com/username"
                                />
                            </div>
                            <div className="relative flex items-center mb-4">
                                <FaFacebook
                                    size={24}
                                    className="absolute left-3 text-gray-700 hover:text-blue-600 transition-all"
                                />
                                <input
                                    type="url"
                                    name="facebook"
                                    className="border border-gray-300 py-2 px-3 pl-12 text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-200 transition-all sm:w-full md:w-2/3 lg:w-2/3"
                                    placeholder="https://facebook.com/username"
                                />
                            </div>

                            <div className="relative flex items-center mb-4">
                                <FaYoutube
                                    size={24}
                                    className="absolute left-3 text-gray-700 hover:text-red-600 transition-all"
                                />
                                <input
                                    type="url"
                                    name="youtube"
                                    className="border border-gray-300 py-2 px-3 pl-12 text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-red-200 focus:border-red-200 transition-all sm:w-full md:w-2/3 lg:w-2/3"
                                    placeholder="https://youtube.com/c/username"
                                />
                            </div>

                            <div className="relative flex items-center mb-4">
                                <FaInstagram
                                    size={24}
                                    className="absolute left-3 text-gray-700 hover:text-pink-500 transition-all"
                                />
                                <input
                                    type="url"
                                    name="instagram"
                                    className="border border-gray-300 py-2 px-3 pl-12 text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-pink-200 focus:border-pink-200 transition-all sm:w-full md:w-2/3 lg:w-2/3"
                                    placeholder="https://instagram.com/username"
                                />
                            </div>

                        </div>
                    </div>
                    <div className='flex flex-col space-y-2'>
                        <label>Biography</label>
                        <div className='relative'>
                            <textarea
                                placeholder="Write something about yourself"
                                className='w-full px-2 py-2 rounded-md focus:outline-none text-lg h-36 border border-black  focus:border-gray-600 border-gray-300 rounded-md flex  dark:text-gray-900 dark:border-white'
                                maxLength={1000}
                            />
                            <span className='absolute right-2 bottom-2 text-sm text-gray-500'>
                                {1000 - userData.bio.length}
                            </span>
                        </div>
                    </div>
                </div>


            </div>

            <div className='flex justify-end p-5'>
                <div className='flex gap-5 '>
                    <Button
                        type="submit"
                        variant="danger"
                        size="md"
                        text="Cancel"
                        onClick={() => router.push("/")}
                    >Cancel</Button>
                    <Button
                        type="submit"
                        variant="default"
                        size="md"
                        onClick={() => {
                            toast.success("Changes saved successfully");
                            setTimeout(() => {
                                router.push("/");
                            }, 500)
                        }}
                    >Save Changes</Button>


                </div>
            </div>
        </div>
    )
}

export default SettingsPage