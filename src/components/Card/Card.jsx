import Icon from "../Icon/Icon";

import './Card.css';

function Card({ onPlay, player, index, gameEnd }) {

    let icon = <Icon />
    if(player == "X") {
        icon = <Icon name={"cross"} />
    } else if(player == "O") {
        icon = <Icon name={"circle"} />
    } 
    return (
        <div className="card" onClick={() => !gameEnd && player=="" && onPlay(index)}>  
            {icon}
        </div>
    )
}

export default Card;