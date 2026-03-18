import heroImage from "@/assets/hero-3dprint.jpg";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-navy">
      <div className="absolute inset-0">
        <img src={heroImage} alt="Impressora 3D em ação" className="w-full h-full object-cover opacity-40" />
      </div>
      <div className="relative container py-20 md:py-32">
        <div className="max-w-xl">
          <h1 className="text-3xl md:text-5xl font-bold text-navy-foreground leading-tight mb-4">
            Impressões 3D personalizadas
          </h1>
          <p className="text-lg text-navy-foreground/80 mb-8 font-body">
            Filamentos de alta qualidade para suas criações. PLA, PETG e muito mais com entrega rápida em todo o Brasil.
          </p>
          <div className="flex gap-3">
            <Button asChild size="lg">
              <Link to="/#produtos">Ver Produtos</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-navy-foreground/30 text-navy-foreground hover:bg-navy-foreground/10">
              <Link to="/#lancamentos">Lançamentos</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
