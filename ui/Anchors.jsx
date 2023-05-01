export const Anchor = ({ children, link, onClick }) => {
    return (
        <a
            href={link}
            onClick={onClick}
            className='cursor-pointer text-xl lg:text-2xl font-regular text-center text-black dark:text-white hover:text-black dark:hover:text-white
                        after:block
                        after:border-b-4
                        after:border-black after:dark:border-white
                        after:scale-x-0 
                        after:transition-transform
                        duration-500
                        after:ease-in-out
                        after:origin-center
                        hover:after:scale-x-100'
        >
            {children}
        </a>
    )
}

export const GrayAnchor = ({ children, link, onClick }) => {
    return (
        <a
            href={link}
            onClick={onClick}
            target='_blank'
            rel='noreferrer'
            className='cursor-pointer text-xl lg:text-2xl font-regular text-gray-400 hover:text-gray-400
                        after:block
                        after:border-b-4
                        after:border-gray-400
                        after:scale-x-0 
                        after:transition-transform
                        duration-500
                        after:ease-in-out
                        after:origin-center
                        hover:after:scale-x-100'
        >
            {children}
        </a>
    )
}

export const MobileAnchor = ({ children, link, onClick }) => {
    return (
        <a
            href={link}
            onClick={onClick}
            className='text-right px-2 py-2 cursor-pointer block text-2xl font-regular text-black dark:text-white hover:bg-gray-300 dark:hover:text-black'
        >
            {children}
        </a>
    )
}

export const MobileGrayAnchor = ({ children, link, onClick }) => {
    return (
        <a
            href={link}
            onClick={onClick}
            target='_blank'
            rel='noreferrer'
            className='text-right px-2 py-2 cursor-pointer block text-2xl font-regular text-gray-500 dark:text-gray-500 hover:bg-gray-300'
        >
            {children}
        </a>
    )
}

export const CardAnchor = ({ children, link }) => {
    return (
        <a
            className='text-lg xl:text-xl leading-none text-cyan-500 hover:text-cyan-500 cursor-pointer
            after:block
            after:border-b-2
            after:border-cyan-500
            after:scale-x-0 
            after:transition-transform
            duration-500
            after:ease-in-out
            after:origin-center
            hover:after:scale-x-100'
            href={link}
            target='_blank'
            rel='noreferrer'
        >
            {children}
        </a>
    )
}
