export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-emerald-700 to-teal-700 text-white mt-16 border-t border-emerald-500">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-lg font-semibold mb-2">🍍 Barraca do Zé</p>
            <p className="text-sm text-emerald-100">
              Frutas frescas e saborosas todos os dias
            </p>
          </div>
          <div className="text-center md:text-right">
            <p className="text-sm text-emerald-100">
              © {new Date().getFullYear()} Barraca do Zé. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
