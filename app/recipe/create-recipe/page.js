"use client"
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { FaCamera } from "react-icons/fa6";

import config from "@/config.json"

function CreateRecipe() {

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
        console.log(data);


        try {
            const response = await fetch(`${config.backend_url}/recipes`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            if (response.ok) {

                toast.success("Recipe created successfuly");
            }
            else {
                toast.error("Recipe creation failed");
            }
        } catch (error) {
            console.log(error);
        }
    }


    const [imageUrls, setImageUrls] = useState(['']);
    const [videoUrls, setVideoUrls] = useState(['']);


    const handleAddImage = () => {
        setImageUrls([...imageUrls, '']); // Add an empty value to the array to create a new input
    }

    // Update the image URL at the given index
    const handleImageChange = (e, index) => {
        const updatedImageUrls = [...imageUrls];
        updatedImageUrls[index] = e.target.value; // Update the image URL in the array
        setImageUrls(updatedImageUrls);
    }


    const handleRemoveImage = (index) => {
        const updatedImageUrls = imageUrls.filter((_, i) => i !== index); // Remove the image at the given index
        setImageUrls(updatedImageUrls);
    }

    // Add new video input field
    const handleAddVideo = () => {
        setVideoUrls([...videoUrls, '']); // Add an empty value to the array to create a new input
    }

    // Update the video URL at the given index
    const handleVideoChange = (e, index) => {
        const updatedVideoUrls = [...videoUrls];
        updatedVideoUrls[index] = e.target.value; // Update the video URL in the array
        setVideoUrls(updatedVideoUrls);
    }

    // Remove a video input field
    const handleRemoveVideo = (index) => {
        const updatedVideoUrls = videoUrls.filter((_, i) => i !== index); // Remove the video at the given index
        setVideoUrls(updatedVideoUrls);
    }

    const categories = [
        "TV/Monitors",
        "PC",
        "Gaming/Console",
        "Phones",
        // Add other categories as needed
    ];

    const [text, setText] = useState("");
    const [text2, setText2] = useState("");

    const handleTextChange = (e) => {
        setText(e.target.value);
    };
    const handleTextChange2 = (e) => {
        setText2(e.target.value);
    }
    return (

        <div>
            <div className="flex flex-col ">
                <div>
                    <div className='flex justify-center font-bold text-xl pt-4'>
                        <h1>CREATE A NEW RECİPE</h1>
                    </div>
                    <div className='flex flex-col md:flex-row justify-between py-5 px-5 min-h-screen gap-10 '>
                        <form onSubmit={handleSubmit} className='flex flex-col  px-4 py-4 space-y-3 w-full '>
                            <div className="relative">
                                <textarea
                                    className="w-full px-2 py-2 h-12 text-xl border border-dashed rounded-md"
                                    placeholder="Tarif başlığı"
                                    maxLength="90"
                                    value={text}
                                    onChange={handleTextChange}
                                ></textarea>
                                <span className="absolute right-2 bottom-2 text-sm text-gray-500">
                                    {90 - text.length}
                                </span>
                            </div>
                            <div className='relative py-2'>
                                <textarea
                                    className='w-full px-2 py-2 h-24 border border-dashed '
                                    placeholder='Tarifinizin ne kadar lezzetli olduğundan bahsettiğiniz giriş metnini buraya yazın.'
                                    maxLength="1000"
                                    value={text}
                                    onChange={handleTextChange2}
                                ></textarea>
                                <span className="absolute right-2 bottom-3 text-sm text-gray-500">
                                    {1000 - text.length}
                                </span>
                            </div>
                            <div className="relative w-full h-64 border border-black border-dashed border-gray-300 rounded-md flex flex-col items-center justify-center ">
                                <label
                                    htmlFor="photo-upload"
                                    className="flex flex-col items-center justify-center cursor-pointer"
                                >
                                    <div className="bg-gray-800 dark:bg-gray-100 w-20 h-20 rounded-full flex items-center justify-center">
                                        <FaCamera className="text-white dark:text-gray-800" size={36} />
                                    </div>
                                    <p className="text-gray-700 dark:text-gray-100 font-medium mt-2">
                                        Tarifinizin Fotoğrafını Yükleyin
                                    </p>
                                </label>
                                <input
                                    id="photo-upload"
                                    type="file"
                                    accept="image/*"
                                    className="sr-only"
                                />
                            </div>
                            <div className='flex flex-col md:flex-row gap-4'>
                                {/* Kaç Kişilik 1 */}
                                <div className='flex flex-col items-center gap-2 w-full sm:w-full md:w-1/3'>
                                    <h3>Kaç kişilik</h3>
                                    <div className='flex flex-col sm:flex-row justify-start space-x-0 sm:space-x-4'>
                                        <input className='w-16 h-8 px-2' type="number" id="servingTime" name="servingTime" min="1" placeholder="0" value="" />
                                        <select className='w-32 h-8 px-2'>
                                            <option disabled selected>PORSİYON</option>
                                            <option>1-2</option>
                                            <option>3-4</option>
                                            <option>5-6</option>
                                            <option>7-8</option>
                                            <option>9+</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Kaç Kişilik 2 */}
                                <div className='flex flex-col items-center gap-2 w-full sm:w-full md:w-1/3'>
                                    <h3>Kaç kişilik</h3>
                                    <div className='flex flex-col sm:flex-row justify-start space-x-0 sm:space-x-4'>
                                        <input className='w-16 h-8 px-2' type="number" id="servingTime" name="servingTime" min="1" placeholder="0" value="" />
                                        <select className='w-32 h-8 px-2'>
                                            <option disabled selected>SÜRE</option>
                                            <option>1-2</option>
                                            <option>3-4</option>
                                            <option>5-6</option>
                                            <option>7-8</option>
                                            <option>9+</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Kaç Kişilik 3 */}
                                <div className='flex flex-col items-center gap-2 w-full sm:w-full md:w-1/3'>
                                    <h3>Kaç kişilik</h3>
                                    <div className='flex flex-col sm:flex-row justify-start space-x-0 sm:space-x-4'>
                                        <input className='w-16 h-8 px-2' type="number" id="servingTime" name="servingTime" min="1" placeholder="0" value="" />
                                        <select className='w-32 h-8 px-2'>
                                            <option disabled selected>SÜRE</option>
                                            <option>1-2</option>
                                            <option>3-4</option>
                                            <option>5-6</option>
                                            <option>7-8</option>
                                            <option>9+</option>
                                        </select>
                                    </div>
                                </div>
                            </div>


                            <div>
                                Pişirme aletleri (array)
                            </div>
                            <div>
                                <div>malzemeler</div>
                                <div>
                                    <input placeholder='malzemeleri ölçüleriyle gir'></input>
                                </div>
                            </div>
                            <div>
                                <div> Naısl yapılır</div>
                                <div>
                                    <div>PİŞİRME ADIMLARI </div>
                                    <div>Pişirme adımları foto</div>
                                </div>
                            </div>
                            <div>
                                <div>Pişirme ve püf noktalari</div>
                                <input placeholder='Tarifinizde kullanılabilecek püf noktaları, pişirme ya da servis önerileri varsa buraya yazabilirsiniz.'></input>
                            </div>
                            <div>
                                <div>Video</div>
                                <div>Pişirme adımları foto</div>
                            </div>
                        </form>
                        <div className='border-2 w-full md:w-96 rounded-md h-auto md:h-80 shadow-sm dark:border-gray-800 py-4'>
                            Onay butonu
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default CreateRecipe