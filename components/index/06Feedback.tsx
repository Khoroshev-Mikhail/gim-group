import { FormEvent } from "react"

export default function Feedback(){
    const formHandler = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault()
    }

    return(
        <section className="_section mt-20">
            <div className="_wrapper ">
                <div className="flex flex-col md:flex-row justify-between h-full py-5 px-2 xs:px-4 md:px-5 md:py-10 lg:p-20 rounded-2xl bg-[url('/images/bg.webp')] bg-cover bg-center bg-no-repeat">

                    <div className="flex flex-col justify-center h-full text-white md:w-2/5 md:pr-4">
                        <div>
                            <p className="_h2-text">Остались вопросы?</p>
                            <p className="text-[14px] xs:text-[16px] sm:text-[18px]">Оставьте свои контактные данные и мы свяжемся с вами</p>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center h-full md:w-3/5">
                        <form className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-4" onSubmit={formHandler}>
                            <div className="col-span-1 rounded-lg bg-white p-3">
                                <input type="text" name="name" placeholder="Ваше имя" className="w-full"/>
                            </div>
                            <div className="col-span-1 rounded-lg bg-white p-3">
                                <input type="text" name="phone" placeholder="Ваш телефон" className="w-full"/>
                            </div>
                            <div className="col-span-1">
                                <select className="w-full bg-white text-_blue_for-text rounded-lg p-3.5">
                                    <option>Сегодня</option>
                                    <option>Завтра</option>
                                </select>
                            </div>
                            <div className="col-span-1">
                                <select className="w-full bg-white text-_blue_for-text rounded-lg p-3.5">
                                    <option>Ближайшее время</option>
                                    <option>09:00</option>
                                    <option>09:30</option>
                                    <option>10:00</option>
                                    <option>10:30</option>
                                    <option>11:00</option>
                                    <option>11:30</option>
                                    <option>12:00</option>
                                    <option>12:30</option>
                                    <option>13:00</option>
                                    <option>13:30</option>
                                    <option>14:00</option>
                                    <option>14:30</option>
                                    <option>15:00</option>
                                    <option>15:30</option>
                                    <option>16:00</option>
                                    <option>16:30</option>
                                    <option>17:00</option>
                                    <option>17:30</option>
                                </select>
                            </div>
                            <div className="md:col-start-2 md:col-end-3">
                                <button type="submit" className="w-full text-center p-3 rounded-lg bg-_blue-for-bg">Отправить</button>
                            </div>
                        </form>
                    </div>

                </div>    
            </div>
        </section>
    )
}