import { frutas } from "../data";
import Image from "next/image";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function FrutaPage({ params }: Props) {
  const { id } = await params; // 👈 desestrutura depois de await
  const fruta = frutas.find((f) => f.id === id);

  if (!fruta) {
    return <p>Fruta não encontrada 😢</p>;
  }

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-2xl shadow">
      <Image
        src={fruta.imagem}
        alt={fruta.nome}
        width={500}
        height={400}
        className="w-full h-60 object-cover rounded-lg mb-4"
      />
      <h1 className="text-3xl font-bold mb-2 text-orange-700">{fruta.nome}</h1>
      <p className="text-gray-700 mb-2">{fruta.descricao}</p>
      <p className="font-bold text-orange-600 text-lg">
        Preço: R$ {fruta.preco.toFixed(2)}
      </p>
    </div>
  );
}
