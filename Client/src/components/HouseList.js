

import House from './House';
import { housesData } from '../data';
import { useState } from 'react';

const HouseList = () => {
 const [houses, setHouses] = useState(housesData);



  return (
  
    <section className='mb-20'>
      <br></br>
      <br></br>
      <br></br>
      <div className='container mx-auto'>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-14'>
          {houses.map((house, index) => {
            return (

                <House house={house} />
          
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HouseList;