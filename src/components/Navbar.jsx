import { useState } from 'react';

function Navbar() {
  const [active, setActive] = useState("home");

  const links = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Us" },
    { id: "form", label: "Donate" },
    { id: "contact", label: "Contact" },
    { id: "login", label: "Login" },
    { id: "signup", label: "Signup" },
  ];

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center">
      <div className="text-xl font-bold text-blue-700">ReFood</div>

      <div className="flex gap-6 font-medium text-gray-700">
        {links.map(link => (
          <a
            key={link.id}
            href={`#${link.id}`}
            onClick={() => setActive(link.id)}
            className={`hover:text-blue-500 transition duration-300 ${
              active === link.id ? "text-blue-600 font-bold" : ""
            }`}
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
