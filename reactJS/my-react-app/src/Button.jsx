
function Button(){

    // let count = 0
    // const handleClick = (name) => {
    //     if (count < 3){
    //         count++
    //         console.log(`${name} you have clicked me ${count} times.`)
    //     }
    //     else{
    //         console.log(`${name} please stop clicking me.`)
    //     }
    // }

    

    // const handleClick2 = (name) => console.log(`Don't Click me , ${name}`)

    // return(
    //     <button className="button" onClick={()=>handleClick("Dhvanit")}>Click Me</button>
    // );


    const handleClick = (e) => e.target.textContent= "Ouch, It hurts"
    const handleDoubleClick = (e) => e.target.textContent= "Stop Its Painful"

    return (
        <button className="button" onClick={(e)=> handleClick(e)} onDoubleClick={(e)=> handleDoubleClick(e)}>Don't Click Me</button>
    )
}

export default Button;