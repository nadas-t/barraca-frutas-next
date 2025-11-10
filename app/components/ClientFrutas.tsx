"use client";

import { useState } from "react";
import SearchBar from "./SearchBar";
import FruitCard from "./FruitCard";

export default function ClientFrutas({ frutas }: { frutas: any[] }) {
  const [busca, setBusca] = useState("");

  const frutasFiltradas = frutas
    .filter((f) => f && f.nome && f.id)
    .filter((f) =>
      f.nome.toLowerCase().includes(busca.toLowerCase())
    );

  return (
    <>
      <SearchBar onSearch={setBusca} />
      {frutasFiltradas.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {frutasFiltradas.map((fruta) => {
            if (!fruta?.id) {
              console.warn("Fruta inválida ignorada:", fruta);
              return null;
            }
            return <FruitCard key={fruta.id} fruta={fruta} />;
          })}
        </div>
      ) : (
        <div className="text-center py-16">
          <div className="inline-block p-6 bg-white rounded-full shadow-lg mb-4">
            <svg
              className="w-16 h-16 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <p className="text-xl font-semibold text-gray-600 mb-2">
            Nenhuma fruta encontrada
          </p>
          <p className="text-gray-500">
            Tente buscar com outro termo
          </p>
        </div>
      )}
    </>
  );
}
