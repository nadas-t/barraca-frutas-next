import { frutas } from "./frutas/data";
import FruitCard from "./components/FruitCard";

export default function Home() {
  return (
    <main>
      <h1 className="text-4xl font-bold mb-6 text-orange-700">
        🍌 Cardápio de Frutas
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {frutas.map((fruta) => {
          console.log(fruta);
          return <FruitCard key={fruta.id} fruta={fruta} />;
        })}
      </div>
    </main>
  );
}
