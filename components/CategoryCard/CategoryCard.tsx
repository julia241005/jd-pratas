import Link from "next/link";

type ProductCardProps = {
  id: string;
  name: string;
  material: string;
  price: string;
  image?: string;
};

export default function ProductCard({
  id,
  name,
  material,
  price,
  image,
}: ProductCardProps) {
  return (
    <Link href={`/produtos/${id}`} className="group block min-w-0">
      {/* FOTO DO PRODUTO */}
      <div className="relative flex aspect-square items-center justify-center overflow-hidden border border-[#dedbd6] bg-white transition duration-300 group-hover:border-[#b8b5b0]">
        {image ? (
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
          />
        ) : (
          <div className="px-3 text-center">
            <p className="text-[9px] tracking-[0.2em] text-[#aaa49d] sm:text-xs">
              FOTO DO PRODUTO
            </p>

            <p className="mt-2 text-[10px] text-[#c0bbb4] sm:text-xs">
              Espaço reservado
            </p>
          </div>
        )}

        {/* MARCA D'ÁGUA */}
        <div className="absolute bottom-2 right-2 text-[7px] tracking-[0.15em] text-[#aaa49d] opacity-70 sm:bottom-3 sm:right-3 sm:text-[8px]">
          JD PRATAS
        </div>
      </div>

      {/* INFORMAÇÕES DO PRODUTO */}
      <div className="pt-3 sm:pt-4">
        <h3 className="truncate font-serif text-sm sm:text-lg">
          {name}
        </h3>

        <p className="mt-1 text-[11px] text-[#77716b] sm:text-sm">
          {material}
        </p>

        <p className="mt-2 text-xs font-medium sm:mt-3 sm:text-sm">
          {price}
        </p>
      </div>
    </Link>
  );
}