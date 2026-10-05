import Link from "next/link";
import Header from "@/components/Header/Header";
import ProductCard from "@/components/ProductCard/ProductCard";
import { products } from "@/data/products";

const categories = [
  { name: "Anéis", href: "/produtos?categoria=aneis" },
  { name: "Brincos", href: "/produtos?categoria=brincos" },
  { name: "Colares", href: "/produtos?categoria=colares" },
  { name: "Pulseiras", href: "/produtos?categoria=pulseiras" },
  { name: "Berloques", href: "/produtos?categoria=berloques" },
  { name: "Outros", href: "/produtos?categoria=outros" },
];

const whatsappUrl =
  "https://wa.me/5511942751044?text=Olá! Gostaria de tirar dúvidas sobre as peças da JD Pratas.";

const instagramUrl = "https://instagram.com/jdpratas.01";

export default function Home() {
  const featuredProducts = products.slice(0, 8);

  return (
    <div className="min-h-screen bg-white text-[var(--foreground)]">
      {/* HEADER */}
      <Header />

      {/* HERO */}
      <section className="border-b border-[var(--border)] bg-white">
        <div className="mx-auto flex min-h-[470px] max-w-7xl items-center justify-center px-5 py-16 text-center sm:min-h-[520px] sm:px-6 sm:py-20">
          <div className="w-full max-w-2xl">
            <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.28em] text-[var(--pink-dark)] sm:mb-5 sm:text-xs sm:tracking-[0.3em]">
              JD Pratas
            </p>

            <h1 className="text-[2rem] font-light leading-tight tracking-wide text-[#222] sm:text-5xl lg:text-6xl">
              Elegância em cada detalhe.
            </h1>

            <p className="mx-auto mt-5 max-w-lg text-[13px] leading-6 text-[var(--gray)] sm:mt-6 sm:text-base sm:leading-7">
              Acessórios selecionados para complementar seu estilo com
              delicadeza e personalidade.
            </p>

            <Link
              href="/produtos"
              className="mt-8 inline-flex min-h-[46px] w-full max-w-[220px] items-center justify-center bg-[var(--pink-dark)] px-7 py-3.5 text-[10px] font-medium uppercase tracking-[0.18em] text-white transition-opacity hover:opacity-90 sm:mt-9 sm:w-auto sm:max-w-none sm:px-8 sm:text-xs sm:tracking-[0.2em]"
            >
              Ver produtos
            </Link>
          </div>
        </div>
      </section>

      {/* CATEGORIAS */}
      <section
        id="categorias"
        className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20"
      >
        <div className="mb-8 text-center sm:mb-10">
          <p className="text-[10px] uppercase tracking-[0.25em] text-[var(--pink-dark)] sm:text-xs">
            Encontre seu estilo
          </p>

          <h2 className="mt-3 text-2xl font-light tracking-wide text-[#222] sm:text-3xl">
            Categorias
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-6">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={category.href}
              className="flex min-h-[82px] items-center justify-center border border-[var(--border)] bg-white px-3 text-center text-xs transition-all hover:border-[var(--pink)] hover:bg-[var(--pink-light)] sm:min-h-28 sm:px-4 sm:text-sm"
            >
              {category.name}
            </Link>
          ))}
        </div>
      </section>

      {/* DESTAQUES */}
      <section
        id="produtos"
        className="border-y border-[var(--border)] bg-[var(--gray-light)]"
      >
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20">
          <div className="mb-9 flex flex-col gap-4 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[10px] uppercase tracking-[0.25em] text-[var(--pink-dark)] sm:text-xs">
                Seleção JD Pratas
              </p>

              <h2 className="mt-2 text-2xl font-light tracking-wide text-[#222] sm:text-3xl">
                Destaques da coleção
              </h2>
            </div>

            <Link
              href="/produtos"
              className="w-fit text-[10px] uppercase tracking-[0.15em] text-[#444] transition-colors hover:text-[var(--pink-dark)] sm:text-xs"
            >
              Ver todos os produtos
            </Link>
          </div>

          {featuredProducts.length > 0 ? (
            <div className="grid grid-cols-2 gap-x-3 gap-y-8 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-4">
              {featuredProducts.map((product) => (
                <ProductCard
                  key={product.slug}
                  id={product.slug}
                  name={product.name}
                  image={product.image}
                  material={product.material}
                  price={product.price}
                />
              ))}
            </div>
          ) : (
            <div className="border border-dashed border-[#ccc] py-16 text-center">
              <p className="text-sm text-[var(--gray)]">
                Nenhum produto cadastrado.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* SOBRE */}
      <section
        id="sobre"
        className="mx-auto max-w-4xl px-5 py-20 text-center sm:px-6 sm:py-24"
      >
        <p className="text-[10px] uppercase tracking-[0.25em] text-[var(--pink-dark)] sm:text-xs">
          Sobre a JD Pratas
        </p>

        <h2 className="mt-3 text-2xl font-light tracking-wide text-[#222] sm:text-3xl">
          Detalhes que fazem diferença
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-[13px] leading-6 text-[var(--gray)] sm:mt-6 sm:text-base sm:leading-7">
          A JD Pratas nasceu para reunir acessórios escolhidos com cuidado,
          trazendo peças que combinam elegância, delicadeza e personalidade
          para diferentes momentos.
        </p>
      </section>

      {/* CONTATO */}
      <section
        id="contato"
        className="bg-[var(--pink-light)] px-5 py-16 text-center sm:px-6 sm:py-20"
      >
        <p className="text-[10px] uppercase tracking-[0.25em] text-[var(--pink-dark)] sm:text-xs">
          Atendimento
        </p>

        <h2 className="mt-3 text-2xl font-light tracking-wide text-[#222]">
          Fale com a JD Pratas
        </h2>

        <p className="mx-auto mt-5 max-w-md text-[13px] leading-6 text-[var(--gray)] sm:text-sm">
          Entre em contato pelo WhatsApp para tirar dúvidas sobre produtos,
          pedidos e atendimento.
        </p>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-7 inline-flex min-h-[46px] w-full max-w-[260px] items-center justify-center gap-3 bg-[#25D366] px-6 py-3.5 text-[10px] font-medium uppercase tracking-[0.16em] text-white transition hover:bg-[#20bd5a] sm:w-auto sm:max-w-none sm:px-8 sm:text-xs sm:tracking-[0.2em]"
        >
          <svg
            className="h-5 w-5 fill-current"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M12.04 2C6.51 2 2.02 6.49 2.02 12.02c0 1.77.46 3.5 1.34 5.02L2 22l5.1-1.34a10 10 0 0 0 4.94 1.3h.01c5.53 0 10.02-4.49 10.02-10.02C22.07 6.41 17.57 2 12.04 2Zm0 18.2h-.01a8.17 8.17 0 0 1-4.16-1.14l-.3-.18-3.03.8.81-2.95-.19-.31a8.18 8.18 0 1 1 6.88 3.78Zm4.48-6.13c-.25-.13-1.48-.73-1.71-.81-.23-.08-.4-.13-.57.13-.17.25-.65.81-.8.98-.15.17-.29.19-.54.06-.25-.13-1.04-.38-1.98-1.22-.73-.65-1.22-1.45-1.36-1.7-.14-.25-.01-.39.11-.51.11-.11.25-.29.38-.44.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.57-1.37-.78-1.88-.21-.5-.42-.43-.57-.44h-.49c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1s.9 2.44 1.02 2.61c.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.44.53.6.19 1.15.16 1.58.1.48-.07 1.48-.61 1.69-1.2.21-.59.21-1.09.15-1.2-.06-.1-.23-.17-.48-.29Z" />
          </svg>

          Falar pelo WhatsApp
        </a>
      </section>

      {/* RODAPÉ */}
      <footer className="bg-[#222] px-5 py-10 text-white sm:px-6 sm:py-12">
        <div className="mx-auto grid max-w-7xl gap-9 sm:grid-cols-3 sm:gap-10">
          <div>
            <h3 className="text-sm font-medium tracking-[0.2em]">
              JD PRATAS
            </h3>

            <p className="mt-3 max-w-xs text-xs leading-6 text-neutral-400 sm:mt-4">
              Elegância em cada detalhe.
            </p>
          </div>

          <div>
            <h3 className="text-[10px] uppercase tracking-[0.2em] sm:text-xs">
              Links úteis
            </h3>

            <div className="mt-4 flex flex-col gap-3 text-xs text-neutral-400">
              <Link href="/produtos" className="hover:text-white">
                Produtos
              </Link>

              <a href="#sobre" className="hover:text-white">
                Sobre nós
              </a>

              <a href="#contato" className="hover:text-white">
                Contato
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-[10px] uppercase tracking-[0.2em] sm:text-xs">
              Atendimento
            </h3>

            <div className="mt-4 flex flex-col gap-4 text-xs text-neutral-400">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-white"
              >
                <svg
                  className="h-5 w-5 shrink-0 fill-current text-[#25D366]"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12.04 2C6.51 2 2.02 6.49 2.02 12.02c0 1.77.46 3.5 1.34 5.02L2 22l5.1-1.34a10 10 0 0 0 4.94 1.3h.01c5.53 0 10.02-4.49 10.02-10.02C22.07 6.41 17.57 2 12.04 2Zm0 18.2h-.01a8.17 8.17 0 0 1-4.16-1.14l-.3-.18-3.03.8.81-2.95-.19-.31a8.18 8.18 0 1 1 6.88 3.78Zm4.48-6.13c-.25-.13-1.48-.73-1.71-.81-.23-.08-.4-.13-.57.13-.17.25-.65.81-.8.98-.15.17-.29.19-.54.06-.25-.13-1.04-.38-1.98-1.22-.73-.65-1.22-1.45-1.36-1.7-.14-.25-.01-.39.11-.51.11-.11.25-.29.38-.44.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.57-1.37-.78-1.88-.21-.5-.42-.43-.57-.44h-.49c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1s.9 2.44 1.02 2.61c.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.44.53.6.19 1.15.16 1.58.1.48-.07 1.48-.61 1.69-1.2.21-.59.21-1.09.15-1.2-.06-.1-.23-.17-.48-.29Z" />
                </svg>

                <span>WhatsApp: (11) 94275-1044</span>
              </a>

              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-white"
              >
                <svg
                  className="h-5 w-5 shrink-0 fill-current"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9Zm9.75 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0-6 0Z" />
                </svg>

                <span>Instagram: @jdpratas.01</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-9 max-w-7xl border-t border-neutral-700 pt-5 text-center text-[9px] tracking-wider text-neutral-500 sm:mt-10 sm:pt-6 sm:text-[10px]">
          © 2026 JD Pratas. Todos os direitos reservados.
        </div>
      </footer>

      {/* WHATSAPP FLUTUANTE */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com a JD Pratas pelo WhatsApp"
        className="fixed bottom-4 right-4 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105 sm:bottom-5 sm:right-5"
      >
        <svg
          className="h-6 w-6 fill-current"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M12.04 2C6.51 2 2.02 6.49 2.02 12.02c0 1.77.46 3.5 1.34 5.02L2 22l5.1-1.34a10 10 0 0 0 4.94 1.3h.01c5.53 0 10.02-4.49 10.02-10.02C22.07 6.41 17.57 2 12.04 2Zm0 18.2h-.01a8.17 8.17 0 0 1-4.16-1.14l-.3-.18-3.03.8.81-2.95-.19-.31a8.18 8.18 0 1 1 6.88 3.78Zm4.48-6.13c-.25-.13-1.48-.73-1.71-.81-.23-.08-.4-.13-.57.13-.17.25-.65.81-.8.98-.15.17-.29.19-.54.06-.25-.13-1.04-.38-1.98-1.22-.73-.65-1.22-1.45-1.36-1.7-.14-.25-.01-.39.11-.51.11-.11.25-.29.38-.44.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.57-1.37-.78-1.88-.21-.5-.42-.43-.57-.44h-.49c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1s.9 2.44 1.02 2.61c.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.44.53.6.19 1.15.16 1.58.1.48-.07 1.48-.61 1.69-1.2.21-.59.21-1.09.15-1.2-.06-.1-.23-.17-.48-.29Z" />
        </svg>
      </a>
    </div>
  );
}