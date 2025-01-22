"use client"
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { FaCamera } from 'react-icons/fa';
import { ImParagraphJustify } from "react-icons/im";
import { IoMdVideocam } from "react-icons/io";
import { FaTrash } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import dotenv from "dotenv"
import Textarea from '@/components/general/Textarea';
import Input from '@/components/general/Input';
function CreateBlog() {
    const [texts, setTexts] = useState([]);
    const [images, setImages] = useState([]);
    const [videos, setVideos] = useState([]);
    const [text, setText] = useState('')
    const [text2, setText2] = useState('')
    const [imageUrls, setImageUrls] = useState([{ imageUrl: '', imageName: '' }])
    const [imageName, setImageName] = useState('')
    const router = useRouter();
    const backend_url = process.env.BACKEND_URL;
    const handleSubmitBlog = async (e) => {
        e.preventDefault();
        const data = { texts, images, videos };
        console.log(data);

        try {
            const response = await fetch(`${backend_url}/blog`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                toast.success('Blog başarıyla oluşturuldu');
            } else {
                toast.error('Blog oluşturulurken bir hata oluştu');
            }
        } catch (error) {
            console.error(error);
        }
    };

    const handleAddText = () => {
        setTexts([...texts, '']);
    };

    const handleTextChange = (value, index) => {
        const updatedTexts = [...texts];
        updatedTexts[index] = value;
        setTexts(updatedTexts);
    };

    const handleRemoveText = (index) => {
        const updatedTexts = texts.filter((_, i) => i !== index);
        setTexts(updatedTexts);
    };

    const handleAddAnotherImage = () => {
        setImages([...images, { imageUrl: '', imageName: '' }]); // Yeni resim ekleme
    };

    const handleImageChange = (file, index) => {
        if (file) {
            const updatedImages = [...images];
            updatedImages[index] = { imageUrl: URL.createObjectURL(file), imageName: file.name };
            setImages(updatedImages);  // yalnızca ilgili index'i güncelle
        }
    };

    const handleAddImage = (e, index) => {
        const file = e.target.files[0];
        if (file) {
            const updatedImageUrls = [...imageUrls];
            updatedImageUrls[index] = { imageUrl: URL.createObjectURL(file) }; // Update with new image URL
            setImageUrls(updatedImageUrls);
            setImageName(file.name); // Set the image file name
        }
    };

    const handleRemoveImage = (index) => {
        const updatedImages = images.filter((_, i) => i !== index);
        setImages(updatedImages);

    };

    const handleAddVideo = () => {
        setVideos([...videos, '']);
    };

    const handleVideoChange = (value, index) => {
        const updatedVideos = [...videos];
        updatedVideos[index] = value;
        setVideos(updatedVideos);
    };

    const handleRemoveVideo = (index) => {
        const updatedVideos = videos.filter((_, i) => i !== index);
        setVideos(updatedVideos);
    };

    const handleTextChangeNormal = (e) => { setText(e.target.value) }
    const handleTextChangeNormal2 = (e) => { setText2(e.target.value) }

    return (
        <div className="flex flex-col justify-center items-center">
            <div className="w-full max-w-3xl px-4 ">
                <div className='flex justify-center font-bold text-xl py-10'>
                    <h1>YENİ BLOG OLUŞTUR</h1>
                </div>

                <form onSubmit={handleSubmitBlog} className='space-y-10 w-full'>

                    <div className="relative">
                        <Textarea
                            size="sm"
                            placeholder="Tarif Başlığı"
                            value={text}
                            onChange={handleTextChangeNormal}
                            maxLength="90"
                        />

                    </div>

                    <div className='relative py-2'>
                        <Textarea
                            size="md"
                            placeholder="Tarifinizin ne kadar lezzetli olduğundan bahsettiğiniz giriş metnini buraya yazın."
                            value={text2}
                            onChange={handleTextChangeNormal2}
                            maxLength="1000"
                        />
                    </div>

                    <div className="relative w-full h-64 border border-black hover:border-dashed hover:border-gray-600 border-gray-300 rounded-md flex flex-col items-center justify-center">
                        <label
                            htmlFor="photo-upload"
                            className="flex flex-col items-center justify-center cursor-pointer"
                        >
                            {imageUrls[0] && imageUrls[0].imageUrl ? (
                                <div className="w-full h-auto flex flex-col items-center justify-center">
                                    <img
                                        src={imageUrls[0].imageUrl}
                                        alt="Uploaded"
                                        className="w-20 h-20 object-cover rounded-md"
                                    />
                                    <p className="text-gray-700 dark:text-gray-100 font-medium mt-2">
                                        {imageName} {/* Display the image file name */}
                                    </p>
                                    <button
                                        type="button"
                                        className="absolute top-3 right-2 "
                                        onClick={() => {
                                            const newImageUrls = [...imageUrls];
                                            newImageUrls[0] = { imageUrl: '', name: '' }; // Reset the image URL and name
                                            setImageUrls(newImageUrls);
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
                                            Fotoğraf yükle
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
                            onChange={(e) => handleAddImage(e, 0)}
                        />
                    </div>

                    {texts.slice(1).map((text, index) => (
                        <div key={`text-${index}`} className="relative items-center">
                            <Textarea
                                size="md"
                                placeholder={`Metin ${index + 2}`}
                                value={text}
                                onChange={(e) => handleTextChange(e.target.value, index + 1)}
                                maxLength="1000"
                            />
                            {texts.length > 0 && (
                                <button
                                    type="button"
                                    className="absolute right-2 top-3 "
                                    onClick={() => handleRemoveText(index + 1)}
                                >
                                    <FaTrash />
                                </button>
                            )}
                        </div>
                    ))}
                    <button type="button" className="flex items-center gap-2" onClick={handleAddText}>
                        <div>
                            <ImParagraphJustify size={24} />
                        </div>
                        <div>
                            <span>Metin Ekle</span>
                        </div>
                    </button>

                    {images.map((image, index) => (
                        <div key={`image-${index}`}>
                            <label htmlFor={`photo-upload-${index}`} className="relative cursor-pointer w-full h-64 border border-black hover:border-dashed hover:border-gray-600 border-gray-300 rounded-md flex flex-col items-center justify-center">
                                {image.imageUrl ? (
                                    <div className="w-full h-auto flex flex-col items-center justify-center">
                                        <img
                                            src={image.imageUrl}
                                            alt="Uploaded"
                                            className="w-20 h-20 object-cover rounded-md"
                                        />
                                        <p className="text-gray-700 dark:text-gray-100 font-medium mt-2">
                                            {imageName}
                                            {/*DİĞER İMAGE İLE AYNI İMAGE YAZILIYO FİXLE */}
                                        </p>
                                        <button
                                            type="button"
                                            className="absolute top-3 right-2 "
                                            onClick={() => {
                                                const newImageUrls = [...imageUrls];
                                                newImageUrls[0] = { imageUrl: '', name: '' }; // Reset the image URL and name
                                                setImageUrls(newImageUrls);
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
                                                Fotoğraf yükle
                                            </span>
                                        </div>
                                    </>
                                )}
                                {images.length > 0 && (
                                    <button
                                        type="button"
                                        className="absolute top-3 right-2 "
                                        onClick={() => handleRemoveImage(index)}
                                    >
                                        <FaTrash />
                                    </button>
                                )}
                                <input
                                    id={`photo-upload-${index}`}
                                    type="file"
                                    accept="image/*"
                                    className="sr-only"
                                    onChange={(e) => handleImageChange(e.target.files[0], index)} // yalnızca ilgili index'i güncelle
                                />
                            </label>
                        </div>
                    ))}

                    <button type="button" className="flex items-center gap-2" onClick={handleAddAnotherImage}>
                        <div>
                            <FaCamera size={24} />
                        </div>
                        <div>
                            <span>Resim Ekle</span>
                        </div>
                    </button>

                    {videos.map((video, index) => (
                        <div key={`video-${index}`} className="relative items-center">
                            <Input
                                size="wfull"
                                placeholder={`Video ${index + 1}`}
                                value={video}
                                onChange={(e) => handleVideoChange(e.target.value, index)}
                            />
                            {videos.length > 0 && (
                                <button
                                    type="button"
                                    className="absolute top-3 right-2 "
                                    onClick={() => handleRemoveVideo(index)}
                                >
                                    <FaTrash />
                                </button>
                            )}
                        </div>
                    ))}

                    <button type="button" className="flex items-center gap-2" onClick={handleAddVideo}>
                        <div>
                            <IoMdVideocam size={24} />
                        </div>
                        <div>
                            <span>Video Ekle</span>
                        </div>
                    </button>

                    <div className='flex pb-5 justify-center gap-4'>
                        <button
                            type='reset'
                            className="bg-gray-700 text-white hover:bg-gray-800 px-4 py-2 rounded-md mt-4"
                            onClick={() => router.push("/user")}
                        >
                            İptal Et
                        </button>
                        <button
                            type="submit"
                            className="bg-gray-700 text-white hover:bg-gray-800 px-4 py-2 rounded-md mt-4"
                        >
                            Blog Gönder
                        </button>

                    </div>
                </form>
            </div>
        </div>
    );
}

export default CreateBlog;
