import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Pages/Home';
import About from './Pages/About';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route,
  Link,
} from 'react-router-dom';
import NotFound from './Pages/404';
import Contact from './Pages/Contact';
import Projects from './Pages/Projects';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },

  {
    path: '/about',
    element: <About/ >,
  },

  {
    path: '/projects',
    element: <Projects/ >,
  },

  {
    path: '/contact',
    element: <Contact/ >,
  },

  {
    path: '*',
    element: <NotFound/>,
  }
]);




ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
