import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Slide_news from './07News/Slide_news';

interface News  {
    date: Date
    title: string
    text: string
}
const NEWS: News[] = [
    { date: new Date('2022-10-12'), title: "Старт продаж! Квартиры в курортном городе Ессентуки", text: "Рады вам сообщить, что мы открыли продажи первых квартир в городе Ессентуки. Всю информацию вы можете найти на нашем сайте" },
    { date: new Date('2022-10-12'), title: "Старт продаж! Квартиры в курортном городе Ессентуки", text: "Рады вам сообщить, что мы открыли продажи первых квартир в городе Ессентуки. Всю информацию вы можете найти на нашем сайте" },
    { date: new Date('2022-10-12'), title: "Старт продаж! Квартиры в курортном городе Ессентуки", text: "Рады вам сообщить, что мы открыли продажи первых квартир в городе Ессентуки. Всю информацию вы можете найти на нашем сайте" },
]

export default function News(){
    return(
        <section className="_section">
            <div className="_wrapper flex flex-col">
                
                    <div className='flex'>
                        <h3 className='block'>Новости</h3>
                        <div>
                            <button id="#_PREV">{"<"}</button>
                            <button id="#_NEXT">{">"}</button>
                        </div>
                    </div>
                    <Swiper className='block'
                        id='reviews_slider'
                        modules={ [Navigation] }
                        spaceBetween={10}
                        slidesPerView={1} 
                        // breakpoints={{
                        //     640: {
                        //         slidesPerView: 2,
                        //     },
                        //     1000: {
                        //         slidesPerView: 3,
                        //     },
                        // }}
                        navigation={{ nextEl: '#_NEXT', prevEl: '#_PREV' }}
                    >
                        <SwiperSlide>
                            {NEWS.map(el => {
                                return <Slide_news {...el}/>
                            })}
                            
                        </SwiperSlide>
                    </Swiper>
                </div>

        </section>
    )
}