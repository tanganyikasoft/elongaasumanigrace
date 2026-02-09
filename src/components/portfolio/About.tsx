import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { MapPin, Heart, BookOpen } from "lucide-react";

const languages = [
  { name: "Français", level: 95 },
  { name: "Swahili", level: 90 },
  { name: "Lingala", level: 70 },
  { name: "English", level: 55 },
];

const interests = [
  { fr: "Lecture", en: "Reading", emoji: "📚" },
  { fr: "Débats scientifiques", en: "Scientific debates", emoji: "🔬" },
  { fr: "Documentaires", en: "Documentaries", emoji: "🎬" },
  { fr: "Musique", en: "Music", emoji: "🎵" },
];

const About = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4" ref={ref}>
        <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-2">
            {t("À propos de moi", "About me")}
          </h2>
          <div className="w-20 h-1 gradient-bg rounded-full mx-auto mb-12" />

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Bio */}
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                {t(
                  "Ingénieur informaticien spécialisé en génie logiciel, diplômé de l'Institut Supérieur de Commerce de Lubumbashi. Fort d'une expérience variée en développement d'applications, gestion de bases de données, analyse de données et gestion de projets IT dans le secteur humanitaire et les entreprises technologiques.",
                  "Computer engineer specialized in software engineering, graduated from the Institut Supérieur de Commerce de Lubumbashi. With diverse experience in application development, database management, data analysis, and IT project management in the humanitarian sector and technology companies."
                )}
              </p>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="h-5 w-5 text-primary shrink-0" />
                <span>{t("Nyunzu, République Démocratique du Congo", "Nyunzu, Democratic Republic of Congo")}</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <BookOpen className="h-5 w-5 text-secondary shrink-0" />
                <span>{t("Nationalité congolaise", "Congolese nationality")}</span>
              </div>

              {/* Interests */}
              <div>
                <h3 className="font-display font-semibold text-lg mb-3 flex items-center gap-2">
                  <Heart className="h-5 w-5 text-accent" />
                  {t("Centres d'intérêt", "Interests")}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {interests.map((i) => (
                    <span
                      key={i.en}
                      className="px-3 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20"
                    >
                      {i.emoji} {t(i.fr, i.en)}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Language skills */}
            <div>
              <h3 className="font-display font-semibold text-lg mb-6">
                {t("Compétences linguistiques", "Language skills")}
              </h3>
              <div className="space-y-5">
                {languages.map((l) => (
                  <div key={l.name}>
                    <div className="flex justify-between mb-1.5">
                      <span className="text-sm font-medium">{l.name}</span>
                      <span className="text-sm text-muted-foreground">{l.level}%</span>
                    </div>
                    <div className="w-full h-2.5 rounded-full bg-muted overflow-hidden">
                      <div
                        className="h-full rounded-full gradient-bg transition-all duration-1000 ease-out"
                        style={{ width: isVisible ? `${l.level}%` : "0%" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
