import ProductCard from "@/components/ProductCard/ProductCard";
import { products } from "@/data/products";

export default function ProdutosPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="border-b border-[#e9e9e9] bg-[#fafafa]">
        <div className="mx-auto max-w-7xl px-6 py-16 text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-[#c97f95]">
            JD Pratas
          </p>

          <h1 className="mt-3 text-3xl font-light tracking-wide text-[#222] sm:text-4xl">
            Todos os produtos
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-[#777]">
            Encontre a peça que combina com seu estilo.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        {products.length > 0 ? (
          <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4">
            {products.map((product) => (
              <ProductCard
                key={product.slug}
                id={product.slug}
                name={product.name}
                image={product.image}
                material={product.material}
              />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center">
            <p className="text-sm text-[#777]">
              Nenhum produto cadastrado.
            </p>
          </div>
        )}
      </section>
    </main>
  );
}