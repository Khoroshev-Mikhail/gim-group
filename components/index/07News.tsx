import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Slide_news from './07News/Slide_news';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import arrow_left from '../../public/images/arrow_left.svg'
import arrow_right from '../../public/images/arrow_right.svg'

interface News  {
    date: Date
    title: string
    text: string
}
const NEWS: News[] = [
    { date: new Date('2022-10-12'), title: "1Старт продаж! Квартиры в курортном городе Ессентуки", text: "Рады вам сообщить, что мы открыли продажи первых квартир в городе Ессентуки. Всю информацию вы можете найти на нашем сайте" },
    { date: new Date('2023-10-12'), title: "2Старт продаж! Квартиры в курортном городе Ессентуки", text: "Рады вам сообщить, что мы открыли продажи первых квартир в городе Ессентуки. Всю информацию вы можете найти на нашем сайте" },
    { date: new Date('2024-10-12'), title: "3Старт продаж! Квартиры в курортном городе Ессентуки", text: "Рады вам сообщить, что мы открыли продажи первых квартир в городе Ессентуки. Всю информацию вы можете найти на нашем сайте" },
    { date: new Date('2022-10-12'), title: "4Старт продаж! Квартиры в курортном городе Ессентуки", text: "Рады вам сообщить, что мы открыли продажи первых квартир в городе Ессентуки. Всю информацию вы можете найти на нашем сайте" },
    { date: new Date('2023-10-12'), title: "5Старт продаж! Квартиры в курортном городе Ессентуки", text: "Рады вам сообщить, что мы открыли продажи первых квартир в городе Ессентуки. Всю информацию вы можете найти на нашем сайте" },
    { date: new Date('2024-10-12'), title: "6Старт продаж! Квартиры в курортном городе Ессентуки", text: "Рады вам сообщить, что мы открыли продажи первых квартир в городе Ессентуки. Всю информацию вы можете найти на нашем сайте" },
]

export default function News(){
    return(
        <section className="_section mt-20">
            <div className="_wrapper flex flex-col">
                
                    <div className='flex justify-between'>
                        <h3 className='_h block'>Новости</h3>
                        <div className='flex'>
                            <button id="_PREV" className='flex flex-col justify-center'>
                                <img src={arrow_left.src} alt="←" />
                            </button>
                            <button id="_NEXT" className='flex flex-col justify-center ml-20'>
                                <img src={arrow_right.src} alt="→" />
                            </button>
                        </div>
                    </div>

                    <div className='w-full mt-7'>
                        <Swiper
                            id='SLIDER'
                            modules={[ Navigation ]}
                            spaceBetween={ 20 }
                            breakpoints={{
                                0: {
                                    slidesPerView: 1
                                },
                                768: {
                                    slidesPerView: 2,
                                },
                                1000: {
                                    slidesPerView: 3,
                                },
                            }}
                            navigation={{ prevEl: '_PREV', nextEl: '_NEXT' }}
                        >
                                {NEWS.map((el, i) => {
                                    return (
                                        <SwiperSlide key={i} virtualIndex={i}>
                                            <Slide_news {...el}/>
                                        </SwiperSlide>
                                    )
                                })}
                        </Swiper>
                    </div>
                </div>

        </section>
    )
}