export const MainButton = ({ children, onClick, onMouseEnter, colorMode }) => {
    return (
        <button
            className={
                'cursor-pointer font-bold tracking-widest text-3xl leading-none text-black dark:text-white ' +
                colorMode
            }
            onClick={onClick}
            onMouseEnter={onMouseEnter}
        >
            {children}
        </button>
    )
}

export const SecondaryButton = ({ children, onClick }) => {
    return (
        <button
            className='cursor-pointer font-semibold tracking-wide text-xl leading-none text-black dark:text-white'
            onClick={onClick}
        >
            {children}
        </button>
    )
}
