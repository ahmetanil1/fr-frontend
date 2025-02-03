"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import { FaRegBookmark, FaArrowCircleDown, FaStar } from "react-icons/fa";

import Hr from '../general/hr';


function RecipeDetail() {

    const [readMore, setReadMore] = useState(false);
    const [nutritionMore, setNutritionMore] = useState(false);

    const readMoreCaption = () => {
        setReadMore(!readMore);
    }

    const nutritionMoreCaption = () => {
        setNutritionMore(!nutritionMore);
    }

    const shortDescription =
        "Kahvaltı sofralarının en vazgeçilmez malzemesi olan yumurta, farklı tariflerle her gün yeni bir lezzete dönüşebilir...";
    const fullDescription =
        "Kahvaltı sofralarının en vazgeçilmez malzemesi olan yumurta, farklı tariflerle her gün yeni bir lezzete dönüşebilir. Pratikliği ile öne çıkan fırında yumurta tarifi, misafir ağırlarken ya da kendinizi şımartırken harika bir seçenek olabilir.";


    return (
        <div className='flex flex-col space-y-1 pt-4'>
            <div className="p-4 dark:border-gray-900 border rounded-lg shadow-lg relative flex justify-center items-center flex-col w-full h-[500px] ">
           
                <Image
                    alt="yemek resmi"
                    unoptimized
                    src="https://direktor.com.tr/wp-content/uploads/2024/05/yemek-fotograf-cekimi-fiyat-scaled-1.jpg"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg "
                />
            
                <div className="absolute bottom-8  left-1/2 transform -translate-x-1/2 text-white text-4xl bg-black bg-opacity-50 px-8 py-2 rounded">
                    ASKDKAKSDKASKDAKSDKASK KDKAS KDKA KSDKA
                </div>
            </div>

            <div className='flex justify-center gap-3  w-full'>
                <div className='space-y-4  pt-4 w-/10 '> 
                    <div className='flex justify-center gap-4'>
                        <div className=' flex flex-wrap'>
                            <div className=' dark:border-gray-900 border rounded-lg shadow-lg gap-4 flex flex-wrap p-2 text-sm w-full '>
                                {/*
                                {subCategories.map((subCategory) => {
                                        BÖYLE OLACAK DENEME İÇİN AŞAĞIDAKİLER YAZILDI
                                })} */}

                                <div>asdasdasda</div>
                                <div>asdasdasda</div>
                                <div>asdasdasda</div>
                                <div>asdasdasda</div>
                                <div>asdasdasda</div>
                                <div>asdasdasda</div>
                                <div>asdasdasda</div>
                                <div>asdasdasda</div>
                                <div>asdasdasda</div>
                                <div>asdasdasda</div>


                            </div>
                        </div>
                        <div className='p-4 dark:border-gray-900 border rounded-lg shadow-lg flex flex-col gap-4 w-1/3 h-full '>
                            <div className='flex justify-center items-center '>
                                <FaRegBookmark className='cursor-pointer' size={24} />
                            </div>
                            <div className='text-xs flex justify-center w-full '>
                                Tarif defterine ekle
                            </div>
                        </div>
                    </div>
                    

                    <div className="p-4 dark:border-gray-900 border rounded-lg shadow-lg">
                        <div className="text-lg font-semibold mb-2">Yemeğin Açıklaması</div>
                        <hr className="border-gray-300 mb-4" />
                 
                        <div
                            className={`transition-all duration-500 ease-in-out overflow-hidden ${readMore ? 'max-h-[500px] opacity-100' : 'max-h-[100px] opacity-50'
                                }`}
                        >
                            {readMore ? fullDescription : shortDescription}
                        </div>
                        <div
                            onClick={readMoreCaption}
                            className="flex gap-2 justify-center items-center mt-4 text-gray-600 hover:text-gray-800 cursor-pointer"
                        >
                            <div>{readMore ? 'Daha Az Göster' : 'Devamını Oku'}</div>
                            <FaArrowCircleDown
                                size={24}
                                className={`transition-transform ${readMore ? 'rotate-180' : ''
                                    }`}
                            />
                        </div>
                    </div>
                    <div>
                        <div className='p-4 dark:border-gray-900 border rounded-lg shadow-lg  '>
                            {!nutritionMore ? (
                                <div>
                                    <div >
                                        Besin değerlerini görmek için <b className='underline cursor-pointer' onClick={nutritionMoreCaption}>tıklayınız</b>
                                    </div>
                                </div>
                            ) : (
                                <div className='flex flex-col'>
                                    <div className='pb-4'> 1 Porsiyon için</div>
                                    <div className='flex flex-col pl-1'>
                                        <ul>
                                            <li>asd</li>
                                            <li>asdaasd</li>
                                            <li>adsada</li>
                                        </ul>
                                    </div>
                                    <div className='pt-4'>Açıklama</div>
                                    <b onClick={nutritionMoreCaption} className='underline cursor-pointer flex justify-end'>Kısalt </b>

                                </div>


                            )}
                        </div>
                    </div>
                    
                    <div className='flex justify-around p-4 dark:border-gray-900 border rounded-lg shadow-lg'>
                        <div className='flex flex-col p-4 '>
                            <div className='text-lg '>Kaç kişilik</div>
                            <div className='text-sm flex justify-center items-center pt-2'>1 porsiyon</div>
                            
                        </div>
                        <div className='flex flex-col p-4 '>
                            <div className='text-lg '>Hazırlanma süresi </div>
                            <div className='text-sm flex justify-center items-center pt-2'>10 dakika</div>
                            
                        </div>
                        <div className='flex flex-col p-4 '>
                            <div className='text-lg '>Pişme süresi </div>
                            <div className='text-sm flex justify-center items-center pt-2'>10 dakika</div>
                            
                        </div>

                    </div>
                    <div className='p-4 dark:border-gray-900 border rounded-lg shadow-lg'>
                        <div>
                            <div className='flex flex-col '>
                                {/* <div>{`${recipe.title} için malzemeler`}</div> */}
                                <div className='pb-2'>Malzemeler</div>
                            </div>
                            <div>
                                <ul className='pl-2 space-y-2 text-sm'>
                                    <li>asdasda</li> {/*Pişirme aletleri örneğin 1 bardak süt derken bardak olarak verilecek */}
                                    <li>asdasda</li>
                                    <li>asdasda</li>
                                    <li>asdasda</li>
                                    <li>asdasda</li>
                                    <li>asdasda</li>
                                    <li>asdasda</li>
                                    <li>asdasda</li>

                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-3 p-4 dark:border-gray-900 border rounded-lg shadow-lg'>
                        <div className='text-xl'>
                            {/* <div>{`${recipe.title} için yapılış adımları`}</div> */}
                            <div>Adımlar</div>
                        </div>
                        <div className='flex flex-col items-start justify-center'>
                            {/*Adımlar maplanip liste elemanları şeklinde verilebilir   */}
                            <div className='flex  w-full py-2 items-start'>
                                Adım açıklaması
                            </div>
                            <div className=''>
                                <Image
                                    src="https://direktor.com.tr/wp-content/uploads/2024/05/yemek-fotograf-cekimi-fiyat-scaled-1.jpg"
                                    alt="yemek resmi"
                                    width={442}
                                    height={243}
                                    style={{ borderRadius: "10px" }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center dark:border-gray-900 border rounded-lg shadow-lg  gap-4 p-4">
             
                        <div className='flex w-full items-start'>
                            <div className="text-lg font-bold ">
                                Detaylı Yemek videomuz var!
                            </div>
                        </div>

                        <div className="w-full max-w-2xl ">
                            <video
                                controls
                                className="w-full rounded-lg shadow-lg "
                            >
                                <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                                Tarayıcınız video oynatmayı desteklemiyor.
                            </video>
                        </div>
                    </div>


                    <div>

                    </div>
                </div>
                <div className='space-y-10 pt-4 '>
                    <div className='flex flex-col gap-2 p-4 dark:border-gray-900 border rounded-lg shadow-lg'>
                        <div>Tarifi Puanla</div>
                        <div className='flex gap-1.5 text-yellow-400 cursor-pointer'>
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>

                    </div>
                    
                    <div className='flex gap-4 p-4 dark:border-gray-900 border rounded-lg shadow-lg'>
                        <div>
                            <div >
                                <Image
                                    className="rounded-full"
                                    src='https://via.placeholder.com/150?text=Default+Male+Avatar'
                                    alt="profile"
                                    width={75}
                                    height={75}
                                />
                            </div>

                        </div>
                        <div className='flex flex-col gap-6'>
                            <div className='text-md flex flex-col gap-2'>
                                <div>isim Soyisim</div>
                                <div className='text-sm'>Kullanıcının rolü</div>
                            </div>
                            <div className="flex justify-center items-center py-1  rounded-md  hover:bg-gray-700 hover:text-gray-100 transition duration-300  ease-in-out dark:border-gray-300 dark:hover:bg-gray-100 dark:hover:text-gray-800">
                                <button>Takip Et</button>
                            </div>


                        </div>

                    </div>
                    
                    <div className='p-4 dark:border-gray-900 border rounded-lg shadow-lg'>
                        <div>
                            Sıkça yenen konular BU İSİM ALTTAKİLER GÖRÜNTÜ OLACKA
                        </div>
                        <div>
                            Sıkça yenen konular
                        </div>
                        <div>
                            Sıkça yenen konular
                        </div>
                        <div>
                            Sıkça yenen konular
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecipeDetail