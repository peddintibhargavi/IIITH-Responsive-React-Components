// App.js
import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './routes/Home';
import Reviews from './routes/Reviews';
import About from './routes/About';
import Booking from './routes/Booking';
import Frontend from './components/Frontend';
import Table from './routes/Table';

const AppLayout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);

const App = () => {
  const [entered, setEntered] = useState(false);

  const handleEnterClick = () => {
    setEntered(true);
  };

  const router = createBrowserRouter([
    {
      element: entered ? <AppLayout /> : <Frontend onEnterClick={handleEnterClick} />,
      children: [
        {
          path: '',
          element: <Home />,
        },
        {
          path: '/reviews',
          element: <Reviews />,
        },
        {
          path: '/about',
          element: <About />,
        },
        {
          path: '/booking',
          element: <Booking />,
        },
        {
          path : '/table',
          element:<Table/>
        },
        {
          path: '*',
          element: <Home />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

createRoot(document.getElementById('root')).render(<App />);
