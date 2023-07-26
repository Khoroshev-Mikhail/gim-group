import Image from 'next/image'
// import { Inter } from 'next/font/google'
import Projects from '@/components/index/04Projects'
import Nav from '@/components/index/01Nav'
import Callback from '@/components/index/03Callback'
import Variants from '@/components/index/05Variants'
import Feedback from '@/components/index/06Feedback'
import News from '@/components/index/07News'
import About from '@/components/index/08About'
import Footer from '@/components/index/09Footer'
import { MONTSERRATE } from './_app'
import Header_Projects from '@/components/projects/02Header_projects'
import About_Projects from '@/components/projects/03About_projects'
import Choose_Projects from '@/components/projects/04Choose_projects'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <div className={`${MONTSERRATE}`}>
            <Nav />
            <Header_Projects />
            <Callback />
            <About_Projects />
            <Choose_Projects />
            <Feedback />
            <Variants />
            <Footer />
        </div>
    )
}
