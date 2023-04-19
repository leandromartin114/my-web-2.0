export const Anchor = ({ children, link }) => {
    return (
        <a href={link} className='cursor-pointer inline-block'>
            <p
                className='text-2xl font-regular text-black dark:text-white hover:text-black dark:hover:text-white
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
            </p>
        </a>
    )
}

export const GrayAnchor = ({ children, link }) => {
    return (
        <a href={link} className='cursor-pointer inline-block'>
            <p
                className='text-2xl font-regular text-gray-400 hover:text-gray-400
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
            </p>
        </a>
    )
}
