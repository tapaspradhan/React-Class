import { FaTimes, FaPen, FaRegCircle } from 'react-icons/fa';
function Icon({ name }) {
    if(name == "circle") {
        return <FaRegCircle />
    } else if(name == "cross") {
        return <FaTimes />
    } else {
        return <FaPen />
    }
}

export default Icon;
//
// import {FaRegCircle,FaTimes,FaPen} from "react-icon/fa";
// import "Card.css";

// function Icon({name}){
//     if(name=="circle"){
//         return <FaRegCircle/>
//     }else if(name=="cross"){
//         return <FaTimes/>
//     }else{
//         return <FaPen/>
//     }
// }

// export default Icon;