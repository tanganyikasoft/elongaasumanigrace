import { motion } from "framer-motion";
import { ArrowDown, Briefcase, Mail } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.png";

const Hero = () => {
  const { t } = useLanguage();

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-hero-bg"
    >
      {/* Animated blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary/20 animate-blob" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-secondary/20 animate-blob [animation-delay:2s]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-accent/15 animate-blob [animation-delay:4s]" />
      </div>

      <div className="container mx-auto px-4 pt-20 pb-10 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative"
          >
            <div className="w-56 h-56 md:w-72 md:h-72 rounded-full gradient-bg p-1 glow-shadow">
              <img
                src={profilePhoto}
                alt="ELONGA ASUMANI Grace"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 w-20 h-20 rounded-full gradient-accent-bg flex items-center justify-center animate-float">
              <span className="text-2xl">💻</span>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center lg:text-left max-w-xl"
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">
              {t("Bienvenue sur mon portfolio", "Welcome to my portfolio")}
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              {t("Je suis ", "I'm ")}
              <span className="gradient-text">ELONGA ASUMANI Grace</span>
            </h1>
            <p className="text-lg md:text-xl font-display font-medium text-muted-foreground mb-4">
              {t(
                "Ingénieur Informaticien en Génie Logiciel",
                "Software Engineering Computer Scientist"
              )}
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              {t(
                "Passionné par le développement d'applications, l'analyse de données et la gestion de projets IT. Je transforme les défis technologiques en solutions innovantes.",
                "Passionate about application development, data analysis, and IT project management. I turn technological challenges into innovative solutions."
              )}
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="rounded-full gradient-bg text-primary-foreground hover:opacity-90 gap-2"
                onClick={() => scrollTo("#services")}
              >
                <Briefcase className="h-4 w-4" />
                {t("Voir mes services", "View my services")}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full gap-2"
                onClick={() => scrollTo("#contact")}
              >
                <Mail className="h-4 w-4" />
                {t("Me contacter", "Contact me")}
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex justify-center mt-16"
        >
          <button
            onClick={() => scrollTo("#about")}
            className="animate-float text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowDown className="h-6 w-6" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
