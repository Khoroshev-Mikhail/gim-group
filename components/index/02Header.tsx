import Image from "next/image";
import bg from '../../public/images/bg.webp'

export default function Header(){
    return(
        <section className="_section mt-5">
            <div className="_wrapper">
                <div className="relative text-white">
                    <Image src={bg} alt="Два дома в Ессентуках" className="w-full h-auto"/>

                    <div className="absolute top-[30%] left-[6%]">
                        <h1 className="text-[72px] leading-[72px]">Два дома<br/> в Ессентуках</h1>
                        <p className="text-[20px] leading-[50px] font-semibold">Восемьдесят эксклюзивных квартир</p>
                    </div>

                    <a href="#" className="absolute bottom-[10%] left-[6%] text-[24px] leading-none font-semibold border-b pb-[-5px] cursor-pointer">Подробнее</a>
                </div>
            </div>
        </section>
    )
}