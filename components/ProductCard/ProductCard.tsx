"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type ProductCardProps = {
  id: string;
  name: string;
  material?: string;
  price?: number;
  image?: string;
};

type CartItem = {
  id: string;
  name: string;
  price: number;
  image?: string;
  quantity: number;
};

export default function ProductCard({
  id,
  name,
  material,
  price,
  image,
}: ProductCardProps) {
  const [adicionado, setAdicionado] = useState(false);

  function adicionarAoCarrinho() {
    try {
      const dadosSalvos = localStorage.getItem("jd-pratas-cart");

      let carrinhoAtual: CartItem[] = [];

      if (dadosSalvos) {
        try {
          carrinhoAtual = JSON.parse(dadosSalvos);

          if (!Array.isArray(carrinhoAtual)) {
            carrinhoAtual = [];
          }
        } catch {
          carrinhoAtual = [];
        }
      }

      const produtoExistente = carrinhoAtual.find(
        (item) => item.id === id
      );

      let novoCarrinho: CartItem[];

      if (produtoExistente) {
        novoCarrinho = carrinhoAtual.map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
      } else {
        novoCarrinho = [
          ...carrinhoAtual,
          {
            id,
            name,
            price: price ?? 0,
            image,
            quantity: 1,
          },
        ];
      }

      localStorage.setItem(
        "jd-pratas-cart",
        JSON.stringify(novoCarrinho)
      );

      window.dispatchEvent(new Event("cart-updated"));

      setAdicionado(true);

      setTimeout(() => {
        setAdicionado(false);
      }, 1500);
    } catch (error) {
      console.error(
        "Erro ao adicionar produto ao carrinho:",
        error
      );
    }
  }

  return (
    <article className="group flex h-full flex-col bg-white">
      <Link
        href={`/produtos/${id}`}
        className="block"
      >
        <div className="relative aspect-square w-full overflow-hidden bg-[#f8f8f8]">
          {image ? (
            <Image
              src={image}
              alt={name}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 280px"
              className="object-cover transition duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#aaa]">
                JD Pratas
              </span>
            </div>
          )}
        </div>

        <div className="pt-4">
          <div className="min-h-[40px]">
            <h3 className="line-clamp-2 text-xs font-medium uppercase leading-5 tracking-wide text-[#222]">
              {name}
            </h3>
          </div>

          <div className="mt-1 min-h-[16px]">
            {material && (
              <p className="text-[10px] uppercase tracking-wider text-[#888]">
                {material}
              </p>
            )}
          </div>

          <div className="mt-3 min-h-[20px]">
            {price !== undefined ? (
              <p className="text-sm font-medium text-[#222]">
                R$ {price.toFixed(2).replace(".", ",")}
              </p>
            ) : (
              <p className="text-xs text-[#999]">
                Preço em breve
              </p>
            )}
          </div>
        </div>
      </Link>

      <div className="mt-auto pt-4">
        <button
          type="button"
          onClick={adicionarAoCarrinho}
          className="flex min-h-[42px] w-full items-center justify-center gap-2 bg-[var(--pink-dark)] px-4 text-[10px] font-medium uppercase tracking-[0.15em] text-white transition-all duration-200 hover:opacity-90"
        >
          {adicionado ? (
            <>
              <span
                className="flex h-4 w-4 items-center justify-center rounded-full border border-white text-[10px]"
                aria-hidden="true"
              >
                ✓
              </span>

              <span>Adicionado ao carrinho</span>
            </>
          ) : (
            "Adicionar ao carrinho"
          )}
        </button>
      </div>
    </article>
  );
}