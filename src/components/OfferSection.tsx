import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  CheckCircle, 
  Clock, 
  Shield, 
  Gift,
  Video,
  MessageCircle,
  FileText,
  Users,
  Star,
  Zap
} from "lucide-react";

const OfferSection = () => {
  const included = [
    {
      icon: Video,
      title: "4 Encontros ao Vivo",
      description: "Sessões semanais de 2h com análise personalizada da sua loja",
      value: "R$ 2.400"
    },
    {
      icon: MessageCircle,
      title: "Suporte Direto WhatsApp",
      description: "Acesso direto comigo por 30 dias para dúvidas urgentes",
      value: "R$ 800"
    },
    {
      icon: FileText,
      title: "Material Exclusivo",
      description: "Guias, templates e checklists para implementação",
      value: "R$ 500"
    },
    {
      icon: Users,
      title: "Grupo VIP de Alunos",
      description: "Networking com outros vendedores de sucesso",
      value: "R$ 300"
    }
  ];

  const bonuses = [
    {
      icon: Star,
      title: "BÔNUS 1: Análise Completa de Concorrentes",
      description: "Identificação dos Top Sellers do seu nicho e suas estratégias",
      value: "R$ 600"
    },
    {
      icon: Zap,
      title: "BÔNUS 2: Setup de Anúncios Otimizado",
      description: "Configuração completa dos seus anúncios com foco em ROI",
      value: "R$ 800"
    },
    {
      icon: Gift,
      title: "BÔNUS 3: 60 dias de Suporte Extra",
      description: "Acompanhamento estendido para garantir seus resultados",
      value: "R$ 1.200"
    }
  ];

  const scrollToCTA = () => {
    const element = document.getElementById("cta-final");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="oferta" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="default" className="mb-4 bg-primary text-primary-foreground animate-bounce-in">
            Oferta Exclusiva
          </Badge>
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-foreground mb-6">
            Mentoria Shopee <span className="text-primary">Pro</span>
          </h2>
          <p className="font-opensans text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Tudo que você precisa para transformar sua loja Shopee em uma máquina de vendas
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main Offer Card */}
          <Card className="border-2 border-primary shadow-2xl mb-8 animate-scale-in">
            <CardHeader className="text-center bg-gradient-cta text-primary-foreground rounded-t-lg">
              <CardTitle className="font-poppins font-bold text-2xl mb-2">
                Mentoria Shopee Pro - Turma VIP
              </CardTitle>
              <p className="font-opensans opacity-90">
                Transforme sua loja em 30 dias com acompanhamento personalizado
              </p>
            </CardHeader>

            <CardContent className="p-8">
              {/* What's Included */}
              <div className="mb-8">
                <h3 className="font-poppins font-bold text-xl text-foreground mb-6 text-center">
                  O que está incluso:
                </h3>
                
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  {included.map((item, index) => (
                    <div 
                      key={index} 
                      className="flex items-start gap-3 p-4 bg-card rounded-lg animate-fade-in"
                      style={{animationDelay: `${index * 100}ms`}}
                    >
                      <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-poppins font-semibold text-foreground mb-1">
                          {item.title}
                        </h4>
                        <p className="font-opensans text-sm text-muted-foreground mb-2">
                          {item.description}
                        </p>
                        <span className="font-poppins text-sm font-medium text-primary">
                          Valor: {item.value}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bonuses */}
              <div className="mb-8">
                <h3 className="font-poppins font-bold text-xl text-foreground mb-6 text-center">
                  Bônus Exclusivos (apenas hoje):
                </h3>
                
                <div className="space-y-4">
                  {bonuses.map((bonus, index) => (
                    <div 
                      key={index} 
                      className="flex items-start gap-3 p-4 bg-primary/5 border border-primary/20 rounded-lg animate-fade-in"
                      style={{animationDelay: `${(index + 4) * 100}ms`}}
                    >
                      <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <bonus.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-poppins font-semibold text-foreground mb-1">
                          {bonus.title}
                        </h4>
                        <p className="font-opensans text-sm text-muted-foreground mb-2">
                          {bonus.description}
                        </p>
                        <span className="font-poppins text-sm font-medium text-primary">
                          Valor: {bonus.value}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pricing */}
              <div className="text-center bg-card rounded-lg p-6 mb-8">
                <div className="mb-4">
                  <div className="font-opensans text-muted-foreground line-through text-lg">
                    Valor total: R$ 7.600
                  </div>
                  <div className="font-poppins font-bold text-3xl text-primary">
                    Por apenas: R$ 1.997
                  </div>
                  <div className="font-opensans text-sm text-muted-foreground">
                    ou 12x de R$ 197 sem juros
                  </div>
                </div>
                
                <Badge variant="destructive" className="mb-4 animate-glow">
                  74% de desconto - Apenas hoje!
                </Badge>
              </div>

              {/* Guarantee */}
              <div className="flex items-center justify-center gap-3 mb-8 p-4 bg-card rounded-lg">
                <Shield className="w-8 h-8 text-primary" />
                <div>
                  <h4 className="font-poppins font-semibold text-foreground">
                    Garantia de 7 dias
                  </h4>
                  <p className="font-opensans text-sm text-muted-foreground">
                    Se não ficar satisfeito, devolvemos 100% do seu dinheiro
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div className="text-center">
                <Button 
                  onClick={scrollToCTA}
                  size="lg"
                  className="bg-gradient-cta hover:bg-primary-hover hover:scale-105 shadow-cta font-poppins font-bold text-base lg:text-lg px-8 lg:px-12 py-4 lg:py-6 mb-4 w-full sm:w-auto transition-all duration-300"
                >
                  <Clock className="w-5 h-5 mr-2" />
                  Quero Garantir Minha Vaga
                </Button>
                <div className="space-y-2">
                  <p className="font-opensans text-sm text-muted-foreground">
                  Últimas 3 vagas disponíveis
                  </p>
                  <p className="font-opensans text-xs text-muted-foreground">
                    Processamento seguro via cartão ou PIX
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Urgency */}
          <div className="text-center bg-destructive/10 border border-destructive/20 rounded-lg p-4 lg:p-6 animate-fade-in">
            <h3 className="font-poppins font-bold text-base lg:text-lg text-foreground mb-2">
              Oferta por tempo limitado
            </h3>
            <p className="font-opensans text-sm lg:text-base text-muted-foreground">
              O desconto de 74% expira em <strong className="text-destructive">24 horas</strong>. 
              Não perca esta oportunidade única de transformar sua loja Shopee!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;