"use client";

import { useRef } from "react";
import ProductCard from "@/components/ProductCard/ProductCard";
import { products } from "@/data/products";

export default function FeaturedCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);

  function mover(direcao: "esquerda" | "direita") {
    if (!carouselRef.current) return;

    const distancia = carouselRef.current.clientWidth * 0.85;

    carouselRef.current.scrollBy({
      left: direcao === "direita" ? distancia : -distancia,
      behavior: "smooth",
    });
  }

  const featuredProducts = products.slice(0, 8);

  if (featuredProducts.length === 0) {
    return (
      <div className="border border-dashed border-[#ccc] py-16 text-center">
        <p className="text-sm text-[var(--gray)]">
          Nenhum produto cadastrado.
        </p>
      </div>
    );
  }

  return (
    <div className="relative">
      {/* SETA ESQUERDA */}
      <button
        type="button"
        onClick={() => mover("esquerda")}
        aria-label="Ver produtos anteriores"
        className="absolute left-0 top-[35%] z-10 hidden h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border border-[#e5e5e5] bg-white text-[#555] shadow-sm transition hover:border-[var(--pink)] hover:text-[var(--pink-dark)] lg:flex"
      >
        <span className="text-xl leading-none">‹</span>
      </button>

      {/* PRODUTOS */}
      <div
        ref={carouselRef}
        className="flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-smooth pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:gap-6"
      >
        {featuredProducts.map((product) => (
          <div
            key={product.slug}
            className="w-[calc(50%-6px)] shrink-0 snap-start sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]"
          >
            <ProductCard
              id={product.slug}
              name={product.name}
              image={product.image}
              material={product.material}
              price={product.price}
            />
          </div>
        ))}
      </div>

      {/* SETA DIREITA */}
      <button
        type="button"
        onClick={() => mover("direita")}
        aria-label="Ver próximos produtos"
        className="absolute right-0 top-[35%] z-10 hidden h-10 w-10 translate-x-1/2 items-center justify-center rounded-full border border-[#e5e5e5] bg-white text-[#555] shadow-sm transition hover:border-[var(--pink)] hover:text-[var(--pink-dark)] lg:flex"
      >
        <span className="text-xl leading-none">›</span>
      </button>

      {/* INDICAÇÃO NO CELULAR */}
      <p className="mt-3 text-center text-[9px] uppercase tracking-[0.18em] text-[#aaa] sm:hidden">
        Deslize para ver mais
      </p>
    </div>
  );
}