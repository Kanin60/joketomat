import { useEffect, useState, useRef } from "react"

export function Test() {

    const [joke, setJoke] = useState()
    const isExecuted = useRef(false)

    
    useEffect(() => {
        console.log("useEffect is in effect");
        if(isExecuted.current){
            return
        }
        async function fetchJoke() {
            const url = "https://v2.jokeapi.dev/joke/Programming"
            await fetch(url).then(res => res.json()).then(data => setJoke(data))
        }
        fetchJoke()
        isExecuted.current = true
        
    },[])

    console.log("Joke",joke)

    return(
        <form>
            <h1>Tryk for flere jokes</h1>
            <h4>{joke && joke.joke}</h4>
            <h4>{joke && joke.setup}</h4>
            <p>{joke && joke.delivery}</p>
            <button>Tryk her</button>
        </form>
    )
}