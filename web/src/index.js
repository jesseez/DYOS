import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createHashRouter,
  RouterProvider
} from 'react-router-dom';
import Contact from './components/contact/Contact';
import Schedule from './components/schedule/Schedule';
import About from './components/about/About';
import Health from './components/health/Health';
import CodeOfConduct from './components/codeofconduct/CodeOfConduct';
import Home from './components/home/Home';
import NavBar from './components/navbar/NavBar';
import './index.css';

const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/schedule",
    element: <Schedule />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/health",
    element: <Health />,
  },
  {
    path: "/code",
    element: <CodeOfConduct />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavBar />
    <RouterProvider router={router} />
  </React.StrictMode>
);
