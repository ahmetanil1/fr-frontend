"use client";
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { FaCamera } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa";
import config from "@/config.json";

function CreateRecipe() {
    const [steps, setSteps] = useState([""]); // Initially one empty step
    const [imageUrls, setImageUrls] = useState(['']);
    const [videoUrls, setVideoUrls] = useState(['']);
    const [text, setText] = useState("");
    const [text2, setText2] = useState("");
    const [text3, setText3] = useState("");
    const [ingredients, setIngredients] = useState([{ name: "", amount: "", unit: "" }]); // Initially one empty ingredient 
    const [cookingTips, setCookingTips] = useState([{ description: '', photoUrl: '' }]); // Yeni state ekledik

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

    const handleImageChange = (e, index) => {
        const updatedImageUrls = [...imageUrls];
        updatedImageUrls[index] = e.target.value;
        setImageUrls(updatedImageUrls);
    };

    const handleAddImage = () => {
        setImageUrls([...imageUrls, '']);
    };

    const handleRemoveImage = (index) => {
        const updatedImageUrls = imageUrls.filter((_, i) => i !== index);
        setImageUrls(updatedImageUrls);
    };

    const handleAddVideo = () => {
        setVideoUrls([...videoUrls, '']);
    };

    const handleVideoChange = (e, index) => {
        const updatedVideoUrls = [...videoUrls];
        updatedVideoUrls[index] = e.target.value;
        setVideoUrls(updatedVideoUrls);
    };

    const handleRemoveVideo = (index) => {
        const updatedVideoUrls = videoUrls.filter((_, i) => i !== index);
        setVideoUrls(updatedVideoUrls);
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

    const handleCookingTipChange = (index, e) => {
        const updatedCookingTips = [...cookingTips];
        updatedCookingTips[index][e.target.name] = e.target.value;
        setCookingTips(updatedCookingTips);
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

    return (
        <div>
            <div className="flex flex-col ">
                <div>
                    <div className='flex justify-center font-bold text-xl pt-4'>
                        <h1>CREATE A NEW RECIPE</h1>
                    </div>
                    <div className='flex flex-col md:flex-row justify-between py-5 px-5 min-h-screen gap-10 '>
                        <form onSubmit={handleSubmit} className='flex flex-col px-4 py-4 space-y-3 w-full '>
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
                                    value={text2}
                                    onChange={handleTextChange2}
                                ></textarea>
                                <span className="absolute right-2 bottom-3 text-sm text-gray-500">
                                    {1000 - text2.length}
                                </span>
                            </div>

                            {/* Image Upload Section */}
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

                            <div>
                                {steps.map((step, index) => (
                                    <div key={index} className="flex items-center gap-4 my-3">
                                        <select
                                            value={step}
                                            onChange={(e) => handleStepChange(index, e.target.value)}
                                            className="w-1/2 border border-gray-300 rounded-md p-2"
                                        >
                                            <option value="" disabled>Alet Seçin</option>
                                            {getAvailableTools(index).map((tool) => (
                                                <option key={tool} value={tool}>
                                                    {tool}
                                                </option>
                                            ))}
                                        </select>
                                        {/* Silme butonunu sadece bir adım varsa gizleyin */}
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
                                <div>Malzemeler</div>
                                {ingredients.map((ingredient, index) => (
                                    <div key={index} className="flex gap-4 my-3">
                                        <input
                                            type="text"
                                            name="name"
                                            value={ingredient.name}
                                            placeholder="Malzeme adı"
                                            onChange={(e) => handleIngredientChange(index, e)}
                                            className="w-1/3 border border-gray-300 rounded-md p-2"
                                        />
                                        <input
                                            type="number"
                                            name="amount"
                                            value={ingredient.amount}
                                            placeholder="Miktar"
                                            onChange={(e) => handleIngredientChange(index, e)}
                                            className="w-1/3 border border-gray-300 rounded-md p-2"
                                        />
                                        <input
                                            type="text"
                                            name="unit"
                                            value={ingredient.unit}
                                            placeholder="Birim"
                                            onChange={(e) => handleIngredientChange(index, e)}
                                            className="w-1/3 border border-gray-300 rounded-md p-2"
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
                                    className="mt-2 text-white bg-gray-700 hover:bg-gray-800 px-4 py-2 rounded-md"
                                >
                                    Add Ingredient
                                </button>
                            </div>


                            <div className='py-3'>
                                <h3 >Pişirme ve Püf Noktaları</h3>
                                {cookingTips.map((tip, index) => (
                                    <div key={index} className="flex flex-col gap-4 my-3">
                                        <div className="flex items-center gap-4 w-full">  {/* Make sure the parent div also takes full width */}
                                            <div className='relative w-full'>  {/* Set relative and full width on the container */}
                                                <textarea
                                                    name="description"
                                                    placeholder="Püf noktası açıklaması"
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


                                        <div className="relative w-full h-64 border border-dashed rounded-md flex flex-col items-center justify-center">
                                            <label
                                                htmlFor={`photo-upload-${index}`}
                                                className="flex flex-col items-center justify-center cursor-pointer"
                                            >
                                                <div className="bg-gray-800 w-20 h-20 rounded-full flex items-center justify-center">
                                                    <FaCamera className="text-white" size={36} />
                                                </div>
                                                <p className="text-gray-700 font-medium mt-2">
                                                    Fotoğraf Yükleyin
                                                </p>
                                            </label>
                                            <input
                                                id={`photo-upload-${index}`}
                                                type="file"
                                                accept="image/*"
                                                className="sr-only"
                                                onChange={(e) => handleImageChange(e, index)}
                                            />
                                            {tip.photoUrl && (
                                                <img
                                                    src={tip.photoUrl}
                                                    alt={`Cooking Tip ${index}`}
                                                    className="mt-2 w-full max-h-48 object-cover"
                                                />
                                            )}
                                        </div>
                                    </div>
                                ))}
                                <button
                                    type="button"
                                    onClick={handleAddCookingTip}
                                    className="mt-2 text-white bg-gray-700 hover:bg-gray-800 px-4 py-2 rounded-md"
                                >
                                    Add Section
                                </button>
                            </div>


                        </form>

                        <div className='border-2 w-full md:w-96 rounded-md h-auto md:h-80 shadow-sm dark:border-gray-800 py-4'>
                            Onay Butonu
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateRecipe;
