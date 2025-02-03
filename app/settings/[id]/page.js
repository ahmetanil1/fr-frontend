"use client"
import Button from '@/components/general/Button';
import React, { useEffect, useState } from 'react'
import { FaEye, FaEyeSlash, FaFacebook } from "react-icons/fa";
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import Textarea from '@/components/general/Textarea';
import useUserStore from '@/store/useUserStore';
import { getCurrentUser } from '@/services/users';



function SettingsPage() {
    const [showPassword, setShowPassword] = useState(false);
    const router = useRouter();
    const { FormData, updateFormData } = useUserStore();
    const [user, setUser] = useState(FormData);


    useEffect(() => {
        const fetchSingleUser = async () => {
            const response = await getCurrentUser();
            setUser(response);

            updateFormData.updateFullName(response.data.name, response.data.surname);
            updateFormData.updateUserName(response.data.username);
            updateFormData.updateEmail(response.data.email);
            updateFormData.updatePhone(response.data.phone);
            updateFormData.updateBio(response.data.bio);
            updateFormData.updateGender(response.data.gender)
            updateFormData.updateProfileImage(response.data.profileImage)
            updateFormData.updatePassword(response.data.password)
            updateFormData.updateDob(response.data.dob)
            updateFormData.updateLinks(response.data.links)
            updateFormData.updateRoles(response.data.roles)
            updateFormData.updatePerms(response.data.perms)
            updateFormData.updateIsEmailVerified(response.data.isEmailVerified)
            updateFormData.updateFollowers(response.data.followers)
            updateFormData.updateFollowing(response.data.following)
            updateFormData.updateBookmarks(response.data.bookmarks)
            updateFormData.updateRates(response.data.rates)
        }
        fetchSingleUser();
    }, [])




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
                            <label className="text-sm dark:text-white font-medium text-gray-700">
                                Full Name
                            </label>
                            <input
                                className="border border-gray-300 py-2 px-3 text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-200 transition-all"
                                placeholder="Name Surname"
                                type="text"
                                value={user?.data?.name && user?.data?.surname ? `${user?.data?.name} ${user?.data?.surname}` : ""}
                                onChange={() => updateFormData.updateFullName(user?.data?.name, user?.data.surname)}
                            />
                        </div>
                        <div className="flex flex-col space-y-2">
                            <label className="text-sm dark:text-white font-medium text-gray-700">
                                Username
                            </label>
                            <input
                                className="border border-gray-300 py-2 px-3 text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-200 transition-all"
                                placeholder="Username"
                                type="text"
                                value={user?.data.username || ""}
                                onChange={() => updateFormData.updateUserName(user?.data?.username)}
                            />
                        </div>
                        <div className='flex justify-between'>
                            <div className="flex flex-col space-y-2">
                                <label className="text-sm dark:text-white font-medium text-gray-700">
                                    Email
                                </label>
                                <input
                                    className="border border-gray-300 py-2 px-3 text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-200 transition-all"
                                    placeholder="ornek@domain.com"
                                    type="email"
                                    value={user?.data?.email || ""}
                                    onChange={() => updateFormData.updateEmail(user?.data?.email)}
                                />
                            </div>
                            <div className="flex flex-col space-y-2">
                                <label className="text-sm font-medium dark:text-white text-gray-700">Password</label>
                                <div className="relative">
                                    <input
                                        className="w-full border border-gray-300 py-2 pr-10 px-3 text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-200 transition-all"
                                        placeholder="Password"
                                        type={showPassword ? "text" : "password"}
                                        value={user?.data?.password || ""}
                                        onChange={() => updateFormData.updatePassword(user?.data?.password)}
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
                            <label className="text-sm font-medium dark:text-white text-gray-700">Gender</label>
                            <div className="flex justify-between items-center">
                                <div className="flex items-center me-4">
                                    <input
                                        id="purple-checkbox"
                                        type="checkbox"
                                        value="female"
                                        checked={user?.data.gender === "Female"}
                                        className="w-4 h-4 accent-purple-600   focus:ring-purple-500 "
                                        onChange={() => updateFormData.updateGender(user?.data?.gender === 'female' ? '' : 'female')}
                                    />
                                    <label htmlFor="purple-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-white">Female</label>
                                </div>
                                <div className="flex items-center me-4">
                                    <input
                                        id="blue-checkbox"
                                        type="checkbox"
                                        value="male"
                                        checked={user?.data.gender === "Male"}
                                        className="w-4 h-4 accent-blue-600   focus:ring-blue-500 "
                                        onChange={() => updateFormData.updateGender(user?.data?.gender === "male" ? "" : "male")}
                                    />
                                    <label htmlFor="blue-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-white">Male</label>
                                </div>
                                <div className="flex items-center me-4">
                                    <input
                                        id="gray-checkbox"
                                        type="checkbox"
                                        value="specify "
                                        checked={user?.data.gender === ""}
                                        className="w-4 h-4 accent-gray-800   focus:ring-gray-500 "
                                        onChange={() => updateFormData.updateGender(user?.data?.gender === "" ? "male " || "female" : "")}
                                    />
                                    <label htmlFor="gray-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-white">Don't specify</label>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col space-y-2">
                            <label className="text-sm font-medium text-gray-700 dark:text-white">Phone Number</label>
                            <div className="flex items-center space-x-2">
                                <input
                                    name="phone"
                                    className="border border-gray-300 py-2 px-3 text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-200 transition-all w-full"
                                    placeholder="0 (5xx) xxx xx xx"
                                    type="tel"
                                    value={user?.data.phone || ""}
                                    onChange={() => updateFormData.updatePhone(user?.data?.phone)}
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700 dark:text-white">Birth Date</label>
                            <div className="flex gap-10">
                                <select
                                    className="border border-gray-300 rounded-md py-2 dark:text-gray-800 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                    onChange={() => updateFormData.updateDob(user?.data?.dob?.day)}

                                >
                                    <option value={user?.data?.dob?.day || ""}
                                        disabled >Day</option>
                                    {Array.from({ length: 31 }, (_, i) => (
                                        <option key={i + 1} value={i + 1}>
                                            {i + 1}
                                        </option>
                                    ))}
                                </select>

                                <select
                                    className="border border-gray-300 dark:text-gray-800 rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                    onChange={() => updateFormData.updateDob(user?.data?.dob?.month)}
                                >
                                    <option value={user?.data?.dob?.month || ""}
                                        disabled>Month</option>
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
                                    className="border border-gray-300 dark:text-gray-800 rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                    onChange={() => updateFormData.updateDob(user?.data?.dob?.year)}
                                >
                                    <option value={user?.data?.dob?.year || ""}
                                        disabled>Year</option>
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
                        <label className="text-sm font-medium text-gray-700 dark:text-white ">Social Medias</label>
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
                                    value={user?.data?.links?.twitter}
                                    onChange={() => updateFormData.updateLinks(user?.data?.links?.twitter)}
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
                                    value={user?.data?.links?.facebook}
                                    onChange={() => updateFormData.updateLinks(user?.data?.links?.facebook)}
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
                                    value={user?.data?.links?.youtube}
                                    onChange={() => updateFormData.updateLinks(user?.data?.links?.youtube)}
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
                                    value={user?.data?.links?.instagram}
                                    onChange={() => updateFormData.updateLinks(user?.data?.links?.instagram)}
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
                                value={user?.data?.bio || ""}
                                onChange={() => updateFormData.updateBio(user?.data?.bio)}
                            />
                            <span className='absolute right-2 bottom-2 text-sm text-gray-500'>
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