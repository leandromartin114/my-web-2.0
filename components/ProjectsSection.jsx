import { useState } from 'react'
import { IconsMatrix } from '@/ui/IconsMatrix'
import { Card } from '@/ui/Card'
import { MainButton, SecondaryButton } from '@/ui/Buttons'

export const ProjectsSection = ({ projects }) => {
    const [open, setOpen] = useState(false)

    const showProjects = () => {
        setOpen(true)
    }
    const hideProjects = () => {
        setOpen(false)
    }

    return (
        <section className='hidden lg:flex h-screen px-4 md:px-8 gap-5 items-center'>
            <div className='h-[500px] flex-grow flex flex-col justify-around items-center'>
                <MainButton
                    onMouseEnter={showProjects}
                    onMouseLeave={hideProjects}
                >
                    projects
                </MainButton>
                <ul
                    className={`py-2 bg-white dark:bg-black rounded-lg shadow-xl transition-all duration-400 ease-linear overflow-hidden ${
                        open ? 'max-h-60' : 'max-h-0 invisible'
                    }`}
                >
                    <li>
                        <SecondaryButton>projects</SecondaryButton>
                    </li>
                    <li>
                        <SecondaryButton>about</SecondaryButton>
                    </li>
                    <li>
                        <SecondaryButton>contact</SecondaryButton>
                    </li>
                    <li>
                        <SecondaryButton>download cv</SecondaryButton>
                    </li>
                </ul>
                <IconsMatrix />
            </div>
            <div className='flex flex-col justify-center items-center'>
                <div className='h-[500px] w-[450px] bg-slate-500'>cards</div>
            </div>
        </section>
    )
}
