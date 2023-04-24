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
        <header className='h-14 w-full p-2 flex items-center justify-between'>
            {color === 'light' ? <Logo /> : <LogoW />}

            {color === 'light' ? (
                <div className='flex items-center justify-between gap-2'>
                    <button onClick={handleTheme}>
                        <MoonIcon />
                    </button>
                    <MobileNav />
                    <DesktopNav />
                </div>
            ) : (
                <div className='flex items-center justify-between gap-2'>
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
