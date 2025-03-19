import MyComponentD from "./MyComponentD";
import { UserContext } from "./MyComponentA";
import { useContext } from "react";

export default function MyComponentC(){

    const user=useContext(UserContext)

    return(
        <>
            <div className="box">
                <h1>Component C</h1>
                <h2>{`Hello again ${user}`}</h2>
                <MyComponentD />
            </div>
        </>
    )
}