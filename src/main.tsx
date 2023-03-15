import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './routes/Home';
import NotFound from './routes/NotFound';
import About from './routes/About';
import Contact from './routes/Contact';
import Products from './routes/Products';
import Details from './routes/Details';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Home />,
//     errorElement: <NotFound />,
//   },
//   {
//     path: '/home',
//     element: <Home />,
//     errorElement: <NotFound />,
//   },
//   {
//     path: '/about',
//     element: <About />,
//     errorElement: <NotFound />,
//   },
//   {
//     path: '/products',
//     element: <Products />,
//     errorElement: <NotFound />,
//   },
//   {
//     path: '/contact',
//     element: <Contact />,
//     errorElement: <NotFound />,
//   },
//   {
//     path: '/details',
//     children: [
//       {
//         path: 'id',
//         element: <Details />,
//         errorElement: <NotFound />,
//       },
//     ],
//   },
// ]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
    {/* <RouterProvider router={router} /> */}
  </React.StrictMode>
);
