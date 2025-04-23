import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';

const statsConfig = {
  available: { min: 200, max: 300 },
  transit: { min: 70, max: 120 },
  delivered: { min: 120, max: 220 }
};

function FoodTracking() {
  const generateStats = useCallback(() => ({
    available: Math.floor(Math.random() * (statsConfig.available.max - statsConfig.available.min)) + statsConfig.available.min,
    transit: Math.floor(Math.random() * (statsConfig.transit.max - statsConfig.transit.min)) + statsConfig.transit.min,
    delivered: Math.floor(Math.random() * (statsConfig.delivered.max - statsConfig.delivered.min)) + statsConfig.delivered.min
  }), []);

  const [foodStats, setFoodStats] = useState(generateStats());

  useEffect(() => {
    const interval = setInterval(() => {
      setFoodStats(generateStats());
    }, 5000);

    return () => clearInterval(interval);
  }, [generateStats]);

  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-gray-50 to-white" aria-live="polite" aria-atomic="true">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900 mb-8 md:mb-12 animate-fade-in">
          Food Redistribution Stats
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {Object.entries(foodStats).map(([key, value]) => (
            <StatItem key={key} label={key} value={value} />
          ))}
        </div>
      </div>
    </section>
  );
}

const StatItem = React.memo(({ label, value }) => (
  <div className="relative bg-white p-6 md:p-8 rounded-xl shadow-lg text-center transform hover:scale-105 transition-transform duration-300 animate-slide-up overflow-hidden">
    {/* Decorative background element */}
    <div className="absolute inset-0 bg-gradient-to-r from-cyan-100 to-pink-100 opacity-10"></div>
    
    <h4 className="text-lg md:text-xl font-semibold mb-3 text-gray-800 capitalize relative z-10">
      {label.replace(/([A-Z])/g, ' $1').trim()}
    </h4>
    <p className="text-2xl md:text-3xl font-bold text-cyan-600 relative z-10 animate-number-update">
      {value.toLocaleString()} <span className="text-lg md:text-xl">kg</span>
    </p>
  </div>
));

FoodTracking.propTypes = {
  initialStats: PropTypes.object
};

// Custom CSS for animations
const styles = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes slideUp {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes numberUpdate {
    from { transform: translateY(10px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }
  .animate-fade-in {
    animation: fadeIn 0.8s ease-out forwards;
  }
  .animate-slide-up {
    animation: slideUp 0.6s ease-out forwards;
  }
  .animate-number-update {
    animation: numberUpdate 0.5s ease-out forwards;
  }
`;

// Inject styles
FoodTracking.styles = <style jsx>{styles}</style>;

export default FoodTracking;