import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFlip, Pagination, Navigation } from 'swiper'
import { Large, Small } from './Typography'
import { CardAnchor } from './Anchors'
import 'swiper/css'
import 'swiper/css/effect-flip'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

export const Carousel = ({ items }) => {
    return (
        <div className='max-w-screen-xl'>
            <Swiper
                effect='flip'
                grabCursor
                pagination
                navigation
                modules={[EffectFlip, Pagination, Navigation]}
                className='h-full w-[320px] md:w-[360px] xl:w-[420px]'
            >
                {items.map((item, index) => (
                    <SwiperSlide key={item.title}>
                        <div
                            key={index}
                            className='h-[480px] md:h-[600px] py-2 grid content-start items-center justify-items-center gap-4 shadow-lg rounded-lg bg-gray-50 dark:bg-black dark:shadow-gray-700 dark:border-solid dark:border-2 dark:border-gray-700'
                        >
                            <Large>{item.title}</Large>
                            <img
                                src={item.img}
                                alt={item.title}
                                className='w-[270px] md:w-[300px] xl:w-[360px] h-full rounded-lg'
                            />
                            <div className='w-[265px] md:w-[300px] xl:w-[360px] h-full grid justify-items-center items-center gap-4'>
                                <div className='w-full flex justify-around'>
                                    <CardAnchor link={item.url}>
                                        visit
                                    </CardAnchor>
                                    <CardAnchor link={item.front}>
                                        front
                                    </CardAnchor>
                                    <CardAnchor link={item.back}>
                                        back
                                    </CardAnchor>
                                </div>
                                <div className=''>
                                    <Small>{item.description}</Small>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}
