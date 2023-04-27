import { useState } from 'react'
import { IconsMatrix } from '@/ui/IconsMatrix'
import { Card } from '@/ui/Card'
import { MainButton, SecondaryButton } from '@/ui/Buttons'

export const ProjectsSection = ({ projects }) => {
    const [open, setOpen] = useState(false)
    const [projectSelected, setProjectSelected] = useState('Prodigar')

    const showProjects = () => {
        setOpen(true)
    }
    const hideProjects = () => {
        setOpen(false)
    }

    return (
        <section className='hidden lg:grid w-full h-screen px-4 md:px-8 grid-cols-2 2xl:flex 2xl:gap-40 2xl:justify-center items-center'>
            <div className='h-[680px] flex flex-col justify-between items-center gap-40'>
                <div className='relative'>
                    <MainButton
                        onMouseEnter={showProjects}
                        onMouseLeave={hideProjects}
                    >
                        projects
                    </MainButton>
                    <ul
                        onMouseEnter={showProjects}
                        onMouseLeave={hideProjects}
                        className={`absolute w-80 py-4 mt-4 text-right flex flex-col gap-4 bg-white dark:bg-black rounded-lg transition-all duration-400 ease-linear overflow-hidden ${
                            open ? 'max-h-80' : 'max-h-0 invisible'
                        }`}
                    >
                        {projects.map((p) => {
                            return (
                                <li key={p.title}>
                                    <SecondaryButton
                                        onClick={() =>
                                            setProjectSelected(p.title)
                                        }
                                    >
                                        {p.title}
                                    </SecondaryButton>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <IconsMatrix />
            </div>
            <div className='h-[680px] flex justify-center items-center'>
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
            </div>
        </section>
    )
}
