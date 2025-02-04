import { fetchAllRecipes } from '@/services/recipe'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { GiRoundStar } from 'react-icons/gi';

async function MostPopular() {
    const response = await fetchAllRecipes();
    const recipes = response?.data || [];

    // Sort recipes by rating in descending order
    const topRatedRecipes = recipes.sort((a, b) => (b.rating || 0) - (a.rating || 0)).slice(0, 6);

    const formatCookingTime = (minutes) => {
        if (minutes >= 60) {
            const hours = Math.floor(minutes / 60);
            const remainingMinutes = minutes % 60;
            return remainingMinutes > 0 ? `${hours} h ${remainingMinutes} min` : `${hours} sa`;
        }
        return `${minutes} min`;
    };

    // Function to calculate the fill percentage for a single star based on the rating
    const getStarFillPercentage = (rating) => {
        const percentage = (rating / 5) * 100; // Max rating is 5 stars, so 100% is 5 stars
        return percentage;
    };

    // Function to render the star with its fill percentage
    const renderStar = (rating) => {
        const percentage = getStarFillPercentage(rating);
        const filledWidth = `${percentage}%`; // The filled width based on the rating

        return (
            <div className="flex items-center">
                <GiRoundStar size={16} className='text-yellow-300' />
                <span className="ml-1 text-yellow-300 text-sm">{((rating / 25) * 5).toFixed(1)} / 5</span>
            </div>
        );
    };

    return (
        <div className='flex flex-wrap gap-10 px-10 w-full'>
            {topRatedRecipes.length > 0 ? topRatedRecipes.map((recipe) => (
                <div key={recipe._id} className="relative w-[325px] bg-white rounded-2xl shadow-md overflow-hidden group">
                    <Link href={`/recipe/${recipe._id}`} passHref>
                        <div className="relative w-full h-[180px]">
                            <Image
                                src={recipe?.image_url || "/default-recipe.jpg"}
                                alt={recipe.title || 'Unknown Recipe'}
                                fill
                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>
                    </Link>
                    <hr className="border border-gray-300" />

                    {/* İçerik */}
                    <div className="p-3">
                        {/* Kategori ve Süre */}
                        <div className="flex items-center justify-between text-sm text-gray-600">
                            <div className='flex gap-2'>
                                <span className="bg-yellow-400 text-white px-2 py-1 rounded-lg text-xs font-semibold">{recipe.servings}</span>
                                <span className="bg-yellow-400 text-white px-2 py-1 rounded-lg text-xs font-semibold">{recipe.difficulty}</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <span>{formatCookingTime(recipe.cooking_time)}</span>
                            </div>
                        </div>

                        <h3 className="mt-2 font-semibold text-lg">{recipe.title}</h3>

                        {/* Rating Display */}
                        <div className="absolute top-2 right-2">
                            {renderStar(recipe.rating || 0)}
                        </div>

                        {/* Yazar Bilgisi */}
                        <div className="flex items-center mt-3">
                            <Image
                                src={recipe?.author?.profileImage || "/default-avatar.png"}
                                alt={recipe.author?.username || 'Unknown Author'}
                                width={40} // Profil resmi için sabit genişlik
                                height={40} // Profil resmi için sabit yükseklik
                                className="rounded-full"
                            />
                            <span className="ml-2 text-sm text-gray-700">{recipe.author?.username || 'Unknown Author'}</span>
                        </div>
                    </div>
                </div>
            )) : <p>No recommended recipes found.</p>}
        </div>
    );
}

export default MostPopular;
