import Icon from "../Icon/Icon";
import "./Card.css";
function Card ({player}){
    let icon=<Icon/>
    if(player=="X"){
        icon=<icon name="cross"/>
    }else if(player=="O"){
        icon=<icon name="circle"/>
    }
    return (
        <div className="card">
            {icon}
        </div>
    )
}

export default Card;