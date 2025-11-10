import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8 py-4">
        <Link
          href="/"
          className="text-2xl sm:text-3xl font-extrabold hover:scale-105 transition-transform duration-200 flex items-center gap-2"
        >
          <span className="text-3xl">🍓</span>
          <span>Barraca do Zé</span>
        </Link>
        <nav className="flex items-center space-x-6">
          <Link
            href="/"
            className="font-medium hover:text-emerald-100 transition-colors duration-200 relative group"
          >
            Cardápio
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-200" />
          </Link>
          <Link
            href="/contato"
            className="font-medium hover:text-emerald-100 transition-colors duration-200 relative group"
          >
            Contato
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-200" />
          </Link>
        </nav>
      </div>
    </header>
  );
}
