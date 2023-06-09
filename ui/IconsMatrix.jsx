import {
    CSSIcon,
    FirebaseIcon,
    GitIcon,
    HTMLIcon,
    JavaScriptIcon,
    TypeScriptIcon,
    PostgreSQLIcon,
    PostmanIcon,
    WebpackIcon,
    AlgoliaIcon,
    TailwindIcon,
    ReactIcon,
    NodeIcon,
    NextIcon,
    FigmaIcon,
    AirtableIcon,
    SWRIcon,
    AVAIcon,
    JWTIcon,
    MapboxIcon,
    NPMIcon,
    ReduxIcon,
    StyledComponentsIcon,
    TrelloIcon,
    VercelIcon,
    YarnIcon,
    SupabaseIcon,
    SendgridIcon,
    ContentfulIcon,
    CloudinaryIcon,
    MongoDBIcon,
    JestIcon,
} from '@/ui/Icons'
import { Large, LargeAmber } from './Typography'

export const FrontendIcons = () => {
    return (
        <div className='w-[280px] md:w-[300px] lg:w-[650px] xl:w-[700px] p-4 gap-1 grid grid-cols-3 justify-items-center items-center lg:grid-cols-4 lg:justify-items-start shadow-lg rounded-lg bg-gray-50 dark:bg-black dark:border-solid dark:border-2 dark:border-gray-700'>
            <Large>Frontend:</Large>
            <div className='flex gap-2 items-center'>
                <HTMLIcon />
                <div className='hidden lg:flex'>
                    <LargeAmber>HTML</LargeAmber>
                </div>
            </div>
            <div className='flex gap-2 items-center'>
                <CSSIcon />
                <div className='hidden lg:flex'>
                    <LargeAmber>CSS</LargeAmber>
                </div>
            </div>
            <div className='flex gap-2 items-center'>
                <JavaScriptIcon />
                <div className='hidden lg:flex'>
                    <LargeAmber>JavaScript</LargeAmber>
                </div>
            </div>
            <div className='flex gap-2 items-center'>
                <ReactIcon />
                <div className='hidden lg:flex'>
                    <LargeAmber>React</LargeAmber>
                </div>
            </div>
            <div className='flex gap-2 items-center'>
                <NextIcon />
                <div className='hidden lg:flex'>
                    <LargeAmber>NextJS</LargeAmber>
                </div>
            </div>
            <div className='flex gap-2 items-center'>
                <SWRIcon />
                <div className='hidden lg:flex'>
                    <LargeAmber>SWR</LargeAmber>
                </div>
            </div>
            <div className='flex gap-2 items-center'>
                <ReduxIcon />
                <div className='hidden lg:flex'>
                    <LargeAmber>Redux</LargeAmber>
                </div>
            </div>
            <div className='flex gap-2 items-center'>
                <MapboxIcon />
                <div className='hidden lg:flex'>
                    <LargeAmber>Mapbox</LargeAmber>
                </div>
            </div>
            <div className='flex gap-2 items-center'>
                <WebpackIcon />
                <div className='hidden lg:flex'>
                    <LargeAmber>Webpack</LargeAmber>
                </div>
            </div>
            <div className='flex gap-2 items-center'>
                <TailwindIcon />
                <div className='hidden lg:flex'>
                    <LargeAmber>Tailwind</LargeAmber>
                </div>
            </div>
            <div className='flex gap-2 items-center'>
                <ContentfulIcon />
                <div className='hidden lg:flex'>
                    <LargeAmber>Contentful</LargeAmber>
                </div>
            </div>
            <div className='flex gap-2 items-center'>
                <FigmaIcon />
                <div className='hidden lg:flex'>
                    <LargeAmber>Figma</LargeAmber>
                </div>
            </div>
            <div className='flex gap-2 items-center'>
                <StyledComponentsIcon />
                <div className='hidden lg:flex'>
                    <LargeAmber>Styled Components</LargeAmber>
                </div>
            </div>
        </div>
    )
}

