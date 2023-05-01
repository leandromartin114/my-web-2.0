import { useContext } from 'react'
import { LeanContext } from '@/context/LeanContext'
import { Anchor, GrayAnchor } from '@/ui/Anchors'

export const DesktopNav = () => {
    const { data } = useContext(LeanContext)

    return (
        <nav className='hidden md:block'>
            <ul className='flex justify-around items-center gap-7 lg:gap-9'>
                <li>
                    <GrayAnchor link={data.cv}>download cv</GrayAnchor>
                </li>
                <li>
                    <Anchor link='#projects'>projects</Anchor>
                </li>
                <li>
                    <Anchor link='#skills'>skills</Anchor>
                </li>
                <li>
                    <Anchor link='#about'>about</Anchor>
                </li>
                <li>
                    <Anchor link='#contact'>contact</Anchor>
                </li>
            </ul>
        </nav>
    )
}
