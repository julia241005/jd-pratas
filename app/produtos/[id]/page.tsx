import Header from "@/components/Header/Header";
import { products } from "@/data/products";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const product = products.find((item) => item.id === id);

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#f8f6f3] text-[#1c1c1c]">
      <Header />

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-16">
        {/* CAMINHO */}
        <div className="mb-8 text-xs text-[#77716b]">
          <Link href="/" className="hover:text-[#a58b8b]">
            Início
          </Link>

          <span className="mx-2">/</span>

          <Link href="/produtos" className="hover:text-[#a58b8b]">
            Produtos
          </Link>

          <span className="mx-2">/</span>

          <span className="text-[#1c1c1c]">{product.name}</span>
        </div>

        {/* PRODUTO */}
        <div className="grid gap-10 md:grid-cols-2 md:gap-14">
          
          {/* FOTO */}
          <div className="relative flex aspect-square items-center justify-center overflow-hidden border border-[#dedbd6] bg-white">
            {product.image ? (
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="px-4 text-center">
                <p className="text-xs tracking-[0.3em] text-[#aaa49d]">
                  FOTO DO PRODUTO
                </p>

                <p className="mt-2 text-sm text-[#c0bbb4]">
                  Espaço reservado
                </p>
              </div>
            )}

            {/* MARCA D'ÁGUA */}
            <div className="absolute bottom-3 right-3 text-[8px] tracking-[0.15em] text-[#aaa49d] opacity-70">
              JD PRATAS
            </div>
          </div>

          {/* INFORMAÇÕES */}
          <div className="flex flex-col justify-center">
            <p className="text-[10px] tracking-[0.35em] text-[#a58b8b] sm:text-xs">
              {product.category}
            </p>

            <h1 className="mt-3 font-serif text-3xl leading-tight sm:text-4xl">
              {product.name}
            </h1>

            <p className="mt-3 text-sm text-[#77716b]">
              {product.material}
            </p>

            {/* PREÇO */}
            <div className="mt-7">
              {product.promoPrice ? (
                <div className="flex items-center gap-3">
                  <span className="text-sm text-[#99938d] line-through">
                    {product.price}
                  </span>

                  <span className="text-xl font-medium">
                    {product.promoPrice}
                  </span>
                </div>
              ) : (
                <p className="text-xl font-medium">
                  {product.price}
                </p>
              )}
            </div>

            {/* DESCRIÇÃO */}
            <div className="mt-8 border-t border-[#dedbd6] pt-7">
              <p className="text-[10px] tracking-[0.2em] text-[#99938d]">
                SOBRE A PEÇA
              </p>

              <p className="mt-3 text-sm leading-7 text-[#68635e]">
                {product.description || "Descrição do produto em breve."}
              </p>
            </div>

            {/* DISPONIBILIDADE */}
            <div className="mt-6">
              {product.available ? (
                <p className="text-xs text-[#68635e]">
                  Disponível
                </p>
              ) : (
                <p className="text-xs text-[#a58b8b]">
                  Produto indisponível
                </p>
              )}
            </div>

            {/* BOTÃO */}
            <button
              type="button"
              disabled={!product.available}
              className="mt-7 w-full bg-[#1c1c1c] px-6 py-4 text-xs tracking-wide text-white transition hover:bg-[#393939] disabled:cursor-not-allowed disabled:bg-[#bcb7b1]"
            >
              Adicionar ao carrinho
            </button>

            {/* VOLTAR */}
            <Link
              href="/produtos"
              className="mt-4 text-center text-xs underline underline-offset-4"
            >
              Voltar para produtos
            </Link>
          </div>
        </div>
      </section>

      {/* INFORMAÇÕES ADICIONAIS */}
      <section className="border-y border-[#dedbd6] bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
          <div className="grid gap-8 sm:grid-cols-3">
            
            <div>
              <p className="text-[10px] tracking-[0.2em] text-[#99938d]">
                MATERIAL
              </p>

              <p className="mt-2 text-sm">
                {product.material}
              </p>
            </div>

            <div>
              <p className="text-[10px] tracking-[0.2em] text-[#99938d]">
                CATEGORIA
              </p>

              <p className="mt-2 text-sm">
                {product.category}
              </p>
            </div>

            <div>
              <p className="text-[10px] tracking-[0.2em] text-[#99938d]">
                CÓDIGO
              </p>

              <p className="mt-2 text-sm">
                {product.sku || "Em breve"}
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* RODAPÉ */}
      <footer className="border-t border-[#dedbd6] bg-[#1c1c1c] text-white">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10">
          <p className="font-serif text-xl">JD</p>

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