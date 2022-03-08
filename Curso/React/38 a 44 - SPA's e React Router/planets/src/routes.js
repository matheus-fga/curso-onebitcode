import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PlanetsScreen from './screens/planets';

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<PlanetsScreen/>}/> 
    </Routes>
  </BrowserRouter>
)

export default AppRoutes;