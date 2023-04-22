import { Logo, LogoW, SunIcon, MoonIcon, Menu } from '@/ui/Icons'
import { useTheme } from 'next-themes'

export const Header = () => {
    const { theme, setTheme } = useTheme()
    const handleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    return (
        <header className='h-14 w-full p-2 flex items-center justify-between'>
            {theme === 'light' ? <Logo /> : <LogoW />}

            {theme === 'light' ? (
                <div className='w-24 flex items-center justify-between'>
                    <MoonIcon onClick={handleTheme} />
                    <Menu />
                </div>
            ) : (
                <div className='w-24 flex items-center justify-between'>
                    <SunIcon onClick={handleTheme} />
                    <Menu />
                </div>
            )}
        </header>
    )
}
