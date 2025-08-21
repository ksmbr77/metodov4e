import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X, Instagram } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false); // Close mobile menu after click
  };

  const menuItems = [
    { id: "autoridade", label: "Sobre o Mentor" },
    { id: "solucao", label: "A Mentoria" },
    { id: "resultados", label: "Resultados" },
    { id: "oferta", label: "Oferta" },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-secondary/95 backdrop-blur-sm shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-3 lg:py-4 flex items-center justify-between">
        <div className="font-poppins font-bold text-lg lg:text-xl text-primary-foreground">
          Mentoria Shopee Pro
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
          {menuItems.map((item) => (
            <button 
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-primary-foreground hover:text-primary transition-colors font-opensans text-sm xl:text-base hover:scale-105 transition-transform duration-200"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Desktop CTA and Social */}
        <div className="hidden sm:flex items-center space-x-4">
          <a 
            href="https://www.instagram.com/isidorio_shopee" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary-foreground hover:text-primary transition-colors duration-200"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <Button 
            onClick={() => scrollToSection("cta-final")}
            className="bg-gradient-cta hover:bg-primary-hover hover:scale-105 shadow-cta font-poppins font-semibold text-sm lg:text-base px-4 lg:px-6 transition-all duration-300"
          >
            Análise Gratuita
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-primary-foreground hover:text-primary"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-secondary border-l border-primary/20">
            <div className="flex flex-col space-y-6 mt-8">
              {menuItems.map((item) => (
                <button 
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-primary-foreground hover:text-primary transition-colors font-opensans text-lg text-left py-2"
                >
                  {item.label}
                </button>
              ))}
              
              <div className="pt-4 border-t border-primary-foreground/20 space-y-4">
                <a 
                  href="https://www.instagram.com/isidorio_shopee" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary-foreground hover:text-primary transition-colors duration-200"
                >
                  <Instagram className="w-5 h-5" />
                  <span>@isidorio_shopee</span>
                </a>
                <Button 
                  onClick={() => scrollToSection("cta-final")}
                  className="w-full bg-gradient-cta hover:bg-primary-hover shadow-cta font-poppins font-semibold"
                >
                  Análise Gratuita
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>

        {/* Mobile CTA for small screens */}
        <Button 
          onClick={() => scrollToSection("cta-final")}
          className="sm:hidden bg-gradient-cta hover:bg-primary-hover shadow-cta font-poppins font-semibold text-xs px-3 py-2"
        >
          Análise
        </Button>
      </div>
    </header>
  );
};

export default Header;