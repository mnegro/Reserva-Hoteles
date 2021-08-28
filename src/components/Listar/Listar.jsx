import './Listar.css'
import Card from '../Card/Card';
import hotelsData from '../../bd/bd';
import { useState } from 'react';

function Listar(props){

    // const [hotel, updateHotel] = useState(hotelsData);

    // const handleList = (city) => {
    //     const selection = hotelsData.filter((hotel) => hotel.city === city);
    //     updateHotel(selection);
    // }
    return(
        <div className="cards_container">
            {
                 props.list.map((hotel, i) => {
                    return <Card 
                        name = {hotel.name}
                        image = {hotel.photo.default}
                        description = {hotel.description}
                        rooms = {hotel.rooms}
                        city = {hotel.city}
                        country = {hotel.country}
                        price = {hotel.price}
                        key = {i}
                    />
                })
                // hotelsData.map((hotel, i) => {
                //     return <Card 
                //         name = {hotel.name}
                //         image = {hotel.photo.default}
                //         description = {hotel.description}
                //         rooms = {hotel.rooms}
                //         city = {hotel.city}
                //         country = {hotel.country}
                //         price = {hotel.price}
                //         key = {i}
                //     />
                // })
            }
        </div>
    )
}

export default Listar;