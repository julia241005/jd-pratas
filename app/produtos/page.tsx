import Header from "@/components/Header/Header";
import ProductCard from "@/components/ProductCard/ProductCard";
import { products } from "@/data/products";

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-[#f8f6f3] text-[#1c1c1c]">
      <Header />

      {/* CABEÇALHO */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
        <p className="text-[10px] tracking-[0.35em] text-[#a58b8b] sm:text-xs">
          COLEÇÃO
        </p>

        <h1 className="mt-3 font-serif text-4xl sm:text-5xl">
          Nossos produtos
        </h1>

        <p className="mt-4 max-w-xl text-sm leading-7 text-[#68635e]">
          Conheça nossa seleção de joias e encontre a peça ideal para você.
        </p>
      </section>

      {/* FILTROS */}
      <section className="border-y border-[#dedbd6] bg-white">
        <div className="mx-auto flex max-w-7xl gap-3 overflow-x-auto px-4 py-4 sm:px-6">
          <button className="shrink-0 border border-[#1c1c1c] bg-[#1c1c1c] px-5 py-2 text-xs text-white">
            Todos
          </button>

          <button className="shrink-0 border border-[#dedbd6] px-5 py-2 text-xs transition hover:border-[#1c1c1c]">
            Anéis
          </button>

          <button className="shrink-0 border border-[#dedbd6] px-5 py-2 text-xs transition hover:border-[#1c1c1c]">
            Brincos
          </button>

          <button className="shrink-0 border border-[#dedbd6] px-5 py-2 text-xs transition hover:border-[#1c1c1c]">
            Colares
          </button>

          <button className="shrink-0 border border-[#dedbd6] px-5 py-2 text-xs transition hover:border-[#1c1c1c]">
            Pulseiras
          </button>

          <button className="shrink-0 border border-[#dedbd6] px-5 py-2 text-xs transition hover:border-[#1c1c1c]">
            Berloques
          </button>

          <button className="shrink-0 border border-[#dedbd6] px-5 py-2 text-xs transition hover:border-[#1c1c1c]">
            Outros
          </button>
        </div>
      </section>

      {/* PRODUTOS */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="mb-8 flex items-center justify-between">
          <p className="text-xs text-[#68635e]">
            {products.length} produtos
          </p>

          <select
            className="border border-[#dedbd6] bg-white px-3 py-2 text-xs outline-none"
            defaultValue="relevantes"
          >
            <option value="relevantes">Mais relevantes</option>
            <option value="menor-preco">Menor preço</option>
            <option value="maior-preco">Maior preço</option>
            <option value="novidades">Novidades</option>
          </select>
        </div>

        <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-6 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              material={product.material}
              price={product.promoPrice || product.price}
              image={product.image}
            />
          ))}
        </div>
      </section>

      {/* RODAPÉ */}
      <footer className="border-t border-[#dedbd6] bg-[#1c1c1c] text-white">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10">
          <p className="font-serif text-xl">
            JD
          </p>

          <p className="mt-1 text-[10px] tracking-[0.25em] text-[#bcb7b1]">
            PRATAS
          </p>

          <p className="mt-5 text-[10px] text-[#aaa49d] sm:text-xs">
            © 2026 JD Pratas. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </main>
  );
}