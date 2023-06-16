import Image, { StaticImageData } from "next/image";

export default function Chest( { src }: { src: StaticImageData } ){

    return(
        <div className="relative aspect-[225/100] rounded-xl text-white">
            
            <Image src={src} alt="w-full h-full" />
            
            <div className="absolute w-full top-[12%] left-[6%] flex">
                <button>Сдан</button>
                <button>Осталось мало квартир</button>
                <button>Акция</button>
            </div>

            <div className="absolute top-[40%] left-[6%]">
                <h3>Жилой комплекс "Жемчужина"</h3>
                <p>г.Владимир, ул.Чайковского, д.8</p>
            </div>

            <p className="absolute bottom-[12%] left-[6%]">от 2 790 000 руб.</p>

        </div>
    )
}