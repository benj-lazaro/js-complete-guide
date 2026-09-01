import React from "react";
// import { BrowserRouter, Route, Switch} from 'react-router-dom';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SharePlace from "./Pages/SharePlace";
import MyPlace from "./Pages/MyPlace";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharePlace />} exact />
        <Route path="/my-place" element={<MyPlace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
