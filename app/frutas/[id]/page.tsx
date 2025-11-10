import { prisma } from "@/lib/prisma";
import Image from "next/image";
import Link from "next/link";

export const dynamicParams = true;

interface Props {
  params: { id: string };
}

export default async function FrutaPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const fruta = await prisma.fruta.findUnique({
    where: { id },
  });

  if (!fruta) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-16 text-center">
        <div className="bg-white rounded-2xl shadow-lg p-12">
          <div className="text-6xl mb-4">😢</div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            Fruta não encontrada
          </h1>
          <p className="text-gray-600 mb-6">
            A fruta que você está procurando não existe ou foi removida.
          </p>
          <Link
            href="/"
            className="inline-block px-6 py-3 bg-emerald-500 text-white font-semibold rounded-lg hover:bg-emerald-600 transition-colors duration-200"
          >
            Voltar ao cardápio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
      <Link
        href="/"
        className="inline-flex items-center text-gray-600 hover:text-emerald-600 mb-8 transition-colors duration-200 group"
      >
        <svg
          className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform duration-200"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
        Voltar ao cardápio
      </Link>

      <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
        <div className="md:flex">
          <div className="md:w-1/2 relative bg-gray-100">
            <Image
              src={fruta.imagem}
              alt={fruta.nome}
              width={600}
              height={600}
              className="w-full h-80 md:h-full object-cover"
              priority
              unoptimized
            />
          </div>
          <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-800">
              {fruta.nome}
            </h1>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              {fruta.descricao}
            </p>
            <div className="pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500 mb-2 uppercase tracking-wide font-semibold">
                Preço
              </p>
              <p className="text-4xl font-extrabold text-emerald-600 mb-6">
                R$ {fruta.preco.toFixed(2)}
              </p>
              <button className="w-full py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold rounded-xl hover:from-emerald-600 hover:to-teal-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
                Adicionar ao carrinho
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
