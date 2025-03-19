import { useState , createContext} from "react";
import MyComponentB from "./MyComponentB";


export const UserContext = createContext()

export default function MyComponentA(){

    const [user,setUser] = useState("Dhvanit")


    return(
        <>
            <div className="box">
                <h1>Component A</h1>
                <h2>{`hello ${user}`}</h2>
                <UserContext.Provider value={user}>
                    <MyComponentB user={user}/>
                </UserContext.Provider>
            </div>
        </>
    )
}