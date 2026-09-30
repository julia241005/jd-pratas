import Header from "@/components/Header/Header";
import ProductCard from "@/components/ProductCard/ProductCard";
import CategoryCard from "@/components/CategoryCard/CategoryCard";
import { products } from "@/data/products";

const categories = [
  "Anéis",
  "Brincos",
  "Colares",
  "Pulseiras",
  "Berloques",
  "Outros",
];

export default function Home() {
  const bestSellers = products.filter((product) => product.bestSeller);
  const newProducts = products.filter((product) => product.newProduct);
  const featuredProducts = products.filter((product) => product.featured);

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f8f6f3] text-[#1c1c1c]">
      <Header />

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-16 md:py-24">
        <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
          <div>
            <p className="mb-3 text-[10px] font-medium tracking-[0.35em] text-[#a58b8b] sm:mb-4 sm:text-xs sm:tracking-[0.4em]">
              JD PRATAS
            </p>

            <h1 className="max-w-xl font-serif text-4xl leading-tight sm:text-5xl md:text-6xl">
              Elegância em cada detalhe.
            </h1>

            <p className="mt-5 max-w-lg text-sm leading-6 text-[#68635e] sm:mt-6 sm:text-base sm:leading-7">
              Joias em prata 925 escolhidas para transformar momentos
              especiais em memórias que permanecem.
            </p>

            <a
              href="#produtos"
              className="mt-6 inline-block bg-[#1c1c1c] px-6 py-3 text-xs tracking-wide text-white transition hover:bg-[#393939] sm:mt-8 sm:px-7 sm:text-sm"
            >
              Ver produtos
            </a>
          </div>

          <div className="flex aspect-square items-center justify-center border border-[#d5d1cb] bg-white">
            <div className="px-4 text-center">
              <p className="text-[10px] tracking-[0.3em] text-[#aaa49d] sm:text-xs">
                FOTO PRINCIPAL
              </p>

              <p className="mt-2 text-xs text-[#c0bbb4] sm:text-sm">
                Espaço reservado
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="mais-vendidos" className="border-y border-[#dedbd6] bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16">
          <div className="mb-8 sm:mb-10">
            <p className="text-[10px] tracking-[0.35em] text-[#a58b8b] sm:text-xs">
              POPULARES
            </p>

            <div className="mt-2 flex items-end justify-between gap-4 sm:mt-3">
              <div>
                <h2 className="font-serif text-3xl sm:text-4xl">
                  Mais vendidos
                </h2>

                <p className="mt-2 max-w-lg text-xs leading-6 text-[#68635e] sm:mt-3 sm:text-sm">
                  As peças que mais conquistam nossas clientes.
                </p>
              </div>

              <a
                href="#produtos"
                className="hidden shrink-0 text-sm underline underline-offset-4 sm:block"
              >
                Ver todos
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:gap-6 lg:grid-cols-4">
            {bestSellers.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                material={product.material}
                price={product.promoPrice || product.price}
                image={product.image}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16">
        <div className="mb-8 sm:mb-10">
          <p className="text-[10px] tracking-[0.35em] text-[#a58b8b] sm:text-xs">
            RECÉM-CHEGADOS
          </p>

          <div className="mt-2 flex items-end justify-between gap-4 sm:mt-3">
            <div>
              <h2 className="font-serif text-3xl sm:text-4xl">
                Novidades
              </h2>

              <p className="mt-2 max-w-lg text-xs leading-6 text-[#68635e] sm:mt-3 sm:text-sm">
                Descubra as peças que acabaram de chegar à JD Pratas.
              </p>
            </div>

            <a
              href="#produtos"
              className="hidden shrink-0 text-sm underline underline-offset-4 sm:block"
            >
              Ver todos
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:gap-6 lg:grid-cols-4">
          {newProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              material={product.material}
              price={product.promoPrice || product.price}
              image={product.image}
            />
          ))}
        </div>
      </section>

      <section id="categorias" className="border-y border-[#dedbd6] bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16">
          <div className="mb-8 text-center sm:mb-10">
            <p className="text-[10px] tracking-[0.35em] text-[#a58b8b] sm:text-xs">
              EXPLORE
            </p>

            <h2 className="mt-3 font-serif text-3xl sm:text-4xl">
              Encontre sua peça
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-xs leading-6 text-[#68635e] sm:text-sm">
              Explore nossas categorias e encontre a joia ideal para cada momento.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3">
            {categories.map((category) => (
              <CategoryCard key={category} name={category} />
            ))}
          </div>
        </div>
      </section>

      <section
        id="produtos"
        className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16"
      >
        <div className="mb-8 sm:mb-10">
          <p className="text-[10px] tracking-[0.35em] text-[#a58b8b] sm:text-xs">
            DESTAQUES
          </p>

          <div className="mt-2 flex items-end justify-between gap-4 sm:mt-3">
            <div>
              <h2 className="font-serif text-3xl sm:text-4xl">
                Nossos produtos
              </h2>

              <p className="mt-2 text-xs leading-6 text-[#68635e] sm:mt-3 sm:text-sm">
                Conheça algumas das peças da nossa coleção.
              </p>
            </div>

            <a
              href="#categorias"
              className="hidden shrink-0 text-sm underline underline-offset-4 sm:block"
            >
              Ver categorias
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:gap-6 lg:grid-cols-4">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              material={product.material}
              price={product.promoPrice || product.price}
              image={product.image}
            />
          ))}
        </div>
      </section>

      <section id="sobre" className="border-y border-[#dedbd6] bg-white">
        <div className="mx-auto max-w-5xl px-4 py-16 text-center sm:px-6 sm:py-20">
          <p className="text-[10px] tracking-[0.35em] text-[#a58b8b] sm:text-xs">
            SOBRE A JD
          </p>

          <h2 className="mt-4 font-serif text-3xl leading-tight sm:text-4xl">
            Mais do que uma joia, um detalhe que permanece.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#68635e] sm:mt-6 sm:text-base">
            A JD Pratas nasceu para oferecer peças delicadas, elegantes e atemporais,
            escolhidas para fazer parte dos momentos especiais de cada pessoa.
          </p>
        </div>
      </section>

      <section
        id="contato"
        className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16"
      >
        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
          <div>
            <p className="text-[10px] tracking-[0.35em] text-[#a58b8b] sm:text-xs">
              FALE CONOSCO
            </p>

            <h2 className="mt-3 font-serif text-3xl sm:text-4xl">
              Entre em contato
            </h2>

            <p className="mt-5 max-w-md text-sm leading-7 text-[#68635e]">
              Em breve você poderá entrar em contato conosco pelo WhatsApp e
              acompanhar todas as novidades pelo Instagram.
            </p>
          </div>

          <div className="border border-[#dedbd6] bg-white p-6 sm:p-8">
            <div className="space-y-6">
              <div>
                <p className="text-[10px] tracking-[0.15em] text-[#99938d]">
                  INSTAGRAM
                </p>

                <p className="mt-2 text-sm">@seuinstagram</p>
              </div>

              <div>
                <p className="text-[10px] tracking-[0.15em] text-[#99938d]">
                  WHATSAPP
                </p>

                <p className="mt-2 text-sm">(00) 00000-0000</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#dedbd6] bg-[#1c1c1c] text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-4 py-8 sm:px-6 sm:py-10 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-serif text-xl">JD</p>

            <p className="mt-1 text-[10px] tracking-[0.25em] text-[#bcb7b1]">
              PRATAS
            </p>
          </div>

          <p className="text-[10px] text-[#aaa49d] sm:text-xs">
            © 2026 JD Pratas. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </main>
  );
}