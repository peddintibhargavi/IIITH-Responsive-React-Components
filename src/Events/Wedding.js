// App.js
import React from 'react';
import '../routes/Home.css'; // Import the CSS file for styling
import { Link } from 'react-router-dom';

const cardData = [
  {
    id: 1,
    imageUrl: 'https://tse3.mm.bing.net/th?id=OIP.D7QkslO9uGNczPkXnBaOfQHaLH&pid=Api&P=0&h=180',
    text:'Simple and wedding in Nature',
  },
  {
    id: 2,
    imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.DlNM0nwSBXeL1FL8OkpquAHaE8&pid=Api&P=0&h=180',
    text : 'Grand & Royal Wedding'
  },
  {
    id: 3,
    imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.3UIwtsFIGKjRHHLKJdXXlQHaFa&pid=Api&P=0&h=180',
    text : 'Wedding inside a palace'
  },
  {
    id: 4,
    imageUrl: 'https://tse4.mm.bing.net/th?id=OIP.AUe0P-viFylrGTXNYlciPgHaE6&pid=Api&P=0&h=180',
    text : 'Wedding inside a temple'
  },
  
];

const Wedding = () => {
  return (
    <>
    <div className='content'>
        <h2>Wedding</h2>
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

export default Wedding;
