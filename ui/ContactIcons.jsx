import { useState } from 'react'
import { GithubIcon, LinkedinIcon, GmailIcon } from './Icons'

export const ContactIcons = () => {
    const [active, setActive] = useState(false)

    const showEmail = () => {
        setActive(!active)
    }

    return (
        <div className='relative flex items-center justify-around gap-2 md:gap-5'>
            <a
                href='https://github.com/leandromartin114'
                target='_blank'
                rel='noreferrer'
            >
                <GithubIcon />
            </a>
            <a onClick={showEmail}>
                <GmailIcon />
            </a>
            <a
                href='https://www.linkedin.com/in/leandro-martin-roldan/'
                target='_blank'
                rel='noreferrer'
            >
                <LinkedinIcon />
            </a>
            <span
                className={
                    active
                        ? 'text-sm md:text-base font-semibold text-black bg-white dark:text-white dark:bg-gray-700 rounded-md p-1 absolute -bottom-10 shadow-md'
                        : 'hidden'
                }
            >
                leandrom.roldan@gmail.com
            </span>
        </div>
    )
}
