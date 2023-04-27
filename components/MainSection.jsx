import { Title, SubTitle } from '@/ui/Typography'
import { ContactIcons } from '@/ui/ContactIcons'

export const MainSection = () => {
    return (
        <section
            id='main'
            className='h-[calc(100vh-76px)] bg-teclado_blanco_movil dark:bg-teclado_negro_movil md:bg-teclado_blanco dark:md:bg-teclado_negro bg-contain bg-no-repeat bg-left md:bg-center dark:bg-right dark:md:bg-left flex items-center justify-center xl:justify-end'
        >
            <div className='flex flex-col items-center xl:mr-24 mb-40 gap-3'>
                <Title>LEANDRO MARTÍN ROLDÁN</Title>
                <SubTitle>Fullstack Developer</SubTitle>
                <ContactIcons />
            </div>
        </section>
    )
}
