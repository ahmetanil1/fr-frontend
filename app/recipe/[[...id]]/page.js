"use client"
import FeaturedRecipe from '@/components/featured-recipe';
import React, { useState } from 'react';
import { MdDelete } from "react-icons/md";
import { toast } from 'react-toastify';
import config from "@/config.json"



function RecipePage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [imageUrls, setImageUrls] = useState(['']); 
    const [videoUrls, setVideoUrls] = useState(['']); 
    const toggleModal = () => setIsModalOpen(!isModalOpen);

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

    // Add new image input field
    const handleAddImage = () => {
        setImageUrls([...imageUrls, '']); // Add an empty value to the array to create a new input
    }

    // Update the image URL at the given index
    const handleImageChange = (e, index) => {
        const updatedImageUrls = [...imageUrls];
        updatedImageUrls[index] = e.target.value; // Update the image URL in the array
        setImageUrls(updatedImageUrls);
    }

    // Remove an image input field
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

    return (
        <div className='flex flex-col'>
            <div className='flex justify-center my-5'>
                <button
                    onClick={toggleModal}
                    className="block text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-black-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-200 dark:text-gray-700 dark:hover:bg-gray-300 dark:focus:ring-black-800"
                    type="button">
                    Create Recipe
                </button>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 flex justify-center items-center z-50 bg-gray-800 bg-opacity-50">
                    <div className="relative p-4 w-full max-w-3xl bg-white rounded-lg shadow dark:bg-gray-700 overflow-auto h-[80vh]">
                        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Create New Recipe</h3>
                            <button onClick={toggleModal} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white">
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        <form onSubmit={handleSubmit} className="space-y-4 p-4 md:p-5">
                            <div>
                                <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Recipe Title</label>
                                <input type="text" name="title" id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter your recipe name" required />
                            </div>

                            <div>
                                <label htmlFor="cooking_devices" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Cooking Devices</label>
                                <input type="text" name="cooking_devices" id="cooking_devices" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter cooking devices" required />
                            </div>

                            <div className="flex flex-wrap gap-4">
                                <div>
                                    <label htmlFor="servings" className="block text-xs font-medium  mb-2">Servings</label>
                                    <div className="flex ">
                                        <input type="number" id="servings" className="p-2 border border-gray-300 rounded-md w-full sm:w-28 focus:ring-2 focus:ring-black-500" placeholder="Person" min="0" />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="prep-time" className="block text-xs font-medium  mb-2">Preparation Time</label>
                                    <div className="flex space-x-4">
                                        <input type="number" id="prep-time" className="p-2 border border-gray-300 rounded-md w-full sm:w-28 focus:ring-2 focus:ring-black-500" placeholder="Time" min="0" />
                                        <select className="p-2 border border-gray-300 rounded-md w-full sm:w-32 focus:ring-2 focus:ring-black-500">
                                            <option value="hour">Hour</option>
                                            <option value="minute">Minute</option>
                                            <option value="second">Second</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="cook-time" className="block text-xs font-medium  mb-2">Cook Time</label>
                                    <div className="flex space-x-4">
                                        <input type="number" id="cook-time" className="p-2 border border-gray-300 rounded-md w-full sm:w-28 focus:ring-2 focus:ring-black-500" placeholder="Time" min="0" />
                                        <select className="p-2 border border-gray-300 rounded-md w-full sm:w-32 focus:ring-2 focus:ring-black-500">
                                            <option value="hour">Hour</option>
                                            <option value="minute">Minute</option>
                                            <option value="second">Second</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="flex flex-wrap gap-10  ">
                                    <div>
                                        <label htmlFor="calories" className="block text-sm font-medium text-gray-900 dark:text-white">Calories</label>
                                        <input type="number" name="calories" id="calories" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-28 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Calories" />
                                    </div>
                                    <div>
                                        <label htmlFor="protein" className="block text-sm font-medium text-gray-900 dark:text-white">Protein</label>
                                        <input type="number" name="protein" id="protein" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-28 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Protein" />
                                    </div>
                                    <div>
                                        <label htmlFor="fat" className="block text-sm font-medium text-gray-900 dark:text-white">Fat</label>
                                        <input type="number" name="fat" id="fat" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-28 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Fat" />
                                    </div>
                                    <div>
                                        <label htmlFor="carbs" className="block text-sm font-medium text-gray-900 dark:text-white">Carbs</label>
                                        <input type="number" name="carbs" id="carbs" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-28 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Carbs" />
                                    </div>
                                </div>
                            </div>

                            {/* Image URLs Section */}
                            <div>
                                <label htmlFor="image_url" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Image URLs</label>
                                {imageUrls.map((url, index) => (
                                    <div key={index} className="flex items-center gap-2 mb-4">
                                        <input
                                            type="url"
                                            name={`image_url_${index}`}
                                            value={url}
                                            onChange={(e) => handleImageChange(e, index)}
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                            placeholder="Enter image URL"
                                        />
                                        {imageUrls.length > 1 && (
                                            <button
                                                type="button"
                                                onClick={() => handleRemoveImage(index)}
                                                className="text-red-500 hover:text-red-700"
                                            >
                                                <MdDelete className='text-gray-900' />
                                            </button>
                                        )}
                                    </div>
                                ))}
                                <button
                                    type="button"
                                    onClick={handleAddImage}
                                    className="text-black-500 hover:text-black-700 focus:outline-none"
                                >
                                    + Add Another Image
                                </button>
                            </div>

                            {/* Video URLs Section */}
                            <div>
                                <label htmlFor="video_url" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Video URLs</label>
                                {videoUrls.map((url, index) => (
                                    <div key={index} className="flex items-center gap-2 mb-4">
                                        <input
                                            type="url"
                                            name={`video_url_${index}`}
                                            value={url}
                                            onChange={(e) => handleVideoChange(e, index)}
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                            placeholder="Enter video URL"
                                        />
                                        {videoUrls.length > 1 && (
                                            <button
                                                type="button"
                                                onClick={() => handleRemoveVideo(index)}
                                                className="text-red-500 hover:text-red-700"
                                            >
                                                <MdDelete className='text-gray-900' />

                                            </button>
                                        )}
                                    </div>
                                ))}
                                <button
                                    type="button"
                                    onClick={handleAddVideo}
                                    className="text-black-500 hover:text-black-700 focus:outline-none"
                                >
                                    + Add Another Video
                                </button>
                            </div>

                            <div>
                                <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
                                <select name="category" id="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                    {categories.map((category) => (
                                        <option key={category} value={category}>{category}</option>
                                    ))}
                                </select>
                            </div>

                            <button type="submit" className="text-white inline-flex items-center bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-200 dark:hover:bg-gray-300 dark:focus:ring-gray-300 dark:text-gray-700">
                                Add Recipe
                            </button>
                        </form>
                    </div>
                </div>
            )}

            <div>
                <FeaturedRecipe />
            </div>

        </div>
    );
}

export default RecipePage;
