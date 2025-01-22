
"use client";
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { FaC, FaCamera } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa";
import { useRouter } from 'next/navigation';
import { images } from '@/next.config';
import dotenv from "dotenv"
import { createNewRecipe } from '@/services/recipe';
import Textarea from '@/components/general/Textarea';
import Input from '@/components/general/Input';
import Button from '@/components/general/Button';

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
    const backend_url = process.env.BACKEND_URL;

    const allTools = ["Oven", "Microwave", "Blender", "Pan", "Pot", "Grill"];

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());

        console.log(data);

        try {
            await createNewRecipe(data);
            toast.success("Tarif başarıyla oluşturuldu.");
        } catch (error) {
            console.log(error);
            toast.error("Tarif oluşturulurken bir hata oluştu.");
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
                <h1>CREATE A NEW RECİPE</h1>
            </div>
            <div className='flex flex-col md:flex-row justify-center  py-5 px-5 min-h-screen gap-10 w-full '>
                <form onSubmit={handleSubmit} className='space-y-10'>
                    <Textarea
                        size="sm"
                        placeholder="Title of your recipe "
                        value={text}
                        onChange={handleTextChange}
                        maxLength="90"
                    />

                    <div className='relative py-2'>
                        <Textarea
                            size="md"
                            placeholder="Write the introductory text here where you talk about how delicious your recipe is."
                            value={text2}
                            onChange={handleTextChange2}
                            maxLength="1000"
                        />
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
                                            Add a photo of your recipe.
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
                        <h2 className='text-lg'>Nutritional values</h2>
                        <div className='flex flex-wrap justify-between gap-4 px-4 py-10  border border-gray-400 hover:border-gray-600 rounded-md border-dashed'>
                            <div>
                                <h3 className='flex items-center justify-center mb-2'>Calori</h3>
                                <Input
                                    type='number'
                                    size="sm"
                                    placeholder='0 (cal)'
                                />
                            </div>
                            <div>
                                <h3 className='flex items-center justify-center mb-2'>Fats</h3>
                                <Input
                                    type="number"
                                    size="sm"
                                    placeholder="0 (g)"
                                    min={1}
                                    value={fats}
                                    onChange={handleFats}
                                />
                            </div>
                            <div>
                                <h3 className='flex items-center justify-center mb-2'>Protein</h3>
                                <Input
                                    type="number"
                                    size="sm"
                                    placeholder="0 (g)"
                                    min="1"
                                    value={proteins}
                                    onChange={handleProteins}
                                />
                            </div>
                            <div>
                                <h3 className='flex items-center justify-center mb-2'>Carbohydrate</h3>
                                <Input
                                    type="number"
                                    size="sm"
                                    placeholder="0 (g)"
                                    min="1"
                                    value={carbs}
                                />
                            </div>
                        </div>
                    </div>


                    {/* Form Inputs Section */}
                    <div className="flex flex-col sm:flex-row gap-4 border border-gray-300 hover:border-dashed hover:border-gray-600 py-10 sm:py-5 md:py-10 rounded-md">
                        {/* Portion */}
                        <div className="flex flex-col items-center gap-2 w-full sm:w-1/3">
                            <h3>People</h3>
                            <div className="flex flex-col sm:flex-row justify-start space-x-0 md:space-y-0 space-y-3 sm:space-x-4">
                                <Input
                                    type="number"
                                    size="xs"
                                    min="1"
                                    placeholder="0"
                                    value={portion}
                                    onChange={handlePortion}
                                />
                                <select className="w-32 h-8 px-2" defaultValue="Portion">
                                    <option disabled value="Portion">Portion</option>
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
                            <h3>Preparation Time</h3>
                            <div className="flex flex-col sm:flex-row justify-start md:space-y-0 space-y-3 space-x-0 sm:space-x-4">
                                <Input
                                    type="number"
                                    size="xs"
                                    min="1"
                                    placeholder="0"
                                    value={servingTime}
                                    onChange={handleServingTime}
                                />
                                <select className="w-32 h-8 px-2" defaultValue="Time">
                                    <option disabled value="Time">Time</option>
                                    <option value="Day">Day</option>
                                    <option value="Hour">Hour</option>
                                    <option value="Minute">Minute</option>
                                    <option value="Second">Second</option>
                                </select>
                            </div>
                        </div>

                        {/* Cooking Time */}
                        <div className="flex flex-col items-center gap-2 w-full sm:w-1/3">
                            <h3>Cooking Time</h3>
                            <div className="flex flex-col sm:flex-row justify-start md:space-y-0 space-y-3 space-x-0 sm:space-x-4">
                                <Input
                                    type="number"
                                    size="xs"
                                    min="1"
                                    placeholder="0"
                                    value={cookingTime}
                                    onChange={handleCookingTime}
                                />
                                <select className="w-32 h-8 px-2" defaultValue="Time">
                                    <option disabled value="Time">Time</option>
                                    <option value="Day">Day</option>
                                    <option value="Hour">Hour</option>
                                    <option value="Minute">Minute</option>
                                    <option value="Second">Second</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Steps Section */}
                    <div>
                        {steps.map((step, index) => (
                            <div key={index} className=" items-center gap-4 my-3">
                                <select
                                    value={step}
                                    onChange={(e) => handleStepChange(index, e.target.value)}
                                    className="w-full sm:w-1/2 border border-gray-300 rounded-md p-2"
                                >
                                    <option value="" disabled>Choose Tool</option>
                                    {getAvailableTools(index).map((tool) => (
                                        <option key={tool} value={tool}>
                                            {tool}
                                        </option>
                                    ))}
                                </select>
                                {steps.length > 1 && (
                                    <button
                                        onClick={() => removeStep(index)}
                                        className="text-black dark:text-white ml-2 px-1 py-1 rounded-md"
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
                            Add Step
                        </button>
                    </div>

                    {/* Ingredients Section */}
                    <div>
                        <div className='text-lg'>Ingredients</div>
                        {ingredients.map((ingredient, index) => (
                            <div key={index} className="flex gap-4 my-3 flex-col sm:flex-row">
                                <Input
                                    type="text"
                                    size="lg"
                                    name="name"
                                    value={ingredient.name}
                                    placeholder="Ingredient"
                                    onChange={(e) => handleIngredientChange(index, e)}
                                />
                                <Input
                                    type="number"
                                    size="lg"
                                    name="amount"
                                    value={ingredient.amount}
                                    placeholder="Amount"
                                    onChange={(e) => handleIngredientChange(index, e)}
                                />
                                <Input
                                    type="text"
                                    size="lg"
                                    name="unit"
                                    value={ingredient.unit}
                                    placeholder="Unit"
                                    onChange={(e) => handleIngredientChange(index, e)}
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
                            Add Ingredient
                        </button>
                    </div>

                    {/* Cooking Tips Section */}
                    <div className="py-3">
                        <h3 className='text-lg'>How to do?</h3>
                        {cookingTips.map((tip, index) => (
                            <div key={index} className="flex flex-col gap-4 my-3">
                                <div className="flex justify-start items-center gap-4">
                                    <div>
                                        <input
                                            className="py-2 px-2 border border-gray-100 shadow-sm rounded-md"
                                            placeholder="Step Title"
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
                                        <Textarea
                                            size="md"
                                            placeholder="Step Description"
                                            value={text3}
                                            onChange={handleTextChange3}
                                            maxLength="1000"

                                        />
                                        {cookingTips.length > 1 && (
                                            <button
                                                type="button"
                                                onClick={() => handleRemoveCookingTip(index)}
                                                className="absolute top-2 right-2  text-black dark:text-white px-1 py-1 rounded-md"
                                            >
                                                <FaTrash />
                                            </button>
                                        )}
                                    </div>

                                </div>
                            </div>
                        ))}
                        <button
                            type="button"
                            onClick={handleAddCookingTip}
                            className="mt-2 text-white bg-gray-700 hover:bg-gray-800 px-4 py-2 rounded-md"
                        >
                            Add Step
                        </button>
                    </div>

                    {/* Video URL Section */}
                    <div>
                        <h3 className="py-4 text-lg">Video URL</h3>
                        <Input
                            size="wfull"
                            placeholder="Video URL"
                        />
                    </div>

                    <div className="flex flex-col gap-4">
                        {/* Galeri Başlığı */}
                        <h3 className="text-lg font-bold flex justify-start text-center">Gallery</h3>

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
                                Add Photo
                            </button>
                        </div>
                    </div>



                    {/* Submit Button */}
                    <div className="flex justify-center gap-4">
                        <Button
                            type="submit"
                            variant="danger"
                            size="md"
                            className="mt-4"
                        >Cancel</Button>
                        <Button
                            type="submit"
                            variant="default"
                            size="md"
                            className="mt-4"
                        >Submit</Button>
                    </div>
                </form>



            </div>
        </div>
    );
}

export default CreateRecipe;
