import React,{useState,onChange} from "react";

export default function(){

    const [car,setCar] = useState({year:2024,make:"Ford",model:"Mustang"})

    function handleYearChange(event){
        setCar({...car,year:event.target.value})
    }

    function handleMakeChange(event){
        setCar({...car,make:event.target.value})
    }

    function handleModelChange(event){
        setCar({...car,model:event.target.value})
    }

    return (
        <>
            <p>My favourite car is : {car.year} {car.make} {car.model}</p>

            <input type="number" value={car.year} onChange={handleYearChange} />
            <br />
            <input type="text" value={car.make} onChange={handleMakeChange}/>
            <br />
            <input type="text" value={car.model} onChange={handleModelChange} />
        </>
    )
}