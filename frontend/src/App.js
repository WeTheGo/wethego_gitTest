import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Sumin from "./pages/Sumin";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Navigation />
      <Routes>
        <Route path="/" element={<Sumin />} />
        <Route path="/login" element={<LoginPage />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
