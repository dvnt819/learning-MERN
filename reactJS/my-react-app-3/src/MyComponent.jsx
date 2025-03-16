import React,{onChange,useState} from "react";

export default function (){

    const [name,setName]=useState()
    function handleNameChange(event){
        setName(event.target.value)
    }

    const [comment,setComment]=useState()
    function handleCommentChange(event){
        setComment(event.target.value)
    }

    const [payment,setPayment]=useState()
    function handlePaymentChange(event){
        setPayment(event.target.value)
    }

    const [shipping,setShipping]=useState("Delivery")
    function handleShippingChange(event){
        setShipping(event.target.value)
    }

    return (
        <>
            <input onChange={handleNameChange}></input>
            <p>Name : {name}</p>

            <textarea onChange={handleCommentChange}></textarea>
            <p>Comment : {comment}</p>

            <select value={payment} onChange={handlePaymentChange}>
                <option value="">select any option</option>
                <option value="Visa">Visa</option>
                <option value="Mastercard">Mastercard</option>
                <option value="Cash">Cash</option>
            </select>
            <br />
            <p>Payment : {payment}</p>
            <label>
                <input type="radio" value="Pick Up" checked={shipping==="Pick Up"} onChange={handleShippingChange}/>
                Pick Up
            </label>
            <br />

            <label>
                <input type="radio" value="Delivery" checked={shipping==="Delivery"} onChange={handleShippingChange} />
                Delivery
            </label>
            <p>Shipping : {shipping}</p>
        </>
    )
}