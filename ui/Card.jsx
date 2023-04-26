import { Large, Small } from './Typography'
import { CardAnchor } from './Anchors'

export const Card = ({ title, img, url, front, back, description }) => {
    return (
        <div className='h-[480px] md:h-[600px] py-2 grid content-start items-center justify-items-center gap-4 shadow-lg rounded-lg bg-gray-50 dark:bg-black dark:shadow-gray-700 dark:border-solid dark:border-2 dark:border-gray-700'>
            <Large>{title}</Large>
            <img
                src={img}
                alt={title}
                className='w-[270px] md:w-[300px] xl:w-[360px] h-full rounded-lg'
            />
            <div className='w-[265px] md:w-[300px] xl:w-[360px] h-full grid justify-items-center items-center gap-4'>
                <div className='w-full flex justify-around'>
                    <CardAnchor link={url}>visit</CardAnchor>
                    <CardAnchor link={front}>front</CardAnchor>
                    <CardAnchor link={back}>back</CardAnchor>
                </div>
                <div>
                    <Small>{description}</Small>
                </div>
            </div>
        </div>
    )
}
