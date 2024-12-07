import FeaturedCategory from '@/components/featured-category'
import React from 'react'

function CategoryContainer({ categories }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {categories.map((category) => {
                <FeaturedCategory key={category.id} category={category} />

            })}
        </div>
    )
}


export default CategoryContainer