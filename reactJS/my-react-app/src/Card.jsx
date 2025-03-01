import profilePic from "./assets/justcode.jpg"

function Card(){
    return(
        <div className="card">
            <img className="card-img" src={profilePic} alt="image" />
            <h2>Error819</h2>
            <p>I am play Chess</p>
        </div> 
    );
}

export default Card;