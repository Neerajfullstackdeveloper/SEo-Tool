import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BusinessForm from "./components/FormPage1";
import ResultPage from "./components/Page2Display";

const App = () => {
  return (
   <BrowserRouter>
  <Routes>
    <Route path="/" element={<BusinessForm />} />
    <Route path="/result" element={<ResultPage />} />
  </Routes>
</BrowserRouter>
  );
};

export default App;
