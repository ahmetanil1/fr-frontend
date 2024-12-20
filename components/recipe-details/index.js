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
        <div className='flex flex-col space-y-1 border border-black p-4'>
            <div className="relative flex justify-center items-center  p-4 flex-col w-full h-[500px]">
                {/* Görsel */}
                <Image
                    alt="yemek resmi"
                    unoptimized
                    src="https://direktor.com.tr/wp-content/uploads/2024/05/yemek-fotograf-cekimi-fiyat-scaled-1.jpg"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                />
                {/* Yemek İsmi */}
                <div className="absolute bottom-8  left-1/2 transform -translate-x-1/2 text-white text-4xl bg-black bg-opacity-50 px-8 py-2 rounded">
                    ASKDKAKSDKASKDAKSDKASK KDKAS KDKA KSDKA
                </div>
            </div>

            <div className='flex justify-center gap-3 border border-black p-4 w-full'>
                <div className='space-y-4 border border-black p-4 w-/10 '>  {/*yemeği ilgilendiren kısımlar */}
                    <div className='flex justify-center gap-4'>
                        <div className='border border-black flex flex-wrap'>
                            <div className='gap-4 flex flex-wrap p-2 text-sm w-full '>
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
                        <div className='flex flex-col gap-4  border border-black p-4'>
                            <div className='flex justify-center items-center '>
                                <FaRegBookmark size={24} />
                            </div>
                            <div className='text-sm'>
                                Tarif defterine ekle
                            </div>
                        </div>
                    </div>
                    <Hr />

                    <div>
                        <div className='p-4'>Yemeğin Açıklaması</div>
                        <Hr />
                        <div className={` ${readMore ? "opacity-100 " : "opacity-50 "} `}>
                            {readMore ? fullDescription : shortDescription}
                        </div>
                        <div onClick={readMoreCaption} className='flex gap-4 justify-center items-center opacity-50 hover:opacity-100 cursor-pointer'>
                            {!readMore && (
                                <div
                                    onClick={readMoreCaption}
                                    className="flex gap-4 justify-center items-center opacity-50 hover:opacity-100 cursor-pointer mt-4"
                                >
                                    <div>Devamını oku</div>
                                    <div>
                                        <FaArrowCircleDown size={24} />
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div>
                        <div className='border border-dashed border-black p-4 '>
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

                                </div>

                            )}
                        </div>
                    </div>
                    <Hr />
                    <div className='flex justify-around'>
                        <div className='flex flex-col p-4 '>
                            <div className='text-lg '>Kaç kişilik</div>
                            <div className='text-sm flex justify-center items-center pt-2'>1 porsiyon</div>
                            <Hr />
                        </div>
                        <div className='flex flex-col p-4 '>
                            <div className='text-lg '>Hazırlanma süresi </div>
                            <div className='text-sm flex justify-center items-center pt-2'>10 dakika</div>
                            <Hr />
                        </div>
                        <div className='flex flex-col p-4 '>
                            <div className='text-lg '>Pişme süresi </div>
                            <div className='text-sm flex justify-center items-center pt-2'>10 dakika</div>
                            <Hr />
                        </div>

                    </div>
                    <div>
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
                    <div className='flex flex-col gap-3'>
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
                    <div className="flex flex-col items-center justify-center gap-4 p-4">
                        {/* Başlık */}
                        <div className='flex w-full items-start'>
                            <div className="text-lg font-bold ">
                                Detaylı Yemek videomuz var!
                            </div>
                        </div>

                        {/* Video Player */}
                        <div className="w-full max-w-2xl">
                            <video
                                controls
                                className="w-full rounded-lg shadow-lg"
                            >
                                <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                                Tarayıcınız video oynatmayı desteklemiyor.
                            </video>
                        </div>
                    </div>


                    <div>

                    </div>
                </div>
                <div className='space-y-4 border border-black p-4'>
                    <div className='flex flex-col gap-2'>
                        <div>Tarifi Puanla</div>
                        <div className='flex gap-1.5 text-yellow-400'>
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>

                    </div>
                    <Hr />
                    <div className='flex gap-4'>
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
                            <div className="flex justify-center items-center py-1 border border-black rounded-md  hover:bg-gray-700 hover:text-gray-100 transition duration-300  ease-in-out dark:border-gray-300 dark:hover:bg-gray-100 dark:hover:text-gray-800">
                                <button>Takip Et</button>
                            </div>


                        </div>

                    </div>
                    <Hr />
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
    )
}

export default RecipeDetail