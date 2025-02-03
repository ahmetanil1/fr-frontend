"use client";
import Image from "next/image";
import React from "react";

const HamburgerMenuContent = ({ onCategoryClick, categories }) => {
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
                            onClick={() => onCategoryClick(category.name)}
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
                    );
                })}
            </div>
        </div>
    );
};

export default HamburgerMenuContent;
