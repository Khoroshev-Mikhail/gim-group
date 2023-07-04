import Image from 'next/image'
import logo_footer from '../../public/images/logo_footer.png'


export default function Footer(){
    return(
        <section className="_section mt-14 pb-14">
            <div className="_wrapper flex md:flex-row flex-col justify-between gap-x-2 md:gap-x-4">
                
                <div className='w-full sm:w-1/2 mx-auto md:w-3/12 mt-5 md:-mt-[10px] lg:-mt-[16px] order-2 md:order-1'>
                    <Image src={logo_footer} alt="ГИМ ГРУПП Логотип" />
                </div>

                <div className='w-full md:w-auto mx-auto order-1 md:order-2'>
                    <nav>
                        <ul className='columns-2 text-[12px] text-center md:text-left'>
                            <li>Проекты</li>
                            <li>Коммерческая недвижимость</li>
                            <li>Машиноместа</li>
                            <li>Проекты</li>
                            <li>Коммерческая недвижимость</li>
                            <li>Машиноместа</li>
                        </ul>
                    </nav>
                </div>

                <div className='flex flex-col justify-start order-3 mx-auto'>
                    <a href="tel:74922779554" className="text-center md:text-right text-[24px] lg:text-[36px] leading-tight">+7 (4922) 779-554</a>
                    <p className="text-_gray-dark text-right leading-4">пн-пт:9:00-18:00, сб-вс:выходной</p>
                </div>

            </div>
        </section>
    )
}