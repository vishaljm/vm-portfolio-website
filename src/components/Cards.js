import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out my recent projects!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/uts.jpg'
              text='Experience the unforgettable "Under The Stars" adventure in Nassau'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='images/hdt.jpg'
              text= '"Half~Day Cruise" - Travel through the Islands of Nassau' 
              label='Adventure'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/fdt.jpg'
              text= '"Full~Day Cruise" - Travel through the Islands of Nassau'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='images/ti.jpg'
              text='Check out our exclusive "Treasure Hunt" and brace yourself for a special reward '
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='images/bd.jpg'
              text='Fancy a date by the bay? Check out our off the record "Singles Blind Date" for more '
              label='Romance'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
