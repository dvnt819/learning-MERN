import MyComponentC from "./MyComponentC";

export default function MyComponentB(props){

    return(
        <>
            <div className="box">
                <h1>Component B</h1>
                <MyComponentC user={props.user}/>
            </div>
        </>
    )
}