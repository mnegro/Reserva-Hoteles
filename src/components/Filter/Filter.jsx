import Select from '../Select/Select';
import Button from '../Button/Button';
import { countries } from '../../bd/countries';
import { size } from '../../bd/size';
import { price } from '../../bd/price';
import  Listar  from '../../components/Listar/Listar';
import hotelsData from '../../bd/bd';
import { useState } from 'react';

import './Filter.css'


function Filter () {

  const [hotels, updateHotels] = useState(hotelsData);
  const handelFilter = (selected) => {
    const { type, value} = selected;
    const hotelsFilter = hotels.filter((hotel) => hotel[type] === value); 
    updateHotels(selected.id === 0? hotelsData : hotelsFilter);
  }

    return(
      <div>
        <div className="filter_container">
                  <input className="header__filter" type="text" />
                  <input className="header__filter" type="text" />
                  <Select data={ countries } handelFilter={handelFilter} />
                  <Select data={ price } handelFilter={handelFilter} />
                  <Select data={ size } handelFilter={handelFilter} />
                  
                  <Button name="Limpiar"/>
                </div>
                <div>
                  <Listar list={hotels}/>
                </div>
      </div>
       
    )
}

export default Filter;

  // const handleList = (country) => {
  //     selection = hotelsData.filter((hotel) => hotel.country == country);
  //     updateHotel(selection);
  //     console.log(selection);
  // }
  // const handleSize = (size) => {
  //   if( size === 'Pequeño'){
  //     selection = hotel.filter((hotel) => hotel.rooms <= 10);
  //     updateHotel(selection);
  //   }
  // }
  // const handlePrice = () => {

  // }