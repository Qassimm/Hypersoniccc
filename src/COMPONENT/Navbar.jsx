import React, { useState } from 'react';
import { FaPhone, FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [{ label: "Process", href: "#process" },
  { label: "Services", href: "#services" },
  { label: "Benifits", href: "#benefits" },
  { label: "About", href: "#about" },
  { label: "Plans", href: "#plans" },
  { label: "FAQ", href: "#faq" }];

  const [activeLink, setActiveLink] = useState('');

  return (
    <div className="flex justify-center">
      <nav className="flex items-center justify-between md:justify-center 2xl:justify-between gap-15 p-1 md:p-3 fixed md:top-3 md:rounded-[50px] bg-[#ecedf1] shadow-[inset_5px_5px_8px_#cacaca,inset_-5px_-5px_10px_white] px-10 sm:px-0 w-screen sm:w-full md:w-auto 2xl:w-[1430px] z-100">
        
        {/* Logo */}
        <div className="flex items-center gap-[10px]">
          <div className="font-bold bg-[#6D7AFF] p-1 md:p-3 w-fit rounded-full">
            <div className="w-5 h-5 rounded-full bg-white" />
          </div>
          <p className="hidden 2xl:block text-[24px] font-semibold">
            Hyper<span className="text-[#6d7aff]">Sonic</span>
          </p>
        </div>

        {/* Nav Links - Desktop */}
        <ul className="hidden md:flex gap-5">
          {navLinks.map((nav, index) => (
            <li key={index}>
              <a
                href={nav.href}
                onClick={() => setActiveLink(nav.href)}
                className={`p-2 rounded-3xl font-medium transition ${
        activeLink === nav.href
          ? 'text-[#6D7AFF] border border-[#6D7AFF]' // highlighted
          : 'text-[#1c1c1c] opacity-70 hover:text-[#6D7AFF]' // normal
      }`}
              >
                {nav.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Phone Icon - Tablet Only */}
        <button className="hidden md:block 2xl:hidden border p-3 text-xl text-white bg-[#6D7AFF] cursor-pointer rounded-full duration-300 hover:bg-black">
          <FaPhone />
        </button>

        {/* Book a Call - Large screens */}
        <button className="hidden 2xl:block bg-[#6d7aff] py-3 px-5 rounded-3xl text-white duration-300 hover:bg-black">
          Book a call
        </button>

        {/* Hamburger - Mobile Only */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-3 text-xl text-black cursor-pointer rounded-full duration-300 hover:text-white hover:bg-black "
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Mobile Nav Dropdown */}
      <div
        className={`md:hidden fixed left-0 top-[65px] w-full bg-[#ecedf1] z-50 overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[500px] py-6 opacity-100' : 'max-h-0 py-0 opacity-0'
        }`}
      >
        <div className="flex flex-col items-center gap-4">
          {navLinks.map((nav, index) => (
            <a
              key={index}
              href={nav.href}
              className="text-[#1c1c1c] text-lg font-medium hover:text-[#6D7AFF] transition"
              onClick={() => setIsOpen(false)}
            >
              {nav.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
