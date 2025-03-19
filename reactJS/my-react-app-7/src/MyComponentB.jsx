import MyComponentC from "./MyComponentC";

export default function MyComponentB(){

    return(
        <>
            <div className="box">
                <h1>Component B</h1>
                <MyComponentC />
            </div>
        </>
    )
}