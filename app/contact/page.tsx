import type { Metadata } from "next";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Gopal Dahale — Frontend Developer. Available for freelance and full-time opportunities.",
};

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "gopaldahale77@gmail.com",
    href: "mailto:gopaldahale77@gmail.com",
    color: "text-accent-cyan",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9834020411",
    href: "tel:+919834020411",
    color: "text-primary-light",
    bg: "bg-primary/10",
    border: "border-primary/20",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Pune, Maharashtra, India",
    href: "#",
    color: "text-accent-pink",
    bg: "bg-pink-500/10",
    border: "border-pink-500/20",
  },
];

const socials = [
  {
    label: "GitHub",
    href: "https://github.com",
    icon: Github,
    description: "Check out my code",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: Linkedin,
    description: "Connect professionally",
  },
  {
    label: "Email",
    href: "mailto:gopaldahale77@gmail.com",
    icon: Mail,
    description: "Drop me a message",
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-24 pb-32">
      {/* Header */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 text-center mb-16">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-64 rounded-full opacity-8 blur-[80px] bg-primary pointer-events-none" />
        <span className="section-label">Say Hello</span>
        <h1
          className="section-title text-5xl sm:text-6xl text-white mt-3"
          style={{ fontFamily: "var(--font-bricolage)" }}
        >
          Get in <span className="gradient-text">Touch</span>
        </h1>
        <p className="mt-4 text-white/50 max-w-md mx-auto text-lg">
          Open to freelance projects and full-time roles. Let's discuss what
          we can build together.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left sidebar */}
          <div className="lg:col-span-2 space-y-6">
            {/* Contact info cards */}
            <div className="space-y-3">
              {contactInfo.map(({ icon: Icon, label, value, href, color, bg, border }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-center gap-4 p-4 glass rounded-xl border border-white/8 hover:border-white/15 transition-all duration-200 glass-hover group"
                >
                  <div className={`p-2.5 rounded-lg ${bg} border ${border} flex-shrink-0`}>
                    <Icon className={`w-4 h-4 ${color}`} />
                  </div>
                  <div>
                    <p className="text-xs text-white/30 uppercase tracking-wider" style={{ fontFamily: "var(--font-jetbrains)" }}>
                      {label}
                    </p>
                    <p className="text-sm text-white/70 group-hover:text-white transition-colors mt-0.5">
                      {value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social links */}
            <div className="glass rounded-2xl border border-white/8 p-6">
              <h3
                className="font-bold text-white mb-5"
                style={{ fontFamily: "var(--font-bricolage)" }}
              >
                Find me online
              </h3>
              <div className="space-y-3">
                {socials.map(({ label, href, icon: Icon, description }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("mailto:") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-white/50 hover:text-white transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-medium">{label}</div>
                      <div className="text-xs text-white/30">{description}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability badge */}
            <div className="glass rounded-xl border border-green-500/20 p-4 flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
              <div>
                <p className="text-sm font-medium text-white/80">Available for work</p>
                <p className="text-xs text-white/40 mt-0.5">
                  Open to freelance & full-time roles
                </p>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
