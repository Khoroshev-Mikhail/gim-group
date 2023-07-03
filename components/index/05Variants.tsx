import { useState } from "react"
export default function Variants(){
    const MAX_PRICE = 10_000_000
    const MAX_YEARS = 30
    const [ price, setPrice ] = useState<number>(2_000_000)
    const [ initial, setInitial ] = useState<number>(400_000)
    const [ years, setYears ] = useState<number>(15)
    const [ rate, setRate ] = useState<number>(0.001)

    const formatedPrice = Math.ceil( (rate * ( price - initial) * years + price - initial) / years / 12 )
    const formatedOverRate = Math.ceil(rate * ( price - initial) * years)

    return(
        <section className="_section mt-20">
            <div className="_wrapper flex flex-col">
                
                <h2 className="_h">Варианты покупки</h2>

                <div className="flex flex-col md:flex-row justify-between gap-x-5 gap-y-5 mt-7">

                    <div className="flex flex-col gap-y-5 rounded-2xl bg-white w-full md:w-3/5 px-8 py-5"> 
                        
                        <div className="text-_blue_for-text text-[32px]">
                            Ипотека
                        </div>

                        <div className="flex">

                            <div className="flex flex-col w-3/5 justify-between gap-y-5 pr-5 text-[10px] border-r border-_gray">
                                <div className="flex justify-between gap-x-3">
                                    <button className="p-3 bg-_gray rounded-xl">
                                        Ипотека 0.1%
                                    </button>
                                    <button className=" p-3 bg-_gray rounded-xl">
                                        Семейная ипотека
                                    </button>
                                    <button className=" p-3 bg-_gray rounded-xl">
                                        IT специалистам
                                    </button>
                                </div>
                                <div>
                                    <label className="text-_gray-for-text">Стоимость квартиры</label>
                                    <input type="number" value={ price } onChange={ (e) => setPrice( Number(e.target.value) )} placeholder="" className="w-full rounded-lg bg-_gray p-3"/>
                                    <input type="range" value={ price } min={0} max={ MAX_PRICE } onChange={ (e) => setPrice( Number(e.target.value) )} className="w-[calc(100%-12px)] mx-auto block h-[1px]" />
                                </div>
                                <div>
                                    <label className="text-_gray-for-text">Первоначальный взнос</label>
                                    <input type="number" value={ initial } onChange={ (e) => setInitial( Number(e.target.value) )} placeholder="" className="w-full rounded-lg bg-_gray p-3"/>
                                    <input type="range" value={ initial } onChange={ (e) => setInitial( Number(e.target.value) )} min={0} max={ price } className="w-[calc(100%-12px)] mx-auto block h-[1px]" />
                                </div>
                                <div>
                                    <label className="text-_gray-for-text">Срок кредита</label>
                                    <input  type="numer" value={ years } onChange={ (e) => setYears( Number(e.target.value) )} placeholder="" className="w-full rounded-lg bg-_gray p-3"/>
                                    <input type="range" value={ years } onChange={ (e) => setYears( Number(e.target.value) )} min={1} max={ MAX_YEARS } className="w-[calc(100%-12px)] mx-auto block h-[1px]" />
                                </div>
                                <div>
                                    <button className="bg-_blue-button w-full rounded-lg p-3 mt-3">
                                        Получить одобрение онлайн
                                    </button>
                                </div>
                            </div>

                            <div className="flex flex-col w-2/5 justify-between pl-5">
                                <div className="text-[28px] leading-none font-medium pt-1">
                                    Ипотека { rate * 100 }%
                                </div>
                                <div className="">
                                    <p className="text-_gray-for-text">Процентная ставка</p>
                                    <p className="text-_blue_for-text text-[32px] font-semibold">{ rate * 100 }%</p>
                                </div>
                                <div className="">
                                    <p className="text-_gray-for-text">Ежемесячный платеж</p>
                                    <p className="text-_blue_for-text text-[32px] font-semibold">{ formatedPrice > 0 ? formatedPrice.toLocaleString() : 0 } руб.</p>
                                </div>
                                <div className="">
                                    <p className="text-_gray-for-text">Переплата</p>
                                    <p className="text-_blue_for-text text-[28px] font-medium">{ formatedOverRate > 0 ? formatedOverRate.toLocaleString() : 0} руб.</p>
                                </div>
                            </div>

                        </div>
                        
                    </div>
                    
                    <div className="flex flex-col justify-between rounded-2xl bg-[#177ABC] text-white w-full md:w-2/5  px-8 py-5">

                        <div>
                            <p>Рассрочка</p>
                        </div>
                        <div>
                            <p>С действующей программой гибкой рассрочки...</p>
                        </div>
                        <div>
                            <a className="underline">Подробнее</a>
                        </div>
                    </div>

                </div>
                
            </div>
        </section>
    )
}