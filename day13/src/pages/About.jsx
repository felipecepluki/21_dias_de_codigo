import { useEffect } from "react";
import { Header } from "../components/Header";

export function About() {
  useEffect(() => {
    document.title = "About";
  }, []);

  return (
    <div className="bg-[#1f1a25] flex-col sm:h-screen md:h-screen lg:h-screen">
      <header className="p-4">
        <Header />
      </header>
      <main className="p-4 flex h-full items-center justify-center flex-col">
        <h1 className="text-white">Page About</h1>
      </main>
    </div>
  );
}
