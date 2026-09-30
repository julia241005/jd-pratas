import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#dedbd6] bg-[#f8f6f3]/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
        
        {/* LOGO */}
        <a href="/" className="shrink-0">
          <Image
            src="/images/logo-jd-pratas.jpeg"
            alt="JD Pratas"
            width={130}
            height={50}
            className="h-auto w-[100px] sm:w-[120px]"
          />
        </a>

        {/* MENU DESKTOP */}
        <nav className="hidden items-center gap-6 md:flex">
          <a
            href="/"
            className="text-sm transition hover:text-[#a58b8b]"
          >
            Início
          </a>

          <a
            href="/produtos"
            className="text-sm transition hover:text-[#a58b8b]"
          >
            Produtos
          </a>

          <a
            href="/categorias"
            className="text-sm transition hover:text-[#a58b8b]"
          >
            Categorias
          </a>

          <a
            href="/#sobre"
            className="text-sm transition hover:text-[#a58b8b]"
          >
            Sobre nós
          </a>

          <a
            href="/#contato"
            className="text-sm transition hover:text-[#a58b8b]"
          >
            Contato
          </a>
        </nav>

        {/* AÇÕES */}
        <div className="flex items-center gap-3">
          {/* CARRINHO */}
          <button
            type="button"
            aria-label="Carrinho"
            className="flex h-9 w-9 items-center justify-center border border-[#dedbd6] bg-white transition hover:border-[#1c1c1c]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="17"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M6 8h12l1 13H5L6 8Z" />
              <path d="M9 8a3 3 0 0 1 6 0" />
            </svg>
          </button>

          {/* MENU MOBILE */}
          <details className="relative md:hidden">
            <summary className="flex h-9 w-9 cursor-pointer list-none items-center justify-center border border-[#dedbd6] bg-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M4 6h16" />
                <path d="M4 12h16" />
                <path d="M4 18h16" />
              </svg>
            </summary>

            <div className="absolute right-0 top-12 w-52 border border-[#dedbd6] bg-white p-3 shadow-sm">
              <nav className="flex flex-col">
                <a
                  href="/"
                  className="border-b border-[#eeeae5] px-3 py-3 text-sm"
                >
                  Início
                </a>

                <a
                  href="/produtos"
                  className="border-b border-[#eeeae5] px-3 py-3 text-sm"
                >
                  Produtos
                </a>

                <a
                  href="/categorias"
                  className="border-b border-[#eeeae5] px-3 py-3 text-sm"
                >
                  Categorias
                </a>

                <a
                  href="/#sobre"
                  className="border-b border-[#eeeae5] px-3 py-3 text-sm"
                >
                  Sobre nós
                </a>

                <a
                  href="/#contato"
                  className="px-3 py-3 text-sm"
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