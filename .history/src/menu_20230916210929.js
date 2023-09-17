import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

export default function menu (){
return (
    <BrowserRouter>
    <Routes>
        <Route path="/home" element={<Home />}></Route>
    </Routes>
    </BrowserRouter>
);
}
