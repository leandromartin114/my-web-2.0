import { Anchor, GrayAnchor } from '@/ui/Anchors'
export const DesktopNav = () => {
    return (
        <nav className='hidden md:block'>
            <ul className='flex justify-around items-center gap-2'>
                <li>
                    <Anchor>projects</Anchor>
                </li>
                <li>
                    <Anchor>about</Anchor>
                </li>
                <li>
                    <Anchor>contact</Anchor>
                </li>
                <li>
                    <GrayAnchor>download cv</GrayAnchor>
                </li>
            </ul>
        </nav>
    )
}
