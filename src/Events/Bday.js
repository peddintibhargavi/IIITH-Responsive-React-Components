// App.js
import React from 'react';
import '../routes/Home.css';
import { Link } from 'react-router-dom';

const cardData = [
  {
    id: 1,
    imageUrl: 'https://tse3.mm.bing.net/th?id=OIP.NXipyEGAIACgMLCLWMX9cgHaFS&pid=Api&P=0&h=180',
    text:'Decoration with Rainbow colors. ',
    num : 'Decoration Number : 1'
  },
  {
    id: 2,
    imageUrl: 'https://tse4.mm.bing.net/th?id=OIP.DVkiQu9EHGfac90jVHhnVgHaHa&pid=Api&P=0&h=180',
    text : 'Plesant decaration with Black and Golden colors.'
  },
  {
    id: 3,
    imageUrl: 'https://tse4.mm.bing.net/th?id=OIP.N5IYSSQr9H2YdYRgtTRZ8gHaHa&pid=Api&P=0&h=180',
    text : 'Eco-friendly decoration.'
  },
  {
    id: 4,
    imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.MFILZz-qCx0AmDZ0-2E1wgHaH-&pid=Api&P=0&h=180',
    text : 'Decoration with multiple colors.'
  },
  
];

const Bday = () => {
  return (
    <>
    <div className='content'>
      <h1>Events We Organize ✨</h1>
        <h2>Birthdays</h2>
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

export default Bday;
