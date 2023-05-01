import { Large, SectionTitle } from '@/ui/Typography'
import { motion } from 'framer-motion'

export const AboutSection = ({ img, description }) => {
    return (
        <>
            <section
                id='about'
                className='lg:hidden h-screen w-full flex flex-col px-4 gap-10 items-center justify-center'
            >
                <div className='max-w-xl flex flex-col gap-10 items-center justify-center'>
                    <SectionTitle>about me</SectionTitle>
                    <Large>{description}</Large>
                </div>
                <img
                    className='max-w-[280px] max-h-[280px] rounded-full'
                    src={img}
                    alt='Leandro Roldán'
                />
            </section>
            <section
                id='about'
                className='hidden h-screen w-full lg:flex px-4 gap-10 xl:gap-20 2xl:gap-32 items-center justify-center'
            >
                <motion.div
                    initial={{ x: -300 }}
                    whileInView={{
                        x: 0,
                        transition: { duration: 0.5, ease: 'easeInOut' },
                    }}
                    viewport={{ once: true }}
                    className='max-w-xl flex flex-col gap-10 items-center justify-center'
                >
                    <SectionTitle>about me</SectionTitle>
                    <Large>{description}</Large>
                </motion.div>
                <motion.img
                    className='max-w-sm max-h-96 rounded-full'
                    src={img}
                    alt='Leandro Roldán'
                    initial={{ opacity: 0 }}
                    whileInView={{
                        opacity: 1,
                        transition: { duration: 1, ease: 'easeInOut' },
                    }}
                    viewport={{ once: true }}
                />
            </section>
        </>
    )
}
