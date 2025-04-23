import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Quotes from './components/Quotes';
import AboutUs from './components/AboutUs';
import FoodTracking from './components/FoodTracking';
import FoodSpecificationForm from './components/FoodSpecificationForm';
import Stats from './components/Stats';
import Footer from './components/Footer';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow">
        
        <Hero />
        <Quotes />
        <AboutUs />
        <FoodTracking />
        <FoodSpecificationForm />
        <Stats />
      </div>
      <Footer />
    </div>
    </Router>
  );
}

export default App;