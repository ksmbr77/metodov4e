import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { CheckCircle, User, Store, Target, TrendingUp } from "lucide-react";

const PreQualificationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    experience: "",
    monthlyRevenue: "",
    mainGoal: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `Oi Isidório, quero entender como funciona a mentoria para o meu negócio.

Minhas informações:
• Nome: ${formData.name}
• Experiência: ${formData.experience}
• Faturamento mensal: ${formData.monthlyRevenue}
• Principal objetivo: ${formData.mainGoal}

Gostaria de agendar uma conversa para entender melhor como posso crescer na Shopee.`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.link/a8m8yr`, "_blank");
  };

  return (
    <section className="py-16 md:py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="font-poppins font-bold text-2xl md:text-3xl text-foreground mb-4">
              Análise Personalizada Gratuita
            </h2>
            <p className="text-muted-foreground font-opensans">
              Responda algumas perguntas e receba um diagnóstico personalizado para seu negócio
            </p>
          </div>

          <Card className="shadow-elegant bg-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 font-poppins">
                <CheckCircle className="w-5 h-5 text-primary" />
                Diagnóstico
              </CardTitle>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Nome */}
                <div className="space-y-2">
                  <Label htmlFor="name" className="flex items-center gap-2 font-opensans">
                    <User className="w-4 h-4 text-primary" />
                    Qual é o seu nome?
                  </Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Digite seu nome"
                    required
                    className="font-opensans"
                  />
                </div>

                {/* Experiência */}
                <div className="space-y-3">
                  <Label className="flex items-center gap-2 font-opensans">
                    <Store className="w-4 h-4 text-primary" />
                    Qual sua experiência com vendas online?
                  </Label>
                  <RadioGroup
                    value={formData.experience}
                    onValueChange={(value) => setFormData({...formData, experience: value})}
                    className="space-y-2"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="iniciante" id="iniciante" />
                      <Label htmlFor="iniciante" className="font-opensans text-sm">Estou começando agora</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="intermediario" id="intermediario" />
                      <Label htmlFor="intermediario" className="font-opensans text-sm">Já vendo há alguns meses</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="avancado" id="avancado" />
                      <Label htmlFor="avancado" className="font-opensans text-sm">Já tenho experiência, mas quero crescer</Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Faturamento */}
                <div className="space-y-3">
                  <Label className="flex items-center gap-2 font-opensans">
                    <TrendingUp className="w-4 h-4 text-primary" />
                    Qual seu faturamento mensal atual?
                  </Label>
                  <RadioGroup
                    value={formData.monthlyRevenue}
                    onValueChange={(value) => setFormData({...formData, monthlyRevenue: value})}
                    className="space-y-2"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="0-1000" id="0-1000" />
                      <Label htmlFor="0-1000" className="font-opensans text-sm">R$ 0 - R$ 1.000</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="1000-5000" id="1000-5000" />
                      <Label htmlFor="1000-5000" className="font-opensans text-sm">R$ 1.000 - R$ 5.000</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="5000+" id="5000+" />
                      <Label htmlFor="5000+" className="font-opensans text-sm">Mais de R$ 5.000</Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Objetivo */}
                <div className="space-y-3">
                  <Label className="flex items-center gap-2 font-opensans">
                    <Target className="w-4 h-4 text-primary" />
                    Qual seu principal objetivo?
                  </Label>
                  <RadioGroup
                    value={formData.mainGoal}
                    onValueChange={(value) => setFormData({...formData, mainGoal: value})}
                    className="space-y-2"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="comecar" id="comecar" />
                      <Label htmlFor="comecar" className="font-opensans text-sm">Começar a vender na Shopee</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="aumentar" id="aumentar" />
                      <Label htmlFor="aumentar" className="font-opensans text-sm">Aumentar minhas vendas atuais</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="escalar" id="escalar" />
                      <Label htmlFor="escalar" className="font-opensans text-sm">Escalar para R$ 50.000+/mês</Label>
                    </div>
                  </RadioGroup>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-cta hover:bg-primary-hover font-poppins font-semibold text-base py-6 transition-all duration-300 hover:scale-[1.02]"
                  disabled={!formData.name || !formData.experience || !formData.monthlyRevenue || !formData.mainGoal}
                >
                  Quero Minha Análise Personalizada
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PreQualificationForm;