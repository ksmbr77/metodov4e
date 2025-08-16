import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  TrendingDown, 
  Search, 
  DollarSign, 
  Target, 
  Clock, 
  AlertCircle,
  ArrowRight 
} from "lucide-react";

const ProblemSection = () => {
  const scrollToCTA = () => {
    const element = document.getElementById("cta-final");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const problems = [
    {
      icon: TrendingDown,
      title: "Vendas baixas",
      description: "Sua loja não aparece nas primeiras posições e as vendas estão em queda"
    },
    {
      icon: Search,
      title: "Sem ranqueamento",
      description: "Seus produtos ficam perdidos no meio de milhares de concorrentes"
    },
    {
      icon: DollarSign,
      title: "Anúncios confusos",
      description: "Você gasta dinheiro em ads sem saber se está tendo retorno real"
    },
    {
      icon: Target,
      title: "Falta de estratégia",
      description: "Não sabe por onde começar ou quais passos seguir para crescer"
    },
    {
      icon: Clock,
      title: "Perda de tempo",
      description: "Horas perdidas tentando descobrir o que funciona por tentativa e erro"
    },
    {
      icon: AlertCircle,
      title: "Medo de investir",
      description: "Receio de gastar mais dinheiro sem garantia de resultados"
    }
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="destructive" className="mb-4 animate-bounce-in">
            Problemas Comuns
          </Badge>
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-primary-foreground mb-6">
            Você está enfrentando esses desafios?
          </h2>
          <p className="font-opensans text-lg text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
            Se você se identifica com pelo menos 3 desses problemas, esta mentoria foi feita especialmente para você. 
            <strong className="text-primary"> Eu já passei por isso</strong> e sei exatamente como resolver.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mb-12">
          {problems.map((problem, index) => (
            <Card 
              key={index} 
              className="border-0 bg-card/10 backdrop-blur-sm hover:bg-card/20 transition-all duration-300 hover:-translate-y-2 hover:scale-105 animate-fade-in"
              style={{animationDelay: `${index * 100}ms`}}
            >
              <CardContent className="p-4 lg:p-6 text-center">
                <div className="w-12 h-12 lg:w-16 lg:h-16 bg-destructive/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <problem.icon className="w-6 h-6 lg:w-8 lg:h-8 text-destructive" />
                </div>
                <h3 className="font-poppins font-semibold text-base lg:text-lg text-primary-foreground mb-3">
                  {problem.title}
                </h3>
                <p className="font-opensans text-primary-foreground/80 text-xs lg:text-sm leading-relaxed">
                  {problem.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center bg-card/10 backdrop-blur-sm rounded-2xl p-6 lg:p-8 animate-scale-in">
          <h3 className="font-poppins font-bold text-xl lg:text-2xl text-primary-foreground mb-4">
            Eu entendo sua frustração
          </h3>
          <p className="font-opensans text-base lg:text-lg text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed">
            Durante anos, eu também enfrentei esses mesmos problemas. Tentei de tudo: cursos genéricos, 
            vídeos no YouTube, tentativa e erro... <strong className="text-primary">Nada funcionava de verdade.</strong>
          </p>
          <div className="mt-6 p-4 bg-primary/20 rounded-lg border border-primary/30">
            <p className="font-opensans text-sm lg:text-base text-primary-foreground font-medium mb-4">
              Foi quando descobri os segredos que os Top Sellers usam que tudo mudou...
            </p>
            <Button 
              onClick={scrollToCTA}
              className="bg-primary hover:bg-primary-hover text-primary-foreground font-poppins font-semibold text-sm px-6 py-2 md:hidden w-full"
            >
              Quero a Solução Agora <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;