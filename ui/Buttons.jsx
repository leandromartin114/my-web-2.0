export const MainButton = ({
    children,
    onClick,
    onMouseEnter,
    onMouseLeave,
}) => {
    return (
        <button
            className='cursor-pointer text-center font-bold tracking-widest text-3xl lg:text-4xl xl:text-5xl leading-none text-black dark:text-white claro dark:oscuro flex items-end gap-1 '
            onClick={onClick}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            {children}
        </button>
    )
}

export const SecondaryButton = ({ children, onClick, active }) => {
    return (
        <button
            className={`cursor-pointer text-right font-semibold tracking-wider text-xl lg:text-2xl leading-none  ${
                active
                    ? 'text-amber-400 dark:text-amber-300'
                    : 'text-black dark:text-white'
            }  hover:text-amber-400 dark:hover:text-amber-300`}
            onClick={onClick}
        >
            {children}
        </button>
    )
}
