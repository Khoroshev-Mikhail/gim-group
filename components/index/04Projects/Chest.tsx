import Image, { StaticImageData } from "next/image";

export default function Chest( { src }: { src: StaticImageData } ){

    return(
        <div className="relative aspect-[225/100] rounded-xl text-white">
            
            <img src={src.src} className="w-full h-full" />
            
            <div className="absolute w-full top-[14%] left-[7%] flex gap-x-2">
                <div className="px-3 py-1 rounded-md text-[10px] font-semibold bg-_blue-button">Сдан</div>
                <div className="px-3 py-1 rounded-md text-[10px] font-semibold bg-_red-button">Осталось мало квартир</div>
                <div className="px-3 py-1 rounded-md text-[10px] font-semibold bg-_orange-button">Акция</div>
            </div>

            <div className="absolute top-[50%] left-[6%]">
                <h3 className="w-2/3 font-semibold text-[20px] leading-[18px]">Жилой комплекс "Жемчужина"</h3>
                <p className="text-[10px] mt-1">г.Владимир, ул.Чайковского, д.8</p>
            </div>

            <p className="absolute bottom-[12%] left-[6%] font-semibold text-[20px]">от 2 790 000 руб.</p>

        </div>
    )
}