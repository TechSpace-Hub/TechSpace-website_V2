import Footer from "../Footer";

export default function AuthLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-surface">
      <header className="px-6 py-5 border-b border-gray-200 bg-white">
        <a href="/" className="flex items-center gap-2 font-display font-semibold text-ink w-fit">
          <span aria-hidden="true">🚀</span> TechSpace
        </a>
      </header>

      <main className="flex-1 flex items-center justify-center px-6 py-16">{children}</main>

      <Footer />
    </div>
  );
}