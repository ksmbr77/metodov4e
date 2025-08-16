import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, ArrowRight } from "lucide-react";

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const scrollToCTA = () => {
    const element = document.getElementById("cta-final");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const faqs = [
    {
      question: "O que é o Método V4E?",
      answer: "O Método V4E é um sistema completo para Vender 4x mais na Shopee. V = Visibilidade, 4 = 4x vendas, E = ESTRATÉGIA. É uma metodologia comprovada que já transformou mais de 20 vendedores em Top Sellers."
    },
    {
      question: "Funciona para qualquer nicho?",
      answer: "Não! O Método V4E funciona especialmente bem para confecções, Cama, Mesa e Banho. Adaptamos as estratégias para seu nicho específico."
    },
    {
      question: "Quanto tempo leva para ver resultados?",
      answer: "Os primeiros resultados aparecem já na primeira semana. Em 30 dias, você terá implementado todo o método e estará vendo um crescimento significativo nas vendas."
    },
    {
      question: "É garantido que vou vender 4x mais?",
      answer: "Oferecemos garantia de 7 dias. Se seguir o método corretamente, você verá resultados. Mais de 95% dos nossos alunos alcançam pelo menos 200% de aumento nas vendas."
    },
    {
      question: "Como funciona o acompanhamento?",
      answer: "Você terá acesso direto ao Isidório via WhatsApp por 30 dias, 4 encontros ao vivo, grupo VIP exclusivo e análise personalizada da sua loja."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <Badge variant="outline" className="mb-4 border-primary text-primary">
            Dúvidas Frequentes
          </Badge>
          <h2 className="font-poppins font-bold text-2xl md:text-3xl text-foreground mb-4">
            Perguntas sobre o Método V4E
          </h2>
          <p className="font-opensans text-muted-foreground max-w-2xl mx-auto">
            Esclarecemos as principais dúvidas sobre nossa metodologia
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <Card 
              key={index} 
              className="border shadow-card hover:shadow-hover transition-all duration-300 overflow-hidden"
            >
              <CardContent className="p-0">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-4 md:p-6 text-left flex items-center justify-between hover:bg-muted/50 transition-colors"
                >
                  <h3 className="font-poppins font-semibold text-foreground text-sm md:text-base">
                    {faq.question}
                  </h3>
                  {openFAQ === index ? (
                    <ChevronUp className="w-5 h-5 text-primary flex-shrink-0 ml-4" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-primary flex-shrink-0 ml-4" />
                  )}
                </button>
                
                {openFAQ === index && (
                  <div className="px-4 md:px-6 pb-4 md:pb-6 animate-fade-in">
                    <p className="font-opensans text-muted-foreground text-sm md:text-base leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="font-opensans text-muted-foreground mb-4 text-sm">
            Ainda tem dúvidas? Fale diretamente com o Isidório
          </p>
          <Button 
            onClick={scrollToCTA}
            className="bg-primary hover:bg-primary-hover text-primary-foreground font-poppins font-semibold text-sm px-6 py-3 w-full md:w-auto"
          >
            Tirar Dúvidas no WhatsApp <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;