import { useContext } from 'react'
import { LeanContext } from '@/context/LeanContext'
import { motion } from 'framer-motion'
import { Large } from '@/ui/Typography'

export const AboutSection = () => {
    const { data } = useContext(LeanContext)

    return (
        <section id='about'>
            <div className='lg:hidden h-screen w-full flex flex-col px-4 gap-10 items-center justify-center'>
                <div className='max-w-lg flex flex-col gap-2 items-center justify-center'>
                    <Large>
                        I like football, video games and travel across the
                        world. I consider myself a great team player with a big
                        sense of commitment.
                    </Large>
                    <Large>
                        For several years I worked as a team leader in a telco
                        and studied business administration.
                    </Large>
                    <Large>
                        Now I am a Software Developer, continuously learning
                        ways and tools to create solutions through the use of
                        technology.
                    </Large>
                </div>
                <img
                    className='max-w-[240px] max-h-[240px] rounded-full'
                    src={data.img}
                    alt='Leandro Roldán'
                />
            </div>
            <div
                id='about'
                className='hidden h-screen w-full lg:flex flex-row-reverse px-8 gap-10 xl:gap-20 2xl:gap-32 items-center justify-center'
            >
                <motion.div
                    initial={{ x: -300 }}
                    whileInView={{
                        x: 0,
                        transition: { duration: 0.5, ease: 'easeInOut' },
                    }}
                    viewport={{ once: true }}
                    className='max-w-xl flex flex-col gap-5 items-center justify-center'
                >
                    <Large>
                        I like football, video games and travel across the
                        world. I consider myself a great team player with a big
                        sense of commitment.
                    </Large>
                    <Large>
                        For several years I worked as a team leader in a telco
                        and studied business administration.
                    </Large>
                    <Large>
                        Now I am a Software Developer, continuously learning
                        ways and tools to create solutions through the use of
                        technology.
                    </Large>
                </motion.div>
                <motion.img
                    className='max-w-sm max-h-96 rounded-full shadow-lg dark:border-2 dark:border-amber-500'
                    src={data.img}
                    alt='Leandro Roldán'
                    initial={{ opacity: 0 }}
                    whileInView={{
                        opacity: 1,
                        transition: {
                            duration: 1,
                            ease: 'easeInOut',
                            delay: 0.5,
                        },
                    }}
                    viewport={{ once: true }}
                />
            </div>
        </section>
    )
}
