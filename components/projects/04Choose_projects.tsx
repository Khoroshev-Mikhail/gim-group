import Image from "next/image";
import bg from '../../public/images/bg.webp'

export default function Choose_Projects(){
    return(
        <section className="_section mt-5">
            <div className="_wrapper flex flex-col ">
                
                <div className="mt-5">
                    <h2 className="block text-_blue_for-text text-[32px]">Выбор квартиры</h2>
                </div>

                <div className="grid grid-cols-3 gap-5  mt-10">

                    <div>
                        <select className="w-full py-3.5 px-3 rounded-lg">
                            <option>Количество комнат</option>
                        </select>
                    </div>
                    <div>
                        <select className="w-full py-3.5 px-3 rounded-lg">
                            <option>Параметры квартиры</option>
                        </select>
                    </div>
                    <div>

                    </div>

                    <div className="flex justify-between">
                        <div className="w-1/2 flex flex-col">
                            <input type="text" className="w-full p-3 rounded-l-xl border-r-[1px]"/>
                            <input type="range" className="w-[calc(100%-12px)] ml-auto block h-[1px]"/>
                        </div>
                        <div className="w-1/2 flex flex-col">
                            <input type="text" className="w-full p-3 rounded-r-xl"/>
                            <input type="range" className="w-[calc(100%-12px)] mr-auto block h-[1px]"/>
                        </div>
                    </div>
                    <div>
                        <button className="flex flex-col h-full justify-center">
                            <div className="bg-white rounded-xl p-3">
                                <span className="text-red-500 pr-1">%</span>Акция
                            </div>
                        </button>
                    </div>
                    <div className="w-full flex justify-end">
                        <button className="flex flex-col justify-center h-full">
                            <div>
                                <img src="/images/clear.png" className="w-6 inline pr-1"/>
                                очистить
                            </div>
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-10">
                    <div className="flex flex-col p-5 justify-between aspect-square bg-white rounded-2xl">
                        <div className="text-_dark-blue_for-text font-bold w-full md:w-7/12">2-комнатная квартира</div>
                        <div className="h-2/3">
                            <img src="/images/plan.png" alt="" className="h-full mx-auto"/>
                        </div>
                        <div className="flex justify-between">
                            <div className="text-_dark-blue_for-text font-bold">42.38 м2</div>
                            <div>8643789 руб.</div>
                        </div>
                    </div>
                </div>
                
                <div className="flex justify-between">
                    <div>
                        <button>1</button>
                        <button>2</button>
                        <button>3</button>
                        <button>4</button>
                        <button>5</button>
                        <button>...</button>
                        <button>11</button>
                    </div>
                    <div>
                        Показать еще
                    </div>
                </div>

            </div>
        </section>
    )
}