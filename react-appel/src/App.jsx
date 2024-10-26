/* eslint-disable no-unused-vars */
import React from "react";
import "./commonResource/css/bootstrap.css";
import "./commonResource/css/styles.css";
import MainContent from "./Components/MainContent/MainContent";
import Mac from "./Components/Pages/Mac/mac";
import Iphone from "./Components/Pages/iphone/iphone";
import SingleProduct from "./Components/Pages/iphone/SingleProduct";
import Ipad from "./Components/Pages/ipad/ipad";
import Watch from "./Components/Pages/Watch/watch";
import Music from "./Components/Pages/music/music";
import Tv from "./Components/Pages/tv/tv";
import Error from "./Components/Pages/Error/Error";
import Support from "./Components/Pages/Support/Support";
import SharedLayout from "./Components/Pages/Shared/SharedLayout";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<MainContent />} />
        <Route path="mac" element={<Mac />} />
        <Route path="iphone" element={<Iphone />} />
        <Route path="iphone/:id" element={<SingleProduct />} />
        <Route path="ipad" element={<Ipad />} />
        <Route path="watch" element={<Watch />} />
        <Route path="music" element={<Music />} />
        <Route path="tv" element={<Tv />} />
        <Route path="support" element={<Support />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
}

export default App;
