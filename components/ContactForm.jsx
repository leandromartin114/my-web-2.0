import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { fetchLocalAPI } from '@/lib/api'

export const ContactForm = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()
    const [show, setShow] = useState(false)

    const onSubmit = async (data) => {
        setShow(true)
        reset()
        const dataString = JSON.stringify(data)
        const res = await fetchLocalAPI(dataString)
    }

    return (
        <form
            className='w-72 sm:w-80 md:w-96 xl:w-[420px] p-4 grid content-start items-center justify-items-center gap-4 shadow-lg dark:shadow-md rounded-lg bg-gray-50 dark:bg-black dark:shadow-gray-700 dark:border-solid dark:border-2 dark:border-gray-700'
            onSubmit={handleSubmit(onSubmit)}
        >
            <label className='text-start w-full grid gap-1'>
                <h4 className='text-sm md:text-base xl:text-xl font-semibold'>
                    name
                </h4>
                <input
                    className='py-1 px-2 text-base md:text-lg xl:text-2xl rounded-lg'
                    type='text'
                    {...register('name', { required: true })}
                />
            </label>
            {errors.name && (
                <span className='justify-self-start text-sm md:text-base xl:text-xl'>
                    This field is required
                </span>
            )}

            <label className='text-start w-full grid gap-1'>
                <h4 className='text-sm md:text-base xl:text-xl font-semibold'>
                    email
                </h4>
                <input
                    className='py-1 px-2 text-base md:text-lg xl:text-2xl rounded-lg'
                    type='email'
                    {...register('email', { required: true })}
                />
            </label>
            {errors.email && (
                <span className='justify-self-start text-sm md:text-base xl:text-xl'>
                    This field is required
                </span>
            )}

            <label className='text-start w-full grid gap-1'>
                <h4 className='text-sm md:text-base xl:text-xl font-semibold'>
                    phone number
                </h4>
                <input
                    className='py-1 px-2 text-base md:text-lg xl:text-2xl rounded-lg'
                    type='phone'
                    {...register('phone')}
                />
            </label>

            <label className='text-start w-full grid gap-1'>
                <h4 className='text-sm md:text-base xl:text-xl font-semibold'>
                    message
                </h4>
                <textarea
                    className='h-32 md:h-46 py-1 px-2 text-base md:text-lg xl:text-2xl rounded-lg'
                    {...register('message', { required: true })}
                />
            </label>
            {errors.message && (
                <span className='justify-self-start text-sm md:text-base xl:text-xl'>
                    This field is required
                </span>
            )}

            <button
                className='w-full py-1 px-2 xl:py-2 text-base md:text-lg xl:text-xl text-white font-bold bg-amber-500 rounded-lg hover:bg-amber-600'
                type='submit'
            >
                Enviar
            </button>
            <span
                className={
                    show ? 'block text-sm md:text-base xl:text-xl' : 'hidden'
                }
            >
                Thanks for your message! I'll be in touch soon.
            </span>
        </form>
    )
}
