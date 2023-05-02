import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Logo, LogoW, SunIcon, MoonIcon } from '@/ui/Icons'
import { MobileNav } from './MobileNav'
import { DesktopNav } from './DesktopNav'

export const Header = () => {
    const { resolvedTheme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    const handleTheme = () => {
        setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
    }

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null
    return (
        <header className='w-full px-4 md:px-8 py-5 flex items-center justify-between'>
            {resolvedTheme === 'light' ? <Logo /> : <LogoW />}
            {resolvedTheme === 'light' ? (
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
