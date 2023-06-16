
export default function Variants(){
    return(
        <section className="_section">
            <div className="_wrapper flex">
                
                <h2 className="_h">Варианты покупки</h2>

                <div className="flex">

                    <div className="flex"> 

                        <div className="flex flex-col">
                            <div>
                                <p>Ипотека</p>
                            </div>
                            <div className="flex">
                                <button>Ипотека 0.01%</button>
                                <button>Семейная ипотека</button>
                                <button>IT специалистам</button>
                            </div>
                            <div>
                                <label>Стоимость квартиры</label>
                                <input type="text" placeholder=""/>
                                {/* ползунок */}
                            </div>
                            <div>
                                <label>Первоначальный взнос</label>
                                <input />
                            </div>
                            <div>
                                <label>Срок кредита</label>
                                <input />
                            </div>
                            <div>
                                <button>Получить одобрение онлайн</button>
                            </div>
                        </div>

                        <div className="flex flex-col">
                            <div>
                                Ипотека 0,1%
                            </div>
                            <div>
                                <p>Процентная ставка</p>
                                <p>0,1%</p>
                            </div>
                            <div>
                                <p>Ежемесячный платеж</p>
                                <p>17 113 руб</p>
                            </div>
                            <div>
                                <p>Переплата</p>
                                <p>23 113 руб</p>
                            </div>
                        </div>
                        
                    </div>
                    
                    <div className="flex flex-col">

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