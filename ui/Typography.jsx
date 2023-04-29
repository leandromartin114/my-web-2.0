import { easeInOut, motion } from 'framer-motion'

export const Title = ({ children }) => {
    return (
        <h1 className='font-semibold text-center tracking-wider text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-none text-black dark:text-white'>
            {children}
        </h1>
    )
}

export const SubTitle = ({ children }) => {
    return (
        <h2 className='font-bold text-center tracking-widest text-2xl sm:text-3xl lg:text-4xl xl:text-5xl leading-none bg-gradient-to-r bg-clip-text text-transparent animate-text from-pink-400 via-amber-300 to-pink-600'>
            {children}
        </h2>
    )
}

export const SectionTitle = ({ children }) => {
    return (
        <h2 className='text-center font-bold tracking-widest text-3xl lg:text-4xl xl:text-6xl leading-none text-black dark:text-white flex items-end'>
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
        <p className='font-semibold text-center tracking-wide text-xl xl:text-2xl leading-none text-black dark:text-white'>
            {children}
        </p>
    )
}

export const LargeAmber = ({ children }) => {
    return (
        <p className='font-semibold text-center tracking-wide text-xl xl:text-2xl leading-none text-amber-500 dark:text-amber-300'>
            {children}
        </p>
    )
}

export const Small = ({ children }) => {
    return (
        <p className='font-normal text-xs md:text-sm xl:text-base leading-none text-black dark:text-white'>
            {children}
        </p>
    )
}
