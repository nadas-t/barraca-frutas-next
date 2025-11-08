import Link from "next/link";
import Image from "next/image";

interface Fruit {
  id: string;
  nome: string;
  preco: number;
  imagem: string;
  descricao: string;
}

export default function FruitCard({ fruta }: { fruta: Fruit }) {
  // Defensive check: if id is missing, log and render a fallback to avoid creating
  // an invalid href like `/frutas/undefined` which breaks the details page.
  if (!fruta?.id) {
    console.error("Fruta sem id:", fruta);
    return null; // Evita quebrar a renderização
  }

  return (
    <Link
      href={`/frutas/${fruta.id}`}
      className="block bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden"
    >
      <Image
        src={fruta.imagem}
        alt={fruta.nome}
        width={400}
        height={300}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-1">{fruta.nome}</h2>
        <p className="text-gray-700 text-sm mb-2">{fruta.descricao}</p>
        <p className="font-bold text-orange-600">R$ {fruta.preco.toFixed(2)}</p>
      </div>
    </Link>
  );
}
