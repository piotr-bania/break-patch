"use client"

import { useEffect } from "react"
import { useTheme } from "next-themes"
import { usePathname } from "next/navigation"

type TeamTheme = "green" | "red" | "blue" | "purple"

const teamModes = new Set<TeamTheme>(["red", "blue", "purple"])

function getRouteTheme(pathname: string): TeamTheme {
    const segments = pathname.split("/").filter(Boolean)

    // Remove the optional locale prefix.
    if (segments[0] === "en" || segments[0] === "de") {
        segments.shift()
    }

    // /cases/[id]/[mode]
    if (
        segments[0] === "cases" &&
        segments.length === 3 &&
        teamModes.has(segments[2] as TeamTheme)
    ) {
        return segments[2] as TeamTheme
    }

    return "green"
}

export default function Route_Theme_Sync() {
    const pathname = usePathname()
    const { setTheme } = useTheme()

    useEffect(() => {
        setTheme(getRouteTheme(pathname))
    }, [pathname, setTheme])

    return null
}
