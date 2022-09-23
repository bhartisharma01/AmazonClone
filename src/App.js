import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Layouts/Header/Header';
import Home from './Layouts/Home';
import Checkout from './Components/Checkout';
function App() {
  return (

    <div className='app'>
      <Header />
      <BrowserRouter>
      
        <Routes>
        <Route path="/" element={<Home/>}>
        <Route index element={<Home />} />
          {/* <Route path="/" element={<Home />}> */}
            {/* <Route index element={<Home />} /> */}
            <Route path="checkout" element={<Checkout />} />

          </Route>
        </Routes>
      </BrowserRouter>
      {/* <Header /> */}
      {/* <Home /> */}
      {/* <Checkout /> */}

    </div>
  )
}

export default App
