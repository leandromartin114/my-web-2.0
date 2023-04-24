export const Anchor = ({ children, link }) => {
    return (
        <a
            href={link}
            className='cursor-pointer text-2xl font-regular text-black dark:text-white hover:text-black dark:hover:text-white
                        after:block
                        after:border-b-4
                        after:border-black after:dark:border-white
                        after:scale-x-0 
                        after:transition-transform
                        duration-300
                        after:ease-in-out
                        after:origin-center
                        hover:after:scale-x-100'
        >
            {children}
        </a>
    )
}

export const GrayAnchor = ({ children, link }) => {
    return (
        <a
            href={link}
            className='cursor-pointer text-2xl font-regular text-gray-400 hover:text-gray-400
                        after:block
                        after:border-b-4
                        after:border-gray-400
                        after:scale-x-0 
                        after:transition-transform
                        duration-300
                        after:ease-in-out
                        after:origin-center
                        hover:after:scale-x-100'
        >
            {children}
        </a>
    )
}

export const MobileAnchor = ({ children, link }) => {
    return (
        <a
            href={link}
            className='text-right px-2 py-2 cursor-pointer block text-2xl font-regular text-black dark:text-white hover:bg-gray-300 dark:hover:text-black'
        >
            {children}
        </a>
    )
}

export const MobileGrayAnchor = ({ children, link }) => {
    return (
        <a
            href={link}
            className='text-right px-2 py-2 cursor-pointer block text-2xl font-regular text-gray-500 dark:text-gray-500 hover:bg-gray-300'
        >
            {children}
        </a>
    )
}
