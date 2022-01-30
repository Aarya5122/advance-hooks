import { useEffect } from "react"

const useUpdateLogger = (value) => {
    //RENDERS ON EVERY UPDATE
    useEffect(()=>{
        console.log(value);
    },[value])
}

export default useUpdateLogger