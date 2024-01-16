'use client'
import { useEffect } from "react"

export default function Deeplink({ scheme, query }: { scheme: string, query: string }) {
    useEffect(() => {
        console.log("aass")
        window.location.href=('farming://'+scheme+"?"+query)
    }, [])
    return (
        <>
        </>
    )
}