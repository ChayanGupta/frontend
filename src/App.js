import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { isDesktop } from 'react-device-detect'
import React, { useState } from 'react';
import { toast } from 'react-toastify';

import Navbar from './Components/navbar';
import Brands from './Components/brands';
import Home from './Components/home';
import Footer from './Components/footer';
import Popup from './Components/popup';
import Admin from './Components/admin';
import Register from './Components/Auth/register';
import Login from './Components/Auth/login';
import Product from './Components/product';

import 'react-toastify/dist/ReactToastify.css';
import './App.css';

toast.configure()

function App() {

  const [isOpen, setIsOpen] = useState(false);
  const [changeUI, setChangeUI] = useState(false);
  const [isHome, setIsHome] = useState(true);
  const [brandName, setBrandName] = useState("Home")

  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      {
        isDesktop ?
          <Router>
            <Navbar />
            <Routes>
              <Route exact path='/' element={<><Brands changeUI={changeUI} setBrandName={setBrandName} setIsHome={setIsHome} /><Home brandName={brandName} isHome={isHome} /></>} />
              <Route exact path='/product-page' element={<><Brands changeUI={changeUI} setBrandName={setBrandName} setIsHome={setIsHome} /><Product /></>} />
              <Route exact path='/login' element={<Login />} />
              <Route exact path='/register' element={<Register />} />
              <Route exact path='/admin' element={<><Brands changeUI={changeUI} setBrandName={setBrandName} setIsHome={setIsHome} /><Admin setChangeUI={setChangeUI} changeUI={changeUI} /></>} />
            </Routes>
            <button type="button" className="btn btn-primary" title='Leave a message' onClick={togglePopup}
              style={{ width: '75px', height: '75px', padding: '13px 18px', borderRadius: '60px', textAlign: 'center', position: 'fixed', right: '0.5rem', bottom: '0.5rem' }}
            ><i className='fas fa-comments' style={{ fontSize: '30px' }}></i></button>
            {isOpen && <Popup handleClose={togglePopup} />}
            <Footer />
          </Router >
          : <div className="container">
            <img className="img" src="/monitors-laptop.png" alt="Mobile Laptop" />
            <div className="text-container">
              <h2 className="heading">Please use Laptop or desktop</h2>
              <p className="para">
                We don't support small screen yet. Please use laptop or desktop for the
                best experience.
              </p>
            </div>
          </div>
      }
    </>
  );
}

export default App;