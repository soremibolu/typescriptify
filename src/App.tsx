import React from "react";
import "./style/style.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Info from "./pages/Info";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={`/info/:id`} element={<Info />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
