import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Clock, 
  Shield, 
  Zap, 
  CheckCircle,
  TrendingUp,
  Star
} from "lucide-react";
import mentorPhoto from "/lovable-uploads/39732fe1-ddc1-4bc8-883c-3ed82e954ccd.png";

const CTASection = () => {
  const finalBenefits = [
    "Estratégias comprovadas dos Top Sellers",
    "Acompanhamento personalizado por 30 dias",
    "Implementação na prática comigo",
    "Garantia de 7 dias - 100% de satisfação"
  ];

  const handleCTAClick = () => {
    window.open("https://wa.me/5579990669680?text=Oi%20Isidório,%20quero%20entender%20como%20funciona%20a%20mentoria%20para%20o%20meu%20negócio", "_blank");
  };

  return (
    <section id="cta-final" className="py-20 bg-gradient-hero relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <Badge variant="default" className="mb-4 bg-primary text-primary-foreground animate-bounce-in">
              Última Chance
            </Badge>
            <h2 className="font-poppins font-bold text-2xl md:text-3xl lg:text-4xl text-primary-foreground mb-6">
              Aplique o Método V4E e 
              <span className="text-primary"> multiplique suas vendas por 4</span>
            </h2>
            <p className="font-opensans text-lg text-primary-foreground/90 leading-relaxed">
              Reserve seu diagnóstico gratuito e personalizado
            </p>
          </div>

          {/* Main CTA Card */}
          <Card className="border-0 bg-card/95 backdrop-blur-sm shadow-elegant mb-8 animate-scale-in hover:shadow-hover transition-all duration-300">
            <CardContent className="p-6 lg:p-8">
              <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center">
                {/* Left: Benefits */}
                <div>
                  <h3 className="font-poppins font-bold text-2xl text-foreground mb-6">
                    Por que escolher nossa mentoria?
                  </h3>
                  
                  <div className="space-y-4 mb-8">
                    {finalBenefits.map((benefit, index) => (
                      <div 
                        key={index} 
                        className="flex items-start gap-3 animate-fade-in"
                        style={{animationDelay: `${index * 100}ms`}}
                      >
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="font-opensans text-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  {/* Call to Action Focus */}
                  <div className="bg-gradient-accent rounded-lg p-6 mb-6 border border-primary/20">
                    <div className="text-center">
                  <h4 className="font-poppins font-bold text-lg md:text-xl text-foreground mb-2">
                    Diagnóstico V4E Gratuito
                  </h4>
                  <p className="font-opensans text-sm md:text-base text-muted-foreground">
                    Conversamos via WhatsApp e descubro exatamente como aplicar o Método V4E na sua loja
                  </p>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="text-center">
                    <Button 
                      onClick={handleCTAClick}
                      size="lg"
                      className="w-full max-w-md mx-auto bg-gradient-cta hover:bg-primary-hover hover:scale-105 shadow-cta font-poppins font-bold text-sm md:text-base py-4 md:py-6 mb-4 transition-all duration-300"
                    >
                      Quero o Método V4E Agora
                    </Button>
                    
                    {/* Guarantee Badge */}
                    <div className="inline-flex items-center justify-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-lg mb-4">
                      <Shield className="w-4 h-4" />
                      <span className="font-opensans text-sm font-medium">Garantia de 7 dias</span>
                    </div>
                  </div>

                  {/* Trust Signals */}
                  <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Shield className="w-4 h-4" />
                      <span>Pagamento Seguro</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4" />
                      <span>98% Satisfação</span>
                    </div>
                  </div>
                </div>

                {/* Right: Mentor Image & Message */}
                <div className="animate-slide-up order-first lg:order-last">
                  <div className="text-center mb-6">
                    <div className="relative inline-block">
                      <img 
                        src={mentorPhoto}
                        alt="Isidório Júnior - Mentor Shopee"
                        className="w-48 h-48 lg:w-64 lg:h-64 object-cover rounded-2xl shadow-elegant mx-auto hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="absolute -bottom-2 -right-2 lg:-bottom-4 lg:-right-4 bg-primary text-primary-foreground p-2 lg:p-3 rounded-full shadow-cta animate-glow">
                        <Star className="w-4 h-4 lg:w-6 lg:h-6" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-card rounded-lg p-4 lg:p-6 shadow-card text-center">
                    <h4 className="font-poppins font-bold text-base lg:text-lg text-foreground mb-3">
                      Mensagem do Isidório:
                    </h4>
                    <p className="font-opensans text-sm lg:text-base text-muted-foreground italic leading-relaxed">
                      "Vamos conversar e descobrir juntos como posso ajudar você a alcançar seus objetivos na Shopee. 
                      Cada negócio é único, e quero entender exatamente o que você precisa. 
                      <strong className="text-primary"> Sua transformação começa com uma conversa!</strong>"
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Final Guarantees */}
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-card/20 backdrop-blur-sm rounded-lg p-6 animate-fade-in">
              <Shield className="w-8 h-8 text-primary mx-auto mb-3" />
              <h4 className="font-poppins font-semibold text-primary-foreground mb-2">
                Garantia Total
              </h4>
              <p className="font-opensans text-sm text-primary-foreground/80">
                7 dias para testar. Se não gostar, devolvemos tudo.
              </p>
            </div>
            
            <div className="bg-card/20 backdrop-blur-sm rounded-lg p-6 animate-fade-in delay-200">
              <TrendingUp className="w-8 h-8 text-primary mx-auto mb-3" />
              <h4 className="font-poppins font-semibold text-primary-foreground mb-2">
                Resultados Rápidos
              </h4>
              <p className="font-opensans text-sm text-primary-foreground/80">
                Primeiros resultados já na primeira semana.
              </p>
            </div>
            
            <div className="bg-card/20 backdrop-blur-sm rounded-lg p-6 animate-fade-in delay-400">
              <Star className="w-8 h-8 text-primary mx-auto mb-3" />
              <h4 className="font-poppins font-semibold text-primary-foreground mb-2">
                Suporte Premium
              </h4>
              <p className="font-opensans text-sm text-primary-foreground/80">
                Acesso direto ao mentor por 30 dias.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-primary-foreground rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 border border-primary-foreground rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-primary-foreground rounded-full animate-pulse delay-500"></div>
      </div>
    </section>
  );
};

export default CTASection;