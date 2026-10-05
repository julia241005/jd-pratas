import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#e9e4e4] bg-white">
      <div className="mx-auto flex h-[68px] max-w-7xl items-center justify-between px-4 sm:h-[78px] sm:px-8">

        {/* LOGO */}
        <Link
          href="/"
          aria-label="JD Pratas - Início"
          className="flex h-[46px] w-[105px] items-center sm:h-[52px] sm:w-[120px]"
        >
          <img
            src="/imagens/icon.png"
            alt="JD Pratas"
            className="h-full w-full object-contain"
          />
        </Link>

        {/* NAVEGAÇÃO DESKTOP */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            className="text-sm text-[#333] transition-colors hover:text-[#c98295]"
          >
            Início
          </Link>

          <Link
            href="/produtos"
            className="text-sm text-[#333] transition-colors hover:text-[#c98295]"
          >
            Produtos
          </Link>

          <a
            href="/#categorias"
            className="text-sm text-[#333] transition-colors hover:text-[#c98295]"
          >
            Categorias
          </a>

          <a
            href="/#sobre"
            className="text-sm text-[#333] transition-colors hover:text-[#c98295]"
          >
            Sobre nós
          </a>

          <a
            href="/#contato"
            className="text-sm text-[#333] transition-colors hover:text-[#c98295]"
          >
            Contato
          </a>
        </nav>

        {/* ÍCONES */}
        <div className="flex items-center gap-0.5 sm:gap-1">

          {/* INSTAGRAM */}
          <a
            href="https://instagram.com/jdpratas.01"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram JD Pratas"
            className="flex h-11 w-11 items-center justify-center text-[#333] transition-colors hover:text-[#c98295]"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              aria-hidden="true"
            >
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle
                cx="17.5"
                cy="6.5"
                r="1"
                fill="currentColor"
                stroke="none"
              />
            </svg>
          </a>

          {/* CARRINHO */}
          <Link
            href="/carrinho"
            aria-label="Carrinho"
            className="flex h-11 w-11 items-center justify-center text-[#333] transition-colors hover:text-[#c98295]"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-hidden="true"
            >
              <path d="M5 8h14l-1 12H6L5 8Z" />
              <path d="M9 8a3 3 0 0 1 6 0" />
            </svg>
          </Link>

          {/* MENU MOBILE */}
          <details className="relative md:hidden">
            <summary
              className="flex h-11 w-11 cursor-pointer list-none items-center justify-center text-[#333]"
              aria-label="Abrir menu"
            >
              <svg
                width="21"
                height="21"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-hidden="true"
              >
                <path d="M4 6h16" />
                <path d="M4 12h16" />
                <path d="M4 18h16" />
              </svg>
            </summary>

            <div className="absolute right-0 top-[48px] w-[230px] overflow-hidden border border-[#e9e4e4] bg-white shadow-lg">
              <nav className="flex flex-col">
                <Link
                  href="/"
                  className="border-b border-[#eeeeee] px-5 py-4 text-sm text-[#333] transition-colors hover:bg-[#fdf5f7] hover:text-[#c98295]"
                >
                  Início
                </Link>

                <Link
                  href="/produtos"
                  className="border-b border-[#eeeeee] px-5 py-4 text-sm text-[#333] transition-colors hover:bg-[#fdf5f7] hover:text-[#c98295]"
                >
                  Produtos
                </Link>

                <a
                  href="/#categorias"
                  className="border-b border-[#eeeeee] px-5 py-4 text-sm text-[#333] transition-colors hover:bg-[#fdf5f7] hover:text-[#c98295]"
                >
                  Categorias
                </a>

                <a
                  href="/#sobre"
                  className="border-b border-[#eeeeee] px-5 py-4 text-sm text-[#333] transition-colors hover:bg-[#fdf5f7] hover:text-[#c98295]"
                >
                  Sobre nós
                </a>

                <a
                  href="/#contato"
                  className="px-5 py-4 text-sm text-[#333] transition-colors hover:bg-[#fdf5f7] hover:text-[#c98295]"
                >
                  Contato
                </a>
              </nav>
            </div>
          </details>

        </div>
      </div>
    </header>
  );
}