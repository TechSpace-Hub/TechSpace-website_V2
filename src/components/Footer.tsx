import { FaXTwitter, FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";

export default function Footer() {
  const socialLinks = [
    {
      icon: <FaWhatsapp size={14} />,
      url: "https://wa.me/234XXXXXXXXXX",
    },
    {
      icon: <FaXTwitter size={14} />,
      url: "https://x.com/......",
    },
    {
      icon: <FaLinkedinIn size={14} />,
      url: "https://linkedin......",
    },
    {
      icon: (
        <img
          src="images/logo.png"
          alt="Techspace"
          className="object-contain w-20 h-20"
        />
      ),
      url: "https://........",
      
    },
  ];

  return (
    <footer className="bg-[#300300] text-white">
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 sm:py-16">
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">

          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <img
                src="images/logo.png"
                alt="Techspace Logo"
                className="object-contain w-9 h-9 sm:w-10 sm:h-10"
              />
              <span className="text-[15px] font-medium tracking-tight">
                techspace
              </span>
            </div>

            <div className="flex flex-wrap gap-3">
              {socialLinks.map((item, index) => (
                <a
                  key={index}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer">
                  <SocialBox>{item.icon}</SocialBox>
                </a>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-130">
            <div className="p-4 border border-white/20 rounded-2xl sm:p-6">
              <p className="text-[12px] sm:text-[13px] text-white/70 mb-5 leading-relaxed">
                Sign up for our newsletter and join the growing TechSpace community.
              </p>

              <div className="flex flex-col gap-3 sm:flex-row">
                <input
                  type="text"
                  placeholder="First name"
                  className="w-full sm:flex-1 px-3 py-2 text-[12.5px] bg-transparent border border-white/20 rounded-md outline-none placeholder:text-white/40"
                />

                <input
                  type="email"
                  placeholder="Email"
                  className="w-full sm:flex-1 px-3 py-2 text-[12.5px] bg-transparent border border-white/20 rounded-md outline-none placeholder:text-white/40"
                />

                <button className="w-full sm:w-auto px-5 py-2 text-[12.5px] font-medium text-[#5A0C05] bg-white rounded-md hover:bg-white/90 transition">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="my-10 border-t border-white/20" />

        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6 text-[12px] sm:text-[12.5px] text-white/60">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
            <span>© 2026. TechSpace</span>

            <a href="#" className="transition hover:text-white">
              Terms of Service
            </a>

            <a href="#" className="transition hover:text-white">
              Privacy & Cookies policy
            </a>
          </div>

          <span className="text-white/80">
            hello@techspace.ng
          </span>
        </div>
      </div>
    </footer>
  );
}
function SocialBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center transition border rounded-md w-9 h-9 border-white/20 text-white/80 hover:bg-white/10">
      {children}
    </div>
  );
}