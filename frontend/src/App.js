import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";
import 'antd/dist/antd.css';
import './assets/App.css';
import LoginPage from "./pages/LoginPage";
import Sumin from "./pages/Sumin";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AdminPage from "./pages/AdminPage";
import Dashboard from "./pages/Dashboard";

export default function App() {
  return (
    <BrowserRouter>
      {/*<Header />*/}
      <Navigation />
      <Routes>
          <Route path="/" element={<Sumin />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/admin" element={<AdminPage/>} />
          <Route path="/test" element={<Dashboard/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
