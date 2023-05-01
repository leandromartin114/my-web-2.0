import Head from 'next/head'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { MainSection } from '@/components/MainSection'
import { ProjectsSection } from '@/components/ProjectsSection'
import { SkillsSection } from '@/components/SkillsSection'
import { AboutSection } from '@/components/AboutSection'
import { ContactSection } from '@/components/ContactSection'

export default function Home() {
    return (
        <>
            <Head>
                <title>learoldan.dev</title>
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
                <ProjectsSection />
                <SkillsSection />
                <AboutSection />
                <ContactSection />
                <Footer />
            </main>
        </>
    )
}
