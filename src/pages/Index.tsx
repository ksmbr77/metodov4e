import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import VideoSection from "@/components/VideoSection";
import AuthoritySection from "@/components/AuthoritySection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import ResultsSection from "@/components/ResultsSection";
import PreQualificationForm from "@/components/PreQualificationForm";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";


const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <VideoSection />
      <AuthoritySection />
      <ProblemSection />
      <SolutionSection />
      <ResultsSection />
      <PreQualificationForm />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
