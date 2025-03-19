import { useContext } from "react"
import {UserContext} from './MyComponentA'

export default function MyComponentD(){

     const user=useContext(UserContext)

    return(
        <>
            <div className="box">
                <h1>Component D</h1>
                <h2>{`byeee ${user}`}</h2>
            </div>
            
        </>
    )
}