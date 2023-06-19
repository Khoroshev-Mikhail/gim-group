
export default function Variants(){
    return(
        <section className="_section mt-16">
            <div className="_wrapper flex flex-col">
                
                <h2 className="_h">Варианты покупки</h2>

                <div className="flex justify-between gap-x-5 mt-5">

                    <div className="flex flex-col gap-y-5 rounded-2xl bg-white w-3/5 px-8 py-5"> 
                        
                        <div className="text-_blue_for-text text-[32px]">
                            Ипотека
                        </div>

                        <div className="flex">

                            <div className="flex flex-col w-3/5 justify-between gap-y-5 pr-5 border-r border-_gray">
                                <div className="flex justify-between gap-x-3">
                                    <button className="w-1/3 bg-_gray rounded-lg">
                                        Ипотека 0.01%
                                    </button>
                                    <button className="w-1/3 bg-_gray rounded-lg">
                                        Семейная ипотека
                                    </button>
                                    <button className="w-1/3 bg-_gray rounded-lg">
                                        IT специалистам
                                    </button>
                                </div>
                                <div>
                                    <label className="text-_gray-for-text">Стоимость квартиры</label>
                                    <input type="text" placeholder="" className="w-full rounded-lg bg-_gray p-3"/>
                                    {/* ползунок */}
                                </div>
                                <div>
                                    <label className="text-_gray-for-text">Первоначальный взнос</label>
                                    <input type="number" placeholder="" className="w-full rounded-lg bg-_gray p-3"/>
                                    {/* ползунок */}
                                </div>
                                <div>
                                    <label className="text-_gray-for-text">Срок кредита</label>
                                    <input  type="numer" placeholder="" className="w-full rounded-lg bg-_gray p-3"/>
                                    {/* ползунок */}
                                </div>
                                <div>
                                    <button className="bg-_blue-button w-full rounded-lg p-3">
                                        Получить одобрение онлайн
                                    </button>
                                </div>
                            </div>

                            <div className="flex flex-col w-2/5 justify-between pl-5">
                                <div className="text-[32px]">
                                    Ипотека 0,1%
                                </div>
                                <div className="">
                                    <p className="text-_gray-for-text">Процентная ставка</p>
                                    <p className="text-_blue_for-text">0,1%</p>
                                </div>
                                <div className="">
                                    <p className="text-_gray-for-text">Ежемесячный платеж</p>
                                    <p className="text-_blue_for-text">17 113 руб</p>
                                </div>
                                <div className="">
                                    <p className="text-_gray-for-text">Переплата</p>
                                    <p className="text-_blue_for-text">23 113 руб</p>
                                </div>
                            </div>

                        </div>
                        
                    </div>
                    
                    <div className="flex flex-col justify-between rounded-2xl bg-[#177ABC] text-white w-2/5 px-8 py-5">

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