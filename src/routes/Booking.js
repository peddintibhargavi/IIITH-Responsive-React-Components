import React, { useState } from 'react';
import './Booking.css';
import About from './About';

const Booking = () => {
  const [formData, setFormData] = useState({
    date: '',
    day: '',
    event: '',
    eventPreferences: {
      catering: false,
      photography: false,
      decorations: false,
    },
    venueSize: '',
    foodAfterLunchDinner: '',
    name: '',
    mobileNumber: '',
    decorationNumber: '',
    booked: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData((prevData) => ({
        ...prevData,
        [name]: {
          ...prevData[name],
          [value]: checked,
        },
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleBookClick = () => {
    // Perform booking logic (can be an API call, etc.)
    setFormData((prevData) => ({ ...prevData, booked: true }));
  };

  return (
    <>
    <div className='Booking'>
       <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <h1><center>Book your Event</center></h1>
      <form>
      <div>
          <span>Name:</span>
          <input type="text" name="name" value={formData.name} onChange={handleInputChange} required />
        </div>
        <div>
          <span>Mobile Number:</span>
          <input type="tel" name="mobileNumber" value={formData.mobileNumber} onChange={handleInputChange} required />
        </div>
        <div>
          <span>Date:</span>
          <input type="date" name="date" value={formData.date} onChange={handleInputChange} required />
        </div>
        
        <div>
          <span>Event:</span>
          <select name="event" value={formData.event} onChange={handleInputChange} required>
            <option value="">Select Event</option>
            <option value="Birthday">Birthday</option>
            <option value="Bachelors Party">Bachelors Party</option>
            <option value="Farewell">Farewell</option>
            <option value="Wedding">Wedding</option>
          </select>
        </div>
        <div>
          <span>Place : </span>
          <select name="event" value={formData.event} onChange={handleInputChange} required>
            <option value="">Select Place</option>
            <option value="Indoor">Indoor</option>
            <option value="Outdoor">Outdoor</option>
            <option value="Halls">Halls</option>
            <option value="Mountains">Mountains</option>
            <option value="Temple">Temple</option>
          </select>
        </div>
        <div>
          <span>Event Preferences:</span>
          {Object.entries(formData.eventPreferences).map(([key, value]) => (
            <div key={key}>
              <input type="checkbox" name="eventPreferences" value={key} checked={value} onChange={handleInputChange} />
              <label>{key}</label>
            </div>
          ))}
        </div>
        
        <div>
          <span>Venue Size:</span>
          <div>
            <input type="radio" name="venueSize" value="small" checked={formData.venueSize === 'small'} onChange={handleInputChange} />
            <label>Small</label>
          </div>
          <div>
            <input type="radio" name="venueSize" value="medium" checked={formData.venueSize === 'medium'} onChange={handleInputChange} />
            <label>Medium</label>
          </div>
          <div>
            <input type="radio" name="venueSize" value="large" checked={formData.venueSize === 'large'} onChange={handleInputChange} />
            <label>Large</label>
          </div>
        </div>
        <div>
          <span>Food After Lunch/Dinner:</span>
          <div>
            <input type="radio" name="foodAfterLunchDinner" value="drinks" checked={formData.foodAfterLunchDinner === 'drinks'} onChange={handleInputChange} />
            <label>Drinks</label>
          </div>
          <div>
            <input type="radio" name="foodAfterLunchDinner" value="desserts" checked={formData.foodAfterLunchDinner === 'desserts'} onChange={handleInputChange} />
            <label>Desserts</label>
          </div>
          <div>
            <input type="radio" name="foodAfterLunchDinner" value="both" checked={formData.foodAfterLunchDinner === 'both'} onChange={handleInputChange} />
            <label>Both</label>
          </div>
        </div>
        
        
        <div>
          <button type="button" onClick={handleBookClick} disabled={formData.booked}>
            {formData.booked ? 'Booked' : 'Book'}
          </button>
        </div>
      </form>
    </div>
    <About />
    </>
  );
};

export default Booking;
