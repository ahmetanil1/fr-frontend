"use client"
import FeaturedRecipe from '@/components/featured-recipe';
import React from 'react';
import { useRouter } from 'next/navigation';



function RecipePage() {
    const router = useRouter();

    return (
        <div className='flex flex-col'>
            <div className='flex justify-center my-5 gap-4'>
                <button
                    onClick={() => router.push("/recipe/create-recipe")}
                    className="block text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-black-300 font-medium rounded-lg text-sm w-36 px-5 py-2.5 text-center dark:bg-gray-200 dark:text-gray-700 dark:hover:bg-gray-300 dark:focus:ring-black-800"
                    type="button">
                    Create Recipe
                </button>
                <button
                    onClick={() => router.push("/recipe/create-blog")}
                    className="block text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-black-300 font-medium rounded-lg text-sm w-36 px-5 py-2.5 text-center dark:bg-gray-200 dark:text-gray-700 dark:hover:bg-gray-300 dark:focus:ring-black-800"
                    type="button">
                    Create Blog
                </button>
            </div>

            <div>
                <FeaturedRecipe />
            </div>

        </div>
    );
}

export default RecipePage;