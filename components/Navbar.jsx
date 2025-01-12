import React from 'react';

const Navbar = () => {
  const navItems = [
    { name: 'Home', link: '/' },
    { name: 'About', link: 'about' },
    { name: 'Donner', link: 'donner' },
    { name: 'Login', link: 'login', className: 'bg-white text-black p-2 rounded-md px-4 hover:bg-blue-500 hover:text-white' },
  ];

  return (
    <nav className="bg-blue-500 text-white py-5">
      <div className="container mx-auto flex justify-between items-center px-5">
        <div className="text-2xl font-bold">Blood Donate</div>
        <ul className="hidden md:flex gap-8">
          {navItems.map((item, index) => (
            <li key={index}>
              <a href={item.link} className={item.className}>
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
