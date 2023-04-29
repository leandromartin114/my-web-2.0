import { Anchor, GrayAnchor } from '@/ui/Anchors'
export const DesktopNav = () => {
    return (
        <nav className='hidden md:block'>
            <ul className='flex justify-around items-center gap-7 lg:gap-9'>
                <li>
                    <GrayAnchor>download cv</GrayAnchor>
                </li>
                <li>
                    <Anchor>projects</Anchor>
                </li>
                <li>
                    <Anchor>skills</Anchor>
                </li>
                <li>
                    <Anchor>about</Anchor>
                </li>
                <li>
                    <Anchor>contact</Anchor>
                </li>
            </ul>
        </nav>
    )
}
