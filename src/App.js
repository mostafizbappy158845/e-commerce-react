import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";

const App = () => {
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/home" element={<Home></Home>}/>
    </Routes>
    </BrowserRouter>
  )
};

export default App;
