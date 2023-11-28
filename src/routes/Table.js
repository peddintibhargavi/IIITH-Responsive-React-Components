// Table.js
import React, { useState } from 'react';
import './Table.css';
import About from './About';

const data = [
  { name: 'Kalyani', event: 'Wedding', place: 'Beach', phone: '994841647', rating: '5⭐' },
  { name: 'Vaishnavi', event: 'Birthday', place: 'Hall', phone: '8464574555', rating: '5⭐' },
  { name: 'Vikram', event: 'Bachelors party', place: 'outdoor', phone: '752451565', rating: '4⭐' },
  { name: 'Dulqur', event: 'Farewell', place: 'Indoor', phone: '6448411501', rating: '5⭐' },
  { name: 'Shree', event: 'Birthday', place: 'Outdoor', phone: '6545455123', rating: '4⭐' },
  { name: 'Thanmai', event: 'Wedding', place: 'Mountain', phone: '79457545475', rating: '5⭐' },
  { name: 'Chakri', event: 'Bachelors Party', place: 'Halls', phone: '4567254511', rating: '3⭐' },
  { name: 'Sriprada', event: 'Wedding', place: 'Temple', phone: '4567663164', rating: '5⭐' },
];

const Table = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredData = data.filter((row) =>
    Object.values(row).some((value) =>
      value.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );
  return (
    <div>
    <div className='Table-container'>
    <div className="responsive-table">
        <h1>Feedback from Clients</h1>
        <div className="search-bar">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Event</th>
            <th>Place</th>
            <th>Phone Number</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
        {filteredData.map((row, index) => (
            <tr key={index}>
              <td>{row.name}</td>
              <td>{row.event}</td>
              <td>{row.place}</td>
              <td>{row.phone}</td>
              <td>{row.rating}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
    <About/>
    </div>
  );
};

export default Table;
