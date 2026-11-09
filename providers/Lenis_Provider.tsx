"use client"

import { useEffect } from "react"

import Lenis from "lenis"

const Lenis_Provider = () => {
    useEffect(() => {
        const lenis = new Lenis()

        let animationFrameId: number

        const raf = (time: number) => {
            lenis.raf(time)
            animationFrameId = requestAnimationFrame(raf)
        }

        animationFrameId = requestAnimationFrame(raf)

        return () => {
            cancelAnimationFrame(animationFrameId)
            lenis.destroy()
        }
    }, [])

    return null
}

export default Lenis_Provider
