import React,{useState,useEffect} from "react";

export default function MyComponent(){

    const [count,setCount] = useState(0)
    const [color,setColor] = useState("green")
    
    useEffect(()=>{
        document.title = `Count ${count} ${color}`
    },[count,color])

    function handleColorChange(){
        setColor(color!=="green"?"green":"red")
    }

    function handleCountIncrement(){
        setCount(c=>c+1)
    }

    function handleCountDecrement(){
        setCount(c=>c-1)
    }

    return (
        <>
            <h1 style={{color:color}} >Count : {count}</h1>
            <button onClick={handleCountIncrement}>Increment</button>
            <button onClick={handleCountDecrement}>Decrement</button> <br />
            <button onClick={handleColorChange}>Change Color</button>
        </>
    )
}