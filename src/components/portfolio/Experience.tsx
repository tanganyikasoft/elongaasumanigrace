import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ChevronDown, Briefcase, Calendar } from "lucide-react";

interface Experience {
  titleFr: string;
  titleEn: string;
  company: string;
  periodFr: string;
  periodEn: string;
  descFr: string[];
  descEn: string[];
}

const experiences: Experience[] = [
  {
    titleFr: "Gérant de société",
    titleEn: "Managing Director",
    company: "Tanganyika Soft SARL",
    periodFr: "Nov 2025 – today 2026",
    periodEn: "Nov 2025 – toDay 2026",
    descFr: [
      "Gestion stratégique et opérationnelle",
      "Gestion financière et administrative",
      "Management des équipes",
      "Développement commercial et partenariats",
    ],
    descEn: [
      "Strategic and Operational Management",
      "Financial and Administrative Management",
      "Team Leadership and Human Resources Management",
      "Business Development and Partnerships",
      "Company Representation and Decision-Making",
      "Représentation et prise de décisions",
    ],
  },
  {
    titleFr: "Consultant Superviseur",
    titleEn: "Supervisor Consultant",
    company: "Caritas Développement Kalemie-Kirungu",
    periodFr: "Oct – Nov 2025",
    periodEn: "Oct – Nov 2025",
    descFr: [
      "Supervision des activités de collecte de données sur le terrain",
      "Formation et encadrement des enquêteurs",
      "Contrôle qualité des données collectées",
      "Rédaction de rapports de supervision",
    ],
    descEn: [
      "Supervision of field data collection activities",
      "Training and mentoring of surveyors",
      "Quality control of collected data",
      "Writing supervision reports",
    ],
  },
  {
    titleFr: "Data Manager",
    titleEn: "Data Manager",
    company: "Caritas Développement – Projet SBC",
    periodFr: "Mai – Sep 2025",
    periodEn: "May – Sep 2025",
    descFr: [
      "Gestion des bases de données du projet SBC",
      "Conception et déploiement des outils de collecte (KoboToolbox)",
      "Analyse des données et production de tableaux de bord (Power BI)",
      "Formation du personnel sur les outils de collecte de données",
    ],
    descEn: [
      "Management of SBC project databases",
      "Design and deployment of data collection tools (KoboToolbox)",
      "Data analysis and dashboard production (Power BI)",
      "Staff training on data collection tools",
    ],
  },
  {
    titleFr: "Chargé des bases de données et IT",
    titleEn: "Database & IT Manager",
    company: "Lumière Voltaïque",
    periodFr: "Déc 2024",
    periodEn: "Dec 2024",
    descFr: [
      "Administration et maintenance des bases de données",
      "Support technique et résolution des problèmes IT",
      "Mise en place de solutions de sauvegarde",
    ],
    descEn: [
      "Database administration and maintenance",
      "Technical support and IT troubleshooting",
      "Implementation of backup solutions",
    ],
  },
  {
    titleFr: "Associé & Chef de projet technique",
    titleEn: "Associate & Technical Project Manager",
    company: "AZERTY Corporation",
    periodFr: "Jan – Déc 2024",
    periodEn: "Jan – Dec 2024",
    descFr: [
      "Gestion de projets de développement d'applications web et mobiles",
      "Coordination d'équipes techniques",
      "Conception d'architectures logicielles",
      "Développement d'applications avec Flutter, Laravel et PHP",
    ],
    descEn: [
      "Management of web and mobile application development projects",
      "Technical team coordination",
      "Software architecture design",
      "Application development with Flutter, Laravel, and PHP",
    ],
  },
  {
    titleFr: "Stagiaire formateur en informatique",
    titleEn: "IT Training Intern",
    company: "GMT Center",
    periodFr: "Août – Sep 2023",
    periodEn: "Aug – Sep 2023",
    descFr: [
      "Formation des apprenants en bureautique et informatique de base",
      "Assistance technique aux utilisateurs",
      "Préparation de supports de formation",
    ],
    descEn: [
      "Training learners in office software and basic computing",
      "Technical user assistance",
      "Preparation of training materials",
    ],
  },
];

const ExperienceSection = () => {
  const { t, lang } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4" ref={ref}>
        <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-2">
            {t("Expériences professionnelles", "Professional Experience")}
          </h2>
          <div className="w-20 h-1 gradient-bg rounded-full mx-auto mb-12" />

          <div className="max-w-3xl mx-auto relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 gradient-bg hidden md:block" />

            <div className="space-y-6">
              {experiences.map((exp, idx) => {
                const isOpen = openIdx === idx;
                return (
                  <div key={idx} className="relative md:pl-16">
                    {/* Timeline dot */}
                    <div className="absolute left-4 top-5 w-4 h-4 rounded-full gradient-bg border-4 border-background hidden md:block" />

                    <div
                      className="glass-card rounded-xl overflow-hidden cursor-pointer"
                      onClick={() => setOpenIdx(isOpen ? null : idx)}
                    >
                      <div className="p-5 flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <h3 className="font-display font-semibold text-lg">
                            {lang === "fr" ? exp.titleFr : exp.titleEn}
                          </h3>
                          <p className="text-primary font-medium text-sm flex items-center gap-1.5 mt-1">
                            <Briefcase className="h-3.5 w-3.5" />
                            {exp.company}
                          </p>
                          <p className="text-muted-foreground text-sm flex items-center gap-1.5 mt-1">
                            <Calendar className="h-3.5 w-3.5" />
                            {lang === "fr" ? exp.periodFr : exp.periodEn}
                          </p>
                        </div>
                        <ChevronDown
                          className={`h-5 w-5 text-muted-foreground shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                        />
                      </div>

                      {isOpen && (
                        <div className="px-5 pb-5 animate-fade-up">
                          <ul className="space-y-2">
                            {(lang === "fr" ? exp.descFr : exp.descEn).map((d, i) => (
                              <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full gradient-bg shrink-0 mt-1.5" />
                                {d}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
