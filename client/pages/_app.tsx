import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Montserrat } from 'next/font/google'
//Шрифты скачай woff2 https://github.com/JulietaUla/Montserrat/tree/master/fonts/webfonts

const MONTSERRATE_FONT = Montserrat({ subsets: ['cyrillic'] })
export const MONTSERRATE = MONTSERRATE_FONT.className

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
