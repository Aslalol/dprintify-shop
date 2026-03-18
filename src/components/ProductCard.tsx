import { Link } from "react-router-dom";
import type { Product } from "@/data/products";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      to={`/produto/${product.id}`}
      className="group bg-surface border border-border rounded-md overflow-hidden transition-all duration-150 hover:-translate-y-0.5 hover:shadow-md"
    >
      <div className="relative aspect-square bg-muted overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-150 group-hover:scale-105"
          loading="lazy"
        />
        {product.tag && (
          <Badge className="absolute top-2 left-2 bg-accent text-accent-foreground text-xs font-semibold">
            {product.tag}
          </Badge>
        )}
      </div>
      <div className="p-4">
        <span className="text-xs text-muted-foreground font-medium uppercase tracking-wide">{product.category}</span>
        <h3 className="text-sm font-medium text-foreground mt-1 line-clamp-2 leading-snug">{product.name}</h3>
        <div className="mt-3">
          <p className="text-lg font-bold text-foreground">
            R$ {product.price.toFixed(2).replace(".", ",")}
          </p>
          <p className="text-sm text-success font-medium">
            R$ {product.pixPrice.toFixed(2).replace(".", ",")} no PIX
          </p>
        </div>
        <div className="mt-3">
          <span className="inline-block w-full text-center py-2 text-sm font-medium bg-primary text-primary-foreground rounded-md transition-colors group-hover:bg-primary/90">
            Ver opções
          </span>
        </div>
      </div>
    </Link>
  );
}
