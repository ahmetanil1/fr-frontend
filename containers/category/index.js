import FeaturedCategory from '@/components/featured-category'
import React from 'react'

function CategoryContainer({ category }) {
    return (
        <div>
            <FeaturedCategory category={category} />
        </div>
    )
}


export default CategoryContainer