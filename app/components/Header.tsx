import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-orange-500 text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6">
        <Link href="/" className="text-2xl font-bold">
          🍓 Barraca do Zé
        </Link>
        <nav className="space-x-4">
          <Link href="/" className="hover:underline">
            Cardápio
          </Link>
          <Link href="/contato" className="hover:underline">
            Contato
          </Link>
        </nav>
      </div>
    </header>
  );
}
