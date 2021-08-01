import './Cards.css'
import Card from '../Card/Card';
import hotelsData from '../../bd/bd';

function Cards(){


    return(
        <div className="cards_container">
            {
                hotelsData.map((hotel, i) => {
                    return <Card 
                        name = {hotel.name}
                        image = {hotel.photo}
                        description = {hotel.description}
                        rooms = {hotel.rooms}
                        city = {hotel.city}
                        country = {hotel.country}
                        price = {hotel.price}
                        key = {i}
                    />
                })
            }
        </div>
    )
}

export default Cards;