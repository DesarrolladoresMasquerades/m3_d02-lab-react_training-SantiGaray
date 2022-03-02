export default function Random(props){
    function randomize(min, max){
            return Math.floor(Math.random()*(max-min+1)+min)
        }
        
        return(
        <div>
            <p>min: Random value between {props.min} and {props.max} "=" {randomize(props.min, props.max)}</p>
        </div>
    )
}