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
        <section
            className='w-full h-screen px-4 md:px-8 gap-4 flex flex-col-reverse justify-center items-center lg:flex-row lg:justify-around'
            id='skills'
        >
            <motion.div
                initial={{ x: -300 }}
                whileInView={{
                    x: 0,
                    transition: { duration: 0.5, ease: 'easeInOut' },
                }}
                viewport={{ once: true }}
                className='flex flex-col gap-8'
            >
                <FrontendIcons />
                <BackendIcons />
                <OtherIcons />
            </motion.div>
            <motion.div
                initial={{ x: 300 }}
                whileInView={{
                    x: 0,
                    transition: { duration: 0.5, ease: 'easeInOut' },
                }}
                viewport={{ once: true }}
                className='flex flex-col gap-8 items-center'
            >
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
                <img
                    className='aspect-auto hidden xl:block xl:w-[540px] 2xl:w-[700px]'
                    src={DIPLOMA_URL}
                    alt='Fullstack Web Development Diploma'
                />
            </motion.div>
        </section>
    )
}
