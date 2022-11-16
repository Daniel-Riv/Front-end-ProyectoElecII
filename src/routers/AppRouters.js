import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {NavbarC} from '../components/Start/Nav/NavbarC';
import { HomePages } from '../pages/HomePages';


export const AppRouters = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePages />} />
        </Routes>
    </BrowserRouter>
);
}
