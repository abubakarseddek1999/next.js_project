import React from 'react';

const Navbar = () => {
  const navItems = [
    { name: 'Home', link: '/' },
    { name: 'About', link: 'about' },
    { name: 'Services', link: 'services' },
    { name: 'Contact', link: 'contact' },
  ];

  return (
    <nav className="bg-blue-500 text-white py-5">
      <div className="container mx-auto flex justify-between items-center px-5">
        <div className="text-2xl font-bold">Blood Donate</div>
        <ul className="hidden md:flex gap-8">
          {navItems.map((item, index) => (
            <li key={index}>
              <a href={item.link} className="hover:text-gray-300">
                {item.name}
              </a>
            </li>
          ))}
        </ul>
        <button
          className="md:hidden text-white focus:outline-none"
          aria-label="Toggle Menu"
        >
          ☰
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
