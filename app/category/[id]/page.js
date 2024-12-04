import CategoryContainer from '@/containers/category'
import { notFound } from 'next/navigation'
import React from 'react'

async function CategoryPage({ params, searchParams }) {
    // const categoryDetail = await fetchSingleCategory(params.id);

    // if (CategoryPageDetail.success === false) {
    //     notFound();
    // }

    // if (!searchParams.error === "true") {
    //     throw new Error("Error Happened while fetching single category");
    // }

    // return <CategoryContainer category={categoryDetail} />
    return <CategoryContainer />

}

export default CategoryPage