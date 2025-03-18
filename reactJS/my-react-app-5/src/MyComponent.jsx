import React,{useState} from 'react';

export default function(){

    const [cars,setCars] = useState([])

    const [carYear,setCarYear] = useState(new Date().getFullYear())
    const [carMake,setCarMake] = useState("")
    const [carModel,setCarModel] = useState("")

    function handleAddCar(){

        const newCar = {carYear,carMake,carModel}
        setCars(c => [...c,newCar])

        setCarYear(new Date().getFullYear())
        setCarMake("")
        setCarModel("")
    }

    function handleRemoveCar(index){
        setCars(c => c.filter((_,i)=> i!== index))
    }

    function handleYearChange(event){
        setCarYear(Number(event.target.value))
    }

    function handleMakeChange(event){
        setCarMake(event.target.value)
    }

    function handleModelChange(event){
        setCarModel(event.target.value)
    }

    return(
        <>
            <ul>{cars.map((car,index)=><li onClick={()=>handleRemoveCar(index)} key={index}>{car.carYear} {car.carMake} {car.carModel}</li>)}</ul>

            <input type="number" value={carYear} onChange={handleYearChange}/> <br />
            <input type="text" value={carMake} onChange={handleMakeChange}/> <br />
            <input type="text" value={carModel} onChange={handleModelChange}/> <br />
            <button onClick={handleAddCar}>Add</button>
        </>
    )
}