// import logoImg from '@/assets/logo.svg'
import homeImg from '@/assets/home.png'
import { globalStyles } from "@/styles/global"
import { Container, Header } from '@/styles/pages/app'
import { AppProps } from "next/app"
import Image from 'next/image'


globalStyles()
export default function App({ Component, pageProps }: AppProps) {
    return (
        <Container>
            <Header>
                <Image width={1000} height={600} src={homeImg.src} alt="" />
            </Header>

            <Component {...pageProps }/>
        </Container>
    )
}

