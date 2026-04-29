import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white border-b border-gray-200">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/">
              <img src="/images/logo.svg" alt="logo" className="h-auto " />
            </Link>
          </div>
          
          <div className="hidden md:flex items-center gap-9.75 text-[16px] font-normal text-black ">
            <Link to="" className="transition hover:text-gray-900">
              Programs
            </Link>
            <Link to="" className="transition hover:text-gray-900">
              Events
            </Link>
            <Link to="" className="transition hover:text-gray-900">
              About Us
            </Link>
            <Link to="" className="transition hover:text-gray-900">
              FAQs
            </Link>
          </div>
         
          <div className="items-center hidden gap-4 md:flex">
            <button className="text-[16px] font-normal leading-4.5 text-[#D1453B] underline hover:opacity-80 transition">
              Collaborate
            </button>

            <button className="w-35 h-12 px-6 py-4 text-white rounded-full bg-linear-to-b from-[#E59E99] to-[#D1453B] flex items-center justify-center">
              Get Started
            </button>
          </div>

          {/*  Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/*  Mobile Menu */}
      {isOpen && (
        <div className="px-4 pb-4 space-y-4 bg-white border-t md:hidden">
          <Link to="" className="block text-gray-700">
            Programs
          </Link>
          <Link to="" className="block text-gray-700">
            Events
          </Link>
          <Link to="" className="block text-gray-700">
            About Us
          </Link>
          <Link to="" className="block text-gray-700">
            FAQs
          </Link>

          <div className="flex flex-col gap-3 pt-2">
            <button className="text-sm font-medium text-left text-red-500 underline transition hover:opacity-80">
              Collaborate
            </button>

            <button className="w-full sm:w-35 h-12 px-6 py-3 text-white rounded-full bg-linear-to-b from-[#E59E99] to-[#D1453B] flex items-center justify-center transition hover:opacity-90">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
