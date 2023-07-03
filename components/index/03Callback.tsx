import { FormEvent } from "react"

export default function Callback(){
    const formHandler = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault()
    }

    return(
        <section className="_section mt-14">
            <div className="_wrapper">

                    <form onSubmit={formHandler} className="flex flex-col gap-y-2 xs:gap-y-3 sm:gap-y-4 md:flex-row md:justify-between gap-x-8">
                        <input type="text" name="name" placeholder="Ваше имя" className="w-full md:w-1/3 p-4 bg-white rounded-xl"/>
                        <input type="tel" name="phone" placeholder="Ваш телефон" className="w-full md:w-1/3 p-4 bg-white rounded-xl"/>
                        <button type="submit" className="w-full md:w-1/3 p-4 bg-_blue-for-bg text-white rounded-xl">
                            Получить консультацию
                        </button>
                    </form>
                
            </div>
        </section>
    )
}