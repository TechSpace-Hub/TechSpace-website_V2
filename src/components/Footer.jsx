import whatsappIcon from "../assets/whatsapp.svg";
import xIcon from "../assets/x.svg";
import linkedinIcon from "../assets/linkedin.svg";
import instagramIcon from "../assets/instagram.svg";

const socials = [
  {
    label: "WhatsApp",
    href: "https://chat.whatsapp.com/ImZm8ywkATDFjTceZQHD2t?s=cl&p=i&mlu=4&ilr=4",
    src: whatsappIcon,
  },
  { label: "X", href: "https://x.com/techspacecomm?s=11", src: xIcon },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/thetechspace/",
    src: linkedinIcon,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/techspacecommunity_?igsi=MTJlOHpydGJ2ZXhicQ%3D%3D&utm_source=qr",
    src: instagramIcon,
  },
];

export default function Footer() {
  return (
    <footer className="bg-footer text-white px-6 py-14">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div>
            <a href="#" className="flex items-center gap-2 font-display font-semibold text-lg">
              <span aria-hidden="true">🚀</span> techspace
            </a>
            <div className="flex items-center gap-3 mt-5">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <img src={s.src} alt={s.label} className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="w-full lg:max-w-lg">
            <form className="border border-white/20 rounded-2xl p-4">
              <p className="text-sm text-white/85 mb-3">
                Sign up for our newsletter and join the growing TechSpace community.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <input
                  type="text"
                  placeholder="First name"
                  className="flex-1 min-w-0 bg-footer-panel border border-white/10 rounded-lg px-3 py-2 text-sm placeholder:text-white/50 outline-none focus:border-white/40"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="flex-1 min-w-0 bg-footer-panel border border-white/10 rounded-lg px-3 py-2 text-sm placeholder:text-white/50 outline-none focus:border-white/40"
                />
                <button
                  type="submit"
                  className="mt-2 sm:mt-0 sm:ml-2 flex-shrink-0 bg-white text-ink text-sm font-medium rounded-lg px-5 py-2 shadow-lg hover:bg-white/90 transition-colors whitespace-nowrap"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="border-t border-white/15 mt-10 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-sm text-white/70">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              <span>© 2026. TechSpace</span>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Privacy &amp; Cookies policy</a>
            </div>

            <div className="flex items-center gap-4 flex-wrap">
              <span className="text-white/70 mr-2">Quick links:</span>
              <a href="#about" className="hover:text-white transition-colors">About</a>
              <a href="#services" className="hover:text-white transition-colors">Services</a>
              <a href="#community" className="hover:text-white transition-colors">Community</a>
              <a href="#events" className="hover:text-white transition-colors">Events</a>
              <a href="#gallery" className="hover:text-white transition-colors">Gallery</a>
              <a href="#faqs" className="hover:text-white transition-colors">FAQs</a>
            </div>
          </div>
          <a href="mailto:info@thetechspaceltd.com" className="hover:text-white transition-colors">
            info@thetechspaceltd.com
          </a>
        </div>
      </div>
    </footer>
  );
}