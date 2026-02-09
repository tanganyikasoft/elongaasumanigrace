import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Globe, Database, BarChart3, Palette,
  GraduationCap, FolderKanban
} from "lucide-react";

const services = [
  {
    fr: "Développement Web & Mobile",
    en: "Web & Mobile Development",
    descFr: "Applications web et mobiles performantes avec les technologies modernes (Laravel, Flutter, React).",
    descEn: "High-performance web and mobile applications with modern technologies (Laravel, Flutter, React).",
    icon: Globe,
    color: "from-primary to-secondary",
  },
  {
    fr: "Administration de bases de données",
    en: "Database Administration",
    descFr: "Conception, optimisation et maintenance de bases de données (MySQL, PostgreSQL, Oracle, SQL Server).",
    descEn: "Design, optimization, and maintenance of databases (MySQL, PostgreSQL, Oracle, SQL Server).",
    icon: Database,
    color: "from-secondary to-primary",
  },
  {
    fr: "Suivi & Évaluation",
    en: "Monitoring & Evaluation",
    descFr: "Collecte de données, analyse et production de tableaux de bord avec Power BI, KoboToolbox et ActivityInfo.",
    descEn: "Data collection, analysis, and dashboard production with Power BI, KoboToolbox, and ActivityInfo.",
    icon: BarChart3,
    color: "from-accent to-orange",
  },
  {
    fr: "Design graphique & Montage vidéo",
    en: "Graphic Design & Video Editing",
    descFr: "Création visuelle professionnelle avec Photoshop, Illustrator, Premiere Pro et Figma.",
    descEn: "Professional visual creation with Photoshop, Illustrator, Premiere Pro, and Figma.",
    icon: Palette,
    color: "from-orange to-accent",
  },
  {
    fr: "Formation en informatique",
    en: "IT Training",
    descFr: "Formation pratique en développement, bureautique et outils numériques.",
    descEn: "Practical training in development, office software, and digital tools.",
    icon: GraduationCap,
    color: "from-primary to-accent",
  },
  {
    fr: "Gestion de projets IT",
    en: "IT Project Management",
    descFr: "Planification, coordination et suivi de projets technologiques avec méthodologies agiles.",
    descEn: "Planning, coordination, and monitoring of technology projects with agile methodologies.",
    icon: FolderKanban,
    color: "from-accent to-secondary",
  },
];

const Services = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4" ref={ref}>
        <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-2">
            {t("Mes services", "My Services")}
          </h2>
          <div className="w-20 h-1 gradient-bg rounded-full mx-auto mb-12" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.en}
                  className="glass-card rounded-xl p-6 hover:scale-[1.03] transition-transform duration-300 group"
                >
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <h3 className="font-display font-semibold text-lg mb-2">
                    {t(service.fr, service.en)}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {t(service.descFr, service.descEn)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
