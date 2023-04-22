import Head from 'next/head'
import { Header } from '@/components/Header'

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
            <main className='h-screen dark:bg-black'>
                <Header />
            </main>
        </>
    )
}
