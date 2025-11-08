import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata = {
  title: "Barraca de Frutas",
  description: "Cardápio online da barraca de frutas da universidade 🍌🍓🍍",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-gradient-to-b from-orange-50 to-yellow-100 min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 container mx-auto p-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
