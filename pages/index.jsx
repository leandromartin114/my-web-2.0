import Head from 'next/head'
import { getAboutMe, getMyProjects } from '@/lib/api'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { MainSection } from '@/components/MainSection'
import { MobileProjectsSection } from '@/components/MobileProjectsSection'
import { ProjectsSection } from '@/components/ProjectsSection'
import { SkillsSection } from '@/components/SkillsSection'
import { AboutSection } from '@/components/AboutSection'

export default function Home({ data, projects }) {
    return (
        <>
            <Head>
                <title>leandev</title>
                <meta name='description' content='Welcome to my site' />
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1'
                />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <main className='dark:bg-black'>
                <Header />
                <MainSection />
                <MobileProjectsSection projects={projects} />
                <ProjectsSection projects={projects} />
                <SkillsSection />
                <AboutSection img={data.img} description={data.description} />
                <Footer />
            </main>
        </>
    )
}

export async function getStaticProps() {
    const data = await getAboutMe()
    const projects = await getMyProjects()
    return { props: { data, projects } }
}
