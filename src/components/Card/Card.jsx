import './Card.css';


function Card(props){
    return(
        <div className="card_container">
            <div className="card_image">
                <img src={'https://picsum.photos/id/237/300/300'} alt="" />
            </div>
            <h3>{props.name}</h3>
            <span></span>
            <span></span>
            <p>{props.description}</p>
            <div className="card__description">
                <input className="card__description--input" value={props.city} />
                <input className="card__description--input" value={props.rooms} />
                <input className="card__description--input" value={props.price} />
            </div>
            <button>Reservar</button>
        </div>
       
    )
}

export default Card;
