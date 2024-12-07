import CategoryContainer from '@/containers/category'
import { notFound } from 'next/navigation'
import React, { useEffect } from 'react'
import { getCatogeries } from "@/services/category"

async function CategoryPage() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            const data = await getCategories(); // API'den verileri bekle
            setCategories(data);
        };

        fetchCategories();
    }, [])



    return <CategoryContainer categories={categories} />

}

export default CategoryPage