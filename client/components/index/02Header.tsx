import Image from "next/image";
import bg from '../../public/images/bg.webp'

export default function Header(){
    return(
        <section className="_section mt-5">
            <div className="_wrapper">
                <div className="relative text-white">
                    <Image src={bg} alt="Два дома в Ессентуках" className="w-full h-auto"/>

                    <div className="absolute top-[40%] left-[6%]">
                        <h1 className="text-[56px] leading-[50px]">Два дома<br/> в Ессентуках</h1>
                        <p className="text-[24px] leading-[50px]">Восемьдесят эксклюзивных квартир</p>
                    </div>

                    <a href="" className="absolute bottom-[10%] left-[6%] text-[24px] underline font-bold">Подробнее</a>
                </div>
            </div>
        </section>
    )
}