import MyComponentD from "./MyComponentD";

export default function MyComponentC(props){

    return(
        <>
            <div className="box">
                <h1>Component C</h1>
                <MyComponentD user={props.user}/>
            </div>
        </>
    )
}