import '@/styles/globals.css'
import { ThemeProvider } from 'next-themes'
import LeanContextProvider from '@/context/LeanContext'

export default function App({ Component, pageProps }) {
    return (
        <ThemeProvider attribute='class'>
            <LeanContextProvider>
                <Component {...pageProps} />
            </LeanContextProvider>
        </ThemeProvider>
    )
}
