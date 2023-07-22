import Image from "./Image";
import Name from "./Name";

function DogCard(props){
    let title="This is a dog card"
    return(
        <>
                <h2 style={
                        {
                            fontSize:"45px",
                            color:"red"
                        }
                    }>
                {title}
                </h2>
            <Name>
                <h3>{props.name}</h3>

            </Name>
            <Image src={props.image}/>
            
        </>
    );
}

export default DogCard;