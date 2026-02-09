import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Database, BarChart3, Globe, Smartphone, Palette,
  FolderKanban, Server, ClipboardCheck, Wrench, Sparkles
} from "lucide-react";

const categories = [
  {
    fr: "Bases de données",
    en: "Databases",
    icon: Database,
    color: "from-primary to-secondary",
    items: ["MySQL", "PostgreSQL", "FireStore", "Oracle", "SQL Server", "Access"],
  },
  {
    fr: "Analyse de données",
    en: "Data Analysis",
    icon: BarChart3,
    color: "from-secondary to-primary",
    items: ["Power BI", "ActivityInfo", "SPSS", "R", "Python", "Excel"],
  },
  {
    fr: "Développement Web",
    en: "Web Development",
    icon: Globe,
    color: "from-accent to-orange",
    items: ["HTML", "CSS", "JavaScript", "PHP", "Laravel", "Bootstrap", "jQuery"],
  },
  {
    fr: "Développement Mobile",
    en: "Mobile Development",
    icon: Smartphone,
    color: "from-orange to-accent",
    items: ["Flutter/Dart", "Kotlin", "C#/.NET", "Java"],
  },
  {
    fr: "Design",
    en: "Design",
    icon: Palette,
    color: "from-accent to-primary",
    items: ["Photoshop", "Premiere Pro", "Adobe XD", "Figma", "Illustrator", "Canva", "InDesign"],
  },
  {
    fr: "Gestion de projet",
    en: "Project Management",
    icon: FolderKanban,
    color: "from-primary to-accent",
    items: ["MS Project", "Scrum", "Merise", "PERT", "Gantt", "RACI"],
  },
  {
    fr: "Systèmes & Réseaux",
    en: "Systems & Networks",
    icon: Server,
    color: "from-secondary to-accent",
    items: ["Windows", "Linux (Ubuntu, Debian, Kali)", "Déploiement réseau"],
  },
  {
    fr: "Monitoring & Évaluation",
    en: "Monitoring & Evaluation",
    icon: ClipboardCheck,
    color: "from-orange to-secondary",
    items: ["KoboToolbox", "Google Forms", "ActivityInfo"],
  },
  {
    fr: "Outils",
    en: "Tools",
    icon: Wrench,
    color: "from-primary to-orange",
    items: ["Git/GitHub", "Office 365"],
  },
];

const softSkills = [
  { fr: "Travail en équipe", en: "Teamwork" },
  { fr: "Communication", en: "Communication" },
  { fr: "Résolution de problèmes", en: "Problem solving" },
  { fr: "Gestion du temps", en: "Time management" },
  { fr: "Leadership", en: "Leadership" },
  { fr: "Adaptabilité", en: "Adaptability" },
  { fr: "Créativité", en: "Creativity" },
  { fr: "Autonomie", en: "Autonomy" },
];

const Skills = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4" ref={ref}>
        <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-2">
            {t("Compétences", "Skills")}
          </h2>
          <div className="w-20 h-1 gradient-bg rounded-full mx-auto mb-12" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {categories.map((cat, idx) => {
              const Icon = cat.icon;
              return (
                <div
                  key={cat.en}
                  className="glass-card rounded-xl p-5 hover:scale-[1.02] transition-transform duration-300"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${cat.color} flex items-center justify-center`}>
                      <Icon className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <h3 className="font-display font-semibold">{t(cat.fr, cat.en)}</h3>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.items.map((item) => (
                      <span
                        key={item}
                        className="px-2.5 py-1 rounded-md text-xs font-medium bg-muted text-muted-foreground"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Soft Skills */}
          <div className="mt-12 text-center">
            <h3 className="font-display font-semibold text-lg mb-4 flex items-center justify-center gap-2">
              <Sparkles className="h-5 w-5 text-accent" />
              Soft Skills
            </h3>
            <div className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto">
              {softSkills.map((skill) => (
                <span
                  key={skill.en}
                  className="px-4 py-2 rounded-full text-sm font-medium gradient-bg text-primary-foreground"
                >
                  {t(skill.fr, skill.en)}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
