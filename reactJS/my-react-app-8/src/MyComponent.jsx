import React,{useState,useRef} from "react"
import { useEffect } from "react"

export default function MyComponent(){

    const inputRef1=useRef("null")
    const inputRef2=useRef("null")
    const inputRef3=useRef("null")
    
    useEffect(()=>{
        console.log("Component Rendered")
    })

    function handleClick1(){
        inputRef1.current.focus()
        inputRef1.current.style.backgroundColor="yellow"
        inputRef2.current.style.backgroundColor=""
        inputRef3.current.style.backgroundColor=""
    }

    function handleClick2(){
        inputRef2.current.focus()
        inputRef2.current.style.backgroundColor="yellow"
        inputRef1.current.style.backgroundColor=""
        inputRef3.current.style.backgroundColor=""
    }

    function handleClick3(){
        inputRef3.current.focus()
        inputRef3.current.style.backgroundColor="yellow"
        inputRef1.current.style.backgroundColor=""
        inputRef2.current.style.backgroundColor=""
    }

    return (
        <>
            <button onClick={handleClick1}>Click ME</button>
            <input type="text" ref={inputRef1}/> <br />

            <button onClick={handleClick2}>Click ME</button>
            <input type="text" ref={inputRef2}/> <br />

            <button onClick={handleClick3}>Click ME</button>
            <input type="text" ref={inputRef3}/>
        </>
    )
}
