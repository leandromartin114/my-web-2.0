import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card } from '@/ui/Card'
import { SecondaryButton } from '@/ui/Buttons'
import { SectionTitle } from '@/ui/Typography'

export const ProjectsSection = ({ projects }) => {
    const [projectSelected, setProjectSelected] = useState('Prodigar')

    return (
        <section
            id='projects'
            className='hidden lg:grid w-full h-screen px-4 md:px-8 grid-cols-2 2xl:flex 2xl:gap-44 2xl:justify-center items-center'
        >
            <motion.div
                className='h-[680px] flex flex-col justify-between items-center gap-40'
                initial={{ x: -300 }}
                whileInView={{
                    x: 0,
                    transition: { duration: 0.5, ease: 'easeInOut' },
                }}
                viewport={{ once: true }}
            >
                <div className='relative'>
                    <SectionTitle>projects</SectionTitle>
                    <ul className='absolute w-80 py-4 ml-6 mt-4 text-right flex flex-col gap-4 bg-white dark:bg-black rounded-lg transition-all duration-400 ease-linear overflow-hidden'>
                        {projects.map((p, i) => {
                            let active
                            if (p.title === projectSelected) {
                                active = true
                            } else {
                                active = false
                            }
                            return (
                                <motion.li
                                    key={p.title}
                                    initial={{
                                        opacity: 0,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        transition: {
                                            duration: 0.5,
                                            ease: 'easeInOut',
                                            delay: (i + 1) * 0.3,
                                        },
                                    }}
                                    viewport={{ once: true }}
                                >
                                    <SecondaryButton
                                        onClick={() => {
                                            setProjectSelected(p.title)
                                        }}
                                        active={active}
                                    >
                                        {p.title}
                                    </SecondaryButton>
                                </motion.li>
                            )
                        })}
                    </ul>
                </div>
            </motion.div>
            <motion.div
                initial={{ x: 300 }}
                whileInView={{
                    x: 0,
                    transition: { duration: 0.5, ease: 'easeInOut' },
                }}
                viewport={{ once: true }}
                className='h-[680px] flex justify-center items-center'
            >
                {projects.map((p) => {
                    let visible
                    if (p.title === projectSelected) {
                        visible = 'block'
                    } else {
                        visible = 'hidden'
                    }
                    return (
                        <Card
                            visible={visible}
                            key={p.title}
                            title={p.title}
                            img={p.img}
                            url={p.url}
                            front={p.front}
                            back={p.back}
                            description={p.description}
                        />
                    )
                })}
            </motion.div>
        </section>
    )
}
