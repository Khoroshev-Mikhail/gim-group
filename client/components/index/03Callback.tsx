import { FormEvent } from "react"

export default function Callback(){
    const formHandler = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault()
    }

    return(
        <section className="_section mt-14">
            <div className="_wrapper">
                <div className="">
                    <form onSubmit={formHandler} className="flex justify-between gap-x-8">
                        <input type="text" name="name" placeholder="Ваше имя" className="w-1/3 p-4 bg-white rounded-xl"/>
                        <input type="tel" name="phone" placeholder="Ваш телефон" className="w-1/3 p-4 bg-white rounded-xl"/>
                        <button type="submit" className="w-1/3 p-4 bg-_blue-for-bg text-white rounded-xl">
                            Получить консультацию
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}