"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { getCategories } from '@/services/categories';

const HamburgerMenuContent = ({ onCategoryClick }) => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);  // Loading durumu
    const [error, setError] = useState(null);      // Error durumu

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const { data } = await getCategories(); // Veriyi çek
                setCategories(data);  // Kategorileri state'e ata
                setLoading(false);     // Yükleme tamamlandığında
            } catch (error) {
                setError("Failed to load categories"); // Hata durumunda mesaj
                setLoading(false);
            }
        };

        fetchCategories();  // Kategorileri çek
    }, []);

    // Eğer veri yükleniyorsa
    if (loading) {
        return <div>Loading...</div>;
    }

    // Eğer hata varsa
    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="dark:text-black">
            <div className="flex flex-wrap justify-center gap-4 mb-10 z-50">

                {categories.map((category) => {
                    if (!category.imageUrl) {
                        return null;
                    }
                    return (
                        <div
                            key={category._id}
                            onClick={() => onCategoryClick(category._id)}
                            className="cursor-pointer flex flex-col items-center"
                        >
                            <Image
                                src={category.imageUrl}
                                alt={category.name}
                                width={100}
                                height={100}
                            />
                            <div>{category.name}</div>
                        </div>
                    )
                })}
            </div>
        </div>
    );

};

export default HamburgerMenuContent;
