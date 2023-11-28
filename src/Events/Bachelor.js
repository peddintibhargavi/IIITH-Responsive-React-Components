// App.js
import React from 'react';
import '../routes/Home.css'; // Import the CSS file for styling
import { Link } from 'react-router-dom';

const cardData = [
  {
    id: 1,
    imageUrl: 'https://tse3.mm.bing.net/th?id=OIP.xdx2yA_Ht3nhq8fzqKvUswAAAA&pid=Api&P=0&h=180',
    text:'Pleasant Decoration with white ballons. ',
  },
  {
    id: 2,
    imageUrl: 'https://tse2.mm.bing.net/th?id=OIP.kZwYK6_CXthb-Ac4errSmAHaHa&pid=Api&P=0&h=180',
    text : 'Decaration with Pinkkk'
  },
  {
    id: 3,
    imageUrl: 'https://tse4.mm.bing.net/th?id=OIP.RGj5DriE1YxSbIQVJ0lrJgHaGu&pid=Api&P=0&h=180',
    text : 'Haldi Decoration'
  },
  {
    id: 4,
    imageUrl: 'https://tse2.mm.bing.net/th?id=OIP._Y5L08971_NJIKvkVAhdIgHaE8&pid=Api&P=0&h=180',
    text : 'Haldi Decoration'
  },
  
];

const Bachelor = () => {
  return (
    <>
    <div className='content'>
        <h2>Bachelor's Party</h2>
    </div>
    <div className="card-container">
      {cardData.map(card => (
        <div key={card.id} className="card">
          <img src={card.imageUrl} alt={`Card ${card.id}`} />
          <p>{card.text}</p>
          <Link to="/Booking">
              <button className="booking-button">Book Now</button>
            </Link>
        </div>
      ))}
    </div>
    </>
  );
};

export default Bachelor;
