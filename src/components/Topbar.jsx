import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Topbar = () => {
  const [isOpen, setIsOpen] = useState(false);
 
  return (   
    <div className="sticky top-0 z-50 py-3 px-5 md:h-[13vh] flex items-center justify-between w-full bg-teal-900">
        {/* Logo or Brand */}   
        <svg width="600" height="180%" viewBox="0 0 1200 180" xmlns="http://www.w3.org/2000/svg">
          <style>{`.hotel-name { font-family: "Didot", "Bodoni MT", "Playfair Display", serif; font-size: 60px; font-weight: 500; letter-spacing: 4px; fill: #b89b5e } .divider { stroke: #9e7b30ff; stroke-width: 5 }`}</style>
          <line x1="170" y1="50" x2="530" y2="50" className="divider"/>
          <text x="350" y="108" textAnchor="middle" className="hotel-name">THE AMANI HOTEL</text>
          <line x1="170" y1="125" x2="530" y2="125" className="divider"/>
        </svg>
       
        <button className='md:hidden text-2xl text-white ml-auto' onClick={() => setIsOpen(!isOpen)}>☰</button>
  
        {/* Menu Items */}  
        <ul className={`flex-col space-x-7 text-lg md:flex-row md:flex md:items-center 
          md-space-between absolute md:static right-0 top-16 bg-teal-900 text-white w-full 
          md:h-auto sm:h-64 p-5 md:w-auto z-50 transition-all duration-300 ${isOpen ? 'block' : 'hidden'}`}>
          <Link to="/"><div className="hover:underline">Home</div></Link>
          <Link to="/about"><div className="hover:underline">About</div></Link>
          <Link to="/contact"><div className="hover:underline">Contact</div></Link>
          <Link to="/gallery"><div className="hover:underline">Gallery</div></Link>
        </ul>
    </div>
  );
};

export default Topbar;