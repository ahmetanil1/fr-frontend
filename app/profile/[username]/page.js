"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { MdEdit } from "react-icons/md";
import { useRouter } from 'next/navigation';
import { CiSearch } from "react-icons/ci";
import { getCurrentUser } from '@/services/users';

function ProfilePage() {
    const [activeTab, setActiveTab] = useState('Tarifler');
    const [userName, setUsername] = useState('');
    const router = useRouter();

    const [user, setUser] = useState('');

    useEffect(() => {
        const fetchSingleUser = async () => {
            const response = await getCurrentUser();
            setUser(response);
            setUsername(response.data.username);
        }
        fetchSingleUser();
    }, [])




    const handleTabClick = (tab) => {
        setActiveTab(tab);
    }
    return (
        <div className='flex flex-col md:flex-row justify-start py-5 px-5 min-h-screen gap-10'>
            <div className='border-2 w-full md:w-96 rounded-md h-auto md:h-80 shadow-sm dark:border-gray-800 py-4'>
                <div className='flex justify-end px-4 pb-4'>
                    <MdEdit onClick={() => router.push(`/settings/${userName}`)} className='text-2xl cursor-pointer' />
                </div>
                <div className='flex flex-col'>
                    <div className="relative flex justify-center items-center">
                        <Image
                            className="rounded-full"
                            src={user?.profileImage || "https://via.placeholder.com/150?text=Default"}
                            alt="profile"
                            width={100}
                            height={100}
                        />
                    </div>
                    <div className='flex flex-col p-5'>
                        <span className='flex justify-center py-1'>{user?.username}</span>
                        <div className="flex justify-center">{user?.roles}</div>

                    </div>
                </div>

                <div className='flex justify-center px-4 gap-4 text-xs'>
                    <div><div className='flex justify-center'>0</div><div>Tarifler</div></div>
                    <div><div className='flex justify-center'>0</div><div>Takipçi</div></div>
                    <div><div className='flex justify-center'>0</div><div>Takip edilenler</div></div>
                </div>
            </div>

            <div className='w-full'>
                <div className='flex justify-center gap-6 md:gap-16 ml-4 pb-2 font-small'>
                    <p
                        onClick={() => handleTabClick('Tarifler')}
                        className={` cursor-pointer ${activeTab === 'Tarifler' ? ' font-bold' : 'text-gray-700 '}`}
                    >
                        Tarifler
                    </p>
                    <p
                        onClick={() => handleTabClick('Yazılar')}
                        className={` cursor-pointer ${activeTab === 'Yazılar' ? ' font-bold' : 'text-gray-700 '}`}
                    >
                        Yazılar
                    </p>
                    <p
                        onClick={() => handleTabClick('Favoriler')}
                        className={` cursor-pointer ${activeTab === 'Favoriler' ? ' font-bold' : 'text-gray-700 '}`}
                    >
                        Favoriler
                    </p>
                    <p
                        onClick={() => handleTabClick('Hakkımda')}
                        className={` cursor-pointer ${activeTab === 'Hakkımda' ? ' font-bold' : 'text-gray-700 '}`}
                    >
                        Hakkımda
                    </p>
                </div>
                <hr className="shadow-md mt-2 w-full border-gray-300 dark:border-gray-500" />
                {activeTab !== 'Hakkımda' && (
                    <div className="flex items-center border-2 mt-4 border-gray-300 rounded-md bg-gray-100 focus-within:border-gray-500  transition-colors duration-300 w-full">
                        <div className="px-3 text-gray-500">
                            <CiSearch size={20} />
                        </div>
                        <input
                            className="flex-1 py-2 px-2 bg-inherit outline-none text-gray-700 placeholder-gray-500"
                            placeholder="Ara..."
                            type="text"
                        />
                    </div>
                )}
                <div>
                    <div className="mt-4">
                        {activeTab === 'Tarifler' && (
                            <div>
                                <h2>Tarifler İçeriği</h2>
                            </div>
                        )}
                        {activeTab === 'Yazılar' && (
                            <div>
                                <h2>Yazılar İçeriği</h2>
                            </div>
                        )}
                        {activeTab === 'Favoriler' && (
                            <div>
                                <h2>Favoriler İçeriği</h2>
                            </div>
                        )}
                        {activeTab === 'Hakkımda' && (
                            <div>
                                <h2>Hakkımda İçeriği</h2>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage;
