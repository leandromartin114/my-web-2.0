import { MobileAnchor, MobileGrayAnchor } from '@/ui/Anchors'
import { MenuIcon } from '@/ui/Icons'
import { useState } from 'react'

export const MobileNav = () => {
    const [open, setOpen] = useState(false)

    const navHandler = () => {
        setOpen(!open)
    }

    return (
        <nav className='relative md:hidden'>
            <button className='relative z-10' onClick={navHandler}>
                <MenuIcon />
            </button>
            <button
                tabIndex={-1}
                onClick={navHandler}
                className={`fixed inset-0 bg-black opacity-20 dark:bg-gray-600 dark:opacity-70 cursor-default ${
                    open ? 'visible' : 'invisible'
                }`}
            ></button>
            <ul
                className={`absolute right-0 w-44 py-2 bg-white dark:bg-black rounded-lg shadow-xl transition-all duration-400 ease-linear overflow-hidden ${
                    open ? 'max-h-60' : 'max-h-0 invisible'
                }`}
            >
                <li>
                    <MobileAnchor>projects</MobileAnchor>
                </li>
                <li>
                    <MobileAnchor>about</MobileAnchor>
                </li>
                <li>
                    <MobileAnchor>contact</MobileAnchor>
                </li>
                <li>
                    <MobileGrayAnchor>download cv</MobileGrayAnchor>
                </li>
            </ul>
        </nav>
    )
}
