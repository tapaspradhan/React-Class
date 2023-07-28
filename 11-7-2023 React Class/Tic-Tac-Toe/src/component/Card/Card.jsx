import Icon from "../Icon/Icon";
import "./Card.css";
function Card ({player,onPlay,index}){
    let icon=<Icon/>
    if(player=="X"){
        icon=<icon name="cross"/>
    }else if(player=="O"){
        icon=<icon name="circle"/>
    }
    return (
        <div className="card" onClick={()=>onPlay(index)}>
            {icon}
        </div>
    )
}

export default Card;