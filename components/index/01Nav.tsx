import Image from "next/image";
import burger from '../../public/images/burger.svg'
import logo_top from '../../public/images/logo_top.png'
import { useState } from "react";

export default function Nav(){
    const [ isVisible, setIsVisible ] = useState<boolean>(false)

    return(
        <section className="_section">
            <div className="_wrapper mt-7 relative">

                <div className="flex justify-between text-_blue_for-text h-16 text-[14px] bg-white rounded-2xl px-10">
                    
                    <div className="flex flex-col justify-center ">
                        <Image src={logo_top}  alt="ГИМ ГРУПП" height={20} className="w-auto block"/>
                    </div>
                    <div className="flex flex-col justify-center ">
                        <Image src={burger} alt="Меню" className="md:hidden" onClick={()=>setIsVisible(true)}/>
                    </div>

                    <nav className="flex-col justify-center hidden md:flex text-[14px] lg:text-[16px]">
                        <ul className="flex [&>li]:inline gap-x-3 lg:gap-x-10">
                            <li><a href="#">Проекты</a></li>
                            <li><a href="#">Коммерческая недвижимость</a></li>
                            <li><a href="#">Машиноместа</a></li>
                        </ul>
                    </nav>

                    <div className="hidden md:flex flex-col justify-center">
                        <a href="tel:74922779554" className="text-right leading-4">+7 (4922) 779-554</a>
                        <p className="text-_gray-dark text-right leading-4">пн-пт:9:00-18:00<span className="hidden lg:inline">, сб-вс:выходной</span></p>
                    </div>
                </div>

                {isVisible &&
                    <div className="absolute z-50 top-0 left-0 flex flex-col justify-between px-12 py-[18px] bg-white min-h-screen rounded-2xl h-full w-full">
                        <div className="flex justify-between">
                            <Image src={logo_top}  alt="ГИМ ГРУПП" height={20} className="w-auto block"/>
                            <Image src={burger} alt="Меню" className="" onClick={()=>setIsVisible(false)}/>
                        </div>
                        <div className="mt-4">
                            <ul className="text-right w-full space-y-2">
                                <li><a href="#">Проекты</a></li>
                                <li><a href="#">Коммерческая недвижимость</a></li>
                                <li><a href="#">Машиноместа</a></li>
                            </ul>
                        </div>
                        <div className="flex flex-col justify-center pb-8">
                            <a href="tel:74922779554" className="text-right leading-4">+7 (4922) 779-554</a>
                            <p className="text-_gray-dark text-right leading-4">пн-пт: 9:00-18:00</p>
                        </div>

                    </div>
                }


            </div>



        </section>
    )
}