import React,{useState} from "react"

export default function MyComponent(){

    let [name="Guest",setName] = useState();

    const updateName=()=>{
        setName("Dhvanit")
    }

    let [age=0,setAge]=useState();

    const incrementAge=()=>{
        setAge(age+1)
    }

    let [isEmployed=false,toggleIt]=useState();

    const toggleFun=()=>{
        toggleIt(!isEmployed)
    }

    return (
        <div>
            <h2>Name : {name}</h2>
            <button onClick={updateName}>Show My Name</button>
            <h2>Age : {age}</h2>
            <button onClick={incrementAge}>Increment Age</button>
            <h2>is Employed : {isEmployed ? "Yes" : "No"}</h2>
            <button onClick={toggleFun}>Toggle</button>
        </div>
    )
}