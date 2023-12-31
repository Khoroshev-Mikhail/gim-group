import Image from 'next/image';
import arrow_right_white from '../../../public/images/arrow_right_white.svg'

function truncateString(str: string) {
    if (str.length <= 50) {
      return str;
    } else {
      return str.substring(0, 990);
    }
}

export default function Slide_news( { date, title, text }: { date: Date, title: string, text: string} ){

    const formattedDate = date.toLocaleDateString();
    
    return(
        <div className="flex flex-col bg-white rounded-2xl p-5 text-left">
            <div className=" text-_gray-for-text text-[12px] md:text-[10px]">
                { formattedDate }
            </div>
            <div className="text-_blue_for-text mt-5 pr-8 font-semibold text-[20px] md:text-[18px]">
                { title }
            </div>
            <div className="flex gap-x-4 mt-10">
                <p className="block w-10/12 text-_gray-for-text text-[10px]">
                    { truncateString(text) }
                </p>
                <button className="ml-auto flex flex-col justify-center w-2/12 max-w-[50px]">
                    <div className='flex flex-col justify-center w-full aspect-square bg-_gray-button rounded-2xl'>
                        <Image src={arrow_right_white} alt=">" width={14} height={14} className='mx-auto'/>
                    </div>
                </button>
            </div>
        </div>
    )
}