export const BackendIcons = () => {
    return (
        <div className='w-[280px] md:w-[300px] lg:w-[650px] xl:w-[700px] p-4 gap-1 grid grid-cols-3 justify-items-center items-center lg:grid-cols-4 lg:justify-items-start shadow-lg rounded-lg bg-gray-50 dark:bg-black dark:border-solid dark:border-2 dark:border-gray-700'>
            <Large>Backend:</Large>
            <div className='flex gap-2 items-center'>
                <TypeScriptIcon />
                <div className='hidden lg:flex'>
                    <LargeAmber>TypeScript</LargeAmber>
                </div>
            </div>
            <div className='flex gap-2 items-center'>
                <NodeIcon />
                <div className='hidden lg:flex'>
                    <LargeAmber>NodeJS</LargeAmber>
                </div>
            </div>
            <div className='flex gap-2 items-center'>
                <PostgreSQLIcon />
                <div className='hidden lg:flex'>
                    <LargeAmber>PostgreSQL</LargeAmber>
                </div>
            </div>
            <div className='flex gap-2 items-center'>
                <FirebaseIcon />
                <div className='hidden lg:flex'>
                    <LargeAmber>Firebase</LargeAmber>
                </div>
            </div>
            <div className='flex gap-2 items-center'>
                <MongoDBIcon />
                <div className='hidden lg:flex'>
                    <LargeAmber>MongoDB</LargeAmber>
                </div>
            </div>
            <div className='flex gap-2 items-center'>
                <SupabaseIcon />
                <div className='hidden lg:flex'>
                    <LargeAmber>Supabase</LargeAmber>
                </div>
            </div>
            <div className='flex gap-2 items-center'>
                <AirtableIcon />
                <div className='hidden lg:flex'>
                    <LargeAmber>Airtable</LargeAmber>
                </div>
            </div>
            <div className='flex gap-2 items-center'>
                <AlgoliaIcon />
                <div className='hidden lg:flex'>
                    <LargeAmber>Algolia</LargeAmber>
                </div>
            </div>
            <div className='flex gap-2 items-center'>
                <SendgridIcon />
                <div className='hidden lg:flex'>
                    <LargeAmber>Sendgrid</LargeAmber>
                </div>
            </div>
            <div className='flex gap-2 items-center'>
                <CloudinaryIcon />
                <div className='hidden lg:flex'>
                    <LargeAmber>Cloudinary</LargeAmber>
                </div>
            </div>
            <div className='flex gap-2 items-center'>
                <PostmanIcon />
                <div className='hidden lg:flex'>
                    <LargeAmber>Postman</LargeAmber>
                </div>
            </div>
            <div className='flex gap-2 items-center'>
                <JWTIcon />
                <div className='hidden lg:flex'>
                    <LargeAmber>JWT</LargeAmber>
                </div>
            </div>
            <div className='flex gap-2 items-center'>
                <JestIcon />
                <div className='hidden lg:flex'>
                    <LargeAmber>Jest</LargeAmber>
                </div>
            </div>
            <div className='flex gap-2 items-center'>
                <AVAIcon />
                <div className='hidden lg:flex'>
                    <LargeAmber>AVA</LargeAmber>
                </div>
            </div>
        </div>
    )
}

export const OtherIcons = () => {
    return (
        <div className='w-[280px] md:w-[300px] lg:w-[650px] xl:w-[700px] p-4 gap-1 grid grid-cols-3 justify-items-center items-center lg:grid-cols-6 lg:justify-items-start shadow-lg rounded-lg bg-gray-50 dark:bg-black dark:border-solid dark:border-2 dark:border-gray-700'>
            <Large>Others:</Large>
            <div className='flex gap-2 items-center'>
                <GitIcon />
                <div className='hidden lg:flex'>
                    <LargeAmber>Git</LargeAmber>
                </div>
            </div>
            <div className='flex gap-2 items-center'>
                <NPMIcon />
                <div className='hidden lg:flex'>
                    <LargeAmber>NPM</LargeAmber>
                </div>
            </div>
            <div className='flex gap-2 items-center'>
                <YarnIcon />
                <div className='hidden lg:flex'>
                    <LargeAmber>Yarn</LargeAmber>
                </div>
            </div>
            <div className='flex gap-2 items-center'>
                <TrelloIcon />
                <div className='hidden lg:flex'>
                    <LargeAmber>Trello</LargeAmber>
                </div>
            </div>
            <div className='flex gap-2 items-center'>
                <VercelIcon />
                <div className='hidden lg:flex'>
                    <LargeAmber>Vercel</LargeAmber>
                </div>
            </div>
        </div>
    )
}
