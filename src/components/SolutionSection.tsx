import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Video, 
  MessageCircle, 
  BarChart3, 
  CheckCircle, 
  Calendar,
  Zap,
  Users,
  Award
} from "lucide-react";

const SolutionSection = () => {
  const benefits = [
    "Estratégias de ranqueamento que realmente funcionam",
    "Otimização completa do seu perfil de vendedor",
    "Análise detalhada da sua concorrência",
    "Configuração de anúncios com ROI garantido",
    "Técnicas de precificação inteligente",
    "Automação de processos para escalar vendas",
    "Suporte direto comigo por 30 dias",
    "Acesso ao grupo exclusivo de alunos"
  ];

  const methodology = [
    {
      step: "V",
      title: "Visibilidade",
      description: "Otimizamos seu perfil e produtos para aparecer no topo dos resultados"
    },
    {
      step: "4", 
      title: "4x Vendas",
      description: "Implementamos estratégias para quadruplicar seu faturamento"
    },
    {
      step: "E",
      title: "Estratégia",
      description: "Garantimos sua posição como Top Seller na sua categoria"
    },
    {
      step: "O",
      title: "Otimização",
      description: "Resultados comprovados em apenas um mês de aplicação"
    }
  ];

  const features = [
    {
      icon: Video,
      title: "4 Encontros ao Vivo",
      description: "Sessões semanais de 2h com foco na sua loja específica"
    },
    {
      icon: MessageCircle,
      title: "Suporte Direto",
      description: "Acesso direto comigo via WhatsApp para dúvidas urgentes"
    },
    {
      icon: BarChart3,
      title: "Análise Personalizada",
      description: "Revisão completa da sua loja e estratégias dos concorrentes"
    }
  ];

  const scrollToCTA = () => {
    const element = document.getElementById("cta-final");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="solucao" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4 border-primary text-primary bg-gradient-accent">
            A Solução
          </Badge>
          <h2 className="font-poppins font-bold text-2xl md:text-3xl text-foreground mb-6">
            <span className="text-primary">Método V4E</span> – Vender 4x na Shopee
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="grid md:grid-cols-4 gap-4 text-center mb-6">
              <div className="bg-gradient-accent p-4 rounded-lg">
                <div className="text-primary font-poppins font-bold text-lg">V</div>
                <div className="text-xs text-muted-foreground">Visibilidade</div>
              </div>
              <div className="bg-gradient-accent p-4 rounded-lg">
                <div className="text-primary font-poppins font-bold text-lg">4</div>
                <div className="text-xs text-muted-foreground">4x Vendas</div>
              </div>
              <div className="bg-gradient-accent p-4 rounded-lg">
                <div className="text-primary font-poppins font-bold text-lg">E</div>
                <div className="text-xs text-muted-foreground">Estratégia</div>
              </div>
              <div className="bg-gradient-accent p-4 rounded-lg">
                <div className="text-primary font-poppins font-bold text-lg">O</div>
                <div className="text-xs text-muted-foreground">Otimização</div>
              </div>
            </div>
            <p className="font-opensans text-base text-muted-foreground leading-relaxed">
              Sistema completo para multiplicar por 4 suas vendas na Shopee usando estratégias dos Top Sellers.
            </p>
          </div>
        </div>

        {/* Features */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="border-0 shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-2 animate-fade-in bg-gradient-card group"
              style={{animationDelay: `${index * 200}ms`}}
            >
              <CardContent className="p-6 lg:p-8 text-center">
                <div className="w-14 h-14 lg:w-16 lg:h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 lg:w-8 lg:h-8 text-primary" />
                </div>
                <h3 className="font-poppins font-semibold text-lg lg:text-xl text-foreground mb-4">
                  {feature.title}
                </h3>
                <p className="font-opensans text-sm lg:text-base text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Methodology */}
        <div className="mb-16">
          <h3 className="font-poppins font-bold text-xl md:text-2xl text-center text-foreground mb-8">
            Método V4E em 4 Etapas
          </h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {methodology.map((item, index) => (
              <div 
                key={index} 
                className="text-center animate-slide-up relative"
                style={{animationDelay: `${index * 150}ms`}}
              >
                <div className="w-14 h-14 lg:w-16 lg:h-16 bg-gradient-cta rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground font-poppins font-bold text-lg lg:text-xl hover:scale-110 transition-transform duration-300 shadow-cta">
                  {item.step}
                </div>
                <h4 className="font-poppins font-semibold text-base lg:text-lg text-foreground mb-3">
                  {item.title}
                </h4>
                <p className="font-opensans text-xs lg:text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
                {index < methodology.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary to-transparent transform -translate-x-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="bg-card rounded-2xl p-8 shadow-card">
          <h3 className="font-poppins font-bold text-xl md:text-2xl text-center text-foreground mb-6">
            O que está incluído no Método V4E
          </h3>
          
          <div className="grid md:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
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

          <div className="text-center mt-6">
            <Button 
              onClick={scrollToCTA}
              size="lg"
              className="bg-gradient-cta hover:bg-primary-hover hover:scale-105 shadow-cta font-poppins font-semibold transition-all duration-300 w-full md:w-auto"
            >
              Aplicar Método V4E Agora
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;