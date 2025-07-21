import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Freelancers from "./pages/Freelancers";
import Login from "./pages/Login";
import About from "./pages/About";
import Contact from "./pages/Contact";
import MyProfile from "./pages/MyProfile";
import MyAppointments from "./pages/MyAppointments";
import Appointment from "./pages/Appointment";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="mx-4 sm:mx-4">

      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/freelancers" element={<Freelancers/>}/>
        <Route path="/freelancers:speciality" element={<Freelancers/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/my-profile" element={<MyProfile/>}/>
        <Route path="/my-appointments" element={<MyAppointments/>}/>
        <Route path="/appointment:freelanceId" element={<Appointment/>}/>
      </Routes>
      <Footer/>
    </div>
  )
};

export default App;
