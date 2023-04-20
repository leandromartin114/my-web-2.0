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
} from '@/ui/Icons'

export const IconsMatrix = () => {
    return (
        <div className='w-72 md:w-[512px] grid grid-cols-4 md:grid-cols-8 gap-4 justify-items-center'>
            <CSSIcon />
            <FirebaseIcon />
            <GitIcon />
            <HTMLIcon />
            <JavaScriptIcon />
            <TypeScriptIcon />
            <PostgreSQLIcon />
            <PostmanIcon />
            <WebpackIcon />
            <AlgoliaIcon />
            <TailwindIcon />
            <ReactIcon />
            <NodeIcon />
            <NextIcon />
            <FigmaIcon />
            <AirtableIcon />
        </div>
    )
}
