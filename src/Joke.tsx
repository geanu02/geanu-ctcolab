import { useState, useEffect } from 'react'

export default function Joke() {

    const [ joke, setJoke ] = useState<string>("")

    useEffect(()=>{
        (async() => {
            const res = await fetch('https://v2.jokeapi.dev/joke/Programming?type=single')
            if (!res.ok) {
                throw new Error("Failed to fetch")
            }
            const data = await res.json()
            setJoke(data.joke)
            console.log(data)
        })()
    },[])

    return (
        <>
            <h2 className="joke-title">Something Funny</h2>
            <p className="joke-body">"{joke}"</p>
        </>
    )
}
