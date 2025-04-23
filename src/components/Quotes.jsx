// Quotes section// File: src/components/Quotes/Quotes.jsx
import React from 'react';

function Quotes() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center text-gray-800">Inspiring Words</h2>
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <p className="text-xl italic mb-4 text-gray-700">
            "What counts in life is not the mere fact that we have lived. It is what difference we have made to the lives of others that will determine the significance of the life we lead."
          </p>
          <p className="text-right font-medium text-gray-600">- Nelson Mandela</p>
        </div>
      </div>
    </section>
  );
}

export default Quotes;
