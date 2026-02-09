import { useLanguage } from "@/contexts/LanguageContext";
import { Heart } from "lucide-react";

const Footer = () => {
  const { t } = useLanguage();

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  const links = [
    { fr: "Accueil", en: "Home", href: "#hero" },
    { fr: "À propos", en: "About", href: "#about" },
    { fr: "Compétences", en: "Skills", href: "#skills" },
    { fr: "Services", en: "Services", href: "#services" },
    { fr: "Contact", en: "Contact", href: "#contact" },
  ];

  return (
    <footer className="py-10 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <button
            onClick={() => scrollTo("#hero")}
            className="font-display text-xl font-bold gradient-text"
          >
            ELONGA ASUMANI Grace
          </button>

          <div className="flex flex-wrap justify-center gap-4">
            {links.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {t(link.fr, link.en)}
              </button>
            ))}
          </div>

          <p className="text-xs text-muted-foreground flex items-center gap-1">
            © {new Date().getFullYear()} {t("Fait avec", "Made with")}
            <Heart className="h-3 w-3 text-accent inline" />
            {t("par Grace", "by Grace")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
