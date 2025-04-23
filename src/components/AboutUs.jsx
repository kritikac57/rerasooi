import React from 'react';
// import aboutImage from '../assets/about-image.jpg';

function AboutUs() {
  // Placeholder image URL (replace with actual image import or CDN URL)
  const aboutImage = 'https://plus.unsplash.com/premium_photo-1681492228360-7665972aa5ab?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Vm9sdW50ZWVycyUyQkRpc3RyaWJ1dGluZyUyQkZvb2R8ZW58MHx8MHx8fDA%3D';

  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-pink-600 mb-10 md:mb-12 animate-fade-in">
          About ReFood
        </h2>
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12">
          {/* Content Section */}
          <div className="lg:w-2/3 animate-slide-up">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
              Our Mission
            </h3>
            <p className="text-gray-600 text-base md:text-lg mb-6 leading-relaxed">
              At ReFood, we are dedicated to fighting hunger and reducing food waste by connecting surplus food with those in need. Our mission is to create a sustainable food ecosystem where no meal goes to waste and no one goes hungry.
            </p>
            <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
              Our Impact
            </h3>
            <p className="text-gray-600 text-base md:text-lg mb-6 leading-relaxed">
              Since our inception, we’ve redistributed thousands of kilograms of food, supported local communities, and partnered with businesses and volunteers to make a meaningful impact. Together, we’re building a world where food is shared, not discarded.
            </p>
            <a
              href="#"
              className="inline-block px-6 py-3 bg-pink-600 text-white rounded-lg font-semibold hover:bg-pink-700 focus:ring-4 focus:ring-pink-300 transition-all duration-300 shadow-md"
            >
              Learn More
            </a>
          </div>

          {/* Image Section */}
          <div className="lg:w-1/3 relative animate-slide-up delay-200">
            <img
              src={aboutImage}
              alt="Volunteers distributing food packages"
              className="rounded-xl shadow-lg w-full h-64 md:h-80 lg:h-96 object-cover"
              loading="lazy"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/400x300?text=Image+Not+Found';
                e.target.alt = 'Placeholder image';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-xl" />
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
        .animate-slide-up {
          animation: slideUp 0.6s ease-out forwards;
        }
        .delay-200 {
          animation-delay: 0.2s;
        }
      `}</style>
    </section>
  );
}

export default AboutUs;