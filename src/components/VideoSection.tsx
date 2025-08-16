import { Card, CardContent } from "@/components/ui/card";
import { Play } from "lucide-react";

const VideoSection = () => {
  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-2 mb-6">
            <h2 className="font-poppins font-bold text-xl md:text-2xl text-foreground">
              Como o Método V4E transformou meu negócio
            </h2>
          </div>
          
          <Card className="shadow-elegant overflow-hidden bg-gradient-card">
            <CardContent className="p-0">
              <div className="relative aspect-video bg-muted overflow-hidden rounded-lg">
                <iframe 
                  src="https://www.youtube.com/embed/fHtZhY8jueg?autoplay=0&mute=0&controls=1&rel=0&showinfo=0&modestbranding=1&iv_load_policy=3&color=white&disablekb=1"
                  className="w-full h-full border-0"
                  allowFullScreen
                  title="Demonstração do Método V4E"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  frameBorder="0"
                />
              </div>
            </CardContent>
          </Card>
          
          <div className="mt-4 text-center">
            <p className="text-muted-foreground font-opensans text-xs md:text-sm max-w-2xl mx-auto mb-4">
              Veja como apliquei o Método V4E para sair do zero e chegar aos R$ 147 mil mensais
            </p>
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-xs">
              60 segundos que podem mudar seu negócio
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;