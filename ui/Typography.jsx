export const Title = ({ children }) => {
    return (
        <h1 className='font-bold tracking-wider text-4xl leading-none text-black dark:text-white'>
            {children}
        </h1>
    )
}

export const SubTitle = ({ children }) => {
    return (
        <h2 className='font-bold tracking-widest text-3xl leading-none bg-gradient-to-r bg-clip-text text-transparent animate-text from-pink-400 via-pink-500 to-pink-700'>
            {children}
        </h2>
    )
}

export const SectionTitle = ({ children }) => {
    return (
        <h2 className='font-bold tracking-widest text-3xl leading-none text-black dark:text-white'>
            {children}
        </h2>
    )
}

export const Body = ({ children }) => {
    return (
        <p className='font-normal text-lg leading-tight text-black dark:text-white'>
            {children}
        </p>
    )
}

export const Large = ({ children }) => {
    return (
        <p className='font-semibold tracking-wide text-xl leading-none text-black dark:text-white'>
            {children}
        </p>
    )
}

export const Small = ({ children }) => {
    return (
        <p className='font-normal text-xs leading-none text-black dark:text-white'>
            {children}
        </p>
    )
}