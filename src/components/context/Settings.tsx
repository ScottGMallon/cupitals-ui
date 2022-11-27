import { createContext, useEffect, useState } from 'react'

export interface ISettingsContext {
    darkTheme: boolean
    toggleDarkTheme: () => void
    sansSerif: boolean
    toggleSansSerif: () => void
    largeText: boolean
    toggleLargeText: () => void
}

const SettingsContext = createContext<ISettingsContext>({
    darkTheme: false,
    toggleDarkTheme: () => { },
    sansSerif: false,
    toggleSansSerif: () => { },
    largeText: false,
    toggleLargeText: () => { },
})

export const SettingsProvider = ({ children }: any) => {
    const [darkTheme, setDarkTheme] = useState<boolean>(false)
    const [sansSerif, setSansSerif] = useState<boolean>(false)
    const [largeText, setLargeText] = useState<boolean>(false)

    const toggleDarkTheme = () => {
        setDarkTheme(!darkTheme)
    }

    const toggleSansSerif = () => {
        setSansSerif(!sansSerif)
    }

    const toggleLargeText = () => {
        setLargeText(!largeText)
    }

    useEffect(() => { }, [darkTheme, setDarkTheme, sansSerif, setSansSerif])

    return (
        <SettingsContext.Provider value={{ darkTheme, toggleDarkTheme, sansSerif, toggleSansSerif, largeText, toggleLargeText }}>
            {children}
        </SettingsContext.Provider>
    )
}

export default SettingsContext