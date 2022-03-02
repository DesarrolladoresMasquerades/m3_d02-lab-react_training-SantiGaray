export default function IdCards (props){
    return(
        <div>
            <p>FirstName: {props.firstname}</p>
            <p>LastName: {props.lastname}</p> 
            <p>Gender: {props.gender}</p>
            <p>Height{props.height}</p>
            <p>Birth{props.birth}</p>
            <img src={props.image} alt="pic"></img>
        </div>
    )
}