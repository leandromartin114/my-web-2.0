import Head from 'next/head'
import {
    Title,
    SubTitle,
    Body,
    Large,
    Small,
    SectionTitle,
} from '@/ui/Typography'
export default function Home() {
    return (
        <>
            <Head>
                <title>leandev</title>
                <meta name='description' content='Welcome to my site' />
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1'
                />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Title color='text-white'>LEANDRO MARTÍN ROLDÁN</Title>
            <SubTitle>Fullstack Developer</SubTitle>
            <Body color='text-white'>Hola que tal soy un párrafo</Body>
            <Large color='text-white'>projects</Large>
            <Small color='text-white'>Copyright los derechos reservados</Small>
            <SectionTitle color='text-blue-400'>contact</SectionTitle>
        </>
    )
}
