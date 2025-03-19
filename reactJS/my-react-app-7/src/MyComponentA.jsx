import { useState } from "react";
import MyComponentB from "./MyComponentB";

export default function MyComponentA(){

    const [user,setUser] = useState("Dhvanit")

    return(
        <>
            <div className="box">
                <h1>Component A</h1>
                <h2>{`hello ${user}`}</h2>
                <MyComponentB user={user}/>
            </div>
        </>
    )
}