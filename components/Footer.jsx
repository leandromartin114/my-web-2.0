import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Logo, LogoW } from '@/ui/Icons'
import { FooterNav } from './FooterNav'
import { Small } from '@/ui/Typography'

export const Footer = () => {
    const { theme, setTheme } = useTheme()
    const [color, setColor] = useState('light')

    useEffect(() => {
        setColor(theme)
    }, [theme])

    return (
        <footer className='w-full px-4 md:px-8 py-5 gap-8 flex flex-col items-center md:flex-row md:justify-between'>
            <div>
                <FooterNav />
            </div>
            <div className='flex flex-col justify-center items-center gap-4'>
                {color === 'light' ? <Logo /> : <LogoW />}
                <Small>Made by Leandro Roldán 2023</Small>
            </div>
        </footer>
    )
}
