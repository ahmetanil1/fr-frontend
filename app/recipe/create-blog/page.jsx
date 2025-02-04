"use client"
import React, { useState } from 'react';
import { FaCamera } from 'react-icons/fa';
import { ImParagraphJustify } from "react-icons/im";
import { IoMdVideocam } from "react-icons/io";
import { FaTrash } from 'react-icons/fa';
import Textarea from '@/components/general/Textarea';
import Input from '@/components/general/Input';
import Button from '@/components/general/Button';
import useBlogFormDataStore from "@/store/useBlogFormDataStore";

import { useRouter } from 'next/navigation';


function CreateBlog() {
    const router = useRouter();

    const {
        blogFormData,
        setBlogFormData,
        updateField,
        setField,
        addContent,
        removeContent,
        updateContent,
        addGallery,
        removeGallery,
        updateGallery,
        addVideo,
        removeVideo,
        updateVideo
    } = useBlogFormDataStore();

    const handleSubmitBlog = async () => {
        // Call the API to create a new blog
    }

    return (
        <div className="flex flex-col justify-center items-center">
            <div className="w-full max-w-3xl px-4 ">
                <div className='flex justify-center font-bold text-xl py-10'>
                    <h1>CREATE A NEW BLOG</h1>
                </div>

                <form onSubmit={handleSubmitBlog} className='space-y-10 w-full'>

                    <div className="relative">
                        <Textarea
                            size="sm"
                            placeholder="Write the title of your recipe here."
                            value={blogFormData.title}
                            onChange={(e) => setField('title', e.target.value)}
                            maxLength="90"
                        />

                    </div>

                    <div className='relative py-2'>
                        <Textarea
                            size="md"
                            placeholder="Write the introductory text here where you talk about how delicious your recipe is."
                            value={blogFormData.description}
                            onChange={(e) => setField('description', e.target.value)}
                            maxLength="1000"
                        />
                    </div>

                    <div className="relative w-full h-64 border border-black  hover:border-gray-600 border-gray-300 rounded-md flex flex-col items-center justify-center">
                        <label
                            htmlFor="photo-upload"
                            className="flex flex-col items-center justify-center cursor-pointer"
                        >
                            {blogFormData.thumbnail ? (
                                <div className="w-full h-auto flex flex-col items-center justify-center">
                                    <img
                                        src={blogFormData.thumbail.name || "thumbnail"}
                                        alt="Uploaded"
                                        className="w-48 h-48 object-cover rounded-md"
                                    />
                                    <button
                                        type="button"
                                        className="absolute top-3 right-2 "
                                        onClick={() => {
                                            setBlogFormData({ ...blogFormData, thumbnail: '' });
                                        }}
                                    >
                                        <FaTrash />
                                    </button>
                                </div>

                            ) : (
                                <>
                                    <div className="bg-gray-800 dark:bg-gray-100 w-20 h-20 rounded-full flex items-center justify-center">
                                        <FaCamera className="text-white dark:text-gray-800" size={36} />
                                    </div>
                                    <div className="mt-2">
                                        <span className="text-md text-gray-800 dark:text-gray-100">
                                            Upload Image
                                        </span>
                                    </div>
                                </>
                            )}
                        </label>
                        <input
                            id="photo-upload"
                            type="file"
                            accept="image/*"
                            className="sr-only"
                            onChange={(e) => setField('thumbnail', URL.createObjectURL(e.target.files[0]))}
                        />
                    </div>

                    {blogFormData.content.slice(1).map((text, index) => (
                        <div key={`text-${index}`} className="relative items-center">
                            <Textarea
                                size="md"
                                placeholder="Write the introductory text here where you talk about how delicious your recipe is."
                                value={text}
                                onChange={(e) => updateContent(e.target.value, index)}
                                maxLength="1000"
                            />
                            {blogFormData.content.length > 0 && (
                                <button
                                    type="button"
                                    className="absolute right-2 top-3 "
                                    onClick={() => removeContent(blogFormData.content[index])}
                                >
                                    <FaTrash />
                                </button>
                            )}
                        </div>
                    ))}
                    <button type="button" className="flex items-center gap-2" onClick={addContent}>
                        <div>
                            <ImParagraphJustify size={24} />
                        </div>
                        <div>
                            <span>Add Text</span>
                        </div>
                    </button>

                    {blogFormData.gallery.length > 0 && (
                        <div className='flex flex-wrap gap-6 '>
                            {blogFormData.gallery.map((image, index) => (
                                <div key={`image-${index}`}>
                                    <label htmlFor={`photo-upload-${index}`} className="relative cursor-pointer w-32 h-32 rounded-md flex flex-col items-center justify-center">
                                        {image.imageUrl ? (
                                            <div className="w-full h-auto flex flex-col items-center justify-center ">
                                                <img
                                                    src={image.imageUrl}
                                                    alt="Uploaded"
                                                    className="w-32 h-32 object-cover rounded-md"
                                                />
                                                <button
                                                    type="button"
                                                    className="absolute top-3 right-2 "
                                                    onClick={() => removeGallery(blogFormData.gallery[index])}
                                                >
                                                    <FaTrash />
                                                </button>
                                            </div>
                                        ) : (
                                            <>
                                                <div className="bg-gray-800 dark:bg-gray-100 w-20 h-20 rounded-full flex items-center justify-center">
                                                    <FaCamera className="text-white dark:text-gray-800" size={36} />
                                                </div>
                                                <div className="mt-2">
                                                    <span className="text-md text-gray-800 dark:text-gray-100">
                                                        Upload Image
                                                    </span>
                                                </div>
                                            </>
                                        )}
                                        {blogFormData.gallery.length > 0 && (
                                            <button
                                                type="button"
                                                className="absolute top-3 right-2 "
                                                onClick={() => removeGallery(blogFormData.gallery[index])}
                                            >
                                                <FaTrash />
                                            </button>
                                        )}
                                        <input
                                            id={`photo-upload-${index}`}
                                            type="file"
                                            accept="image/*"
                                            className="sr-only"
                                            onChange={(e) => updateGallery(index, URL.createObjectURL(e.target.files[0]))}
                                        />
                                    </label>
                                </div>
                            ))}
                        </div>
                    )}

                    <button type="button" className="flex items-center gap-2" onClick={addGallery}>
                        <div>
                            <FaCamera size={24} />
                        </div>
                        <div>
                            <span>Add Image</span>
                        </div>
                    </button>

                    {blogFormData.video.map((video, index) => (
                        <div key={`video-${index}`} className="relative items-center">
                            <Input
                                size="wfull"
                                placeholder={`Video ${index + 1}`}
                                value={video}
                                onChange={(e) => updateVideo(e.target.value, index)}
                            />
                            {blogFormData.video.length > 0 && (
                                <button
                                    type="button"
                                    className="absolute top-3 right-2 "
                                    onClick={() => removeVideo(blogFormData.video[index])}
                                >
                                    <FaTrash />
                                </button>
                            )}
                        </div>
                    ))}

                    <button type="button" className="flex items-center gap-2" onClick={addVideo}>
                        <div>
                            <IoMdVideocam size={24} />
                        </div>
                        <div>
                            <span>Add Video</span>
                        </div>
                    </button>

                    <div className='flex pb-5 justify-center gap-4'>
                        <div className="flex justify-center gap-4">
                            <Button
                                type="button"
                                variant="danger"
                                size="md"
                                className="mt-4"
                                onClick={() => router.push('/user')}
                            >Cancel</Button>
                            <Button
                                type="submit"
                                variant="default"
                                size="md"
                                className="mt-4"
                                onClick={() => {
                                    setTimeout(() => {
                                        router.push("/user");
                                    }, 1500);
                                }}
                            >Submit</Button>
                        </div>

                    </div>
                </form>
            </div>
        </div>
    );
}

export default CreateBlog;
