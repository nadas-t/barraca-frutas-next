export default function Contato() {
  return (
    <main className="max-w-md mx-auto bg-white p-6 rounded-2xl shadow text-center">
      <h1 className="text-3xl font-bold mb-4 text-orange-700">📞 Contato</h1>
      <p className="mb-2">⏰ Horário: Segunda a Sexta, 8h às 18h</p>
      <p className="mb-4">📍 Local: Campus da Universidade</p>
      <a
        href="https://wa.me/5599999999999"
        target="_blank"
        className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
      >
        Falar no WhatsApp
      </a>
    </main>
  );
}
