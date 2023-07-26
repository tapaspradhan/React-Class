import {FaRegCircle,FaTimes,FaPen} from "react-icon\fa";

function Icon({name}){
    if(name=="circle"){
        return <FaRegCircle/>
    }else if(name=="cross"){
        return <FaTimes/>
    }else{
        return <FaPen/>
    }
}

export default Icon;