import { useContext, useState } from 'react'
import { LeanContext } from '@/context/LeanContext'
import { MobileAnchor, MobileGrayAnchor } from '@/ui/Anchors'
import { MenuIcon } from '@/ui/Icons'

export const MobileNav = () => {
    const [open, setOpen] = useState(false)
    const { data } = useContext(LeanContext)

    const navHandler = () => {
        setOpen(!open)
    }

    return (
        <nav className='relative md:hidden'>
            <button
                className='relative z-10 flex items-center'
                onClick={navHandler}
            >
                <MenuIcon />
            </button>
            <button
                tabIndex={-1}
                onClick={navHandler}
                className={`fixed inset-0 bg-black opacity-20 dark:bg-gray-600 dark:opacity-70 cursor-default ${
                    open ? 'visible' : 'invisible'
                }`}
            />
            <ul
                className={`absolute right-0 w-44 py-2 bg-white dark:bg-black rounded-lg shadow-xl transition-all duration-400 ease-linear overflow-hidden ${
                    open ? 'max-h-60' : 'max-h-0 invisible'
                }`}
            >
                <li>
                    <MobileAnchor onClick={navHandler} link='#projects'>
                        {' '}
                        projects
                    </MobileAnchor>
                </li>
                <li>
                    <MobileAnchor onClick={navHandler} link='#skills'>
                        skills
                    </MobileAnchor>
                </li>
                <li>
                    <MobileAnchor onClick={navHandler} link='#about'>
                        about
                    </MobileAnchor>
                </li>
                <li>
                    <MobileAnchor onClick={navHandler} link='#contact'>
                        contact
                    </MobileAnchor>
                </li>
                <li>
                    <MobileGrayAnchor link={data.cv}>
                        download cv
                    </MobileGrayAnchor>
                </li>
            </ul>
        </nav>
    )
}
