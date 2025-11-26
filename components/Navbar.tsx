import React from 'react';
import { Menu, Ticket } from 'lucide-react';

export const Navbar: React.FC = () => {
  return (
    <nav className="relative z-50 flex items-center justify-between px-6 py-4">
      <div className="text-2xl font-black italic tracking-tighter text-white drop-shadow-md">
        UIN <span className="text-poster-yellow">SALATIGA</span>
      </div>
      <div className="flex gap-4">
        <button className="hidden md:block px-6 py-2 font-bold text-white uppercase bg-black/20 rounded-full hover:bg-black/40 backdrop-blur-sm transition">
          Location
        </button>
        <button className="flex items-center gap-2 px-6 py-2 font-bold text-white uppercase bg-poster-pink rounded-full hover:bg-fuchsia-400 shadow-lg hover:shadow-poster-pink/50 transition transform hover:-translate-y-1">
          <Ticket size={18} />
          <span>Get Tickets</span>
        </button>
        <button className="md:hidden text-white">
          <Menu size={28} />
        </button>
      </div>
    </nav>
  );
};