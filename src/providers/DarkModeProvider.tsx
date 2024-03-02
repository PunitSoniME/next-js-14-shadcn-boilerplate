'use client';

import React, { createContext, useContext, useEffect, useState } from 'react'

const addDarkMode = () => {
    document.querySelector('#app-id')?.classList.add('dark');
}

const removeDarkMode = () => {
    document.querySelector('#app-id')?.classList.remove('dark');
}

export const DarkModeContext = createContext({
    mode: '',
    toggleMode: () => { }
});

export default function DarkModeProvider({ children }: { children: React.ReactNode }) {

    const [mode, setMode] = useState("");

    useEffect(() => {
        const currentMode = localStorage?.getItem('mode');
        const themeSystem = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

        setMode(currentMode ?? themeSystem);
    }, [])

    useEffect(() => {
        if (mode === 'dark')
            addDarkMode();
    }, [mode]);

    const toggleMode = () => {
        const newMode = mode === 'dark' ? 'light' : 'dark';
        newMode === 'dark' ? addDarkMode() : removeDarkMode();
        localStorage.setItem('mode', newMode);
        setMode(newMode);
    }

    return (
        <DarkModeContext.Provider value={{
            mode,
            toggleMode
        }}>
            {children}
        </DarkModeContext.Provider>
    )
}

export const useDarkModeContext = () => {
    const context = useContext(DarkModeContext);

    if (!context) {
        throw new Error('useDarkModeContext must be used within a DarkModeProvider');
    }

    return context;
}
