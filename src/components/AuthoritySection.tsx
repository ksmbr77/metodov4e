import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Trophy, Users, TrendingUp, ArrowRight } from "lucide-react";
import mentorPhoto from "/lovable-uploads/39732fe1-ddc1-4bc8-883c-3ed82e954ccd.png";

const AuthoritySection = () => {
  const scrollToCTA = () => {
    const element = document.getElementById("cta-final");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const achievements = [
    { icon: TrendingUp, label: "R$ 500K+", description: "Faturamento gerado" },
    { icon: Users, label: "+20", description: "Alunos mentorados" },
    { icon: Trophy, label: "Top Seller", description: "Confecções & Casa" },
    { icon: Star, label: "4.9/5", description: "Avaliação média" },
  ];

  const testimonials = [
    {
      name: "Maria Silva",
      result: "Aumentei 450% as vendas",
      text: "Em 2 meses com a mentoria, minha loja saiu de R$ 3 mil para R$ 16 mil mensais!",
      rating: 5
    },
    {
      name: "João Santos", 
      result: "De zero a R$ 25 mil/mês",
      text: "Nunca imaginei que conseguiria esses resultados tão rápido. Método incrível!",
      rating: 5
    },
    {
      name: "Ana Costa",
      result: "Top 10 na categoria",
      text: "Hoje minha loja está entre as mais vendidas da minha categoria na Shopee.",
      rating: 5
    }
  ];

  return (
    <section id="autoridade" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4 border-primary text-primary">
            Conheça seu Mentor
          </Badge>
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-foreground mb-4">
            Quem vai te guiar para o sucesso
          </h2>
          <p className="font-opensans text-lg text-muted-foreground max-w-2xl mx-auto">
            Especialista em e-commerce com mais de 5 anos transformando lojas em negócios milionários
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Mentor Photo & Bio */}
          <div className="text-center lg:text-left animate-slide-up">
            <div className="relative inline-block mb-6">
              <img 
                src={mentorPhoto}
                alt="Isidório Júnior - Especialista em Shopee"
                className="w-80 h-80 object-cover rounded-2xl shadow-card mx-auto lg:mx-0"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground p-3 rounded-full shadow-cta">
                <Trophy className="w-6 h-6" />
              </div>
            </div>
            
            <h3 className="font-poppins font-bold text-2xl text-foreground mb-2">
              Isidório Júnior
            </h3>
            <p className="font-opensans text-primary font-semibold mb-4">
              Empresário & Mentor de E-commerce
            </p>
            <p className="font-opensans text-muted-foreground leading-relaxed mb-6">
              Empresário no ramo de confecções, especialista em e-commerce com mais de 5 anos transformando lojas em negócios sólidos e lucrativos através da metodologia V4E (criada por nossa equipe).
            </p>
            <Button 
              onClick={scrollToCTA}
              className="bg-primary hover:bg-primary-hover text-primary-foreground font-poppins font-semibold text-sm px-6 py-3 md:hidden w-full lg:w-auto"
            >
              Falar com Isidório <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          {/* Achievements */}
          <div className="grid grid-cols-2 gap-4 md:gap-6 animate-fade-in">
            {achievements.map((achievement, index) => (
              <Card key={index} className="border-0 shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-2 hover:scale-105 bg-gradient-card">
                <CardContent className="p-4 md:p-6 text-center">
                  <achievement.icon className="w-6 h-6 md:w-8 md:h-8 text-primary mx-auto mb-3" />
                  <div className="font-poppins font-bold text-lg md:text-2xl text-foreground mb-1">
                    {achievement.label}
                  </div>
                  <div className="font-opensans text-xs md:text-sm text-muted-foreground">
                    {achievement.description}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="space-y-6">
          <h3 className="font-poppins font-bold text-2xl text-center text-foreground mb-8">
            O que os alunos dizem
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-card hover:shadow-cta transition-all duration-300 animate-fade-in" style={{animationDelay: `${index * 200}ms`}}>
                <CardContent className="p-6">
                  <div className="flex items-center mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="font-opensans text-muted-foreground mb-4 italic">
                    "{testimonial.text}"
                  </p>
                  <div>
                    <div className="font-poppins font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="font-opensans text-sm text-primary font-medium">
                      {testimonial.result}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthoritySection;