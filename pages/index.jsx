import Head from 'next/head'
import { Anchor, GrayAnchor } from '@/ui/Anchors'
import useColorMode from '@/hooks/useColorMode'
import { MainButton } from '@/ui/Buttons'

export default function Home() {
    const [colorMode, setColorMode] = useColorMode()

    const handleMode = () => {
        setColorMode(colorMode === 'light' ? 'dark' : 'light')
    }

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
                <MainButton colorMode={colorMode} onClick={handleMode}>
                    Mode
                </MainButton>
            </main>
        </>
    )
}
