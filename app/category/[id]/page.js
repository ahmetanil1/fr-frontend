import CategoryContainer from '@/containers/category'
import React, { useEffect } from 'react'

async function CategoryPage() {

    return <CategoryContainer categories={categories} />

}

export default CategoryPage