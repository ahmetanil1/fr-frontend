import Image from 'next/image';
import React from 'react'

function FeaturedCategory({ category = {}, isCompact = false }) {
    const { title, image_url } = category;
    return (
        <div className='flex flex-grow'>
            <div className='rounded-md w-5'>
                <Image
                    unoptimized
                    src="https://media.themoviedb.org/t/p/w220_and_h330_face/ugQkpGajKFQ8eyOEhGheR0HfWQ.jpg"
                    alt={`${title}`}
                    width={isCompact ? 100 : 200}
                    height={isCompact ? 150 : 300}
                />
            </div>
            <div className='flex z-50 justify-center items-center font-bold'>
                <p>{title}</p>
                <p>Kategori Sayfası</p>
            </div>
        </div>
    )
}

export default FeaturedCategory