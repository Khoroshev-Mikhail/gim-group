import Image from "next/image";
import bg from '../../public/images/bg.webp'

export default function About_Projects(){
    return(
        <section className="_section mt-14">
            <div className="_wrapper">
                <div className="flex flex-col md:flex-row justify-between w-full bg-white rounded-2xl p-8 md:gap-x-10 lg:gap-x-30">
                    <div className="w-full md:w-2/3 flex flex-col justify-between gap-y-4 text-_dark-gray-for-text">
                        <h2 className="block text-_blue_for-text text-[32px]">О проекте</h2>
                        <div>
                            Жилой комплекс "жемчужина" - это новый уровень жизни во Владмире.
                        </div>
                        <div>
                            Современные архитектурные решения, разработанные высококвалифицированными специалистами. Премиальная отделка каждого строительного элемента.
                            Качественные материалы. Удобные входные группы и планировочные решения, внутренний двор с уникальным ландшафтом.
                            Из окон комплекста открываются живописные виды на площадь Победы, вечный огонь и Казанскую церковь.
                        </div>
                    </div>
                    <div className="flex flex-col w-full md:w-1/3 text-_dark-blue_for-text font-bold pt-10 md:pt-5 lg:pr-10">
                        <div className="h-1/2">
                            Владимирская область
                            г.Владимир, ул. Чайковского, 8.
                        </div>
                        <div className="pt-5 md:pt-0 flex h-1/2 gap-x-5 md:gap-x-0 md:justify-between">
                            <div>
                                <p>10 Этажей</p>
                                <p className="text-_dark-gray-for-text -mt-0.5 text-[12px] font-medium">Этажность</p>
                            </div>
                            <div>
                                <p>34,4-135,6м2</p>
                                <p className="text-_dark-gray-for-text -mt-0.5 text-[12px] font-medium">Площадь квартир</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-b-2 border-_blue-for-icons grid xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-8 px-8 py-16">
 
                        <div className="flex ">
                            <img className="block w-12 h-12" src="/images/1.png" />
                            <div className="flex flex-col justify-center">
                                <div className="px-7 text-[16px] xs:text-[14px] sm:text-[16px]">
                                    Полноценная инфраструктура
                                </div>
                            </div>
                        </div>
                        <div className="flex ">
                            <img className="block w-12 h-12" src="/images/3.png" />
                            <div className="flex flex-col justify-center">
                                <div className="px-7 text-[16px] xs:text-[14px] sm:text-[16px]">
                                    Транспортная доступность
                                </div>
                            </div>
                        </div>
                        <div className="flex ">
                            <img className="block w-8 h-12 mx-2" src="/images/5.png" />
                            <div className="flex flex-col justify-center">
                                <div className="px-7 text-[16px] xs:text-[14px] sm:text-[16px]">
                                    Собственная котельная
                                </div>
                            </div>
                        </div>
                        <div className="flex ">
                            <img className="block w-12 h-12" src="/images/7.png" />
                            <div className="flex flex-col justify-center">
                                <div className="px-7 text-[16px] xs:text-[14px] sm:text-[16px]">
                                    Надежность сделки
                                </div>
                            </div>
                        </div>


                        <div className="flex ">
                            <img className="block w-10 h-12 mx-1" src="/images/2.png" />
                            <div className="flex flex-col justify-center">
                                <div className="px-7 text-[16px] xs:text-[14px] sm:text-[16px]">
                                    Закрытая территория
                                </div>
                            </div>
                        </div>
                        <div className="flex ">
                            <img className="block w-12 h-12" src="/images/4.png" />
                            <div className="flex flex-col justify-center">
                                <div className="px-7 text-[16px] xs:text-[14px] sm:text-[16px]">
                                    Продуманные планировки
                                </div>
                            </div>
                        </div>
                        <div className="flex ">
                            <img className="block w-10 h-12 mx-1" src="/images/6.png" />
                            <div className="flex flex-col justify-center">
                                <div className="px-7 text-[16px] xs:text-[14px] sm:text-[16px]">
                                    Подземный паркинг
                                </div>
                            </div>
                        </div>
                        <div className="flex ">
                            <img className="block w-10 h-12 mx-1" src="/images/8.png" />
                            <div className="flex flex-col justify-center">
                                <div className="px-7 text-[16px] xs:text-[14px] sm:text-[16px]">
                                    Безопасность
                                </div>
                            </div>
                        </div>


                </div>
            </div>
        </section>
    )
}