import { Carousel } from '@/ui/Carousel'
import { SectionTitle } from '@/ui/Typography'

export const MobileProjectsSection = ({ projects }) => {
    return (
        <section className='flex flex-col gap-10 items-center lg:hidden'>
            <SectionTitle>projects</SectionTitle>
            <Carousel items={projects} />
        </section>
    )
}
