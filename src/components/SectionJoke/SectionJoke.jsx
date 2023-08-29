import { useEffect, useState, useRef } from "react"

export function SectionJoke() {

    const [joke, setJoke] = useState()
    const isExecuted = useRef(false)

    function fetchJoke() {
        const url = "https://v2.jokeapi.dev/joke/Programming"
        fetch(url).then(res => res.json()).then(data => setJoke(data))
    }
    
    
    useEffect(() => {
        console.log("useEffect is in effect");
        if(isExecuted.current){
            return
        }
        fetchJoke()
        isExecuted.current = true
        
    },[])

    console.log("Joke",joke)

    return(
        <div>
            <h1>Programming jokes</h1>
            <h4>{joke && joke.joke}</h4>
            <h4>{joke && joke.setup}</h4>
            <p>{joke && joke.delivery}</p>
            <button onClick={() => fetchJoke()}>Get a New Joke</button>
        </div>
    )
}