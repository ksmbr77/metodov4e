import { Separator } from "@/components/ui/separator";
import { Instagram, Mail, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary py-12">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6">
          {/* Logo/Brand */}
          <div>
            <h3 className="font-poppins font-bold text-2xl text-primary-foreground mb-2">
              Mentoria Shopee Pro
            </h3>
            <p className="font-opensans text-primary-foreground/80">
              Transformando lojistas em Top Sellers da Shopee
            </p>
          </div>

          <Separator className="bg-primary-foreground/20" />

          {/* Contact Info */}
          <div className="space-y-3">
            <div className="flex items-center justify-center gap-3">
              <Mail className="w-4 h-4 text-primary" />
              <a 
                href="mailto:contato@isidoriojunior.com.br"
                className="font-opensans text-primary-foreground/90 hover:text-primary transition-colors"
              >
                contato@isidoriojunior.com.br
              </a>
            </div>
            <div className="flex items-center justify-center gap-3">
              <MessageCircle className="w-4 h-4 text-primary" />
              <a 
                href="https://wa.link/a8m8yr"
                target="_blank"
                rel="noopener noreferrer"
                className="font-opensans text-primary-foreground/90 hover:text-primary transition-colors"
              >
                WhatsApp
              </a>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Instagram className="w-4 h-4 text-primary" />
              <a 
                href="https://www.instagram.com/isidorio.junior.3"
                target="_blank"
                rel="noopener noreferrer"
                className="font-opensans text-primary-foreground/90 hover:text-primary transition-colors"
              >
                @isidorio.junior.3
              </a>
            </div>
          </div>

          <Separator className="bg-primary-foreground/20" />

          {/* Legal - Mais limpo */}
          <div className="space-y-4">
            <p className="font-opensans text-sm text-primary-foreground/60">
              © 2025 Mentoria Shopee Pro. Todos os direitos reservados.
            </p>
            
            <p className="font-opensans text-xs text-primary-foreground/50 max-w-2xl mx-auto leading-relaxed">
              Aviso Legal: Os resultados apresentados são reais mas podem variar de pessoa para pessoa. 
              O sucesso depende de dedicação, implementação das estratégias e fatores do mercado.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;