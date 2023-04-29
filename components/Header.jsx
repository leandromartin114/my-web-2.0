import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Logo, LogoW, SunIcon, MoonIcon } from '@/ui/Icons'
import { MobileNav } from './MobileNav'
import { DesktopNav } from './DesktopNav'

export const Header = () => {
    const { theme, setTheme } = useTheme()
    const [color, setColor] = useState('light')
    const handleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }
    useEffect(() => {
        setColor(theme)
    }, [theme])

    return (
        <header className='w-full px-4 md:px-8 py-5 flex items-center justify-between'>
            {color === 'light' ? <Logo /> : <LogoW />}
            {color === 'light' ? (
                <div className='flex items-center justify-between gap-5 md:gap-7 lg:gap-9'>
                    <button className='flex items-center' onClick={handleTheme}>
                        <MoonIcon />
                    </button>
                    <MobileNav />
                    <DesktopNav />
                </div>
            ) : (
                <div className='flex items-center justify-between gap-5 md:gap-7 lg:gap-9'>
                    <button onClick={handleTheme}>
                        <SunIcon />
                    </button>
                    <DesktopNav />
                    <MobileNav />
                </div>
            )}
        </header>
    )
}
