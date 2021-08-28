import Fecha from '../Fecha/Fecha';
import Button from '../Button/Button';
import './Card.css';


function Card(props){
    return(
        <div className="card_container">
            <div className="card_image">
                <img src={props.image} alt="" />
            </div>
            <Fecha />
            <Fecha />
            <h3>{props.name}</h3>
            <span></span>
            <span></span>
            <p>{props.description}</p>
            <div className="card__description">
                <input className="card__description--input" value={props.city} />
                <input className="card__description--input" value={props.rooms} />
                <input className="card__description--input" value={props.price} />
            </div>
            <Button name="Reservar" width={ "100%" } />
        </div>
       
    )
}

export default Card;
