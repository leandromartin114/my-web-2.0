import { Anchor, GrayAnchor } from '@/ui/Anchors'
export const FooterNav = () => {
    return (
        <nav>
            <ul className='flex flex-col items-start'>
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
                <li>
                    <Anchor>home</Anchor>
                </li>
            </ul>
        </nav>
    )
}
