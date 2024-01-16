'use client'
import { useEffect } from "react"

export default function Deeplink({ scheme, query }: { scheme: string, query: string }) {
    useEffect(() => {
        window.location.href=('farming://'+scheme+"?"+query)
    }, [scheme,query])
    return (
        <>
        </>
    )
}