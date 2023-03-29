import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '@/components/Layout';
import Home from '@/routes/Home';
import Calculator from '@/routes/Calculator';
import Quote from '@/routes/Quote';
import '@/styles/App.css';

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path="/calculate" element={<Calculator />}></Route>
            <Route path="/quotes" element={<Quote />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
};

export default App;
