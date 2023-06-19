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
    { date: new Date('2022-10-12'), title: "Старт продаж! Квартиры в курортном городе Ессентуки", text: "Рады вам сообщить, что мы открыли продажи первых квартир в городе Ессентуки. Всю информацию вы можете найти на нашем сайте" },
    { date: new Date('2023-10-12'), title: "Старт продаж! Квартиры в курортном городе Ессентуки", text: "Рады вам сообщить, что мы открыли продажи первых квартир в городе Ессентуки. Всю информацию вы можете найти на нашем сайте" },
    { date: new Date('2024-10-12'), title: "Старт продаж! Квартиры в курортном городе Ессентуки", text: "Рады вам сообщить, что мы открыли продажи первых квартир в городе Ессентуки. Всю информацию вы можете найти на нашем сайте" },
    { date: new Date('2022-10-12'), title: "Старт продаж! Квартиры в курортном городе Ессентуки", text: "Рады вам сообщить, что мы открыли продажи первых квартир в городе Ессентуки. Всю информацию вы можете найти на нашем сайте" },
    { date: new Date('2023-10-12'), title: "Старт продаж! Квартиры в курортном городе Ессентуки", text: "Рады вам сообщить, что мы открыли продажи первых квартир в городе Ессентуки. Всю информацию вы можете найти на нашем сайте" },
    { date: new Date('2024-10-12'), title: "Старт продаж! Квартиры в курортном городе Ессентуки", text: "Рады вам сообщить, что мы открыли продажи первых квартир в городе Ессентуки. Всю информацию вы можете найти на нашем сайте" },
]

export default function News(){
    return(
        <section className="_section mt-10">
            <div className="_wrapper flex flex-col">
                
                    <div className='flex justify-between'>
                        <h3 className='_h block'>Новости</h3>
                        <div>
                            {/* измени alt */}
                            <button id="_PREV">
                                <img src={arrow_left.src} alt="<"/>
                            </button>
                            <button id="_NEXT">
                                <img src={arrow_right.src} alt=">"/>
                            </button>
                        </div>
                    </div>

                    <div className='w-full'>
                        <Swiper
                            id='SLIDER'
                            modules={[ Navigation ]}
                            spaceBetween={ 10 }
                            slidesPerView={ 3 } 
                            // breakpoints={{
                            //     640: {
                            //         slidesPerView: 2,
                            //     },
                            //     1000: {
                            //         slidesPerView: 3,
                            //     },
                            // }}
                            navigation={{ nextEl: '_NEXT', prevEl: '_PREV' }}
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