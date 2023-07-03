import Image from 'next/image'
import chest1 from '../../public/images/chest_1.webp'
import chest2 from '../../public/images/bg.webp'
import Chest from './04Projects/Chest'

export default function Projects(){
    return(
        <section className="_section mt-20">
            <div className="_wrapper">
                
                <h2 className="_h">Проекты</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-7 mt-7">
                    <Chest src={chest1} />
                    <Chest src={chest2} />
                    <Chest src={chest2} />
                    <Chest src={chest1} />
                </div>

            </div>
        </section>
    )
}