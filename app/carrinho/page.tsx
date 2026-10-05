"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type CartItem = {
  id: string;
  name: string;
  price: number;
  image?: string;
  quantity: number;
};

const WHATSAPP_NUMBER = "COLOQUE_SEU_NUMERO_AQUI";

export default function CarrinhoPage() {
  const [items, setItems] = useState<CartItem[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("jd-pratas-cart");

      if (saved) {
        const parsed = JSON.parse(saved);

        if (Array.isArray(parsed)) {
          setItems(parsed);
        }
      }
    } catch {
      setItems([]);
    }

    setLoaded(true);
  }, []);

  function atualizarCarrinho(novoCarrinho: CartItem[]) {
    setItems(novoCarrinho);

    localStorage.setItem(
      "jd-pratas-cart",
      JSON.stringify(novoCarrinho)
    );

    window.dispatchEvent(new Event("cart-updated"));
  }

  function aumentarQuantidade(id: string) {
    const novoCarrinho = items.map((item) =>
      item.id === id
        ? {
            ...item,
            quantity: item.quantity + 1,
          }
        : item
    );

    atualizarCarrinho(novoCarrinho);
  }

  function diminuirQuantidade(id: string) {
    const novoCarrinho = items
      .map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity - 1,
            }
          : item
      )
      .filter((item) => item.quantity > 0);

    atualizarCarrinho(novoCarrinho);
  }

  function removerProduto(id: string) {
    const novoCarrinho = items.filter(
      (item) => item.id !== id
    );

    atualizarCarrinho(novoCarrinho);
  }

  function finalizarPedidoWhatsApp() {
    if (items.length === 0) {
      return;
    }

    const produtos = items
      .map((item) => {
        const preco =
          item.price > 0
            ? `R$ ${item.price
                .toFixed(2)
                .replace(".", ",")}`
            : "Preço a confirmar";

        return `• ${item.name}\n  Quantidade: ${item.quantity}\n  Valor: ${preco}`;
      })
      .join("\n\n");

    const possuiPrecoPendente = items.some(
      (item) => item.price <= 0
    );

    const total = items.reduce(
      (acc, item) =>
        acc + item.price * item.quantity,
      0
    );

    const mensagem = [
      "Olá! Gostaria de finalizar um pedido pela JD Pratas.",
      "",
      "PRODUTOS:",
      produtos,
      "",
      possuiPrecoPendente
        ? "Gostaria de confirmar os preços e a disponibilidade das peças."
        : `TOTAL: R$ ${total
            .toFixed(2)
            .replace(".", ",")}`,
      "",
      "Aguardo as informações para concluir o pedido."
    ].join("\n");

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      mensagem
    )}`;

    window.open(url, "_blank");
  }

  const total = items.reduce(
    (acc, item) =>
      acc + item.price * item.quantity,
    0
  );

  const quantidadeTotal = items.reduce(
    (acc, item) =>
      acc + item.quantity,
    0
  );

  if (!loaded) {
    return null;
  }

  return (
    <main className="min-h-screen bg-white">
      <section className="border-b border-[var(--border)] px-6 py-16 text-center">
        <p className="text-xs uppercase tracking-[0.25em] text-[var(--pink-dark)]">
          JD Pratas
        </p>

        <h1 className="mt-3 text-3xl font-light tracking-wide text-[#222]">
          Meu carrinho
        </h1>

        <p className="mt-3 text-sm text-[var(--gray)]">
          {quantidadeTotal === 0
            ? "Seu carrinho está vazio."
            : `${quantidadeTotal} item(ns) no carrinho`}
        </p>
      </section>

      {items.length === 0 ? (
        <section className="mx-auto max-w-xl px-6 py-20 text-center">
          <div className="border border-[#e9e9e9] px-6 py-14">
            <p className="text-sm text-[#777]">
              Você ainda não adicionou nenhum produto.
            </p>

            <Link
              href="/produtos"
              className="mt-8 inline-flex min-h-[44px] items-center justify-center bg-[var(--pink-dark)] px-8 text-xs font-medium uppercase tracking-[0.15em] text-white transition-opacity hover:opacity-90"
            >
              Ver produtos
            </Link>
          </div>
        </section>
      ) : (
        <section className="mx-auto grid max-w-6xl gap-10 px-6 py-14 lg:grid-cols-[1fr_360px]">
          <div className="space-y-5">
            {items.map((item) => (
              <article
                key={item.id}
                className="flex gap-5 border-b border-[#e9e9e9] pb-5"
              >
                <div className="relative h-28 w-28 shrink-0 overflow-hidden bg-[#f8f8f8]">
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="112px"
                      className="object-cover"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center">
                      <span className="text-[9px] uppercase tracking-[0.2em] text-[#aaa]">
                        JD Pratas
                      </span>
                    </div>
                  )}
                </div>

                <div className="flex min-w-0 flex-1 flex-col">
                  <h2 className="text-sm font-medium uppercase leading-5 text-[#222]">
                    {item.name}
                  </h2>

                  <p className="mt-2 text-xs text-[#888]">
                    {item.price > 0
                      ? `R$ ${item.price
                          .toFixed(2)
                          .replace(".", ",")}`
                      : "Preço a confirmar"}
                  </p>

                  <div className="mt-auto flex items-center justify-between gap-4 pt-4">
                    <div className="flex items-center border border-[#ddd]">
                      <button
                        type="button"
                        onClick={() =>
                          diminuirQuantidade(item.id)
                        }
                        className="flex h-9 w-9 items-center justify-center text-[#555] hover:bg-[#f8f8f8]"
                        aria-label="Diminuir quantidade"
                      >
                        −
                      </button>

                      <span className="flex h-9 min-w-9 items-center justify-center border-x border-[#ddd] text-xs">
                        {item.quantity}
                      </span>

                      <button
                        type="button"
                        onClick={() =>
                          aumentarQuantidade(item.id)
                        }
                        className="flex h-9 w-9 items-center justify-center text-[#555] hover:bg-[#f8f8f8]"
                        aria-label="Aumentar quantidade"
                      >
                        +
                      </button>
                    </div>

                    <button
                      type="button"
                      onClick={() =>
                        removerProduto(item.id)
                      }
                      className="text-[10px] uppercase tracking-[0.12em] text-[#888] hover:text-[var(--pink-dark)]"
                    >
                      Remover
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <aside className="h-fit border border-[#e9e9e9] p-6">
            <h2 className="text-sm font-medium uppercase tracking-[0.15em] text-[#222]">
              Resumo do pedido
            </h2>

            <div className="mt-6 flex justify-between border-b border-[#e9e9e9] pb-4 text-sm">
              <span className="text-[#777]">
                Produtos
              </span>

              <span className="text-[#222]">
                {quantidadeTotal}
              </span>
            </div>

            <div className="mt-4 flex justify-between">
              <span className="text-sm text-[#777]">
                Total
              </span>

              <span className="text-base font-medium text-[#222]">
                {total > 0
                  ? `R$ ${total
                      .toFixed(2)
                      .replace(".", ",")}`
                  : "A confirmar"}
              </span>
            </div>

            <button
              type="button"
              onClick={finalizarPedidoWhatsApp}
              className="mt-7 flex min-h-[48px] w-full items-center justify-center bg-[var(--pink-dark)] px-5 text-xs font-medium uppercase tracking-[0.12em] text-white transition-opacity hover:opacity-90"
            >
              Finalizar pedido pelo WhatsApp
            </button>

            <p className="mt-4 text-center text-[10px] leading-5 text-[#999]">
              Seu pedido será enviado para nosso WhatsApp
              para confirmação de disponibilidade, valores e
              pagamento.
            </p>

            <Link
              href="/produtos"
              className="mt-5 flex min-h-[44px] w-full items-center justify-center border border-[#ddd] px-5 text-xs uppercase tracking-[0.12em] text-[#555] transition-colors hover:border-[var(--pink-dark)] hover:text-[var(--pink-dark)]"
            >
              Continuar comprando
            </Link>
          </aside>
        </section>
      )}
    </main>
  );
}