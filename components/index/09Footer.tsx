import Image from 'next/image'
import logo_footer from '../../public/images/logo_footer.png'


export default function Footer(){
    return(
        <section className="_section mt-14 pb-14">
            <div className="_wrapper flex justify-between">
                
                <div className='w-3/12 -mt-[18px]'>
                    <Image src={logo_footer} alt="ГИМ ГРУПП Логотип" />
                </div>

                <div>
                    <nav>
                        <ul className='columns-2 text-[12px]'>
                            <li>Проекты</li>
                            <li>Коммерческая недвижимость</li>
                            <li>Машиноместа</li>
                            <li>Проекты</li>
                            <li>Коммерческая недвижимость</li>
                            <li>Машиноместа</li>
                        </ul>
                    </nav>
                </div>

                <div className='flex flex-col justify-start'>
                    <a href="tel:74922779554" className="text-right text-[36px] leading-tight">+7 (4922) 779-554</a>
                    <p className="text-_gray-dark text-right leading-4">пн-пт:9:00-18:00, сб-вс:выходной</p>
                </div>

            </div>
        </section>
    )
}