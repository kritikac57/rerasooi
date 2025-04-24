import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Quotes from './components/Quotes';
import AboutUs from './components/AboutUs';
import FoodTracking from './components/FoodTracking';
import FoodSpecificationForm from './components/FoodSpecificationForm';
import Stats from './components/Stats';
import Footer from './components/Footer';
import LoginPage from './components/LoginPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <div className="flex-grow">
                <div id="home"><Hero /></div>
                <Quotes />
                <div id="about"><AboutUs /></div>
                <div id="track"><FoodTracking /></div>
                <div id="form"><FoodSpecificationForm /></div>
                <Stats />
                <div id="contact"><Footer /></div>
              </div>
            }
          />
          
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
