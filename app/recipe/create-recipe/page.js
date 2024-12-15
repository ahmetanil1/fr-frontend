
"use client";
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { FaC, FaCamera } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa";
import config from "@/config.json";
import { useRouter } from 'next/navigation';
import { images } from '@/next.config';

function CreateRecipe() {
    const [steps, setSteps] = useState([""]); // Initially one empty step
    const [imageUrls, setImageUrls] = useState(['']);
    const [videoUrls, setVideoUrls] = useState(['']);
    const [text, setText] = useState("");
    const [text2, setText2] = useState("");
    const [text3, setText3] = useState("");
    const [ingredients, setIngredients] = useState([{ name: "", amount: "", unit: "" }]); // Initially one empty ingredient 
    const [cookingTips, setCookingTips] = useState([{ description: '', photoUrl: '' }]); // Yeni state ekledik
    const [servingTime, setServingTime] = useState("");
    const [portion, setPortion] = useState("");
    const [cookingTime, setCookingTime] = useState("");
    const [imageName, setImageName] = useState('');
    const [calories, setCalories] = useState("");
    const [fats, setFats] = useState("");
    const [proteins, setProteins] = useState("");
    const [carbs, setCarbs] = useState("");
    const [imagesGallery, setImagesGallery] = useState(['']);
    const router = useRouter();
    // Pişirme ve püf noktaları açıklama ve fotoğraf ekleme


    const allTools = ["Fırın", "Mikrodalga", "Blender", "Tava", "Tencere", "Izgara"];

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
                toast.success("Recipe created successfully");
            } else {
                toast.error("Recipe creation failed");
            }
        } catch (error) {
            console.log(error);
        }
    };

    const handleTextChange = (e) => setText(e.target.value);
    const handleTextChange2 = (e) => setText2(e.target.value);
    const handleTextChange3 = (e) => setText3(e.target.value);


    const addNewStep = () => {
        setSteps([...steps, ""]);
    };

    const handleCalories = (e) => {
        setCalories(e.target.value);
    }
    const handleFats = (e) => {
        setFats(e.target.value);
    }
    const handleProteins = (e) => {
        setProteins(e.target.value);
    }
    const handleCarbs = (e) => {
        setCarbs(e.target.value);
    }

    const handleStepChange = (index, value) => {
        const updatedSteps = [...steps];
        updatedSteps[index] = value;
        setSteps(updatedSteps);
    };

    const removeStep = (index) => {
        const updatedSteps = steps.filter((_, i) => i !== index);
        setSteps(updatedSteps);
    };

    const getAvailableTools = (currentIndex) => {
        return allTools.filter((tool) => !steps.includes(tool) || steps[currentIndex] === tool);
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


    const handleAddVideo = () => {
        setVideoUrls([...videoUrls, '']);
    };



    const handleIngredientChange = (index, e) => {
        const updatedIngredients = [...ingredients];
        updatedIngredients[index][e.target.name] = e.target.value;
        setIngredients(updatedIngredients);
    };

    const handleAddIngredient = () => {
        setIngredients([...ingredients, { name: "", amount: "", unit: "" }]);
    };

    const handleRemoveIngredient = (index) => {
        const updatedIngredients = ingredients.filter((_, i) => i !== index);
        setIngredients(updatedIngredients);
    };


    const handleAddCookingTip = () => {
        setCookingTips([...cookingTips, { description: '', photoUrl: '' }]);
    };

    const handleRemoveCookingTip = (index) => {
        const updatedCookingTips = cookingTips.filter((_, i) => i !== index);
        setCookingTips(updatedCookingTips);
    };

    const handleImageCookingTips = (e, index) => {
        const updatedCookingTips = [...cookingTips];
        updatedCookingTips[index].photoUrl = URL.createObjectURL(e.target.files[0]);
        setCookingTips(updatedCookingTips);
    };

    const handleAddImagesGallery = () => {
        setImagesGallery([...imagesGallery, '']);
    }
    const handleRemoveImagesGallery = (index) => {
        setImagesGallery(imagesGallery.filter((_, i) => i !== index));
    }

    const handleServingTime = (e) => {
        setServingTime(e.target.value);
    }

    const handlePortion = (e) => {
        setPortion(e.target.value);
    }
    const handleCookingTime = (e) => {
        setCookingTime(e.target.value);
    }

    return (
        <div className="flex flex-col justify-center items-center  ">
            <div className='flex justify-center font-bold text-xl pt-4'>
                <h1>YENİ TARİF OLUŞTUR</h1>
            </div>
            <div className='flex flex-col md:flex-row justify-center  py-5 px-5 min-h-screen gap-10 w-full '>
                <form onSubmit={handleSubmit} className='space-y-10'>
                    <div className="relative">
                        <textarea
                            className="w-full px-2 py-2 h-12 text-xl border hover:border-dashed hover:border-gray-600 rounded-md"
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
                            className='w-full px-2 text-sm py-2 h-24 border hover:border-dashed hover:border-gray-600 '
                            placeholder='Tarifinizin ne kadar lezzetli olduğundan bahsettiğiniz giriş metnini buraya yazın.'
                            maxLength="1000"
                            value={text2}
                            onChange={handleTextChange2}
                        ></textarea>
                        <span className="absolute right-2 bottom-3 text-sm text-gray-500">
                            {1000 - text2.length}
                        </span>
                    </div>

                    {/* Photo Upload Section */}
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
                                </div>
                            ) : (
                                <>
                                    <div className="bg-gray-800 dark:bg-gray-100 w-20 h-20 rounded-full flex items-center justify-center">
                                        <FaCamera className="text-white dark:text-gray-800" size={36} />
                                    </div>
                                    <div>
                                        <p className="text-gray-700 dark:text-gray-100 font-medium mt-2">
                                            Tarifinizin fotoğrafını ekleyin.
                                        </p>
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

                    <div className='flex flex-col gap-4'>
                        <h2 className='text-lg'>Besin değerleri</h2>
                        <div className='flex justify-between gap-4 px-4 py-10  border border-gray-400 hover:border-gray-600 rounded-md border-dashed'>
                            <div>
                                <h3 className='flex items-center justify-center mb-2'>Kalori</h3>
                                <input
                                    type='number'
                                    className='w-32 h-8 px-2'
                                    placeholder='0 (cal)'
                                    value={calories}
                                    onChange={handleCalories}
                                    name='calories'
                                    min="1"
                                    id='calories'
                                    typeof="number"
                                />
                            </div>
                            <div>
                                <h3 className='flex items-center justify-center mb-2'>Yağ</h3>
                                <input
                                    type='number'
                                    className='w-32 h-8 px-2'
                                    placeholder='0 (g)'
                                    value={fats}
                                    onChange={handleFats}
                                    name='fats'
                                    min="1"
                                    id='fats'
                                    typeof="number"
                                />
                            </div>
                            <div>
                                <h3 className='flex items-center justify-center mb-2'>Protein</h3>
                                <input
                                    type='number'
                                    className='w-32 h-8 px-2'
                                    placeholder='0 (g)'
                                    value={proteins}
                                    onChange={handleProteins}
                                    name='proteins'
                                    min="1"
                                    id='proteins'
                                    typeof="number"
                                />
                            </div>
                            <div>
                                <h3 className='flex items-center justify-center mb-2'>Karbonhidrat</h3>
                                <input
                                    type='number'
                                    className='w-32 h-8 px-2'
                                    placeholder='0 (g)'
                                    value={carbs}
                                    onChange={handleCarbs}
                                    name='carbs'
                                    min="1"
                                    id='carbs'
                                    typeof="number"
                                />
                            </div>
                        </div>
                    </div>


                    {/* Form Inputs Section */}
                    <div className="flex flex-col sm:flex-row gap-4 border border-gray-300 hover:border-dashed hover:border-gray-600 py-10 sm:py-5 md:py-10 rounded-md">
                        {/* Portion */}
                        <div className="flex flex-col items-center gap-2 w-full sm:w-1/3">
                            <h3>Kaç kişilik</h3>
                            <div className="flex flex-col sm:flex-row justify-start space-x-0 md:space-y-0 space-y-3 sm:space-x-4">
                                <input
                                    type="number"
                                    className="w-16 h-8 px-2 "
                                    typeof="number"
                                    id="portion"
                                    onChange={handlePortion}
                                    name="portion"
                                    min="1"
                                    placeholder="0"
                                    value={portion}
                                />
                                <select className="w-32 h-8 px-2" defaultValue="PORSİYON">
                                    <option disabled value="PORSİYON">PORSİYON</option>
                                    <option value="1-2">1-2</option>
                                    <option value="3-4">3-4</option>
                                    <option value="5-6">5-6</option>
                                    <option value="7-8">7-8</option>
                                    <option value="9+">9+</option>
                                </select>
                            </div>
                        </div>

                        {/* Preparation Time */}
                        <div className="flex flex-col items-center gap-2 w-full sm:w-1/3">
                            <h3>Hazırlanma Süresi</h3>
                            <div className="flex flex-col sm:flex-row justify-start md:space-y-0 space-y-3 space-x-0 sm:space-x-4">
                                <input
                                    type="number"
                                    className="w-16 h-8 px-2"
                                    typeof="number"
                                    id="servingTime"
                                    onChange={handleServingTime}
                                    name="servingTime"
                                    min="1"
                                    placeholder="0"
                                    value={servingTime}
                                />
                                <select className="w-32 h-8 px-2" defaultValue="SÜRE">
                                    <option disabled value="SÜRE">SÜRE</option>
                                    <option value="Gün">Gün</option>
                                    <option value="Saat">Saat</option>
                                    <option value="Dakika">Dakika</option>
                                    <option value="Saniye">Saniye</option>
                                </select>
                            </div>
                        </div>

                        {/* Cooking Time */}
                        <div className="flex flex-col items-center gap-2 w-full sm:w-1/3">
                            <h3>Pişme Süresi</h3>
                            <div className="flex flex-col sm:flex-row justify-start md:space-y-0 space-y-3 space-x-0 sm:space-x-4">
                                <input
                                    type="number"
                                    className="w-16 h-8 px-2"
                                    typeof="number"
                                    id="cookingtime"
                                    onChange={handleCookingTime}
                                    name="cookingtime"
                                    min="1"
                                    placeholder="0"
                                    value={cookingTime}
                                />
                                <select className="w-32 h-8 px-2" defaultValue="SÜRE">
                                    <option disabled value="SÜRE">SÜRE</option>
                                    <option value="Gün">Gün</option>
                                    <option value="Saat">Saat</option>
                                    <option value="Dakika">Dakika</option>
                                    <option value="Saniye">Saniye</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Steps Section */}
                    <div>
                        {steps.map((step, index) => (
                            <div key={index} className="flex items-center gap-4 my-3">
                                <select
                                    value={step}
                                    onChange={(e) => handleStepChange(index, e.target.value)}
                                    className="w-full sm:w-1/2 border border-gray-300 rounded-md p-2"
                                >
                                    <option value="" disabled>Alet Seçin</option>
                                    {getAvailableTools(index).map((tool) => (
                                        <option key={tool} value={tool}>
                                            {tool}
                                        </option>
                                    ))}
                                </select>
                                {steps.length > 1 && (
                                    <button
                                        onClick={() => removeStep(index)}
                                        className="text-black dark:text-white px-1 py-1 rounded-md"
                                    >
                                        <FaTrash />
                                    </button>
                                )}
                            </div>
                        ))}
                        <button
                            onClick={addNewStep}
                            className="mt-2 text-white bg-gray-700 hover:bg-gray-800 px-4 py-2 rounded-md"
                        >
                            Adım Ekle
                        </button>
                    </div>

                    {/* Ingredients Section */}
                    <div>
                        <div className='text-lg'>Malzemeler</div>
                        {ingredients.map((ingredient, index) => (
                            <div key={index} className="flex gap-4 my-3 flex-col sm:flex-row">
                                <input
                                    type="text"
                                    name="name"
                                    value={ingredient.name}
                                    placeholder="Malzeme adı"
                                    onChange={(e) => handleIngredientChange(index, e)}
                                    className="w-full sm:w-1/3 border border-gray-300 rounded-md p-2"
                                />
                                <input
                                    type="number"
                                    name="amount"
                                    value={ingredient.amount}
                                    placeholder="Miktar"
                                    onChange={(e) => handleIngredientChange(index, e)}
                                    className="w-full sm:w-1/3 border border-gray-300 rounded-md p-2"
                                />
                                <input
                                    type="text"
                                    name="unit"
                                    value={ingredient.unit}
                                    placeholder="Birim"
                                    onChange={(e) => handleIngredientChange(index, e)}
                                    className="w-full sm:w-1/3 border border-gray-300 rounded-md p-2"
                                />
                                {ingredients.length > 1 && (
                                    <button
                                        type="button"
                                        onClick={() => handleRemoveIngredient(index)}
                                        className="text-black dark:text-white px-1 py-1 rounded-md"
                                    >
                                        <FaTrash />
                                    </button>
                                )}
                            </div>
                        ))}
                    </div>

                    <div>
                        <button
                            type="button"
                            onClick={handleAddIngredient}
                            className="text-white bg-gray-700 hover:bg-gray-800 px-4 py-2 rounded-md"
                        >
                            Malzeme Ekle
                        </button>
                    </div>

                    {/* Cooking Tips Section */}
                    <div className="py-3">
                        <h3 className='text-lg'>Nasıl Yapılır?</h3>
                        {cookingTips.map((tip, index) => (
                            <div key={index} className="flex flex-col gap-4 my-3">
                                <div className="flex justify-start items-center gap-4">
                                    <div>
                                        <input
                                            className="py-2 px-2 border border-gray-100 shadow-sm rounded-md"
                                            placeholder="Adım Başlığı"
                                        />
                                    </div>
                                    <div className="relative w-12 h-12 rounded-full flex items-center justify-center">
                                        <label
                                            htmlFor={`photo-upload-${index}`}
                                            className="flex items-center justify-center cursor-pointer w-full h-full"
                                        >
                                            <div className="bg-gray-800 w-10 h-10 rounded-full flex items-center justify-center">
                                                <FaCamera className="text-white" size={14} />
                                            </div>
                                        </label>
                                        <input
                                            id={`photo-upload-${index}`}
                                            type="file"
                                            accept="image/*"
                                            className="sr-only"
                                            onChange={(e) => handleImageCookingTips(e, index)}
                                        />
                                        {tip.photoUrl && (
                                            <img
                                                src={tip.photoUrl}
                                                alt={`Cooking Tip ${index}`}
                                                className="absolute inset-0 w-full h-full object-cover"
                                            />
                                        )}
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 w-full">
                                    <div className="relative w-full">
                                        <textarea
                                            name="description"
                                            placeholder="Adım açıklaması"
                                            value={text3}
                                            maxLength={1000}
                                            onChange={handleTextChange3}
                                            className="w-full border border-gray-300 rounded-md p-2"
                                        />
                                        <span className="absolute right-2 bottom-2 text-sm text-gray-500">
                                            {1000 - text3.length}
                                        </span>
                                    </div>
                                    {cookingTips.length > 1 && (
                                        <button
                                            type="button"
                                            onClick={() => handleRemoveCookingTip(index)}
                                            className="text-black dark:text-white px-1 py-1 rounded-md"
                                        >
                                            <FaTrash />
                                        </button>
                                    )}
                                </div>
                            </div>
                        ))}
                        <button
                            type="button"
                            onClick={handleAddCookingTip}
                            className="mt-2 text-white bg-gray-700 hover:bg-gray-800 px-4 py-2 rounded-md"
                        >
                            Adım Ekle
                        </button>
                    </div>

                    {/* Video URL Section */}
                    <div>
                        <h3 className="py-4 text-lg">Video URL</h3>
                        <input
                            className="py-2 px-2 w-full"
                            placeholder="Tarifinizin video linkini buraya ekleyebilirsiniz."
                            onChange={handleAddVideo}
                        />
                    </div>

                    <div className="flex flex-col gap-4">
                        {/* Galeri Başlığı */}
                        <h3 className="text-lg font-bold flex justify-start text-center">Galeri</h3>

                        {/* Resim Kutuları */}
                        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                            {imagesGallery.map((image, index) => (
                                <div key={index} className="relative group">
                                    {image.imageUrl > 1 ? (
                                        <div className="relative">
                                            <input
                                                id={`photo-upload-${index}`}
                                                type="file"
                                                accept="image/*"
                                                className="sr-only"
                                                onChange={(e) => handleAddImagesGallery(e, index)}
                                            />
                                            {image.photoUrl && (
                                                <img
                                                    src={image.photoUrl}
                                                    alt={`Cooking Tip ${index}`}
                                                    className="absolute inset-0 w-full h-full object-cover"
                                                />
                                            )}
                                        </div>
                                    ) : (
                                        <div className="w-32 h-32 flex items-center justify-center border-2 border-dashed rounded-md cursor-pointer">
                                            <label
                                                htmlFor={`photo-upload-${index}`}
                                                className="flex items-center justify-center cursor-pointer w-full h-full"
                                            >
                                                <div className="bg-gray-800 w-10 h-10 rounded-md  flex items-center justify-center">
                                                    <FaCamera className="text-white" size={16} />
                                                </div>
                                            </label>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Fotoğraf Ekle Butonu */}
                        <div className="text-center flex justify-start">
                            <button
                                type="button"
                                onClick={handleAddImagesGallery}
                                className="mt-4 text-white bg-gray-700 hover:bg-gray-800 px-6 py-2 rounded-md"
                            >
                                Fotoğraf Ekle
                            </button>
                        </div>
                    </div>



                    {/* Submit Button */}
                    <div className="flex justify-center gap-4">
                        <button
                            type='reset'
                            className="bg-gray-700 text-white hover:bg-gray-800 px-4 py-2 rounded-md mt-4"
                            onClick={() => router.push("/recipe")}
                        >
                            İptal Et
                        </button>
                        <button className="bg-gray-700 text-white hover:bg-gray-800 px-4 py-2 rounded-md mt-4">
                            Onay Butonu
                        </button>
                    </div>
                </form>



            </div>
        </div>
    );
}

export default CreateRecipe;
