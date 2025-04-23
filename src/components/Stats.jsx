// Stats section
// File: src/components/Stats/Stats.jsx
import React from 'react';

function Stats() {
  const stats = [
    { number: '45,780', label: 'Meals Delivered' },
    { number: '128', label: 'NGO Connections' },
    { number: '312', label: 'Restaurant Partners' },
    { number: '1,450', label: 'Registered Users' }
  ];

  return (
    <section className="py-16 bg-blue-600 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center">Our Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-4xl font-bold mb-2">{stat.number}</p>
              <p className="text-lg">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;