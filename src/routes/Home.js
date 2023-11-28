import React from 'react';
import Bday from "../Events/Bday";
import Bachelor from '../Events/Bachelor';
import Farewell from '../Events/Farewell';
import Wedding from '../Events/Wedding';
import About from './About';

const Home = () => {
  return (
    <>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <div className='events-container' style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '20px',
        '@media (max-width: 1024px)': {
          gap: '10px',
        }
      }}>
        <Bday />
        <Bachelor />
        <Farewell />
        <Wedding />
        <About/>
      </div>
    </>
  );
};

export default Home;
