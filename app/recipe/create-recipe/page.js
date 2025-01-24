"use client";
import React from 'react';
import { FaCamera, FaTrash } from "react-icons/fa";
import Textarea from '@/components/general/Textarea';
import Input from '@/components/general/Input';
import Button from '@/components/general/Button';
import useFormDataStore from '@/store/useFormDataStore';
import { createNewRecipe } from '@/services/recipe';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

function CreateRecipe() {

    const allTools = ["Oven", "Microwave", "Blender", "Pan", "Pot", "Grill"];
    const {
        formData,
        updateField,
        addIngredient,
        removeIngredient,
        updateIngredient,
        addCookingTip,
        removeCookingTip,
        updateCookingTip,
        addTools,
        removeTools,
        updateTools,
        addStep,
        removeStep,
        updateStep,
        addGallery,
        removeGallery,
        updateGallery,
        resetForm,
        setFormData
    } = useFormDataStore();

    const router = useRouter();

    const handleSubmitRecipe = async (e) => {
        e.preventDefault();
        try {
            const response = await createNewRecipe(formData);
            console.log(response);
            if (response.ok) {
                toast.success("Recipe created successfully.");
                setFormData(formData);
                router.push("/user");
                resetForm();
            } else {
                toast.error("An error occurred while creating the recipe.");
            }
        } catch (error) {
            toast.error(error.message);
        }
    };

    return (
        <div className="flex flex-col justify-center items-center">
            <div className='flex justify-center font-bold text-xl pt-4'>
                <h1>CREATE A NEW RECIPE</h1>
            </div>
            <div className='flex flex-col md:flex-row justify-center py-5 px-5 min-h-screen gap-10 w-full'>
                <form aria-required onSubmit={handleSubmitRecipe} className='space-y-10'>
                    <Textarea
                        size="sm"
                        variant="default"
                        placeholder="Write the title of your recipe here."
                        value={formData.title}
                        onChange={(e) => updateField("title", e.target.value)}
                        maxLength="90"
                    />

                    <div className='relative py-2'>
                        <Textarea
                            size="md"
                            variant="default"
                            placeholder="Write the introductory text here where you talk about how delicious your recipe is."
                            value={formData.description}
                            onChange={(e) => updateField("description", e.target.value)}
                            maxLength="1000"
                        />
                    </div>

                    {/* Photo Upload Section */}
                    <div className="relative w-full h-64 border border-black  hover:border-gray-600 border-gray-300 rounded-md flex flex-col items-center justify-center">
                        <label
                            htmlFor="photo-upload"
                            className="flex flex-col items-center justify-center cursor-pointer"
                        >
                            {formData.thumbnail ? (
                                <div className="w-full h-auto flex flex-col items-center justify-center">
                                    <img
                                        src={formData.thumbnail}
                                        alt="Uploaded"
                                        className="w-20 h-20 object-cover rounded-md"
                                    />
                                    <p className="text-gray-700 dark:text-gray-100 font-medium mt-2">
                                        {formData.thumbnail} {/* Display the image file name */}
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
                            onChange={(e) => updateField('thumbnail', e.target.files[0])}
                        />
                    </div>

                    <div className='flex flex-col gap-4'>
                        <h2 className='text-lg'>Nutritional values</h2>
                        <div className='flex flex-wrap justify-between gap-4 px-4 py-10 border border-gray-400  rounded-md'>
                            <div>
                                <h3 className='flex items-center justify-center mb-2'>Calori</h3>
                                <Input
                                    type='number'
                                    size="sm"
                                    min="0"
                                    variant="default"
                                    placeholder='0 (cal)'
                                    value={formData.nutrition.calories}
                                    onChange={(e) => updateField('nutrition.calories', e.target.value)}
                                />
                            </div>
                            <div>
                                <h3 className='flex items-center justify-center mb-2'>Fats</h3>
                                <Input
                                    type="number"
                                    size="sm"
                                    variant="default"
                                    min="0"
                                    placeholder="0 (g)"
                                    value={formData.nutrition.fats}
                                    onChange={(e) => updateField('nutrition.fats', e.target.value)}
                                />
                            </div>
                            <div>
                                <h3 className='flex items-center justify-center mb-2'>Protein</h3>
                                <Input
                                    type="number"
                                    size="sm"
                                    min="0"
                                    variant="default"
                                    placeholder="0 (g)"
                                    value={formData.nutrition.proteins}
                                    onChange={(e) => updateField('nutrition.proteins', e.target.value)}
                                />
                            </div>
                            <div>
                                <h3 className='flex items-center justify-center mb-2'>Carbohydrate</h3>
                                <Input
                                    type="number"
                                    size="sm"
                                    min="0"
                                    variant="default"
                                    placeholder="0 (g)"
                                    value={formData.nutrition.carbonhydrates}
                                    onChange={(e) => updateField('nutrition.carbonhydrates', e.target.value)}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Form Inputs Section */}
                    <div className="flex flex-col sm:flex-row gap-4 border border-gray-400   py-10 sm:py-5 md:py-10 rounded-md">
                        {/* Portion */}
                        <div className="flex flex-col items-center gap-2 w-full sm:w-1/3">
                            <h3>People</h3>
                            <div className="flex flex-col sm:flex-row justify-start space-x-0 md:space-y-0 space-y-3 sm:space-x-4">
                                <Input
                                    type="number"
                                    size="xs"
                                    variant="default"
                                    min="1"
                                    placeholder="0"
                                    value={formData.portion}
                                    onChange={(e) => updateField('portion', e.target.value)}
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
                                    variant="default"
                                    min="1"
                                    placeholder="0"
                                    value={formData.preparing_time}
                                    onChange={(e) => updateField('preparing_time', e.target.value)}
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
                                    variant="default"
                                    min="1"
                                    placeholder="0"
                                    value={formData.cooking_time}
                                    onChange={(e) => updateField('cooking_time', e.target.value)}
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

                    <div>
                        {formData.tools.map((tool, index) => (
                            <div key={index} className="flex gap-4 my-3">
                                <select
                                    value={tool}
                                    onChange={(e) => updateTools(index, e.target.value)}
                                    className="w-full sm:w-1/4 border border-gray-300 rounded-md p-2"
                                >
                                    <option disabled value="">
                                        Select Tool
                                    </option>
                                    {allTools.map((toolOption, toolIndex) => (
                                        <option key={toolIndex} value={toolOption}>
                                            {toolOption}
                                        </option>
                                    ))}
                                </select>

                                {formData.tools.length > 1 && (
                                    <button
                                        type="button"
                                        onClick={() => removeTools(index)}
                                        className="text-black dark:text-white px-1 py-1 rounded-md"
                                    >
                                        <FaTrash />
                                    </button>
                                )}
                            </div>
                        ))}

                        <button
                            type="button"
                            onClick={addTools}
                            className="mt-2 text-white bg-gray-700 hover:bg-gray-800 px-4 py-2 rounded-md"
                        >
                            Add Tool
                        </button>
                    </div>


                    {/* Ingredients Section */}
                    <div>
                        <div className='text-lg pb-3'>Ingredients</div>
                        <div className='border border-gray-400 rounded-md p-1'>
                            {formData.ingredients.map((ingredient, index) => (
                                <div key={index} className="flex gap-4 my-3 flex-col  sm:flex-row">
                                    <Input
                                        type="text"
                                        size="lg"
                                        name="name"
                                        value={ingredient.name}
                                        placeholder="Ingredient"
                                        onChange={(e) => updateIngredient(index, 'name', e.target.value)}
                                    />
                                    <Input
                                        type="number"
                                        size="lg"
                                        min="1"
                                        name="amount"
                                        value={ingredient.amount}
                                        placeholder="Amount"
                                        onChange={(e) => updateIngredient(index, 'amount', e.target.value)}
                                    />
                                    <Input
                                        type="text"
                                        size="lg"
                                        name="unit"
                                        value={ingredient.unit}
                                        placeholder="Unit"
                                        onChange={(e) => updateIngredient(index, 'unit', e.target.value)}
                                    />
                                    {formData.ingredients.length > 1 && (
                                        <button
                                            type="button"
                                            onClick={() => removeIngredient(index)}
                                            className="text-black dark:text-white px-1 py-1 rounded-md"
                                        >
                                            <FaTrash />
                                        </button>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <button
                            type="button"
                            onClick={addIngredient}
                            className="text-white bg-gray-700 hover:bg-gray-800 px-4 py-2 rounded-md"
                        >
                            Add Ingredient
                        </button>
                    </div>

                    {/* Cooking Tips Section */}
                    <div className="py-3">
                        <h3 className='text-lg'>How to do?</h3>
                        {formData.cookingTips.map((tip, index) => (
                            <div key={index} className="flex flex-col gap-4 my-3">
                                <div className="flex justify-start items-center gap-4">
                                    <div>
                                        <input
                                            className="py-2 px-2 border border-gray-100 shadow-sm rounded-md"
                                            placeholder="Step Title"
                                            value={tip.title}
                                            onChange={(e) => updateCookingTip(index, 'title', e.target.value)}
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
                                            onChange={(e) => updateCookingTip(index, 'photoUrl', URL.createObjectURL(e.target.files[0]))}
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
                                            value={tip.description}
                                            onChange={(e) => updateCookingTip(index, 'description', e.target.value)}
                                            maxLength="1000"
                                        />
                                        {formData.cookingTips.length > 1 && (
                                            <button
                                                type="button"
                                                onClick={() => removeCookingTip(index)}
                                                className="absolute top-2 right-2 text-black dark:text-white px-1 py-1 rounded-md"
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
                            onClick={addCookingTip}
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
                            value={formData.videoUrl}
                            onChange={(e) => updateField('videoUrl', e.target.value)}
                        />
                    </div>

                    <div className="flex flex-col gap-4">
                        {/* Gallery Title */}
                        <h3 className="text-lg font-bold flex justify-start text-center">Gallery</h3>
                        {formData.gallery.length > 0 && (
                            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                                {formData.gallery.map((image, index) => (
                                    <div key={index} className="relative group">
                                        <label htmlFor={`photo-upload-${index}`} className="relative cursor-pointer w-32 h-32 rounded-md flex flex-col items-center justify-center">
                                            {image.imageUrl ? (
                                                <div className="w-full h-auto flex flex-col items-center justify-center">
                                                    <img
                                                        src={image.imageUrl}
                                                        alt={`Gallery ${index}`}
                                                        className="w-full h-32 object-cover rounded-md"
                                                    />
                                                    <button
                                                        type="button"
                                                        onClick={() => removeGallery(index)}
                                                        className="absolute top-3 right-2"
                                                    >
                                                        <FaTrash />
                                                    </button>
                                                </div>
                                            ) : (
                                                <div className="w-full md:h-32 h-20 flex items-center justify-center border-2  rounded-md cursor-pointer">
                                                    <label
                                                        htmlFor={`photo-upload-${index}`}
                                                        className="flex items-center justify-center cursor-pointer w-full h-full"
                                                    >
                                                        <div className="bg-gray-800 w-10 h-10 rounded-md flex items-center justify-center">
                                                            <FaCamera className="text-white" size={16} />
                                                        </div>
                                                    </label>
                                                </div>
                                            )}
                                            {formData.gallery.length > 1 && (
                                                <button
                                                    type="button"
                                                    onClick={() => removeGallery(index)}
                                                    className="absolute top-3 right-2"
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

                        {/* Add Photo Button */}
                        <div className="text-center flex justify-start">
                            <button
                                type="button"
                                onClick={addGallery}
                                className="mt-4 text-white bg-gray-700 hover:bg-gray-800 px-6 py-2 rounded-md"
                            >
                                Add Photo
                            </button>

                        </div>
                    </div>

                    {/* Submit Button */}
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
                        >Submit</Button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CreateRecipe;