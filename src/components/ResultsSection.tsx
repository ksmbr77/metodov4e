import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, Award, Users, DollarSign, ArrowRight } from "lucide-react";


const ResultsSection = () => {
  const scrollToCTA = () => {
    const element = document.getElementById("cta-final");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const results = [
    {
      name: "Marcos",
      category: "Confecções",
      before: "R$ 3.000/mês",
      after: "R$ 16.000/mês",
      increase: "+433%",
      time: "2 meses",
      photo: "MC",
      testimonial: "Em 2 meses com a mentoria, minha loja saiu de R$ 3.000 para R$ 16.000 mensais"
    },
    {
      name: "José Demes",
      category: "Confecções", 
      before: "R$ 0/mês",
      after: "R$ 32.000/mês",
      increase: "Do zero",
      time: "3 meses",
      photo: "JD",
      testimonial: "Nunca imaginei que conseguiria esse resultado tão rápido, método incrivel de 0 a R$ 32.000 no mês"
    },
    {
      name: "Ana Costa",
      category: "Confecções",
      before: "R$ 2.500/mês",
      after: "R$ 18.500/mês",
      increase: "+640%",
      time: "3 meses",
      photo: "AC",
      testimonial: "Hoje minha loja está entre as mais vendidas da minha categoria na Shopee"
    }
  ];

  const globalStats = [
    { icon: Users, value: "+20", label: "Alunos mentorados" },
    { icon: DollarSign, value: "R$ 500K+", label: "Faturamento gerado" },
    { icon: TrendingUp, value: "350%", label: "Aumento médio" },
    { icon: Award, value: "95%", label: "Taxa de sucesso" }
  ];

  return (
    <section id="resultados" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4 border-primary text-primary bg-primary/10">
            Resultados Reais
          </Badge>
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-primary-foreground mb-6">
            Transformações que <span className="text-primary">Inspiram</span>
          </h2>
          <p className="font-opensans text-lg text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
            Estes são apenas alguns dos resultados dos nossos alunos. Suas transformações podem ser ainda maiores!
          </p>
        </div>

        {/* Global Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {globalStats.map((stat, index) => (
            <Card 
              key={index} 
              className="border-0 bg-card/10 backdrop-blur-sm text-center animate-scale-in"
              style={{animationDelay: `${index * 100}ms`}}
            >
              <CardContent className="p-6">
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="font-poppins font-bold text-2xl text-primary-foreground mb-1">
                  {stat.value}
                </div>
                <div className="font-opensans text-sm text-primary-foreground/80">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Results Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {results.map((result, index) => (
            <Card 
              key={index} 
              className="border-0 bg-card shadow-card hover:shadow-cta transition-all duration-300 hover:-translate-y-1 animate-fade-in"
              style={{animationDelay: `${index * 200}ms`}}
            >
              <CardContent className="p-6">
                {/* Profile */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-poppins font-bold">
                    {result.photo}
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-foreground">
                      {result.name}
                    </h3>
                    <p className="font-opensans text-sm text-muted-foreground">
                      {result.category}
                    </p>
                  </div>
                </div>

                {/* Results */}
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="font-opensans text-muted-foreground">Antes:</span>
                    <span className="font-poppins font-semibold text-foreground">{result.before}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-opensans text-muted-foreground">Depois:</span>
                    <span className="font-poppins font-semibold text-primary">{result.after}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-opensans text-muted-foreground">Crescimento:</span>
                    <Badge variant="default" className="bg-primary text-primary-foreground">
                      {result.increase}
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-opensans text-muted-foreground">Tempo:</span>
                    <span className="font-opensans font-medium text-foreground">{result.time}</span>
                  </div>
                </div>

                {/* Testimonial */}
                <div className="bg-muted rounded-lg p-4">
                  <p className="font-opensans text-sm text-muted-foreground italic">
                    "{result.testimonial}"
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ResultsSection;