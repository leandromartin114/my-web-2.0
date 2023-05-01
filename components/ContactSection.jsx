import { ContactForm } from './ContactForm'
import { SectionTitle } from '@/ui/Typography'
import { motion } from 'framer-motion'

export const ContactSection = () => {
    return (
        <section id='contact'>
            <div className='xl:hidden h-screen w-full flex flex-col px-4 gap-10 items-center justify-center'>
                <SectionTitle>contact me</SectionTitle>
                <ContactForm />
            </div>
            <div className='hidden h-screen w-full xl:flex items-center justify-start xl:bg-taza_blanca xl:dark:bg-taza_negra bg-contain 2xl:bg-cover bg-no-repeat bg-center'>
                <motion.div
                    initial={{ x: -200 }}
                    whileInView={{
                        x: 0,
                        transition: { duration: 0.8, ease: 'easeInOut' },
                    }}
                    viewport={{ once: true }}
                    className='ml-40 2xl:ml-80 flex flex-col items-center justify-center gap-8'
                >
                    <SectionTitle>contact me</SectionTitle>
                    <ContactForm />
                </motion.div>
            </div>
        </section>
    )
}
