import { createContext, useEffect, useState } from 'react'
import { getAboutMe, getMyProjects } from '@/lib/api'

export const LeanContext = createContext()

const LeanContextProvider = ({ children }) => {
    const [data, setData] = useState({})
    const [projects, setProjects] = useState([])
    const value = {
        data,
        projects,
    }
    useEffect(() => {
        getAboutMe()
            .then((res) => setData(res))
            .catch((err) => console.error('error:' + err))
        getMyProjects()
            .then((res) => setProjects(res))
            .catch((err) => console.error('error:' + err))
    }, [])

    return <LeanContext.Provider value={value}>{children}</LeanContext.Provider>
}

export default LeanContextProvider
