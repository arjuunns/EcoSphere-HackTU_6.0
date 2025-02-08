import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-neutral-900 text-white px-4">
      <div className="flex justify-between items-center h-16 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center">
          <span className="text-2xl font-bold text-[#81C784]">EcoSphere</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/" className="hover:text-[#81C784] transition-colors">Home</Link>
          <Link to="/ai_predictor" className="hover:text-[#81C784] transition-colors">Get Insights</Link>
          <Link to="/dashboard" className="hover:text-[#81C784] transition-colors">Dashboard</Link>
          <Link to="/analytics" className="hover:text-[#81C784] transition-colors">Analytics</Link>
          <Link to="/charts" className="hover:text-[#81C784] transition-colors">Graphs</Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="hover:text-[#81C784] focus:outline-none">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-neutral-800 p-4">
          <Link to="/" className="block py-2 hover:text-[#81C784]">Home</Link>
          <Link to="/ai_predictor" className="block py-2 hover:text-[#81C784]">Get Insights</Link>
          <Link to="/dashboard" className="block py-2 hover:text-[#81C784]">Dashboard</Link>
          <Link to="/analytics" className="block py-2 hover:text-[#81C784]">Analytics</Link>
          <Link to="/charts" className="block py-2 hover:text-[#81C784]">Graphs</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
