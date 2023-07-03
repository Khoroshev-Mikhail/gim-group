import Image from "next/image";
import bg from '../../public/images/bg.webp'

export default function Header(){
    return(
        <section className="_section mt-5">
            <div className="_wrapper">
                <div className="relative text-white">
                    <Image src={bg} alt="Два дома в Ессентуках" className="w-full h-auto"/>

                    <div className="absolute top-[10%] xs:top-[20%] md:top-[30%]  left-[6%]">
                        <h1 className="text-[22px] xs:text-[28px] sm:text-[36px] md:text-[48px] lg:text-[64px] maxw:text-[72px] leading-none">Два дома<br/> в Ессентуках</h1>
                        <p className="text-[10px] xs:text-[12px] sm:text-[14px] md:text-[16px] lg:text-[20px] leading-none font-semibold mt-2">Восемьдесят эксклюзивных квартир</p>
                    </div>

                    <a href="#" className="absolute bottom-[10%] left-[6%] text-[12px] xs:text-[14px] sm:text-[16px] md:text-[18px] lg:text-[24px] leading-none font-semibold border-b pb-[-5px] cursor-pointer">Подробнее</a>
                </div>
            </div>
        </section>
    )
}