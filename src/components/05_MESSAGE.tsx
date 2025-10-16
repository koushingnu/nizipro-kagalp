"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Pagination, Autoplay} from 'swiper/modules';
import 'swiper/css/pagination';

export const Message = () => {
    return (
        <section className="relative w-full bg-white">
            <div>
                <h1 className= "font-mono text-blue-300 text-5xl lg:text-6xl font-black flex justify-center pt-10">MEMBER</h1>
            </div>

            <div className="pt-1"></div>

            <div className="relative w-full justify-center">
                <p className="text-black font-black flex justify-center text-lg">メンバー紹介</p>
            </div>


            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 w-11/12 mx-auto pt-6 lg:px-35">
                <div className="flex flex-col text-loose items-center">
                    <img src= "/虹プロ画像/虹プロ画像/メッセージ/akito.jpg" className="w-full h-auto rounded-xl " />
                    <p className="text-yellow-300 font-black text-4xl pt-10 drop-shadow-lg">
                        あきと
                    </p>
                </div>

                <div className="flex flex-col items-center">
                    <img src= "/虹プロ画像/虹プロ画像/メッセージ/kengo.jpg" className="w-full h-auto rounded-xl" />
                    <p className="text-green-300 font-black text-4xl pt-6 drop-shadow-lg">
                        けんご
                    </p>
                </div>

                <div className="flex flex-col items-center">
                    <img src= "/虹プロ画像/虹プロ画像/メッセージ/daiya.jpg" className="w-full h-auto rounded-xl" />
                    <p className="text-red-300 font-black text-4xl pt-6 drop-shadow-lg">
                        だいや
                    </p>
                </div>

                <div className="flex flex-col items-center">
                    <img src= "/虹プロ画像/虹プロ画像/メッセージ/nagisa.jpg" className="w-full h-auto rounded-xl" />
                    <p className="text-sky-300 font-black text-4xl pt-6 drop-shadow-lg">
                        なぎさ
                    </p>
                </div>

                <div className="flex flex-col items-center">
                    <img src= "/虹プロ画像/虹プロ画像/メッセージ/masiro.jpg" className="w-full h-auto rounded-xl" />
                    <p className="text-pink-300 font-black text-4xl pt-6 drop-shadow-lg">
                        ましろ
                    </p>
                </div>

                <div className="flex flex-col items-center">
                    <img src= "/虹プロ画像/虹プロ画像/メッセージ/yuito.jpg" className="w-full h-auto rounded-xl" />
                    <p className="text-orange-300 font-black text-4xl pt-6 drop-shadow-lg">
                        ゆいと
                    </p>
                </div>

            </div>

            <div className="max-w-5xl mx-auto pt-20">
                <Swiper
                    modules={[Navigation,Pagination,Autoplay]}
                    navigation
                    slidesPerView={3}
                    spaceBetween={0}
                    className="w-full"
                    loop={true}
                    pagination={{
                    el: '.swiper-pagination',
                    clickable: true,
                    }}
                    autoplay={{
                    delay: 2500,     
                    disableOnInteraction: false, 
                    }}
                    centeredSlides={true}
                    breakpoints={{
                    // 画面幅 >= 640px（スマホ縦）
                    0: {
                    slidesPerView: 1.3, 
                    spaceBetween: 10,
                    },
                    // 画面幅 >= 768px（タブレット）
                    640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                    },
                    // 画面幅 >= 1024px（PC）
                    768: {
                    slidesPerView: 3,
                    spaceBetween: 0,
                    },
                }}
>
                    <SwiperSlide>
                        <div className="w-full aspect-video">
                            <img 
                            src="/虹プロ画像/虹プロ画像/メッセージ下部/S__16629829.jpg"
                            className="w-full h-full object-cover"
                            />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="w-full aspect-video">
                            <img 
                            src="/虹プロ画像/虹プロ画像/メッセージ下部/S__16629830.jpg"
                            className="w-full h-full object-cover"
                            />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="w-full aspect-video">   
                            <img 
                            src="/虹プロ画像/虹プロ画像/メッセージ下部/S__16629831.jpg"
                            className="w-full h-full object-cover"
                            />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="w-full aspect-video">
                            <img 
                            src="/虹プロ画像/虹プロ画像/メッセージ下部/S__16629833.jpg"
                            className="w-full h-full object-cover"
                            />
                        </div>
                    </SwiperSlide>

                     <SwiperSlide>
                        <div className="w-full aspect-video">
                            <img 
                            src="/虹プロ画像/虹プロ画像/メッセージ下部/S__16629834.jpg"
                            className="w-full h-full object-cover"
                            />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="w-full aspect-video">
                            <img 
                            src="/虹プロ画像/虹プロ画像/メッセージ下部/S__16629835.jpg"
                            className="w-full h-full object-cover"
                            />
                        </div>
                    </SwiperSlide>

                </Swiper>

                <div className="swiper-pagination mt-4"></div>
                
            </div>
            
            <div className="pt-10"></div>
        </section>
    )
}