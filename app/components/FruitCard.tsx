"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

interface Fruit {
  id: string;
  nome: string;
  preco: number;
  imagem: string;
  descricao: string;
}

export default function FruitCard({ fruta }: { fruta: Fruit }) {
  const [imageError, setImageError] = useState(false);
  const [imageSrc, setImageSrc] = useState(fruta.imagem);

  if (!fruta?.id) {
    console.error("Fruta sem id:", fruta);
    return null;
  }

  const fallbackImage = "https://images.unsplash.com/photo-1619566636858-adf3c4643312?w=800&q=80";

  const handleImageError = () => {
    if (imageSrc !== fallbackImage) {
      setImageError(true);
      setImageSrc(fallbackImage);
    }
  };

  return (
    <Link
      href={`/frutas/${fruta.id}`}
      className="group block bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2 border border-gray-100"
    >
      <div className="relative overflow-hidden bg-gray-100">
        {imageError ? (
          <div className="w-full h-56 bg-gradient-to-br from-emerald-100 to-teal-100 flex items-center justify-center">
            <svg
              className="w-20 h-20 text-emerald-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
        ) : (
          <Image
            src={imageSrc || fallbackImage}
            alt={fruta.nome}
            width={400}
            height={300}
            className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
            onError={handleImageError}
            unoptimized
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-6">
        <h2 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-emerald-600 transition-colors duration-200">
          {fruta.nome}
        </h2>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">
          {fruta.descricao}
        </p>
        <div className="flex items-center justify-between">
          <p className="text-2xl font-extrabold text-emerald-600">
            R$ {fruta.preco.toFixed(2)}
          </p>
          <span className="text-emerald-500 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-200">
            →
          </span>
        </div>
      </div>
    </Link>
  );
}
