"use client";

import { getCategories } from "@/services/categories";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const HamburgerMenuContent = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const data = await getCategories();
                setCategories(data); // API'den gelen veriler state'e kaydediliyor
            } catch (error) {
                console.error("Kategori verileri alınamadı:", error);
            }
        };
        fetchCategories();
    }, []);

    const onCategoryClick = (categoryId) => {
        console.log("Seçilen kategori ID:", categoryId); // Kategori ID'sini yazdır
    };

    return (
        <div className="dark:text-black">
            <div className="flex flex-wrap justify-center gap-4 mb-10 z-50">
                {categories.map((category) => {
                    <div
                        key={category.id}
                        className="relative cursor-pointer hover:scale-105 transition-transform"
                        onClick={() => onCategoryClick(category.id)}
                        style={{ width: 126.47, height: 115 }}
                    >
                        {/* Resim yalnızca md ve üstü ekranlarda görünsün */}
                        <Image
                            unoptimized
                            src={category.image_url}
                            alt={category.name}
                            layout="fill"
                            className="object-cover rounded-lg"
                        />

                        {/* Kategori adı her ekran boyutunda görünsün */}
                        <div className="absolute top-1/2 left-0 w-full text-white text-center py-1 rounded-b-lg">
                            {category.name}
                        </div>
                    </div>
                })}
            </div>
        </div>
    );
};

export default HamburgerMenuContent;
