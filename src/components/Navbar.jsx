import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = ["About", "Events", "Services", "FAQs"];

  return (
    <header className="absolute top-0 left-0 right-0 z-20 px-6 pt-6">
      <nav
        className="max-w-4xl mx-auto flex items-center justify-between gap-6
                   bg-white/10 backdrop-blur-md border border-white/25
                   rounded-full pl-6 pr-2.5 py-2.5"
      >
        <a href="#" className="flex items-center gap-2 text-white font-display font-semibold">
          <span aria-hidden="true">🚀</span> TechSpace
        </a>

        <ul className="hidden md:flex items-center gap-8 text-white text-sm">
          {links.map((link) => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`} className="hover:text-white/70 transition-colors">
                {link}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-6">
          <a href="#foundry" className="text-white text-sm hover:text-white/70 transition-colors">
            Foundry
          </a>
        </div>

        <Link
          to="/signin"
          className="hidden md:block bg-[#c6382f] text-white text-sm font-medium px-6 py-2 rounded-full hover:bg-[#ad2f27] transition-colors shrink-0"
        >
          Login
        </Link>

        <button
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="md:hidden flex items-center justify-center w-9 h-9 rounded-full bg-white/10 text-white shrink-0"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden max-w-4xl mx-auto mt-2 bg-white backdrop-blur-md rounded-3xl border border-slate-200 px-6 py-5 flex flex-col gap-4 shadow-lg">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="text-base text-black transition-colors hover:text-[#c6382f]"
            >
              {link}
            </a>
          ))}
          <a
            href="#foundry"
            onClick={() => setMenuOpen(false)}
            className="text-base text-black transition-colors hover:text-[#c6382f]"
          >
            Foundry
          </a>
          <Link
            to="/signin"
            onClick={() => setMenuOpen(false)}
            className="bg-[#c6382f] text-white text-sm font-medium px-6 py-2.5 rounded-full text-center"
          >
            Login
          </Link>
        </div>
      )}
    </header>
  );
}