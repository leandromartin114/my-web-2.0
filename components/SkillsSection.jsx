import { motion } from 'framer-motion'
import { FrontendIcons, BackendIcons, OtherIcons } from '@/ui/IconsMatrix'
import { Body, SectionTitle } from '@/ui/Typography'

const CERTIFICATE_URL =
    'https://v1.apx.school/diploma/dwf/319b3119-c6f8-41b5-8101-c4a51af9f49f'
const APX_URL = 'https://apx.school/'
const DIPLOMA_URL =
    'https://res.cloudinary.com/deooec1tp/image/upload/v1682809932/My%20web/Diploma_akj1hy.png'

export const SkillsSection = () => {
    return (
        <section id='skills'>
            <div className='w-full h-screen px-4 gap-10 flex flex-col-reverse justify-center items-center lg:hidden'>
                <div className='flex flex-col gap-8'>
                    <FrontendIcons />
                    <BackendIcons />
                    <OtherIcons />
                </div>
                <div className='flex flex-col gap-8 items-center'>
                    <SectionTitle>skills</SectionTitle>
                    <div className='max-w-xs'>
                        <Body>
                            I acquired these skills after graduating from{' '}
                            <a
                                className='text-amber-500 dark:text-amber-300'
                                target='_blank'
                                rel='noreferrer'
                                href={APX_URL}
                            >
                                apx.school{' '}
                            </a>
                            Fullstack Web Development{' '}
                            <a
                                className='text-amber-500 dark:text-amber-300'
                                target='_blank'
                                rel='noreferrer'
                                href={CERTIFICATE_URL}
                            >
                                career
                            </a>
                        </Body>
                    </div>
                </div>
            </div>
            <div className='hidden w-full h-screen px-8 gap-4 2xl:gap-24 lg:flex lg:flex-col-reverse justify-center items-center xl:flex-row xl:justify-around 2xl:justify-center'>
                <motion.div
                    initial={{ x: -100 }}
                    whileInView={{
                        x: 0,
                        transition: { duration: 0.5, ease: 'easeInOut' },
                    }}
                    viewport={{ once: true }}
                    className='flex flex-col gap-11'
                >
                    <FrontendIcons />
                    <BackendIcons />
                    <OtherIcons />
                </motion.div>
                <motion.div
                    initial={{ x: 100 }}
                    whileInView={{
                        x: 0,
                        transition: { duration: 0.5, ease: 'easeInOut' },
                    }}
                    viewport={{ once: true }}
                    className='flex flex-col gap-8 items-center'
                >
                    <SectionTitle>skills</SectionTitle>
                    <div className='max-w-md'>
                        <Body>
                            I acquired these skills after graduating from{' '}
                            <a
                                className='text-amber-500 dark:text-amber-300'
                                target='_blank'
                                rel='noreferrer'
                                href={APX_URL}
                            >
                                apx.school{' '}
                            </a>
                            Fullstack Web Development{' '}
                            <a
                                className='text-amber-500 dark:text-amber-300'
                                target='_blank'
                                rel='noreferrer'
                                href={CERTIFICATE_URL}
                            >
                                career
                            </a>
                        </Body>
                    </div>
                    <motion.img
                        className='hidden xl:block aspect-auto xl:w-[540px] 2xl:w-[700px] shadow-lg rounded-lg'
                        src={DIPLOMA_URL}
                        alt='Fullstack Web Development Diploma'
                        whileHover={{
                            scale: 1.05,
                        }}
                        transition={{ duration: 0.5, ease: 'easeInOut' }}
                    />
                </motion.div>
            </div>
        </section>
    )
}
