import '@/styles/globals.css'
import { ThemeProvider } from 'next-themes'
import LeanContextProvider from '@/context/LeanContext'

export default function App({ Component, pageProps }) {
    return (
        <LeanContextProvider>
            <ThemeProvider attribute='class'>
                <Component {...pageProps} />
            </ThemeProvider>
        </LeanContextProvider>
    )
}
