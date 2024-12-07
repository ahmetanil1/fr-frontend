import Image from 'next/image';
import React from 'react'

function FeaturedCategory({ category = {}, isCompact = false }) {
    const { title, image_url } = category;
    return (
        <div className='flex flex-grow'>
            <div className='rounded-md w-5'>
                <Image
                    unoptimized
                    src={image_url || "https://via.placeholder.com/300"}
                    alt={`${title}`}
                    width={isCompact ? 100 : 200}
                    height={isCompact ? 150 : 300}
                    layout="responsive"
                />
            </div>
            <div className='flex z-50 justify-center items-center font-bold'>
                <p className='text-xl font-bold mt-2'>{title}</p>
            </div>
        </div>
    )
}

export default FeaturedCategory