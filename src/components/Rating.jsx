

export default function Rating(props){
    const {children} = props;
    let rating = []
    let childrenFxd= Math.round(children)
    
    for (let i = 0; i < childrenFxd; i++) {
        rating.push("★")
    }
    for (let i = childrenFxd; i < 5; i++){
        rating.push("☆")
    }

    return(
        <div>
            {rating.map(star => star)}
        </div>
    )
}