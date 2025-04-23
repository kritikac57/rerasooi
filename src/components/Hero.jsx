import React from 'react';

function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-cyan-100 via-pink-50 to-blue-100 py-16 md:py-24 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-64 h-64 bg-pink-200 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-200 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Heading with responsive font sizes */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 md:mb-6 text-gray-900 leading-tight animate-fade-in">
            Feeding Hope, Saving Food
          </h1>
          
          {/* Subtitle with responsive text sizes */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 md:mb-10 text-gray-700 leading-relaxed max-w-3xl mx-auto animate-fade-in delay-200">
            We collect surplus food and redistribute it to those in need, fighting hunger and reducing food waste one meal at a time.
          </p>

          {/* CTA Button with hover and focus states */}
          <a
            href="#"
            className="inline-block bg-pink-600 text-white py-3 px-6 sm:px-8 md:py-4 md:px-10 rounded-full text-base sm:text-lg font-semibold hover:bg-pink-700 hover:scale-105 transition-all duration-300 focus:ring-4 focus:ring-pink-300 shadow-lg animate-fade-in delay-400"
          >
            Join Our Mission
          </a>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
        .delay-200 {
          animation-delay: 0.2s;
        }
        .delay-400 {
          animation-delay: 0.4s;
        }
      `}</style>
    </section>
  );
}

export default Hero;