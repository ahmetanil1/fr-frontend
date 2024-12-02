import Link from "next/link";
import React from "react";

function HamburgerMenuContent({ onCategoryClick }) {
    const recipeCategories = [
        "Appetizers",
        "Main Courses",
        "Desserts",
        "Salads",
        "Soups",
        "Beverages",
        "Breakfast",
        "Snacks",
        "Vegetarian",
        "Vegan",
        "Gluten-Free",
        "Seafood",
        "Poultry",
        "Meat",
        "Pasta",
        "Rice Dishes",
        "Baking",
        "Grilling",
        "Slow Cooker",
        "Instant Pot",
        "Healthy Recipes",
        "Quick & Easy",
        "International Cuisine",
        "Seasonal Recipes",
    ];

    const chunkArray = (array, chunkSize) => {
        const chunks = [];
        for (let i = 0; i < array.length; i += chunkSize) {
            chunks.push(array.slice(i, i + chunkSize));
        }
        return chunks;
    };

    const chunkedCategories = chunkArray(recipeCategories, 13);

    return (
        <div>
            <h1 className="text-xl font-bold">Recipe Categories</h1>
            <div className="container mx-auto p-4 flex gap-2">
                {chunkedCategories.map((chunk, colIndex) => (
                    <ul key={colIndex} className="list-disc pl-5 list-none ">
                        {chunk.map((category, index) => (
                            <li key={index} onClick={onCategoryClick ? onCategoryClick : undefined}>
                                <Link href="/login" className="flex text-xs  text-gray-500 hover:text-black hover:scale-105 mb-2">
                                    {category}
                                </Link>
                            </li>
                        ))}
                    </ul>
                ))}
            </div>
        </div>
    );
}

export default HamburgerMenuContent;
