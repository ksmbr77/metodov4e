import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Users, Award } from "lucide-react";
import heroImage from "/lovable-uploads/9d86a4be-6872-4a0f-8b33-9611a49741d0.png";

const HeroSection = () => {
  const scrollToCTA = () => {
    const element = document.getElementById("cta-final");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen bg-gradient-hero relative overflow-hidden">
      <div className="container mx-auto px-4 pt-24 pb-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <Badge variant="secondary" className="bg-primary/20 text-primary-foreground border-primary/30 animate-bounce-in">
              Mentoria Premium
            </Badge>
            
            <div className="space-y-2 mb-4">
              <div className="bg-primary/20 text-primary-foreground px-4 py-2 rounded-full text-sm font-poppins font-semibold inline-block">
                Método V4E – Vender 4x na Shopee
              </div>
            </div>
            
            <h1 className="font-poppins font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-tight text-primary-foreground">
              Transforme sua Loja na Shopee em uma 
              <span className="text-primary"> Máquina de Vendas</span> em 30 Dias
            </h1>
            
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-primary-foreground/90">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <span className="font-opensans text-sm md:text-base leading-relaxed">
                  Mentoria prática e personalizada para aumentar suas vendas no e-commerce, mesmo que você esteja começando do zero.
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 md:gap-6 text-primary-foreground/80">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-2 rounded-full">
                <TrendingUp className="w-4 h-4 text-primary" />
                <span className="font-opensans text-sm md:text-base">+300% vendas</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-2 rounded-full">
                <Users className="w-4 h-4 text-primary" />
                <span className="font-opensans text-sm md:text-base">+20 alunos mentorados</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-2 rounded-full">
                <Award className="w-4 h-4 text-primary" />
                <span className="font-opensans text-sm md:text-base">Top Seller Shopee</span>
              </div>
            </div>

            <div className="space-y-4">
              <Button 
                onClick={scrollToCTA}
                size="lg"
                className="bg-gradient-cta hover:bg-primary-hover hover:scale-105 shadow-cta font-poppins font-semibold text-sm md:text-base px-6 md:px-8 py-3 md:py-4 animate-bounce-in w-full transition-all duration-300"
              >
                Quero Aplicar o Método V4E Agora
              </Button>
              <p className="text-xs md:text-sm text-primary-foreground/70 font-opensans text-center">
                Análise gratuita • Estratégia personalizada • Resultados em 30 dias
              </p>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-slide-in-right mt-8 lg:mt-0">
            <div className="relative rounded-2xl overflow-hidden shadow-elegant">
              <img 
                src={heroImage} 
                alt="Dashboard Shopee com resultados de vendas de confecções e casa"
                className="w-full h-auto object-cover"
                loading="eager"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 to-transparent"></div>
            </div>
            
            {/* Floating Cards - Responsivas */}
            <div className="absolute -top-2 -right-2 md:-top-4 md:-right-4 bg-card p-3 md:p-4 rounded-lg shadow-elegant animate-fade-in delay-1000 hover:scale-105 transition-transform duration-300">
              <div className="text-primary font-poppins font-bold text-lg md:text-2xl">R$ 147.892</div>
              <div className="text-muted-foreground font-opensans text-xs md:text-sm">Vendas este mês</div>
            </div>
            
            <div className="absolute -bottom-2 -left-2 md:-bottom-4 md:-left-4 bg-card p-3 md:p-4 rounded-lg shadow-elegant animate-fade-in delay-1500 hover:scale-105 transition-transform duration-300">
              <div className="text-primary font-poppins font-bold text-base md:text-xl">Top 1%</div>
              <div className="text-muted-foreground font-opensans text-xs md:text-sm">Ranking Shopee</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 border border-primary-foreground rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 border border-primary-foreground rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-primary-foreground rounded-full"></div>
      </div>
    </section>
  );
};

export default HeroSection;