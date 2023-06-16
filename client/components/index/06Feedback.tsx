import { FormEvent } from "react"

export default function Feedback(){
    const formHandler = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault()
    }

    return(
        <section className="_section">
            <div className="_wrapper flex">
                
                <div>
                    <p>Остались вопросы?</p>
                    <p>Оставьте свои контактные данные и мы свяжемся с вами</p>
                </div>

                <form className="grid" onSubmit={formHandler}>
                    <div>
                        <input type="text" name="name" placeholder="Ваше имя"/>
                    </div>
                    <div>
                        <input type="text" name="phone" placeholder="Ваш телефон"/>
                    </div>
                    <div>
                        <select>
                            <option>Сегодня</option>
                            <option>Завтра</option>
                        </select>
                    </div>
                    <div>
                        <select>
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
                    <div>
                        <button type="submit"></button>
                    </div>
                </form>

            </div>
        </section>
    )
}