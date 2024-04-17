import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <Header />

    <RouterProvider router={router} />

    <Footer />

  </React.StrictMode>,
)
