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
        <div className='w-[350px] xl:w-[450px] grid grid-cols-4 xl:grid-cols-8 gap-4 justify-items-center'>
            <HTMLIcon />
            <CSSIcon />
            <JavaScriptIcon />
            <ReactIcon />
            <NextIcon />
            <TailwindIcon />
            <WebpackIcon />
            <FigmaIcon />
            <TypeScriptIcon />
            <NodeIcon />
            <PostgreSQLIcon />
            <FirebaseIcon />
            <AirtableIcon />
            <AlgoliaIcon />
            <PostmanIcon />
            <GitIcon />
        </div>
    )
}
