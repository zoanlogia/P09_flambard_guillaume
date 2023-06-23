import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Accomodation from "../pages/Accomodation/Accomodation";
import Notfound from "../pages/Notfound/Notfound.jsx";


const Router = () => {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path={`/about/`} element={<About />} />
          <Route path={`/accomodation/:id`} element={<Accomodation />} />
          <Route path="*" element={<Notfound/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
