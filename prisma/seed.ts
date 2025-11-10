import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.fruta.deleteMany();

  await prisma.fruta.createMany({
    data: [
      {
        nome: "Banana",
        preco: 3.5,
        imagem: "https://images.unsplash.com/photo-1574226516831-e1dff420e12e?w=800&q=80",
        descricao: "Banana prata fresquinha e doce, rica em potássio",
      },
      {
        nome: "Maçã",
        preco: 4.2,
        imagem: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=800&q=80",
        descricao: "Maçã gala suculenta e crocante",
      },
      {
        nome: "Manga",
        preco: 5.0,
        imagem: "https://images.unsplash.com/photo-1605027990122-6c2c0e0c0b0a?w=800&q=80",
        descricao: "Manga palmer madura e doce",
      },
      {
        nome: "Morango",
        preco: 8.5,
        imagem: "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?w=800&q=80",
        descricao: "Morango fresco e suculento, colhido no ponto ideal",
      },
      {
        nome: "Abacaxi",
        preco: 6.0,
        imagem: "https://images.unsplash.com/photo-1582284540020-8acb33b6c70d?w=800&q=80",
        descricao: "Abacaxi doce e suculento, perfeito para sucos",
      },
      {
        nome: "Mamão",
        preco: 4.8,
        imagem: "https://images.unsplash.com/photo-1571772805064-207c8435df88?w=800&q=80",
        descricao: "Mamão papaya maduro e nutritivo",
      },
      {
        nome: "Laranja",
        preco: 3.8,
        imagem: "https://images.unsplash.com/photo-1580052614034-c55d20bfee3b?w=800&q=80",
        descricao: "Laranja lima suculenta, rica em vitamina C",
      },
      {
        nome: "Uva",
        preco: 7.5,
        imagem: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=800&q=80",
        descricao: "Uva verde sem semente, doce e refrescante",
      },
      {
        nome: "Melancia",
        preco: 12.0,
        imagem: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=800&q=80",
        descricao: "Melancia doce e refrescante, ideal para o verão",
      },
      {
        nome: "Abacate",
        preco: 6.5,
        imagem: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=800&q=80",
        descricao: "Abacate maduro, cremoso e nutritivo",
      },
      {
        nome: "Limão",
        preco: 2.5,
        imagem: "https://images.unsplash.com/photo-1608311839260-1e5250eb25a3?w=800&q=80",
        descricao: "Limão tahiti fresco, perfeito para temperos e sucos",
      },
      {
        nome: "Pera",
        preco: 5.5,
        imagem: "https://images.unsplash.com/photo-1615485925505-1c7d3f1c4a0a?w=800&q=80",
        descricao: "Pera williams doce e suculenta",
      },
      {
        nome: "Kiwi",
        preco: 9.0,
        imagem: "https://images.unsplash.com/photo-1619546813926-a78fa6372cd2?w=800&q=80",
        descricao: "Kiwi verde, rico em vitamina C e antioxidantes",
      },
      {
        nome: "Maracujá",
        preco: 4.5,
        imagem: "https://images.unsplash.com/photo-1604977041462-7e27b5b3b8b3?w=800&q=80",
        descricao: "Maracujá azedo, perfeito para sucos e sobremesas",
      },
      {
        nome: "Goiaba",
        preco: 5.2,
        imagem: "https://images.unsplash.com/photo-1615485500908-4168db0e35d0?w=800&q=80",
        descricao: "Goiaba vermelha doce, rica em vitamina C",
      },
    ],
  });

  console.log("✅ Banco populado com frutas!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
