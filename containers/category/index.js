"use client";
import FeaturedCategory from '@/components/featured-category'
import React, { useEffect, useState } from 'react'
import { getCategories } from '@/services/categories';


function CategoryContainer() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            const data = await getCategories();
            if (data) {
                setCategories(data);
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
                            <FeaturedCategory category={category} />
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default CategoryContainer