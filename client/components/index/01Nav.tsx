import Image from "next/image";
import burger from '../../public/images/burger.svg'
import logo_top from '../../public/images/logo_top.png'

export default function Nav(){
    return(
        <section className="_section mt-7">
            <div className="_wrapper">

                <div className="flex justify-between text-_blue_for-text h-16 bg-white rounded-2xl px-10">
                    {/* <Image src={burger} alt="Меню" className="block"/> */}
                    
                    <div className="flex flex-col justify-center ">
                        <Image src={logo_top}  alt="ГИМ ГРУПП" height={20} className="w-auto block"/>
                    </div>

                    <nav className="flex flex-col justify-center">
                        <ul className="flex [&>li]:inline gap-x-10">
                            <li>Проекты</li>
                            <li>Коммерческая недвижимость</li>
                            <li>Машиноместа</li>
                        </ul>
                    </nav>

                    <div className="flex flex-col justify-center">
                        <a href="tel:74922779554" className="text-right leading-4">+7 (4922) 779-554</a>
                        <p className="text-_gray-dark leading-4">пн-пт:9:00-18:00, сб-вс:выходной</p>
                    </div>
                </div>
            </div>
        </section>
    )
}