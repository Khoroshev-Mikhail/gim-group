import Image from "next/image";
import logo_white_footer from '../../public/images/logo_white_footer.png'
import logo_white from '../../public/images/logo_white.png'

export default function About(){
    return(
        <section className="_section mt-32">
            <div className="_wrapper ">
                <div className="flex flex-col md:flex-row justify-between rounded-2xl bg-[url('/images/bg.webp')] bg-cover bg-center bg-no-repeat text-white !p-10">        

                <div className="w-full md:w-1/4 text-[24px] md:text-[22px] lg:text-[28px]">
                    О застройщике
                </div>
                <div className="w-full md:w-3/4 mt-5 flex-col">
                    <div className="">
                        <Image src={logo_white} alt="Логотип ГИМ-ГРУПП" className="w-full"/>
                    </div>
                    <div className="md:pl-[27.5%] mt-5 md:-mt-5">
                        <p className="text-[12px] sm:text-[14px] md:text-[10px]">ООО "СЗ ГИМ ГРУПП" представляет собой комманду профессионалов с многолетним стажем работы в сфере строительства жилой недвижимости. Забота о своих клиентов с учетом индивидуального подхода к каждому, применение современных технологических решений, строгий контроль качества и сроков выполнения работ являются отличительными способностями комании, отличающими ее от других на рынке недвижимости города Владимира и области.</p>
                        <p className="text-[10px] mt-1">ООО "ГИМ ГРУПП" - гарант успешного разрешения Ващего жилищного вопроса.</p>
                    </div>
                </div>
                
                </div>
            </div>
        </section>
    )
}