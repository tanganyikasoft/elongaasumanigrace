import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { GraduationCap, Award } from "lucide-react";

const Education = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4" ref={ref}>
        <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-2">
            {t("Formation", "Education")}
          </h2>
          <div className="w-20 h-1 gradient-bg rounded-full mx-auto mb-12" />

          <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-8">
            {/* Academic */}
            <div className="glass-card rounded-xl p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center">
                  <GraduationCap className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-display font-semibold text-lg">
                  {t("Parcours académique", "Academic Background")}
                </h3>
              </div>
              <div className="space-y-4">
                <div className="border-l-2 border-primary/30 pl-4">
                  <h4 className="font-semibold text-sm">
                    {t("Licence en Informatique de Gestion", "Bachelor's in Management Information Systems")}
                  </h4>
                  <p className="text-primary text-sm font-medium">
                    Institut Supérieur de Commerce (ISC)
                  </p>
                  <p className="text-muted-foreground text-xs">Lubumbashi, RDC</p>
                </div>
                <div className="border-l-2 border-secondary/30 pl-4">
                  <h4 className="font-semibold text-sm">
                    {t("Diplôme d'État", "State Diploma")}
                  </h4>
                  <p className="text-secondary text-sm font-medium">
                    {t("Section Pédagogique", "Pedagogy Section")}
                  </p>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="glass-card rounded-xl p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl gradient-accent-bg flex items-center justify-center">
                  <Award className="h-6 w-6 text-accent-foreground" />
                </div>
                <h3 className="font-display font-semibold text-lg">
                  {t("Formations professionnelles", "Professional Training")}
                </h3>
              </div>
              <div className="space-y-4">
                <div className="border-l-2 border-accent/30 pl-4">
                  <h4 className="font-semibold text-sm">
                    {t(
                      "Protection de l'enfant dans l'action humanitaire",
                      "Child Protection in Humanitarian Action"
                    )}
                  </h4>
                  <p className="text-accent text-sm font-medium">
                    Caritas Développement
                  </p>
                  <p className="text-muted-foreground text-xs">
                    {t("Juin 2025", "June 2025")}
                  </p>
                </div>
                <div className="border-l-2 border-orange/30 pl-4">
                  <h4 className="font-semibold text-sm">
                    {t(
                      "Cohésion sociale, conflits et approche 3B",
                      "Social Cohesion, Conflicts and 3B Approach"
                    )}
                  </h4>
                  <p className="text-orange text-sm font-medium">
                    Caritas Développement
                  </p>
                  <p className="text-muted-foreground text-xs">
                    {t("Septembre 2025", "September 2025")}
                  </p>
                </div>
                <div className="border-l-2 border-orange/30 pl-4">
                  <h4 className="font-semibold text-sm">
                    {t(
                      "Cartographie numérique avec QGIS, google earth et open street map",
                      "Digital mapping using QGIS, Google Earth and OpenStreetMap"
                    )}
                  </h4>
                  <p className="text-orange text-sm font-medium">
                    Caritas Développement
                  </p>
                  <p className="text-muted-foreground text-xs">
                    {t("Janvier 2026", "January 2026")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
