import { useState, useEffect } from "react"

const getValues = (key, initialValue) => {
    console.info("Getting Values");
    const savedValue = JSON.parse(localStorage.getItem(key))
    if(savedValue) return savedValue
    if(initialValue instanceof Function) return initialValue()
    if(initialValue===undefined) return ""
    return initialValue
}

const useLocalStorage = (key, initialValue) => {
    const [value, setValue] = useState(()=>(
         getValues(key, initialValue)
    ))
    // As we want to call a function for initializing whenwe call directly 
    // as shown below the following performance issue occurs
    // useState(getValues(key, initialValue))
    // On theme change and on number change the getValues function is 
    // always is getting called.
    
    //RENDERS ON EVERY UPDATE

    useEffect(()=>{
        console.info("Setting Values");
        localStorage.setItem(key, JSON.stringify(value))
    }, [value])

    return [ value, setValue ]
}

export default useLocalStorage