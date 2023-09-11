import { useEffect } from "react"

export function SearchPage({ routeParams }) {

    useEffect(() => {
        document.title = `Has buscado ${routeParams.query}`
    },[])

    return (
        <h1>Has buscado {routeParams.query} </h1>
    )
}