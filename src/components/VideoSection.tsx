import { Card, CardContent } from "@/components/ui/card";
import { Play } from "lucide-react";

const VideoSection = () => {
  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-2 mb-6">
            <h2 className="font-poppins font-bold text-xl md:text-2xl text-foreground">
              Como o Método V4E transformou meu negócio
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Video */}
            <Card className="shadow-elegant overflow-hidden bg-gradient-card">
              <CardContent className="p-0">
                <div className="relative aspect-video bg-muted overflow-hidden rounded-lg">
                  <iframe 
                    src="https://www.youtube.com/embed/UxzJkxQeFS8?autoplay=0&mute=0&controls=1&rel=0&showinfo=0&modestbranding=1&iv_load_policy=3&color=white&disablekb=1&cc_load_policy=0"
                    className="w-full h-full border-0"
                    allowFullScreen
                    title="Demonstração do Método V4E"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    frameBorder="0"
                  />
                </div>
              </CardContent>
            </Card>
            
            {/* Dashboard Image */}
            <div className="relative animate-slide-in-right">
              <div className="relative rounded-2xl overflow-hidden shadow-elegant">
                <img 
                  src="/lovable-uploads/9d86a4be-6872-4a0f-8b33-9611a49741d0.png" 
                  alt="Dashboard de vendas com resultados mensais de R$ 118,5mil do aluno"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 to-transparent"></div>
              </div>
              
              {/* Floating Cards */}
              <div className="absolute -top-2 -right-2 md:-top-4 md:-right-4 bg-card p-3 md:p-4 rounded-lg shadow-elegant animate-fade-in delay-1000 hover:scale-105 transition-transform duration-300">
                <div className="text-primary font-poppins font-bold text-lg md:text-2xl">R$ 118,5mil</div>
                <div className="text-muted-foreground font-opensans text-xs md:text-sm">Vendas este mês (do aluno)</div>
              </div>
              
              <div className="absolute -bottom-2 -left-2 md:-bottom-4 md:-left-4 bg-card p-3 md:p-4 rounded-lg shadow-elegant animate-fade-in delay-1500 hover:scale-105 transition-transform duration-300">
                <div className="text-primary font-poppins font-bold text-base md:text-xl">1.983</div>
                <div className="text-muted-foreground font-opensans text-xs md:text-sm">Total de Pedidos</div>
              </div>
            </div>
          </div>
          
          <div className="mt-4 text-center">
            <p className="text-muted-foreground font-opensans text-xs md:text-sm max-w-2xl mx-auto mb-4">
              Veja como apliquei o Método V4E para sair do zero e chegar aos R$ 147 mil mensais
            </p>
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-xs">
              60 segundos que podem mudar seu negócio
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;