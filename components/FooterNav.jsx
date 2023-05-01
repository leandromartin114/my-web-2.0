import { useContext, useState } from 'react'
import { LeanContext } from '@/context/LeanContext'
import { Anchor, GrayAnchor } from '@/ui/Anchors'

export const FooterNav = () => {
    const { data } = useContext(LeanContext)

    return (
        <nav>
            <ul className='flex flex-col items-start'>
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
                <li>
                    <Anchor link='#top'>home</Anchor>
                </li>
            </ul>
        </nav>
    )
}
