import React, { useMemo, useState, useEffect, useRef, useCallback } from "react"
import List from "./List"
import Input from "./Input"
import useLocalStorage from "./useLocalStorage"
import useUpdateLogger from "./useUpdateLogger"

const App = () => {

  //TODO: USEMEMO USECALLBACK
  const [ number, setNumber ] = useState(1)
  const [ dark, setDark ] = useState(true)

 //TODO: CUSTOM HOOKS  
  const [ comment, setComment ] = useLocalStorage("hooks","")
  //refers value and setValue
  useUpdateLogger(comment)


  //TODO: USEMEMO
  //Refernce equality
  const theme = useMemo(()=>{
  return {
      backgroundColor: dark? "black":"white",
      color: dark? "white" : "black",
      margin: "4em",
      textAlign: "center",
      margin:"0px 0px 30px 0px"
    }
  },[dark])

  {/*useRef ERROR:
     Uncaught TypeError: Cannot assign to read only property 'current' of object '#<Object>'
      at App.js:9:1
    react-dom.development.js:20085 The above error occurred in one of your React components:

      at http://localhost:3000/static/js/bundle.js:29:78

    Consider adding an error boundary to your tree to customize error handling behavior.
    Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.
  */}

  useEffect(()=>console.log("Theme Changed"),[theme])

  //TODO: USEMEMO
  const doubleNum = useMemo( () => {
    return slowFunction(number)
  }, [number])

  //UseEffect Doesnt memorize and store to variable

  //TODO: USECALLBACK
  const getItems = useCallback((inc) => {
    return[number+inc, number+1+inc, number+2+inc]
  },[number])

  useEffect(()=>console.log("Re-render"))

  //TODO: USEREF
  const nameRef = useRef(null)
  const submitRef = useRef(null)

  useEffect(()=>nameRef.current.focus(),[])

  const nameKeyDown = (e) => {
    if(e.key === "Enter"){
      submitRef.current.focus()
    }
  }

  const submitKeyDown = (e) => {
    if(e.key === "Enter"){
      alert("Submitted")
    }
  }

  return(
    <>


      <div style={theme}>
        <h1>Use Memo Hook</h1>
        <input 
        type="text" 
        value={number} 
        onChange={e => 
          setNumber((!parseInt(e.target.value))? 0 : parseInt(e.target.value))
        }
        />
        <h2>Double of number = {doubleNum}</h2>
        <button 
        onClick={()=>setDark(!dark)}
        style={{marginBottom: "30px"}}
        >Change Mode</button> 
      </div>


      <div style={theme}>
        <h1>Use Callback Hook</h1>
        <List getItem={getItems}/>
      </div>


      <div style={theme}>
        <h1>Forward Ref Hook</h1>
        <Input 
        type="text" 
        placeholder="Enter Name"
        ref={nameRef}
        onKeyDown={nameKeyDown}
        />
        <button 
        onKeyDown={submitKeyDown} 
        ref={submitRef}
        style={{marginBottom: "30px"}}
        >Submit</button>
      </div>


      <div style={theme}>
        <h1>Custom Use Localstorage Hook and Use Updated Logger Hook</h1>
        <input
        type="text"
        placeholder="Enter your comment"
        value={comment}
        onChange={e => setComment(e.target.value)}
        style={{marginBottom: "30px"}}
        />
      </div>


    </>
  )
}

const slowFunction = (num) => {
  console.log("In Slow Function");
  for(let i=0; i<1000000000; i++){}
  return num*2
}

export default App