"use client";
import FeaturedCategory from '@/components/featured-category'
import React, { useEffect, useState } from 'react'
import { getCategories } from '@/services/categories';


function CategoryContainer() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            const response = await getCategories();
            if (response) {
                setCategories(response);
            }
        }
        fetchCategories();
    }, []);
    return (
        <div>
            {categories.length > 0 && (
                <div className='flex flex-row'>
                    {categories.map((category, index) => (
                        <div key={index} className='flex flex-grow'>
                            <FeaturedCategory category={category.data} />
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default CategoryContainer