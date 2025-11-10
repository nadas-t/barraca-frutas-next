import { prisma } from "@/lib/prisma";
import ClientFrutas from "./components/ClientFrutas";

export const revalidate = 60;

export default async function Home() {
  const frutas = await prisma.fruta.findMany();

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="text-center mb-12">
        <h1 className="text-5xl sm:text-6xl font-extrabold mb-4 bg-gradient-to-r from-emerald-600 via-green-500 to-teal-500 bg-clip-text text-transparent">
          Cardápio de Frutas
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Descubra nossa seleção fresca e saborosa de frutas da estação
        </p>
      </div>
      <ClientFrutas frutas={frutas} />
    </main>
  );
}
