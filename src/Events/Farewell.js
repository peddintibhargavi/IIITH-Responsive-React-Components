// App.js
import React from 'react';
import '../routes/Home.css'; // Import the CSS file for styling
import { Link } from 'react-router-dom';

const cardData = [
  {
    id: 1,
    imageUrl: 'https://tse3.mm.bing.net/th?id=OIP.kn8Xz9bem4VEDawco1w9twHaFj&pid=Api&P=0&h=180',
    text:'colorful decoration.',
  },
  {
    id: 2,
    imageUrl: 'https://tse2.mm.bing.net/th?id=OIP.wFyQ6fcBL_5JvE3rQri4cwHaEm&pid=Api&P=0&h=180',
    text : 'Sweet and Simple decoration'
  },
  {
    id: 3,
    imageUrl: 'https://tse3.mm.bing.net/th?id=OIP.VvAxNVSlo69U-jeKe3N-gwHaE7&pid=Api&P=0&h=180',
    text : 'Farewell at a office or in a workspace'
  },
  {
    id: 4,
    imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.HZwUJhumTD_zaMrBIfictwHaE7&pid=Api&P=0&h=180',
    text : 'Eco-friendly'
  },
  
];

const Farewell = () => {
  return (
    <>
    <div className='content'>
        <h2>Farewell's</h2>
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

export default Farewell;
