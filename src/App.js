import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Forecast from "./pages/Forecast/Forecast";
import HomePage from "./pages/Home/HomePage";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="city/:cityName" element={<Forecast />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
