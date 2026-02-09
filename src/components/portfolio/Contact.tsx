import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Mail, MapPin, Send, Linkedin, Github, Facebook, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mailto fallback
    const subject = encodeURIComponent(`Message de ${form.name}`);
    const body = encodeURIComponent(`De: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.open(`mailto:elongaasumanig@gmail.com?subject=${subject}&body=${body}`);
    toast({
      title: t("Message envoyé !", "Message sent!"),
      description: t(
        "Votre client mail s'est ouvert avec votre message.",
        "Your mail client has opened with your message."
      ),
    });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4" ref={ref}>
        <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-2">
            {t("Me contacter", "Contact me")}
          </h2>
          <div className="w-20 h-1 gradient-bg rounded-full mx-auto mb-12" />

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
            {/* Info */}
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                {t(
                  "N'hésitez pas à me contacter pour discuter de vos projets ou pour toute opportunité de collaboration.",
                  "Feel free to reach out to discuss your projects or any collaboration opportunity."
                )}
              </p>

              <div className="space-y-4">
                <a
                  href="mailto:elongaasumanig@gmail.com"
                  className="flex items-center gap-3 group text-foreground"
                >
                  <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <span className="text-sm">elongaasumanig@gmail.com</span>
                </a>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg gradient-accent-bg flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-accent-foreground" />
                  </div>
                  <span className="text-sm text-muted-foreground">Kalemie, RDC</span>
                </div>
              </div>

              {/* Social */}
              <div className="flex gap-3 pt-4">
                <a
                  href="cd.linkedin.com/in/elonga-asumani-grace-53a38b249"
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a
                  href="https://github.com/elonga-asumani-grace"
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-foreground hover:text-background hover:border-foreground transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="h-4 w-4" />
                </a>
                <a
                  href="https://www.facebook.com/elongaasumani.grace?locale=fr_FR"
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-foreground hover:text-background hover:border-foreground transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-4 w-4" />
                </a>
                <a
                  href="https://wa.me/243829795146?text=Bonjour%20Grace%2C%20je%20souhaiterais%20vous%20contacter%20pour%20discuter%20d'une%20opportunité%20de%20collaboration."
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-foreground hover:text-background hover:border-foreground transition-colors"
                  aria-label="Whatsapp"
                >
                  <PhoneCall className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="glass-card rounded-xl p-6 space-y-4">
              <div>
                <Label htmlFor="name">{t("Nom complet", "Full name")}</Label>
                <Input
                  id="name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="mt-1.5"
                  placeholder={t("Votre nom", "Your name")}
                />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="mt-1.5"
                  placeholder={t("votre@email.com", "your@email.com")}
                />
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="mt-1.5 resize-none"
                  placeholder={t("Votre message...", "Your message...")}
                />
              </div>
              <Button type="submit" className="w-full rounded-full gradient-bg text-primary-foreground gap-2">
                <Send className="h-4 w-4" />
                {t("Envoyer", "Send")}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
