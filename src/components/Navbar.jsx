import { Link } from "react-router-dom";

export default function Navbar() {
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

        <div className="hidden md:flex items-center gap-5">
          <a href="#foundry" className="text-white text-sm hover:text-white/70 transition-colors">
            Foundry
          </a>

          <Link
            to="/signin"
            className="bg-[#c6382f] text-white text-sm font-medium px-6 py-2 rounded-full hover:bg-[#ad2f27] transition-colors shrink-0"
          >
            Login
          </Link>
        </div>
      </nav>
    </header>
  );
}