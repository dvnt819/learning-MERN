import React,{useState} from "react"

export default function MyComponent(){

    // let [name="Guest",setName] = useState();

    // const updateName=()=>{
    //     setName("Dhvanit")
    // }

    // let [age=0,setAge]=useState();

    // const incrementAge=()=>{
    //     setAge(age+1)
    // }

    // let [isEmployed=false,toggleIt]=useState();

    // const toggleFun=()=>{
    //     toggleIt(!isEmployed)
    // }

    let [count,setCount]=useState(0)

    const incrementCount = ()=>{
        setCount(count+1)
    }

    const decrementCount = ()=>{
        setCount(count-1)
    }

    const resetCount = ()=>{
        setCount(0)
    }


    return (
        <div className="container-div">
            {/* <h2>Name : {name}</h2>
            <button onClick={updateName}>Show My Name</button>
            <h2>Age : {age}</h2>
            <button onClick={incrementAge}>Increment Age</button>
            <h2>is Employed : {isEmployed ? "Yes" : "No"}</h2>
            <button onClick={toggleFun}>Toggle</button> */}
            <h1>Counter</h1>
            <p className="counter">{count}</p>
            <div className="button-div">
                <button onClick={decrementCount}>Decrement</button>
                <button onClick={resetCount}>Reset</button>
                <button onClick={incrementCount}>Increment</button>
            </div>
        </div>
    )
}