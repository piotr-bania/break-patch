"use client"

import { ThemeProvider } from "next-themes"

type AppProviderProps = {
    children: React.ReactNode
}

export default function App_Provider({ children }: AppProviderProps) {
    return (
        <ThemeProvider
            attribute="data-team"
            themes={["green", "red", "blue", "purple"]}
            defaultTheme="green"
            enableSystem={false}
            enableColorScheme={false}
            storageKey="breakpatch-team"
            disableTransitionOnChange={false}
        >
            {children}
        </ThemeProvider>
    )
}
